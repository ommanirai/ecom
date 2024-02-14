import React from 'react'
import { useDispatch } from 'react-redux'
import { toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';

const Card = ({ product }) => {
    // console.log(product)
    const dispatch = useDispatch()
    // const Card = (props) => {
    // console.log(props.product.product_name)
    function addToCart() {
        toast.success(product.product_name + " added to cart")
        dispatch({
            type: "ADD_TO_CART",
            payload: product
        })
    }
    return (
        <>
            <div className="col my-5">
                <div className="card shadow-lg">
                    <div className="image-block">
                        <img src={product.product_image} className="card-img-top image-zoom" alt="..." height="200px"
                            width="200px" />
                    </div>
                    <div className="card-body">
                        <h1 className="card-title text-truncate">{product.product_name}</h1>
                        {/* <h1 className="card-title">{props.product.product_name}</h1> */}
                        <h5>{product.product_price}</h5>
                        <p className="card-text text-truncate   ">{product.product_description}</p>
                        <div className="text-center">
                            <div className="btn btn-warning" onClick={addToCart} >Add to Cart</div>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}

export default Card