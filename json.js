$(document).ready(function() {
  $("#sendRequestButton").click(function(e) {
    var jsonData = {};
    debugger;
    var formData = $("#requestForm").serializeArray();
    var subject = formData[10];
    var description = formData[12];
    var itemId = { name: "itemid", value: "3" };
    formData.splice(0, formData.length);
    formData.push(subject);
    formData.push(description);
    formData.push(itemId);

    $.each(formData, function() {
      if (jsonData[this.name]) {
        if (!jsonData[this.name].push) {
          jsonData[this.name] = [jsonData[this.name]];
        }
        jsonData[this.name].push(this.value || "");
      } else {
        jsonData[this.name] = this.value || "";
      }
    });
    debugger;
    console.log(jsonData);
    $.ajax({
      url: "http://localhost:5000/api/tickets",
      method: "POST",
      dataType: "json",
      contentType: "application/json",
      data: JSON.stringify({
        subject: "temattemattemat",
        description: "opisopisopisopisopisopis",
        itemid: 3
      })
    }).done(response => {
      console.log(response);
    });
    //if (isAllFieldsAreFulfiled(formData) == true /*&& validateEmail(jsonData.email) == true*/) {
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
    // }
    // else {
    //     console.log("Not all fields was fulfilled")
    // }
  });
});
function isAllFieldsAreFulfiled(formData) {
  var counter = 0;
  for (i = 0; i < formData.length; i++) {
    if (formData[i].value != "") counter++;
  }
  return counter == formData.length;
}
function validateEmail(email) {
  var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
}
