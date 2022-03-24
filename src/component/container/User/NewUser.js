import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import '../../style/NewUser.css'
import { useDispatch, useSelector } from 'react-redux';
import { add_user } from '../../../redux/Action';
import { FcUpload } from 'react-icons/fc'
import { toast } from 'react-toastify';

function NewUser() {
    const [avatar, setAvatar] = useState('');
    const [username, setUsername] = useState('');
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [phone, setPhone] = useState('');
    const [address, setAddress] = useState('');
    const [gender, setGender] = useState('male');
    const [age, setAge] = useState('');

    const addUser = useSelector(state => state.contactReducer);
    const dispatch = useDispatch()

    const navigate = useNavigate();
    const hanldeClick = () => {
        navigate('/UserList')
    }
    const data = {
        id: addUser.length + 1,
        avatar,
        username,
        name,
        gender,
        age,
        email,
        password,
        phone,
        address,

    }
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
    const hanldeSubmit = (e) => {
        if(!username ||!name ||!gender ||!age ||!email ||!password ||!phone||!address ){
            return(toast.warning(`Please enter full information !!!`))
        }
        if(!regex.test(email)){
            return(toast.warning(`Please enter correct email format (...@gmail.com) !!!`))

        }
        if(phone.length > 10 || phone.length < 10 ){
            return(toast.warning(`Please enter the correct phone number format (10 numbers) !!!`))

        }

        e.preventDefault();
        dispatch(add_user(data));
        navigate('/UserList');
        toast.success('Successfully added new user !!')
       
    }


    const hanldeChangeImg = (e) => {
        const file = e.target.files[0];
        file.preview = URL.createObjectURL(file);
        setAvatar(file);
        console.log(file.preview);
    }

    useEffect(() => {
        //clean
        return () => {
            avatar && URL.revokeObjectURL(avatar.preview)
        }
    }, [avatar])


    return (
        <div>
            <div className='newUserHome'>
                <div className='newUser'>
                    <h1 className='newUserTitle'>New User</h1>
                    <div className='newUserItem'>
                        <label>Avatar</label>
                        <div className='userUpdateRight'>
                            <div className='userUpdateUpload'>
                                {avatar ? (<img className='userUpdateImg' src={avatar.preview} alt='' />) : (<img className='userUpdateImg' src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSGjCy-bIjoj2TKuAddWLbl_gAQoykjidUqqKIIhsFYeEEnzt3kxi3jzVvfVkt0Wl7TTRw&usqp=CAU' />)}
                                <label htmlFor='file'> <FcUpload className='upAvatarIcon' /></label>
                                <input type='file' id='file' style={{ display: 'none' }} onChange={hanldeChangeImg} />
                            </div>
                        </div>
                    </div>
                    <form className='newUserForm' >
                        <div className='newUserItem'>
                            <label>UserName</label>
                            <input type='text' placeholder='Enter your username' value={username} onChange={(e) => setUsername(e.target.value)} />
                        </div>
                        <div className='newUserItem'>
                            <label>Full Name</label>
                            <input type='text' placeholder='Enter your name' value={name} onChange={(e) => setName(e.target.value)} />
                        </div>
                        <div className='newUserItem'>
                            <label>Email</label>
                            <input type='email' placeholder='Email' value={email} onChange={(e) => setEmail(e.target.value)} />
                        </div>
                        <div className='newUserItem'>
                            <label>Password</label>
                            <input type='password' placeholder='Password' value={password} onChange={(e) => setPassword(e.target.value)} />
                        </div>
                        <div className='newUserItem'>
                            <label>Phone</label>
                            <input type='text' placeholder='+84 (00 000 000)' value={phone} onChange={(e) => setPhone(e.target.value)} />
                        </div>
                        <div className='newUserItem'>
                            <label>Age</label>
                            <input type='text' placeholder='Age' value={age} onChange={(e) => setAge(e.target.value)} />
                        </div>

                        <div className='newUserItem'>
                            <label>Gender</label>
                            <select className='newUserSelect' name='Gender' id='active' value={gender} onChange={(e) => setGender(e.target.value)} >
                                <option value='Male'>Male</option>
                                <option value='Female'>Female</option>
                            </select>
                        </div>
                        <div className='newUserItem'>
                            <label>Address</label>
                            <input type='text' placeholder='Address' value={address} onChange={(e) => setAddress(e.target.value)} />
                        </div>

                    </form>

                    <button className='custom-btn btn-10 create' onClick={hanldeSubmit}>Create</button>
                    <button className='custom-btn btn-10 ' onClick={hanldeClick} >  Back </button>

                </div>
            </div>

        </div>
    )
}

export default NewUser