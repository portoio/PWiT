import $ from 'jquery';

$(function() {
  var breakMobile = 730; // viewport px breakpoint

  const fixedHeader = function() {
    var viewportWidth = $( window ).width(),
        fixedClass = 'navigation--fixed-top',
        $navElement = $(".navigation");

    if ($(window).scrollTop() > '1' && viewportWidth >= breakMobile) {
      $navElement.addClass(fixedClass);
    } else {
      $navElement.removeClass(fixedClass);
    }
  };

  // Toggle mobile navigation
  $(".navigation__mobile-menu__toggle").click(function() {
    $(this).parent().toggleClass('is-open');
  });

  // Force close mobile navigation when clicking anywhere (except the toggle button itself)
  $( document ).on('mousedown touchstart', function(event) {
    if (!$(event.target).closest(".navigation").length) {
      $(".navigation.is-open").removeClass('is-open');
    }
  });

  $(window).on('resize scroll', fixedHeader);
  filtro();
});

function filtro() {
  var $filterControls = $(".intro-section__tags-content__links"),
    $filterObjects = $(".profile-cards__content-item"),
    filterOutClass = 'filtro-out',
    controlActiveClass = 'intro-section__tags-content__links--active';

  $filterControls.click(function(event) {

    var filterName = $(this).text();
    if (!filterName.length) {
      return;
    }

    event.preventDefault();
    var currentFilter = $(this).hasClass(controlActiveClass);

    // Restore unfiltered order when clicking on an already active filter.
    $filterControls.removeClass(controlActiveClass);
    $filterObjects.removeClass(filterOutClass);
    if(currentFilter) {
      reorderProfiles(shuffleOrder);
      return;
    }

    reorderProfiles(originalOrder);
    $(this).addClass(controlActiveClass);
    
    var $filteredIn = $filterObjects
      .addClass(filterOutClass)
      .filter("[data-filtro*=" + filterName + "]")
      .removeClass(filterOutClass);

    if (!$filteredIn.length) {
      $filterObjects.removeClass(filterOutClass);
    }
  });
}

// Feature/#54 - randomize profiles in the homepage;
// We can't use Hugo's shuffle function because that randomizes at build time, not with each page load.
var originalOrder = null
var shuffleOrder = null;

function shuffleProfiles() {
  originalOrder = $('li.profile-cards__content-item');
  const length = originalOrder.length;

  for(var i = 0; i < length; i++) {
    var j = Math.floor(Math.random() * length);
    $(originalOrder[i]).before($(originalOrder[j]));
  }

  // Store the new order so that we don't get a new order every time we remove a filter.
  shuffleOrder = $('li.profile-cards__content-item');
}

function reorderProfiles(order) {
  for(var i = 0; i < order.length; i++) {
    $(order[i]).parent().append($(order[i]));
  }
}

$(shuffleProfiles);
