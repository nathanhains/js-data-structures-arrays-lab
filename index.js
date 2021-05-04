let drivers = ["Milo", "Otis", "Garfield"]
function destructivelyAppendDriver(name) {
    drivers.push(name)
  }
  function destructivelyPrependDriver(name) {
    drivers.unshift(name)
  }
  function destructivelyRemoveLastDriver(name) {
    drivers.pop(name)
  }
  function destructivelyRemoveFirstDriver(name) {
    drivers.shift(name)
  }
  function appendDriver(name) {
    let newDrivers = [...drivers, `${name}`];
    return newDrivers
  }
  function prependDriver(name) {
    let newDrivers = [`${name}`, ...drivers];
    return newDrivers
  }
  function removeLastDriver(name) {
    let newDrivers = drivers.slice(0,2);
    return newDrivers
  }
  function removeFirstDriver(name) {
    let newDrivers = drivers.slice(1);
    return newDrivers
  }

