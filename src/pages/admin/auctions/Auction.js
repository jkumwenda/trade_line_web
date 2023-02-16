import React, { useState, useEffect } from "react";
import AdminPagination from "../../../components/AdminPagination";
import AdminPageSearch from "../../../components/AdminPageSearch";
import { NavLink, useNavigate, useLocation } from "react-router-dom";
import {
  getData,
  getAllData,
  deleteData,
  createData,
  fileUpload,
} from "../../../services/APIService";
import ClipLoader from "react-spinners/ClipLoader";
import DeleteConfirmation from "../../../components/DeleteConfirmation";

import {
  PlusCircleIcon,
  TrashIcon,
  PencilSquareIcon,
  EyeIcon,
  PhotoIcon,
} from "@heroicons/react/24/solid";
import axios from "axios";
const UPLOAD_ENDPOINT = "http://127.0.0.1:8000/api/products/upload/";

function Auction() {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(true);
  const [auction, setAuction] = useState([]);
  const [categories, setCategories] = useState([]);
  const [products, setProducts] = useState([]);
  const { state } = useLocation();
  const [isShowDialog, setIsShowDialog] = useState(false);
  const { auctionId } = state;
  const [showModal, setShowModal] = useState(false);
  const [showFileModal, setFileModal] = useState(false);
  const [product, setProduct] = useState([]);
  const [category, setCategory] = useState([]);
  const [base_price, setBasePrice] = useState([]);
  const [bid_fee, setBidFee] = useState([]);
  const [product_detail, setProductDetail] = useState([]);
  const [productId, setProductId] = useState();
  const [file, setFile] = useState(null);
  const [isFeatured, setIsFeatured] = useState([]);

  const handleCloseDialog = (id) => {
    setProductId(id);
    setIsShowDialog(!isShowDialog);
  };

  useEffect(() => {
    setLoading(true);
    getData("auctions", auctionId)
      .then((res) => {
        setAuction(res);
        setLoading(false);
      })
      .catch(() => {
        setError(true);
      });
    getAllData("categories")
      .then((res) => {
        setCategories(res);
      })
      .catch(() => {
        setError(true);
      });

    getData("products/auction", auctionId)
      .then((res) => {
        setProducts(res);
      })
      .catch((error) => {
        setError(true);
        console.log("Error pano", error);
      });
  }, []);

  const handleChange = (event) => {
    setFile(event.target.files[0]);
  };

  const handleUpload = async (event) => {
    event.preventDefault();
    const formData = new FormData();
    formData.append("product_file", file);
    formData.append("is_featured", isFeatured);
    formData.append("product_id", productId);

    axios
      .post(UPLOAD_ENDPOINT, formData)
      .then((res) => {
        alert("File Upload success");
      })
      .catch((err) => alert("File Upload Error"));
  };

  const viewAuction = async (id) => {
    navigate("auction/");
  };

  const updateAuction = async (id) => {
    console.log(id);
  };

  const handleDelete = async (id) => {
    setLoading(true);
    deleteData("products/" + id)
      .then((res) => {
        const newProducts = products.filter((product) => product.id !== id);
        setProducts(newProducts);
        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
      });
    setIsShowDialog(!isShowDialog);
  };

  const fileUploadModal = async (id) => {
    setFileModal(true);
    setProductId(id);
  };

  const handleSubmit = async (event) => {
    let data = {
      auction_id: auctionId,
      product: product,
      category_id: category,
      base_price: base_price,
      bid_fee: bid_fee,
      product_detail: product_detail,
    };
    await createData("products", data).then((res) => {
      getData("products/auction", auctionId)
        .then((res) => {
          setProducts(res);
        })
        .catch((error) => {
          setError(true);
          console.log("Error pano", error);
        });
    });
    setShowModal(false);
  };

  return (
    <div className="flex flex-col bg-concrete-50 shadow-sm rounded-xl">
      <div className="rounded-xl bg-cerise m-4">
        <h3 className="p-4 text-2xl  font-raleway font-extrabold border-b border-cerise-300 text-concrete-200">
          Auction details
        </h3>
        <div className="p-4 text-cerise-100">
          <div className="">
            <span className="font-raleway">Auction name : </span>
            <span className="text-concrete-50">{auction.auction}</span>
          </div>
          <div className="">
            <span className="font-raleway">Start date : </span>
            <span className="text-concrete-50">{auction.bid_start_time}</span>
          </div>
          <div className="">
            <span className="font-raleway">End date : </span>
            <span className="text-concrete-50">{auction.bid_end_time}</span>
          </div>
        </div>
      </div>
      <div className="flex justify-between items-center w-full p-4">
        <button
          className="flex items-center space-x-2"
          onClick={() => setShowModal(true)}
        >
          <PlusCircleIcon className="h-12 w-12 text-cerise-500"></PlusCircleIcon>
          <p className="font-extrabold text-sm">Add auction product</p>
        </button>
        <AdminPageSearch></AdminPageSearch>
      </div>
      <div className="p-4">
        {loading ? (
          <div className="p-4 m-4 grid justify-items-center">
            <ClipLoader color={"#DB2F30"} loading={loading} size={50} />
          </div>
        ) : (
          <div className="overflow-x-auto relative">
            <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
              <thead className="text-xs bg-gray-100 text-gray-700 uppercase dark:bg-gray-700 dark:text-gray-400">
                <tr>
                  <th scope="col" className="py-3 px-6">
                    Product name
                  </th>
                  <th scope="col" className="py-3 px-6">
                    Starting price
                  </th>
                  <th scope="col" className="py-3 px-6">
                    Bidding fee
                  </th>
                  <th scope="col" className="py-3 px-6">
                    Detail
                  </th>
                  <th scope="col" className="py-3 px-6">
                    Action
                  </th>
                </tr>
              </thead>
              <tbody>
                {products.map((product) => (
                  <tr
                    className="bg-white border-b dark:bg-gray-800 dark:border-gray-700"
                    key={product.id}
                  >
                    <th
                      scope="row"
                      className="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                    >
                      {product.product}
                    </th>
                    <td className="py-4 px-6">{product.base_price}</td>
                    <td className="py-4 px-6">{product.bid_fee}</td>
                    <td className="py-4 px-6">{product.product_detail}</td>
                    <td className="py-4 px-6 flex flex-start space-x-2">
                      <PhotoIcon
                        className="h-7 w-7 text-blue-500 cursor-pointer"
                        onClick={() => fileUploadModal(product.id)}
                      ></PhotoIcon>
                      <PencilSquareIcon
                        className="h-6 w-6 text-green-600 cursor-pointer"
                        onClick={() => updateAuction(product.id)}
                      ></PencilSquareIcon>
                      <TrashIcon
                        className="h-6 w-6 text-red-600 cursor-pointer"
                        onClick={() => handleCloseDialog(product.id)}
                      ></TrashIcon>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
      <AdminPagination></AdminPagination>
      {showModal ? (
        <div className="fixed inset-0 z-10 overflow-y-auto">
          <div
            className="fixed inset-0 w-full h-full bg-black opacity-40"
            onClick={() => setShowModal(false)}
          ></div>
          <div className="flex items-center min-h-screen">
            <div className="relative w-full max-w-lg mx-auto bg-white rounded-md shadow-lg">
              <h4 className="text-lg rounded-t-md px-8 py-4 font-medium bg-pickled-bluewood-600 text-pickled-bluewood-50">
                Product details
              </h4>
              <form className="w-full p-8">
                <div className="mb-6">
                  <label
                    htmlFor="username"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                  >
                    Product/Item
                  </label>
                  <input
                    type="input"
                    id="product"
                    name="product"
                    value={product}
                    className="border border-gray-400 bg-gray-50 text-gray-600 text-sm rounded-xl block w-full p-2 dark:text-white"
                    placeholder="Product"
                    required
                    onChange={(event) => setProduct(event.target.value)}
                  />
                </div>

                <div className="mb-6">
                  <label
                    htmlFor="username"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                  >
                    Category
                  </label>
                  <select
                    className="border border-gray-400 bg-gray-50 text-gray-600 text-sm rounded-xl block w-full p-2 dark:text-white"
                    placeholder="Product"
                    required
                    id="category"
                    name="category"
                    onChange={(event) => setCategory(event.target.value)}
                  >
                    {categories.map((category) => (
                      <option key={category.id} value={category.id}>
                        {category.category}
                      </option>
                    ))}
                  </select>
                </div>

                <div className="mb-6">
                  <label
                    htmlFor="base_price"
                    className="block text-sm font-medium text-gray-900 dark:text-gray-300"
                  >
                    Actual price
                  </label>
                  <input
                    type="input"
                    id="base_price"
                    name="base_price"
                    value={base_price}
                    className="border border-gray-400 bg-gray-50 text-gray-600 text-sm rounded-xl block w-full p-2 dark:text-white"
                    placeholder="Base price"
                    required
                    onChange={(event) => setBasePrice(event.target.value)}
                  />
                </div>

                <div className="mb-6">
                  <label
                    htmlFor="base_price"
                    className="block text-sm font-medium text-gray-900 dark:text-gray-300"
                  >
                    Entry fee
                  </label>
                  <input
                    type="input"
                    id="bid_fee"
                    name="bid_fee"
                    value={bid_fee}
                    className="border border-gray-400 bg-gray-50 text-gray-600 text-sm rounded-xl block w-full p-2 dark:text-white"
                    placeholder="Bidding fee"
                    required
                    onChange={(event) => setBidFee(event.target.value)}
                  />
                </div>

                <div className="mb-6">
                  <label
                    htmlFor="product_detail"
                    className="block text-sm font-medium text-gray-900 dark:text-gray-300"
                  >
                    Product detail
                  </label>
                  <textarea
                    type="textarea"
                    id="product_detail"
                    name="product_detail"
                    value={product_detail}
                    rows={4}
                    className="border border-gray-400 bg-gray-50 text-gray-600 text-sm rounded-xl block w-full p-2 dark:text-white"
                    placeholder="Product detail"
                    required
                    onChange={(event) => setProductDetail(event.target.value)}
                  />
                </div>
                <div className="items-center gap-2 mt-3 sm:flex">
                  <button
                    type="button"
                    className="w-full mt-2 p-2.5 flex-1 text-white bg-red-600 rounded-md outline-none ring-offset-2 ring-red-600 focus:ring-2"
                    onClick={() => handleSubmit()}
                  >
                    Save
                  </button>
                  <button
                    className="w-full mt-2 p-2.5 flex-1 text-gray-800 rounded-md outline-none border ring-offset-2 ring-indigo-600 focus:ring-2"
                    onClick={() => setShowModal(false)}
                  >
                    Cancel
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      ) : null}

      {showFileModal ? (
        <div className="fixed inset-0 z-10 overflow-y-auto">
          <div
            className="fixed inset-0 w-full h-full bg-black opacity-40"
            onClick={() => setShowModal(false)}
          ></div>
          <div className="flex items-center min-h-screen">
            <div className="relative w-full max-w-lg mx-auto bg-white rounded-md shadow-lg">
              <h4 className="text-lg rounded-t-md px-8 py-4 font-medium bg-pickled-bluewood-600 text-pickled-bluewood-50">
                File details
              </h4>
              <form className="w-full p-8">
                <div className="mb-6">
                  <label
                    htmlFor="base_price"
                    className="block text-sm font-medium text-gray-900 dark:text-gray-300"
                  >
                    File
                  </label>
                  <input
                    id="file"
                    name="file"
                    type="file"
                    onChange={(event) => handleChange(event)}
                    className="border border-gray-400 bg-gray-50 text-gray-600 text-sm rounded-xl block w-full p-1 dark:text-white"
                    placeholder="File"
                    required
                    // onChange={(event) => setFile(event.target.value)}
                  />
                </div>
                {error && <p style={{ color: "red" }}>{error}</p>}

                <div className="mb-6">
                  <label
                    htmlFor="base_price"
                    className="block text-sm font-medium text-gray-900 dark:text-gray-300 mb-4"
                  >
                    Is featured
                  </label>
                  <div className="flex items-center mb-2">
                    <input
                      type="radio"
                      value="1"
                      onChange={(event) => setIsFeatured(event.target.value)}
                      name="default-radio"
                      className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                    />
                    <label className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">
                      Yes
                    </label>
                  </div>
                  <div className="flex items-center">
                    <input
                      type="radio"
                      value="0"
                      onChange={(event) => setIsFeatured(event.target.value)}
                      name="default-radio"
                      className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                    />
                    <label className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">
                      No
                    </label>
                  </div>
                </div>

                <div className="items-center gap-2 mt-3 sm:flex">
                  <button
                    type="button"
                    onClick={(event) => handleUpload(event)}
                    className="w-full mt-2 p-2.5 flex-1 text-white bg-red-600 rounded-md outline-none ring-offset-2 ring-red-600 focus:ring-2"
                  >
                    Save
                  </button>
                  <button
                    className="w-full mt-2 p-2.5 flex-1 text-gray-800 rounded-md outline-none border ring-offset-2 ring-indigo-600 focus:ring-2"
                    onClick={() => setFileModal(false)}
                  >
                    Cancel
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      ) : null}
      {isShowDialog && (
        <DeleteConfirmation
          title={"Delete Product"}
          handleCloseDialog={handleCloseDialog}
          handleDelete={handleDelete}
          itemId={productId}
          size={"w-2/7"}
          color={"bg-green"}
        >
          Dialog Content goes here...
        </DeleteConfirmation>
      )}
    </div>
  );
}

export default Auction;
