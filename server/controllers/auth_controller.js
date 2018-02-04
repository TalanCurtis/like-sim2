module.exports = {
    login: (req, res, next) => {
        const database = req.app.get('db')
        database.loginCheck([req.body.userName, req.body.password]).then(dbResp => {
            console.log(dbResp)
            if (dbResp.length === 0) {
                res.status(401).send('Incorect Credentials')
            } else {
                res.status(200).send(dbResp);                
            }
        })
    }
}