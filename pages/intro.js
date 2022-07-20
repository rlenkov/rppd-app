import React from 'react'
import { useRouter } from 'next/router'

const Intro = () => {
    const router = useRouter()
    console.log(router.query)
    const workoutId = router.query.wo
    return (
        <React.Fragment>
            <p>{workoutId}</p>
            <p>Rules</p>
        </React.Fragment>
    )
}

export default Intro
