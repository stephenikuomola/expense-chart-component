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
const tableRows = /**@type {NodeListOf<HTMLTableRowElement>} */ (
  document.querySelectorAll('tbody tr')
);
const DELAY = /**@type{number} */ 1000;
const SUNDAY = 0;
const MONDAY = 1;
const TUESDAY = 2;
const WEDNESDAY = 3;
const THURSDAY = 4;
const FRIDAY = 5;
const SATURDAY = 6;
const FIRST_NODE_INDEX = SUNDAY;
const SECOND_NODE_INDEX = MONDAY;
const THIRD_NODE_INDEX = TUESDAY;
const FOURTH_NODE_INDEX = WEDNESDAY;
const FIFTH_NODE_INDEX = THURSDAY;
const SIXTH_NODE_INDEX = FRIDAY;
const SEVENTH_NODE_INDEX = SATURDAY;

/**
 * A function that set the background-color of the table rows for the days of the week.
 * @param {number} index - The index of the table rows
 * @returns {void}
 */
function setBackgroundColor(index) {
  tableRows[index].addEventListener('mouseenter', function (evtObj) {
    if (evtObj.target instanceof HTMLTableRowElement) {
      const tableRow = evtObj.target;
      createBackgroundColor(
        tableRow,
        '--cyan-hovered',
        'hsla(186, 49%, 80%, 1)'
      );
    }
  });

  tableRows[index].addEventListener('mouseleave', function (evtObj) {
    if (evtObj.target instanceof HTMLTableRowElement) {
      const tableRow = evtObj.target;
      createBackgroundColor(tableRow, '--cyan', 'hsl(186, 34%, 60%)');
    }
  });

  createBackgroundColor(tableRows[index], '--cyan', 'hsl(186, 34%, 60%)');
}

/**
 * This function creates the background color for the chart for the corresponding day
 * @param {HTMLTableRowElement} bar -- The event object
 * @param {string} cssVariable -- The CSS variable property
 * @param {string} colorCode -- The color code
 * @returns {void}
 */
function createBackgroundColor(bar, cssVariable, colorCode) {
  bar?.style.setProperty(cssVariable, colorCode);
  bar.style.backgroundColor = `var(${cssVariable})`;
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
      throw new Error('Oops! You are lost');
    }
    const dataValues = data;

    dataValues.forEach(function (dataValue, index) {
      amountPerDay[index].textContent = `$${dataValue.amount}`;
      daysOfWeek[index].textContent = dataValue.day;
    });
    failure?.classList.add('hide');
    success?.classList.remove('hide');
    balance?.classList.remove('failure');
    setTimeout(animateBarChart, DELAY);

    // We need to know what the current date us nd compare with the days of the week from the chart, then we apply a different color for the corresponding individual bar chart.
    const currentDate = new Date();
    const currentDay = currentDate.getDay();

    // Using a switch case we want to evaluate the expression above and match the value of that expression to a series of case clauses.

    switch (currentDay) {
      case SUNDAY: {
        setBackgroundColor(SEVENTH_NODE_INDEX);
        break;
      }

      case MONDAY: {
        setBackgroundColor(FIRST_NODE_INDEX);
        break;
      }

      case TUESDAY: {
        setBackgroundColor(SECOND_NODE_INDEX);
        break;
      }

      case WEDNESDAY: {
        setBackgroundColor(THIRD_NODE_INDEX);
        break;
      }

      case THURSDAY: {
        setBackgroundColor(FOURTH_NODE_INDEX);
        break;
      }

      case FRIDAY: {
        setBackgroundColor(FIFTH_NODE_INDEX);
        break;
      }

      case SATURDAY: {
        setBackgroundColor(SIXTH_NODE_INDEX);
        break;
      }

      default: {
        tableRows.forEach(function (tableRow) {
          tableRow.style.setProperty('--soft-red', 'hsl(10, 79%, 65%)');
          tableRow.style.backgroundColor = 'var(--soft-red)';
        });
      }
    }
  } catch (error) {
    const [strongText, normalText] = error.message.split('!');
    const failureMessage = /**@type {HTMLParagraphElement} */ (
      document.querySelector('.failure__message')
    );
    const strongFailureMessage = /**@type {HTMLElement} */ (
      document.querySelector('.failure__message strong')
    );
    strongFailureMessage.textContent = `${strongText}!`;
    if (!failureMessage.innerHTML.includes(normalText.trim())) {
      const normal = document.createTextNode(normalText.trim());
      failureMessage.appendChild(normal);
    }
    failure?.classList.remove('hide');
    success?.classList.add('hide');
    balance?.classList.add('failure');
    btnReload.addEventListener('click', function () {
      renderDaysAndAmounts();
    });
  }
}

renderDaysAndAmounts();
