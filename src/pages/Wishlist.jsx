import { Col, Row } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux"
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link } from "react-router-dom";
import { addtoCart } from "../redux/cartSlice";
import { removeFromWishlist } from "../redux/wishlistSlice";

function Wishlist() {
  const wishlist = useSelector(state=>state.wishlistReducer)
  const dispatch = useDispatch();
  const handleWishlist = (item)=>{
    dispatch(addtoCart(item));
    dispatch(removeFromWishlist(item.id));
  }
  
  return (
    <>
    <button className="btn btn-success mt-4 ms-4">
      <Link to={'/'} style={{textDecoration:'none',color:'white'}}>
      <i className="fa-solid fa-arrow-left me-2"></i>BACK TO HOME 
      </Link>
          
        </button>
       <Row className="m-5">
      {
        wishlist?.length>0?
        wishlist.map((item)=>(
          <Col sm={12} md={6} lg={4} xl={3} className="mt-5">
      <Card className="mt-5" style={{ width: '18rem' }}>
      <Card.Img variant="top" src={item.image} height={'200px'} className="p-3"/>
      <Card.Body>
        <Card.Title>{item.title.slice(0,30)}...</Card.Title>
        <Card.Text>
         <p>{item.description.slice(0,50)}...</p> 
         <p className="fw-bolder">Price : &#8377; {item.price}</p>
        </Card.Text>
        <div className="d-flex align-items-center justify-content-between">
        <Button variant="outline-danger" onClick={()=>dispatch(removeFromWishlist(item.id))} ><i class="fa-solid fa-trash"></i></Button>
        <Button variant="outline-success" onClick={()=>handleWishlist(item)}><i className="fa-solid fa-cart-shopping"></i></Button>
        </div>
        
      </Card.Body>
    </Card>
      </Col>
        ))
        :
      <div style={{height:'100vh'}} className="d-flex align-items-center flex-column">
        <img className='img' src="https://cdn3.iconfinder.com/data/icons/shopping-and-ecommerce-28/90/empty_cart-512.png" height= '300px' alt="" />
        <h3 className="ms-4">Your Wishlist Is Empty</h3>
      </div>
      }
      
    </Row>
    </>
  )
}

export default Wishlist