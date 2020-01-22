/*
 * Nord Copyright (c) 2017-present Arctic Ice Studio <development@arcticicestudio.com>
 *
 * Originally released under the MIT license.
 */

const nord = {
  nord0: "#2E3440",
  nord1: "#3B4252",
  nord2: "#434C5E",
  nord3: "#4C566A",
  nord4: "#D8DEE9",
  nord5: "#E5E9F0",
  nord6: "#ECEFF4",
  nord7: "#8FBCBB",
  nord8: "#88C0D0",
  nord9: "#81A1C1",
  nord10: "#5E81AC",
  nord11: "#BF616A",
  nord12: "#D08770",
  nord13: "#EBCB8B",
  nord14: "#A3BE8C",
  nord15: "#B48EAD"
};


const colors = {
  black: nord.nord1,
  red: nord.nord11,
  green: nord.nord14,
  yellow: nord.nord13,
  blue: nord.nord9,
  magenta: nord.nord15,
  cyan: nord.nord8,
  white: nord.nord5,
  lightBlack: nord.nord3,
  lightRed: nord.nord11,
  lightGreen: nord.nord14,
  lightYellow: nord.nord13,
  lightBlue: nord.nord9,
  lightMagenta: nord.nord15,
  lightCyan: nord.nord7,
  lightWhite: nord.nord6,

  backgroundColor: nord.nord0,
  foregroundColor: nord.nord4,
  cursorColor: nord.nord4,
};

t.prefs_.set('color-palette-overrides', [
    colors.black,
    colors.red,
    colors.green,
    colors.yellow,
    colors.blue,
    colors.magenta,
    colors.cyan,
    colors.white,
    colors.lightBlack,
    colors.lightRed,
    colors.lightGreen,
    colors.lightYellow,
    colors.lightBlue,
    colors.lightMagenta,
    colors.lightCyan,
    colors.lightWhite
]);

t.prefs_.set('cursor-color', colors.cursorColor);
t.prefs_.set('foreground-color', colors.foregroundColor);
t.prefs_.set('background-color', colors.backgroundColor);
