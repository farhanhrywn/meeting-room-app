import React, { useEffect } from 'react'
// import { useHistory } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { fetchAllClient } from '../store/index'

export default function ClientScreen () {
  const dispatch = useDispatch()
  const clients = useSelector((state) => state.clients)
  const loading = useSelector((state) => state.loading)
  const error = useSelector((state) => state.error)

  useEffect(() => {
    dispatch(fetchAllClient())
  }, [dispatch])
  

  if(loading) return (
    <>
      <div className="container text-center mt-5">
        <h1>Loading....</h1>
      </div>
    </>
  )

  if(error) return (
    <>
      <div className="container text-center mt-5">
        <h1>Sorry Page Not Found</h1>
      </div>
    </>
  )

  return (
    <>
      <div className="container">
        <h1 className="text-center my-5">Client List</h1>
        <div className="row">
          <table className="table table-striped">
            <thead>
              <tr>
                <th scope="col">Name</th>
                <th scope="col">Email</th>
                <th scope="col">Phone</th>
                <th scope="col">Credit</th>
              </tr>
            </thead>
            <tbody>
              {clients.map(client => (
                <tr key={client.id}>
                  <td>{client.name}</td>
                  <td>{client.email}</td>
                  <td>{client.phone}</td>
                  <td>{client.credit}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  )
}