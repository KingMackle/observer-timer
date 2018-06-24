let startButton = document.getElementById('startBtn')
let stopButton = document.getElementById('stopBtn')

let wrapper = document.querySelector('.wrapper')

const timer = new TimerModel()

let numberOfDisplays = 10000
let observers = []

// for (let i = 1; i <= numberOfDisplays; i++) {
//   let displayTemplate = '<div class="display-wrapper">' +
//                         `<p class="display" id="display${i}"></p>` +
//                         '<input class="subscribe" type="button" value="Sub"/>' +
//                         '<input class="unsubscribe" type="button" value="Unsub"/>' +
//                         '</div>'
//   wrapper.innerHTML = wrapper.innerHTML.concat(displayTemplate)
// }

for (let i = 1; i <= numberOfDisplays; i++) {
  observers.push(new Display(`display${i}`, timer))
}

observers.forEach(observer => observer.subscribe())

startButton.addEventListener('click', () => timer.start())
stopButton.addEventListener('click', () => timer.stop())

timer.notify()
