import { useState } from 'react'
import StarWarsAPIService from '../../shared/api/service/StarWarsAPIService'

export const GalleryView = () => {
    const [data, setData] = useState()
    const [characterID, setCharacterID] = useState()

    // inte rekommenderat skapa globala värden genom att utnyttja local storage
    // kan ske renderingsfel - om man uppdaterar värdet manuellt, kommer det troligen inte uppdateras på sidan
    // const username = localStorage.getItem('username')

    // const fetchData = () => {
    //     // http-adress till data - get hämtar data
    //     Axios.get('https://swapi.dev/api/people/1')
    //         // eftersom asynkront, först när data hämtats - response loggas = hämtad data visas i console
    //         .then(response => { console.log(response) })
    //         // om servern ligger nere - error-message loggas
    //         .catch(error => { console.log(error) })
    // }

    // Async-await varianten
    const fetchData2 = async () => {
        // async-await motsvarighet till .catch = try/catch-statement
        try {
            // talar om att funktionen ska vara asynkron och vänta på att detta anrop ska köras färdig och sedan lagra objektet som returneras inuti response
            const response = await StarWarsAPIService.getStarWarsCharacter(characterID)
            setData(response.data)
        } catch (error) {
            console.log('error occured: ', error)
        } 
    }

    return (
        <div>
            {/* <h1>{username}</h1> */}
            <button onClick={() => fetchData2()}>make api call</button>
            <button onClick={() => console.log(data)}>check my state</button>
            <input placeholder='search for character ID' onChange={event => setCharacterID(event.target.value)} /> 
           {/* optional chaining - ? */}
            <h1>{data?.name}</h1>
            <h1>{data?.hair_color}</h1>
            <h1>{data?.gender}</h1>
        </div>
    )
}

