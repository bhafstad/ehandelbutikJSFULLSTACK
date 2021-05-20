import E_COMMERCE_APIservice from "../../shared/api/service/E_COMMERCE_APIservice"
import { useState } from 'react'


export const ProfileView = () => {
    const [serverResponse, setServerResponse] = useState([])

    const fetchData = async () => {
        const { data } = await E_COMMERCE_APIservice.getAllUsers()
        setServerResponse(data)
        console.log(data)
    }

    const displayData = () => {
        return (
            serverResponse.map((x) => <h1>{x.username}</h1>)
        )
    }

    return (
        <div>
            <button onClick={() => fetchData()}>Make call to backend</button>
            {displayData()}
        </div>
    )
}
