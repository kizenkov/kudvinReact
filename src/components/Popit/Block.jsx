import classes from './Popit.module.css';
import {useRef} from 'react';

function Block ({lop, score, changeScore, setScore}) {
    let div = useRef();
    if (score === 36) {
        setTimeout(() => {
            let colorsArray = ['green', 'red', 'blue', 'chocolate', 'darkmagenta', 'magenta', 'darkorange'];
            div.current["style"].backgroundColor = colorsArray[Math.floor(Math.random() * colorsArray.length)];
            div.current.disabled = false;
            setScore(0)
        }, 2000)
    }
    const lopPop = () => {
        const playPromise = lop.play()
        if (playPromise !== undefined) {
            playPromise.then(function() {
                // Automatic playback started!
            }).catch(function(error) {
                // Automatic playback failed.
                // Show a UI element to let the user manually start playback.
            });
        }
        div.current["style"].backgroundColor = 'white';
        div.current.disabled = true;
        changeScore();
    }

    return (
            <button ref={div} className={classes.block} onClick={lopPop}>

            </button>
    )
}

export default Block