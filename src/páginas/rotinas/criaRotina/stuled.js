import styled from "styled-components";

const Form = styled.form`
  display: ${(props) => props.isOpen ? "initial" : "none"};

  width: 100%;
  height: 180px;

  margin-top: 20px;
  padding: 18px;

  background: #FFFFFF;
  border-radius: 5px; 
`;

const Container = styled.div`
  margin-bottom: 30px;
`;

const Input = styled.input`
  width: 100%;
  height: 45px;

  padding: 10px;
  border: 1px solid #D5D5D5;
  border-radius: 5px;
    
  font-size: 20px;
  line-height: 25px;

  background-color: ${(props) => props.disabled ? "#F2F2F2" : "#FFFFFF"};
  color: ${(props) => props.disabled ? "#AFAFAF" : "#666666"};
  pointer-events: ${(props) => props.disabled ? "none" : "all"};

  &::placeholder{
    color: #DBDBDB;
  }
`;

const Fundo = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;

  gap: 15px;
`;

const CloseButton = styled.button`
  width: 85px;
  height: 35px;

  pointer-events: ${(props) => props.disabled ? "none" : "all"};

  background-color: transparent;

  border-radius: 4.63636px;

  font-size: 15.976px;
  line-height: 20px;

  color: #52B6FF;

  border: none;
`;

const Salvar = styled.button`
  width: 84px;
  height: 35px;

  display: flex;
  align-items: center;
  justify-content: center;

  opacity: ${(props) => props.disabled ? 0.7 : 1};

  pointer-events: ${(props) => props.disabled ? "none" : "all"};

  background-color: #52B6FF;

  border-radius: 5px;

  font-size: 16px;
  line-height: 20px;

  color: #FFFFFF;

  border: none;
`;

export {
  Form,
  Container,
  Input,
  Fundo,
  CloseButton,
  Salvar,
}