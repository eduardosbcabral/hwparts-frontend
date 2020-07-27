import React, { useState } from 'react';
import styled from 'styled-components';
import { FaAngleDown, FaRegUser, FaTimes } from 'react-icons/fa';
import { FiCpu, FiMenu } from 'react-icons/fi'; 

const Header = styled.header``;

const Nav = styled.nav``;

const TopNav = styled.section`
    background: #12131e;
    padding: .5rem 0;

    border-bottom: 1px solid #26293C;
`;

const TopNavWrapper = styled.div`
    display: grid;

    align-items: center;

    margin-left: auto;
    margin-right: auto;

    grid-template-columns: 100px 1fr;
`;

const NavLogo = styled.a`
    color: #FCF7F8;
    text-decoration: none;
    font-weight: 600;
    font-size: 1.5rem;

    display: block;
    position: static;
    top: 0;
`;

const TopItemsList = styled.ul`
    text-align: right;
    list-style: none;
    font-size: .75rem;
    display: inline-block;
    margin-top: 0;
    margin-bottom: 0;
`;

const TopItemList = styled.li.attrs(props => ({
    display: props.hide ? 'none' : 'inline-block',
}))`
    display: ${props => props.display};
`;

const TopItemLink = styled.a.attrs(props => ({
    borderSize: props.last ? '0' : '1px',
}))`
    border-right: ${props => props.borderSize} solid #26293C;
    
    padding: 0 .5rem;
    text-decoration: none;
    color: #FCF7F8;

    :hover {
        color: #eda920;
        text-decoration: none;
    }
`;

const TopMobileItemLink = styled.a`
    display: block;
    margin-left: 1.25rem;
    color: #FCF7F8;
`;

const BottomNav = styled.section`
    background-color: #191b2b;
`;

const BottomNavWrapper = styled.div`
    display: grid;

    align-items: center;

    margin-left: auto;
    margin-right: auto;

    grid-template-column: 1fr auto;
`;

const BottomItemsList = styled.ul.attrs(props => ({
    display: props.menuIsOpened ? 'block' : props.menuBrowseProductsIsOpened ? 'block' : 'inline-block',
    gridTemplateColumns: props.menuBrowseProductsIsOpened ? '1fr 1fr' : '0',
}))`
    list-style: none;
    font-size: .75rem;
    display: ${props => props.display};
    position: inherit;
    text-align: left;
    padding: 0;
    margin: 0;

    grid-template-columns: ${props => props.gridTemplateColumns};
`;

const BottomItemList = styled.li`
    display: inline-block;
`;

const BottomItemLink = styled.a`
    display: inline-block;
    position: relative;
    padding: 1rem 1rem 1rem 3rem;
    text-decoration: none;
    font-size: .875rem;
    font-weight: 700;

    border: 1px solid #26293C;
    border-top: 0;
    border-bottom: 0;
    color: #FCF7F8;

    transition: background-color .45s 
        cubic-bezier(.165,.84,.44,1),
        color .45s cubic-bezier(.165,.84,.44,1);

    :hover {
        background-color: #26293c;
        text-decoration: none;
        color: #FCF7F8;

        svg {  
            color: #eda920;
        }
    }

    svg:last-child {
        ${props => props.isOpened ? `transform: rotate(180deg);` : ''}        
    }

    ${props => props.isOpened ? `
        background-color: #26293c;
        
        svg {  
            color: #eda920;
        }
    ` : ''}
`;

const BrowseProductsDiv = styled.div.attrs(props => ({
    top: props.hide ? '-450px !important;' : props.menuTopHigh ? props.isClosed ? '-1000px !important' : '53px' : '106px',
}))`
    display: ${props => props.display};
    position: fixed;

    background-color: #26293c;
    width: 100%;
    padding: 2rem 0;
    left: 0;
    top: ${props => props.top};
    z-index: -100;
    transition: top .45s cubic-bezier(.165,.84,.44,1);
`;

const StyledFaAngleDown = styled(FaAngleDown)`
    display: inline-block;
    position: relative;
    left: 4px;
    transition: transform .45s cubic-bezier(.165,.84,.44,1);
    transform-origin: 50% 42%;
`

const StyledFiCpu = styled(FiCpu)`
    width: 24px;
    height: 24px;
    position: absolute;
    left: 12px;
    top: 14px;

    color: rgba(255,255,255,.5);
`;

const StyledFiMenu = styled(FiMenu)`
    fill: #FCF7F8;
    width: 20px;
    height: 20px;
`;

const StyledFaRegUser = styled(FaRegUser)`
    fill: #FCF7F8;
    width: 20px;
    height: 20px;
    margin-bottom: 2px;
`;

const StyledFaTimes = styled(FaTimes)`
    fill: #FCF7F8;
    width: 20px;
    height: 20px;
    margin-bottom: 2px;
`;

const BrowseProductsWrapper = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-column-gap: 2rem;
`;

const BrowseProductsBlockGroupOne = styled.div`
    display: block;
    width: auto;
    vertical-align: inherit;
`;

const BrowseProductsBlockGroupTwo = styled.div`
    vertical-align: inherit;
    width: auto;
    display: grid;
    grid-template-columns: repeat(auto-fit,minmax(100px,1fr));
    grid-gap: 1.5rem;
    text-align: left;
`;

const BrowseProductsLeftList = styled.ul`
    display: grid;
    grid-template-columns: repeat(4,1fr);
    margin-left: 0;
    padding-left: 0;
    list-style: none;
    grid-gap: .5rem;

    li {
        width: auto;
        vertical-align: inherit;
        display: block;
    }
`;

const BrowseProductsLeftListItem = styled.a`
    background-color: #323549;
    box-shadow: inset 0 0 0 1px #3e4257;
    display: block;
    text-align: center;
    padding: .5rem;
    transition: box-shadow .45s cubic-bezier(.165,.84,.44,1),background-color .45s cubic-bezier(.165,.84,.44,1);
    font-weight: 700;
    text-decoration: none;
    color: #fff;
    font-size: .75rem;
    height: 100%;

    :hover {
        color: #fff;
        background-color: rgba(237,169,32,.15);
        box-shadow: inset 0 0 0 2px #eda920;
        text-decoration: none;
    }

    img {
        display: block;
        margin: 0 auto .5rem;
        min-width: 64px;
        max-width: 100px;
        width: 100%;
        height: auto;
    }
`;

const TopMobileItemsList = styled.ul.attrs(props => ({
    display: props.accountMenuIsOpened ? 'block' : 'none',
}))`
    display: ${props => props.display};
    font-size: 1.25rem;
    background-color: #191b2b;
    width: 100vw;
    opacity: 1;
    top: 45px;
    right: 0;
    bottom: 0;
    left: 0;
    height: calc(100vh - 45px);
    overflow-y: scroll;
    z-index: 200;
    padding: 2rem;
    margin-left: -15px;
    margin-top: 7px;
`;

const TopMobileItemList = styled.li`
    display: block;
`;

const TopMobileItemListLink = styled.a`
    color: #fff;
    border-color: #26293c;
    display: block;
    padding: .5rem 0;
    border-bottom-style: solid;
    border-bottom-width: 1px;
    text-decoration: none;

    :hover {
        text-decoration: none;
        color: #FCF7F8;
        color: #eda920;
    }
`;

function NavigationBar() {

    const [menuIsOpened, setmenuIsOpened] = useState(false);
    const [menuBrowseProductsIsOpened, setMenuBrowseProductsIsOpened] = useState(false);
    const [accountMenuIsOpened, setAccountMenuIsOpened] = useState(false);

    const toggleMenu = () =>  {
        setmenuIsOpened(!menuIsOpened)
        setMenuBrowseProductsIsOpened(false);
    }
    const toggleMenuBrowseProducts = () => {
        setMenuBrowseProductsIsOpened(!menuBrowseProductsIsOpened);
        setmenuIsOpened(false);
    }

    const toggleAccountMenu = () => {
        setAccountMenuIsOpened(!accountMenuIsOpened);
    }

    return (
        <Header>
            <Nav>
                <TopNav>
                    <TopNavWrapper className="col-xs-11 col-lg-11 col-xl-9 mx-auto">
                        <NavLogo href="">
                            HWParts
                        </NavLogo>
                        <TopItemsList className="d-none d-lg-block">
                            <TopItemList>
                                <TopItemLink href="/account/login">
                                    Entrar
                                </TopItemLink>
                            </TopItemList>
                            <TopItemList>
                                <TopItemLink last="true" href="/account/register">
                                    Cadastrar
                                </TopItemLink>
                            </TopItemList>
                        </TopItemsList>
                        <TopItemsList className="d-lg-none d-xl-none">
                            <TopItemList onClick={toggleAccountMenu} hide={accountMenuIsOpened || menuIsOpened}>
                                <TopMobileItemLink href="#">
                                    <StyledFaRegUser />
                                </TopMobileItemLink>
                            </TopItemList>
                            <TopItemList onClick={toggleAccountMenu} hide={!accountMenuIsOpened}>
                                <TopMobileItemLink href="#">
                                    <StyledFaTimes />
                                </TopMobileItemLink>
                            </TopItemList>
                            <TopItemList onClick={toggleMenu} hide={accountMenuIsOpened || menuIsOpened}>
                                <TopMobileItemLink href="#">
                                    <StyledFiMenu />
                                </TopMobileItemLink>
                            </TopItemList>
                            <TopItemList onClick={toggleMenu} hide={!menuIsOpened}>
                                <TopMobileItemLink href="#">
                                    <StyledFaTimes />
                                </TopMobileItemLink>
                            </TopItemList>
                        </TopItemsList>
                        <TopMobileItemsList className="d-lg-none d-xl-none" accountMenuIsOpened={accountMenuIsOpened}>
                            <TopMobileItemList>
                                <TopMobileItemListLink href="#">
                                    Entrar
                                </TopMobileItemListLink>
                            </TopMobileItemList>
                            <TopMobileItemList>
                                <TopMobileItemListLink href="#">
                                    Cadastrar
                                </TopMobileItemListLink>
                            </TopMobileItemList>
                        </TopMobileItemsList>
                    </TopNavWrapper>
                </TopNav>
                <BottomNav>
                    <BottomNavWrapper className="col-xs-11 col-lg-11 col-xl-9 xs-mx-auto">
                        <BottomItemsList className="d-none d-lg-block" menuBrowseProductsIsOpened={menuBrowseProductsIsOpened}>
                            <BottomItemList>
                                <BottomItemLink href="#" onClick={toggleMenuBrowseProducts} isOpened={menuBrowseProductsIsOpened} >
                                    <StyledFiCpu />
                                    Componentes
                                    <StyledFaAngleDown />
                                </BottomItemLink>
                            </BottomItemList>
                            <BottomItemList>
                                <BrowseProductsDiv hide={!menuBrowseProductsIsOpened} menuTopHigh={false}>
                                    <BrowseProductsWrapper className="col-xs-10 col-sm-11 col-lg-11 col-xl-9 mx-auto">
                                        <BrowseProductsBlockGroupOne>
                                            <BrowseProductsLeftList>
                                                <li>
                                                    <BrowseProductsLeftListItem href="">
                                                        <img src="//cdn.pcpartpicker.com/static/forever/img/nav-cpu.png" alt="Processador" />
                                                        Processador
                                                    </BrowseProductsLeftListItem>
                                                </li>
                                                <li>
                                                    <BrowseProductsLeftListItem href="">
                                                        <img src="//cdn.pcpartpicker.com/static/forever/img/nav-motherboard.png" alt="Placa-Mãe" />
                                                        Placa-Mãe
                                                    </BrowseProductsLeftListItem>
                                                </li>
                                                <li>
                                                    <BrowseProductsLeftListItem href="">
                                                        <img src="//cdn.pcpartpicker.com/static/forever/img/nav-memory.png" alt="Memória RAM" />
                                                        Memória RAM
                                                    </BrowseProductsLeftListItem>
                                                </li>
                                                <li>
                                                    <BrowseProductsLeftListItem href="">
                                                        <img src="//cdn.pcpartpicker.com/static/forever/img/nav-ssd.png" alt="Storage" />
                                                        Storage
                                                    </BrowseProductsLeftListItem>
                                                </li>
                                                <li>
                                                    <BrowseProductsLeftListItem href="">
                                                        <img src="//cdn.pcpartpicker.com/static/forever/img/nav-videocard.png" alt="Placa de Vídeo" />Placa de Vídeo
                                                    </BrowseProductsLeftListItem>
                                                </li>
                                                <li>
                                                    <BrowseProductsLeftListItem href="">
                                                        <img src="//cdn.pcpartpicker.com/static/forever/img/nav-powersupply.png" alt="Fonte" />
                                                        Fonte
                                                    </BrowseProductsLeftListItem>
                                                </li>
                                                <li>
                                                    <BrowseProductsLeftListItem href="">
                                                        <img src="//cdn.pcpartpicker.com/static/forever/img/nav-case.png" alt="Gabinete" />
                                                            Gabinete
                                                    </BrowseProductsLeftListItem>
                                                </li>
                                            </BrowseProductsLeftList>
                                        </BrowseProductsBlockGroupOne>
                                        <BrowseProductsBlockGroupTwo>
                                        </BrowseProductsBlockGroupTwo>
                                    </BrowseProductsWrapper>
                                </BrowseProductsDiv>
                            </BottomItemList>
                        </BottomItemsList>
                        <BrowseProductsDiv isClosed={!menuIsOpened} menuTopHigh={true}>
                            <BrowseProductsWrapper className="col-xs-10 col-sm-11 col-lg-11 col-xl-9 mx-auto">
                                <BrowseProductsBlockGroupOne>
                                    <BrowseProductsLeftList>
                                        <li>
                                            <BrowseProductsLeftListItem href="">
                                                <img src="//cdn.pcpartpicker.com/static/forever/img/nav-cpu.png" alt="Processador" />
                                                Processador
                                            </BrowseProductsLeftListItem>
                                        </li>
                                        <li>
                                            <BrowseProductsLeftListItem href="">
                                                <img src="//cdn.pcpartpicker.com/static/forever/img/nav-motherboard.png" alt="Placa-Mãe" />
                                                Placa-Mãe
                                            </BrowseProductsLeftListItem>
                                        </li>
                                        <li>
                                            <BrowseProductsLeftListItem href="">
                                                <img src="//cdn.pcpartpicker.com/static/forever/img/nav-memory.png" alt="Memória RAM" />
                                                Memória RAM
                                            </BrowseProductsLeftListItem>
                                        </li>
                                        <li>
                                            <BrowseProductsLeftListItem href="">
                                                <img src="//cdn.pcpartpicker.com/static/forever/img/nav-ssd.png" alt="Storage" />
                                                Storage
                                            </BrowseProductsLeftListItem>
                                        </li>
                                        <li>
                                            <BrowseProductsLeftListItem href="">
                                                <img src="//cdn.pcpartpicker.com/static/forever/img/nav-videocard.png" alt="Placa de Vídeo" />Placa de Vídeo
                                            </BrowseProductsLeftListItem>
                                        </li>
                                        <li>
                                            <BrowseProductsLeftListItem href="">
                                                <img src="//cdn.pcpartpicker.com/static/forever/img/nav-powersupply.png" alt="Fonte" />
                                                Fonte
                                            </BrowseProductsLeftListItem>
                                        </li>
                                        <li>
                                            <BrowseProductsLeftListItem href="">
                                                <img src="//cdn.pcpartpicker.com/static/forever/img/nav-case.png" alt="Gabinete" />
                                                    Gabinete
                                            </BrowseProductsLeftListItem>
                                        </li>
                                    </BrowseProductsLeftList>
                                </BrowseProductsBlockGroupOne>
                                <BrowseProductsBlockGroupTwo>
                                </BrowseProductsBlockGroupTwo>
                            </BrowseProductsWrapper>
                        </BrowseProductsDiv>
                    </BottomNavWrapper>
                </BottomNav>
            </Nav>
        </Header>
    );
}

export default NavigationBar;