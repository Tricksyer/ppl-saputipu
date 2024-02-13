const db = require("../models")
const Report = db.reports
const Op = db.Sequelize.Op
exports.create = (req, res) =>{
    if(!req.body.norekening){
        res.status(400).send({
            message: "Content cannot be empty!"
        })
        return
    }
    const report = {
        norekening: req.body.norekening,
        kronologi: req.body.kronologi,
        userId: req.body.userId
    } 
    Report.create(report).then(data => {
        res.send(data)
    }).catch(err => {
        res.status(500).send({
            message: err.message
        })
    })
}

exports.findAll = (req, res) => {
    const norekening = req.query.norekening
    var condition = norekening ? { norekening: { [Op.like]: `%${norekening}%` } } : null

    Report.findAll({where: condition}).then(data => {
        res.send(data)
    }).catch(err => {
        res.status(500).send({
            message: err.message
        })
    })
}

exports.update = (req, res) => {
    const id = req.params.id
    Report.update(req.body, {
        where: {id: id}
    }).then(num => {
        if(num == 1){
            res.send({message: "Tutorial was updated successfully"})
        }else{
            res.send({message: "Cannot update tutorial"})
        }
    }).catch(err => {
        res.status(500).send({
            message: err.message
        })
    })
}

exports.delete = (req, res) => {
    const id = req.params.id
    Report.destroy({
        where: {id: id}
    }).then(num => {
        if (num==1){
            res.send({message: "Deleted successfully"})
        }else{
            res.send({message:"Cannot delete"})
        }
    }).catch(err => {
        res.status(500).send({
            message: err.message
        })
    })
}

exports.findOne = (req, res) => {
    const id = req.params.userId
    Report.findAll({where: {userId: id}}).then(data => {
        if(data){
            res.send(data)
        }else{
            res.status(404).send({
                message: "Cannot find report with id"
            })
        }
    }).catch(err => {
        res.status(500).send({
            message: "Error getting the data"
        })
    })
}