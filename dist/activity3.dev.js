"use strict";

var num = 7; //change this variable (num) to your preffered name like(x,y,z...etc) and then use another number
//not necessary to display the days as me, you can choose your first day to be sunday

switch (num) {
  case 1:
    document.write('Monday');
    break;

  case 2:
    document.write('Tuesday');
    break;

  case 3:
    document.write('Wednesday');
    break;

  case 4:
    document.write('Thursday');
    break;

  case 5:
    document.write('Friday');
    break;

  case 6:
    document.write('Saturday');
    break;

  case 7:
    document.write('Sunday');
    break;

  default:
    document.write('The Day Entered does not exist');
    break;
} //if...else ladder


var n = 1;

if (n == 1) {
  document.write('Monday');
} else if (n == 2) {
  document.write('Tuesday');
} else if (n == 3) {
  document.write('Wednesday');
} else if (n == 4) {
  document.write('Thursday');
} else if (n == 5) {
  document.write('Friday');
} else if (n == 6) {
  document.write('Saturday');
} else if (n == 7) {
  document.write('Sunday');
} else {
  document.write('Sorry the number of day entered does not exist');
}