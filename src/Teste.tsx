import styled from 'styled-components';

type BotaoProps = {
  bg: boolean;
  fontSize?: string;
};

const Botao = styled.button<BotaoProps>`
  background-color: ${(props) => (props.bg ? 'green' : 'red')};
  font-size: ${(props) => props.fontSize || '16px'};
`;

const BotaoPerigo = styled(Botao)`
  background-color: red;
  color: #fff;

  span {
    text-decoration: line-through;
  }
`;

const Teste = () => {
  return (
    <>
      <Botao bg fontSize="18px">
        Enviar
      </Botao>
      <Botao bg={false}>Cancelar</Botao>
      <BotaoPerigo as="a" bg>
        <span>Não clique aqui</span>
      </BotaoPerigo>
    </>
  );
};

export default Teste;
