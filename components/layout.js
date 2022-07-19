import Head from 'next/head'
import React from 'react'

const Layout = ({ children }) => {
    const currentYear = new Date().getFullYear()
    return (
        <React.Fragment>
            <Head>
                <title>Rppd!</title>
                <meta charset='utf-8' />
                <meta name='author' content='Richard and Seth Lenkovits' />
                <meta
                    name='description'
                    content='An app to get ripped by defeating bosses!'
                />
                <link rel='icon' href='/favicon.ico' />
            </Head>
            <main>{children}</main>
            <footer>
                <div>
                    <p>Lenkovits</p>
                    <p>{`Copyright ${currentYear}`}</p>
                </div>
            </footer>
        </React.Fragment>
    )
}

export default Layout
