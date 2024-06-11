import React from 'react'

const ProductCard01 = (props) => {
    const {
        image_url="https://img.freepik.com/premium-photo/cheesy-burger-delight-generative-ai_94628-5446.jpg?w=826",
        image_alt="RESTO",
        name='Cheesy Burgur',
        rating=3.5,
        price=149,
        discount=10,
        tags=[{
            title:'Featured',
            color: 'red'
        }]
    }=props;
    return (
        <div className='flex flex-col'>
            <div className="image-box">
                <img
                    src={image_url}
                    alt={image_alt}
                    className="w-full h-64 object-cover"
                />
            </div>
            <div className="p-1 md:p-2">
                <h6 className="text-xs font-bold text-left text-slate-600">{name}</h6>
                <div className="flex justify-between items-center mt-2">
                    <div className="flex items-center">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-4 w-4 text-yellow-300"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                        >
                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.181 3.637a1 1 0 00.95.69h3.813c.969 0 1.371 1.24.588 1.81l-3.087 2.223a1 1 0 00-.364 1.118l1.18 3.637c.3.921-.755 1.688-1.54 1.118L10 13.287l-3.087 2.223c-.784.57-1.84-.197-1.54-1.118l1.181-3.637a1 1 0 00-.364-1.118L3.103 9.065c-.783-.57-.381-1.81.588-1.81h3.813a1 1 0 00.95-.69l1.181-3.637z" />
                        </svg>
                        <h5 className="mb-0 ml-2 number text-xs font-bold text-slate-400">{rating}</h5>
                    </div>
                    <div>
                        <h5 className="mb-0 ml-2 text-sm text-slate-400">₹ {price}</h5>
                    </div>
                </div>
            </div>
            {tags.length && 
            <div className="flex gap-1 p-1">
                {tags.map((tag,i)=>(
                    <span key={i} className={`rounded-full bg-${tag.color}-600 text-gray-600 px-2 text-[8px]`}>{tag.title}</span>
                ))}
            </div>
            }
        </div>
    )
}

export default ProductCard01
