var stack = [];
// ;(function() {

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

  function processItem(name, id) {
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

      // https://www.youtube.com/user/circusteeth

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

  function processStack(stack)
  {
    var stacks = [];
    for (var i = 0; i < stack.length; i++) {
      stacks.push(new MyStack(stack[i]));
    }

    for (var i = 0; i < stacks.length; i++) {
      stacks[i].setNextStack(stacks[i + 1]);
    }

    stacks[0].process();
  }

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

// })();