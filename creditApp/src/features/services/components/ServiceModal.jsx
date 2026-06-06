import styled from "styled-components"
import Loading from "../../../shared/components/Loading"
import useServiceForm from "../hooks/useServiceForm"
import { serviceStore } from "../../../shared/store/serviceStore"

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

const Buttons = styled.div`
    display: flex;
    justify-content: flex-end;
    gap: 10px;

    #cancelButton {
        padding: 10px 16px;

        background-color: transparent;
        color: #9CA3AF;

        border: 1px solid #2E2E2E;
        border-radius: 6px;

        cursor: pointer;
        transition: all ease 0.3s;

        &:hover {
            color: #E5E7EB;
            background-color: #242424;
        }
    }

    #submitButton {
        padding: 10px 16px;

        background-color: #f72c25;
        color: #FFFFFF;

        border: none;
        outline: none;
        border-radius: 6px;

        font-weight: 500;

        cursor: pointer;
        transition: all ease 0.3s;

        &:hover {
            background-color: #da2721;
        }
    }
`

export default function ServiceModal() {
    const { register, errors, handleSubmit, onSubmit, handleCancel, isPending } = useServiceForm()
    const { isOpen, openServiceModal } = serviceStore()

    return (
        <>
            <Button onClick={() => openServiceModal()}>Cadastrar serviço</Button>

            {isOpen &&
                <Overlay>
                    <Form onSubmit={handleSubmit(onSubmit)}>
                        {isPending && <Loading/>}
                        <Header>
                            <h2>Novo serviço</h2>
                            <span>Cadastre um serviço para usar nas movimentações.</span>
                        </Header>

                        <FieldsContainer>
                            <Field>
                                <label>Nome do serviço</label>
                                <input 
                                    type="text"
                                    placeholder="Ex: Corte de cabelo"
                                    {...register('name')}
                                />
                                <p>{errors.name?.message}</p>
                            </Field>

                            <Field>
                                <label>Valor padrão</label>
                                <input 
                                    type="number"
                                    placeholder="Ex: 30,00"
                                    step="0.01"
                                    {...register('valor')}
                                />
                                <p>{errors.valor?.message}</p>
                            </Field>
                        </FieldsContainer>

                        <Buttons>
                            <button type="button" id="cancelButton" onClick={() => handleCancel()}>
                                Cancelar
                            </button>

                            <button type="submit" id="submitButton">
                                Salvar serviço
                            </button>
                        </Buttons>
                    </Form>
                </Overlay>
            }
        </>
    )
}