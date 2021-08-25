import { NavLink } from 'react-router-dom';
import classes from './Navbar.module.css';
import { useRef } from 'react';

function Navbar() {

    const ul = useRef();
    const div = useRef();
    const span = useRef();

    function show() {
        ul.current['style'].display = 'block';
        span.current['style'].fontWeight = 'bolder';
        div.current['style'].backgroundColor = 'saddlebrown';
    }
    function notShow() {
        ul.current['style'].display = 'none';
        span.current['style'].fontWeight = '';
        div.current['style'].backgroundColor = 'saddlebrown';
    }
    // function addActiveClass() {
    //     ul.current.style.display = 'none';
    //     div.current.style.backgroundColor = 'white';
    //     span.current.style.fontWeight = 'bolder';
    // }
    function deleteActiveClass() {
        ul.current['style'].display = 'none';
        div.current['style'].backgroundColor = 'saddlebrown';
        span.current['style'].fontWeight = '';
        window.scrollTo(0, 0);
    }
   
    return (
        <div className={classes.navbar}>
            <NavLink to='/letters' onClick={deleteActiveClass}>Буквы</NavLink>
            <NavLink to='/syllables' onClick={deleteActiveClass}>Слоги</NavLink>
            <NavLink to='/numbers' onClick={deleteActiveClass}>Счёт</NavLink>
            <div ref={div} onMouseLeave={notShow} className={classes.menu}>
                <span onMouseOver={show} onClick={show} ref={span} className={classes.menuName}>Примеры</span>
                    <ul ref={ul}>
                        <li><NavLink to='/examples' onClick={() => {ul.current['style'].display = 'none';
                            window.scrollTo(0, 0);
                        }}>Легкие</NavLink></li>
                        <li><NavLink to='/hardExamples' onClick={() => {
                            ul.current['style'].display = 'none';
                            window.scrollTo(0, 0);
                        }}>Сложные</NavLink></li>
                    </ul>
                </div>
            <NavLink to='/insertValue' onClick={deleteActiveClass}>Вставить</NavLink>
            <NavLink to='/tasks' onClick={deleteActiveClass}>Задачки</NavLink>
            {/*<NavLink to='/popit' onClick={deleteActiveClass}>Попит</NavLink>*/}
        </div>
    )
}

export default Navbar