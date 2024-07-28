
import { ThemeProvider } from "@mui/material"
import { theme } from "./style/theme"

function App() {
  return (
    <ThemeProvider theme={theme}>
      <div>Hello World</div>
    </ThemeProvider>
  )
}

export default App
