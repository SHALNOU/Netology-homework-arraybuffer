import '/Users/macbookair/Desktop/Netology-homework-arraybuffer/src/css/style.css'
import './math/Personality.js'
import Mag from './math/Mag.js'
import Demon from './math/Demon.js'
import getBuffer from './arrayByffer/getBuffer.js'
import ArrayBufferConverter from './arrayByffer/arrayBuffer.js'

const mag = new Mag('virtus', 'pro');
mag.attack = 80;
mag.distance = 3;
mag.stoned = true;
console.log(mag)

const demon = new Demon('lizing', 'goo');
demon.attack = 50;
demon.distance = 2;
demon.stoned = false;
console.log(demon)

const arraybuffer = getBuffer();
const convert = new ArrayBufferConverter(arraybuffer)

console.log(JSON.parse(convert.toString()))