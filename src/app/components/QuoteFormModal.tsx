import React from 'react';

const QuoteFormModal = ({ isOpen, onClose }:any) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
      <div className="bg-white rounded-lg overflow-hidden w-4/5 max-w-lg h-5/6 max-h-screen">
        <div className="flex justify-between items-center p-4 border-b">
          <h2 className="text-xl font-semibold">Request a Quote</h2>
          <button
            className="text-gray-500 hover:text-gray-700 text-2xl"
            onClick={onClose}
          >
            &times;
          </button>
        </div>
        <div className="p-2 h-5/6">
          <iframe
            src="https://surveyheart.com/form/66d958f6ecd7cf645b0b560b"
            className="w-full h-full"
            width={640}
            height={986}
            title="Google Form"
          >
            Loading…
          </iframe>
        </div>
      </div>
    </div>
  );
};

export default QuoteFormModal;
