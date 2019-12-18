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
        2. types
            1. genres
                * 0 (any)
                * 1 (unspecified)
                * 2 (game)
                * 3 (anime)
                * 4 (rock)
                * 5 (pop)
                * 6 (other)
                * 7 (novelty)
                * 8 (hip hop)
                * 10 (electronic)
            2. ranks
                * 4 (loved)
                * 3 (qualified)
                * 2 (approved)
                * 1 (ranked)
                * 0 (pending)
                * -1 (WIP)
                * -2 (graveyard)
