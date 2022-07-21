import React from 'react'
import { useRouter } from 'next/router'

const Intro = () => {
    const router = useRouter()
    const workoutId = router.query.wo
    // Put session into local storage if session started
    return (
        <React.Fragment>
            <p>{workoutId}</p>
            <p>Rules</p>
        </React.Fragment>
    )
}

export default Intro
