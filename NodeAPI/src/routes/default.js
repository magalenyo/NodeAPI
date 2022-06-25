const { Router } = require('express');
const router = Router();

router.get('/', (req, res) => {
    res.json(
        {
            "Title": "Hello world"
        }
    );
})

router.post('/user', (req, res) => {
    res.json(
        {
            "userId": 1
        }
    );

})

module.exports = router;