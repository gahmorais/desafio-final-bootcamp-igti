import http from '../util/http-common'

const getTransactionByPeriod = async (year, month) =>{
    return await http.get(`/transaction?period=${year}-${month}`)
}

export default {
    getTransactionByPeriod,
}