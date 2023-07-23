const DayHour = (app, hour, index) => {
  const item = document.createElement('li');
  item.classList.add('forecast-list__list-item', 'slide');
  item.setAttribute('data-index', index);

  if (hour.isCurrent()) {
    item.classList.add('current');
  }

  const timeDiv = document.createElement('div');
  timeDiv.classList.add('time');
  timeDiv.textContent = hour.isCurrent() ? 'Now' : hour.getTime();

  const tempDiv = document.createElement('div');
  tempDiv.classList.add('temperature');
  const tempSpan = document.createElement('span');
  tempSpan.classList.add('temp');
  tempSpan.textContent = app.isCelsius()
    ? `${hour.getCelsiusTemperature()}°`
    : `${hour.getFahrenheitTemperature()}°`;

  const iconDiv = document.createElement('div');
  iconDiv.classList.add('icon');
  iconDiv.setAttribute('title', hour.getConditionText());
  const iconImg = document.createElement('img');
  iconImg.setAttribute('src', hour.getConditionIcon());
  iconImg.setAttribute('alt', hour.getConditionText());

  const chanceOfRainDiv = document.createElement('div');
  chanceOfRainDiv.classList.add('chance-of-rain');
  const chanceOfRainSpan = document.createElement('span');
  chanceOfRainSpan.classList.add('percentage');
  chanceOfRainSpan.textContent = `${hour.getChanceOfRain()}%`;
  chanceOfRainDiv.innerHTML = `<svg name="precip-rain-single" theme="full" viewBox="0 -2 5 10" width="7.5px" fill="#6adef8">
                <title>Rain</title>
                <path d="M4.7329.0217c-.1848-.059-.3855.0064-.4803.148L.2731 5.1191c-.0814.0922-.1501.1961-.196.3108-.2469.6009.1185 1.2697.8156 1.4943.6914.226 1.447-.0712 1.7-.6585L4.9662.4987l.0111-.0282c.073-.1807-.036-.379-.2444-.4488z"></path>
              </svg>`;

  tempDiv.appendChild(tempSpan);
  iconDiv.appendChild(iconImg);
  chanceOfRainDiv.appendChild(chanceOfRainSpan);

  item.appendChild(timeDiv);
  item.appendChild(tempDiv);
  item.appendChild(iconDiv);
  item.appendChild(chanceOfRainDiv);

  return item;
};

export default DayHour;
