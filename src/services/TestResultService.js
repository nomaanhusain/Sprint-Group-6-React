import axios from 'axios'
const TESTRESULT_BASE_URL='http://localhost:9000/hctrc/';

class TestResultService{
    addTestResult(testresult){
       return axios.post(TESTRESULT_BASE_URL+'addtestresult',testresult);
    }

    getAllTestResult(){
        return axios.get(TESTRESULT_BASE_URL+'getalltestresult');
    }
    updateTestResult(testresupdate){
        return axios.put(TESTRESULT_BASE_URL+'updatetestresult',testresupdate)
    }
    deleteTestResult(testId){
        return axios.delete(TESTRESULT_BASE_URL+'removetestresult/'+testId);
    }
}
export default new TestResultService()