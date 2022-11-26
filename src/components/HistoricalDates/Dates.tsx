import { useEffect, useState } from "react";


export default function Dates({ categories }: { categories: ICategory[] }) {
  const [leftDate, setLeftDate] = useState(categories[0].title);
  const [rightDate, setRightDate] = useState(categories[categories.length - 1].title);

  useEffect(() => {
    let newLeftDate = categories[0].title;
    let previousLeft = leftDate;

    if (previousLeft < newLeftDate) {
      setTimeout(() => setLeftDate(++previousLeft), 50);
    }
    if (previousLeft > newLeftDate) {
      setTimeout(() => setLeftDate(--previousLeft), 50);
    }

    let newRightDate = categories[categories.length - 1].title;
    let previousRight = rightDate;

    if (previousRight < newRightDate) {
      setTimeout(() => setRightDate(++previousRight), 40);
    }
    if (previousRight > newRightDate) {
      setTimeout(() => setRightDate(--previousRight), 40);
    }
  });

  return (
    <div className="dates">
      <div className="dates__left">{leftDate}</div>
      <div className="dates__right">{rightDate}</div>
    </div>
  );
}
