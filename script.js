$(document).ready(function() {
  $("#hpButton").click(function() {
    $("#series").show();
    $(".seriesClass").hide(2000);
    $("#seriesHP").show();
  });

  $("#dellButton").click(function() {
    $("#series").show();
    $(".seriesClass").hide(2000);
    $("#seriesDell").show();
  });

  $("#appleButton").click(function() {
    $("#series").show();
    $(".seriesClass").hide(2000);
    $("#seriesApple").show();
  });

  $("#sonyButton").click(function() {
    $("#series").show();
    $(".seriesClass").hide(2000);
    $("#seriesSony").show();
  });

  $("#modalForTicket").on("show.bs.modal", function(event) {
    var button = $(event.relatedTarget);
    var model = button.data("whatever");
    var modal = $(this);
    modal.find(".modal-title").text("Zgłoś usterkę dla " + model);
    modal.find("#model").val(model);
    //modal.find('.modal-body input').val(model);
  });
//   $("#ticket").click(function() {
//     $.ajax({
//       url: "http://localhost:5000/api/tickets",
//       method: "POST",
//       dataType: "json",
//       contentType: "application/json",
//       data: JSON.stringify({
//         subject: "temattemattemat",
//         description: "opisopisopisopisopisopis",
//         itemid: 3
//       })
//     }).done(response => {
//       console.log(response);
//     });
//   });
});
