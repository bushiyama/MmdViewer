import * as THREE from 'https://cdn.jsdelivr.net/gh/mrdoob/three.js@r128/build/three.module.js';

import { OrbitControls } from 'https://cdn.jsdelivr.net/gh/mrdoob/three.js@r128/examples/jsm/controls/OrbitControls.js';
import { MMDLoader } from 'https://cdn.jsdelivr.net/gh/mrdoob/three.js@r128/examples/jsm/loaders/MMDLoader.js';
import { MMDAnimationHelper } from 'https://cdn.jsdelivr.net/gh/mrdoob/three.js@r128/examples/jsm/animation/MMDAnimationHelper.js';

var methods_bootstrap = {
    dialog_open: function(target, backdrop = 'static'){
        $(target).modal({backdrop: backdrop, keyboard: false});
    },
    dialog_close: function(target){
        $(target).modal('hide');
    },
    panel_open: function(target){
        $(target).collapse("show");
    },
    panel_close: function(target){
        $(target).collapse("hide");
    },
    progress_open: function(title = '少々お待ちください。', backdrop){
        this.progress_title = title;
        this.dialog_open('#progress', backdrop);
    },
    progress_close: function(){
        this.dialog_close('#progress');
    },
    toast_show: function(message, title, level = "info", option){
        toastr[level](message, title, option);
    }
};
