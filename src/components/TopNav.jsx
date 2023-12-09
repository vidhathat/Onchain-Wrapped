import React from "react"

function TopNav(){
    return(
        <div className="flex items-center justify-center fixed top-5 left-1/2 transform -translate-x-1/2 mb-10">
        <img src="./arbitrum.png" className="h-6 w-6" />
        <span className="ml-2 font-heading">ARBITRUM • Wrapped ‘23</span>
        </div>
    )
}

export default TopNav;
