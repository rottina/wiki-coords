javascript: (function () {
  const MSG = 'Please manually update the "type:" value.\nIf outside the U.S., update the "earth_region:" value.\n\nSome common types:\nadm1st adm2nd adm3rd airport city edu event forest isle landmark mountain railwaystation river waterbody';
  let adm2nd = 'ADD_IT';
  let type = 'landmark';
  let properName = document.getElementsByClassName('widget-reveal-card-address-line widget-reveal-card-bold')[0].innerHTML.toLowerCase() || undefined;
  let address = document.getElementsByClassName('widget-reveal-card-address-line')[1] || undefined;
  let coords = document.getElementsByClassName('widget-reveal-card-lat-lng')[0] || undefined;
  if (coords === undefined) {
    coords = 'ADD_IT'
  } else {
    coords = coords.innerHTML.replace(', ', '|');
  }
  if (properName !== undefined && address !== undefined && coords !== undefined) {
    if (properName.indexOf('school') !== -1) {
      type = 'edu';
    } else if (properName.indexOf('college') !== -1) {
      type = 'edu';
    } else if (properName.indexOf('Academia') !== -1) {
      type = 'edu';
    } else if (properName.indexOf('university') !== -1) {
      type = 'edu';
    } else if (properName.indexOf('academy') !== -1) {
      type = 'edu';
    } else if (properName.indexOf('Colegio') !== -1) {
      type = 'edu';
    } else if (properName.indexOf('river') !== -1) {
      type = 'river';
    } else if (properName.indexOf('lake') !== -1) {
      type = 'waterbody';
    } else if (properName.indexOf('airport') !== -1) {
      type = 'airport';
    } else if (properName.indexOf('forest') !== -1) {
      type = 'forest';
    } else if (properName.indexOf('mount') !== -1) {
      type = 'mountain';
    } else {
      type = 'landmark';
    }
    if (address.innerHTML.toString().indexOf(',') !== -1) {
      adm2nd = "US-" + address.innerHTML.split(',')[1].substring(0, 3).trim();
    }
  }
  prompt(MSG, "{{coord|" + coords + "|type:" + type + "_globe:earth_region:" + adm2nd + "|display=title}}")
})()
