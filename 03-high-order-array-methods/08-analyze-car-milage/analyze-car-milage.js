function analyzeCarMileage(cars) {
  const totalMileage = cars.reduce((total, car) => {
    return total + car.mileage;
  }, 0);
  const averageMileage = totalMileage / cars?.length;

  const highestMileageCar = cars.reduce((highestCar, currentCar) => {
    return currentCar?.mileage > highestCar?.mileage ? currentCar : highestCar;
  }, cars[0]);

  const lowestMileageCar = cars.reduce((lowestMilageCar, currentCar) => {
    return currentCar?.mileage < lowestMilageCar?.mileage
      ? currentCar
      : lowestMilageCar;
  }, cars[0]);

  return {
    averageMileage,
    highestMileageCar,
    lowestMileageCar,
    totalMileage: Number(totalMileage),
  };
}

module.exports = analyzeCarMileage;
