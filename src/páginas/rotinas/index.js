import { useState, useEffect } from "react";
import{
    Container,
    RegistrarCon,
    Title,
    Button,
} from "./styled";
import Plus from "../../assets/img/plus.svg";
import useAuth from "../../commons/userAuth";
import api from "../../commons/api";
import ListaRotina from "./lista";
import CriaRotina from "./criaRotina";
import useProgress from "../../commons/useProgress";

export default function Rotinas() {
    const { auth } = useAuth();
    const { updateProgress } = useProgress();
    const [habits, setHabits] = useState(null);
    const [CriarRotinaAtivo, SetCriarRotinaAtivo] = useState(false);

    function carregaRotina() {
        const promise = api.getHabits(auth.token);
        promise.then((response) => {
        setHabits(response.data);
        carregaRotinaHoje();
        });
        promise.catch((error) => {
        console.log(error.response);
        });
    }

    function carregaRotinaHoje() {
        const promise = api.habitosHoj(auth.token);
    
        promise.then((response) => {
            const doneHabits = response.data.filter(habit => habit.done);
        
            updateProgress(doneHabits.length, response.data.length);
        });
    }

    function handleDeleteHabit(id) {
        if (!window.confirm("Você tem certeza que deseja deletar este hábito?")) {
            return;
        }
    
        const promise = api.deleteHabit(id, auth.token);
        promise.then(() => {
            carregaRotina();
            carregaRotinaHoje();
        });
    }
    
    useEffect(carregaRotina, []);
    
    if (habits === null) {
        return <h1>Carregando . . .</h1>;
    }
    
      return (
        <Container>
          <RegistrarCon>
            <Title>Meus hábitos</Title>
            <Button onClick={() => SetCriarRotinaAtivo(true)}>
              <img alt="plus.svg" src={Plus} />
            </Button>
          </RegistrarCon>
    
          <CriaRotina
            isOpen={CriarRotinaAtivo}
            closeForm={() => SetCriarRotinaAtivo(false)}
            carregaRotina={carregaRotina}
          />
    
          <ListaRotina habits={habits} handleDeleteHabit={handleDeleteHabit} />
        </Container>
      );
}


