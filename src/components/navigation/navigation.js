import {DesktopNavigation} from './desktopnavigation/DesktopNavigation'

// denna komponents funktion, endas syftet med denna js-sida, 
// är att avgöra när desktop-nav och när mobile-nav ska laddas in
export const Navigation = () => {
    return (
        <div>
            <DesktopNavigation />
        </div>
    )
}

