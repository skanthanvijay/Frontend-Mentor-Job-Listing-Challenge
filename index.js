// JSON Data & Global Constants/Variables

var str = '[{"id":1,"company":"Photosnap","logo":"./images/photosnap.svg","new":true,"featured":true,"position":"Senior Frontend Developer","role":"Frontend","level":"Senior","postedAt":"1d ago","contract":"Full Time","location":"USA Only","languages":["HTML","CSS","JavaScript"],"tools":[]},{"id":2,"company":"Manage","logo":"./images/manage.svg","new":true,"featured":true,"position":"Fullstack Developer","role":"Fullstack","level":"Midweight","postedAt":"1d ago","contract":"Part Time","location":"Remote","languages":["Python"],"tools":["React"]},{"id":3,"company":"Account","logo":"./images/account.svg","new":true,"featured":false,"position":"Junior Frontend Developer","role":"Frontend","level":"Junior","postedAt":"2d ago","contract":"Part Time","location":"USA Only","languages":["JavaScript"],"tools":["React","Sass"]},{"id":4,"company":"MyHome","logo":"./images/myhome.svg","new":false,"featured":false,"position":"Junior Frontend Developer","role":"Frontend","level":"Junior","postedAt":"5d ago","contract":"Contract","location":"USA Only","languages":["CSS","JavaScript"],"tools":[]},{"id":5,"company":"Loop Studios","logo":"./images/loop-studios.svg","new":false,"featured":false,"position":"Software Engineer","role":"Fullstack","level":"Midweight","postedAt":"1w ago","contract":"Full Time","location":"Worldwide","languages":["Ruby", "JavaScript"],"tools":["Sass"]},{"id":6,"company":"FaceIt","logo":"./images/faceit.svg","new":false,"featured":false,"position":"Junior Backend Developer","role":"Backend","level":"Junior","postedAt":"2w ago","contract":"Full Time","location":"UK Only","languages":["Ruby"],"tools":["RoR"]},{"id":7,"company":"Shortly","logo":"./images/shortly.svg","new":false,"featured":false,"position":"Junior Developer","role":"Frontend","level":"Junior","postedAt":"2w ago","contract":"Full Time","location":"Worldwide","languages":["HTML","JavaScript"],"tools":["Sass"]},{"id":8,"company":"Insure","logo":"./images/insure.svg","new":false,"featured":false,"position":"Junior Frontend Developer","role":"Frontend","level":"Junior","postedAt":"2w ago","contract":"Full Time","location":"USA Only","languages":["JavaScript"],"tools":["Vue","Sass"]},{"id":9,"company":"Eyecam Co.","logo":"./images/eyecam-co.svg","new":false,"featured":false,"position":"Full Stack Engineer","role":"Fullstack","level":"Midweight","postedAt":"3w ago","contract":"Full Time","location":"Worldwide","languages":["JavaScript","Python"],"tools":["Django"]},{"id":10,"company":"The Air Filter Company","logo":"./images/the-air-filter-company.svg","new":false,"featured":false,"position":"Front-end Dev","role":"Frontend","level":"Junior","postedAt":"1mo ago","contract":"Part Time","location":"Worldwide","languages":["JavaScript"],"tools":["React","Sass"]}]';

const jobData = JSON.parse(str);

const langList = ["Python", "Ruby", "JavaScript", "HTML", "CSS"];
const toolList = ["React", "Sass", "Vue", "Django", "RoR"];
const levelList = ["Junior", "Midweight", "Senior"];
const roleList = ["Frontend", "Backend", "Fullstack"];

var filterList = [];



// Adds filters when tablets are clicked

$(".tablet").on("click", function() {

  var tabletText = String($(this).text());
  addToFilters(tabletText);

  scanForFilters(filterList);
});



// Removes filters when filter buttons are clicked

$(document).on("click", ".filter-btn", function() {

  var filterText = String($(this).parent().find(".filter-text").text());
  $(".filter-text." + filterText).parent().remove();

  var listPoint = filterList.findIndex(val => val === filterText);
  filterList.splice(listPoint, 1);
  scanForFilters(filterList);
});



// Clears filters

$(".clear").on("click", function() {

  $(".filter").remove();

  filterList = [];
  scanForFilters(filterList);
});



// Function that adds filter buttons

function addToFilters (input) {

  var existingInput = filterList.includes(input);
  if (existingInput === false) {
    filterList.push(input);
    $(".search-selections").append('<div class="filter"><div class="filter-text ' + input + '">' + input + '</div><button class="filter-btn">X</button></div>');
  }}



// Function that scans through existing filters and adds or removes filters accordingly

function scanForFilters(input) {
  $(".item").each(function(index) {

    trueCheck = [];

    for (let i=0; i < filterList.length; i++) {

      if (langList.includes(input[i]) === true) {
      var langCheck = jobData[index].languages.includes(input[i]);
      trueCheck.push(langCheck);}

      if (toolList.includes(input[i]) === true) {
      var toolCheck = jobData[index].tools.includes(input[i]);
      trueCheck.push(toolCheck);}

      if (levelList.includes(input[i]) === true) {
      var levelCheck = jobData[index].level === input[i];
      trueCheck.push(levelCheck);}

      if (roleList.includes(input[i]) === true) {
      var roleCheck = jobData[index].role === input[i];
      trueCheck.push(roleCheck);}
    }

    var eliminationCheck = trueCheck.includes(false);
    if (eliminationCheck === true) {
      $(this).addClass("item-hide");}
    else {
      $(this).removeClass("item-hide");}
  });}
