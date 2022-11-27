/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateExercise = /* GraphQL */ `
  subscription OnCreateExercise {
    onCreateExercise {
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
        }
        nextToken
      }
      createdAt
      updatedAt
      workoutExercisesId
    }
  }
`;
export const onUpdateExercise = /* GraphQL */ `
  subscription OnUpdateExercise {
    onUpdateExercise {
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
        }
        nextToken
      }
      createdAt
      updatedAt
      workoutExercisesId
    }
  }
`;
export const onDeleteExercise = /* GraphQL */ `
  subscription OnDeleteExercise {
    onDeleteExercise {
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
        }
        nextToken
      }
      createdAt
      updatedAt
      workoutExercisesId
    }
  }
`;
export const onCreateSet = /* GraphQL */ `
  subscription OnCreateSet {
    onCreateSet {
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
export const onUpdateSet = /* GraphQL */ `
  subscription OnUpdateSet {
    onUpdateSet {
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
export const onDeleteSet = /* GraphQL */ `
  subscription OnDeleteSet {
    onDeleteSet {
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
export const onCreateWorkout = /* GraphQL */ `
  subscription OnCreateWorkout {
    onCreateWorkout {
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
export const onUpdateWorkout = /* GraphQL */ `
  subscription OnUpdateWorkout {
    onUpdateWorkout {
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
export const onDeleteWorkout = /* GraphQL */ `
  subscription OnDeleteWorkout {
    onDeleteWorkout {
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
