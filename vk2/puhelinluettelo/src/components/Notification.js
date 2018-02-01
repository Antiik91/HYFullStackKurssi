import React from 'react'

const Notification = ({message}) => {
  if(message === null) {
    return null
  }
  if(message.indexOf('error') !== -1) {
    return (
      <div className="fail">
        {message}
      </div>
    )
  }
  return (
    <div className="success">
      {message}
    </div>
  )
}
export default Notification
