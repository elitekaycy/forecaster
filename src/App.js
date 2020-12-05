import {useEffect} from 'react'
import Home from './Pages/Home'

function App() {

  useEffect(() => {
    document.title = 'forecaster'
  })

  return (
    <div className="App">
      <Home />
    </div>
  );
}

export default App;
