function solution(fees, records) {
  const parking = {};

  records.forEach((v) => {
    const [time, id, status] = v.split(" ");
    const [hour, minute] = time.split(":");
 
    const replaceTime = hour * 60 + +minute;

 
    if (!parking[id]) {
      parking[id] = { time: 0, id };
    }

 
    parking[id].status = status;

 
    if (status === "IN") {
      parking[id].lastInTime = replaceTime;
      return;
    }

 
    parking[id].time += replaceTime - parking[id].lastInTime;
  });

 
  return Object.values(parking)
    .sort((a, b) => a.id - b.id)
    .map((v) => {
     
      if (v.status === "IN") v.time += 1439 - v.lastInTime;
     
      if (fees[0] > v.time) return fees[1];
     
      return fees[1] + Math.ceil((v.time - fees[0]) / fees[2]) * fees[3];
    });
}