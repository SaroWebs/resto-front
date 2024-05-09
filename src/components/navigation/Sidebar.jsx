import React, { useRef } from 'react'

const Sidebar = ({isSidebar=false, setIsSidebar}) => {
  const overlayref =  useRef(null);


  if(isSidebar){
    return (
      <div className='absolute top-0 bottom-0 right-0 left-0'>
        <div ref={overlayref} onClick={()=>setIsSidebar(false)} className="absolute top-0 bottom-0 left-0 right-0 bg-black/60 z-30"></div>
        <div className="absolute top-0 bottom-0 left-0 w-60 bg-white z-40">
            Sidebar
            <button onClick={()=>setIsSidebar(false)}> x </button>
        </div>
      </div>
    );
  }else{
    return null;
  }
}

export default Sidebar
