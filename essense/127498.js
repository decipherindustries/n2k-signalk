/*
https://github.com/SignalK/specification/issues/585
*/

const { skEngineId } = require('../utils.js')

module.exports = [
  {
    node: (n2k) => `propulsion.${skEngineId(n2k)}.ratedRevolutions`,
    value: (n2k) => {
      const val = n2k.fields['Rated Engine Speed'] / 60.0
      return isNaN(val) ? null : val
    }
  },

  {
    node: (n2k) => `propulsion.${skEngineId(n2k)}.vehicleIdentificationNumber`,
    value: (n2k) => n2k.fields['VIN']
  },

  {
    node: (n2k) => `propulsion.${skEngineId(n2k)}.softwareId`,
    value: (n2k) => n2k.fields['Software ID']
  }
]
