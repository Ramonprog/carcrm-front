import { useAppDispatch, useAppSelector } from "./store/store"
import { increment, decrement } from "./store/slices/example-slice"
import { Button } from "@mui/material"


function App() {
  const dispatch = useAppDispatch();
  const count = useAppSelector((state) => state.example.count)

  return (
    <>
      <Button variant="contained" onClick={() => {
        dispatch(increment())
      }}>Increment</Button>
      <Button variant="contained" onClick={() => dispatch(decrement())}>Decrement</Button>

      <h1 className="">{count}</h1>
    </>
  )
}

export default App
