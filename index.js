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
        return trip.driverId == this.id
      }
    })
  }
  passengers(){
    let t = this.trips().filter(function(el, i , array){
      return el.passengerId
    })
    return t.map(function(el){
      return store.passengers.find(function(p){
        return el.passengerId === p.id
      })
    })
  }
}
