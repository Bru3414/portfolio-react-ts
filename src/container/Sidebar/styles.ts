import styled from 'styled-components';
import PEstilo from '../../components/Paragrafo/styles';

export const Descricao = styled(PEstilo)`
  margin-top: 24px;
  margin-bottom: 40px;
`;

export const Botao = styled.button`
  padding: 8px;
  background-color: ${(props) => props.theme.principalColor};
  border-radius: 12px;
  color: ${(props) => props.theme.backgroundColor};
  font-size: 10px;
  font-weight: bold;
  cursor: pointer;
  border: none;
`;

export const SideBar = styled.div`
  align-items: center;
  position: sticky;
  top: 80px;
  left: 0;

  @media (max-width: 767px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-bottom: 40px;
  }
`;
