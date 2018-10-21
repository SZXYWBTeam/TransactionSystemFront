var webServer = {
    data: {
        baseURL: "http://localhost:8080",
        login: "/bbc/account/login",
        rigster: "/bbc/account/register",
        vCodeImg: "/bbc/account/verCode"
    }
}

var account = {
    data: {
        userId: "",
        name: "",
        phone: "",
        account: "",
        token: ""
    }
}

var logger = {
    data: {
        ERROR_ACCOUNT_OR_PWD: "账户或密码错误",
        ERROR_VERCODE: "验证码错误",
        ERROR_PARAMETERS_EXIST_ACCOUNT: "已存在账户",
        ERROR_PARAMETERS_EXIST_NAME: "已存在名称",
        ERROR_PARAMETERS_EXIST_PHONE: "已存在手机号",
        ERROR_PARAMETERS_EXIST_ZFB_CODE: "已存在支付宝号码",
        ERROR_PARAMETERS_NOT_FOUND_INVITE_CODE: "不存在这个邀请码",
        ERROR_PARAMETERS_ERROR_VER_CODE: "验证码错误",
        ERROR_ACCOUNT_REGISTER: "账户注册失败",
        ERROR_SERVICE: "服务器错误"
    }
}