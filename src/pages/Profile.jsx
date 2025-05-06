// src/pages/Profile.jsx

import React from "react";
import { useAuth } from "../providers/AuthProvider";

const Profile = () => {
  const { user } = useAuth();

  if (!user) {
    return (
      <div className="text-center mt-20 text-xl text-gray-500">
        Please log in to view your profile.
      </div>
    );
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-base-200 p-6">
      <div className="card bg-white shadow-xl p-6 max-w-md w-full text-center">
        <div className="flex flex-col items-center">
          <img
            src={user.photoURL || "https://via.placeholder.com/100"}
            alt="User"
            className="w-24 h-24 rounded-full object-cover mb-4"
          />
          <h2 className="text-xl font-bold text-gray-800">
            {user.displayName || "No Name Provided"}
          </h2>
          <p className="text-gray-600">{user.email || "No Email Provided"}</p>
        </div>

        <div className="mt-6 text-left">
          <p><strong>UID:</strong> {user.uid}</p>
          <p><strong>Email Verified:</strong> {user.emailVerified ? "Yes" : "No"}</p>
          <p><strong>Provider:</strong> {user.providerId || "Unknown"}</p>
        </div>
      </div>
    </div>
  );
};

export default Profile;
