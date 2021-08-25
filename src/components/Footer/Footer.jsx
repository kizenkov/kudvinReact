import classes from './Footer.module.css';
import tg from "../../files/icontg.gif";
import ig from "../../files/iconig.gif";
import vk from "../../files/iconvk.png";
import viber from "../../files/viber.png";
import {NavLink} from "react-router-dom";


function Footer({clicked}) {
    return (
        <div className={classes.footer}>
            <div className={classes.footer1}>
                <span className={classes.text}>Контакты для отзывов и предложений: </span>
                <a className={classes.link} href="http://t.me/umnikill">
                    <img src={tg} alt=""/>
                </a>
                <a className={classes.link} href="viber://chat?number=%2B375336950899">
                    <img className={classes.viber} src={viber} alt=""/>
                </a>
                <a className={classes.link} href="http://instagram.com/kizenkov_">
                    <img src={ig} alt=""/>
                </a>
                <a className={classes.link} href="https://vk.me/kotenok_kuzya">
                    <img src={vk} className={classes.vk} alt=""/>
                </a>
            </div>
            <div className={classes.footer2}>
                <NavLink to='/main' href="#start" onClick={clicked}>Главная</NavLink>
            </div>
        </div>
    )
}

export default Footer