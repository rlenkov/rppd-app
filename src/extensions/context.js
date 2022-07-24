import React from 'react'

export const CacheContext = React.createContext({
    cache: {
        exercises: [],
        workouts: [],
    },
    refresh: () => {},
})
