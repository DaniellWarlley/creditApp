import styled from 'styled-components'
import SearchBar from '../../shared/components/SearchBar'
import Filter from '../../shared/components/Filter'
import UseToggle from '../../shared/hooks/useToggle.js'


export const Header = styled.header`
    margin-bottom: 10px;

    display: flex;

    gap: 10px;
`

export default function Services(){
    return(
        <>
            <Header>
                <SearchBar/>
                <Filter/>
            </Header>
        </>
    )
}