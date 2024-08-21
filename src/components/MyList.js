import { useState, useEffect } from "react"
import Carousel from 'react-bootstrap/Carousel';
// import ExampleCarouselImage from 'components/ExampleCarouselImage';

const MyList = (
) => {
    const [dogs, setDogs] = useState([])

    useEffect(() => {
        fetch('https://dog.ceo/api/breeds/image/random/3')
            .then(res => res.json())
            .then(res => {
                setDogs(res.message)
            })
    }, [])

    return (
        <Carousel>
            {dogs.map(x => (
                <Carousel.Item>
                {/* <ExampleCarouselImage src={x} alt="dog" text="Third slide" /> */}
                <img className="d-block w-100" src={x} alt="dogs"/>
                    <Carousel.Caption>
                        <h3>Third slide label</h3>
                        <p>
                            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
                        </p>
                    </Carousel.Caption>
                </Carousel.Item>                
            ))}
        </Carousel>
    )
}


export default MyList;