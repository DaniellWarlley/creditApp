import styled from "styled-components"
import useClientForm from "../hooks/useClientForm"
import Loading from "./Loading"

const Button = styled.button`
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

const Overlay = styled.div`
    position: fixed;
    inset: 0;

    height: 100vh;
    width: 100vw;

    background-color: rgba(0, 0, 0, 0.45);

    display: flex;
    align-items: center;
    justify-content: center;

    z-index: 9999;
`

const Form = styled.form`
    padding: 10px;

    width: 30%;

    display: flex;
    flex-direction: column;


    background-color: #1A1A1A;
    border-radius: 8px; 
    h1{
        color: #E5E7EB;
        
    }
    p{
        color: #f72c25;
    }
`
const Field = styled.div`
    margin-top: 10px;
    width: 100%;

    display: flex;  
    flex-direction: column;

    label{
        color: #E5E7EB;
    }
    
    input{
        padding: 5px 0px;
        margin-top: 5px;

        height: 20px;
        width: 100%;

        background-color: #1F1F1F;
        color: #9CA3AF;
        border: 1px solid #2E2E2E;
        border-radius: 3px;
        outline: 0;
    }
`
const SaldoContainer = styled.div`
    margin-top: 10px;
    padding: 10px;

    width: 95%;

    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 10px;

    border-top: 3px solid #f72c25;
    background-color: #1E1E1E;

    p{
        padding: 5px;

        color: #E5E7EB;
        background-color: #2E2E2E;
        border-radius: 3px;
    }
    input{
        width: 100%;
        height: 20px;

        background-color: #1F1F1F;
        color: #9CA3AF;
        border: 1px solid #2E2E2E;
        border-radius: 3px;
        outline: 0;
    }
`
const Buttons = styled.div`
    margin-top: 10px;

    width: 100%;

    display: flex;
    justify-content: space-between;

    #cancelButton{
        padding: 10px;

        background-color: transparent;
        color: #f72c25;
        border: 1px solid #f72c25;
        border-radius: 3px;

        gap: 10px;
        cursor: pointer;
        transition: all ease 0.3s;

        &:hover{
            background-color: #f72c25;
            color: #fff;
        }
    }
    #submitButton{
        padding: 5px 15px;

        background-color: #f72c25;
        color: #E5E7EB;
        border: none;
        outline: none;
        border-radius: 3px;

        cursor: pointer;
        transition: all ease 0.3s;

        &:hover{
            background-color: #da2721;     
        }
    }
`
export default function Modal({toggle, onClick}){
    const {register, handleSubmit, onSubmit, handleCancel, errors, isPending} = useClientForm(onClick) 
    return(
        <>
            <Button onClick={onClick}>Cadastrar cliente</Button>
            {toggle && (
                <Overlay>
                    <Form onSubmit={handleSubmit(onSubmit)}>
                        {isPending && <Loading/>}
                        <h1>Salvar cliente</h1>
                        <Field>
                            <label htmlFor="">Nome</label>
                            <input type="text" placeholder="Nome do cliente..." {...register('name')}/>
                            <p>{errors.name?.message}</p>
                        </Field>
                        <Field>
                            <label htmlFor="">Contato</label>
                            <input type="text" placeholder="Contato do cliente..." {...register('contato')}/>
                            <p>{errors.contato?.message}</p>
                        </Field>
                        <SaldoContainer>
                            <Field>
                                <label htmlFor="">Credito</label>
                                <input type="text" placeholder="Credito do cliente..." defaultValue={0} {...register('credito')}/>                               
                            </Field>
                            <Field>
                                <label htmlFor="">Debito</label>
                                <input type="text" placeholder="Debito do cliente..."defaultValue={0} {...register('debito')}/>                               
                            </Field>
                            <p>Saldo: R$ 0</p>
                        </SaldoContainer>
                        <p>{errors.credito?.message}</p>
                        <p>{errors.debito?.message}</p>
                        <Buttons>
                            <button id="cancelButton" onClick={() => handleCancel()} type="button">Cancelar</button>
                            <button id="submitButton" type="submit">Enviar</button>
                        </Buttons>
                    </Form>
                </Overlay>
            )}
        </>
    )
}