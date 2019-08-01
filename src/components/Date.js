import React, { useState } from 'react';

export default function () {
  const [date, setDate] = useState(new Date());

  setInterval(() => {
    setDate(new Date())
  }, 1000)

  return <div>{date.toTimeString()}</div>
}