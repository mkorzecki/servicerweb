$(document).ready(function() {
  $("#sendRequestButton").click(function(e) {
    var jsonData = {};
    var formData = $("#requestForm").serializeArray();
    var firstName = formData[0];
    var lastName = formData[1];
    var sex = formData[2];
    var email = formData[3];
    var phone = formData[4];
    var subject = formData[5];
    var description = formData[6];
    var origin = formData[7];
    var type = formData[8];
    var status = formData[9];
    var priority = formData[10];
    var itemId = formData[11];
    var productionYear = formData[12];
    var name = formData[13];
    var manufacturer = formData[14];
    var series = formData[15];

    var person = {name: "person", value: {firstName, lastName, sex, email,phone}}
    var customer = {name: "customer", value: person};
    
    var productSpecification = {name: "productSpecification", value: {manufacturer, series, name}};
    var item = {name: "item", value:
    {productionYear, productSpecification, customer}}

    formData.splice(0, formData.length);
    formData.push(origin);
    formData.push(type);
    formData.push(status);
    formData.push(priority);
    formData.push(itemId);
    formData.push(subject);
    formData.push(description);
    formData.push(item);
    
    console.log(formData);
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
      data: JSON.stringify(jsonData)
    }).done(response => {
      console.log(response);
    }); 
    alert("Zgłosznie zostało wysłane");
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
