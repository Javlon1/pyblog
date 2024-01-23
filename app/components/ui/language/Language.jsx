import styles from './Language.module.scss'
import { Context } from '../Context/Context';
import { useContext, useEffect } from 'react';

const Language = () => {
    const [Lang] = React.useState([{ id: 1, lang: 'ru' }, { id: 2, lang: 'en' }])
    const { lan, setLan } = useContext(Context)

    const handleChange = (event) => {

        setLan(event.target.value);

    };

    useEffect(() => {

        window.localStorage.setItem('lan', lan)

    }, [lan])

    return (
        <select className={styles.select} defaultValue={lan} onChange={handleChange} name="" id="">
            {
                Lang?.map((e) => (
                    <option key={e.id} value={e.lang}>{e.lang}</option>
                ))
            }
        </select>
    )
}

export default Language;