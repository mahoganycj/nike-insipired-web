import React, { ReactHTMLElement } from 'react'
import { Products } from "../libs/type";

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  name?: string;
  onClick?: () => void;
}

const Button = ({name, onClick, children, ...props}: ButtonProps) => {
  return (
    <div>
        <button className='text-xs p-2 m-2 border border-blue-950 rounded-md md:hover:bg-blue-500'
        {...props}
         onClick={onClick}>{children}{name}</button>
    </div>
  )
}

export default Button