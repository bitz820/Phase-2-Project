import React, { useState } from 'react'
import logo3 from "../Media/3Team.png"
import logo5 from "../Media/5Team.png"
import Button from 'react-bootstrap/Button'
import 'bootstrap/dist/css/bootstrap.min.css'
import Modal from 'react-bootstrap/Modal'
import { useHistory } from 'react-router-dom'
import './MiniCard.css'

function MiniCard({ data }) {
    const { name, type, playersNeeded, color, date, court } = data
    const teamTypeStyle = type === "3v3" ? logo3 : logo5
    const bgcolor = color.toLowerCase()
    let textColor;
    (bgcolor === "white" || bgcolor === "yellow") ? textColor = "black" : textColor = "white"
    const available = playersNeeded > 0 ? `Players Needed: ${playersNeeded}` : "Team Full!"
    const [show, setShow] = useState(false)
    const history = useHistory()

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const handleJoinGame = () => {
        console.log("hi!")
        history.push("/playInAGame")
    }
    return (
        <div style={{ background: bgcolor, color: textColor }} id='minicards' className={`card-container ${name}`}>
            <div className='card-title'>
                <h1>Team: {name}</h1>
            </div>
            <div className='image-container'>
                <img src={teamTypeStyle} alt="type of game" />
            </div>
            {/* This will eventually be a redirect to a route for the card clicked on, viewing full details of that team! */}
            <div className='miniCard-body'>
                <p>Game Date: {date}</p>
                <Button variant="secondary" size="sm" onClick={handleShow}>See More Info</Button>
                <Modal show={show}>
                    <Modal.Body> 
                    {show ? (<div>
                    <h2>TEAM: {name.toUpperCase()} </h2>
                    <h5>{available} </h5>
                    <img className="img-modal" src={teamTypeStyle} alt="type of game"></img>
                    <p>Team Color: {color} </p>
                    <p>Court Number: {court}</p>
                    <p>Game Date: {date}</p>
                    
                </div>)
                    :
                    null}
                    </Modal.Body>
                    <Modal.Footer>
                    <Button variant="primary" onClick={handleJoinGame}>Join</Button>
                    <Button variant="secondary" onClick={handleClose}>Close</Button>
                    </Modal.Footer>
                </Modal> 
            </div>
        </div>
    )
}

export default MiniCard