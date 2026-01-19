// components
import FirstComponent from './components/FirstComponent'
import TemplateExpressions from './components/TemplateExpressions'
import MyComponent from './components/MyComponent'
import Events from './components/Events'

import { useState } from 'react'

// styles / css
import './App.css'
import Challenge from './components/Challenge'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className="App">
        <h1>Fundamentos React</h1>
        <TemplateExpressions/>
        <FirstComponent/>
        <MyComponent/>
        <Events/>
        <Challenge/>
      </div>
    </>
  )
}

export default App
