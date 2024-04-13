import React from 'react'

const CustomButton = ({ title, bgColor, textColor, roundedClass, scaleAnimation, onClick, }) => {
    return (
        <button className={`bg-${bgColor} text-${textColor} px-5 py-2 ${roundedClass ? roundedClass : 'rounded-md'
            } ${scaleAnimation ? 'hover:scale-[102%] transition-all delay-100' : null}`}
            onClick={onClick ? onClick : null}
        >
            {title}
        </button>
    )
}

export default CustomButton