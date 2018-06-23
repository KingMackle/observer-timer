class Display {

  constructor (id, observable) {
    this.elementId = id
    this.element = null
    this.observable = observable
    this.subButton = document.querySelector(`#${this.elementId} + .subscribe`)
    this.unsubButton = document.querySelector(`#${this.elementId} + .subscribe + .unsubscribe`)
    this.init()
  }

  init () {
    this.subButton.addEventListener('click', function () { 
      this.subscribe()
    }.bind(this))

    this.unsubButton.addEventListener('click', function () { 
      this.unsubscribe()
    }.bind(this))

  }

  subscribe () {
    this.observable.addObserver(this)
  }

  unsubscribe () {
    this.observable.removeObserver(this)
  }

  update () {
    if (this.element === null) {
      this.element = document.getElementById(this.elementId)
    }
    this.element.innerText = this.observable.getCounter()
  }

}