var chai = require('chai')
chai.Should()
chai.use(require('chai-things'))
chai.use(require('@signalk/signalk-schema').chaiModule)

describe('127498 Engine Configuration Status', () => {
  it('converts OK', (done) => {
    const PGN = {
      timestamp: '2016-08-22T16:02:55.272Z',
      prio: 6,
      src: 160,
      dst: 255,
      pgn: 127498,
      description: 'Engine Configuration Status',
      fields: {
        'Instance': 'Single Engine or Dual Engine Port',
        'Rated Engine Speed': 800,
        'VIN': '17 character VIN.',
        'Software ID': 'Engine Software Revision Number'
      }
    }

    const tree = require('./testMapper').toNested(PGN)

    tree.should.have.nested.property(`propulsion.port.softwareId.value`, 'Engine Software Revision Number')
    tree.should.have.nested.property(`propulsion.port.ratedRevolutions.value`, 800 / 60.0)
    tree.should.have.nested.property(`propulsion.port.vehicleIdentificationNumber.value`, '17 character VIN.')

    // console.log(tree)
    done()
  })
})
