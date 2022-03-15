// $.ajaxSetup({
//   scriptCharset: "utf-8",
//   contentType: "application/json; charset=utf-8",
// });

// $.getJSON("../placeholders.json", function (data) {
//   let card = "";
//   for (let i = 0; i < 20; i++) {
//     card +=
//       '<div class="col-sm-12 col-md-6 col-lg-4 d-flex justify-content-center"> <div class="card m-4"> <img class="card-img-top" src="' +
//       data[i].thumbnailUrl +
//       '" alt="Card image cap"> <div class="card-body"> <h5 class="card-title">' +
//       data[i].title +
//       "</h5> </div> </div> </div>";
//     document.getElementById("card").innerHTML = card;
//   }
// });

$(function () {
  $.ajax({
    type: "GET",
    dataType: "jsonp",
    contentType: "application/json",
    url: "/placeholders.json",
    success: function (data) {
      let card = "";
      for (let i = 0; i < 20; i++) {
        card +=
          '<div class="col-sm-12 col-md-6 col-lg-4 d-flex justify-content-center"> <div class="card m-4"> <img class="card-img-top" src="' +
          data[i].thumbnailUrl +
          '" alt="Card image cap"> <div class="card-body"> <h5 class="card-title">' +
          data[i].title +
          "</h5> </div> </div> </div>";
        document.getElementById("card").innerHTML = card;
      }
    },
  });
});
