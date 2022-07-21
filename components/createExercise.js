import React, { useState } from 'react'
import { utf8ToBase64 } from '../src/extensions/hash'
import { API } from 'aws-amplify'
import { createSet, createExcercise } from '../src/graphql/mutations'

const CreateExcercise = () => {
    const [sets, setSets] = useState([])

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
                easyDescription: easyDescription.value,
                hardDescription: hardDescription.value,
                brutalDescription: brutalDescription.value,
                easyMultiplier: easyMultiplier.value,
                hardMultiplier: hardMultiplier.value,
                brutalMultiplier: brutalMultiplier.value,
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

        try {
            const excData = await API.graphql({
                authMode: 'AMAZON_COGNITO_USER_POOLS',
                query: createExcercise,
                variables: {
                    input: {
                        title: form.get('title'),
                        description: form.get('description'),
                        time: form.get('time'),
                    },
                },
            })
            for (let index = 0; index < sets.length; index++) {
                const currentSet = sets[index]
                await API.graphql({
                    authMode: 'AMAZON_COGNITO_USER_POOLS',
                    query: createSet,
                    variables: {
                        input: {
                            excerciseSetsId: excData.data.createExcercise.id,
                            easy_description: currentSet.easyDescription,
                            hard_description: currentSet.hardDescription,
                            brutal_description: currentSet.brutalDescription,
                            easy_multiplier: currentSet.easyMultiplier,
                            hard_multiplier: currentSet.hardMultiplier,
                            brutal_multiplier: currentSet.brutalMultiplier,
                        },
                    },
                })
            }
        } catch ({ errors }) {
            console.error(...errors)
            throw new Error(errors[0].message)
        }
        
        document.getElementById('exercise-title-id').value = ''
        document.getElementById('exercise-description-id').value = ''
        document.getElementById('exercise-time-id').value = ''
        setSets([])
    }
    return (
        <React.Fragment>
            <form onSubmit={handleCreateExcercise}>
                <fieldset>
                    <legend>Title</legend>
                    <input
                        placeholder={`Excercise Name`}
                        name='title'
                        type='text'
                        id='exercise-title-id'
                    />
                </fieldset>
                <fieldset>
                    <legend>Description</legend>
                    <input
                        placeholder={`Excercise description`}
                        name='description'
                        type='text'
                        id='exercise-description-id'
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
                <div>
                    <p>Sets:</p>
                    {sets.map(set => (
                        <div key={`key-${utf8ToBase64(set.easyDescription)}`}>
                            <p>{set.easyDescription}</p>
                            <p>{set.hardDescription}</p>
                            <p>{set.brutalDescription}</p>
                            <p>{set.easyMultiplier}</p>
                            <p>{set.hardMultiplier}</p>
                            <p>{set.brutalMultiplier}</p>
                        </div>
                    ))}
                    <fieldset>
                        <legend>Add new sets:</legend>
                        <input
                            placeholder={`Easy Description`}
                            name='easy_description'
                            type='text'
                            id='easy-description-input-field'
                        />
                        <input
                            placeholder={`Hard Description`}
                            name='hard_description'
                            type='text'
                            id='hard-description-input-field'
                        />
                        <input
                            placeholder={`Brutal Description`}
                            name='brutal_description'
                            type='text'
                            id='brutal-description-input-field'
                        />
                        <input
                            placeholder={`Easy Multiplier %`}
                            name='easy_multiplier'
                            type='number'
                            id='easy-multiplier-input-field'
                            min='1'
                            max='200'
                        />
                        <input
                            placeholder={`Hard Multiplier %`}
                            name='hard_multiplier'
                            type='number'
                            id='hard-multiplier-input-field'
                            min='1'
                            max='200'
                        />
                        <input
                            placeholder={`Brutal Multiplier %`}
                            name='brutal_multiplier'
                            type='number'
                            id='brutal-multiplier-input-field'
                            min='1'
                            max='200'
                        />
                    </fieldset>
                    <button
                        type='button'
                        onClick={() => {
                            handleAddSet({
                                easyDescriptionId:
                                    'easy-description-input-field',
                                hardDescriptionId:
                                    'hard-description-input-field',
                                brutalDescriptionId:
                                    'brutal-description-input-field',
                                easyMultiplierId: 'easy-multiplier-input-field',
                                hardMultiplierId: 'hard-multiplier-input-field',
                                brutalMultiplierId:
                                    'brutal-multiplier-input-field',
                            })
                        }}
                    >
                        Add Sets
                    </button>
                </div>
                <button type='submit'>Create Excercise</button>
            </form>
        </React.Fragment>
    )
}

export default CreateExcercise
