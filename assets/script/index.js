const questionSectionClassName = "question-section";
const questionSectionElement = document.querySelector(
  `.${questionSectionClassName}`
);

const questions = [
  {
    question: "На чем основан план питания?",
    answer:
      "Основой плана питания является сбалансированный рацион с учетом индивидуальных показателей: пол, вес, рост, возраст, и желаемый вес.",
  },
  {
    question: "Кто составлял план питания?",
    answer:
      "План питания создан за счёт опыта диетологов-практиков, а также консультации от поваров, которые неустанно разрабатывали рецепты и проводили дегустации. Далее на основе данных программисты создали умный алгоритм, который выдает индивидуальный план питания. Проведение тестов показало отличные результаты.",
  },
  {
    question: "Что произойдет после оформления заказа?",
    answer:
      "Умный алгоритм на основе Ваших ответов на вопросы, подберет план питания. Сразу после оплаты, Вы сможете войти в личный кабинет и скачать план питания на первую неделю.",
  },
  {
    question: "Когда я получу свой план питания?",
    answer:
      "Сразу после оплаты, Вы сможете войти в личный кабинет и скачать план питания на первую неделю.",
  },
  {
    question: "Где мой план питания?",
    answer:
      "Ваш план питания находится в личном кабинете, данные для входа Вы получите после оплаты. Аккаунт будет создан на электронную почту, указанную при оформлении заказа. Если у Вас будут проблемы с входом, или Вы потеряли доступ к указанной при регистрации электронной почте, обратитесь в службу поддержки по адресу",
  },
  {
    question: "В рационе калорийные блюда, разве так можно похудеть?",
    answer:
      "Одно из важнейших правил в похудении: не худеть быстро, путем резкого снижения потребляемых калорий. Так как это приводит к проблемам со здоровьем, а позже Ваш вес снова вернется в двукратном объеме. С планом питания это исключено, благодаря сбалансированному рациону, снижение веса проходит гладко, без голодовок и вреда организму. Не переживайте на счёт потребляемых калорий.",
  },
  {
    question: "Нужно ли дополнительно принимать витамины, БАДы и минералы?",
    answer:
      "Нет, план питания сбалансирован, соблюдайте его и вы получите все необходимое для вашего организма.",
  },
  {
    question:
      "Нужно ли добавлять спортивные нагрузки для получения результата?",
    answer:
      "В этом нет необходимости, потому что план питания предназначен для комфортного похудения. Но как Вы знаете вести активный образ жизни это значит быть энергичным и здоровым человеком, например, будет преимуществом чаще прогуливаться по парку и дышать свежим воздухом.",
  },
];

questions.forEach((item, idx) => {
  idx++;
  const questionNumber = idx >= 10 ? idx : +("0" + idx);
  const questionSectionItemClassName = `${questionSectionClassName}__item`;
  const elem = document.createElement("div");

  elem.classList.add("card");
  elem.classList.add(`${questionSectionItemClassName}`);

  elem.innerHTML = `
  <button class="${questionSectionItemClassName}-top-part">
    <div class="${questionSectionItemClassName}-number">
      <div>${questionNumber}</div>
    </div>
    <div class="${questionSectionItemClassName}-title">
      ${item.question}
    </div>
    <div class="${questionSectionItemClassName}-chevron-container">
      <img
        class="${questionSectionItemClassName}-chevron"
        src="assets/img/chevron.png"
        alt="chevron"
      />
    </div>
  </button>
  <div class="${questionSectionItemClassName}-bottom-part">
  ${item.answer}
  </div>
  `;
  questionSectionElement.appendChild(elem);

  elem.addEventListener("click", () => {
    const questionBodyClassName = `${questionSectionItemClassName}-bottom-part`;
    const questionChevronClassName = `${questionSectionItemClassName}-chevron`;

    const questionBody = elem.querySelector(`.${questionBodyClassName}`);
    const questionChevron = elem.querySelector(`.${questionChevronClassName}`);

    console.log("questionChevron", questionChevron);

    questionBody.classList.toggle(`${questionBodyClassName}_show`);
    questionChevron.classList.toggle(`${questionChevronClassName}_rotate`);
  });
});
