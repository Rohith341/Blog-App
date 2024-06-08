import React from "react";
import { NavLink } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { resetState } from "../redux/slices/userAuthorSlice";
import styled from "styled-components";

const NavbarContainer = styled.nav`
  background-color: var(--light-olive);
  font-size: 1.25rem;
  padding: 10px 0; /* Added padding */
`;

const Brand = styled.a``;

const TogglerButton = styled.button``;

const NavbarCollapse = styled.div``;

const NavbarList = styled.ul`
  display: flex;
  list-style: none;
  margin-left: auto;
  margin-bottom: 0;
  padding-left: 0;
`;

const NavbarItem = styled.li`
  margin-left: 1rem;
`;

const NavbarLink = styled(NavLink)`
  color: white;

  &.active {
    color: var(--light-grey);
  }
`;

const UsernameSpan = styled.span`
  color: yellow;
  font-weight: bold;
  font-size: 1.3rem;
  text-transform: capitalize;
  font-family: fantasy;
`;

const UserTypeSup = styled.sup`
  color: var(--dark-green);
  font-size: 1rem;
`;

function Navbar() {
  const { loginUserStatus, currentUser } = useSelector(
    (state) => state.userAuthoruserAuthorLoginReducer
  );
  const dispatch = useDispatch();

  function signout() {
    dispatch(resetState());
  }

  return (
    <NavbarContainer className="navbar navbar-expand-sm">
      <div className="container-fluid">
        <Brand className="navbar-brand" href="#"></Brand>
        <TogglerButton
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
        >
          <span className="navbar-toggler-icon"></span>
        </TogglerButton>
        <NavbarCollapse className="collapse navbar-collapse" id="navbarSupportedContent">
          <NavbarList className="navbar-nav ms-auto mb-2 mb-lg-0">
            {loginUserStatus === false ? (
              <>
                <NavbarItem className="nav-item">
                  <NavbarLink className="nav-link" to="Home">
                    Home
                  </NavbarLink>
                </NavbarItem>
                <NavbarItem className="nav-item">
                  <NavbarLink className="nav-link" to="signup">
                    SignUp
                  </NavbarLink>
                </NavbarItem>
                <NavbarItem className="nav-item">
                  <NavbarLink className="nav-link" to="signin">
                    SignIn
                  </NavbarLink>
                </NavbarItem>
              </>
            ) : (
              <NavbarItem className="nav-item">
                <NavbarLink className="nav-link" to="signin" onClick={signout}>
                  <UsernameSpan>
                    {currentUser.username}
                    <UserTypeSup>({currentUser.userType})</UserTypeSup>
                  </UsernameSpan>
                  Signout
                </NavbarLink>
              </NavbarItem>
            )}
          </NavbarList>
        </NavbarCollapse>
      </div>
    </NavbarContainer>
  );
}

export default Navbar;
