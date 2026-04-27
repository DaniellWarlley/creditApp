import styled from "styled-components"
import useQueryClient from '../hooks/clientsHooks/useQueryClient'
import Loading from "./Loading"
import { FaPen, FaTrash  } from "react-icons/fa"
import useClientForm from "../hooks/useClientForm"
import { clientService } from "../services/clientService"
import useDeleteClient from "../hooks/clientsHooks/useDeleteClient"

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
    border-left: ${props =>
        props.saldo == 0 ? 'none' :
        `2px solid ${props.saldo > 0 ? '#22C55E' : '#EF4444'}`
    }
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
export default function Table(){
    const { data, isPending } = useQueryClient() 
    const { mutate } = useDeleteClient()
    return(
        <TableContainer>
            {isPending && <Loading/>}
            <TableStyled>
                <thead>
                    <tr>
                        <th>Nome</th>
                        <th>Contato</th>
                        <th>Saldo</th>
                        <th>Crédito</th>
                        <th>Débito</th>
                        <th>Última mov.</th>
                        <th>Detalhes</th>
                    </tr>
                </thead>

                <tbody>
                    {data?.map(client => 
                    <Row key={client._id} saldo={client.saldo}>
                        <td>{client.name}</td>
                        <td>{client.contato}</td>
                        <td>{client.saldo}</td>
                        <td>{client.credito}</td>
                        <td>{client.debito}</td>
                        <td>{client.date || '...'}</td>
                        <td><PencilIcon /> <TrashIcon onClick={() => mutate(client._id)}/></td> 
                    </Row>)}                  
                </tbody>               
            </TableStyled>
        </TableContainer>
    )
}