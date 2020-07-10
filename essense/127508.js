const parent = require('../pgns/127508')
const { chooseField } = require('../utils.js')

function instance(n2k) {
  return chooseField(n2k, 'Battery Instance', 'Instance')
}

function makeMapper(fieldName, group) {
  return {
    node: (n2k) => `electrical.batteries.${instance(n2k)}.${fieldName.replace(/\s/g, '')}`,
    value: (n2k) => n2k.fields[fieldName],
  }
}

const overrides = [
  // Flavor & Instance
  makeMapper('Instance', 'All')
  makeMapper('Flavor', 'All')
  // DC Source Status 3
  makeMapper('Remaining Relative Capacity', 'DC Source Status 3'),
  makeMapper('Remaining Discharge Capacity', 'DC Source Status 3'),
  // DC Source Status 4
  makeMapper('Desired Charge State', 'DC Source Status 4'),
  makeMapper('Desired Charge Voltage', 'DC Source Status 4'),
  makeMapper('Desired Charge Current', 'DC Source Status 4'),
  makeMapper('Battery Type', 'DC Source Status 4'),
  // DC Source Status 6
  makeMapper('High Voltage Alarm Status', 'DC Source Status 6'),
  makeMapper('High Voltage Disconnect Status', 'DC Source Status 6'),
  makeMapper('Low Voltage Alarm Status', 'DC Source Status 6'),
  makeMapper('Low Voltage Disconnect Status', 'DC Source Status 6'),
  // DC Source Status 11
  makeMapper('Power On/Off Status', 'DC Source Status 11'),
  makeMapper('Charge On/Off Status', 'DC Source Status 11'),
  makeMapper('Charge Detected', 'DC Source Status 11'),
  makeMapper('Reserve Status', 'DC Source Status 11'),
  makeMapper('Full Capacity', 'DC Source Status 11'),
  makeMapper('DC Power', 'DC Source Status 11'),
  // Lithionics Proprietary
  makeMapper('Max Recorded Temperature', 'Lithionics Proprietary'),
  makeMapper('Min Recorded Temperature', 'Lithionics Proprietary'),
  makeMapper('High Voltage State', 'Lithionics Proprietary'),
  makeMapper('Charge Source Detected', 'Lithionics Proprietary'),
  makeMapper('NeverDie Reserve State', 'Lithionics Proprietary'),
  makeMapper('OptoLoop Is Open', 'Lithionics Proprietary'),
  makeMapper('Reserve Voltage Range', 'Lithionics Proprietary'),
  makeMapper('Low Voltage State', 'Lithionics Proprietary'),
  makeMapper('Battery Protection State', 'Lithionics Proprietary'),
  makeMapper('Power Off State', 'Lithionics Proprietary'),
  makeMapper('Aux Contacts State', 'Lithionics Proprietary'),
  makeMapper('Aux Contacts Error', 'Lithionics Proprietary'),
  makeMapper('Pre Charge Error', 'Lithionics Proprietary'),
  makeMapper('Contactor Flutter', 'Lithionics Proprietary'),
  makeMapper('AC Power Present', 'Lithionics Proprietary'),
  makeMapper('TSM Charger Present', 'Lithionics Proprietary'),
  makeMapper('TSM Charger Error', 'Lithionics Proprietary'),
  makeMapper('Temp Intervention Sensor Error', 'Lithionics Proprietary'),
  makeMapper('AGSR State', 'Lithionics Proprietary'),
  makeMapper('Hot Temperature State', 'Lithionics Proprietary'),
  makeMapper('Cold Temperature State', 'Lithionics Proprietary'),
  makeMapper('AUXIN1 State', 'Lithionics Proprietary'),
  makeMapper('Charge Disable State', 'Lithionics Proprietary'),
  makeMapper('Over Current State', 'Lithionics Proprietary'),
]

module.exports = [...parent, ...overrides]
