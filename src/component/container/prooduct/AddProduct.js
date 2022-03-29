import React, { useEffect, useState } from 'react';
import '../../style/AddProduct.css'
import { useNavigate } from 'react-router-dom';
import { FcUpload } from 'react-icons/fc'
import { useDispatch, useSelector } from 'react-redux';
import { add_product } from '../../../redux/Action';

function AddProduct() {


    const [imgProduct, setimgProduct] = useState('')
    const [nameProduct, setNameProduct] = useState('');
    const [price, setPrice] = useState('');
    const [total, setTotal] = useState('');
    const [rest, setRest] = useState('');
    const [detail, setDetail] = useState('');
    const [urlLink, setUrlLink] = useState('');
    const addProduct = useSelector(state => state.contactReducerProduct);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const data = {
        id: addProduct.length + 1,
        urlLink,
        nameProduct,
        price,
        total,
        rest,
        detail,
    }

    const handleClickCreate = () => {
        dispatch(add_product(data));
        navigate('/productList')
    }

    const hanldeImage = (e) => {
        const imgProduct = e.target.files[0];
        imgProduct.preview = URL.createObjectURL(imgProduct);
        setimgProduct(imgProduct);
        console.log(imgProduct.preview);
    }
    useEffect(() => {

        return () => {
            imgProduct && URL.revokeObjectURL(imgProduct.preview);
        }
    }, [imgProduct])


    const hanldeClickBack = () => {
        navigate('/ProductList')
    }

    const hndaleSubmitForm = (e) => {
        e.preventDefault();
    }
    return (
        <div>
            <div className='newUserHome'>
                <div className='newUser'>
                    <h1 className='newUserTitle'>New Product</h1>
                    <div className='newUserItem'>
                        <label>Image</label>
                        {/* bug  */}
                        {/* <div className='userUpdateRight'>
                            <div className='userUpdateUpload'> 

                           
                                {imgProduct ? ( <img className='userUpdateImg' src={imgProduct.preview} alt={imgProduct.id} />) : (<img  className='userUpdateImg' src={urlLink} alt='Upload'/>)}
                                <label htmlFor='file'> <FcUpload className='upAvatarIcon' /></label>
                                <input type='file' id='file' style={{ display: 'none' }} onChange={hanldeImage} />
                            </div>
                        </div> */}
                        {/* Url Link */}
                        {urlLink ? (<img className='userUpdateImg' src={urlLink} alt={imgProduct.id} />) : (<img className='userUpdateImg' src='https://o.remove.bg/downloads/5f70c4c0-187a-445b-9b96-4f0b0281aa94/pngtree-shoe-glyph-black-icon-png-image_3755424-removebg-preview.png' alt='Upload' />)}
                        <input placeholder='URL Link' value={urlLink} onChange={(e) => setUrlLink(e.target.value)} />
                    </div>
                    <form className='newUserForm' onSubmit={hndaleSubmitForm} >
                        <div className='newUserItem'>
                            <label>Name Product</label>
                            <input type='text' placeholder='Enter your Name Product' value={nameProduct} onChange={(e) => setNameProduct(e.target.value)} />
                        </div>
                        <div className='newUserItem'>
                            <label>Price</label>
                            <input type='number' placeholder='Enter your price' value={price} onChange={(e) => setPrice(e.target.value)} />
                        </div>
                        <div className='newUserItem'>
                            <label>Total</label>
                            <input type='number' placeholder='total' value={total} onChange={(e) => setTotal(e.target.value)} />
                        </div>
                        <div className='newUserItem'>
                            <label>Rest</label>
                            <input type='number' placeholder='Rest' value={rest} onChange={(e) => setRest(e.target.value)} />
                        </div>
                        <div className='newUserItem'>
                            <label>Detail</label>
                            <textarea className='detail_Texttarea' rows='10' placeholder='Detail....' value={detail} onChange={(e) => setDetail(e.target.value)} />
                        </div>

                    </form>

                    <button className='custom-btn btn-10 create' onClick={handleClickCreate}>Create</button>
                    <button className='custom-btn btn-10 ' onClick={hanldeClickBack} >Back </button>

                </div>
            </div>

        </div>
    )
}

export default AddProduct