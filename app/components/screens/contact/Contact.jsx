import Link from 'next/link'
import styles from './Contact.module.scss'
import MyContainer from '@/app/components/ui/MyContainer/MyContainer'

const Contact = () => {

    return (
        <section className={styles.contact}>
            <MyContainer>
                <div className={styles.contact__item}>
                    <h2>Aloqa</h2>
                    <h3>Savol va takliflar masalasida bog’lanish uchun ma’lumotlarimiz</h3>
                    <p>Elektron manzilimiz: <Link href={'mailto:support@pyblog.uz'} target='_blank'>support@pyblog.uz</Link></p>
                    <p>Manzilimiz: <Link href={'/'}>170100 , Andijon shahar, Sog’lom Avlod ko’chasi 24a - uy</Link></p>
                    <p>Blogni ijtimoiy tarmoqlarda ulashish:</p>
                    <ul className={styles.contact__item__list}>
                        <li>
                            <i className="bi bi-telegram"></i>
                        </li>
                        <li>
                            <i className="bi bi-instagram"></i>
                        </li>
                        <li>
                            <i className="bi bi-facebook"></i>
                        </li>
                    </ul>
                </div>
            </MyContainer>
        </section>
    )
}

export default Contact;