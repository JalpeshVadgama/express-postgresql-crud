const express = require("express");
const router = express.Router();
const db = require("../db/db.connect").pool;
const contentResult = require("../lib/contentresult").contentResult;

router.get("/", (req, res) => {
    let sql = "select * from public.\"Category\"";
    db.query(sql, (err, result) => {
        if(err){
            let errorResult = contentResult(err.message, null, false);
            res.status(501).send(errorResult);
        }else{
           let sucessResult = contentResult("Category fetched successfully", result.rows, true);
            res.status(200).send(sucessResult);
        }
    });
});

router.get("/:id", (req, res) => {
    const categoryId = req.params.id || 0;
    if(categoryId==0)
    {
        let errorResult = contentResult("Invalid category id", null, false);
        res.status(404).send(errorResult);
    }else{
        let sql = "select * from \"Category\" where \"Id\" =$1";
        db.query(sql,[categoryId], (err, result) => {
            if (err) {
                let errorResult = contentResult(err.message, null, false);
                res.status(501).send(errorResult);
            } else {
                let sucessResult = contentResult("Category fetched successfully", result.rows, true);
                res.status(200).send(sucessResult);
            }
        });
    }
});
module.exports = router;