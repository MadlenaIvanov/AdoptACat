import { useState, useEffect, useMemo } from "react";
import * as petService from '../services/petService'

const usePetState = (petID) => {
    const [pet, setPet] = useState({});

    // const controller = useMemo(() => {
    //     const controller = new AbortController();

    //     return controller;
    // }, [])

    useEffect(() => {
            petService.getOne(petID)
                .then(petResult => {
                    setPet(petResult)
                });

    }, [petID]);

    return [
        pet,
        setPet
    ]
}

export default usePetState;