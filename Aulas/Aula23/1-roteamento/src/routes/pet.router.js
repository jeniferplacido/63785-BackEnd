const { Router } = require('express');

const router = Router();

const pets = [{pet: "Bob",specie: "Dog"}, {pet: "Mia", specie: "Cat"}, {pet: "Rex", specie: "Dog"}];

router.param("pet", (req, res, next, pet) => {
  if (pet.length < 3) {
    res.status(400).send("Pet name must have at least 3 characters");
    return next();
  }

  let searchPet = pets.find(p => p.pet === pet);

  if (searchPet) {
    req.pet = searchPet;
    return next();
  } else {
    req.pet = null;
    return res.status(404).send("Pet not found");
  }
});

router.get("/", (req, res) => {
  return res.status(200).json(pets);
});

router.get("/:pet", (req, res) => {
  console.log(req.pet);
  const { pet } = req;
  if (pet) {
    return res.status(200).json(pet);
  } else {
    return res.status(404).send("Pet not found");
  }
});

router.post("/", (req, res) => {
  const { pet, specie } = req.body;
  pets.push({ pet, specie });
  return res.status(201).json(pets);
});

router.put("/:pet", (req, res) => {
  const { pet } = req;
  const { specie } = req.body;
  if (pet) {
    pet.specie = specie;
    return res.status(200).json(pet);
  } else {
    return res.status(404).send("Pet not found");
  }
});

module.exports = router;