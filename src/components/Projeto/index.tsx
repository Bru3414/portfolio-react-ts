import Paragrafo from '../Paragrafo';
import Titulo from '../Titulo';
import { Card, LinkButton } from './styles';

const Projeto = () => {
  return (
    <Card>
      <Titulo>Lista de tarefas</Titulo>
      <Paragrafo tipo="secundario">Lista de tarefas feita com VueJS</Paragrafo>
      <LinkButton href="#">Visualizar</LinkButton>
    </Card>
  );
};

export default Projeto;
