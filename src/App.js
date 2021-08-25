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
import Main from "./components/Main/Main";
import Popit from "./components/Popit/Popit";
import {useState} from "react";
import Header from "./components/Header/Header";

function App() {

    const [isLogged, setIsLogged] = useState(false)
    const [isClicked, setIsClicked] = useState(false)

    let setLogged = () => {
        setIsLogged(true);
        window.scrollTo(0, 0);
    }
    function clicked() {
        setIsClicked(true);
        window.scrollTo(0, 0);
    }
    return (
        <div className='app'>
            <Header isLogged={isLogged} setLogged={setLogged} clicked={clicked}/>
            {isLogged ? <Navbar/> : null}
            <div className='content'>
                <Route exact path='/' render={() => <Main isClicked={isClicked} isLogged={isLogged}/>}/>
                <Route path='/main' render={() => <Main isClicked={isClicked}
                                                        isLogged={isLogged} />}/>
                <Route path='/letters' render={() => <Letters isLogged={isLogged}/>}/>
                <Route path='/syllables' render={() => <Syllables isLogged={isLogged}/>}/>
                <Route path='/numbers' render={() => <Numbers isLogged={isLogged}/>}/>
                <Route path='/tasks' render={() => <Tasks isLogged={isLogged}/>}/>
                <Route path='/examples' render={() => <Examples n={10} isLogged={isLogged}/>}/>
                <Route path='/hardExamples' render={() => <Examples n={30} isLogged={isLogged}/>}/>
                <Route path='/insertValue' render={() => <InsertValue isLogged={isLogged}/>}/>
                <Route path='/popit' render={() => <Popit/>}/>
            </div>
            <Footer clicked={clicked}/>
        </div>
    )
}

export default App;