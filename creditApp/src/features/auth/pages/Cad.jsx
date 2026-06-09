import { GlobalStyle } from "../../../app/assets/global.js"
import { styled } from 'styled-components'
import useLogForm from "../hooks/useLogForm"
import Loading from '../../../shared/components/Loading.jsx'
import useCadForm from "../hooks/useCadForm.js"
import { useNavigate } from "react-router-dom"

const Main = styled.main`
    min-height: 100vh;
    width: 100%;

    display: flex;
    justify-content: center;
    align-items: center;

    background-color: #121212;
`
const Form = styled.form`
    width: 600px;
    max-width: 90%;
    height: 350px;

    display: flex;

    border-top: 3px solid #f72c25;
    border-radius: 6px;
    overflow: hidden;

    box-shadow: 0 0 20px rgba(0,0,0,0.4);

    p {
        color: #9CA3AF;
        font-size: 0.9rem;
    }

    span {
        color: #f72c25;
        cursor: pointer;
        transition: 0.3s;

        &:hover {
        color: #da2721;
        }
    }

    @media (max-width: 768px) {
        flex-direction: column;
    }
`
const FormHead = styled.header`
    width: 50%;
    padding: 30px;

    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    text-align: center;

    background-color: #1E1E1E;

    h1 {
        color: #E5E7EB;
        margin-bottom: 10px;
    }

    @media (max-width: 768px) {
        width: 100%;
    }
`
const FormBody = styled.div`
    position: relative;

    width: 50%;
    padding: 15px;

    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    gap: 10px;
    background-color: #1A1A1A;

    button {
        padding: 10px;
        width: 90%;

        background-color: #f72c25;
        color: #E5E7EB;
        border: none;
        border-radius: 4px;

        cursor: pointer;
        transition: 0.3s;

        &:hover {
            background-color: #da2721;
        }
    }

    @media (max-width: 768px) {
        width: 100%;
    }
`

const InputWrapper = styled.div`
    display: flex;
    flex-direction: column;
    gap: 5px;

    width: 100%;

    input {
        height: 30px;
        width: 100%;

        background-color: #1F1F1F;
        color: #9CA3AF;
        border: 1px solid #2E2E2E;
        border-radius: 4px;
        outline: none;

        &:focus {
            border-color: #f72c25;
        }
    }

    label {
        color: #E5E7EB;
        font-size: 0.9rem;
    }

    p {
        color: #f72c25;
        font-size: 0.8rem;
    }
`

export default function Cad(){
    const {isSubmitting, register, errors, handleSubmit, onSubmit} = useCadForm()
    const navigate = useNavigate()

    return(
        <Main>
            <GlobalStyle/>
            
            <Form onSubmit={handleSubmit(onSubmit)}>
                {isSubmitting && <Loading/>}
                <FormHead>
                    <h1>Cadastro</h1>
                    <p>Faça uma conta para ter acesso ao site</p>
                </FormHead>
                <FormBody>
                    <InputWrapper>
                        <label>Nome</label>
                        <input type="text" placeholder="Digite seu nome..." {...register('name')}/>
                        <p>{errors.name?.message}</p>
                    </InputWrapper>
                    <InputWrapper>
                        <label>Email</label>
                        <input type="email" placeholder="Digite seu email..." {...register('email')}/>
                        <p>{errors.email?.message}</p>
                    </InputWrapper>
                    <InputWrapper>
                        <label>Senha</label>
                        <input type="password" placeholder="Digite sua senha..." {...register('passWord')}/>
                        <p>{errors.passWord?.message}</p>
                    </InputWrapper>
                    <button type="submit">Cadastrar</button>
                    <p>Já tem uma conta? <span onClick={() => navigate('/Login')}>Clique aqui.</span></p>
                </FormBody>
            </Form>
        </Main>
    )
}
