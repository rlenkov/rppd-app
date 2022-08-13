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
export const updateExercise = /* GraphQL */ `
  mutation UpdateExercise(
    $input: UpdateExerciseInput!
    $condition: ModelExerciseConditionInput
  ) {
    updateExercise(input: $input, condition: $condition) {
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
export const deleteExercise = /* GraphQL */ `
  mutation DeleteExercise(
    $input: DeleteExerciseInput!
    $condition: ModelExerciseConditionInput
  ) {
    deleteExercise(input: $input, condition: $condition) {
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
