import './Syllables.css';

function SyllablesLandscape1({isLogged, showSyllable}) {

    return (<div className='tableLandscape'>
            <table border='1' >
                <tr className='soglas'>
                    <th className='null'></th>
                    <th>Н</th>
                    <th>М</th>
                    <th>Т</th>
                    <th>К</th>
                    <th>Х</th>
                    <th>Б</th>
                    <th>В</th>
                    <th>Г</th>
                    <th>Д</th>
                    <th>Ж</th>
                    <th>З</th>
                    <th>Л</th>
                    <th>П</th>
                    <th>Р</th>
                    <th>С</th>
                    <th>Ф</th>
                    <th>Ц</th>
                    <th>Ч</th>
                    <th>Ш</th>
                    <th>Щ</th>
                </tr>
                <tr>
                    <th className='glas'>А</th>
                    <th onClick={showSyllable}>НА</th>
                    <th onClick={showSyllable}>МА</th>
                    <th onClick={showSyllable}>ТА</th>
                    <th onClick={showSyllable}>КА</th>
                    <th onClick={showSyllable}>ХА</th>
                    <th onClick={showSyllable}>БА</th>
                    <th onClick={showSyllable}>ВА</th>
                    <th onClick={showSyllable}>ГА</th>
                    <th onClick={showSyllable}>ДА</th>
                    <th onClick={showSyllable}>ЖА</th>
                    <th onClick={showSyllable}>ЗА</th>
                    <th onClick={showSyllable}>ЛА</th>
                    <th onClick={showSyllable}>ПА</th>
                    <th onClick={showSyllable}>РА</th>
                    <th onClick={showSyllable}>СА</th>
                    <th onClick={showSyllable}>ФА</th>
                    <th onClick={showSyllable}>ЦА</th>
                    <th onClick={showSyllable}>ЧА</th>
                    <th onClick={showSyllable}>ША</th>
                    <th onClick={showSyllable}>ЩА</th>
                </tr>
                <tr>
                    <th className='glas'>У</th>
                    <th onClick={showSyllable}>НУ</th>
                    <th onClick={showSyllable}>МУ</th>
                    <th onClick={showSyllable}>ТУ</th>
                    <th onClick={showSyllable}>КУ</th>
                    <th onClick={showSyllable}>ХУ</th>
                    <th onClick={showSyllable}>БУ</th>
                    <th onClick={showSyllable}>ВУ</th>
                    <th onClick={showSyllable}>ГУ</th>
                    <th onClick={showSyllable}>ДУ</th>
                    <th onClick={showSyllable}>ЖУ</th>
                    <th onClick={showSyllable}>ЗУ</th>
                    <th onClick={showSyllable}>ЛУ</th>
                    <th onClick={showSyllable}>ПУ</th>
                    <th onClick={showSyllable}>РУ</th>
                    <th onClick={showSyllable}>СУ</th>
                    <th onClick={showSyllable}>ФУ</th>
                    <th onClick={showSyllable}>ЦУ</th>
                    <th onClick={showSyllable}>ЧУ</th>
                    <th onClick={showSyllable}>ШУ</th>
                    <th onClick={showSyllable}>ЩУ</th>
                </tr>
                <tr>
                    <th className='glas'>О</th>
                    <th onClick={showSyllable}>НО</th>
                    <th onClick={showSyllable}>МО</th>
                    <th onClick={showSyllable}>ТО</th>
                    <th onClick={showSyllable}>КО</th>
                    <th onClick={showSyllable}>ХО</th>
                    <th onClick={showSyllable}>БО</th>
                    <th onClick={showSyllable}>ВО</th>
                    <th onClick={showSyllable}>ГО</th>
                    <th onClick={showSyllable}>ДО</th>
                    <th onClick={showSyllable}>ЖО</th>
                    <th onClick={showSyllable}>ЗО</th>
                    <th onClick={showSyllable}>ЛО</th>
                    <th onClick={showSyllable}>ПО</th>
                    <th onClick={showSyllable}>РО</th>
                    <th onClick={showSyllable}>СО</th>
                    <th onClick={showSyllable}>ФО</th>
                    <th onClick={showSyllable}>ЦО</th>
                    <th onClick={showSyllable}>ЧО</th>
                    <th onClick={showSyllable}>ШО</th>
                    <th onClick={showSyllable}>ЩО</th>
                </tr>
                <tr>
                    <th className='glas'>Ы</th>
                    <th onClick={showSyllable}>НЫ</th>
                    <th onClick={showSyllable}>МЫ</th>
                    <th onClick={showSyllable}>ТЫ</th>
                    <th onClick={showSyllable}>КЫ</th>
                    <th onClick={showSyllable}>ХЫ</th>
                    <th onClick={showSyllable}>БЫ</th>
                    <th onClick={showSyllable}>ВЫ</th>
                    <th onClick={showSyllable}>ГЫ</th>
                    <th onClick={showSyllable}>ДЫ</th>
                    <th className='null'></th>
                    <th onClick={showSyllable}>ЗЫ</th>
                    <th onClick={showSyllable}>ЛЫ</th>
                    <th onClick={showSyllable}>ПЫ</th>
                    <th onClick={showSyllable}>РЫ</th>
                    <th onClick={showSyllable}>СЫ</th>
                    <th onClick={showSyllable}>ФЫ</th>
                    <th onClick={showSyllable}>ЦЫ</th>
                    <th className='null'></th>
                    <th className='null'></th>
                    <th className='null'></th>
                </tr>
                <tr>
                    <th className='glas'>И</th>
                    <th onClick={showSyllable}>НИ</th>
                    <th onClick={showSyllable}>МИ</th>
                    <th onClick={showSyllable}>ТИ</th>
                    <th onClick={showSyllable}>КИ</th>
                    <th onClick={showSyllable}>ХИ</th>
                    <th onClick={showSyllable}>БИ</th>
                    <th onClick={showSyllable}>ВИ</th>
                    <th onClick={showSyllable}>ГИ</th>
                    <th onClick={showSyllable}>ДИ</th>
                    <th onClick={showSyllable}>ЖИ</th>
                    <th onClick={showSyllable}>ЗИ</th>
                    <th onClick={showSyllable}>ЛИ</th>
                    <th onClick={showSyllable}>ПИ</th>
                    <th onClick={showSyllable}>РИ</th>
                    <th onClick={showSyllable}>СИ</th>
                    <th onClick={showSyllable}>ФИ</th>
                    <th onClick={showSyllable}>ЦИ</th>
                    <th onClick={showSyllable}>ЧИ</th>
                    <th onClick={showSyllable}>ШИ</th>
                    <th onClick={showSyllable}>ЩИ</th>
                </tr>
                <tr>
                    <th className='glas'>Е</th>
                    <th onClick={showSyllable}>НЕ</th>
                    <th onClick={showSyllable}>МЕ</th>
                    <th onClick={showSyllable}>ТЕ</th>
                    <th onClick={showSyllable}>КЕ</th>
                    <th onClick={showSyllable}>ХЕ</th>
                    <th onClick={showSyllable}>БЕ</th>
                    <th onClick={showSyllable}>ВЕ</th>
                    <th onClick={showSyllable}>ГЕ</th>
                    <th onClick={showSyllable}>ДЕ</th>
                    <th onClick={showSyllable}>ЖЕ</th>
                    <th onClick={showSyllable}>ЗЕ</th>
                    <th onClick={showSyllable}>ЛЕ</th>
                    <th onClick={showSyllable}>ПЕ</th>
                    <th onClick={showSyllable}>РЕ</th>
                    <th onClick={showSyllable}>СЕ</th>
                    <th onClick={showSyllable}>ФЕ</th>
                    <th onClick={showSyllable}>ЦЕ</th>
                    <th onClick={showSyllable}>ЧЕ</th>
                    <th onClick={showSyllable}>ШЕ</th>
                    <th onClick={showSyllable}>ЩЕ</th>
                </tr>
                <tr>
                    <th className='glas'>Я</th>
                    <th onClick={showSyllable}>НЯ</th>
                    <th onClick={showSyllable}>МЯ</th>
                    <th onClick={showSyllable}>ТЯ</th>
                    <th onClick={showSyllable}>КЯ</th>
                    <th onClick={showSyllable}>ХЯ</th>
                    <th onClick={showSyllable}>БЯ</th>
                    <th onClick={showSyllable}>ВЯ</th>
                    <th onClick={showSyllable}>ГЯ</th>
                    <th onClick={showSyllable}>ДЯ</th>
                    <th className='null'></th>
                    <th onClick={showSyllable}>ЗЯ</th>
                    <th onClick={showSyllable}>ЛЯ</th>
                    <th onClick={showSyllable}>ПЯ</th>
                    <th onClick={showSyllable}>РЯ</th>
                    <th onClick={showSyllable}>СЯ</th>
                    <th onClick={showSyllable}>ФЯ</th>
                    <th className='null'></th>
                    <th className='null'></th>
                    <th className='null'></th>
                    <th className='null'></th>
                </tr>
                <tr>
                    <th className='glas'>Ё</th>
                    <th onClick={showSyllable}>НЁ</th>
                    <th onClick={showSyllable}>МЁ</th>
                    <th onClick={showSyllable}>ТЁ</th>
                    <th onClick={showSyllable}>КЁ</th>
                    <th onClick={showSyllable}>ХЁ</th>
                    <th onClick={showSyllable}>БЁ</th>
                    <th onClick={showSyllable}>ВЁ</th>
                    <th onClick={showSyllable}>ГЁ</th>
                    <th onClick={showSyllable}>ДЁ</th>
                    <th onClick={showSyllable}>ЖЁ</th>
                    <th onClick={showSyllable}>ЗЁ</th>
                    <th onClick={showSyllable}>ЛЁ</th>
                    <th onClick={showSyllable}>ПЁ</th>
                    <th onClick={showSyllable}>РЁ</th>
                    <th onClick={showSyllable}>СЁ</th>
                    <th onClick={showSyllable}>ФЁ</th>
                    <th className='null'></th>
                    <th onClick={showSyllable}>ЧЁ</th>
                    <th onClick={showSyllable}>ШЁ</th>
                    <th onClick={showSyllable}>ЩЁ</th>
                </tr>
                <tr>
                    <th className='glas'>Ю</th>
                    <th onClick={showSyllable}>НЮ</th>
                    <th onClick={showSyllable}>МЮ</th>
                    <th onClick={showSyllable}>ТЮ</th>
                    <th onClick={showSyllable}>КЮ</th>
                    <th onClick={showSyllable}>ХЮ</th>
                    <th onClick={showSyllable}>БЮ</th>
                    <th onClick={showSyllable}>ВЮ</th>
                    <th onClick={showSyllable}>ГЮ</th>
                    <th onClick={showSyllable}>ДЮ</th>
                    <th className='null'></th>
                    <th onClick={showSyllable}>ЗЮ</th>
                    <th onClick={showSyllable}>ЛЮ</th>
                    <th onClick={showSyllable}>ПЮ</th>
                    <th onClick={showSyllable}>РЮ</th>
                    <th onClick={showSyllable}>СЮ</th>
                    <th onClick={showSyllable}>ФЮ</th>
                    <th className='null'></th>
                    <th className='null'></th>
                    <th className='null'></th>
                    <th className='null'></th>
                </tr>
                <tr>
                    <th className='glas'>Э</th>
                    <th onClick={showSyllable}>НЭ</th>
                    <th onClick={showSyllable}>МЭ</th>
                    <th onClick={showSyllable}>ТЭ</th>
                    <th onClick={showSyllable}>КЭ</th>
                    <th onClick={showSyllable}>ХЭ</th>
                    <th onClick={showSyllable}>БЭ</th>
                    <th onClick={showSyllable}>ВЭ</th>
                    <th onClick={showSyllable}>ГЭ</th>
                    <th onClick={showSyllable}>ДЭ</th>
                    <th className='null'></th>
                    <th onClick={showSyllable}>ЗЭ</th>
                    <th onClick={showSyllable}>ЛЭ</th>
                    <th onClick={showSyllable}>ПЭ</th>
                    <th onClick={showSyllable}>РЭ</th>
                    <th onClick={showSyllable}>СЭ</th>
                    <th onClick={showSyllable}>ФЭ</th>
                    <th className='null'></th>
                    <th className='null'></th>
                    <th className='null'></th>
                    <th className='null'></th>
                </tr>
            </table >
        </div>
    )
}

export default SyllablesLandscape1