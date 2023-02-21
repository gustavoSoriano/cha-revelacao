const { Router } = require("express");
const router = Router();

module.exports = async (app) => {
    const { get, create, saveName, dispatch } = await app.controllers.messages
    router.get("/messages", get);
    router.put("/savename", saveName);
    router.post("/dispatch", dispatch);
    return router;
};
