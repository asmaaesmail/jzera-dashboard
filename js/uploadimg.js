$('.image-uploader').change(function (event) {
    $(this).parents('.images-upload-block').append('<div class="uploaded-block"><img src="' + URL.createObjectURL(event.target.files[0]) + '"><button class="close">&times;</button></div>');
});

// REMOVE IMAGE
$('.images-upload-block').on('click', '.close', function () {
    $(this).parents('.uploaded-block').remove();
});