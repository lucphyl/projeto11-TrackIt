import styled from "styled-components";

const Container = styled.div`
  width: 100%;
  height: 95px;

  padding: 15px;
  margin: 20px 0 10px 0;

  background: #FFFFFF;
  border-radius: 5px;

  position: relative;

  img {
    width: 15px;

    position: absolute;
    top: 12px;
    right: 12px;
  }
`;

const Title = styled.h2`
  font-size: 20px;
  line-height: 25px;

  word-break: break-all;
  width: 75%;

  color: #666666;
`;

export {
  Container,
  Title
}