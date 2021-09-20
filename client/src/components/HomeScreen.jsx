import React, { useEffect } from 'react'
// import { useHistory } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { fetchHomePage } from '../store/index'
import moment from 'moment'

export default function CharacterList () {
  const dispatch = useDispatch()
  const listRoomUsage = useSelector((state) => state.roomsUsage)
  const loading = useSelector((state) => state.loading)
  const error = useSelector((state) => state.error)

  useEffect(() => {
    dispatch(fetchHomePage())
  }, [dispatch])
  
  function convertDate(date) {
    const changeFormatDate = moment(date).format('DD MMMM YYYY')
    return changeFormatDate
  }

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
        <h1 className="text-center my-5">Welcome</h1>
        <div className="row">
          <table className="table table-striped">
            <thead>
              <tr>
                <th scope="col">Client</th>
                <th scope="col">Room</th>
                <th scope="col">Start Time</th>
                <th scope="col">End Time</th>
                <th scope="col">Booking Date</th>
                <th scope="col">Quota</th>
              </tr>
            </thead>
            <tbody>
              {listRoomUsage.map(room => (
                <tr key={room.id}>
                  <td>{room.Client.name}</td>
                  <td>{room.Room.roomName}</td>
                  <td>{room.startTime}</td>
                  <td>{room.endTime}</td>
                  <td>{convertDate(room.bookingDate)}</td>
                  <td>{room.quotaUsed}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  )
}