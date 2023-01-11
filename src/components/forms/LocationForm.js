import React from 'react';
import '../../css/newtravelform.css'

const LocationForm = () => {
  return (
    <>
        <form className='formbg'>
            <div>
                <label>Location: </label>
                <input type='text' required></input>
            </div>
            <div className='formDate'>
                <label>Date: </label>
                <input type='date' />
            </div>
            <div>
                <label>Description:    </label>
                <textarea type='text' />
            </div>
            <div>
                <label>Photos: </label>
                <input type='file'/>
            </div>
            <input type="submit" value="Submit"></input>
        </form>
    </>
  )
}

export default LocationForm