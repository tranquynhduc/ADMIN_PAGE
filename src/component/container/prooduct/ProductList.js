import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import '../../style/ProductList.css';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { delete_product } from '../../../redux/Action';
import { toast } from 'react-toastify';
import { GrAddCircle } from 'react-icons/gr'


function ProductList() {
    //  const [isOpen, setIopen] = useState(false)
    const dispatch = useDispatch();

    const productLists = useSelector(state => state.contactReducerProduct);
    { console.log('productLists', productLists) }
    const navigate = useNavigate();
    const hanldeClick = (id) => {
        navigate(`/EditProduct/${id}`)
    }

    const handleDeleteItem = (id, total) => {
        if (total <= 0) {

            dispatch(delete_product(id));
            toast.success('Successful delete !!');
        } else {
            toast.warning(`Số lượng sản phẩm vẫn còn ${total}.`)
            /* setIopen(true);  */
        }
    }

    const hanldeClickIcon = () => {
        navigate('/AddProduct')
    }

    return (
    <>
        <div className="addProduct " onClick={hanldeClickIcon}>
            <div className="Continer_Product">
                <GrAddCircle className="iconAddProduct " />
            </div>
        </div>
        {productLists.map(productList => (

            <div className="container" key={productList.id} onClick={() => handleDeleteItem(productList.id, productList.total)}>

                <div className="card">
                    <div className="imgBx">
                        <img src={productList.urlLink} alt={productList.id} />)
                    </div>
                    <div className="contentBx ">
                        <div ><h2>{productList.nameProduct}</h2></div>
                        <div className="size">
                            <h3 className="title_product">Price: {productList.price} đ</h3>
                        </div>
                        <div className="size">
                            Total: {productList.total}
                        </div>
                        <div className="size">
                            Rest: {productList.rest}
                        </div>
                        <button onClick={() => hanldeClick(productList.id)} className="custom-btn btn-15">Edit</button>
                        <button className="custom-btn btn-13"   >Delete</button>
                    </div>
                </div>
            </div>
        ))}

        {/*   {isOpen  &&  (
            <form onSubmit={hanldeSbumit} className='form_bolean' value={isOpen}>
                <p >{`Số lượng sản phẩm vẫn còn ${productLists.total} bạn có chắc chắc muốn xóa không ?`}</p>
                <button onClick={() => hanldeClickYes(productLists.id)}>Yes</button>
                <button onClick={() => hanldeClickNo}>No</button>
            </form>)}  */}

    </>)
}
    
export default ProductList
