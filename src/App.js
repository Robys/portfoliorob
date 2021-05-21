import {BrowserRouter,Route} from 'react-router-dom'
import TopBar from './components/TopBar'
import Home from './components/Home'
import Contact from './components/Contact'
import Projects from './components/Projects'

function App() {
  return (
    <div>
      <TopBar />
      
    <BrowserRouter>
    <Route exact path="/" component={Home}/>
    <Route exact path="/contact" component={Contact}/>
    <Route exact path="/projects" component={Projects}/>
    
    
    </BrowserRouter>
    </div>
  );
}

export default App;
