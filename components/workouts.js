import React from 'react'
import { API } from 'aws-amplify'
import { deleteWorkout } from '../src/graphql/mutations'
import { utf8ToBase64 } from '../src/extensions/hash'
import styles from '../styles/workouts.module.scss'

const Workouts = ({ workouts = [] }) => {
    async function handleDelete(id) {
        try {
            await API.graphql({
                authMode: 'AMAZON_COGNITO_USER_POOLS',
                query: deleteWorkout,
                variables: {
                    input: { id: id },
                },
            })
        } catch ({ errors }) {
            console.error(...errors)
            throw new Error(errors[0].message)
        }
        window.location.reload()
    }

    const generateWorkout = workout => {
        return (
            <div className={styles.workoutBox}>
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
                <div>
                    {workout.excercises.items.map(exe => (
                        <p key={utf8ToBase64(exe.title)}>{exe.title}</p>
                    ))}
                </div>
                <button type='button' onClick={() => handleDelete(workout.id)}>
                    Delete Workout
                </button>
            </div>
        )
    }
    return (
        <React.Fragment>
            <div className={styles.workoutsContainer}>
                <h2>Workouts:</h2>
                {workouts.map(workout => generateWorkout(workout))}
            </div>
        </React.Fragment>
    )
}

export default Workouts
