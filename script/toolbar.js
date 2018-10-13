function Toolbar(selecor, callback){
    that = this ;
    $(selecor).load("/TransactionSystem/commons/toolbar.html", function(){
        that.title = $("#toolbar-title") ;
        that.backButton = $("#toolbar-back-button") ;
        callback(that);
    }) ;
}