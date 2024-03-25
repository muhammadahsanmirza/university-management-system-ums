const College = require('../models/colleges.model');

const handlePostCollege = async (req, res) => {
    try {
        const college = new College(req.body);
        await college.save();
        return res.status(201).send(college);
    } catch (e) {
        return res.status(500).send({ message: e.message });
    }
}
module.exports = { 
    handlePostCollege 
};
