import { useState } from "react"

const useLocalStorage = (key, initialValue) => {
    const [state, setState] = useState(() => {
        //check if exists
        try {
            let item = localStorage.getItem(key)

            return item 
                ? JSON.parse(item) 
                : initialValue
        } catch(err) {
            console.log(err)
            return initialValue
        }

    });

    const setItem = (value) => {
        // TODO: add support for functions

        try {
        //save to local storage 
        localStorage.setItem(key, JSON.stringify(value))
        //save to state 
        setState(value)
        } catch(err) {
            console.log(err)
        }
    }

    return [
        state,
        setItem
    ]
}

export default useLocalStorage