import classes from './Popit.module.css';
import Block from './Block';
import lopp from './lop.mp3';
import {useState} from 'react';

function Popit () {
    let lop = new Audio(lopp);
    const [score, setScore] = useState(0);
    function changeScore() {
        setScore(score + 1);
    }

    return (<div className={classes.popit}>
        <div>
            <Block lop={lop} score={score} changeScore={changeScore} setScore={setScore}/>
            <Block lop={lop} score={score} changeScore={changeScore} setScore={setScore}/>
            <Block lop={lop} score={score} changeScore={changeScore} setScore={setScore}/>
            <Block lop={lop} score={score} changeScore={changeScore} setScore={setScore}/>
            <Block lop={lop} score={score} changeScore={changeScore} setScore={setScore}/>
            <Block lop={lop} score={score} changeScore={changeScore} setScore={setScore}/>
        </div>

        <div>
            <Block lop={lop} score={score} changeScore={changeScore} setScore={setScore}/>
            <Block lop={lop} score={score} changeScore={changeScore} setScore={setScore}/>
            <Block lop={lop} score={score} changeScore={changeScore} setScore={setScore}/>
            <Block lop={lop} score={score} changeScore={changeScore} setScore={setScore}/>
            <Block lop={lop} score={score} changeScore={changeScore} setScore={setScore}/>
            <Block lop={lop} score={score} changeScore={changeScore} setScore={setScore}/>
        </div>

        <div>
            <Block lop={lop} score={score} changeScore={changeScore} setScore={setScore}/>
            <Block lop={lop} score={score} changeScore={changeScore} setScore={setScore}/>
            <Block lop={lop} score={score} changeScore={changeScore} setScore={setScore}/>
            <Block lop={lop} score={score} changeScore={changeScore} setScore={setScore}/>
            <Block lop={lop} score={score} changeScore={changeScore} setScore={setScore}/>
            <Block lop={lop} score={score} changeScore={changeScore} setScore={setScore}/>
        </div>

        <div>
            <Block lop={lop} score={score} changeScore={changeScore} setScore={setScore}/>
            <Block lop={lop} score={score} changeScore={changeScore} setScore={setScore}/>
            <Block lop={lop} score={score} changeScore={changeScore} setScore={setScore}/>
            <Block lop={lop} score={score} changeScore={changeScore} setScore={setScore}/>
            <Block lop={lop} score={score} changeScore={changeScore} setScore={setScore}/>
            <Block lop={lop} score={score} changeScore={changeScore} setScore={setScore}/>
        </div>

        <div>
            <Block lop={lop} score={score} changeScore={changeScore} setScore={setScore}/>
            <Block lop={lop} score={score} changeScore={changeScore} setScore={setScore}/>
            <Block lop={lop} score={score} changeScore={changeScore} setScore={setScore}/>
            <Block lop={lop} score={score} changeScore={changeScore} setScore={setScore}/>
            <Block lop={lop} score={score} changeScore={changeScore} setScore={setScore}/>
            <Block lop={lop} score={score} changeScore={changeScore} setScore={setScore}/>
        </div>

        <div>
            <Block lop={lop} score={score} changeScore={changeScore} setScore={setScore}/>
            <Block lop={lop} score={score} changeScore={changeScore} setScore={setScore}/>
            <Block lop={lop} score={score} changeScore={changeScore} setScore={setScore}/>
            <Block lop={lop} score={score} changeScore={changeScore} setScore={setScore}/>
            <Block lop={lop} score={score} changeScore={changeScore} setScore={setScore}/>
            <Block lop={lop} score={score} changeScore={changeScore} setScore={setScore}/>
        </div>

    </div>
    )
}

export default Popit