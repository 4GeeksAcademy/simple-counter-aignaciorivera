import React from "react"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faClock } from '@fortawesome/free-solid-svg-icons'



const Cards = (props) => {
        return <> 
    <div class="card bg-dark text-white">
    <div class="card-body">
        <h1>{props.icon ? <FontAwesomeIcon icon={faClock} /> : props.num}</h1>
    </div>
</div>
</>
} 

export default Cards;