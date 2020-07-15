var chai = require('chai')
chai.Should()
chai.use(require('chai-things'))
chai.use(require('@signalk/signalk-schema').chaiModule)

const runTest = (PGN, done) => {
  const tree = require('./testMapper').toNested(PGN)

  for (const name of Object.keys(PGN.fields)) {
    if (name === 'Instance') {
      continue
    }

    const value = PGN.fields[name]
    let prefix = 'ExtendedStatus.'
    let fieldName = name.replace(/\s/g, '')

    if (name.toLowerCase() === 'flavor') {
      prefix = ''
      fieldName = name.toLowerCase()
    }

    tree.should.have.nested.property(`electrical.batteries.1.${prefix}${fieldName}.value`, value)
  }

  done()
}

describe('127508 EsSense.AI fields', () => {
  it('DC Source Status 3', (done) => {
    const PGN = {
      timestamp: '2016-08-22T16:02:55.272Z',
      prio: 6,
      src: 17,
      dst: 255,
      pgn: 127508,
      description: 'Battery Status',
      fields: {
        Instance: 1,
        'Remaining Discharge Capacity': 100,
        'Remaining Relative Capacity': 240
      }
    }

    runTest(PGN, done)
  })

  it('DC Source Status 4', (done) => {
    const PGN = {
      timestamp: '2016-08-22T16:02:55.272Z',
      prio: 6,
      src: 17,
      dst: 255,
      pgn: 127508,
      description: 'Battery Status',
      fields: {
        Instance: 1,
        'Desired Charge State': 1,
        'Desired Charge Voltage': 27,
        'Desired Charge Current': 100,
        'Battery Type': 3
      }
    }

    runTest(PGN, done)
  })

  it('DC Source Status 6', (done) => {
    const PGN = {
      timestamp: '2016-08-22T16:02:55.272Z',
      prio: 6,
      src: 17,
      dst: 255,
      pgn: 127508,
      description: 'Battery Status',
      fields: {
        Instance: 1,
        'High Voltage Alarm Status': 1,
        'High Voltage Disconnect Status': 0,
        'Low Voltage Alarm Status': 1,
        'Low Voltage Disconnect Status': 0
      }
    }

    runTest(PGN, done)
  })

  it('DC Source Status 11', (done) => {
    const PGN = {
      timestamp: '2016-08-22T16:02:55.272Z',
      prio: 6,
      src: 17,
      dst: 255,
      pgn: 127508,
      description: 'Battery Status',
      fields: {
        Instance: 1,
        'Power On/Off Status': 0,
        'Charge On/Off Status': 0,
        'Charge Detected': 0,
        'Reserve Status': 0,
        'Full Capacity': 5000,
        'DC Power': 1500
      }
    }

    runTest(PGN, done)
  })

  it('Lithionics Proprietary', (done) => {
    const PGN = {
      timestamp: '2016-08-22T16:02:55.272Z',
      prio: 6,
      src: 17,
      dst: 255,
      pgn: 127508,
      description: 'Battery Status',
      fields: {
        Instance: 1,
        'Max Recorded Temperature': -30,
        'Min Recorded Temperature': 30,
        'High Voltage State': 1,
        'Charge Source Detected': 0,
        'NeverDie Reserve State': 1,
        'OptoLoop Is Open': 0,
        'Reserve Voltage Range': 1,
        'Low Voltage State': 0,
        'Battery Protection State': 1,
        'Power Off State': 0,
        'Aux Contacts State': 1,
        'Aux Contacts Error': 0,
        'Pre Charge Error': 1,
        'Contactor Flutter': 0,
        'AC Power Present': 1,
        'TSM Charger Present': 0,
        'TSM Charger Error': 1,
        'Temp Intervention Sensor Error': 0,
        'AGSR State': 1,
        'Hot Temperature State': 0,
        'Cold Temperature State': 1,
        'AUXIN1 State': 0,
        'Charge Disable State': 1,
        'Over Current State': 0
      }
    }

    runTest(PGN, done)
  })
})
