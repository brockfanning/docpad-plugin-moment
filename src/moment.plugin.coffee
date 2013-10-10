moment = require('moment')

# Export Plugin
module.exports = (BasePlugin) ->
  # Define Plugin
  class MomentPlugin extends BasePlugin
    # Plugin name
    name: 'moment'
    renderBefore: (opts) ->
      for model in opts.collection.models
        if (@config.formats)
          for format in @config.formats
            if model.attributes[format.raw]
              model.attributes[format.formatted] = moment(model.attributes[format.raw]).format(format.format)