import React from 'react'

function ProfileCard({name, path}) {
  return (
    <div className="flex flex-col items-center p-4 border rounded-lg shadow-lg w-56">
    <img src={path} alt={`${name}'s profile`} className="rounded-full mb-4 w-24 h-24 object-cover" />
    <h2 className="text-xl font-semibold text-center">{name}</h2>
  </div>
  )
}

export default ProfileCard