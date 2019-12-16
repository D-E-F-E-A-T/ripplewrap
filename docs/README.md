# Docs
* Client Class
    1. obj [Object]
        1. ripple
            1. tokens
                * getTokens()
                * getCurrent()
                * delete()
            2. users
                * getUser({ name: 'xxdnull' })
                * getCurrent()
                * getId({ name: 'xxdnull' })
                * userpage({ name: 'xxdnull' })
                * findUser({ name: 'xxd' })
                * recentScores({ name: 'xxdnull' })
                * bestScores({ name: 'xxdnull' })
            3. scores
                * getScores({ b: 1 })
            4. misc
                * ping()
                * surprise()
        2. bancho
            * isOnline({ u: 'xxdnull' })
            * onlineUsers()
            * verifiedStatus({ u: 'xxdnull' })
        3. cheesegull
            * getBeatmap(1)
            * set(1)
