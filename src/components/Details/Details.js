import { useState, useEffect, useContext } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
import * as petService from '../../services/petService'
import * as likeService from '../../services/likeService'

// import { AuthContext } from "../../contexts/AuthContext";
import { useAuthContext } from "../../contexts/AuthContext";
import { useNotificationContext, types } from "../../contexts/NotificationContext";

import ConfirmDialogue from "../Common/ConfirmDialogue";

import { Button } from "react-bootstrap";
import usePetState from "../../hooks/usePetState";

const Details = () => {
    const navigate = useNavigate();
    const { user } = useAuthContext()
    const { addNotification } = useNotificationContext();
    const { petID } = useParams();
    const [pet, setPet] = usePetState(petID);
    const [showDeleteDialogue, setShowDeleteDialogue] = useState(false);

    useEffect(() => {
        likeService.getPetLikes(petID)
        .then(likes => {
            setPet(state => ({...state, likes}))
        })
        .catch(err => {
        console.log('err')
        console.log(err)
    })
    }, [petID, setPet])

    // useEffect(async () => {
    //     let petResult = await petService.getOne(petID);
    //     setPet(petResult);
    // }, []);


    // useEffect(() => {
    //     petService.getAll()
    //         .then(result => {

    //             setPets(result);
    //         })
    //         .catch(err => {
    //             console.log('err')
    //             console.log(err)
    //         })
    // }, []) ;
    // useEffect(() => {
    //         petService.getOne(petID)
    //             .then(petResult => {
    //                 setPet(petResult)
    //             });
    // }, [petID]);

    const deleteHandler = (e) => {
        e.preventDefault();        

        petService.destroy(petID, user.accessToken)
            .then(() => {

                navigate('/dashboard')
                addNotification('Successfully deleted a cat', types.success) 
        })
        .finally(() => {
            setShowDeleteDialogue(false)
        })
    }

    const deleteClickHandler = (e) => {
        e.preventDefault();
 
        setShowDeleteDialogue(true)
        // const errorMessage = {error: 'Some random error'}
        // throw errorMessage
    }


    const ownerButtons = (
        <>
            <Link className="button" to={`/edit/${pet._id}`} >Edit</Link>
            <a className="button" onClick={deleteClickHandler}>Delete</a>
        </>
    ) 

    const likeButtonClick = () => {

        if(user._id === pet._ownerId) {
            return;
        }

        if(pet.likes.includes(user._id)) {
            addNotification('You have already liked this cat', types.error)
            return;
        }
        
        likeService.like(user._id, petID)
            .then((res) => {
                setPet(state => ({...state, likes: [...state.likes, user._id]}))
                 addNotification('Successfully liked a cat :)', types.success)
        })
    }

    const userButtons = <Button disabled={pet.likes?.includes(user._id)} onClick={likeButtonClick}>Like</Button>;

    return(
        <>
        <ConfirmDialogue show={showDeleteDialogue} onClose={() => setShowDeleteDialogue(false)} onSave={deleteHandler}/>
        <section id="details-page" className="details">
        <div className="pet-information">
            <h3>Name: {pet.name}</h3>
            <p className="type">Type: {pet.type}</p>
            <p className="age">Age: {pet.age}</p>
            <p className="location">Location: {pet.location}</p>
            <img id="details-page-image" src={pet.imageUrl} />
            <div className="actions">
                {user._id && (user._id === pet._ownerId 
                    ? ownerButtons
                    : userButtons)}                

                <div className="likes">
                    <img className="hearts" src="/images/heart.png" />
                    
                    <span id="total-likes">Likes: {pet.likes?.length || 0}</span>
                </div>

            </div>
        </div>
        <div className="pet-description">
            <h3>Description:</h3>
            <p>{pet.description}</p>
        </div>
    </section>
    </>
    )
}

export default Details;