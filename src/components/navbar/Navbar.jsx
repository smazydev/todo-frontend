import React from "react";
import { ButtonGroup, StyledButton } from "../styles/Button.styled";
import { StyledNavbar } from "../styles/Navbar.styled";
import { Logo } from "../styles/Logo.styled";
import { useNavigate, useLocation } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();
  const location = useLocation();
  console.log(location);

  const navigateTo = (path) => {
    navigate(path);
  };

  return (
    <StyledNavbar>
      <Logo>Qlu Assessment</Logo>
      <ButtonGroup>
        {(location.pathname === "/signup" || location.pathname === "/") && (
          <StyledButton path={location} onClick={() => navigateTo("/login")}>
            Login
          </StyledButton>
        )}
        {(location.pathname === "/login" || location.pathname === "/") && (
          <StyledButton path={location} onClick={() => navigateTo("/signup")}>
            Register
          </StyledButton>
        )}
        {location.pathname !== "/login" &&
          location.pathname !== "/" &&
          location.pathname !== "/signup" &&
          location.pathname !== "/dashboard" && (
            <StyledButton
              path={location}
              onClick={() => navigateTo("/dashboard")}
            >
              Reports
            </StyledButton>
          )}
        {location.pathname !== "/login" &&
          location.pathname !== "/" &&
          location.pathname !== "/signup" &&
          location.pathname !== "/todos" && (
            <StyledButton path={location} onClick={() => navigateTo("/todos")}>
              Todos
            </StyledButton>
          )}
      </ButtonGroup>
    </StyledNavbar>
  );
};

export default Navbar;
