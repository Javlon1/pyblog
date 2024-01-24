import { useEffect, useState } from 'react'
import ReactPaginate from 'react-paginate'
import Portfolio from '../Portfolio'
import styles from './Item.module.scss'
import MyContainer from '@/app/components/ui/MyContainer/MyContainer'


export default function Item() {
    const [projects, setProjects] = useState([])
    const [currentPage, setCurrentPage] = useState(1)
    const [countriesPerPage] = useState(4)
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        const getCounteries = async () => {
            await fetch('https://63c2c490b0c286fbe5f347e9.mockapi.io/users')
                .then(resp => {
                    if (!resp.ok) throw new Error(`oшибка: ${resp.status}`)
                    return resp.json()
                })
                .then(data => setProjects(data))
                .catch(error => console.error(error.message))
            setLoading(false)
        }
        getCounteries()
    }, [])

    const lastCountryIndex = currentPage * countriesPerPage
    const firstCountryIndex = lastCountryIndex - countriesPerPage
    const currentCountry = projects.slice(firstCountryIndex, lastCountryIndex)

    const handlerPageClick = (item) => {

        const correntPage = (item.selected) + 1
        setCurrentPage(correntPage)

    }

    const totalProjects = projects.length

    return (
        <section id='projects' className={styles.item}>
            <MyContainer>
                <Portfolio projects={currentCountry} loading={loading} />

                <ReactPaginate
                    previousLabel={'<<'}
                    nextLabel={'>>'}
                    breakLabel={'...'}
                    pageCount={totalProjects / countriesPerPage}
                    marginPagesDisplayed={2}
                    onPageChange={handlerPageClick}
                    containerClassName={'justify-content-center pagination'}
                    pageClassName={'page-item el'}
                    pageLinkClassName={'page-link el'}
                    previousClassName={'page-item el'}
                    previousLinkClassName={'page-link el'}
                    nextClassName={'page-item el'}
                    nextLinkClassName={'page-link el'}
                    breakClassName={'page-item el'}
                    breakLinkClassName={'page-link el'}
                    activeLinkClassName='act'
                />
            </MyContainer>
        </section>
    )
}
