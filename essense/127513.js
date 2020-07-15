/*
{
   "timestamp":"2020-07-15-12:54:19.793",
   "prio":6,
   "src":250,
   "dst":255,
   "pgn":127513,
   "description":"Battery Configuration Status",
   "fields":{
      x "Instance":16,
      x "Battery Type":"Gel",
      x "Supports Equalization":0, NOT PRESENT IN SK
      x "Nominal Voltage":"12", NOT PRESENT IN SK
      x "Capacity":0,
      x "Temperature Coefficient":19, NOT PRESENT IN SK
      x "Peukert Exponent":0.002, NOT PRESENT IN SK
      x "Charge Efficiency Factor":0, NOT PRESENT IN SK
   }
}

https://github.com/SignalK/specification/issues/578
*/

const { chooseField } = require('../utils.js')

function instance (n2k) {
  return chooseField(n2k, 'Battery Instance', 'Instance')
}

module.exports = [
  {
    node: (n2k) => `electrical.batteries.${instance(n2k)}.chemistry`,
    value: (n2k) => n2k.fields['Battery Type']
  },
  {
    node: (n2k) => `electrical.batteries.${instance(n2k)}.capacity.nominal`,
    value: (n2k) => n2k.fields['Capacity']
  },
  {
    node: (n2k) => `electrical.batteries.${instance(n2k)}.voltage.nominal`,
    value: (n2k) => n2k.fields['Nominal Voltage']
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
