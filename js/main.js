//  Banner mobile btn

$(".searchbtn").click(function () {
  $(".mobile").toggle(0, function () {

  });
});


// New mobile version

// Get the modal
var modal = document.getElementById("myModal");

// Get the button that opens the modal
var btn = document.getElementById("myBtn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("mobile__close")[0];

// When the user clicks the button, open the modal 
btn.onclick = function () {
  modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function () {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}



// banner filter

$('select').each(function () {
  var $this = $(this),
    numberOfOptions = $(this).children('option').length;

  $this.addClass('select-hidden');
  $this.wrap('<div class="select"></div>');
  $this.after('<div class="select-styled"></div>');

  var $styledSelect = $this.next('div.select-styled');
  $styledSelect.text($this.children('option').eq(0).text());

  var $list = $('<ul />', {
    'class': 'select-options'
  }).insertAfter($styledSelect);

  for (var i = 0; i < numberOfOptions; i++) {
    $('<li />', {
      text: $this.children('option').eq(i).text(),
      rel: $this.children('option').eq(i).val()
    }).appendTo($list);
  }

  var $listItems = $list.children('li');



  $styledSelect.click(function (e) {
    if ($('.select-options').is(':visible')) {
      e.stopPropagation();
      $styledSelect.text($(this).text()).removeClass('active');
      $this.val($(this).attr('rel'));

      $list.hide();
      //console.log($this.val());   

    } else {
      e.stopPropagation();
      $('div.select-styled.active').each(function () {
        $(this).removeClass('active').next('ul.select-options').toggle();
      });
      $(this).toggleClass('active').next('ul.select-options').toggle();
    } //end if
  });

  $listItems.click(function (e) {
    e.stopPropagation();
    $styledSelect.text($(this).text()).removeClass('active');
    $this.val($(this).attr('rel'));
    $list.hide();
    //console.log($this.val());
  });

  $(document).click(function () {
    $styledSelect.removeClass('active');
    $list.hide();
  });

});


// mobile-reset Svg

$("#filter-btn").click(function () {
  $("#filter-focus").css({
    background: '#da7ee2'
  })
});
$("#filter-btn2").click(function () {
  $("#filter-focus2").css({
    background: '#da7ee2'
  })
});
$("#filter-btn3").click(function () {
  $("#filter-focus3").css({
    background: '#da7ee2'
  })
});
$("#filter-btn4").click(function () {
  $("#filter-focus4").css({
    background: '#da7ee2'
  })
});
$("#filter-btn5").click(function () {
  $("#filter-focus5").css({
    background: '#da7ee2'
  })
});
$("#filter-btn6").click(function () {
  $("#filter-focus6").css({
    background: '#da7ee2'
  })
});




$(".reset").click(function () {
  $("#filter-focus").css({
    background: '#ffffff'
  })
  $("#filter-focus2").css({
    background: '#ffffff'
  })
  $("#filter-focus3").css({
    background: '#ffffff'
  })
  $("#filter-focus4").css({
    background: '#ffffff'
  })
  $("#filter-focus5").css({
    background: '#ffffff'
  })
  $("#filter-focus6").css({
    background: '#ffffff'
  })
});


// reset rooms 
$("#rooms-inp").click(function () {
  $("#rooms-btn").css({
    background: '#da7ee2'
  })
});
$("#rooms-inp2").click(function () {
  $("#rooms-btn2").css({
    background: '#da7ee2'
  })
});
$("#rooms-inp3").click(function () {
  $("#rooms-btn3").css({
    background: '#da7ee2'
  })
});
$("#rooms-inp4").click(function () {
  $("#rooms-btn4").css({
    background: '#da7ee2'
  })
});
$("#rooms-inp5").click(function () {
  $("#rooms-btn5").css({
    background: '#da7ee2'
  })
});
$("#rooms-inp6").click(function () {
  $("#rooms-btn6").css({
    background: '#da7ee2'
  })
});



$(".reset").click(function () {
  $("#rooms-btn").css({
    background: '#ffffff'
  })
  $("#rooms-btn2").css({
    background: '#ffffff'
  })
  $("#rooms-btn3").css({
    background: '#ffffff'
  })
  $("#rooms-btn4").css({
    background: '#ffffff'
  })
  $("#rooms-btn5").css({
    background: '#ffffff'
  })
  $("#rooms-btn6").css({
    background: '#ffffff'
  })

});

// mobile buy town money

// banner filter

$('select').each(function () {
  var $this = $(this),
    numberOfOptions = $(this).children('option').length;

  $this.addClass('selectMob-hidden');
  $this.wrap('<div class="selectMob"></div>');
  $this.after('<div class="selectMob-styled"></div>');

  var $styledSelect = $this.next('div.selectMob-styled');
  $styledSelect.text($this.children('option').eq(0).text());

  var $list = $('<ul />', {
    'class': 'selectMob-options'
  }).insertAfter($styledSelect);

  for (var i = 0; i < numberOfOptions; i++) {
    $('<li />', {
      text: $this.children('option').eq(i).text(),
      rel: $this.children('option').eq(i).val()
    }).appendTo($list);
  }

  var $listItems = $list.children('li');



  $styledSelect.click(function (e) {
    if ($('.selectMob-options').is(':visible')) {
      e.stopPropagation();
      $styledSelect.text($(this).text()).removeClass('active');
      $this.val($(this).attr('rel'));

      $list.hide();
      //console.log($this.val());   

    } else {
      e.stopPropagation();
      $('div.selectMob-styled.active').each(function () {
        $(this).removeClass('active').next('ul.selectMob-options').toggle();
      });
      $(this).toggleClass('active').next('ul.selectMob-options').toggle();
    } //end if
  });

  $listItems.click(function (e) {
    e.stopPropagation();
    $styledSelect.text($(this).text()).removeClass('active');
    $this.val($(this).attr('rel'));
    $list.hide();
    //console.log($this.val());
  });

  $(document).click(function () {
    $styledSelect.removeClass('active');
    $list.hide();
  });

});