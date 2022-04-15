const cards = [
    {
      "title": "Work",
      "background": "url('./images/icon-work.svg') hsl(15, 100%, 70%)",
      "timeframes": {
        "daily": {
          "current": 5,
          "previous": 7
        },
        "weekly": {
          "current": 32,
          "previous": 36
        },
        "monthly": {
          "current": 103,
          "previous": 128
        }
      }
    },
    {
      "title": "Play",
      "background": "url('./images/icon-play.svg') hsl(195, 74%, 62%)",
      "timeframes": {
        "daily": {
          "current": 1,
          "previous": 2
        },
        "weekly": {
          "current": 10,
          "previous": 8
        },
        "monthly": {
          "current": 23,
          "previous": 29
        }
      }
    },
    {
      "title": "Study",
      "background": "url('./images/icon-study.svg') hsl(348, 100%, 68%)",
      "timeframes": {
        "daily": {
          "current": 0,
          "previous": 1
        },
        "weekly": {
          "current": 4,
          "previous": 7
        },
        "monthly": {
          "current": 13,
          "previous": 19
        }
      }
    },
    {
      "title": "Exercise",
      "background": "url('./images/icon-exercise.svg') hsl(145, 58%, 55%)",
      "timeframes": {
        "daily": {
          "current": 1,
          "previous": 1
        },
        "weekly": {
          "current": 4,
          "previous": 5
        },
        "monthly": {
          "current": 11,
          "previous": 18
        }
      }
    },
    {
      "title": "Social",
      "background": "url('./images/icon-social.svg') hsl(264, 64%, 52%)",
      "timeframes": {
        "daily": {
          "current": 1,
          "previous": 3
        },
        "weekly": {
          "current": 5,
          "previous": 10
        },
        "monthly": {
          "current": 21,
          "previous": 23
        }
      }
    },
    {
      "title": "Self Care",
      "background": "url('./images/icon-self-care.svg') hsl(43, 84%, 65%)",
      "timeframes": {
        "daily": {
          "current": 0,
          "previous": 1
        },
        "weekly": {
          "current": 2,
          "previous": 2
        },
        "monthly": {
          "current": 7,
          "previous": 11
        }
      }
    }
  ]

function displayDogs(time="weekly") {
    //console.log(time);
    document.querySelector('.tracker').innerHTML = ``
    cards.map((card) => {
        //console.log(card);
        document.querySelector('.tracker').innerHTML += `
        <style>
        #${card.title.replace(' ', '')}::before {
                background: ${card.background}
            }
        </style>
        <section class="tracker-work bg" id="${card.title.replace(' ', '')}">
        <h6 class="tracker-work_title title">
          ${card.title}
          <img src="images/icon-ellipsis.svg" alt="icon-ellipsis">
        </h6>
        <h1 class="tracker-work_time_now now">
          <!-- 5hrs -->
          <!-- daily -->

          ${
            time === 'weekly' ?
            card.timeframes.weekly.current: ''
            }${
                time === 'daily' ?
                card.timeframes.daily.current : ''
                }${
                time === 'monthly' ?
                card.timeframes.monthly.current : ''
                }hrs

          <!-- weekly -->

          <!-- 103hrs -->
          <!-- monthly -->
        </h1>
        <p class="tracker-work_time_previous previous">
          <!-- Previous - 7hrs -->
          <!-- daily -->


          <!-- weekly -->

           Last Week - ${
            time === 'weekly' ?
            card.timeframes.weekly.previous: ''
            }${
                time === 'daily' ?
                card.timeframes.daily.previous : ''
                }${
                time === 'monthly' ?
                card.timeframes.monthly.previous : ''
                }hrs
          <!-- monthly -->
        </p>
      </section>`
    })
}

displayDogs();

function clickItem(self) {
    var time = self.innerHTML;
    let activeEl = document.querySelector('.active');
    activeEl.classList.remove('active');
    self.classList.add('active');
    if (time === "Daily") {
      return displayDogs("daily");
    }

    if (time === "Weekly") {
      return displayDogs("weekly");
    }

    if (time === "Monthly") {
        return displayDogs("monthly");
    }
}