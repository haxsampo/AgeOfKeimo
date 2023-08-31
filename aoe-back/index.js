const express = require('express')
const app = express()
const cors = require('cors')
app.use(cors())

civs = ['Aztecs', 
        'Bengalis',
        'Berbers', 
        'Bohemians',
        'Britons',
        'Bulgarians',
        'Burgundians',
        'Burmese',
        'Byzantines',
        'Celts',
        'Chinese',
        'Cumans',
        'Dravidians',
        'Ethiopians',
        'Franks',
        'Goths',
        'Gurjaras',
        'Hindustanis',
        'Huns',
        'Incas',
        'Italians',
        'Japanese',
        'Khmer',
        'Koreans',
        'Lithuanians',
        'Magyars',
        'Malay',
        'Malians',
        'Mayans',
        'Mongols',
        'Persians',
        'Poles',
        'Portuguese',
        'Saracens',
        'Sicilians',
        'Slavs',
        'Spanish',
        'Tatars',
        'Teutons',
        'Turks',
        'Vietnamese',
        'Vikings']

const civilizations = [
  {
    id: 1,
    name: 'Britons',
    units: [
      {
        militia: 5,
        spearman: 5,
        eagle: null,
        scout: 4,
        knight: 4,
        camel: null,
        archer: 7,
        skirmisher: 5,
        carcher: 3
      }
    ]
  },
  {
    id: 2,
    name: 'Franks',
    units: [
      {
        militia: 5,
        spearman: 5,
        eagle: null,
        scout: 5,
        knight: 6,
        camel: null,
        archer: 4,
        skirmisher: 5,
        carcher: 3
      }
    ]
  },
  {
    id: 3,
    name: 'Goths',
    units: [
      {
        militia: 7,
        spearman: 7,
        eagle: null,
        scout: 5,
        knight: 5,
        camel: null,
        archer: 4,
        skirmisher: 5,
        carcher: 3
      }
    ]
  },
  {
    id: 4,
    name: 'Mayans',
    units: [
      {
        militia: 4,
        spearman: 5,
        eagle: 5,
        scout: null,
        knight: null,
        camel: null,
        archer: 6,
        skirmisher: 5,
        carcher: null
      }
    ]
  },
  {
    id: 5,
    name: 'Mongols',
    units: [  
      {
        militia: 4,
        spearman: 5,
        eagle: null,
        scout: 6,
        knight: 5,
        camel: 5,
        archer: 5,
        skirmisher: 5,
        carcher: 6
      }
    ]
  }
]

const units = [
  {
    id: 1,
    name: 'Militia',
    building: 'Barracks',
    isGoldUnit: true,
    counters: [2, 3, 8], // ids of units that militia counters
    counteredBy: [7, 9] // ids of units that counter militia
  },
  {
    id: 2,
    name: 'Spearman',
    building: 'Barracks',
    isGoldUnit: false,
    counters: [4, 5, 6],
    counteredBy: [1, 3, 7, 8]
  },
  {
    id: 3,
    name: 'Eagle Scout',
    building: 'Barracks',
    isGoldUnit: true,
    counters: [2, 4, 7, 8],
    counteredBy: [1]
  },
  {
    id: 4,
    name: 'Scout',
    building: 'Stable',
    isGoldUnit: false,
    counters: [7, 8],
    counteredBy: [1, 2, 3, 5, 6]
  },
  {
    id: 5,
    name: 'Knight',
    building: 'Stable',
    isGoldUnit: true,
    counters: [4, 7, 8, 9],
    counteredBy: [2, 6]
  },
  {
    id: 6,
    name: 'Camel',
    building: 'Stable',
    isGoldUnit: true,
    counters: [4, 5, 8, 9],
    counteredBy: [1, 2]
  },
  {
    id: 7,
    name: 'Archer',
    building: 'Archery Range',
    isGoldUnit: true,
    counters: [1, 2],
    counteredBy: [3, 4, 5, 8]
  },
  {
    id: 8,
    name: 'Skirmisher',
    building: 'Archery Range',
    isGoldUnit: false,
    counters: [2, 7, 9],
    counteredBy: [1, 3, 4, 5, 6]
  },
  {
    id: 9,
    name: 'Cavalry Archer',
    building: 'Archery Range',
    isGoldUnit: true,
    counters: [1],
    counteredBy: [3, 5, 6, 8]
  }
];

app.get('/', (req, res) => {
  res.send('<h1>Hello World!</h1>')
})

app.get('/api/civs', (req, res) => {
  console.log('request')
  res.json(civilizations)
})

app.get('/api/civs/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const civ = civilizations.find(c => c.id === id);
  const unitList = units

  if (!civ) {
    return res.status(404).send('Civilization not found');
  }

  const units = civ.units;
  let powerUnit = '';
  let powerUnitValue = 0;

  for (const unit in units) {
    if (units[unit] > powerUnitValue) {
      powerUnitValue = units[unit];
      powerUnit = unit;
    }
  }

  res.send({ unit: highestValueUnit, value: highestValue });
  res.json(civs)
})

const PORT = process.env.PORT || 3001
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})