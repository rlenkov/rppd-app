import React from 'react'
import styles from './sets.module.scss'

export const Sets = props => {
    return (
        <React.Fragment>
            <div className={styles.setsContainer}>
                <p>Sets:</p>
                {props.sets.map(set => (
                    <div key={set.id} className={styles.setBox}>
                        <p>{`${set.easy_description}, refweight: ${set.easy_multiplier}%`}</p>
                        <p>{`${set.hard_description}, refweight: ${set.hard_multiplier}%`}</p>
                        <p>{`${set.brutal_description}, refweight: ${set.brutal_multiplier}%`}</p>
                    </div>
                ))}
            </div>
        </React.Fragment>
    )
}

export default Sets
