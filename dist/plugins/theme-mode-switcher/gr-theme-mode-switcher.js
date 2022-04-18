

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
          <h6 class="title">Accent Color</h6>
        </div>
        <ul class="color-skin list-inline">
          <li data-color="#f51e46" class="color-item accent-color red"></li>
          <li data-color="#0068e1" class="color-item accent-color blue"></li>
          <li data-color="#0095b6" class="color-item accent-color bondi-blue"></li>
          <li data-color="#6453f7" class="color-item accent-color cornflower active"></li>
          <li data-color="#723881" class="color-item accent-color violet"></li>
          <li data-color="#fa9928" class="color-item accent-color yellow"></li>
          <li data-color="#fd6602" class="color-item accent-color orange"></li>
          <li data-color="#59b210" class="color-item accent-color green"></li>
          <li data-color="#ff749f" class="color-item accent-color pink"></li>
          <li data-color="#2a3447" class="color-item accent-color black"></li>
          <li data-color="#4b0082" class="color-item accent-color indigo"></li>
          <li data-color="#f8008c" class="color-item accent-color magenta"></li>
        </ul>
      </div>
      <div class="panel-group">
        <div class="panel-title">
          <h6 class="title">Menu Bar Background
          </h6>
        </div>
        <ul class="color-skin list-inline">
          <li data-color="#f51e46" class="color-item accent-color red"></li>
          <li data-color="#0068e1" class="color-item accent-color blue"></li>
          <li data-color="#0095b6" class="color-item accent-color bondi-blue"></li>
          <li data-color="#6453f7" class="color-item accent-color cornflower"></li>
          <li data-color="#723881" class="color-item accent-color violet"></li>
          <li data-color="#fa9928" class="color-item accent-color yellow"></li>
          <li data-color="#fd6602" class="color-item accent-color orange"></li>
          <li data-color="#59b210" class="color-item accent-color green"></li>
          <li data-color="#ff749f" class="color-item accent-color pink"></li>
          <li data-color="#2a3447" class="color-item accent-color black"></li>
          <li data-color="#4b0082" class="color-item accent-color indigo"></li>
          <li data-color="#f8008c" class="color-item accent-color magenta"></li>
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
})
