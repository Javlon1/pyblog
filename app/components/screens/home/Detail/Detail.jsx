import { useContext, useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link'
import Image from 'next/image'
import styles from './DetailPage.module.scss'
import MyContainer from '@/app/components/ui/MyContainer/MyContainer'

import thumbs_up from "../../../../../public/emojies/thumbs_up.png"
import heart from "../../../../../public/emojies/heart.png"
import sunglass_face from "../../../../../public/emojies/sunglass_face.png"
import fire from "../../../../../public/emojies/fire.png"
import alien from "../../../../../public/emojies/alien.png"
import neutral_face from "../../../../../public/emojies/neutral_face.png"
import thumbs_down from "../../../../../public/emojies/thumbs_down.png"
import { Context } from '@/app/components/ui/Context/Context';


const DetailPage = () => {
    const router = useRouter();
    const infoDetail = router.query

    const [showModal, setShowModal] = useState(false);

    useEffect(() => {

        const timeout = setTimeout(() => {
            setShowModal(false);
        }, 2000);

        return () => clearTimeout(timeout);
    }, [showModal]);

    const handlerReactionCloce = () => {
        setShowModal(false)
    };

    const handlerReactionAct = () => {
        setShowModal(true)
    };

    const { dark } = useContext(Context);

    const [componentDark, setComponentDark] = useState()

    useEffect(() => {
        const detailPage = `${styles.detailPage} ${dark ? styles.darkMode : ""}`
        setComponentDark(detailPage)
    }, [dark])

    return (
        <section className={componentDark}>
            <span className={`${styles.alert} ${showModal ? styles.alertAct : ""}`}>
                <p>Lorem ipsum dolor sit amet consectetur.</p>
                <i onClick={handlerReactionCloce} className="fa-solid fa-xmark"></i>
            </span>
            <MyContainer>

                <div className={styles.detailPage__item}>
                    <div className={styles.detailPage__item__title}>
                        <i className="fa-solid fa-user-secret"></i>
                        <h2>{infoDetail.name}</h2>
                    </div>
                    <ul className={styles.detailPage__item__list}>
                        <li>
                            <i className="fa-solid fa-user"></i>
                            <p>Abdurahmon Rashidov</p>
                        </li>
                        <li>
                            <i className="fa-solid fa-lock"></i>
                            <p>Havfsizlik</p>
                        </li>
                        <li>
                            <i className="fa-solid fa-eye"></i>
                            <p>516</p>
                        </li>
                        <li>
                            <i className="fa-solid fa-fire-flame-curved" style={{ color: "#FFA500" }}></i>
                            <p>78</p>
                        </li>
                    </ul>

                    <div className={styles.detailPage__item__body}>
                        <h3>body</h3>
                    </div>
                    
                    <div className={styles.detailPage__item__bottom}>
                        <ul className={styles.detailPage__item__bottom__list}>
                            <li
                                onClick={handlerReactionAct}
                                className={styles.detailPage__item__bottom__list__item}
                            >
                                <Image
                                    className={styles.detailPage__item__bottom__list__item__img}
                                    width={32}
                                    height={32}
                                    priority
                                    alt='👍'
                                    src={thumbs_up}
                                />
                                <span>+1</span>
                                <div className={styles.reactionName}>Yaxshi</div>
                            </li>
                            <li
                                onClick={handlerReactionAct}
                                className={styles.detailPage__item__bottom__list__item}
                            >
                                <Image
                                    className={styles.detailPage__item__bottom__list__item__img}
                                    width={32}
                                    height={32}
                                    priority
                                    alt='❤'
                                    src={heart}
                                />
                                <span>+2</span>
                                <div className={styles.reactionName}>Yoqdi</div>
                            </li>
                            <li
                                onClick={handlerReactionAct}
                                className={styles.detailPage__item__bottom__list__item}
                            >
                                <Image
                                    className={styles.detailPage__item__bottom__list__item__img}
                                    width={32}
                                    height={32}
                                    priority
                                    alt='😎'
                                    src={sunglass_face}
                                />
                                <span>+3</span>
                                <div className={styles.reactionName}>Zo`r</div>
                            </li>
                            <li
                                onClick={handlerReactionAct}
                                className={styles.detailPage__item__bottom__list__item}
                            >
                                <Image
                                    className={styles.detailPage__item__bottom__list__item__img}
                                    width={32}
                                    height={32}
                                    priority
                                    alt='💥'
                                    src={fire}
                                />
                                <span>+4</span>
                                <div className={styles.reactionName}>Yonmoqda</div>
                            </li>
                            <li
                                onClick={handlerReactionAct}
                                className={styles.detailPage__item__bottom__list__item}
                            >
                                <Image
                                    className={styles.detailPage__item__bottom__list__item__img}
                                    width={32}
                                    height={32}
                                    priority
                                    alt='👽'
                                    src={alien}
                                />
                                <span>+5</span>
                                <div className={styles.reactionName}>Bu dunyoniki emas!</div>
                            </li>
                            <li
                                onClick={handlerReactionAct}
                                className={styles.detailPage__item__bottom__list__item}
                            >
                                <Image
                                    className={styles.detailPage__item__bottom__list__item__img}
                                    width={32}
                                    height={32}
                                    priority
                                    alt='😐'
                                    src={neutral_face}
                                />
                                <span>+6</span>
                                <div className={styles.reactionName}>Betaraf</div>
                            </li>
                            <li
                                onClick={handlerReactionAct}
                                className={styles.detailPage__item__bottom__list__item}
                            >
                                <Image
                                    className={styles.detailPage__item__bottom__list__item__img}
                                    width={32}
                                    height={32}
                                    priority
                                    alt='👎'
                                    src={thumbs_down}
                                />
                                <span>+7</span>
                                <div className={styles.reactionName}>Yoqmadi</div>
                            </li>
                        </ul>
                        <h2>Maqola teglari</h2>
                        <ul className={styles.detailPage__item__bottom__list1}>
                            <li>
                                <Link href={"/"}>
                                    <p>
                                        <i className="fa-brands fa-python"></i>
                                    </p>
                                    <p>python</p>
                                </Link>
                            </li>
                            <li>
                                <Link href={"/"}>
                                    <p>
                                        <i className="fa-brands fa-python"></i>
                                    </p>
                                    <p>Dasturlash</p>
                                </Link>
                            </li>
                            <li>
                                <Link href={"/"}>
                                    <p>
                                        <i className="fa-brands fa-python"></i>
                                    </p>
                                    <p>Dasturlash</p>
                                </Link>
                            </li>
                            <li>
                                <Link href={"/"}>
                                    <p>
                                        <i className="fa-brands fa-python"></i>
                                    </p>
                                    <p>Dasturlash</p>
                                </Link>
                            </li>
                            <li>
                                <Link href={"/"}>
                                    <p>
                                        <i className="fa-brands fa-python"></i>
                                    </p>
                                    <p>Dasturlash</p>
                                </Link>
                            </li>
                            <li>
                                <Link href={"/"}>
                                    <p>
                                        <i className="fa-brands fa-python"></i>
                                    </p>
                                    <p>Dasturlash</p>
                                </Link>
                            </li>
                            <li>
                                <Link href={"/"}>
                                    <p>
                                        <i className="fa-brands fa-python"></i>
                                    </p>
                                    <p>Dasturlash</p>
                                </Link>
                            </li>
                        </ul>
                        <div className={styles.detailPage__item__bottom__links}>
                            <ul className={styles.detailPage__item__list}>
                                <li>
                                    <i className="fa-solid fa-user"></i>
                                    <p>Abdurahmon Rashidov</p>
                                </li>
                                <li>
                                    <i className="fa-solid fa-lock"></i>
                                    <p>Havfsizlik</p>
                                </li>
                                <li>
                                    <i className="fa-solid fa-eye"></i>
                                    <p>516</p>
                                </li>
                            </ul>
                            <div>
                                <Link
                                    target='_blank'
                                    href={'https://www.facebook.com/pybloguz'}
                                >
                                    <i className="fa-brands fa-facebook"></i>
                                    Facebook
                                </Link>
                                <Link
                                    target='_blank'
                                    href={'https://t.me/pybloguz'}
                                >
                                    <i className="fa-brands fa-telegram"></i>
                                    Telegram
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>

                <div className={styles.detailPage__items}>
                    <div className={styles.detailPage__items__left}>
                        <h3>Bu haftada ko'p o'qildi</h3>
                        <ul className={styles.list}>
                            <Link
                                href={'/'}
                            >
                                <li>
                                    <Image
                                        width={100}
                                        height={70}
                                        alt='img'
                                        src={"https://pyblog.uz/pybloguz/mediafiles/instagram_images/photo_2023-04-25_07-05-50_7kUHZzE.jpg"}
                                    />
                                    <span>
                                        <p className={styles.p}>Lorem ipsum dolor sit</p>
                                        <ul>
                                            <li>
                                                <i className="fa-solid fa-eye"></i>
                                                <p>516</p>
                                            </li>
                                            <li>
                                                <i className="fa-solid fa-fire-flame-curved" style={{ color: "#FFA500" }}></i>
                                                <p>78</p>
                                            </li>
                                        </ul>
                                    </span>
                                </li>
                            </Link>
                            <Link
                                href={'/'}
                            >
                                <li>
                                    <Image
                                        width={100}
                                        height={70}
                                        alt='img'
                                        src={"https://pyblog.uz/pybloguz/mediafiles/instagram_images/photo_2023-04-25_07-05-50_7kUHZzE.jpg"}
                                    />
                                    <span>
                                        <p className={styles.p}>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptatibus, sint quae distinctio, nihil eius reprehenderit nulla repellendus cupiditate omnis iste maiores exercitationem adipisci nemo commodi temporibus. Perspiciatis, doloribus voluptatibus. Deserunt.</p>
                                        <ul>
                                            <li>
                                                <i className="fa-solid fa-eye"></i>
                                                <p>516</p>
                                            </li>
                                            <li>
                                                <i className="fa-solid fa-fire-flame-curved" style={{ color: "#FFA500" }}></i>
                                                <p>78</p>
                                            </li>
                                        </ul>
                                    </span>
                                </li>
                            </Link>
                            <Link
                                href={'/'}
                            >
                                <li>
                                    <Image
                                        width={100}
                                        height={70}
                                        alt='img'
                                        src={"https://pyblog.uz/pybloguz/mediafiles/instagram_images/photo_2023-04-25_07-05-50_7kUHZzE.jpg"}
                                    />
                                    <span>
                                        <p className={styles.p}>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptatibus, sint quae distinctio, nihil eius reprehenderit nulla repellendus cupiditate omnis iste maiores exercitationem adipisci nemo commodi temporibus. Perspiciatis, doloribus voluptatibus. Deserunt.</p>
                                        <ul>
                                            <li>
                                                <i className="fa-solid fa-eye"></i>
                                                <p>516</p>
                                            </li>
                                            <li>
                                                <i className="fa-solid fa-fire-flame-curved" style={{ color: "#FFA500" }}></i>
                                                <p>78</p>
                                            </li>
                                        </ul>
                                    </span>
                                </li>
                            </Link>
                        </ul>
                    </div>
                    <div className={styles.detailPage__items__right}>
                        <h3>Mavzuga oid</h3>
                        <ul className={styles.list}>
                            <Link
                                href={'/'}
                            >
                                <li>
                                    <Image
                                        width={100}
                                        height={70}
                                        alt='img'
                                        src={"https://pyblog.uz/pybloguz/mediafiles/instagram_images/photo_2023-04-25_07-05-50_7kUHZzE.jpg"}
                                    />
                                    <span>
                                        <p className={styles.p}>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptatibus, sint quae distinctio, nihil eius reprehenderit nulla repellendus cupiditate omnis iste maiores exercitationem adipisci nemo commodi temporibus. Perspiciatis, doloribus voluptatibus. Deserunt.</p>
                                        <ul>
                                            <li>
                                                <i className="fa-solid fa-eye"></i>
                                                <p>516</p>
                                            </li>
                                            <li>
                                                <i className="fa-solid fa-fire-flame-curved" style={{ color: "#FFA500" }}></i>
                                                <p>78</p>
                                            </li>
                                        </ul>
                                    </span>
                                </li>
                            </Link>
                            <Link
                                href={'/'}
                            >
                                <li>
                                    <Image
                                        width={100}
                                        height={70}
                                        alt='img'
                                        src={"https://pyblog.uz/pybloguz/mediafiles/instagram_images/photo_2023-04-25_07-05-50_7kUHZzE.jpg"}
                                    />
                                    <span>
                                        <p className={styles.p}>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptatibus, sint quae distinctio, nihil eius reprehenderit nulla repellendus cupiditate omnis iste maiores exercitationem adipisci nemo commodi temporibus. Perspiciatis, doloribus voluptatibus. Deserunt.</p>
                                        <ul>
                                            <li>
                                                <i className="fa-solid fa-eye"></i>
                                                <p>516</p>
                                            </li>
                                            <li>
                                                <i className="fa-solid fa-fire-flame-curved" style={{ color: "#FFA500" }}></i>
                                                <p>78</p>
                                            </li>
                                        </ul>
                                    </span>
                                </li>
                            </Link>
                            <Link
                                href={'/'}
                            >
                                <li>
                                    <Image
                                        width={100}
                                        height={70}
                                        alt='img'
                                        src={"https://pyblog.uz/pybloguz/mediafiles/instagram_images/photo_2023-04-25_07-05-50_7kUHZzE.jpg"}
                                    />
                                    <span>
                                        <p className={styles.p}>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptatibus, sint quae distinctio, nihil eius reprehenderit nulla repellendus cupiditate omnis iste maiores exercitationem adipisci nemo commodi temporibus. Perspiciatis, doloribus voluptatibus. Deserunt.</p>
                                        <ul>
                                            <li>
                                                <i className="fa-solid fa-eye"></i>
                                                <p>516</p>
                                            </li>
                                            <li>
                                                <i className="fa-solid fa-fire-flame-curved" style={{ color: "#FFA500" }}></i>
                                                <p>78</p>
                                            </li>
                                        </ul>
                                    </span>
                                </li>
                            </Link>
                        </ul>
                    </div>
                </div>
            </MyContainer>
        </section>
    )
}

export default DetailPage;