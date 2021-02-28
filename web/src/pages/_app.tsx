// Componentes comum a toda aplicação
// Toda vez que usuário acessa alguma página, é carregado e renderizado novamente

import GlobalStyle from '../styles/global';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Component {...pageProps} />
      <GlobalStyle />
    </>
  )
}

export default MyApp
