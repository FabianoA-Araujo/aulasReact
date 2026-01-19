const TemplateExpressions = () => {

    const name = "Fabiano";
    const data = {
        age: 32,
        jobe: "Developer",
    };
    
    return(
        <div>
            <h1>Olá, {name}! Tudo bem?</h1>
            <p>Você atua como: {data.jobe}?</p>
            <p>{4* 2}</p>
        </div>
    );

};

export default TemplateExpressions