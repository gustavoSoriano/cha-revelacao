const mongoose = require("mongoose");

module.exports = () => {
    const schema = mongoose.Schema({
        userName: {
            type: String,
            require: [true, "userName is required"],
        },
        number: {
            type: String,
            require: [true, "number is required"],
        },
        thumbnail: {
            type: String,
            require: [true, "thumbnail is required"],
        },
        message: {
            type: String,
            required: [true, "message is required"],
        },
    });

    schema.set("timestamps", true);
    return mongoose.model("messages", schema);
};
