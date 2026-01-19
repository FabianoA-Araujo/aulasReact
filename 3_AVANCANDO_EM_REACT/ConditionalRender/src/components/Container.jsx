const Container = ({children, myValue}) => {
  return (
    <div>
        <h2>Este é o título.</h2>
        {children}
        <p>o Valor é: {myValue}</p>
    </div>
  )
}

export default Container