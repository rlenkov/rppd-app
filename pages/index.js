import { Authenticator } from "@aws-amplify/ui-react";
import { Amplify, API, Auth, withSSRContext } from "aws-amplify";
import Head from "next/head";
import awsExports from "../src/aws-exports";
import {
  createWorkout,
  createSet,
  createExcercise,
} from "../src/graphql/mutations";
import { listWorkouts } from "../src/graphql/queries";
import styles from "../styles/Home.module.css";

Amplify.configure({ ...awsExports, ssr: true });

export async function getServerSideProps({ req }) {
  const SSR = withSSRContext({ req });
  const response = await SSR.API.graphql({ query: listWorkouts });

  return {
    props: {
      workouts: response.data.listWorkouts.items,
    },
  };
}

async function handleCreatePost(event) {
  event.preventDefault();

  const form = new FormData(event.target);

  try {
    const workoutData = await API.graphql({
      authMode: "AMAZON_COGNITO_USER_POOLS",
      query: createWorkout,
      variables: {
        input: {
          title: form.get("title"),
          video: form.get("video"),
          rules: [form.get("rules")],
        },
      },
    });
    const excData = await API.graphql({
      authMode: "AMAZON_COGNITO_USER_POOLS",
      query: createExcercise,
      variables: {
        input: {
          workoutExcercisesId: workoutData.data.createWorkout.id,
          title: "Excercise title",
          description: "A Description for the excercise",
          time: 120,
        },
      },
    });
    console.log("Excercise Created");

    await API.graphql({
      authMode: "AMAZON_COGNITO_USER_POOLS",
      query: createSet,
      variables: {
        input: {
          excerciseSetsId: excData.data.createExcercise.id,
          easy_description: "TEST-easy",
          hard_description: "TEST-hard",
          brutal_description: "TEST-brutal",
          easy_multiplier: 1,
          hard_multiplier: 2,
          brutal_multiplier: 3,
        },
      },
    });
    console.log("Set Created");
  } catch ({ errors }) {
    console.error(...errors);
    throw new Error(errors[0].message);
  }
}

export default function Home({ workouts = [] }) {
  //   console.log(posts);
  return (
    <div className={styles.container}>
      <Head>
        <title>Amplify + Next.js</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>Amplify + Next.js</h1>

        <p className={styles.description}>
          <code className={styles.code}>{workouts.length}</code>
          workouts
        </p>

        <div className={styles.grid}>
          {workouts.map((workout) => {
            console.log(workout)
            return (
              <a
                className={styles.card}
                href={`/posts/${workout.id}`}
                key={workout.id}
              >
                <h3>{workout.title}</h3>
                <p>{workout.video}</p>
                <p>{workout.rules}</p>
                {workout.excercises.items
                  ? workout.excercises.items.map((excercise, key) => {
                      return (
                        <div key={`id-${key}`}>
                          <p>{excercise.title}</p>
                          <p>{excercise.description}</p>
                          <p>{excercise.time}</p>
                        </div>
                      );
                    })
                  : null}
              </a>
            );
          })}

          <div className={styles.card}>
            <h3 className={styles.title}>New Workout</h3>

            <Authenticator>
              <form onSubmit={handleCreatePost}>
                <fieldset>
                  <legend>Title</legend>
                  <input
                    defaultValue={`Today, ${new Date().toLocaleTimeString()}`}
                    name="title"
                  />
                </fieldset>

                <fieldset>
                  <legend>Video</legend>
                  <textarea
                    defaultValue="I built an Amplify app with Next.js!"
                    name="video"
                  />
                </fieldset>
                <fieldset>
                  <legend>Rules</legend>
                  <textarea
                    defaultValue="I built an Amplify app with Next.js!"
                    name="rules"
                  />
                </fieldset>
                <button>Create Workout</button>
                <button type="button" onClick={() => Auth.signOut()}>
                  Sign out
                </button>
              </form>
            </Authenticator>
          </div>
        </div>
      </main>
    </div>
  );
}
