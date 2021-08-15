import Link from 'next/link'
import React from 'react'

const Nav = () => {

    return (
        <>
            <Link href="/order"> Order </Link>
            <Link href="/contact"> Contact </Link>
            <Link href="/sell"> Sell </Link>
            <Link href="/"> Home </Link>
        </>
    )
}

export default Nav
