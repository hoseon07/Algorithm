function solution(cacheSize, cities) {
  let result = 0;
  let cache = [];

  
  if (cacheSize === 0) return cities.length * 5;

  
  cities = cities.map((city) => city.toLowerCase());

  
  cities.forEach((city) => {
    const cacheIndex = cache.indexOf(city);
    if (cacheIndex === -1) {
      
      if (cache.length === cacheSize) cache.shift();
      result += 5;
    } else {
      
      cache.splice(cacheIndex, 1);
      result++; 
    }

    cache.push(city);
  });

  return result;
}