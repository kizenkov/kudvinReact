import classes from './Popit.module.css';
import {useRef} from 'react';

function Block ({lop}) {
    let div = useRef();

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
        div.current.style.backgroundColor = 'wheat';
    }

    return (
        <div ref={div} className={classes.block} onClick={lopPop} ></div>
    )
}

export default Block
