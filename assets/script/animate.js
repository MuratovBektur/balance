const leftPartClassNames = [
  "first-section__left-part",
  "second-section__left-part",
  "third-section__left-part",
  "fourth-section__left-part",
];
const rightPartClassNames = [
  "first-section__right-part",
  "second-section__right-part",
  "third-section__right-part",
  "fourth-section__right-part",
];

const upPartClassNames = ["question-section"];

const classNames = [
  ...leftPartClassNames,
  ...rightPartClassNames,
  ...upPartClassNames,
];

/**
 * What to do when an item enters the screen
 * If it is in the screen, isIntersecting will be true.
 * Add a class when it is.
 */
const intersectionCallback = (entries) => {
  for (const entry of entries) {
    // Loop over all elements that either enter or exit the view.
    if (entry.isIntersecting) {
      // This is true when the element is in view.

      // если анимация элемента должен появлятся слева
      if (
        leftPartClassNames.some((className) =>
          entry.target.classList.contains(className)
        )
      ) {
        entry.target.classList.add("animate__animated");
        entry.target.classList.add("animate__fadeInLeftBig");
      }

      // если анимация элемента должен появлятся справа
      else if (
        rightPartClassNames.some((className) =>
          entry.target.classList.contains(className)
        )
      ) {
        entry.target.classList.add("animate__animated");
        entry.target.classList.add("animate__fadeInRightBig");
      }

      // если анимация элемента должен появлятся сверху
      else if (
        upPartClassNames.some((className) =>
          entry.target.classList.contains(className)
        )
      ) {
        entry.target.classList.add("animate__animated");
        entry.target.classList.add("animate__fadeInDownBig");
      }
    }
  }
};

/**
 * Create a observer and use the instersectionCallback as
 * the instructions for what to do when an element enters
 * or leaves the view
 */
const observer = new IntersectionObserver(intersectionCallback);

/**
 * Get all .item elements and loop over them.
 * Observe each individual item.
 */

for (let className of classNames) {
  const items = document.querySelectorAll(`.${className}`);
  for (const item of items) {
    observer.observe(item);
  }
}
