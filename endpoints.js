module.exports = {
  ripple: {
    tokens: {
      getTokens: '/tokens',
      getCurrent: '/tokens/self',
      delete: '/tokens/self/delete'
    },
    users: {
      getUser: '/users/full',
      getCurrent: '/users/self',
      getId: '/users/whatid',
      userpage: '/users/userpage',
      findUser: '/users/lookup',
      recentScores: '/users/scores/recent',
      bestScores: '/users/scores/best'
    },
    scores: { getScores: '/scores' },
    misc: {
      ping: '/ping',
      surprise: '/surprise_me'
    }
  },
  bancho: {
    isOnline: '/api/v1/isOnline',
    onlineUsers: '/api/v1/onlineUsers',
    verifiedStatus: '/api/v1/verifiedStatus'
  },
  cheesegull: {
    getBeatmap: '/api/b/',
    set: '/api/s/'
  },
  types: {
    genres: {
      0: 'any',
      1: 'unspecified',
      2: 'game',
      3: 'anime',
      4: 'rock',
      5: 'pop',
      6: 'other',
      7: 'novelty',
      8: 'hip hop',
      10: 'electronic'
    },
    ranks: {
      4: 'loved',
      3: 'qualified',
      2: 'approved',
      1: 'ranked',
      0: 'pending',
      '-1': 'WIP',
      '-2': 'graveyard'
    }
  }
}