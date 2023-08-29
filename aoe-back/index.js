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
    name: 'militia',
    isGoldUnit: True,
    counters: [], // ids of units countered by militia
    counteredBy: [] // ids of units that counter militia
  },
  {
    name: 'spearman',
    isGoldUnit: False,
    counters: [],
    counteredBy: []
  },
  {
    name: 'eagle',
    isGoldUnit: True,
    counters: [],
    counteredBy: []
  },
  {
    name: 'scout',
    isGoldUnit: False,
    counters: [],
    counteredBy: []
  },
  {
    name: 'knight',
    isGoldUnit: True,
    counters: [],
    counteredBy: []
  },
  {
    name: 'camel',
    isGoldUnit: True,
    counters: [],
    counteredBy: []
  },
  {
    name: 'archer',
    isGoldUnit: True,
    counters: [],
    counteredBy: []
  },
  {
    name: 'skirmisher',
    isGoldUnit: False,
    counters: [],
    counteredBy: []
  }
  {
    name: 'carcher',
    isGoldUnit: True,
    counters: [],
    counteredBy: []
  }
];

app.get('/', (req, res) => {
  res.send('<h1>Hello World!</h1>')
})

app.get('/api/civs', (req, res) => {
  res.json(civs)
})

app.get('/api/civs/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const civ = civilizations.find(c => c.id === id);

  if (!civ) {
    return res.status(404).send('Civilization not found');
  }

  const units = civ.units;
  let highestValueUnit = '';
  let highestValue = 0;

  for (const unit in units) {
    if (units[unit] > highestValue) {
      highestValue = units[unit];
      highestValueUnit = unit;
    }
  }

  res.send({ unit: highestValueUnit, value: highestValue });
  res.json(civs)
})

const PORT = process.env.PORT || 3001
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})