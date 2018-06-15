'use strict'

class CreateDeploymentBucketPlugin {
  constructor(serverless, options) {
    this.serverless = serverless
    this.options = options
    this.provider = this.serverless.getProvider('aws')

    this.hooks = {
    }
  }

}

module.exports = CreateDeploymentBucketPlugin
