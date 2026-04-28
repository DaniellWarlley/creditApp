import { GlobalStyle } from "../assets/global"
import { styled } from 'styled-components'
import { Outlet } from "react-router-dom"
import NavItem from "../components/NavItem"
import { IoMdPeople, IoIosLogOut  } from "react-icons/io"
import { FaChartLine, FaScrewdriver, FaArrowRightArrowLeft, FaBars, FaMagnifyingGlass } from "react-icons/fa6"
import useLogOut from "../hooks/useLogOut"

const Main = styled.main`
    height: 100vh;
    width: 100vw;

    display: flex;
`
const SideMenu = styled.aside`
    width: 17%;
    height: 100%;

    display: flex;
    align-items: center;
    flex-direction: column;

    background-color: #1E1E1E;
`

const Title = styled.header`
    
    h1{
        margin: 10px;
        padding: 5px 15px;

        color: #E5E7EB;
        border-bottom: 2px solid #f72c25;
    }
    span{
        color: #f72c25;
    }
`

const Content = styled.section`
    margin: 10px;    

    flex: 1;
`

const LogOutButton = styled.button`
    margin-top: auto;
    margin-bottom: 10px;
    padding: 10px;

    width: 90%;

    display: flex;
    justify-content: center;
    align-items: center;

    background-color: transparent;
    color: #f72c25;
    border: 2px solid #f72c25;
    border-radius: 3px;

    gap: 10px;
    cursor: pointer;
    transition: all ease 0.3s;

    &:hover{
        background-color: #f72c25;
        color: #fff;
    }
`

export default function Home(){
    const logOut = useLogOut()

    return(
        <Main>
            <GlobalStyle/>
            <SideMenu>
                <Title>
                    <h1>Credit<span>App</span></h1>
                </Title>
                <NavItem to='DashBoard' text='DashBoard' icon={FaChartLine}/>
                <NavItem to='Clientes' text='Clientes' icon={IoMdPeople}/>
                <NavItem to='Serviços' text='Serviços' icon={FaScrewdriver }/>
                <NavItem to='Movimentações' text='Movimentacões' icon={FaArrowRightArrowLeft }/>
                <NavItem to='Equipe' text='Equipe' icon={FaBars }/>
                <LogOutButton onClick={logOut}>
                    <IoIosLogOut/>
                    Sair
                </LogOutButton>
            </SideMenu>
            <Content>
                <Outlet/>
            </Content>
        </Main>
    )
}