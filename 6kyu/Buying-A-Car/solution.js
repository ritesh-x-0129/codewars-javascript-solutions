function nbMonths(startPriceOld, startPriceNew, savingPerMonth, percentLossByMonth) {
  if (startPriceOld >= startPriceNew) {
    return [0, Math.round(startPriceOld - startPriceNew)];
  }

  let oldPrice = startPriceOld;
  let newPrice = startPriceNew;
  let savings = 0;
  let month = 0;
  let loss = percentLossByMonth;

  while (oldPrice + savings < newPrice) {
    month++;

    // Increase depreciation rate every 2 months
    if (month % 2 === 0) {
      loss += 0.5;
    }

    oldPrice *= (1 - loss / 100);
    newPrice *= (1 - loss / 100);

    savings += savingPerMonth;
  }

  return [month, Math.round(oldPrice + savings - newPrice)];
}