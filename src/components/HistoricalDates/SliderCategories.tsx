export default function SliderCategories({
  content,
  current,
  nextCategory,
  prevCategory,
  setCurrent,
}: ISliderCategotiesProp) {
  function makeDots() {
    let arrayDots = [];

    for (let i = 0; i < content.length; i++) {
      arrayDots.push(
        <span
          key={i}
          onClick={() => setCurrent(i)}
          className={
            current - 1 === i ? "slider__dots-item active" : "slider__dots-item"
          }
        ></span>
      );
    }

    return arrayDots;
  }

  return (
    <>
      <div className="headings">
        <div className="headings__breadcrumbs">
          {current}/{makeDots().length}
        </div>
        <div className="headings__buttons-group">
          <button onClick={prevCategory} className="headings__button left"></button>
          <button onClick={nextCategory} className="headings__button right"></button>
        </div>
      </div>
      <div className="slider__dots">{makeDots().map((item) => item)}</div>
    </>
  );
}
