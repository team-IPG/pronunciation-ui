const names = require('./json/names.json');

exports.getJSON = (req, res) => {
    let entry = req.query.entry; 
    console.log(entry);
    res.json(names[entry]);
};