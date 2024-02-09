import Chance from "chance";
const chance = new Chance();

const character = {
  firstName: chance.first(),
  lastName: chance.last(),
  twitter: chance.twitter(),
  geo: chance.geohash(),
};

export default function handler(req, res) {
  res.status(200).json(character);
}
