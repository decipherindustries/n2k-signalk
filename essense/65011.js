module.exports = [
  {
    node: 'electrical.ac.utility.phase.b.lineLineVoltage',
    value: function (n2k) {
      return n2k.fields['Line-Line AC RMS Voltage']
    }
  },
  {
    node: 'electrical.ac.utility.phase.b.lineNeutralVoltage',
    value: function (n2k) {
      return n2k.fields['Line-Neutral AC RMS Voltage']
    }
  },
  {
    node: 'electrical.ac.utility.phase.b.current',
    value: function (n2k) {
      return n2k.fields['AC RMS Current']
    }
  },
  {
    node: 'electrical.ac.utility.phase.b.frequency',
    value: function (n2k) {
      return n2k.fields['AC Frequency']
    }
  }
]
