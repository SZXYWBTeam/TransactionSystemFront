function Toolbar(selecor, callback){
    this_toolbar = this ;
    $(selecor).load("/TransactionSystem/commons/toolbar.html", function(){
        this_toolbar.title = $("#toolbar-title") ;
        this_toolbar.backButton = $("#toolbar-back-button") ;
        callback(this_toolbar);
    }) ;
}