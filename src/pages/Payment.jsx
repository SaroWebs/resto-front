import React, { useState } from 'react';
import { FaMoneyBillWave, FaCreditCard, FaMobileAlt, FaUniversity, FaWallet } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Payment = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const handleAccordionClick = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="p-6 max-w-lg mx-auto">
      <h1 className="text-md font-bold mb-6">Payment Methods</h1>

      <div className="space-y-4">
        <div className="border rounded-md">
          <button
            onClick={() => handleAccordionClick(0)}
            className="flex items-center w-full p-4 text-left"
          >
            <FaMoneyBillWave className="mr-3 text-green-600" />
            <span>Cash on Delivery</span>
          </button>
          {activeIndex === 0 && (
            <div className="p-4">
              Pay with cash when your order is delivered.
            </div>
          )}
        </div>

        <div className="border rounded-md">
          <button
            onClick={() => handleAccordionClick(1)}
            className="flex items-center w-full p-4 text-left"
          >
            <FaCreditCard className="mr-3 text-blue-600" />
            <span>Credit or Debit Card</span>
          </button>
          {activeIndex === 1 && (
            <div className="p-4">
              Enter your card details to proceed with the payment.
            </div>
          )}
        </div>

        <div className="border rounded-md">
          <button
            onClick={() => handleAccordionClick(2)}
            className="flex items-center w-full p-4 text-left"
          >
            <FaMobileAlt className="mr-3 text-purple-600" />
            <span>UPI Payment</span>
          </button>
          {activeIndex === 2 && (
            <div className="p-4">
              Use your UPI ID to make the payment.
            </div>
          )}
        </div>

        <div className="border rounded-md">
          <button
            onClick={() => handleAccordionClick(3)}
            className="flex items-center w-full p-4 text-left"
          >
            <FaUniversity className="mr-3 text-red-600" />
            <span>Net Banking</span>
          </button>
          {activeIndex === 3 && (
            <div className="p-4">
              Choose your bank to pay using net banking.
            </div>
          )}
        </div>

        {/* Wallet */}
        <div className="border rounded-md">
          <button
            onClick={() => handleAccordionClick(4)}
            className="flex items-center w-full p-4 text-left"
          >
            <FaWallet className="mr-3 text-yellow-600" />
            <span>Wallet</span>
          </button>
          {activeIndex === 4 && (
            <div className="p-4">
              Pay using your preferred wallet.
            </div>
          )}
        </div>
      </div>

      <div className="flex w-full">
        <Link to={'/payment-confirm'}
          className="mt-4 w-full text-center px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600"
        >
          Make Payment
        </Link>
      </div>
    </div>
  );
};

export default Payment;
