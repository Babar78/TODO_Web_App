import React from 'react'

const CustomButton = ({ title, bgColor, textColor, roundedClass, scaleAnimation, onClick, fullWidth, buttonType }) => {
    return (
        <button className={` ${bgColor ? bgColor : 'bg-secondary'
            } text-${textColor} ${fullWidth ? 'w-full' : 'w-fit'} px-5 py-2 ${roundedClass ? roundedClass : 'rounded-md'
            } ${scaleAnimation ? 'hover:scale-[102%] transition-all delay-100' : null}`}
            onClick={onClick ? onClick : null}
            type={buttonType ? buttonType : 'button'}
        >
            {title}
        </button>
    )
}

export default CustomButton