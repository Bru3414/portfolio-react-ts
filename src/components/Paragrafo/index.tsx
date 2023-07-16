import PEstilo from './styles';

export type Props = {
  children: string;
  tipo?: 'principal' | 'secundario';
  fontSize?: number;
};

const Paragrafo = ({ children, tipo = 'principal', fontSize }: Props) => {
  return (
    <PEstilo tipo={tipo} fontSize={fontSize}>
      {children}
    </PEstilo>
  );
};

export default Paragrafo;
