import axios from 'axios';
import React, { useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

const UpdateProfile = () => {
  const { user } = useSelector((store) => store.auth);

  const [username, setUsername] = useState(user.username);
  const [bio, setBio] = useState(user?.bio);
  const [profilePic, setProfilePic] = useState(user?.profilePic);
  const imageRef = useRef();
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const fileChangeHandler = () => {
    const file = imageRef.current.files[0];
    if (file) setProfilePic(file);
  };

  const profileUpdated = async (e) => {
    e.preventDefault();
    try {
      const formData = new FormData();
      formData.append('username', username);
      formData.append('bio', bio);
      formData.append('profilePic', profilePic);  // Ensure profilePic is appended

      const res = await axios.post(
        'http://localhost:8000/api/v1/user/updateProfile',
        formData,
        {
          headers: {
            'Content-Type': 'multipart/form-data',
          },
          withCredentials: true,
        }
      );
      console.log("below is response")
      console.log(res)
      if(res.data.success){
        console.log("inside response")
        const updatedUser  = {
          ...user,
          bio:res.data.user?.bio,
          username:res.data.user?.username,
          profilePic:res.data.user?.profilePic
        }

        dispatch(setAuthUser(updatedUser))
        navigate(`/profile/${user._id}`)
      }

      console.log(res.data);  // Log the response data

    } catch (error) {
      console.log(error.response?.data);  // Log the error response
      console.log('Error in profile update');
    }
  };

  return (
    <>
      <form onSubmit={profileUpdated}>
        <label>Username</label>
        <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} />
        
        <label>Bio</label>
        <input type="text" value={bio} onChange={(e) => setBio(e.target.value)} />
        
        <label>Profile Pic</label>
        <input ref={imageRef} onChange={fileChangeHandler} type="file" className="hidden" />
        <button onClick={() => imageRef?.current.click()} className="bg-[#0095F6] h-8 hover:bg-[#318bc7]">
          Change photo
        </button>
        
        <button type="submit">Update Profile</button>
      </form>
    </>
  );
};

export default UpdateProfile;
