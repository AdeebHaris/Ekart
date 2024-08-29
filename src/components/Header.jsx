import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
import Badge from 'react-bootstrap/Badge';
import { useSelector } from 'react-redux';


function Header() {
  // useSelector hook is used to access state available in store
  const wishlist = useSelector((state)=>state.wishlistReducer)
  const cart = useSelector((state)=>state.cartReducer)
  console.log("===wishlist Items===");
  console.log(wishlist);
  
  return (
    <>
    <Navbar expand="lg" className="bg-primary">
      <Container>
        <Navbar.Brand style={{color:'#fff'}}>
            <Link to={'/'} style={{color:'#fff',textDecoration:'none'}}>
            <i className="fa-solid fa-cart-shopping me-2 fa-bounce"></i>E-KART
            </Link>
            </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link >
                <Link to={'/cart'} style={{color:'#fff',textDecoration:'none',marginRight:'10px'}}>
                CART
                <Badge className='ms-1 fs-6' bg="secondary">{cart?.length}</Badge>
                </Link>
                </Nav.Link>
            <Nav.Link >
                <Link to={'/wishlist'} style={{color:'#fff',textDecoration:'none'}}>
                WISH LIST
                <Badge className='ms-1 fs-6' bg="secondary">{wishlist?.length}</Badge>
                </Link>
                </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </>
  )
}

export default Header