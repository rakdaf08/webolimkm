//Navigation
export const NAV_LINKS = [
  {href: '/Schedule', key: 'schedule', label: 'SCHEDULE'},
  {href: '/Leaderboard', key: 'leaderboard', label: 'LEADERBOARD'},
  {href: '/Players', key: 'players', label: 'PLAYERS'},
  {href: '/AboutUs', key: 'aboutus', label: 'ABOUT US'},
];

//Himpunan
export const Himpunan = [
  {href: '#', key: 'hmif', label: 'HMIF'},
  {href: '#', key: 'hme', label: 'HME'},
  {href: '#', key: 'hmt', label: 'HMT'},
  {href: '#', key: 'hmpg', label: 'HMPG'},
  {href: '#', key: 'hms', label: 'HMS'},
]

//Medals
export const Medals = [
  {key: 'hmif', label: 'HMIF', gold: '#', silver: '#', bronze: '#'},
  {key: 'hmt', label: 'HMT', gold: '#', silver: '#', bronze: '#'},
  {key: 'mti', label: 'MTI', gold: '#', silver: '#', bronze: '#'}
]

// src/data/index.ts

export const teams = [
  {
    name: 'HIMPUNAN MAHASISWA INFORMATIKA (HMIF)',
    image: 'HMIF.svg',
    sports: [
      {
        sportName: 'Atletik',
        players: ['Player 1', 'Player 2', 'Player 3', 'Player 4', 'Player 5', 'Player 6', 'Player 7', 'Player 8'],
      },
      {
        sportName: 'Badminton',
        players: ['Player 1', 'Player 2', 'Player 3', 'Player 4', 'Player 5', 'Player 6', 'Player 7'],
      },
      {
        sportName: 'Basket',
        players: ['Player 1', 'Player 2', 'Player 3', 'Player 4', 'Player 5', 'Player 6', 'Player 7', 'Player 8'],
      },
      {
        sportName: 'Catur',
        players: ['Player 1', 'Player 2', 'Player 3', 'Player 4', 'Player 5', 'Player 6', 'Player 7'],
      },
      {
        sportName: 'Futsal',
        players: ['Player 1', 'Player 2', 'Player 3', 'Player 4', 'Player 5', 'Player 6', 'Player 7'],
      },
      {
        sportName: 'Renang',
        players: ['Player 1', 'Player 2', 'Player 3', 'Player 4', 'Player 5', 'Player 6', 'Player 7'],
      },
      {
        sportName: 'Tenis Meja',
        players: ['Player 1', 'Player 2', 'Player 3', 'Player 4', 'Player 5', 'Player 6', 'Player 7','Player 1', 'Player 2', 'Player 3', 'Player 4', 'Player 5', 'Player 6', 'Player 7'],
      },
      {
        sportName: 'Voli',
        players: ['Player 1', 'Player 2', 'Player 3', 'Player 4', 'Player 5', 'Player 6', 'Player 7'],
      },
    ],
  },
  {
    name: 'HIMPUNAN MAHASISWA ELEKTRONIK (HME)',
    image: 'HMIF.svg',
    sports: [
      {
        sportName: 'Soccer',
        players: ['Player 1', 'Player 2', 'Player 3', 'Player 4', 'Player 5', 'Player 6'],
      },
      {
        sportName: 'Tennis',
        players: ['Player 1', 'Player 2'],
      },
    ],
  },
  {
    name: 'HIMPUNAN MAHASISWA MESIN',
    image: 'HMIF.svg',
    sports: [
      {
        sportName: 'Volleyball',
        players: ['Player 1', 'Player 2', 'Player 3', 'Player 4', 'Player 5'],
      },
    ],
  },
  {
    name: 'Team D ',
    image: 'HMIF.svg',
    sports: [
      {
        sportName: 'Volleyball',
        players: ['Player 1', 'Player 2', 'Player 3', 'Player 4', 'Player 5'],
      },
    ],
  },
];
