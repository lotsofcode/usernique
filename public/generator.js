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
  'Chess Board',
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
  'Jet fighter',
  'Junk',
  'Kaleidoscope',
  'Kitchen',
  'Knife',
  'Leather jacket',
  'Leg',
  'Library',
  'Liquid',
  'Magnet',
  'Man',
  'Map',
  'Maze',
  'M',
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

for (var i = 0; i < 100; i++) {

  var first, second;

  first = words[Math.floor(Math.random() * words.length)].toLowerCase();
  second = words[Math.floor(Math.random() * words.length)].toLowerCase();

  check(first + '' + second, 'row_' + i);
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
      '<a class="twitter-url"></a> ' +
    '</td>' +
    '<td>' +
      '<i class="twitter icon-spinner icon-spin"></i>' +
    '</td>' +
    '<td>' +
      '<a class="github-url"></a> ' +
    '</td>' +
    '<td>' +
      '<i class="github icon-spinner icon-spin"></i>' +
    '</td>' +
    // '<td><a class="io-url"></a></td>' +
    // '<td>' +
    //   '<i class="io icon-spinner icon-spin"></i>' +
    // '</td>' +
    '<td>' +
      '<a class="com-url"></a> ' +
    '</td>' +
    '<td>' +
      '<i class="com icon-spinner icon-spin"></i>' +
    '</td>' +
    '<td>' +
      '<i class="success">0</i> / ' +
      '<i class="progress">0</i>' +
    '</td>' +
    '</tr>';

  id = '#' + id;

  $('#results').append(html);

  $(".username", id).text(name);
  $(".twitter-url", id).text("twitter.com/" + name).attr("href", "http://www.twitter.com/" + name);
  $(".github-url", id).text("github.com/" + name).attr("href", "http://www.github.com/" + name);
  $(".io-url", id).text(name + ".io").attr("href", "http://www." + name + ".io");
  $(".com-url", id).text(name + ".com").attr("href", "http://www." + name + ".com");

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
  });

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
  });

  // $.get("io/" + name, function(data) {
  //   if (data == "free") {
  //     $(".io", id).attr("class", "icon-ok");
  //     $('.success', id).html(parseInt($('.success', id).html(), 10) + 1);
  //   } else if (data == "taken") {
  //     $(".io", id).attr("class", "icon-remove");
  //   } else {
  //     $(".io", id).attr("class", "icon-question-sign");
  //   }
  //   $('.progress', id).html(parseInt($('.progress', id).html(), 10) + 1);
  // });

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
  });
}