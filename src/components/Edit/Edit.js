import { useState, useEffect } from 'react';
import * as petService from '../../services/petService'
import usePetState from '../../hooks/usePetState';
import { Link, redirect, useParams } from 'react-router-dom';
import { Alert } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { useNotificationContext, types } from '../../contexts/NotificationContext';

const typesCats = [
    {value: 'domesticated', text: 'Domesticated'},
    {value: 'stray', text: 'Stray'},
    {value: 'feral', text: 'Feral'},
    {value: 'other', text: 'Other'},
]

const Edit = () => {
    const navigate = useNavigate();

    const { petID } = useParams();
    const [errors, setErrors] = useState({name: false, age: false, location: false, description: false})
    const [pet, setPet] = usePetState(petID)
    const { addNotification } = useNotificationContext()


    const nameChangeHandler = (e) => {
        let currentName = e.target.value;

        if(currentName !== undefined && currentName.length < 3) {
            setErrors(state => ({...state, name: "The name should be at least 3 characters."}))            
        } else {
            setErrors(state => ({...state, name: false}))       
            
        }
    }
    const locationChangeHandler = (e) => {
        let currentLocation = e.target.value;

        if(currentLocation.length < 3 || currentLocation.length > 10) {
            setErrors(state => ({...state, location: "The location should be at between 3 and 10 characters."}))
        } else {
            setErrors(state => ({...state, location: false}))
        }
    }
    const descriptionChangeHandler = (e, setAlert) => {
        let currentDescription = e.target.value;

        if(currentDescription.length < 10) {
            setErrors(state => ({...state, description: "The description should be at least 10 characters."}))
        } else {
            setErrors(state => ({...state, description: false}))
        }
    }
    const ageChangeHandler = (e) => {
        let currentAge = e.target.value;

        if(!/^[0-9]+$/.test(currentAge) || currentAge === '') {
            setErrors(state => ({...state, age: "The age is required and should be a number above 0."}))
        } else {
            setErrors(state => ({...state, age: false}))
        }
    }


    const petEditSubmitHandler = (e) => {
        e.preventDefault();

        let petData = Object.fromEntries(new FormData(e.currentTarget))
       
        if(errors.name == false && errors.age == false && errors.location == false && errors.description == false) {
            petService.update(pet._id, petData)
            .then(() => {
            navigate(`/details/${pet._id}`)
            }); 
            addNotification('Successfully edited a cat', types.success) 
        } else {
            addNotification('Unsuccessful edit. Please review the information', types.info) 
        }           
    }

    

    return(
        <section id="edit-page" className="edit">
            <form id="edit-form" method="POST" onSubmit={petEditSubmitHandler}>
                <fieldset>
                    <legend>Edit my Pet</legend>
                    <p className="field">
                        <label htmlFor="name">Name</label>
                        <span className="input" style={{borderColor: errors.name ? 'red' : 'inherit'}}>
                            <input type="text" name="name" id="name" defaultValue={pet.name} onChange={nameChangeHandler} />
                        </span>
                        <Alert variant='danger' show={errors.name}>{errors.name}</Alert>
                    </p>

                    <p className="field">
                    <label htmlFor="age">Age</label>
                    <span className="input" style={{borderColor: errors.age ? 'red' : 'inherit'}}>
                        <input type="text" name="age" id="age" defaultValue={pet.age} onChange={ageChangeHandler}/>
                    </span>
                    <Alert variant='danger' show={errors.age}>{errors.age}</Alert>
                </p>

                <p className="field">
                    <label htmlFor="location">Location</label>
                    <span className="input" style={{borderColor: errors.location ? 'red' : 'inherit'}}>
                        <input type="text" name="location" id="location" defaultValue={pet.location} onChange={locationChangeHandler}/>
                    </span>
                    <Alert variant='danger' show={errors.location}>{errors.location}</Alert>
                </p>


                    <p className="field">
                        <label htmlFor="description">Description</label>
                        <span className="input" style={{borderColor: errors.description ? 'red' : 'inherit'}}>
                            <textarea name="description" id="description" defaultValue={pet.description} onChange={descriptionChangeHandler}/>
                        </span>
                        <Alert variant='danger' show={errors.description}>{errors.description}</Alert>
                    </p>
                    <p className="field">
                        <label htmlFor="image">Image</label>
                        <span className="input">
                            <input type="text" name="imageUrl" id="image" defaultValue={pet.imageUrl} />
                        </span>
                    </p>
                    <p className="field">
                        <label htmlFor="type">Type of Cat</label>
                        <span className="input">
                            <select id="type" name="type" value={pet.type} onChange={(e) => setPet(s =>({...s, type: e.target.value}))}>
                                {typesCats.map(x => <option key={x.value} value={x.value}>{x.text}</option>)}
                            </select>
                        </span>
                    </p>
                    <input className="button submit" type="submit" value="Save"/>
                    
                </fieldset>
            </form>
        </section>
    )
}

export default Edit;