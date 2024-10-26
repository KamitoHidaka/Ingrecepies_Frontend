import "./SignUp.css";

import { Link, useNavigate } from "react-router-dom";

import { useForm } from "react-hook-form";
import { useEffect } from "react";

import { User } from "../../context/Types.ts";
import { useAuth } from "../../context/useAuth.ts";
import { FormAlert } from "../../components/common/FormAlert/FormAlert";
import { CustomInput } from "../../components/common/textInput/CustomInput";
import { CustomButton } from "../../components/common/customButton/CustomButton";

export const SignUpPage = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<User>();

  const { signUp, isAuthenticated, errors: signUpErrors } = useAuth();

  const navigate = useNavigate();

  useEffect(() => {
    if (isAuthenticated) navigate("/");
  }, [isAuthenticated, navigate]);

  const onSubmit = handleSubmit(async (data) => {
    signUp(data);
  });

  return (
    <div className="signup-container">
      <div className="signup-form">
        <h1>Crear Cuenta</h1>

        {signUpErrors.length > 0 &&
          signUpErrors.map((error, i) => <FormAlert key={i} Text={error} />)}

        <form onSubmit={onSubmit}>
          <CustomInput
            Type="text"
            AutoComplete="username"
            Placeholder="Nombre de usuario"
            register={register("userName", { required: true })}
          />
          {errors?.userName?.type === "required" && (
            <FormAlert
              ClassName="form-inline-error"
              Text="Nombre de usuario es requerido"
            />
          )}

          <CustomInput
            Type="email"
            AutoComplete="email"
            Placeholder="Correo Electronico"
            register={register("email", { required: true })}
          />
          {errors?.userName?.type === "required" && (
            <FormAlert
              ClassName="form-inline-error"
              Text="El correo electronico es requerido"
            />
          )}

          <CustomInput
            Type="password"
            AutoComplete="current-password"
            Placeholder="Contraseña"
            register={register("password", { required: true })}
          />
          {errors?.password?.type === "required" && (
            <FormAlert
              ClassName="form-inline-error"
              Text="La contraseña es requerida"
            />
          )}

          <CustomInput
            Type="text"
            AutoComplete="phoneNumber"
            Placeholder="Numero de Celular"
            MaxLenght={10}
            register={register("phoneNumber", { required: true })}
          />

          {errors?.phoneNumber?.type === "required" && (
            <FormAlert
              ClassName="form-inline-error"
              Text="El numero de celular es requerido"
            />
          )}
          <CustomButton Type="submit" Text="Registrarse" />
        </form>

        <p>
          ¿Ya tienes cuenta?{" "}
          <Link style={{ fontWeight: 600 }} to="/login">
            Inicia Sesion
          </Link>
        </p>
      </div>
      <div className="signup-background"></div>
    </div>
  );
};
