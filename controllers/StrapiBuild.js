'use strict';

const { spawn } = require('child_process');

/**
 * StrapiBuild.js controller
 *
 * @description: A set of functions called "actions" of the `strapi-build` plugin.
 */

module.exports = {

  /**
   * Default action.
   *
   * @return {Object}
   */

  index: async (ctx) => {
    // Add your own logic here.

    // Send 200 `ok`
    ctx.send({
      message: 'ok'
    });
  },

  build: async () => new Promise((resolve, reject) => {
    const shell = spawn('npm', ['run', 'build'], {
      cwd: '../'
    });

    shell.stdout.pipe(process.stdout)
    shell.stderr.pipe(process.stdout)

    shell.on('close', () => resolve({ success: true }));
    shell.on('error', (err) => reject(err));
  }),

  moveBuilt: async () => new Promise((resolve, reject) => {
    const shell = spawn('npm', ['run', 'moveBuilt'], {
      cwd: '../'
    });

    shell.stdout.pipe(process.stdout)
    shell.stderr.pipe(process.stdout)

    shell.on('close', () => resolve({ message: 'Changes are now live.' }));
    shell.on('error', (err) => reject(err));
  })
};
