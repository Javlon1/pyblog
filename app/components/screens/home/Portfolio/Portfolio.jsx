import styles from './Portfolio.module.scss'


export default function Portfolio({ projects, loading }) {

    // if (loading) {
    //     return <Loader />
    // }

    return (
        <section className={styles.portfolio}>
            {
                projects?.map((e) => (
                    e.project?.map((i) => (
                        <a
                            href={i.link}
                            key={i.id}
                            target="_blank"
                        >
                            <img src={i.id == 1 ? img1 : i.id == 2 ? img2 : ''} alt={i.name} />
                            <p>
                                <em>
                                    {i.name}
                                </em>
                            </p>
                        </a>
                    ))
                ))
            }
        </section>
    )
}
