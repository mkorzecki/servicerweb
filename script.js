$(document).ready(function () {

    $("#hpButton").click(function () {
        $('#series').show();
        $('.seriesClass').hide(2000);
        $('#seriesHP').show();
    });

    $("#dellButton").click(function () {
        $('#series').show();
        $('.seriesClass').hide(2000);
        $('#seriesDell').show();
    });

    $("#appleButton").click(function () {
        $('#series').show();
        $('.seriesClass').hide(2000);
        $('#seriesApple').show();
    });

    $("#sonyButton").click(function () {
        $('#series').show();
        $('.seriesClass').hide(2000);
        $('#seriesSony').show();
    });

    $('#exampleModal').on('show.bs.modal', function (event) {
        var button = $(event.relatedTarget); // Button that triggered the modal
        var model = button.data('whatever'); // Extract info from data-* attributes
        // If necessary, you could initiate an AJAX request here (and then do the updating in a callback).
        // Update the modal's content. We'll use jQuery here, but you could use a data binding library or other methods instead.
        var modal = $(this);
        modal.find('.modal-title').text('Zgłoś usterkę dla ' + model);
        modal.find('.modal-body input').val(model);
      })
});

