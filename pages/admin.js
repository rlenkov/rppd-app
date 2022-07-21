import React from 'react'
import { Authenticator } from '@aws-amplify/ui-react'
import { Auth, withSSRContext } from 'aws-amplify'
import { listExcercises, listWorkouts } from '../src/graphql/queries'
import CreateExcercise from '../components/createExercise'
import CreateWorkout from '../components/createWorkout'
import Workouts from '../components/workouts'
import Excercises from '../components/excercises'

export async function getServerSideProps({ req }) {
    // When on the server, use withSSRContext({ req?: ServerRequest }):
    const SSR = withSSRContext({ req })
    const excerciseResponse = await SSR.API.graphql({ query: listExcercises })
    const workResponse = await SSR.API.graphql({ query: listWorkouts })

    return {
        props: {
            exs: excerciseResponse.data.listExcercises.items,
            works: workResponse.data.listWorkouts.items,
        },
    }
}

const Admin = ({ exs = [], works = [] }) => {
    return (
        <React.Fragment>
            <Authenticator>
                <CreateWorkout exs={exs} />
                <CreateExcercise />
                <Workouts workouts={works} />
                <Excercises exercises={exs} />
                <div
                    style={{ marginTop: '50px', borderTop: '1px solid black' }}
                >
                    <button type='button' onClick={() => Auth.signOut()}>
                        Sign out
                    </button>
                </div>
            </Authenticator>
        </React.Fragment>
    )
}
export default Admin
