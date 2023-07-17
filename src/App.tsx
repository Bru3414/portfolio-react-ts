import { ThemeProvider } from 'styled-components';
import Projetos from './container/Projetos';
import Sidebar from './container/Sidebar';
import Sobre from './container/Sobre';
import EstiloGlobal, { Container } from './styles';
import themeLight from './Themes/light';
import themeDark from './Themes/Dark';
import { useState } from 'react';

function App() {
  const [themeDarkActived, setThemeDarkActived] = useState(false);

  const toggleTheme = () => {
    setThemeDarkActived(!themeDarkActived);
  };

  return (
    <ThemeProvider theme={themeDarkActived ? themeLight : themeDark}>
      <EstiloGlobal />
      <Container>
        <Sidebar toggleTheme={toggleTheme} />
        <main>
          <Sobre />
          <Projetos />
        </main>
      </Container>
    </ThemeProvider>
  );
}

export default App;
