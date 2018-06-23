class TimerModel {

  constructor () {
    this.counter = 0
    this.observers = []
    this.timeoutHandler = null
  }

  start () {
    this.counter++
    this.notify()
    this.timeoutHandler = setTimeout(function () {
      this.start()
    }.bind(this), 1000)
  }

  stop () {
    clearTimeout(this.timeoutHandler)
  }

  getCounter () {
    return this.counter
  }

  addObserver (observer) {
    this.observers.push(observer)
  }

  removeObserver (observer) {
    this.observers = this.observers.filter(obs => obs !== observer)
  }

  notify () {
    this.observers.forEach(observer => observer.update())
  }

}
