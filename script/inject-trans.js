// 信息注入
function AutoInjector() {
    // 请求地址
    this.queryUrl = webServer.data.baseURL + webServer.data.transInfo + "/" + getCookie("mineSerial");

    this.queryParams = {
        token: getCookie("token")
    };
    this.pairTable = null;
    this.bindPairTable = function (pairTable) {
        this.pairTable = pairTable;
        this.pairTable.setPairs({
            "订单编号：": "",
            "买家账号：": "",
            "买家上家：": "",
            "买家电话：": "",
            "买入数量：": "",
            "现价金额：": "",
            "卖家账号：": "",
            "支 付 宝：": "",
            "卖家上家：": "",
            "卖家电话：": "",
            "打款截图：": "",
            "订单时间：": ""
        });
    }

    this_injector = this;


    this.autoInject = function (callback) {
        $.ajax({
            type: "POST",
            url: this_injector.queryUrl,
            crossDomain: true,
            contentType: "application/json; charset=utf-8",
            data: JSON.stringify(this_injector.queryParams),
            success: function (data) {
                // 成功返回
                if (data.code == 1) {
                    var buyderAccount = ''
                    var buyderInviter = ''
                    var buyderPhone = ''
                    $.each(data.result.buyers, function (index, content) {
                        buyderAccount += content.account + "<br />"
                        buyderInviter += (content.inviterAccount == null ?
                            '无' : content.inviterAccount) + "<br /> "
                        buyderPhone += content.phone + "<br />"
                    })
                    table.tdVal("订单编号：", data.result.serialNumber);
                    table.tdVal("买家账号：", buyderAccount);
                    table.tdVal("买家上家：", buyderInviter);
                    table.tdVal("买家电话：", buyderPhone);
                    table.tdVal("买入数量：", data.result.currency);
                    table.tdVal("现价金额：", data.result.worth);
                    table.tdVal("卖家账号：", data.result.sellers[0].account);
                    table.tdVal("支 付 宝：", data.result.sellers[0].zfbCode);
                    table.tdVal("卖家上家：", data.result.sellers[0].inviterAccount == null ?
                        '无' : data.result.sellers[0].inviterAccount);
                    table.tdVal("卖家电话：", data.result.sellers[0].phone);
                    table.tdVal("订单时间：", new Date(data.result.updateAt).Format("yyyyMMdd"));
                    if (callback != null) {
                        callback(table);
                    }
                    return;
                } else {
                    alert(data.message);
                }
            },
            error: function (data) {
                alert(JSON.stringify(data));
            }
        })

    }
}


function TransParamSaver() {
    this.saveParam = function (transItem) {
        setCookie("serialNumber", transItem.serialNumber);
        setCookie("currency", transItem.currency);
        setCookie("rate", transItem.worth / transItem.currency);
        setCookie("worth", transItem.worth);
    };
    this.getParams = function () {
        return {
            mineSerial: getCookie("mineSerial"),
            serials: getCookie("matchList").split(","),
            token: getCookie("token")
        };
    };
}