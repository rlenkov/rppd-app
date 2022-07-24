import React from 'react'
import { Amplify, withSSRContext } from 'aws-amplify'
import { useRouter } from 'next/router'
import awsExports from '../../src/aws-exports'
import { getWorkout, listWorkouts } from '../../src/graphql/queries'
import { utf8ToBase64, base64ToUtf8} from '../../src/extensions/hash'

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
            <div>
                <h1>Loading&hellip;</h1>
            </div>
        )
    }

    return (
        <React.Fragment>
            <h1>{workout.title}</h1>
            <p>{workout.video}</p>
        </React.Fragment>
    )
}
