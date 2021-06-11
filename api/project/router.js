// build your `/api/projects` router here
const express = require('express');
const router = express.Router();


router.get('/', (req, res, next) => {
    res.status(200).json({
        message: 'projects api working'
    });
})

router.use((err, req, res, next) => {
    res.status(500).json({
        customMessage: 'something in the app is not working',
        message: err.message,
        stack: err.stack,
    })
});


module.exports = router;
