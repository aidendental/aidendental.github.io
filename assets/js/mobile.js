function isMobile() {
  return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
    navigator.userAgent
  );
}

if (isMobile()) {
  jQuery(document).ready(function () {
    jQuery("html").css("font-size", "43%");
    jQuery("#menu").css("width", "60%");
    jQuery(".main-img").css("height", "60vh");
  });
}
