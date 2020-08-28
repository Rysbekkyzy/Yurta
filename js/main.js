// Banner
function myFunction() {
    document.getElementById("myDropdown").classList.toggle("show");
  }
  
  function myFunction2() {
    document.getElementById("myDropdown2").classList.toggle("show");
  }
  
  function myFunction3() {
    document.getElementById("myDropdown3").classList.toggle("show");
  }
  
  function myFunction4() {
    document.getElementById("myDropdown4").classList.toggle("show");
  }
  
  function myFunction5() {
    document.getElementById("myDropdown5").classList.toggle("show");
  }
  
  
  
  window.onclick = function (event) {
    if (!event.target.matches('.dropbtn')) {
  
      var dropdowns = document.getElementsByClassName("dropdown-content");
      var i;
      for (i = 0; i < dropdowns.length; i++) {
        var openDropdown = dropdowns[i];
        if (openDropdown.classList.contains('show')) {
          openDropdown.classList.remove('show');
        }
      }
    }
  }
  
  // Mobile version
  
  $("#mobile-dropbtn").click(function () {
    $("#mobile-myDropdown").toggle(0, function () {
  
  
    });
  });
  $("#mobile-dropbtn2").click(function () {
    $("#mobile-myDropdown2").toggle(0, function () {
  
    });
  });
  $("#mobile-dropbtn3").click(function () {
    $("#mobile-myDropdown3").toggle(0, function () {
  
    });
  });
  $("#mobile-dropbtn4").click(function () {
    $("#mobile-myDropdown4").toggle(0, function () {
  
    });
  });
  $("#mobile-dropbtn5").click(function () {
    $("#mobile-myDropdown5").toggle(0, function () {
   
    });
  });
  
 
  
  //  Banner-mpbile
  
  $(".searchbtn").click(function () {
    $(".mobile").toggle(0, function () {
  
    });
  });
  
  
  // New mobile
  
  // Get the modal
  var modal = document.getElementById("myModal");
  
  // Get the button that opens the modal
  var btn = document.getElementById("myBtn");
  
  // Get the <span> element that closes the modal
  var span = document.getElementsByClassName("mobile__close")[0];
  
  // When the user clicks the button, open the modal 
  btn.onclick = function() {
    modal.style.display = "block";
  }
  
  // When the user clicks on <span> (x), close the modal
  span.onclick = function() {
    modal.style.display = "none";
  }
  
  // When the user clicks anywhere outside of the modal, close it
  window.onclick = function(event) {
    if (event.target == modal) {
      modal.style.display = "none";
    }
  }
  
  
  
  
  // reset
  
  function resetButtonBind() {
    $(document).on('click', '.reset_button', function() {
        $(this).parents('form').find('input[type="text"]').removeAttr('text');
        $('#vacancy_position_placeholder').attr('checked','checked');
  //        $('#vacancy_active_1').attr('checked','checked');
        $(this).parents('form').find('.mobile__type--svg').removeAttr('');
        $(this).parents('form').find('input[type="search"]').removeAttr('value');
        setTimeout(function() {
            $(this).parents('form').trigger('change');
        }, 1000);
    });
  }