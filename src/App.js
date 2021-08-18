import Navbar from './components/Navbar/Navbar';
import Letters from './components/Letters/Letters';
import Numbers from './components/Numbers/Numbers';
import Tasks from './components/Tasks/Tasks';
import Examples from './components/Examples/Examples';
import InsertValue from './components/InsertValue/InsertValue';
import Syllables from './components/Syllables/Syllables';
import Footer from './components/Footer/Footer';
import './App.css';
import {Route} from 'react-router-dom';
import Homepage from "./components/Homepage/Homepage";
import Popit from "./components/Popit/Popit";

function App() {

    let isLogged = false;
    let setIsLogged = () => {
        isLogged = true;
    }
    return (
        <div className='app'>
            <Navbar/>
            <div className='content'>
                <Route exact path='/' render={() => <Homepage setIsLogged={setIsLogged}/>}/>
                <Route path='/letters' render={() => <Letters isLogged={isLogged}/>}/>
                <Route path='/syllables' render={() => <Syllables isLogged={isLogged}/>}/>
                <Route path='/numbers' render={() => <Numbers isLogged={isLogged}/>}/>
                <Route path='/tasks' render={() => <Tasks isLogged={isLogged}/>}/>
                <Route path='/examples' render={() => <Examples n={10} isLogged={isLogged}/>}/>
                <Route path='/hardExamples' render={() => <Examples n={30} isLogged={isLogged}/>}/>
                <Route path='/insertValue' render={() => <InsertValue isLogged={isLogged}/>}/>
                <Route path='/popit' render={() => <Popit/>}/>
            </div>
            <Footer/>
        </div>
    )
}

export default App;