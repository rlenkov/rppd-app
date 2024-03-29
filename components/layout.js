import Head from 'next/head'
import React from 'react'
import styles from './layout.module.scss'

const Layout = ({ children }) => {
    const currentYear = new Date().getFullYear()
    return (
        <React.Fragment>
            <Head>
                <title>Rppd!</title>
                <link href="https://fonts.googleapis.com/css2?family=Heron+Sans&display=swap" rel="stylesheet" />
                <meta charset='utf-8' />
                <meta name='author' content='Richard and Seth Lenkovits' />
                <meta
                    name='description'
                    content='An app to get ripped by defeating bosses!'
                />
                <link rel='icon' href='/favicon.ico' />
            </Head>
            <header className={styles.mainHeader}>
                <h1>JACKED NERD</h1>
            </header>
            <main className={styles.container}>{children}</main>
            <footer className={styles.mainFooter}>
                <p>Lenkovits</p>
                <p>{`Copyright ${currentYear}`}</p>
            </footer>
        </React.Fragment>
    )
}

export default Layout
