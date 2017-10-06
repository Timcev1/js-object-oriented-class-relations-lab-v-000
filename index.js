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
    }.bind(this))
  }
}
