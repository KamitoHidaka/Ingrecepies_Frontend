import "./Dropdown.css";
import { Link } from "react-router-dom";
import { useState, useEffect, useRef } from "react";
import { useAuth } from "../../../context/auth/useAuth";
import { CustomButton } from "../customButton/CustomButton";
export const Dropdown = () => {

  const { logout, isAuthenticated } = useAuth();

  const [open, setOpen] = useState<boolean>(false); 

  const dropdownRef = useRef<HTMLDivElement>(null); 

  const toggleOpen = () => setOpen((prev) => !prev);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setOpen(false);
      }
    };
    document.addEventListener("click", handleClickOutside);
  }, []);


  const handleContentClick = (event: React.MouseEvent<HTMLDivElement>) => {
    const target = event.target as HTMLElement;

    if (target.tagName === "A" || target.closest("a")) {
      setOpen(false); 
    }
  };

  return (
    <div className="dropdown-container" ref={dropdownRef}>
      <CustomButton ClassName="dropdown-button" OnClick={toggleOpen}>
      </CustomButton>

      {open && (
        <div className="dropdown-content" onClick={handleContentClick}>
          {isAuthenticated ? (
            <>
              <Link className="dropdown-item first" to="/home">Inicio</Link>
              <Link className="dropdown-item" to="/profile">Perfil</Link>
              <Link className="dropdown-item" to="/recipe-creator">Crear Receta</Link>
              <Link className="dropdown-item" to="/my-recipes">Mis Recetas</Link>
              <Link className="dropdown-item last logout" to="/home" onClick={() => logout()}>Cerrar Sesión</Link>
            </>
          ) : (
            <>
              <Link className="dropdown-item first" to="/home">Inicio</Link>
              <Link className="dropdown-item" to="/login">Iniciar Sesión</Link>
              <Link className="dropdown-item last" to="/signup">Regístrate</Link>
            </>
          )}
        </div>
      )}
    </div>
  );
};
