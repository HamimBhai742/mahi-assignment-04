function calculateTax(income, expenses) {
  if (income > 0 && expenses > 0) {
    const incomeAndExpenses = income - expenses;
    let tax = incomeAndExpenses * 0.2;
    return tax;
  }
  return "Invalid Input";
}
// console.log(calculateTax(-3400, 1753));

function sendNotification(email) {
  const fiEmail = email.indexOf("@");
  if (fiEmail > 0) {
    const name = email.split("@")[0];
    const domain = email.split("@")[1];
    const message = `${name} sent you an email from ${domain}`;
    return message;
  }
  return "Invalid Email";
}
// console.log(sendNotification("mdhsamsdjkdsjhsfd.com"));

function checkDigitsInName(name) {
  if (typeof name === "string") {
    const regx = /\d/;
    return regx.test(name);
  }
  return "Invalid Input";
}
// console.log(checkDigitsInName("!@#"))

function calculateFinalScore(obj) {
  if (
    typeof obj.name === "string" &&
    typeof obj.testScore === "number" &&
    obj.testScore <= 50 &&
    typeof obj.schoolGrade === "number" &&
    obj.schoolGrade <= 30 &&
    typeof obj.isFFamily === "boolean"
  ) {
    if (obj.isFFamily === true) {
      const f = 20;
      let totalpoint = obj.testScore + obj.schoolGrade + f;
      if (totalpoint > 80) {
        return true;
      }
      return false;
    } else {
      let totalpoint = obj.testScore + obj.schoolGrade;
      if (totalpoint > 80) {
        return true;
      }
      return false;
    }
  }
  return "Invalid Input";
}

// console.log(
//     calculateFinalScore({
//         name: "Hamim",
//         isFFamily: true,
//         testScore: 20,
//         schoolGrade:30
//   })
// );

function waitingTime(waitingTimes, serialNumber) {
  if (Array.isArray(waitingTimes) && typeof serialNumber === "number") {
    const totalTime = waitingTimes.reduce((sum, value) => sum + value, 0);
    const avarageTime = Math.round(totalTime / waitingTimes.length);
    let seNum = serialNumber - waitingTimes.length - 1;
    return Math.round(seNum * avarageTime);
  }
  return "Invalid Input";
}

console.log(waitingTime([6], 4));
