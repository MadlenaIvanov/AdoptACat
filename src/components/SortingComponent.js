// import React, { useState, useEffect } from 'react';
// import { Container, ListGroup, Dropdown, DropdownButton } from 'react-bootstrap';
// import PetList from './PetList';
// import * as petService from '../services/petService'



// const SortingComponent = () => {
//   const [data, setData] = useState([]);
//   const [sortOrder, setSortOrder] = useState('desc'); // Default sort order
//   const [loading, setLoading] = useState(false);
//   const [sortedData, setSortedData] = useState([]);

//   const fetchSortedData = async (order) => {
//     setLoading(true);
//     try {
//       const response = await fetch(`https://softuni-customserver-be532ba4effe.herokuapp.com/data/pets?sortBy=_createdOn%20${order}`);
//       const result = await response.json();
//       setData(result);
//     } catch (error) {
//       console.error("Error fetching data:", error);
//     }
//     setLoading(false);
//   };

// // console.log(data)

//   useEffect(() => {
//     fetchSortedData(sortOrder);
//   }, [sortOrder]);

//   console.log(sortOrder)

//   const handleSort = (order, dataToSort = data) => {
//     setSortOrder(order);
//     const sorted = [...dataToSort].sort((a, b) => {
//       const dateA = new Date(a._createdOn);
//       const dateB = new Date(b._createdOn);
//       if (order === 'asc') {
//         return dateA - dateB;
//       } else {
//         return dateB - dateA;
//       }
//     });
//     setSortedData(sorted);
//   };

//   console.log(sortedData)


//   console.log(sortOrder)

//   const [pets, setPets] = useState([]);
//   const [search, setSearch] = useState('');

//   useEffect(() => {
//       petService.getAll()
//           .then(result => {

//               setPets(result);
//           })
//           .catch(err => {
//               console.log('err')
//               console.log(err)
//           })
//   }, []) ;


//   return (
//     <Container className="mt-5">

//       <DropdownButton id="dropdown-basic-button" title={`Sort Order: ${sortOrder.toUpperCase()}`} className="mb-3">
//         <Dropdown.Item onClick={() => handleSort('asc')}>Ascending</Dropdown.Item>
//         <Dropdown.Item onClick={() => handleSort('desc')}>Descending</Dropdown.Item>
//       </DropdownButton>

//       {loading ? (
//         <p>Loading...</p>
//       ) : (
//         <ListGroup>
//           {sortedData.map(item => (
//             <ListGroup.Item key={item._id}>
//               {item.name}
//               <PetList pets={pets} />

//               <PetList pets={pets.filter((item) => {
//                 return search.toLowerCase() === '' ? item : (item.name.toLowerCase().includes(search) || item.location.toLowerCase().includes(search) || item.age.toLowerCase().includes(search))
//             })} />

//             </ListGroup.Item>
//           ))}
//         </ListGroup>
//       )}




//       {/* {loading ? (
//         <p>Loading...</p>
//       ) : (
//         <ListGroup>
//                       <PetList pets={pets.filter((item) => {
//                 return search.toLowerCase() === '' ? item : (item.name.toLowerCase().includes(search) || item.location.toLowerCase().includes(search) || item.age.toLowerCase().includes(search))
//             })} />
//         </ListGroup>

//       )} */}
      
//     </Container>
//   );
// };

// export default SortingComponent;


import { Container, Dropdown, DropdownButton, FormControl, InputGroup } from 'react-bootstrap';
import Form from 'react-bootstrap/Form';
import PetList from './PetList';
import { useState, useEffect } from 'react';

const SortingComponent = () => {
  const [data, setData] = useState([]);
  const [sortedData, setSortedData] = useState([]);
  const [sortOrder, setSortOrder] = useState('desc');
  const [search, setSearch] = useState('');
  const [loading, setLoading] = useState(false);

  const fetchData = async () => {
    setLoading(true);
    try {
      const response = await fetch(`https://softuni-customserver-be532ba4effe.herokuapp.com/data/pets`);
      const result = await response.json();
      setData(result);
      handleSort(sortOrder, result);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
    setLoading(false);
  };

  useEffect(() => {
    fetchData();
  }, []);

  const handleSort = (order, dataToSort = data) => {
    setSortOrder(order);
    const sorted = [...dataToSort].sort((a, b) => {
      const dateA = new Date(a._createdOn);
      const dateB = new Date(b._createdOn);
      if (order === 'asc') {
        return dateA - dateB;
      } else {
        return dateB - dateA;
      }
    });
    setSortedData(sorted);
  };

  const handleSearch = (event) => {
    setSearch(event.target.value.toLowerCase());
  };

  const filteredData = sortedData.filter(item => {
    return search === '' ? true : (item.name.toLowerCase().includes(search) || item.location.toLowerCase().includes(search) || item.age.toLowerCase().includes(search) || item.type.toLowerCase().includes(search));
  });

  return (
    <Container className="mt-5">
      <h1>Browse through our pets</h1>


            <Form>
                <InputGroup className='my-3'>
                    <FormControl
                    value={search}
                    onChange={handleSearch}
                    placeholder='Search by name or type'
                    />
                </InputGroup>
            </Form>
            
<DropdownButton id="dropdown-basic-button" title={`Sort Order: ${sortOrder.toUpperCase()}`} className="mb-3">
        <Dropdown.Item onClick={() => handleSort('asc')}>Date created ascending</Dropdown.Item>
        <Dropdown.Item onClick={() => handleSort('desc')}>Descending</Dropdown.Item>
      </DropdownButton>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <PetList pets={filteredData} />
      )}


      {/* <input
        type="text"
        placeholder="Search..."
        value={search}
        onChange={handleSearch}
        className="mb-3"
      /> */}
      
    </Container>
  );
};

export default SortingComponent;