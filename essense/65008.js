module.exports = [
  {
    node: 'electrical.ac.utility.phase.c.lineLineVoltage',
    value: function (n2k) {
      return n2k.fields['Line-Line AC RMS Voltage']
    }
  },
  {
    node: 'electrical.ac.utility.phase.c.lineNeutralVoltage',
    value: function (n2k) {
      return n2k.fields['Line-Neutral AC RMS Voltage']
    }
  },
  {
    node: 'electrical.ac.utility.phase.c.current',
    value: function (n2k) {
      return n2k.fields['AC RMS Current']
    }
  },
  {
    node: 'electrical.ac.utility.phase.c.frequency',
    value: function (n2k) {
      return n2k.fields['AC Frequency']
    }
  }
]
