//Esse arquivo é um hook PERSONALIZADO, nao um hook normal de estado (useState)

import { useEffect, useState } from "react"
import { Professor } from "../../@types/professor"
import { ApiService } from "../../services/ApiService"

export function useIndex(){
    const [listaProfessores, setListaProfessores] = useState<Professor[]>([]) //Usando o hook state, e nele estou passando uma lista de professores como valor primario, lembrando que o hook vai me retornar um vetor, aonde o primeiro valor é o valor inicial que eu passei(no caso a lista), e o segundo valor é um para poder alterar o valor inicial e eu estou pegando eles com o listaProfessores que vai receber a posição [0] e o setListaProfessores que vai receber a posição[1]
    const [nome, setNome] = useState('')
    const [email, setEmail] = useState('')
    const [professorSelecionado, setProfessorSelecionado] = useState<Professor | null>(null)
    const [mensagem, setMensagem] = useState('')

    useEffect(() => {
       ApiService.get('/professoresapi/').then((resposta) => {//Aqui eu to usando o AXIS para fazer uma requisição http do tipo get para função que eu defini a API, e to passando para ele o url que eu quero acessar
            setListaProfessores(resposta.data) //Aqui vou pegar todo JSON e vou passar pro setListaProfessores que recebe do meu useIndex o segundo valor do Hook, que é responsavel por alterar o primeiro, que é a própria lista
       }) 
    }, []); //Se eu nao passar nada dentro do array ele vai executar o bloco ali dentro uma vez

    useEffect(() => {limparFormulario()}, [professorSelecionado])//vai rodar sempre que professorSelecionado mudar e ai chama a função para limpar o formulario

    function marcarAula(){
      if (professorSelecionado !== null){
        if(validarDadosAula()){
          ApiService.post('professores/' + professorSelecionado.id +'/aulas/', {nome, email}).then(() => {
            setProfessorSelecionado(null)
            setMensagem('Cadastrado com sucesso')
          }).catch((error) => {
            setMensagem(error.response?.data.message)
          })
        } else {
          setMensagem('Preencha os campos corretamente')
        }
      }
    }

    function validarDadosAula(){
      return nome.length > 0 && email.length > 0;
    }

    function limparFormulario(){
      setNome('')
      setEmail('')
    }

  return {listaProfessores, nome, setNome, email, setEmail, professorSelecionado, setProfessorSelecionado, marcarAula, mensagem, setMensagem} //Retornando pra quem chamar esse hook a lista
}