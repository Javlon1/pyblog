import { useEffect, useState } from 'react';
import ReactPaginate from 'react-paginate';
import Image from 'next/image';
import Link from 'next/link';
import styles from './Pagination.module.scss';

import thumbs_up from "../../../../../public/emojies/thumbs_up.png"
import heart from "../../../../../public/emojies/heart.png"
import sunglass_face from "../../../../../public/emojies/sunglass_face.png"
import fire from "../../../../../public/emojies/fire.png"
import alien from "../../../../../public/emojies/alien.png"
import neutral_face from "../../../../../public/emojies/neutral_face.png"
import thumbs_down from "../../../../../public/emojies/thumbs_down.png"

export default function Pagination() {

    // Pagination
    const [projects, setProjects] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [countriesPerPage] = useState(10);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        const getProjects = async () => {
            try {
                const response = await fetch('https://63c2c490b0c286fbe5f347e9.mockapi.io/users');
                if (!response.ok) {
                    throw new Error(`Ошибка: ${response.status}`);
                }
                const data = await response.json();
                setProjects(data);
                setLoading(true);
            } catch (error) {
                console.error(error.message);
            }
        };

        getProjects();
    }, []);

    const lastProjectIndex = currentPage * countriesPerPage;
    const firstProjectIndex = lastProjectIndex - countriesPerPage;
    const currentProjects = projects.slice(firstProjectIndex, lastProjectIndex);

    const handlePageClick = (item) => {
        const newPage = item.selected + 1;
        setCurrentPage(newPage);
    };

    const totalProjects = projects.length;
    // Pagination

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

    return (
        <div id="projects" className={styles.item}>

            <span className={`${styles.alert} ${showModal ? styles.alertAct : ""}`}>
                <p>Lorem ipsum dolor sit amet consectetur.</p>
                <i onClick={handlerReactionCloce} className="fa-solid fa-xmark"></i>
            </span>

            <div className={styles.portfolio}>
                {
                    loading ? (
                        currentProjects?.map((item) => (
                            <div key={item.id} className={styles.portfolio__items}>
                                <div className={styles.portfolio__items__top}>
                                    <div className={styles.portfolio__items__top__left}>
                                        <ul>
                                            <li>
                                                <i className="fa-brands fa-python"></i>
                                                <p>Python</p>
                                            </li>
                                            <li>
                                                <i className="fa-solid fa-eye"></i>
                                                <p>92 marta</p>
                                            </li>
                                        </ul>
                                        <Link
                                            href={'/detail'}
                                            onClick={() => {
                                                setDetail([...new Set([item])]);
                                            }}
                                        >
                                            <h2>Pythonni o'rganish uchun 2024-yilda nima qilishim kerak ?</h2>
                                        </Link>
                                        <p>Python dasturlash tilini o'rganish uchun bir nechta usullar mavjud, va har bir kishining o'rganish usuli har-hil bo'lishi mumkin. Quyidagi qadamlar si...</p>
                                    </div>
                                    <div className={styles.portfolio__items__top__right}>
                                        <Link
                                            className={styles.portfolio__items__top__right__link}
                                            href={'/detail'}
                                            onClick={() => {
                                                setDetail([...new Set([item])]);
                                            }}
                                        >
                                            <Image
                                                className={styles.img}
                                                width={200}
                                                height={133}
                                                priority
                                                alt='img'
                                                src={"https://pyblog.uz/pybloguz/mediafiles/posts/2024/01/all_linux_commands-min.png"}
                                            />
                                        </Link>
                                    </div>
                                </div>
                                <div className={styles.portfolio__items__bottom}>
                                    <div className={styles.tooltip}>
                                        <i className="fa-regular fa-face-smile-wink"></i>
                                        <span>19</span>
                                        <div className={styles.tooltip__reaction}>
                                            Reaksiyalar bildirganlar !
                                        </div>
                                    </div>
                                    <ul className={styles.portfolio__items__bottom__list}>
                                        <li
                                            onClick={handlerReactionAct}
                                            className={styles.portfolio__items__bottom__list__item}
                                        >
                                            <Image
                                                className={styles.portfolio__items__bottom__list__item__img}
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
                                            className={styles.portfolio__items__bottom__list__item}
                                        >
                                            <Image
                                                className={styles.portfolio__items__bottom__list__item__img}
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
                                            className={styles.portfolio__items__bottom__list__item}
                                        >
                                            <Image
                                                className={styles.portfolio__items__bottom__list__item__img}
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
                                            className={styles.portfolio__items__bottom__list__item}
                                        >
                                            <Image
                                                className={styles.portfolio__items__bottom__list__item__img}
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
                                            className={styles.portfolio__items__bottom__list__item}
                                        >
                                            <Image
                                                className={styles.portfolio__items__bottom__list__item__img}
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
                                            className={styles.portfolio__items__bottom__list__item}
                                        >
                                            <Image
                                                className={styles.portfolio__items__bottom__list__item__img}
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
                                            className={styles.portfolio__items__bottom__list__item}
                                        >
                                            <Image
                                                className={styles.portfolio__items__bottom__list__item__img}
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
                                </div>
                            </div>
                        ))) : (
                        <ul className={styles.skeleton}>
                            <li className={styles.skeleton__item}></li>
                            <li className={styles.skeleton__item}></li>
                            <li className={styles.skeleton__item}></li>
                            <li className={styles.skeleton__item}></li>
                        </ul>
                    )
                }
            </div>

            <ReactPaginate
                previousLabel="<<"
                nextLabel=">>"
                breakLabel="..."
                pageCount={Math.ceil(totalProjects / countriesPerPage)}
                marginPagesDisplayed={2}
                onPageChange={handlePageClick}
                containerClassName={styles.pagination}
                pageClassName={styles.pagination__el}
                pageLinkClassName={styles.pagination__el}
                previousClassName={styles.pagination__el}
                previousLinkClassName={styles.pagination__el}
                nextClassName={styles.pagination__el}
                nextLinkClassName={styles.pagination__el}
                breakClassName={styles.pagination__el}
                breakLinkClassName={styles.pagination__el}
                activeLinkClassName={styles.act}
            />

        </div>
    );
}