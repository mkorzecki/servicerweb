$(function() {
    $('#manufacturer').change(function(){
        $('#series option:selected').prop("selected", false);
        $('#model option:selected').prop("selected", false);
        
        if($('#manufacturer').val()) {
            $('#seriesGroup').show();
        }
        else {
            $('#series option:selected').prop("selected", false);
            $('#model option:selected').prop("selected", false);
            $('#seriesGroup').hide();
            $('#namesGroup').hide();
        }

        if($('#manufacturer option:selected').text() == "HP") {
            $('.hpSeries').show();
            $('.appleSeries').hide();
            $('.dellSeries').hide();
        }
        
        if($('#manufacturer option:selected').text() == "Apple") {
            $('.hpSeries').hide();
            $('.appleSeries').show();
            $('.dellSeries').hide();
        }

        if($('#manufacturer option:selected').text() == "Dell")
        {
            $('.hpSeries').hide();
            $('.appleSeries').hide();
            $('.dellSeries').show();
        }
    });
    
    $('#series').change(function(){
        $('#model option:selected').prop("selected", false);
        if($('#series').val()) {
            $('#namesGroup').show();
        }
        else {
            $('#model option:selected').prop("selected", false);
            $('#namesGroup').hide();
        }

        if($('#series option:selected').text() == "Pavilion"
            || $('#series option:selected').text() == "Envy"
            || $('#series option:selected').text() == "Elitebook") {
            $('.hpNames').show();
            $('.appleNames').hide();
            $('.dellNames').hide();
        }

        if($('#series option:selected').text() == "Air"
            || $('#series option:selected').text() == "Pro") {
            $('.hpNames').hide();
            $('.appleNames').show();
            $('.dellNames').hide();
        }

        if($('#series option:selected').text() == "Inspiron"
            || $('#series option:selected').text() == "Latitude"
            || $('#series option:selected').text() == "Vostro") {
            $('.hpNames').hide();
            $('.appleNames').hide();
            $('.dellNames').show();
        }
    });

    $('#model').change(function(){
        if($('#model').val()) { 
            $('#sendRequestButton').show();
        }
        else {
            $('#sendRequestButton').hide();
        }        
    });
  });