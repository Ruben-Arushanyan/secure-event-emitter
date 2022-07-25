const { exec } = require('child_process')
const util = require('util')
const execPromise = util.promisify(exec)
const path = require('node:path')
const cwd = process.cwd() // Current Working Directory
const packageJson = require(path.resolve(cwd, 'package.json'))

const PACKED_DIR = '.packed'
const packedDir = path.resolve(cwd, PACKED_DIR)
const packedFiles = packageJson.files || []

const pack = async () => {
    await execPromise(`
        npm run build --if-present;
        rm -rf ${packedDir};
        mkdir -p ${packedDir};
        cp -a ${packedFiles.join(' ')} ${PACKED_DIR};
  `)
}

pack()