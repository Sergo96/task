import React, { useState, useEffect } from 'react';
import axios from 'axios';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
  const [catCategories, setCatCategories] = useState([]);

  //   console.log(catCategories);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get(`https://api.thecatapi.com/v1/categories`);
        setCatCategories(res.data);
      } catch (err) {}
    };
    fetchData();
  }, []);

  return (
    <>
      <NavbarContainer>
        <NavBar>
          {catCategories.map((category) => (
            <StyledLink activeClassName='active' to={`/catInfo/${category.id}`}>
              <NavBarOption>{category.name}</NavBarOption>
            </StyledLink>
          ))}
        </NavBar>
      </NavbarContainer>
    </>
  );
};

const NavbarContainer = styled.div`
  width: 100%;
  margin: auto;
  height: 80px;
  background-color: black;
`;

const NavBar = styled.div`
  display: flex;
  max-width: 1300px;
  width: 90%;
  margin: 0 auto;
  height: inherit;
  align-items: center;
  justify-content: space-between;
`;

const NavBarOption = styled.h1`
  font-size: 1.5em;
  color: white;
  font-size: 15px;
  cursor: pointer;
  text-transform: capitalize;
  &:hover {
    color: yellow;
  }
  @media (max-width: 768px) {
    font-size: 9px;
  }
`;

// style for active navlink
export const StyledLink = styled(NavLink)`
  color: white;

  &.${(props) => props.activeClassName} {
    color: red;
  }
`;

export default Navbar;
