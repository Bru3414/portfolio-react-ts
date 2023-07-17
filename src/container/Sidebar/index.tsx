import Titulo from '../../components/Titulo';
import Avatar from '../../components/Avatar';
import Paragrafo from '../../components/Paragrafo';
import { Descricao, Botao, SideBar } from './styles';

type Props = {
  toggleTheme: () => void;
};

const Sidebar = ({ toggleTheme }: Props) => {
  return (
    <aside>
      <SideBar>
        <Avatar />
        <Titulo fontSize={18} align="left">
          Bruno Dambroski
        </Titulo>
        <Paragrafo tipo="secundario" fontSize={16}>
          bru3414
        </Paragrafo>
        <Descricao fontSize={12}>Front-end Developer</Descricao>
        <Botao onClick={toggleTheme}>Trocar tema</Botao>
      </SideBar>
    </aside>
  );
};

export default Sidebar;
