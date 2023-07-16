import Titulo from '../../components/Titulo';
import Paragrafo from '../../components/Paragrafo';
import GithubSecao from './styles';

const Sobre = () => {
  return (
    <section>
      <Titulo fontSize={16}>Sobre mim</Titulo>
      <Paragrafo tipo="principal">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus
        nesciunt laudantium esse magni vitae sequi quia repudiandae vero
        pariatur quod officia dicta quam, quibusdam totam quo nihil debitis
        consectetur hic?
      </Paragrafo>
      <GithubSecao>
        <img src="https://github-readme-stats.vercel.app/api?username=bru3414&show_icons=true&theme=dracula&include_all_commits=true&count_private=true" />
        <img src="https://github-readme-stats.vercel.app/api/top-langs/?username=bru3414&layout=compact&langs_count=7&theme=dracula" />
      </GithubSecao>
    </section>
  );
};

export default Sobre;
