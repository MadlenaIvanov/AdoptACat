import * as request from "./requester";

// const baseUrl = 'https://softuni-customserver-be532ba4effe.herokuapp.com/jsonstore';
const baseUrl = 'https://softuni-customserver-be532ba4effe.herokuapp.com/data';

export const getAll = () => request.get(`${baseUrl}/pets`);

export const getMyPets = (ownerId) => {
    let query = encodeURIComponent(`_ownerId="${ownerId}"`)
    
    return request.get(`${baseUrl}/pets?where=${query}`);
}

export const create = async (petData, token) => {
    let response = await fetch(`${baseUrl}/pets`, {
        method: 'POST',
        headers: {
            'content-type': 'application/json',
            'X-Authorization': token            
        },
        body: JSON.stringify({...petData, likes: []})
    });

    let result = await response.json();
    return result;
}

export const update = (petID, petData) => request.put(`${baseUrl}/pets/${petID}`, petData);

export const getOne = (petID) => {
    return fetch(`${baseUrl}/pets/${petID}`)
        .then(res => res.json())
}

export const destroy = (petID, token) => {
    return fetch(`${baseUrl}/pets/${petID}`, {
        method: 'DELETE',
        headers: {
            'X-Authorization': token
        }
    }).then(res => res.json())
}

export const like = (petID, pet, token) => {
    return fetch(`${baseUrl}/pets/${petID}`, {
        method: 'PUT',
        headers: {
            'content-type': 'application/json',
            'X-Authorization': token

        },
        body: JSON.stringify(pet)
    }).then(res => res.json())
}