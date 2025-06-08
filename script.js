$(document).ready(function () {
    const images = $(".gallery-img");
    const lightbox = $("#lightbox");
    const lightboxImg = $("#lightbox-img");
    let currentIndex = 0;
    // Open lightbox
    images.click(function () {
        currentIndex = parseInt($(this).attr("data-index"));
        showImage(currentIndex);
        lightbox.show();
    });
    // Close lightbox
    $(".close").click(function () {
        lightbox.hide();
    });
    // Show previous image
    $(".prev").click(function () {
        currentIndex = (currentIndex - 1 + images.length) % images.length;
        showImage(currentIndex);
    });

    // Show next image
    $(".next").click(function () {
        currentIndex = (currentIndex + 1) % images.length;
        showImage(currentIndex);
    });

    // Display image by index
    function showImage(index) {
        const src = images.eq(index).attr("src");
        lightboxImg.attr("src", src);
    }

    // Close on clicking outside the image
    lightbox.click(function (e) {
        if (e.target.id === "lightbox") {
            lightbox.hide();
        }
    });
});
