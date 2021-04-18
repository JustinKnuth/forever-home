import axios from "axios";
import { useEffect, useState } from "react";
import Nav from "./components/a:(nav)/Nav";
import Home from "./components/home/Home";
import TheDog from "./components/home/TheDog";
import Foot from "./components/z:(footer)/Foot";
import MyApp from "./_app.jsx";
import "./App.css"

function App(props) {
  const [dogs, setDogs] = useState([]);
  const [pic, setPic] = useState([])

  useEffect(() => {
    const getDogs = async () => {
      let url =
        "https://arcane-badlands-92920.herokuapp.com/https://api.petfinder.com/v2/animals";
      let res = await axios.get(url, {
        headers: {
          Authorization:
            "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiI4aVNDdW5EWnIzZ1F0UEdHdjI0dG9pVUp6Q0xCQm1HWjJyNjlkQ3g3dmEzRno0VHZwZiIsImp0aSI6IjI1MTJjNmFkZjE2NWE3OGUzMTY1OGJiYTg2ZjVjYThhMTJiYTRkMzc0NjYzMGExMmNjYzcyZmIwNWIxMjQ4MjdhZmEyNWEwMjFjNmFjMjFhIiwiaWF0IjoxNjE4NzA4MDk1LCJuYmYiOjE2MTg3MDgwOTUsImV4cCI6MTYxODcxMTY5NSwic3ViIjoiIiwic2NvcGVzIjpbXX0.AkzCLhPY5mL1iKXIZ8bxcE1XD8y_OPIqle01Y8bkhCTFP__Kpsc1DcR805aBKvXVdZ1N7mHwT5tQ-3S6RihgHfKIbALMJSlrtQ_pV0xLNodlWPubqhl7SdxF5tDYHnS0wKp4hsOtKxfH0zXNGodaIjHwWnvXuLc78pfGKXYwu16UInqtuVsJzswXihcVlqfJ24Qm61IkPNrWn3VgEQXUvcUCnQKRBCdkmOaeARg7ciji8ej9ICD1WLP672RlqWNAj_QQgoYq_0VRK63O6PA3o2TYslNQj8omDN7iR7q9EBEdWeXDoJJKGTxHoDxvHGYSX5R-SuaNYt4rVYp0r7M9Cg",
        },
      });

      setDogs(res.data.animals);
      
      //console.log(res.data.animals);

    };
    getDogs();
  }, []);

//console.log(dogs)

  
  for (let i = 0; i < dogs.length; i++) {
    //console.log(dogs[i].photos[0])
    let that = [dogs[i].photos]
    //console.log(that)
    for (let j = 0; j < that.length; j++) {
      //console.log(that[j][0])
      let tits = [that[j][0]]
      //console.log(tits)
    
      for (let k = 0; k < tits.length; k++){
        console.log(tits[k])
      }
    }
  }
   
  //   // for (let j = 0; j < dogs.photos.length; j++){
    //   console.log()
    // }
  


  return (
    <div className="App">
      <Nav />
      <Home />
      <Foot />
      {dogs.map((dog) => (
        <div>
          <img className="dog-photos" src={dog.photos} />

          <h2>{dog.type}</h2>
          <h3>{dog.name}</h3>

        </div>
       
      ))}
    </div>
  );
}

export default App;
