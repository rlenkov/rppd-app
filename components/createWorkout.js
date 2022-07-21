import React, { useState } from 'react'
import { utf8ToBase64 } from '../src/extensions/hash'
import { API } from 'aws-amplify'
import { createWorkout, updateExcercise } from '../src/graphql/mutations'

const CreateWorkout = ({ exs = [] }) => {
    const [rules, setRules] = useState([])
    const [excercises, setExcercises] = useState([])

    const handleAddRule = id => {
        const elem = document.getElementById(id)
        setRules([...rules, elem.value])
        elem.value = ''
    }

    const handleSelectExcercise = event => {
        const foundEx = exs.find(exelem => exelem.id === event.target.value)
        setExcercises([...excercises, foundEx])
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
                        rules: [form.get('rules')],
                    },
                },
            })
            await API.graphql({
                authMode: 'AMAZON_COGNITO_USER_POOLS',
                query: updateExcercise,
                variables: {
                    input: {
                        workoutExcercisesId: workoutData.data.createWorkout.id,
                        title: 'Excercise title',
                        description: 'A Description for the excercise',
                        time: 120,
                    },
                },
            })
        } catch ({ errors }) {
            console.error(...errors)
            throw new Error(errors[0].message)
        }
    }
    return (
        <React.Fragment>
            <h3>New Workout</h3>
            <form onSubmit={handleCreateWorkout}>
                <fieldset>
                    <legend>Title</legend>
                    <input
                        placeholder={`Workout Name`}
                        name='title'
                        type='text'
                    />
                </fieldset>
                <fieldset>
                    <legend>Video</legend>
                    <input
                        placeholder={`Youtube video url`}
                        name='video'
                        type='url'
                    />
                </fieldset>
                <div>
                    <p>Rules:</p>
                    {rules.map(rule => (
                        <p key={`key-${utf8ToBase64(rule)}`}>{rule}</p>
                    ))}
                    <fieldset>
                        <legend>Add new rules:</legend>
                        <input
                            placeholder={`Add new Rule`}
                            name='rule'
                            type='text'
                            id='rule-input-field'
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
                    <p>Select Excercises</p>
                    <select
                        name='excercise'
                        id='excercise-selector'
                        onChange={event => {
                            handleSelectExcercise(event)
                        }}
                    >
                        {exs.map(ex => (
                            <option key={`key-op-${ex.id}`} value={ex.id}>{ex.title}</option>
                        ))}
                    </select>
                    <p>Selected ones:</p>
                    {excercises.map(eee => (
                        <p>{eee.title}</p>
                    ))}
                </div>
                <button type='submit'>Create Workout</button>
            </form>
        </React.Fragment>
    )
}
export default CreateWorkout
