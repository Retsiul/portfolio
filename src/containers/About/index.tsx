import Title from '../../components/Title'
import Paragraph from '../../components/Paragraph'
import { GithubSection } from './styles'
const About = () => (
  <section>
    <Title fontSize={16}>About me</Title>
    <Paragraph tipo="principal">
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore
      molestias explicabo quia error. Blanditiis sed dolores ut quam, magni
      voluptates reiciendis quos quaerat excepturi eveniet voluptatibus. Dolorum
      ab repellat nostrum.
    </Paragraph>
    <GithubSection>
      <img src="https://github-readme-stats.vercel.app/api?username=Retsiul&show_icons=true&theme=dracula&include_all_commits=true&count_private=true" />
      <img src="https://github-readme-stats.vercel.app/api/top-langs/?username=Retsiul&layout=compact&langs_count=7&theme=dracula" />
    </GithubSection>
  </section>
)
export default About
