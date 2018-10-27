// 键值对表格
function PairTable(containerSelector) {

    this.container = $(containerSelector);
    this.table = $("<table border='1'></table>");
    this.container.append(this.table);
    this.pairCache = {};
    this.refresh = function () {
        for (key in this.pairCache) {
            this.addTr(key) ;
        }
    };

    this.addPair = function (key, text, notRefresh) {
        this.pairCache[key] = $("<td>" + text + "</td>");
        if(!notRefresh){
            this.addTr(key) ;
        }
    };
    this.addTr = function (key) {
        tr = $("<tr></tr>");
        tr.append("<td>" + key + "</td>");
        tr.append(this.pairCache[key]);
        this.table.append(tr);
    };

    this.setPairs = function (pairMap) {
        this.pairCache = {};
        for (key in pairMap) {
            this.addPair(key, pairMap[key], true);
        }
        this.refresh();
    };

    this.tdVal = function (key) {
        return this.pairCache[key];
    }
}