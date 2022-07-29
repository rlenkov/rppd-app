import React, { useState, useEffect, useRef } from 'react'
import { Amplify, withSSRContext } from 'aws-amplify'
import { useRouter } from 'next/router'
import awsExports from '../../src/aws-exports'
import { getWorkout, listWorkouts } from '../../src/graphql/queries'
import { Exercise } from '../../components/client/exercise'
import { utf8ToBase64, base64ToUtf8 } from '../../src/extensions/hash'
import styles from './workout.module.scss'

Amplify.configure({ ...awsExports, ssr: true })

// https://codesandbox.io/s/react-countdown-demo-forked-6rdp58?file=/src/App.js

export async function getStaticPaths() {
    const SSR = withSSRContext()
    const { data } = await SSR.API.graphql({ query: listWorkouts })
    const paths = data.listWorkouts.items.map(workout => ({
        params: { wid: utf8ToBase64(workout.id) },
    }))

    return {
        fallback: true,
        paths,
    }
}

export async function getStaticProps({ params }) {
    const SSR = withSSRContext()
    const { data } = await SSR.API.graphql({
        query: getWorkout,
        variables: {
            id: base64ToUtf8(params.wid),
        },
    })

    return {
        props: {
            workout: data.getWorkout,
        },
    }
}

const STATUS = {
    STARTED: 'Started',
    STOPPED: 'Stopped',
}

// source: https://overreacted.io/making-setinterval-declarative-with-react-hooks/
function useInterval(callback, delay) {
    const savedCallback = useRef()

    // Remember the latest callback.
    useEffect(() => {
        savedCallback.current = callback
    }, [callback])

    // Set up the interval.
    useEffect(() => {
        function tick() {
            savedCallback.current()
        }
        if (delay !== null) {
            let id = setInterval(tick, delay)
            return () => clearInterval(id)
        }
    }, [delay])
}

// https://stackoverflow.com/a/2998874/1673761
const twoDigits = num => String(num).padStart(2, '0')

export default function Workout({ workout }) {
    const router = useRouter()
    const [exercises, setExercises] = useState(
        workout.excercises ? workout.excercises.items : [],
    )
    const [count, setCount] = useState(0)
    const currentExercise = exercises[count]
    const [secondsRemaining, setSecondsRemaining] = useState(
        currentExercise.time,
    )
    const [status, setStatus] = useState(STATUS.STOPPED)
    const [refWeight, setRefWeight] = useState(null)
    const [difficulty, setDifficulty] = useState('easy')

    const secondsToDisplay = secondsRemaining % 60
    const minutesRemaining = (secondsRemaining - secondsToDisplay) / 60
    const minutesToDisplay = minutesRemaining % 60
    const hoursToDisplay = (minutesRemaining - minutesToDisplay) / 60

    const handleStart = () => {
        setStatus(STATUS.STARTED)
    }
    const handleStop = () => {
        setStatus(STATUS.STOPPED)
    }
    useInterval(
        () => {
            if (secondsRemaining > 0) {
                setSecondsRemaining(secondsRemaining - 1)
            } else {
                handleStop()
                handleNext()
            }
        },
        status === STATUS.STARTED ? 1000 : null,
        // passing null stops the interval
    )

    useEffect(() => {
        setExercises(workout.excercises.items)
    }, [workout])

    useEffect(() => {
        if (refWeight !== null) {
            handleStart()
        }
    }, [refWeight])

    if (router.isFallback) {
        return (
            <div>
                <h1>Loading&hellip;</h1>
            </div>
        )
    }

    const handleNext = () => {
        if (count < exercises.length - 1) {
            setCount(count + 1)
            setSecondsRemaining(currentExercise.time)
            handleStart()
        } else {
            alert('Congrats!')
        }
    }

    const handleSetRefWeight = event => {
        event.preventDefault()
        const form = new FormData(event.target)
        const refWeightData = form.get('refweight')
        if (!refWeightData) {
            alert('Please provide a reference weight!')
        } else {
            setRefWeight(refWeightData)
            setDifficulty(form.get('difficulty'))
        }
    }

    return (
        <React.Fragment>
            {refWeight === null ? (
                <div className={styles.modal}>
                    <div className={styles.modalBox}>
                        <form
                            className={styles.modalForm}
                            onSubmit={handleSetRefWeight}
                        >
                            <input
                                className={styles.refWeightInput}
                                placeholder={`Input your reference weight`}
                                name='refweight'
                                type='number'
                            />
                            <select
                                className={styles.difficultyInput}
                                name='difficulty'
                                id='difficulty'
                            >
                                <option value='easy'>Easy</option>
                                <option value='hard'>Hard</option>
                                <option value='brutal'>Brutal</option>
                            </select>
                            <button
                                className={styles.startButton}
                                type='submit'
                            >
                                Start
                            </button>
                        </form>
                    </div>
                </div>
            ) : null}
            <h1 className={styles.workoutTitle}>{workout.title}</h1>
            <Exercise
                count={count + 1}
                exercise={currentExercise}
                refWeight={refWeight}
                difficulty={difficulty}
            />
            <div className={styles.countdownBox}>
                <div className={styles.countdownField}>
                    {twoDigits(hoursToDisplay)}:{twoDigits(minutesToDisplay)}:
                    {twoDigits(secondsToDisplay)}
                </div>
                <button
                    className={styles.nextButton}
                    type='button'
                    onClick={() => {
                        handleNext()
                    }}
                >
                    Next Exercise
                </button>
            </div>
        </React.Fragment>
    )
}
