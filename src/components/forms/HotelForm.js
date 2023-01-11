import React from 'react'
import '../../css/newtravelform.css'



const HotelForm = () => {
  return (
    <>
        <form className='formbg'>
            <div>
                <label>Name of Hotel: </label>
                <input type='text' required></input>
            </div>
            <div className='formDate'>
                <label>Days of Stay: </label>
                <input type='date' />
            </div>
            <div>
                <label>Description: </label>
                <textarea type='text' />
            </div>
            <div>
                <label>Amenities: </label><br/>
                <input type="checkbox" id="amenity1" name="amenity1" value="Pool"/>
                <label for="vehicle1"> Swimming Pool</label><br/>
                <input type="checkbox" id="amenity2" name="amenity2" value="Wifi"/>
                <label for="vehicle2"> Wifi</label><br/>
                <input type="checkbox" id="amenity3" name="amenity3" value="PetFriendly"/>
                <label for="vehicle3"> Pet Friendly</label><br/>
                <input type="checkbox" id="amenity4" name="amenity4" value="ContinentalBreakfast"/>
                <label for="vehicle3"> Continental Breakfast</label><br/>
                <input type="checkbox" id="amenity5" name="amenity5" value="fitnesscenter"/>
                <label for="vehicle3"> Fitness Center</label><br/>
                <input type="checkbox" id="amenity6" name="amenity6" value="CoveredParking"/>
                <label for="vehicle3"> Covered Parking</label><br/>
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

export default HotelForm