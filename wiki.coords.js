javascript: (() => {
  const region = "US-";
  const comma = ", ";
  const type = "landmark";
  const msg = "Please manually update the \"type:\" value.\nIf outside the U.S., update the \"earth_region:\" value.\n\nSome common types:\nadm1st adm2nd adm3rd airport city edu event forest isle landmark mountain railwaystation river waterbody";
  let coords = document.querySelector("#action-menu > div:nth-child(1) > div > div");
  if (coords === undefined) {
    coords = "ADD_COORDS";
  } else {
    coords = coords.innerText.replace(comma, "|");
  }
  prompt(msg, "{{coord|" + coords + "|type:" + type + "_globe:earth_region:" + region + "|display=title}}")
})();
