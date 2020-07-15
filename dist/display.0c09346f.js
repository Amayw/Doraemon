// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles
parcelRequire = (function (modules, cache, entry, globalName) {
  // Save the require from previous bundle to this closure if any
  var previousRequire = typeof parcelRequire === 'function' && parcelRequire;
  var nodeRequire = typeof require === 'function' && require;

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire = typeof parcelRequire === 'function' && parcelRequire;
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error('Cannot find module \'' + name + '\'');
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = cache[name] = new newRequire.Module(name);

      modules[name][0].call(module.exports, localRequire, module, module.exports, this);
    }

    return cache[name].exports;

    function localRequire(x){
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x){
      return modules[name][1][x] || x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [function (require, module) {
      module.exports = exports;
    }, {}];
  };

  var error;
  for (var i = 0; i < entry.length; i++) {
    try {
      newRequire(entry[i]);
    } catch (e) {
      // Save first error but execute all entries
      if (!error) {
        error = e;
      }
    }
  }

  if (entry.length) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(entry[entry.length - 1]);

    // CommonJS
    if (typeof exports === "object" && typeof module !== "undefined") {
      module.exports = mainExports;

    // RequireJS
    } else if (typeof define === "function" && define.amd) {
     define(function () {
       return mainExports;
     });

    // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }

  // Override the current require with this new one
  parcelRequire = newRequire;

  if (error) {
    // throw error from earlier, _after updating parcelRequire_
    throw error;
  }

  return newRequire;
})({"Dcy0":[function(require,module,exports) {
var string = "\n* {\n    margin: 0;\n    padding: 0;\n    box-sizing: border-box;\n  }\n  *::before,\n  *::after {\n    box-sizing: border-box;\n  }\n  \n  .skin {\n    background: #93b8ca;\n    height: 100vh;\n    position: relative;\n    z-index: -3;\n  }\n  \n  .head {\n    width: 300px;\n    height: 300px;\n    position: absolute;\n    top: 40px;\n    left: 50%;\n    transform: translateX(-50%);\n    background: #0092dc;\n    border-radius: 50%;\n    border: 1px solid #333;\n  }\n  \n  .eye {\n    border: 1px solid #333;\n    width: 50px;\n    height: 65px;\n    border-radius: 50%;\n    background: #fff;\n    position: absolute;\n    left: 50%;\n    top: 60px;\n    z-index: 1;\n    transform: translateX(-50%);\n  }\n  \n  .eye::before {\n    content: \"\";\n    display: block;\n    width: 20px;\n    height: 30px;\n    background: #333;\n    border-radius: 50%;\n    position: absolute;\n    top: 50%;\n    transform: translateY(-50%);\n  }\n  \n  .head .left {\n    transform: translateX(-55px);\n  }\n  \n  .head .left::before {\n    left: 28px;\n  }\n  .head .right {\n    transform: translateX(5px);\n  }\n  .head .right::before {\n    left: 1px;\n  }\n  \n  .nose {\n    width: 40px;\n    height: 40px;\n    background: #d40019;\n    position: absolute;\n    left: 50%;\n    transform: translateX(-50%);\n    top: 105px;\n    z-index: 1;\n    border-radius: 50%;\n    border: 1px solid #333;\n  }\n   \n  .face {\n    width: 270px;\n    height: 210px;\n    background: #fff;\n    position: absolute;\n    top: 85px;\n    left: 50%;\n    transform: translateX(-50%);\n    border-radius: 50%;\n    border: 1px solid #333;\n  }\n  \n  .mouth {\n    width: 200px;\n    height: 100px;\n    border: 1px solid #333;\n    position: absolute;\n    left: 50%;\n    transform: translateX(-50%);\n    top: 145px;\n    z-index: 2;\n    border-radius: 0 0 50% 50%;\n    border-top: 1px solid #fff;\n    border-left: 1px solid #fff;\n    border-right: 1px solid #fff;\n    border-bottom: 2px solid #333;\n  }\n  .mouth .sty {\n    border: 1px solid #333;\n    position: absolute;\n    left: 50%;\n    transform: translateX(-50%);\n  }\n  .mouth .center {\n    width: 1px;\n    height: 100px;\n    top: -2px;\n  }\n  \n  /* .mustache1 {\n    width: 200px;\n    height: 20px;\n    background: pink;\n  } */\n  .mustache1::before,\n  .mustache2::before,\n  .mustache3::before,\n  .mustache1::after,\n  .mustache2::after,\n  .mustache3::after {\n    content: \"\";\n    display: block;\n    width: 80px;\n    height: 1px;\n    /* background: #000; */\n    border: 1px solid #333;\n    position: absolute;\n    left: 50%;\n    transform: translateX(-50%);\n  }\n  \n  .mustache1::before {\n    top: 10px;\n    transform: translateX(-120%) rotateZ(20deg);\n  }\n  .mustache2::before {\n    top: 30px;\n    transform: translateX(-122%);\n  }\n  .mustache3::before {\n    top: 50px;\n    transform: translateX(-120%) rotateZ(-20deg);\n  }\n  .mustache1::after {\n    top: 10px;\n    transform: translateX(20%) rotateZ(160deg);\n  }\n  .mustache2::after {\n    top: 30px;\n    transform: translateX(22%);\n  }\n  .mustache3::after {\n    top: 50px;\n    transform: translateX(20%) rotateZ(20deg);\n  }\n \n  /* \u8116\u5B50 */\n  .neck {\n    width: 180px;\n    height: 20px;\n    background: #dd011c;\n    position: absolute;\n    left: 50%;\n    transform: translateX(-50%);\n    top: 310px;\n    border-radius: 20%;\n    border: 1px solid #333;\n    z-index: 5;\n  }\n  .lingdang {\n    width: 40px;\n    height: 40px;\n    background: #f5cc07;\n    position: absolute;\n    left: 50%;\n    top: 5px;\n    transform: translateX(-50%);\n    border-radius: 50%;\n  }\n  .lingdang::before {\n    content: \"\";\n    display: block;\n    width: 40px;\n    height: 5px;\n    border: 1px solid #333;\n    position: absolute;\n    left: 50%;\n    top: 10px;\n    transform: translateX(-50%);\n    border-radius: 50%;\n  }\n  .circle {\n    width: 11px;\n    height: 11px;\n    border: 1px solid #333;\n    background: #444;\n    position: absolute;\n    left: 50%;\n    top: 18px;\n    transform: translateX(-50%);\n    border-radius: 50%;\n  }\n  .circle::before {\n    content: \"\";\n    display: block;\n    height: 8px;\n    width: 1px;\n    position: absolute;\n    left: 50%;\n    top: 10px;\n    transform: translateX(-50%);\n    border: 1px solid #333;\n  }\n  .dbody {\n    width: 200px;\n    height: 200px;\n    border: 1px solid #333;\n    background: #0092dc;\n    position: absolute;\n    left: 50%;\n    transform: translateX(-50%);\n    top: 315px;\n    border-radius: 30%/100%;\n    z-index: 3px;\n  }\n  .abdomen {\n    width: 160px;\n    height: 150px;\n    background-color: #fff;\n    position: absolute;\n    left: 50%;\n    transform: translateX(-50%);\n    top: 10px;\n    border-radius: 40%/100%;\n  }\n  \n  .pocket {\n    width: 125px;\n    height: 60px;\n    background-color: #fff;\n    position: absolute;\n    left: 50%;\n    transform: translateX(-50%);\n    top: 60px;\n    border-radius: 10%;\n    border: 1px solid #333;\n  }\n  \n  .foot {\n    width: 100px;\n    height: 120px;\n    background-color: #fff;\n    position: absolute;\n    left: 50%;\n    top: 100px;\n    border-radius: 45%;\n    border: 1px solid #333;\n  }\n  \n  .dbody .left {\n    transform: translateX(-120%);\n  }\n  \n  .dbody .right {\n    transform: translateX(20%);\n  }\n  \n  @keyframes wave1 {\n    0% {\n      transform: translateX(-145%) rotateZ(30deg);\n    }\n    50% {\n      transform: translateX(-145%) rotateZ(0deg);\n    }\n    100% {\n      transform: translateX(-145%) rotateZ(30deg);\n    }\n    /* 100% {\n      transform: translateX(45%) rotateZ(0deg);\n    } */\n  }\n  @keyframes wave2 {\n    0% {\n      transform: translateX(45%) rotateZ(-30deg);\n    }\n    50% {\n      transform: translateX(45%) rotateZ(0deg);\n    }\n    100% {\n      transform: translateX(45%) rotateZ(-30deg);\n    }\n    /* 100% {\n      transform: translateX(45%) rotateZ(0deg);\n    } */\n  }\n  .arm {\n    width: 115px;\n    height: 50px;\n    background: #0092dc;\n    border: 1px solid #333;\n    position: absolute;\n    left: 50%;\n    top: 352px;\n    z-index: -1;\n    border-radius: 20%/100%;\n  }\n  .aleft {\n    transform-origin: 100% 0;\n    transform: translateX(-145%) rotateZ(-30deg);\n    animation: 1.5s wave1 infinite linear;\n  }\n  .aright {\n    transform-origin: 0 0;\n    transform: translateX(45%) rotateZ(30deg);\n    animation: 1.5s wave2 infinite linear;\n  }\n  .arm::before {\n    content: \"\";\n    display: block;\n    width: 65px;\n    height: 65px;\n    background-color: #fff;\n    position: absolute;\n    border-radius: 50%;\n    border: 1px solid #333;\n    z-index: -2;\n  }\n  .aleft::before {\n    left: -30%;\n    top: -10px;\n  }\n  .aright::before {\n    left: 70%;\n    top: -10px;\n  }\n  \n  \n";
var player = {
  id: undefined,
  time: 10,
  ui: {
    demo: document.querySelector("#demo"),
    demo2: document.querySelector("#style")
  },
  events: {
    ".btnPause": "pause",
    ".btnPlay": "play",
    ".btnSlow": "slow",
    // ".btnNormal": "normal",
    ".btnFast": "fast"
  },
  n: 1,
  init: function init() {
    player.ui.demo.innerText = string.substring(0, player.n);
    player.ui.demo2.innerHTML = string.substring(0, player.n);
    player.bindsEvents();
    player.play();
  },
  bindsEvents: function bindsEvents() {
    for (var key in player.events) {
      if (player.events.hasOwnProperty(key)) {
        var value = player.events[key];
        debugger;
        document.querySelector(key).onclick = player[value];
        console.log(player[value]);
      }
    }
  },
  play: function play() {
    player.id = setInterval(player.run, player.time);
  },
  run: function run() {
    player.n += 1;

    if (player.n > string.length) {
      window.clearInterval(player.id);
      return;
    }

    player.ui.demo.innerText = string.substr(0, player.n);
    player.ui.demo2.innerHTML = string.substr(0, player.n);
    player.ui.demo.scrollTop = player.ui.demo.scrollHeight;
  },
  pause: function pause() {
    window.clearInterval(player.id);
  },
  slow: function slow() {
    player.pause();
    player.time = 100;
    player.play();
  },
  normal: function normal() {
    player.pause();
    player.time = 50;
    player.play();
  },
  fast: function fast() {
    player.pause();
    player.time = 10;
    player.play();
  }
};
player.init();
},{}]},{},["Dcy0"], null)
//# sourceMappingURL=display.0c09346f.js.map