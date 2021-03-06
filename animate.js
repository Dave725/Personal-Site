const svgs = [
  {
    title: "upTrig",
    path:
      "M128.635 10.3885C136.313 -3.04778 155.687 -3.04778 163.365 10.3885L288.901 230.077C296.52 243.41 286.893 260 271.536 260H20.4636C5.10714 260 -4.5202 243.41 3.09873 230.077L128.635 10.3885Z",
  },
  {
    title: "square",
    path:
      "M137.858 6.14213C145.668 -1.66836 158.332 -1.66834 166.142 6.14214L297.858 137.858C305.668 145.668 305.668 158.332 297.858 166.142L166.142 297.858C158.332 305.668 145.668 305.668 137.858 297.858L6.14213 166.142C-1.66836 158.332 -1.66834 145.668 6.14214 137.858L137.858 6.14213Z",
  },
  {
    title: "pentagon",
    path:
      "M136.779 4.43423C143.978 -1.12358 154.022 -1.12359 161.221 4.43423L290.219 104.015C296.808 109.101 299.558 117.736 297.124 125.695L247.373 288.382C244.802 296.79 237.04 302.533 228.248 302.533H69.7525C60.9597 302.533 53.1982 296.79 50.6268 288.382L0.876144 125.695C-1.55791 117.736 1.19199 109.101 7.78057 104.015L136.779 4.43423Z",
  },
  {
    title: "circle",
    path:
      "M320 160C320 248.366 248.366 320 160 320C71.6344 320 0 248.366 0 160C0 71.6344 71.6344 0 160 0C248.366 0 320 71.6344 320 160Z",
  },
  {
    title: "star",
    path:
      "M120.172 9.19912C128.044 -3.05614 145.956 -3.05611 153.828 9.19915L187.335 61.3666C190.044 65.5833 194.236 68.6295 199.084 69.9023L259.052 85.6491C273.14 89.3483 278.675 106.384 269.452 117.657L230.192 165.645C227.019 169.524 225.418 174.453 225.705 179.456L229.26 241.356C230.095 255.898 215.604 266.426 202.032 261.138L144.261 238.629C139.591 236.81 134.409 236.81 129.739 238.629L71.9678 261.138C58.3961 266.426 43.9047 255.898 44.7399 241.356L48.2951 179.456C48.5825 174.453 46.981 169.524 43.8077 165.645L4.54775 117.657C-4.67524 106.384 0.860029 89.3483 14.9479 85.6491L74.9165 69.9023C79.7637 68.6295 83.9565 65.5833 86.6648 61.3666L120.172 9.19912Z",
  },
];

const upTrig = svgs[0].path;
const square = svgs[1].path;
const pentagon = svgs[2].path;
const circle = svgs[3].path;
const star = svgs[4].path;

$(document).ready(() => {
  //start up animation
  const middleIcon = $(".mid-svg");
  const description = $("p.description");
  // const hideDesc = $(".anime-desc");

  // middleIcon.removeClass("hide");
  description.removeClass("hide");
  $(".landing-title").removeClass("hide");
  $(".indicator").removeClass("hide");
  $(".landing-text").removeClass("hide");

  // cursor animation
  const cursor = $(".cursor");

  // $(document).on("mousemove", (e) => {
  //   cursor.css(
  //     "transform",
  //     `translate(-50%,-50%) translate(${e.pageX}px,${e.pageY}px )`
  //   );
  // });

  // $(".cursor-circle").css(
  //   "transform",
  //   `translate(-50%,-50%) translate(${e.pageX}px,${e.pageY}px)`
  // );

  // links animation
  function typewritter(element, txt) {
    let i = 0;
    const speed = 50;
    $("p.description").html = "";
    typeWriter();
    function typeWriter() {
      if (i < txt.length) {
        $("p.description").html += txt.charAt(i);
        i++;
        setTimeout(typeWriter, speed);
      }
    }
  }
  const aboutLink = $("#about-link");
  aboutLink.on("mouseover", () => {
    middleIcon.css("transform", "translate(-50%, -50%) rotate(180deg)");
    cursor.addClass("expand");
    typewritter(
      description,
      "Click it! I know you want to learn more about me!"
    );
    aboutLink.css("color", "#ececec");
  });
  aboutLink.on("mouseleave", () => {
    cursor.removeClass("expand");
    middleIcon.css("transform", "translate(-50%, -50%) rotate(360deg)");
    typewritter(
      description,
      "A young man that loves maths, writing and developing."
    );
    aboutLink.css("color", "#f2a365");
  });

  const svg = $(".svg");
  const createLinkAnime = (query, text, path) => {
    const link = $(query);
    // FIXME: add typewritter effect to replace fading.
    link.on("mouseover", (e) => {
      cursor.addClass("expand");
      typewritter(description, text);
      svg.addClass("fadeInOut");
      svg.removeClass("fadeOutIn");
      setTimeout(() => svg.attr("d", path), 250);
    });
    link.on("mouseleave", (e) => {
      cursor.removeClass("expand");
      typewritter(
        description,
        "A young man that loves maths, writing and developing."
      );
      svg.removeClass("fadeInOut");
      svg.addClass("fadeOutIn");
      setTimeout(() => svg.attr("d", upTrig), 250);
    });
  };

  createLinkAnime(
    "#blog-link",
    "Go on! Checkout some of my interesting writings!",
    circle
  );

  createLinkAnime(
    "#proj-link",
    "Have a glance at some of my previous projects!",
    square
  );

  createLinkAnime(
    "#cont-link",
    "Don't be shy! I am always pleased to hear anything from you.",
    pentagon
  );

  createLinkAnime(
    ".navbar-brand",
    "My name is Dongshen Wu or David I'm a Winchester College student.",
    star
  );

  $(".nav-icon").on("mouseover", (e) => {
    cursor.addClass("expand");
  });
  $(".nav-icon").on("mouseleave", (e) => {
    cursor.removeClass("expand");
  });

  const burger = $(".burger");
  let activeContact = false;

  burger.click((e) => {
    if (!activeContact) {
      activeContact = true;
      gsap.to(".line1", 1, { rotate: 45, y: 5, ease: "elastic.out" });
      gsap.to(".line2", 1, { rotate: -45, y: -5, ease: "elastic.out" });
      gsap.to(".menu", 1, { clipPath: "circle(2500px at 110% 110%)" });
      $("html").css("overflow", "hidden");
    } else {
      activeContact = false;
      gsap.to(".line1", 1, { rotate: 0, y: 0, ease: "elastic.out" });
      gsap.to(".line2", 1, { rotate: -0, y: 0, ease: "elastic.out" });
      gsap.to(".menu", 0.8, { clipPath: "circle(50px at 110% 110%)" });
      $("html").css("overflow", "auto");
      $("html").css("overflow-x", "hidden");
    }
    console.log(activeContact);
  });

  $("nav a").click((e) => {
    activeContact = false;
    gsap.to(".line1", 1, { rotate: 0, y: 0, ease: "elastic.out" });
    gsap.to(".line2", 1, { rotate: -0, y: 0, ease: "elastic.out" });
    gsap.to(".menu", 0.8, { clipPath: "circle(50px at 110% 110%)" });
    $("html").css("overflow", "auto");
    $("html").css("overflow-x", "hidden");
  });

  $(window).scroll(function () {
    const aboutPos =
      document.querySelector("#about-link").getBoundingClientRect().top / 0.5;
    if (aboutPos < window.innerHeight) {
      burger.css("transform", "translateY(0%)");
    } else {
      burger.css("transform", "translateY(300%)");
    }
  });
});
