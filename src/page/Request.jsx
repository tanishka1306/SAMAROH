import React, { useEffect, useState } from 'react'

export default function Request() {
    const [requests, setRequest] = useState([]) 
  const fetchRequest = () => {
    fetch("http://localhost:8000/api/allrequest", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      
    })
    .then((response) => response.json())
    .then((response) => setRequest(response));
  }
  useEffect(() => {
    fetchRequest();
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
              <th className='border-2 border-black m-2' scope='col' >Event Type</th>
              <th className='border-2 border-black m-2' scope='col' >Venue</th>
              <th className='border-2 border-black m-2' scope='col' >From Date</th>
              <th className='border-2 border-black m-2' scope='col' >to Date</th>


              <th scope='col'>Status</th>
            </tr>
          </thead>
          <tbody className="text-black m-2 border-2 border-black">
            {requests.map((request, index) => (
              <tr className='border-2 border-black'>
                <th className='border-2 border-black' scope='row' >{index+1}</th>
                <td className='border-2 border-black'>{request.request_data[0].name}</td>
                <td className='border-2 border-black'>{request.email}</td>
                <td className='border-2 border-black'>{request.request_data[0].event_type}</td>
                <td className='border-2 border-black'>{request.request_data[0].venue}</td>
                <td className='border-2 border-black'>{request.request_data[0].dateI}</td>
                <td className='border-2 border-black'>{request.request_data[0].dateF}</td>
                <td><button className='border-2 border-l-gray-900  bg-lime-600 hover:bg-lime-200 duration-300'>Approve</button></td>
                <td><button className='border-2 border-l-gray-900  bg-red-600 hover:bg-red-400 duration-300'>Decline</button></td>
                </tr>

               
            ))}
          </tbody>
        </table>
    </div>
    </div>
  )
}
