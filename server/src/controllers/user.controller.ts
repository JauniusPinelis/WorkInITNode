const registerUserHandler = (req,res) => {
    try {
        let createdUser = createUser(req.body);
    }
    catch(error) {
        res.status(500).send(error);
    }
}

const loginUserHandler = (req, res) => {
    try {

    }
    catch (error){
        res.status(500).send(error);
    }
}