import React from 'react'
import '../../css/forms css/sightseeing.css'


const SightSeeingForm = () => {
  return (
    <>
        <form action='/UserProfile' method='POST' className='sight-seeing-bg'>
            <div>
                <label>Location: </label>
                <input type='text' required></input>
            </div>
            {/* <div className='formDate'>
                <label>Date: </label>
                <input type='date' />
            </div> */}
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

export default SightSeeingForm