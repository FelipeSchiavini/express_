const { findByIdAndUpdate } = require('../database/models/user.model')
const userModel = require('../database/models/user.model')

const createUser = async ({name, last_name, email, date}) => {
    const newUser = new userModel()
    newUser.setBody({name, last_name, email, date})
    return await newUser.save()
}

const findUserById = async(id) => await userModel.findById(id)

const updateUser = async (id, body) => {
    const user = await findUserById(id);

    const name = body.name ? body.name : user.name
    const last_name = body.last_name ? body.last_name : user.last_name
    const email = body.email ? body.email : user.email
    const date = body.date ? body.date : user.date

    user.setBody({name, last_name, email, date})
    return await user.save();
};

const deleteuser = async (id) => {
    const user = await findUserById(id);
    return await user.delete()
}

module.exports = {
    createUser,
    findUserById,
    updateUser,
    deleteuser,
}