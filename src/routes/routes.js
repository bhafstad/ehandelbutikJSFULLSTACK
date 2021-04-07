import { BrowserRouter, Switch, Route } from 'react-router-dom'
import { HomeView } from '../view/HomeView'
import { TestView } from '../view/TestView'

export const Routes = (children) => {
    return (
        <BrowserRouter>
            {children}
            <Switch>
                {/* /home kan namnges hursomhelst - detta är url-adressen för användaren! */}
                <Route exact path={'/home'} component={TestView} />
                {/* här brukar man ha 404-sida om app kraschar etc. - ingen path = denna sida är home, man behöver inte navigera till den*/}
                {/* Detta kallas Fallback-sida - om någon försöker gå in på sida som inte finns, skickas hen tillbaka hit */}
                <Route component={HomeView} />
            </Switch>
        </BrowserRouter>
    )
}
