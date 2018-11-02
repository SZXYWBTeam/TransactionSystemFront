function Toolbar(selecor, callback){
    var title = null ;
    var backButton = null ;
    this_toolbar = this ;
    toolbarHtml = '<html><head><link href="/TransactionSystem/css/toolbar.css"rel="stylesheet"type="text/css"/></head><body><div class="app-toolbar app-toolbar-container"id="toolbar"><span class="app-toolbar-left-icon app-toolbar-center-vertical"id="toolbar-back-button"><img src="/TransactionSystem/img/backarrow.png"/></span><span class="app-toolbar-title"id="toolbar-title"></span></div></body></html>' ;
    $(selecor).html(toolbarHtml) ;
    this.title = $("#toolbar-title") ;
    this.backButton = $("#toolbar-back-button") ;
    // callback(this);
    // $(selecor).load("/TransactionSystem/commons/toolbar.html", function(){
    //     this_toolbar.title = $("#toolbar-title") ;
    //     this_toolbar.backButton = $("#toolbar-back-button") ;
    //     callback(this_toolbar);
    // }) ;
}