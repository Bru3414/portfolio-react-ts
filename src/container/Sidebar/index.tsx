import Titulo from '../../components/Titulo';
import Avatar from '../../components/Avatar';
import Paragrafo from '../../components/Paragrafo';
import { Descricao, Botao, SideBar } from './styles';

const Sidebar = () => {
  return (
    <aside>
      <SideBar>
        <Avatar />
        <Titulo fontSize={20} align="center">
          Bruno Dambroski
        </Titulo>
        <Paragrafo tipo="secundario" fontSize={16}>
          Bru3414
        </Paragrafo>
        <Descricao fontSize={12}>Developer Front-end</Descricao>
        <Botao>Trocar tema</Botao>
      </SideBar>
    </aside>
  );
};

export default Sidebar;
