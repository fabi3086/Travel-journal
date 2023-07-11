import React from "react"
import Navbar from "./components/Navbar"
import Cards from "./components/Cards"
import data from "./data"

export default function App() {
    const cards = data.map(element => {
        return (
            <Cards
                key={element.id} 
                element={element}
            />
        )
    })
    return (
       <div>
            <Navbar />
            <section className="cards-display"> 
                {cards}
            </section>  
       </div> 
    )
}