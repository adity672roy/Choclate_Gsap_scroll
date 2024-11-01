var t1 = gsap.timeline({
  scrollTrigger: {
    trigger: ".about",
    start: "0% 95%",
    end: "70% 50%",
    scrub: true,
  },
});
t1.to(
  "#can",
  {
    top: "90%",
    left: "12%",
    rotate: "30deg",
  },
  "chocolate"
);
t1.to(
  "#chocolate",
  {
    top: "160%",
    left: "25%",
  },
  "chocolate"
);
t1.to(
  "#chocolate2",
  {
    top: "160%",
    right: "10%",
    width: "25%",
    rotate: "-15deg",
  },
  "chocolate"
);
t1.to(
  "#almond",
  {
    top: "110%",
    left: "70%",
    rotate: "130deg",
  },
  "chocolate"
);
t1.to(
  "#almond2",
  {
    top: "110%",
    left: "0%",
    rotate: "130deg",
  },
  "chocolate"
);

var t2 = gsap.timeline({
  scrollTrigger: {
    trigger: ".product",
    start: "0% 95%",
    end: "20% 50%",
    scrub: true,
  },
});
t2.to(
  "#can",
  {
    width: "30%",
    left: "35%",
    top: "188%",
    rotate: "0deg",
  },
  "can"
);
t2.to(
  "#chocolate",
  {
    width: "30%",
    left: "35%",
    top: "200%",
  },
  "can"
);
t2.to(
  "#chocolate2",
  {
    width: "15%",
    left: "35%",
    top: "250%",
  },
  "can"
);
