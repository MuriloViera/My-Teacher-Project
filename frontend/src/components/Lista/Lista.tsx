import { Button } from "@mui/material";
import { useState } from "react";
import { Professor } from "../../@types/professor";
import { FromatadorService } from "../../services/FormatadorService";
import { Descrição, Foto, Informações, ItemLista, ListaStyled, ListaVazia, Nome, Valor } from "./Lista_style";

interface ListaProps {
    professores: Professor[],
    onSelect: (professor: Professor) => void
}

const Lista = (props: ListaProps) => { //Componente lista, que recebe uma lista de objetos

    //Hook é uma função que controla estados e a vida util do React
    const [contador,setContador] = useState(0); //Isso é um HOOK, e dentro dele passei o valor inicial dele, ele me retorna um array, sendo a primeira posição o estado atual, e na segunda uma função para atualizar esse estado

    return (
        <div>

            {/*Brincando com Hooks
            <div>Contador igual {contador}</div>
            <button onClick={() => setContador(contador+1)}>Somar +1</button>
            */}

            {props.professores.length > 0 ? ( //Operador ternário

                <ListaStyled>
                 {props.professores.map(professor => (
                     <ItemLista key={professor.id}>
                         <Foto src={professor.foto}></Foto>
                         <Informações>
                             <Nome>{professor.nome}</Nome>
                             <Valor>{FromatadorService.valorMonetario(professor.valor_hora)} por hora</Valor>
                             <Descrição>{FromatadorService.limitarTexto(professor.descricao, 200)}</Descrição>
                             <Button onClick={() => props.onSelect(professor)} sx={{width: '90%'}}>Marcar aula com {professor.nome}</Button>
                          </Informações>
                     </ItemLista>
                 ))}
                </ListaStyled>
               
            ) : (
                <ListaVazia>Nenhum item encontrado</ListaVazia>
            )}
        </div>
    )
}

export default Lista;