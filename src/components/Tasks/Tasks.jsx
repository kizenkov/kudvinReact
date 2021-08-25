import classes from './Tasks.module.css';
import React, {useRef, useEffect} from 'react';
import yes from './../../files/yes.mp3';
import no from './../../files/no.mp3';
import helper from './../../files/helper.gif';
import {Redirect} from "react-router-dom";

function Tasks({isLogged}) {
    const task = useRef();
    const result = useRef();
    const button = useRef();
    const inputAnswer = useRef();
    const scoreTrue = useRef();
    const scoreFalse = useRef();
    const answer = useRef();

    let tasks = [];
    tasks.push('Маша засушила 3 кленовых листика, а дубовых – на 2 листика больше. Сколько всего листиков засушила Маша?');
    tasks.push('У Пети 4 флажка, а у Вани на 3 флажка больше. Сколько флажков у обоих мальчиков?');
    tasks.push('Мама испекла 9 пирожков, а булочек – на 4 меньше. Сколько булочек испекла мама?');
    tasks.push('У Кати 6 матрёшек, а у Даши на 4 матрёшки больше. Сколько матрёшек у Даши?');
    tasks.push('В большой башне 8 окон, а в маленькой башне на 4 окна меньше. Сколько окон в маленькой башне?');
    tasks.push('Рыбак поймал 6 ершей, а окуней – на 4 меньше. Сколько окуней поймал рыбак?');
    tasks.push('Длина красного карандаша 10см, а простой карандаш на 3см длиннее. Какой длины простой карандаш?');
    tasks.push('Таня вырастила фиалку и кактус. Высота фиалки 7см, а кактус на 3см ниже фиалки. Какой высоты кактус?');
    tasks.push('В маленькой пирамидке 8 кружков, а в большой – на 2 кружка больше. Сколько кружков в большой пирамидке?');
    tasks.push('В Московском поезде 9 вагонов, а в Тульском на 3 вагона меньше. Сколько вагонов в обоих поездах?');
    tasks.push('На арене цирка выступают 7 жонглёров, а клоунов – на 4 меньше. Сколько циркачей выступает на арене?');
    tasks.push('Столяр починил 3 стола, а стульев – на 4 больше. Сколько столов починил столяр?');
    tasks.push('На крыше сарая висят 4 сосульки, а на крыше дома – на 6 сосулек больше. 3 сосульки растаяли. Сколько всего сосулек осталось висеть на крышах?');
    tasks.push('Мультфильм в кинотеатре начался в 5 часов, а закончился в 7 часов. Сколько часов шёл мультфильм?');
    tasks.push('На новый год в вазе лежали 13 мандаринов. 5 мандаринов сьел папа, 4 мандарина съела мама и еще 4 - бабушка. Сколько мандаринов осталось в вазе?');

    let i = Math.round(Math.random() * (tasks.length - 1));
    let scoreTrueValue = 0;
    let scoreFalseValue = 0;

    useEffect(
        () => {
            if(isLogged) {
                task.current.innerHTML = tasks[i];
            }
        }, [isLogged, i]
    );

    let results = [8, 11, 5, 10, 4, 2, 13, 4, 10, 15, 10, 3, 11, 2, 0];

    function isNumber() {
        let val = inputAnswer.current.value;
        if (isNaN(val) || val === ' ') {
            inputAnswer.current.value = null;
        }
    }

    function getResult() {
        let audioYes = new Audio();
        let audioNo = new Audio();
        audioYes.src = yes;
        audioNo.src = no;
        if (inputAnswer.current.value === '') {
            result.current.innerHTML = 'Введите ответ';
            result.current.style.color = 'yellow';
            setTimeout(() => {
                result.current.innerHTML = null
            }, 1000)
        } else {
            if (+inputAnswer.current.value === results[i]) {
                audioYes.play();
                scoreTrue.current.innerHTML = ++scoreTrueValue;
                inputAnswer.current.disabled = 'disabled'
                button.current.disabled = true;
                result.current.innerHTML = 'ВЕРНО &#128521';
                result.current.style.color = 'green';
                setTimeout(function () {
                    inputAnswer.current.disabled = null;
                    button.current.disabled = false;
                    tasks.splice(i, 1);
                    results.splice(i, 1);
                    result.current.innerHTML = null;
                    inputAnswer.current.value = null;
                    if (tasks.length) {
                        i = Math.round(Math.random() * (tasks.length - 1))
                        task.current.innerHTML = tasks[i];
                    } else {
                        task.current.innerHTML = 'Задачки закончились';
                        answer.current.innerHTML = null;
                    }
                }, 1000)
            } else {
                audioNo.play();
                scoreFalse.current.innerHTML = ++scoreFalseValue;
                inputAnswer.current.disabled = 'disabled'
                button.current.disabled = true;
                result.current.innerHTML = 'НЕПРАВИЛЬНО &#128553';
                result.current.style.color = 'red';
                setTimeout(function () {
                    inputAnswer.current.disabled = null;
                    button.current.disabled = false;
                    result.current.innerHTML = null;
                    inputAnswer.current.value = null;
                }, 1000)
            }
        }
    }

    if (!isLogged) return <Redirect to="/"  />

    return (
        <div className={classes.tasks}>
            <div className={classes.task} ref={task}>
            </div>
            <div className={classes.answerBlock}>
                <table className={classes.table} border="1">
                    <tr>
                        <th>✓</th>
                        <th ref={scoreTrue}>0</th>
                    </tr>
                    <tr>
                        <td>❌</td>
                        <td ref={scoreFalse}>0</td>
                    </tr>
                </table>
                <div ref={answer}>
                    <span>Ответ:</span>
                    <input type='text' className={classes.inputAnswer} maxLength='2' autoFocus={true} onKeyUp={isNumber} ref={inputAnswer}/>
                    <button className={classes.button} onClick={getResult} ref={button}>Принять</button>
                </div>
            </div>
            <div className={classes.result} ref={result}>
            </div>
            <div className={classes.helper}>
                <img src={helper} alt="helper"/>
            </div>
        </div>
    )
}

export default Tasks