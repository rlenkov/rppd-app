import React, { useState } from 'react'
import { useRouter } from 'next/router'
import { utf8ToBase64 } from '../src/extensions/hash'
import styles from './intro.module.scss'

export const Intro = props => {
    const router = useRouter()
    const videoState = (
        <iframe
            className={styles.videoScreen}
            src={props.video}
            frameborder='0'
            allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
            allowfullscreen
        ></iframe>
    )
    const rulesState = (
        <div className={styles.rulesScreen}>
            <h2>{props.title}</h2>
            <h3>Rules:</h3>
            {props.rules.map(rule => (
                <p>{rule}</p>
            ))}
        </div>
    )
    const [introState, setIntroState] = useState({
        state: 'video',
        component: videoState,
    })

    const handleNext = () => {
        if (introState.state === 'video') {
            setIntroState({
                state: 'rules',
                component: rulesState,
            })
        } else {
            router.push(`/workout/${utf8ToBase64(props.id)}`)
        }
    }

    return (
        <React.Fragment>
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
                        props.setModal(null)
                    }}
                >
                    Exit
                </button>
            </div>
        </React.Fragment>
    )
}

export default Intro
