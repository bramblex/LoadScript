
var LoadScript = function LoadScript(urls, callback){

  if (typeof urls === 'string'){
    var urls = [urls];
  }

  if (!Array.isArray(urls)){
    throw 'argument type error';
    return;
  }

  if (urls.length <= 0){
    callback();
    return;
  }

  var head = document.head;
  var _LoadScript = arguments.callee;
  var script = document.createElement('script');

  script.src = urls[0];
  script.className = 'loadscript';
  script.async = false;
  script.type = 'text/javascript'
  script.charset = 'utf-8'

  head.insertBefore(script, head.firstChild);

  script.onload = script.onerror = function(){
    script.onload = script.onerror = null;
    _LoadScript(urls.slice(1), callback);
  };
};

var libs = [
  'http://cdnjs.net/ajax/libs/jquery/2.1.4/jquery.min.js',
  'http://cdnjs.net/ajax/libs/jquery.blockUI/2.66.0-2013.10.09/jquery.blockUI.min.js',
  'http://cdnjs.net/ajax/libs/lodash.js/3.9.0/lodash.min.js'
];

var onReady = function onReady(){
  $.blockUI({message: '测试'});
  setTimeout(function(){$.unblockUI();}, 3000);
};

LoadScript(libs, onReady);
