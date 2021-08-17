import classes from './Popit.module.css';
import Block from './Block';
import lopp from './lop.mp3'

function Popit () {
    let lop = new Audio(lopp);

    return (<div className={classes.popit}>
        <div>
            <Block lop={lop}/>
            <Block lop={lop}/>
            <Block lop={lop}/>
            <Block lop={lop}/>
            <Block lop={lop}/>
            <Block lop={lop}/>
        </div>

        <div>
            <Block lop={lop}/>
            <Block lop={lop}/>
            <Block lop={lop}/>
            <Block lop={lop}/>
            <Block lop={lop}/>
            <Block lop={lop}/>
        </div>

        <div>
            <Block lop={lop}/>
            <Block lop={lop}/>
            <Block lop={lop}/>
            <Block lop={lop}/>
            <Block lop={lop}/>
            <Block lop={lop}/>
        </div>

        <div>
            <Block lop={lop}/>
            <Block lop={lop}/>
            <Block lop={lop}/>
            <Block lop={lop}/>
            <Block lop={lop}/>
            <Block lop={lop}/>
        </div>

        <div>
            <Block lop={lop}/>
            <Block lop={lop}/>
            <Block lop={lop}/>
            <Block lop={lop}/>
            <Block lop={lop}/>
            <Block lop={lop}/>
        </div>

        <div>
            <Block lop={lop}/>
            <Block lop={lop}/>
            <Block lop={lop}/>
            <Block lop={lop}/>
            <Block lop={lop}/>
            <Block lop={lop}/>
        </div>

    </div>
    )
}

export default Popit