// import styles from "./Pagination.css";

// const Pagination = ({ page, pageCount, prevPage, nextPage, switchToPage }) => {
//   const pages = Array.from({ length: pageCount }, (_, idx) => idx + 1);
//   return (



    
//     <div className={styles["pagination"]}>
//       <button disabled={page === 1} onClick={prevPage} title={"Previous Page"}>
//         <i className="fa-solid fa-angles-left"></i>
//       </button>
//       {pages.map((p) => {
//         return (
//           <button
//             key={p}
//             onClick={() => switchToPage(p)}
//             className={page === p ? styles["page-active"] : ""}
//             title={`Page: ${p}`}
//           >
//             {p}
//           </button>
//         );
//       })}
//       <button
//         disabled={page === pageCount}
//         onClick={nextPage}
//         title={"Next Page"}
//       >
//         <i className="fa-solid fa-angles-right"></i>
//       </button>
//     </div>
//   );
// };

// export default Pagination;


import ReactPaginate from "react-paginate";
import { useEffect, useState } from "react";

function Pagination() {
  const [items, setItems] = useState([]);

  const [pageCount, setpageCount] = useState(0);

  let limit = 3;

  useEffect(() => {
    const getComments = async () => {
      const res = await fetch(

        `https://softuni-customserver-be532ba4effe.herokuapp.com/data/pets?offset=1&pageSize=${limit}`
      );
      const data = await res.json();
      const total = res.headers.get("x-total-count");
      setpageCount(Math.ceil(total / limit));
      // console.log(Math.ceil(total/12));
      setItems(data);
    };

    getComments();
  }, [limit]);

  const fetchComments = async (currentPage) => {
    const res = await fetch(

      `https://softuni-customserver-be532ba4effe.herokuapp.com/data/pets?offset=${currentPage}&pageSize=${limit}`

    );
    const data = await res.json();
    return data;
  };

  const handlePageClick = async (data) => {
    console.log(data.selected);

    let currentPage = data.selected + 1;

    const commentsFormServer = await fetchComments(currentPage);

    setItems(commentsFormServer);
    // scroll to the top
    //window.scrollTo(0, 0)
  };
  return (
    <div className="container">
      <div className="row m-2">
        {items.map((item) => {
          return (
            <div key={item.id} className="col-sm-6 col-md-4 v my-2">
              <div className="card shadow-sm w-100" style={{ minHeight: 225 }}>
                <div className="card-body">
                  <h5 className="card-title text-center h2">Id :{item.id} </h5>
                  <h6 className="card-subtitle mb-2 text-muted text-center">
                    {item.email}
                  </h6>
                  <p className="card-text">{item.body}</p>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      <ReactPaginate
        previousLabel={"previous"}
        nextLabel={"next"}
        breakLabel={"..."}
        pageCount={pageCount}
        marginPagesDisplayed={2}
        pageRangeDisplayed={3}
        onPageChange={handlePageClick}
        containerClassName={"pagination justify-content-center"}
        pageClassName={"page-item"}
        pageLinkClassName={"page-link"}
        previousClassName={"page-item"}
        previousLinkClassName={"page-link"}
        nextClassName={"page-item"}
        nextLinkClassName={"page-link"}
        breakClassName={"page-item"}
        breakLinkClassName={"page-link"}
        activeClassName={"active"}
      />
    </div>
  );
}

export default Pagination;