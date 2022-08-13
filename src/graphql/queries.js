/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getExercise = /* GraphQL */ `
  query GetExercise($id: ID!) {
    getExercise(id: $id) {
      id
      title
      description
      time
      sets {
        items {
          id
          easy_description
          hard_description
          brutal_description
          easy_multiplier
          hard_multiplier
          brutal_multiplier
          createdAt
          updatedAt
          exerciseSetsId
        }
        nextToken
      }
      createdAt
      updatedAt
      workoutExercisesId
    }
  }
`;
export const listExercises = /* GraphQL */ `
  query ListExercises(
    $filter: ModelExerciseFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listExercises(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        title
        description
        time
        sets {
          items {
            id
            easy_description
            hard_description
            brutal_description
            easy_multiplier
            hard_multiplier
            brutal_multiplier
            createdAt
            updatedAt
            exerciseSetsId
          }
          nextToken
        }
        createdAt
        updatedAt
        workoutExercisesId
      }
      nextToken
    }
  }
`;
export const getSet = /* GraphQL */ `
  query GetSet($id: ID!) {
    getSet(id: $id) {
      id
      easy_description
      hard_description
      brutal_description
      easy_multiplier
      hard_multiplier
      brutal_multiplier
      createdAt
      updatedAt
      exerciseSetsId
    }
  }
`;
export const listSets = /* GraphQL */ `
  query ListSets(
    $filter: ModelSetFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listSets(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        easy_description
        hard_description
        brutal_description
        easy_multiplier
        hard_multiplier
        brutal_multiplier
        createdAt
        updatedAt
        exerciseSetsId
      }
      nextToken
    }
  }
`;
export const getWorkout = /* GraphQL */ `
  query GetWorkout($id: ID!) {
    getWorkout(id: $id) {
      id
      title
      video
      rules
      exercises {
        items {
          id
          title
          description
          time
          sets {
            items {
              id
              easy_description
              hard_description
              brutal_description
              easy_multiplier
              hard_multiplier
              brutal_multiplier
              createdAt
              updatedAt
              exerciseSetsId
            }
            nextToken
          }
          createdAt
          updatedAt
          workoutExercisesId
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const listWorkouts = /* GraphQL */ `
  query ListWorkouts(
    $filter: ModelWorkoutFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listWorkouts(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        title
        video
        rules
        exercises {
          items {
            id
            title
            description
            time
            sets {
              items {
                id
                easy_description
                hard_description
                brutal_description
                easy_multiplier
                hard_multiplier
                brutal_multiplier
                createdAt
                updatedAt
                exerciseSetsId
              }
              nextToken
            }
            createdAt
            updatedAt
            workoutExercisesId
          }
          nextToken
        }
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
