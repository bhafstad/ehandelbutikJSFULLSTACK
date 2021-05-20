// import { useEffect, useState } from 'react'

import PokemonAPIService from "../../shared/api/service/PokemonAPIService"
import { useState, useEffect } from 'react'
import { useDebounce } from '../../hooks/useDebounce'

export const ShopView = () => {
//     const [counter, setCounter] = useState(0)
// useEffect(() => {
//     alert('first render')
//     return () => { 
//         { alert('last render')}
//     }
// }, [counter])
    const [data, setData] = useState()
    const [search, setSearch] = useState('')
    const debounceSearchTerm = useDebounce(search, 2000)

    const fetchData = async (x) => {
        if (debounceSearchTerm) {
        const { data } = await PokemonAPIService.searchCharacter(x)
        setData(data)
        } 
    }

    useEffect(() => {
        fetchData(search)
    }, [debounceSearchTerm])

    return (
        <div>
             <input placeholder='search for pokemon' onChange={event => setSearch(event.target.value)}/>
            {/* <h1 onClick={() => setCounter(counter + 1)}>{counter}</h1> */}
            {/* <button onClick={() => fetchData(search)}>Get Data</button>
            <button onClick={() => console.log(data)}>Show State Data</button> */}
            <h1>Name: {data?.name}</h1>
            <h1>Height: {data?.height}</h1>
            <h1>Weight: {data?.weight}</h1>
            <h1>Id: {data?.id}</h1>
            <h1>Type: {data?.types?.[0]?.type?.name}</h1>
        </div>
    )
}


// Det första som kommer ske när komponent ShopView renderas
// Viktig funktion, kan användas till tex. API-anrop
// useEffect (() => { alert("first render")})