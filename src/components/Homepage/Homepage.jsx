import classes from './Homepage.module.css';
import {useState, useRef} from "react";

function Homepage({setIsLogged}) {

    const okMessage = useRef();
    const input = useRef();
    const [code, setCode] = useState('');
    const checkCode = (e) => {
        e.preventDefault();
        let time = new Date() < new Date(2021, 8, 18, 14, 20);

        if (code === 'q') {
            if (time) {
                setIsLogged();
                okMessage.current.innerHTML = 'Пароль верный! Выберите раздел!';
            } else {
                setCode('');
                okMessage.current.innerHTML = 'Срок действия пароля истек'
                setTimeout(() => {
                    okMessage.current.innerHTML = ''
                }, 1000)
            }
        } else {
            if (code === '') {
                okMessage.current.innerHTML = 'Введите пароль!';
                setTimeout(() => {
                    okMessage.current.innerHTML = ''
                }, 1000)
            } else {
                setCode('');
                okMessage.current.innerHTML = 'Пароль неверный! Попробуйте еще раз'
                setTimeout(() => {
                    okMessage.current.innerHTML = ''
                }, 1000)
            }
        }
    }

    return (
        <div className={classes.homepage}>
                <form onSubmit={checkCode}>
                    <input type='text'
                           ref={input}
                           value={code}
                           maxLength={5}
                           className={classes.input}
                           onChange={(e) => setCode(e.target.value)}
                           placeholder='Введите код'/>
                    <p><input className={classes.submit} value='Подтвердить' type="submit"/></p>
                </form>
                <div><h1 ref={okMessage}></h1></div>
        </div>
    )
}

export default Homepage