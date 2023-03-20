import React, { useState, useEffect } from "react";
import CategorySidebar from "src/components/CategorySidebar";
import { useNavigate, useLocation } from "react-router-dom";
import { EyeIcon } from "@heroicons/react/24/solid";
import { getAll, get } from "src/services/WebAPIService";
import ClipLoader from "react-spinners/ClipLoader";

function Item() {
  const navigate = useNavigate();
  const [error, setError] = useState([]);
  const [product, setProduct] = useState([]);
  const [productFiles, setProductFiles] = useState([]);
  const [loading, setLoading] = useState(false);
  const { state } = useLocation();
  const [categories, setCategories] = useState([]);
  const { productId } = state;

  useEffect(() => {
    setLoading(true);
    get("products", productId)
      .then((res) => {
        setProduct(res.data);
        setProductFiles(res.data.product_files);
        setLoading(false);
      })
      .catch((error) => {
        setError(true);
      });

    getAll("categories")
      .then((res) => {
        setCategories(res.data);
      })
      .catch(() => {
        setError(true);
      });
  }, []);

  return (
    <div className="w-full flex flex-col space-y-8 bg-selago-500">
      <div className="flex justify-center p-6">
        <div className="flex flex-col w-10/12 p-4 py-6">
          <h1 className="text-4xl pb-6 font-raleway">
            <span className="font-extrabold font-raleway-base">
              {product.product}
            </span>
          </h1>

          <div className="flex sm:flex-row flex-col">
            <div className="flex flex-col w-9/12 gap-6 bg-concrete-50 rounded-xl p-4">
              <div className="bg- flex flex-row">
                {loading ? (
                  <div className="p-4 m-4 grid justify-items-center">
                    <ClipLoader color={"#DB2F30"} loading={loading} size={50} />
                  </div>
                ) : (
                  <div className="w-4/12">
                    {productFiles.map((product_file) =>
                      product_file.is_featured ? (
                        <img
                          key={product_file.id}
                          src={
                            "http://localhost:8000/api/products/file/" +
                            product_file.id
                          }
                          className="object-cover sw:h-58 rounded-xl"
                          alt="..."
                        />
                      ) : null
                    )}
                  </div>)}
                <div className="flex flex-col space-y-4 px-4 w-8/12">
                  <span>{product.product_detail}</span>
                  <div className="font-extrabold">
                    <span>Actual price: </span>
                    <span className="text-cerise-red">
                      MWK {product.base_price}
                    </span>
                  </div>

                  <div className="flex flex-col space-y-3 border-t-2 border-concrete-600">
                    {/* <div>
                    <span>Item condition: </span>
                    <span className="font-extrabold">New</span>
                  </div> */}
                    <span className="font-thin">Time left:</span>
                    <div className="grid grid-cols-6 gap-2 text-center text-sm border border-concrete-500 text-cod-gray-50 bg-concrete-50 rounded-lg py-1">
                      <span>
                        <p>01</p>
                        <p>Months</p>
                      </span>
                      <span>
                        <p>06</p>
                        <p>Weeks</p>
                      </span>
                      <span>
                        <p>00</p>
                        <p>Days</p>
                      </span>
                      <span>
                        <p>01</p>
                        <p>Hours</p>
                      </span>
                      <span>
                        <p>12</p>
                        <p>Minutes</p>
                      </span>
                      <span>
                        <p>09</p>
                        <p>Seconds</p>
                      </span>
                    </div>
                    <div>
                      <span>Auction ends: </span>
                      <span> December 11, 2022 10:00 am</span>
                    </div>
                    <div className="flex space-x-6">
                      <form className="grid grid-flow-col auto-cols-auto gap-2 text-sm">
                        <input
                          className="rounded-xl text-center bg-concrete-50 border border-pickled-bluewood-200 p-2"
                          defaultValue={"100,000.00"}
                          required
                        />
                        <button
                          type="submit"
                          className="rounded-xl border-concrete-600 p-2 bg-cerise-red font-extrabold uppercase"
                        >
                          Bid
                        </button>
                      </form>
                      <div className="grid grid-flow-col auto-cols-auto gap-2">
                        <span className="p-3 rounded-full border border-concrete-800">
                          <EyeIcon className="h-4 w-4 text-cerise-red hover:text-concrete-800" />
                        </span>
                      </div>
                    </div>
                    {/* <div>
                      Categories:
                      <span className="text-bold">Motor vehicle</span>
                    </div> */}
                  </div>
                </div>
              </div>
              <div className="flex flex-wrap gap-4">
                {productFiles.map((product_file) =>
                  !product_file.is_featured ? (
                    <img
                      key={product_file.id}
                      src={
                        "http://localhost:8000/api/products/file/" +
                        product_file.id
                      }
                      className="object-cover sm:w-32 rounded-xl"
                      alt="..."
                    />
                  ) : null
                )}
              </div>
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
export default Item;
