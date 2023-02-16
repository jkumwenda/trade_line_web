import React, { useState, useEffect } from "react";
import ClipLoader from "react-spinners/ClipLoader";
import { Data } from "../../../utils/Data";
import PieChart from "src/components/PieChart";
import BarChart from "src/components/BarChat";
import LineChart from "src/components/LineChat";

export default function Dashboard() {
  let [loading, setLoading] = useState(false);

  const [chartData, setChartData] = useState({
    labels: Data.map((data) => data.day),
    datasets: [
      {
        label: "Bids ",
        data: Data.map((data) => data.userGain),
        backgroundColor: [
          "rgba(75,192,192,1)",
          "#ecf0f1",
          "#50AF95",
          "#f3ba2f",
          "#2a71d0",
        ],
        borderColor: "black",
        borderWidth: 2,
      },
    ],
  });

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 5000);
  }, []);

  return (
    <div className="flex flex-col bg-concrete-50 shadow-sm rounded-xl">
      <h3 className="p-4 font-raleway rounded-t-xl font-extrabold border-b border-concrete-500 text-pickled-bluewood-400">
        Dashboard
      </h3>
      {/* {loading ? (
        <div className="p-4 m-4 grid justify-items-center">
          <ClipLoader color={"#DB2F30"} loading={loading} size={50} />
        </div>
      ) : (
        <div className="p-4">Dashboard content</div>
      )} */}
      <div className="p-4 flex fle-row space-x-4 w-full">
        <div className="basis-1/2">
          <LineChart chartData={chartData} />
        </div>
        <div className="basis-1/2">
          <BarChart chartData={chartData} />
        </div>
      </div>
    </div>
  );
}
