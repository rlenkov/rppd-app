import React from 'react'
import { Sets } from './sets'
import styles from './exercises.module.scss'

export const Exercises = ({
    exercises,
    remove,
    doRemove,
    refWeight = null,
}) => {
    async function handleDelete(id) {
        remove(id)
    }

    const generateExercise = exercise => {
        const setsArray = exercise.sets.items
            ? exercise.sets.items
            : exercise.sets
        return (
            <div className={styles.exerciseBox} key={exercise.id}>
                <p>Title: {exercise.title}</p>
                <p>Description: {exercise.description}</p>
                <p>Time: {exercise.time}</p>
                <p>Refweight: {exercise.ref_weight}</p>
                <Sets sets={setsArray} refWeight={refWeight} />
                {doRemove ? (
                    <button
                        type='button'
                        onClick={() =>
                            handleDelete(exercise.id, exercise.title)
                        }
                    >
                        Delete Exercise
                    </button>
                ) : null}
            </div>
        )
    }
    return (
        <React.Fragment>
            <div className={styles.exercisesContainer}>
                {exercises.map(exercise => generateExercise(exercise))}
            </div>
        </React.Fragment>
    )
}

export default Exercises
