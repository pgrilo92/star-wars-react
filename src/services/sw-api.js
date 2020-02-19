export function getStarships() {
    const starUrl='https://swapi.co/api/starships/'
    return fetch(starUrl, {mode: 'cors'}).then(res=> res.json())
}

export function pilotsFunc(pilot) {
    return fetch(pilot, {mode: 'cors'}).then(res => res.json())
}
