var chai = require('chai')
chai.Should()
chai.use(require('chai-things'))
chai.use(require('@signalk/signalk-schema').chaiModule)

describe('65017 Utility Average Basic AC Quantities', function () {
  it('complete PGN converts', function () {
    /*
    {
      "timestamp":"2015-01-15-16:25:15.657Z",
      "prio":"3",
      "src":"192",
      "dst":"255",
      "pgn":"65017",
      "description":"Utility Average Basic AC Quantities",
      "fields":{
        "Line-Line AC RMS Voltage":117,
        "Line-Neutral AC RMS Voltage":117,
        "AC Frequency":50.000,
        "AC RMS Current":12
      }
    }
    */

    const tree = require('./testMapper').toNested(
      JSON.parse(
        '{"timestamp":"2015-01-15-16:25:15.657Z","prio":"3","src":"192","dst":"255","pgn":"65017","description":"Utility Average Basic AC Quantities","fields":{"Line-Line AC RMS Voltage":"117","Line-Neutral AC RMS Voltage":"117","AC RMS Current":"12","AC Frequency":50.000}}'
      )
    )

    tree.should.have.nested.property('electrical.ac.utility.phase.single.lineNeutralVoltage')
    tree.should.have.nested.property('electrical.ac.utility.phase.single.lineNeutralVoltage.value', 117)
    tree.should.have.nested.property('electrical.ac.utility.phase.single.lineLineVoltage')
    tree.should.have.nested.property('electrical.ac.utility.phase.single.lineLineVoltage.value', 117)
    tree.should.have.nested.property('electrical.ac.utility.phase.single.frequency')
    tree.should.have.nested.property('electrical.ac.utility.phase.single.frequency.value', 50.000)
    tree.should.have.nested.property('electrical.ac.utility.phase.single.current')
    tree.should.have.nested.property('electrical.ac.utility.phase.single.current.value', 12)
    tree.should.be.validSignalKVesselIgnoringIdentity
  })
})
