import styled from 'styled-components';

export const Card = styled.div`
  border: 1px solid ${(props) => props.theme.borderColor};
  padding: 16px;
`;

export const LinkButton = styled.a`
  color: ${(props) => props.theme.backgroundColor};
  background-color: ${(props) => props.theme.backgroundColorButton};
  text-decoration: none;
  font-size: 14px;
  padding: 8px;
  display: inline-block;
`;
