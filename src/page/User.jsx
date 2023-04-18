import React, { useEffect, useState } from 'react'

export default function User() {
    const [User, setUser] = useState([]) 
  const fetchUser = () => {
    fetch("http://localhost:8000/api/alluser", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      
    })
    .then((response) => response.json())
    .then((response) => setUser(response));
  }
  useEffect(() => {
    fetchUser();
  },
  []
  
  );
  return (
    <div>
    <div className='  mt-5 text-black' >
        <table className=' border-black border-4 '>
          <thead className=' text-black fs-4 m-2 border-2 border-black'>
            <tr className='m-2 border-2 border-black'>
              <th className='border-2 border-black m-2' scope='col' >#</th>
              <th className='border-2 border-black m-2' scope='col' >Name</th>
              <th className='border-2 border-black m-2' scope='col' >Email</th>
              <th scope='col'>Status</th>
            </tr>
          </thead>
          <tbody className="text-black m-2 border-2 border-black">
            {User.map((user, index) => (
              <tr className='border-2 border-black'>
                <th className='border-2 border-black' scope='row' >{index + 1}</th>
                <td className='border-2 border-black' >{user.name}</td>
                <td className='border-2 border-black'>{user.email}</td>
              
                </tr>

            
            ))}
          </tbody>
        </table>
    </div>
    </div>
  )
}
