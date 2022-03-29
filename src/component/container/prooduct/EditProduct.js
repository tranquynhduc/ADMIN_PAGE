import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams, Link } from 'react-router-dom';
import '../../style/EditProduct.css';
import { FcUpload } from 'react-icons/fc'
import { update_product } from '../../../redux/Action';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';


function EditProduct() {
    const [avatarProduct, setAvatarProduct] = useState('')
    const [nameProduct, setNameProduct] = useState('');
    const [price, setPrice] = useState('');
    const [total, setTotal] = useState('');
    const [rest, setRest] = useState('');
    const [detail, setDetail] = useState('');
    const [urlLink, setUrlLink] = useState('');

    const { id } = useParams();
    const dispatch = useDispatch();

    const EditProduct = useSelector(state => state.contactReducerProduct);
    const FindProduct = EditProduct.find(product => product.id === parseInt(id));
    const navigate = useNavigate();

    const data = {
        id:parseInt(id), urlLink, nameProduct, price, total, rest, detail
    }
    console.log('data',data);




    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(update_product(data));
        navigate('/ProductList');
        toast.success('Update successful !!')
    }

    const hanldeChangeProductAvatar = (e) => {
        const avatarProduct = e.target.files[0];
        avatarProduct.preview = URL.createObjectURL(avatarProduct);
        setAvatarProduct(avatarProduct);
        console.log(avatarProduct.preview);

    }
    useEffect(() => {
        if (FindProduct) {
            setUrlLink(FindProduct.urlLink)
            setNameProduct(FindProduct.nameProduct)
            setDetail(FindProduct.detail)   
            setPrice(FindProduct.price)
            setTotal(FindProduct.total)
            setRest(FindProduct.rest)
            // setAvatarProduct(FindProduct.image)
            
        }
    }, [FindProduct])
    useEffect(() => {
        //clean AvatarProduct
        return () => {
            avatarProduct && URL.revokeObjectURL(avatarProduct.preview)
            console.log(`successful Clean ${FindProduct.id}`);
        }
    }, [avatarProduct])
    const hanldeClickBack = () => {
        navigate('/ProductList')
    }

    return (
        <div className='EditProduct'>
            <div className='ProductUpdate'>
                <span className='userUpdateTitle'> Update Product</span>
                {FindProduct ? (
                    <form className='userUpdateForm' onSubmit={handleSubmit}>
                        <div className='userUpdateLeft'>
                            <div> <button className='custom-btn btn-10 userUpdateButton'>Update</button>
                                <button className='custom-btn btn-10 ' onClick={hanldeClickBack} >  Back </button></div>
                            <div className='ProductUpdateItem'>
                                {/* Url Link */}     
                                <input  className='ProductUpdateInput' placeholder={FindProduct.urlLink} value={urlLink} onChange={(e) => setUrlLink(e.target.value)} />
                            </div>

                            <div className='ProductUpdateItem'>
                                <label className='title_edit'>NameProduct:</label>
                                <input type='text'
                                    value={nameProduct}
                                    placeholder={FindProduct.nameProduct}
                                    onChange={(e) => setNameProduct(e.target.value)}
                                    className='ProductUpdateInput' />
                            </div>
                            <div className='ProductUpdateItem'>
                                <label className='title_edit'>Price:</label>
                                <input type='number'
                                    value={price}
                                    onChange={(e) => setPrice(e.target.value)}
                                    placeholder={FindProduct.price}
                                    className='ProductUpdateInput' />
                            </div>
                            <div className='ProductUpdateItem'>
                                <label className='title_edit'  >Total:</label>
                                <input type='number'
                                    value={total}
                                    placeholder={FindProduct.total}
                                    onChange={(e) => setTotal(e.target.value)}
                                    className='ProductUpdateInput' />
                            </div>
                            <div className='ProductUpdateItem'>
                                <label className='title_edit'>Rest:</label>
                                <input type='number'
                                    value={rest}
                                    placeholder={FindProduct.rest}
                                    onChange={(e) => setRest(e.target.value)}
                                    className='ProductUpdateInput' />
                            </div>
                            <div className='ProductUpdateItem'>
                                <label className='title_edit' >Detail:</label>
                                <textarea cols='50' rows='20' className='ProductUpdatedetail' placeholder={FindProduct.detail} value={detail} onChange={(e) => setDetail(e.target.value)}></textarea>

                            </div>
                        </div>
                        <div className='updatePro'>
                            <div className='updatePrpductImg'>
                              <img  className='ImageProduct ' src={urlLink} alt='url'/>
                                {/* {avatarProduct ? (<img className='ImageProduct ' src={avatarProduct.preview} alt={avatarProduct.id} />) : (<img className='ImageProduct ' src={FindProduct.image} alt={FindProduct.id} />)}
                                <label htmlFor='file'> <FcUpload className='userUpdateIcon' /></label>
                                <input type='file' id='file' style={{ display: 'none' }} onChange={hanldeChangeProductAvatar} /> */}
                            </div>
                        </div>
                    </form>
                ) : (<>
                    <h3 className="display-5 text-center ">
                        This id {id}  doesn't exist !
                    </h3>
                </>)}
            </div>
        </div >
    )
}

export default EditProduct