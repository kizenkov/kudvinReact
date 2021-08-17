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

function App() {
  return (
    <div className='app'>
      <Navbar />
      <div className='content'>
        <Route path='/letters' render={() => <Letters />} />
        <Route path='/syllables' render={() => <Syllables />} />
        <Route path='/numbers' render={() => <Numbers />} />
        <Route path='/tasks' render={() => <Tasks />} />
        <Route path='/examples' render={() => <Examples n={10} />} />
        <Route path='/hardExamples' render={() => <Examples n={30} />} />
        <Route path='/insertValue' render={() => <InsertValue />} />
      </div>
        <Footer />
    </div >
  )
}

export default App;