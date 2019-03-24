import {ObjectId} from "mongodb";

export const findById = ({id, collection}) => {
  return new Promise((resolve, reject) => {
    collection.find({
      "_id": ObjectId(id)
    }).toArray().then((data) => {
      resolve(data);
    }).catch(error => {
      reject(error.message);
    });
  });
};

export const findByName = ({name, value, collection}) => {
  return new Promise((resolve, reject) => {
    collection.find({
      [name]: {$regex: ".*^" + value + ".*"}
    }).toArray().then((data) => {
      console.log(data);
      resolve(data);
    }).catch(error => {
      reject(error.message);
    });
  });
};