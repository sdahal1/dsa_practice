class GatheringEvent {
  constructor(name, startTime, endTime, location) {
    this.name = name;
    this.startTime = startTime;
    this.endTime = endTime;
    this.location = location;
  }
  // constructor(name='', attendees=[], startTime=0, locationName='', address='') {
    // let guests = null;
    // if (attendees.length === 1) {
    //   guests = attendees[0];
    // } else if (attendees.length > 1) {
    //   guests = `${attendees.length} attendees`;
    // }

    // this.name = guests ? `${name} with ${guests}` : name;
    // this.details = { startTime, attendees, groupSize: attendees.length };
    // this.location = { name: locationName, address };
  // }

  toString(){
    const { name, startTime, endTime, location } = this;
    return `${startTime} - ${endTime}: ${name} at ${location}`;
  }

  isBefore(otherEvent){
    return this.endHours < otherEvent.startHours ||
      (this.endHours === otherEvent.startHours && 
      this.endMinutes <= otherEvent.startMinutes)
    
  }

  get startHours() {
    return Number(this.startTime.split(":")[0]);
  }
  get startMinutes() {
    return Number(this.startTime.split(":")[1]);
  }
  get endHours() {
    return Number(this.endTime.split(":")[0]);
  }
  get endMinutes() {
    return Number(this.endTime.split(":")[1]);
  }
}

const event1 = new GatheringEvent("Lunch", "12:00", "13:00", "Lunch");
const event2 = new GatheringEvent("Dinner", "13:00", "14:00", "Dinner");


console.log(event1.toString())
console.log(event1.isBefore(event2))
console.log(event2.isBefore(event1))

/*
  Event {
    name: 'Dinner with Sal',
    details: { startTime: 1830, attendees: [ 'Sal' ], groupSize: 1 },
    location: { name: "Frankie's", address: '477 Rain St.' }
  }
*/