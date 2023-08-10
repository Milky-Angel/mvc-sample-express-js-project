const axios = require('axios')


exports.homeRoutes = (req, res) => {

    //make a get request to /api/user
    axios.get('http://localhost:3000/api/user')
    .then(function(response) {
        res.render('index',{data: response.data})
    })
    .catch(err => {
        res.send(err)
    })
}

exports.add_user = (req, res) => {
    res.render('addUser')
}

exports.update_user = async (req, res) => {
    let data;
 
    if (req.query.id) {
        try {
            // Make a get request to /api/user
            const response = await axios.get(`http://localhost:3000/api/user/${req.query.id}`);
            // console.log(response)
            data = response.data;
        } catch (err) {
            return res.send(err);
        }
    }

    res.render('update_user', { data: data });
};