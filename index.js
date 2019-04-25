console.clear();
var _minSize = window.innerWidth < 1023 ? 8 : 16;
var _maxSize = window.innerWidth < 1023 ? 16 : 32;
var _isShifted = false;
var _canvas = $('#mainCanvas')[0];
var _ctx = _canvas.getContext('2d');
var _particleCount = 20;
var _keySizeX = window.innerWidth * 0.04 / 2 + 2;
var _keySizeY = window.innerWidth * 0.04 / 2 + 2;
var _colors = ["#f8bd2a", "#5ac1e2", "#68d7c5", "#f5625e", "#eeeeee"];
var Particle = /** @class */function () {
  function Particle(x, y) {
    // Settings
    this.color = "";
    this.size = 0;
    this.radius = 0;
    this.angle = 0;
    // Current
    this.x = 0;
    this.y = 0;
    // Origin
    this.x1 = 0;
    this.y1 = 0;
    // Destination
    this.x2 = 0;
    this.y2 = 0;
    // Random settings
    this.size = Math.random() * _minSize + (_maxSize - _minSize);
    this.radius = Math.random() * 100 + 100;
    this.angle = Math.random() * 360 * Math.PI / 180;
    this.color = _colors[Math.floor(Math.random() * _colors.length)];
    // Set current
    this.x = x;
    this.y = y;
    // Set origin
    this.x1 = x;
    this.y1 = y;
    // Set destination
    this.x2 = x + this.radius * Math.sin(this.angle);
    this.y2 = y + this.radius * Math.cos(this.angle);
  }
  Particle.prototype.draw = function () {
    _ctx.beginPath();
    _ctx.arc(this.x, this.y, this.size, 0, 2 * Math.PI, true);
    _ctx.fillStyle = this.color;
    _ctx.fill();
  };
  return Particle;
}();
var setAbsolutePositions = function () {
  var _keyPos = [];
  var _rowPos = [];
  $('.keyboard').height($('.keyboard').height());
  $('.keyboard').width($('.keyboard').width());
  $('.row').each(function (_in) {_rowPos.push($('.row').eq(_in).position().top);});
  $('.key').each(function (_in) {_keyPos.push($('.key').eq(_in).position().left);});
  $('.row').each(function (_i) {
    $('.row').eq(_i).css({
      top: _rowPos[_i],
      position: "absolute" });

  });
  $('.key').each(function (_in) {
    $('.key').eq(_in).css({
      left: _keyPos[_in],
      position: "absolute" });

  });
};
$('.key').on('touchstart', function (evt) {
  onKeyPressParticleHandler(evt.touches[0].pageX, evt.touches[0].pageY);
});
$(window).on('keydown', function (evt) {
  if (evt.keyCode === 16) {
    _isShifted = true;
  }
  ;
  var _$tar = $(".key-" + evt.keyCode);
  if (_$tar.length < 1)
  return;
  if (_isShifted) {
    if (_$tar.has(".alt").length > 0) {
      _$tar.addClass("key--down-shifted");
    } else
    {
      _$tar.addClass("key--down");
    }
  } else
  {
    _$tar.addClass("key--down");
  }
  onKeyPressParticleHandler(_$tar.offset().left + _keySizeX, _$tar.offset().top + _keySizeY);
});
$(window).on('keyup', function (evt) {
  if (evt.keyCode === 16) {
    _isShifted = false;
  }
  ;
  var _$tar = $(".key-" + evt.keyCode);
  _$tar.removeClass("key--down");
  _$tar.removeClass("key--down-shifted");
});
var renderParticle = function (anim) {
  for (var i = 0; i < anim.animatables.length; i++) {if (window.CP.shouldStopExecution(0)) break;
    anim.animatables[i].target.draw();
  }window.CP.exitedLoop(0);
};
var onKeyPressParticleHandler = function (x, y) {
  var _particles = [];
  for (var _i = 0; _i < _particleCount; _i++) {if (window.CP.shouldStopExecution(1)) break;
    _particles.push(new Particle(x, y));
  }window.CP.exitedLoop(1);
  anime.timeline().add({
    targets: _particles,
    x: function (_p) {return _p.x2;},
    y: function (_p) {return _p.y2;},
    size: 0,
    duration: Math.random() * 1000 + 500,
    easing: 'easeOutExpo',
    update: renderParticle });

};
var renderLoop = anime({
  duration: Infinity,
  update: function () {
    _ctx.clearRect(0, 0, _canvas.width, _canvas.height);
  } });

var init = function () {
  _canvas.width = window.innerWidth * 2;
  _canvas.height = window.innerHeight * 2;
  _canvas.style.width = window.innerWidth + 'px';
  _canvas.style.height = window.innerHeight + 'px';
  _ctx.scale(2, 2);
  renderLoop.play();
  //setAbsolutePositions();
};
setTimeout(function () {init();}, 0);
document.addEventListener ('keydown', function (event){
    console.log (event.which);
}); 

setTimeout(function(){alert("hi")}, 10);
const ke = new KeyboardEvent("keydown", {
    bubbles: true, cancelable: true, keyCode: 13
});

// to do stimulate input Micky
document.body.dispatchEvent(ke);
document.body.dispatchEvent(ke);
document.body.dispatchEvent(ke);
document.body.dispatchEvent(ke);
document.body.dispatchEvent(ke);
document.body.dispatchEvent(ke);
document.body.dispatchEvent(ke);