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

    $('#modalForTicket').on('show.bs.modal', function (event) {
        var button = $(event.relatedTarget);
        var model = button.data('whatever');
        var modal = $(this);
        modal.find('.modal-title').text('Zgłoś usterkę dla ' + model);
        modal.find('#modelId').val(model);
        //modal.find('.modal-body input').val(model);
    });
});

