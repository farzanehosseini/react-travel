import {BrowserRouter as Router,Route,Switch} from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Home from './components/pages/home';
import Footer from './components/Footer/Footer';
import Tourism from './components/pages/Tourism';
import Tour from './components/pages/Tour';
import SignUp from './components/pages/SignUp';
function App() {
  return (
    <>
    <Router>
       <Navbar/>
       <Switch>
        <Route path="/" exact component={Home}/>
        <Route path="/tourism" exact component={Tourism}/>
        <Route path="/tour" exact component={Tour}/>
        <Route path="/sign-up" exact component={SignUp}/>
       </Switch>
       <Footer/>
    </Router>
    </>
  );
}

export default App;
