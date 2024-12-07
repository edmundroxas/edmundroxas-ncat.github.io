let $slideshow = $(".cycle-slideshow");

$slideshow.on("click", function() {
   if ($slideshow.is(".cycle-paused"))
      $slideshow.cycle("resume");                
   else
      $slideshow.cycle("pause");
});