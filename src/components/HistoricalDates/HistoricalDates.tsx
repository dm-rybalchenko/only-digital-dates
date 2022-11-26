import { useState } from "react";

import Dates from "./Dates";
import SliderDescriptions from "./SliderDescriptions";
import Circle from "./Circle";
import SliderCategories from "./SliderCategories";
import MainTitle from "./UI/MainTitle";
import { SLIDER_CONTENT } from "./datesContent";


export default function HistoricalDates() {
  const [category, setCategory] = useState(0);

  function nextCategorySlider() {
    category < SLIDER_CONTENT.length - 1 && setCategory(category + 1);
  }

  function prevCategorySlider() {
    category && setCategory(category - 1);
  }

  function setCategorySlider(newCategory: number) {
    setCategory(newCategory);
  }

  return (
    <>
      <div className="wrapper">
        <MainTitle />
        <Dates categories={SLIDER_CONTENT[category].dates} />
        <Circle
          current={category}
          content={SLIDER_CONTENT}
          setCurrent={setCategorySlider}
        />
        <SliderCategories
          current={category + 1}
          content={SLIDER_CONTENT}
          setCurrent={setCategorySlider}
          nextCategory={nextCategorySlider}
          prevCategory={prevCategorySlider}
        />
        <SliderDescriptions categories={SLIDER_CONTENT[category].dates} />
      </div>
    </>
  );
}
