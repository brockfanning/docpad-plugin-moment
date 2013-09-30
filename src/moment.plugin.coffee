moment = require('moment')

# Export Plugin
module.exports = (BasePlugin) ->
  # Define Plugin
  class MomentPlugin extends BasePlugin
    # Plugin name
    name: 'moment'
    renderBefore: (opts) ->
      for model in opts.collection.models
        for format in @config.formats
          if model.attributes[format.raw]
            model.attributes[format.formatted] = moment().format(format.format)