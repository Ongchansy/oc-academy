import axios from  "axios"

export const loginUser = async (payload:any) => {
  return axios.post('http://localhost:5000/auth/login',payload,{
    withCredentials: true
  }).then((res:any) => {
    return res.data
  })
};
  
  
export const reqProfileApi = () => {
    return axios.get("http://localhost:5000/auth/profile",{
        withCredentials: true
    })
}