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

module.exports = units