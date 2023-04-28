import axios from 'axios'
import {BASE_URL,TIMEOUT} from "./config";


const instance=axios.create({
    baseURL:BASE_URL,
    timeout:TIMEOUT,
})
instance.interceptors.request.use(config=>{
    console.log('请求拦截')
    return config
},error => {

})

instance.interceptors.response.use(res=>{
    console.log('响应数据')
    return res.data
},err => {
    if (err && err.response) {
        switch (err.response.status) {
            case 400:
                console.log("请求错误");
                break;
            case 401:
                console.log("未授权访问");
                break;
            default:
                console.log("其他错误信息");
        }
    }
    return err;
})
export default instance