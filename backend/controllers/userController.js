// User controller
exports.firstAPI = (req,res) => {
    res.status(200).json({ success: true, message: "First API with json !!!!!!!!!!!!!!!" });
};
exports.getUsers = (req,res) => {
    res.send("Users");
};

