$(document).ready(function() {
  $("#sendRequestButton").click(function(e) {
    var jsonData = {};
    var formData = $("#requestForm").serializeArray();
    var firstName = formData[0].value;
    var lastName = formData[1].value;
    var sex = formData[2].value;
    var email = formData[3].value;
    var phone = formData[4].value;
    var subject = formData[5];
    var description = formData[6];
    var origin = formData[7];
    var type = formData[8];
    var status = formData[9];
    var priority = formData[10];
    var productionYear = formData[11].value;
    var manufacturer= formData[12].value;
    var series = formData[13].value;
    var name= formData[14].value;

    var person = {firstName, lastName, sex, email, phone};
    var customer = { person: person};

    var productSpecification = {manufacturer, series, name};
  
    var item = {name: "item", value:
    {productionYear, productSpecification, customer}}

    formData.splice(0, formData.length);
    formData.push(origin);
    formData.push(type);
    formData.push(status);
    formData.push(priority);
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