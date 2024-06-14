import React from 'react';
import { FaCheckCircle, FaTruck, FaBox, FaClipboardCheck } from 'react-icons/fa';

const TrackOrder = () => {
  const orderStages = [
    { icon: FaClipboardCheck, label: 'Order Placed', completed: true },
    { icon: FaCheckCircle, label: 'Order Approved', completed: true },
    { icon: FaBox, label: 'Processed', completed: false },
    { icon: FaTruck, label: 'Shipped', completed: false },
    { icon: FaTruck, label: 'Out for Delivery', completed: false },
    { icon: FaCheckCircle, label: 'Delivered', completed: false },
  ];

  return (
    <div className="p-6 max-w-lg mx-auto">
      <h1 className="text-md font-bold mb-6">Track Your Order</h1>

      <div className="space-y-8">
        {orderStages.map((stage, index) => (
          <div key={index} className="flex items-center">
            <div className={`text-4xl ${stage.completed ? 'text-blue-500' : 'text-gray-300'}`}>
              <stage.icon />
            </div>
            <div className="flex-grow ml-4 border-t-2 border-gray-200">
              <div className={`text-sm font-semibold ${stage.completed ? 'text-blue-600' : 'text-gray-500'}`}>
                {stage.label}
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-8 text-center">
        <button className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700">
          Refresh Status
        </button>
      </div>
    </div>
  );
};

export default TrackOrder;
