import React from 'react';

const UserProfile = () => {
  return (
    <div className="p-6 max-w-sm mx-auto bg-white rounded-xl shadow-md space-y-4">
      <div className="flex items-center space-x-4">
        <img className="w-20 h-20 rounded-full" src="profile-picture-url" alt="User Profile" />
        <div>
          <h2 className="text-xl font-semibold">John Doe</h2>
        </div>
      </div>
      <div className="space-y-2">
        <p><strong>Email:</strong> john.doe@example.com</p>
        <p><strong>Phone:</strong> +123 456 7890</p>
        <p><strong>Location:</strong> New York, NY</p>
      </div>
      <div className="flex justify-around space-x-4">
        <div className="text-center">
          <h3 className="text-xl font-bold">24</h3>
          <p>Reviews</p>
        </div>
        <div className="text-center">
          <h3 className="text-xl font-bold">10</h3>
          <p>Favorites</p>
        </div>
      </div>
      <div>
        <h3 className="text-lg font-semibold">Recent Reviews</h3>
        <ul className="list-none space-y-2">
          <li className="p-4 bg-gray-100 rounded-lg shadow">Restaurant A - "Great food and atmosphere!"</li>
          <li className="p-4 bg-gray-100 rounded-lg shadow">Restaurant B - "Had an amazing time, highly recommend."</li>
          <li className="p-4 bg-gray-100 rounded-lg shadow">Restaurant C - "Good service but the food was average."</li>
        </ul>
      </div>
    </div>
  );
}

export default UserProfile;
