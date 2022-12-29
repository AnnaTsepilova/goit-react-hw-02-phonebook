import styled from 'styled-components';

export const SubTitle = styled.h2`
  padding-top: ${props => props.theme.space[6]}px;
  padding-bottom: ${props => props.theme.space[6]}px;
  font-size: ${props => props.theme.fontSizes.l}px;
  font-weight: ${props => props.theme.fontWeights.bold};
  color: ${props => props.theme.colors.primary};
`;
