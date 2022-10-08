import { Button } from "@mui/material";
import { Professor } from "../../@types/professor";
import { Descrição, Foto, Informações, ItemLista, ListaStyled, ListaVazia, Nome, Valor } from "./Lista_style";

interface ListaProps {
    professores: Professor[],
}

const Lista = (props: ListaProps) => { //Componente lista, que recebe uma lista de objetos
    return (
        <div>
            {props.professores.length > 0 ? ( //Operador ternário

                 <ListaStyled>
                 {props.professores.map(professor => (
                     <ItemLista key={professor.id}>
                         <Foto src={professor.foto}></Foto>
                         <Informações>
                             <Nome>{professor.nome}</Nome>
                             <Valor>{professor.valor_hora.toLocaleString('pt-BR', {minimumFractionDigits: 2, style: 'currency', currency: 'BRL'})} por hora</Valor>
                             <Descrição>{professor.descricao}</Descrição>
                             <Button sx={{width: '70%'}}>Marcar aula com Murilo</Button>
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