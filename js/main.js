/**
 * Created by aser on 16/8/2.
 */


    require.config({
        //bathUrl:"../../",
        paths:{
            jquery:"jquery",
            zepto:"zepto",
            underscore:"underscore",
            zoom:"zoom",
            boneAnimate:"boneAnimate.js?v=1.1201",
            pageSlider:"page-slider.js?v=1.34"
        },
        shim: {

            'zepto':{
                exports: '$'
            },
            zoom:{
                deps:['zepto']
            }
        }
    });

    if(typeof pageReady=="function"){

        pageReady.call();
    }
