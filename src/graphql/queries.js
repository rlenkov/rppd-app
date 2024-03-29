/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getExercise = /* GraphQL */ `
  query GetExercise($id: ID!) {
    getExercise(id: $id) {
      id
      title
      description
      ref_weight
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
          __typename
        }
        nextToken
        __typename
      }
      createdAt
      updatedAt
      workoutExercisesId
      __typename
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
        ref_weight
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
            __typename
          }
          nextToken
          __typename
        }
        createdAt
        updatedAt
        workoutExercisesId
        __typename
      }
      nextToken
      __typename
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
      __typename
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
        __typename
      }
      nextToken
      __typename
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
      ref_weights
      exercises {
        items {
          id
          title
          description
          ref_weight
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
              __typename
            }
            nextToken
            __typename
          }
          createdAt
          updatedAt
          workoutExercisesId
          __typename
        }
        nextToken
        __typename
      }
      createdAt
      updatedAt
      __typename
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
        ref_weights
        exercises {
          items {
            id
            title
            description
            ref_weight
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
                __typename
              }
              nextToken
              __typename
            }
            createdAt
            updatedAt
            workoutExercisesId
            __typename
          }
          nextToken
          __typename
        }
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;
