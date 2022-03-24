import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import '../../style/EditUser.css';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { FcManager } from 'react-icons/fc';
import { BsFillTelephoneFill } from 'react-icons/bs';
import { SiGmail } from 'react-icons/si';
import { GiEarthAmerica } from 'react-icons/gi';
import { BsCalendarDayFill } from 'react-icons/bs';
import { FaTransgender } from 'react-icons/fa';
import { FcUpload } from 'react-icons/fc';
import { update_user } from '../../../redux/Action';
import { toast } from 'react-toastify';



function EditUser() {

    const [avatar, setAvatar] = useState('');
    const [username, setUsername] = useState('');
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [address, setAddress] = useState('');
    const [gender, setGender] = useState('');
    const [age, setAge] = useState('');
    const [password, setPassword] = useState('');

    const navigate = useNavigate();
    const { id } = useParams();
    console.log(id);

    const dispatch = useDispatch();

    const editUsers = useSelector(state => state.contactReducer);
    console.log(editUsers);

    const findEditUser = editUsers.find(editUser => editUser.id == id)


    useEffect(() => {
        if (findEditUser) {

            setUsername(findEditUser.username);
            setName(findEditUser.name);
            setAge(findEditUser.age);
            setEmail(findEditUser.email);
            setAddress(findEditUser.address);
            setPhone(findEditUser.phone);
            setGender(findEditUser.gender);
            setPassword(findEditUser.password);
            setAvatar(findEditUser.avatar);
        }
    }, [findEditUser])

    const hanldeAvatar = (e) => {
        const avatar = e.target.files[0];
        avatar.preview = URL.createObjectURL(avatar)
        setAvatar(avatar)
        console.log(avatar.preview);

    }
    useEffect(() => {
        //clean
        return () => {
            avatar && URL.revokeObjectURL(avatar.preview)
            console.log('da clean');
        }
    }, [avatar])

    const data = {
        id,
        avatar,
        username,
        name,
        gender,
        age,
        email,
        phone,
        password,
        address,
    }

    const hanldeSbumit = (e) => {
        e.preventDefault();
        dispatch(update_user(data));
        navigate('/UserList')
        toast.success('Update successful !!')
        console.log(avatar);

    }

    return (
        <div>
            <div className='uer'>
                <div className='userTitleContainer'>
                    <h1 className='userTitle'>Edit User</h1>
                </div>
                <Link to='/UserList'>
                    <button className='custom-btn btn-10'>Back</button>
                </Link>
                {findEditUser ? (
                    <div className='unserContainer' onSubmit={hanldeSbumit}>
                        <div className='userShow'>
                            <div className='userShowTop'>
                                <img src={findEditUser.avatar} alt={findEditUser.name}
                                    className='userShowImg'
                                />
                                <div className='userShowTopTitle'>
                                    <span className='userShowUsername'> {findEditUser.name} </span>
                                </div>
                            </div>
                            <div className='userShowBottom'>
                                <span className='userShowTitle' > Account Details</span>
                                <div className='userShowInfor'>
                                    <i className="fas fa-user userShowIcon "></i>
                                    <FcManager />  <span className='userShowInforTitle'>{findEditUser.username}</span>
                                </div>
                                <div className='userShowInfor'>
                                    <i className="fas fa-calendar-day  userShowIcon"></i>
                                    <FaTransgender />  <span className='userShowInforTitle'>{findEditUser.gender}</span>
                                </div>
                                <div className='userShowInfor'>
                                    <i className="fas fa-calendar-day  userShowIcon"></i>
                                    <BsCalendarDayFill />  <span className='userShowInforTitle'>{findEditUser.age}</span>
                                </div>
                                <span className='userShowTitle' > Contact Details</span>
                                <div className='userShowInfor'>
                                    <i className="fas fa-phone-square-alt userShowIcon "></i>
                                    <BsFillTelephoneFill /> <span className='userShowInforTitle'> {findEditUser.phone}</span>
                                </div>
                                <div className='userShowInfor'>
                                    <i className="fas fa-envelope userShowIcon "></i>
                                    <SiGmail /><span className='userShowInforTitle'> {findEditUser.email}</span>
                                </div>
                                <div className='userShowInfor'>
                                    <i className="fas fa-globe-asia "></i>
                                    <GiEarthAmerica /> <span className='userShowInforTitle'>  {findEditUser.address}</span>
                                </div>
                            </div>
                        </div>
                        <div className='userUpdate'>
                            <span className='userUpdateTitle'> Edit</span>
                            <form className='userUpdateForm'>
                                <div className='userUpdateLeft'>
                                    <div className='userUpdateItem'>
                                        <label className='title_edit'>UserName:</label>
                                        <input type='tex'
                                            value={username}
                                            placeholder={findEditUser.username}
                                            onChange={(e) => setUsername(e.target.value)}
                                            className='userUpdateInput' />
                                    </div>
                                    <div className='userUpdateItem'>
                                        <label className='title_edit'>FullName:</label>
                                        <input type='tex'
                                            value={name}
                                            placeholder={findEditUser.name}
                                            onChange={(e) => setName(e.target.value)}
                                            className='userUpdateInput' />
                                    </div>
                                    <div className='userUpdateItem'>
                                        <label className='title_edit'  >Age:</label>
                                        <input type='tex'
                                            value={age}
                                            placeholder={findEditUser.age}
                                            onChange={(e) => setAge(e.target.value)}
                                            className='userUpdateInput' />
                                    </div>
                                    <div className='userUpdateItem'>
                                        <label className='title_edit'>Email:</label>
                                        <input type='tex'
                                            value={email}
                                            onChange={(e) => setEmail(e.target.value)}
                                            placeholder={findEditUser.email}
                                            className='userUpdateInput' />
                                    </div>
                                    <div className='userUpdateItem'>
                                        <label className='title_edit' >Phone:</label>
                                        <input type='tex'
                                            value={phone}
                                            onChange={(e) => setPhone(e.target.value)}
                                            placeholder={findEditUser.phone}
                                            className='userUpdateInput' />
                                    </div>
                                    <div className='userUpdateItem'>
                                        <label className='title_edit'>Address:</label>
                                        <input type='tex'
                                            value={address}
                                            onChange={(e) => setAddress(e.target.value)}
                                            placeholder={findEditUser.address}
                                            className='userUpdateInput' />
                                    </div>
                                    <div className='userUpdateItem'>
                                        <label className='title_edit'>Gender:</label>
                                        <select className='userUpdateInput' name='Gender' id='active' value={gender} onChange={(e) => setGender(e.target.value)} >
                                            <option value='Male'>Male</option>
                                            <option value='Female'>Female</option>
                                        </select>
                                    </div>
                                </div>
                                <div className='userUpdateRight'>
                                    <div className='userUpdateUpload'>
                                       <img className='userUpdateImg' src={avatar} alt={findEditUser.name} />
                                        <label htmlFor='file'> <FcUpload className='userUpdateIcon' /></label>
                                        <input type='file' id='file' style={{ display: 'none' }} onChange={hanldeAvatar} />
                                    </div>
                                    <button className='custom-btn btn-10 userUpdateButton'>Update</button>
                                </div>
                            </form>
                        </div>
                    </div>) : (<>
                        <h3 className="display-5 text-center ">
                            This id {id}  doesn't exist !
                        </h3>
                    </>
                )}
            </div>
        </div>
    )
}

export default EditUser