import axios from 'axios'
const APPOINTMENT_BASE_URL='http://localhost:9000/hcac';
class AppointmentService{
    viewAppointments(pname){
        return axios.get(APPOINTMENT_BASE_URL+'/viewAppointments/'+pname)
    }
    addAppointment(app){
        return axios.post(APPOINTMENT_BASE_URL+'/addAppointment',app);
    }
    viewAppointment(app_id){
        return axios.get(APPOINTMENT_BASE_URL+'/viewAppointment/'+app_id);
    }
    getAppointmentList(appointmentDate,approvalStatus){
        return axios.get(APPOINTMENT_BASE_URL+'/getAppointmentList/'+appointmentDate+'/'+approvalStatus);
    }
    removeAppointment(app_id){
        return axios.delete(APPOINTMENT_BASE_URL+'/removeAppointment/'+app_id);
    }
    updateAppointment(app_id,app){
        return axios.put(APPOINTMENT_BASE_URL+'/updateAppointment/'+app_id,app);
    }
}
export default new AppointmentService()