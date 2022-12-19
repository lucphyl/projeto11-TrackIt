import React from 'react';
import styled from 'styled-components';
import Rotina from './Rotina';


function HabitsList({ rotina, handleDeleteHabit }) {
  if (rotina.length === 0) {
    return (
      <Subtitle>
        Você não tem nenhum hábito cadastrado ainda. Adicione um hábito para começar a trackear!
      </Subtitle>
    )
  }

  return (
    habits.map((rotina) => (
      <Rotina
        key={rotina.id}
        {...rotina}
        handleDeleteHabit={handleDeleteHabit}
      />
    ))
  )
}

const Subtitle = styled.p`
  margin-top: 28px;

  font-size: 18px;
  line-height: 22px;

  color: #BABABA;
`;

export default ListaRotina;