import React from 'react'

const Footer = () => {

  let footerStyle = {
    width:"100%",
    marginTop: "auto"
  }

  return (
    <div className="bg-dark text-light py-3" style={footerStyle}>
      <p className='text-center'>Copyright &copy; Listify.com</p>
    </div>
  )
}

export default Footer
