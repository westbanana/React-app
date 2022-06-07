import React, { useEffect, useState } from 'react';
import './GetImages.css';
import { ClipLoader } from 'react-spinners';
import ReactPaginate from 'react-paginate';

const GetImages = () => {
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const [totalProducts, setTotalProducts] = useState();
  const limit = 10;

  const getProducts = () => {
    setIsLoading(true);
    fetch(`https://dummyjson.com/products?limit=${limit}&skip=${limit * currentPage}`)
      .then((response) => response.json())
      .then((response) => {
        setProducts(response.products);
        setTotalProducts(response.total);
        setIsLoading(false);
      })
      .catch(() => {
        setErrorMessage('Unable to fetch image list');
        setIsLoading(false);
      });
  };

  useEffect(() => {
    getProducts();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentPage]);

  const renderUser = () => products.map((e) => (
    <div className="product_block" key={e.id}>
      <img src={e.images[0]} alt="Product_Image" className="product_image" />
      <span className="product_title">{e.title}</span>
      <span className="product_description">{e.description}</span>
    </div>
  ));

  const totalPageCount = totalProducts / limit;

  const onPageChange = (e) => {
    setCurrentPage(e.selected);
  };

  return (
    <div className="getImages_container">
      {isLoading ? <ClipLoader color="#00FFFF" size="150" speedMultiplier="1" />
        : renderUser()}
      {errorMessage && <div className="error_block">{errorMessage}</div>}
      <ReactPaginate
        pageCount={totalPageCount}
        pageRangeDisplayed={10}
        marginPagesDisplayed={1}
        previousLabel="<"
        nextLabel=">"
        onPageChange={onPageChange}
        breakClassName="pagination_page-item"
        breakLinkClassName="pagination_page-link"
        containerClassName="pagination"
        pageClassName="pagination_page-item"
        pageLinkClassName="pagination_page-link"
        previousClassName="pagination_page-item"
        previousLinkClassName="pagination_page-link"
        nextClassName="pagination_page-item"
        nextLinkClassName="pagination_page-link"
        activeClassName="pagination_active"
        disabledClassName="pagination_disabled"
      />
      <button className="getImages_button" type="button" onClick={getProducts}>Get images</button>
    </div>
  );
};
export default GetImages;
