import { useEffect, useState } from "react";


export const Divider = () => {

  const [screenWidth, setScreenWidth] = useState(window.innerWidth)

  const getSize = () => {
    setScreenWidth(window.innerWidth)
  }

  useEffect(() => {
    window.addEventListener('resize', getSize)
    return () => {
      window.removeEventListener('resize', getSize)
    }
  }, [screenWidth])

  return (
    <>
      {  screenWidth < 550 
        ? <svg width="295" height="16" xmlns="http://www.w3.org/2000/svg">
            <g fill="none" fillRule="evenodd">
              <path fill="#4F5D74" d="M0 8h122v1H0zM173 8h122v1H173z"/>
              <g transform="translate(138)" fill="#CEE3E9">
                <rect width="6" height="16" rx="3"/>
                <rect x="14" width="6" height="16" rx="3"/>
              </g>
            </g>
          </svg>

        : <svg width="444" height="16" xmlns="http://www.w3.org/2000/svg">
            <g fill="none" fillRule="evenodd">
              <path fill="#4F5D74" d="M0 8h196v1H0zM248 8h196v1H248z"/>
              <g transform="translate(212)" fill="#CEE3E9">
                <rect width="6" height="16" rx="3"/>
                <rect x="14" width="6" height="16" rx="3"/>
              </g>
            </g>
          </svg>
        }
    </>
  )
}
