

$.fn.hasAttr = function(name) {  
  return this.attr(name) !== undefined;
};

//Theme Switcher Panel
const mode_panel_init= () => {
  var activation = $('body').hasAttr('data-theme-mode-panel-active');
    // console.log(activation);
    let bodyactive = $('body').attr('data-theme');
    let defaultActive = (bodyactive == 'light' || bodyactive == undefined);
    console.log(defaultActive);

  if(activation){
    $('body').append(`
    <div class="position-fixed-right mode-switcher-panel-wrapper">
    <div class="position-relative mode-switcher-panel">
      <div class="panel-group">
        <div class="panel-title">
          <h6 class="title">Primary Color</h6>
        </div>
        <ul class="color-skin list-inline">
          <li data-color="#f51e46" class="color-item primary-color"></li>
          <li data-color="#0068e1" class="color-item primary-color"></li>
          <li data-color="#0095b6" class="color-item primary-color"></li>
          <li data-color="#6453f7" class="color-item primary-color"></li>
          <li data-color="#723881" class="color-item primary-color"></li>
          <li data-color="#fa9928" class="color-item primary-color"></li>
          <li data-color="#fd6602" class="color-item primary-color"></li>
          <li data-color="#59b210" class="color-item primary-color"></li>
          <li data-color="#ff749f" class="color-item primary-color"></li>
          <li data-color="#2a3447" class="color-item primary-color"></li>
          <li data-color="#4b0082" class="color-item primary-color"></li>
          <li data-color="#f8008c" class="color-item primary-color"></li>
        </ul>
      </div>
      <div class="panel-group">
        <div class="panel-title">
          <h6 class="title">Secondary Color</h6>
        </div>
        <ul class="color-skin list-inline">
          <li data-color="#f51e46" class="color-item secondary-color"></li>
          <li data-color="#0068e1" class="color-item secondary-color"></li>
          <li data-color="#0095b6" class="color-item secondary-color"></li>
          <li data-color="#6453f7" class="color-item secondary-color"></li>
          <li data-color="#723881" class="color-item secondary-color"></li>
          <li data-color="#fa9928" class="color-item secondary-color"></li>
          <li data-color="#fd6602" class="color-item secondary-color"></li>
          <li data-color="#59b210" class="color-item secondary-color"></li>
          <li data-color="#ff749f" class="color-item secondary-color"></li>
          <li data-color="#2a3447" class="color-item secondary-color"></li>
          <li data-color="#4b0082" class="color-item secondary-color"></li>
          <li data-color="#f8008c" class="color-item secondary-color"></li>
        </ul>
      </div>
      <div class="panel-group">
        <div class="panel-title">
          <h6 class="title">Menu Bar Text Color
          </h6>
        </div>
        <ul class="color-skin list-inline">
          <li data-color="#f51e46" class="color-item menu-text"></li>
          <li data-color="#0068e1" class="color-item menu-text"></li>
          <li data-color="#0095b6" class="color-item menu-text"></li>
          <li data-color="#6453f7" class="color-item menu-text"></li>
          <li data-color="#723881" class="color-item menu-text"></li>
          <li data-color="#fa9928" class="color-item menu-text"></li>
          <li data-color="#fd6602" class="color-item menu-text"></li>
          <li data-color="#59b210" class="color-item menu-text"></li>
          <li data-color="#ff749f" class="color-item menu-text"></li>
          <li data-color="#2a3447" class="color-item menu-text"></li>
          <li data-color="#4b0082" class="color-item menu-text"></li>
          <li data-color="#f8008c" class="color-item menu-text"></li>
        </ul>
      </div>
      <div class="panel-group">
        <div class="panel-title">
          <h6 class="title">Menu Bar Background Color
          </h6>
        </div>
        <ul class="color-skin list-inline">
          <li data-color="#f51e46" class="color-item menu-bg"></li>
          <li data-color="#0068e1" class="color-item menu-bg"></li>
          <li data-color="#0095b6" class="color-item menu-bg"></li>
          <li data-color="#6453f7" class="color-item menu-bg"></li>
          <li data-color="#723881" class="color-item menu-bg"></li>
          <li data-color="#fa9928" class="color-item menu-bg"></li>
          <li data-color="#fd6602" class="color-item menu-bg"></li>
          <li data-color="#59b210" class="color-item menu-bg"></li>
          <li data-color="#ff749f" class="color-item menu-bg"></li>
          <li data-color="#2a3447" class="color-item menu-bg"></li>
          <li data-color="#4b0082" class="color-item menu-bg"></li>
          <li data-color="#f8008c" class="color-item menu-bg"></li>
        </ul>
      </div>
      <button class="switcher-minimize-button">
      <i class="fa-solid fa-gear loading"></i>
      </button>
    </div>
  </div>
    `) 
  }
}

const mode_panel_activities = () => {
  $('.mode-switcher-panel').on("click",function(e){
    let button = document.querySelectorAll('.switcher-btn');
    let buttonPanel = document.querySelector('.switcher-minimize-button');
    button.forEach((btnItem) => {
      if(e.target == btnItem){
        e.target.classList.add('active');
        $(e.target).siblings().removeClass('active');
        let selectedMode = $('.switcher-btn.active').attr('data-theme-mode');
        $('body').attr('data-theme' , selectedMode);
      }
    })
    if(e.target == buttonPanel){
      $('body').toggleClass("theme-mode-panel-open");
      if($('body').hasClass("theme-mode-panel-open")){
        $(e.target).addClass("open");
      }else{
        $(e.target).removeClass("open");
      }
    }
  
  })
}
$(document).ready(function(){
  mode_panel_init();
  mode_panel_activities();

  const colorPickers = [
    {
      selector: '.primary-color',
      variable: '--bs-primary-500'
    },
    {
      selector: '.secondary-color',
      variable: '--bs-secondary-500'
    },
    {
      selector: '.menu-text',
      variable: '--main-nav-txt'
    },
    {
      selector: '.menu-bg',
      variable: '--main-nav-bg'
    },
  ]
  const root = document.documentElement;
  colorPickers.forEach((color) => {
    const colorSets = document.querySelectorAll(color.selector);
    Array.from(colorSets).forEach((item) => {
      item.style.backgroundColor = item.dataset.color;

      item.addEventListener('click', (e) => {
        removeClassFromSiblings(colorSets);
        let clickedItem = e.target;
        clickedItem.classList.add('active');
        root.style.setProperty(color.variable, clickedItem.dataset.color);
      });
    })
  });
  function removeClassFromSiblings(colorSets){
    Array.from(colorSets).forEach((item) => {
      item.classList.remove('active');
    })
  }
})
