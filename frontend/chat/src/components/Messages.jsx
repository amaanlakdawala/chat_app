import React from 'react'
import useGetAllUsers from '../hooks/useGetAllUsers'
import { useSelector } from 'react-redux';

function Messages() {
    useGetAllUsers();
    const {allUsers} = useSelector(state => state.auth);

  return (
    <>
     <div className="container mt-4">
            <div className="row">
                {allUsers.map((user, index) => (
                    <div key={index} className="col-md-4 mb-4">
                        <div className="card">
                            <img 
                                src={user?.profilePic || "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQttE9sxpEu1EoZgU2lUF_HtygNLCaz2rZYHg&s"} 
                                alt={user?.name || 'User Profile'} 
                                className="card-img-top"
                                style={{ height: '200px', objectFit: 'cover' }} 
                            />
                            <div className="card-body">
                                <h5 className="card-title">{user?.username}</h5>
                                <p className="card-text">{user?.bio}</p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
     {/* {
        allUsers.map((user,index)=>(
            <div key={index}>
                {
                    user.profilePic ?  (<img src={user?.profilePic} alt="" />)
                     : (<img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQttE9sxpEu1EoZgU2lUF_HtygNLCaz2rZYHg&s"
                         alt="" />)
                }
               
                <h2>{user?.name}</h2>
                <p>{user?.bio}</p>

            </div>
        ))
       

        
    } */}
    
    </>
   
    
  )
}

export default Messages