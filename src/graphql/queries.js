/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getExcercise = /* GraphQL */ `
  query GetExcercise($id: ID!) {
    getExcercise(id: $id) {
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
          excerciseSetsId
          owner
        }
        nextToken
      }
      createdAt
      updatedAt
      workoutExcercisesId
      owner
    }
  }
`;
export const listExcercises = /* GraphQL */ `
  query ListExcercises(
    $filter: ModelExcerciseFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listExcercises(filter: $filter, limit: $limit, nextToken: $nextToken) {
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
            excerciseSetsId
            owner
          }
          nextToken
        }
        createdAt
        updatedAt
        workoutExcercisesId
        owner
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
      excerciseSetsId
      owner
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
        excerciseSetsId
        owner
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
      excercises {
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
              excerciseSetsId
              owner
            }
            nextToken
          }
          createdAt
          updatedAt
          workoutExcercisesId
          owner
        }
        nextToken
      }
      createdAt
      updatedAt
      owner
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
        excercises {
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
                excerciseSetsId
                owner
              }
              nextToken
            }
            createdAt
            updatedAt
            workoutExcercisesId
            owner
          }
          nextToken
        }
        createdAt
        updatedAt
        owner
      }
      nextToken
    }
  }
`;
