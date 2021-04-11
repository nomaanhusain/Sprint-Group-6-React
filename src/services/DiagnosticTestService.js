import axios from 'axios'
const DIAG_TEST_BASE_URL='http://localhost:9000/hcdtc/';

class DiagnosticTestService{
    addTest(test){
        return axios.post(DIAG_TEST_BASE_URL+'addTest',test)
    }
    deleteTest(testId){
        return axios.delete(DIAG_TEST_BASE_URL+'removeTest/'+testId);
    }
    updateTest(utest){
        return axios.put(DIAG_TEST_BASE_URL+'updateTest',utest);
    }
}
export default new DiagnosticTestService()