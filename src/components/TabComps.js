import { Tab, Tabs, TabList, TabPanel } from 'react-tabs'
import 'react-tabs/style/react-tabs.css';
import React from 'react'
import LocationForm from './forms/LocationForm';
import HotelForm from './forms/HotelForm';
import SightSeeingForm from './forms/SightSeeingForm';
import FoodForm from './forms/FoodForm';



const TabComps = () => {
  return (
    <>
      <Tabs>
        <TabList>
          <Tab>Location</Tab>
          <Tab>Hotel</Tab>
          <Tab>Sight Seeing</Tab>
          <Tab>Night Life</Tab>
          <Tab>Food</Tab>
        </TabList>
    
        <TabPanel>
          <h2>Where Did You Go?</h2>
          <LocationForm />
        </TabPanel>
        <TabPanel>
          <h2>What Was The Hotel Like?</h2>
          <HotelForm />
        </TabPanel>
        <TabPanel>
          <h2>Tell Us All About The Sights!</h2>
          <SightSeeingForm />
        </TabPanel>
        <TabPanel>
          <h2>How Was The Night Life?</h2>
        </TabPanel>
        <TabPanel>
          <h2>Let's Talk About The Food!</h2>
          <FoodForm />
        </TabPanel>

      </Tabs>
    </>
  )
}

export default TabComps


        /* <Tab>Sight Seeing</Tab>
        <Tab>Night Life</Tab>
        <Tab>Food</Tab>
        <Tab>Activities</Tab> */
