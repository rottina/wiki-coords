javascript: (() => {
  const coordRegex = /([^\d]*\d*)\.(\d{4})/g;
  const msg = "May need to update the \"type:\" value.\nUpdate the \"earth_region:\" value with ISO-2 code.\nSome common types:\nadm1st adm2nd adm3rd airport city edu event forest isle landmark mountain railwaystation river waterbody";
  const coordsElem = document.querySelector("#action-menu > div:nth-child(1) > div > div");
  let typeElem = document.querySelector("button.DkEaL");
  let coords = "";
  let iso2 = "US-";
  let geotype = "landmark";
  let finalLat = "";
  let finalLng = "";
  if (coordsElem === undefined) {
    coords = "ADD_COORDS";
  } else {
    coords = coordsElem.innerText;
    let lat = coords.split(",")[0].replaceAll(/\s/g, "");
    let lng = coords.split(",")[1].replaceAll(/\s/g, "");
    finalLat = lat.match(coordRegex);
    finalLng = lng.match(coordRegex);
  }
  if (typeElem !== null) {
    geotype = typeElem.textContent.toLowerCase();
    switch (true) {
      case /school/i.test(geotype):
        geotype = "edu";
        break;
      case /university/i.test(geotype):
        geotype = "edu";
        break;
      case /college/i.test(geotype):
        geotype = "edu";
        break;
      case /mountain/i.test(geotype):
        geotype = "mountain";
        break;
      case /lake/i.test(geotype):
        geotype = "waterbody";
        break;
      case /ocean/i.test(geotype):
        geotype = "waterbody";
        break;
      case /pond/i.test(geotype):
        geotype = "waterbody";
        break;
      case /forest/i.test(geotype):
        geotype = "forest";
        break;
      case /festival/i.test(geotype):
        geotype = "event";
        break;
      default:
        geotype = "landmark";
    } 
  } else {
    geotype = "landmark";
  }
  prompt(msg, "{{coord|" + finalLat + "|" + finalLng + "|type:" + geotype + "_globe:earth_region:" + iso2 + "|display=title}}")
})();
