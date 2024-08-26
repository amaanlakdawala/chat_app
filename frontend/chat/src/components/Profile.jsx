import React from 'react'
import { useSelector } from 'react-redux'
import useGetAllUsers from '../hooks/useGetAllUsers'



const Profile = () => {
    // useGetAllUsers()
    const {user} = useSelector(state=>state.auth)
  return (
    <>
    <div className="container mt-4">
            <div className="row justify-content-center">
                <div className="col-md-6">
                    <div className="card">
                        <div className="card-body text-center">
                            {/* Profile Picture */}
                            <img 
                                src={user?.profilePic || "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQttE9sxpEu1EoZgU2lUF_HtygNLCaz2rZYHg&s"} 
                                alt="Profile" 
                                className="img-fluid rounded-circle mb-3"
                                style={{ width: '150px', height: '150px', objectFit: 'cover' }} 
                            />
                            
                            
                            <h2 className="card-title mb-2">{user?.username}</h2>

                            
                            <p className="card-text">{user?.bio}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}

export default Profile