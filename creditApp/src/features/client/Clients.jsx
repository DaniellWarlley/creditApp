import styled from 'styled-components'
import Table from './components/Table'
import SearchBar from '../../shared/components/SearchBar.jsx'
import Filter from '../../shared/components/Filter.jsx'
import Modal from './components/Modal.jsx'
import UseToggle from '../../shared/hooks/useToggle.js'


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