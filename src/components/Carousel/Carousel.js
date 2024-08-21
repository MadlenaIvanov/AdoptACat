import { useState, useEffect } from "react"
import Carousel from 'react-bootstrap/Carousel';

const CarouselDash = (
) => {

    const [imageUrls, setImageUrls] = useState([]);

    useEffect(() => {
      fetch('https://api.thecatapi.com/v1/images/search?limit=10')
        .then(response => response.json())
        .then(data => {
          const urls = data.map(cat => cat.url);
          setImageUrls(urls);
        })
        .catch(error => console.error('Error fetching the cat images:', error));
    }, []);


    return (
        <Carousel>
            {imageUrls.map((url, index) => (
            <Carousel.Item>
                <img key={index} className="carousel" src={url} alt="cats"/>
                <Carousel.Caption>
                    <h3>Welcome to all cat lovers</h3>
                    <p>
                      Find your forever pet today.
                    </p>
                </Carousel.Caption>
            </Carousel.Item>
        ))}
        </Carousel>
    )
}

export default CarouselDash;