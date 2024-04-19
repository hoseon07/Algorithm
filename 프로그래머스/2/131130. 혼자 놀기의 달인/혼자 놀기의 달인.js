const solution = (cards) => {
  const answer = [];
  cards.forEach((v, i) => {
    let idx = i;
    let count = 0;
    while (true) {
      if (cards[idx]) {
        const temp = cards[idx];
        cards[idx] = 0;
        idx = temp - 1;
        count++;
      } else {
        answer.push(count);
        break;
      }
    }
  });
  const sortAnswer = answer.filter((v) => v != 0).sort((a, b) => b - a);

  return sortAnswer.length > 1 ? sortAnswer[0] * sortAnswer[1] : 0;
};