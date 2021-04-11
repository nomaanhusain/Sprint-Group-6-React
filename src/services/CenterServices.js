import axios from 'axios'
const CENTER_BASE_URL='http://localhost:9000/hcdcc/centers';
class CenterServices{
    getAllCenters(){
        return axios.get(CENTER_BASE_URL)
    }
    addCenter(diagnosticCenter){
        return axios.post(CENTER_BASE_URL,diagnosticCenter);
    }
    getDiagnosticCenterById(centerId){
        return axios.get(CENTER_BASE_URL +'/'+ centerId);
    }

    updateDiagnosticCenter(diagnosticCenter,centerId){
        return axios.put(CENTER_BASE_URL + '/' + centerId,diagnosticCenter);
}

    getCenterByName(centerName){
        return axios.get(CENTER_BASE_URL + '/' + centerName);
 }

    
    deleteDiagnosticCenter(centerId){
        return axios.delete(CENTER_BASE_URL + '/' + centerId);
    }
}
export default new CenterServices()

