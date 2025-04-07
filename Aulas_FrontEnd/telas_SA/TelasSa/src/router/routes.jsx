import { createBrowserRouter } from "react-router-dom"; 
import Home from "../pages/Home";
import Tela_portifolio from "../pages/Tela_portifolio";
import Testes from "../pages/Testes";


const router = createBrowserRouter([
    {path: "/", element: <Home />},
    {path: "Port", element: <Tela_portifolio />},
    {path: "Testes", element: <Testes />}

])

export default router;
