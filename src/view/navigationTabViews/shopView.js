import { useEffect, useState } from 'react'

export const ShopView = () => {
    const [counter, setCounter] = useState(0)
useEffect(() => {
    alert('first render')
    return () => { 
        { alert('last render')}
    }
}, [counter])

    return (
        <div>
            <h1 onClick={() => setCounter(counter + 1)}>{counter}</h1>
            <h1>shop view</h1>
        </div>
    )
}


// Det första som kommer ske när komponent ShopView renderas
// Viktig funktion, kan användas till tex. API-anrop
// useEffect (() => { alert("first render")})