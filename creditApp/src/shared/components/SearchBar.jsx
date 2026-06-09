import { FaMagnifyingGlass } from "react-icons/fa6"
import styled from "styled-components"

const StyledSearchBar = styled.div`
    padding: 10px;

    width: 210px;

    display: flex;
    align-items: center;
    justify-content: center;

    background-color: #1A1A1A;
    border-radius: 3px;
    color: #E5E7EB;

    gap: 15px;

    input{
        width: 100%;

        background-color: transparent;
        outline: 0;
        border: none;
        color: #E5E7EB;
    }

    input::placeholder {
        color: #9CA3AF;
    }

    @media (max-width: 768px) {
        width: 100%;
        max-width: 90%;
    }
`

export default function SearchBar(){
    return(
        <StyledSearchBar>
            <FaMagnifyingGlass/>
            <input type="text" placeholder="Pesquisar pelo nome..."/>
        </StyledSearchBar>
    )
}