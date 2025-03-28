const image = document.querySelector(".image"),
  hover = document.querySelector(".hover"),
  modal = document.querySelector(".modal"),
  close = document.querySelector(".close"),
  follow = document.querySelector(".follow"),
  card = document.querySelector(".card");

// const loader = document.getElementById("loader");
// const loaderText = document.getElementById("loader-text");

//
// function load() {
//   const e = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz1234567890";
//   let t = null,
//     a = 0;
//   const o = loaderText.dataset.value;
//   clearInterval(t),
//     (t = setInterval(() => {
//       (loaderText.innerText = o
//         .split("")
//         .map((t, n) => (n < a ? o[n] : e[Math.floor(62 * Math.random())]))
//         .join("")),
//         a >= o.length && clearInterval(t),
//         (a += 3 / o.length);
//     }, 30)),
//     setTimeout(unload, 3e3);
// }
// function unload() {
//   (loader.style.zIndex = 0), (loader.style.opacity = 0);
// }
//

function show() {
  hover.classList.add("active"), modal.classList.add("show");
}

function hide() {
  hover.classList.remove("active"), modal.classList.remove("show");
}

// loader
// loaderText.ontouchend = e => { document.documentElement.requestFullscreen(), setTimeout(load, 100) }, loaderText.onclick = e => { document.documentElement.requestFullscreen(), setTimeout(load, 100) },

image.addEventListener("click", show), close.addEventListener("click", hide);

var chkbtn = document.getElementById("chkbtn");
const sidebar = document.getElementById("sidebar");

function toogle() {
  document.getElementById("check").checked
    ? (sidebar.style.animation = "fadeOut 0.25s linear forwards")
    : ((sidebar.style.display = "block"),
      (sidebar.style.animation = "fadeIn 0.25s linear"));
}

chkbtn.addEventListener("click", toogle);
const container = document.querySelector("#body"),
  toggle = document.querySelector(".toggle-input"),
  part = document.getElementById("particles-js"),
  initialState = "false";
(toggle.checked = "false"),
  toggle.addEventListener("change", function () {
    toggle.checked
      ? ((container.className = "dark"),
        (part.style.backgroundColor = "#100b16"),
        card.style.setProperty(
          "--anim",
          "cardDarkGradient .3s ease-in forwards"
        ),
        (follow.style.animation =
          "followDarkGradient .3s ease-in-out forwards"),
        particlesJS("particles-js", {
          particles: {
            number: { value: 100, density: { enable: !0, value_area: 800 } },
            color: { value: "#b392ac" },
            shape: { type: "polygon", polygon: { nb_sides: 6 } },
            opacity: { value: 0.75 },
            size: {
              value: 2,
              anim: { enable: !0, speed: 5, size_min: 1, sync: !0 }
            },
            line_linked: {
              enable: !0,
              distance: 125,
              color: "#ffffff",
              opacity: 0.75,
              width: 0.5
            },
            move: {
              enable: !0,
              speed: 5,
              attract: { enable: !0, rotateX: 1500, rotateY: 900 }
            }
          },
          interactivity: {
            detect_on: "canvas",
            events: {
              onhover: { enable: !0, mode: "grab" },
              onclick: { enable: !0, mode: "bubble" },
              resize: !0
            },
            modes: {
              grab: { distance: 300, line_linked: { opacity: 1 } },
              bubble: {
                distance: 300,
                size: 5,
                duration: 0.75,
                opacity: 8,
                speed: 3
              }
            }
          },
          retina_detect: !0
        }))
      : ((container.className = "light"),
        (part.style.backgroundColor = "#eed1ff"),
        card.style.setProperty(
          "--anim",
          "cardLightGradient .3s ease-in-out forwards"
        ),
        (follow.style.animation =
          "followLightGradient .3s ease-in-out forwards"),
        particlesJS("particles-js", {
          particles: {
            number: { value: 100, density: { enable: !0, value_area: 800 } },
            color: { value: "#7B2CBF" },
            shape: { type: "circle" },
            opacity: { value: 0.75 },
            size: {
              value: 2,
              anim: { enable: !0, speed: 5, size_min: 1, sync: !0 }
            },
            line_linked: {
              enable: !0,
              distance: 125,
              color: "#7B2CBF",
              opacity: 2,
              width: 0.5
            },
            move: {
              enable: !0,
              speed: 5,
              attract: { enable: !0, rotateX: 1500, rotateY: 900 }
            }
          },
          interactivity: {
            detect_on: "canvas",
            events: {
              onhover: { enable: !0, mode: "repulse" },
              onclick: { enable: !0, mode: "bubble" },
              resize: !0
            },
            modes: {
              bubble: {
                distance: 300,
                size: 5,
                duration: 0.75,
                opacity: 8,
                speed: 3
              }
            }
          },
          retina_detect: !0
        }));
  }),
  particlesJS("particles-js", {
    particles: {
      number: { value: 80, density: { enable: !0, value_area: 800 } },
      color: { value: "#b392ac" },
      shape: { type: "polygon", polygon: { nb_sides: 6 } },
      opacity: { value: 0.75 },
      size: { value: 2, anim: { enable: !0, speed: 5, size_min: 1, sync: !0 } },
      line_linked: {
        enable: !0,
        distance: 125,
        color: "#ffffff",
        opacity: 0.75,
        width: 0.5
      },
      move: {
        enable: !0,
        speed: 5,
        attract: { enable: !0, rotateX: 1500, rotateY: 900 }
      }
    },
    interactivity: {
      detect_on: "canvas",
      events: {
        onhover: { enable: !0, mode: "grab" },
        onclick: { enable: !0, mode: "bubble" },
        resize: !0
      },
      modes: {
        grab: { distance: 300, line_linked: { opacity: 1 } },
        bubble: { distance: 300, size: 5, duration: 0.75, opacity: 8, speed: 3 }
      }
    },
    retina_detect: !0
  });

toggle.addEventListener('change', function () {
  if (!toggle.checked) {
    container.className = 'light';
    part.style.backgroundColor = "#d3d3d3";
    kofiWidgetOverlay.draw('btwOreo', {
      'type': 'floating-chat',
      'floating-chat.donateButton.text': 'Support me',
      'floating-chat.donateButton.background-color': '#7F00FF',
      'floating-chat.donateButton.text-color': '#fff'
    });
  }
  else {
    container.className = 'dark';
    part.style.backgroundColor = "#161616";
    kofiWidgetOverlay.draw('btwOreo', {
      'type': 'floating-chat',
      'floating-chat.donateButton.text': 'Support me',
      'floating-chat.donateButton.background-color': '#734F96',
      'floating-chat.donateButton.text-color': '#fff'
    });
  }
});
