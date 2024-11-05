import "./RecipeCreator.css";
import { useContext, useEffect, useState } from "react";

import { useForm, useFieldArray, SubmitHandler } from "react-hook-form";

import { RecipeContextType, Recipe } from "../../context/types/Types";
import RecipeContext from "../../context/recipe/RecipeContext";
import { useCategory } from "../../context/category/useCategory";

import { CustomButton } from "../../components/common/customButton/CustomButton";
import { CustomInput } from "../../components/common/customInput/CustomInput";
import { CustomSelect } from "../../components/common/customSelect/CustomSelect";
import { CustomOption } from "../../components/common/customSelect/CustomOption";

import UploadImage from "../../assets/Upload.svg";
import Trash from "../../assets/trash-can.webp";
import Add from "../../assets/plus.webp";

export const RecipeCreator = () => {
  const { getAllCategories, categories } = useCategory();

  useEffect(() => {
    const fetchCategories = async () => {
      await getAllCategories();
    };
    fetchCategories();
  }, []);

  const { createRecipe, loading, errors } = useContext(
    RecipeContext
  ) as RecipeContextType;

  const { register, control, handleSubmit, reset } = useForm<Recipe>({
    defaultValues: {
      name: "",
      category: "",
      description: "",
      ingredients: [{ ingredientName: "", quantity: "", unit: "" }],
      steps: [{ step: "" }],
    },
  });

  const [imageBase64, setImageBase64] = useState<string>("");

  const {
    fields: ingredientFields,
    append: appendIngredient,
    remove: removeIngredient,
  } = useFieldArray({
    control,
    name: "ingredients",
  });

  const {
    fields: stepFields,
    append: appendStep,
    remove: removeStep,
  } = useFieldArray({
    control,
    name: "steps",
  });

  const onSubmit: SubmitHandler<Recipe> = async (data) => {
    try {
      await createRecipe({ ...data, image: imageBase64 });
      reset();
    } catch (error) {
      console.error("Error creando la receta:", error);
    }
  };

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        const base64String = reader.result?.toString() || "";
        setImageBase64(base64String);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="recipe-creator-container">
      <form onSubmit={handleSubmit(onSubmit)} className="recipe-form-container">
        <label htmlFor="image-input" className="image-label">
          {imageBase64 ? (
            <img
              src={imageBase64}
              alt="Fotos de la receta"
              className="recipe-image"
            />
          ) : (
            <img
              src={UploadImage}
              alt="Sube tu Imagen"
              className="recipe-image"
            />
          )}
        </label>
        <CustomInput
          Id="image-input"
          Type="file"
          Accept=".jpg, .jpeg, .png"
          OnChange={handleImageChange}
        />

        <section className="title-container">
          <CustomInput
            Type="text"
            AutoComplete="text"
            Placeholder="Nombre de la receta"
            ClassName="input-recipe"
            register={register("name", { required: true })}
          />

          <CustomSelect register={register("category", { required: true })}>
            <CustomOption Value="">Categoria</CustomOption>
            {categories.map((category) => (
              <CustomOption key={category._id} Value={category.name}>
                {category.name}
              </CustomOption>
            ))}
          </CustomSelect>
        </section>

        <textarea
          {...register("description")}
          placeholder="Cuentanos de tu receta"
          spellCheck="true"
        />


        <section>
          <h2 className="title">Ingredientes</h2>
          {ingredientFields.map((field, index) => (
            <div key={field.id || index} className="multiple-input">
              <CustomInput
                Type="text"
                Placeholder="Ingrediente"
                ClassName="input-recipe ingredient"
                register={register(`ingredients.${index}.ingredientName`, {
                  required: true,
                })}
              />
              <CustomInput
                Type="number"
                Placeholder="Cant"
                ClassName="input-recipe quantity"
                register={register(`ingredients.${index}.quantity`, {
                  required: true,
                })}
              />
              <CustomSelect
                register={register(`ingredients.${index}.unit`, {
                  required: true,
                })}
              >
                <CustomOption Value="">Medida</CustomOption>
                <CustomOption Value="und">und</CustomOption>
                <CustomOption Value="gr">gr</CustomOption>
                <CustomOption Value="lb">lb</CustomOption>
                <CustomOption Value="kg">kg</CustomOption>
                <CustomOption Value="oz">oz</CustomOption>
                <CustomOption Value="ml">ml</CustomOption>
                <CustomOption Value="l">l</CustomOption>
                <CustomOption Value="tsp">tsp</CustomOption>
                <CustomOption Value="cup">cup</CustomOption>
              </CustomSelect>

              <CustomButton
                Type="button"
                OnClick={() => removeIngredient(index)}
                ClassName="remove"
              >
                <img src={Trash} alt="Eliminar Ingrediente" className="icon" />
              </CustomButton>
            </div>
          ))}

          <CustomButton
            Type="button"
            ClassName="remove add"
            OnClick={() =>
              appendIngredient({ ingredientName: "", quantity: "", unit: "" })
            }
          >
            <img src={Add} alt="Agregar Ingrediente" className="icon" />
          </CustomButton>
        </section>

        <section>
          <h2 className="title">Instrucciones</h2>
          {stepFields.map((field, index) => (
            <div key={field.id || index} className="multiple-input">
              <CustomInput
                Type="text"
                Placeholder={`Paso ${index + 1}`}
                ClassName="input-recipe step"
                register={register(`steps.${index}.step`, { required: true })}
              />
              <CustomButton
                Type="button"
                ClassName="remove"
                OnClick={() => removeStep(index)}
              >
                <img src={Trash} alt="Elimainar Paso" className="icon" />
              </CustomButton>
            </div>
          ))}
          <CustomButton
            Type="button"
            ClassName="remove add"
            OnClick={() => appendStep({ step: "" })}
          >
            <img src={Add} alt="Agregar Paso" className="icon" />
          </CustomButton>

          <CustomButton Type="submit" ClassName="input-recipe submit" Disabled={loading}>
            Crear Receta
          </CustomButton>
        </section>
      </form>
      {errors && errors.length > 0 && (
        <div>
          <p>Errors:</p>
          <ul>
            {errors.map((error, idx) => (
              <li key={idx}>{error}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};
