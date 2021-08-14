const router = require('express').Router();
let College = require('../models/college.model');

router.route('/').get((req, res) => {
  College.find()
    .then(colleges => res.json(colleges))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/add').post((req, res) => {
  const Id= req.body.Id;  
  const Name = req.body.Name;
  const YearFounded = Number(req.body.YearFounded);
  const City = req.body.City;
  const State = req.body.State;
  const Country = req.body.Country;
  const NoOfStudents = Number(req.body.NumberOfStudents);
  

  const newCollege = new College({
    Id,
    Name,
    YearFounded,
    City,
    State,
    Country,
    NoOfStudents,
  });

  newCollege.save()
  .then(() => res.json('College added!'))
  .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/:id').get((req, res) => {
  College.findById(req.params.id)
    .then(college => res.json(college))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/:id').delete((req, res) => {
  College.findByIdAndDelete(req.params.id)
    .then(() => res.json('College deleted.'))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/update/:id').post((req, res) => {
  College.findById(req.params.id)
    .then(college => {
      college.Id = req.body.username;
      college.Name = req.body.Name;
      college.YearFounded = Number(req.body.YearFounded);
      college.City = req.body.City;
      college.State= req.body.State;
      college.Country=req.body.Country;
      college.NoOfStudents=Number(req.body.NoOfStudents);

      college.save()
        .then(() => res.json('College updated!'))
        .catch(err => res.status(400).json('Error: ' + err));
    })
    .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;