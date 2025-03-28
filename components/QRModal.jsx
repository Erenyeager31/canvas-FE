import React from "react";

const QRModal = ({ isOpen, onClose, children }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white p-6 rounded-lg shadow-lg w-fit relative">
        <button
          onClick={onClose}
          className="absolute top-2 right-2 text-[#6A3A9F] hover:text-gray-800"
        >
          ✖
        </button>
        {children}
      </div>
    </div>
  );
};

export default QRModal;