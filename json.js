$(document).ready(function () {
    $("#sendRequestButton").click(function (e) {
        var jsonData = {};

        var formData = $("#requestForm").serializeArray();
        $.each(formData, function () {
            if (jsonData[this.name]) {
                if (!jsonData[this.name].push) {
                    jsonData[this.name] = [jsonData[this.name]];
                }
                jsonData[this.name].push(this.value || '');
            } else {
                jsonData[this.name] = this.value || '';
            }
        });

        if (isAllFieldsAreFulfiled(formData) == true && validateEmail(jsonData.email) == true) {
            //    $.ajax(
            //    {
            //        url : "action.php",
            //        type: "POST",
            //        data : jsonData,

            //    });
            //e.preventDefault();
        }
        else {
            console.log("Not all fields was fulfilled")
        }
    });
});
function isAllFieldsAreFulfiled(formData) {
    var counter = 0;
    for (i = 0; i < formData.length; i++) {
        if (formData[i].value != "")
            counter++;
    }
    return counter == formData.length;
}
function validateEmail(email) {
    var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}