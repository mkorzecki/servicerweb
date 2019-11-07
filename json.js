$(document).ready(function() {
  $("#sendRequestButton").click(function(e) {
    var jsonData = {};
    var formData = $("#requestForm").serializeArray();
    var subject = formData[0];
    var description = formData[1];
    var itemId = formData[3];
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
    console.log(JSON.stringify({
      subject: "temattemattemat",
      description: "opisopisopisopisopisopis",
      itemid: 3}));
    $.ajax({
      url: "http://localhost:5000/api/tickets",
      method: "POST",
      dataType: "json",
      contentType: "application/json",
      data: JSON.stringify(jsonData)
    }).done(response => {
      console.log(response);
    }).fail(function (jqXHR, textStatus, errorThrown) { alert("error"); });
    ;
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
