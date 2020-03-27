/* eslint-disable arrow-body-style */
const daysController = (days, delta) => {
  let alteredDays;

  if (!delta) {
    const today = new Date();
    const tomorrow = new Date(new Date().getTime() + 24 * 60 * 60 * 1000);
    const yesterday = new Date(new Date().getTime() - 24 * 60 * 60 * 1000);
    alteredDays = [yesterday, today, tomorrow];
  } else {
    const forward = days.map((day) => new Date(day.setDate(day.getDate() + 1)));
    const backward = days.map((day) => new Date(day.setDate(day.getDate() - 2)));
    if (delta === 1) {
      alteredDays = forward;
    }
    if (delta === -1) {
      alteredDays = backward;
    }
  }

  return alteredDays;
};

const arrayOfDays = (days) => {
  const justDate = (day) => day.toString().slice(0, 10);
  const abbrDays = days.map((day) => justDate(day));
  const abbrDaysArr = abbrDays.map((abbrDay) => abbrDay.split(' '));
  const abbrDaysObj = abbrDaysArr.map((abbrDate) => {
    return {
      day: abbrDate[0],
      month: abbrDate[1],
      date: abbrDate[2],
    };
  });
  return abbrDaysObj;
};

module.exports = {
  daysController,
  arrayOfDays,
};
