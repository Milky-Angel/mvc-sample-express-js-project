var Userdb = require('../model/model')

// create and adda new user
exports.create = (req, res) => {

    //validation request
    if (!req.body) {
        res.status(400).send({message: "Content can not be empty!"})
        return;
    }

    // new user
    const user = new Userdb({
        name: req.body.name,
        email: req.body.email,
        gender: req.body.gender,
        status: req.body.status,
    })

    //save user in the database
    user.save(user)
        .then(data => {
            // res.send(data)
            res.redirect('/')
        })
        .catch (err => {
            res.status(500).send({message: "some internal error occer pls try again"})
        })
}

// retrive and return all user/retrive and return a single user
exports.find = (req, res) => {
    Userdb.find()
    .then(data => {
        res.send(data)
    })
    .catch (err => {
        res.status(500).send({message: "some internal error occer pls try again"})
    })
}

// update a user identified user by user id
exports.update = (req, res) => {

    //validation request
    if (!req.body) {
        res.status(400).send({message: "Data update canot anoy be empty "})
        return;
    }

    let id = req.params.id

    Userdb.findByIdAndUpdate(id, req.body, {userFindAndModify: false})
    .then(data => {
        if (!data) {
            res.status(404).send({message: "Canot update user "+id+". maybe user not exist"})
        } else {
            res.send(data)
        }

    })
    .catch (err => {
        res.status(500).send({message: "some internal error occer pls try again for update"})
    })
}

// delete a dpecfic user
exports.delete = (req, res) => {

    let id = req.params.id
    Userdb.findByIdAndDelete(id)
    .then(data => {
        if (!data) {
            res.status(404).send({message: "Canot delete user "+id+". maybe user not exist"})
        } else {
            res.send({message: "Delete the id:"+id+" is scussesfull"})
        }

    })
    .catch (err => {
        res.status(500).send({message: "some internal error occer pls try again for delete"})
    })

}

// list all user 
exports.reteive = (req, res) => {

    let id = req.params.id
    Userdb.findById(id)
    .then(data => {
        if (!data) {
            res.status(404).send({message: "Canot retrive user "+id+". maybe user not exist"})
        } else {
            res.send(data)
        }

    })
    .catch (err => {
        res.status(500).send({message: "some internal error occer pls try again for retrive"})
    })

}