import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useHistory } from 'react-router-dom'
// import Swal from 'sweetalert2'
// import { useFetchById } from '../Hooks/useFetch'
import { fetchAllClient, fetchAllRoom, createRoomUsage } from '../store/index'

export default function RoomUsage () {
  const clients = useSelector((state) => state.clients) 
  const rooms = useSelector((state) => state.rooms)
  const dispatch = useDispatch()
  const history = useHistory()
  const loading = useSelector((state) => state.loading)
  const [clientId, setClientId] = useState(0)
  const [roomId, setRoomId] = useState(0)
  const [startTime, setStartTime] = useState('')
  const [endTime, setEndTime] = useState('')
  const [bookingDate, setBookingDate] = useState(null)
  const [quota, setQuota] = useState(0)

  useEffect(() => {
    dispatch(fetchAllClient())
    dispatch(fetchAllRoom())
  }, [dispatch])

  const saveBookingInformation = (evt) => {
      evt.preventDefault()
      const data = {
        clientId,
        roomId,
        startTime,
        endTime,
        bookingDate,
        quotaUsed: quota
      }
      dispatch(createRoomUsage(data))
      history.push('/')
  }

  const handleClientChange = (event) => {
    setClientId(+event.target.value)
  }

  const handleRoomChange = (event) => {
    setRoomId(+event.target.value)
  }

  const handleStartTimeChange = (event) => {
    setStartTime(event.target.value)
  }

  const handleEndTimeChange = (event) => {
    setEndTime(event.target.value)
  }

  const handleBookingDateChange = (event) => {
    setBookingDate(event.target.value)
  }

  const handleQuotaChange = (event) => {
    setQuota(+event.target.value)
  }
  
  if(loading) return (
    <>
      <div className="container text-center mt-5">
        <h1>Loading....</h1>
      </div>
    </>
  )


  return (
    <>
      <div className="container my-5">
        <h1 className="text-center my-5">Add New Room Usage</h1>
        <form onSubmit={saveBookingInformation}>
          <div className="form-group">
            <label for="formGroupExampleInput">Client</label>
            <br />
            <select className="form-control" onChange={handleClientChange}>
                <option value='0' selected>Choose..</option>
              {
                clients.map(client => (
                  <option value={client.id}>{client.name}</option>
                ))
              }
              </select>
          </div>
          <div className="form-group">
            <label for="formGroupExampleInput2">Room</label>
            <br />
            <select className="form-control" onChange={handleRoomChange}>
                <option value="0" selected>Choose..</option>
              {
                rooms.map(room => (
                  <option value={room.id}>{room.roomName}</option>
                ))
              }
              </select>
          </div>
          <div className="form-row">
            <div className="form-group col-md-6">
              <label for="inputEmail4">Start Time</label>
              <input type="time" className="form-control" onChange={handleStartTimeChange}/>
            </div>
            <div className="form-group col-md-6">
              <label for="inputPassword4">End Time</label>
              <input type="time" className="form-control" onChange={handleEndTimeChange}/>
            </div>
          </div>
          <div className="form-group">
            <label for="formGroupExampleInput2">Booking Date</label>
            <input type="date" className="form-control" onChange={handleBookingDateChange}/>
          </div>
          <div className="form-group">
            <label for="formGroupExampleInput2">Quota</label>
            <input type="number" className="form-control" onChange={handleQuotaChange}/>
          </div>
          <button type="submit" className="btn btn-primary btn-lg btn-block">Submit</button>
        </form>
      </div>
    </>
  )
}