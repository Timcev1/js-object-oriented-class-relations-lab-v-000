let store = {drivers: [], passengers: [], trips: []};
let driverId = 0;
class Driver{
  constructor(name){
    this.name = name
    this.id = ++driverId
    store.drivers.push(this)
  }
  trips(){
    return store.trips.filter(function(trip){
        return trip.driverId == this.id
      })
  }
  passengers(){
    return this.trips().map(function(trip){
      return trip.passenger()
    })
  }
}

passengerId = 0
class Passenger{
  constructor(name){
    this.name = name
    this.id = ++passengerId
    store.passengers.push(this)
  }
  trips(){
     return store.trips.filter(function(trip) {
       return trip.passengerId == this.id
     })
   }
   drivers(){
     return this.trips().map(function(trip) {
       return trip.driver()
     })
   }
}

let tripId = 0
class Trip {
  constructor(driver, passenger){
    this.driverId = driverId;
    this.passengerId = passengerId;
    this.id = ++tripId
    store.trips.push(this)
    }
    driver(){
      store.drivers.find(function(driver){
        return passenger.id === this.passengerId
      })
    }
    passenger(){
      return store.passenger.find(function(passenger){
        return passenger.id === this.passengerId
      })
    }
}
