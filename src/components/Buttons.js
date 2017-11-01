import styled from 'styled-components';

const Button = styled.button`
  border: 1px solid white;
  border-radius: 2px;
  background-color: ${props => props.theme.bg};
  color: ${props => props.theme.fg};
  margin: 5px;
  padding: 15px;
  font-size: 22px;

  :hover {
    border: 1px solid red;
    opacity: 0.8;
  }
`;

const ThemePreviewButton = Button.extend`
  background-color: ${props => props.bg};
  color: ${props => props.fg};
`;

export {Button, ThemePreviewButton};
