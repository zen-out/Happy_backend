const express = require("express");

class HappyRouter {
  constructor(happyService) {
    this.happyService = happyService;
  }
  router() {
    let router = express.Router();
    router.get("/api/happy", this.getAll.bind(this));
    router.get("/api/happy/:id", this.getOne.bind(this));
    router.post("/api/happy", this.post.bind(this));
    router.put("/api/happy/:id", this.put.bind(this));
    router.delete("/api/happy/:id", this.delete.bind(this));
    return router;
  }
  getAll(request, response) {
    return this.happyService.getAll().then((happyList) => {
      response.send(happyList);
    });
  }
  getOne(request, response) {
    let id = request.params.id;
    return this.happyService
      .getOne(id)
      .then((happyObject) => {
        response.send(happyObject);
      });
  }
  post(request, response) {
    let body = request.body;
    console.log("body in router", body);
    return this.happyService.post(body).then((id) => {
      response.send(id);
    });
  }
  put(request, response) {
    let id = request.params.id;
    let body = request.body;
    return this.happyService
      .put(id, body)
      .then((edited) => {
        response.send(edited);
      });
  }
  delete(request, response) {
    let id = request.params.id;
    return this.happyService.delete(id).then((deleted) => {
      response.send(deleted);
    });
  }
}
module.exports = HappyRouter;
