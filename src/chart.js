import data from '../data.json';

const btnReload = /**@type {HTMLButtonElement} */ (
  document.querySelector('button[class="btn-refresh"]')
);
const failure = /**@type {HTMLDivElement} */ (
  document.querySelector('div[class~="failure"]')
);
const success = /**@type {HTMLDivElement} */ (
  document.querySelector('div[class~="success"]')
);
const balance = /**@type {HTMLParagraphElement}*/ (
  document.querySelector('.expense-chart-component__balance')
);
const amountPerDay = /**@type {NodeListOf<HTMLTableElement>} */ (
  document.querySelectorAll('tr td')
);
const daysOfWeek = /**@type {NodeListOf<HTMLTableElement>}*/ (
  document.querySelectorAll('tr span[aria-hidden="true"]')
);
const tableRows = /**@type {NodeListOf<HTMLTableElement>} */ (
  document.querySelectorAll('tbody tr')
);
const delay = /**@type{number} */ 1000;
const sunday = 0;
const monday = 1;
const tuesday = 2;
const wednesday = 3;
const thursday = 4;
const friday = 5;
const saturday = 6;

/**
 * A function that set the background-color of the table rows for the days of the week.
 * @param {number} index - The index of the table rows
 * @returns {void}
 */
function setBackgroundColor(index) {

}

/**
 * This function will increase the height of each bar chart
 */
function animateBarChart() {
  tableRows.forEach(function (tableRow, index) {
    tableRow.classList.add('day');
    amountPerDay[index].classList.remove('hide');
  });
}
/**
 * This function will render the days and amounts information on the UI
 */
function renderDaysAndAmounts() {
  try {
    if (!Array.isArray(data)) {
      throw new Error();
    }
    const dataValues = data;

    dataValues.forEach(function (dataValue, index) {
      console.log(dataValue, index);
      amountPerDay[index].textContent = `$${dataValue.amount}`;
      daysOfWeek[index].textContent = dataValue.day;
    });
    failure?.classList.add('hide');
    success?.classList.remove('hide');
    balance?.classList.remove('failure');
    setTimeout(animateBarChart, delay);

    // We need to know what the current date us nd compare with the days of the week from the chart, then we apply a different color for the corresponding individual bar chart.
    const currentDate = new Date();
    const currentDay = currentDate.getDay();

    // Using a switch case we want to evaluate the expression above and match the value of that expression to a series of case clauses.

    switch(currentDay) {
      case sunday: {
        
        break;
      }

      case monday: {
        break;
      }

      case tuesday: {
        break;
      }

      case wednesday: {
        break;
      }

      case thursday: {
        break;
      }

      case friday: {
        setBackgroundColor(1);
        break;
      }

      case saturday: {
        break;
      }
    }


  } catch (error) {

  }
}

renderDaysAndAmounts();