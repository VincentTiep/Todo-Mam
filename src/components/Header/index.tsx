import { useEffect, useState } from "react";
import "../../App.css";

const Header = () => {
  const [clock, setClock] = useState("");

  function startTime() {
    const today = new Date();
    let day: any = today.getDay();
    let date = today.getDate();
    let month = today.getMonth() + 1;
    let year = today.getFullYear();

    let h = today.getHours();
    let m = today.getMinutes();
    let s = today.getSeconds();

    day = checkDay(day);
    date = checkTime(date);
    month = checkTime(month);

    h = checkTime(h);
    m = checkTime(m);
    s = checkTime(s);
    return (
      h +
      ":" +
      m +
      ":" +
      s +
      " - " +
      day +
      ", " +
      date +
      "/" +
      month +
      "/" +
      year
    );
  }

  function checkDay(i: number) {
    switch (i) {
      case 0:
        return "Sunday";
      case 1:
        return "Monday";
      case 2:
        return "Tueday";
      case 3:
        return "Wednesday";
      case 4:
        return "Thursday";
      case 5:
        return "Friday";
      case 6:
        return "Saturday";
    }
  }

  // }

  function checkTime(i: any) {
    if (i < 10) {
      i = "0" + i;
    } // add zero in front of numbers < 10
    return i;
  }

  useEffect(() => {
    setTimeout(() => {
      setClock(startTime());
    }, 1000);
  }, [clock]);

  return (
    <div className="p-3 mb-2 bg-body-secondary todo-list header">
      <h2>{clock}</h2>
    </div>
  );
};

export default Header;
