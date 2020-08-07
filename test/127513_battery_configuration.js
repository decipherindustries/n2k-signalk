describe('127513 Battery Configuration Status', () => {
  it('Converts OK', (done) => {
    const PGN = {
      'timestamp': '2020-07-15-12:54:19.793',
      'prio': 6,
      'src': 250,
      'dst': 255,
      'pgn': 127513,
      'description': 'Battery Configuration Status',
      'fields': {
        'Instance': 16,
        'Battery Type': 'Gel',
        'Supports Equalization': 0,
        'Nominal Voltage': 12,
        'Capacity': 0,
        'Chemistry': 'Li',
        'Temperature Coefficient': 19,
        'Peukert Exponent': 0.002,
        'Charge Efficiency Factor': 0
      }
    }

    const tree = require('./testMapper').toNested(PGN)

    tree.should.have.nested.property('electrical.batteries.16.chemistry.value', 'Li')
    tree.should.have.nested.property('electrical.batteries.16.type.value', 'Gel')
    tree.should.have.nested.property('electrical.batteries.16.capacity.nominal.value', 0)
    tree.should.have.nested.property('electrical.batteries.16.voltage.nominal.value', 12)
    tree.should.have.nested.property('electrical.batteries.16.temperature.coefficient.value', 19)
    tree.should.have.nested.property('electrical.batteries.16.peukertExponent.value', 0.002)
    tree.should.have.nested.property('electrical.batteries.16.chargeEfficiency.value', 0)
    tree.should.have.nested.property('electrical.batteries.16.supportsEqualisation.value', false)

    done()
  })
})
