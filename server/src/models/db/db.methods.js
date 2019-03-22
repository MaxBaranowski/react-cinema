import { ObjectId } from "mongodb";

export const findById = ({ id, collection }) => {
  return new Promise((resolve, reject) => {
    collection.find({
      "_id": ObjectId(id)
    }).toArray().then((data) => {
      console.log(data)
      resolve(data);
    }).catch(err => {
      console.log('error: ', err);
      reject(error.message);
    });
  });
}