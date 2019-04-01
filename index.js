// Code your solution here:

function driversWithRevenueOver(arr, query) {
  return arr.filter(obj => obj["revenue"] > query)
}

function driverNamesWithRevenueOver(arr, query) {
  let result = driversWithRevenueOver(arr, query)
  return result.map(obj => obj['name'])
}

function exactMatch(arr, givenObj) {
  return arr.filter(obj => {
    return obj["name"] === givenObj["name"] || obj["revenue"] === givenObj["revenue"]
  })
}

function exactMatchToList(arr, givenObj) {
  let result = exactMatch(arr, givenObj)
  return result.map(obj => obj["name"])
}
