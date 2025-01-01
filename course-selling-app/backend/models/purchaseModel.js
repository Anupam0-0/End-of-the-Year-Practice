const mongoose = require("mongoose");

const purchaseSchema = new mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User", required: true
    },
    course: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Course", required: true
    },
    purchasedDate: {
        type: Date,
        default: Date.now
    }
}, {
    timestamps: true
})

module.exports = mongoose.model("Purchase", purchaseSchema);