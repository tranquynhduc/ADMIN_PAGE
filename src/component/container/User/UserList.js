
import React from 'react';
import { AiOutlineUserAdd } from 'react-icons/ai';
import { GrUpdate } from 'react-icons/gr';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';
import { delete_user } from '../../../redux/Action';
import '../../style/UserList.css';


function UserList() {

  const dispatch = useDispatch();
  const addUsers = useSelector(state => state.contactReducer);
 

  const handleDeleteItem = (id) => {
    dispatch(delete_user(id)) ;
    toast.success('Successful delete !!');

  }
  return (
    <div className="UserList">
      <div className="User_row">
        <div className='User_Add' >
          <Link to='/NewUser' className="btn-user" > <AiOutlineUserAdd /> Add User </Link>
        </div>
        <h2 className='header'> List of Users: </h2>
        <table>
          <thead>
            <tr>
              <th scope="col">Number</th>
              <th scope="col">Avatar</th>
              <th scope="col">UserName</th>
              <th scope="col">Name</th>
              <th scope="col">Gender</th>
              <th scope="col">Birth Date</th>
              <th scope="col">Phone</th>
              <th scope="col">Email</th>
              <th scope="col">Address</th>
             {/*  <th scope="col">Password</th> */}
              <th scope="col"><GrUpdate /></th>
            </tr>
          </thead>
          <tbody>
         
            {addUsers.map(addUser => {
              const { id, 
                avatar,
                username,
                name,
                gender,
                age,
                phone,
                email,
                address,
                password
              } = addUser

              return (
                <tr className="table-active" key={id}>
                  <th scope="row" align="center">{id}</th>
                  <td><img src={avatar} className='topAvatar' alt={id} /></td>
                  <td>{username}</td>
                  <td>{name}</td>
                  <td>{gender}</td>
                  <td >{age}</td>
                  <td>{phone}</td>  
                  <td>{email}</td>
                  <td>{address}</td>
                 {/*  <td>{password}</td> */}
                  <td >
                    <Link to={`/EditUser/${id}`}><button className="custom-btn btn-15">Edit</button></Link>
                    <button className="custom-btn btn-13" onClick={() => handleDeleteItem(id)}>Delete</button>
                  </td>
                </tr>
              ) 
            })}
            
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default UserList