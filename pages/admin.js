import React, { useEffect, useState } from 'react'
import { Authenticator } from '@aws-amplify/ui-react'
import { Auth, withSSRContext, API } from 'aws-amplify'
import { useRouter } from 'next/router'
import { listExercises, listWorkouts } from '../src/graphql/queries'
import CreateWorkout from '../components/createWorkout'
import Workouts from '../components/workouts'
import { CacheContext } from '../src/extensions/context'

export async function getServerSideProps({ req }) {
    // When on the server, use withSSRContext({ req?: ServerRequest }):
    const SSR = withSSRContext({ req })
    const exerciseResponse = await SSR.API.graphql({ query: listExercises })
    const workResponse = await SSR.API.graphql({ query: listWorkouts })

    return {
        props: {
            exs: exerciseResponse.data.listExercises.items,
            works: workResponse.data.listWorkouts.items,
        },
    }
}

const Admin = ({ exs = [], works = [] }) => {
    const router = useRouter()
    const [contentBuffer, setContentBuffer] = useState({
        exercises: [],
        workouts: [],
    })
    const [modal, setModal] = useState(null)

    const modalExitListener = event => {
        if (event.key === 'Escape') {
            setModal(null)
        }
    }

    useEffect(() => {
        setContentBuffer({
            exercises: exs,
            workouts: works,
        })
        window.addEventListener('keydown', modalExitListener)
        return () => {
            window.removeEventListener('keydown', modalExitListener)
        }
    }, [])
    const refresh = () => {
        getCache()
    }
    const getCache = async () => {
        const exerciseResponse = await API.graphql({ query: listExercises })
        const workResponse = await API.graphql({ query: listWorkouts })
        setContentBuffer({
            exercises: exerciseResponse.data.listExercises.items,
            workouts: workResponse.data.listWorkouts.items,
        })
    }
    return (
        <React.Fragment>
            <Authenticator>
                <CacheContext.Provider
                    value={{ cache: contentBuffer, refresh }}
                >
                    <h1>Admin Menu</h1>
                    <CreateWorkout modal={modal} setModal={setModal} />
                    <Workouts />
                    <div
                        style={{
                            marginTop: '50px',
                            borderTop: '1px solid black',
                        }}
                    >
                        <button
                            type='button'
                            onClick={() => {
                                Auth.signOut()
                                router.reload()
                            }}
                        >
                            Sign out
                        </button>
                    </div>
                    {modal}
                </CacheContext.Provider>
            </Authenticator>
        </React.Fragment>
    )
}
export default Admin
