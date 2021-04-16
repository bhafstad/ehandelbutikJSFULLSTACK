import React, { useContext, useEffect } from 'react'
import { UserContext } from '../shared/provider/UserProvider'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import { HomeView } from '../view/HomeView'
import { GalleryView } from '../view/navigationTabViews/GalleryView'
import { NewsView } from '../view/navigationTabViews/NewsView'
import { ShopView } from '../view/navigationTabViews/ShopView'
import { SignInView } from '../view/navigationTabViews/SignInView'
import routingPath from './RoutingPath'

export const Routes = ({children}) => {
    const [authenticatedUser, setAuthenticatedUser] = useContext(UserContext)

    const checkIfUserIsAuthenticated = () => {
        const getLocalStorage = localStorage.getItem('username')
        if(getLocalStorage) {
            setAuthenticatedUser(getLocalStorage)
        }
    }

    // SPARA ANVÄNDARE I BROWSER
    // useEffect(() => {
    //     checkIfUserIsAuthenticated()
    // })

    return (
        
        <BrowserRouter>
            {children}
            <Switch>
                {/* /home kan namnges hursomhelst - detta är url-adressen för användaren */}
                {/* <Route exact path={'/test'} component={TestView} /> */}
                {/* här brukar man ha 404-sida om app kraschar etc. - ingen path = denna sida är home, man behöver inte navigera till den*/}
                {/* Detta kallas Fallback-sida - om någon försöker gå in på sida som inte finns, skickas tillbaka hit */}
                <Route exact path={routingPath.galleryView} component={GalleryView} />
                <Route exact path={routingPath.newsView} component={NewsView} />
                <Route exact path={routingPath.shopView} component={ShopView} />
                <Route exact path={routingPath.signInView} component={SignInView} />
                <Route component={HomeView} />
            </Switch>
        </BrowserRouter>
        
    )
}
