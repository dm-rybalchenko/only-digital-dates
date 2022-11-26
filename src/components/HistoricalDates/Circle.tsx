import { useEffect, useState } from "react";


export default function Circle({ current, content, setCurrent }: ICircleProp) {
  let stepForRotate = 360 / content.length;
  let currentStep = 30 - stepForRotate;

  let initialState = content.map((item) => {
    currentStep += stepForRotate;

    return {
      id: Math.random().toString(36).substring(2, 6),
      position: -currentStep,
      containerPosition: currentStep,
    };
  });

  const [positionButtons, setPositionButtons] = useState(initialState);
  const [positionCircle, setPositionCircle] = useState(0);

  function changeCategory(e: React.MouseEvent<Element> | number) {
    let buttonPosition = 0;

    if (typeof e === "number") {
      buttonPosition = positionButtons[e].position + 30;

    } else {
      let newCat = parseInt((e.target as HTMLElement).innerHTML);
      newCat && setCurrent(newCat - 1);
	  
      buttonPosition = positionButtons[newCat - 1].position + 30;
    }

    let moveToStep = positionCircle + buttonPosition;

    if (buttonPosition < -180) {
      let reverse = positionCircle + (360 + buttonPosition);
      setPositionCircle(reverse);

    } else if (buttonPosition > 180) {
      let reverse = positionCircle - (360 - buttonPosition);
      setPositionCircle(reverse);

    } else {
      setPositionCircle(moveToStep);
    }

    let newPositionBtns = positionButtons.map((item) => {

      return {
        id: item.id,
        containerPosition: item.containerPosition,
        position: item.position - buttonPosition,
      };
    });

    setPositionButtons(newPositionBtns);
  }

  useEffect(() => {
    changeCategory(current);
  }, [current]);

  return (
    <>
      <div className="circle__category">{content[current].category}</div>
      <div style={{ rotate: positionCircle + "deg" }} className="circle">
        {content.map((item, index) => {

          return (
            <div
              style={{
                rotate: positionButtons[index].containerPosition + "deg",
              }}
              key={index}
              className="circle__item-container"
            >
              <div
                style={{ rotate: positionButtons[index].position + "deg" }}
                onClick={changeCategory}
                className={
                  current === index ? "circle__item active" : "circle__item"
                }
              >
                {index + 1}
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
}
