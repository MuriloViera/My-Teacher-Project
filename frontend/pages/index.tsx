import { Box } from '@mui/material'
import type { NextPage } from 'next'
import { Professor } from '../src/@types/professor'
import Lista from '../src/components/Lista/Lista'

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

  const professores: Professor[] = [ //Uma lista de objetos do tipo Professor
    {
      id: 1,
      nome: 'Professor 1',
      foto: 'https://github.com/murilo-vieira.png',
      descricao: 'Descrição do professor 1',
      valor_hora: 100
    },
    {
      id: 2,
      nome: 'Professor 2',
      foto: 'https://github.com/murilo-vieira.png',
      descricao: 'Descrição do professor 2',
      valor_hora: 200
    },
    {
      id: 3,
      nome: 'Professor 3',
      foto: 'https://github.com/murilo-vieira.png',
      descricao: 'Descrição do professor 3',
      valor_hora: 300
    },
    {
      id: 4,
      nome: 'Professor 4',
      foto: 'https://github.com/murilo-vieira.png',
      descricao: 'Descrição do professor 4',
      valor_hora: 400
    }
  ]

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
    <Box sx={{backgroundColor: 'secondary.main'}}>
      <Lista professores={professores}></Lista>
    </Box>
     
  )
}

export default Home
