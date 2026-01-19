import { useState } from 'react'
import './App.css'

// Components
import ManageData from './components/ManageData'


//import de imagens
import City from './assets/city.jpg'
import ListRender from './components/ListRender'
import ConditionalRender from './components/ConditionalRender'


function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <h1>Avançando em React - Desafio 3</h1>
      {/* Imagem em public */}
      <div>
        <img src="/img1.jpg" alt="Paisagem" />
      </div>
      {/* Imagem em assets */}
      <div>
        <img src={City} alt="Cidade" />
      </div>
      <ManageData/>
      <ListRender/>
      <ConditionalRender/>
    </div>
  )
}

export default App
