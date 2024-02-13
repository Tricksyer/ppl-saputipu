module.exports = (sequelize, Sequelize) => {
    const Report = sequelize.define("report", {
        norekening: {
            type: Sequelize.STRING
        },
        kronologi: {
            type: Sequelize.STRING
        }
    })
    return Report
}