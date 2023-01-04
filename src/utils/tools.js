import { showFailToast } from "vant";

export const errorStatus = (code) => {
    switch (code) {
        case 400:
            showFailToast("请求参数错误");
            break;
        case 401:
            showFailToast("未授权，请登录");
            break;
        case 403:
            showFailToast("拒绝访问");
            break;
        case 404:
            showFailToast("请求错误，未找到该资源");
            break;
        case 405:
            showFailToast("请求方法未允许");
            break;
        case 408:
            showFailToast("请求超时");
            break;
        case 500:
            showFailToast("服务器端出错");
            break;
        case 501:
            showFailToast("网络未实现");
            break;
        case 502:
            showFailToast("网络错误");
            break;
        case 503:
            showFailToast("服务不可用");
            break;
        case 504:
            showFailToast("网络超时");
            break;
        case 505:
            showFailToast("http版本不支持该请求");
            break;
        default:
            showFailToast(error.message);
            break;
    }
};
