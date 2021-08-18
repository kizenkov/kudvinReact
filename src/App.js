import Navbar from './components/Navbar/Navbar';
import Letters from './components/Letters/Letters';
import Numbers from './components/Numbers/Numbers';
import Tasks from './components/Tasks/Tasks';
import Examples from './components/Examples/Examples';
import InsertValue from './components/InsertValue/InsertValue';
import Syllables from './components/Syllables/Syllables';
import Footer from './components/Footer/Footer';
import './App.css';
import { Route } from 'react-router-dom';
import Homepage from "./components/Homepage/Homepage";
import Popit from "./components/Popit/Popit";

function App() {

    let isLogged = false;
    let setIsLogged = () => {
        isLogged = true;
    }
  return (
    <div className='app'>
      <Navbar />
      <div className='content'>
        <Route exact path='/' render={() => <Homepage setIsLogged={setIsLogged}/>} />
        <Route path='/letters' render={() => <Letters />} />
        <Route path='/syllables' render={() => <Syllables />} />
        <Route path='/numbers' render={() => <Numbers isLogged={isLogged}/>} />
        <Route path='/tasks' render={() => <Tasks />} />
        <Route path='/examples' render={() => <Examples n={10} />} />
        <Route path='/hardExamples' render={() => <Examples n={30} />} />
        <Route path='/insertValue' render={() => <InsertValue />} />
        <Route path='/popit' render={() => <Popit />} />
      </div>
        <Footer />
    </div >
  )
}

export default App;