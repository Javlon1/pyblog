import styles from './Layout.module.scss';
import Footer from './footer/Footer';
import Header from './header/Header';
import ScrollUp from '../ui/scrollUp/scrollUp';


const Layout = ({ children }) => {
    return (
        <div>
            <main className={styles.layout}>
                <Header />
                {children}
                <Footer />
                <ScrollUp />
            </main>
        </div>
    )
}

export const metaData = {
    name: "pyblog",
    short_name: "pyblog",
    description: "pyblog bu Python va dasturlashga oid o’zbek tilidagi blog. Hozirda Python, Javascript, Dasturlash, Veb dasturlash, Foundation va boshqa turkumlarga va o’nlab teglarga mansub maqolalar saytdan joy olgan.",
    start_url: "/",
    display: "standalone",
    background_color: "#D3EFEA",
    theme_color: "#0D1212",
    manifest: "/site.webmanifest"
}
export default Layout;