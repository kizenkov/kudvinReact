import classes from './Footer.module.css';
import icontg from "../../files/icontg.gif";
import viber from "../../files/viber.png";


function Footer() {
    return (
        <div className={classes.footer}>
            footer
            <a href="http://t.me/umnikill">
                <img src={icontg} alt=""/>
            </a>
            <a href="/">
                <img src={viber} alt=""/>
            </a>
        </div>
    )
}

export default Footer