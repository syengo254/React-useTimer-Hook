import './App.css'
import { useTimer } from './hooks/useTimer'

function App() {
  const {count, reset: setCount} = useTimer();

  return (
    <div className="App">
      Count: { count }
      <button onClick={() => setCount()}>Reset</button>
    </div>
  )
}

export default App
