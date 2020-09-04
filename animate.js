$(document).ready(() => {
  //start up animation
  const middleIcon = $(".mid-svg");
  const description = $(".description");

  // middleIcon.removeClass("hide");
  description.removeClass("hide");
  $(".landing-title").removeClass("hide");
  $(".indicator").removeClass("hide");
  $(".landing-text").removeClass("hide");

  // cursor animation
  const cursor = $(".cursor");

  $(document).on("mousemove", (e) => {
    $(".cursor-circle").css(
      "transform",
      `translate(-50%,-50%) translate(${e.pageX}px,${e.pageY}px)`
    );
    cursor.css(
      "transform",
      `translate(-50%,-50%) translate(${e.pageX}px,${e.pageY}px )`
    );
  });

  // links animation
  const aboutLink = $("#about-link");
  aboutLink.on("mouseover", () => {
    middleIcon.css("transform", "translate(-50%, -50%) rotate(180deg)");
    cursor.addClass("expand");
    description.text("Click it! I know you want to learn more about me!");
    aboutLink.css("color", "#ececec");
  });
  aboutLink.on("mouseleave", () => {
    cursor.removeClass("expand");
    middleIcon.css("transform", "translate(-50%, -50%) rotate(360deg)");
    description.text("A young man that loves maths, writing and developing.");
    aboutLink.css("color", "#f2a365");
  });

  const createLinkAnime = (query, text) => {
    const link = $(query);
    link.on("mouseover", (e) => {
      cursor.addClass("expand");
      description.text(text);
    });
    link.on("mouseleave", (e) => {
      cursor.removeClass("expand");
      description.text("A young man that loves maths, writing and developing.");
    });
  };

  createLinkAnime(
    "#blog-link",
    "Go on! Checkout some of my interesting writings!"
  );

  createLinkAnime(
    "#proj-link",
    "Have a glance at some of my previous projects!"
  );

  createLinkAnime(
    "#cont-link",
    "Don't be shy! I am always happy to hear from you."
  );

  createLinkAnime(
    ".navbar-brand",
    "My name is Dongshen Wu or David I'm a Winchester College student."
  );

  createLinkAnime(
    ".nav-icon",
    "A young man that loves maths, writing and developing."
  );
});
