import styled from 'styled-components';
import { Props } from './index';

const P = styled.p<Props>`
  font-size: ${(props) => (props.fontSize ? props.fontSize + 'px' : '14px')};
  color: ${(props) =>
    props.tipo === 'principal'
      ? props.theme.principalColor
      : props.theme.secundaryColor};
  line-height: 22px;
`;

export default P;
