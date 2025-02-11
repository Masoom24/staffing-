import React from 'react'

const Profile = () => {
  return (
    <div>
      <div className="dropdown dropdown-end">
            <button className="btn btn-ghost btn-circle avatar mr-4">
              <div className="w-20 rounded-md">
                <img
                  alt="Profile"
                  src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
                />
              </div>
            </button>
            <ul className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
              <div className="flex items-center gap-2 mb-2">
                <img
                  alt="Profile"
                  className="w-15 rounded"
                  src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
                />
                <div>
                  <h1 className="font-bold">Ghamesh Rahangdale</h1>
                  <p>Experienced</p>
                </div>
              </div>
              <li>
                <a className="justify-between">
                  Profile
                  <span className="badge">New</span>
                </a>
              </li>
              <li>
                <a>Change Password</a>
              </li>
              <li>
                <a>Logout</a>
              </li>
            </ul>
          </div>
    </div>
  )
}

export default Profile
