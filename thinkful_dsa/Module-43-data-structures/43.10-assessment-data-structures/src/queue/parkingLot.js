const Queue = require("../queue/queue");

/**
 * Implement a Parking Lot.
 *
 */
class ParkingLot {
  constructor(capacity, rate) {
    this.spaces = new Array(capacity).fill("vacant");
    this.rate = rate;
    this.revenue = 0;
    this.queue = new Queue();
  }

  /**
   * Returns the number of vacant parking spaces
   * @returns {Number}
   *  the total number of spaces where the value is "vacant".
   */

  get vacantSpaces() {
    return this.spaces.reduce(
      (sum, space, index) => sum + (space === "vacant" ? 1 : 0),
      0
    );
  }

  /**
   * As cars enter the parking lot, the license plate number is entered and the car is parked in the first vacant space.
   * If the lot is full, the car is added to the queue to be parked when a spot is available.
   *
   * @param licensePlateNumber
   *  the license plate number of the car entering
   */
  enter(licensePlateNumber) {
    // console.log("********", this.vacantSpaces)
    if(this.vacantSpaces > 0){
      //find the first vacant space
      const indexOfFirstVacantSpace = this.spaces.findIndex((element,idx)=>{
        return element === 'vacant';
      })
      this.spaces[indexOfFirstVacantSpace] = licensePlateNumber;
    }else{
      //add to queue
      this.queue.enqueue(licensePlateNumber)
    }
    return this;
  }

  /**
   * As a car leaves the parking lot, or the queue, the leave method is called with the license plate number of the car leaving.
   * @param licensePlateNumber
   *    *  the license plate number of the car leaving.
   */
  leave(licensePlateNumber) {
    let indexOfLeavingCar = this.spaces.findIndex(carId=>carId===licensePlateNumber);
    if(indexOfLeavingCar>=0){
      this.spaces[indexOfLeavingCar] = 'vacant';
      if(!this.queue.isEmpty()){
        this.spaces[indexOfLeavingCar] = this.queue.dequeue();
      }
      this.revenue += this.rate;
      return this;
    }
    if(!this.queue.first) return this;
    //check if the car is in the queue, if so, remove it from the queue
    if(this.queue.peek() === licensePlateNumber) {
      this.queue.dequeue();
    }else{
      let runner = this.queue.first;
      while(runner.next){
        if(runner.next.value === licensePlateNumber){
          runner.next = runner.next.next;
          return this;
        }
        runner = runner.next;
      }
    }
    return this;
  }

  /**
   * Lists each space in the parking lot along with the license plate number of the car parked there, or
   * "vacant" as the license plate if the spot is vacant.
   * @returns {{licensePlateNumber: string, space: Number}[]}
   */
  get occupants() {
    return this.spaces.map((licensePlateNumber, index) => ({
      space: index + 1,
      licensePlateNumber,
    }));
  }

  /**
   * The total cumulative revenue for the parking lot. The parking rate is paid when the car leaves, it does not matter how long the car stays in the spot.
   * @returns {number}
   *  the total revenue for the parking lot.
   */
  get totalRevenue() {
    return this.revenue;
  }
}

module.exports = ParkingLot;
