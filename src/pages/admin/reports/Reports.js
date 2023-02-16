import React, { useState, useEffect } from "react";
import { useNavigate, NavLink } from "react-router-dom";
import { getAllData } from "../../../services/APIService";
import ClipLoader from "react-spinners/ClipLoader";
import { EyeIcon } from "@heroicons/react/24/solid";

export default function Reports() {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [reports, setReports] = useState([]);
  const [error, setError] = useState(true);
  const [isShowDialog, setIsShowDialog] = useState(false);

  const handleCloseDialog = (id) => {
    setIsShowDialog(!isShowDialog);
  };

  useEffect(() => {
    setLoading(true);
    getAllData("bids")
      .then((res) => {
        setReports(res);
        console.log(res);
        setLoading(false);
      })
      .catch(() => {
        setError(true);
      });
  }, []);

  const viewAuction = async (id) => {
    // return navigate("/auction", {
    //   state: { auctionId: id },
    //   replace: true,
    // });
  };

  return (
    <div className="flex flex-col bg-concrete-50 shadow-sm rounded-xl">
      <h3 className="p-4 font-raleway rounded-t-xl font-extrabold border-b border-concrete-500 text-pickled-bluewood-400">
        Reports
      </h3>
      <div className="p-4">
        {" "}
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
                    Bidder
                  </th>
                  <th scope="col" className="py-3 px-6">
                    Product
                  </th>
                  <th scope="col" className="py-3 px-6">
                    Trans ID
                  </th>
                  <th scope="col" className="py-3 px-6">
                    Entry Fee (MK)
                  </th>
                  <th scope="col" className="py-3 px-6">
                    Bid Ammount (MK)
                  </th>
                  <th scope="col" className="py-3 px-6">
                    Response Time
                  </th>
                  <th scope="col" className="py-3 px-6">
                    Payment Method
                  </th>
                  <th scope="col" className="py-3 px-6">
                    Status
                  </th>
                  <th scope="col" className="py-3 px-6">
                    Action
                  </th>
                </tr>
              </thead>
              <tbody>
                {reports.map((report) => (
                  <tr
                    className="bg-white border-b dark:bg-gray-800 dark:border-gray-700"
                    key={report.id}
                  >
                    <th
                      scope="row"
                      className="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                    >
                      {report.Bidder.phone_number}
                    </th>
                    <td className="py-4 px-6">{report.Product.product}</td>
                    <td className="py-4 px-6">{report.Bid.tran_id}</td>
                    <td className="py-4 px-6">{report.Product.bid_fee}</td>
                    <td className="py-4 px-6">{report.Bid.amount}</td>
                    <td className="py-4 px-6">{report.Bid.response_time}</td>
                    <td className="py-4 px-6">
                      {report.PaymentMethod.payment_method}
                    </td>
                    <td className="py-4 px-6">Successful</td>
                    <td className="py-4 px-6 flex flex-start space-x-2">
                      <EyeIcon
                        className="h-7 w-7 text-blue-500 cursor-pointer"
                        onClick={() => viewAuction(report.id)}
                      ></EyeIcon>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  );
}
