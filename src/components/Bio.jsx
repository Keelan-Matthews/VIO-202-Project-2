import React from 'react';
import Background from '../images/background.svg';
import $ from 'jquery';
import BioInfo from './BioInfo';
import StatInfo from './StatInfo';
import AbilityInfo from './AbilityInfo';

export default function Bio() {
  $(window).scroll(function(e){ 
    var $el = $('.background'); 
    var isPositionFixed = ($el.css('position') === 'fixed');
    if ($(this).scrollTop() > 1000 && !isPositionFixed){ 
      $el.css({'position': 'fixed', 'transform': 'translateY(1080px)'}); 
    }
    if (($(this).scrollTop() < 1080 || $(this).scrollTop() > 3240) && isPositionFixed){
      $el.css({'position': 'static', 'transform': 'translateY(0px)'}); 
    } 
  });

  return (
    <section className="">
      <div className="vh-100">
          <img src={Background} className="background" alt="" />
      </div>
      <BioInfo/>
      <StatInfo/>
      <AbilityInfo/>
    </section>
  )
}
