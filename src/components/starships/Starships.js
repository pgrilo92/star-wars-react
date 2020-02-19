import React from 'react'
//import StarshipPage from '../../pages/staship-page/StarshipPage'
import {Link} from 'react-router-dom'
import './Starships.css'

const Starships = (props) => {
    return (
        <div className='row'>
            {
            
            props.starships.map( (starship, id) => (
            <div className='col-4'>
            <div className='card'>
                <div class="card-body">
                    <Link to={{
                        pathname: `/starships/${id}`,
                        state: {starship}
                    }} key={starship.name}><h5 class="card-title">{starship.name}</h5></Link>
                </div> 
            </div>
            </div>
            ))}
        </div>
    )
}

export default Starships
