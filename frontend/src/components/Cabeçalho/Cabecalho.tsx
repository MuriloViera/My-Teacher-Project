import { CabecalhoContainer, Logo } from "./Cabecalho_style"

//Container que vai estar com os containeres estilizados
const Cabecalho = () => {
    return(
        //To usando um container dentro de outro container(dica: encara components como tags)
        <CabecalhoContainer> 
            <div>
                <Logo src="/images/myteacherlogo.png"></Logo>
            </div>

            <p>Encontre o professor perfeito</p>
        </CabecalhoContainer> 
    )
}

export default Cabecalho