import {BrowserRouter,Route} from 'react-router-dom'
import TopBar from './components/TopBar'
import Home from './components/Home'
import Contact from './components/Contact'

import Footer from './components/Footer'

function App() {
  return (
    <div>
      <TopBar />
      
    <BrowserRouter>
    <Route exact path="/" component={Home}/>
    <Route exact path="/contact" component={Contact}/>
    
    
    </BrowserRouter>
    <Footer/>
    </div>
  );
}

export default App;
