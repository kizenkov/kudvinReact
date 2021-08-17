import './Syllables.css';
import {useRef} from 'react';
import React from 'react'

function Syllables() {

    const syllable = useRef();

    function showSyllable(e) {
        syllable.current.innerHTML = e.currentTarget.innerHTML;
        syllable.current.className = 'newSyllable';
        syllable.current.onclick = () => {
            syllable.current.innerHTML = '';
            syllable.current.className = '';
        }
    }

    return (<div className='syllables'>
                <table border='1'>
                    <tr>
                        <th onClick={showSyllable}>БА</th>
                        <th onClick={showSyllable}>ВА</th>
                        <th onClick={showSyllable}>ДА</th>
                        <th onClick={showSyllable}>МА</th>
                        <th onClick={showSyllable}>НА</th>
                        <th onClick={showSyllable}>ПА</th>
                        <th onClick={showSyllable}>СА</th>
                        <th onClick={showSyllable}>ТА</th>
                        <th onClick={showSyllable}>ХА</th>
                    </tr>
                    <tr>
                        <th onClick={showSyllable}>БО</th>
                        <th onClick={showSyllable}>ВО</th>
                        <th onClick={showSyllable}>ДО</th>
                        <th onClick={showSyllable}>МО</th>
                        <th onClick={showSyllable}>НО</th>
                        <th onClick={showSyllable}>ПО</th>
                        <th onClick={showSyllable}>СО</th>
                        <th onClick={showSyllable}>ТО</th>
                        <th onClick={showSyllable}>ХО</th>
                    </tr>
                    <tr>
                        <th onClick={showSyllable}>БУ</th>
                        <th onClick={showSyllable}>ВУ</th>
                        <th onClick={showSyllable}>ДУ</th>
                        <th onClick={showSyllable}>МУ</th>
                        <th onClick={showSyllable}>НУ</th>
                        <th onClick={showSyllable}>ПУ</th>
                        <th onClick={showSyllable}>СУ</th>
                        <th onClick={showSyllable}>ТУ</th>
                        <th onClick={showSyllable}>ХУ</th>
                    </tr>
                    <tr>
                        <th onClick={showSyllable}>БЕ</th>
                        <th onClick={showSyllable}>ВЕ</th>
                        <th onClick={showSyllable}>ДЕ</th>
                        <th onClick={showSyllable}>МЕ</th>
                        <th onClick={showSyllable}>НЕ</th>
                        <th onClick={showSyllable}>ПЕ</th>
                        <th onClick={showSyllable}>СЕ</th>
                        <th onClick={showSyllable}>ТЕ</th>
                        <th onClick={showSyllable}>ХЕ</th>
                    </tr>
                    <tr>
                        <th onClick={showSyllable}>БИ</th>
                        <th onClick={showSyllable}>ВИ</th>
                        <th onClick={showSyllable}>ДИ</th>
                        <th onClick={showSyllable}>МИ</th>
                        <th onClick={showSyllable}>НИ</th>
                        <th onClick={showSyllable}>ПИ</th>
                        <th onClick={showSyllable}>СИ</th>
                        <th onClick={showSyllable}>ТИ</th>
                        <th onClick={showSyllable}>ХИ</th>
                    </tr>
                </table>
            <div ref={syllable}></div>
        </div>
    )
}

export default Syllables