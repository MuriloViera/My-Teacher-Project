//Componentes estilizados para o componente lista

import { styled } from "@mui/material";

export const ListaStyled = styled('ul')`
    width: 100%;
    max-width: 700px;
    margin: 0 auto;
    padding: ${({theme}) => theme.spacing(10, 2 , 10, 2)};
    display: grid;
    grid-template-columns: 1fr 1fr; //So lembrando que fr é fração, ou seja, 1fr e 1fr é igual a 50% e 50%
    gap: 10vw;
    ${({theme}) => theme.breakpoints.down('md')}{ //estilos que serao aplicados quando o tamanho da tela ser menor que medio
        grid-template-columns: 1fr;
        gap: 8vh; 
    }
`;

export const ItemLista = styled('li')`
    list-style: none;
`;

export const Foto = styled('img')`
    width: 100%;
`;

export const Nome = styled('h3')`
    margin: 3vh 0 0 0;
`;

export const Valor = styled('p')`
    margin: 0;
    font-weight: bold;
    color: ${({theme}) => theme.palette.primary.main}; //To acessando o arquivo theme que tem o componente theme, ai dele to pegando so a informação do pallet
`;

export const Descrição = styled('p')`
    word-break: break-word;
`;

export const Informações = styled('div')``;

export const ListaVazia = styled('h2')`
    text-align: center;
    padding: 10vh 0;
`;