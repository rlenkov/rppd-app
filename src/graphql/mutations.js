/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createExcercise = /* GraphQL */ `
  mutation CreateExcercise(
    $input: CreateExcerciseInput!
    $condition: ModelExcerciseConditionInput
  ) {
    createExcercise(input: $input, condition: $condition) {
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
export const updateExcercise = /* GraphQL */ `
  mutation UpdateExcercise(
    $input: UpdateExcerciseInput!
    $condition: ModelExcerciseConditionInput
  ) {
    updateExcercise(input: $input, condition: $condition) {
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
export const deleteExcercise = /* GraphQL */ `
  mutation DeleteExcercise(
    $input: DeleteExcerciseInput!
    $condition: ModelExcerciseConditionInput
  ) {
    deleteExcercise(input: $input, condition: $condition) {
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
      excerciseSetsId
      owner
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
      excerciseSetsId
      owner
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
      excerciseSetsId
      owner
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
