import anime from '../anime/lib/anime.es.js';

export let animateLIMobile = () =>{
    let section = document.getElementById("list-dot-outer"),
        start1 = section.querySelector(".li-throbber-start").getBoundingClientRect(),
        end1 = section.querySelectorAll(".throbber-top")[0].querySelector(".pulse3").getBoundingClientRect(),
        start2 = section.querySelectorAll(".throbber-bottom")[0].querySelector(".pulse3").getBoundingClientRect(),
        end2= section.querySelectorAll(".throbber-top")[1].querySelector(".pulse4").getBoundingClientRect(),
        start3 = section.querySelectorAll(".throbber-bottom")[1].querySelector(".pulse4").getBoundingClientRect(),
        end3 = section.querySelectorAll(".throbber-top")[2].querySelector(".pulse5").getBoundingClientRect(),
        moveY = (s, e, p=0) =>  (e.top + e.bottom)/2 - (s == 0 ? 0 : (s.top + s.bottom))/2 +p,
        moveX = (s, e, p=0) =>  (e.left + e.right)/2 - (s == 0 ? 0 : (s.left + s.right))/2 +p,
        steps = [];
    let animation = anime.timeline({
        easing: "easeInOutCubic",
        complete: function(anim) {
            try {
                animateLIMobile()
            } catch (err) {
                console.error(err);
            }     
        }
    }).add({
        targets: ".mv-4",
        translateY: [moveY(start1, 0), moveY(start1, end1)],
        translateX: [moveX(start1, 0), moveY(start1, end1)],
        duration: 1000,
        easing: "easeOutCubic",
    }, 887).add({
      targets: ".pulse2",
      opacity: [1, 0],
      scale: [
        {value: [1, 2]},
      ],
      easing: "easeOutCubic",
      duration: 1000,
    }).add({
        targets: ".mv-1",
        translateX: [moveX(start2, 0), moveX(start2, end2)],
        translateY: [moveY(start2, 0), moveY(start2, end2)],
        duration: 600,
        easing: "easeOutCubic"
    }).add({
        targets: ".mv-1",
        opacity: [1, 0],
        duration: 1,
        easing: "linear"
    }).add({
        targets: ".pulse3",
        opacity: [1, 0],
        scale: [
            {value: [1, 2]},
        ],
        easing: "easeOutCubic",
        duration: 1000,
    }).add({
        targets: ".mv-3",
        translateY: [
            {value: [moveY(0, start2),  moveY(0, end2, -20)]},
            {value: [moveY(0, end2, -20),  moveY(0, end2, 20)]},
            {value: [moveY(0, end2, 20),  moveY(0, end2)]}
        ],
        translateX: {
            value: [0,  moveX(start1, end2)],
            easing: "linear",
        },
        duration: 1300,
        delay: 100
    }).add({
        targets: ".mv-3",
        opacity: [1, 0],
        duration: 1,
        easing: "linear"
    }).add({
        targets: ".pulse4",
        opacity: [1, 0],
        scale: [
            {value: [1, 2]},
        ],
        easing: "easeOutCubic",
        duration: 1000,
    }).add({
        targets: ".mv-2",
        translateX: [
            {
                value: [0, moveX(start3, end3)/3],
                duration: 500,
                easing: "linear"
            },
            {
                value: [moveX(start3, end3)],
                duration: 910,
                easing: "linear"
            },
        ],
        translateY: [
            {
                value: [moveY(0, start3), moveY(0, end3)],
                duration: 500,
                easing: "easeInQuad"
            },
            {
                value: [moveY(0, end3), moveY(0, start3)],
                duration: 450,
                easing: "easeOutCirc"
            },
            {
                value: [moveY(0, start3), moveY(0, end3)],
                duration: 450,
                easing: "easeInCirc"
            },
        ],
        height: [
            {
                value: ["10px", "1px"],
                delay: 480,
                duration: 30
            },
            {
                value: ["1px", "10px"],
                duration: 30
            },
        ],
        backgroundColor: {
            value: ["#AF46D3", "#fff"],
            delay: 450,
            duration: 100
        },
        border: [0, "2px solid #AF46D3"],
        borderRadius: {
            value: ["50%", "0px"],
            delay: 450,
            duration: 100
        },
        rotateZ: {
            value: [0, 720],
            delay: 500,
            duration: 800,
            easing: "easeInOutCirc"
        },

    }).add({
        targets: ".mv-2",
        opacity: [1, 0],
        duration: 1,
        easing: "linear"
    }).add({
        targets: ".pulse5",
        opacity: [1, 0],
        scale: [
            {value: [1, 2]},
        ],
        easing: "easeOutCubic",
        duration: 1000,
    })

    return animation

}
