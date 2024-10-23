import "./Login.css";

import { useForm } from "react-hook-form";

import { Login } from "../../context/Types";
import { useAuth } from "../../context/useAuth";
import { Link } from "react-router-dom";



export const LoginPage = () => {
  const {
    register,
    handleSubmit,
    formState: { errors},
  } = useForm<Login>();

  const { login, errors: loginErrors } = useAuth();

  const onSubmit = handleSubmit(async (data) => {
    login(data);
  });

  return (
    <div className="login-container">
      {loginErrors.length > 0 &&
        loginErrors.map((error, i) => (
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
            El correo electronico es requerido
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
            La contraseña es requerida
          </p>
        )}

        <button type="submit">Login</button>
      </form>

      <p>¿No tienes una cuenta? <br/><Link to="/signup">Registrate</Link></p>
    </div>
  );
};
