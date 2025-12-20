import Title from '../../components/Title'
import Paragraph from '../../components/Paragraph'
import { GithubSection } from './styles'
import { useTheme } from 'styled-components'
const About = () => {
  const theme = useTheme()
  return (
    <section>
      <Title fontSize={16}>About me</Title>
      <Paragraph tipo="principal">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore
        molestias explicabo quia error. Blanditiis sed dolores ut quam, magni
        voluptates reiciendis quos quaerat excepturi eveniet voluptatibus.
        Dolorum ab repellat nostrum.
      </Paragraph>
      <GithubSection>
        <img alt="" src={theme.img1} />
        <img alt="" src={theme.img2} />
      </GithubSection>
    </section>
  )
}
export default About
