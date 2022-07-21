import React from 'react'
import { Amplify, withSSRContext } from 'aws-amplify'
import { useRouter } from 'next/router'
import awsExports from '../../src/aws-exports'
import { getWorkout, listWorkouts } from '../../src/graphql/queries'
import { utf8ToBase64, base64ToUtf8} from '../../src/extensions/hash'
import styles from '../../styles/Home.module.css'

Amplify.configure({ ...awsExports, ssr: true })

// https://codesandbox.io/s/react-countdown-demo-forked-6rdp58?file=/src/App.js

export async function getStaticPaths() {
    const SSR = withSSRContext()
    const { data } = await SSR.API.graphql({ query: listWorkouts })
    const paths = data.listWorkouts.items.map(workout => ({
        params: { wid: utf8ToBase64(workout.id) },
    }))

    return {
        fallback: true,
        paths,
    }
}

export async function getStaticProps({ params }) {
    const SSR = withSSRContext()
    const { data } = await SSR.API.graphql({
        query: getWorkout,
        variables: {
            id: base64ToUtf8(params.wid),
        },
    })

    return {
        props: {
            workout: data.getWorkout,
        },
    }
}

export default function Workout({ workout }) {
    const router = useRouter()

    if (router.isFallback) {
        return (
            <div className={styles.container}>
                <h1 className={styles.title}>Loading&hellip;</h1>
            </div>
        )
    }

    // async function handleDelete() {
    //     try {
    //         await API.graphql({
    //             authMode: 'AMAZON_COGNITO_USER_POOLS',
    //             query: deleteWorkout,
    //             variables: {
    //                 input: { id: workout.id },
    //             },
    //         })

    //         window.location.href = '/'
    //     } catch ({ errors }) {
    //         console.error(...errors)
    //         throw new Error(errors[0].message)
    //     }
    // }

    return (
        <React.Fragment>
            <h1>{workout.title}</h1>
            <p>{workout.video}</p>
        </React.Fragment>
    )
}
