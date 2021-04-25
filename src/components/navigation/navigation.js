import { MobileNavigation } from './mobilenavigation/MobileNavigation'
import { DesktopNavigation } from './desktopnavigation/DesktopNavigation'
import { useWindowDimensions } from '../../hooks/useWindowDimensions'

// denna komponents funktion, enda syftet med denna js-sida, 
// är att avgöra när desktop-nav och när mobile-nav ska laddas in
// funktionalitet som kommer läggas till i framtida genomgång
export const Navigation = () => {
    const { width } = useWindowDimensions()

    const navigationViewPort = () => {
        return width <= 1100 ? <MobileNavigation /> : <DesktopNavigation />
    }

    return (navigationViewPort())
}


