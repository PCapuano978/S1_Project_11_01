"use strict";

/*
   New Perspectives on HTML5 and CSS3, 7th Edition
   Tutorial 9
   Case Problem 1

   Planisphere Script
   Author: Patrick M. Capuano
   Date:   2.12.19

*/

// Declaring our first variable where it will display "thisTime" as whatever date it currently is.
var thisTime = new Date();

// Saving the text of "thisTime" into "timeStr".
var timeStr = thisTime.toLocaleString();

// Chaning the inner HTML code of the page element with the ID to the timeStr variable.
document.getElementById("timeStamp").innerHTML = timeStr;

// Creating a variable "thisHour" by using the "getHours" method with "thisTime".
var thisHour = thisTime.getHours();

// Now creating a variable "thisMonth" by using the "getMonth" method with "thisTime".
var thisMonth = thisTime.getMonth();

// Using this formula to get the number of the map as a varaible called "mapNum".
var mapNum = (2 * thisMonth + thisHour) % 24;

// Creating an inline element showing the sky image to use in the web page, with the map number varaible being used in the image URL.
var imgStr = "<img src='sd_sky" + mapNum + ".png' />";

// Inserting in the value of the imgStr to be right after the element's opening tag.
document.getElementById("planisphere").insertAdjacentHTML('afterbegin', imgStr);