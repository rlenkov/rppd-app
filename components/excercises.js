import React from 'react'
import { API } from 'aws-amplify'
import { deleteExcercise } from '../src/graphql/mutations'
import styles from './excercises.module.scss'

const Excercises = ({ exercises = [] }) => {
    async function handleDelete(id, title) {
        try {
            await API.graphql({
                authMode: 'AMAZON_COGNITO_USER_POOLS',
                query: deleteExcercise,
                variables: {
                    input: { id: id },
                },
            })
        } catch ({ errors }) {
            console.error(...errors)
            throw new Error(errors[0].message)
        }
        alert(`Excercise '${title}' deleted!`)
    }

    const generateExercise = exercise => {
        return (
            <div className={styles.excerciseBox} key={exercise.id}>
                <p>Title: {exercise.title}</p>
                <p>
                    Video: <a href={exercise.video}>{exercise.video}</a>
                </p>
                <p>Sets:</p>
                <div className={styles.setsBox}>
                    {exercise.sets.items.map((set, index) => {
                        return (
                            <div key={`${set.id}-${index}`}>
                                <p>{set.easy_description}</p>
                                <p>{set.hard_description}</p>
                                <p>{set.brutal_description}</p>
                                <p>{set.easy_multiplier}</p>
                                <p>{set.hard_multiplier}</p>
                                <p>{set.brutal_multiplier}</p>
                            </div>
                        )
                    })}
                </div>

                <button type='button' onClick={() => handleDelete(exercise.id, exercise.title)}>
                    Delete Exercise
                </button>
            </div>
        )
    }
    return (
        <React.Fragment>
            <div className={styles.excercisesContainer}>
                <h2>Exercises:</h2>
                {exercises.map(exercise => generateExercise(exercise))}
            </div>
        </React.Fragment>
    )
}

export default Excercises
