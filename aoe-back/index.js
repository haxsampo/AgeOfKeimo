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

const sivs = [
  {
    id: 1,
    name: 'britons',
    militia: 3,
    spearman: 3,
    skirmisher: 3,
    archer: 5,
    carcher: 3,
    scout: 3,
    knight: 3,
  },
  { 
    id: 2,
    name: 'franks',
    militia: 3,
    spearman: 3,
    skirmisher: 3,
    archer: 3,
    carcher: 3,
    scout: 3,
    knight: 5,
  },
  { 
    id: 3,
    name: 'mongols',
    militia: 3,
    spearman: 3,
    skirmisher: 3,
    archer: 3,
    carcher: 5,
    scout: 3,
    knight: 5,
  },
  { 
    id: 4,
    name: 'mayans',
    militia: 3,
    spearman: 3,
    skirmisher: 3,
    archer: 5,
    carcher: 3,
    scout: 3,
    knight: 5,
  },
  { 
    id: 5,
    name: 'goths',
    militia: 5,
    spearman: 3,
    skirmisher: 3,
    archer: 3,
    carcher: 3,
    scout: 3,
    knight: 5,
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

  res.json(corrCiv)
})

const PORT = process.env.PORT || 3001
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})