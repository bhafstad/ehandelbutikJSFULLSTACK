import { BrowserRouter, Switch, Route } from 'react-router-dom'
import { HomeView } from '../view/HomeView'
import { galleryView } from "../view/navigationTabViews/galleryView"
import { newsView } from "../view/navigationTabViews/newsView"
import { shopView } from "../view/navigationTabViews/shopView"
import { signInView } from "../view/navigationTabViews/signInView"
import routingPath from './routingPath'


export const Routes = ({children}) => {
    return (
        <div>
        <BrowserRouter>
            {children}
            <Switch>
                {/* /home kan namnges hursomhelst - detta är url-adressen för användaren! */}
                {/* <Route exact path={'/test'} component={TestView} /> */}
                {/* här brukar man ha 404-sida om app kraschar etc. - ingen path = denna sida är home, man behöver inte navigera till den*/}
                {/* Detta kallas Fallback-sida - om någon försöker gå in på sida som inte finns, skickas hen tillbaka hit */}
                <Route exact path={routingPath.galleryView} component={galleryView} />
                <Route exact path={routingPath.newsView} component={newsView} />
                <Route exact path={routingPath.shopView} component={shopView} />
                <Route exact path={routingPath.signInView} component={signInView} />
                <Route component={HomeView} />
            </Switch>
        </BrowserRouter>
        </div>
    )
}
