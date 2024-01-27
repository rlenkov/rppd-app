/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createExercise = /* GraphQL */ `
  mutation CreateExercise(
    $input: CreateExerciseInput!
    $condition: ModelExerciseConditionInput
  ) {
    createExercise(input: $input, condition: $condition) {
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
export const updateExercise = /* GraphQL */ `
  mutation UpdateExercise(
    $input: UpdateExerciseInput!
    $condition: ModelExerciseConditionInput
  ) {
    updateExercise(input: $input, condition: $condition) {
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
export const deleteExercise = /* GraphQL */ `
  mutation DeleteExercise(
    $input: DeleteExerciseInput!
    $condition: ModelExerciseConditionInput
  ) {
    deleteExercise(input: $input, condition: $condition) {
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
export const createSet = /* GraphQL */ `
  mutation CreateSet(
    $input: CreateSetInput!
    $condition: ModelSetConditionInput
  ) {
    createSet(input: $input, condition: $condition) {
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
export const updateSet = /* GraphQL */ `
  mutation UpdateSet(
    $input: UpdateSetInput!
    $condition: ModelSetConditionInput
  ) {
    updateSet(input: $input, condition: $condition) {
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
export const deleteSet = /* GraphQL */ `
  mutation DeleteSet(
    $input: DeleteSetInput!
    $condition: ModelSetConditionInput
  ) {
    deleteSet(input: $input, condition: $condition) {
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
export const createWorkout = /* GraphQL */ `
  mutation CreateWorkout(
    $input: CreateWorkoutInput!
    $condition: ModelWorkoutConditionInput
  ) {
    createWorkout(input: $input, condition: $condition) {
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
export const updateWorkout = /* GraphQL */ `
  mutation UpdateWorkout(
    $input: UpdateWorkoutInput!
    $condition: ModelWorkoutConditionInput
  ) {
    updateWorkout(input: $input, condition: $condition) {
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
export const deleteWorkout = /* GraphQL */ `
  mutation DeleteWorkout(
    $input: DeleteWorkoutInput!
    $condition: ModelWorkoutConditionInput
  ) {
    deleteWorkout(input: $input, condition: $condition) {
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
