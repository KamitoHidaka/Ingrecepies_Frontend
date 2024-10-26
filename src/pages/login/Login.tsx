import "./Login.css";
import { Link, useNavigate } from "react-router-dom";

import { useForm } from "react-hook-form";
import { useEffect } from "react";

import { Login } from "../../context/Types.ts";
import { useAuth } from "../../context/useAuth.ts";

import { CustomButton } from "../../components/common/customButton/CustomButton";
import { CustomInput } from "../../components/common/textInput/CustomInput";
import { FormAlert } from "../../components/common/FormAlert/FormAlert";

export const LoginPage = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Login>();

  const { login, isAuthenticated, errors: loginErrors } = useAuth();

  const navigate = useNavigate();

  useEffect(() => {
    if (isAuthenticated) {
      navigate("/");
    }
  }, [isAuthenticated, navigate]);

  const onSubmit = handleSubmit(async (data) => {
    login(data);
  });

  return (
    <div className="login-container">
      <div className="login-form">
        <h1>Iniciar Sesion</h1>

        {loginErrors.length > 0 &&
          loginErrors.map((error, i) => <FormAlert key={i} Text={error} />)}

        <form onSubmit={onSubmit}>
          <CustomInput
            Type="email"
            AutoComplete="email"
            Placeholder="Correo Electronico"
            register={register("email", { required: true })}
          />
          {errors?.email?.type === "required" && (
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
          <CustomButton Text="Iniciar Sesion" Type="submit" />
        </form>

        <p>
          ¿No tienes una cuenta?{" "}
          <Link style={{ fontWeight: 600 }} to="/signup">
            Registrate Aqui
          </Link>
        </p>
      </div>
      <div className="login-background"></div>
    </div>
  );
};
