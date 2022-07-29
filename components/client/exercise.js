import React from 'react'
import styles from './exercise.module.scss'

export const Exercise = ({
    exercise,
    count,
    refWeight = null,
    difficulty = 'easy',
}) => {
    const getWeight = multiplier => {
        return refWeight ? Math.ceil(refWeight * (multiplier / 100)) : 0
    }
    const generateExercise = () => {
        const setsArray = exercise.sets.items
            ? exercise.sets.items
            : exercise.sets
        const getSet = (set, number) => {
            switch (difficulty) {
                case 'hard':
                    return (
                        <div>
                            <h4>Set {number}</h4>
                            <React.Fragment>
                                <h4>Set {number}:</h4>
                                <div className={styles.setFlex}>
                                    <div className={styles.setDesc}>
                                        <p>{`${set.hard_description}`}</p>
                                    </div>
                                    <div className={styles.setWeight}>
                                        <p>{`${getWeight(
                                            set.hard_multiplier,
                                        )} lb`}</p>
                                    </div>
                                </div>
                            </React.Fragment>
                        </div>
                    )
                case 'brutal':
                    return (
                        <React.Fragment>
                            <h4>Set {number}:</h4>
                            <div className={styles.setFlex}>
                                <div className={styles.setDesc}>
                                    <p>{`${set.brutal_description}`}</p>
                                </div>
                                <div className={styles.setWeight}>
                                    <p>{`${getWeight(
                                        set.brutal_multiplier,
                                    )} lb`}</p>
                                </div>
                            </div>
                        </React.Fragment>
                    )
                default:
                    return (
                        <React.Fragment>
                            <h4>Set {number}:</h4>
                            <div className={styles.setFlex}>
                                <div className={styles.setDesc}>
                                    <p>{`${set.easy_description}`}</p>
                                </div>
                                <div className={styles.setWeight}>
                                    <p>{`${getWeight(
                                        set.easy_multiplier,
                                    )} lb`}</p>
                                </div>
                            </div>
                        </React.Fragment>
                    )
            }
        }
        return (
            <div className={styles.exerciseBox}>
                <h2 className={styles.exerciseTitle}>
                    Exercise {count}: {exercise.title}
                </h2>
                <p className={styles.exerciseDesc}>{exercise.description}</p>
                <h3 className={styles.exerciseSets}>Sets:</h3>
                {setsArray.map((set, index) => (
                    <div key={set.id} className={styles.setBox}>
                        {getSet(set, index + 1)}
                    </div>
                ))}
            </div>
        )
    }
    return (
        <React.Fragment>
            <div className={styles.exerciseContainer}>{generateExercise()}</div>
        </React.Fragment>
    )
}

export default Exercise
