const express = require('express')

const router = express.Router();

router.get('/',(req,res)=>{
  const {id,tipo} = req.query;
  res.json(
    {
      id: id,
      tipo: tipo
    }
  )
})

module.exports = router
