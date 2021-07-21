import { useEffect, useState } from 'react'
import s from './Pagination.module.css'


const Pagination = ({ totalUsersCount, pageSize, currentPage, onPageChanged, setCurrentPage }) => {
    let pagesCount = Math.ceil(totalUsersCount / pageSize)
    let pages = []
    let [prevPage, setPrevPage] = useState(false)
    let [nextPage, setNextPage] = useState(false)

    useEffect(() => {
        if (currentPage > 9) {
            setPrevPage(true)
        } else {
            setPrevPage(false)
        }
    }, [currentPage])

    useEffect(() => {
        if (currentPage < (pagesCount - 9)) {
            setNextPage(true)
        } else {
            setNextPage(false)
        }
    }, [currentPage, pagesCount])

    useEffect(() => {
        onPageChanged(currentPage)
    }, [onPageChanged, currentPage])


    const prevClickSpan = () => {
        if (currentPage < 9) {
            setCurrentPage(1)
        } else {
            setCurrentPage(currentPage - 9)
        }
    }

    const nextClickSpan = () => {
        setCurrentPage(currentPage + 9)
    }


    if (pagesCount > 9) {
        if (currentPage > 5) {
            for (let i = currentPage - 4; i <= currentPage + 4; i++) {
                pages.push(i)
                if (i === pagesCount) break
            }
        } else {
            for (let i = 1; i <= 9; i++) {
                pages.push(i)
                if (i === pagesCount) break
            }
        }
    } else {
        for (let i = 1; i <= pagesCount; i++) {
            pages.push(i)
        }
    }

    return (
        <div className={s.selectedPage}>
            {!!prevPage && <span onClick={prevClickSpan}>prev  </span>}
            {pages.map(p => {
                return <span className={currentPage === p ? s.activeSelectedPage : undefined}
                    key={p} onClick={() => { onPageChanged(p) }} >{p} </span>
            })}
            {!!nextPage && <span onClick={nextClickSpan}>  next</span>}
        </div>
    )
}

export default Pagination