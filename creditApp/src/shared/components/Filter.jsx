import styled from "styled-components"


const Select = styled.select`
    padding: 10px;

    background-color: #1A1A1A;
    border-radius: 3px;
    border: none;
    outline: 0;
    color: #E5E7EB;

    cursor: pointer;
    transition: all ease 0.3s;

    &:hover{
        background-color: #222222;
    }
`

export default function Filter(){
    return(
        <Select>
            <option>Todos</option>
            <option>Saldo negativo</option>
            <option>Saldo positivo</option>
            <option>Mais recente</option>
            <option>Menos recente</option>
        </Select>
    )
}