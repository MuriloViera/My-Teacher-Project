import type { NextPage } from 'next'
import Cabecalho from '../src/components/Cabeçalho/Cabecalho'

//Os outros componentes estão na pasta component (componente sao basicamente tags que eu crio)
//O MUI, é basicamente um bootstrap de componente, ele traz um monte de componente pronto ja

//Componente botao
/*function Botao(props){ //props armazena todos parametros que eu passar quando eu chamo o componente, props é so um nome, pode ser qualquer coisa
  return (
    <a href="">{props.titulo}</a> //Quando eu abro {}, significa que dentro vem um codigo JS
    )
}
*/

const Home: NextPage = () => {
  return (
    //Exemplo de componentes basicos
    /*<div>
      <Botao titulo='Primeiro botao'></Botao> <br />
      <Botao titulo='Segundo botao'></Botao> <br />
      <Botao titulo='Terceiro botao'></Botao> <br />
      <Botao titulo='Quarto botao'></Botao> <br />
    </div>*/

    //A pagina tsx, só exibe UMA coisa, entao se eu quiser ter muita coisa tem que ser uma div ou um elemento raiz <></>
    //Div conteudo
    <div> 
      Conteudo
    </div>
     
  
  )
}

export default Home
