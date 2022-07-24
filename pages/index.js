import React, { useState, useEffect } from 'react'
import { withSSRContext } from 'aws-amplify'
import { listWorkouts } from '../src/graphql/queries'
import { Intro } from './intro'
import styles from './Home.module.scss'

export async function getServerSideProps({ req }) {
    // When on the server, use withSSRContext({ req?: ServerRequest }):
    const SSR = withSSRContext({ req })
    const response = await SSR.API.graphql({ query: listWorkouts })

    return {
        props: {
            workouts: response.data.listWorkouts.items,
        },
    }
}

export default function Home({ workouts = [] }) {
    const [modal, setModal] = useState(null)

    const modalExitListener = event => {
        if (event.key === 'Escape') {
            setModal(null)
        }
    }

    useEffect(() => {
        window.addEventListener('keydown', modalExitListener)
        return () => {
            window.removeEventListener('keydown', modalExitListener)
        }
    }, [])

    return (
        <div className={styles.container}>
            {workouts.map(workout => {
                return (
                    <button
                        className={styles.card}
                        onClick={() => {
                            setModal(
                                <Intro
                                    id={workout.id}
                                    title={workout.title}
                                    rules={workout.rules}
                                    video={workout.video}
                                    setModal={setModal}
                                />,
                            )
                        }}
                        key={workout.id}
                    >
                        <h3>{workout.title}</h3>
                    </button>
                )
            })}
            {modal}
        </div>
    )
}
