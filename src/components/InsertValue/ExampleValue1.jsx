import classes from './InsertValue.module.css';
import {useRef, useEffect} from 'react';

function ExampleValue1({a,b,c,d,arr}) {
    const numFirst1 = useRef();
    const numFirst2 = useRef();
    const numSecond1 = useRef();
    const numSecond2 = useRef();
    const input1 = useRef();
    const input2  = useRef();
    const result1 = useRef();
    const result2 = useRef();
    const sign1 = useRef();
    const sign2 = useRef();
    let colorsArray = ['deeppink', 'blueviolet', 'green', 'orange', 'blue', 'saddlebrown', 'gold'];

    useEffect(
      () => {
          numFirst1.current.innerHTML = x;
          numSecond1.current.innerHTML = ' = ' + y;
          numFirst2.current.innerHTML = f;
          numSecond2.current.innerHTML = ' = ' + e;
          numFirst1.current.style.color = numSecond1.current.style.color = sign1.current.style.color = input1.current.style.color = colorsArray[Math.floor(Math.random() * colorsArray.length)]
          numFirst2.current.style.color = numSecond2.current.style.color = sign2.current.style.color = input2.current.style.color = colorsArray[Math.floor(Math.random() * colorsArray.length)]
      },
      [a,b,c,d],
    );

    let f;
    let e;
    let x;
    let y;
    if (a > b) {
        y = a;
        x = b;
    } else if (a < b) {
        x = a;
        y = b;
    } else {
        y = a + 2;
        x = b;
    }

    if (c > d) {
        f = c;
        e = d;
    } else if (c < d) {
        f = d;
        e = c;
    } else {
        f = c + 2;
        e = d;
    }
    arr.push([x, y, f, e, input1, input2, result1, result2]);

    return (
        <div className={classes.blockExample}>
            <div className={classes.inline} >
                <span ref={numFirst1}></span>
                <span ref={sign1}>+</span>
                <input type='text' ref={input1} />
                <span ref={numSecond1}></span>
                <b ref={result1}></b>
            </div>
            <div className={classes.inline}>
                <input type='text' ref={input2} />
                <span ref={sign2}>-</span>
                <span ref={numFirst2}></span>
                <span ref={numSecond2}></span>
                <b ref={result2}></b>
            </div>
        </div>
    )
}

export default ExampleValue1