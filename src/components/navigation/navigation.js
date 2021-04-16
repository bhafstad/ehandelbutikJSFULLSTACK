import {DesktopNavigation} from './desktopnavigation/DesktopNavigation'

// denna komponents funktion, enda syftet med denna js-sida, 
// är att avgöra när desktop-nav och när mobile-nav ska laddas in
// funktionalitet som kommer läggas till i framtida genomgång
export const Navigation = () => {
    return (
        <div>
            <DesktopNavigation />
        </div>
    )
}

