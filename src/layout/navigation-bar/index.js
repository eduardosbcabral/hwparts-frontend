import React from 'react';
import { Link } from 'react-router-dom';
import { NavbarWrapper, Navbar, Logo, Item, ItemWrapper } from './styles';

function NavigationBar() {
  return (
    <>
      <NavbarWrapper>
        <Navbar>
          <ItemWrapper className="hide-mobile hide-tablet">
            <Item as={Link} to="/">
              Início
            </Item>
            <Item.Dropdown>
              Componentes
              <Item.Dropdown.Icon />
              <Item.Dropdown.Content>
                <Item.Dropdown.Content.Item as={Link} to="/teste">
                  Teste 1
                </Item.Dropdown.Content.Item>
                <Item.Dropdown.Content.Item as={Link} to="/teste">
                  Teste 2
                </Item.Dropdown.Content.Item>
                <Item.Dropdown.Content.Item as={Link} to="/teste">
                  Teste 3
                </Item.Dropdown.Content.Item>
              </Item.Dropdown.Content>
            </Item.Dropdown>
          </ItemWrapper>

          <Logo as={Link} to="/">
            HWParts
          </Logo>

          <ItemWrapper className="hide-mobile hide-tablet">
            <Item.Dropdown>
              Usuário
              <Item.Dropdown.Icon />
              <Item.Dropdown.Content>
                <Item.Dropdown.Content.Item as={Link} to="/teste">
                  Teste 1
                </Item.Dropdown.Content.Item>
              </Item.Dropdown.Content>
            </Item.Dropdown>
          </ItemWrapper>
        </Navbar>
      </NavbarWrapper>
    </>
  );
}

export default NavigationBar;