import React from 'react';
import { useParams } from 'react-router-dom';

const ShowCountry = () => {

  const {name} = useParams()
  console.log(name)
  return (
    <div>ShowCountry</div>
  )
}

export default ShowCountry