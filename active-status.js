/* ========================================================================
 * Adding class name in a few seconds by event action, Maybe milli seconds
 * Then you can add css3 animation in the same time.
 * ========================================================================
 * Author: Shion.Phan
 * Blog: http://www.joomla178.com
 * Github: https://github.com/shionphan
 * ======================================================================== */
+function($){
  'use strict';
  $.fn.astatus = function (options,obj) {
    var defualts = {delay:300, etype:'click', cname:'active-status', adddom:''};
    var opts = $.extend({}, defualts, options);
    var element = (opts.adddom.length > 0) ? $(opts.adddom) : this;

    this.on(opts.etype,obj);
    this.on(opts.etype,function(){
      if(element.hasClass(opts.cname)){
        return;
      }
      element.addClass(opts.cname);
      setTimeout(function(){
        element.removeClass(opts.cname);
      }, opts.delay);
    });
  }
}(jQuery);
