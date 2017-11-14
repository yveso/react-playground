import styled from 'styled-components';
import { Link as NativeLink } from 'react-router-dom';

const Link = styled(NativeLink)`
  color: ${props => props.theme.fg};
`;

export default Link;
