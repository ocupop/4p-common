const Transport = require('winston-transport')

export default class SentryTransport extends Transport {
  /**
   * Class constructor.
   * Takes either @sentry/node or @sentry/browser
   *
   * @param {Sentry} Sentry
   * @param {Object} opts
   */
  constructor(Sentry, opts) {
    super(opts)
    this.sentry = Sentry
    this.sentry.init(this.withDefaults((opts && opts.sentry) || {}))

    this.name = 'SentryTransport'
    this.levels = {
      error: 0,
      warn: 1,
      info: 2,
      debug: 7,
    }

    this.methods = {
      error: this.sentry.Severity.Error,
      warn: this.sentry.Severity.Warning,
      info: this.sentry.Severity.Info,
      debug: this.sentry.Severity.Debug,
    }

    this.level = opts.level && this.levels.hasOwnProperty(opts.level)
      ? opts.level : 'info'
  }

  /**
   * Sets config object with default values
   *
   * @param {object} options
   */
  // eslint-disable-next-line class-methods-use-this
  withDefaults(options) {
    return {
      dsn: (options && options.dsn) || process.env.SENTRY_DSN || '',
      serverName: (options && options.serverName) || 'winston-transport-sentry-node',
      environment: (options && options.environment) || process.env.SENTRY_ENVIRONMENT || process.env.NODE_ENV || 'production',
      debug: (options && options.debug) || !!process.env.SENTRY_DEBUG || false,
      sampleRate: (options && options.sampleRate) || 1.0,
      maxBreadcrumbs: (options && options.maxBreadcrumbs) || 100,
      ...options,
    }
  }

  // eslint-disable-next-line class-methods-use-this
  setScope(scopes) {
    this.sentry.configureScope((scope) => {
      const { user } = scopes
      // set the user scope
      if (user) {
        scope.setUser(user)
      }
    })
  }

  log(info, callback = () => {}) {
    setImmediate(() => {
      this.emit('logged', info)
    })

    const {
      message, level, tags, ...meta
    } = info

    const sentryLevel = this.methods[level]

    // configure scope
    this.sentry.configureScope((scope) => {
      if (tags) {
        scope.setTags(tags)
      }

      scope.setExtras(meta)
    })

    // Capturing Messages
    this.sentry.captureMessage(message, sentryLevel)
    return callback()
  }
}
