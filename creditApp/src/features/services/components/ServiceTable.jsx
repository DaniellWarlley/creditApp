import styled from "styled-components"
import Loading from "../../../shared/components/Loading.jsx"
import { FaPen, FaTrash  } from "react-icons/fa"
import useQueryService from "../hooks/useQueryService.js"

const TableStyled = styled.table`
    width: 100%;
    border-collapse: collapse;
    font-size: 14px;
    background: #1A1A1A;
    overflow: hidden;

    thead{
        background: #1E1E1E;
        color: #E5E7EB;
    }

    th{
        padding: 14px;

        text-align: center;

        font-weight: 500;
        border-bottom: 1px solid #262626;
    }

    td{
        padding: 14px;
        gap: 10px;

        text-align: center;

        border-bottom: 1px solid #262626;
        color: #9CA3AF;
    }

    tbody tr:hover{
        background: #222;
    }

    tbody tr:nth-child(even){
        background: #202020;
    }
`

const Row = styled.tr`

`

const TableContainer = styled.div`
    max-height: 90%;

    overflow-y: auto;

    &::-webkit-scrollbar {
        display: none;
    }
`

const PencilIcon = styled(FaPen)`
    transition: all ease 0.3s;

    &:hover{
        color: #f72c25;
    }
`

const TrashIcon = styled(FaTrash)`
    transition: all ease 0.3s;

    &:hover{
        color: #f72c25;
    }
`
export default function ServiceTable(){
    const { data, isPending } = useQueryService()

    return(
        <TableContainer>
            {isPending && <Loading/>}
            <TableStyled>
                <thead>
                    <tr>
                        <th>Serviço</th>
                        <th>Valor padrão</th>
                        <th>Status</th>
                        <th>Detalhes</th>
                    </tr>
                </thead>

                <tbody>
                    {data?.map(service => 
                    <Row key={service._id}>
                        {console.log(service)}
                        <td>{service.name}</td>
                        <td>{service.valor}</td>
                        <td>{service.status}</td>
                        <td><PencilIcon /> <TrashIcon/></td> 
                    </Row>)}                  
                </tbody>               
            </TableStyled>
        </TableContainer>
    )
}