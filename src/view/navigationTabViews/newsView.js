import PokemonAPIService from '../../shared/api/service/PokemonAPIService'
import { useState, useEffect } from 'react'
import { useHistory } from 'react-router-dom'
import RoutingPath from '../../routes/RoutingPath'


export const NewsView = () => {
    // Sätt initial value till tom array för att kunna exekvera map i displayData
    const [APIData, setAPIData] = useState([])
    const [loading, setLoading] = useState(true)
    const history = useHistory()

    const fetchData = async () => {
        try {
            const { data } = await PokemonAPIService.get100Pokemons()
            setAPIData(data)
                setLoading(false)
        } catch (error) {
            console.error(error)
        }
    }

    useEffect(() => {
        fetchData()
    })

    const displayData = () => {
        if (!loading) {
        return APIData?.results?.map((x) =>
            <div key={x.name}>
                <h1 onClick={() => history.push(RoutingPath.itemDetailView, x)}>{x.name}</h1>
            </div>
        )}
    }

    return (
        <div>
            <h1 onClick={() => console.log(APIData)}>news view</h1>
            {displayData()}
        </div>
    )
}
