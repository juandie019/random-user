import api from '../../api'

export const fetchUsers = async (context) => {

    context.commit('SET_LOADING', true);
    const response = await api.get('/?results=100&seed=foobar')
    const users = response.data.results;
    
    context.commit('SET_DATA', users);
    context.commit('SET_LOADING', false);
    return;    
}

export const findUser = (context, userName) => {
    const user = context.state.users.find(user => {
        return user.login.username == userName
    })

    if(user){
        return user    
    } else {
        throw { code: 404, message: 'Not found'}
    }
}

export const updateFavourites = (context, data) => {
    if(data.add){
        context.commit('ADD_TO_FAVOURITES', data.data);
    } else {
        context.commit('REMOVE_FROM_FAVOURITES', data.data.login.username);
    }
}
