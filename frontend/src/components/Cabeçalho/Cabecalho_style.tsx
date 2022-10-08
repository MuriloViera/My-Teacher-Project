//Isso aqui TAMBEM é um container, mas é um container especial que carrega estilos CSS

import { styled } from "@mui/material";

//Container estilizado, dentro do styled eu passo a tag que eu quero passar os estilos, e dps passo eles
//Em resumo, esse container é uma tag header
export const CabecalhoContainer = styled('header')`
    width: 70vw;
    margin: 10vh auto 10vh auto;
    text-align: center;
`;

//Container img (minha tag img)
export const Logo = styled('img')`
    width: 50%;
`;