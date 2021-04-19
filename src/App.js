import axios from "axios";
import { useEffect, useState } from "react";
import Nav from "./components/anav/Nav";
import Home from "./components/home/Home";
import TheDog from "./components/home/TheDog";
import Foot from "./components/zfooter/Foot";
import MyApp from "./_app.jsx";
import "./App.css";
import { Client } from "@petfinder/petfinder-js";



function App(props) {
  const [dogs, setDogs] = useState("");
  const [pic, setPic] = useState([]);
  const [token, setToken] = useState("");
  ucqm7tmSSaIeHRKu";


  var petfinder = require("@petfinder/petfinder-js");
var client = new petfinder.Client({apiKey: );
  //console.log(client)
  //let clientinfo = client
  //console.log(client)
  
  let info = client.config
  console.log(info.token)


  

  
client.animal.search()
    // .then(function (response) {
    //     // Do something with `response.data.animals`
    //   console.log(response.data.animals)
    // })
    // .catch(function (error) {
    //     // Handle the error
    // });

  
  

  async function showAnimals(animalType, searchBreed) {
    let page = 1;
    
      let apiResult = await client.animal.search({
        type: animalType,
        breed: searchBreed,
        page,
        limit: 100,
      });
      let dogIdx = (page - 1) * 100;
      apiResult.data.animals.forEach(function(animal) {
        console.log(` -- ${++dogIdx}: ${animal.name} id: ${animal.id} url: ${animal.url} photos: ${animal.photos[0]}`);
      });
  
      page++;
     
  }
  
  
  (async function() {
    await showAnimals("Dog");
    
  })();
  

  // useEffect(() => {
  //   const getDogs = async () => {
  //     let url =
  //       "https://arcane-badlands-92920.herokuapp.com/https://api.petfinder.com/v2/animals";
  //     let res = await axios.get(url, {
  //       headers: {
  //         Authorization:
  //           `Bearer {token}`,
  //       },
  //     });

  //     setDogs(res.data.animals);

  //     console.log(res.data.animals);

  //   };
  //   getDogs();
  // }, []);

  //console.log(dogs)

  return (
    <div className="App">
      <h1>yo</h1>
      
      {/* <Nav />
      <Home />
      <Foot /> */}
      {/* {console.log(dogs)}
      {dogs.map((dog) => (
        <div>
          <img className="dog-photos" src={dog.photos[0]?.large} />
          <h2>{dog.type}</h2>
          <h3>{dog.name}</h3>
        </div>
      ))} */}
    </div>
  );
}

export default App;
