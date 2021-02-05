function distanceFromHqInBlocks(pickup) {
  if (pickup > 42) {
    return pickup - 42;
  } else {
    return 42 - pickup;
  }
}

function distanceFromHqInFeet(pickup) {
  return distanceFromHqInBlocks(pickup)*264;
}

function distanceTravelledInFeet(start, destination) {
  if (start > destination) {
    return (start - destination) * 264;
} else {
    return (destination - start) *264;
}
    
  }

function calculateFarePrice(start, destination) {
  if (distanceTravelledInFeet(start, destination) < 400) {
    return 0;
  } else {
    return 'cannot travel that far';
  }
 }  
 