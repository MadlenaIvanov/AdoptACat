// import React, { useState, useEffect } from 'react';
// import { Container, ListGroup, Pagination as BootstrapPagination } from 'react-bootstrap';

// const PaginationComponent = () => {
//   const [data, setData] = useState([]);
//   const [currentPage, setCurrentPage] = useState(1);
//   const [totalPages, setTotalPages] = useState(1);
//   const [loading, setLoading] = useState(false);

//   const itemsPerPage = 3;

//   useEffect(() => {
//     const fetchData = async () => {
//       setLoading(true);
//       try {
//         const offset = (currentPage - 1) * itemsPerPage;
//         const response = await fetch(`https://softuni-customserver-be532ba4effe.herokuapp.com/data/pets?offset=${offset}&pageSize=${itemsPerPage}`);
//         const result = await response.json();
//         setData(result.data);

//         // Ensure the total count is a valid number
//         const totalItems = parseInt(result.total, 10);
//         if (!isNaN(totalItems) && totalItems > 0) {
//           setTotalPages(Math.ceil(totalItems / itemsPerPage));
//         } else {
//           setTotalPages(1);  // Default to 1 if totalItems is invalid
//         }
//       } catch (error) {
//         console.error("Error fetching data:", error);
//       }
//       setLoading(false);
//     };

//     fetchData();
//   }, [currentPage]);

//   const handlePageChange = (page) => {
//     setCurrentPage(page);
//   };

//   return (
//     <Container className="mt-5">
//       {loading ? (
//         <p>Loading...</p>
//       ) : (
//         <ListGroup>
//           {data?.map(item => (
//             <ListGroup.Item key={item.id}>
//               {item.title}
//             </ListGroup.Item>
//           ))}
//         </ListGroup>
//       )}
//       <BootstrapPagination className="mt-3">
//         <BootstrapPagination.Prev
//           disabled={currentPage === 1}
//           onClick={() => handlePageChange(currentPage - 1)}
//         />
//         {[...Array(totalPages).keys()].map((_, idx) => (
//           <BootstrapPagination.Item
//             key={idx + 1}
//             active={currentPage === idx + 1}
//             onClick={() => handlePageChange(idx + 1)}
//           >
//             {idx + 1}
//           </BootstrapPagination.Item>
//         ))}
//         <BootstrapPagination.Next
//           disabled={currentPage === totalPages}
//           onClick={() => handlePageChange(currentPage + 1)}
//         />
//       </BootstrapPagination>
//     </Container>
//   );
// };

// export default PaginationComponent;

// import React, { useState, useEffect } from 'react';
// import { Container, ListGroup, Pagination as BootstrapPagination } from 'react-bootstrap';

// const PaginationComponent = () => {
//   const [data, setData] = useState([]);
//   const [currentPage, setCurrentPage] = useState(0);
//   const [totalPages, setTotalPages] = useState(1);
//   const [loading, setLoading] = useState(false);

//   const itemsPerPage = 3;

//   useEffect(() => {
//     // Replace with your API endpoint
//     fetch(`https://softuni-customserver-be532ba4effe.herokuapp.com/data/pets`)
//       .then(response => response.json())
//       .then(data => setData(data))
//       .catch(error => console.error('Error fetching data:', error));
//   }, []);
//   console.log(data)

//   const pageCount = Math.ceil(data?.length / itemsPerPage);
//   console.log(pageCount)

//   const currentItems = data?.slice(
//     currentPage * itemsPerPage,
//     (currentPage + 1) * itemsPerPage
//   );
//   console.log(currentItems)

//   const handlePageChange = (selectedPage) => {
//     setCurrentPage(selectedPage);
//   };
//   console.log(currentPage)

//   return (
//     <div>

//     </div>
//     // <PaginationComponent
//     //     pageCount={pageCount}
//     //     onPageChange={handlePageChange}
//     //   />
//   )





//   useEffect(() => {
//     const fetchData = async () => {
//       setLoading(true);
//       try {
//         const offset = (currentPage - 1) * itemsPerPage;
//         const response = await fetch(`https://softuni-customserver-be532ba4effe.herokuapp.com/data/pets?offset=${offset}&pageSize=${itemsPerPage}`);
//         const result = await response.json();
//         setData(result.data);

//         // console.log(result)
//         // console.log(data);
//         // console.log(result)

//         const totalItems = result.length;
//         if (totalItems > 0) {
//           setTotalPages(Math.ceil(totalItems / itemsPerPage));
//         //   console.log(Math.ceil(totalItems / itemsPerPage))
//          } 
//         else {
//            setTotalPages(1);
//          }
//       } catch (error) {
//         console.error("Error fetching data:", error);
//       }
//       setLoading(false);
//     };
//     // console.log(totalPages)

//     fetchData();
//   }, [currentPage]);

// //   const handlePageChange = (page) => {
// //     setCurrentPage(page);
// //   };



//   return (
//     <Container className="mt-5">
//       {loading ? (
//         <p>Loading...</p>
//       ) : (
//         <ListGroup>
//           {data?.map(item => (
//             <ListGroup.Item key={item.id}>
//               {item.title}
//             </ListGroup.Item>
//           ))}
//         </ListGroup>
//       )}
//       <BootstrapPagination className="mt-3">
//         <BootstrapPagination.Prev
//           disabled={currentPage === 1}
//           onClick={() => handlePageChange(currentPage - 1)}
//         />
//         {Array.from({ length: totalPages }, (_, idx) => (
//           <BootstrapPagination.Item
//             key={idx + 1}
//             active={currentPage === idx + 1}
//             onClick={() => handlePageChange(idx + 1)}
//           >
//             {idx + 1}
//           </BootstrapPagination.Item>
//         ))}
//         <BootstrapPagination.Next
//           disabled={currentPage === totalPages}
//           onClick={() => handlePageChange(currentPage + 1)}
//         />
//       </BootstrapPagination>
//     </Container>
//   );

// export default PaginationComponent;