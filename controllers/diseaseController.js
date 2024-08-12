const db = require("../models")

module.exports = {
    //Disease Controllers

    getDisease: function (req, res) {
        try {
            const diseases = db.Disease.find();
            res.json(diseases);
        } catch (err) {
            res.status(500).json({ message: err.message });
        }
    }
}