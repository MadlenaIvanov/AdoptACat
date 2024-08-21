import * as request from './requester'

const baseUrl = 'https://softuni-customserver-be532ba4effe.herokuapp.com/data';

export const like = (userId, petID) => request.post(`${baseUrl}/likes`, {userId, petID})

export const getPetLikes = (petID) => {
    const query = encodeURIComponent(`petID="${petID}"`)
    
    return request.get(`${baseUrl}/likes?select=userId&where=${query}`)
        .then(res => res.map(x => x.userId))
}
