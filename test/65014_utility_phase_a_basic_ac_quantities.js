var chai = require('chai')
chai.Should()
chai.use(require('chai-things'))
chai.use(require('@signalk/signalk-schema').chaiModule)

describe('65014 Utility Phase A Basic AC Quantities', function () {
  it('complete PGN converts', function () {
    /*
    {
      "timestamp":"2018-03-13-17:16:12.000Z",
      "prio":3,
      "src":192,
      "dst":255,
      "pgn":65014,
      "description":"Utility Phase A Basic AC Quantities",
      "fields":{
        "Line-Line AC RMS Voltage":231,
        "Line-Neutral AC RMS Voltage":231,
        "AC Frequency":50.000,
        "AC RMS Current":2
      }
    }
    */

    const tree = require('./testMapper').toNested(
      JSON.parse(
        '{"timestamp":"2018-03-13-17:16:12.000Z","prio":3,"src":192,"dst":255,"pgn":65014,"description":"Utility Phase A Basic AC Quantities","fields":{"Line-Line AC RMS Voltage":231,"Line-Neutral AC RMS Voltage":231,"AC Frequency":50.000,"AC RMS Current":2}}'
      )
    )

    tree.should.have.nested.property('electrical.ac.utility.phase.a.lineNeutralVoltage')
    tree.should.have.nested.property('electrical.ac.utility.phase.a.lineNeutralVoltage.value', 231)
    tree.should.have.nested.property('electrical.ac.utility.phase.a.lineLineVoltage')
    tree.should.have.nested.property('electrical.ac.utility.phase.a.lineLineVoltage.value', 231)
    tree.should.have.nested.property('electrical.ac.utility.phase.a.frequency')
    tree.should.have.nested.property('electrical.ac.utility.phase.a.frequency.value', 50.000)
    tree.should.have.nested.property('electrical.ac.utility.phase.a.current')
    tree.should.have.nested.property('electrical.ac.utility.phase.a.current.value', 2)
    // tree.should.be.validSignalKVesselIgnoringIdentity
  })
})
