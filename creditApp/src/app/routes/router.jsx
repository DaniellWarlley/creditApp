import { createBrowserRouter } from "react-router-dom"
import App from "../App.jsx"
import Home from "../../features/home/Home.jsx"
import Clients from "../../features/client/Clients.jsx"
import DashBoard from "../../features/dashBoard/DashBoard.jsx"
import Movimentacoes from "../../features/movimentacoes/Movimentacoes.jsx"
import Services from "../../features/services/Services.jsx"
import Team from "../../features/team/Team.jsx"
import Login from "../../features/auth/pages/Login.jsx"

export const router = createBrowserRouter([
    {
        path: '/',
        element: <Login/>
    },
    {
        path: '/Home',
        element: <Home/>,
        children: [
            {
                path: 'Clientes',
                element: <Clients/>
            },
            {
                path: 'DashBoard',
                element: <DashBoard/>
            },
            {
                path: 'Movimentacoes',
                element: <Movimentacoes/>
            },
            { 
                path: 'Servicos',
                element: <Services/>
            },
            {
                path: 'Equipe',
                element: <Team/>
            }
        ]
    }
])