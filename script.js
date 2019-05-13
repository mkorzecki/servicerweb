function openSeriesFunction() {
    $(document).ready(function(){
        $("#container").children("div").children("button").click(function(){
            $('.seriesClass').hide();
            $(this).next("div").show();
        });
    });
}

function openForm() {
    $(document).ready(function(){

    });
}