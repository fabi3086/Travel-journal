import React from "react"


export default function Cards(props) {
    return (
        <section className="cards-container">
            <img src={props.element.imageUrl} className="cards-images"/>
            <div className="cards-info">
                <div className="google-location">
                    <img src= "../images/Fill-219.svg" className="location-img"/>
                    <span className="black">{props.element.location}</span>
                    <a href={props.element.googleMapsUrl} className="gray">View on Google Maps</a>
                </div>
                <h1 className="title">{props.element.title}</h1>
                <span className="date">{props.element.startDate} - {props.element.endDate}</span>
                <p className="description">{props.element.description}</p>
            </div>
        </section>
    )
}