import { useState, useEffect } from 'react';
import * as petService from "../../services/petService";
import PetList from '../PetList';
import PaginationComponent from '../Common/PagiantionComponent';

import Form from 'react-bootstrap/Form';
import { Container, FormControl, InputGroup } from 'react-bootstrap';


import SortingComponent from '../SortingComponent';
import 'bootstrap/dist/css/bootstrap.min.css';


// import usePagination from '../../hooks/usePagination';
// import Pagination from '../Pagination/Pagination';
import styles from './AllPets.css'

const MyPets = () => {

    // const { page, pageCount, prevPage, nextPage, switchToPage, updatePageCount } =
    // usePagination();

    const [pets, setPets] = useState([]);
    const [search, setSearch] = useState('');

    useEffect(() => {
        petService.getAll()
            .then(result => {

                setPets(result);
            })
            .catch(err => {
                console.log('err')
                console.log(err)
            })
    }, []) ;




    return(
        <section id="my-pets-page" className="my-pets">
        {/* <Container>
            <Form>
                <InputGroup className='my-3'>
                    <FormControl
                    onChange={(e) => setSearch(e.target.value)}
                    placeholder='Search by name or type'
                    />
                </InputGroup>
            </Form>
        </Container> */}

        <SortingComponent />

        {/* <h1>Browse through all of our cats</h1>

        <section>
            <PetList pets={pets.filter((item) => {
                return search.toLowerCase() === '' ? item : (item.name.toLowerCase().includes(search) || item.location.toLowerCase().includes(search) || item.age.toLowerCase().includes(search))
            })} /> */}

{/* <div className={styles["pagination"]}>
        {pageCount > 1 && (
          <Pagination
            page={page}
            pageCount={pageCount}
            prevPage={prevPage}
            nextPage={nextPage}
            switchToPage={switchToPage}
          />
        )}
      </div> */}


        {/* </section>        */}

        
    </section>
    )
}

export default MyPets;