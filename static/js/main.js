$.getJSON("/placeholders.json", function (data) {
  // alert(data.length);
  for (let i = 0; i < 20; i++) {
    console.log(data[i]);
  }
});
