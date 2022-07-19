/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateExcercise = /* GraphQL */ `
  subscription OnCreateExcercise($owner: String) {
    onCreateExcercise(owner: $owner) {
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
export const onUpdateExcercise = /* GraphQL */ `
  subscription OnUpdateExcercise($owner: String) {
    onUpdateExcercise(owner: $owner) {
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
export const onDeleteExcercise = /* GraphQL */ `
  subscription OnDeleteExcercise($owner: String) {
    onDeleteExcercise(owner: $owner) {
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
export const onCreateSet = /* GraphQL */ `
  subscription OnCreateSet($owner: String) {
    onCreateSet(owner: $owner) {
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
export const onUpdateSet = /* GraphQL */ `
  subscription OnUpdateSet($owner: String) {
    onUpdateSet(owner: $owner) {
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
export const onDeleteSet = /* GraphQL */ `
  subscription OnDeleteSet($owner: String) {
    onDeleteSet(owner: $owner) {
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
export const onCreateWorkout = /* GraphQL */ `
  subscription OnCreateWorkout($owner: String) {
    onCreateWorkout(owner: $owner) {
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
export const onUpdateWorkout = /* GraphQL */ `
  subscription OnUpdateWorkout($owner: String) {
    onUpdateWorkout(owner: $owner) {
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
export const onDeleteWorkout = /* GraphQL */ `
  subscription OnDeleteWorkout($owner: String) {
    onDeleteWorkout(owner: $owner) {
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
