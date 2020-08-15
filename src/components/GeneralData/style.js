import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: 200px;
  margin: 0 0 10px 0;
  display: grid;
  grid-template-areas: "a a"
                       "b b"
                       "c d"
                       "e f";
  grid-template-rows: 50px 40px 1fr 1fr;
  grid-gap: 10px;
`;

export const Head = styled.div`
  grid-area: a;
`;

export const Total = styled.div`
  grid-area: b;
  border-radius: 15px;
  background-color: #ffffff;
  box-shadow: 0 0 4px black;
  position: relative;
`;

export const Active = styled.div`
  grid-area: c;
  border-radius: 15px;
  background-color: #ffffff;
  box-shadow: 0 0 4px black;
  position: relative;
`;

export const Dead = styled.div`
  grid-area: d;
  border-radius: 15px;
  background-color: #ffffff;
  box-shadow: 0 0 4px black;
  position: relative;
`;

export const Recovered = styled.div`
  grid-area: e;
  border-radius: 15px;
  background-color: #ffffff;
  box-shadow: 0 0 4px black;
  position: relative;
`;

export const Update = styled.div`
  grid-area: f;
  border-radius: 15px;
  background-color: #ffffff;
  box-shadow: 0 0 4px black;
  position: relative;
`;

export const Img = styled.img`
  width: 70px;
`;

export const Box = styled.div`
  height: 100%;
  padding: 0 10px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const Title = styled.h6`
  position: absolute;
  top: 3px;
  left: 10px;
`;

export const Value = styled.h4`
  position: absolute;
  right: 10px;
  bottom: 3px;
`;