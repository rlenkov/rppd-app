import React, { useState } from 'react'
import { useRouter } from 'next/router'
import { utf8ToBase64 } from '../src/extensions/hash'
import styles from './intro.module.scss'

export const Intro = ({ id, title, rules, video, setModal }) => {
    const router = useRouter()
    const videoState = (
        <iframe
            className={styles.videoScreen}
            src={video}
            frameborder='0'
            allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
            allowfullscreen
        ></iframe>
    )
    const rulesState = (
        <div className={styles.rulesScreen}>
            <h2>{title}</h2>
            <h3>Rules:</h3>
            {rules ? rules.map(rule => <p>{rule}</p>) : null}
        </div>
    )
    const [introState, setIntroState] = useState({
        state: 'video',
        component: videoState,
    })
    const [isLoading, setIsLoading] = useState(false)

    const handleNext = () => {
        if (introState.state === 'video') {
            setIntroState({
                state: 'rules',
                component: rulesState,
            })
        } else {
            setIsLoading(true)
            router.push(`/workout/${utf8ToBase64(id)}`)
        }
    }

    return (
        <React.Fragment>
            {isLoading ? (
                <div className={styles.loadModal}>
                    <div className={styles.ldsSpinner}>
                        <div></div>
                        <div></div>
                        <div></div>
                        <div></div>
                        <div></div>
                        <div></div>
                        <div></div>
                        <div></div>
                        <div></div>
                        <div></div>
                        <div></div>
                        <div></div>
                    </div>
                    <h2 styles={{ marginLeft: '15px' }}>Loading...</h2>
                </div>
            ) : null}
            <div className={styles.modalBackground}>
                {introState.component}
                <button
                    className={styles.nextButton}
                    type='button'
                    onClick={() => {
                        handleNext()
                    }}
                >
                    Next
                </button>
                <button
                    className={styles.backButton}
                    type='button'
                    onClick={() => {
                        setModal(null)
                    }}
                >
                    Exit
                </button>
            </div>
        </React.Fragment>
    )
}

export default Intro
