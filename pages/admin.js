import React from 'react'
import { Authenticator } from '@aws-amplify/ui-react'
import { API, Auth } from 'aws-amplify'
import {
    createWorkout,
    createSet,
    createExcercise,
} from '../src/graphql/mutations'

const Admin = () => {
    async function handleCreatePost(event) {
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
            const excData = await API.graphql({
                authMode: 'AMAZON_COGNITO_USER_POOLS',
                query: createExcercise,
                variables: {
                    input: {
                        workoutExcercisesId: workoutData.data.createWorkout.id,
                        title: 'Excercise title',
                        description: 'A Description for the excercise',
                        time: 120,
                    },
                },
            })

            await API.graphql({
                authMode: 'AMAZON_COGNITO_USER_POOLS',
                query: createSet,
                variables: {
                    input: {
                        excerciseSetsId: excData.data.createExcercise.id,
                        easy_description: 'TEST-easy',
                        hard_description: 'TEST-hard',
                        brutal_description: 'TEST-brutal',
                        easy_multiplier: 1,
                        hard_multiplier: 2,
                        brutal_multiplier: 3,
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

            <Authenticator>
                <form onSubmit={handleCreatePost}>
                    <fieldset>
                        <legend>Title</legend>
                        <input
                            defaultValue={`Today, ${new Date().toLocaleTimeString()}`}
                            name='title'
                        />
                    </fieldset>

                    <fieldset>
                        <legend>Video</legend>
                        <textarea
                            defaultValue='I built an Amplify app with Next.js!'
                            name='video'
                        />
                    </fieldset>
                    <fieldset>
                        <legend>Rules</legend>
                        <textarea
                            defaultValue='I built an Amplify app with Next.js!'
                            name='rules'
                        />
                    </fieldset>
                    <button>Create Workout</button>
                    <button type='button' onClick={() => Auth.signOut()}>
                        Sign out
                    </button>
                </form>
            </Authenticator>
        </React.Fragment>
    )
}
export default Admin
