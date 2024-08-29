import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import '../assets/styling/LeftSideBar.css'

function LeftSideBar() {
  const list = ['Home','Messages', 'Profile', 'Update Profile'];
  const { user } = useSelector(store => store.auth);

  return (
    <div className="d-flex flex-column align-items-center p-3 custom-sidebar">
    {/* Profile Picture */}
    <div className="mb-3 profile-pic-container">
      {user?.profilePic ? (
        <img
          src={user?.profilePic}
          alt="Profile"
          className="img-fluid rounded-circle animated-profile-pic"
          style={{ width: '100px', height: '100px', objectFit: 'cover' }}
        />
      ) : (
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQttE9sxpEu1EoZgU2lUF_HtygNLCaz2rZYHg&s"
          alt="Default Profile"
          className="img-fluid rounded-circle animated-profile-pic"
          style={{ width: '100px', height: '100px', objectFit: 'cover' }}
        />
      )}
    </div>
  
    {/* Username */}
    <h5 className="text-center mb-4 text-white">Hello, {user?.username}</h5>
  
    {/* Links */}
    <div className="w-100">
      {list.map((item, index) => {
        let linkPath = '';
  
        switch (item) {
          case 'Home':
            linkPath = `/`;
            break;
          case 'Profile':
            linkPath = `profile/${user?._id}`;
            break;
          case 'Update Profile':
            linkPath =`update_profile/${user?._id}`;
            break;
          case 'Messages':
            linkPath =`messagedUsers`;
            break;
          default:
            linkPath = '#'; // Default link if item doesn't match any case
        }
  
        return (
          <div key={index} className="mb-2">
            <Link to={linkPath} className="btn custom-link w-100 text-start">
              {item}
            </Link>
          </div>
        );
      })}
    </div>
  </div>
  );
}

export default LeftSideBar;
