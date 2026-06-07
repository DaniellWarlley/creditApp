import styled from "styled-components"
import Loading from "../../../shared/components/Loading"
import { useClientStore } from "../../../shared/store/useClientStore"
import useClientForm from "../hooks/useClientForm"

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

    min-height: 100vh;
    width: 100vw;

    background-color: rgba(0, 0, 0, 0.65);
    backdrop-filter: blur(3px);

    display: flex;
    align-items: center;
    justify-content: center;

    padding: 20px;

    z-index: 9999;
`

const Form = styled.form`
    width: 420px;
    max-width: 100%;

    padding: 24px;

    display: flex;
    flex-direction: column;
    gap: 20px;

    background-color: #1A1A1A;
    border: 1px solid #2A2A2A;
    border-radius: 12px;

    box-shadow: 0 20px 50px rgba(0, 0, 0, 0.45);

    animation: modalFade 0.25s ease;

    @keyframes modalFade {
        from {
            opacity: 0;
            transform: translateY(-10px) scale(0.98);
        }

        to {
            opacity: 1;
            transform: translateY(0) scale(1);
        }
    }

    h2 {
        color: #E5E7EB;
        font-size: 1.4rem;
        font-weight: 600;
    }

    p {
        color: #EF4444;
        font-size: 0.875rem;
    }
`

const Header = styled.div`
    display: flex;
    flex-direction: column;
    gap: 4px;

    span {
        color: #9CA3AF;
        font-size: 0.9rem;
    }
`
const FieldsContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 14px;
`

const Field = styled.div`
    display: flex;
    flex-direction: column;
    gap: 6px;

    label {
        color: #E5E7EB;
        font-size: 0.9rem;
        font-weight: 500;
    }
    
    input {
        padding: 11px 12px;

        background-color: #121212;
        color: #E5E7EB;

        border: 1px solid #2E2E2E;
        border-radius: 6px;
        outline: 0;

        transition: all ease 0.3s;

        &::placeholder {
            color: #6B7280;
        }

        &:focus {
            border-color: #f72c25;
            box-shadow: 0 0 0 3px rgba(79, 140, 255, 0.15);
        }
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
const SaldoContainerFields = styled.div`
    display: flex;
    flex-direction: column;
    gap: 6px;

    label {
        color: #E5E7EB;
        font-size: 0.9rem;
        font-weight: 500;
    }
    
    input {
        padding: 5px;

        height: 30px;
        width: 95%;

        background-color: #121212;
        color: #E5E7EB;

        border: 1px solid #2E2E2E;
        border-radius: 6px;
        outline: 0;

        transition: all ease 0.3s;

        &::placeholder {
            color: #6B7280;
        }

        &:focus {
            border-color: #f72c25;
            box-shadow: 0 0 0 3px rgba(79, 140, 255, 0.15);
        }
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
export default function Modal(){
    const {register, handleSubmit, onSubmit, handleCancel, errors, isPending} = useClientForm()

    const {isModalOpen, openClientModal} = useClientStore()

    return(
        <>
            <Button onClick={() => openClientModal()}>Cadastrar cliente</Button>
            {isModalOpen && (
                <Overlay>
                    <Form onSubmit={handleSubmit(onSubmit)}>
                        {isPending && <Loading/>}
                        <Header>
                            <h2>Salvar cliente</h2>
                            <span>Cadastre um Cliente para usar nas movimentações.</span>
                        </Header>

                        <FieldsContainer>
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
                                <SaldoContainerFields>
                                    <label htmlFor="">Credito</label>
                                    <input type="text" placeholder="Credito do cliente..." defaultValue={0} {...register('credito')} step="0.01"/>                               
                                </SaldoContainerFields>
                                <SaldoContainerFields>
                                    <label htmlFor="">Debito</label>
                                    <input type="text" placeholder="Debito do cliente..."defaultValue={0} {...register('debito')} step="0.01"/>                               
                                </SaldoContainerFields>
                            </SaldoContainer>
                            <p>{errors.credito?.message}</p>
                            <p>{errors.debito?.message}</p>
                        </FieldsContainer>
                        
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