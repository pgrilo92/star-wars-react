import React from 'react'
import {Link} from 'react-router-dom'
import PilotList from '../../components/PilotList'

const StarshipPage = (props) => {
    if (props.loading) {
        return (<div> Getting data...</div>)
    }
    let starship = props.starships[props.match.params.id]

    if (!starship) {
        return (<div>Not Found</div>)
    }

    return (
        <>
            <div className='card'>
                    <div className="card-body">
                        <h5 className="card-title">Name: {starship.name}</h5>
                        <h5 className='card-title'>Model: {starship.model}</h5>
                        <Link to='/'><h5 className='card-title'>Return</h5></Link>
                    </div> 
            </div>
            <PilotList pilots={starship.pilots} />
        </>
    )
}

export default StarshipPage
