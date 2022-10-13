import { Box, Button, Dialog, DialogActions, Grid, Snackbar, TextField } from '@mui/material'
import type { NextPage } from 'next'
import { Professor } from '../src/@types/professor'
import Lista from '../src/components/Lista/Lista'
import { useIndex } from '../src/hooks/pages/useIndex'

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

  const {
    listaProfessores, 
    nome, 
    setNome, 
    email, 
    setEmail, 
    professorSelecionado, 
    setProfessorSelecionado, 
    marcarAula, 
    mensagem, 
    setMensagem
  } = useIndex(); //Chamando o hook, que vai me retornar esse valores
  
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
      <Box sx={{backgroundColor: 'secondary.main'}}>
        <Lista professores={listaProfessores} onSelect={(professor) => setProfessorSelecionado(professor)}></Lista>
      </Box>

      <Dialog onClose={() => {setProfessorSelecionado(null)}} open={professorSelecionado !== null} fullWidth PaperProps={{sx: {p: 5}}}>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <TextField 
              label="Digite o nome"
              type="text"
              fullWidth
              value={nome}
              onChange={(e) => setNome(e.target.value)}
            />
              
          </Grid>
          <Grid item xs={12}>
            <TextField 
              label="Digite o email"
              type="email"
              fullWidth
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
              
          </Grid>
        </Grid>

        <DialogActions sx={{mt:5}}>
          <Button onClick={() => setProfessorSelecionado(null)}>Cancelar</Button>
          <Button onClick={() => marcarAula()}>Marcar</Button>
        </DialogActions>
        
      </Dialog>

      <Snackbar message={mensagem} open={mensagem.length > 0} autoHideDuration={2500} onClose={() => setMensagem('')}></Snackbar> {/*O message é a mensagem, o open é true ou false, no caso somente se a mensagem for maior que 0 ele vair ser open(default) e o autoHide é o tempo para ele fechar e quando fechar ele limpa o campo*/}

    </div>
     
  )
}

export default Home
