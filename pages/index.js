import { withSSRContext } from 'aws-amplify'
import { listWorkouts } from '../src/graphql/queries'
import styles from '../styles/Home.module.css'

export async function getServerSideProps({ req }) {
    // When on the server, use withSSRContext({ req?: ServerRequest }):
    const SSR = withSSRContext({ req })
    const response = await SSR.API.graphql({ query: listWorkouts })

    return {
        props: {
            workouts: response.data.listWorkouts.items,
        },
    }
}

export default function Home({ workouts = [] }) {
    //   console.log(posts);
    return (
        <div className={styles.container}>
                <p className={styles.description}>
                    <code className={styles.code}>{workouts.length}</code>
                    workouts
                </p>

                <div className={styles.grid}>
                    {workouts.map(workout => {
                        // console.log(workout)
                        return (
                            <a
                                className={styles.card}
                                href={`/workout/${workout.id}`}
                                key={workout.id}
                            >
                                <h3>{workout.title}</h3>
                                <p>{workout.video}</p>
                                <p>{workout.rules}</p>
                                {workout.excercises.items
                                    ? workout.excercises.items.map(
                                          (excercise, key) => {
                                              return (
                                                  <div key={`id-${key}`}>
                                                      <p>{excercise.title}</p>
                                                      <p>
                                                          {
                                                              excercise.description
                                                          }
                                                      </p>
                                                      <p>{excercise.time}</p>
                                                  </div>
                                              )
                                          },
                                      )
                                    : null}
                            </a>
                        )
                    })}
                </div>
        </div>
    )
}
