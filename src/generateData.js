import faker from 'faker'
import randomColor from 'randomcolor'
import moment from 'moment'
import axios from "axios"
import React, { Component } from 'react';


export default function (groupCount = 11, itemCount = 10, daysInPast = 30) 
{
  let info = {bookingID:'1', room:"5", employee:"John", startTime:"2019-04-03T15:19:11.005Z", endTime:"2019-04-04T17:30:00.005Z", numberOfPeople:'1', title:"Test Name", description:"This is a desc"};

  let i = 0;

  axios.get('http://51.141.6.150:8081/readBooking/' + 1)
  .then(response => {
    info = response.data;
    console.log(info);
  }); 

  let randomSeed = Math.floor(Math.random() * 1000)
  let groups = []
  for (let i = 0; i < groupCount; i++) {
    groups.push({
      id: `${i + 1}`,
      title: 'Room' + (i+1),
      bgColor: randomColor({ luminosity: 'light', seed: randomSeed + i })
    })
  }

let now = new Date;
  
  let items = []
  for (let i = 0; i < itemCount; i++) {

    let startDate = now
    let bookingTitle = info.title
    let groupname = info.room
    let startValue = new Date(info.startTime)
    let endValue = new Date(info.endTime)
    
    items.push({
      id: i + '',
      group: groupname,
      title: bookingTitle,
      start: startValue,
      end: endValue,
      className: (moment(startDate).day() === 6 || moment(startDate).day() === 0) ? 'item-weekend' : '',
      itemProps: {
        'data-tip': faker.hacker.phrase()
      }
    })
  }

  items = items.sort((a, b) => b - a)

  return { groups, items }
}
