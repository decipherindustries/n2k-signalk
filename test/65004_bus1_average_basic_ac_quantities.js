var chai = require('chai')
chai.Should()
chai.use(require('chai-things'))
chai.use(require('@signalk/signalk-schema').chaiModule)

describe('65004 Bus #1 Average Basic AC Quantities', function () {
  it('complete PGN converts', function () {
    /*
    {
      "timestamp":"2018-03-13-17:16:12.000Z",
      "prio":3,
      "src":192,
      "dst":255,
      "pgn":65004,
      "description":"Bus #1 Average Basic AC Quantities",
      "fields":{
        "Line-Line AC RMS Voltage":231,
        "Line-Neutral AC RMS Voltage":231,
        "AC Frequency":50.000
      }
    }
    */

    const tree = require('./testMapper').toNested(
      JSON.parse(
        '{"timestamp":"2018-03-13-17:16:12.000Z","prio":3,"src":192,"dst":255,"pgn":65004,"description":"Bus #1 Average Basic AC Quantities","fields":{"Line-Line AC RMS Voltage":231,"Line-Neutral AC RMS Voltage":231,"AC Frequency":50.000}}'
      )
    )

    tree.should.have.nested.property('electrical.ac.line.phase.single.lineNeutralVoltage')
    tree.should.have.nested.property('electrical.ac.line.phase.single.lineNeutralVoltage.value', 231)
    tree.should.have.nested.property('electrical.ac.line.phase.single.lineLineVoltage')
    tree.should.have.nested.property('electrical.ac.line.phase.single.lineLineVoltage.value', 231)
    tree.should.have.nested.property('electrical.ac.line.phase.single.frequency')
    tree.should.have.nested.property('electrical.ac.line.phase.single.frequency.value', 50.000)
    // tree.should.have.nested.property('electrical.ac.line.phase.single.current')
    // tree.should.have.nested.property('electrical.ac.line.phase.single.current.value', 0)
    tree.should.be.validSignalKVesselIgnoringIdentity
  })
})
