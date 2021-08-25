import classes from './Header.module.css';
import {useState, useRef} from "react";
import {NavLink} from "react-router-dom";

function Header({isLogged, setLogged, clicked}) {
    const okMessage = useRef();
    const input = useRef();
    const form = useRef();
    const [code, setCode] = useState('');
    const checkCode = (e) => {
        e.preventDefault();
        let time = new Date() < new Date(2021, 8, 18, 14, 20);

        if (code === 'q') {
            if (time) {
                setLogged();
                // okMessage.current.innerHTML = 'Пароль верный! Выберите раздел!';
                // setTimeout(() => {
                //     okMessage.current.innerHTML = ''
                // }, 5000)
                form.current.innerHTML = '';
            } else {
                setCode('');
                okMessage.current.innerHTML = 'Срок действия пароля истек'
                setTimeout(() => {
                    okMessage.current.innerHTML = ''
                }, 2000)
            }
        } else {
            if (code === '') {
                okMessage.current.innerHTML = 'Введите пароль!';
                setTimeout(() => {
                    okMessage.current.innerHTML = ''
                }, 2000)
            } else {
                setCode('');
                okMessage.current.innerHTML = 'Пароль неверный! Попробуйте еще раз'
                setTimeout(() => {
                    okMessage.current.innerHTML = ''
                }, 2000)
            }
        }
    }
    return (
        <div className={classes.header}>
            <div className={classes.main}>
                <NavLink to='/main' className={classes.logo} onClick={clicked}>Umniki</NavLink>
            </div>
            <div className={classes.form}>
                {!isLogged ? <form ref={form} onSubmit={checkCode}>
                    <input type='text'
                           ref={input}
                           value={code}
                           maxLength={5}
                           className={classes.input}
                           onChange={(e) => setCode(e.target.value)}
                           placeholder='Введите код'/>
                    <input className={classes.submit} value='➤' type="submit"/>
                </form> : null}
            </div>
            <div ref={okMessage} className={classes.message}></div>
        </div>
    )
}

export default Header