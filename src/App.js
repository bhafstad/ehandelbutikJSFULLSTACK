
// gammal typing av funktioner
// function App() {
//   return (
//     <div>
//       <h1>Test</h1>
//     </div>
//   );
// }

// export default App;

import { Routes } from './routes/routes'
import { Navigation } from './components/navigation/navigation'


// nya sättet att skriva funktioner - kräver måsklamrar när app importeras till index.js
export const App = () => {
  return (
    <Routes>
      <Navigation />
    </Routes>
  )
}
