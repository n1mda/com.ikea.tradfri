'use strict';

const { ZigBeeLightDevice } = require('homey-zigbeedriver');

class RgbBulb70439158 extends ZigBeeLightDevice {

  get energyMap() {
    return {
      'TRADFRI bulb E27 CWS 806lm': {
        approximation: {
          usageOff: 0.5,
          usageOn: 8.6,
        },
      },
    };
  }

}

module.exports = RgbBulb70439158;
