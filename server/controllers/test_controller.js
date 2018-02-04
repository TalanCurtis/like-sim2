module.exports = {
    testGet: (req, res, next) => {
        let myResp = 'Test Get Hit!!!'
        res.status(200).send(myResp)
    },
    testGetDB: (req, res, next) => {
        // Connect to Database
        const database = req.app.get('db')
        // Run sql file then do function with response
        database.getAllTest().then((dbResponse) => {
            res.status(200).send(dbResponse)
        })
    },
    testGetAgeGreaterThan: (req, res, next) => {
        // Connect to Database
        const database = req.app.get('db')
        // req.query  is the url query ?age=
        let age = req.query.age
        database.getAgeGreaterThan([age])
            .then(dbResponse => {
                res.status(200).send(dbResponse)
            })
    },
    testGetUser: (req, res, next) => {
        const database = req.app.get('db')
        let id = req.body.id
        console.log(id)
        database.getUser([id]).then(dbResp => res.status(200).send(dbResp))
        // database.getUser([id])
        // .then(dbResp=>{
        //     res.status(200).send('dbResp')
        // })
    }

}