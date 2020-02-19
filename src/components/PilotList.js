import React from 'react'
//import {getPilots} from '../services/sw-api'

async function getPilots(urls) {
    const promises = urls.map(url => fetch(url).then(res => res.json()));
    const pilotObjects = await Promise.all(promises);
    return pilotObjects;
}
const PilotList = (props) => {
    console.log(props.pilots)
    const pilotUrls = props.pilots
    if (props.loading) {
        return (<div> Getting data...</div>)
    }
    if(props.pilots.length < 1){
        return(<div><h3>No Pilots</h3></div>)
    }
    

    return (
        <div>
            <ul>
                {
                getPilots(pilotUrls).then(pilots => pilots.map(pilot => 
                <li>Name: {pilot.name} Height: {pilot.height} Birth Year: {pilot.birth_year}</li>
                ))}
            </ul>
        </div>
    )
}

export default PilotList
