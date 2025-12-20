import Avatar from '../../components/Avatar'
import Paragraph from '../../components/Paragraph'
import Title from '../../components/Title'
import { Description, ThemesButtom, SidebarContainer } from './styles'
type Props = {
  changeTheme: () => void
}
const Sidebar = (props: Props) => {
  return (
    <aside>
      <SidebarContainer>
        <Avatar />
        <Title fontSize={20}>Luis Fernando</Title>
        <Paragraph fontSize={16} tipo="secundario">
          Retsiul
        </Paragraph>
        <Description tipo="principal" fontSize={12}>
          Engennheiro Front-End
        </Description>
        <ThemesButtom onClick={props.changeTheme}>Trocar Tema</ThemesButtom>
      </SidebarContainer>
    </aside>
  )
}
export default Sidebar
