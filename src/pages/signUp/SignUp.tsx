import "./SignUp.css";

import { useForm } from "react-hook-form";
import { useAuth } from "../../context/useAuth";
import { User } from "../../context/Types";
import { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";

export const SignUpPage = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<User>();

  const { signUp, isAuthenticated, errors: signUpErrors } = useAuth();

  const navigate = useNavigate();

  useEffect(() => {
    if (isAuthenticated) navigate("/recepies");
  }, [isAuthenticated, navigate]);

  const onSubmit = handleSubmit(async (data) => {
    signUp(data);
  });

  return (
    <div className="signup-container">
      {signUpErrors.length > 0 &&
        signUpErrors.map((error, i) => (
          <p
            key={i}
            style={{
              fontSize: "1.5rem",
              color: "red",
              margin: "0",
              padding: "0",
              paddingLeft: "2rem",
            }}
          >
            {error}
          </p>
        ))}

      <form onSubmit={onSubmit}>
        <input
          type="text"
          {...register("userName", { required: true })}
          placeholder="Nombre de usuario"
        />
        {errors?.userName?.type === "required" && (
          <p
            style={{
              fontSize: "1.5rem",
              color: "red",
              margin: "0",
              padding: "0",
              paddingLeft: "2rem",
            }}
          >
            Nombre de usuario es requerido
          </p>
        )}

        <input
          type="email"
          {...register("email", { required: true })}
          placeholder="Correo Electronico"
        />
        {errors?.email?.type === "required" && (
          <p
            style={{
              fontSize: "1.5rem",
              color: "red",
              margin: "0",
              padding: "0",
              paddingLeft: "2rem",
            }}
          >
            Correo electronico es requerido
          </p>
        )}

        <input
          type="password"
          {...register("password", { required: true })}
          placeholder="Contraseña"
        />
        {errors?.password?.type === "required" && (
          <p
            style={{
              fontSize: "1.5rem",
              color: "red",
              margin: "0",
              padding: "0",
              paddingLeft: "2rem",
            }}
          >
            Contraseña es requerida
          </p>
        )}

        <input
          type="text"
          maxLength={10}
          {...register("phoneNumber", { required: false })}
          placeholder="Numero de telefono"
        />

        <button type="submit">Registrarse</button>
      </form>

      <p>¿Ya tienes cuenta? <br/><Link to="/login">Inicia Sesion</Link></p>
    </div>
  );
};
