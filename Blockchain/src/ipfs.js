// ipfs.js
const IPFS = require('ipfs-http-client')

const ipfs = new IPFS('ipfs.infura.io', '5001', { protocol: 'https' });

export default ipfs;
