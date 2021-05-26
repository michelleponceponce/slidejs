$(document).ready(function() {
    $('#autoWidth').lightSlider ({
        autoWidth: true,
        loop:true,
        onSlider: function() {
            $('#autoWidth').removeClass('cS-hidden');
        }
    });
});