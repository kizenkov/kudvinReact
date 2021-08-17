import classes from './InsertValue.module.css';
import {useRef, useState, useEffect} from 'react';
import ExampleValue1 from './ExampleValue1';
import ExampleValue2 from './ExampleValue2';
import helper from '../../files/helper1.gif';

function InsertValue() {
    let [sec, setSec] = useState(60);

    const [A1, setA1] = useState(Math.trunc(Math.random() * 11));
    const [B1, setB1] = useState(Math.trunc(Math.random() * 11));
    const [C1, setC1] = useState(Math.trunc(Math.random() * 11));
    const [D1, setD1] = useState(Math.trunc(Math.random() * 11));

    const [A2, setA2] = useState(Math.trunc(Math.random() * 11));
    const [B2, setB2] = useState(Math.trunc(Math.random() * 11));
    const [C2, setC2] = useState(Math.trunc(Math.random() * 11));
    const [D2, setD2] = useState(Math.trunc(Math.random() * 11));

    const [A3, setA3] = useState(Math.trunc(Math.random() * 11));
    const [B3, setB3] = useState(Math.trunc(Math.random() * 11));
    const [C3, setC3] = useState(Math.trunc(Math.random() * 11));
    const [D3, setD3] = useState(Math.trunc(Math.random() * 11));

    const [A4, setA4] = useState(Math.trunc(Math.random() * 11));
    const [B4, setB4] = useState(Math.trunc(Math.random() * 11));
    const [C4, setC4] = useState(Math.trunc(Math.random() * 11));
    const [D4, setD4] = useState(Math.trunc(Math.random() * 11));

    const [A5, setA5] = useState(Math.trunc(Math.random() * 11));
    const [B5, setB5] = useState(Math.trunc(Math.random() * 11));
    const [C5, setC5] = useState(Math.trunc(Math.random() * 11));
    const [D5, setD5] = useState(Math.trunc(Math.random() * 11));

    let showTime;
    let arr = [];
    const button = useRef();
    const result = useRef();

    //timer
    useEffect(() => {
        showTime = setInterval(function () {
            setSec(sec-1)
        }, 1000);
        if (sec === 0) {
            showResult();
            clearInterval(showTime);
        }
        return () => {
            clearInterval(showTime);
        }
    }, [sec])


    function showResult() {
        clearInterval(showTime);
        let score = 0;
        button.current.disabled = true;
        arr.forEach(function (el) {
            el[4].current.disabled = true;
            el[5].current.disabled = true;
            el[6].current.disabled = true;
            el[7].current.disabled = true;
        });

        arr.forEach(function (el) {
            if ((+el[4].current.value === el[1] - el[0])) {
                el[6].current.innerHTML = '✓';
                el[6].current.style.color = 'lime';
                score += 1;
            } else {
                el[6].current.innerHTML = el[1] - el[0];
                el[6].current.style.color = 'red';
            }

            if (el[8] === true) {
                if (+el[5].current.value === el[2] - el[3]) {
                    el[7].current.innerHTML = '✓';
                    el[7].current.style.color = 'lime';
                    score += 1;
                } else {
                    el[7].current.innerHTML = el[2] - el[3];
                    el[7].current.style.color = 'red';
                }
            } else {
                if (+el[5].current.value === el[2] + el[3]) {
                    el[7].current.innerHTML = '✓';
                    el[7].current.style.color = 'lime';
                    score += 1;
                } else {
                    el[7].current.innerHTML = el[2] + el[3];
                    el[7].current.style.color = 'red';
                }
            }
        })
        result.current.innerHTML = 'Оценка: ' + score;

        setTimeout(() => {
            if (result.current) {
                setSec(60);
                result.current.innerHTML = '';
                button.current.disabled = false;

                arr.forEach(function (el) {
                    el[4].current.innerHTML = el[5].current.innerHTML = el[6].current.innerHTML = el[7].current.innerHTML = null;
                    el[4].current.value = el[5].current.value = el[6].current.value = el[7].current.value = null;
                    el[4].current.disabled = el[5].current.disabled = el[6].current.disabled = el[7].current.disabled = false;
                });

                setA1(Math.trunc(Math.random() * 11));
                setB1(Math.trunc(Math.random() * 11));
                setC1(Math.trunc(Math.random() * 11));
                setD1(Math.trunc(Math.random() * 11));
                setA2(Math.trunc(Math.random() * 11));
                setB2(Math.trunc(Math.random() * 11));
                setC2(Math.trunc(Math.random() * 11));
                setD2(Math.trunc(Math.random() * 11));
                setA3(Math.trunc(Math.random() * 11));
                setB3(Math.trunc(Math.random() * 11));
                setC3(Math.trunc(Math.random() * 11));
                setD3(Math.trunc(Math.random() * 11));
                setA4(Math.trunc(Math.random() * 11));
                setB4(Math.trunc(Math.random() * 11));
                setC4(Math.trunc(Math.random() * 11));
                setD4(Math.trunc(Math.random() * 11));
                setA5(Math.trunc(Math.random() * 11));
                setB5(Math.trunc(Math.random() * 11));
                setC5(Math.trunc(Math.random() * 11));
                setD5(Math.trunc(Math.random() * 11));
            }
        }, 3000);
    }

    return (
        <div className={classes.examples}>
            <ExampleValue1 arr={arr} a={A1} b={B1} c={C1} d={D1}/>
            <ExampleValue2 arr={arr} a={A2} b={B2} c={C2} d={D2}/>
            <ExampleValue1 arr={arr} a={A3} b={B3} c={C3} d={D3}/>
            <ExampleValue2 arr={arr} a={A4} b={B4} c={C4} d={D4}/>
            <ExampleValue1 arr={arr} a={A5} b={B5} c={C5} d={D5}/>

            <div className={classes.resultBlock}>
                <span className={classes.rest}>Осталось: {sec < 10 && sec >= 0 && '0'}{sec} сек</span>
                <button onClick={showResult} ref={button} >Принять</button>
                <span className={classes.result} ref={result}></span>
            </div>
            <div className={classes.helper}>
                <img src={helper} alt='helper' />
            </div>

        </div>
    )
}

export default InsertValue