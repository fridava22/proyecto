const App = () => {
  const persona = {
  nombre: "Frida Valeria",
  apellido: "Hernandez Cabrera",
  edad: 23,
  direccion:{
  calle: "Emiliano Zapata",
  numExt: 30,
  numint: "",
  ciudad: "San Lucas Ojitlan",
  }
  };
  
  const contactoPersona = {
  telefono: "287 151 7439",
  email: "isc18350715@gmail.com",
  web: "www.thesimpsons.com",
  };
  
  const infoPersona = {...persona,...contactoPersona, empresa: "Disney"};
  infoPersona.apodo = "Bart";
  
  infoPersona.telefono = "555 555 5555";
  
  console.table(infoPersona);
  
  const{edad, nombre, apellido}= persona;
  const{calle, numExt, numint,ciudad,} = persona.direccion;
  const humanos = ["fabian", "liliana","fabian de jesus", "karol maximiliano"];
  const[padre, madre, hermano1, hermano2]= humanos;
  const mascotas = ["Santa's helper", "show ball"]
  const familia =[...humanos,...mascotas, "Milhouse"]
  console.log(familia) 

  return (
  <div className="App">
  <h1>{`Mi nombre es ${nombre} ${apellido} y tengo ${edad} años y vivo en la C. ${calle} numero ${numExt},${ciudad}`}</h1>
  <br />
  {"Mi familia la conforman:"}
  <ul>
  <li>{`Mi padre: ${padre}`}</li>   
  <li>{`Mi madre: ${madre}`}</li>
  <li>{`Mis hermanos: ${hermano1} y ${hermano2}`}</li>
  </ul>
  </div>
  );
  }
  
  export default App;