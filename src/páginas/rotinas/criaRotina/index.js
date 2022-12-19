import React, {useState} from "react";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import Loader from 'react-loader-spinner';
import {
    Form,
    Container,
    Input,
    Fundo,
    CloseButton,
    Salvar,
} from './stuled'
import { Dias, StyledDias } from "../styled";
import useAuth from "../../../commons/userAuth";
import api from "../../../commons/api";
import Semana from "../../../commons/Semana";

function CriaRotina ({ aberto, carregar, fechar}){
    const { auth } = useAuth();
    const [name, setName] = useState('');
    const [dias, setDias] = useState([]);
    const [load, carregando] = useState(false);

    function handleCreateHabit(e) {
        e.preventDefault();
    
        if (days.length === 0) {
            alert("ao menos um dia deve ser selecionado");
            return;
        }
    
        carregando(true);
    
        const promise = api.criarHabits({ name, days }, auth.token);

        promise.then(() => {
            carregando(false);
            setName('');
            setDias([]);
            fechar();
            carregar();
        });
        promise.catch((error) => {
            carregando(false);
            console.log(error.response);
        });
    }

    function handleSelectDay(id) {
        const diaSelecionado = dias.includes(id);
    
        if (diaSelecionado) {
            const newDays = dias.filter(dia => dia !== id);
            setDias(newDays);
            return;
        }
    
        setDias([...dias, id]);
    }

    return (
        <Form onSubmit={handleCreateHabit} isOpen={isOpen}>
          <Container>
            <Input
              placeholder="nome do hábito"
              required
              onChange={(e) => setName(e.target.value)}
              value={name}
              disabled={isLoading}
            />
            <Dias disabled={isLoading}>
              {Semana.map((Semana) => (
                <Dia
                  key={Semana.id}
                  {...Semana}
                  isSelected={days.includes(Semana.id)}
                  handleSelectDay={handleSelectDay}
                />
              ))}
            </Dias>
          </Container>
    
          <Fundo>
            <CloseButton
              type="button"
              disabled={isLoading}
              onClick={closeForm}
            >
              Cancelar
            </CloseButton>
            <Salvar type="submit" disabled={isLoading}>
              {
                isLoading
                  ? <Loader type="ThreeDots" color="#FFFFFF" height={50} width={50} />
                  : "Salvar"
              }
            </Salvar>
          </Fundo>
        </Form>
      );

}

function Dia ({dia, id, isSelected, handleSelectDay}){
    return (
        <styledDia
            onClick={()=> handleSelectDay(id)}
            isSelected={isSelected}
        >
            {dia}
        </styledDia>
    );
}


export default CriaRotina;