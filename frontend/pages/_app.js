import React from 'react'
import Page from '../components/Page'
import NProgress from "nprogress"
import Router from "next/router"
import "../components/styles/nprogress.css"

Router.events.on("routeChangeStart",() => NProgress.start())
Router.events.on("routeChangeComplete",() => NProgress.done())
Router.events.on("routeChangeError",() => NProgress.done())


// _app.js can be used to render the component which is required on every page. Ex.
// navbar, sidebar etc.

const _app = ({Component,mainProps,router}) => {
    return (
        <>
            <Page>
                <Component {...mainProps}/>
                <p> {router.pathname} </p>
            </Page>
            
        </>

    )
}

export default _app
