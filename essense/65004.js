module.exports = [
  {
    node: 'electrical.ac.phase.a.lineLineVoltage',
    value: function (n2k) {
      return n2k.fields['Line-Line AC RMS Voltage']
    }
  },
  {
    node: 'electrical.ac.phase.a.lineNeutralVoltage',
    value: function (n2k) {
      return n2k.fields['Line-Neutral AC RMS Voltage']
    }
  },
  {
    node: 'electrical.ac.phase.a.current',
    value: function (n2k) {
      return n2k.fields['AC RMS Current']
    }
  },
  {
    node: 'electrical.ac.phase.a.frequency',
    value: function (n2k) {
      return n2k.fields['AC Frequency']
    }
  }
]
