import './App.css'
import { useTimer } from './hooks/useTimer'

function App() {
  const {count, reset} = useTimer();

  return (
    <div className="App">
      Count: { count }
      <button onClick={() => reset()}>Reset</button>
    </div>
  )
}

export default App
