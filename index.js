let store = {drivers: [], passengers: [], trips: []};
let driverId = 0;
class Driver{
  constructor(name){
    this.name = name
    this.id = ++driverId
    store.drivers.push(this)
  }
  trips(){
    return store.trips.filter(function(trips){
        return trips.driverId == this.id
      })
  }
  passengers(){
    return this.trips().map(function(trips){
      return trips.passenger()
    })
  }
}
passangerid = 0
class Passenger{
  constructor(name){
    this.name = name
    this.id = ++passangerid
  }
}