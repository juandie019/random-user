export const SET_DATA = (state, data) => {
    state.users = data
}

export const ADD_TO_FAVOURITES = (state, data) => {
    state.favouritesUsers.push(data);
}

export const REMOVE_FROM_FAVOURITES = (state, username) => {
    const indexOfUser = state.favouritesUsers.findIndex(user => {
        return user.login.username == username
    })

    state.favouritesUsers.splice(indexOfUser, 1);
}


