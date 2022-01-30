const { Router } = require('express');
const router = Router();
const {
    createUser,
    findUserById,
    updateUser,
    deleteuser,
  } = require('../services/user.service');


router.get('/', async(req, res) =>{
    const idUser = req.query.id
    console.log(idUser)
    const user = await findUserById(idUser)
    //responseObj(user, 200)
    res.status(200).json({"status": user})

})

router.put('/:id', async(req, res) =>{
    const updadeUser = await updateUser(
        req.params.id, req.body);
    res.status(200).json({"status": updadeUser})
})

router.delete('/:id', async(req,res) => {
    const deletedUser = await deleteuser("61f6bd94486f16b449a3ad97")

    res.status(200).json(deletedUser)
})

router.post('/', async(req, res) => {
    const { name, last_name, email, date } = req.body;
    const newUser = await createUser({
        name: name,
        last_name: last_name,
        email: email,
        date: date,
    });
    res.status(200).json(
        {
            status:'ok',
            newUser: newUser
        }
    )
});

module.exports = router;
