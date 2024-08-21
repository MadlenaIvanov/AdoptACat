import * as request from './requester'

const baseUrl = 'https://softuni-customserver-be532ba4effe.herokuapp.com/data';

export const like = (userId, petID) => request.post(`${baseUrl}/likes`, {userId, petID})

export const getPetLikes = (petID) => {
    const query = encodeURIComponent(`petID="${petID}"`)

    
    return request.get(`${baseUrl}/likes?select=userId&where=${query}`)
        .then(res => res.map(x => x.userId))

    // return request.get(`${baseUrl}/likes?select=_id&where=${query}`)
    //     .then(res => res.length)
}
export const getMyPets = (ownerId) => {
    let query = encodeURIComponent(`_ownerId="${ownerId}"`)
    
    return request.get(`${baseUrl}/pets?where=${query}`);
}

export const searchPets = (pets) => {
    let query = encodeURIComponent(`pets="${pets}"`)
    
    return request.get(`${baseUrl}/pets?where=${query}`);

}