import './Syllables.css';
import {useRef} from 'react';
import {Redirect} from "react-router-dom";
import SyllablesLandscape1 from "./SyllablesLandscape1";
import SyllablesPortrait1 from "./SyllablesPortrait1";

function Syllables({isLogged}) {

    const syllable = useRef();

    function showSyllable(e) {
        syllable.current.innerHTML = e.currentTarget.innerHTML;
        syllable.current.className = 'newSyllable';
        syllable.current.onclick = () => {
            syllable.current.innerHTML = '';
            syllable.current.className = '';
        }
    }

    if (!isLogged) return <Redirect to="/" />

    return (<div className='syllables'>
            <SyllablesLandscape1 showSyllable={showSyllable}/>
            <SyllablesPortrait1 showSyllable={showSyllable}/>
            <div ref={syllable}></div>
        </div>
    )
}

export default Syllables