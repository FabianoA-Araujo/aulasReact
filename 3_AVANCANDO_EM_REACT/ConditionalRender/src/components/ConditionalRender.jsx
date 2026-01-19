import { use, useState } from "react"

const ConditionalRender = () => {
    const [x, setx] = useState (true);

    const [name, setName] = useState("Francisco");
    

  return (
    <div>
        <h1>Isso será exibido?</h1>
        {x && <p>Se x for true, sim!</p>}
        {/* <button onClick={() =>setx(false)}>Mudar para false</button>  */}
        <h1>If ternário</h1>
        {name === "Fabiano" ? (
            <div>
                <p>O nome é Fabiano</p>
            </div>
        ) : (
            <div>
                <p>Nome não encontrado</p>
            </div>
        )};
        <button onClick={() => setName("Fabiano")}>Mudar nome</button>
    </div>
  )
}

export default ConditionalRender