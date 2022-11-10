import logo from './logo.svg';
import './App.css';
import Card from './cards/cardUI.js'
import {React , useEffect , useState}  from "react";
import axios from "axios";






function App() {

 const [cards, setCards] = useState([]);


  useEffect(() => {

    const ui = async() => {

    const a = await axios.get("https://my-json-server.typicode.com/Codeinwp/front-end-internship-api/posts")

    setCards(a.data);

  }

  ui();



} , [])

  return (
    <div className="wrapper">

      {

        cards.map((co) =>
           <Card  key = {co._id}  im = {false} card_image = {co.thumbnail.large} card_title = {co.title} card_description = {co.content} card_owner = {co.author.name} card_role = {co.author.role}  card_date = {new Date(co.date).toDateString()}/>

        )
      }






    </div>
  );
}

export default App;
