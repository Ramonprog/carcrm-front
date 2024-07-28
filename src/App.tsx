import { ThemeProvider } from "@mui/material"
import { theme } from "./style/theme"
import 'bootstrap/dist/css/bootstrap.css'

function App() {
  return (
    <ThemeProvider theme={theme}>
      <h1 className="text-daner">Hello World</h1>
    </ThemeProvider>
  )
}

export default App
