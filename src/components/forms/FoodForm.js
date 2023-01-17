import React from 'react'
import '../../css/forms css/foodform.css'


const FoodForm = () => {
  return (
    <>
    <form action='/UserProfile' method='POST' enctype="multipart/form-data" className='food-bg'>
        <div>
            <label>Name of Restaurant: </label>
            <input type='text' required></input>
        </div>
        <div>
            <label>Food Ordered: </label>
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

export default FoodForm