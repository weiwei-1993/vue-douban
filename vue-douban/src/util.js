const utils = {
  setParam: function (name, value) {
    value = JSON.stringify(value)
    localStorage.setItem(name, value)
  },
  getParam: function (name) {
    return JSON.parse(localStorage.getItem(name))
  }
}

export default {utils}
