var webServer = {
    data: {
        baseURL: "http://192.168.0.103:8080",
        login: "/bbc/account/login",
        rigster: "/bbc/account/register",
        vCodeImg: "/bbc/account/verCode",
        updatePwd: "/bbc/account/updatePwd",
        updateInfo: "/bbc/account/updateInfo",
        wallet: "/bbc/wallet",
        sale: "/bbc/wallet/sale",
        buy: "/bbc/wallet/buy",
        match: "/bbc/wallet/match",
        trans: "/bbc/trans",
        doPay: "/bbc/trans/doPay",
        doReceipt: "/bbc/trans/doReceipt",
        doMatch: "/bbc/trans/doMatch",
        doSale: "/bbc/trans/doSale",
        transInfo: "/bbc/trans/info",
        withdraw:"/bbc/money/withdraw",//佣金提现
        list:"/bbc/money/list",//佣金提现
        imgUpload: "/imgUpload",
        imgShow: "/imgShow",
    }
}

var account = {
    data: {
        userId: "",
        name: "",
        phone: "",
        account: "",
        zfbCode: "",
        token: ""
    },
    wallet: {
        walletId: "",
        rate: "",
        hideRate: "",
        showRate: "",
        inviteCount: "",
        currency: "",
        buyCount: ""
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