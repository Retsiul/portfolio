import styled from 'styled-components'
type BotaoProps = {
  principal?: boolean
  fontSize?: string
}
const Botao = styled.button<BotaoProps>`
  background-color: ${(props) => (props.principal ? 'green' : 'blue')};
  font-size: ${(props) => props.fontSize || '16px'};
`
const BotaoPerigo = styled(Botao)`
  background-color: black;
  color: white;

  span {
    text-decoration: line-through;
    text-decoration-color: red;
  }
`
function Teste() {
  return (
    <>
      <Botao fontSize="20px" principal>
        Olá
      </Botao>
      <Botao principal={false}>Olá</Botao>
      <BotaoPerigo as="a" fontSize="20px">
        <span>Não clique aqui</span>
      </BotaoPerigo>
    </>
  )
}
export default Teste
