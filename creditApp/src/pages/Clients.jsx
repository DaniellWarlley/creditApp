import styled from 'styled-components'
import Table from '../components/Table'
import SearchBar from '../components/SearchBar'
import Filter from '../components/Filter'
import Modal from '../components/Modal'
import UseToggle from '../hooks/useToggle'


export const Header = styled.header`
    margin-bottom: 10px;

    display: flex;

    gap: 10px;
`


export default function Clients(){
    const {toggle, handleToggle} = UseToggle()

    
    return(
        <>
            <Header>
                <SearchBar/>
                <Filter/>
                <Modal toggle={toggle} onClick={() => handleToggle()}/>
            </Header>
            <Table/>
        </>
    )
}