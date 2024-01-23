import Image from 'next/image';
import styles from './Header.module.scss';
import MyContainer from '../../ui/MyContainer/MyContainer';
import Link from 'next/link';
import { useState } from 'react';

const Header = () => {
    const [inp, setInp] = useState(false)

    return (
        <header id="header" className={styles.header}>
            <MyContainer>
                <nav className={styles.header__nav}>
                    <Link
                        className={styles.header__nav__link}
                        href={"/"}
                    >
                        <Image
                            className={styles.header__nav__link__img}
                            width={40}
                            height={45}
                            priority
                            alt='logo'
                            src={"https://pyblog.uz/pybloguz/static/assets/images/HEAD.svg"}
                        />
                        <span>BETA</span>
                    </Link>
                    <div className={`${styles.header__nav__searchBox} ${inp ? styles.active : ""}`}>
                        <div className={styles.header__nav__searchBox__searchInput}>
                            <input
                                type="text"
                                placeholder='shu yerga yozasiz...'
                            />
                        </div>
                        <div
                            onClick={() => {
                                setInp(!inp)
                            }}
                            className={styles.header__nav__searchBox__search}
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                                <circle cx="11" cy="11" r="8" />
                                <line x1="25" y1="25" x2="18" y2="18" />
                            </svg>
                        </div>
                    </div>
                </nav>
            </MyContainer>
        </header>
    );
};

export default Header;