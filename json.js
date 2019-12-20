$(document).ready(function() {
  $("#sendRequestButton").click(function(e) {
    var jsonData = {};
    var formData = $("#requestForm").serializeArray();
    var firstName = formData[0].value;
    var lastName = formData[1].value;
    var email= formData[2].value;
    var phone= formData[3].value;
    var sex= formData[4].value;
    var subject = formData[6];
    var description = formData[7];
    var origin = formData[8];
    var status = formData[9];
    var priority = formData[10];
    var type = formData[12];
    var productionYear = formData[11].value + "-01-01T00:00:00";
    var manufacturer= formData[13].value;
    var series = formData[14].value;
    var name= formData[15].value;

    var person = {firstName, lastName, sex, email, phone};
    var customer = { person: person};
    var productSpecification = {manufacturer, series, name};  
    var item = {name: "item", value: {productionYear, productSpecification, customer}}

    formData.splice(0, formData.length);
    formData.push(origin);
    formData.push(type);
    formData.push(status);
    formData.push(priority);
    formData.push(subject);
    formData.push(description);
    formData.push(item);
    
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
    
    $.ajax({
      url: "http://localhost:5000/api/tickets",
      method: "POST",
      dataType: "json",
      contentType: "application/json",
      data: JSON.stringify(jsonData),
      success: function () {
        console.log("Success");
    },
    error: function () {
        alert("Bad Request");
    }
    });
  });
});