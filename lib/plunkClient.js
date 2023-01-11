import Plunk from "@plunk/node";
const plunkKey = process.env.NEXT_PUBLIC_PLUNK_PUBLIC_KEY;


if (!plunkKey) {

  throw new Error();

}

const plunk = new Plunk(plunkKey);
export default plunk;