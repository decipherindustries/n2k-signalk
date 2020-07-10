module.exports = [
  {
    node: 'electrical.ac.utility.lineLineVoltage',
    value: function (n2k) {
      return n2k.fields['Line-Line AC RMS Voltage']
    }
  },
  {
    node: 'electrical.ac.utility.lineNeutralVoltage',
    value: function (n2k) {
      return n2k.fields['Line-Neutral AC RMS Voltage']
    }
  },
  {
    node: 'electrical.ac.utility.current',
    value: function (n2k) {
      return n2k.fields['AC RMS Current']
    }
  },
  {
    node: 'electrical.ac.utility.frequency',
    value: function (n2k) {
      return n2k.fields['AC Frequency']
    }
  }
]
