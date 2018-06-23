let startButton = document.getElementById('startBtn')
let stopButton = document.getElementById('stopBtn')

const timer = new TimerModel()

let observers = [new Display('display1', timer), 
                 new Display('display2', timer), 
                 new Display('display3', timer),
                 new Display('display4', timer)]

observers.forEach(observer => observer.subscribe())

startButton.addEventListener('click', () => timer.start())
stopButton.addEventListener('click', () => timer.stop())

timer.notify()
