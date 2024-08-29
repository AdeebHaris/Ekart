import { Button } from "react-bootstrap"
import { useDispatch, useSelector } from "react-redux"
import { emptyCart, removeFromCart } from "../redux/cartSlice";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";


function Cart() {
  const cart = useSelector((state)=>state.cartReducer)
  console.log('==cart===');
  console.log(cart);
  const dispatch = useDispatch();
  // hook used to navigate to a particular page
  const navigate = useNavigate();
  const [total,setTotal]=useState(0);
  const getTotal =  ()=>{
    let sum = 0;
    cart.forEach((item)=>{
      sum = sum +item.price;
    })
    setTotal(sum)
  }
  useEffect(()=>{
    getTotal();
  },[cart])
  const handleCart = ()=>{
  alert('Thank You .. your order placed successfully...')
  dispatch(emptyCart())
  navigate('/')  
  }
  
  return (
    <>
    <div style={{marginTop:'100px'}}>
        {
          cart?.length > 0?
      <div className="row w-100">

          <div className="col-lg-6 m-5">
          <table  className="table shadow border">
            <thead>
              <tr>
                <th>#</th>
                <th>Product Title</th>
                <th>Image</th>
                <th>Price</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {
                cart?.map((item,index)=>(
                  <tr>
                <td>{index+1}</td>
                <td>{item.title.slice(0,20)}</td>
                <td><img src={item.image} alt="" height='100px' width='100px'/></td>
                <td>₹{item.price}</td>
                <td><Button variant="outline-danger" onClick={()=>dispatch(removeFromCart(item.id))}><i className="fa-solid fa-trash"></i></Button></td>
              </tr>
                ))
              }
              
            </tbody>
          </table>
        </div>
        <div className="col-lg-4">
          <div className="border shadow p-5">
              <h3 className="text-primary">Cart Summary</h3>
              <h5 className="mt-3">Total Number of Products : <span className="text-warning fw-bolder">{cart?.length}</span></h5>
              <h5 className="mt-3">Total Price : <span className="text-warning fw-bolder"></span>₹ {total}</h5>
              <button className="btn btn-success rounded w-100 mt-5" onClick={handleCart}>Checkout</button>
          </div>
        </div>
      </div>:
    
    <div style={{height:'100vh'}} className="d-flex align-items-center flex-column">
    <img src="https://cdn3.iconfinder.com/data/icons/shopping-and-ecommerce-28/90/empty_cart-512.png" height= '300px' alt="" />
    <h3 className="ms-4">Your Cart Is Empty</h3>
  </div>
      
        }
    </div>
    </>
  )
}

export default Cart