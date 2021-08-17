import { useRef } from 'react';
import classes from './../Letters/Letters.module.css';
import helper from "../../files/helper2.gif";

function Numbers() {

    const ref = useRef();

    let words = [];
    for (let i = 0; i <= 21; i++) {
        words.push(i);
    }

    let colorsArray = ['green', 'red', 'blue', 'chocolate', 'darkmagenta', 'magenta', 'darkorange'];

    function getRand() {
        ref.current.style.color = colorsArray[Math.floor(Math.random() * colorsArray.length)];
    }

    let i = 0;

    function showNextWord() {
        getRand();
        i++;
        if (i >= (words.length)) {
            i = 0
        }
        ref.current.innerHTML = words[i];
    }

    function showPrevWord() {
        getRand();
        i--;
        if (i === -1 || i === -2) {
            i = words.length - 1;
        }
        ref.current.innerHTML = words[i];
    }

    return (
        <div className={classes.letters + ' ' + classes.numbers}>
            <div className={classes.letterBlock}>
                <div>
                    <button onClick={showPrevWord}>prev</button>
                </div>
                <code className={classes.word} ref={ref}>0</code>
                <div>
                    <button onClick={showNextWord}>next</button>
                </div>
            </div>
            <div className={classes.helper}>
                <img src={helper} alt="helper"/>
            </div>
        </div>
    )
}

export default Numbers