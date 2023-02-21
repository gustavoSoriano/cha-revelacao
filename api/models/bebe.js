const mongoose = require("mongoose");

module.exports = () => {
    const schema = mongoose.Schema({
        key: {
            type: String,
            require: [true, "key is required"],
        },
        name: {
            type: String,
            require: [true, "name is required"],
        }
    });

    schema.set("timestamps", true);
    return mongoose.model("bebe", schema);
};
