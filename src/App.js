import { Routes } from './routes/Routes'
import { Navigation } from './components/navigation/Navigation'
import './shared/global/global.css'
import { UserProvider } from './shared/provider/UserProvider'


// nya sättet att skriva funktioner - kräver måsklamrar när app importeras till index.js
export const App = () => {
  return (
    <UserProvider>
      <Routes>
        <Navigation />
      </Routes>
    </UserProvider>
  )
}
