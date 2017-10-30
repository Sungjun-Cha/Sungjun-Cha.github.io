$(function () {
    //    "use strict";
    

    // Init ScrollMagic Controller
    var scrollMagicController = new ScrollMagic.Controller();
    var thank = new ScrollMagic.Scene({
        triggerElement: '#trigger_thank',
        offset: 100,
        reverse: true
    }).on("start", function () {
        
				$("#scroll").text("Thank you!");
        
        }).addTo(scrollMagicController);
    
        var index = new ScrollMagic.Scene({
            triggerElement: '#trigger_index',
            offset: 0
        }).on('enter', function () {
            
        var works = document.getElementsByClassName("three");

            for (var i = 0; i < works.length; i++) {
                $(works[i]).delay(120 * i).animate({
                    opacity: 1,
                    top: "80px"
                }, 300);
            }

        })
        .addTo(scrollMagicController);
    
    
    var cards = document.getElementsByClassName("hide");
    for (var j = 0; j < cards.length; j++) {
        var scene1 = new ScrollMagic.Scene({
                triggerElement: "#trigger1",
                offset: 100,
                reverse: false

            })
            .setTween(cards[j], (j + 0.4) * 0.3, {
                opacity: "1",
                position: 'relative',
                transform: "scale(1)",
                ease: Back.easeOut.config(1.7),
                y: -500
                
            })
            .setPin("#trigger1")
            .addTo(scrollMagicController);

    }

//    scene1.addIndicators({
//        name: "1"
//    });


    var menues = document.getElementsByClassName("slide");
    for (var m = 0; m < menues.length; m++) {
        var scene2 = new ScrollMagic.Scene({

            triggerElement: "#trigger_happy",
            offset: -200,
            reverse: false
        }).setTween(menues[m], (m + 0.3) * 0.3, {
            top: "0"
        }).setPin("#trigger_happy").addTo(scrollMagicController);
    }


//    scene2.addIndicators({
//        name: "3"
//    });

    


    var screens = document.getElementsByClassName("frame")
    var tline = new TimelineLite();
    var frameplay = new ScrollMagic.Scene({
            triggerElement: '#trigger_mobi',
            offset: 0
        }).on('enter', function () {
        
            $('object#svg1').css('opacity', '1');
                
                var frame1 = new Vivus('svg1', {
                    type: 'oneByOne',
                    start: 'manual',
                    duration: 90,
                    animTimingFunction: Vivus.EASE_OUT
                }).play(1);
        
            tline.to(screens[0], 0.3, {
                    top: 100,
                    opacity: 1,
                    delay: 0.7,
                    ease: Back.easeOut.config(1.2)
                }, "+=1");
    
            setTimeout(function() {
                $('object#svg2').css('opacity', '1');
                var frame2 = new Vivus('svg2', {
                    type: 'oneByOne',
                    start: 'manual',
                    duration: 90,
                    animTimingFunction: Vivus.EASE_OUT
                }).play(); 
            }, 1900);
            
            tline.to(screens[1], 0.3, {
                    top: 100,
                    opacity: 1,
                    delay: 0.9,
                    ease: Back.easeOut.config(1.2)
                }, "+=1");
        
            setTimeout(function() {
                $('object#svg3').css('opacity', '1');
                var frame2 = new Vivus('svg3', {
                    type: 'oneByOne',
                    start: 'manual',
                    duration: 90,
                    animTimingFunction: Vivus.EASE_OUT
                }).play(); 
            }, 3800);
        
            tline.to(screens[2], 0.3, {
                    top: 100,
                    opacity: 1,
                    delay: 0.9,
                    ease: Back.easeOut.config(1.2)
                }, "+=1");
        
            setTimeout(function() {
                $('object#svg4').css('opacity', '1');
                var frame2 = new Vivus('svg4', {
                    type: 'oneByOne',
                    start: 'manual',
                    duration: 90,
                    animTimingFunction: Vivus.EASE_OUT
                }).play(); 
            }, 6200);
            
            tline.to(screens[3], 0.3, {
                    top: 100,
                    opacity: 1,
                    delay: 0.9,
                    ease: Back.easeOut.config(1.2)
                }, "+=1");
        
            frameplay.remove();
        
        
        

        
    }).addTo(scrollMagicController);
    
    
      
//    frameplay.addIndicators({
//        name: "4"
//    });
    
    
    var pimfy_flow = new ScrollMagic.Scene({
            triggerElement: '#trigger_pimfy',
            offset: -700
        }).on('enter', function () {

            var tl = new TimelineLite();
            tl.to("#feed_frame", 0.3, {
                left: -200,
                ease: Back.easeOut.config(1.2)
            }, "+=0.5");
            tl.to("#feed_frame", 0.3, {
                left: 0,
                ease: Back.easeOut.config(0.8)
            }, "+=0.5");
            tl.to("#news_feed", 0.3, {
                top: -180,
                ease: Back.easeOut.config(1.2)
            }, "+=0.3");
            tl.to("#news_feed", 0.3, {
                top: 0,
                ease: Back.easeOut.config(1.0)
            }, "+=0.3");
            tl.to("#feed_detail", 0.5, {
                left: 0,
                ease: Back.easeOut.config(0.9)
            }, "+=0.3");
            tl.play();
            
            $(".flipbook").turn({duration: 1000});
            
        })
        .addTo(scrollMagicController);

//    pimfy_flow.addIndicators({
//        name: "5"
//    }); 
    
     // Create Animation for 0.5s
    var tween = TweenMax.to('#title_bg', 0.5, {
        rotation: -10,
        top: -120,
        
        
    });

    // Create the Scene and trigger when visible
    var scene = new ScrollMagic.Scene({
            triggerElement: '#trigger_pa',
            offset: -100,
            reverse: false/* offset the trigger 150px below #scene's top */
        })
        .setTween(tween)
        .setPin("#trigger_pa")
        .addTo(scrollMagicController)
//        .addIndicators({
//        name: "pa"
//    });

    var sketch_flip = new ScrollMagic.Scene({
            triggerElement: '#trigger_sketch',
            offset: -300
        }).on('enter', function () {
            
            setTimeout(function() { $(".flipbook").turn("next"); } , 2500);
            setTimeout(function() { $(".flipbook").turn("next").turn("next"); }, 5000);

        })
        .addTo(scrollMagicController)
    
    var navi_color = new ScrollMagic.Scene({

            triggerElement: "#trigger_nav",
            offset: 420,
            reverse: true
        })
    .setTween("#nav", 0.3, {
            background: "#fc6"
        }).setPin("#trigger_nav").addTo(scrollMagicController);
    
//        .addIndicators({name: "flip"});

//    $('.bxslider').bxSlider({
//        mode: 'horizontal',
//        auto: true,
//        pager: false,
//        infiniteLoop: true,
//        controls: false
//        
//  });
    
//    var haartle_flow = new ScrollMagic.Scene({
//            triggerElement: '#trigger_haartle',
//            offset: 0,
//            reverse: false
//        }).on('enter', function () {
//
//            var haartle_ani = new TimelineLite();
//        
//            haartle_ani.from(".reveal1", 0.3, {
//                opacity: 0,
//                transform: "scale(0)",
//                ease: Back.easeOut.config(1), y: -500
//            }, "+=1");
//        
//            haartle_ani.from(".zoom1", 0.2, {
//                opacity: 0,
//                transform: "scale(0.5)",
//                ease: Back.easeOut.config(2)
//            }, "+=1");
//            
//            haartle_ani.to(".zoom1", 0.2, {
//                    opacity: 0,
//                    transform: "scale(0)",
//                    ease: Back.easeOut.config(2)
//                }, "+=0.5");
//        
//            haartle_ani.from(".reveal2", 0.5, {
//                opacity: 0,
//                transform: "scale(0.5)",
//                ease: Back.easeOut.config(1.5), y: 100
//            } );
//        
//            haartle_ani.from(".zoom2", 0.3, {
//                opacity: 0,
//                transform: "scale(0)",
//                ease: Back.easeIn.config(1.5)
//            }, "+=0.5");
//        
//            haartle_ani.to(".zoom2", 0.3, {
//                opacity: 0,
//                transform: "scale(0)",
//                ease: Back.easeOut.config(1.5)
//            }, "+=0.5");
//        
//            haartle_ani.from(".reveal3", 0.5, {
//                opacity: 0,
//                transform: "scale(0.5)",
//                ease: Back.easeOut.config(1.5), y: 100
//            });
//        
//            haartle_ani.from(".zoom3", 0.3, {
//                opacity: 0,
//                transform: "scale(0)",
//                ease: Back.easeOut.config(1.5), y: -500
//            }, "+=1");
//            
//            haartle_ani.to(".zoom3", 0.3, {
//                opacity: 0,
//                transform: "scale(0)",
//                ease: Back.easeOut.config(1.5)
//            }, "+=0.5");
//        
//            haartle_ani.from(".reveal4", 0.5, {
//                opacity: 0,
//                transform: "scale(0.5)",
//                ease: Back.easeOut.config(1), y: 100
//            });
//        
//            haartle_ani.play();
//            
//    
//            
//        })
//        .addTo(scrollMagicController).addIndicators();

});
