const w1 = document.getElementById("white1");
const w2 = document.getElementById("white2");
const w3 = document.getElementById("white3");
const w4 = document.getElementById("white4");
const w5 = document.getElementById("white5");
const w6 = document.getElementById("white6");
const w7 = document.getElementById("white7");
const w8 = document.getElementById("white8");
const w9 = document.getElementById("white9");
const w10 = document.getElementById("white10");
const b1 = document.getElementById("black1");
const b2 = document.getElementById("black2");
const b3 = document.getElementById("black3");
const b4 = document.getElementById("black4");
const b5 = document.getElementById("black5");
const b6 = document.getElementById("black6");
const b7 = document.getElementById("black7");
const front = document.querySelector(".front");
const sound = {65:"http://carolinegabriel.com/demo/js-keyboard/sounds/040.wav",
                87:"http://carolinegabriel.com/demo/js-keyboard/sounds/041.wav",
                83:"http://carolinegabriel.com/demo/js-keyboard/sounds/042.wav",
                69:"http://carolinegabriel.com/demo/js-keyboard/sounds/043.wav",
                68:"http://carolinegabriel.com/demo/js-keyboard/sounds/044.wav",
                70:"http://carolinegabriel.com/demo/js-keyboard/sounds/045.wav",
                84:"http://carolinegabriel.com/demo/js-keyboard/sounds/046.wav",
                71:"http://carolinegabriel.com/demo/js-keyboard/sounds/047.wav",
                89:"http://carolinegabriel.com/demo/js-keyboard/sounds/048.wav",
                72:"http://carolinegabriel.com/demo/js-keyboard/sounds/049.wav",
                85:"http://carolinegabriel.com/demo/js-keyboard/sounds/050.wav",
                74:"http://carolinegabriel.com/demo/js-keyboard/sounds/051.wav",
                75:"http://carolinegabriel.com/demo/js-keyboard/sounds/052.wav",
                79:"http://carolinegabriel.com/demo/js-keyboard/sounds/053.wav",
                76:"http://carolinegabriel.com/demo/js-keyboard/sounds/054.wav",
                80:"http://carolinegabriel.com/demo/js-keyboard/sounds/055.wav",
                186:"http://carolinegabriel.com/demo/js-keyboard/sounds/056.wav"};
var pause = 1;
// Event listener for the first white key
w1.addEventListener("mouseover", (event) => {
    w1.style.color = "black", w2.style.color = "black",
    w3.style.color = "black", w4.style.color = "black",
    w5.style.color = "black", w6.style.color = "black",
    w7.style.color = "black", w8.style.color = "black",
    w9.style.color = "black", w10.style.color = "black",
    b1.style.color = "white", b2.style.color = "white",
    b3.style.color = "white", b4.style.color = "white",
    b5.style.color = "white", b6.style.color = "white",
    b7.style.color = "white"
    ;});
w1.addEventListener("mouseout", (event) => {
    w1.style.color = "white", w2. style.color = "white",
    w3.style.color = "white", w4. style.color = "white",
    w5.style.color = "white", w6. style.color = "white",
    w7.style.color = "white", w8. style.color = "white",
    w9.style.color = "white", w10. style.color = "white",
    b1.style.color = "black", b2.style.color = "black",
    b3.style.color = "black", b4.style.color = "black",
    b5.style.color = "black", b6.style.color = "black",
    b7.style.color = "black";});

// Play the sound
var audiow1 = new Audio(sound[65])
window.addEventListener('keydown', (event) => {
    if(event.key === 'a'){
        if(pause === 1){
            audiow1.play();
            w1.style.scale="0.95";
            setTimeout(() => {
                w1.style.scale="";
            }, 800);
    }
    

    }
})
w1.addEventListener('mousedown', (event) => {
    audiow1.play();
    w1.style.scale="0.95";
    setTimeout(() => {
        w1.style.scale="";
    }, 800);
})

// Event listener for the second white key
w2.addEventListener("mouseover", (event) => {
    w1.style.color = "black", w2.style.color = "black",
    w3.style.color = "black", w4.style.color = "black",
    w5.style.color = "black", w6.style.color = "black",
    w7.style.color = "black", w8.style.color = "black",
    w9.style.color = "black", w10.style.color = "black",
    b1.style.color = "white", b2.style.color = "white",
    b3.style.color = "white", b4.style.color = "white",
    b5.style.color = "white", b6.style.color = "white",
    b7.style.color = "white";});

w2.addEventListener("mouseout", (event) => {
    w1.style.color = "white", w2. style.color = "white",
    w3.style.color = "white", w4. style.color = "white",
    w5.style.color = "white", w6. style.color = "white",
    w7.style.color = "white", w8. style.color = "white",
    w9.style.color = "white", w10. style.color = "white",
    b1.style.color = "black", b2.style.color = "black",
    b3.style.color = "black", b4.style.color = "black",
    b5.style.color = "black", b6.style.color = "black",
    b7.style.color = "black";});

// Play the sound
var audiow2 = new Audio(sound[83])
window.addEventListener('keydown', (event) => {
    if(event.key === 's'){
        if(pause === 1){
            audiow2.play();
            w2.style.scale="0.95";
            setTimeout(() => {
                w2.style.scale="";
            }, 800);
    }

    }
})
w2.addEventListener('mousedown', (event) => {
    audiow2.play();
    w2.style.scale="0.95";
    setTimeout(() => {
        w2.style.scale="";
    }, 800);
})

// Event listener for the third white key
w3.addEventListener("mouseover", (event) => {
    w1.style.color = "black", w2.style.color = "black",
    w3.style.color = "black", w4.style.color = "black",
    w5.style.color = "black", w6.style.color = "black",
    w7.style.color = "black", w8.style.color = "black",
    w9.style.color = "black", w10.style.color = "black",
    b1.style.color = "white", b2.style.color = "white",
    b3.style.color = "white", b4.style.color = "white",
    b5.style.color = "white", b6.style.color = "white",
    b7.style.color = "white";});

w3.addEventListener("mouseout", (event) => {
    w1.style.color = "white", w2. style.color = "white",
    w3.style.color = "white", w4. style.color = "white",
    w5.style.color = "white", w6. style.color = "white",
    w7.style.color = "white", w8. style.color = "white",
    w9.style.color = "white", w10. style.color = "white",
    b1.style.color = "black", b2.style.color = "black",
    b3.style.color = "black", b4.style.color = "black",
    b5.style.color = "black", b6.style.color = "black",
    b7.style.color = "black";});

// Play the sound
var audiow3 = new Audio(sound[68])
window.addEventListener('keydown', (event) => {
    if(event.key === 'd'){
        if (pause === 1){
            audiow3.play();
            w3.style.scale="0.95";
            setTimeout(() => {
                w3.style.scale="";
            }, 800);
    }
    }
})
w3.addEventListener('mousedown', (event) => {
    audiow3.play();
    w3.style.scale="0.95";
    setTimeout(() => {
        w3.style.scale="";
    }, 800);
})

// Event listener for the fourth white key
w4.addEventListener("mouseover", (event) => {
    w1.style.color = "black", w2.style.color = "black",
    w3.style.color = "black", w4.style.color = "black",
    w5.style.color = "black", w6.style.color = "black",
    w7.style.color = "black", w8.style.color = "black",
    w9.style.color = "black", w10.style.color = "black",
    b1.style.color = "white", b2.style.color = "white",
    b3.style.color = "white", b4.style.color = "white",
    b5.style.color = "white", b6.style.color = "white",
    b7.style.color = "white";});
w4.addEventListener("mouseout", (event) => {
    w1.style.color = "white", w2. style.color = "white",
    w3.style.color = "white", w4. style.color = "white",
    w5.style.color = "white", w6. style.color = "white",
    w7.style.color = "white", w8. style.color = "white",
    w9.style.color = "white", w10. style.color = "white",
    b1.style.color = "black", b2.style.color = "black",
    b3.style.color = "black", b4.style.color = "black",
    b5.style.color = "black", b6.style.color = "black",
    b7.style.color = "black";});

// Play the sound
var audiow4 = new Audio(sound[70])
window.addEventListener('keydown', (event) => {
    if(event.key === 'f'){
        if (pause === 1){
            audiow4.play();
            w4.style.scale="0.95";
            setTimeout(() => {
                w4.style.scale="";
            }, 800);
    }
    }
})
w4.addEventListener('mousedown', (event) => {
    audiow4.play();
    w4.style.scale="0.95";
    setTimeout(() => {
        w4.style.scale="";
    }, 800);
})

// Event listener for the fifth white key
w5.addEventListener("mouseover", (event) => {
    w1.style.color = "black", w2.style.color = "black",
    w3.style.color = "black", w4.style.color = "black",
    w5.style.color = "black", w6.style.color = "black",
    w7.style.color = "black", w8.style.color = "black",
    w9.style.color = "black", w10.style.color = "black",
    b1.style.color = "white", b2.style.color = "white",
    b3.style.color = "white", b4.style.color = "white",
    b5.style.color = "white", b6.style.color = "white",
    b7.style.color = "white";});
w5.addEventListener("mouseout", (event) => {
    w1.style.color = "white", w2. style.color = "white",
    w3.style.color = "white", w4. style.color = "white",
    w5.style.color = "white", w6. style.color = "white",
    w7.style.color = "white", w8. style.color = "white",
    w9.style.color = "white", w10. style.color = "white",
    b1.style.color = "black", b2.style.color = "black",
    b3.style.color = "black", b4.style.color = "black",
    b5.style.color = "black", b6.style.color = "black",
    b7.style.color = "black";});

// Play the sound
var audiow5 = new Audio(sound[71])
window.addEventListener('keydown', (event) => {
    if(event.key === 'g'){
        if (pause === 1){
            audiow5.play();
            w5.style.scale="0.95";
            setTimeout(() => {
                w5.style.scale="";
            }, 800);
    }
    }
})
w5.addEventListener('mousedown', (event) => {
    audiow5.play();
    w5.style.scale="0.95";
    setTimeout(() => {
        w5.style.scale="";
    }, 800);
})

// Event listener for the sixth white key
w6.addEventListener("mouseover", (event) => {
    w1.style.color = "black", w2.style.color = "black",
    w3.style.color = "black", w4.style.color = "black",
    w5.style.color = "black", w6.style.color = "black",
    w7.style.color = "black", w8.style.color = "black",
    w9.style.color = "black", w10.style.color = "black",
    b1.style.color = "white", b2.style.color = "white",
    b3.style.color = "white", b4.style.color = "white",
    b5.style.color = "white", b6.style.color = "white",
    b7.style.color = "white";});
w6.addEventListener("mouseout", (event) => {
    w1.style.color = "white", w2. style.color = "white",
    w3.style.color = "white", w4. style.color = "white",
    w5.style.color = "white", w6. style.color = "white",
    w7.style.color = "white", w8. style.color = "white",
    w9.style.color = "white", w10. style.color = "white",
    b1.style.color = "black", b2.style.color = "black",
    b3.style.color = "black", b4.style.color = "black",
    b5.style.color = "black", b6.style.color = "black",
    b7.style.color = "black";});

// Play the sound
var audiow6 = new Audio(sound[72])
window.addEventListener('keydown', (event) => {
    if(event.key === 'h'){
        if (pause === 1){
            audiow6.play();
            w6.style.scale="0.95";
            setTimeout(() => {
                w6.style.scale="";
            }, 800);
    }
    }
})
w6.addEventListener('mousedown', (event) => {
    audiow6.play();
    w6.style.scale="0.95";
    setTimeout(() => {
        w6.style.scale="";
    }, 800);
})

// Event listener for the seventh white key
w7.addEventListener("mouseover", (event) => {
    w1.style.color = "black", w2.style.color = "black",
    w3.style.color = "black", w4.style.color = "black",
    w5.style.color = "black", w6.style.color = "black",
    w7.style.color = "black", w8.style.color = "black",
    w9.style.color = "black", w10.style.color = "black",
    b1.style.color = "white", b2.style.color = "white",
    b3.style.color = "white", b4.style.color = "white",
    b5.style.color = "white", b6.style.color = "white",
    b7.style.color = "white";});
w7.addEventListener("mouseout", (event) => {
    w1.style.color = "white", w2. style.color = "white",
    w3.style.color = "white", w4. style.color = "white",
    w5.style.color = "white", w6. style.color = "white",
    w7.style.color = "white", w8. style.color = "white",
    w9.style.color = "white", w10. style.color = "white",
    b1.style.color = "black", b2.style.color = "black",
    b3.style.color = "black", b4.style.color = "black",
    b5.style.color = "black", b6.style.color = "black",
    b7.style.color = "black";});


// Play the sound
var audiow7 = new Audio(sound[74])
window.addEventListener('keydown', (event) => {
    if(event.key === 'j'){
        if (pause === 1){
            audiow7.play();
            w7.style.scale="0.95";
            setTimeout(() => {
                w7.style.scale="";
            }, 800);
        }
    }
})
w7.addEventListener('mousedown', (event) => {
    audiow7.play();
    w7.style.scale="0.95";
    setTimeout(() => {
        w7.style.scale="";
    }, 800);
})

// Event listener for the eighth white key
w8.addEventListener("mouseover", (event) => {
    w1.style.color = "black", w2.style.color = "black",
    w3.style.color = "black", w4.style.color = "black",
    w5.style.color = "black", w6.style.color = "black",
    w7.style.color = "black", w8.style.color = "black",
    w9.style.color = "black", w10.style.color = "black",
    b1.style.color = "white", b2.style.color = "white",
    b3.style.color = "white", b4.style.color = "white",
    b5.style.color = "white", b6.style.color = "white",
    b7.style.color = "white";});
w8.addEventListener("mouseout", (event) => {
    w1.style.color = "white", w2. style.color = "white",
    w3.style.color = "white", w4. style.color = "white",
    w5.style.color = "white", w6. style.color = "white",
    w7.style.color = "white", w8. style.color = "white",
    w9.style.color = "white", w10. style.color = "white",
    b1.style.color = "black", b2.style.color = "black",
    b3.style.color = "black", b4.style.color = "black",
    b5.style.color = "black", b6.style.color = "black",
    b7.style.color = "black";});

// Play the sound
var audiow8 = new Audio(sound[75])
window.addEventListener('keydown', (event) => {
    if(event.key === 'k'){
        if (pause === 1){
            audiow8.play();
            w8.style.scale="0.95";
            setTimeout(() => {
                w8.style.scale="";
            }, 800);
        }
    }
})
w8.addEventListener('mousedown', (event) => {
    audiow8.play();
    w8.style.scale="0.95";
    setTimeout(() => {
        w8.style.scale="";
    }, 800);
})

// Event listener for the ninth white key
w9.addEventListener("mouseover", (event) => {
    w1.style.color = "black", w2.style.color = "black",
    w3.style.color = "black", w4.style.color = "black",
    w5.style.color = "black", w6.style.color = "black",
    w7.style.color = "black", w8.style.color = "black",
    w9.style.color = "black", w10.style.color = "black",
    b1.style.color = "white", b2.style.color = "white",
    b3.style.color = "white", b4.style.color = "white",
    b5.style.color = "white", b6.style.color = "white",
    b7.style.color = "white";});
w9.addEventListener("mouseout", (event) => {
    w1.style.color = "white", w2. style.color = "white",
    w3.style.color = "white", w4. style.color = "white",
    w5.style.color = "white", w6. style.color = "white",
    w7.style.color = "white", w8. style.color = "white",
    w9.style.color = "white", w10. style.color = "white",
    b1.style.color = "black", b2.style.color = "black",
    b3.style.color = "black", b4.style.color = "black",
    b5.style.color = "black", b6.style.color = "black",
    b7.style.color = "black";});

// Play the sound
var audiow9 = new Audio(sound[76])
window.addEventListener('keydown', (event) => {
    if(event.key === 'l'){
        if (pause === 1){
            audiow9.play();
            w9.style.scale="0.95";
            setTimeout(() => {
                w9.style.scale="";
            }, 800);
        }
    }
})
w9.addEventListener('mousedown', (event) => {
    audiow9.play();
    w9.style.scale="0.95";
    setTimeout(() => {
        w9.style.scale="";
    }, 800);
})

// Event listener for the Tenth white key
w10.addEventListener("mouseover", (event) => {
    w1.style.color = "black", w2.style.color = "black",
    w3.style.color = "black", w4.style.color = "black",
    w5.style.color = "black", w6.style.color = "black",
    w7.style.color = "black", w8.style.color = "black",
    w9.style.color = "black", w10.style.color = "black",
    b1.style.color = "white", b2.style.color = "white",
    b3.style.color = "white", b4.style.color = "white",
    b5.style.color = "white", b6.style.color = "white",
    b7.style.color = "white";});
w10.addEventListener("mouseout", (event) => {
    w1.style.color = "white", w2. style.color = "white",
    w3.style.color = "white", w4. style.color = "white",
    w5.style.color = "white", w6. style.color = "white",
    w7.style.color = "white", w8. style.color = "white",
    w9.style.color = "white", w10. style.color = "white",
    b1.style.color = "black", b2.style.color = "black",
    b3.style.color = "black", b4.style.color = "black",
    b5.style.color = "black", b6.style.color = "black",
    b7.style.color = "black";});

// Play the sound
var audiow10 = new Audio(sound[186])
window.addEventListener('keydown', (event) => {
    if(event.key === ';'){
        if (pause === 1){
            audiow10.play();
            w10.style.scale="0.95";
            setTimeout(() => {
                w10.style.scale="";
            }, 800);
    }
    }
})
w10.addEventListener('mousedown', (event) => {
    audiow10.play();
    w10.style.scale="0.95";
    setTimeout(() => {
        w10.style.scale="";
    }, 800);
})

// Event listener for the first black key
b1.addEventListener("mouseover", (event) => {
    w1.style.color = "black", w2.style.color = "black",
    w3.style.color = "black", w4.style.color = "black",
    w5.style.color = "black", w6.style.color = "black",
    w7.style.color = "black", w8.style.color = "black",
    w9.style.color = "black", w10.style.color = "black",
    b1.style.color = "white", b2.style.color = "white",
    b3.style.color = "white", b4.style.color = "white",
    b5.style.color = "white", b6.style.color = "white",
    b7.style.color = "white";});
b1.addEventListener("mouseout", (event) => {
    w1.style.color = "white", w2. style.color = "white",
    w3.style.color = "white", w4. style.color = "white",
    w5.style.color = "white", w6. style.color = "white",
    w7.style.color = "white", w8. style.color = "white",
    w9.style.color = "white", w10. style.color = "white",
    b1.style.color = "black", b2.style.color = "black",
    b3.style.color = "black", b4.style.color = "black",
    b5.style.color = "black", b6.style.color = "black",
    b7.style.color = "black";});

// Play the sound
var audiob1 = new Audio(sound[87])
window.addEventListener('keydown', (event) => {
    if(event.key === 'w'){
        if (pause === 1){
            audiob1.play();
            b1.style.scale="0.95";
            setTimeout(() => {
                b1.style.scale="";
            }, 800);
        }
    }
})
b1.addEventListener('mousedown', (event) => {
    audiob1.play();
    b1.style.scale="0.95";
    setTimeout(() => {
        b1.style.scale="";
    }, 800);
})

// Event listener for the second black key
b2.addEventListener("mouseover", (event) => {
    w1.style.color = "black", w2.style.color = "black",
    w3.style.color = "black", w4.style.color = "black",
    w5.style.color = "black", w6.style.color = "black",
    w7.style.color = "black", w8.style.color = "black",
    w9.style.color = "black", w10.style.color = "black",
    b1.style.color = "white", b2.style.color = "white",
    b3.style.color = "white", b4.style.color = "white",
    b5.style.color = "white", b6.style.color = "white",
    b7.style.color = "white";});
b2.addEventListener("mouseout", (event) => {
    w1.style.color = "white", w2. style.color = "white",
    w3.style.color = "white", w4. style.color = "white",
    w5.style.color = "white", w6. style.color = "white",
    w7.style.color = "white", w8. style.color = "white",
    w9.style.color = "white", w10. style.color = "white",
    b1.style.color = "black", b2.style.color = "black",
    b3.style.color = "black", b4.style.color = "black",
    b5.style.color = "black", b6.style.color = "black",
    b7.style.color = "black";});

// Play the sound
var audiob2 = new Audio(sound[69])
window.addEventListener('keydown', (event) => {
    if(event.key === 'e'){
        if (pause === 1){
            audiob2.play();
            b2.style.scale="0.95";
            setTimeout(() => {
                b2.style.scale="";
            }, 800);
        }
    }
})
b2.addEventListener('mousedown', (event) => {
    audiob2.play();
    b2.style.scale="0.95";
    setTimeout(() => {
        b2.style.scale="";
    }, 800);
})

// Event listener for the third black key
b3.addEventListener("mouseover", (event) => {
    w1.style.color = "black", w2.style.color = "black",
    w3.style.color = "black", w4.style.color = "black",
    w5.style.color = "black", w6.style.color = "black",
    w7.style.color = "black", w8.style.color = "black",
    w9.style.color = "black", w10.style.color = "black",
    b1.style.color = "white", b2.style.color = "white",
    b3.style.color = "white", b4.style.color = "white",
    b5.style.color = "white", b6.style.color = "white",
    b7.style.color = "white";});
b3.addEventListener("mouseout", (event) => {
    w1.style.color = "white", w2. style.color = "white",
    w3.style.color = "white", w4. style.color = "white",
    w5.style.color = "white", w6. style.color = "white",
    w7.style.color = "white", w8. style.color = "white",
    w9.style.color = "white", w10. style.color = "white",
    b1.style.color = "black", b2.style.color = "black",
    b3.style.color = "black", b4.style.color = "black",
    b5.style.color = "black", b6.style.color = "black",
    b7.style.color = "black";});

// Play the sound
var audiob3 = new Audio(sound[84])
window.addEventListener('keydown', (event) => {
    if(event.key === 't'){
        if (pause === 1){
            audiob3.play();
            b3.style.scale="0.95";
            setTimeout(() => {
                b3.style.scale="";
            }, 800);
        }
    }
})
b3.addEventListener('mousedown', (event) => {
    audiob3.play();
    b3.style.scale="0.95";
    setTimeout(() => {
        b3.style.scale="";
    }, 800);
})

// Event listener for the fourth black key
b4.addEventListener("mouseover", (event) => {
    w1.style.color = "black", w2.style.color = "black",
    w3.style.color = "black", w4.style.color = "black",
    w5.style.color = "black", w6.style.color = "black",
    w7.style.color = "black", w8.style.color = "black",
    w9.style.color = "black", w10.style.color = "black",
    b1.style.color = "white", b2.style.color = "white",
    b3.style.color = "white", b4.style.color = "white",
    b5.style.color = "white", b6.style.color = "white",
    b7.style.color = "white";});
b4.addEventListener("mouseout", (event) => {
    w1.style.color = "white", w2. style.color = "white",
    w3.style.color = "white", w4. style.color = "white",
    w5.style.color = "white", w6. style.color = "white",
    w7.style.color = "white", w8. style.color = "white",
    w9.style.color = "white", w10. style.color = "white",
    b1.style.color = "black", b2.style.color = "black",
    b3.style.color = "black", b4.style.color = "black",
    b5.style.color = "black", b6.style.color = "black",
    b7.style.color = "black";});

// Play the sound
var audiob4 = new Audio(sound[89])
window.addEventListener('keydown', (event) => {
    if(event.key === 'y'){
        if (pause === 1){
            audiob4.play();
            b4.style.scale="0.95";
            setTimeout(() => {
                b4.style.scale="";
            }, 800);
        }
    }
})
b4.addEventListener('mousedown', (event) => {
    audiob4.play();
    b4.style.scale="0.95";
    setTimeout(() => {
        b4.style.scale="";
    }, 800);
})

// Event listener for the fifth black key
b5.addEventListener("mouseover", (event) => {
    w1.style.color = "black", w2.style.color = "black",
    w3.style.color = "black", w4.style.color = "black",
    w5.style.color = "black", w6.style.color = "black",
    w7.style.color = "black", w8.style.color = "black",
    w9.style.color = "black", w10.style.color = "black",
    b1.style.color = "white", b2.style.color = "white",
    b3.style.color = "white", b4.style.color = "white",
    b5.style.color = "white", b6.style.color = "white",
    b7.style.color = "white";});
b5.addEventListener("mouseout", (event) => {
    w1.style.color = "white", w2. style.color = "white",
    w3.style.color = "white", w4. style.color = "white",
    w5.style.color = "white", w6. style.color = "white",
    w7.style.color = "white", w8. style.color = "white",
    w9.style.color = "white", w10. style.color = "white",
    b1.style.color = "black", b2.style.color = "black",
    b3.style.color = "black", b4.style.color = "black",
    b5.style.color = "black", b6.style.color = "black",
    b7.style.color = "black";});

// Play the sound
var audiob5 = new Audio(sound[85])
window.addEventListener('keydown', (event) => {
    if(event.key === 'u'){
        if (pause === 1){
            audiob5.play();
            b5.style.scale="0.95";
            setTimeout(() => {
                b5.style.scale="";
            }, 800);
    }
    }
})
b5.addEventListener('mousedown', (event) => {
    audiob5.play();
    b5.style.scale="0.95";
    setTimeout(() => {
        b5.style.scale="";
    }, 800);
})

// Event listener for the sixth black key
b6.addEventListener("mouseover", (event) => {
    w1.style.color = "black", w2.style.color = "black",
    w3.style.color = "black", w4.style.color = "black",
    w5.style.color = "black", w6.style.color = "black",
    w7.style.color = "black", w8.style.color = "black",
    w9.style.color = "black", w10.style.color = "black",
    b1.style.color = "white", b2.style.color = "white",
    b3.style.color = "white", b4.style.color = "white",
    b5.style.color = "white", b6.style.color = "white",
    b7.style.color = "white";});
b6.addEventListener("mouseout", (event) => {
    w1.style.color = "white", w2. style.color = "white",
    w3.style.color = "white", w4. style.color = "white",
    w5.style.color = "white", w6. style.color = "white",
    w7.style.color = "white", w8. style.color = "white",
    w9.style.color = "white", w10. style.color = "white",
    b1.style.color = "black", b2.style.color = "black",
    b3.style.color = "black", b4.style.color = "black",
    b5.style.color = "black", b6.style.color = "black",
    b7.style.color = "black";});

// Play the sound
var audiob6 = new Audio(sound[79])
window.addEventListener('keydown', (event) => {
    if(event.key === 'o'){
        if (pause === 1){
            audiob6.play();
            b6.style.scale="0.95";
            setTimeout(() => {
                b6.style.scale="";
            }, 800);
        }
    }
})
b6.addEventListener('mousedown', (event) => {
    audiob6.play();
    b6.style.scale="0.95";
    setTimeout(() => {
        b6.style.scale="";
    }, 800);
})

// Event listener for the seventh black key
b7.addEventListener("mouseover", (event) => {
    w1.style.color = "black", w2.style.color = "black",
    w3.style.color = "black", w4.style.color = "black",
    w5.style.color = "black", w6.style.color = "black",
    w7.style.color = "black", w8.style.color = "black",
    w9.style.color = "black", w10.style.color = "black",
    b1.style.color = "white", b2.style.color = "white",
    b3.style.color = "white", b4.style.color = "white",
    b5.style.color = "white", b6.style.color = "white",
    b7.style.color = "white";});
b7.addEventListener("mouseout", (event) => {
    w1.style.color = "white", w2. style.color = "white",
    w3.style.color = "white", w4. style.color = "white",
    w5.style.color = "white", w6. style.color = "white",
    w7.style.color = "white", w8. style.color = "white",
    w9.style.color = "white", w10. style.color = "white",
    b1.style.color = "black", b2.style.color = "black",
    b3.style.color = "black", b4.style.color = "black",
    b5.style.color = "black", b6.style.color = "black",
    b7.style.color = "black";});

// Play the sound
var audiob7 = new Audio(sound[80])
window.addEventListener('keydown', (event) => {
    if(event.key === 'p'){
        if (pause === 1){
            audiob7.play();
            b7.style.scale="0.95";
            setTimeout(() => {
                b7.style.scale="";
            }, 800);
    }
    }
})
b7.addEventListener('mousedown', (event) => {
    audiob7.play();
    b7.style.scale="0.95";
    setTimeout(() => {
        b7.style.scale="";
    }, 800);
})

var creepyAudio = new Audio("https://orangefreesounds.com/wp-content/uploads/2020/09/Creepy-piano-sound-effect.mp3?_=1");
// Wait until the correct sequence is played
function checkKeySequence(key) {
    let sequence = "weseeyou";
    let sequenceIndex = 0;
    
    return function(e) {
      if (e.key === sequence[sequenceIndex]) {
        sequenceIndex++;
      } else {
        sequenceIndex = 0;
      }
  
      // Play the sound and show image
      if (sequenceIndex === sequence.length) {
        if(pause === 1){
            front.classList.add("show");
            creepyAudio.play();
            sequenceIndex = 0;
            pause = 0;
        }
      }
    };
  }
  
  document.addEventListener("keypress", checkKeySequence());