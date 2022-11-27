import React, { useState, useContext } from 'react'
import { CacheContext } from '../src/extensions/context'
import { randomAlphanumericString } from '../src/extensions/hash'
import { Sets } from '../components/sets'
import styles from './createExercise.module.scss'

const CreateExcercise = props => {
    const [sets, setSets] = useState([])
    const { refresh } = useContext(CacheContext)
    const handleAddSet = setIdMap => {
        const easyDescription = document.getElementById(
            setIdMap.easyDescriptionId,
        )
        const hardDescription = document.getElementById(
            setIdMap.hardDescriptionId,
        )
        const brutalDescription = document.getElementById(
            setIdMap.brutalDescriptionId,
        )
        const easyMultiplier = document.getElementById(
            setIdMap.easyMultiplierId,
        )
        const hardMultiplier = document.getElementById(
            setIdMap.hardMultiplierId,
        )
        const brutalMultiplier = document.getElementById(
            setIdMap.brutalMultiplierId,
        )
        setSets([
            ...sets,
            {
                id: setIdMap.id,
                easy_description: easyDescription.value,
                hard_description: hardDescription.value,
                brutal_description: brutalDescription.value,
                easy_multiplier: easyMultiplier.value,
                hard_multiplier: hardMultiplier.value,
                brutal_multiplier: brutalMultiplier.value,
            },
        ])
        easyDescription.value = ''
        hardDescription.value = ''
        brutalDescription.value = ''
        easyMultiplier.value = ''
        hardMultiplier.value = ''
        brutalMultiplier.value = ''
    }

    async function handleCreateExcercise(event) {
        event.preventDefault()
        const form = new FormData(event.target)

        const newExercise = {
            id: randomAlphanumericString(),
            title: form.get('title'),
            description: form.get('description'),
            time: form.get('time'),
            refweight: form.get('refweight'),
            sets: sets,
        }

        props.addExercise(newExercise)

        document.getElementById('exercise-title-id').value = ''
        document.getElementById('exercise-description-id').value = ''
        document.getElementById('exercise-time-id').value = ''
        setSets([])
        props.setModal(null)
        refresh()
    }
    return (
        <React.Fragment>
            <div className={styles.modalBackground}>
                <div className={styles.modalBox}>
                    <form onSubmit={handleCreateExcercise}>
                        <fieldset>
                            <legend>Title</legend>
                            <input
                                className={styles.titleInput}
                                placeholder={`Excercise Name`}
                                name='title'
                                type='text'
                                id='exercise-title-id'
                            />
                        </fieldset>
                        <fieldset>
                            <legend>Description</legend>
                            <textarea
                                className={styles.descriptionInput}
                                placeholder={`Excercise description`}
                                name='description'
                                type='text'
                                id='exercise-description-id'
                                rows={3}
                            />
                        </fieldset>
                        <fieldset>
                            <legend>Time</legend>
                            <input
                                placeholder={`Seconds`}
                                name='time'
                                type='number'
                                min='1'
                                max='1000'
                                id='exercise-time-id'
                            />
                        </fieldset>
                        <select
                            name='refweight'
                            id='refweight'
                        >
                            {props.refweights.map((ref) => {
                                return (<option value={ref}>{ref}</option>)
                            })}
                        </select>
                        <div className={styles.setContainer}>
                            <Sets sets={sets} />
                            <fieldset>
                                <legend>Add new sets:</legend>
                                <div className={styles.setBox}>
                                    <input
                                        className={styles.setText}
                                        placeholder={`Easy Description`}
                                        name='easy_description'
                                        type='text'
                                        id='easy-description-input-field'
                                    />
                                    <input
                                        className={styles.setNumber}
                                        placeholder={`Easy Multiplier %`}
                                        name='easy_multiplier'
                                        type='number'
                                        id='easy-multiplier-input-field'
                                        min='1'
                                        max='200'
                                    />
                                </div>
                                <div className={styles.setBox}>
                                    <input
                                        className={styles.setText}
                                        placeholder={`Hard Description`}
                                        name='hard_description'
                                        type='text'
                                        id='hard-description-input-field'
                                    />
                                    <input
                                        className={styles.setNumber}
                                        placeholder={`Hard Multiplier %`}
                                        name='hard_multiplier'
                                        type='number'
                                        id='hard-multiplier-input-field'
                                        min='1'
                                        max='200'
                                    />
                                </div>
                                <div className={styles.setBox}>
                                    <input
                                        className={styles.setText}
                                        placeholder={`Brutal Description`}
                                        name='brutal_description'
                                        type='text'
                                        id='brutal-description-input-field'
                                    />

                                    <input
                                        className={styles.setNumber}
                                        placeholder={`Brutal Multiplier %`}
                                        name='brutal_multiplier'
                                        type='number'
                                        id='brutal-multiplier-input-field'
                                        min='1'
                                        max='200'
                                    />
                                </div>
                            </fieldset>
                            <button
                                type='button'
                                onClick={() => {
                                    handleAddSet({
                                        id: randomAlphanumericString(),
                                        easyDescriptionId:
                                            'easy-description-input-field',
                                        hardDescriptionId:
                                            'hard-description-input-field',
                                        brutalDescriptionId:
                                            'brutal-description-input-field',
                                        easyMultiplierId:
                                            'easy-multiplier-input-field',
                                        hardMultiplierId:
                                            'hard-multiplier-input-field',
                                        brutalMultiplierId:
                                            'brutal-multiplier-input-field',
                                    })
                                }}
                            >
                                Add Sets
                            </button>
                            <hr />
                        </div>
                        <button className={styles.createButton} type='submit'>
                            Create Excercise
                        </button>
                    </form>
                    <button
                        className={styles.exitButton}
                        type='button'
                        onClick={() => {
                            props.setModal(null)
                        }}
                    >
                        X
                    </button>
                </div>
            </div>
        </React.Fragment>
    )
}

export default CreateExcercise
