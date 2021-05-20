import { useLocation } from 'react-router-dom'
import { useEffect, useState } from 'react'
import Axios from 'axios'

export const ItemDetail = () => {
    const [APIData, setAPIData] = useState()
    const [loading, setLoading] = useState(true)
    const location = useLocation()

    const fetchData = async () => {
        try {
            const { data } = await Axios.get(location.state.url)
            setAPIData(data)
            setLoading(false)
        } catch (error) {
            console.error(error)
        }
    }

    const displayData = () => {
        if (!loading) {
            return (
                <>
                    {/* <button onClick={() => console.log(APIData)}>show location</button> */}
                    {/* bildfil i  */}
                    <img src={APIData?.sprites.front_default} alt={'error'} />
                    <h1>Name: {APIData?.name}</h1>
                    <h1>Height: {APIData?.height}</h1>
                </>
            )
        }
    }

    useEffect(() => {
        fetchData()
    })

    return (
        loading ? <h1>LOADING!!!</h1>
            : <div>
                {displayData()}
            </div>
    )
}