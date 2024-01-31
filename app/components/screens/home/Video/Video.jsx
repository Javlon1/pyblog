import styles from './Video.module.scss'

const Video = () => {

    return (
        <div className={styles.video}>
            <iframe
                src="https://www.youtube.com/embed/CBoElK7i8B8?si=UM8tjb0FRQxd44uu"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
            >
            </iframe>
        </div>
    )
}

export default Video;