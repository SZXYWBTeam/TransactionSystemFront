var webServer = {
    data: {
        baseURL: "http://localhost:8080",
        login: "/bbc/account/login",
        rigster: "/bbc/account/register",
        vCodeImg: "/bbc/account/verCode",
        updatePwd: "/bbc/account/updatePwd",
        updateInfo: "/bbc/account/updateInfo",
        wallet: "/bbc/wallet",
        sale: "/bbc/wallet/sale",
        buy: "/bbc/wallet/buy"
    }
}

var account = {
    data: {
        userId: "",
        name: "测试",
        phone: "",
        account: "",
        zfbCode: "",
        token: "OGU5ODg0MWItZTAwNi00M2Y4LWJmMjgtNWNjOTBiMjA2MjQy"
    },
    wallet: {
        walletId: "",
        rate: 1.0,
        hideRate: "",
        showRate: "",
        inviteCount: "",
        currency: ""
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
        ERROR_SERVICE: "服务器错误",
        ERROR_PARAMETERS: "参数错误",
        ERROR_NOT_FOUND_USER: "请先登陆"
    }
}