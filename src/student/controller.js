const pool = require('../../db')
const query = require('./queries')
const jwt = require('jsonwebtoken')

const getBarang = (req, res) => {
    pool.query(query.getBarang, (error, results) => {
        if(error) throw error;
        res.status(200).json(results.rows)
    });
};

const getToken = (req, res) => {
    // const nama = String(req.params.nama);
    
};

const getBarangbyID = (req, res) => {
    const id = parseInt(req.params.id);
    pool.query(query.getBarangbyID, [id], (error, results) => {
        if(error) throw error;
        if(results.rowCount > 0){
            res.status(200).json(results.rows)
        }else{
            res.send("Data tidak ditemukan")
        }
    })
};

const addBarang = (req, res) => {
    const { nama } = req.body
    pool.query(query.addBarang, [nama], (error, results) => {
        if(error) throw error
        res.status(200).send("Data berhasil ditambahkan")
        console.log("Data ditambahkan")
    })
}

module.exports = {
    getBarang, 
    getBarangbyID,
    addBarang,
};