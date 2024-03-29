import React, { useState } from 'react'
import styles from './exercise.module.scss'

export const Exercise = ({
    exercise = {},
    count = 0,
    refWeight = {},
    running = false,
}) => {
    const generateExercise = () => {
        let setsArray = []
        if (exercise.sets) {
            setsArray = exercise.sets.items
                ? exercise.sets.items.sort((a, b) => {
                    const dateA = new Date(a.updatedAt)
                    const dateB = new Date(b.updatedAt)
                    if (dateA.getTime() < dateB.getTime()) {
                        return -1;
                      }
                      if (dateA.getTime() > dateB.getTime()) {
                        return 1;
                      }
                      return 0;
                })
                : exercise.sets
        }

        return (
            <div className={styles.exerciseBox}>
                <h2 className={styles.exerciseTitle}>
                    Exercise {count}: {exercise.title}
                </h2>
                <p className={styles.exerciseDesc}>{exercise.description}</p>
                <h3 className={styles.exerciseSets}>Sets:</h3>
                {setsArray.map((set, index) => (
                    <Set
                        set={set}
                        refWeight={refWeight}
                        refWeightName={exercise.ref_weight}
                        num={index + 1}
                        disabled={running}
                    />
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

export const Set = ({ set, refWeight, refWeightName, num, disabled = false }) => {
    const getWeight = multiplier => {
        const correspondingRefWeight = refWeight[refWeightName]
        return correspondingRefWeight ? Math.ceil(correspondingRefWeight * (multiplier / 100)) : 0
    }
    const [difficulty, setDifficulty] = useState('easy')

    const handleSetDifficulty = event => {
        event.preventDefault()
        const diffData = event.target.value
        if (!diffData) {
            alert('Please provide a difficulty!')
        } else {
            setDifficulty(diffData)
        }
    }

    const getSet = (set, number) => {
        switch (difficulty) {
            case 'hard':
                return (
                    <div>
                        <h4>Set {number}</h4>
                        <React.Fragment>
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
                                <p>{`${getWeight(set.easy_multiplier)} lb/kg`}</p>
                            </div>
                        </div>
                    </React.Fragment>
                )
        }
    }
    return (
        <div key={set.id} className={styles.setBox}>
            <form onChange={handleSetDifficulty}>
                <select
                    className={styles.difficultyInput}
                    name='difficulty'
                    id='difficulty'
                >
                    <option value='easy'>Easy</option>
                    <option value='hard'>Hard</option>
                    <option value='brutal'>Brutal</option>
                </select>
            </form>
            {getSet(set, num)}
        </div>
    )
}

export default Exercise
