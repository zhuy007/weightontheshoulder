 // let clicked = false;

 //    $("#toggle1").click(function() {
 //      if (clicked) {
 //        $("#video-source").attr("src", "web bg.mp4");
 //        $("#video-background")[0].load();  // Reload the video
 //        $(".intro").hide;
 //        // $("#toggle1").removeClass("p1des").addClass("intro");
 //        clicked = false;
 //      } else {
 //        $("#video-source").attr("src", "0% bg.mp4");
 //        $("#video-background")[0].load();  // Reload the video
 //        // $("#toggle1").removeClass("intro").addClass("p1des");
 //        clicked = true;
 //      }
 //    });


 // let clicked = false;

 //    $("#toggle2").click(function() {
 //      if (clicked) {
 //        $("#video-source").attr("src", "web bg.mp4");
 //        $("#video-background")[0].load();  // Reload the video
 //        // $(".intro").hide;
 //        // $("#toggle1").removeClass("p1des").addClass("intro");
 //        clicked = false;
 //      } else {
 //        $("#video-source").attr("src", "5% bg.mp4");
 //        $("#video-background")[0].load();  // Reload the video
 //        // $("#toggle1").removeClass("intro").addClass("p1des");
 //        clicked = true;
 //      }
 //    });

        let clicked1 = false; 
        let clicked2 = false; 
        let clicked3 = false; 
        let clicked4 = false;

        $("#toggle1").click(function() {
            if (clicked1) {
                $("#video-source").attr("src", "bg final4.mp4");
                $("#video-background")[0].load();  
                clicked1 = false; 
            } else {
                $("#video-source").attr("src", "0% new text2.mp4");
                $("#video-background")[0].load();  
                clicked1 = true; 
            }
        });

        $("#toggle2").click(function() {
            if (clicked2) {
                $("#video-source").attr("src", "bg final4.mp4");
                $("#video-background")[0].load(); 
                clicked2 = false; 
            } else {
                $("#video-source").attr("src", "5% new text.mp4");
                $("#video-background")[0].load();  
                clicked2 = true; 
            }
        });

        $("#toggle3").click(function() {
            if (clicked3) {
                $("#video-source").attr("src", "bg final4.mp4");
                $("#video-background")[0].load();  
                clicked3 = false; 
            } else {
                $("#video-source").attr("src", "10% new text.mp4");
                $("#video-background")[0].load();  
                clicked3 = true; 
            }
        });

        $("#toggle4").click(function() {
            if (clicked4) {
                $("#video-source").attr("src", "bg final4.mp4");
                $("#video-background")[0].load(); 
                clicked4 = false; 
            } else {
                $("#video-source").attr("src", "15% new text.mp4");
                $("#video-background")[0].load();  
                clicked4 = true; 
            }
        });

