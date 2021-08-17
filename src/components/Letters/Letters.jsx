import { useRef } from 'react';
import classes from './Letters.module.css';
import helper from "../../files/helper3.gif";

function Letters() {

    const ref = useRef();

    let words = [];
    words.push('А', 'Б', 'В', 'Г', 'Д', 'Е');
    words.push('Ё', 'Ж', 'З', 'И', 'Й', 'К');
    words.push('Л', 'М', 'Н', 'О', 'П', 'Р');
    words.push('С', 'Т', 'У', 'Ф', 'Х', 'Ц');
    words.push('Ч', 'Ш', 'Щ', 'Ъ', 'Ы', 'Ь');
    words.push('Э', 'Ю', 'Я');

    let colorsArray = ['green', 'red', 'blue', 'chocolate', 'darkmagenta', 'magenta', 'darkorange'];

    function disabled(e) {
        words.splice(words.indexOf(e.currentTarget.innerHTML), 1);
        e.currentTarget.disabled = true;
    }

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
        <div className={classes.letters}>
            <div>
                <h2>Выберите буквы, которые вы НЕ выговариваете:</h2>
            </div>
            <button class='chooseLettersButton' onClick={disabled}>А</button>
            <button class='chooseLettersButton' onClick={disabled}>Б</button>
            <button class='chooseLettersButton' onClick={disabled}>В</button>
            <button class='chooseLettersButton' onClick={disabled}>Г</button>
            <button class='chooseLettersButton' onClick={disabled}>Д</button>
            <button class='chooseLettersButton' onClick={disabled}>Е</button>
            <button class='chooseLettersButton' onClick={disabled}>Ё</button>
            <button class='chooseLettersButton' onClick={disabled}>Ж</button>
            <button class='chooseLettersButton' onClick={disabled}>З</button>
            <button class='chooseLettersButton' onClick={disabled}>И</button>
            <button class='chooseLettersButton' onClick={disabled}>Й</button>
            <button class='chooseLettersButton' onClick={disabled}>К</button>
            <button class='chooseLettersButton' onClick={disabled}>Л</button>
            <button class='chooseLettersButton' onClick={disabled}>М</button>
            <button class='chooseLettersButton' onClick={disabled}>Н</button>
            <button class='chooseLettersButton' onClick={disabled}>О</button>
            <button class='chooseLettersButton' onClick={disabled}>П</button>
            <button class='chooseLettersButton' onClick={disabled}>Р</button>
            <button class='chooseLettersButton' onClick={disabled}>С</button>
            <button class='chooseLettersButton' onClick={disabled}>Т</button>
            <button class='chooseLettersButton' onClick={disabled}>У</button>
            <button class='chooseLettersButton' onClick={disabled}>Ф</button>
            <button class='chooseLettersButton' onClick={disabled}>Х</button>
            <button class='chooseLettersButton' onClick={disabled}>Ц</button>
            <button class='chooseLettersButton' onClick={disabled}>Ч</button>
            <button class='chooseLettersButton' onClick={disabled}>Ш</button>
            <button class='chooseLettersButton' onClick={disabled}>Щ</button>
            <button class='chooseLettersButton' onClick={disabled}>Ъ</button>
            <button class='chooseLettersButton' onClick={disabled}>Ы</button>
            <button class='chooseLettersButton' onClick={disabled}>Ь</button>
            <button class='chooseLettersButton' onClick={disabled}>Э</button>
            <button class='chooseLettersButton' onClick={disabled}>Ю</button>
            <button class='chooseLettersButton' onClick={disabled}>Я</button>
            <div className={classes.letterBlock}>
                <div>
                    <button onClick={showPrevWord}>prev</button>
                </div>
                <code className={classes.word} ref={ref}>A</code>
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

export default Letters