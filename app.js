const timer = document.getElementById("timer")
const date = document.getElementById("date")

setInterval(update, 1000)

update()

function update() {
  timer.textContent = renderTimer();
  date.textContent = renderDate();
}

function renderTimer() {
  const now = new Date();
  return now.toLocaleTimeString();
}

function renderDate() {
  const now = new Date();
  return now.toDateString().replaceAll("/", ".")
}