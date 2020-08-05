import styled from 'styled-components';

import { FaCaretDown } from 'react-icons/fa';

export const NavbarWrapper = styled.nav`
  --bodyPaddingTop: 70px;
  padding-top: var(--bodyPaddingTop);

  border-bottom: 1px solid var(--grayMedium);
`;

export const Navbar = styled.div`
  width: 100%;
  height: var(--bodyPaddingTop);

  padding-left: 15px;
  padding-right: 15px;

  margin-left: auto;
  margin-right: auto;

  display: flex;
  justify-content: space-between;
  align-items: center;
  
  
  position: fixed;
  top: 0;
  left: 0;
  right: 0;

  @media(max-width: 768px) {
    justify-content: center;
  }

  @media(min-width: 1500px) {
    margin-right: auto;
    margin-left: auto;
    max-width: var(--xxl-min);
  }
`;

export const ItemWrapper = styled.div`
  display: flex;
  flex-direction: row;

  height: 100%;
`;

export const Item = styled.div`
  font-size: 1.1rem;
  font-weight: 600;

  display: flex;
  align-items: center;

  height: 100%;
  
  padding-left: 15px;
  padding-right: 15px;

  position: relative;
  z-index: 1;

  &:hover {
    background: var(--grayMedium);
  }
`;

Item.Dropdown = styled(Item)`
  cursor: pointer;

  &:hover {
    svg {
      transform: rotate(90deg);
    }
  }
`;

Item.Dropdown.Content = styled.div`
  background: var(--grayMedium);
  margin-left: -15px;

  position: absolute;
  top: -100px;
  z-index: -10;

  display: flex;
  flex-direction: column;

  width: 100%;

  display: none;

  ${Item.Dropdown}:hover & {
    display: flex;
    top: 69px;
  }
`;

Item.Dropdown.Content.Item = styled.a`
  height: 100%;
  width: 100%;

  font-size: 1rem;
  font-weight: 400;

  padding: 15px;


  &:hover {
    background: var(--gray);
    color: var(--grayLight);
  }
`;

Item.Dropdown.Icon = styled(FaCaretDown)`
  transition: transform .15s;
`;

export const Logo = styled.a`
  font-size: 1.5rem;
  font-weight: 600;
`;
