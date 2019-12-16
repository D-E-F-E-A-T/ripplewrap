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
  }
}