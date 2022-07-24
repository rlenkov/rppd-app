import React, { useContext } from 'react'
import { API } from 'aws-amplify'
import {
    deleteWorkout,
    deleteExcercise,
    deleteSet,
} from '../src/graphql/mutations'
import { utf8ToBase64 } from '../src/extensions/hash'
import { CacheContext } from '../src/extensions/context'
import Excercises from '../components/excercises'
import styles from '../styles/workouts.module.scss'

const Workouts = () => {
    const { cache, refresh } = useContext(CacheContext)
    async function handleDelete(id, title, exercises) {
        try {
            await API.graphql({
                authMode: 'AMAZON_COGNITO_USER_POOLS',
                query: deleteWorkout,
                variables: {
                    input: { id: id },
                },
            })
            for (let i = 0; i < exercises.length; i++) {
                const currentExcercise = exercises[i]
                await API.graphql({
                    authMode: 'AMAZON_COGNITO_USER_POOLS',
                    query: deleteExcercise,
                    variables: {
                        input: { id: currentExcercise.id },
                    },
                })
                for (let k = 0; k < currentExcercise.sets.items.length; k++) {
                    const currentSet = currentExcercise.sets.items[k]
                    await API.graphql({
                        authMode: 'AMAZON_COGNITO_USER_POOLS',
                        query: deleteSet,
                        variables: {
                            input: { id: currentSet.id },
                        },
                    })
                }
            }
        } catch ({ errors }) {
            console.error(...errors)
            throw new Error(errors[0].message)
        }
        refresh()
        alert(`Workout '${title}' deleted!`)
    }

    const generateWorkout = workout => {
        console.log(workout)
        return (
            <div key={workout.id} className={styles.workoutBox}>
                <p>Title: {workout.title}</p>
                <p>
                    Video: <a href={workout.video}>{workout.video}</a>
                </p>
                <p>Rules:</p>
                <div>
                    {workout.rules
                        .filter(r => r !== null)
                        .map(rule => (
                            <p key={utf8ToBase64(rule)}>- {rule}</p>
                        ))}
                </div>
                <p>Excercises:</p>
                <Excercises
                    exercises={workout.excercises.items}
                    remove={() => {}}
                />
                <button
                    type='button'
                    onClick={() =>
                        handleDelete(
                            workout.id,
                            workout.title,
                            workout.excercises.items,
                        )
                    }
                >
                    Delete Workout
                </button>
            </div>
        )
    }
    return (
        <React.Fragment>
            <div className={styles.workoutsContainer}>
                <h2>Workouts:</h2>
                {cache.workouts.map(workout => generateWorkout(workout))}
            </div>
        </React.Fragment>
    )
}

export default Workouts
