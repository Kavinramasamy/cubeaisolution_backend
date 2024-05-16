const adminSchema = await mongoose.Schema({
    adminname: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    }
})
export const AdminModel = mongoose.model("admins", adminSchema);