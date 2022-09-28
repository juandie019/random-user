export const users = (state) => {
    return state.users
}

export const favouritesUsers = (state) => {
    return state.favouritesUsers
}

export const existsUsers = (state) => {
    return state.users.length > 0
}

export const hasFavouritesUsers = (state) => {
    return state.favouritesUsers.length > 0
}

export const favouritesCount = (state) => {
    return state.favouritesUsers.length;
}

export const isLoading = (state) => {
    return state.loading;
}