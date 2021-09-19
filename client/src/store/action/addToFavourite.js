export const addToFavourite = (characterDetail) => {
  return {
    type: "ADD_FAVOURITE",
    payload: {
      characterDetail
    }
  }
}