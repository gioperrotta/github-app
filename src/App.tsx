import { ThemeProvider, DefaultTheme } from 'styled-components';
import usePesistedState from './hooks/usePersistedState';
import GlobalStyle from './styles/global';
import light from './styles/themes/light';
import dark from './styles/themes/dark';

import {GitUserProvider } from './context/GitUserContext';

import { Header } from './components/Header';
import { Layout } from './components/Layout';
// import { Profile } from './components/Profile';
// import { Repositories } from './components/Repositories';

function App() {
  const [theme, setTheme] = usePesistedState<DefaultTheme>('theme', light);

  const toggleTheme = () => {
    setTheme(theme.title === 'light' ? dark : light)
  }

  return (
    <GitUserProvider>

      <ThemeProvider theme={theme}>
        <GlobalStyle />
        
        <Layout>
        <Header toggleTheme={toggleTheme} />
          {/* <Profile /> */}
          {/* <Repositories /> */}
        </Layout>
      </ThemeProvider >
    </GitUserProvider>
  );
}

export default App;
