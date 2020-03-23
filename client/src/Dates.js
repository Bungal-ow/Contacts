class DateCard {
  constructor() {
    this.daysOfTheWeek = ['MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT', 'SUN'];
    this.months = ['JAN', 'FEB', 'MAR', 'APR', 'MAY', 'JUN', 'JUL', 'AUG', 'SEP', 'OCT', 'NOV', 'DEC'];
    this.numDays = [31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
  }

  getDays() {
    const arrayWithDaysOfTheWeek = [];
    for (let i = 0; i < this.months.length; i += 1) {
      for (let j = 1; j <= this.numDays[i]; j += 1) {
        const day = {
          date: j,
          month: this.months[i],
        };
        arrayWithDaysOfTheWeek.push(day);
      }
    }

    let indexOfTheWeek = 2;

    for (let i = 0; i < arrayWithDaysOfTheWeek.length; i += 1) {
      arrayWithDaysOfTheWeek[i].day = this.daysOfTheWeek[indexOfTheWeek];
      if (indexOfTheWeek === this.daysOfTheWeek.length - 1) {
        indexOfTheWeek = 0;
      } else {
        indexOfTheWeek += 1;
      }
    }
    return arrayWithDaysOfTheWeek;
  }

  getMonthAbbr(index) {
    return this.months[index];
  }
}

module.exports = DateCard;
