import React from 'react'

const Sidebar = (props) => {
  const {isSidebar, setIsSidebar}=props;

  console.log(isSidebar);
  return (
    <div className={`absolute w-64 bg-white/80 top-0 bottom-0 ${isSidebar ? 'left-0 z-50': '-left-64'}`}>
      Sidebar

      <button onClick={setIsSidebar(false)}>close</button>
    </div>
  )
}

export default Sidebar
