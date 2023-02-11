import React from "react";
import "./destination.style.css"

const Destination = () => {
    return (
        <section className="destinations">
            <h3 className="title">Some of our Destinations:</h3>
            <p>Tried of the ocean? Are the plains too plain? Come along with us on one of our mountain adventures.
                Here are some pictures from the people who have had elevated experience with us.
            </p>
            <hr />
            <ul className="grid">
                <li className="small"></li>
                <li className="large"></li>
                <li className="large1"></li>
                <li className="small1"></li>
            </ul>
        </section>
    )
}

export default React.memo(Destination);