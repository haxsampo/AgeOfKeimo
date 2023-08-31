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
        1: 5,
        2: 5,
        3: null,
        4: 4,
        5: 4,
        6: null,
        7: 7,
        8: 5,
        9: 3
      }
    ]
  },
  {
    id: 2,
    name: 'Franks',
    units: [
      {
        1: 5,
        2: 5,
        3: null,
        4: 5,
        5: 6,
        6: null,
        7: 4,
        8: 5,
        9: 3
      }
    ]
  },
  {
    id: 3,
    name: 'Goths',
    units: [
      {
        1: 7,
        2: 7,
        3: null,
        4: 5,
        5: 5,
        6: null,
        7: 4,
        8: 5,
        9: 3
      }
    ]
  },
  {
    id: 4,
    name: 'Mayans',
    units: [
      {
        1: 4,
        2: 5,
        3: 5,
        4: null,
        5: null,
        6: null,
        7: 6,
        8: 5,
        9: null
      }
    ]
  },
  {
    id: 5,
    name: 'Mongols',
    units: [  
      {
        1: 4,
        2: 5,
        3: null,
        4: 6,
        5: 5,
        6: 5,
        7: 5,
        8: 5,
        9: 6
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


  if (!civ) {
    return res.status(404).send('Civilization not found');
  }
  const civUnits = civ.units[0];
  let highestValueUnit = '';
  let highestValue = 0;

  for (const [unitId, value] of Object.entries(civUnits)) {
    const unit = units.find(u => u.id === parseInt(unitId));
    if (unit.isGoldUnit && value > highestValue) {
      highestValue = value;
      highestValueUnit = unit.name;
    }
  }


  const highestUnit = units.find(u => u.name === highestValueUnit);
  const counters = highestUnit.counters.map(counterId => {
    const counterUnit = units.find(u => u.id === counterId);
    return {
      id: counterId,
      name: counterUnit.name,
      value: civUnits[counterId] || null
    };
  });

  res.json({ highestValueUnit, counters });
})

const PORT = process.env.PORT || 3001
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})