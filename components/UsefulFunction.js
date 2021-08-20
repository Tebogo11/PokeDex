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
      return "red";
    }
    case "water": {
      return "blue";
    }
    case "flying": {
      return "skyblue";
    }
    case "bug": {
      return "pink";
    }
    default:
      return "silver";
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
