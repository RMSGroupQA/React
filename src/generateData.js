import faker from 'faker'
import randomColor from 'randomcolor'
import moment from 'moment'
import axios from "axios"
import React, { Component } from 'react';


export default function (groupCount = 11, itemCount = 1, daysInPast = 30) 
{
  let randomSeed = Math.floor(Math.random() * 1000)
  let groups = []

let now = new Date;
console.log("dwadawdaw")


let info = ''
    // {bookingID:'1', room:"5", employee:"John", startTime:"2019-04-03T15:19:11.005Z", endTime:"2019-04-04T17:30:00.005Z", numberOfPeople:'1', title:"Test Name", description:"This is a desc"};

  let items = []
  for (let i = 0; i < itemCount; i++) {
  
    let i = 0;
  
    let startDate = now
  
    axios.get('http://localhost:8081/getters/readBooking/' + 1)
    .then(response => {
      console.log(response.data)

      info = response.data;
      console.log(info);
      console.log(info.startTime)
      console.log("B4 Push" + info.endTime)
      items.push({
        id: i,
        group: info.room,
        title: info.title,
        start: new Date(info.startTime),
        end: new Date(info.endTime),
        className: (moment(startDate).day() === 6 || moment(startDate).day() === 0) ? 'item-weekend' : '',
        itemProps: {
          'data-tip': faker.hacker.phrase()
        }
        
      })
      console.log("B4 Last " + info);
    }); 

    for (let i = 0; i < groupCount; i++) {
      console.log("3ST " + info);
      groups.push({
        id: `${i + 1}`,
        title: 'Room' + (i+1),
        bgColor: randomColor({ luminosity: 'light', seed: randomSeed + i })
      })     
    } console.log("1ST " + info);

    console.log("Last "+ info);
  }

  items = items.sort((a, b) => b - a)

  return { groups, items }
}
