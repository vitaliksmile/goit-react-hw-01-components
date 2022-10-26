import styled from 'styled-components';

export const OnlineOrNot = styled.span`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 10px;
  height: 10px;
  background-color: ${props => (props.isOnline ? 'green' : 'red')};
  border-radius: 50%;
`;

export const Li = styled.li`
  margin-right: 50px;
  padding: 5px;
`;
