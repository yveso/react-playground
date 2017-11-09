import styled from 'styled-components';

const ListItemScore = styled.span`
  color: DimGrey;
  font-size: ${props => props.makeItBigger ? '15rem' : '5rem'};
`;

export default ListItemScore;
