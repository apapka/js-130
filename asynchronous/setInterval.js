function startCounting() {
  let counter = 1;
  function count() {
    console.log(counter);
    counter += 1;
  }
  setInterval(count, 1000);

}
function stopCounting(counterId) {
  clearInterval(counterId);
}
let counterId = startCounting();
stopCounting(counterId);