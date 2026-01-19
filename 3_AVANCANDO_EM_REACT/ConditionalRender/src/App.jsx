import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import ManageData from './components/ManageData'
import ListRender from './components/ListRender'
import ConditionalRender from './components/ConditionalRender'
import ShowUserName from './components/ShowUserName'
import CarDetails from './components/CarDetails'
import Fragments from './components/Fragments'
import Container from './components/Container'

function App() {
  const [count, setCount] = useState(0)
  const name = "Francisco";
  const [userName] = useState("Luana");

  const cars = [
    {id: 1, brand: "Honda", color: "preta", km: 0, newCar: true  },
    {id: 2, brand: "Chevrolet", color: "prata", km: 198432, newCar: false  },
    {id: 3, brand: "Peugeot", color: "vermelha", km: 98431, newCar: false  },
  ];

  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
      <div className="hooks">
      <ManageData/>
      <ListRender/>
      <ConditionalRender/>
      {/* props */}
      <ShowUserName name={[name, userName]}/>
      {/* destructuring */}
      <CarDetails brand="Peugeot" color="cinza" km={15000} newCar = {false}/>
      {/* reaproveitando */}
      <CarDetails brand= "Ford" color="vermelha" km={0} newCar = {true}/>
      <CarDetails brand= "Honda" color="preta" km={50000} newCar = {false}/>
      {/* loop com array de objetos */}
      {cars.map((car) =>(
        <CarDetails
         brand={car.brand}
         color={car.color}
         km={car.km}
         newCar={car.newCar}
        />        
      ))}
      </div>
      {/* Fragments */}
      <Fragments propFragment="teste"/>
      {/* Children */}
      <Container myValue = "testando">
        <p>E este é o conteúdo.</p>
      </Container>
      <Container myValue = "testando 2">
        <h5>Testando o container.</h5>
      </Container>
    </>
  )
}

export default App
