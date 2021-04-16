import { useState, useContext } from 'react'
import { UserContext } from '../../shared/provider/UserProvider'
import { useHistory } from 'react-router-dom'
import RoutingPath from '../../routes/RoutingPath'

export const SignInView = () => {
    // states
    const history = useHistory()
    const [username, setUsername] = useState('')
    const [authenticatedUser, setAuthenticatedUser] = useContext(UserContext)

    const signIn = () => {
        setAuthenticatedUser(username)
        localStorage.setItem('username', username)
        history.push(RoutingPath.homeView)
    }
    
    // FRÅN GENOMGÅNG 3
    // const [username, setUsername] = useState('Björn');
    // const [password, setPassword] = useState('');

    // const saveDataToBrowser = () => {
    //     localStorage.setItem('username', 'björn');
    // }

    // const removeDataFromeBrowser = () => {
    //     localStorage.removeItem('username');
    // }

    return (
        <div>
            <span>Username: </span><input onChange={event => setUsername(event.target.value)} /> <br />
            <button onClick={() => signIn()}>Sign in</button>
            {/* <h1>{username}</h1>
            <h1>display password: {password}</h1> */}
            {/* <span>Username: </span><input onChange={event => setUsername(event.target.value)} /> <br />
            <span>Password: </span><input onChange={event => setPassword(event.target.value)} /> */}
            {/* <button onClick={() => saveDataToBrowser()}>SaveDataToButton</button>
            <button onClick={() => removeDataFromeBrowser()}>removeDataFromBrowser</button> */}
        </div>
    )
};  




//     const [loading, setLoading] = useState(false);

//     const displayData = () => {
//         if (loading) {
//             return (
//                 <div>
//                     <h1>{username}</h1>
//                     <button onClick={() => setUsername('randomName')}>Update state value</button>
//                 </div>
//             )
//         }
//     }
//     return (
//         <div>
//             {/* !loading = det motsatta värdet från nuvarande > typ toggle-effekt alltså */}
//             <h1 onClick={() => setLoading(!loading)}>Show the data baby</h1>
//             {displayData()}
//         </div>
//     )
// }