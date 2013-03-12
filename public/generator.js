/*
Favs so far:

  - barbecuebrain
  - circusteeth

 */

function shuffle(o){ //v1.0
    for(var j, x, i = o.length; i; j = parseInt(Math.random() * i), x = o[--i], o[i] = o[j], o[j] = x);
    return o;
};

function scrollTo(elem, callback) {
    $('html,body').animate({
      scrollTop: $(elem).offset().top
    }, {
      duration: 400,
      complete: callback
    });
}

var words_three = [
'aba',
'abb',
'ait',
'ala',
'alb',
'alk',
'alt',
'awn',
'bar',
'bee',
'bel',
'bis',
'cep',
'col',
'cwm',
'dah',
'dap',
'daw',
'dit',
'dol',
'dop',
'eft',
'ell',
'ere',
'eth',
'fid',
'fie',
'fug',
'gad',
'gal',
'gar',
'gib',
'gid',
'hoc',
'hoy',
'ivi',
'jow',
'jud',
'jug',
'ked',
'kef',
'kep',
'ket',
'kip',
'kir',
'kit',
'lac',
'lar',
'lev',
'lux',
'mel',
'mho',
'mim',
'mow',
'nim',
'ord',
'orf',
'pax',
'ped',
'per',
'pro',
'qat',
'qua',
'ret',
'rev',
'ria',
'roc',
'sal',
'sic',
'ted',
'tej',
'tod',
'tog',
'ton',
'tot',
'tow',
'tye',
'wis',
'wyn',
'yad',
'yag',
'yam',
'yaw',
'yen',
'yew',
'yex',
'yok',
'yon',
'zek',
'zugs'
];

var words = [
  'Adult',
  'Aeroplane',
  'Air',
  'Aircraft',
  'Airforce',
  'Airport',
  'Album',
  'Alphabet',
  'Apple',
  'Arm',
  'Army',
  'Baby',
  'Baby',
  'Backpack',
  'Balloon',
  'Banana',
  'Bank',
  'Barbecue',
  'Bathroom',
  'Bathtub',
  'Bed',
  'Bed',
  'Bee',
  'Bible',
  'Bible',
  'Bird',
  'Bomb',
  'Book',
  'Boss',
  'Bottle',
  'Bowl',
  'Box',
  'Boy',
  'Brain',
  'Bridge',
  'Butterfly',
  'Button',
  'Cappuccino',
  'Car',
  'Carpet',
  'Carrot',
  'Cave',
  'Chair',
  'Chess',
  'Chief',
  'Child',
  'Chisel',
  'Chocolates',
  'Church',
  'Church',
  'Circle',
  'Circus',
  'Circus',
  'Clock',
  'Clown',
  'Coffee',
  'Comet',
  'Compass',
  'Computer',
  'Crystal',
  'Cup',
  'Cycle',
  'Data',
  'Desk',
  'Diamond',
  'Dress',
  'Drill',
  'Drink',
  'Drum',
  'Dung',
  'Ears',
  'Earth',
  'Egg',
  'Electricity',
  'Elephant',
  'Eraser',
  'Explosive',
  'Eyes',
  'Family',
  'Fan',
  'Feather',
  'Festival',
  'Film',
  'Finger',
  'Fire',
  'Floodlight',
  'Flower',
  'Foot',
  'Fork',
  'Freeway',
  'Fruit',
  'Fungus',
  'Game',
  'Garden',
  'Gas',
  'Gate',
  'Gemstone',
  'Girl',
  'Gloves',
  'God',
  'Grapes',
  'Guitar',
  'Hammer',
  'Hat',
  'Hieroglyph',
  'Highway',
  'Horoscope',
  'Horse',
  'Hose',
  'Ice',
  'Ice-c',
  'Insect',
  'Jet',
  'Junk',
  'Kaleidoscope',
  'Kitchen',
  'Knife',
  'Leather',
  'Leg',
  'Library',
  'Liquid',
  'Magnet',
  'Man',
  'Map',
  'Maze',
  'Meteor',
  'Microscope',
  'Milk',
  'Milsha',
  'Mist',
  'Money',
  'Monster',
  'Mosquito',
  'Mouth',
  'Nail',
  'Navy',
  'Necklace',
  'Needle',
  'Onion',
  'PaintBrush',
  'Pants',
  'Parachute',
  'Passport',
  'Pebble',
  'Pendulum',
  'Pepper',
  'Perfume',
  'Pillow',
  'Plane',
  'Planet',
  'Pocket',
  'Potato',
  'Printer',
  'Prison',
  'Pyramid',
  'Radar',
  'Rainbow',
  'Record',
  'Restaurant',
  'Rifle',
  'Ring',
  'Robot',
  'Rock',
  'Rocket',
  'Roo',
  'Rope',
  'Saddle',
  'Salt',
  'Sandpaper',
  'Sandwich',
  'Satellite',
  'School',
  'Sex',
  'Ship',
  'Shoes',
  'Shop',
  'Shower',
  'Signature',
  'Skeleton',
  'Slave',
  'Snail',
  'Software',
  'Solid',
  'Space',
  'Spectrum',
  'Sphere',
  'Spice',
  'Spiral',
  'Spoon',
  'Sports',
  'SpotLight',
  'Square',
  'Staircase',
  'Star',
  'Stomach',
  'Sun',
  'Sunglasses',
  'Surveyor',
  'SwimmingPool',
  'Sword',
  'Table',
  'Tapestry',
  'Teeth',
  'Telescope',
  'Television',
  'Tennis',
  'Thermometer',
  'Tiger',
  'Toilet',
  'Tongue',
  'Torch',
  'Torpedo',
  'Train',
  'Treadmill',
  'Triangle',
  'Tunnel',
  'Typewriter',
  'Umbrella',
  'Vacuum',
  'Vampire',
  'Videotape',
  'Vulture',
  'Water',
  'Weapon',
  'Web',
  'Wheelchair',
  'Window',
  'Woman',
  'Worm',
  'Xray',
];


var stack = [];
for (var i = 0; i < 20; i++) {

  var current = [];

  // first = words[Math.floor(Math.random() * words.length)].toLowerCase();
  // second = words[Math.floor(Math.random() * words.length)].toLowerCase();

  // for (var j = 0; j < 3; j++) {
    current.push(words[Math.floor(Math.random() * words.length)].toLowerCase());
    current.push(words_three[Math.floor(Math.random() * words_three.length)].toLowerCase());
    // current.push(words_three[Math.floor(Math.random() * words_three.length)].toLowerCase());
  // }

  check(current.join(''), 'row_' + i)  
}

function randomName() {
  var vowels = ["a", "e", "i", "o", "u"];
  var consanants = ["b", "c", "d", "f", "g", "h", "j", "k", "l", "m", "n", "p", "r", "s", "t", "v", "w", "x", "y", "z"];
  var modifiers = [

  function(s, i) { // th
    return (i && "dtsgjckpr".indexOf(s.substr(s.length - 1), 1) > -1 ? 'u' : false);
  },

  function(s) { // ea
    return (s.substr(s.length - 1, 1) == 'e' ? 'u' : false);
  },

  function(s, i) { // au / ou
    return (i && "oa".indexOf(s.substr(s.length - 1, 1)) > -1 ? 'u' : false);
  },

  function(s, i, l) { // aux
    return (s.substr(s.length - 1, 2) == 'au' && l - i === 1 ? 'x' : false);
  },

  function(s, i, l) { // ending y
    return (l - i === 1 ? 'y' : false);
  }];

  var length = 3 + Math.floor(Math.random() * 7);
  var name = "";

  for (var i = 0; i < length; i++) {
    var letter = "";
    var mod = modifiers[Math.floor(Math.random() * modifiers.length)](name, i, length);
    if (mod) {
      i += mod.length;
      name = name + mod;
    } else if (vowels.indexOf(name.substr(name.length - 1, 1)) < 0) {
      letter = vowels[Math.floor(Math.random() * vowels.length)];
    } else {
      letter = consanants[Math.floor(Math.random() * consanants.length)];
    }
    name = name + letter;
  }
  return name;
}

function check(name, id) {
  var html = '<tr id="' + id + '">' +
    '<td>' +
      '<a class="username"></a> ' +
    '</td>' +
    // '<td>' +
    //   '<a class="twitter-url"></a> ' +
    // '</td>' +
    '<td>' +
      '<a class="twitter icon-spinner icon-spin" target="_blank"></a>' +
    '</td>' +
    // '<td>' +
    //   '<a class="github-url"></a> ' +
    // '</td>' +
    '<td>' +
      '<a class="github icon-spinner icon-spin" target="_blank"></a>' +
    '</td>' +
    '<td>' +
      '<a class="youtube icon-spinner icon-spin" target="_blank"></a>' +
    '</td>' +
    // '<td><a class="io-url"></a></td>' +
    // '<td>' +
    //   '<i class="io icon-spinner icon-spin"></i>' +
    // '</td>' +
    // '<td>' +
    //   '<a class="couk-url"></a> ' +
    // '</td>' +
    '<td>' +
      '<a class="io icon-spinner icon-spin" target="_blank"></a>' +
    '</td>' +
    '<td>' +
      '<a class="com icon-spinner icon-spin" target="_blank"></a>' +
    '</td>' +
    '<td>' +
      '<a class="couk icon-spinner icon-spin" target="_blank"></a>' +
    '</td>' +
    // '<td>' +
    //   '<a class="com-url"></a> ' +
    // '</td>' +
    // '<td>' +
    //   '<i class="com icon-spinner icon-spin"></i>' +
    // '</td>' +
    '<td>' +
      '<i class="success">0</i> / ' +
      '<i class="progress">0</i>' +
    '</td>' +
    '</tr>';

  id = '#' + id;

  // stack.push(function(next) {
    $('#results').append(html);  
    $(".username", id).text(name);
    $(".twitter", id).attr("href", "http://www.twitter.com/" + name);
    $(".github", id).attr("href", "http://www.github.com/" + name);
    $(".youtube", id).attr("href", "http://www.youtube.com/user/" + name);
    $(".io", id).attr("href", "http://www." + name + ".io");
    $(".com", id).attr("href", "http://www." + name + ".com");
    $(".couk", id).attr("href", "http://www." + name + ".co.uk");

    // $(".twitter-url", id).text("twitter.com/" + name).attr("href", "http://www.twitter.com/" + name);
    // $(".github-url", id).text("github.com/" + name).attr("href", "http://www.github.com/" + name);
    // $(".io-url", id).text(name + ".io").attr("href", "http://www." + name + ".io");
    // $(".couk-url", id).text(name + ".co.uk").attr("href", "http://www." + name + ".co.uk");
    // $(".com-url", id).text(name + ".com").attr("href", "http://www." + name + ".com");
  //   next();
  // });

  stack.push(function(next) {

    $('.processing').removeClass('processing');
    $(id).addClass('processing');

    // scrollTo('.processing', function() {
    //   console.log($(this).siblings())
    // })

    next();
  });

  stack.push(function(next) {

    var current = 0;

    $.get("twitter/" + name, function(data) {
      if (data == "free") {
        $(".twitter", id).attr("class", "icon-ok");
        $('.success', id).html(parseInt($('.success', id).html(), 10) + 1);
      } else if (data == "taken") {
        $(".twitter", id).attr("class", "icon-remove");
      } else {
        $(".twitter", id).attr("class", "icon-question-sign");
      }
      $('.progress', id).html(parseInt($('.progress', id).html(), 10) + 1);
      deferNext();
    });

    $.get("github/" + name, function(data) {
      if (data == "free") {
        $(".github", id).attr("class", "icon-ok");
        $('.success', id).html(parseInt($('.success', id).html(), 10) + 1);
      } else if (data == "taken") {
        $(".github", id).attr("class", "icon-remove");
      } else {
        $(".github", id).attr("class", "icon-question-sign");
      }
      $('.progress', id).html(parseInt($('.progress', id).html(), 10) + 1);
      deferNext();
    });

    $.get("youtube/" + name, function(data) {
      if (data == "free") {
        $(".youtube", id).attr("class", "icon-ok");
        $('.success', id).html(parseInt($('.success', id).html(), 10) + 1);
      } else if (data == "taken") {
        $(".youtube", id).attr("class", "icon-remove");
      } else {
        $(".youtube", id).attr("class", "icon-question-sign");
      }
      $('.progress', id).html(parseInt($('.progress', id).html(), 10) + 1);
      deferNext();
    });

https://www.youtube.com/user/circusteeth

    $.get("couk/" + name, function(data) {
      if (data == "free") {
        $(".couk", id).attr("class", "icon-ok");
        $('.success', id).html(parseInt($('.success', id).html(), 10) + 1);
      } else if (data == "taken") {
        $(".couk", id).attr("class", "icon-remove");
      } else {
        $(".couk", id).attr("class", "icon-question-sign");
      }
      $('.progress', id).html(parseInt($('.progress', id).html(), 10) + 1);

      deferNext();
    });

    $.get("io/" + name, function(data) {
      if (data == "free") {
        $(".io", id).attr("class", "icon-ok");
        $('.success', id).html(parseInt($('.success', id).html(), 10) + 1);
      } else if (data == "taken") {
        $(".io", id).attr("class", "icon-remove");
      } else {
        $(".io", id).attr("class", "icon-question-sign");
      }
      $('.progress', id).html(parseInt($('.progress', id).html(), 10) + 1);

      deferNext();
    });

    $.get("com/" + name, function(data) {
      if (data == "free") {
        $(".com", id).attr("class", "icon-ok");
        $('.success', id).html(parseInt($('.success', id).html(), 10) + 1);
      } else if (data == "taken") {
        $(".com", id).attr("class", "icon-remove");
      } else {
        $(".com", id).attr("class", "icon-question-sign");
      }
      $('.progress', id).html(parseInt($('.progress', id).html(), 10) + 1);

      deferNext();
    });

    function deferNext() {
      var services = 6;
      current += 1;
      if (current == services) {

        if (parseInt($('.success', id).text(), 10) == services) {
          $('.success', id).parents('tr').addClass('maximum');
        }

        next();
      }
    }
  });
}

// current = stack.pop();


var MyStack = function(current) {
  this.current = current;
  this.next = null;
}

MyStack.prototype = {
  process: function() {
    current = this;
    this.current(function() {
      current.next && current.next.process();
    })
  },
  setNextStack: function(next) {
    this.next = next;
  }
}

var stacks = [];
for (var i = 0; i < stack.length; i++) {
  stacks.push(new MyStack(stack[i]));
}

for (var i = 0; i < stacks.length; i++) {
  stacks[i].setNextStack(stacks[i + 1]);
}

stacks[0].process();
