import '../styles/globals.css'
import type { AppProps } from 'next/app'
import Cabecalho from '../src/components/Cabeçalho/Cabecalho'

function MyApp({ Component, pageProps }: AppProps) { //Essa área é do server, sao componentes compartilhados para TODAS pag
  return (
    <div>
      <Cabecalho></Cabecalho>
      <Component {...pageProps} /> {/*Esse componente aqui é o conteudo da pagina especifica (no caso é a div conteudo la do index.tsx)*/}
    </div>
    
  )
}

export default MyApp
