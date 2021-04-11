import axios from 'axios'
const DIAG_TEST_BASE_URL='http://localhost:9000/hcdtc/';

class DiagnosticTestService{
    addTest(test){
        return axios.post(DIAG_TEST_BASE_URL+'/addTest',test)
    }
    deleteTest(testId){
        return axios.delete(DIAG_TEST_BASE_URL+'/RemoveTest/'+testId);
    }
}
export default new DiagnosticTestService()