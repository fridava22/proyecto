const App = () => {
    const miObjeto = {
        nombre: "frida valeria",
        apPaterno: "hernandez",
        apMaterno: "cabrera",
        edad: "23"
    };
    const atributo = "apPaterno";

    return (
    <div className="App">
      <h1>{`mi nombre es ${miObjeto.nombre} ${miObjeto.apPaterno} ${miObjeto.apMaterno} y tengo ${miObjeto.edad} años`}</h1>
    </div>
    );
};

export default App;