import React from 'react';
import weekDays from '../../../utils/weekDays';
import trashIcon from "../../../assets/img/dump.svg";
import { Container, Title } from './style';
import { Dias, StyledDia } from '../style';

function Rotina({ id, name, days, handleDeleteHabit }) {
  return (
    <Container>
      <Title>{name}</Title>
      <Dias>
        {weekDays.map(weekDay => (
          <StyledDia key={weekDay.id} isSelected={days.includes(weekDay.id)}>{weekDay.day}</StyledDia>
        ))}
      </Dias>

      <img alt="Trash" src={trashIcon} onClick={() => handleDeleteHabit(id)} />
    </Container>
  );
}

export default Rotina;