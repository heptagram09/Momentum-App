if (localStorage.getItem("username")) {
  const quotes = [
    {
      quote: "힘은 곧 도구일 뿐이야. 잘 이용할 줄 알아야지",
      author: "방랑자",
    },
    {
      quote: "신이 존재하지 않는다라고 한 사람들은 이미 죽었어",
      author: "스카라무슈",
    },
    {
      quote: "속세의 풍경은 항상 그대로인데, 인간의 일생은 이슬처럼 덧없구나",
      author: "라이덴 쇼군",
    },
    {
      quote: "진심은 목표를 명확하게 하고, 충고는 방황한 자의 방향을 알려주지",
      author: "종려",
    },
    {
      quote:
        "용기가 작은 새를 날아오르게 했다는 전설을 들은 적이 있어. 하지만 하늘 높은 곳에 대한 열망이 먼저 있었기에 날고 싶다는 충동과 용기가 있게 된 거 아닐까",
      author: "각청",
    },
    {
      quote:
        "사람들은 왜 항상... 자신의 가치가 남보다 높다는 걸 증명하려고 안달일까요? 존재한다는 것 자체가 충분히 아름다운 일이잖아요?",
      author: "감우",
    },
    {
      quote:
        "가장 취약한 부분을 찾아내 핵심만 파악하면 모든 방법을 해결할 수 있지",
      author: "알하이탐",
    },
    {
      quote: "낙엽이 지는게 안타깝도다",
      author: "카에데하라 카즈하",
    },
    {
      quote:
        "과거는 바뀌지 않지만 계속 미래를 향해 가다 보면, 과거는 네 삶에 있어서 짧은 한순간에 불과하게 될 거야",
      author: "나히다",
    },
    {
      quote:
        "만회할 수도, 바꿀 수도 없는 일들이 존재하기 떄문에 세상엔 감정이라는 게 있는 거야",
      author: "부에르",
    },
  ];

  const quote = document.querySelector("#quote span:first-child");
  const author = document.querySelector("#quote span:last-child");

  const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];
  const bgImage = document.createElement("img");
  bgImage.className = "bgImage";

  quote.innerText = `"${todaysQuote.quote}"`;
  author.innerText = `${todaysQuote.author}`;

  switch (author.innerText) {
    case "방랑자":
      bgImage.src = "img/1.png";
      break;
    case "스카라무슈":
      bgImage.src = "img/2.png";
      break;
    case "라이덴 쇼군":
      bgImage.src = "img/3.png";
      break;
    case "종려":
      bgImage.src = "img/4.png";
      break;
    case "각청":
      bgImage.src = "img/5.png";
      break;
    case "감우":
      bgImage.src = "img/6.png";
      break;
    case "알하이탐":
      bgImage.src = "img/7.png";
      break;
    case "카에데하라 카즈하":
      bgImage.src = "img/8.png";
      break;
    case "나히다":
      bgImage.src = "img/9.png";
      break;
    case "부에르":
      bgImage.src = "img/10.png";
      break;
  }

  document.body.appendChild(bgImage);
} else {
  const bgImage = document.createElement("img");
  bgImage.className = "bgImage";
  bgImage.src = "img/0.png";
  document.body.appendChild(bgImage);
}
