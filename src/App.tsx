import { ThemeProvider } from 'styled-components'
import EstiloGlobal, { Container } from './styles'
import Sidebar from './containers/Sidebar'
import About from './containers/About'
import Projects from './containers/Projects'
import lightTheme from './themes/light'
import darkTheme from './themes/dark'
import { useState } from 'react'
function App() {
  const [darkThemeState, setDarkTheme] = useState(false)
  const change = () => {
    setDarkTheme(!darkThemeState)
  }
  return (
    <ThemeProvider theme={darkThemeState ? darkTheme : lightTheme}>
      <EstiloGlobal />
      <Container>
        <Sidebar changeTheme={change} />
        <main>
          <About />
          <Projects />
        </main>
      </Container>
    </ThemeProvider>
  )
}
export default App
