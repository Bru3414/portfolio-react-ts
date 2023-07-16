import styled from 'styled-components';
import PEstilo from '../../components/Paragrafo/styles';

export const Descricao = styled(PEstilo)`
  margin-top: 24px;
  margin-bottom: 40px;
`;

export const Botao = styled.button`
  padding: 8px;
  background-color: #282a35;
  border-radius: 12px;
  color: #eee;
  font-size: 10px;
  font-weight: bold;
  cursor: pointer;
  border: none;
`;

export const SideBar = styled.div`
  position: sticky;
  top: 80px;
  left: 0;
`;
