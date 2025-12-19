import { Card, LinkBottom } from './styles'
import Paragraph from '../Paragraph'
import Title from '../Title'
const Project = () => {
  return (
    <Card>
      <Title>Projeto Lista de tarefas</Title>
      <Paragraph tipo="secundario">Lista de tarefas feitas com VueJS</Paragraph>
      <LinkBottom>Visualizar</LinkBottom>
    </Card>
  )
}
export default Project
