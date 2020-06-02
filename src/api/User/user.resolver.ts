const createUser = async (_, args, { model }) => {
    return model.User.query().insertAndFetch(args.data)
}

const getAllUsers = async (_, args, { model }) => {
    return model.User.query()
}

export default {
    Query: {
        getAllUsers
    },
    Mutation: {
        createUser
    }
}