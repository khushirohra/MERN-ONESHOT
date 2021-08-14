const router = require('express').Router();
let Student = require('../models/student.model');

router.route('/').get((req, res) => {
  Student.find()
    .then(students => res.json(students))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/add').post((req, res) => {
  const Id = req.body.Id;
  const Name = req.body.Name;
  const Batch = Number(req.body.Batch);
  const College_Id = req.body.College_Id;

  const newStudent = new Student({Id,Name,Batch,College_Id
});

  newStudent.save()
    .then(() => res.json('Student added!'))
    .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;