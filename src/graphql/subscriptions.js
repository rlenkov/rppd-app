/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateExercise = /* GraphQL */ `
  subscription OnCreateExercise($filter: ModelSubscriptionExerciseFilterInput) {
    onCreateExercise(filter: $filter) {
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
export const onUpdateExercise = /* GraphQL */ `
  subscription OnUpdateExercise($filter: ModelSubscriptionExerciseFilterInput) {
    onUpdateExercise(filter: $filter) {
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
export const onDeleteExercise = /* GraphQL */ `
  subscription OnDeleteExercise($filter: ModelSubscriptionExerciseFilterInput) {
    onDeleteExercise(filter: $filter) {
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
export const onCreateSet = /* GraphQL */ `
  subscription OnCreateSet($filter: ModelSubscriptionSetFilterInput) {
    onCreateSet(filter: $filter) {
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
export const onUpdateSet = /* GraphQL */ `
  subscription OnUpdateSet($filter: ModelSubscriptionSetFilterInput) {
    onUpdateSet(filter: $filter) {
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
export const onDeleteSet = /* GraphQL */ `
  subscription OnDeleteSet($filter: ModelSubscriptionSetFilterInput) {
    onDeleteSet(filter: $filter) {
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
export const onCreateWorkout = /* GraphQL */ `
  subscription OnCreateWorkout($filter: ModelSubscriptionWorkoutFilterInput) {
    onCreateWorkout(filter: $filter) {
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
export const onUpdateWorkout = /* GraphQL */ `
  subscription OnUpdateWorkout($filter: ModelSubscriptionWorkoutFilterInput) {
    onUpdateWorkout(filter: $filter) {
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
export const onDeleteWorkout = /* GraphQL */ `
  subscription OnDeleteWorkout($filter: ModelSubscriptionWorkoutFilterInput) {
    onDeleteWorkout(filter: $filter) {
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
