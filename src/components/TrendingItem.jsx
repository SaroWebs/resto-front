import React from 'react';

const TrendingItem = () => {
  return (
    <div className="item-box border rounded-lg overflow-hidden bg-white shadow-md flex">
      <div className="item-media flex-none w-24">
        <img
          src="https://img.freepik.com/premium-photo/savory-delights-collection-illustrated-images-delicious-soups-stews-asian-culinary-treasure_1006514-53814.jpg?w=826"
          alt="food"
          className="w-full h-auto"
        />
      </div>
      <div className="item-content p-4 flex-grow">
        <a href="#">
          <h6 className="mb-0">Paneer Kadai</h6>
        </a>
        <div className="item-footer flex justify-between items-center mt-2">
          <div className='flex gap-4'>
            <h6 className="text-gray-500">₹ 180</h6>
            <h6 className="text-gray-400 line-through">₹ 300</h6>
          </div>
          <a href="javascript:void(0);" className="item-bookmark">
            <svg
              width="24"
              height="22"
              viewBox="0 0 24 22"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M16.7843 2.04749H16.785H16.8064C17.8714 2.05009 18.9118 2.36816 19.7963 2.96157C20.681 3.55518 21.37 4.39768 21.7762 5.38265C22.1823 6.36762 22.2875 7.45087 22.0783 8.49557C21.8692 9.54028 21.3551 10.4996 20.6011 11.2522L20.6004 11.2529L12.0015 19.8519L3.43855 11.2543L3.41711 11.2328L3.39439 11.2126C2.84628 10.7254 2.40336 10.1314 2.09273 9.46713C1.7821 8.80281 1.61031 8.0821 1.58785 7.3491C1.5654 6.61609 1.69276 5.88622 1.96215 5.20414C2.23153 4.52206 2.63727 3.90213 3.15453 3.38228C3.67179 2.86243 4.28969 2.45361 4.97042 2.18082C5.65115 1.90804 6.38038 1.77704 7.11349 1.79584C7.84659 1.81464 8.56815 1.98284 9.23401 2.29015C9.89986 2.59745 10.496 3.03741 10.9859 3.58308L11.0039 3.60309L11.0229 3.6221L11.2929 3.8921L11.9812 4.58036L12.6878 3.91095L12.9728 3.64095L12.9833 3.63096L12.9936 3.62067C13.4906 3.12161 14.0814 2.72571 14.7319 2.45573C15.3825 2.18575 16.08 2.04701 16.7843 2.04749Z"
                stroke="#BFC9DA"
                strokeWidth="2"
              />
            </svg>
          </a>
        </div>
      </div>
    </div>
  );
};

export default TrendingItem;
