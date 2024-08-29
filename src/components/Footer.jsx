import { Link } from "react-router-dom"


function Footer() {
  return (
    <>
    <div style={{width:'100%',height:'300px'}} className="d-flex justify-content-center align-items-center flex-column mt-5 bg-primary">
      <div className="d-flex justify-content-evenly align-items-center mb-5 w-100" style={{color:'white'}}>
        <div style={{width:'400px'}}>
          <h4><i style={{color:'white'}} className="fa-solid fa-cart-shopping me-2"></i></h4>
          <h6>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vitae deleniti incidunt doloremque perferendis impedit reiciendis ullam illo? Quidem esse laudantium aliquam ad. Expedita molestias omnis, eaque quod nostrum fuga eos?</h6>
        </div>
        <div className="d-flex flex-column">
          <h4>Links</h4>
          <Link to={'/'} style={{textDecoration:'none',color:'white'}}>Home</Link>
          <Link to={'/cart'} style={{textDecoration:'none',color:'white'}}>Cart</Link>
          <Link to={'/wishlist'} style={{textDecoration:'none',color:'white'}}>Wishlist</Link>
        </div>
        <div className="d-flex flex-column">
          <h4>Guides</h4>
          <Link to={'https://getbootstrap.com/'} target='_blank' style={{textDecoration:'none',color:'white'}}>React</Link>
          <Link target='_blank' style={{textDecoration:'none',color:'white'}}>React Bootstrap</Link>
          <Link target='_blank' style={{textDecoration:'none',color:'white'}}>Boots watch</Link>

        </div>
        <div>
          <h4>Contact</h4>
          <div className="d-flex">
          <input type="text" className="form-control" placeholder="Enter Email Id" />
          <button className="btn btn-warning ms-2">SUBSCRIBE</button>
          </div>
          <div className="d-flex justify-content-evenly mt-3">
            <Link><i className="fa-brands fa-facebook fa-2x" style={{color:'white'}}></i></Link>
            <Link><i className="fa-brands fa-instagram fa-2x" style={{color:'white'}}></i></Link>
            <Link><i className="fa-brands fa-twitter fa-2x" style={{color:'white'}}></i></Link>
            <Link><i className="fa-brands fa-reddit-alien fa-2x" style={{color:'white'}}></i></Link>
          </div>
        </div>
      </div>
      <p style={{color:'white'}}>Copyright &#169; 2024 E-Kart built with React Reudux</p>
    </div>
    </>
  )
}

export default Footer