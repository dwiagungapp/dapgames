import React from "react"
import logodg1 from "../assets/img/logodg1.png"

const Footer = () => {
    return (
        <>
        <div className="py-6 bg-[#2F323E] text-gray-600 border-t">
        <footer className="px-0">
	<div className="px-4 flex items-center justify-center md:justify-normal mx-auto ">
		<div className="flex flex-row">
			<img src={logodg1} className="w-18 h-12"/>
			</div>
		</div>
</footer>
</div>
        </>
    )
}

export default Footer