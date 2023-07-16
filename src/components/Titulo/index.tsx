import { Titulo as TituloEstilo } from './styles';

export type Props = {
  children: string;
  fontSize?: number;
  align?: string;
};

const Titulo = (props: Props) => {
  return (
    <TituloEstilo align={props.align} fontSize={props.fontSize}>
      {props.children}
    </TituloEstilo>
  );
};

export default Titulo;
