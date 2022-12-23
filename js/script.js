$("document").ready(function () {
  // code here
  //   Get today's date
  let now = new Date().toISOString();
  $("#date").attr("min", now.split("T")[0]);

  $("form").submit((e) => {
    e.preventDefault();
    let title = $("#title").val();
    let date = $("#date").val();
    if (title !== "" && date !== "") {
      $("#form").hide(function () {
        $(".countdown").fadeIn(1000);
      });

      // reset the form
      $("#form")[0].reset();
    }
  });
});
