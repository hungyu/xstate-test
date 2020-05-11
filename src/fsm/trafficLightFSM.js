const fsm = {
  id: 'traffic-light',
  initial: 'green',
  states: {
    green: {
      after: {
        2000: 'yellow'
      }
    },
    yellow: {
      after: {
        2000: 'red'
      }
    },
    red: {
      after: {
        2000: 'green'
      }
    }
  }
}

export default fsm;