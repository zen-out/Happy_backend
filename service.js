const { response } = require("express");

class HappyService {
  constructor(knex) {
    this.knex = knex;
  }
  getAll() {
    return this.knex("happy")
      .select("*")
      .then((happyList) => {
        return happyList;
      })
      .catch((error) => {
        throw new Error("error", error);
      });
  }
  getOne(id) {
    return this.knex("happy")
      .select("*")
      .where({ id: id })
      .then((happyObject) => {
        return happyObject;
      })
      .catch((error) => {
        throw new Error("error", error);
      });
  }
  post(happyObject) {
    return this.knex
      .insert(happyObject)
      .into("happy")
      .returning("id")
      .catch((error) => {
        throw new Error(error);
      });
  }
  put(id, newHappyObject) {
    return this.knex("happy")
      .update(newHappyObject)
      .where({ id: id })
      .then(() => {
        console.log("edited happy object");
        return "edited";
      })
      .catch((error) => {
        throw new Error(error);
      });
  }

  delete(id) {
    return this.knex("happy")
      .select("*")
      .where({ id: id })
      .del()
      .then(() => {
        console.log("deleted all users bugs");
        return "deleted";
      })
      .catch((error) => {
        throw new Error(error);
      });
  }
}

module.exports = HappyService;
