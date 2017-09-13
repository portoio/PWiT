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
    $filterControls.removeClass(controlActiveClass);
    $(this).addClass(controlActiveClass);

    if (!filterName.length) {
      return;
    } else {
      event.preventDefault();
    }

    $filteredIn = $filterObjects.addClass(filterOutClass).filter("[data-filtro*=" + filterName + "]")
      .removeClass(filterOutClass);

    if (!$filteredIn.length) {
      $filterObjects.removeClass(filterOutClass);
    }
  });
}
