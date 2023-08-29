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
    name: 'britons',
    units: [
      {militia: 3,
      spearman: 3,
      skirmisher: 3,
      archer: 5,
      carcher: 3,
      scout: 3,
      knight: 3}
    ]
  },
  { 
    id: 2,
    name: 'franks',
    units: [
      {militia: 3,
      spearman: 3,
      skirmisher: 3,
      archer: 5,
      carcher: 3,
      scout: 3,
      knight: 3}
    ]
  },
  { 
    id: 3,
    name: 'mongols',
    units: [
      {militia: 3,
      spearman: 3,
      skirmisher: 3,
      archer: 5,
      carcher: 3,
      scout: 3,
      knight: 3}
    ]
  },
  { 
    id: 4,
    name: 'mayans',
    units: [
      {militia: 3,
      spearman: 3,
      skirmisher: 3,
      archer: 5,
      carcher: 3,
      scout: 3,
      knight: 3}
    ]
  },
  { 
    id: 5,
    name: 'goths',
    units: [
      {militia: 3,
      spearman: 3,
      skirmisher: 3,
      archer: 5,
      carcher: 3,
      scout: 3,
      knight: 3}
    ]
  }
]

const units = [
  {
    name: 'militia',
    gold: 1
  },
  {
    name: 'spearman',
    gold: 0
  },
  {
    name: 'skirmisher',
    gold: 0
  },
  {
    name: 'archer',
    gold: 1
  },
  {
    name: 'carcher',
    gold: 1
  },
  {
    name: 'scout',
    gold: 0
  },
  {
    name: 'knight',
    gold: 1
  }
]

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
})

const PORT = process.env.PORT || 3001
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})