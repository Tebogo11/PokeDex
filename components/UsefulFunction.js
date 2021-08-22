/**
 *
 * @param {Array.<string>} types type of pokemon
 * @returns {string} returns what color the background should be
 */
export const cardBgPicker = (types) => {
  let type = types[0];
  if (types[0] == "normal" && types[1] && types[1] !== "normal") {
    type = types[1];
  }
  switch (type) {
    case "grass":
      return "green";
    case "fire": {
      return "orange";
    }
    case "water": {
      return "blue";
    }
    case "electric": {
      return "#EDD01C";
    }
    case "ice": {
      return "skyblue";
    }
    case "fighting": {
      return "red";
    }
    case "poison": {
      return "#800080";
    }
    case "ground": {
      return "#C2B280";
    }
    case "flying": {
      return "#DDA0DD";
    }
    case "psychic": {
      return "pink";
    }
    case "bug": {
      return "#66d801";
    }
    case "rock": {
      return "darkgray";
    }
    case "ghost": {
      return "#662d91";
    }
    case "dark": {
      return "#293542";
    }
    case "dragon": {
      return "#4B0082";
    }
    case "steel": {
      return "silver";
    }
    case "fairy": {
      return "#fe4164";
    }
    default:
      return "#004242";
  }
};

/**
 * Changes the first letter in a string to uppercase
 * @param {string} string the string to be changed
 * @returns {string} returns string with the first letter capitalized
 */
export const capitalizer = (string) => {
  return string.charAt(0).toUpperCase() + string.slice(1);
};
