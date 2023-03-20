import React, { useState, useEffect } from "react";
import AdminPagination from "src/components/AdminPagination";
import { useNavigate } from "react-router-dom";
import { getAll } from "src/services/WebAPIService";
import CategorySidebar from "src/components/CategorySidebar";
import ClipLoader from "react-spinners/ClipLoader";
import { EyeIcon, StarIcon, QueueListIcon } from "@heroicons/react/24/solid";

function FinishedAuctions() {
  const navigate = useNavigate();
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [error, setError] = useState([]);
  const [loading, setLoading] = useState(false);
  const [products, setProducts] = useState([]);
  const [product, setProduct] = useState([]);

  useEffect(() => {
    getAll("products/active_auction")
      .then((res) => {
        setProducts(res.data);
      })
      .catch(() => {
        setError(true);
      });
  }, []);

  const viewProduct = async (id) => {
    return navigate("/item", {
      state: { productId: id },
      replace: true,
    });
  };

  return (
    <div className="w-full flex flex-col space-y-8 bg-selago-500">
      <div className="flex justify-center p-6">
        <div className="flex flex-col w-10/12 p-4 py-6">
          <h1 className="text-4xl pb-6">
            <span className="font-extrabold font-raleway-base">Aution </span>
            <span className="font-raleway-thin"> Items</span>
          </h1>

          <div className="flex sm:flex-row flex-col">
            <div className="flex flex-col space-y-4 sm:w-9/12 w-full">
              <div className="flex sm:flex-row flex-col sm:justify-between sm:items-center sm:space-y-0 space-y-4 bg-concrete-50 p-4 rounded-xl">
                <div className="flex items-center space-x-4">
                  <span className="p-2 rounded-xl border border-concrete-600">
                    <QueueListIcon className="h-4 w-4 text-cerise-red hover:text-concrete-800" />
                  </span>
                  <span>Showing all 5 results</span>
                </div>
                <div className="flex  items-center space-x-4">
                  <form className="w-full">
                    <select
                      id="countries"
                      className="w-full p-2.5 border rounded-xl text-sm border-pickled-bluewood-200"
                      onChange={(event) => setProduct(event.target.value)}
                    >
                      <option defaultValue="default">Default sorting</option>
                      <option value="US">Sort by latest</option>
                      <option value="CA">Sort by status: active</option>
                      <option value="CA">Sort by status: closed</option>
                      <option value="CA">Sort by price: lowest</option>
                      <option value="CA">Sort by price: highest</option>
                    </select>
                  </form>
                </div>
              </div>
              {loading ? (
                <div className="p-4 m-4 grid justify-items-center">
                  <ClipLoader color={"#DB2F30"} loading={loading} size={50} />
                </div>
              ) : (
                products.map((product) => (
                  <div
                    key={product.id}
                    className="flex sm:flex-row flex-col w-full bg-concrete-50 rounded-xl shadow-sm"
                  >
                    <div className="sm:w-4/12 w-full">
                      {product.product_files.map((product_file) =>
                        product_file.is_featured ? (
                          <img
                            key={product_file.id}
                            src={
                              "http://localhost:8000/api/products/file/" +
                              product_file.id
                            }
                            className="w-full object-cover sm:h-52 rounded-tl-xl sm:rounded-bl-xl rounded-bl-none sm:rounded-tr-none rounded-tr-xl"
                            alt="..."
                          />
                        ) : null
                      )}
                    </div>
                    <div className="flex flex-col space-y-2 p-4 sm:w-7/12 w-full">
                      <div
                        onClick={() => viewProduct(product.id)}
                        className="font-thin font-raleway-base text-3xl cursor-pointer hover:text-cerise-red"
                      >
                        {product.product}
                      </div>
                      <div className="font-extrabold text-base">
                        <span>Starting bid: </span>
                        <span className="text-cerise-red font-thin">
                          MWK
                          {product.base_price}
                        </span>
                      </div>

                      <div className="flex flex-col space-y-2 w-full">
                        <div className="flex flex-col">
                          <div className="text-base">
                            <span className="">Auction ends: </span>
                            <span className="">{product.bid_end_time}</span>
                          </div>
                        </div>
                        <div className="flex py-2 border-t border-concrete-400 space-x-6 w-full">
                          <div className="grid grid-flow-col auto-cols-auto gap-2">
                            <span
                              onClick={() => viewProduct(product.id)}
                              className="p-3 rounded-full border border-concrete-600 cursor-pointer"
                            >
                              <EyeIcon className="h-4 w-4 text-cerise-red hover:text-concrete-800" />
                            </span>
                            <span className="p-3 rounded-full border border-concrete-600">
                              <StarIcon className="h-4 w-4 text-cerise-red hover:text-concrete-800" />
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))
              )}
              <AdminPagination
                currentPage={currentPage}
                totalPages={totalPages}
                onPageChange={setCurrentPage}
              />
              {/* <div className="grid grid-flow-col auto-cols-auto gap-4 py-8 place-content-start">
                <span className="p-1 px-3 rounded-lg border border-cerise-red-500">
                  1
                </span>
                <span className="p-1 px-3 rounded-lg border border-cerise-red-500 bg-cerise-red-500">
                  2
                </span>
                <span className="p-1 px-3 rounded-lg border border-cerise-red-500 bg-cerise-red-500">
                  3
                </span>
                <span className="p-1 px-3 rounded-lg border border-cerise-red-500 bg-cerise-red-500">
                  4
                </span>
                <span className="p-1 px-3 rounded-lg border border-cerise-red-500 bg-cerise-red-500">
                  5
                </span>
              </div> */}
            </div>

            <div className="sm:w-3/12 w-full">
              <CategorySidebar />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FinishedAuctions;
