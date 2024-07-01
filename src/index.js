setInterval(function () {
  // Rotterdam
  let rotterdamElement = document.querySelector("#rotterdam");
  let rotterdamDateElement = rotterdamElement.querySelector(".date");
  let rotterdamTimeElement = rotterdamElement.querySelector(".time");
  let rotterdamTime = moment().tz("Netherland/Rotterdam");

  rotterdamDateElement.innerHTML = rotterdamTime.format("MMMM Do YYYY");
  rotterdamTimeElement.innerHTML = rotterdamTime.format(
    "h:mm:ss [<small>]A[</small>]"
  );

  // Sydney
  let sydneyElement = document.querySelector("#sydney");
  let sydneyDateElement = sydneyElement.querySelector(".date");
  let sydneyTimeElement = sydneyElement.querySelector(".time");
  let sydneyTime = moment().tz("Australia/Sydney");

  sydneyDateElement.innerHTML = sydneyTime.format("MMMM Do YYYY");
  sydneyTimeElement.innerHTML = sydneyTime.format(
    "h:mm:ss [<small>]A[</small>]"
  );
}, 1000);
