import React from "react";

function DeleteConfirmation(props) {
  const {
    children,
    color = "bg-red",
    handleCloseDialog,
    handleDelete,
    itemId,
    size = "w-2/3",
    title,
  } = props;

  const CloseIcon = () => {
    return (
      <span className="absolute top-0 right-0 p-4">
        <button
          onClick={handleCloseDialog}
          className={`focus:outline-none focus:border-none hover:${color}-700 
          p-2 rounded-full inline-flex items-center`}
        >
          <svg
            className="fill-current text-black hover:text-white"
            xmlns="http://www.w3.org/2000/svg"
            width="18"
            height="18"
            viewBox="0 0 18 18"
          >
            <path
              d="M14.53 4.53l-1.06-1.06L9 7.94 4.53 3.47 3.47 4.53 7.94 
            9l-4.47 4.47 1.06 1.06L9 10.06l4.47 4.47 1.06-1.06L10.06 9z"
            ></path>
          </svg>
        </button>
      </span>
    );
  };

  const DialogActions = () => {
    return (
      <div className="bg-gray-50 px-4 py-3 sm:px-6 items-center gap-2 mt-3 sm:flex">
        <button
          type="button"
          className="w-full mt-2 p-2.5 flex-1 text-white bg-red-600 rounded-md outline-none ring-offset-2 ring-red-600 focus:ring-2"
          onClick={() => handleDelete(itemId)}
        >
          Submit
        </button>
        <button
          type="button"
          className="w-full mt-2 p-2.5 flex-1 text-gray-800 rounded-md outline-none border ring-offset-2 ring-indigo-600 focus:ring-2"
          onClick={() => handleCloseDialog()}
        >
          Cancel
        </button>
      </div>
    );
  };

  return (
    <div
      className="fixed inset-0 z-50 overflow-auto bg-smoke-light flex 
    transition ease-in-out duration-700"
    >
      <div className="fixed z-10 inset-0 overflow-y-auto">
        <div
          className="flex items-end justify-center min-h-screen pt-4
        px-4 pb-20 
        text-center sm:block sm:p-0"
        >
          <div className="fixed inset-0 transition-opacity" aria-hidden="true">
            <div className="absolute inset-0 bg-gray-500 opacity-75"></div>
          </div>
          <span
            className="hidden sm:inline-block sm:align-middle sm:h-screen"
            aria-hidden="true"
          >
            &#8203;
          </span>
          <div
            className={`inline-block align-bottom bg-white rounded-lg text-left 
            overflow-hidden shadow-xl transform transition-all sm:my-8 
            sm:align-middle ${size}`}
            role="dialog"
          >
            <div
              className="relative px-8 pt-5 bg-white w-full flex-col flex
            rounded-lg"
            >
              <div className="text-xl font-semibold">{title}</div>
              {CloseIcon()}
            </div>
            <div className="bg-white">
              <div
                className="bg-white rounded px-8 pt-6 pb-8 flex flex-col 
              overflow-y-auto h-auto"
              >
                {children}
              </div>
            </div>
            {DialogActions()}
          </div>
        </div>
      </div>
    </div>
  );
}

export default DeleteConfirmation;
