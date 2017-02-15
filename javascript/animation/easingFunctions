var easingFuncs = {
    linear: function (t, b, c, d) {
        return c * t / d + b;
    },
    random: function (t, b, c, d) {
        return Math.random() * easingFuncs.linear.apply(window, arguments);
        
    },
    
    easeInQuad: function (t, b, c, d) {
        return c*(t/=d)*t + b;
    },
    easeOutQuad: function (t, b, c, d) {
        return -c *(t/=d)*(t-2) + b;
    },
    easeInOutQuad: function (t, b, c, d) {
        if ((t/=d/2) < 1) return c/2*t*t + b;
        return -c/2 * ((--t)*(t-2) - 1) + b;
    },
    easeInCubic: function (t, b, c, d) {
        return c*(t/=d)*t*t + b;
    },
    easeOutCubic: function (t, b, c, d) {
        return c*((t=t/d-1)*t*t + 1) + b;
    },
    easeInOutCubic: function (t, b, c, d) {
        if ((t/=d/2) < 1) return c/2*t*t*t + b;
        return c/2*((t-=2)*t*t + 2) + b;
    },
    easeInQuart: function (t, b, c, d) {
        return c*(t/=d)*t*t*t + b;
    },
    easeOutQuart: function (t, b, c, d) {
        return -c * ((t=t/d-1)*t*t*t - 1) + b;
    },
    easeInOutQuart: function (t, b, c, d) {
        if ((t/=d/2) < 1) return c/2*t*t*t*t + b;
        return -c/2 * ((t-=2)*t*t*t - 2) + b;
    },
    easeInQuint: function (t, b, c, d) {
        return c*(t/=d)*t*t*t*t + b;
    },
    easeOutQuint: function (t, b, c, d) {
        return c*((t=t/d-1)*t*t*t*t + 1) + b;
    },
    easeInOutQuint: function (t, b, c, d) {
        if ((t/=d/2) < 1) return c/2*t*t*t*t*t + b;
        return c/2*((t-=2)*t*t*t*t + 2) + b;
    },
    easeInSine: function (t, b, c, d) {
        return -c * Math.cos(t/d * (Math.PI/2)) + c + b;
    },
    easeOutSine: function (t, b, c, d) {
        return c * Math.sin(t/d * (Math.PI/2)) + b;
    },
    easeInOutSine: function (t, b, c, d) {
        return -c/2 * (Math.cos(Math.PI*t/d) - 1) + b;
    },
    easeInExpo: function (t, b, c, d) {
        return (t==0) ? b : c * Math.pow(2, 10 * (t/d - 1)) + b;
    },
    easeOutExpo: function (t, b, c, d) {
        return (t==d) ? b+c : c * (-Math.pow(2, -10 * t/d) + 1) + b;
    },
    easeInOutExpo: function (t, b, c, d) {
        if (t==0) return b;
        if (t==d) return b+c;
        if ((t/=d/2) < 1) return c/2 * Math.pow(2, 10 * (t - 1)) + b;
        return c/2 * (-Math.pow(2, -10 * --t) + 2) + b;
    },
    easeInCirc: function (t, b, c, d) {
        return -c * (Math.sqrt(1 - (t/=d)*t) - 1) + b;
    },
    easeOutCirc: function (t, b, c, d) {
        return c * Math.sqrt(1 - (t=t/d-1)*t) + b;
    },
    easeInOutCirc: function (t, b, c, d) {
        if ((t/=d/2) < 1) return -c/2 * (Math.sqrt(1 - t*t) - 1) + b;
        return c/2 * (Math.sqrt(1 - (t-=2)*t) + 1) + b;
    },
    easeInElastic: function (t, b, c, d) {
        var s=1.70158;var p=0;var a=c;
        if (t==0) return b;  if ((t/=d)==1) return b+c;  if (!p) p=d*.3;
        if (a < Math.abs(c)) { a=c; var s=p/4; }
        else var s = p/(2*Math.PI) * Math.asin (c/a);
        return -(a*Math.pow(2,10*(t-=1)) * Math.sin( (t*d-s)*(2*Math.PI)/p )) + b;
    },
    easeOutElastic: function (t, b, c, d) {
        var s=1.70158;var p=0;var a=c;
        if (t==0) return b;  if ((t/=d)==1) return b+c;  if (!p) p=d*.3;
        if (a < Math.abs(c)) { a=c; var s=p/4; }
        else var s = p/(2*Math.PI) * Math.asin (c/a);
        return a*Math.pow(2,-10*t) * Math.sin( (t*d-s)*(2*Math.PI)/p ) + c + b;
    },
    easeInOutElastic: function (t, b, c, d) {
        var s=1.70158;var p=0;var a=c;
        if (t==0) return b;  if ((t/=d/2)==2) return b+c;  if (!p) p=d*(.3*1.5);
        if (a < Math.abs(c)) { a=c; var s=p/4; }
        else var s = p/(2*Math.PI) * Math.asin (c/a);
        if (t < 1) return -.5*(a*Math.pow(2,10*(t-=1)) * Math.sin( (t*d-s)*(2*Math.PI)/p )) + b;
        return a*Math.pow(2,-10*(t-=1)) * Math.sin( (t*d-s)*(2*Math.PI)/p )*.5 + c + b;
    },
    easeInBack: function (t, b, c, d, s) {
        if (s == undefined) s = 1.70158;
        return c*(t/=d)*t*((s+1)*t - s) + b;
    },
    easeOutBack: function (t, b, c, d, s) {
        if (s == undefined) s = 1.70158;
        return c*((t=t/d-1)*t*((s+1)*t + s) + 1) + b;
    },
    easeInOutBack: function (t, b, c, d, s) {
        if (s == undefined) s = 1.70158; 
        if ((t/=d/2) < 1) return c/2*(t*t*(((s*=(1.525))+1)*t - s)) + b;
        return c/2*((t-=2)*t*(((s*=(1.525))+1)*t + s) + 2) + b;
    },
    easeInBounce: function (t, b, c, d) {
        return c - easingFuncs.easeOutBounce(d-t, 0, c, d) + b;
    },
    easeOutBounce: function (t, b, c, d) {
        if ((t/=d) < (1/2.75)) {
            return c*(7.5625*t*t) + b;
        } else if (t < (2/2.75)) {
            return c*(7.5625*(t-=(1.5/2.75))*t + .75) + b;
        } else if (t < (2.5/2.75)) {
            return c*(7.5625*(t-=(2.25/2.75))*t + .9375) + b;
        } else {
            return c*(7.5625*(t-=(2.625/2.75))*t + .984375) + b;
        }
    },
    easeInOutBounce: function (t, b, c, d) {
        if (t < d/2) return easingFuncs.easeInBounce(t*2, 0, c, d) * .5 + b;
        return easingFuncs.easeOutBounce(t*2-d, 0, c, d) * .5 + c*.5 + b;
    }

};


function getStyle(elem, name) {
    var style = null;
// If the property exists in style[] then it's been recently set and it's
// current.
    if (elem.style[name]) {
        style = elem.style[name];
    
// Check to see if we can use the W3C method. Be aware that we need
// hyphenated names ("text-align" rather than "textAlign").
    } else if (document.defaultView && document.defaultView.getComputedStyle) {
        name = name.replace(/([A-Z])/g, '-$1').toLowerCase();
        style = document.defaultView.getComputedStyle(elem, '');
        style = style && style.getPropertyValue(name);
    
// Otherwise try the IE method.
    } else if (elem.currentStyle) {
        style = elem.currentStyle[name];
    }
    
// Return anything we found.
    return style;
}

// Goes to the end frame of the animation. This is mainly used when we run out
// of time and need to finish the animation.
function goToEnd(elem, props, callback) {
    Object.keys(props).forEach(function (s) {
        elem.style[s] = props[s] + 'px';
    });
    if (callback) {
        callback.call(elem);
    }
}


// The main animation function. Does all the hard work. Takes a series of
// arguments:
//    elem: the element to animate
//    props: the styles the element will have at the end
//    duration: the amount of time to do the animation
//    easing: the easing to use. Defaults to 'linear'
//    callback: a function to execute at the end of the animation
function animate(elem, props, duration, easing, callback) {

    var interval = 13,
        styles = Object.keys(props),
    
        beginningStyle = styles.map(function (s) {
            return parseInt(getStyle(elem, s), 10);
        }),

        startTime = +new Date();
        
    easing = easingFuncs[easing] || easingFuncs.linear;
    
    setTimeout(function anim() {
        var repeat = true;
        
        styles.forEach(function (s, i) {
            var time = +new Date() - startTime,
                amount = easing(time,
                    beginningStyle[i],
                    parseInt(props[s], 10) - beginningStyle[i],
                    duration);
            
            elem.style[s] = amount + 'px';
            
            repeat = time < duration;
        });
        if (repeat) {
            setTimeout(anim, interval);
        } else {
            goToEnd(elem, props, callback);
        }
    }, interval);

}

// Set up some basic interactivity to show the easing working.
window.onload = function () {

    var box = document.getElementById('box'),
        button = document.getElementById('button'),
        select = document.createElement('select');

// Create a dropdown from all the easing methods.
    Object.keys(easingFuncs).forEach(function (easing) {
        var option = document.createElement('option');
        option.setAttribute('value', easing);
        option.appendChild(document.createTextNode(easing));
        select.appendChild(option);
    });
    button.parentNode.insertBefore(select, button);

// Assign a click handler to the button so we can call the animation whenever
// we want.
    button.onclick = function () {
        box.style.height = '100px';
        box.style.width = '100px';
        animate(box,
            {height: 400, width: 400},
            400,
            select.value,
            function () {
                console && console.log('FINISHED!');
            });
    };    
    
};




// Shim to make sure that we've got the modern functions and methods that we
// need, namely [].forEach, [].map and Object.keys
(function () {

    var undef, // = undefined;
    
        isStringArray = 'a'[0] === 'a', // Used in toObject.
        toString = Object.prototype.toString; // Used for class checking.

// The "this" given to an Array method should be converted into an object. This
// means that a String should be converted into an Array. Sadly, the native
// Object() does not do this in IE8-, so this helper function will make sure
// that it always happens.
    function toObject(obj) {
        if (toString.call(obj) === '[object String]' && !isStringArray) {
            obj = obj.split('');
        }
        return Object(obj);
    }
    
// The length of an array must be a number between -2^31 and 2^31 - 1
// inclusive. This little helper function makes sure that the number satisfies
// those conditions, returning 0 if it's not the case.
// http://es5.github.com/#x9.5
    function toUnit32(str) {
        var num = Number(str),
            ret = 0;
        if (!isNaN(num) && isFinite(num)) {
            ret = Math.abs(num % Math.pow(2, 32));
        }
        return ret;
    }

// Add Array.prototype.forEach if it doesn't already exist. Be sure to convert
// the "this" into a proper object, check that the length is small enough and
// do not execute the function for undefined entries of the array. Check that
// the object can be iterated and that the function can be called. Return
// undefined, though this happens automatically in JavaScript if nothing is
// explicitly returned.
    if (!Array.prototype.forEach) {
        Array.prototype.forEach = function (func, thisArg) {
            var i  = 0,
                t  = toObject(this),
                il = toUnit32(t.length);

            if (t === undef || t === null) {
                throw new ReferenceError('Unable to iterate through object.');
            }

            if (func === undef || toString.call(func) !== '[object Function]') {
                throw new TypeError('Unable to execute function.');
            }

            while (i < il) {
                if (t[i] !== undef) {
                    func.call(thisArg, t[i], i, t);
                }
                i += 1;
            }
        };
    }
    
    if (!Array.prototype.map) {
        Array.prototype.map = function (func, thisArg) {
            var i = 0,
                t = toObject(this),
                n = toUnit32(t.length),
                r = [];
            
            if (t === undef || t === null) {
                throw new ReferenceError('Unable to iterate through object');
            }
            
            if (func === undef || toString.call(func) !== '[object Function]') {
                throw new TypeError('Unable to execute function.');
            }
            
            while (i < n) {
                r[i] = func.call(thisArg, t[i], i, t);
            }
            
            return r;
        };
    }

}());
Object.keys = Object.keys || (function () {
    var hasDontEnumBug = !{toString: null}.propertyIsEnumerable('toString'),
        dontEnums = [
            'constructor',
            'hasOwnProperty',
            'isPrototypeOf',
            'propertyIsEnumerable',
            'toString',
            'toLocaleString',
            'valueOf'
        ],
        owns = Object.prototype.hasOwnProperty;
    return function (obj) {
        var result = [],
            name;
        if ((typeof obj !== 'object' && typeof obj !== 'function')
                || obj === null) {
            throw new TypeError('Object.keys called on a non-object');
        }
        for (name in obj) {
            if (owns.call(obj, name)) {
                result.push(name);
            }
        }
        if (hasDontEnumBug) {
            dontEnums.forEach(function (dont) {
                if (owns.call(obj, dont)) {
                    result.push(dont);
                }
            });
        }
        return result;
    };
}());