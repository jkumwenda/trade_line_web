import React, { useState, useEffect } from "react";
import ClipLoader from "react-spinners/ClipLoader";

export default function Dashboard() {
  let [loading, setLoading] = useState(false);
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
      {loading ? (
        <div className="p-4 m-4 grid justify-items-center">
          <ClipLoader color={"#DB2F30"} loading={loading} size={50} />
        </div>
      ) : (
        <div className="p-4">Dashboard content</div>
      )}
    </div>
  );
}
