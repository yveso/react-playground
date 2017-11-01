import styled from 'styled-components';

const BorderedDiv = styled.div`
  border: 1px solid ${props => props.theme.bg};
  color: ${props => props.theme.fg};
  border-radius: 10px;
  margin: 10px;
  padding: 10px;
  text-align: center;

  >h1 {
    color: black;
  }
`;

export default BorderedDiv;
