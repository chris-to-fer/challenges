import { Fragment, useState } from "react";
import Winner from "../Winner";
import {
  CarButton,
  AllCarRoutes,
  DistanceHeadline,
  Distance,
  Track,
} from "./CarRace.styled";
import { initialCars, getRandomDistance } from "../../utils/utils";
import { useImmer } from "use-immer";

const finishLine = 200;

export default function CarRace() {
  const [cars, updateCars] = useImmer(initialCars);

  function moveCar(clickedCar) {
    const coveredDistance = getRandomDistance();
    console.log("clickedCar", clickedCar);
    console.log("coveredDistance", coveredDistance);

    updateCars((draft) => {
      const driveCar = draft.find((e) => e.emoji === clickedCar.emoji);
      driveCar.position.x += coveredDistance;
      driveCar.position.lastDistance = coveredDistance;
    });
    //Version shorter_____________________________________________
    // setCars(
    //   cars.map((e) =>
    //     e.emoji === clickedCar.emoji
    //       ? {
    //           ...e,
    //           position: {
    //             lastDistance: coveredDistance,
    //             x: e.position.x + coveredDistance,
    //           },
    //         }
    //       : e
    //   )
    // );
    //Version long___________________________________________
    // setCars((old) => {
    //   return old.map((e) => {
    //     if (e.emoji === clickedCar.emoji) {
    //       return {
    //         ...e,
    //         position: {
    //           lastDistance: coveredDistance,
    //           x: e.position.x + coveredDistance,
    //         },
    //       };
    //     } else {
    //       return e;
    //     }
    //   });
    // });
  }
  const winner = cars.find((car) => car.position.x >= finishLine);

  return (
    <>
      {winner ? (
        <Winner winner={winner} onRestart={() => updateCars(initialCars)} />
      ) : (
        <AllCarRoutes $finishLine={finishLine}>
          <DistanceHeadline>Last Distance</DistanceHeadline>
          {cars.map((car) => (
            <Fragment key={car.emoji}>
              <Track>
                <CarButton
                  onClick={() => moveCar(car)}
                  $positionX={car.position.x}
                  $lastDistance={car.position.lastDistance}
                  aria-label={`Move clicked car forward`}
                >
                  {car.emoji}
                </CarButton>
              </Track>
              <Distance>{car.position.lastDistance}</Distance>
            </Fragment>
          ))}
        </AllCarRoutes>
      )}
    </>
  );
}
