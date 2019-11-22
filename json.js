$(document).ready(function() {
  $("#sendRequestButton").click(function(e) {
    var jsonData = {};
    var formData = $("#requestForm").serializeArray();
    var firstName = formData[0].value;
    var lastName = formData[1].value;
    var email= formData[2].value;
    var phone= formData[3].value;
    var sex= formData[4].value;
    var subject = formData[5];
    var description = formData[6];
    var origin = formData[7];
    var type = formData[8];
    var status = formData[9];
    var priority = formData[10];
    var productionYear = prepareProductionYear (formData);
    var manufacturer= formData[13].value;
    var series = formData[14].value;
    var name= formData[15].value;

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
      data: JSON.stringify(jsonData),
      success: function () {
        alert("Success");
    },
    error: function () {
        alert("Bad Request");
    }
    });
  });

  function prepareProductionYear (formData) {
    var d = new Date();
    var mon = (d.getMonth()+1).toString();
    var month = mon.length == 1 ? month = 0+mon : month = mon;
    var min = d.getMinutes().toString();
    var minutes = min.length == 1 ? minutes = 0+min : minutes = min;
    var dat = d.getDate().toString();
    var date = dat.length == 1 ? date = 0+dat : date = dat;
    var hou = d.getHours().toString();
    var hours = hou.length == 1 ? hours = 0+hou : hours = hou;
    var sec = d.getSeconds();
    var seconds = sec.length == 1 ? seconds = 0+sec : seconds = sec;

    return formData[11].value +"-" + month+"-"+date+"T"+hours+":"+minutes+":"+seconds;
  }
});