var express = require('express');
var router = express.Router();

const civilizations = require('../models/civs')
const units = require('../models/units')

/* GET ALL CIVS */

router.get('/', (req, res) => {
    console.log('request')
    res.json(civilizations)
})

/* GET CIV BY ID */

router.get('/:id', (req, res) => {
const id = parseInt(req.params.id);
// civilization that matches the requested ID
const civ = civilizations.find(c => c.id === id);

    // error handling
if (!civ) {
    return res.status(404).send('Civilization not found');
}

// The units object for that civ and their values
const civUnits = civ.units[0];
console.log(civUnits)

let highestValueUnit = '';
let highestValue = 0;

// saving the highest-valued gold unit of the requested civ to the above variables
for (const [unitId, value] of Object.entries(civUnits)) {
    const unit = units.find(u => u.id === parseInt(unitId));
    if (unit.isGoldUnit && value > highestValue) {
    highestValue = value;
    highestValueUnit = unit.name;
    }
}

console.log(highestValueUnit)
console.log(highestValue)

// getting the details of the power unit
const highestUnitDetails = units.find(u => u.name === highestValueUnit);
console.log(highestUnitDetails)

// listataan civin 

const counteredBy = highestUnitDetails.counteredBy.map(counterId => {
    const counterUnit = units.find(u => u.id === counterId);
    return {
    id: counterId,
    name: counterUnit.name,
    counterCounters: [{'keimo': 4, 'juuhhan': 5}]
    };
});

console.log(counteredBy)

res.json({ highestValueUnit, counteredBy });
})

module.exports = router;