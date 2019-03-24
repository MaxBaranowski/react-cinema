import {ObjectId} from "mongodb";

export const findById = ({id, collection}) => {
  return new Promise((resolve, reject) => {
    try {
      collection.find({
        "_id": ObjectId(id)
      }).toArray().then((data) => {
        resolve(data);
      }).catch(error => {
        reject(error.message);
      });
    } catch (error) {
      console.log(error.message);
    }
  });
};

export const findByName = ({name, value, collection}) => {
  return new Promise((resolve, reject) => {
    try {
      collection.find({
        [name]: {$regex: ".*^" + value + ".*"}
      }).limit(3).toArray().then((data) => {
        resolve(data);
      }).catch(error => {
        reject(error.message);
      });
    } catch (error) {
      console.log(error.message);
      reject(error.message);
    }
  });
};
