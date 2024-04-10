# Shelly BLU DoorWindow MQTT Script

Allows BLU shellies to be used with MQTT.


## Description

The script is designed to work with the following Shelly BLU devices:

- SBBT - Shelly BLU Button
- SBDW - Shelly BLU DoorWindow

It decodes the service data from these devices and publishes it on an MQTT broker. The script is configurable to match your specific needs.

## Configuration

You can configure the script by modifying the CONFIG object. You need to specify the addresses of the Shelly BLU devices you want to monitor and the corresponding MQTT topics.

```javascript
let CONFIG = {
    shelly_blu_address: {
        "38:39:8f:99:75:fb": "shellies/comble_velux1",
        "another_address": "another_topic",
        "yet_another_address": "yet_another_topic"
    },
};
```

## Usage

On your shelly PLUS, activate the Bluetooth Gateway capability.
Then go to Scripts, create a new one, save it, and activate it.
If you enabled the Websocket debug in the settings, you can see the output of the script in the debug console.

## Credits

Part of this code is from [this post](https://discourse.nodered.org/t/shelly-blu-dw-sensor-shelly-plus-plug-s-scripting-node-red/81245) on the Node-RED forum.

## License

This project is under the WTFPL license. You can do whatever you want with it.