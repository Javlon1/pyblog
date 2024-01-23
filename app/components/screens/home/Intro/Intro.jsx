import Link from 'next/link'
import Image from 'next/image'
import styles from './Intro.module.scss'
import MyContainer from '@/app/components/ui/MyContainer/MyContainer'
import Bar from '@/app/components/layout/bar/Bar';
import fire from "../../../../../public/emojies/fire.png"

const Intro = () => {

    return (
        <section className={styles.intro}>
            <MyContainer>
                <div className={styles.intro__items}>
                    <div className={styles.intro__items__bar}>
                        <Bar />
                    </div>
                    <div className={styles.intro__items__item}>
                        <nav className={styles.intro__items__item__nav}>
                            <h1>pyblog.uz - Python</h1>
                            <ul className={styles.list}>
                                <li className={styles.list__item}>
                                    <Link href={"/"} className={styles.list__item__a}>
                                        <Image
                                            className={styles.list__item__a__img}
                                            width={18}
                                            height={18}
                                            alt='emoji'
                                            src={fire}
                                        />
                                        Yangilar
                                    </Link>
                                </li>
                            </ul>
                        </nav>
                    </div>
                </div>
            </MyContainer>
        </section>
    )
}

export default Intro;