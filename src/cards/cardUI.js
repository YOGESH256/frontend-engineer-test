
import './card.css'
import React, { useState } from "react";

 const Card = ({card_title , card_description , card_owner , card_role , card_date , card_image , im }) => {

   const [modal, setModal] = useState(false);
   const [cards, setCards] = useState();

   const buttonStyles = {
     position: "absolute",
     top: "10px",
     right: "10px",
     display: "block"

   };


   const toggleModal = () => {
     setModal(!modal);
     setCards({card_owner , card_title , card_role , card_description , card_date , card_image})
   };

   if(modal) {
     document.body.classList.add('active-modal')
   } else {
     document.body.classList.remove('active-modal')
   }


  return (
    <div className = "card">
    <div className = "card_body">


    <img  onClick={im  === false && toggleModal }  src = {card_image}  className = "card_image"  />
     



    <h2  className = "card_title">{card_title}</h2>
    <p  className = "card_description">{card_description} </p>

    </div>
    <div className = "card_footer ">
    <p  className = "card_owner"> {card_owner} : {card_role}</p>
    <p  className = "card_Date">{card_date} </p>
    </div>

    {modal && (
      <div className="modal">

        <div onClick={toggleModal} className="overlay"></div>


        <div className="modal-content">

        <button className="close-modal" onClick={toggleModal}>
          x
        </button>

        <Card  im = {true} card_image = {card_image} card_owner = {card_owner} card_description = {card_description} card_owner = {card_owner} card_role = {card_role} card_date = {card_date } card_title = {card_title} />


        </div>
      </div>
    )}

    </div>

  )

}


export default Card;
