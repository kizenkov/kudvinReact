import classes from './Homepage.module.css';
import {useState, useRef} from "react";

function Homepage({setIsLogged}) {

    const okMessage = useRef();
    const [code, setCode] = useState('');
    const checkCode = (e) => {
        e.preventDefault();
        let time = new Date() < new Date(2021, 8, 18, 14, 20);

        if (code === 'q') {
            setCode('');
            if (time) {
                setIsLogged();
                okMessage.current.innerHTML = 'Пароль верный! Выберите раздел!'
            } else {
                okMessage.current.innerHTML = 'Срок действия пароля истек'
            }
        } else {
            setCode('');
            okMessage.current.innerHTML = 'Пароль неверный! Попробуйте еще раз'
        }
    }
    return (
        <div className={classes.homepage}>
            <h1>Введите код </h1>
            <form onSubmit={checkCode}>
                <input type='text'
                       value={code}
                       onChange={(e) => setCode(e.target.value)}
                       placeholder='Enter code'/>
            </form>
            <div ref={okMessage}></div>
        </div>
    )
}

export default Homepage