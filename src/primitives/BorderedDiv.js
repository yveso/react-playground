import styled from 'styled-components';

const BorderedDiv = styled.div`
  border: 1px solid black;
  color: ${props => props.theme.bg};
  background: GhostWhite;
  border-radius: 5px;
  margin: 15px;
  padding: 10px;
  text-align: center;
  box-shadow: 2px 2px 10px 1px ${props => props.theme.bg};

  >h1 {
    color: black;
  }
`;

export default BorderedDiv;
