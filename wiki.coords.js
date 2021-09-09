javascript: (function() {
  const comma = ", ";
  const msg = "Please manually update the \"type:\" value.\nIf outside the U.S., update the \"earth_region:\" value.\n\nSome common types:\nadm1st adm2nd adm3rd airport city edu event forest isle landmark mountain railwaystation river waterbody";
  const region = "US-";
  const type = "landmark";
  let coords = document.querySelector("#action-menu > ul > li:nth-child(1) > div.nbpPqf-menu-x3Eknd-text-haAclf > div.nbpPqf-menu-x3Eknd-text");
  if (coords === undefined) {
    coords = "ADD_COORDS";
  } else {
    coords = coords.innerText.replace(comma, "|");
  }
  prompt(msg, "{{coord|" + coords + "|type:" + type + "_globe:earth_region:" + region + "|display=title}}")
})()
