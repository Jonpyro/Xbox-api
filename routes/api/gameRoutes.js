const express = require('express')
const router = express.Router()
const fetch = (...args) => import('node-fetch').then(({default: fetch}) => fetch(...args))

router.get('/', (req, res)=>{
    const URL = 'https://api.sampleapis.com/xbox/games'

    fetch(URL)
        .then(res => res.json())
        .then(data => {
            res.render('games', {
                title: 'Games',
                name: 'Xbox Game Index!',
                data
            })
        })
})

router.get('/:id', (req, res)=>{
    const id = req.params.id
    const URL = `https://api.sampleapis.com/xbox/games/${id}`

    fetch(URL)
        .then(res => res.json())
        .then(data => {
            res.render('gameSingle', {
                title: `${data.name}`,
                name: `${data.name}`,
                data
            })
        })
})

module.exports = router