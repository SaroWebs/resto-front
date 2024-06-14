import React from 'react';
import { FaCheckCircle } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const PaymentConfirm = () => {
    const orderDetails = {
        orderNumber: '1234567890',
        transactionId: 'TXN1234567890',
        paymentMethod: 'Credit Card',
        amount: '$199.99',
        date: '2024-06-14',
    };

    return (
        <div className="p-6 max-w-lg mx-auto">
            <div className="flex flex-col justify-center items-center">
                <FaCheckCircle className="text-green-500 text-6xl mb-4" />
                <h1 className="text-2xl font-bold text-green-600 mb-2">Payment Successful!</h1>
                <p className="text-md mb-6 font-semibold">Thank you for your payment.</p>
            </div>

            <div className="bg-gray-100 p-4 rounded-md mb-6">
                <h2 className="text-lg font-semibold mb-4">Order Details</h2>
                <div className="space-y-2">
                    <div className="flex justify-between">
                        <span className="text-sm font-semibold">Order Number:</span>
                        <span className="text-sm">{orderDetails.orderNumber}</span>
                    </div>
                    <div className="flex justify-between">
                        <span className="text-sm font-semibold">Transaction ID:</span>
                        <span className="text-sm">{orderDetails.transactionId}</span>
                    </div>
                    <div className="flex justify-between">
                        <span className="text-sm font-semibold">Payment Method:</span>
                        <span className="text-sm">{orderDetails.paymentMethod}</span>
                    </div>
                    <div className="flex justify-between">
                        <span className="text-sm font-semibold">Amount:</span>
                        <span className="text-sm">{orderDetails.amount}</span>
                    </div>
                    <div className="flex justify-between">
                        <span className="text-sm font-semibold">Date:</span>
                        <span className="text-sm">{orderDetails.date}</span>
                    </div>
                </div>
            </div>
            <div className="flex w-full">
                <Link to={'/'}
                    className="mt-4 w-full text-center px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
                >View Invoice
                </Link>
            </div>
            <div className="flex w-full">
                <Link to={'/track-order'}
                    className="mb-8 mt-4 w-full text-center px-4 py-2 bg-green-600 text-white rounded-md hover:bg-green-700"
                >Order Delivery Status
                </Link>
            </div>
            
        </div>
    );
};

export default PaymentConfirm;
