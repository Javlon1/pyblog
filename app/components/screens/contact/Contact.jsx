import Link from 'next/link'
import styles from './Contact.module.scss'
import MyContainer from '@/app/components/ui/MyContainer/MyContainer'
import { useContext, useEffect, useState } from 'react';
import { Context } from '../../ui/Context/Context';

const Contact = () => {

    const { dark } = useContext(Context);

    const [componentDark, setComponentDark] = useState()

    useEffect(() => {
        const contact = `${styles.contact} ${dark ? styles.darkMode : ""}`
        setComponentDark(contact)
    }, [dark])

    return (
        <section className={componentDark}>
            <MyContainer>
                <div className={styles.contact__item}>
                    <h1>Bog'lanish - pyblog.uz</h1>
                    <h2>Aloqa</h2>
                    <h3>Savol va takliflar masalasida bog’lanish uchun ma’lumotlarimiz</h3>
                    <p>Elektron manzilimiz: <Link href={'mailto:support@pyblog.uz'} target='_blank'>support@pyblog.uz</Link></p>
                    <p>Manzilimiz: <Link href={'/'}>170100 , Andijon shahar, Sog’lom Avlod ko’chasi 24a - uy</Link></p>
                    <p>Blogni ijtimoiy tarmoqlarda ulashish:</p>
                    <ul className={styles.contact__item__list}>
                        <li>
                            <Link href={'https://t.me/pybloguz'}>
                                <i className="fa-brands fa-telegram"></i>
                            </Link>
                        </li>
                        <li>
                            <Link href={'https://www.instagram.com/pyblog.uz'}>
                                <i className="fa-brands fa-instagram"></i>
                            </Link>
                        </li>
                        <li>
                            <Link href={'https://www.facebook.com/pybloguz'}>
                                <i className="fa-brands fa-facebook"></i>
                            </Link>
                        </li>
                    </ul>
                </div>
            </MyContainer>
        </section>
    )
}

export default Contact;