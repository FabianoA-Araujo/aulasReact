const Challenge = () => {

    const numeroA = 5;
    const numeroB = 5;

    return(
        <div>
            <p>A = {numeroA}</p>
            <p>B = {numeroB}</p>            
            <button onClick={() => console.log("O resultado da soma é: "+ (numeroA + numeroB))}>Somar</button>
        </div>
    )

}

export default Challenge;