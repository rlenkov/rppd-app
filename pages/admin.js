import React from 'react'
import { Authenticator } from '@aws-amplify/ui-react'
import { Auth } from 'aws-amplify'
import CreateExcercise from '../components/createExercise'
import CreateWorkout from '../components/createWorkout'

const Admin = () => {
    return (
        <React.Fragment>
            <Authenticator>
                <CreateWorkout />
                <CreateExcercise />
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
