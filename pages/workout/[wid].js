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
    const initEx = () => {
        if (workout && workout.exercises) {
            return workout.exercises.items
        }
        return []
    }

    const calculateHealth = () => {
        const maxHealth = 100
        const exerciseNumber = exercises.length
        const equalParts = Math.floor(maxHealth / exerciseNumber)
        const remainder = maxHealth % exerciseNumber
        const progressMinus = count * equalParts
        let progress = 100 - progressMinus
        if (progress - remainder === 0) {
            progress = 1
        }
        return `${progress}%`
    }

    const router = useRouter()
    const [exercises, setExercises] = useState(initEx())
    const [count, setCount] = useState(0)
    const [health, setHealth] = useState(calculateHealth())
    const currentExercise = exercises[count]
    const [secondsRemaining, setSecondsRemaining] = useState(
        currentExercise ? currentExercise.time : 0,
    )
    const [status, setStatus] = useState(STATUS.STOPPED)
    const [refWeight, setRefWeight] = useState(null)

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
                alert("You've run out of time!")
            }
        },
        status === STATUS.STARTED ? 1000 : null,
        // passing null stops the interval
    )

    useEffect(() => {
        setExercises(initEx())
    }, [workout])

    if (router.isFallback) {
        return (
            <div>
                <h1>Loading&hellip;</h1>
            </div>
        )
    }

    useEffect(() => {
        setHealth(calculateHealth())
    }, [count])

    const handleNext = () => {
        if (secondsRemaining !== 0 && status === STATUS.STOPPED) {
            handleStart()
        } else if (
            secondsRemaining === 0 &&
            status === STATUS.STOPPED &&
            count >= exercises.length - 1
        ) {
            router.push(`/`)
        } else {
            handleStop()
            if (count < exercises.length - 1) {
                setCount(count + 1)
                setSecondsRemaining(currentExercise ? currentExercise.time : 0)
            } else {
                setHealth('1%')
                setSecondsRemaining(0)
                alert('Congrats, you have won!')
            }
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
        }
    }

    const getButtonText = () => {
        if (status === STATUS.STOPPED && secondsRemaining !== 0) {
            return 'START'
        }
        if (
            status === STATUS.STOPPED &&
            secondsRemaining === 0 &&
            count >= exercises.length - 1
        ) {
            return 'Exit'
        }
        if (count === exercises.length - 1) {
            return 'FINISH'
        }
        return 'NEXT'
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
                            <button
                                className={styles.startButton}
                                type='submit'
                            >
                                Set
                            </button>
                        </form>
                    </div>
                </div>
            ) : null}
            <h1 className={styles.workoutTitle}>{workout.title}</h1>
            <div className={styles.hpBarBox}>
                <p>HP</p>
                <div className={styles.hpBar} style={{ width: health }}></div>
            </div>
            <Exercise
                count={count + 1}
                exercise={currentExercise}
                refWeight={refWeight}
                running={status === STATUS.STARTED || secondsRemaining === 0}
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
                    {getButtonText()}
                </button>
            </div>
        </React.Fragment>
    )
}
