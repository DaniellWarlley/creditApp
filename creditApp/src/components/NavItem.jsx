import { styled } from 'styled-components'
import { NavLink } from 'react-router-dom'

const StyledNavLink = styled(NavLink)`
    padding: 10px;
    margin: 5px;

    width: 80%;

    display: flex;
    align-items: center;

    background-color: #2E2E2E;
    color: #E5E7EB;
    border-radius: 3px;

    gap: 5px;

    text-decoration: none;
    transition: all ease 0.3s;

    &:hover{
        color: #f72c25;
    }
`

export default function NavItem({to, text, icon: Icon}){
    return(
        <StyledNavLink to={to}>
            {Icon && <Icon size={18} />}
            <p>{text}</p>
        </StyledNavLink>
    )
}