import classes from './Footer.module.css';
import icontg from "../../files/icontg.gif";
import viber from "../../files/viber.png";


function Footer() {
    return (
        <div className={classes.footer}>
            <span className={classes.text}>Контакты для отзывов и предложений: </span>
            <a className={classes.link} href="http://t.me/umnikill">
                <img src={icontg} alt=""/>
            </a>
            <a className={classes.link} href="viber://chat?number=%2B375336950899">
                <img className={classes.viber} src={viber} alt=""/>
            </a>
        </div>
    )
}

export default Footer