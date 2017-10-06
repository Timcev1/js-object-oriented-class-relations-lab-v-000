let store = {drivers: [], passengers: [], trips: []};
let driverId = 0;
class Driver{
  constructor(name){
    this.name = name
    this.id = ++driverId
  }
  trips(){
    return store.trips.filter(function(el, i , array){
      if (el.driverId === this.id){
        return el
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
