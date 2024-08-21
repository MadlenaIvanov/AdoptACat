import { useState, useEffect } from 'react';
import * as petService from "../../services/petService";
import PetList from '../PetList';
import { useAuthContext } from '../../contexts/AuthContext';

const MyPets = () => {
    const [pets, setPets] = useState([]);
    const { user } = useAuthContext();

    useEffect(() => {
        petService.getMyPets(user._id)
            .then(petResult => {
                setPets(petResult);
            })
    }, []) ;

    return(
        <section id="my-pets-page" className="my-pets">
        <h1>My Pets</h1>

        <section>
            <PetList pets={pets}/>
        </section>

    </section>
    )
}

export default MyPets;