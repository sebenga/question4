var express = require('express');
var router = express.Router();
var model = require('../models/index');
 
 
/* GET tuser listing. */
router.get(
    "/",
    awaitErorrHandlerFactory(async (req, res, next) => {
      const tuser = await model.tuser.findAll({});
      return res.json({
        error: false,
        data: tuser
      });
    })
  );
 
 
/* POST tuser. */
router.post(
  "/",
  awaitErorrHandlerFactory(async (req, res, next) => {
    const { id_number, first_names, last_name} = req.body;
    const tuser = model.tuser.create({
      id_number: id_number,
      first_names: first_names,
      last_name: last_name
    });
    return res.status(201).json({
      error: false,
      data: tuser,
      message: "New tuser has been created."
    });
  })
);
 
 
/* update tuser. */
router.put(
  "/:id",
  awaitErorrHandlerFactory(async (req, res, next) => {
    const tuser_id = req.params.id;
 
    const { id_number, first_names, last_name } = req.body;
 
    model.Todo.update(
      { id_number: id_number, first_names: first_names, last_name: last_name },
      { where: { id: tuser_id } }
    );
 
    return res.status(201).json({
      error: false,
      message: "tuser has been updated."
    });
  })
);
 
/* Delete tuser. */
router.delete(
  "/:id",
  awaitErorrHandlerFactory(async (req, res, next) => {
    const tuser_id = req.params.id;
 
    model.Todo.destroy({
      where: {
        id: tuser_id
      }
    });
 
    return res.status(201).json({
      error: false,
      message: "tuser has been delete."
    });
  })
);
 
module.exports = router;