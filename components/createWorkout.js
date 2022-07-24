import React, { useState, useContext } from 'react'
import { utf8ToBase64 } from '../src/extensions/hash'
import { API } from 'aws-amplify'
import { createWorkout, createExcercise, createSet } from '../src/graphql/mutations'
import CreateExcercise from './createExercise'
import Excercises from '../components/excercises'
import { CacheContext } from '../src/extensions/context'
import styles from './createWorkout.module.scss'

const CreateWorkout = props => {
    const [rules, setRules] = useState([])
    const [excercises, setExcercises] = useState([])
    const { cache, refresh } = useContext(CacheContext)

    const handleAddRule = id => {
        const elem = document.getElementById(id)
        setRules([...rules, elem.value])
        elem.value = ''
    }

    const handleRemoveRule = ruleText => {
        const updatedRules = rules.filter(rule => rule !== ruleText)
        setRules(updatedRules)
    }

    const addExercise = ex => {
        setExcercises([...excercises, ex])
    }

    const handleRemoveExercise = exId => {
        const updatedEx = excercises.filter(ex => ex.id !== exId)
        setExcercises(updatedEx)
    }

    async function handleCreateWorkout(event) {
        event.preventDefault()
        const form = new FormData(event.target)
        try {
            // 👇 Notice how the client correctly uses the top-level `API` import
            const workoutData = await API.graphql({
                authMode: 'AMAZON_COGNITO_USER_POOLS',
                query: createWorkout,
                variables: {
                    input: {
                        title: form.get('title'),
                        video: form.get('video'),
                        rules: rules,
                    },
                },
            })
            for (let i = 0; i < excercises.length; i++) {
                const currentExcercise = excercises[i]
                const excData = await API.graphql({
                    authMode: 'AMAZON_COGNITO_USER_POOLS',
                    query: createExcercise,
                    variables: {
                        input: {
                            workoutExcercisesId:
                                workoutData.data.createWorkout.id,
                            title: currentExcercise.title,
                            description: currentExcercise.description,
                            time: currentExcercise.time,
                        },
                    },
                })
                for (let k = 0; k < currentExcercise.sets.length; k++) {
                    const currentSet = currentExcercise.sets[k]
                    await API.graphql({
                        authMode: 'AMAZON_COGNITO_USER_POOLS',
                        query: createSet,
                        variables: {
                            input: {
                                excerciseSetsId:
                                    excData.data.createExcercise.id,
                                easy_description: currentSet.easy_description,
                                hard_description: currentSet.hard_description,
                                brutal_description:
                                    currentSet.brutal_description,
                                easy_multiplier: currentSet.easy_multiplier,
                                hard_multiplier: currentSet.hard_multiplier,
                                brutal_multiplier: currentSet.brutal_multiplier,
                            },
                        },
                    })
                }
            }
        } catch ({ errors }) {
            console.error(...errors)
            throw new Error(errors[0].message)
        }
        document.getElementById('workout-title-id').value = ''
        document.getElementById('workout-video-id').value = ''
        setExcercises([])
        setRules([])
        refresh()
    }
    return (
        <React.Fragment>
            <div className={styles.container}>
                <h3 className={styles.title}>New Workout:</h3>
                <form onSubmit={handleCreateWorkout}>
                    <fieldset>
                        <legend>Title</legend>
                        <input
                            className={styles.titleInput}
                            placeholder={`Workout Name`}
                            name='title'
                            type='text'
                            id='workout-title-id'
                        />
                    </fieldset>
                    <fieldset>
                        <legend>Video</legend>
                        <input
                            className={styles.videoInput}
                            placeholder={`Youtube video url`}
                            name='video'
                            type='url'
                            id='workout-video-id'
                        />
                    </fieldset>
                    <div>
                        <p>Rules:</p>
                        <div className={styles.ruleBox}>
                            {rules.map(rule => (
                                <p
                                    className={styles.rule}
                                    key={`key-${utf8ToBase64(rule)}`}
                                >
                                    {rule}{' '}
                                    <span
                                        className={styles.ruleRemove}
                                        onClick={() => {
                                            handleRemoveRule(rule)
                                        }}
                                    >
                                        X
                                    </span>
                                </p>
                            ))}
                        </div>
                        <fieldset>
                            <legend>Add new rules:</legend>
                            <textarea
                                className={styles.rulesInput}
                                placeholder={`Add new Rule`}
                                name='rule'
                                type='text'
                                id='rule-input-field'
                                rows={3}
                            />
                        </fieldset>
                        <button
                            type='button'
                            onClick={() => {
                                handleAddRule('rule-input-field')
                            }}
                        >
                            Add Rule
                        </button>
                    </div>
                    <div>
                        <p>Add Excercises</p>
                        <button
                            type='button'
                            onClick={() => {
                                props.setModal(
                                    <CreateExcercise
                                        setModal={props.setModal}
                                        addExercise={addExercise}
                                        doRemove
                                    />,
                                )
                            }}
                        >
                            Add Exercise
                        </button>
                        <p>Selected ones:</p>
                        <div className={styles.excerciseBox}>
                            <Excercises
                                exercises={excercises}
                                remove={handleRemoveExercise}
                            />
                        </div>
                    </div>
                    <button type='submit'>Create Workout</button>
                </form>
            </div>
        </React.Fragment>
    )
}
export default CreateWorkout
