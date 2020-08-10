/*
https://github.com/SignalK/specification/issues/578
*/

const { chooseField } = require('../utils.js')

function instance (n2k) {
  return chooseField(n2k, 'Battery Instance', 'Instance')
}

module.exports = [
  {
    node: (n2k) => `electrical.batteries.${instance(n2k)}.type`,
    value: (n2k) => n2k.fields['Battery Type']
  },
  {
    node: (n2k) => `electrical.batteries.${instance(n2k)}.chemistry`,
    value: (n2k) => n2k.fields['Chemistry']
  },
  {
    node: (n2k) => `electrical.batteries.${instance(n2k)}.capacity.nominal`,
    value: (n2k) => n2k.fields['Capacity']
  },
  {
    node: (n2k) => `electrical.batteries.${instance(n2k)}.voltage.nominal`,
    value: (n2k) => {
      let value = n2k.fields['Nominal Voltage']

      if (typeof value === 'string' && value.trim().toUpperCase().endsWith('V')) {
        value = value.slice(0, -1)
        value = parseInt(value, 10)
      }

      if (typeof value !== 'number' || isNaN(value)) {
        return null
      }

      return value
    }
  },
  {
    node: (n2k) => `electrical.batteries.${instance(n2k)}.temperature.coefficient`,
    value: (n2k) => n2k.fields['Temperature Coefficient']
  },
  {
    node: (n2k) => `electrical.batteries.${instance(n2k)}.peukertExponent`,
    value: (n2k) => n2k.fields['Peukert Exponent']
  },
  {
    node: (n2k) => `electrical.batteries.${instance(n2k)}.chargeEfficiency`,
    value: (n2k) => n2k.fields['Charge Efficiency Factor']
  },
  {
    node: (n2k) => `electrical.batteries.${instance(n2k)}.supportsEqualisation`,
    value: (n2k) => n2k.fields['Supports Equalization'] === 1
  }
]
