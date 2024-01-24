import { useEffect, useState } from 'react';
import ReactPaginate from 'react-paginate';
import MyContainer from '@/app/components/ui/MyContainer/MyContainer';
import styles from './Pagination.module.scss';

export default function Pagination() {
    const [projects, setProjects] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [countriesPerPage] = useState(8);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const getProjects = async () => {
            try {
                const response = await fetch('https://63c2c490b0c286fbe5f347e9.mockapi.io/users');
                if (!response.ok) {
                    throw new Error(`Ошибка: ${response.status}`);
                }
                const data = await response.json();
                setProjects(data);
                setLoading(false);
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

    return (
        <div id="projects" className={styles.item}>
            <MyContainer>

                <div className={styles.portfolio}>
                    {currentProjects?.map((user) =>
                        <p>{user.address}</p>
                    )}
                </div>

                <ReactPaginate
                    previousLabel="<<"
                    nextLabel=">>"
                    breakLabel="..."
                    pageCount={Math.ceil(totalProjects / countriesPerPage)}
                    marginPagesDisplayed={2}
                    onPageChange={handlePageClick}
                    containerClassName={styles.pagination}
                    pageClassName={styles.el}
                    pageLinkClassName="page-link el"
                    previousClassName="page-item el"
                    previousLinkClassName="page-link el"
                    nextClassName="page-item el"
                    nextLinkClassName="page-link el"
                    breakClassName="page-item el"
                    breakLinkClassName="page-link el"
                    activeLinkClassName="act"
                />
            </MyContainer>
        </div>
    );
}