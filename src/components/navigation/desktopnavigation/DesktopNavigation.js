import './DesktopNavigation.css'
import { useHistory } from 'react-router-dom'
import logotype from '../../../shared/images/logotype.svg'
import routingPath from '../../../routes/RoutingPath'
import { useContext } from 'react'
import { UserContext } from '../../../shared/provider/UserProvider'

export const DesktopNavigation = () => {
    const history = useHistory()
    const [authenticatedUser, setAuthenticatedUser] = useContext(UserContext)

// const displayAuthUserOrSignIn = () =>{
//     if (authenticatedUser) {
//         return <span className='loggedInUser'> {authenticatedUser} </span>
//     } else {
//         return <span className='signInButton' onClick={() => history.push(routingPath.signInView)}>sign In</span>
//     }
// }

// exakt samma resultat som funktion ovan, fast m. ternery operator
const displayAuthUserOrSignIn2 = () => {
    return authenticatedUser
        // om true, körs kod efter frågetecken
        ? <span className='authUserNavigation'> {authenticatedUser} </span>
        : <span className='signInButton' onClick={() => history.push(routingPath.signInView)}>sign In</span>
}
    return (
        <div className='desktopNavigationWrapper'>
            <img  className='navLogo' onClick={() => history.push (routingPath.homeView)} src={logotype} alt={'error'}></img>
            <span className='shopButton' onClick={() => history.push(routingPath.shopView)}>shop</span>
            <span className='galleryButton' onClick={() => history.push(routingPath.galleryView)}>gallery</span>
            <span className='newsButton' onClick={() => history.push(routingPath.newsView)}>news</span>
            {displayAuthUserOrSignIn2()}
        </div>
    )
}
