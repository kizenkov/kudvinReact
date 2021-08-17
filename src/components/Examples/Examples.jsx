import classes from './Examples.module.css';
import {useRef, useState} from 'react';
import Example from './Example';
import helper from "../../files/helper4.gif";

function Examples({n}) {

    const [A1, setA1] = useState(Math.trunc(Math.random() * (n - 1) + 1));
    const [B1, setB1] = useState(Math.trunc(Math.random() * (n - 1) + 1));
    const [C1, setC1] = useState(Math.trunc(Math.random() * (n - 1) + 1));
    const [D1, setD1] = useState(Math.trunc(Math.random() * (n - 1) + 1));

    const [A2, setA2] = useState(Math.trunc(Math.random() * (n - 1) + 1));
    const [B2, setB2] = useState(Math.trunc(Math.random() * (n - 1) + 1));
    const [C2, setC2] = useState(Math.trunc(Math.random() * (n - 1) + 1));
    const [D2, setD2] = useState(Math.trunc(Math.random() * (n - 1) + 1));

    const [A3, setA3] = useState(Math.trunc(Math.random() * (n - 1) + 1));
    const [B3, setB3] = useState(Math.trunc(Math.random() * (n - 1) + 1));
    const [C3, setC3] = useState(Math.trunc(Math.random() * (n - 1) + 1));
    const [D3, setD3] = useState(Math.trunc(Math.random() * (n - 1) + 1));

    const [A4, setA4] = useState(Math.trunc(Math.random() * (n - 1) + 1));
    const [B4, setB4] = useState(Math.trunc(Math.random() * (n - 1) + 1));
    const [C4, setC4] = useState(Math.trunc(Math.random() * (n - 1) + 1));
    const [D4, setD4] = useState(Math.trunc(Math.random() * (n - 1) + 1));

    const [A5, setA5] = useState(Math.trunc(Math.random() * (n - 1) + 1));
    const [B5, setB5] = useState(Math.trunc(Math.random() * (n - 1) + 1));
    const [C5, setC5] = useState(Math.trunc(Math.random() * (n - 1) + 1));
    const [D5, setD5] = useState(Math.trunc(Math.random() * (n - 1) + 1));

    let start = new Date();
    let arr = [];

    const button = useRef();
    const result = useRef();
    const time = useRef();

    function showResult() {
        let score = 0;
        let end = new Date();
        let min = Math.trunc(Math.round((end - start) / 1000) / 60);
        let seconds = Math.round((end - start) / 1000) - min * 60;

        arr.forEach(function (el) {
            if ((+el[4].current.value === el[0] + el[1])) {
                el[6].current.innerHTML = '✓';
                el[6].current.style.color = 'lime';
                score += 1;
            } else {
                el[6].current.innerHTML = +el[0] + +el[1];
                el[6].current.style.color = 'red';
            }
            if ((+el[5].current.value === el[2] - el[3])) {
                el[7].current.innerHTML = '✓';
                el[7].current.style.color = 'lime';
                score += 1;
            } else {
                el[7].current.innerHTML = +el[2] - +el[3];
                el[7].current.style.color = 'red';
            }
        })

        button.current.disabled = true;
        result.current.innerHTML = 'Оценка: ' + score;
        time.current.innerHTML = 'Затрачено: ' + min + ' мин ' + seconds + ' сек';
        setTimeout(() => {
            if (result.current) {
                result.current.innerHTML = '';
                time.current.innerHTML = '';
                button.current.disabled = false;
                arr.forEach(function (el) {
                    el[4].current.value = '';
                    el[5].current.value = '';
                    el[6].current.innerHTML = '';
                    el[7].current.innerHTML = '';
                })
                setA1(Math.trunc(Math.random() * (n - 1) + 1));
                setB1(Math.trunc(Math.random() * (n - 1) + 1));
                setC1(Math.trunc(Math.random() * (n - 1) + 1));
                setD1(Math.trunc(Math.random() * (n - 1) + 1));
                setA2(Math.trunc(Math.random() * (n - 1) + 1));
                setB2(Math.trunc(Math.random() * (n - 1) + 1));
                setC2(Math.trunc(Math.random() * (n - 1) + 1));
                setD2(Math.trunc(Math.random() * (n - 1) + 1));
                setA3(Math.trunc(Math.random() * (n - 1) + 1));
                setB3(Math.trunc(Math.random() * (n - 1) + 1));
                setC3(Math.trunc(Math.random() * (n - 1) + 1));
                setD3(Math.trunc(Math.random() * (n - 1) + 1));
                setA4(Math.trunc(Math.random() * (n - 1) + 1));
                setB4(Math.trunc(Math.random() * (n - 1) + 1));
                setC4(Math.trunc(Math.random() * (n - 1) + 1));
                setD4(Math.trunc(Math.random() * (n - 1) + 1));
                setA5(Math.trunc(Math.random() * (n - 1) + 1));
                setB5(Math.trunc(Math.random() * (n - 1) + 1));
                setC5(Math.trunc(Math.random() * (n - 1) + 1));
                setD5(Math.trunc(Math.random() * (n - 1) + 1));
                start = new Date();
            }
        }, 3000);
    }

    return (
        <div className={classes.examples}>
            <Example arr={arr} a={A1} b={B1} c={C1} d={D1}/>
            <Example arr={arr} a={A2} b={B2} c={C2} d={D2}/>
            <Example arr={arr} a={A3} b={B3} c={C3} d={D3}/>
            <Example arr={arr} a={A4} b={B4} c={C4} d={D4}/>
            <Example arr={arr} a={A5} b={B5} c={C5} d={D5}/>

            <div>
                <button onClick={showResult} ref={button}>Принять</button>
            </div>
            <div>
                <span className={classes.time} ref={time}></span>
                <span className={classes.result} ref={result}></span>
            </div>
            <div className={classes.helper}>
                <img src={helper} alt="helper"/>
            </div>
        </div>
    )
}

export default Examples