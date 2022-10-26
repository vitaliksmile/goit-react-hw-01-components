import styled from 'styled-components';

export const Container = styled.section`
  margin: 5px;
  width: 365px;
  height: 135px;
  text-align: center;
  border-radius: 10px;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 50px 100px -20px,
    rgba(0, 0, 0, 0.3) 0px 30px 60px -30px,
    rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset;
`;

export const Title = styled.h2`
  text-align: center;
  padding-top: 10px;
`;
export const StatList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
`;
export const StatItem = styled.li`
  padding: 20px;
  background-color: ${colorRandomizer};
  border-bottom-right-radius: 10px;
  border-bottom-left-radius: 10px;
`;

function colorRandomizer() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
