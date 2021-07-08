import { useEffect, useState } from 'react'
import s from './Pagination.module.css'


const Pagination = ({ totalUsersCount, pageSize, currentPage, onPageChanged }) => {
    let [prevPage, setPrevPage] = useState(false)
    let [nextPage, setNextPage] = useState(false)
    let pagesCount = Math.ceil(totalUsersCount / pageSize)
    let pages = []

    const prevClick = () => {

    }
    const nextClick = () => {

    }

    // if (currentPage > 9) {
    //     setPrevPage(true)
    // }
    // if (currentPage < (pagesCount - 9)) {
    //     setPrevPage(false)
    // }


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
            {!!prevPage ? <span onClick={prevClick}>prev  </span> : ''}
            {pages.map(p => {
                return <span className={currentPage === p && s.activeSelectedPage}
                    key={p.id} onClick={() => { onPageChanged(p) }} >{p} </span>
            })}
            {!!nextPage ? <span onClick={nextClick}>  next</span> : ''}
        </div>
    )
}

export default Pagination