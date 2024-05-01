function solution(word) {
  let vowels = ["A", "E", "I", "O", "U"];
  let dictionary = [];

  const dfs = (cur, len) => {
    if (len > 5) return;

    dictionary.push(cur);

    for (let i = 0; i < vowels.length; i++) {
      dfs(cur + vowels[i], len + 1);
    }
  };

  dfs("", 0);

  return dictionary.indexOf(word);
}