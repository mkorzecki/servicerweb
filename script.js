$(function() {
    $('#manufacturer').change(function(){
        $('#series option:selected').prop("selected", false);
        $('#names option:selected').prop("selected", false);
        if($('#manufacturer option:selected').text() != "")
        {
            $('#seriesGroup').show();
        }
        if($('#manufacturer option:selected').text() == "")
        {
            $('#series option:selected').prop("selected", false);
            $('#names option:selected').prop("selected", false);
            $('#seriesGroup').hide();
            $('#namesGroup').hide();
        }

        if($('#manufacturer option:selected').text() == "HP")
        {
            $('.hpSeries').show();
            $('.appleSeries').hide();
            $('.dellSeries').hide();
        }
        if($('#manufacturer option:selected').text() == "Apple")
        {
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
        $('#names option:selected').prop("selected", false);
        if($('#series option:selected').text() != "")
        {
            $('#namesGroup').show();
        }
        if($('#series option:selected').text() == "")
        {
            $('#names option:selected').prop("selected", false);
            $('#namesGroup').hide();
        }
        if($('#series option:selected').text() == "Pavilion"
        || $('#series option:selected').text() == "Envy"
        || $('#series option:selected').text() == "Elitebook")
        {
            $('.hpNames').show();
            $('.appleNames').hide();
            $('.dellNames').hide();
        }
        if($('#series option:selected').text() == "Air"
            || $('#series option:selected').text() == "Pro")
        {
            $('.hpNames').hide();
            $('.appleNames').show();
            $('.dellNames').hide();
        }
        if($('#series option:selected').text() == "Inspiron"
            || $('#series option:selected').text() == "Latitude"
            || $('#series option:selected').text() == "Vostro")
        {
            $('.hpNames').hide();
            $('.appleNames').hide();
            $('.dellNames').show();
        }
    });
  });