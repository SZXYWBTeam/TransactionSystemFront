function Dialog(containerSelector) {
    this.container = $(containerSelector);
    this.mask = $("<div class='dialog-mask'></div>");
    this.content = null;
    this_dialog = this;

    this.container.append(this.mask);

    this.mask.click(function () {
        this_dialog.hide();
    })

    this.show = function (html, title) {
        if (this.content != null) {
            this.content.remove();
        }
        this.content = $(html);
        this.content.slideUp();
        this.mask.append(this.content);
        this.mask.fadeIn();
        this.content.slideDown();
        this.showing = true;
    };

    this.hide = function () {
        this.content.slideUp();
        this.mask.fadeOut();
        this.showing = false;
    };

    this.showing = false;
    this.mask.hide();
    this.mask.height(document.documentElement.clientHeight);

}