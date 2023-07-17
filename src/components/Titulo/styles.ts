import styled from 'styled-components';
import { Props } from './index';

export const Titulo = styled.h3<Props>`
  color: ${(props) => props.theme.principalColor};
  font-size: ${(props) => (props.fontSize ? props.fontSize + 'px' : '14px')};
  font-weight: bold;
  margin-bottom: 16px;
  text-align: ${(props) => (props.align ? props.align : 'left')};
`;
