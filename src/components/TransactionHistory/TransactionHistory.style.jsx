import styled from 'styled-components';

export const Table = styled.table`
  background-color: white;

  box-shadow: rgba(50, 50, 93, 0.25) 0px 50px 100px -20px,
    rgba(0, 0, 0, 0.3) 0px 30px 60px -30px,
    rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset;
  width: 400px;
  text-align: left;
  border-collapse: collapse;
  tr:nth-child(even) td {
    background-color: #c0c0c04e;
  }
`;

export const Thead = styled.thead`
  background-color: #029aff;
  text-align: center;
`;

export const Th = styled.th`
  border: 1px solid #aaaaaa;

  padding: 3px 2px;
  text-transform: uppercase;
  color: white;
`;
export const Td = styled.td`
  border: 1px solid #aaaaaa;
  padding: 3px 2px;
`;

export const Tr = styled.tr`
  text-align: center;
`;
