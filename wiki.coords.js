javascript: (() => {
  const coordRegex = /([^\d]*\d*)\.(\d{4})/g;
  const msg = "May need to update the \"type:\" value.\nUpdate the \"earth_region:\" value with ISO-2 code.\nSome common types:\nadm1st adm2nd adm3rd airport city edu event forest isle landmark mountain railwaystation river waterbody";
  const coordsElem = document.querySelector("#action-menu > div:nth-child(1) > div > div");
  let typeElem = document.querySelector("#QA0Szd > div > div > div.w6VYqd > div.bJzME.tTVLSc > div > div.e07Vkf.kA9KIf > div > div > div.TIHn2 > div > div.lMbq3e > div.LBgpqf > div > div:nth-child(2) > span > span > button");
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
    switch (geotype) {
      case "mountain peak":
        geotype = "mountain";
        break;
      case "university":
        geotype = "edu";
        break;
      case "college":
        geotype = "edu";
        break;
      case "private university":
        geotype = "edu";
        break;
      case "university hospital":
        geotype = "edu";
        break;
      case "high school":
        geotype = "edu";
        break;
      case "middle school":
        geotype = "edu";
        break;
      case "elementary school":
        geotype = "edu";
        break;
      case "nursing school":
        geotype = "edu";
        break;
      case "lake":
        geotype = "waterbody";
        break;
      case "international airport":
        geotype = "airport";
        break;
      case "island":
        geotype = "isle";
        break;
      case "river":
        geotype = "river";
        break;
      default:
        geotype = "landmark";
    }
  } else {
    geotype = "landmark";
  }
  prompt(msg, "{{coord|" + finalLat + "|" + finalLng + "|type:" + geotype + "_globe:earth_region:" + iso2 + "|display=title}}")
})();
