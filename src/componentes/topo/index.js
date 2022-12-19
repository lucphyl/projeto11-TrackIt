import { useNavigate, UseLocation, useLocation } from "react-router-dom";
import { Container, Perfil} from "./styled";
import logo from "../../assets/img/logo-mini.svg";
import { useContext } from "react";
import AuthCon from "../../context/AuthCon";
import { caminhoVazio } from "../../App";

function useAuth() {
  return useContext(AuthContext);
}

export default function Topo(){
    const {auth} = useAuth();
    const navigate = useNavigate();
    const location = useLocation();

    if (caminhoVazio.includes(location.pathname)){
        return null
    }

    return (
        <Container>
            <img src={logo} alt="TrackIt" onClick={() => navigate("/today")}/>
            <Perfil src={auth.image} alt={auth.name}/>
        </Container>
    )
}



