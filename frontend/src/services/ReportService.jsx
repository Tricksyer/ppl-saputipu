import http from "../http-common"

const getAll = () => {
    return http.get("/reports")
}

const getbynorekening = (norekening) => {
    return http.get(`/reports?norekening=${norekening}`)
}

const getbyuserid = (userId) => {
    return http.get(`/reports/${userId}`)
}

const create = (data) => {
    return http.post("/reports", data)
}

const remove = (id) => {
    return http.delete(`/reports/${id}`)
}

const update = (id, data) => {
    return http.put(`/reports/${id}`, data)
}

const ReportService = {
    getbynorekening,
    getAll,
    create,
    remove,
    update,
    getbyuserid
}
export default ReportService