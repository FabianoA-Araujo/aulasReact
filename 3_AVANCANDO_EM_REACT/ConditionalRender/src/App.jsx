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
import ExecuteFunction from './components/ExecuteFunction'
import Message from './components/Message'
import ChangeMessageState from './components/ChangeMessageState'
import DesafioQuatro from './components/DesafioQuatro'

function App() {
  const [count, setCount] = useState(0)
  const name = "Francisco";
  const [userName] = useState("Luana");

  const cars = [
    {id: 1, brand: "Honda", color: "preta", km: 0, newCar: true  },
    {id: 2, brand: "Chevrolet", color: "prata", km: 198432, newCar: false  },
    {id: 3, brand: "Peugeot", color: "vermelha", km: 98431, newCar: false  },
  ];

  function showMassage () {
    console.log("Evento do componente pai!")
  };

  const [message, setMessage] = useState ("");

  const handleMessage = (msg) => {
    setMessage(msg);
  }

  const habilitationUsers = [
    {id: 1, name: "Fabiano Alves Araujo", age: 32, profession: "Developer" },
    {id: 2, name: "Luana Rodrigues Tulio Araujo", age: 30, profession: "Teacher" },
    {id: 3, name: "Francisco Rodrigues Alves", age: 2, profession: "Student" },
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
         key={car.id} //id aqui só para zerar o warn do React.
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
      {/* Executar função como prop */}
      <ExecuteFunction myFunction={showMassage}/>
      {/* State lift */}
      <Message msg={message}/>
      <ChangeMessageState handleMessage={handleMessage}/>
      {/* Desafio 4 */}
      {habilitationUsers.map((personas) => (
          <DesafioQuatro
            key={personas.id}
            name={personas.name}
            age={personas.age}
            profession={personas.profession}
          />
      ))}        
  
    </>
  )
}

export default App
