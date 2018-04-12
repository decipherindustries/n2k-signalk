function getACLineId (n2k) {
  // @FIXME how do we determine a "name" or "instance" from this data? As far as I can tell,
  // none of the available PGNs provide a way to identify the AC source if there are more of
  // that source type (e.g. multiple generators, multiple utility power, etc)
  // see discussion at https://github.com/SignalK/n2k-signalk/issues/16
  return 'utility'
}

module.exports = [
  {
    source: 'Line-Neutral AC RMS Voltage',
    node: function (n2k) { return 'electrical.ac.' + getACLineId(n2k) + '.phase.b.lineNeutralVoltage' }
  },
  {
    source: 'Line-Line AC RMS Voltage',
    node: function (n2k) { return 'electrical.ac.' + getACLineId(n2k) + '.phase.b.lineLineVoltage' }
  },
  {
    source: 'AC Frequency',
    node: function (n2k) { return 'electrical.ac.' + getACLineId(n2k) + '.phase.b.frequency' }
  },
  {
    source: 'AC RMS Current',
    node: function (n2k) { return 'electrical.ac.' + getACLineId(n2k) + '.phase.b.current' }
  }
]
