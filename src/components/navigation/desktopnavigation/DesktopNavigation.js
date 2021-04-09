import './DesktopNavigation.css'
import { useHistory } from 'react-router-dom'
import logotype from '../../../shared/images/logotype.svg'
import routingPath from '../../../routes/routingPath'

export const DesktopNavigation = () => {
    const history = useHistory()

    return (
        <div className="desktopNavigationWrapper">
            <img  className="navLogo" onClick={() => history.push (routingPath.homeView)} src={logotype} alt={"error"}></img>
            <span className="shopButton" onClick={() => history.push(routingPath.shopView)}>shop</span>
            <span className="galleryButton" onClick={() => history.push(routingPath.galleryView)}>gallery</span>
            <span className="newsButton" onClick={() => history.push(routingPath.newsView)}>news</span>
            <span className='signInButton' onClick={() => history.push(routingPath.signInView)}>sign In</span>
        </div>
    )
}
