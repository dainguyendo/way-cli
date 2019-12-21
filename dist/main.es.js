import t from 'events';
import e from 'child_process';
import n, { join as r } from 'path';
import i from 'fs';
import o from 'util';
import s from 'os';
import u from 'stream';
import c from 'readline';
import a from 'assert';
import l from 'tty';
import h from 'buffer';
import f from 'string_decoder';
import p from 'crypto';
import d from 'url';
import b from 'https';
import v from 'net';
import y from 'tls';
/*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */ var g = function(
  t,
  e
) {
  return (g =
    Object.setPrototypeOf ||
    ({ __proto__: [] } instanceof Array &&
      function(t, e) {
        t.__proto__ = e;
      }) ||
    function(t, e) {
      for (var n in e) e.hasOwnProperty(n) && (t[n] = e[n]);
    })(t, e);
};
function m(t, e) {
  function n() {
    this.constructor = t;
  }
  g(t, e),
    (t.prototype =
      null === e ? Object.create(e) : ((n.prototype = e.prototype), new n()));
}
var D = function() {
  return (D =
    Object.assign ||
    function(t) {
      for (var e, n = 1, r = arguments.length; n < r; n++)
        for (var i in (e = arguments[n]))
          Object.prototype.hasOwnProperty.call(e, i) && (t[i] = e[i]);
      return t;
    }).apply(this, arguments);
};
function w(t, e, n, r) {
  return new (n || (n = Promise))(function(i, o) {
    function s(t) {
      try {
        c(r.next(t));
      } catch (t) {
        o(t);
      }
    }
    function u(t) {
      try {
        c(r.throw(t));
      } catch (t) {
        o(t);
      }
    }
    function c(t) {
      t.done
        ? i(t.value)
        : new n(function(e) {
            e(t.value);
          }).then(s, u);
    }
    c((r = r.apply(t, e || [])).next());
  });
}
function _(t, e) {
  var n,
    r,
    i,
    o,
    s = {
      label: 0,
      sent: function() {
        if (1 & i[0]) throw i[1];
        return i[1];
      },
      trys: [],
      ops: []
    };
  return (
    (o = { next: u(0), throw: u(1), return: u(2) }),
    'function' == typeof Symbol &&
      (o[Symbol.iterator] = function() {
        return this;
      }),
    o
  );
  function u(o) {
    return function(u) {
      return (function(o) {
        if (n) throw new TypeError('Generator is already executing.');
        for (; s; )
          try {
            if (
              ((n = 1),
              r &&
                (i =
                  2 & o[0]
                    ? r.return
                    : o[0]
                    ? r.throw || ((i = r.return) && i.call(r), 0)
                    : r.next) &&
                !(i = i.call(r, o[1])).done)
            )
              return i;
            switch (((r = 0), i && (o = [2 & o[0], i.value]), o[0])) {
              case 0:
              case 1:
                i = o;
                break;
              case 4:
                return s.label++, { value: o[1], done: !1 };
              case 5:
                s.label++, (r = o[1]), (o = [0]);
                continue;
              case 7:
                (o = s.ops.pop()), s.trys.pop();
                continue;
              default:
                if (
                  !(i = (i = s.trys).length > 0 && i[i.length - 1]) &&
                  (6 === o[0] || 2 === o[0])
                ) {
                  s = 0;
                  continue;
                }
                if (3 === o[0] && (!i || (o[1] > i[0] && o[1] < i[3]))) {
                  s.label = o[1];
                  break;
                }
                if (6 === o[0] && s.label < i[1]) {
                  (s.label = i[1]), (i = o);
                  break;
                }
                if (i && s.label < i[2]) {
                  (s.label = i[2]), s.ops.push(o);
                  break;
                }
                i[2] && s.ops.pop(), s.trys.pop();
                continue;
            }
            o = e.call(t, s);
          } catch (t) {
            (o = [6, t]), (r = 0);
          } finally {
            n = i = 0;
          }
        if (5 & o[0]) throw o[1];
        return { value: o[0] ? o[1] : void 0, done: !0 };
      })([o, u]);
    };
  }
}
var C =
  'undefined' != typeof globalThis
    ? globalThis
    : 'undefined' != typeof window
    ? window
    : 'undefined' != typeof global
    ? global
    : 'undefined' != typeof self
    ? self
    : {};
function x() {
  throw new Error(
    'Dynamic requires are not currently supported by rollup-plugin-commonjs'
  );
}
function E(t) {
  return t && t.__esModule && Object.prototype.hasOwnProperty.call(t, 'default')
    ? t.default
    : t;
}
function F(t, e) {
  return t((e = { exports: {} }), e.exports), e.exports;
}
function S(t) {
  return (t && t.default) || t;
}
var O = F(function(r, s) {
  var u = t.EventEmitter,
    c = e.spawn,
    a = n.dirname,
    l = n.basename;
  function h(t, e) {
    (this.flags = t),
      (this.required = t.indexOf('<') >= 0),
      (this.optional = t.indexOf('[') >= 0),
      (this.mandatory = !1),
      (this.negate = -1 !== t.indexOf('-no-')),
      (t = t.split(/[ ,|]+/)).length > 1 &&
        !/^[[<]/.test(t[1]) &&
        (this.short = t.shift()),
      (this.long = t.shift()),
      (this.description = e || '');
  }
  o.inherits(p, u),
    ((s = r.exports = new p()).Command = p),
    (s.Option = h),
    (h.prototype.name = function() {
      return this.long.replace(/^--/, '');
    }),
    (h.prototype.attributeName = function() {
      return this.name()
        .replace(/^no-/, '')
        .split('-')
        .reduce(function(t, e) {
          return t + e[0].toUpperCase() + e.slice(1);
        });
    }),
    (h.prototype.is = function(t) {
      return this.short === t || this.long === t;
    });
  class f extends Error {
    constructor(t, e, n) {
      super(n),
        Error.captureStackTrace(this, this.constructor),
        (this.name = this.constructor.name),
        (this.code = e),
        (this.exitCode = t);
    }
  }
  function p(t) {
    (this.commands = []),
      (this.options = []),
      (this._execs = new Set()),
      (this._allowUnknownOption = !1),
      (this._args = []),
      (this._name = t || ''),
      (this._helpFlags = '-h, --help'),
      (this._helpDescription = 'output usage information'),
      (this._helpShortFlag = '-h'),
      (this._helpLongFlag = '--help');
  }
  function d(t, e) {
    var n = Math.max(0, e - t.length);
    return t + Array(n + 1).join(' ');
  }
  function b(t, e, n) {
    var r = new RegExp(
      '.{1,' + (e - 1) + '}([\\s​]|$)|[^\\s​]+?([\\s​]|$)',
      'g'
    );
    return (t.match(r) || [])
      .map(function(t, e) {
        return (
          '\n' === t.slice(-1) && (t = t.slice(0, t.length - 1)),
          (e > 0 && n ? Array(n + 1).join(' ') : '') + t
        );
      })
      .join('\n');
  }
  function v(t, e, n) {
    if (t.match(/[\n]\s+/)) return t;
    return e < 40 ? t : b(t, e, n);
  }
  function y(t, e) {
    e = e || [];
    for (var n = 0; n < e.length; n++)
      (e[n] !== t._helpLongFlag && e[n] !== t._helpShortFlag) ||
        (t.outputHelp(), t._exit(0, 'commander.helpDisplayed', '(outputHelp)'));
  }
  function g(t) {
    var e = t.name + (!0 === t.variadic ? '...' : '');
    return t.required ? '<' + e + '>' : '[' + e + ']';
  }
  function m(t) {
    try {
      if (i.statSync(t).isFile()) return !0;
    } catch (t) {
      return !1;
    }
  }
  function D(t) {
    return t.map(t => {
      var e = t;
      if (0 === t.indexOf('--inspect')) {
        var n,
          r,
          i = '127.0.0.1',
          o = '9229';
        null !== (r = t.match(/^(--inspect(-brk)?)$/))
          ? (n = r[1])
          : null !== (r = t.match(/^(--inspect(-brk|-port)?)=([^:]+)$/))
          ? ((n = r[1]), /^\d+$/.test(r[3]) ? (o = r[3]) : (i = r[3]))
          : null !==
              (r = t.match(/^(--inspect(-brk|-port)?)=([^:]+):(\d+)$/)) &&
            ((n = r[1]), (i = r[3]), (o = r[4])),
          n && '0' !== o && (e = `${n}=${i}:${parseInt(o) + 1}`);
      }
      return e;
    });
  }
  (s.CommanderError = f),
    (p.prototype.command = function(t, e, n) {
      var r = e,
        i = n;
      'object' == typeof r && null !== r && ((i = r), (r = null)),
        (i = i || {});
      var o = t.split(/ +/),
        s = new p(o.shift());
      return (
        r &&
          (s.description(r),
          (this.executables = !0),
          this._execs.add(s._name),
          i.isDefault && (this.defaultExecutable = s._name)),
        (s._noHelp = !!i.noHelp),
        (s._helpFlags = this._helpFlags),
        (s._helpDescription = this._helpDescription),
        (s._helpShortFlag = this._helpShortFlag),
        (s._helpLongFlag = this._helpLongFlag),
        (s._exitCallback = this._exitCallback),
        (s._executableFile = i.executableFile),
        this.commands.push(s),
        s.parseExpectedArgs(o),
        (s.parent = this),
        r ? this : s
      );
    }),
    (p.prototype.arguments = function(t) {
      return this.parseExpectedArgs(t.split(/ +/));
    }),
    (p.prototype.addImplicitHelpCommand = function() {
      this.command('help [cmd]', 'display help for [cmd]');
    }),
    (p.prototype.parseExpectedArgs = function(t) {
      if (t.length) {
        var e = this;
        return (
          t.forEach(function(t) {
            var n = { required: !1, name: '', variadic: !1 };
            switch (t[0]) {
              case '<':
                (n.required = !0), (n.name = t.slice(1, -1));
                break;
              case '[':
                n.name = t.slice(1, -1);
            }
            n.name.length > 3 &&
              '...' === n.name.slice(-3) &&
              ((n.variadic = !0), (n.name = n.name.slice(0, -3))),
              n.name && e._args.push(n);
          }),
          this
        );
      }
    }),
    (p.prototype.exitOverride = function(t) {
      return (
        (this._exitCallback =
          t ||
          function(t) {
            if ('commander.executeSubCommandAsync' !== t.code) throw t;
          }),
        this
      );
    }),
    (p.prototype._exit = function(t, e, n) {
      this._exitCallback && this._exitCallback(new f(t, e, n)), process.exit(t);
    }),
    (p.prototype.action = function(t) {
      var e = this,
        n = function(n, r) {
          (n = n || []), (r = r || []);
          var i = e.parseOptions(r);
          y(e, i.unknown),
            e._checkForMissingMandatoryOptions(),
            i.unknown.length > 0 && e.unknownOption(i.unknown[0]),
            i.args.length && (n = i.args.concat(n)),
            e._args.forEach(function(t, r) {
              t.required && null == n[r]
                ? e.missingArgument(t.name)
                : t.variadic &&
                  (r !== e._args.length - 1 && e.variadicArgNotLast(t.name),
                  (n[r] = n.splice(r)));
            });
          var o = e._args.length,
            s = n.slice(0, o);
          (s[o] = e), n.length > o && s.push(n.slice(o)), t.apply(e, s);
        },
        r = this.parent || this,
        i = r === this ? '*' : this._name;
      return (
        r.on('command:' + i, n),
        this._alias && r.on('command:' + this._alias, n),
        this
      );
    }),
    (p.prototype._optionEx = function(t, e, n, r, i) {
      var o = this,
        s = new h(e, n),
        u = s.name(),
        c = s.attributeName();
      if (((s.mandatory = !!t.mandatory), 'function' != typeof r))
        if (r instanceof RegExp) {
          var a = r;
          r = function(t, e) {
            var n = a.exec(t);
            return n ? n[0] : e;
          };
        } else (i = r), (r = null);
      if (s.negate || s.optional || s.required || 'boolean' == typeof i) {
        if (s.negate) {
          var l = o.opts();
          i = !Object.prototype.hasOwnProperty.call(l, c) || l[c];
        }
        void 0 !== i && ((o[c] = i), (s.defaultValue = i));
      }
      return (
        this.options.push(s),
        this.on('option:' + u, function(t) {
          null !== t && r && (t = r(t, void 0 === o[c] ? i : o[c])),
            'boolean' == typeof o[c] || void 0 === o[c]
              ? (o[c] = null == t ? !s.negate && (i || !0) : t)
              : null !== t && (o[c] = !s.negate && t);
        }),
        this
      );
    }),
    (p.prototype.option = function(t, e, n, r) {
      return this._optionEx({}, t, e, n, r);
    }),
    (p.prototype.requiredOption = function(t, e, n, r) {
      return this._optionEx({ mandatory: !0 }, t, e, n, r);
    }),
    (p.prototype.allowUnknownOption = function(t) {
      return (this._allowUnknownOption = 0 === arguments.length || t), this;
    }),
    (p.prototype.parse = function(t) {
      this.executables && this.addImplicitHelpCommand(),
        (this.rawArgs = t),
        (this._name = this._name || l(t[1], '.js')),
        this.executables &&
          t.length < 3 &&
          !this.defaultExecutable &&
          t.push(this._helpLongFlag);
      var e = this.normalize(t.slice(2)),
        n = this.parseOptions(e),
        r = (this.args = n.args),
        i = this.parseArgs(this.args, n.unknown);
      'help' === r[0] && 1 === r.length && this.help(),
        'help' === r[0]
          ? ((r[0] = r[1]), (r[1] = this._helpLongFlag))
          : this._checkForMissingMandatoryOptions();
      var o = i.args[0],
        s = null;
      return (
        o &&
          (s = this.commands.find(function(t) {
            return t._name === o;
          })),
        !s &&
          o &&
          (s = this.commands.find(function(t) {
            return t.alias() === o;
          })) &&
          ((o = s._name), (r[0] = o)),
        !s &&
          this.defaultExecutable &&
          ((o = this.defaultExecutable),
          r.unshift(o),
          (s = this.commands.find(function(t) {
            return t._name === o;
          }))),
        this._execs.has(o)
          ? this.executeSubCommand(
              t,
              r,
              n.unknown,
              s ? s._executableFile : void 0
            )
          : i
      );
    }),
    (p.prototype.executeSubCommand = function(t, e, r, o) {
      (e = e.concat(r)).length || this.help();
      var s,
        u = !1,
        h = t[1],
        p = l(h, n.extname(h)) + '-' + e[0];
      if (null != o) {
        p = o;
        var d = n.extname(o);
        u = '.js' === d || '.ts' === d || '.mjs' === d;
      }
      var b = i.realpathSync(h);
      s = a(b);
      var v,
        y = n.join(s, p);
      m(y + '.js')
        ? ((p = y + '.js'), (u = !0))
        : m(y + '.ts')
        ? ((p = y + '.ts'), (u = !0))
        : m(y + '.mjs')
        ? ((p = y + '.mjs'), (u = !0))
        : m(y) && (p = y),
        (e = e.slice(1)),
        'win32' !== process.platform
          ? u
            ? (e.unshift(p),
              (e = D(process.execArgv).concat(e)),
              (v = c(process.argv[0], e, { stdio: 'inherit' })))
            : (v = c(p, e, { stdio: 'inherit' }))
          : (e.unshift(p),
            (e = D(process.execArgv).concat(e)),
            (v = c(process.execPath, e, { stdio: 'inherit' })));
      ['SIGUSR1', 'SIGUSR2', 'SIGTERM', 'SIGINT', 'SIGHUP'].forEach(function(
        t
      ) {
        process.on(t, function() {
          !1 === v.killed && null === v.exitCode && v.kill(t);
        });
      });
      const g = this._exitCallback;
      g
        ? v.on('close', () => {
            g(
              new f(
                process.exitCode || 0,
                'commander.executeSubCommandAsync',
                '(close)'
              )
            );
          })
        : v.on('close', process.exit.bind(process)),
        v.on('error', function(t) {
          if (
            ('ENOENT' === t.code
              ? console.error('error: %s(1) does not exist, try --help', p)
              : 'EACCES' === t.code &&
                console.error(
                  'error: %s(1) not executable. try chmod or run with root',
                  p
                ),
            g)
          ) {
            const e = new f(1, 'commander.executeSubCommandAsync', '(error)');
            (e.nestedError = t), g(e);
          } else process.exit(1);
        }),
        (this.runningCommand = v);
    }),
    (p.prototype.normalize = function(t) {
      for (var e, n, r, i, o, s = [], u = 0, c = t.length; u < c; ++u) {
        if (((e = t[u]), u > 0 && (n = this.optionFor(t[u - 1])), '--' === e)) {
          s = s.concat(t.slice(u));
          break;
        }
        n && n.required
          ? s.push(e)
          : e.length > 2 && '-' === e[0] && '-' !== e[1]
          ? ((i = e.slice(0, 2)),
            (o = this.optionFor(i)) && (o.required || o.optional)
              ? (s.push(i), s.push(e.slice(2)))
              : e
                  .slice(1)
                  .split('')
                  .forEach(function(t) {
                    s.push('-' + t);
                  }))
          : /^--/.test(e) && ~(r = e.indexOf('='))
          ? s.push(e.slice(0, r), e.slice(r + 1))
          : s.push(e);
      }
      return s;
    }),
    (p.prototype.parseArgs = function(t, e) {
      var n;
      return (
        t.length
          ? ((n = t[0]),
            this.listeners('command:' + n).length
              ? this.emit('command:' + t.shift(), t, e)
              : this.emit('command:*', t, e))
          : (y(this, e),
            e.length > 0 && !this.defaultExecutable && this.unknownOption(e[0]),
            0 === this.commands.length &&
              0 ===
                this._args.filter(function(t) {
                  return t.required;
                }).length &&
              this.emit('command:*')),
        this
      );
    }),
    (p.prototype.optionFor = function(t) {
      for (var e = 0, n = this.options.length; e < n; ++e)
        if (this.options[e].is(t)) return this.options[e];
    }),
    (p.prototype._checkForMissingMandatoryOptions = function() {
      for (var t = this; t; t = t.parent)
        t.options.forEach(e => {
          e.mandatory &&
            void 0 === t[e.attributeName()] &&
            t.missingMandatoryOptionValue(e);
        });
    }),
    (p.prototype.parseOptions = function(t) {
      for (var e, n, r, i = [], o = t.length, s = [], u = 0; u < o; ++u)
        if (((r = t[u]), e)) i.push(r);
        else if ('--' !== r)
          if ((n = this.optionFor(r)))
            if (n.required) {
              if (null == (r = t[++u])) return this.optionMissingArgument(n);
              this.emit('option:' + n.name(), r);
            } else
              n.optional
                ? (null == (r = t[u + 1]) || ('-' === r[0] && '-' !== r)
                    ? (r = null)
                    : ++u,
                  this.emit('option:' + n.name(), r))
                : this.emit('option:' + n.name());
          else
            r.length > 1 && '-' === r[0]
              ? (s.push(r),
                u + 1 < t.length &&
                  ('-' !== t[u + 1][0] || '-' === t[u + 1]) &&
                  s.push(t[++u]))
              : i.push(r);
        else e = !0;
      return { args: i, unknown: s };
    }),
    (p.prototype.opts = function() {
      for (var t = {}, e = this.options.length, n = 0; n < e; n++) {
        var r = this.options[n].attributeName();
        t[r] = r === this._versionOptionName ? this._version : this[r];
      }
      return t;
    }),
    (p.prototype.missingArgument = function(t) {
      const e = `error: missing required argument '${t}'`;
      console.error(e), this._exit(1, 'commander.missingArgument', e);
    }),
    (p.prototype.optionMissingArgument = function(t, e) {
      let n;
      (n = e
        ? `error: option '${t.flags}' argument missing, got '${e}'`
        : `error: option '${t.flags}' argument missing`),
        console.error(n),
        this._exit(1, 'commander.optionMissingArgument', n);
    }),
    (p.prototype.missingMandatoryOptionValue = function(t) {
      const e = `error: required option '${t.flags}' not specified`;
      console.error(e),
        this._exit(1, 'commander.missingMandatoryOptionValue', e);
    }),
    (p.prototype.unknownOption = function(t) {
      if (this._allowUnknownOption) return;
      const e = `error: unknown option '${t}'`;
      console.error(e), this._exit(1, 'commander.unknownOption', e);
    }),
    (p.prototype.variadicArgNotLast = function(t) {
      const e = `error: variadic arguments must be last '${t}'`;
      console.error(e), this._exit(1, 'commander.variadicArgNotLast', e);
    }),
    (p.prototype.version = function(t, e, n) {
      if (0 === arguments.length) return this._version;
      this._version = t;
      var r = new h(
        (e = e || '-V, --version'),
        (n = n || 'output the version number')
      );
      return (
        (this._versionOptionName = r.long.substr(2) || 'version'),
        this.options.push(r),
        this.on('option:' + this._versionOptionName, function() {
          process.stdout.write(t + '\n'), this._exit(0, 'commander.version', t);
        }),
        this
      );
    }),
    (p.prototype.description = function(t, e) {
      return 0 === arguments.length
        ? this._description
        : ((this._description = t), (this._argsDescription = e), this);
    }),
    (p.prototype.alias = function(t) {
      var e = this;
      if (
        (0 !== this.commands.length &&
          (e = this.commands[this.commands.length - 1]),
        0 === arguments.length)
      )
        return e._alias;
      if (t === e._name)
        throw new Error("Command alias can't be the same as its name");
      return (e._alias = t), this;
    }),
    (p.prototype.usage = function(t) {
      var e = this._args.map(function(t) {
          return g(t);
        }),
        n =
          '[options]' +
          (this.commands.length ? ' [command]' : '') +
          (this._args.length ? ' ' + e.join(' ') : '');
      return 0 === arguments.length
        ? this._usage || n
        : ((this._usage = t), this);
    }),
    (p.prototype.name = function(t) {
      return 0 === arguments.length ? this._name : ((this._name = t), this);
    }),
    (p.prototype.prepareCommands = function() {
      return this.commands
        .filter(function(t) {
          return !t._noHelp;
        })
        .map(function(t) {
          var e = t._args
            .map(function(t) {
              return g(t);
            })
            .join(' ');
          return [
            t._name +
              (t._alias ? '|' + t._alias : '') +
              (t.options.length ? ' [options]' : '') +
              (e ? ' ' + e : ''),
            t._description
          ];
        });
    }),
    (p.prototype.largestCommandLength = function() {
      return this.prepareCommands().reduce(function(t, e) {
        return Math.max(t, e[0].length);
      }, 0);
    }),
    (p.prototype.largestOptionLength = function() {
      var t = [].slice.call(this.options);
      return (
        t.push({ flags: this._helpFlags }),
        t.reduce(function(t, e) {
          return Math.max(t, e.flags.length);
        }, 0)
      );
    }),
    (p.prototype.largestArgLength = function() {
      return this._args.reduce(function(t, e) {
        return Math.max(t, e.name.length);
      }, 0);
    }),
    (p.prototype.padWidth = function() {
      var t = this.largestOptionLength();
      return (
        this._argsDescription &&
          this._args.length &&
          this.largestArgLength() > t &&
          (t = this.largestArgLength()),
        this.commands &&
          this.commands.length &&
          this.largestCommandLength() > t &&
          (t = this.largestCommandLength()),
        t
      );
    }),
    (p.prototype.optionHelp = function() {
      var t = this.padWidth(),
        e = (process.stdout.columns || 80) - t - 4;
      return this.options
        .map(function(n) {
          const r =
            n.description +
            (n.negate || void 0 === n.defaultValue
              ? ''
              : ' (default: ' + JSON.stringify(n.defaultValue) + ')');
          return d(n.flags, t) + '  ' + v(r, e, t + 2);
        })
        .concat([
          d(this._helpFlags, t) + '  ' + v(this._helpDescription, e, t + 2)
        ])
        .join('\n');
    }),
    (p.prototype.commandHelp = function() {
      if (!this.commands.length) return '';
      var t = this.prepareCommands(),
        e = this.padWidth(),
        n = (process.stdout.columns || 80) - e - 4;
      return [
        'Commands:',
        t
          .map(function(t) {
            var r = t[1] ? '  ' + t[1] : '';
            return (r ? d(t[0], e) : t[0]) + v(r, n, e + 2);
          })
          .join('\n')
          .replace(/^/gm, '  '),
        ''
      ].join('\n');
    }),
    (p.prototype.helpInformation = function() {
      var t = [];
      if (this._description) {
        t = [this._description, ''];
        var e = this._argsDescription;
        if (e && this._args.length) {
          var n = this.padWidth(),
            r = (process.stdout.columns || 80) - n - 5;
          t.push('Arguments:'),
            t.push(''),
            this._args.forEach(function(i) {
              t.push('  ' + d(i.name, n) + '  ' + b(e[i.name], r, n + 4));
            }),
            t.push('');
        }
      }
      var i = this._name;
      this._alias && (i = i + '|' + this._alias);
      for (var o = '', s = this.parent; s; s = s.parent) o = s.name() + ' ' + o;
      var u = ['Usage: ' + o + i + ' ' + this.usage(), ''],
        c = [],
        a = this.commandHelp();
      a && (c = [a]);
      var l = ['Options:', '' + this.optionHelp().replace(/^/gm, '  '), ''];
      return u
        .concat(t)
        .concat(l)
        .concat(c)
        .join('\n');
    }),
    (p.prototype.outputHelp = function(t) {
      t ||
        (t = function(t) {
          return t;
        });
      const e = t(this.helpInformation());
      if ('string' != typeof e && !Buffer.isBuffer(e))
        throw new Error('outputHelp callback must return a string or a Buffer');
      process.stdout.write(e), this.emit(this._helpLongFlag);
    }),
    (p.prototype.helpOption = function(t, e) {
      (this._helpFlags = t || this._helpFlags),
        (this._helpDescription = e || this._helpDescription);
      var n = this._helpFlags.split(/[ ,|]+/);
      return (
        n.length > 1 && (this._helpShortFlag = n.shift()),
        (this._helpLongFlag = n.shift()),
        this
      );
    }),
    (p.prototype.help = function(t) {
      this.outputHelp(t),
        this._exit(process.exitCode || 0, 'commander.help', '(outputHelp)');
    });
});
O.Command, O.Option, O.CommanderError;
function k(t) {
  console.log(`[dotenv][DEBUG] ${t}`);
}
const A = '\n',
  j = /^\s*([\w.-]+)\s*=\s*(.*)?\s*$/,
  B = /\\n/g,
  I = /\n|\r|\r\n/;
var T = function(t) {
    let e = n.resolve(process.cwd(), '.env'),
      r = 'utf8',
      o = !1;
    t &&
      (null != t.path && (e = t.path),
      null != t.encoding && (r = t.encoding),
      null != t.debug && (o = !0));
    try {
      const t = (function(t, e) {
        const n = Boolean(e && e.debug),
          r = {};
        return (
          t
            .toString()
            .split(I)
            .forEach(function(t, e) {
              const i = t.match(j);
              if (null != i) {
                const t = i[1];
                let e = i[2] || '';
                const n = e.length - 1,
                  o = '"' === e[0] && '"' === e[n];
                ("'" === e[0] && "'" === e[n]) || o
                  ? ((e = e.substring(1, n)), o && (e = e.replace(B, A)))
                  : (e = e.trim()),
                  (r[t] = e);
              } else n && k(`did not match key and value when parsing line ${e + 1}: ${t}`);
            }),
          r
        );
      })(i.readFileSync(e, { encoding: r }), { debug: o });
      return (
        Object.keys(t).forEach(function(e) {
          Object.prototype.hasOwnProperty.call(process.env, e)
            ? o &&
              k(
                `"${e}" is already defined in \`process.env\` and will not be overwritten`
              )
            : (process.env[e] = t[e]);
        }),
        { parsed: t }
      );
    } catch (t) {
      return { error: t };
    }
  },
  M = /[|\\{}()[\]^$+*?.]/g,
  P = function(t) {
    if ('string' != typeof t) throw new TypeError('Expected a string');
    return t.replace(M, '\\$&');
  },
  N = {
    aliceblue: [240, 248, 255],
    antiquewhite: [250, 235, 215],
    aqua: [0, 255, 255],
    aquamarine: [127, 255, 212],
    azure: [240, 255, 255],
    beige: [245, 245, 220],
    bisque: [255, 228, 196],
    black: [0, 0, 0],
    blanchedalmond: [255, 235, 205],
    blue: [0, 0, 255],
    blueviolet: [138, 43, 226],
    brown: [165, 42, 42],
    burlywood: [222, 184, 135],
    cadetblue: [95, 158, 160],
    chartreuse: [127, 255, 0],
    chocolate: [210, 105, 30],
    coral: [255, 127, 80],
    cornflowerblue: [100, 149, 237],
    cornsilk: [255, 248, 220],
    crimson: [220, 20, 60],
    cyan: [0, 255, 255],
    darkblue: [0, 0, 139],
    darkcyan: [0, 139, 139],
    darkgoldenrod: [184, 134, 11],
    darkgray: [169, 169, 169],
    darkgreen: [0, 100, 0],
    darkgrey: [169, 169, 169],
    darkkhaki: [189, 183, 107],
    darkmagenta: [139, 0, 139],
    darkolivegreen: [85, 107, 47],
    darkorange: [255, 140, 0],
    darkorchid: [153, 50, 204],
    darkred: [139, 0, 0],
    darksalmon: [233, 150, 122],
    darkseagreen: [143, 188, 143],
    darkslateblue: [72, 61, 139],
    darkslategray: [47, 79, 79],
    darkslategrey: [47, 79, 79],
    darkturquoise: [0, 206, 209],
    darkviolet: [148, 0, 211],
    deeppink: [255, 20, 147],
    deepskyblue: [0, 191, 255],
    dimgray: [105, 105, 105],
    dimgrey: [105, 105, 105],
    dodgerblue: [30, 144, 255],
    firebrick: [178, 34, 34],
    floralwhite: [255, 250, 240],
    forestgreen: [34, 139, 34],
    fuchsia: [255, 0, 255],
    gainsboro: [220, 220, 220],
    ghostwhite: [248, 248, 255],
    gold: [255, 215, 0],
    goldenrod: [218, 165, 32],
    gray: [128, 128, 128],
    green: [0, 128, 0],
    greenyellow: [173, 255, 47],
    grey: [128, 128, 128],
    honeydew: [240, 255, 240],
    hotpink: [255, 105, 180],
    indianred: [205, 92, 92],
    indigo: [75, 0, 130],
    ivory: [255, 255, 240],
    khaki: [240, 230, 140],
    lavender: [230, 230, 250],
    lavenderblush: [255, 240, 245],
    lawngreen: [124, 252, 0],
    lemonchiffon: [255, 250, 205],
    lightblue: [173, 216, 230],
    lightcoral: [240, 128, 128],
    lightcyan: [224, 255, 255],
    lightgoldenrodyellow: [250, 250, 210],
    lightgray: [211, 211, 211],
    lightgreen: [144, 238, 144],
    lightgrey: [211, 211, 211],
    lightpink: [255, 182, 193],
    lightsalmon: [255, 160, 122],
    lightseagreen: [32, 178, 170],
    lightskyblue: [135, 206, 250],
    lightslategray: [119, 136, 153],
    lightslategrey: [119, 136, 153],
    lightsteelblue: [176, 196, 222],
    lightyellow: [255, 255, 224],
    lime: [0, 255, 0],
    limegreen: [50, 205, 50],
    linen: [250, 240, 230],
    magenta: [255, 0, 255],
    maroon: [128, 0, 0],
    mediumaquamarine: [102, 205, 170],
    mediumblue: [0, 0, 205],
    mediumorchid: [186, 85, 211],
    mediumpurple: [147, 112, 219],
    mediumseagreen: [60, 179, 113],
    mediumslateblue: [123, 104, 238],
    mediumspringgreen: [0, 250, 154],
    mediumturquoise: [72, 209, 204],
    mediumvioletred: [199, 21, 133],
    midnightblue: [25, 25, 112],
    mintcream: [245, 255, 250],
    mistyrose: [255, 228, 225],
    moccasin: [255, 228, 181],
    navajowhite: [255, 222, 173],
    navy: [0, 0, 128],
    oldlace: [253, 245, 230],
    olive: [128, 128, 0],
    olivedrab: [107, 142, 35],
    orange: [255, 165, 0],
    orangered: [255, 69, 0],
    orchid: [218, 112, 214],
    palegoldenrod: [238, 232, 170],
    palegreen: [152, 251, 152],
    paleturquoise: [175, 238, 238],
    palevioletred: [219, 112, 147],
    papayawhip: [255, 239, 213],
    peachpuff: [255, 218, 185],
    peru: [205, 133, 63],
    pink: [255, 192, 203],
    plum: [221, 160, 221],
    powderblue: [176, 224, 230],
    purple: [128, 0, 128],
    rebeccapurple: [102, 51, 153],
    red: [255, 0, 0],
    rosybrown: [188, 143, 143],
    royalblue: [65, 105, 225],
    saddlebrown: [139, 69, 19],
    salmon: [250, 128, 114],
    sandybrown: [244, 164, 96],
    seagreen: [46, 139, 87],
    seashell: [255, 245, 238],
    sienna: [160, 82, 45],
    silver: [192, 192, 192],
    skyblue: [135, 206, 235],
    slateblue: [106, 90, 205],
    slategray: [112, 128, 144],
    slategrey: [112, 128, 144],
    snow: [255, 250, 250],
    springgreen: [0, 255, 127],
    steelblue: [70, 130, 180],
    tan: [210, 180, 140],
    teal: [0, 128, 128],
    thistle: [216, 191, 216],
    tomato: [255, 99, 71],
    turquoise: [64, 224, 208],
    violet: [238, 130, 238],
    wheat: [245, 222, 179],
    white: [255, 255, 255],
    whitesmoke: [245, 245, 245],
    yellow: [255, 255, 0],
    yellowgreen: [154, 205, 50]
  },
  R = F(function(t) {
    var e = {};
    for (var n in N) N.hasOwnProperty(n) && (e[N[n]] = n);
    var r = (t.exports = {
      rgb: { channels: 3, labels: 'rgb' },
      hsl: { channels: 3, labels: 'hsl' },
      hsv: { channels: 3, labels: 'hsv' },
      hwb: { channels: 3, labels: 'hwb' },
      cmyk: { channels: 4, labels: 'cmyk' },
      xyz: { channels: 3, labels: 'xyz' },
      lab: { channels: 3, labels: 'lab' },
      lch: { channels: 3, labels: 'lch' },
      hex: { channels: 1, labels: ['hex'] },
      keyword: { channels: 1, labels: ['keyword'] },
      ansi16: { channels: 1, labels: ['ansi16'] },
      ansi256: { channels: 1, labels: ['ansi256'] },
      hcg: { channels: 3, labels: ['h', 'c', 'g'] },
      apple: { channels: 3, labels: ['r16', 'g16', 'b16'] },
      gray: { channels: 1, labels: ['gray'] }
    });
    for (var i in r)
      if (r.hasOwnProperty(i)) {
        if (!('channels' in r[i]))
          throw new Error('missing channels property: ' + i);
        if (!('labels' in r[i]))
          throw new Error('missing channel labels property: ' + i);
        if (r[i].labels.length !== r[i].channels)
          throw new Error('channel and label counts mismatch: ' + i);
        var o = r[i].channels,
          s = r[i].labels;
        delete r[i].channels,
          delete r[i].labels,
          Object.defineProperty(r[i], 'channels', { value: o }),
          Object.defineProperty(r[i], 'labels', { value: s });
      }
    function u(t, e) {
      return (
        Math.pow(t[0] - e[0], 2) +
        Math.pow(t[1] - e[1], 2) +
        Math.pow(t[2] - e[2], 2)
      );
    }
    (r.rgb.hsl = function(t) {
      var e,
        n,
        r = t[0] / 255,
        i = t[1] / 255,
        o = t[2] / 255,
        s = Math.min(r, i, o),
        u = Math.max(r, i, o),
        c = u - s;
      return (
        u === s
          ? (e = 0)
          : r === u
          ? (e = (i - o) / c)
          : i === u
          ? (e = 2 + (o - r) / c)
          : o === u && (e = 4 + (r - i) / c),
        (e = Math.min(60 * e, 360)) < 0 && (e += 360),
        (n = (s + u) / 2),
        [
          e,
          100 * (u === s ? 0 : n <= 0.5 ? c / (u + s) : c / (2 - u - s)),
          100 * n
        ]
      );
    }),
      (r.rgb.hsv = function(t) {
        var e,
          n,
          r,
          i,
          o,
          s = t[0] / 255,
          u = t[1] / 255,
          c = t[2] / 255,
          a = Math.max(s, u, c),
          l = a - Math.min(s, u, c),
          h = function(t) {
            return (a - t) / 6 / l + 0.5;
          };
        return (
          0 === l
            ? (i = o = 0)
            : ((o = l / a),
              (e = h(s)),
              (n = h(u)),
              (r = h(c)),
              s === a
                ? (i = r - n)
                : u === a
                ? (i = 1 / 3 + e - r)
                : c === a && (i = 2 / 3 + n - e),
              i < 0 ? (i += 1) : i > 1 && (i -= 1)),
          [360 * i, 100 * o, 100 * a]
        );
      }),
      (r.rgb.hwb = function(t) {
        var e = t[0],
          n = t[1],
          i = t[2];
        return [
          r.rgb.hsl(t)[0],
          100 * ((1 / 255) * Math.min(e, Math.min(n, i))),
          100 * (i = 1 - (1 / 255) * Math.max(e, Math.max(n, i)))
        ];
      }),
      (r.rgb.cmyk = function(t) {
        var e,
          n = t[0] / 255,
          r = t[1] / 255,
          i = t[2] / 255;
        return [
          100 * ((1 - n - (e = Math.min(1 - n, 1 - r, 1 - i))) / (1 - e) || 0),
          100 * ((1 - r - e) / (1 - e) || 0),
          100 * ((1 - i - e) / (1 - e) || 0),
          100 * e
        ];
      }),
      (r.rgb.keyword = function(t) {
        var n = e[t];
        if (n) return n;
        var r,
          i = 1 / 0;
        for (var o in N)
          if (N.hasOwnProperty(o)) {
            var s = u(t, N[o]);
            s < i && ((i = s), (r = o));
          }
        return r;
      }),
      (r.keyword.rgb = function(t) {
        return N[t];
      }),
      (r.rgb.xyz = function(t) {
        var e = t[0] / 255,
          n = t[1] / 255,
          r = t[2] / 255;
        return [
          100 *
            (0.4124 *
              (e =
                e > 0.04045 ? Math.pow((e + 0.055) / 1.055, 2.4) : e / 12.92) +
              0.3576 *
                (n =
                  n > 0.04045
                    ? Math.pow((n + 0.055) / 1.055, 2.4)
                    : n / 12.92) +
              0.1805 *
                (r =
                  r > 0.04045
                    ? Math.pow((r + 0.055) / 1.055, 2.4)
                    : r / 12.92)),
          100 * (0.2126 * e + 0.7152 * n + 0.0722 * r),
          100 * (0.0193 * e + 0.1192 * n + 0.9505 * r)
        ];
      }),
      (r.rgb.lab = function(t) {
        var e = r.rgb.xyz(t),
          n = e[0],
          i = e[1],
          o = e[2];
        return (
          (i /= 100),
          (o /= 108.883),
          (n =
            (n /= 95.047) > 0.008856
              ? Math.pow(n, 1 / 3)
              : 7.787 * n + 16 / 116),
          [
            116 *
              (i = i > 0.008856 ? Math.pow(i, 1 / 3) : 7.787 * i + 16 / 116) -
              16,
            500 * (n - i),
            200 *
              (i -
                (o = o > 0.008856 ? Math.pow(o, 1 / 3) : 7.787 * o + 16 / 116))
          ]
        );
      }),
      (r.hsl.rgb = function(t) {
        var e,
          n,
          r,
          i,
          o,
          s = t[0] / 360,
          u = t[1] / 100,
          c = t[2] / 100;
        if (0 === u) return [(o = 255 * c), o, o];
        (e = 2 * c - (n = c < 0.5 ? c * (1 + u) : c + u - c * u)),
          (i = [0, 0, 0]);
        for (var a = 0; a < 3; a++)
          (r = s + (1 / 3) * -(a - 1)) < 0 && r++,
            r > 1 && r--,
            (o =
              6 * r < 1
                ? e + 6 * (n - e) * r
                : 2 * r < 1
                ? n
                : 3 * r < 2
                ? e + (n - e) * (2 / 3 - r) * 6
                : e),
            (i[a] = 255 * o);
        return i;
      }),
      (r.hsl.hsv = function(t) {
        var e = t[0],
          n = t[1] / 100,
          r = t[2] / 100,
          i = n,
          o = Math.max(r, 0.01);
        return (
          (n *= (r *= 2) <= 1 ? r : 2 - r),
          (i *= o <= 1 ? o : 2 - o),
          [
            e,
            100 * (0 === r ? (2 * i) / (o + i) : (2 * n) / (r + n)),
            100 * ((r + n) / 2)
          ]
        );
      }),
      (r.hsv.rgb = function(t) {
        var e = t[0] / 60,
          n = t[1] / 100,
          r = t[2] / 100,
          i = Math.floor(e) % 6,
          o = e - Math.floor(e),
          s = 255 * r * (1 - n),
          u = 255 * r * (1 - n * o),
          c = 255 * r * (1 - n * (1 - o));
        switch (((r *= 255), i)) {
          case 0:
            return [r, c, s];
          case 1:
            return [u, r, s];
          case 2:
            return [s, r, c];
          case 3:
            return [s, u, r];
          case 4:
            return [c, s, r];
          case 5:
            return [r, s, u];
        }
      }),
      (r.hsv.hsl = function(t) {
        var e,
          n,
          r,
          i = t[0],
          o = t[1] / 100,
          s = t[2] / 100,
          u = Math.max(s, 0.01);
        return (
          (r = (2 - o) * s),
          (n = o * u),
          [
            i,
            100 * (n = (n /= (e = (2 - o) * u) <= 1 ? e : 2 - e) || 0),
            100 * (r /= 2)
          ]
        );
      }),
      (r.hwb.rgb = function(t) {
        var e,
          n,
          r,
          i,
          o,
          s,
          u,
          c = t[0] / 360,
          a = t[1] / 100,
          l = t[2] / 100,
          h = a + l;
        switch (
          (h > 1 && ((a /= h), (l /= h)),
          (r = 6 * c - (e = Math.floor(6 * c))),
          0 != (1 & e) && (r = 1 - r),
          (i = a + r * ((n = 1 - l) - a)),
          e)
        ) {
          default:
          case 6:
          case 0:
            (o = n), (s = i), (u = a);
            break;
          case 1:
            (o = i), (s = n), (u = a);
            break;
          case 2:
            (o = a), (s = n), (u = i);
            break;
          case 3:
            (o = a), (s = i), (u = n);
            break;
          case 4:
            (o = i), (s = a), (u = n);
            break;
          case 5:
            (o = n), (s = a), (u = i);
        }
        return [255 * o, 255 * s, 255 * u];
      }),
      (r.cmyk.rgb = function(t) {
        var e = t[0] / 100,
          n = t[1] / 100,
          r = t[2] / 100,
          i = t[3] / 100;
        return [
          255 * (1 - Math.min(1, e * (1 - i) + i)),
          255 * (1 - Math.min(1, n * (1 - i) + i)),
          255 * (1 - Math.min(1, r * (1 - i) + i))
        ];
      }),
      (r.xyz.rgb = function(t) {
        var e,
          n,
          r,
          i = t[0] / 100,
          o = t[1] / 100,
          s = t[2] / 100;
        return (
          (n = -0.9689 * i + 1.8758 * o + 0.0415 * s),
          (r = 0.0557 * i + -0.204 * o + 1.057 * s),
          (e =
            (e = 3.2406 * i + -1.5372 * o + -0.4986 * s) > 0.0031308
              ? 1.055 * Math.pow(e, 1 / 2.4) - 0.055
              : 12.92 * e),
          (n =
            n > 0.0031308 ? 1.055 * Math.pow(n, 1 / 2.4) - 0.055 : 12.92 * n),
          (r =
            r > 0.0031308 ? 1.055 * Math.pow(r, 1 / 2.4) - 0.055 : 12.92 * r),
          [
            255 * (e = Math.min(Math.max(0, e), 1)),
            255 * (n = Math.min(Math.max(0, n), 1)),
            255 * (r = Math.min(Math.max(0, r), 1))
          ]
        );
      }),
      (r.xyz.lab = function(t) {
        var e = t[0],
          n = t[1],
          r = t[2];
        return (
          (n /= 100),
          (r /= 108.883),
          (e =
            (e /= 95.047) > 0.008856
              ? Math.pow(e, 1 / 3)
              : 7.787 * e + 16 / 116),
          [
            116 *
              (n = n > 0.008856 ? Math.pow(n, 1 / 3) : 7.787 * n + 16 / 116) -
              16,
            500 * (e - n),
            200 *
              (n -
                (r = r > 0.008856 ? Math.pow(r, 1 / 3) : 7.787 * r + 16 / 116))
          ]
        );
      }),
      (r.lab.xyz = function(t) {
        var e,
          n,
          r,
          i = t[0];
        (e = t[1] / 500 + (n = (i + 16) / 116)), (r = n - t[2] / 200);
        var o = Math.pow(n, 3),
          s = Math.pow(e, 3),
          u = Math.pow(r, 3);
        return (
          (n = o > 0.008856 ? o : (n - 16 / 116) / 7.787),
          (e = s > 0.008856 ? s : (e - 16 / 116) / 7.787),
          (r = u > 0.008856 ? u : (r - 16 / 116) / 7.787),
          [(e *= 95.047), (n *= 100), (r *= 108.883)]
        );
      }),
      (r.lab.lch = function(t) {
        var e,
          n = t[0],
          r = t[1],
          i = t[2];
        return (
          (e = (360 * Math.atan2(i, r)) / 2 / Math.PI) < 0 && (e += 360),
          [n, Math.sqrt(r * r + i * i), e]
        );
      }),
      (r.lch.lab = function(t) {
        var e,
          n = t[0],
          r = t[1];
        return (
          (e = (t[2] / 360) * 2 * Math.PI),
          [n, r * Math.cos(e), r * Math.sin(e)]
        );
      }),
      (r.rgb.ansi16 = function(t) {
        var e = t[0],
          n = t[1],
          i = t[2],
          o = 1 in arguments ? arguments[1] : r.rgb.hsv(t)[2];
        if (0 === (o = Math.round(o / 50))) return 30;
        var s =
          30 +
          ((Math.round(i / 255) << 2) |
            (Math.round(n / 255) << 1) |
            Math.round(e / 255));
        return 2 === o && (s += 60), s;
      }),
      (r.hsv.ansi16 = function(t) {
        return r.rgb.ansi16(r.hsv.rgb(t), t[2]);
      }),
      (r.rgb.ansi256 = function(t) {
        var e = t[0],
          n = t[1],
          r = t[2];
        return e === n && n === r
          ? e < 8
            ? 16
            : e > 248
            ? 231
            : Math.round(((e - 8) / 247) * 24) + 232
          : 16 +
              36 * Math.round((e / 255) * 5) +
              6 * Math.round((n / 255) * 5) +
              Math.round((r / 255) * 5);
      }),
      (r.ansi16.rgb = function(t) {
        var e = t % 10;
        if (0 === e || 7 === e)
          return t > 50 && (e += 3.5), [(e = (e / 10.5) * 255), e, e];
        var n = 0.5 * (1 + ~~(t > 50));
        return [
          (1 & e) * n * 255,
          ((e >> 1) & 1) * n * 255,
          ((e >> 2) & 1) * n * 255
        ];
      }),
      (r.ansi256.rgb = function(t) {
        if (t >= 232) {
          var e = 10 * (t - 232) + 8;
          return [e, e, e];
        }
        var n;
        return (
          (t -= 16),
          [
            (Math.floor(t / 36) / 5) * 255,
            (Math.floor((n = t % 36) / 6) / 5) * 255,
            ((n % 6) / 5) * 255
          ]
        );
      }),
      (r.rgb.hex = function(t) {
        var e = (
          ((255 & Math.round(t[0])) << 16) +
          ((255 & Math.round(t[1])) << 8) +
          (255 & Math.round(t[2]))
        )
          .toString(16)
          .toUpperCase();
        return '000000'.substring(e.length) + e;
      }),
      (r.hex.rgb = function(t) {
        var e = t.toString(16).match(/[a-f0-9]{6}|[a-f0-9]{3}/i);
        if (!e) return [0, 0, 0];
        var n = e[0];
        3 === e[0].length &&
          (n = n
            .split('')
            .map(function(t) {
              return t + t;
            })
            .join(''));
        var r = parseInt(n, 16);
        return [(r >> 16) & 255, (r >> 8) & 255, 255 & r];
      }),
      (r.rgb.hcg = function(t) {
        var e,
          n = t[0] / 255,
          r = t[1] / 255,
          i = t[2] / 255,
          o = Math.max(Math.max(n, r), i),
          s = Math.min(Math.min(n, r), i),
          u = o - s;
        return (
          (e =
            u <= 0
              ? 0
              : o === n
              ? ((r - i) / u) % 6
              : o === r
              ? 2 + (i - n) / u
              : 4 + (n - r) / u + 4),
          (e /= 6),
          [360 * (e %= 1), 100 * u, 100 * (u < 1 ? s / (1 - u) : 0)]
        );
      }),
      (r.hsl.hcg = function(t) {
        var e = t[1] / 100,
          n = t[2] / 100,
          r = 1,
          i = 0;
        return (
          (r = n < 0.5 ? 2 * e * n : 2 * e * (1 - n)) < 1 &&
            (i = (n - 0.5 * r) / (1 - r)),
          [t[0], 100 * r, 100 * i]
        );
      }),
      (r.hsv.hcg = function(t) {
        var e = t[1] / 100,
          n = t[2] / 100,
          r = e * n,
          i = 0;
        return r < 1 && (i = (n - r) / (1 - r)), [t[0], 100 * r, 100 * i];
      }),
      (r.hcg.rgb = function(t) {
        var e = t[0] / 360,
          n = t[1] / 100,
          r = t[2] / 100;
        if (0 === n) return [255 * r, 255 * r, 255 * r];
        var i,
          o = [0, 0, 0],
          s = (e % 1) * 6,
          u = s % 1,
          c = 1 - u;
        switch (Math.floor(s)) {
          case 0:
            (o[0] = 1), (o[1] = u), (o[2] = 0);
            break;
          case 1:
            (o[0] = c), (o[1] = 1), (o[2] = 0);
            break;
          case 2:
            (o[0] = 0), (o[1] = 1), (o[2] = u);
            break;
          case 3:
            (o[0] = 0), (o[1] = c), (o[2] = 1);
            break;
          case 4:
            (o[0] = u), (o[1] = 0), (o[2] = 1);
            break;
          default:
            (o[0] = 1), (o[1] = 0), (o[2] = c);
        }
        return (
          (i = (1 - n) * r),
          [255 * (n * o[0] + i), 255 * (n * o[1] + i), 255 * (n * o[2] + i)]
        );
      }),
      (r.hcg.hsv = function(t) {
        var e = t[1] / 100,
          n = e + (t[2] / 100) * (1 - e),
          r = 0;
        return n > 0 && (r = e / n), [t[0], 100 * r, 100 * n];
      }),
      (r.hcg.hsl = function(t) {
        var e = t[1] / 100,
          n = (t[2] / 100) * (1 - e) + 0.5 * e,
          r = 0;
        return (
          n > 0 && n < 0.5
            ? (r = e / (2 * n))
            : n >= 0.5 && n < 1 && (r = e / (2 * (1 - n))),
          [t[0], 100 * r, 100 * n]
        );
      }),
      (r.hcg.hwb = function(t) {
        var e = t[1] / 100,
          n = e + (t[2] / 100) * (1 - e);
        return [t[0], 100 * (n - e), 100 * (1 - n)];
      }),
      (r.hwb.hcg = function(t) {
        var e = t[1] / 100,
          n = 1 - t[2] / 100,
          r = n - e,
          i = 0;
        return r < 1 && (i = (n - r) / (1 - r)), [t[0], 100 * r, 100 * i];
      }),
      (r.apple.rgb = function(t) {
        return [
          (t[0] / 65535) * 255,
          (t[1] / 65535) * 255,
          (t[2] / 65535) * 255
        ];
      }),
      (r.rgb.apple = function(t) {
        return [
          (t[0] / 255) * 65535,
          (t[1] / 255) * 65535,
          (t[2] / 255) * 65535
        ];
      }),
      (r.gray.rgb = function(t) {
        return [(t[0] / 100) * 255, (t[0] / 100) * 255, (t[0] / 100) * 255];
      }),
      (r.gray.hsl = r.gray.hsv = function(t) {
        return [0, 0, t[0]];
      }),
      (r.gray.hwb = function(t) {
        return [0, 100, t[0]];
      }),
      (r.gray.cmyk = function(t) {
        return [0, 0, 0, t[0]];
      }),
      (r.gray.lab = function(t) {
        return [t[0], 0, 0];
      }),
      (r.gray.hex = function(t) {
        var e = 255 & Math.round((t[0] / 100) * 255),
          n = ((e << 16) + (e << 8) + e).toString(16).toUpperCase();
        return '000000'.substring(n.length) + n;
      }),
      (r.rgb.gray = function(t) {
        return [((t[0] + t[1] + t[2]) / 3 / 255) * 100];
      });
  });
R.rgb,
  R.hsl,
  R.hsv,
  R.hwb,
  R.cmyk,
  R.xyz,
  R.lab,
  R.lch,
  R.hex,
  R.keyword,
  R.ansi16,
  R.ansi256,
  R.hcg,
  R.apple,
  R.gray;
function L(t) {
  var e = (function() {
      for (var t = {}, e = Object.keys(R), n = e.length, r = 0; r < n; r++)
        t[e[r]] = { distance: -1, parent: null };
      return t;
    })(),
    n = [t];
  for (e[t].distance = 0; n.length; )
    for (
      var r = n.pop(), i = Object.keys(R[r]), o = i.length, s = 0;
      s < o;
      s++
    ) {
      var u = i[s],
        c = e[u];
      -1 === c.distance &&
        ((c.distance = e[r].distance + 1), (c.parent = r), n.unshift(u));
    }
  return e;
}
function V(t, e) {
  return function(n) {
    return e(t(n));
  };
}
function U(t, e) {
  for (
    var n = [e[t].parent, t], r = R[e[t].parent][t], i = e[t].parent;
    e[i].parent;

  )
    n.unshift(e[i].parent), (r = V(R[e[i].parent][i], r)), (i = e[i].parent);
  return (r.conversion = n), r;
}
var z = {};
Object.keys(R).forEach(function(t) {
  (z[t] = {}),
    Object.defineProperty(z[t], 'channels', { value: R[t].channels }),
    Object.defineProperty(z[t], 'labels', { value: R[t].labels });
  var e = (function(t) {
    for (
      var e = L(t), n = {}, r = Object.keys(e), i = r.length, o = 0;
      o < i;
      o++
    ) {
      var s = r[o];
      null !== e[s].parent && (n[s] = U(s, e));
    }
    return n;
  })(t);
  Object.keys(e).forEach(function(n) {
    var r = e[n];
    (z[t][n] = (function(t) {
      var e = function(e) {
        if (null == e) return e;
        arguments.length > 1 && (e = Array.prototype.slice.call(arguments));
        var n = t(e);
        if ('object' == typeof n)
          for (var r = n.length, i = 0; i < r; i++) n[i] = Math.round(n[i]);
        return n;
      };
      return 'conversion' in t && (e.conversion = t.conversion), e;
    })(r)),
      (z[t][n].raw = (function(t) {
        var e = function(e) {
          return null == e
            ? e
            : (arguments.length > 1 &&
                (e = Array.prototype.slice.call(arguments)),
              t(e));
        };
        return 'conversion' in t && (e.conversion = t.conversion), e;
      })(r));
  });
});
var q = z,
  W = F(function(t) {
    const e = (t, e) =>
        function() {
          const n = t.apply(q, arguments);
          return `[${n + e}m`;
        },
      n = (t, e) =>
        function() {
          const n = t.apply(q, arguments);
          return `[${38 + e};5;${n}m`;
        },
      r = (t, e) =>
        function() {
          const n = t.apply(q, arguments);
          return `[${38 + e};2;${n[0]};${n[1]};${n[2]}m`;
        };
    Object.defineProperty(t, 'exports', {
      enumerable: !0,
      get: function() {
        const t = new Map(),
          i = {
            modifier: {
              reset: [0, 0],
              bold: [1, 22],
              dim: [2, 22],
              italic: [3, 23],
              underline: [4, 24],
              inverse: [7, 27],
              hidden: [8, 28],
              strikethrough: [9, 29]
            },
            color: {
              black: [30, 39],
              red: [31, 39],
              green: [32, 39],
              yellow: [33, 39],
              blue: [34, 39],
              magenta: [35, 39],
              cyan: [36, 39],
              white: [37, 39],
              gray: [90, 39],
              redBright: [91, 39],
              greenBright: [92, 39],
              yellowBright: [93, 39],
              blueBright: [94, 39],
              magentaBright: [95, 39],
              cyanBright: [96, 39],
              whiteBright: [97, 39]
            },
            bgColor: {
              bgBlack: [40, 49],
              bgRed: [41, 49],
              bgGreen: [42, 49],
              bgYellow: [43, 49],
              bgBlue: [44, 49],
              bgMagenta: [45, 49],
              bgCyan: [46, 49],
              bgWhite: [47, 49],
              bgBlackBright: [100, 49],
              bgRedBright: [101, 49],
              bgGreenBright: [102, 49],
              bgYellowBright: [103, 49],
              bgBlueBright: [104, 49],
              bgMagentaBright: [105, 49],
              bgCyanBright: [106, 49],
              bgWhiteBright: [107, 49]
            }
          };
        i.color.grey = i.color.gray;
        for (const e of Object.keys(i)) {
          const n = i[e];
          for (const e of Object.keys(n)) {
            const r = n[e];
            (i[e] = { open: `[${r[0]}m`, close: `[${r[1]}m` }),
              (n[e] = i[e]),
              t.set(r[0], r[1]);
          }
          Object.defineProperty(i, e, { value: n, enumerable: !1 }),
            Object.defineProperty(i, 'codes', { value: t, enumerable: !1 });
        }
        const o = t => t,
          s = (t, e, n) => [t, e, n];
        (i.color.close = '[39m'),
          (i.bgColor.close = '[49m'),
          (i.color.ansi = { ansi: e(o, 0) }),
          (i.color.ansi256 = { ansi256: n(o, 0) }),
          (i.color.ansi16m = { rgb: r(s, 0) }),
          (i.bgColor.ansi = { ansi: e(o, 10) }),
          (i.bgColor.ansi256 = { ansi256: n(o, 10) }),
          (i.bgColor.ansi16m = { rgb: r(s, 10) });
        for (let t of Object.keys(q)) {
          if ('object' != typeof q[t]) continue;
          const o = q[t];
          'ansi16' === t && (t = 'ansi'),
            'ansi16' in o &&
              ((i.color.ansi[t] = e(o.ansi16, 0)),
              (i.bgColor.ansi[t] = e(o.ansi16, 10))),
            'ansi256' in o &&
              ((i.color.ansi256[t] = n(o.ansi256, 0)),
              (i.bgColor.ansi256[t] = n(o.ansi256, 10))),
            'rgb' in o &&
              ((i.color.ansi16m[t] = r(o.rgb, 0)),
              (i.bgColor.ansi16m[t] = r(o.rgb, 10)));
        }
        return i;
      }
    });
  }),
  $ = (t, e) => {
    e = e || process.argv;
    const n = t.startsWith('-') ? '' : 1 === t.length ? '-' : '--',
      r = e.indexOf(n + t),
      i = e.indexOf('--');
    return -1 !== r && (-1 === i || r < i);
  };
const K = process.env;
let G;
function Y(t) {
  return (function(t) {
    return (
      0 !== t && { level: t, hasBasic: !0, has256: t >= 2, has16m: t >= 3 }
    );
  })(
    (function(t) {
      if (!1 === G) return 0;
      if ($('color=16m') || $('color=full') || $('color=truecolor')) return 3;
      if ($('color=256')) return 2;
      if (t && !t.isTTY && !0 !== G) return 0;
      const e = G ? 1 : 0;
      if ('win32' === process.platform) {
        const t = s.release().split('.');
        return Number(process.versions.node.split('.')[0]) >= 8 &&
          Number(t[0]) >= 10 &&
          Number(t[2]) >= 10586
          ? Number(t[2]) >= 14931
            ? 3
            : 2
          : 1;
      }
      if ('CI' in K)
        return ['TRAVIS', 'CIRCLECI', 'APPVEYOR', 'GITLAB_CI'].some(
          t => t in K
        ) || 'codeship' === K.CI_NAME
          ? 1
          : e;
      if ('TEAMCITY_VERSION' in K)
        return /^(9\.(0*[1-9]\d*)\.|\d{2,}\.)/.test(K.TEAMCITY_VERSION) ? 1 : 0;
      if ('truecolor' === K.COLORTERM) return 3;
      if ('TERM_PROGRAM' in K) {
        const t = parseInt((K.TERM_PROGRAM_VERSION || '').split('.')[0], 10);
        switch (K.TERM_PROGRAM) {
          case 'iTerm.app':
            return t >= 3 ? 3 : 2;
          case 'Apple_Terminal':
            return 2;
        }
      }
      return /-256(color)?$/i.test(K.TERM)
        ? 2
        : /^screen|^xterm|^vt100|^vt220|^rxvt|color|ansi|cygwin|linux/i.test(
            K.TERM
          )
        ? 1
        : 'COLORTERM' in K
        ? 1
        : (K.TERM, e);
    })(t)
  );
}
$('no-color') || $('no-colors') || $('color=false')
  ? (G = !1)
  : ($('color') || $('colors') || $('color=true') || $('color=always')) &&
    (G = !0),
  'FORCE_COLOR' in K &&
    (G = 0 === K.FORCE_COLOR.length || 0 !== parseInt(K.FORCE_COLOR, 10));
var H = {
  supportsColor: Y,
  stdout: Y(process.stdout),
  stderr: Y(process.stderr)
};
const Q = /(?:\\(u[a-f\d]{4}|x[a-f\d]{2}|.))|(?:\{(~)?(\w+(?:\([^)]*\))?(?:\.\w+(?:\([^)]*\))?)*)(?:[ \t]|(?=\r?\n)))|(\})|((?:.|[\r\n\f])+?)/gi,
  J = /(?:^|\.)(\w+)(?:\(([^)]*)\))?/g,
  Z = /^(['"])((?:\\.|(?!\1)[^\\])*)\1$/,
  X = /\\(u[a-f\d]{4}|x[a-f\d]{2}|.)|([^\\])/gi,
  tt = new Map([
    ['n', '\n'],
    ['r', '\r'],
    ['t', '\t'],
    ['b', '\b'],
    ['f', '\f'],
    ['v', '\v'],
    ['0', '\0'],
    ['\\', '\\'],
    ['e', ''],
    ['a', '']
  ]);
function et(t) {
  return ('u' === t[0] && 5 === t.length) || ('x' === t[0] && 3 === t.length)
    ? String.fromCharCode(parseInt(t.slice(1), 16))
    : tt.get(t) || t;
}
function nt(t, e) {
  const n = [],
    r = e.trim().split(/\s*,\s*/g);
  let i;
  for (const e of r)
    if (isNaN(e)) {
      if (!(i = e.match(Z)))
        throw new Error(
          `Invalid Chalk template style argument: ${e} (in style '${t}')`
        );
      n.push(i[2].replace(X, (t, e, n) => (e ? et(e) : n)));
    } else n.push(Number(e));
  return n;
}
function rt(t) {
  J.lastIndex = 0;
  const e = [];
  let n;
  for (; null !== (n = J.exec(t)); ) {
    const t = n[1];
    if (n[2]) {
      const r = nt(t, n[2]);
      e.push([t].concat(r));
    } else e.push([t]);
  }
  return e;
}
function it(t, e) {
  const n = {};
  for (const t of e)
    for (const e of t.styles) n[e[0]] = t.inverse ? null : e.slice(1);
  let r = t;
  for (const t of Object.keys(n))
    if (Array.isArray(n[t])) {
      if (!(t in r)) throw new Error(`Unknown Chalk style: ${t}`);
      r = n[t].length > 0 ? r[t].apply(r, n[t]) : r[t];
    }
  return r;
}
var ot = (t, e) => {
    const n = [],
      r = [];
    let i = [];
    if (
      (e.replace(Q, (e, o, s, u, c, a) => {
        if (o) i.push(et(o));
        else if (u) {
          const e = i.join('');
          (i = []),
            r.push(0 === n.length ? e : it(t, n)(e)),
            n.push({ inverse: s, styles: rt(u) });
        } else if (c) {
          if (0 === n.length)
            throw new Error('Found extraneous } in Chalk template literal');
          r.push(it(t, n)(i.join(''))), (i = []), n.pop();
        } else i.push(a);
      }),
      r.push(i.join('')),
      n.length > 0)
    ) {
      const t = `Chalk template literal is missing ${n.length} closing bracket${
        1 === n.length ? '' : 's'
      } (\`}\`)`;
      throw new Error(t);
    }
    return r.join('');
  },
  st = F(function(t) {
    const e = H.stdout,
      n =
        'win32' === process.platform &&
        !(process.env.TERM || '').toLowerCase().startsWith('xterm'),
      r = ['ansi', 'ansi', 'ansi256', 'ansi16m'],
      i = new Set(['gray']),
      o = Object.create(null);
    function s(t, n) {
      n = n || {};
      const r = e ? e.level : 0;
      (t.level = void 0 === n.level ? r : n.level),
        (t.enabled = 'enabled' in n ? n.enabled : t.level > 0);
    }
    function u(t) {
      if (!this || !(this instanceof u) || this.template) {
        const e = {};
        return (
          s(e, t),
          (e.template = function() {
            const t = [].slice.call(arguments);
            return h.apply(null, [e.template].concat(t));
          }),
          Object.setPrototypeOf(e, u.prototype),
          Object.setPrototypeOf(e.template, e),
          (e.template.constructor = u),
          e.template
        );
      }
      s(this, t);
    }
    n && (W.blue.open = '[94m');
    for (const t of Object.keys(W))
      (W[t].closeRe = new RegExp(P(W[t].close), 'g')),
        (o[t] = {
          get() {
            const e = W[t];
            return a.call(
              this,
              this._styles ? this._styles.concat(e) : [e],
              this._empty,
              t
            );
          }
        });
    (o.visible = {
      get() {
        return a.call(this, this._styles || [], !0, 'visible');
      }
    }),
      (W.color.closeRe = new RegExp(P(W.color.close), 'g'));
    for (const t of Object.keys(W.color.ansi))
      i.has(t) ||
        (o[t] = {
          get() {
            const e = this.level;
            return function() {
              const n = W.color[r[e]][t].apply(null, arguments),
                i = { open: n, close: W.color.close, closeRe: W.color.closeRe };
              return a.call(
                this,
                this._styles ? this._styles.concat(i) : [i],
                this._empty,
                t
              );
            };
          }
        });
    W.bgColor.closeRe = new RegExp(P(W.bgColor.close), 'g');
    for (const t of Object.keys(W.bgColor.ansi)) {
      if (i.has(t)) continue;
      o['bg' + t[0].toUpperCase() + t.slice(1)] = {
        get() {
          const e = this.level;
          return function() {
            const n = W.bgColor[r[e]][t].apply(null, arguments),
              i = {
                open: n,
                close: W.bgColor.close,
                closeRe: W.bgColor.closeRe
              };
            return a.call(
              this,
              this._styles ? this._styles.concat(i) : [i],
              this._empty,
              t
            );
          };
        }
      };
    }
    const c = Object.defineProperties(() => {}, o);
    function a(t, e, n) {
      const r = function() {
        return l.apply(r, arguments);
      };
      (r._styles = t), (r._empty = e);
      const i = this;
      return (
        Object.defineProperty(r, 'level', {
          enumerable: !0,
          get: () => i.level,
          set(t) {
            i.level = t;
          }
        }),
        Object.defineProperty(r, 'enabled', {
          enumerable: !0,
          get: () => i.enabled,
          set(t) {
            i.enabled = t;
          }
        }),
        (r.hasGrey = this.hasGrey || 'gray' === n || 'grey' === n),
        (r.__proto__ = c),
        r
      );
    }
    function l() {
      const t = arguments,
        e = t.length;
      let r = String(arguments[0]);
      if (0 === e) return '';
      if (e > 1) for (let n = 1; n < e; n++) r += ' ' + t[n];
      if (!this.enabled || this.level <= 0 || !r) return this._empty ? '' : r;
      const i = W.dim.open;
      n && this.hasGrey && (W.dim.open = '');
      for (const t of this._styles.slice().reverse())
        (r = t.open + r.replace(t.closeRe, t.open) + t.close),
          (r = r.replace(/\r?\n/g, `${t.close}$&${t.open}`));
      return (W.dim.open = i), r;
    }
    function h(t, e) {
      if (!Array.isArray(e)) return [].slice.call(arguments, 1).join(' ');
      const n = [].slice.call(arguments, 2),
        r = [e.raw[0]];
      for (let t = 1; t < e.length; t++)
        r.push(String(n[t - 1]).replace(/[{}\\]/g, '\\$&')),
          r.push(String(e.raw[t]));
      return ot(t, r.join(''));
    }
    Object.defineProperties(u.prototype, o),
      (t.exports = u()),
      (t.exports.supportsColor = e),
      (t.exports.default = t.exports);
  });
st.supportsColor;
const { platform: ut } = process,
  ct = {
    tick: '✔',
    cross: '✖',
    star: '★',
    square: '▇',
    squareSmall: '◻',
    squareSmallFilled: '◼',
    play: '▶',
    circle: '◯',
    circleFilled: '◉',
    circleDotted: '◌',
    circleDouble: '◎',
    circleCircle: 'ⓞ',
    circleCross: 'ⓧ',
    circlePipe: 'Ⓘ',
    circleQuestionMark: '?⃝',
    bullet: '●',
    dot: '․',
    line: '─',
    ellipsis: '…',
    pointer: '❯',
    pointerSmall: '›',
    info: 'ℹ',
    warning: '⚠',
    hamburger: '☰',
    smiley: '㋡',
    mustache: '෴',
    heart: '♥',
    nodejs: '⬢',
    arrowUp: '↑',
    arrowDown: '↓',
    arrowLeft: '←',
    arrowRight: '→',
    radioOn: '◉',
    radioOff: '◯',
    checkboxOn: '☒',
    checkboxOff: '☐',
    checkboxCircleOn: 'ⓧ',
    checkboxCircleOff: 'Ⓘ',
    questionMarkPrefix: '?⃝',
    oneHalf: '½',
    oneThird: '⅓',
    oneQuarter: '¼',
    oneFifth: '⅕',
    oneSixth: '⅙',
    oneSeventh: '⅐',
    oneEighth: '⅛',
    oneNinth: '⅑',
    oneTenth: '⅒',
    twoThirds: '⅔',
    twoFifths: '⅖',
    threeQuarters: '¾',
    threeFifths: '⅗',
    threeEighths: '⅜',
    fourFifths: '⅘',
    fiveSixths: '⅚',
    fiveEighths: '⅝',
    sevenEighths: '⅞'
  },
  at = {
    tick: '√',
    cross: '×',
    star: '*',
    square: '█',
    squareSmall: '[ ]',
    squareSmallFilled: '[█]',
    play: '►',
    circle: '( )',
    circleFilled: '(*)',
    circleDotted: '( )',
    circleDouble: '( )',
    circleCircle: '(○)',
    circleCross: '(×)',
    circlePipe: '(│)',
    circleQuestionMark: '(?)',
    bullet: '*',
    dot: '.',
    line: '─',
    ellipsis: '...',
    pointer: '>',
    pointerSmall: '»',
    info: 'i',
    warning: '‼',
    hamburger: '≡',
    smiley: '☺',
    mustache: '┌─┐',
    heart: ct.heart,
    nodejs: '♦',
    arrowUp: ct.arrowUp,
    arrowDown: ct.arrowDown,
    arrowLeft: ct.arrowLeft,
    arrowRight: ct.arrowRight,
    radioOn: '(*)',
    radioOff: '( )',
    checkboxOn: '[×]',
    checkboxOff: '[ ]',
    checkboxCircleOn: '(×)',
    checkboxCircleOff: '( )',
    questionMarkPrefix: '？',
    oneHalf: '1/2',
    oneThird: '1/3',
    oneQuarter: '1/4',
    oneFifth: '1/5',
    oneSixth: '1/6',
    oneSeventh: '1/7',
    oneEighth: '1/8',
    oneNinth: '1/9',
    oneTenth: '1/10',
    twoThirds: '2/3',
    twoFifths: '2/5',
    threeQuarters: '3/4',
    threeFifths: '3/5',
    threeEighths: '3/8',
    fourFifths: '4/5',
    fiveSixths: '5/6',
    fiveEighths: '5/8',
    sevenEighths: '7/8'
  };
'linux' === ut && (ct.questionMarkPrefix = '?');
const lt = 'win32' === ut ? at : ct;
var ht = Object.assign(t => {
  if (lt === ct) return t;
  for (const [e, n] of Object.entries(ct))
    n !== lt[e] && (t = t.replace(new RegExp(P(n), 'g'), lt[e]));
  return t;
}, lt);
class ft {
  constructor(t) {
    (this.type = 'separator'),
      (this.line = st.dim(t || new Array(15).join(ht.line)));
  }
  toString() {
    return this.line;
  }
}
ft.exclude = function(t) {
  return 'separator' !== t.type;
};
var pt = ft,
  dt = F(function(t, e) {
    function n(t, e, n) {
      (t =
        t ||
        function(t) {
          this.queue(t);
        }),
        (e =
          e ||
          function() {
            this.queue(null);
          });
      var r = !1,
        i = !1,
        o = [],
        s = !1,
        c = new u();
      function a() {
        for (; o.length && !c.paused; ) {
          var t = o.shift();
          if (null === t) return c.emit('end');
          c.emit('data', t);
        }
      }
      function l() {
        (c.writable = !1),
          e.call(c),
          !c.readable && c.autoDestroy && c.destroy();
      }
      return (
        (c.readable = c.writable = !0),
        (c.paused = !1),
        (c.autoDestroy = !(n && !1 === n.autoDestroy)),
        (c.write = function(e) {
          return t.call(this, e), !c.paused;
        }),
        (c.queue = c.push = function(t) {
          return s ? c : (null === t && (s = !0), o.push(t), a(), c);
        }),
        c.on('end', function() {
          (c.readable = !1),
            !c.writable &&
              c.autoDestroy &&
              process.nextTick(function() {
                c.destroy();
              });
        }),
        (c.end = function(t) {
          if (!r) return (r = !0), arguments.length && c.write(t), l(), c;
        }),
        (c.destroy = function() {
          if (!i)
            return (
              (i = !0),
              (r = !0),
              (o.length = 0),
              (c.writable = c.readable = !1),
              c.emit('close'),
              c
            );
        }),
        (c.pause = function() {
          if (!c.paused) return (c.paused = !0), c;
        }),
        (c.resume = function() {
          return (
            c.paused && ((c.paused = !1), c.emit('resume')),
            a(),
            c.paused || c.emit('drain'),
            c
          );
        }),
        c
      );
    }
    (t.exports = n), (n.through = n);
  }),
  bt = F(function(t, e) {
    (function() {
      var n,
        r = 200,
        i = 'Unsupported core-js use. Try https://npms.io/search?q=ponyfill.',
        o = 'Expected a function',
        s = '__lodash_hash_undefined__',
        u = 500,
        c = '__lodash_placeholder__',
        a = 1,
        l = 2,
        h = 4,
        f = 1,
        p = 2,
        d = 1,
        b = 2,
        v = 4,
        y = 8,
        g = 16,
        m = 32,
        D = 64,
        w = 128,
        _ = 256,
        x = 512,
        E = 30,
        F = '...',
        S = 800,
        O = 16,
        k = 1,
        A = 2,
        j = 1 / 0,
        B = 9007199254740991,
        I = 17976931348623157e292,
        T = NaN,
        M = 4294967295,
        P = M - 1,
        N = M >>> 1,
        R = [
          ['ary', w],
          ['bind', d],
          ['bindKey', b],
          ['curry', y],
          ['curryRight', g],
          ['flip', x],
          ['partial', m],
          ['partialRight', D],
          ['rearg', _]
        ],
        L = '[object Arguments]',
        V = '[object Array]',
        U = '[object AsyncFunction]',
        z = '[object Boolean]',
        q = '[object Date]',
        W = '[object DOMException]',
        $ = '[object Error]',
        K = '[object Function]',
        G = '[object GeneratorFunction]',
        Y = '[object Map]',
        H = '[object Number]',
        Q = '[object Null]',
        J = '[object Object]',
        Z = '[object Proxy]',
        X = '[object RegExp]',
        tt = '[object Set]',
        et = '[object String]',
        nt = '[object Symbol]',
        rt = '[object Undefined]',
        it = '[object WeakMap]',
        ot = '[object WeakSet]',
        st = '[object ArrayBuffer]',
        ut = '[object DataView]',
        ct = '[object Float32Array]',
        at = '[object Float64Array]',
        lt = '[object Int8Array]',
        ht = '[object Int16Array]',
        ft = '[object Int32Array]',
        pt = '[object Uint8Array]',
        dt = '[object Uint8ClampedArray]',
        bt = '[object Uint16Array]',
        vt = '[object Uint32Array]',
        yt = /\b__p \+= '';/g,
        gt = /\b(__p \+=) '' \+/g,
        mt = /(__e\(.*?\)|\b__t\)) \+\n'';/g,
        Dt = /&(?:amp|lt|gt|quot|#39);/g,
        wt = /[&<>"']/g,
        _t = RegExp(Dt.source),
        Ct = RegExp(wt.source),
        xt = /<%-([\s\S]+?)%>/g,
        Et = /<%([\s\S]+?)%>/g,
        Ft = /<%=([\s\S]+?)%>/g,
        St = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,
        Ot = /^\w*$/,
        kt = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,
        At = /[\\^$.*+?()[\]{}|]/g,
        jt = RegExp(At.source),
        Bt = /^\s+|\s+$/g,
        It = /^\s+/,
        Tt = /\s+$/,
        Mt = /\{(?:\n\/\* \[wrapped with .+\] \*\/)?\n?/,
        Pt = /\{\n\/\* \[wrapped with (.+)\] \*/,
        Nt = /,? & /,
        Rt = /[^\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\x7f]+/g,
        Lt = /\\(\\)?/g,
        Vt = /\$\{([^\\}]*(?:\\.[^\\}]*)*)\}/g,
        Ut = /\w*$/,
        zt = /^[-+]0x[0-9a-f]+$/i,
        qt = /^0b[01]+$/i,
        Wt = /^\[object .+?Constructor\]$/,
        $t = /^0o[0-7]+$/i,
        Kt = /^(?:0|[1-9]\d*)$/,
        Gt = /[\xc0-\xd6\xd8-\xf6\xf8-\xff\u0100-\u017f]/g,
        Yt = /($^)/,
        Ht = /['\n\r\u2028\u2029\\]/g,
        Qt = '\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff',
        Jt =
          '\\xac\\xb1\\xd7\\xf7\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf\\u2000-\\u206f \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000',
        Zt = '[\\ud800-\\udfff]',
        Xt = '[' + Jt + ']',
        te = '[' + Qt + ']',
        ee = '\\d+',
        ne = '[\\u2700-\\u27bf]',
        re = '[a-z\\xdf-\\xf6\\xf8-\\xff]',
        ie =
          '[^\\ud800-\\udfff' +
          Jt +
          ee +
          '\\u2700-\\u27bfa-z\\xdf-\\xf6\\xf8-\\xffA-Z\\xc0-\\xd6\\xd8-\\xde]',
        oe = '\\ud83c[\\udffb-\\udfff]',
        se = '[^\\ud800-\\udfff]',
        ue = '(?:\\ud83c[\\udde6-\\uddff]){2}',
        ce = '[\\ud800-\\udbff][\\udc00-\\udfff]',
        ae = '[A-Z\\xc0-\\xd6\\xd8-\\xde]',
        le = '(?:' + re + '|' + ie + ')',
        he = '(?:' + ae + '|' + ie + ')',
        fe = '(?:' + te + '|' + oe + ')' + '?',
        pe =
          '[\\ufe0e\\ufe0f]?' +
          fe +
          ('(?:\\u200d(?:' +
            [se, ue, ce].join('|') +
            ')[\\ufe0e\\ufe0f]?' +
            fe +
            ')*'),
        de = '(?:' + [ne, ue, ce].join('|') + ')' + pe,
        be = '(?:' + [se + te + '?', te, ue, ce, Zt].join('|') + ')',
        ve = RegExp("['’]", 'g'),
        ye = RegExp(te, 'g'),
        ge = RegExp(oe + '(?=' + oe + ')|' + be + pe, 'g'),
        me = RegExp(
          [
            ae +
              '?' +
              re +
              "+(?:['’](?:d|ll|m|re|s|t|ve))?(?=" +
              [Xt, ae, '$'].join('|') +
              ')',
            he +
              "+(?:['’](?:D|LL|M|RE|S|T|VE))?(?=" +
              [Xt, ae + le, '$'].join('|') +
              ')',
            ae + '?' + le + "+(?:['’](?:d|ll|m|re|s|t|ve))?",
            ae + "+(?:['’](?:D|LL|M|RE|S|T|VE))?",
            '\\d*(?:1ST|2ND|3RD|(?![123])\\dTH)(?=\\b|[a-z_])',
            '\\d*(?:1st|2nd|3rd|(?![123])\\dth)(?=\\b|[A-Z_])',
            ee,
            de
          ].join('|'),
          'g'
        ),
        De = RegExp('[\\u200d\\ud800-\\udfff' + Qt + '\\ufe0e\\ufe0f]'),
        we = /[a-z][A-Z]|[A-Z]{2}[a-z]|[0-9][a-zA-Z]|[a-zA-Z][0-9]|[^a-zA-Z0-9 ]/,
        _e = [
          'Array',
          'Buffer',
          'DataView',
          'Date',
          'Error',
          'Float32Array',
          'Float64Array',
          'Function',
          'Int8Array',
          'Int16Array',
          'Int32Array',
          'Map',
          'Math',
          'Object',
          'Promise',
          'RegExp',
          'Set',
          'String',
          'Symbol',
          'TypeError',
          'Uint8Array',
          'Uint8ClampedArray',
          'Uint16Array',
          'Uint32Array',
          'WeakMap',
          '_',
          'clearTimeout',
          'isFinite',
          'parseInt',
          'setTimeout'
        ],
        Ce = -1,
        xe = {};
      (xe[ct] = xe[at] = xe[lt] = xe[ht] = xe[ft] = xe[pt] = xe[dt] = xe[
        bt
      ] = xe[vt] = !0),
        (xe[L] = xe[V] = xe[st] = xe[z] = xe[ut] = xe[q] = xe[$] = xe[K] = xe[
          Y
        ] = xe[H] = xe[J] = xe[X] = xe[tt] = xe[et] = xe[it] = !1);
      var Ee = {};
      (Ee[L] = Ee[V] = Ee[st] = Ee[ut] = Ee[z] = Ee[q] = Ee[ct] = Ee[at] = Ee[
        lt
      ] = Ee[ht] = Ee[ft] = Ee[Y] = Ee[H] = Ee[J] = Ee[X] = Ee[tt] = Ee[
        et
      ] = Ee[nt] = Ee[pt] = Ee[dt] = Ee[bt] = Ee[vt] = !0),
        (Ee[$] = Ee[K] = Ee[it] = !1);
      var Fe = {
          '\\': '\\',
          "'": "'",
          '\n': 'n',
          '\r': 'r',
          '\u2028': 'u2028',
          '\u2029': 'u2029'
        },
        Se = parseFloat,
        Oe = parseInt,
        ke = 'object' == typeof C && C && C.Object === Object && C,
        Ae = 'object' == typeof self && self && self.Object === Object && self,
        je = ke || Ae || Function('return this')(),
        Be = e && !e.nodeType && e,
        Ie = Be && t && !t.nodeType && t,
        Te = Ie && Ie.exports === Be,
        Me = Te && ke.process,
        Pe = (function() {
          try {
            var t = Ie && Ie.require && Ie.require('util').types;
            return t || (Me && Me.binding && Me.binding('util'));
          } catch (t) {}
        })(),
        Ne = Pe && Pe.isArrayBuffer,
        Re = Pe && Pe.isDate,
        Le = Pe && Pe.isMap,
        Ve = Pe && Pe.isRegExp,
        Ue = Pe && Pe.isSet,
        ze = Pe && Pe.isTypedArray;
      function qe(t, e, n) {
        switch (n.length) {
          case 0:
            return t.call(e);
          case 1:
            return t.call(e, n[0]);
          case 2:
            return t.call(e, n[0], n[1]);
          case 3:
            return t.call(e, n[0], n[1], n[2]);
        }
        return t.apply(e, n);
      }
      function We(t, e, n, r) {
        for (var i = -1, o = null == t ? 0 : t.length; ++i < o; ) {
          var s = t[i];
          e(r, s, n(s), t);
        }
        return r;
      }
      function $e(t, e) {
        for (
          var n = -1, r = null == t ? 0 : t.length;
          ++n < r && !1 !== e(t[n], n, t);

        );
        return t;
      }
      function Ke(t, e) {
        for (var n = null == t ? 0 : t.length; n-- && !1 !== e(t[n], n, t); );
        return t;
      }
      function Ge(t, e) {
        for (var n = -1, r = null == t ? 0 : t.length; ++n < r; )
          if (!e(t[n], n, t)) return !1;
        return !0;
      }
      function Ye(t, e) {
        for (
          var n = -1, r = null == t ? 0 : t.length, i = 0, o = [];
          ++n < r;

        ) {
          var s = t[n];
          e(s, n, t) && (o[i++] = s);
        }
        return o;
      }
      function He(t, e) {
        return !!(null == t ? 0 : t.length) && sn(t, e, 0) > -1;
      }
      function Qe(t, e, n) {
        for (var r = -1, i = null == t ? 0 : t.length; ++r < i; )
          if (n(e, t[r])) return !0;
        return !1;
      }
      function Je(t, e) {
        for (var n = -1, r = null == t ? 0 : t.length, i = Array(r); ++n < r; )
          i[n] = e(t[n], n, t);
        return i;
      }
      function Ze(t, e) {
        for (var n = -1, r = e.length, i = t.length; ++n < r; ) t[i + n] = e[n];
        return t;
      }
      function Xe(t, e, n, r) {
        var i = -1,
          o = null == t ? 0 : t.length;
        for (r && o && (n = t[++i]); ++i < o; ) n = e(n, t[i], i, t);
        return n;
      }
      function tn(t, e, n, r) {
        var i = null == t ? 0 : t.length;
        for (r && i && (n = t[--i]); i--; ) n = e(n, t[i], i, t);
        return n;
      }
      function en(t, e) {
        for (var n = -1, r = null == t ? 0 : t.length; ++n < r; )
          if (e(t[n], n, t)) return !0;
        return !1;
      }
      var nn = ln('length');
      function rn(t, e, n) {
        var r;
        return (
          n(t, function(t, n, i) {
            if (e(t, n, i)) return (r = n), !1;
          }),
          r
        );
      }
      function on(t, e, n, r) {
        for (var i = t.length, o = n + (r ? 1 : -1); r ? o-- : ++o < i; )
          if (e(t[o], o, t)) return o;
        return -1;
      }
      function sn(t, e, n) {
        return e == e
          ? (function(t, e, n) {
              var r = n - 1,
                i = t.length;
              for (; ++r < i; ) if (t[r] === e) return r;
              return -1;
            })(t, e, n)
          : on(t, cn, n);
      }
      function un(t, e, n, r) {
        for (var i = n - 1, o = t.length; ++i < o; ) if (r(t[i], e)) return i;
        return -1;
      }
      function cn(t) {
        return t != t;
      }
      function an(t, e) {
        var n = null == t ? 0 : t.length;
        return n ? pn(t, e) / n : T;
      }
      function ln(t) {
        return function(e) {
          return null == e ? n : e[t];
        };
      }
      function hn(t) {
        return function(e) {
          return null == t ? n : t[e];
        };
      }
      function fn(t, e, n, r, i) {
        return (
          i(t, function(t, i, o) {
            n = r ? ((r = !1), t) : e(n, t, i, o);
          }),
          n
        );
      }
      function pn(t, e) {
        for (var r, i = -1, o = t.length; ++i < o; ) {
          var s = e(t[i]);
          s !== n && (r = r === n ? s : r + s);
        }
        return r;
      }
      function dn(t, e) {
        for (var n = -1, r = Array(t); ++n < t; ) r[n] = e(n);
        return r;
      }
      function bn(t) {
        return function(e) {
          return t(e);
        };
      }
      function vn(t, e) {
        return Je(e, function(e) {
          return t[e];
        });
      }
      function yn(t, e) {
        return t.has(e);
      }
      function gn(t, e) {
        for (var n = -1, r = t.length; ++n < r && sn(e, t[n], 0) > -1; );
        return n;
      }
      function mn(t, e) {
        for (var n = t.length; n-- && sn(e, t[n], 0) > -1; );
        return n;
      }
      var Dn = hn({
          À: 'A',
          Á: 'A',
          Â: 'A',
          Ã: 'A',
          Ä: 'A',
          Å: 'A',
          à: 'a',
          á: 'a',
          â: 'a',
          ã: 'a',
          ä: 'a',
          å: 'a',
          Ç: 'C',
          ç: 'c',
          Ð: 'D',
          ð: 'd',
          È: 'E',
          É: 'E',
          Ê: 'E',
          Ë: 'E',
          è: 'e',
          é: 'e',
          ê: 'e',
          ë: 'e',
          Ì: 'I',
          Í: 'I',
          Î: 'I',
          Ï: 'I',
          ì: 'i',
          í: 'i',
          î: 'i',
          ï: 'i',
          Ñ: 'N',
          ñ: 'n',
          Ò: 'O',
          Ó: 'O',
          Ô: 'O',
          Õ: 'O',
          Ö: 'O',
          Ø: 'O',
          ò: 'o',
          ó: 'o',
          ô: 'o',
          õ: 'o',
          ö: 'o',
          ø: 'o',
          Ù: 'U',
          Ú: 'U',
          Û: 'U',
          Ü: 'U',
          ù: 'u',
          ú: 'u',
          û: 'u',
          ü: 'u',
          Ý: 'Y',
          ý: 'y',
          ÿ: 'y',
          Æ: 'Ae',
          æ: 'ae',
          Þ: 'Th',
          þ: 'th',
          ß: 'ss',
          Ā: 'A',
          Ă: 'A',
          Ą: 'A',
          ā: 'a',
          ă: 'a',
          ą: 'a',
          Ć: 'C',
          Ĉ: 'C',
          Ċ: 'C',
          Č: 'C',
          ć: 'c',
          ĉ: 'c',
          ċ: 'c',
          č: 'c',
          Ď: 'D',
          Đ: 'D',
          ď: 'd',
          đ: 'd',
          Ē: 'E',
          Ĕ: 'E',
          Ė: 'E',
          Ę: 'E',
          Ě: 'E',
          ē: 'e',
          ĕ: 'e',
          ė: 'e',
          ę: 'e',
          ě: 'e',
          Ĝ: 'G',
          Ğ: 'G',
          Ġ: 'G',
          Ģ: 'G',
          ĝ: 'g',
          ğ: 'g',
          ġ: 'g',
          ģ: 'g',
          Ĥ: 'H',
          Ħ: 'H',
          ĥ: 'h',
          ħ: 'h',
          Ĩ: 'I',
          Ī: 'I',
          Ĭ: 'I',
          Į: 'I',
          İ: 'I',
          ĩ: 'i',
          ī: 'i',
          ĭ: 'i',
          į: 'i',
          ı: 'i',
          Ĵ: 'J',
          ĵ: 'j',
          Ķ: 'K',
          ķ: 'k',
          ĸ: 'k',
          Ĺ: 'L',
          Ļ: 'L',
          Ľ: 'L',
          Ŀ: 'L',
          Ł: 'L',
          ĺ: 'l',
          ļ: 'l',
          ľ: 'l',
          ŀ: 'l',
          ł: 'l',
          Ń: 'N',
          Ņ: 'N',
          Ň: 'N',
          Ŋ: 'N',
          ń: 'n',
          ņ: 'n',
          ň: 'n',
          ŋ: 'n',
          Ō: 'O',
          Ŏ: 'O',
          Ő: 'O',
          ō: 'o',
          ŏ: 'o',
          ő: 'o',
          Ŕ: 'R',
          Ŗ: 'R',
          Ř: 'R',
          ŕ: 'r',
          ŗ: 'r',
          ř: 'r',
          Ś: 'S',
          Ŝ: 'S',
          Ş: 'S',
          Š: 'S',
          ś: 's',
          ŝ: 's',
          ş: 's',
          š: 's',
          Ţ: 'T',
          Ť: 'T',
          Ŧ: 'T',
          ţ: 't',
          ť: 't',
          ŧ: 't',
          Ũ: 'U',
          Ū: 'U',
          Ŭ: 'U',
          Ů: 'U',
          Ű: 'U',
          Ų: 'U',
          ũ: 'u',
          ū: 'u',
          ŭ: 'u',
          ů: 'u',
          ű: 'u',
          ų: 'u',
          Ŵ: 'W',
          ŵ: 'w',
          Ŷ: 'Y',
          ŷ: 'y',
          Ÿ: 'Y',
          Ź: 'Z',
          Ż: 'Z',
          Ž: 'Z',
          ź: 'z',
          ż: 'z',
          ž: 'z',
          Ĳ: 'IJ',
          ĳ: 'ij',
          Œ: 'Oe',
          œ: 'oe',
          ŉ: "'n",
          ſ: 's'
        }),
        wn = hn({
          '&': '&amp;',
          '<': '&lt;',
          '>': '&gt;',
          '"': '&quot;',
          "'": '&#39;'
        });
      function _n(t) {
        return '\\' + Fe[t];
      }
      function Cn(t) {
        return De.test(t);
      }
      function xn(t) {
        var e = -1,
          n = Array(t.size);
        return (
          t.forEach(function(t, r) {
            n[++e] = [r, t];
          }),
          n
        );
      }
      function En(t, e) {
        return function(n) {
          return t(e(n));
        };
      }
      function Fn(t, e) {
        for (var n = -1, r = t.length, i = 0, o = []; ++n < r; ) {
          var s = t[n];
          (s !== e && s !== c) || ((t[n] = c), (o[i++] = n));
        }
        return o;
      }
      function Sn(t) {
        var e = -1,
          n = Array(t.size);
        return (
          t.forEach(function(t) {
            n[++e] = t;
          }),
          n
        );
      }
      function On(t) {
        var e = -1,
          n = Array(t.size);
        return (
          t.forEach(function(t) {
            n[++e] = [t, t];
          }),
          n
        );
      }
      function kn(t) {
        return Cn(t)
          ? (function(t) {
              var e = (ge.lastIndex = 0);
              for (; ge.test(t); ) ++e;
              return e;
            })(t)
          : nn(t);
      }
      function An(t) {
        return Cn(t)
          ? (function(t) {
              return t.match(ge) || [];
            })(t)
          : (function(t) {
              return t.split('');
            })(t);
      }
      var jn = hn({
        '&amp;': '&',
        '&lt;': '<',
        '&gt;': '>',
        '&quot;': '"',
        '&#39;': "'"
      });
      var Bn = (function t(e) {
        var C,
          Qt = (e =
            null == e ? je : Bn.defaults(je.Object(), e, Bn.pick(je, _e)))
            .Array,
          Jt = e.Date,
          Zt = e.Error,
          Xt = e.Function,
          te = e.Math,
          ee = e.Object,
          ne = e.RegExp,
          re = e.String,
          ie = e.TypeError,
          oe = Qt.prototype,
          se = Xt.prototype,
          ue = ee.prototype,
          ce = e['__core-js_shared__'],
          ae = se.toString,
          le = ue.hasOwnProperty,
          he = 0,
          fe = (C = /[^.]+$/.exec((ce && ce.keys && ce.keys.IE_PROTO) || ''))
            ? 'Symbol(src)_1.' + C
            : '',
          pe = ue.toString,
          de = ae.call(ee),
          be = je._,
          ge = ne(
            '^' +
              ae
                .call(le)
                .replace(At, '\\$&')
                .replace(
                  /hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,
                  '$1.*?'
                ) +
              '$'
          ),
          De = Te ? e.Buffer : n,
          Fe = e.Symbol,
          ke = e.Uint8Array,
          Ae = De ? De.allocUnsafe : n,
          Be = En(ee.getPrototypeOf, ee),
          Ie = ee.create,
          Me = ue.propertyIsEnumerable,
          Pe = oe.splice,
          nn = Fe ? Fe.isConcatSpreadable : n,
          hn = Fe ? Fe.iterator : n,
          In = Fe ? Fe.toStringTag : n,
          Tn = (function() {
            try {
              var t = Lo(ee, 'defineProperty');
              return t({}, '', {}), t;
            } catch (t) {}
          })(),
          Mn = e.clearTimeout !== je.clearTimeout && e.clearTimeout,
          Pn = Jt && Jt.now !== je.Date.now && Jt.now,
          Nn = e.setTimeout !== je.setTimeout && e.setTimeout,
          Rn = te.ceil,
          Ln = te.floor,
          Vn = ee.getOwnPropertySymbols,
          Un = De ? De.isBuffer : n,
          zn = e.isFinite,
          qn = oe.join,
          Wn = En(ee.keys, ee),
          $n = te.max,
          Kn = te.min,
          Gn = Jt.now,
          Yn = e.parseInt,
          Hn = te.random,
          Qn = oe.reverse,
          Jn = Lo(e, 'DataView'),
          Zn = Lo(e, 'Map'),
          Xn = Lo(e, 'Promise'),
          tr = Lo(e, 'Set'),
          er = Lo(e, 'WeakMap'),
          nr = Lo(ee, 'create'),
          rr = er && new er(),
          ir = {},
          or = hs(Jn),
          sr = hs(Zn),
          ur = hs(Xn),
          cr = hs(tr),
          ar = hs(er),
          lr = Fe ? Fe.prototype : n,
          hr = lr ? lr.valueOf : n,
          fr = lr ? lr.toString : n;
        function pr(t) {
          if (Ou(t) && !yu(t) && !(t instanceof yr)) {
            if (t instanceof vr) return t;
            if (le.call(t, '__wrapped__')) return fs(t);
          }
          return new vr(t);
        }
        var dr = (function() {
          function t() {}
          return function(e) {
            if (!Su(e)) return {};
            if (Ie) return Ie(e);
            t.prototype = e;
            var r = new t();
            return (t.prototype = n), r;
          };
        })();
        function br() {}
        function vr(t, e) {
          (this.__wrapped__ = t),
            (this.__actions__ = []),
            (this.__chain__ = !!e),
            (this.__index__ = 0),
            (this.__values__ = n);
        }
        function yr(t) {
          (this.__wrapped__ = t),
            (this.__actions__ = []),
            (this.__dir__ = 1),
            (this.__filtered__ = !1),
            (this.__iteratees__ = []),
            (this.__takeCount__ = M),
            (this.__views__ = []);
        }
        function gr(t) {
          var e = -1,
            n = null == t ? 0 : t.length;
          for (this.clear(); ++e < n; ) {
            var r = t[e];
            this.set(r[0], r[1]);
          }
        }
        function mr(t) {
          var e = -1,
            n = null == t ? 0 : t.length;
          for (this.clear(); ++e < n; ) {
            var r = t[e];
            this.set(r[0], r[1]);
          }
        }
        function Dr(t) {
          var e = -1,
            n = null == t ? 0 : t.length;
          for (this.clear(); ++e < n; ) {
            var r = t[e];
            this.set(r[0], r[1]);
          }
        }
        function wr(t) {
          var e = -1,
            n = null == t ? 0 : t.length;
          for (this.__data__ = new Dr(); ++e < n; ) this.add(t[e]);
        }
        function _r(t) {
          var e = (this.__data__ = new mr(t));
          this.size = e.size;
        }
        function Cr(t, e) {
          var n = yu(t),
            r = !n && vu(t),
            i = !n && !r && wu(t),
            o = !n && !r && !i && Pu(t),
            s = n || r || i || o,
            u = s ? dn(t.length, re) : [],
            c = u.length;
          for (var a in t)
            (!e && !le.call(t, a)) ||
              (s &&
                ('length' == a ||
                  (i && ('offset' == a || 'parent' == a)) ||
                  (o &&
                    ('buffer' == a ||
                      'byteLength' == a ||
                      'byteOffset' == a)) ||
                  Ko(a, c))) ||
              u.push(a);
          return u;
        }
        function xr(t) {
          var e = t.length;
          return e ? t[wi(0, e - 1)] : n;
        }
        function Er(t, e) {
          return cs(no(t), Tr(e, 0, t.length));
        }
        function Fr(t) {
          return cs(no(t));
        }
        function Sr(t, e, r) {
          ((r === n || pu(t[e], r)) && (r !== n || e in t)) || Br(t, e, r);
        }
        function Or(t, e, r) {
          var i = t[e];
          (le.call(t, e) && pu(i, r) && (r !== n || e in t)) || Br(t, e, r);
        }
        function kr(t, e) {
          for (var n = t.length; n--; ) if (pu(t[n][0], e)) return n;
          return -1;
        }
        function Ar(t, e, n, r) {
          return (
            Lr(t, function(t, i, o) {
              e(r, t, n(t), o);
            }),
            r
          );
        }
        function jr(t, e) {
          return t && ro(e, ic(e), t);
        }
        function Br(t, e, n) {
          '__proto__' == e && Tn
            ? Tn(t, e, {
                configurable: !0,
                enumerable: !0,
                value: n,
                writable: !0
              })
            : (t[e] = n);
        }
        function Ir(t, e) {
          for (var r = -1, i = e.length, o = Qt(i), s = null == t; ++r < i; )
            o[r] = s ? n : Xu(t, e[r]);
          return o;
        }
        function Tr(t, e, r) {
          return (
            t == t &&
              (r !== n && (t = t <= r ? t : r),
              e !== n && (t = t >= e ? t : e)),
            t
          );
        }
        function Mr(t, e, r, i, o, s) {
          var u,
            c = e & a,
            f = e & l,
            p = e & h;
          if ((r && (u = o ? r(t, i, o, s) : r(t)), u !== n)) return u;
          if (!Su(t)) return t;
          var d = yu(t);
          if (d) {
            if (
              ((u = (function(t) {
                var e = t.length,
                  n = new t.constructor(e);
                e &&
                  'string' == typeof t[0] &&
                  le.call(t, 'index') &&
                  ((n.index = t.index), (n.input = t.input));
                return n;
              })(t)),
              !c)
            )
              return no(t, u);
          } else {
            var b = zo(t),
              v = b == K || b == G;
            if (wu(t)) return Qi(t, c);
            if (b == J || b == L || (v && !o)) {
              if (((u = f || v ? {} : Wo(t)), !c))
                return f
                  ? (function(t, e) {
                      return ro(t, Uo(t), e);
                    })(
                      t,
                      (function(t, e) {
                        return t && ro(e, oc(e), t);
                      })(u, t)
                    )
                  : (function(t, e) {
                      return ro(t, Vo(t), e);
                    })(t, jr(u, t));
            } else {
              if (!Ee[b]) return o ? t : {};
              u = (function(t, e, n) {
                var r = t.constructor;
                switch (e) {
                  case st:
                    return Ji(t);
                  case z:
                  case q:
                    return new r(+t);
                  case ut:
                    return (function(t, e) {
                      var n = e ? Ji(t.buffer) : t.buffer;
                      return new t.constructor(n, t.byteOffset, t.byteLength);
                    })(t, n);
                  case ct:
                  case at:
                  case lt:
                  case ht:
                  case ft:
                  case pt:
                  case dt:
                  case bt:
                  case vt:
                    return Zi(t, n);
                  case Y:
                    return new r();
                  case H:
                  case et:
                    return new r(t);
                  case X:
                    return (function(t) {
                      var e = new t.constructor(t.source, Ut.exec(t));
                      return (e.lastIndex = t.lastIndex), e;
                    })(t);
                  case tt:
                    return new r();
                  case nt:
                    return (i = t), hr ? ee(hr.call(i)) : {};
                }
                var i;
              })(t, b, c);
            }
          }
          s || (s = new _r());
          var y = s.get(t);
          if (y) return y;
          s.set(t, u),
            Iu(t)
              ? t.forEach(function(n) {
                  u.add(Mr(n, e, r, n, t, s));
                })
              : ku(t) &&
                t.forEach(function(n, i) {
                  u.set(i, Mr(n, e, r, i, t, s));
                });
          var g = d ? n : (p ? (f ? Bo : jo) : f ? oc : ic)(t);
          return (
            $e(g || t, function(n, i) {
              g && (n = t[(i = n)]), Or(u, i, Mr(n, e, r, i, t, s));
            }),
            u
          );
        }
        function Pr(t, e, r) {
          var i = r.length;
          if (null == t) return !i;
          for (t = ee(t); i--; ) {
            var o = r[i],
              s = e[o],
              u = t[o];
            if ((u === n && !(o in t)) || !s(u)) return !1;
          }
          return !0;
        }
        function Nr(t, e, r) {
          if ('function' != typeof t) throw new ie(o);
          return is(function() {
            t.apply(n, r);
          }, e);
        }
        function Rr(t, e, n, i) {
          var o = -1,
            s = He,
            u = !0,
            c = t.length,
            a = [],
            l = e.length;
          if (!c) return a;
          n && (e = Je(e, bn(n))),
            i
              ? ((s = Qe), (u = !1))
              : e.length >= r && ((s = yn), (u = !1), (e = new wr(e)));
          t: for (; ++o < c; ) {
            var h = t[o],
              f = null == n ? h : n(h);
            if (((h = i || 0 !== h ? h : 0), u && f == f)) {
              for (var p = l; p--; ) if (e[p] === f) continue t;
              a.push(h);
            } else s(e, f, i) || a.push(h);
          }
          return a;
        }
        (pr.templateSettings = {
          escape: xt,
          evaluate: Et,
          interpolate: Ft,
          variable: '',
          imports: { _: pr }
        }),
          (pr.prototype = br.prototype),
          (pr.prototype.constructor = pr),
          (vr.prototype = dr(br.prototype)),
          (vr.prototype.constructor = vr),
          (yr.prototype = dr(br.prototype)),
          (yr.prototype.constructor = yr),
          (gr.prototype.clear = function() {
            (this.__data__ = nr ? nr(null) : {}), (this.size = 0);
          }),
          (gr.prototype.delete = function(t) {
            var e = this.has(t) && delete this.__data__[t];
            return (this.size -= e ? 1 : 0), e;
          }),
          (gr.prototype.get = function(t) {
            var e = this.__data__;
            if (nr) {
              var r = e[t];
              return r === s ? n : r;
            }
            return le.call(e, t) ? e[t] : n;
          }),
          (gr.prototype.has = function(t) {
            var e = this.__data__;
            return nr ? e[t] !== n : le.call(e, t);
          }),
          (gr.prototype.set = function(t, e) {
            var r = this.__data__;
            return (
              (this.size += this.has(t) ? 0 : 1),
              (r[t] = nr && e === n ? s : e),
              this
            );
          }),
          (mr.prototype.clear = function() {
            (this.__data__ = []), (this.size = 0);
          }),
          (mr.prototype.delete = function(t) {
            var e = this.__data__,
              n = kr(e, t);
            return (
              !(n < 0) &&
              (n == e.length - 1 ? e.pop() : Pe.call(e, n, 1), --this.size, !0)
            );
          }),
          (mr.prototype.get = function(t) {
            var e = this.__data__,
              r = kr(e, t);
            return r < 0 ? n : e[r][1];
          }),
          (mr.prototype.has = function(t) {
            return kr(this.__data__, t) > -1;
          }),
          (mr.prototype.set = function(t, e) {
            var n = this.__data__,
              r = kr(n, t);
            return r < 0 ? (++this.size, n.push([t, e])) : (n[r][1] = e), this;
          }),
          (Dr.prototype.clear = function() {
            (this.size = 0),
              (this.__data__ = {
                hash: new gr(),
                map: new (Zn || mr)(),
                string: new gr()
              });
          }),
          (Dr.prototype.delete = function(t) {
            var e = No(this, t).delete(t);
            return (this.size -= e ? 1 : 0), e;
          }),
          (Dr.prototype.get = function(t) {
            return No(this, t).get(t);
          }),
          (Dr.prototype.has = function(t) {
            return No(this, t).has(t);
          }),
          (Dr.prototype.set = function(t, e) {
            var n = No(this, t),
              r = n.size;
            return n.set(t, e), (this.size += n.size == r ? 0 : 1), this;
          }),
          (wr.prototype.add = wr.prototype.push = function(t) {
            return this.__data__.set(t, s), this;
          }),
          (wr.prototype.has = function(t) {
            return this.__data__.has(t);
          }),
          (_r.prototype.clear = function() {
            (this.__data__ = new mr()), (this.size = 0);
          }),
          (_r.prototype.delete = function(t) {
            var e = this.__data__,
              n = e.delete(t);
            return (this.size = e.size), n;
          }),
          (_r.prototype.get = function(t) {
            return this.__data__.get(t);
          }),
          (_r.prototype.has = function(t) {
            return this.__data__.has(t);
          }),
          (_r.prototype.set = function(t, e) {
            var n = this.__data__;
            if (n instanceof mr) {
              var i = n.__data__;
              if (!Zn || i.length < r - 1)
                return i.push([t, e]), (this.size = ++n.size), this;
              n = this.__data__ = new Dr(i);
            }
            return n.set(t, e), (this.size = n.size), this;
          });
        var Lr = so(Gr),
          Vr = so(Yr, !0);
        function Ur(t, e) {
          var n = !0;
          return (
            Lr(t, function(t, r, i) {
              return (n = !!e(t, r, i));
            }),
            n
          );
        }
        function zr(t, e, r) {
          for (var i = -1, o = t.length; ++i < o; ) {
            var s = t[i],
              u = e(s);
            if (null != u && (c === n ? u == u && !Mu(u) : r(u, c)))
              var c = u,
                a = s;
          }
          return a;
        }
        function qr(t, e) {
          var n = [];
          return (
            Lr(t, function(t, r, i) {
              e(t, r, i) && n.push(t);
            }),
            n
          );
        }
        function Wr(t, e, n, r, i) {
          var o = -1,
            s = t.length;
          for (n || (n = $o), i || (i = []); ++o < s; ) {
            var u = t[o];
            e > 0 && n(u)
              ? e > 1
                ? Wr(u, e - 1, n, r, i)
                : Ze(i, u)
              : r || (i[i.length] = u);
          }
          return i;
        }
        var $r = uo(),
          Kr = uo(!0);
        function Gr(t, e) {
          return t && $r(t, e, ic);
        }
        function Yr(t, e) {
          return t && Kr(t, e, ic);
        }
        function Hr(t, e) {
          return Ye(e, function(e) {
            return xu(t[e]);
          });
        }
        function Qr(t, e) {
          for (var r = 0, i = (e = Ki(e, t)).length; null != t && r < i; )
            t = t[ls(e[r++])];
          return r && r == i ? t : n;
        }
        function Jr(t, e, n) {
          var r = e(t);
          return yu(t) ? r : Ze(r, n(t));
        }
        function Zr(t) {
          return null == t
            ? t === n
              ? rt
              : Q
            : In && In in ee(t)
            ? (function(t) {
                var e = le.call(t, In),
                  r = t[In];
                try {
                  t[In] = n;
                  var i = !0;
                } catch (t) {}
                var o = pe.call(t);
                i && (e ? (t[In] = r) : delete t[In]);
                return o;
              })(t)
            : (function(t) {
                return pe.call(t);
              })(t);
        }
        function Xr(t, e) {
          return t > e;
        }
        function ti(t, e) {
          return null != t && le.call(t, e);
        }
        function ei(t, e) {
          return null != t && e in ee(t);
        }
        function ni(t, e, r) {
          for (
            var i = r ? Qe : He,
              o = t[0].length,
              s = t.length,
              u = s,
              c = Qt(s),
              a = 1 / 0,
              l = [];
            u--;

          ) {
            var h = t[u];
            u && e && (h = Je(h, bn(e))),
              (a = Kn(h.length, a)),
              (c[u] =
                !r && (e || (o >= 120 && h.length >= 120))
                  ? new wr(u && h)
                  : n);
          }
          h = t[0];
          var f = -1,
            p = c[0];
          t: for (; ++f < o && l.length < a; ) {
            var d = h[f],
              b = e ? e(d) : d;
            if (((d = r || 0 !== d ? d : 0), !(p ? yn(p, b) : i(l, b, r)))) {
              for (u = s; --u; ) {
                var v = c[u];
                if (!(v ? yn(v, b) : i(t[u], b, r))) continue t;
              }
              p && p.push(b), l.push(d);
            }
          }
          return l;
        }
        function ri(t, e, r) {
          var i = null == (t = es(t, (e = Ki(e, t)))) ? t : t[ls(Cs(e))];
          return null == i ? n : qe(i, t, r);
        }
        function ii(t) {
          return Ou(t) && Zr(t) == L;
        }
        function oi(t, e, r, i, o) {
          return (
            t === e ||
            (null == t || null == e || (!Ou(t) && !Ou(e))
              ? t != t && e != e
              : (function(t, e, r, i, o, s) {
                  var u = yu(t),
                    c = yu(e),
                    a = u ? V : zo(t),
                    l = c ? V : zo(e),
                    h = (a = a == L ? J : a) == J,
                    d = (l = l == L ? J : l) == J,
                    b = a == l;
                  if (b && wu(t)) {
                    if (!wu(e)) return !1;
                    (u = !0), (h = !1);
                  }
                  if (b && !h)
                    return (
                      s || (s = new _r()),
                      u || Pu(t)
                        ? ko(t, e, r, i, o, s)
                        : (function(t, e, n, r, i, o, s) {
                            switch (n) {
                              case ut:
                                if (
                                  t.byteLength != e.byteLength ||
                                  t.byteOffset != e.byteOffset
                                )
                                  return !1;
                                (t = t.buffer), (e = e.buffer);
                              case st:
                                return !(
                                  t.byteLength != e.byteLength ||
                                  !o(new ke(t), new ke(e))
                                );
                              case z:
                              case q:
                              case H:
                                return pu(+t, +e);
                              case $:
                                return (
                                  t.name == e.name && t.message == e.message
                                );
                              case X:
                              case et:
                                return t == e + '';
                              case Y:
                                var u = xn;
                              case tt:
                                var c = r & f;
                                if ((u || (u = Sn), t.size != e.size && !c))
                                  return !1;
                                var a = s.get(t);
                                if (a) return a == e;
                                (r |= p), s.set(t, e);
                                var l = ko(u(t), u(e), r, i, o, s);
                                return s.delete(t), l;
                              case nt:
                                if (hr) return hr.call(t) == hr.call(e);
                            }
                            return !1;
                          })(t, e, a, r, i, o, s)
                    );
                  if (!(r & f)) {
                    var v = h && le.call(t, '__wrapped__'),
                      y = d && le.call(e, '__wrapped__');
                    if (v || y) {
                      var g = v ? t.value() : t,
                        m = y ? e.value() : e;
                      return s || (s = new _r()), o(g, m, r, i, s);
                    }
                  }
                  if (!b) return !1;
                  return (
                    s || (s = new _r()),
                    (function(t, e, r, i, o, s) {
                      var u = r & f,
                        c = jo(t),
                        a = c.length,
                        l = jo(e).length;
                      if (a != l && !u) return !1;
                      var h = a;
                      for (; h--; ) {
                        var p = c[h];
                        if (!(u ? p in e : le.call(e, p))) return !1;
                      }
                      var d = s.get(t);
                      if (d && s.get(e)) return d == e;
                      var b = !0;
                      s.set(t, e), s.set(e, t);
                      var v = u;
                      for (; ++h < a; ) {
                        p = c[h];
                        var y = t[p],
                          g = e[p];
                        if (i)
                          var m = u ? i(g, y, p, e, t, s) : i(y, g, p, t, e, s);
                        if (!(m === n ? y === g || o(y, g, r, i, s) : m)) {
                          b = !1;
                          break;
                        }
                        v || (v = 'constructor' == p);
                      }
                      if (b && !v) {
                        var D = t.constructor,
                          w = e.constructor;
                        D != w &&
                          'constructor' in t &&
                          'constructor' in e &&
                          !(
                            'function' == typeof D &&
                            D instanceof D &&
                            'function' == typeof w &&
                            w instanceof w
                          ) &&
                          (b = !1);
                      }
                      return s.delete(t), s.delete(e), b;
                    })(t, e, r, i, o, s)
                  );
                })(t, e, r, i, oi, o))
          );
        }
        function si(t, e, r, i) {
          var o = r.length,
            s = o,
            u = !i;
          if (null == t) return !s;
          for (t = ee(t); o--; ) {
            var c = r[o];
            if (u && c[2] ? c[1] !== t[c[0]] : !(c[0] in t)) return !1;
          }
          for (; ++o < s; ) {
            var a = (c = r[o])[0],
              l = t[a],
              h = c[1];
            if (u && c[2]) {
              if (l === n && !(a in t)) return !1;
            } else {
              var d = new _r();
              if (i) var b = i(l, h, a, t, e, d);
              if (!(b === n ? oi(h, l, f | p, i, d) : b)) return !1;
            }
          }
          return !0;
        }
        function ui(t) {
          return (
            !(!Su(t) || ((e = t), fe && fe in e)) &&
            (xu(t) ? ge : Wt).test(hs(t))
          );
          var e;
        }
        function ci(t) {
          return 'function' == typeof t
            ? t
            : null == t
            ? Ac
            : 'object' == typeof t
            ? yu(t)
              ? di(t[0], t[1])
              : pi(t)
            : Lc(t);
        }
        function ai(t) {
          if (!Jo(t)) return Wn(t);
          var e = [];
          for (var n in ee(t)) le.call(t, n) && 'constructor' != n && e.push(n);
          return e;
        }
        function li(t) {
          if (!Su(t))
            return (function(t) {
              var e = [];
              if (null != t) for (var n in ee(t)) e.push(n);
              return e;
            })(t);
          var e = Jo(t),
            n = [];
          for (var r in t)
            ('constructor' != r || (!e && le.call(t, r))) && n.push(r);
          return n;
        }
        function hi(t, e) {
          return t < e;
        }
        function fi(t, e) {
          var n = -1,
            r = mu(t) ? Qt(t.length) : [];
          return (
            Lr(t, function(t, i, o) {
              r[++n] = e(t, i, o);
            }),
            r
          );
        }
        function pi(t) {
          var e = Ro(t);
          return 1 == e.length && e[0][2]
            ? Xo(e[0][0], e[0][1])
            : function(n) {
                return n === t || si(n, t, e);
              };
        }
        function di(t, e) {
          return Yo(t) && Zo(e)
            ? Xo(ls(t), e)
            : function(r) {
                var i = Xu(r, t);
                return i === n && i === e ? tc(r, t) : oi(e, i, f | p);
              };
        }
        function bi(t, e, r, i, o) {
          t !== e &&
            $r(
              e,
              function(s, u) {
                if ((o || (o = new _r()), Su(s)))
                  !(function(t, e, r, i, o, s, u) {
                    var c = ns(t, r),
                      a = ns(e, r),
                      l = u.get(a);
                    if (l) return void Sr(t, r, l);
                    var h = s ? s(c, a, r + '', t, e, u) : n,
                      f = h === n;
                    if (f) {
                      var p = yu(a),
                        d = !p && wu(a),
                        b = !p && !d && Pu(a);
                      (h = a),
                        p || d || b
                          ? yu(c)
                            ? (h = c)
                            : Du(c)
                            ? (h = no(c))
                            : d
                            ? ((f = !1), (h = Qi(a, !0)))
                            : b
                            ? ((f = !1), (h = Zi(a, !0)))
                            : (h = [])
                          : ju(a) || vu(a)
                          ? ((h = c),
                            vu(c)
                              ? (h = Wu(c))
                              : (Su(c) && !xu(c)) || (h = Wo(a)))
                          : (f = !1);
                    }
                    f && (u.set(a, h), o(h, a, i, s, u), u.delete(a));
                    Sr(t, r, h);
                  })(t, e, u, r, bi, i, o);
                else {
                  var c = i ? i(ns(t, u), s, u + '', t, e, o) : n;
                  c === n && (c = s), Sr(t, u, c);
                }
              },
              oc
            );
        }
        function vi(t, e) {
          var r = t.length;
          if (r) return Ko((e += e < 0 ? r : 0), r) ? t[e] : n;
        }
        function yi(t, e, n) {
          var r = -1;
          return (
            (e = Je(e.length ? e : [Ac], bn(Po()))),
            (function(t, e) {
              var n = t.length;
              for (t.sort(e); n--; ) t[n] = t[n].value;
              return t;
            })(
              fi(t, function(t, n, i) {
                return {
                  criteria: Je(e, function(e) {
                    return e(t);
                  }),
                  index: ++r,
                  value: t
                };
              }),
              function(t, e) {
                return (function(t, e, n) {
                  var r = -1,
                    i = t.criteria,
                    o = e.criteria,
                    s = i.length,
                    u = n.length;
                  for (; ++r < s; ) {
                    var c = Xi(i[r], o[r]);
                    if (c) {
                      if (r >= u) return c;
                      var a = n[r];
                      return c * ('desc' == a ? -1 : 1);
                    }
                  }
                  return t.index - e.index;
                })(t, e, n);
              }
            )
          );
        }
        function gi(t, e, n) {
          for (var r = -1, i = e.length, o = {}; ++r < i; ) {
            var s = e[r],
              u = Qr(t, s);
            n(u, s) && Fi(o, Ki(s, t), u);
          }
          return o;
        }
        function mi(t, e, n, r) {
          var i = r ? un : sn,
            o = -1,
            s = e.length,
            u = t;
          for (t === e && (e = no(e)), n && (u = Je(t, bn(n))); ++o < s; )
            for (
              var c = 0, a = e[o], l = n ? n(a) : a;
              (c = i(u, l, c, r)) > -1;

            )
              u !== t && Pe.call(u, c, 1), Pe.call(t, c, 1);
          return t;
        }
        function Di(t, e) {
          for (var n = t ? e.length : 0, r = n - 1; n--; ) {
            var i = e[n];
            if (n == r || i !== o) {
              var o = i;
              Ko(i) ? Pe.call(t, i, 1) : Ri(t, i);
            }
          }
          return t;
        }
        function wi(t, e) {
          return t + Ln(Hn() * (e - t + 1));
        }
        function _i(t, e) {
          var n = '';
          if (!t || e < 1 || e > B) return n;
          do {
            e % 2 && (n += t), (e = Ln(e / 2)) && (t += t);
          } while (e);
          return n;
        }
        function Ci(t, e) {
          return os(ts(t, e, Ac), t + '');
        }
        function xi(t) {
          return xr(pc(t));
        }
        function Ei(t, e) {
          var n = pc(t);
          return cs(n, Tr(e, 0, n.length));
        }
        function Fi(t, e, r, i) {
          if (!Su(t)) return t;
          for (
            var o = -1, s = (e = Ki(e, t)).length, u = s - 1, c = t;
            null != c && ++o < s;

          ) {
            var a = ls(e[o]),
              l = r;
            if (o != u) {
              var h = c[a];
              (l = i ? i(h, a, c) : n) === n &&
                (l = Su(h) ? h : Ko(e[o + 1]) ? [] : {});
            }
            Or(c, a, l), (c = c[a]);
          }
          return t;
        }
        var Si = rr
            ? function(t, e) {
                return rr.set(t, e), t;
              }
            : Ac,
          Oi = Tn
            ? function(t, e) {
                return Tn(t, 'toString', {
                  configurable: !0,
                  enumerable: !1,
                  value: Sc(e),
                  writable: !0
                });
              }
            : Ac;
        function ki(t) {
          return cs(pc(t));
        }
        function Ai(t, e, n) {
          var r = -1,
            i = t.length;
          e < 0 && (e = -e > i ? 0 : i + e),
            (n = n > i ? i : n) < 0 && (n += i),
            (i = e > n ? 0 : (n - e) >>> 0),
            (e >>>= 0);
          for (var o = Qt(i); ++r < i; ) o[r] = t[r + e];
          return o;
        }
        function ji(t, e) {
          var n;
          return (
            Lr(t, function(t, r, i) {
              return !(n = e(t, r, i));
            }),
            !!n
          );
        }
        function Bi(t, e, n) {
          var r = 0,
            i = null == t ? r : t.length;
          if ('number' == typeof e && e == e && i <= N) {
            for (; r < i; ) {
              var o = (r + i) >>> 1,
                s = t[o];
              null !== s && !Mu(s) && (n ? s <= e : s < e)
                ? (r = o + 1)
                : (i = o);
            }
            return i;
          }
          return Ii(t, e, Ac, n);
        }
        function Ii(t, e, r, i) {
          e = r(e);
          for (
            var o = 0,
              s = null == t ? 0 : t.length,
              u = e != e,
              c = null === e,
              a = Mu(e),
              l = e === n;
            o < s;

          ) {
            var h = Ln((o + s) / 2),
              f = r(t[h]),
              p = f !== n,
              d = null === f,
              b = f == f,
              v = Mu(f);
            if (u) var y = i || b;
            else
              y = l
                ? b && (i || p)
                : c
                ? b && p && (i || !d)
                : a
                ? b && p && !d && (i || !v)
                : !d && !v && (i ? f <= e : f < e);
            y ? (o = h + 1) : (s = h);
          }
          return Kn(s, P);
        }
        function Ti(t, e) {
          for (var n = -1, r = t.length, i = 0, o = []; ++n < r; ) {
            var s = t[n],
              u = e ? e(s) : s;
            if (!n || !pu(u, c)) {
              var c = u;
              o[i++] = 0 === s ? 0 : s;
            }
          }
          return o;
        }
        function Mi(t) {
          return 'number' == typeof t ? t : Mu(t) ? T : +t;
        }
        function Pi(t) {
          if ('string' == typeof t) return t;
          if (yu(t)) return Je(t, Pi) + '';
          if (Mu(t)) return fr ? fr.call(t) : '';
          var e = t + '';
          return '0' == e && 1 / t == -j ? '-0' : e;
        }
        function Ni(t, e, n) {
          var i = -1,
            o = He,
            s = t.length,
            u = !0,
            c = [],
            a = c;
          if (n) (u = !1), (o = Qe);
          else if (s >= r) {
            var l = e ? null : Co(t);
            if (l) return Sn(l);
            (u = !1), (o = yn), (a = new wr());
          } else a = e ? [] : c;
          t: for (; ++i < s; ) {
            var h = t[i],
              f = e ? e(h) : h;
            if (((h = n || 0 !== h ? h : 0), u && f == f)) {
              for (var p = a.length; p--; ) if (a[p] === f) continue t;
              e && a.push(f), c.push(h);
            } else o(a, f, n) || (a !== c && a.push(f), c.push(h));
          }
          return c;
        }
        function Ri(t, e) {
          return null == (t = es(t, (e = Ki(e, t)))) || delete t[ls(Cs(e))];
        }
        function Li(t, e, n, r) {
          return Fi(t, e, n(Qr(t, e)), r);
        }
        function Vi(t, e, n, r) {
          for (
            var i = t.length, o = r ? i : -1;
            (r ? o-- : ++o < i) && e(t[o], o, t);

          );
          return n
            ? Ai(t, r ? 0 : o, r ? o + 1 : i)
            : Ai(t, r ? o + 1 : 0, r ? i : o);
        }
        function Ui(t, e) {
          var n = t;
          return (
            n instanceof yr && (n = n.value()),
            Xe(
              e,
              function(t, e) {
                return e.func.apply(e.thisArg, Ze([t], e.args));
              },
              n
            )
          );
        }
        function zi(t, e, n) {
          var r = t.length;
          if (r < 2) return r ? Ni(t[0]) : [];
          for (var i = -1, o = Qt(r); ++i < r; )
            for (var s = t[i], u = -1; ++u < r; )
              u != i && (o[i] = Rr(o[i] || s, t[u], e, n));
          return Ni(Wr(o, 1), e, n);
        }
        function qi(t, e, r) {
          for (var i = -1, o = t.length, s = e.length, u = {}; ++i < o; ) {
            var c = i < s ? e[i] : n;
            r(u, t[i], c);
          }
          return u;
        }
        function Wi(t) {
          return Du(t) ? t : [];
        }
        function $i(t) {
          return 'function' == typeof t ? t : Ac;
        }
        function Ki(t, e) {
          return yu(t) ? t : Yo(t, e) ? [t] : as($u(t));
        }
        var Gi = Ci;
        function Yi(t, e, r) {
          var i = t.length;
          return (r = r === n ? i : r), !e && r >= i ? t : Ai(t, e, r);
        }
        var Hi =
          Mn ||
          function(t) {
            return je.clearTimeout(t);
          };
        function Qi(t, e) {
          if (e) return t.slice();
          var n = t.length,
            r = Ae ? Ae(n) : new t.constructor(n);
          return t.copy(r), r;
        }
        function Ji(t) {
          var e = new t.constructor(t.byteLength);
          return new ke(e).set(new ke(t)), e;
        }
        function Zi(t, e) {
          var n = e ? Ji(t.buffer) : t.buffer;
          return new t.constructor(n, t.byteOffset, t.length);
        }
        function Xi(t, e) {
          if (t !== e) {
            var r = t !== n,
              i = null === t,
              o = t == t,
              s = Mu(t),
              u = e !== n,
              c = null === e,
              a = e == e,
              l = Mu(e);
            if (
              (!c && !l && !s && t > e) ||
              (s && u && a && !c && !l) ||
              (i && u && a) ||
              (!r && a) ||
              !o
            )
              return 1;
            if (
              (!i && !s && !l && t < e) ||
              (l && r && o && !i && !s) ||
              (c && r && o) ||
              (!u && o) ||
              !a
            )
              return -1;
          }
          return 0;
        }
        function to(t, e, n, r) {
          for (
            var i = -1,
              o = t.length,
              s = n.length,
              u = -1,
              c = e.length,
              a = $n(o - s, 0),
              l = Qt(c + a),
              h = !r;
            ++u < c;

          )
            l[u] = e[u];
          for (; ++i < s; ) (h || i < o) && (l[n[i]] = t[i]);
          for (; a--; ) l[u++] = t[i++];
          return l;
        }
        function eo(t, e, n, r) {
          for (
            var i = -1,
              o = t.length,
              s = -1,
              u = n.length,
              c = -1,
              a = e.length,
              l = $n(o - u, 0),
              h = Qt(l + a),
              f = !r;
            ++i < l;

          )
            h[i] = t[i];
          for (var p = i; ++c < a; ) h[p + c] = e[c];
          for (; ++s < u; ) (f || i < o) && (h[p + n[s]] = t[i++]);
          return h;
        }
        function no(t, e) {
          var n = -1,
            r = t.length;
          for (e || (e = Qt(r)); ++n < r; ) e[n] = t[n];
          return e;
        }
        function ro(t, e, r, i) {
          var o = !r;
          r || (r = {});
          for (var s = -1, u = e.length; ++s < u; ) {
            var c = e[s],
              a = i ? i(r[c], t[c], c, r, t) : n;
            a === n && (a = t[c]), o ? Br(r, c, a) : Or(r, c, a);
          }
          return r;
        }
        function io(t, e) {
          return function(n, r) {
            var i = yu(n) ? We : Ar,
              o = e ? e() : {};
            return i(n, t, Po(r, 2), o);
          };
        }
        function oo(t) {
          return Ci(function(e, r) {
            var i = -1,
              o = r.length,
              s = o > 1 ? r[o - 1] : n,
              u = o > 2 ? r[2] : n;
            for (
              s = t.length > 3 && 'function' == typeof s ? (o--, s) : n,
                u && Go(r[0], r[1], u) && ((s = o < 3 ? n : s), (o = 1)),
                e = ee(e);
              ++i < o;

            ) {
              var c = r[i];
              c && t(e, c, i, s);
            }
            return e;
          });
        }
        function so(t, e) {
          return function(n, r) {
            if (null == n) return n;
            if (!mu(n)) return t(n, r);
            for (
              var i = n.length, o = e ? i : -1, s = ee(n);
              (e ? o-- : ++o < i) && !1 !== r(s[o], o, s);

            );
            return n;
          };
        }
        function uo(t) {
          return function(e, n, r) {
            for (var i = -1, o = ee(e), s = r(e), u = s.length; u--; ) {
              var c = s[t ? u : ++i];
              if (!1 === n(o[c], c, o)) break;
            }
            return e;
          };
        }
        function co(t) {
          return function(e) {
            var r = Cn((e = $u(e))) ? An(e) : n,
              i = r ? r[0] : e.charAt(0),
              o = r ? Yi(r, 1).join('') : e.slice(1);
            return i[t]() + o;
          };
        }
        function ao(t) {
          return function(e) {
            return Xe(xc(vc(e).replace(ve, '')), t, '');
          };
        }
        function lo(t) {
          return function() {
            var e = arguments;
            switch (e.length) {
              case 0:
                return new t();
              case 1:
                return new t(e[0]);
              case 2:
                return new t(e[0], e[1]);
              case 3:
                return new t(e[0], e[1], e[2]);
              case 4:
                return new t(e[0], e[1], e[2], e[3]);
              case 5:
                return new t(e[0], e[1], e[2], e[3], e[4]);
              case 6:
                return new t(e[0], e[1], e[2], e[3], e[4], e[5]);
              case 7:
                return new t(e[0], e[1], e[2], e[3], e[4], e[5], e[6]);
            }
            var n = dr(t.prototype),
              r = t.apply(n, e);
            return Su(r) ? r : n;
          };
        }
        function ho(t) {
          return function(e, r, i) {
            var o = ee(e);
            if (!mu(e)) {
              var s = Po(r, 3);
              (e = ic(e)),
                (r = function(t) {
                  return s(o[t], t, o);
                });
            }
            var u = t(e, r, i);
            return u > -1 ? o[s ? e[u] : u] : n;
          };
        }
        function fo(t) {
          return Ao(function(e) {
            var r = e.length,
              i = r,
              s = vr.prototype.thru;
            for (t && e.reverse(); i--; ) {
              var u = e[i];
              if ('function' != typeof u) throw new ie(o);
              if (s && !c && 'wrapper' == To(u)) var c = new vr([], !0);
            }
            for (i = c ? i : r; ++i < r; ) {
              var a = To((u = e[i])),
                l = 'wrapper' == a ? Io(u) : n;
              c =
                l &&
                Ho(l[0]) &&
                l[1] == (w | y | m | _) &&
                !l[4].length &&
                1 == l[9]
                  ? c[To(l[0])].apply(c, l[3])
                  : 1 == u.length && Ho(u)
                  ? c[a]()
                  : c.thru(u);
            }
            return function() {
              var t = arguments,
                n = t[0];
              if (c && 1 == t.length && yu(n)) return c.plant(n).value();
              for (var i = 0, o = r ? e[i].apply(this, t) : n; ++i < r; )
                o = e[i].call(this, o);
              return o;
            };
          });
        }
        function po(t, e, r, i, o, s, u, c, a, l) {
          var h = e & w,
            f = e & d,
            p = e & b,
            v = e & (y | g),
            m = e & x,
            D = p ? n : lo(t);
          return function d() {
            for (var b = arguments.length, y = Qt(b), g = b; g--; )
              y[g] = arguments[g];
            if (v)
              var w = Mo(d),
                _ = (function(t, e) {
                  for (var n = t.length, r = 0; n--; ) t[n] === e && ++r;
                  return r;
                })(y, w);
            if (
              (i && (y = to(y, i, o, v)),
              s && (y = eo(y, s, u, v)),
              (b -= _),
              v && b < l)
            ) {
              var C = Fn(y, w);
              return wo(t, e, po, d.placeholder, r, y, C, c, a, l - b);
            }
            var x = f ? r : this,
              E = p ? x[t] : t;
            return (
              (b = y.length),
              c
                ? (y = (function(t, e) {
                    var r = t.length,
                      i = Kn(e.length, r),
                      o = no(t);
                    for (; i--; ) {
                      var s = e[i];
                      t[i] = Ko(s, r) ? o[s] : n;
                    }
                    return t;
                  })(y, c))
                : m && b > 1 && y.reverse(),
              h && a < b && (y.length = a),
              this && this !== je && this instanceof d && (E = D || lo(E)),
              E.apply(x, y)
            );
          };
        }
        function bo(t, e) {
          return function(n, r) {
            return (function(t, e, n, r) {
              return (
                Gr(t, function(t, i, o) {
                  e(r, n(t), i, o);
                }),
                r
              );
            })(n, t, e(r), {});
          };
        }
        function vo(t, e) {
          return function(r, i) {
            var o;
            if (r === n && i === n) return e;
            if ((r !== n && (o = r), i !== n)) {
              if (o === n) return i;
              'string' == typeof r || 'string' == typeof i
                ? ((r = Pi(r)), (i = Pi(i)))
                : ((r = Mi(r)), (i = Mi(i))),
                (o = t(r, i));
            }
            return o;
          };
        }
        function yo(t) {
          return Ao(function(e) {
            return (
              (e = Je(e, bn(Po()))),
              Ci(function(n) {
                var r = this;
                return t(e, function(t) {
                  return qe(t, r, n);
                });
              })
            );
          });
        }
        function go(t, e) {
          var r = (e = e === n ? ' ' : Pi(e)).length;
          if (r < 2) return r ? _i(e, t) : e;
          var i = _i(e, Rn(t / kn(e)));
          return Cn(e) ? Yi(An(i), 0, t).join('') : i.slice(0, t);
        }
        function mo(t) {
          return function(e, r, i) {
            return (
              i && 'number' != typeof i && Go(e, r, i) && (r = i = n),
              (e = Vu(e)),
              r === n ? ((r = e), (e = 0)) : (r = Vu(r)),
              (function(t, e, n, r) {
                for (
                  var i = -1, o = $n(Rn((e - t) / (n || 1)), 0), s = Qt(o);
                  o--;

                )
                  (s[r ? o : ++i] = t), (t += n);
                return s;
              })(e, r, (i = i === n ? (e < r ? 1 : -1) : Vu(i)), t)
            );
          };
        }
        function Do(t) {
          return function(e, n) {
            return (
              ('string' == typeof e && 'string' == typeof n) ||
                ((e = qu(e)), (n = qu(n))),
              t(e, n)
            );
          };
        }
        function wo(t, e, r, i, o, s, u, c, a, l) {
          var h = e & y;
          (e |= h ? m : D), (e &= ~(h ? D : m)) & v || (e &= ~(d | b));
          var f = [
              t,
              e,
              o,
              h ? s : n,
              h ? u : n,
              h ? n : s,
              h ? n : u,
              c,
              a,
              l
            ],
            p = r.apply(n, f);
          return Ho(t) && rs(p, f), (p.placeholder = i), ss(p, t, e);
        }
        function _o(t) {
          var e = te[t];
          return function(t, n) {
            if (((t = qu(t)), (n = null == n ? 0 : Kn(Uu(n), 292)) && zn(t))) {
              var r = ($u(t) + 'e').split('e');
              return +(
                (r = ($u(e(r[0] + 'e' + (+r[1] + n))) + 'e').split('e'))[0] +
                'e' +
                (+r[1] - n)
              );
            }
            return e(t);
          };
        }
        var Co =
          tr && 1 / Sn(new tr([, -0]))[1] == j
            ? function(t) {
                return new tr(t);
              }
            : Mc;
        function xo(t) {
          return function(e) {
            var n = zo(e);
            return n == Y
              ? xn(e)
              : n == tt
              ? On(e)
              : (function(t, e) {
                  return Je(e, function(e) {
                    return [e, t[e]];
                  });
                })(e, t(e));
          };
        }
        function Eo(t, e, r, i, s, u, a, l) {
          var h = e & b;
          if (!h && 'function' != typeof t) throw new ie(o);
          var f = i ? i.length : 0;
          if (
            (f || ((e &= ~(m | D)), (i = s = n)),
            (a = a === n ? a : $n(Uu(a), 0)),
            (l = l === n ? l : Uu(l)),
            (f -= s ? s.length : 0),
            e & D)
          ) {
            var p = i,
              C = s;
            i = s = n;
          }
          var x = h ? n : Io(t),
            E = [t, e, r, i, s, p, C, u, a, l];
          if (
            (x &&
              (function(t, e) {
                var n = t[1],
                  r = e[1],
                  i = n | r,
                  o = i < (d | b | w),
                  s =
                    (r == w && n == y) ||
                    (r == w && n == _ && t[7].length <= e[8]) ||
                    (r == (w | _) && e[7].length <= e[8] && n == y);
                if (!o && !s) return t;
                r & d && ((t[2] = e[2]), (i |= n & d ? 0 : v));
                var u = e[3];
                if (u) {
                  var a = t[3];
                  (t[3] = a ? to(a, u, e[4]) : u),
                    (t[4] = a ? Fn(t[3], c) : e[4]);
                }
                (u = e[5]) &&
                  ((a = t[5]),
                  (t[5] = a ? eo(a, u, e[6]) : u),
                  (t[6] = a ? Fn(t[5], c) : e[6]));
                (u = e[7]) && (t[7] = u);
                r & w && (t[8] = null == t[8] ? e[8] : Kn(t[8], e[8]));
                null == t[9] && (t[9] = e[9]);
                (t[0] = e[0]), (t[1] = i);
              })(E, x),
            (t = E[0]),
            (e = E[1]),
            (r = E[2]),
            (i = E[3]),
            (s = E[4]),
            !(l = E[9] = E[9] === n ? (h ? 0 : t.length) : $n(E[9] - f, 0)) &&
              e & (y | g) &&
              (e &= ~(y | g)),
            e && e != d)
          )
            F =
              e == y || e == g
                ? (function(t, e, r) {
                    var i = lo(t);
                    return function o() {
                      for (
                        var s = arguments.length, u = Qt(s), c = s, a = Mo(o);
                        c--;

                      )
                        u[c] = arguments[c];
                      var l =
                        s < 3 && u[0] !== a && u[s - 1] !== a ? [] : Fn(u, a);
                      return (s -= l.length) < r
                        ? wo(t, e, po, o.placeholder, n, u, l, n, n, r - s)
                        : qe(
                            this && this !== je && this instanceof o ? i : t,
                            this,
                            u
                          );
                    };
                  })(t, e, l)
                : (e != m && e != (d | m)) || s.length
                ? po.apply(n, E)
                : (function(t, e, n, r) {
                    var i = e & d,
                      o = lo(t);
                    return function e() {
                      for (
                        var s = -1,
                          u = arguments.length,
                          c = -1,
                          a = r.length,
                          l = Qt(a + u),
                          h = this && this !== je && this instanceof e ? o : t;
                        ++c < a;

                      )
                        l[c] = r[c];
                      for (; u--; ) l[c++] = arguments[++s];
                      return qe(h, i ? n : this, l);
                    };
                  })(t, e, r, i);
          else
            var F = (function(t, e, n) {
              var r = e & d,
                i = lo(t);
              return function e() {
                return (this && this !== je && this instanceof e ? i : t).apply(
                  r ? n : this,
                  arguments
                );
              };
            })(t, e, r);
          return ss((x ? Si : rs)(F, E), t, e);
        }
        function Fo(t, e, r, i) {
          return t === n || (pu(t, ue[r]) && !le.call(i, r)) ? e : t;
        }
        function So(t, e, r, i, o, s) {
          return (
            Su(t) && Su(e) && (s.set(e, t), bi(t, e, n, So, s), s.delete(e)), t
          );
        }
        function Oo(t) {
          return ju(t) ? n : t;
        }
        function ko(t, e, r, i, o, s) {
          var u = r & f,
            c = t.length,
            a = e.length;
          if (c != a && !(u && a > c)) return !1;
          var l = s.get(t);
          if (l && s.get(e)) return l == e;
          var h = -1,
            d = !0,
            b = r & p ? new wr() : n;
          for (s.set(t, e), s.set(e, t); ++h < c; ) {
            var v = t[h],
              y = e[h];
            if (i) var g = u ? i(y, v, h, e, t, s) : i(v, y, h, t, e, s);
            if (g !== n) {
              if (g) continue;
              d = !1;
              break;
            }
            if (b) {
              if (
                !en(e, function(t, e) {
                  if (!yn(b, e) && (v === t || o(v, t, r, i, s)))
                    return b.push(e);
                })
              ) {
                d = !1;
                break;
              }
            } else if (v !== y && !o(v, y, r, i, s)) {
              d = !1;
              break;
            }
          }
          return s.delete(t), s.delete(e), d;
        }
        function Ao(t) {
          return os(ts(t, n, gs), t + '');
        }
        function jo(t) {
          return Jr(t, ic, Vo);
        }
        function Bo(t) {
          return Jr(t, oc, Uo);
        }
        var Io = rr
          ? function(t) {
              return rr.get(t);
            }
          : Mc;
        function To(t) {
          for (
            var e = t.name + '', n = ir[e], r = le.call(ir, e) ? n.length : 0;
            r--;

          ) {
            var i = n[r],
              o = i.func;
            if (null == o || o == t) return i.name;
          }
          return e;
        }
        function Mo(t) {
          return (le.call(pr, 'placeholder') ? pr : t).placeholder;
        }
        function Po() {
          var t = pr.iteratee || jc;
          return (
            (t = t === jc ? ci : t),
            arguments.length ? t(arguments[0], arguments[1]) : t
          );
        }
        function No(t, e) {
          var n,
            r,
            i = t.__data__;
          return ('string' == (r = typeof (n = e)) ||
          'number' == r ||
          'symbol' == r ||
          'boolean' == r
          ? '__proto__' !== n
          : null === n)
            ? i['string' == typeof e ? 'string' : 'hash']
            : i.map;
        }
        function Ro(t) {
          for (var e = ic(t), n = e.length; n--; ) {
            var r = e[n],
              i = t[r];
            e[n] = [r, i, Zo(i)];
          }
          return e;
        }
        function Lo(t, e) {
          var r = (function(t, e) {
            return null == t ? n : t[e];
          })(t, e);
          return ui(r) ? r : n;
        }
        var Vo = Vn
            ? function(t) {
                return null == t
                  ? []
                  : ((t = ee(t)),
                    Ye(Vn(t), function(e) {
                      return Me.call(t, e);
                    }));
              }
            : zc,
          Uo = Vn
            ? function(t) {
                for (var e = []; t; ) Ze(e, Vo(t)), (t = Be(t));
                return e;
              }
            : zc,
          zo = Zr;
        function qo(t, e, n) {
          for (var r = -1, i = (e = Ki(e, t)).length, o = !1; ++r < i; ) {
            var s = ls(e[r]);
            if (!(o = null != t && n(t, s))) break;
            t = t[s];
          }
          return o || ++r != i
            ? o
            : !!(i = null == t ? 0 : t.length) &&
                Fu(i) &&
                Ko(s, i) &&
                (yu(t) || vu(t));
        }
        function Wo(t) {
          return 'function' != typeof t.constructor || Jo(t) ? {} : dr(Be(t));
        }
        function $o(t) {
          return yu(t) || vu(t) || !!(nn && t && t[nn]);
        }
        function Ko(t, e) {
          var n = typeof t;
          return (
            !!(e = null == e ? B : e) &&
            ('number' == n || ('symbol' != n && Kt.test(t))) &&
            t > -1 &&
            t % 1 == 0 &&
            t < e
          );
        }
        function Go(t, e, n) {
          if (!Su(n)) return !1;
          var r = typeof e;
          return (
            !!('number' == r
              ? mu(n) && Ko(e, n.length)
              : 'string' == r && e in n) && pu(n[e], t)
          );
        }
        function Yo(t, e) {
          if (yu(t)) return !1;
          var n = typeof t;
          return (
            !(
              'number' != n &&
              'symbol' != n &&
              'boolean' != n &&
              null != t &&
              !Mu(t)
            ) ||
            Ot.test(t) || !St.test(t) || (null != e && t in ee(e))
          );
        }
        function Ho(t) {
          var e = To(t),
            n = pr[e];
          if ('function' != typeof n || !(e in yr.prototype)) return !1;
          if (t === n) return !0;
          var r = Io(n);
          return !!r && t === r[0];
        }
        ((Jn && zo(new Jn(new ArrayBuffer(1))) != ut) ||
          (Zn && zo(new Zn()) != Y) ||
          (Xn && '[object Promise]' != zo(Xn.resolve())) ||
          (tr && zo(new tr()) != tt) ||
          (er && zo(new er()) != it)) &&
          (zo = function(t) {
            var e = Zr(t),
              r = e == J ? t.constructor : n,
              i = r ? hs(r) : '';
            if (i)
              switch (i) {
                case or:
                  return ut;
                case sr:
                  return Y;
                case ur:
                  return '[object Promise]';
                case cr:
                  return tt;
                case ar:
                  return it;
              }
            return e;
          });
        var Qo = ce ? xu : qc;
        function Jo(t) {
          var e = t && t.constructor;
          return t === (('function' == typeof e && e.prototype) || ue);
        }
        function Zo(t) {
          return t == t && !Su(t);
        }
        function Xo(t, e) {
          return function(r) {
            return null != r && r[t] === e && (e !== n || t in ee(r));
          };
        }
        function ts(t, e, r) {
          return (
            (e = $n(e === n ? t.length - 1 : e, 0)),
            function() {
              for (
                var n = arguments, i = -1, o = $n(n.length - e, 0), s = Qt(o);
                ++i < o;

              )
                s[i] = n[e + i];
              i = -1;
              for (var u = Qt(e + 1); ++i < e; ) u[i] = n[i];
              return (u[e] = r(s)), qe(t, this, u);
            }
          );
        }
        function es(t, e) {
          return e.length < 2 ? t : Qr(t, Ai(e, 0, -1));
        }
        function ns(t, e) {
          if (
            ('constructor' !== e || 'function' != typeof t[e]) &&
            '__proto__' != e
          )
            return t[e];
        }
        var rs = us(Si),
          is =
            Nn ||
            function(t, e) {
              return je.setTimeout(t, e);
            },
          os = us(Oi);
        function ss(t, e, n) {
          var r = e + '';
          return os(
            t,
            (function(t, e) {
              var n = e.length;
              if (!n) return t;
              var r = n - 1;
              return (
                (e[r] = (n > 1 ? '& ' : '') + e[r]),
                (e = e.join(n > 2 ? ', ' : ' ')),
                t.replace(Mt, '{\n/* [wrapped with ' + e + '] */\n')
              );
            })(
              r,
              (function(t, e) {
                return (
                  $e(R, function(n) {
                    var r = '_.' + n[0];
                    e & n[1] && !He(t, r) && t.push(r);
                  }),
                  t.sort()
                );
              })(
                (function(t) {
                  var e = t.match(Pt);
                  return e ? e[1].split(Nt) : [];
                })(r),
                n
              )
            )
          );
        }
        function us(t) {
          var e = 0,
            r = 0;
          return function() {
            var i = Gn(),
              o = O - (i - r);
            if (((r = i), o > 0)) {
              if (++e >= S) return arguments[0];
            } else e = 0;
            return t.apply(n, arguments);
          };
        }
        function cs(t, e) {
          var r = -1,
            i = t.length,
            o = i - 1;
          for (e = e === n ? i : e; ++r < e; ) {
            var s = wi(r, o),
              u = t[s];
            (t[s] = t[r]), (t[r] = u);
          }
          return (t.length = e), t;
        }
        var as = (function(t) {
          var e = uu(t, function(t) {
              return n.size === u && n.clear(), t;
            }),
            n = e.cache;
          return e;
        })(function(t) {
          var e = [];
          return (
            46 === t.charCodeAt(0) && e.push(''),
            t.replace(kt, function(t, n, r, i) {
              e.push(r ? i.replace(Lt, '$1') : n || t);
            }),
            e
          );
        });
        function ls(t) {
          if ('string' == typeof t || Mu(t)) return t;
          var e = t + '';
          return '0' == e && 1 / t == -j ? '-0' : e;
        }
        function hs(t) {
          if (null != t) {
            try {
              return ae.call(t);
            } catch (t) {}
            try {
              return t + '';
            } catch (t) {}
          }
          return '';
        }
        function fs(t) {
          if (t instanceof yr) return t.clone();
          var e = new vr(t.__wrapped__, t.__chain__);
          return (
            (e.__actions__ = no(t.__actions__)),
            (e.__index__ = t.__index__),
            (e.__values__ = t.__values__),
            e
          );
        }
        var ps = Ci(function(t, e) {
            return Du(t) ? Rr(t, Wr(e, 1, Du, !0)) : [];
          }),
          ds = Ci(function(t, e) {
            var r = Cs(e);
            return (
              Du(r) && (r = n), Du(t) ? Rr(t, Wr(e, 1, Du, !0), Po(r, 2)) : []
            );
          }),
          bs = Ci(function(t, e) {
            var r = Cs(e);
            return Du(r) && (r = n), Du(t) ? Rr(t, Wr(e, 1, Du, !0), n, r) : [];
          });
        function vs(t, e, n) {
          var r = null == t ? 0 : t.length;
          if (!r) return -1;
          var i = null == n ? 0 : Uu(n);
          return i < 0 && (i = $n(r + i, 0)), on(t, Po(e, 3), i);
        }
        function ys(t, e, r) {
          var i = null == t ? 0 : t.length;
          if (!i) return -1;
          var o = i - 1;
          return (
            r !== n && ((o = Uu(r)), (o = r < 0 ? $n(i + o, 0) : Kn(o, i - 1))),
            on(t, Po(e, 3), o, !0)
          );
        }
        function gs(t) {
          return (null == t ? 0 : t.length) ? Wr(t, 1) : [];
        }
        function ms(t) {
          return t && t.length ? t[0] : n;
        }
        var Ds = Ci(function(t) {
            var e = Je(t, Wi);
            return e.length && e[0] === t[0] ? ni(e) : [];
          }),
          ws = Ci(function(t) {
            var e = Cs(t),
              r = Je(t, Wi);
            return (
              e === Cs(r) ? (e = n) : r.pop(),
              r.length && r[0] === t[0] ? ni(r, Po(e, 2)) : []
            );
          }),
          _s = Ci(function(t) {
            var e = Cs(t),
              r = Je(t, Wi);
            return (
              (e = 'function' == typeof e ? e : n) && r.pop(),
              r.length && r[0] === t[0] ? ni(r, n, e) : []
            );
          });
        function Cs(t) {
          var e = null == t ? 0 : t.length;
          return e ? t[e - 1] : n;
        }
        var xs = Ci(Es);
        function Es(t, e) {
          return t && t.length && e && e.length ? mi(t, e) : t;
        }
        var Fs = Ao(function(t, e) {
          var n = null == t ? 0 : t.length,
            r = Ir(t, e);
          return (
            Di(
              t,
              Je(e, function(t) {
                return Ko(t, n) ? +t : t;
              }).sort(Xi)
            ),
            r
          );
        });
        function Ss(t) {
          return null == t ? t : Qn.call(t);
        }
        var Os = Ci(function(t) {
            return Ni(Wr(t, 1, Du, !0));
          }),
          ks = Ci(function(t) {
            var e = Cs(t);
            return Du(e) && (e = n), Ni(Wr(t, 1, Du, !0), Po(e, 2));
          }),
          As = Ci(function(t) {
            var e = Cs(t);
            return (
              (e = 'function' == typeof e ? e : n), Ni(Wr(t, 1, Du, !0), n, e)
            );
          });
        function js(t) {
          if (!t || !t.length) return [];
          var e = 0;
          return (
            (t = Ye(t, function(t) {
              if (Du(t)) return (e = $n(t.length, e)), !0;
            })),
            dn(e, function(e) {
              return Je(t, ln(e));
            })
          );
        }
        function Bs(t, e) {
          if (!t || !t.length) return [];
          var r = js(t);
          return null == e
            ? r
            : Je(r, function(t) {
                return qe(e, n, t);
              });
        }
        var Is = Ci(function(t, e) {
            return Du(t) ? Rr(t, e) : [];
          }),
          Ts = Ci(function(t) {
            return zi(Ye(t, Du));
          }),
          Ms = Ci(function(t) {
            var e = Cs(t);
            return Du(e) && (e = n), zi(Ye(t, Du), Po(e, 2));
          }),
          Ps = Ci(function(t) {
            var e = Cs(t);
            return (e = 'function' == typeof e ? e : n), zi(Ye(t, Du), n, e);
          }),
          Ns = Ci(js);
        var Rs = Ci(function(t) {
          var e = t.length,
            r = e > 1 ? t[e - 1] : n;
          return (r = 'function' == typeof r ? (t.pop(), r) : n), Bs(t, r);
        });
        function Ls(t) {
          var e = pr(t);
          return (e.__chain__ = !0), e;
        }
        function Vs(t, e) {
          return e(t);
        }
        var Us = Ao(function(t) {
          var e = t.length,
            r = e ? t[0] : 0,
            i = this.__wrapped__,
            o = function(e) {
              return Ir(e, t);
            };
          return !(e > 1 || this.__actions__.length) && i instanceof yr && Ko(r)
            ? ((i = i.slice(r, +r + (e ? 1 : 0))).__actions__.push({
                func: Vs,
                args: [o],
                thisArg: n
              }),
              new vr(i, this.__chain__).thru(function(t) {
                return e && !t.length && t.push(n), t;
              }))
            : this.thru(o);
        });
        var zs = io(function(t, e, n) {
          le.call(t, n) ? ++t[n] : Br(t, n, 1);
        });
        var qs = ho(vs),
          Ws = ho(ys);
        function $s(t, e) {
          return (yu(t) ? $e : Lr)(t, Po(e, 3));
        }
        function Ks(t, e) {
          return (yu(t) ? Ke : Vr)(t, Po(e, 3));
        }
        var Gs = io(function(t, e, n) {
          le.call(t, n) ? t[n].push(e) : Br(t, n, [e]);
        });
        var Ys = Ci(function(t, e, n) {
            var r = -1,
              i = 'function' == typeof e,
              o = mu(t) ? Qt(t.length) : [];
            return (
              Lr(t, function(t) {
                o[++r] = i ? qe(e, t, n) : ri(t, e, n);
              }),
              o
            );
          }),
          Hs = io(function(t, e, n) {
            Br(t, n, e);
          });
        function Qs(t, e) {
          return (yu(t) ? Je : fi)(t, Po(e, 3));
        }
        var Js = io(
          function(t, e, n) {
            t[n ? 0 : 1].push(e);
          },
          function() {
            return [[], []];
          }
        );
        var Zs = Ci(function(t, e) {
            if (null == t) return [];
            var n = e.length;
            return (
              n > 1 && Go(t, e[0], e[1])
                ? (e = [])
                : n > 2 && Go(e[0], e[1], e[2]) && (e = [e[0]]),
              yi(t, Wr(e, 1), [])
            );
          }),
          Xs =
            Pn ||
            function() {
              return je.Date.now();
            };
        function tu(t, e, r) {
          return (
            (e = r ? n : e),
            (e = t && null == e ? t.length : e),
            Eo(t, w, n, n, n, n, e)
          );
        }
        function eu(t, e) {
          var r;
          if ('function' != typeof e) throw new ie(o);
          return (
            (t = Uu(t)),
            function() {
              return (
                --t > 0 && (r = e.apply(this, arguments)), t <= 1 && (e = n), r
              );
            }
          );
        }
        var nu = Ci(function(t, e, n) {
            var r = d;
            if (n.length) {
              var i = Fn(n, Mo(nu));
              r |= m;
            }
            return Eo(t, r, e, n, i);
          }),
          ru = Ci(function(t, e, n) {
            var r = d | b;
            if (n.length) {
              var i = Fn(n, Mo(ru));
              r |= m;
            }
            return Eo(e, r, t, n, i);
          });
        function iu(t, e, r) {
          var i,
            s,
            u,
            c,
            a,
            l,
            h = 0,
            f = !1,
            p = !1,
            d = !0;
          if ('function' != typeof t) throw new ie(o);
          function b(e) {
            var r = i,
              o = s;
            return (i = s = n), (h = e), (c = t.apply(o, r));
          }
          function v(t) {
            var r = t - l;
            return l === n || r >= e || r < 0 || (p && t - h >= u);
          }
          function y() {
            var t = Xs();
            if (v(t)) return g(t);
            a = is(
              y,
              (function(t) {
                var n = e - (t - l);
                return p ? Kn(n, u - (t - h)) : n;
              })(t)
            );
          }
          function g(t) {
            return (a = n), d && i ? b(t) : ((i = s = n), c);
          }
          function m() {
            var t = Xs(),
              r = v(t);
            if (((i = arguments), (s = this), (l = t), r)) {
              if (a === n)
                return (function(t) {
                  return (h = t), (a = is(y, e)), f ? b(t) : c;
                })(l);
              if (p) return Hi(a), (a = is(y, e)), b(l);
            }
            return a === n && (a = is(y, e)), c;
          }
          return (
            (e = qu(e) || 0),
            Su(r) &&
              ((f = !!r.leading),
              (u = (p = 'maxWait' in r) ? $n(qu(r.maxWait) || 0, e) : u),
              (d = 'trailing' in r ? !!r.trailing : d)),
            (m.cancel = function() {
              a !== n && Hi(a), (h = 0), (i = l = s = a = n);
            }),
            (m.flush = function() {
              return a === n ? c : g(Xs());
            }),
            m
          );
        }
        var ou = Ci(function(t, e) {
            return Nr(t, 1, e);
          }),
          su = Ci(function(t, e, n) {
            return Nr(t, qu(e) || 0, n);
          });
        function uu(t, e) {
          if ('function' != typeof t || (null != e && 'function' != typeof e))
            throw new ie(o);
          var n = function() {
            var r = arguments,
              i = e ? e.apply(this, r) : r[0],
              o = n.cache;
            if (o.has(i)) return o.get(i);
            var s = t.apply(this, r);
            return (n.cache = o.set(i, s) || o), s;
          };
          return (n.cache = new (uu.Cache || Dr)()), n;
        }
        function cu(t) {
          if ('function' != typeof t) throw new ie(o);
          return function() {
            var e = arguments;
            switch (e.length) {
              case 0:
                return !t.call(this);
              case 1:
                return !t.call(this, e[0]);
              case 2:
                return !t.call(this, e[0], e[1]);
              case 3:
                return !t.call(this, e[0], e[1], e[2]);
            }
            return !t.apply(this, e);
          };
        }
        uu.Cache = Dr;
        var au = Gi(function(t, e) {
            var n = (e =
              1 == e.length && yu(e[0])
                ? Je(e[0], bn(Po()))
                : Je(Wr(e, 1), bn(Po()))).length;
            return Ci(function(r) {
              for (var i = -1, o = Kn(r.length, n); ++i < o; )
                r[i] = e[i].call(this, r[i]);
              return qe(t, this, r);
            });
          }),
          lu = Ci(function(t, e) {
            var r = Fn(e, Mo(lu));
            return Eo(t, m, n, e, r);
          }),
          hu = Ci(function(t, e) {
            var r = Fn(e, Mo(hu));
            return Eo(t, D, n, e, r);
          }),
          fu = Ao(function(t, e) {
            return Eo(t, _, n, n, n, e);
          });
        function pu(t, e) {
          return t === e || (t != t && e != e);
        }
        var du = Do(Xr),
          bu = Do(function(t, e) {
            return t >= e;
          }),
          vu = ii(
            (function() {
              return arguments;
            })()
          )
            ? ii
            : function(t) {
                return Ou(t) && le.call(t, 'callee') && !Me.call(t, 'callee');
              },
          yu = Qt.isArray,
          gu = Ne
            ? bn(Ne)
            : function(t) {
                return Ou(t) && Zr(t) == st;
              };
        function mu(t) {
          return null != t && Fu(t.length) && !xu(t);
        }
        function Du(t) {
          return Ou(t) && mu(t);
        }
        var wu = Un || qc,
          _u = Re
            ? bn(Re)
            : function(t) {
                return Ou(t) && Zr(t) == q;
              };
        function Cu(t) {
          if (!Ou(t)) return !1;
          var e = Zr(t);
          return (
            e == $ ||
            e == W ||
            ('string' == typeof t.message &&
              'string' == typeof t.name &&
              !ju(t))
          );
        }
        function xu(t) {
          if (!Su(t)) return !1;
          var e = Zr(t);
          return e == K || e == G || e == U || e == Z;
        }
        function Eu(t) {
          return 'number' == typeof t && t == Uu(t);
        }
        function Fu(t) {
          return 'number' == typeof t && t > -1 && t % 1 == 0 && t <= B;
        }
        function Su(t) {
          var e = typeof t;
          return null != t && ('object' == e || 'function' == e);
        }
        function Ou(t) {
          return null != t && 'object' == typeof t;
        }
        var ku = Le
          ? bn(Le)
          : function(t) {
              return Ou(t) && zo(t) == Y;
            };
        function Au(t) {
          return 'number' == typeof t || (Ou(t) && Zr(t) == H);
        }
        function ju(t) {
          if (!Ou(t) || Zr(t) != J) return !1;
          var e = Be(t);
          if (null === e) return !0;
          var n = le.call(e, 'constructor') && e.constructor;
          return 'function' == typeof n && n instanceof n && ae.call(n) == de;
        }
        var Bu = Ve
          ? bn(Ve)
          : function(t) {
              return Ou(t) && Zr(t) == X;
            };
        var Iu = Ue
          ? bn(Ue)
          : function(t) {
              return Ou(t) && zo(t) == tt;
            };
        function Tu(t) {
          return 'string' == typeof t || (!yu(t) && Ou(t) && Zr(t) == et);
        }
        function Mu(t) {
          return 'symbol' == typeof t || (Ou(t) && Zr(t) == nt);
        }
        var Pu = ze
          ? bn(ze)
          : function(t) {
              return Ou(t) && Fu(t.length) && !!xe[Zr(t)];
            };
        var Nu = Do(hi),
          Ru = Do(function(t, e) {
            return t <= e;
          });
        function Lu(t) {
          if (!t) return [];
          if (mu(t)) return Tu(t) ? An(t) : no(t);
          if (hn && t[hn])
            return (function(t) {
              for (var e, n = []; !(e = t.next()).done; ) n.push(e.value);
              return n;
            })(t[hn]());
          var e = zo(t);
          return (e == Y ? xn : e == tt ? Sn : pc)(t);
        }
        function Vu(t) {
          return t
            ? (t = qu(t)) === j || t === -j
              ? (t < 0 ? -1 : 1) * I
              : t == t
              ? t
              : 0
            : 0 === t
            ? t
            : 0;
        }
        function Uu(t) {
          var e = Vu(t),
            n = e % 1;
          return e == e ? (n ? e - n : e) : 0;
        }
        function zu(t) {
          return t ? Tr(Uu(t), 0, M) : 0;
        }
        function qu(t) {
          if ('number' == typeof t) return t;
          if (Mu(t)) return T;
          if (Su(t)) {
            var e = 'function' == typeof t.valueOf ? t.valueOf() : t;
            t = Su(e) ? e + '' : e;
          }
          if ('string' != typeof t) return 0 === t ? t : +t;
          t = t.replace(Bt, '');
          var n = qt.test(t);
          return n || $t.test(t)
            ? Oe(t.slice(2), n ? 2 : 8)
            : zt.test(t)
            ? T
            : +t;
        }
        function Wu(t) {
          return ro(t, oc(t));
        }
        function $u(t) {
          return null == t ? '' : Pi(t);
        }
        var Ku = oo(function(t, e) {
            if (Jo(e) || mu(e)) ro(e, ic(e), t);
            else for (var n in e) le.call(e, n) && Or(t, n, e[n]);
          }),
          Gu = oo(function(t, e) {
            ro(e, oc(e), t);
          }),
          Yu = oo(function(t, e, n, r) {
            ro(e, oc(e), t, r);
          }),
          Hu = oo(function(t, e, n, r) {
            ro(e, ic(e), t, r);
          }),
          Qu = Ao(Ir);
        var Ju = Ci(function(t, e) {
            t = ee(t);
            var r = -1,
              i = e.length,
              o = i > 2 ? e[2] : n;
            for (o && Go(e[0], e[1], o) && (i = 1); ++r < i; )
              for (var s = e[r], u = oc(s), c = -1, a = u.length; ++c < a; ) {
                var l = u[c],
                  h = t[l];
                (h === n || (pu(h, ue[l]) && !le.call(t, l))) && (t[l] = s[l]);
              }
            return t;
          }),
          Zu = Ci(function(t) {
            return t.push(n, So), qe(uc, n, t);
          });
        function Xu(t, e, r) {
          var i = null == t ? n : Qr(t, e);
          return i === n ? r : i;
        }
        function tc(t, e) {
          return null != t && qo(t, e, ei);
        }
        var ec = bo(function(t, e, n) {
            null != e && 'function' != typeof e.toString && (e = pe.call(e)),
              (t[e] = n);
          }, Sc(Ac)),
          nc = bo(function(t, e, n) {
            null != e && 'function' != typeof e.toString && (e = pe.call(e)),
              le.call(t, e) ? t[e].push(n) : (t[e] = [n]);
          }, Po),
          rc = Ci(ri);
        function ic(t) {
          return mu(t) ? Cr(t) : ai(t);
        }
        function oc(t) {
          return mu(t) ? Cr(t, !0) : li(t);
        }
        var sc = oo(function(t, e, n) {
            bi(t, e, n);
          }),
          uc = oo(function(t, e, n, r) {
            bi(t, e, n, r);
          }),
          cc = Ao(function(t, e) {
            var n = {};
            if (null == t) return n;
            var r = !1;
            (e = Je(e, function(e) {
              return (e = Ki(e, t)), r || (r = e.length > 1), e;
            })),
              ro(t, Bo(t), n),
              r && (n = Mr(n, a | l | h, Oo));
            for (var i = e.length; i--; ) Ri(n, e[i]);
            return n;
          });
        var ac = Ao(function(t, e) {
          return null == t
            ? {}
            : (function(t, e) {
                return gi(t, e, function(e, n) {
                  return tc(t, n);
                });
              })(t, e);
        });
        function lc(t, e) {
          if (null == t) return {};
          var n = Je(Bo(t), function(t) {
            return [t];
          });
          return (
            (e = Po(e)),
            gi(t, n, function(t, n) {
              return e(t, n[0]);
            })
          );
        }
        var hc = xo(ic),
          fc = xo(oc);
        function pc(t) {
          return null == t ? [] : vn(t, ic(t));
        }
        var dc = ao(function(t, e, n) {
          return (e = e.toLowerCase()), t + (n ? bc(e) : e);
        });
        function bc(t) {
          return Cc($u(t).toLowerCase());
        }
        function vc(t) {
          return (t = $u(t)) && t.replace(Gt, Dn).replace(ye, '');
        }
        var yc = ao(function(t, e, n) {
            return t + (n ? '-' : '') + e.toLowerCase();
          }),
          gc = ao(function(t, e, n) {
            return t + (n ? ' ' : '') + e.toLowerCase();
          }),
          mc = co('toLowerCase');
        var Dc = ao(function(t, e, n) {
          return t + (n ? '_' : '') + e.toLowerCase();
        });
        var wc = ao(function(t, e, n) {
          return t + (n ? ' ' : '') + Cc(e);
        });
        var _c = ao(function(t, e, n) {
            return t + (n ? ' ' : '') + e.toUpperCase();
          }),
          Cc = co('toUpperCase');
        function xc(t, e, r) {
          return (
            (t = $u(t)),
            (e = r ? n : e) === n
              ? (function(t) {
                  return we.test(t);
                })(t)
                ? (function(t) {
                    return t.match(me) || [];
                  })(t)
                : (function(t) {
                    return t.match(Rt) || [];
                  })(t)
              : t.match(e) || []
          );
        }
        var Ec = Ci(function(t, e) {
            try {
              return qe(t, n, e);
            } catch (t) {
              return Cu(t) ? t : new Zt(t);
            }
          }),
          Fc = Ao(function(t, e) {
            return (
              $e(e, function(e) {
                (e = ls(e)), Br(t, e, nu(t[e], t));
              }),
              t
            );
          });
        function Sc(t) {
          return function() {
            return t;
          };
        }
        var Oc = fo(),
          kc = fo(!0);
        function Ac(t) {
          return t;
        }
        function jc(t) {
          return ci('function' == typeof t ? t : Mr(t, a));
        }
        var Bc = Ci(function(t, e) {
            return function(n) {
              return ri(n, t, e);
            };
          }),
          Ic = Ci(function(t, e) {
            return function(n) {
              return ri(t, n, e);
            };
          });
        function Tc(t, e, n) {
          var r = ic(e),
            i = Hr(e, r);
          null != n ||
            (Su(e) && (i.length || !r.length)) ||
            ((n = e), (e = t), (t = this), (i = Hr(e, ic(e))));
          var o = !(Su(n) && 'chain' in n && !n.chain),
            s = xu(t);
          return (
            $e(i, function(n) {
              var r = e[n];
              (t[n] = r),
                s &&
                  (t.prototype[n] = function() {
                    var e = this.__chain__;
                    if (o || e) {
                      var n = t(this.__wrapped__),
                        i = (n.__actions__ = no(this.__actions__));
                      return (
                        i.push({ func: r, args: arguments, thisArg: t }),
                        (n.__chain__ = e),
                        n
                      );
                    }
                    return r.apply(t, Ze([this.value()], arguments));
                  });
            }),
            t
          );
        }
        function Mc() {}
        var Pc = yo(Je),
          Nc = yo(Ge),
          Rc = yo(en);
        function Lc(t) {
          return Yo(t)
            ? ln(ls(t))
            : (function(t) {
                return function(e) {
                  return Qr(e, t);
                };
              })(t);
        }
        var Vc = mo(),
          Uc = mo(!0);
        function zc() {
          return [];
        }
        function qc() {
          return !1;
        }
        var Wc = vo(function(t, e) {
            return t + e;
          }, 0),
          $c = _o('ceil'),
          Kc = vo(function(t, e) {
            return t / e;
          }, 1),
          Gc = _o('floor');
        var Yc = vo(function(t, e) {
            return t * e;
          }, 1),
          Hc = _o('round'),
          Qc = vo(function(t, e) {
            return t - e;
          }, 0);
        return (
          (pr.after = function(t, e) {
            if ('function' != typeof e) throw new ie(o);
            return (
              (t = Uu(t)),
              function() {
                if (--t < 1) return e.apply(this, arguments);
              }
            );
          }),
          (pr.ary = tu),
          (pr.assign = Ku),
          (pr.assignIn = Gu),
          (pr.assignInWith = Yu),
          (pr.assignWith = Hu),
          (pr.at = Qu),
          (pr.before = eu),
          (pr.bind = nu),
          (pr.bindAll = Fc),
          (pr.bindKey = ru),
          (pr.castArray = function() {
            if (!arguments.length) return [];
            var t = arguments[0];
            return yu(t) ? t : [t];
          }),
          (pr.chain = Ls),
          (pr.chunk = function(t, e, r) {
            e = (r ? Go(t, e, r) : e === n) ? 1 : $n(Uu(e), 0);
            var i = null == t ? 0 : t.length;
            if (!i || e < 1) return [];
            for (var o = 0, s = 0, u = Qt(Rn(i / e)); o < i; )
              u[s++] = Ai(t, o, (o += e));
            return u;
          }),
          (pr.compact = function(t) {
            for (
              var e = -1, n = null == t ? 0 : t.length, r = 0, i = [];
              ++e < n;

            ) {
              var o = t[e];
              o && (i[r++] = o);
            }
            return i;
          }),
          (pr.concat = function() {
            var t = arguments.length;
            if (!t) return [];
            for (var e = Qt(t - 1), n = arguments[0], r = t; r--; )
              e[r - 1] = arguments[r];
            return Ze(yu(n) ? no(n) : [n], Wr(e, 1));
          }),
          (pr.cond = function(t) {
            var e = null == t ? 0 : t.length,
              n = Po();
            return (
              (t = e
                ? Je(t, function(t) {
                    if ('function' != typeof t[1]) throw new ie(o);
                    return [n(t[0]), t[1]];
                  })
                : []),
              Ci(function(n) {
                for (var r = -1; ++r < e; ) {
                  var i = t[r];
                  if (qe(i[0], this, n)) return qe(i[1], this, n);
                }
              })
            );
          }),
          (pr.conforms = function(t) {
            return (function(t) {
              var e = ic(t);
              return function(n) {
                return Pr(n, t, e);
              };
            })(Mr(t, a));
          }),
          (pr.constant = Sc),
          (pr.countBy = zs),
          (pr.create = function(t, e) {
            var n = dr(t);
            return null == e ? n : jr(n, e);
          }),
          (pr.curry = function t(e, r, i) {
            var o = Eo(e, y, n, n, n, n, n, (r = i ? n : r));
            return (o.placeholder = t.placeholder), o;
          }),
          (pr.curryRight = function t(e, r, i) {
            var o = Eo(e, g, n, n, n, n, n, (r = i ? n : r));
            return (o.placeholder = t.placeholder), o;
          }),
          (pr.debounce = iu),
          (pr.defaults = Ju),
          (pr.defaultsDeep = Zu),
          (pr.defer = ou),
          (pr.delay = su),
          (pr.difference = ps),
          (pr.differenceBy = ds),
          (pr.differenceWith = bs),
          (pr.drop = function(t, e, r) {
            var i = null == t ? 0 : t.length;
            return i
              ? Ai(t, (e = r || e === n ? 1 : Uu(e)) < 0 ? 0 : e, i)
              : [];
          }),
          (pr.dropRight = function(t, e, r) {
            var i = null == t ? 0 : t.length;
            return i
              ? Ai(t, 0, (e = i - (e = r || e === n ? 1 : Uu(e))) < 0 ? 0 : e)
              : [];
          }),
          (pr.dropRightWhile = function(t, e) {
            return t && t.length ? Vi(t, Po(e, 3), !0, !0) : [];
          }),
          (pr.dropWhile = function(t, e) {
            return t && t.length ? Vi(t, Po(e, 3), !0) : [];
          }),
          (pr.fill = function(t, e, r, i) {
            var o = null == t ? 0 : t.length;
            return o
              ? (r && 'number' != typeof r && Go(t, e, r) && ((r = 0), (i = o)),
                (function(t, e, r, i) {
                  var o = t.length;
                  for (
                    (r = Uu(r)) < 0 && (r = -r > o ? 0 : o + r),
                      (i = i === n || i > o ? o : Uu(i)) < 0 && (i += o),
                      i = r > i ? 0 : zu(i);
                    r < i;

                  )
                    t[r++] = e;
                  return t;
                })(t, e, r, i))
              : [];
          }),
          (pr.filter = function(t, e) {
            return (yu(t) ? Ye : qr)(t, Po(e, 3));
          }),
          (pr.flatMap = function(t, e) {
            return Wr(Qs(t, e), 1);
          }),
          (pr.flatMapDeep = function(t, e) {
            return Wr(Qs(t, e), j);
          }),
          (pr.flatMapDepth = function(t, e, r) {
            return (r = r === n ? 1 : Uu(r)), Wr(Qs(t, e), r);
          }),
          (pr.flatten = gs),
          (pr.flattenDeep = function(t) {
            return (null == t ? 0 : t.length) ? Wr(t, j) : [];
          }),
          (pr.flattenDepth = function(t, e) {
            return (null == t
            ? 0
            : t.length)
              ? Wr(t, (e = e === n ? 1 : Uu(e)))
              : [];
          }),
          (pr.flip = function(t) {
            return Eo(t, x);
          }),
          (pr.flow = Oc),
          (pr.flowRight = kc),
          (pr.fromPairs = function(t) {
            for (var e = -1, n = null == t ? 0 : t.length, r = {}; ++e < n; ) {
              var i = t[e];
              r[i[0]] = i[1];
            }
            return r;
          }),
          (pr.functions = function(t) {
            return null == t ? [] : Hr(t, ic(t));
          }),
          (pr.functionsIn = function(t) {
            return null == t ? [] : Hr(t, oc(t));
          }),
          (pr.groupBy = Gs),
          (pr.initial = function(t) {
            return (null == t ? 0 : t.length) ? Ai(t, 0, -1) : [];
          }),
          (pr.intersection = Ds),
          (pr.intersectionBy = ws),
          (pr.intersectionWith = _s),
          (pr.invert = ec),
          (pr.invertBy = nc),
          (pr.invokeMap = Ys),
          (pr.iteratee = jc),
          (pr.keyBy = Hs),
          (pr.keys = ic),
          (pr.keysIn = oc),
          (pr.map = Qs),
          (pr.mapKeys = function(t, e) {
            var n = {};
            return (
              (e = Po(e, 3)),
              Gr(t, function(t, r, i) {
                Br(n, e(t, r, i), t);
              }),
              n
            );
          }),
          (pr.mapValues = function(t, e) {
            var n = {};
            return (
              (e = Po(e, 3)),
              Gr(t, function(t, r, i) {
                Br(n, r, e(t, r, i));
              }),
              n
            );
          }),
          (pr.matches = function(t) {
            return pi(Mr(t, a));
          }),
          (pr.matchesProperty = function(t, e) {
            return di(t, Mr(e, a));
          }),
          (pr.memoize = uu),
          (pr.merge = sc),
          (pr.mergeWith = uc),
          (pr.method = Bc),
          (pr.methodOf = Ic),
          (pr.mixin = Tc),
          (pr.negate = cu),
          (pr.nthArg = function(t) {
            return (
              (t = Uu(t)),
              Ci(function(e) {
                return vi(e, t);
              })
            );
          }),
          (pr.omit = cc),
          (pr.omitBy = function(t, e) {
            return lc(t, cu(Po(e)));
          }),
          (pr.once = function(t) {
            return eu(2, t);
          }),
          (pr.orderBy = function(t, e, r, i) {
            return null == t
              ? []
              : (yu(e) || (e = null == e ? [] : [e]),
                yu((r = i ? n : r)) || (r = null == r ? [] : [r]),
                yi(t, e, r));
          }),
          (pr.over = Pc),
          (pr.overArgs = au),
          (pr.overEvery = Nc),
          (pr.overSome = Rc),
          (pr.partial = lu),
          (pr.partialRight = hu),
          (pr.partition = Js),
          (pr.pick = ac),
          (pr.pickBy = lc),
          (pr.property = Lc),
          (pr.propertyOf = function(t) {
            return function(e) {
              return null == t ? n : Qr(t, e);
            };
          }),
          (pr.pull = xs),
          (pr.pullAll = Es),
          (pr.pullAllBy = function(t, e, n) {
            return t && t.length && e && e.length ? mi(t, e, Po(n, 2)) : t;
          }),
          (pr.pullAllWith = function(t, e, r) {
            return t && t.length && e && e.length ? mi(t, e, n, r) : t;
          }),
          (pr.pullAt = Fs),
          (pr.range = Vc),
          (pr.rangeRight = Uc),
          (pr.rearg = fu),
          (pr.reject = function(t, e) {
            return (yu(t) ? Ye : qr)(t, cu(Po(e, 3)));
          }),
          (pr.remove = function(t, e) {
            var n = [];
            if (!t || !t.length) return n;
            var r = -1,
              i = [],
              o = t.length;
            for (e = Po(e, 3); ++r < o; ) {
              var s = t[r];
              e(s, r, t) && (n.push(s), i.push(r));
            }
            return Di(t, i), n;
          }),
          (pr.rest = function(t, e) {
            if ('function' != typeof t) throw new ie(o);
            return Ci(t, (e = e === n ? e : Uu(e)));
          }),
          (pr.reverse = Ss),
          (pr.sampleSize = function(t, e, r) {
            return (
              (e = (r ? Go(t, e, r) : e === n) ? 1 : Uu(e)),
              (yu(t) ? Er : Ei)(t, e)
            );
          }),
          (pr.set = function(t, e, n) {
            return null == t ? t : Fi(t, e, n);
          }),
          (pr.setWith = function(t, e, r, i) {
            return (
              (i = 'function' == typeof i ? i : n),
              null == t ? t : Fi(t, e, r, i)
            );
          }),
          (pr.shuffle = function(t) {
            return (yu(t) ? Fr : ki)(t);
          }),
          (pr.slice = function(t, e, r) {
            var i = null == t ? 0 : t.length;
            return i
              ? (r && 'number' != typeof r && Go(t, e, r)
                  ? ((e = 0), (r = i))
                  : ((e = null == e ? 0 : Uu(e)), (r = r === n ? i : Uu(r))),
                Ai(t, e, r))
              : [];
          }),
          (pr.sortBy = Zs),
          (pr.sortedUniq = function(t) {
            return t && t.length ? Ti(t) : [];
          }),
          (pr.sortedUniqBy = function(t, e) {
            return t && t.length ? Ti(t, Po(e, 2)) : [];
          }),
          (pr.split = function(t, e, r) {
            return (
              r && 'number' != typeof r && Go(t, e, r) && (e = r = n),
              (r = r === n ? M : r >>> 0)
                ? (t = $u(t)) &&
                  ('string' == typeof e || (null != e && !Bu(e))) &&
                  !(e = Pi(e)) &&
                  Cn(t)
                  ? Yi(An(t), 0, r)
                  : t.split(e, r)
                : []
            );
          }),
          (pr.spread = function(t, e) {
            if ('function' != typeof t) throw new ie(o);
            return (
              (e = null == e ? 0 : $n(Uu(e), 0)),
              Ci(function(n) {
                var r = n[e],
                  i = Yi(n, 0, e);
                return r && Ze(i, r), qe(t, this, i);
              })
            );
          }),
          (pr.tail = function(t) {
            var e = null == t ? 0 : t.length;
            return e ? Ai(t, 1, e) : [];
          }),
          (pr.take = function(t, e, r) {
            return t && t.length
              ? Ai(t, 0, (e = r || e === n ? 1 : Uu(e)) < 0 ? 0 : e)
              : [];
          }),
          (pr.takeRight = function(t, e, r) {
            var i = null == t ? 0 : t.length;
            return i
              ? Ai(t, (e = i - (e = r || e === n ? 1 : Uu(e))) < 0 ? 0 : e, i)
              : [];
          }),
          (pr.takeRightWhile = function(t, e) {
            return t && t.length ? Vi(t, Po(e, 3), !1, !0) : [];
          }),
          (pr.takeWhile = function(t, e) {
            return t && t.length ? Vi(t, Po(e, 3)) : [];
          }),
          (pr.tap = function(t, e) {
            return e(t), t;
          }),
          (pr.throttle = function(t, e, n) {
            var r = !0,
              i = !0;
            if ('function' != typeof t) throw new ie(o);
            return (
              Su(n) &&
                ((r = 'leading' in n ? !!n.leading : r),
                (i = 'trailing' in n ? !!n.trailing : i)),
              iu(t, e, { leading: r, maxWait: e, trailing: i })
            );
          }),
          (pr.thru = Vs),
          (pr.toArray = Lu),
          (pr.toPairs = hc),
          (pr.toPairsIn = fc),
          (pr.toPath = function(t) {
            return yu(t) ? Je(t, ls) : Mu(t) ? [t] : no(as($u(t)));
          }),
          (pr.toPlainObject = Wu),
          (pr.transform = function(t, e, n) {
            var r = yu(t),
              i = r || wu(t) || Pu(t);
            if (((e = Po(e, 4)), null == n)) {
              var o = t && t.constructor;
              n = i ? (r ? new o() : []) : Su(t) && xu(o) ? dr(Be(t)) : {};
            }
            return (
              (i ? $e : Gr)(t, function(t, r, i) {
                return e(n, t, r, i);
              }),
              n
            );
          }),
          (pr.unary = function(t) {
            return tu(t, 1);
          }),
          (pr.union = Os),
          (pr.unionBy = ks),
          (pr.unionWith = As),
          (pr.uniq = function(t) {
            return t && t.length ? Ni(t) : [];
          }),
          (pr.uniqBy = function(t, e) {
            return t && t.length ? Ni(t, Po(e, 2)) : [];
          }),
          (pr.uniqWith = function(t, e) {
            return (
              (e = 'function' == typeof e ? e : n),
              t && t.length ? Ni(t, n, e) : []
            );
          }),
          (pr.unset = function(t, e) {
            return null == t || Ri(t, e);
          }),
          (pr.unzip = js),
          (pr.unzipWith = Bs),
          (pr.update = function(t, e, n) {
            return null == t ? t : Li(t, e, $i(n));
          }),
          (pr.updateWith = function(t, e, r, i) {
            return (
              (i = 'function' == typeof i ? i : n),
              null == t ? t : Li(t, e, $i(r), i)
            );
          }),
          (pr.values = pc),
          (pr.valuesIn = function(t) {
            return null == t ? [] : vn(t, oc(t));
          }),
          (pr.without = Is),
          (pr.words = xc),
          (pr.wrap = function(t, e) {
            return lu($i(e), t);
          }),
          (pr.xor = Ts),
          (pr.xorBy = Ms),
          (pr.xorWith = Ps),
          (pr.zip = Ns),
          (pr.zipObject = function(t, e) {
            return qi(t || [], e || [], Or);
          }),
          (pr.zipObjectDeep = function(t, e) {
            return qi(t || [], e || [], Fi);
          }),
          (pr.zipWith = Rs),
          (pr.entries = hc),
          (pr.entriesIn = fc),
          (pr.extend = Gu),
          (pr.extendWith = Yu),
          Tc(pr, pr),
          (pr.add = Wc),
          (pr.attempt = Ec),
          (pr.camelCase = dc),
          (pr.capitalize = bc),
          (pr.ceil = $c),
          (pr.clamp = function(t, e, r) {
            return (
              r === n && ((r = e), (e = n)),
              r !== n && (r = (r = qu(r)) == r ? r : 0),
              e !== n && (e = (e = qu(e)) == e ? e : 0),
              Tr(qu(t), e, r)
            );
          }),
          (pr.clone = function(t) {
            return Mr(t, h);
          }),
          (pr.cloneDeep = function(t) {
            return Mr(t, a | h);
          }),
          (pr.cloneDeepWith = function(t, e) {
            return Mr(t, a | h, (e = 'function' == typeof e ? e : n));
          }),
          (pr.cloneWith = function(t, e) {
            return Mr(t, h, (e = 'function' == typeof e ? e : n));
          }),
          (pr.conformsTo = function(t, e) {
            return null == e || Pr(t, e, ic(e));
          }),
          (pr.deburr = vc),
          (pr.defaultTo = function(t, e) {
            return null == t || t != t ? e : t;
          }),
          (pr.divide = Kc),
          (pr.endsWith = function(t, e, r) {
            (t = $u(t)), (e = Pi(e));
            var i = t.length,
              o = (r = r === n ? i : Tr(Uu(r), 0, i));
            return (r -= e.length) >= 0 && t.slice(r, o) == e;
          }),
          (pr.eq = pu),
          (pr.escape = function(t) {
            return (t = $u(t)) && Ct.test(t) ? t.replace(wt, wn) : t;
          }),
          (pr.escapeRegExp = function(t) {
            return (t = $u(t)) && jt.test(t) ? t.replace(At, '\\$&') : t;
          }),
          (pr.every = function(t, e, r) {
            var i = yu(t) ? Ge : Ur;
            return r && Go(t, e, r) && (e = n), i(t, Po(e, 3));
          }),
          (pr.find = qs),
          (pr.findIndex = vs),
          (pr.findKey = function(t, e) {
            return rn(t, Po(e, 3), Gr);
          }),
          (pr.findLast = Ws),
          (pr.findLastIndex = ys),
          (pr.findLastKey = function(t, e) {
            return rn(t, Po(e, 3), Yr);
          }),
          (pr.floor = Gc),
          (pr.forEach = $s),
          (pr.forEachRight = Ks),
          (pr.forIn = function(t, e) {
            return null == t ? t : $r(t, Po(e, 3), oc);
          }),
          (pr.forInRight = function(t, e) {
            return null == t ? t : Kr(t, Po(e, 3), oc);
          }),
          (pr.forOwn = function(t, e) {
            return t && Gr(t, Po(e, 3));
          }),
          (pr.forOwnRight = function(t, e) {
            return t && Yr(t, Po(e, 3));
          }),
          (pr.get = Xu),
          (pr.gt = du),
          (pr.gte = bu),
          (pr.has = function(t, e) {
            return null != t && qo(t, e, ti);
          }),
          (pr.hasIn = tc),
          (pr.head = ms),
          (pr.identity = Ac),
          (pr.includes = function(t, e, n, r) {
            (t = mu(t) ? t : pc(t)), (n = n && !r ? Uu(n) : 0);
            var i = t.length;
            return (
              n < 0 && (n = $n(i + n, 0)),
              Tu(t) ? n <= i && t.indexOf(e, n) > -1 : !!i && sn(t, e, n) > -1
            );
          }),
          (pr.indexOf = function(t, e, n) {
            var r = null == t ? 0 : t.length;
            if (!r) return -1;
            var i = null == n ? 0 : Uu(n);
            return i < 0 && (i = $n(r + i, 0)), sn(t, e, i);
          }),
          (pr.inRange = function(t, e, r) {
            return (
              (e = Vu(e)),
              r === n ? ((r = e), (e = 0)) : (r = Vu(r)),
              (function(t, e, n) {
                return t >= Kn(e, n) && t < $n(e, n);
              })((t = qu(t)), e, r)
            );
          }),
          (pr.invoke = rc),
          (pr.isArguments = vu),
          (pr.isArray = yu),
          (pr.isArrayBuffer = gu),
          (pr.isArrayLike = mu),
          (pr.isArrayLikeObject = Du),
          (pr.isBoolean = function(t) {
            return !0 === t || !1 === t || (Ou(t) && Zr(t) == z);
          }),
          (pr.isBuffer = wu),
          (pr.isDate = _u),
          (pr.isElement = function(t) {
            return Ou(t) && 1 === t.nodeType && !ju(t);
          }),
          (pr.isEmpty = function(t) {
            if (null == t) return !0;
            if (
              mu(t) &&
              (yu(t) ||
                'string' == typeof t ||
                'function' == typeof t.splice ||
                wu(t) ||
                Pu(t) ||
                vu(t))
            )
              return !t.length;
            var e = zo(t);
            if (e == Y || e == tt) return !t.size;
            if (Jo(t)) return !ai(t).length;
            for (var n in t) if (le.call(t, n)) return !1;
            return !0;
          }),
          (pr.isEqual = function(t, e) {
            return oi(t, e);
          }),
          (pr.isEqualWith = function(t, e, r) {
            var i = (r = 'function' == typeof r ? r : n) ? r(t, e) : n;
            return i === n ? oi(t, e, n, r) : !!i;
          }),
          (pr.isError = Cu),
          (pr.isFinite = function(t) {
            return 'number' == typeof t && zn(t);
          }),
          (pr.isFunction = xu),
          (pr.isInteger = Eu),
          (pr.isLength = Fu),
          (pr.isMap = ku),
          (pr.isMatch = function(t, e) {
            return t === e || si(t, e, Ro(e));
          }),
          (pr.isMatchWith = function(t, e, r) {
            return (r = 'function' == typeof r ? r : n), si(t, e, Ro(e), r);
          }),
          (pr.isNaN = function(t) {
            return Au(t) && t != +t;
          }),
          (pr.isNative = function(t) {
            if (Qo(t)) throw new Zt(i);
            return ui(t);
          }),
          (pr.isNil = function(t) {
            return null == t;
          }),
          (pr.isNull = function(t) {
            return null === t;
          }),
          (pr.isNumber = Au),
          (pr.isObject = Su),
          (pr.isObjectLike = Ou),
          (pr.isPlainObject = ju),
          (pr.isRegExp = Bu),
          (pr.isSafeInteger = function(t) {
            return Eu(t) && t >= -B && t <= B;
          }),
          (pr.isSet = Iu),
          (pr.isString = Tu),
          (pr.isSymbol = Mu),
          (pr.isTypedArray = Pu),
          (pr.isUndefined = function(t) {
            return t === n;
          }),
          (pr.isWeakMap = function(t) {
            return Ou(t) && zo(t) == it;
          }),
          (pr.isWeakSet = function(t) {
            return Ou(t) && Zr(t) == ot;
          }),
          (pr.join = function(t, e) {
            return null == t ? '' : qn.call(t, e);
          }),
          (pr.kebabCase = yc),
          (pr.last = Cs),
          (pr.lastIndexOf = function(t, e, r) {
            var i = null == t ? 0 : t.length;
            if (!i) return -1;
            var o = i;
            return (
              r !== n && (o = (o = Uu(r)) < 0 ? $n(i + o, 0) : Kn(o, i - 1)),
              e == e
                ? (function(t, e, n) {
                    for (var r = n + 1; r--; ) if (t[r] === e) return r;
                    return r;
                  })(t, e, o)
                : on(t, cn, o, !0)
            );
          }),
          (pr.lowerCase = gc),
          (pr.lowerFirst = mc),
          (pr.lt = Nu),
          (pr.lte = Ru),
          (pr.max = function(t) {
            return t && t.length ? zr(t, Ac, Xr) : n;
          }),
          (pr.maxBy = function(t, e) {
            return t && t.length ? zr(t, Po(e, 2), Xr) : n;
          }),
          (pr.mean = function(t) {
            return an(t, Ac);
          }),
          (pr.meanBy = function(t, e) {
            return an(t, Po(e, 2));
          }),
          (pr.min = function(t) {
            return t && t.length ? zr(t, Ac, hi) : n;
          }),
          (pr.minBy = function(t, e) {
            return t && t.length ? zr(t, Po(e, 2), hi) : n;
          }),
          (pr.stubArray = zc),
          (pr.stubFalse = qc),
          (pr.stubObject = function() {
            return {};
          }),
          (pr.stubString = function() {
            return '';
          }),
          (pr.stubTrue = function() {
            return !0;
          }),
          (pr.multiply = Yc),
          (pr.nth = function(t, e) {
            return t && t.length ? vi(t, Uu(e)) : n;
          }),
          (pr.noConflict = function() {
            return je._ === this && (je._ = be), this;
          }),
          (pr.noop = Mc),
          (pr.now = Xs),
          (pr.pad = function(t, e, n) {
            t = $u(t);
            var r = (e = Uu(e)) ? kn(t) : 0;
            if (!e || r >= e) return t;
            var i = (e - r) / 2;
            return go(Ln(i), n) + t + go(Rn(i), n);
          }),
          (pr.padEnd = function(t, e, n) {
            t = $u(t);
            var r = (e = Uu(e)) ? kn(t) : 0;
            return e && r < e ? t + go(e - r, n) : t;
          }),
          (pr.padStart = function(t, e, n) {
            t = $u(t);
            var r = (e = Uu(e)) ? kn(t) : 0;
            return e && r < e ? go(e - r, n) + t : t;
          }),
          (pr.parseInt = function(t, e, n) {
            return (
              n || null == e ? (e = 0) : e && (e = +e),
              Yn($u(t).replace(It, ''), e || 0)
            );
          }),
          (pr.random = function(t, e, r) {
            if (
              (r && 'boolean' != typeof r && Go(t, e, r) && (e = r = n),
              r === n &&
                ('boolean' == typeof e
                  ? ((r = e), (e = n))
                  : 'boolean' == typeof t && ((r = t), (t = n))),
              t === n && e === n
                ? ((t = 0), (e = 1))
                : ((t = Vu(t)), e === n ? ((e = t), (t = 0)) : (e = Vu(e))),
              t > e)
            ) {
              var i = t;
              (t = e), (e = i);
            }
            if (r || t % 1 || e % 1) {
              var o = Hn();
              return Kn(t + o * (e - t + Se('1e-' + ((o + '').length - 1))), e);
            }
            return wi(t, e);
          }),
          (pr.reduce = function(t, e, n) {
            var r = yu(t) ? Xe : fn,
              i = arguments.length < 3;
            return r(t, Po(e, 4), n, i, Lr);
          }),
          (pr.reduceRight = function(t, e, n) {
            var r = yu(t) ? tn : fn,
              i = arguments.length < 3;
            return r(t, Po(e, 4), n, i, Vr);
          }),
          (pr.repeat = function(t, e, r) {
            return (e = (r ? Go(t, e, r) : e === n) ? 1 : Uu(e)), _i($u(t), e);
          }),
          (pr.replace = function() {
            var t = arguments,
              e = $u(t[0]);
            return t.length < 3 ? e : e.replace(t[1], t[2]);
          }),
          (pr.result = function(t, e, r) {
            var i = -1,
              o = (e = Ki(e, t)).length;
            for (o || ((o = 1), (t = n)); ++i < o; ) {
              var s = null == t ? n : t[ls(e[i])];
              s === n && ((i = o), (s = r)), (t = xu(s) ? s.call(t) : s);
            }
            return t;
          }),
          (pr.round = Hc),
          (pr.runInContext = t),
          (pr.sample = function(t) {
            return (yu(t) ? xr : xi)(t);
          }),
          (pr.size = function(t) {
            if (null == t) return 0;
            if (mu(t)) return Tu(t) ? kn(t) : t.length;
            var e = zo(t);
            return e == Y || e == tt ? t.size : ai(t).length;
          }),
          (pr.snakeCase = Dc),
          (pr.some = function(t, e, r) {
            var i = yu(t) ? en : ji;
            return r && Go(t, e, r) && (e = n), i(t, Po(e, 3));
          }),
          (pr.sortedIndex = function(t, e) {
            return Bi(t, e);
          }),
          (pr.sortedIndexBy = function(t, e, n) {
            return Ii(t, e, Po(n, 2));
          }),
          (pr.sortedIndexOf = function(t, e) {
            var n = null == t ? 0 : t.length;
            if (n) {
              var r = Bi(t, e);
              if (r < n && pu(t[r], e)) return r;
            }
            return -1;
          }),
          (pr.sortedLastIndex = function(t, e) {
            return Bi(t, e, !0);
          }),
          (pr.sortedLastIndexBy = function(t, e, n) {
            return Ii(t, e, Po(n, 2), !0);
          }),
          (pr.sortedLastIndexOf = function(t, e) {
            if (null == t ? 0 : t.length) {
              var n = Bi(t, e, !0) - 1;
              if (pu(t[n], e)) return n;
            }
            return -1;
          }),
          (pr.startCase = wc),
          (pr.startsWith = function(t, e, n) {
            return (
              (t = $u(t)),
              (n = null == n ? 0 : Tr(Uu(n), 0, t.length)),
              (e = Pi(e)),
              t.slice(n, n + e.length) == e
            );
          }),
          (pr.subtract = Qc),
          (pr.sum = function(t) {
            return t && t.length ? pn(t, Ac) : 0;
          }),
          (pr.sumBy = function(t, e) {
            return t && t.length ? pn(t, Po(e, 2)) : 0;
          }),
          (pr.template = function(t, e, r) {
            var i = pr.templateSettings;
            r && Go(t, e, r) && (e = n), (t = $u(t)), (e = Yu({}, e, i, Fo));
            var o,
              s,
              u = Yu({}, e.imports, i.imports, Fo),
              c = ic(u),
              a = vn(u, c),
              l = 0,
              h = e.interpolate || Yt,
              f = "__p += '",
              p = ne(
                (e.escape || Yt).source +
                  '|' +
                  h.source +
                  '|' +
                  (h === Ft ? Vt : Yt).source +
                  '|' +
                  (e.evaluate || Yt).source +
                  '|$',
                'g'
              ),
              d =
                '//# sourceURL=' +
                (le.call(e, 'sourceURL')
                  ? (e.sourceURL + '').replace(/[\r\n]/g, ' ')
                  : 'lodash.templateSources[' + ++Ce + ']') +
                '\n';
            t.replace(p, function(e, n, r, i, u, c) {
              return (
                r || (r = i),
                (f += t.slice(l, c).replace(Ht, _n)),
                n && ((o = !0), (f += "' +\n__e(" + n + ") +\n'")),
                u && ((s = !0), (f += "';\n" + u + ";\n__p += '")),
                r &&
                  (f += "' +\n((__t = (" + r + ")) == null ? '' : __t) +\n'"),
                (l = c + e.length),
                e
              );
            }),
              (f += "';\n");
            var b = le.call(e, 'variable') && e.variable;
            b || (f = 'with (obj) {\n' + f + '\n}\n'),
              (f = (s ? f.replace(yt, '') : f)
                .replace(gt, '$1')
                .replace(mt, '$1;')),
              (f =
                'function(' +
                (b || 'obj') +
                ') {\n' +
                (b ? '' : 'obj || (obj = {});\n') +
                "var __t, __p = ''" +
                (o ? ', __e = _.escape' : '') +
                (s
                  ? ", __j = Array.prototype.join;\nfunction print() { __p += __j.call(arguments, '') }\n"
                  : ';\n') +
                f +
                'return __p\n}');
            var v = Ec(function() {
              return Xt(c, d + 'return ' + f).apply(n, a);
            });
            if (((v.source = f), Cu(v))) throw v;
            return v;
          }),
          (pr.times = function(t, e) {
            if ((t = Uu(t)) < 1 || t > B) return [];
            var n = M,
              r = Kn(t, M);
            (e = Po(e)), (t -= M);
            for (var i = dn(r, e); ++n < t; ) e(n);
            return i;
          }),
          (pr.toFinite = Vu),
          (pr.toInteger = Uu),
          (pr.toLength = zu),
          (pr.toLower = function(t) {
            return $u(t).toLowerCase();
          }),
          (pr.toNumber = qu),
          (pr.toSafeInteger = function(t) {
            return t ? Tr(Uu(t), -B, B) : 0 === t ? t : 0;
          }),
          (pr.toString = $u),
          (pr.toUpper = function(t) {
            return $u(t).toUpperCase();
          }),
          (pr.trim = function(t, e, r) {
            if ((t = $u(t)) && (r || e === n)) return t.replace(Bt, '');
            if (!t || !(e = Pi(e))) return t;
            var i = An(t),
              o = An(e);
            return Yi(i, gn(i, o), mn(i, o) + 1).join('');
          }),
          (pr.trimEnd = function(t, e, r) {
            if ((t = $u(t)) && (r || e === n)) return t.replace(Tt, '');
            if (!t || !(e = Pi(e))) return t;
            var i = An(t);
            return Yi(i, 0, mn(i, An(e)) + 1).join('');
          }),
          (pr.trimStart = function(t, e, r) {
            if ((t = $u(t)) && (r || e === n)) return t.replace(It, '');
            if (!t || !(e = Pi(e))) return t;
            var i = An(t);
            return Yi(i, gn(i, An(e))).join('');
          }),
          (pr.truncate = function(t, e) {
            var r = E,
              i = F;
            if (Su(e)) {
              var o = 'separator' in e ? e.separator : o;
              (r = 'length' in e ? Uu(e.length) : r),
                (i = 'omission' in e ? Pi(e.omission) : i);
            }
            var s = (t = $u(t)).length;
            if (Cn(t)) {
              var u = An(t);
              s = u.length;
            }
            if (r >= s) return t;
            var c = r - kn(i);
            if (c < 1) return i;
            var a = u ? Yi(u, 0, c).join('') : t.slice(0, c);
            if (o === n) return a + i;
            if ((u && (c += a.length - c), Bu(o))) {
              if (t.slice(c).search(o)) {
                var l,
                  h = a;
                for (
                  o.global || (o = ne(o.source, $u(Ut.exec(o)) + 'g')),
                    o.lastIndex = 0;
                  (l = o.exec(h));

                )
                  var f = l.index;
                a = a.slice(0, f === n ? c : f);
              }
            } else if (t.indexOf(Pi(o), c) != c) {
              var p = a.lastIndexOf(o);
              p > -1 && (a = a.slice(0, p));
            }
            return a + i;
          }),
          (pr.unescape = function(t) {
            return (t = $u(t)) && _t.test(t) ? t.replace(Dt, jn) : t;
          }),
          (pr.uniqueId = function(t) {
            var e = ++he;
            return $u(t) + e;
          }),
          (pr.upperCase = _c),
          (pr.upperFirst = Cc),
          (pr.each = $s),
          (pr.eachRight = Ks),
          (pr.first = ms),
          Tc(
            pr,
            (function() {
              var t = {};
              return (
                Gr(pr, function(e, n) {
                  le.call(pr.prototype, n) || (t[n] = e);
                }),
                t
              );
            })(),
            { chain: !1 }
          ),
          (pr.VERSION = '4.17.15'),
          $e(
            [
              'bind',
              'bindKey',
              'curry',
              'curryRight',
              'partial',
              'partialRight'
            ],
            function(t) {
              pr[t].placeholder = pr;
            }
          ),
          $e(['drop', 'take'], function(t, e) {
            (yr.prototype[t] = function(r) {
              r = r === n ? 1 : $n(Uu(r), 0);
              var i = this.__filtered__ && !e ? new yr(this) : this.clone();
              return (
                i.__filtered__
                  ? (i.__takeCount__ = Kn(r, i.__takeCount__))
                  : i.__views__.push({
                      size: Kn(r, M),
                      type: t + (i.__dir__ < 0 ? 'Right' : '')
                    }),
                i
              );
            }),
              (yr.prototype[t + 'Right'] = function(e) {
                return this.reverse()
                  [t](e)
                  .reverse();
              });
          }),
          $e(['filter', 'map', 'takeWhile'], function(t, e) {
            var n = e + 1,
              r = n == k || 3 == n;
            yr.prototype[t] = function(t) {
              var e = this.clone();
              return (
                e.__iteratees__.push({ iteratee: Po(t, 3), type: n }),
                (e.__filtered__ = e.__filtered__ || r),
                e
              );
            };
          }),
          $e(['head', 'last'], function(t, e) {
            var n = 'take' + (e ? 'Right' : '');
            yr.prototype[t] = function() {
              return this[n](1).value()[0];
            };
          }),
          $e(['initial', 'tail'], function(t, e) {
            var n = 'drop' + (e ? '' : 'Right');
            yr.prototype[t] = function() {
              return this.__filtered__ ? new yr(this) : this[n](1);
            };
          }),
          (yr.prototype.compact = function() {
            return this.filter(Ac);
          }),
          (yr.prototype.find = function(t) {
            return this.filter(t).head();
          }),
          (yr.prototype.findLast = function(t) {
            return this.reverse().find(t);
          }),
          (yr.prototype.invokeMap = Ci(function(t, e) {
            return 'function' == typeof t
              ? new yr(this)
              : this.map(function(n) {
                  return ri(n, t, e);
                });
          })),
          (yr.prototype.reject = function(t) {
            return this.filter(cu(Po(t)));
          }),
          (yr.prototype.slice = function(t, e) {
            t = Uu(t);
            var r = this;
            return r.__filtered__ && (t > 0 || e < 0)
              ? new yr(r)
              : (t < 0 ? (r = r.takeRight(-t)) : t && (r = r.drop(t)),
                e !== n &&
                  (r = (e = Uu(e)) < 0 ? r.dropRight(-e) : r.take(e - t)),
                r);
          }),
          (yr.prototype.takeRightWhile = function(t) {
            return this.reverse()
              .takeWhile(t)
              .reverse();
          }),
          (yr.prototype.toArray = function() {
            return this.take(M);
          }),
          Gr(yr.prototype, function(t, e) {
            var r = /^(?:filter|find|map|reject)|While$/.test(e),
              i = /^(?:head|last)$/.test(e),
              o = pr[i ? 'take' + ('last' == e ? 'Right' : '') : e],
              s = i || /^find/.test(e);
            o &&
              (pr.prototype[e] = function() {
                var e = this.__wrapped__,
                  u = i ? [1] : arguments,
                  c = e instanceof yr,
                  a = u[0],
                  l = c || yu(e),
                  h = function(t) {
                    var e = o.apply(pr, Ze([t], u));
                    return i && f ? e[0] : e;
                  };
                l &&
                  r &&
                  'function' == typeof a &&
                  1 != a.length &&
                  (c = l = !1);
                var f = this.__chain__,
                  p = !!this.__actions__.length,
                  d = s && !f,
                  b = c && !p;
                if (!s && l) {
                  e = b ? e : new yr(this);
                  var v = t.apply(e, u);
                  return (
                    v.__actions__.push({ func: Vs, args: [h], thisArg: n }),
                    new vr(v, f)
                  );
                }
                return d && b
                  ? t.apply(this, u)
                  : ((v = this.thru(h)),
                    d ? (i ? v.value()[0] : v.value()) : v);
              });
          }),
          $e(['pop', 'push', 'shift', 'sort', 'splice', 'unshift'], function(
            t
          ) {
            var e = oe[t],
              n = /^(?:push|sort|unshift)$/.test(t) ? 'tap' : 'thru',
              r = /^(?:pop|shift)$/.test(t);
            pr.prototype[t] = function() {
              var t = arguments;
              if (r && !this.__chain__) {
                var i = this.value();
                return e.apply(yu(i) ? i : [], t);
              }
              return this[n](function(n) {
                return e.apply(yu(n) ? n : [], t);
              });
            };
          }),
          Gr(yr.prototype, function(t, e) {
            var n = pr[e];
            if (n) {
              var r = n.name + '';
              le.call(ir, r) || (ir[r] = []), ir[r].push({ name: e, func: n });
            }
          }),
          (ir[po(n, b).name] = [{ name: 'wrapper', func: n }]),
          (yr.prototype.clone = function() {
            var t = new yr(this.__wrapped__);
            return (
              (t.__actions__ = no(this.__actions__)),
              (t.__dir__ = this.__dir__),
              (t.__filtered__ = this.__filtered__),
              (t.__iteratees__ = no(this.__iteratees__)),
              (t.__takeCount__ = this.__takeCount__),
              (t.__views__ = no(this.__views__)),
              t
            );
          }),
          (yr.prototype.reverse = function() {
            if (this.__filtered__) {
              var t = new yr(this);
              (t.__dir__ = -1), (t.__filtered__ = !0);
            } else (t = this.clone()).__dir__ *= -1;
            return t;
          }),
          (yr.prototype.value = function() {
            var t = this.__wrapped__.value(),
              e = this.__dir__,
              n = yu(t),
              r = e < 0,
              i = n ? t.length : 0,
              o = (function(t, e, n) {
                var r = -1,
                  i = n.length;
                for (; ++r < i; ) {
                  var o = n[r],
                    s = o.size;
                  switch (o.type) {
                    case 'drop':
                      t += s;
                      break;
                    case 'dropRight':
                      e -= s;
                      break;
                    case 'take':
                      e = Kn(e, t + s);
                      break;
                    case 'takeRight':
                      t = $n(t, e - s);
                  }
                }
                return { start: t, end: e };
              })(0, i, this.__views__),
              s = o.start,
              u = o.end,
              c = u - s,
              a = r ? u : s - 1,
              l = this.__iteratees__,
              h = l.length,
              f = 0,
              p = Kn(c, this.__takeCount__);
            if (!n || (!r && i == c && p == c)) return Ui(t, this.__actions__);
            var d = [];
            t: for (; c-- && f < p; ) {
              for (var b = -1, v = t[(a += e)]; ++b < h; ) {
                var y = l[b],
                  g = y.iteratee,
                  m = y.type,
                  D = g(v);
                if (m == A) v = D;
                else if (!D) {
                  if (m == k) continue t;
                  break t;
                }
              }
              d[f++] = v;
            }
            return d;
          }),
          (pr.prototype.at = Us),
          (pr.prototype.chain = function() {
            return Ls(this);
          }),
          (pr.prototype.commit = function() {
            return new vr(this.value(), this.__chain__);
          }),
          (pr.prototype.next = function() {
            this.__values__ === n && (this.__values__ = Lu(this.value()));
            var t = this.__index__ >= this.__values__.length;
            return {
              done: t,
              value: t ? n : this.__values__[this.__index__++]
            };
          }),
          (pr.prototype.plant = function(t) {
            for (var e, r = this; r instanceof br; ) {
              var i = fs(r);
              (i.__index__ = 0),
                (i.__values__ = n),
                e ? (o.__wrapped__ = i) : (e = i);
              var o = i;
              r = r.__wrapped__;
            }
            return (o.__wrapped__ = t), e;
          }),
          (pr.prototype.reverse = function() {
            var t = this.__wrapped__;
            if (t instanceof yr) {
              var e = t;
              return (
                this.__actions__.length && (e = new yr(this)),
                (e = e.reverse()).__actions__.push({
                  func: Vs,
                  args: [Ss],
                  thisArg: n
                }),
                new vr(e, this.__chain__)
              );
            }
            return this.thru(Ss);
          }),
          (pr.prototype.toJSON = pr.prototype.valueOf = pr.prototype.value = function() {
            return Ui(this.__wrapped__, this.__actions__);
          }),
          (pr.prototype.first = pr.prototype.head),
          hn &&
            (pr.prototype[hn] = function() {
              return this;
            }),
          pr
        );
      })();
      Ie ? (((Ie.exports = Bn)._ = Bn), (Be._ = Bn)) : (je._ = Bn);
    }.call(C));
  }),
  vt = yt;
function yt(t) {
  u.apply(this),
    (t = t || {}),
    (this.writable = this.readable = !0),
    (this.muted = !1),
    this.on('pipe', this._onpipe),
    (this.replace = t.replace),
    (this._prompt = t.prompt || null),
    (this._hadControl = !1);
}
function gt(t) {
  return function() {
    var e = this._dest,
      n = this._src;
    e && e[t] && e[t].apply(e, arguments),
      n && n[t] && n[t].apply(n, arguments);
  };
}
(yt.prototype = Object.create(u.prototype)),
  Object.defineProperty(yt.prototype, 'constructor', {
    value: yt,
    enumerable: !1
  }),
  (yt.prototype.mute = function() {
    this.muted = !0;
  }),
  (yt.prototype.unmute = function() {
    this.muted = !1;
  }),
  Object.defineProperty(yt.prototype, '_onpipe', {
    value: function(t) {
      this._src = t;
    },
    enumerable: !1,
    writable: !0,
    configurable: !0
  }),
  Object.defineProperty(yt.prototype, 'isTTY', {
    get: function() {
      return this._dest ? this._dest.isTTY : !!this._src && this._src.isTTY;
    },
    set: function(t) {
      Object.defineProperty(this, 'isTTY', {
        value: t,
        enumerable: !0,
        writable: !0,
        configurable: !0
      });
    },
    enumerable: !0,
    configurable: !0
  }),
  Object.defineProperty(yt.prototype, 'rows', {
    get: function() {
      return this._dest ? this._dest.rows : this._src ? this._src.rows : void 0;
    },
    enumerable: !0,
    configurable: !0
  }),
  Object.defineProperty(yt.prototype, 'columns', {
    get: function() {
      return this._dest
        ? this._dest.columns
        : this._src
        ? this._src.columns
        : void 0;
    },
    enumerable: !0,
    configurable: !0
  }),
  (yt.prototype.pipe = function(t, e) {
    return (this._dest = t), u.prototype.pipe.call(this, t, e);
  }),
  (yt.prototype.pause = function() {
    if (this._src) return this._src.pause();
  }),
  (yt.prototype.resume = function() {
    if (this._src) return this._src.resume();
  }),
  (yt.prototype.write = function(t) {
    if (this.muted) {
      if (!this.replace) return !0;
      if (t.match(/^\u001b/))
        return (
          0 === t.indexOf(this._prompt) &&
            ((t = (t = t.substr(this._prompt.length)).replace(
              /./g,
              this.replace
            )),
            (t = this._prompt + t)),
          (this._hadControl = !0),
          this.emit('data', t)
        );
      this._prompt &&
        this._hadControl &&
        0 === t.indexOf(this._prompt) &&
        ((this._hadControl = !1),
        this.emit('data', this._prompt),
        (t = t.substr(this._prompt.length))),
        (t = t.toString().replace(/./g, this.replace));
    }
    this.emit('data', t);
  }),
  (yt.prototype.end = function(t) {
    this.muted &&
      (t = t && this.replace ? t.toString().replace(/./g, this.replace) : null),
      t && this.emit('data', t),
      this.emit('end');
  }),
  (yt.prototype.destroy = gt('destroy')),
  (yt.prototype.destroySoon = gt('destroySoon')),
  (yt.prototype.close = gt('close'));
var mt = class {
    constructor(t) {
      this.rl ||
        (this.rl = c.createInterface(
          (function(t) {
            var e = (t = t || {}).input || process.stdin,
              n = new vt();
            n.pipe(t.output || process.stdout);
            var r = n;
            return bt.extend(
              { terminal: !0, input: e, output: r },
              bt.omit(t, ['input', 'output'])
            );
          })(t)
        )),
        this.rl.resume(),
        (this.onForceClose = this.onForceClose.bind(this)),
        process.on('exit', this.onForceClose),
        this.rl.on('SIGINT', this.onForceClose);
    }
    onForceClose() {
      this.close(), process.kill(process.pid, 'SIGINT'), console.log('');
    }
    close() {
      this.rl.removeListener('SIGINT', this.onForceClose),
        process.removeListener('exit', this.onForceClose),
        this.rl.output.unmute(),
        this.activePrompt &&
          'function' == typeof this.activePrompt.close &&
          this.activePrompt.close(),
        this.rl.output.end(),
        this.rl.pause(),
        this.rl.close();
    }
  },
  Dt = F(function(t) {
    const e = t.exports;
    t.exports.default = e;
    const n = '[',
      r = ']',
      i = '',
      o = ';',
      s = 'Apple_Terminal' === process.env.TERM_PROGRAM;
    (e.cursorTo = (t, e) => {
      if ('number' != typeof t)
        throw new TypeError('The `x` argument is required');
      return 'number' != typeof e
        ? n + (t + 1) + 'G'
        : n + (e + 1) + ';' + (t + 1) + 'H';
    }),
      (e.cursorMove = (t, e) => {
        if ('number' != typeof t)
          throw new TypeError('The `x` argument is required');
        let r = '';
        return (
          t < 0 ? (r += n + -t + 'D') : t > 0 && (r += n + t + 'C'),
          e < 0 ? (r += n + -e + 'A') : e > 0 && (r += n + e + 'B'),
          r
        );
      }),
      (e.cursorUp = (t = 1) => n + t + 'A'),
      (e.cursorDown = (t = 1) => n + t + 'B'),
      (e.cursorForward = (t = 1) => n + t + 'C'),
      (e.cursorBackward = (t = 1) => n + t + 'D'),
      (e.cursorLeft = '[G'),
      (e.cursorSavePosition = s ? '7' : '[s'),
      (e.cursorRestorePosition = s ? '8' : '[u'),
      (e.cursorGetPosition = '[6n'),
      (e.cursorNextLine = '[E'),
      (e.cursorPrevLine = '[F'),
      (e.cursorHide = '[?25l'),
      (e.cursorShow = '[?25h'),
      (e.eraseLines = t => {
        let n = '';
        for (let r = 0; r < t; r++)
          n += e.eraseLine + (r < t - 1 ? e.cursorUp() : '');
        return t && (n += e.cursorLeft), n;
      }),
      (e.eraseEndLine = '[K'),
      (e.eraseStartLine = '[1K'),
      (e.eraseLine = '[2K'),
      (e.eraseDown = '[J'),
      (e.eraseUp = '[1J'),
      (e.eraseScreen = '[2J'),
      (e.scrollUp = '[S'),
      (e.scrollDown = '[T'),
      (e.clearScreen = 'c'),
      (e.clearTerminal =
        'win32' === process.platform ? `${e.eraseScreen}[0f` : `${e.eraseScreen}[3J[H`),
      (e.beep = i),
      (e.link = (t, e) => [r, '8', o, o, e, i, t, r, '8', o, o, i].join('')),
      (e.image = (t, e = {}) => {
        let n = `${r}1337;File=inline=1`;
        return (
          e.width && (n += `;width=${e.width}`),
          e.height && (n += `;height=${e.height}`),
          !1 === e.preserveAspectRatio && (n += ';preserveAspectRatio=0'),
          n + ':' + t.toString('base64') + i
        );
      }),
      (e.iTerm = {
        setCwd: (t = process.cwd()) => `${r}50;CurrentDir=${t}${i}`,
        annotation: (t, e = {}) => {
          let n = `${r}1337;`;
          const o = void 0 !== e.x,
            s = void 0 !== e.y;
          if ((o || s) && (!o || !s || void 0 === e.length))
            throw new Error(
              '`x`, `y` and `length` must be defined when `x` or `y` is defined'
            );
          return (
            (t = t.replace(/\|/g, '')),
            (n += e.isHidden ? 'AddHiddenAnnotation=' : 'AddAnnotation='),
            e.length > 0
              ? (n += (o ? [t, e.length, e.x, e.y] : [e.length, t]).join('|'))
              : (n += t),
            n + i
          );
        }
      });
  }),
  wt = {
    left: function(t, e) {
      t.output.write(Dt.cursorBackward(e));
    },
    right: function(t, e) {
      t.output.write(Dt.cursorForward(e));
    },
    up: function(t, e) {
      t.output.write(Dt.cursorUp(e));
    },
    down: function(t, e) {
      t.output.write(Dt.cursorDown(e));
    },
    clearLine: function(t, e) {
      t.output.write(Dt.eraseLines(e));
    }
  };
var _t = class extends mt {
  constructor(t) {
    super((t = t || {})),
      (this.log = dt(this.writeLog.bind(this))),
      (this.bottomBar = t.bottomBar || ''),
      this.render();
  }
  render() {
    return this.write(this.bottomBar), this;
  }
  clean() {
    return wt.clearLine(this.rl, this.bottomBar.split('\n').length), this;
  }
  updateBottomBar(t) {
    return (
      wt.clearLine(this.rl, 1),
      this.rl.output.unmute(),
      this.clean(),
      (this.bottomBar = t),
      this.render(),
      this.rl.output.mute(),
      this
    );
  }
  writeLog(t) {
    return (
      this.rl.output.unmute(),
      this.clean(),
      this.rl.output.write(this.enforceLF(t.toString())),
      this.render(),
      this.rl.output.mute(),
      this
    );
  }
  enforceLF(t) {
    return t.match(/[\r\n]$/) ? t : t + '\n';
  }
  write(t) {
    var e = t.split(/\n/);
    (this.height = e.length),
      this.rl.setPrompt(bt.last(e)),
      0 === this.rl.output.rows &&
        0 === this.rl.output.columns &&
        wt.left(this.rl, t.length + this.rl.line.length),
      this.rl.output.write(t);
  }
};
function Ct(t) {
  return 'function' == typeof t;
}
var xt = !1,
  Et = {
    Promise: void 0,
    set useDeprecatedSynchronousErrorHandling(t) {
      t && new Error().stack;
      xt = t;
    },
    get useDeprecatedSynchronousErrorHandling() {
      return xt;
    }
  };
function Ft(t) {
  setTimeout(function() {
    throw t;
  }, 0);
}
var St = {
    closed: !0,
    next: function(t) {},
    error: function(t) {
      if (Et.useDeprecatedSynchronousErrorHandling) throw t;
      Ft(t);
    },
    complete: function() {}
  },
  Ot = (function() {
    return (
      Array.isArray ||
      function(t) {
        return t && 'number' == typeof t.length;
      }
    );
  })();
function kt(t) {
  return null !== t && 'object' == typeof t;
}
var At = (function() {
    function t(t) {
      return (
        Error.call(this),
        (this.message = t
          ? t.length +
            ' errors occurred during unsubscription:\n' +
            t
              .map(function(t, e) {
                return e + 1 + ') ' + t.toString();
              })
              .join('\n  ')
          : ''),
        (this.name = 'UnsubscriptionError'),
        (this.errors = t),
        this
      );
    }
    return (t.prototype = Object.create(Error.prototype)), t;
  })(),
  jt = (function() {
    function t(t) {
      (this.closed = !1),
        (this._parentOrParents = null),
        (this._subscriptions = null),
        t && (this._unsubscribe = t);
    }
    return (
      (t.prototype.unsubscribe = function() {
        var e;
        if (!this.closed) {
          var n = this._parentOrParents,
            r = this._unsubscribe,
            i = this._subscriptions;
          if (
            ((this.closed = !0),
            (this._parentOrParents = null),
            (this._subscriptions = null),
            n instanceof t)
          )
            n.remove(this);
          else if (null !== n)
            for (var o = 0; o < n.length; ++o) {
              n[o].remove(this);
            }
          if (Ct(r))
            try {
              r.call(this);
            } catch (t) {
              e = t instanceof At ? Bt(t.errors) : [t];
            }
          if (Ot(i)) {
            o = -1;
            for (var s = i.length; ++o < s; ) {
              var u = i[o];
              if (kt(u))
                try {
                  u.unsubscribe();
                } catch (t) {
                  (e = e || []),
                    t instanceof At ? (e = e.concat(Bt(t.errors))) : e.push(t);
                }
            }
          }
          if (e) throw new At(e);
        }
      }),
      (t.prototype.add = function(e) {
        var n = e;
        if (!e) return t.EMPTY;
        switch (typeof e) {
          case 'function':
            n = new t(e);
          case 'object':
            if (n === this || n.closed || 'function' != typeof n.unsubscribe)
              return n;
            if (this.closed) return n.unsubscribe(), n;
            if (!(n instanceof t)) {
              var r = n;
              (n = new t())._subscriptions = [r];
            }
            break;
          default:
            throw new Error(
              'unrecognized teardown ' + e + ' added to Subscription.'
            );
        }
        var i = n._parentOrParents;
        if (null === i) n._parentOrParents = this;
        else if (i instanceof t) {
          if (i === this) return n;
          n._parentOrParents = [i, this];
        } else {
          if (-1 !== i.indexOf(this)) return n;
          i.push(this);
        }
        var o = this._subscriptions;
        return null === o ? (this._subscriptions = [n]) : o.push(n), n;
      }),
      (t.prototype.remove = function(t) {
        var e = this._subscriptions;
        if (e) {
          var n = e.indexOf(t);
          -1 !== n && e.splice(n, 1);
        }
      }),
      (t.EMPTY = (function(t) {
        return (t.closed = !0), t;
      })(new t())),
      t
    );
  })();
function Bt(t) {
  return t.reduce(function(t, e) {
    return t.concat(e instanceof At ? e.errors : e);
  }, []);
}
var It = (function() {
    return 'function' == typeof Symbol
      ? Symbol('rxSubscriber')
      : '@@rxSubscriber_' + Math.random();
  })(),
  Tt = (function(t) {
    function e(n, r, i) {
      var o = t.call(this) || this;
      switch (
        ((o.syncErrorValue = null),
        (o.syncErrorThrown = !1),
        (o.syncErrorThrowable = !1),
        (o.isStopped = !1),
        arguments.length)
      ) {
        case 0:
          o.destination = St;
          break;
        case 1:
          if (!n) {
            o.destination = St;
            break;
          }
          if ('object' == typeof n) {
            n instanceof e
              ? ((o.syncErrorThrowable = n.syncErrorThrowable),
                (o.destination = n),
                n.add(o))
              : ((o.syncErrorThrowable = !0), (o.destination = new Mt(o, n)));
            break;
          }
        default:
          (o.syncErrorThrowable = !0), (o.destination = new Mt(o, n, r, i));
      }
      return o;
    }
    return (
      m(e, t),
      (e.prototype[It] = function() {
        return this;
      }),
      (e.create = function(t, n, r) {
        var i = new e(t, n, r);
        return (i.syncErrorThrowable = !1), i;
      }),
      (e.prototype.next = function(t) {
        this.isStopped || this._next(t);
      }),
      (e.prototype.error = function(t) {
        this.isStopped || ((this.isStopped = !0), this._error(t));
      }),
      (e.prototype.complete = function() {
        this.isStopped || ((this.isStopped = !0), this._complete());
      }),
      (e.prototype.unsubscribe = function() {
        this.closed ||
          ((this.isStopped = !0), t.prototype.unsubscribe.call(this));
      }),
      (e.prototype._next = function(t) {
        this.destination.next(t);
      }),
      (e.prototype._error = function(t) {
        this.destination.error(t), this.unsubscribe();
      }),
      (e.prototype._complete = function() {
        this.destination.complete(), this.unsubscribe();
      }),
      (e.prototype._unsubscribeAndRecycle = function() {
        var t = this._parentOrParents;
        return (
          (this._parentOrParents = null),
          this.unsubscribe(),
          (this.closed = !1),
          (this.isStopped = !1),
          (this._parentOrParents = t),
          this
        );
      }),
      e
    );
  })(jt),
  Mt = (function(t) {
    function e(e, n, r, i) {
      var o,
        s = t.call(this) || this;
      s._parentSubscriber = e;
      var u = s;
      return (
        Ct(n)
          ? (o = n)
          : n &&
            ((o = n.next),
            (r = n.error),
            (i = n.complete),
            n !== St &&
              (Ct((u = Object.create(n)).unsubscribe) &&
                s.add(u.unsubscribe.bind(u)),
              (u.unsubscribe = s.unsubscribe.bind(s)))),
        (s._context = u),
        (s._next = o),
        (s._error = r),
        (s._complete = i),
        s
      );
    }
    return (
      m(e, t),
      (e.prototype.next = function(t) {
        if (!this.isStopped && this._next) {
          var e = this._parentSubscriber;
          Et.useDeprecatedSynchronousErrorHandling && e.syncErrorThrowable
            ? this.__tryOrSetError(e, this._next, t) && this.unsubscribe()
            : this.__tryOrUnsub(this._next, t);
        }
      }),
      (e.prototype.error = function(t) {
        if (!this.isStopped) {
          var e = this._parentSubscriber,
            n = Et.useDeprecatedSynchronousErrorHandling;
          if (this._error)
            n && e.syncErrorThrowable
              ? (this.__tryOrSetError(e, this._error, t), this.unsubscribe())
              : (this.__tryOrUnsub(this._error, t), this.unsubscribe());
          else if (e.syncErrorThrowable)
            n ? ((e.syncErrorValue = t), (e.syncErrorThrown = !0)) : Ft(t),
              this.unsubscribe();
          else {
            if ((this.unsubscribe(), n)) throw t;
            Ft(t);
          }
        }
      }),
      (e.prototype.complete = function() {
        var t = this;
        if (!this.isStopped) {
          var e = this._parentSubscriber;
          if (this._complete) {
            var n = function() {
              return t._complete.call(t._context);
            };
            Et.useDeprecatedSynchronousErrorHandling && e.syncErrorThrowable
              ? (this.__tryOrSetError(e, n), this.unsubscribe())
              : (this.__tryOrUnsub(n), this.unsubscribe());
          } else this.unsubscribe();
        }
      }),
      (e.prototype.__tryOrUnsub = function(t, e) {
        try {
          t.call(this._context, e);
        } catch (t) {
          if ((this.unsubscribe(), Et.useDeprecatedSynchronousErrorHandling))
            throw t;
          Ft(t);
        }
      }),
      (e.prototype.__tryOrSetError = function(t, e, n) {
        if (!Et.useDeprecatedSynchronousErrorHandling)
          throw new Error('bad call');
        try {
          e.call(this._context, n);
        } catch (e) {
          return Et.useDeprecatedSynchronousErrorHandling
            ? ((t.syncErrorValue = e), (t.syncErrorThrown = !0), !0)
            : (Ft(e), !0);
        }
        return !1;
      }),
      (e.prototype._unsubscribe = function() {
        var t = this._parentSubscriber;
        (this._context = null),
          (this._parentSubscriber = null),
          t.unsubscribe();
      }),
      e
    );
  })(Tt);
function Pt(t) {
  for (; t; ) {
    var e = t,
      n = e.closed,
      r = e.destination,
      i = e.isStopped;
    if (n || i) return !1;
    t = r && r instanceof Tt ? r : null;
  }
  return !0;
}
var Nt = (function() {
  return ('function' == typeof Symbol && Symbol.observable) || '@@observable';
})();
function Rt() {}
function Lt() {
  for (var t = [], e = 0; e < arguments.length; e++) t[e] = arguments[e];
  return Vt(t);
}
function Vt(t) {
  return t
    ? 1 === t.length
      ? t[0]
      : function(e) {
          return t.reduce(function(t, e) {
            return e(t);
          }, e);
        }
    : Rt;
}
var Ut = (function() {
  function t(t) {
    (this._isScalar = !1), t && (this._subscribe = t);
  }
  return (
    (t.prototype.lift = function(e) {
      var n = new t();
      return (n.source = this), (n.operator = e), n;
    }),
    (t.prototype.subscribe = function(t, e, n) {
      var r = this.operator,
        i = (function(t, e, n) {
          if (t) {
            if (t instanceof Tt) return t;
            if (t[It]) return t[It]();
          }
          return t || e || n ? new Tt(t, e, n) : new Tt(St);
        })(t, e, n);
      if (
        (r
          ? i.add(r.call(i, this.source))
          : i.add(
              this.source ||
                (Et.useDeprecatedSynchronousErrorHandling &&
                  !i.syncErrorThrowable)
                ? this._subscribe(i)
                : this._trySubscribe(i)
            ),
        Et.useDeprecatedSynchronousErrorHandling &&
          i.syncErrorThrowable &&
          ((i.syncErrorThrowable = !1), i.syncErrorThrown))
      )
        throw i.syncErrorValue;
      return i;
    }),
    (t.prototype._trySubscribe = function(t) {
      try {
        return this._subscribe(t);
      } catch (e) {
        Et.useDeprecatedSynchronousErrorHandling &&
          ((t.syncErrorThrown = !0), (t.syncErrorValue = e)),
          Pt(t) ? t.error(e) : console.warn(e);
      }
    }),
    (t.prototype.forEach = function(t, e) {
      var n = this;
      return new (e = zt(e))(function(e, r) {
        var i;
        i = n.subscribe(
          function(e) {
            try {
              t(e);
            } catch (t) {
              r(t), i && i.unsubscribe();
            }
          },
          r,
          e
        );
      });
    }),
    (t.prototype._subscribe = function(t) {
      var e = this.source;
      return e && e.subscribe(t);
    }),
    (t.prototype[Nt] = function() {
      return this;
    }),
    (t.prototype.pipe = function() {
      for (var t = [], e = 0; e < arguments.length; e++) t[e] = arguments[e];
      return 0 === t.length ? this : Vt(t)(this);
    }),
    (t.prototype.toPromise = function(t) {
      var e = this;
      return new (t = zt(t))(function(t, n) {
        var r;
        e.subscribe(
          function(t) {
            return (r = t);
          },
          function(t) {
            return n(t);
          },
          function() {
            return t(r);
          }
        );
      });
    }),
    (t.create = function(e) {
      return new t(e);
    }),
    t
  );
})();
function zt(t) {
  if ((t || (t = Et.Promise || Promise), !t))
    throw new Error('no Promise impl found');
  return t;
}
var qt = (function() {
    function t() {
      return (
        Error.call(this),
        (this.message = 'object unsubscribed'),
        (this.name = 'ObjectUnsubscribedError'),
        this
      );
    }
    return (t.prototype = Object.create(Error.prototype)), t;
  })(),
  Wt = (function(t) {
    function e(e, n) {
      var r = t.call(this) || this;
      return (r.subject = e), (r.subscriber = n), (r.closed = !1), r;
    }
    return (
      m(e, t),
      (e.prototype.unsubscribe = function() {
        if (!this.closed) {
          this.closed = !0;
          var t = this.subject,
            e = t.observers;
          if (
            ((this.subject = null),
            e && 0 !== e.length && !t.isStopped && !t.closed)
          ) {
            var n = e.indexOf(this.subscriber);
            -1 !== n && e.splice(n, 1);
          }
        }
      }),
      e
    );
  })(jt),
  $t = (function(t) {
    function e(e) {
      var n = t.call(this, e) || this;
      return (n.destination = e), n;
    }
    return m(e, t), e;
  })(Tt),
  Kt = (function(t) {
    function e() {
      var e = t.call(this) || this;
      return (
        (e.observers = []),
        (e.closed = !1),
        (e.isStopped = !1),
        (e.hasError = !1),
        (e.thrownError = null),
        e
      );
    }
    return (
      m(e, t),
      (e.prototype[It] = function() {
        return new $t(this);
      }),
      (e.prototype.lift = function(t) {
        var e = new Gt(this, this);
        return (e.operator = t), e;
      }),
      (e.prototype.next = function(t) {
        if (this.closed) throw new qt();
        if (!this.isStopped)
          for (
            var e = this.observers, n = e.length, r = e.slice(), i = 0;
            i < n;
            i++
          )
            r[i].next(t);
      }),
      (e.prototype.error = function(t) {
        if (this.closed) throw new qt();
        (this.hasError = !0), (this.thrownError = t), (this.isStopped = !0);
        for (
          var e = this.observers, n = e.length, r = e.slice(), i = 0;
          i < n;
          i++
        )
          r[i].error(t);
        this.observers.length = 0;
      }),
      (e.prototype.complete = function() {
        if (this.closed) throw new qt();
        this.isStopped = !0;
        for (
          var t = this.observers, e = t.length, n = t.slice(), r = 0;
          r < e;
          r++
        )
          n[r].complete();
        this.observers.length = 0;
      }),
      (e.prototype.unsubscribe = function() {
        (this.isStopped = !0), (this.closed = !0), (this.observers = null);
      }),
      (e.prototype._trySubscribe = function(e) {
        if (this.closed) throw new qt();
        return t.prototype._trySubscribe.call(this, e);
      }),
      (e.prototype._subscribe = function(t) {
        if (this.closed) throw new qt();
        return this.hasError
          ? (t.error(this.thrownError), jt.EMPTY)
          : this.isStopped
          ? (t.complete(), jt.EMPTY)
          : (this.observers.push(t), new Wt(this, t));
      }),
      (e.prototype.asObservable = function() {
        var t = new Ut();
        return (t.source = this), t;
      }),
      (e.create = function(t, e) {
        return new Gt(t, e);
      }),
      e
    );
  })(Ut),
  Gt = (function(t) {
    function e(e, n) {
      var r = t.call(this) || this;
      return (r.destination = e), (r.source = n), r;
    }
    return (
      m(e, t),
      (e.prototype.next = function(t) {
        var e = this.destination;
        e && e.next && e.next(t);
      }),
      (e.prototype.error = function(t) {
        var e = this.destination;
        e && e.error && this.destination.error(t);
      }),
      (e.prototype.complete = function() {
        var t = this.destination;
        t && t.complete && this.destination.complete();
      }),
      (e.prototype._subscribe = function(t) {
        return this.source ? this.source.subscribe(t) : jt.EMPTY;
      }),
      e
    );
  })(Kt);
function Yt() {
  return function(t) {
    return t.lift(new Ht(t));
  };
}
var Ht = (function() {
    function t(t) {
      this.connectable = t;
    }
    return (
      (t.prototype.call = function(t, e) {
        var n = this.connectable;
        n._refCount++;
        var r = new Qt(t, n),
          i = e.subscribe(r);
        return r.closed || (r.connection = n.connect()), i;
      }),
      t
    );
  })(),
  Qt = (function(t) {
    function e(e, n) {
      var r = t.call(this, e) || this;
      return (r.connectable = n), r;
    }
    return (
      m(e, t),
      (e.prototype._unsubscribe = function() {
        var t = this.connectable;
        if (t) {
          this.connectable = null;
          var e = t._refCount;
          if (e <= 0) this.connection = null;
          else if (((t._refCount = e - 1), e > 1)) this.connection = null;
          else {
            var n = this.connection,
              r = t._connection;
            (this.connection = null), !r || (n && r !== n) || r.unsubscribe();
          }
        } else this.connection = null;
      }),
      e
    );
  })(Tt),
  Jt = (function(t) {
    function e(e, n) {
      var r = t.call(this) || this;
      return (
        (r.source = e),
        (r.subjectFactory = n),
        (r._refCount = 0),
        (r._isComplete = !1),
        r
      );
    }
    return (
      m(e, t),
      (e.prototype._subscribe = function(t) {
        return this.getSubject().subscribe(t);
      }),
      (e.prototype.getSubject = function() {
        var t = this._subject;
        return (
          (t && !t.isStopped) || (this._subject = this.subjectFactory()),
          this._subject
        );
      }),
      (e.prototype.connect = function() {
        var t = this._connection;
        return (
          t ||
            ((this._isComplete = !1),
            (t = this._connection = new jt()).add(
              this.source.subscribe(new Xt(this.getSubject(), this))
            ),
            t.closed && ((this._connection = null), (t = jt.EMPTY))),
          t
        );
      }),
      (e.prototype.refCount = function() {
        return Yt()(this);
      }),
      e
    );
  })(Ut),
  Zt = (function() {
    var t = Jt.prototype;
    return {
      operator: { value: null },
      _refCount: { value: 0, writable: !0 },
      _subject: { value: null, writable: !0 },
      _connection: { value: null, writable: !0 },
      _subscribe: { value: t._subscribe },
      _isComplete: { value: t._isComplete, writable: !0 },
      getSubject: { value: t.getSubject },
      connect: { value: t.connect },
      refCount: { value: t.refCount }
    };
  })(),
  Xt = (function(t) {
    function e(e, n) {
      var r = t.call(this, e) || this;
      return (r.connectable = n), r;
    }
    return (
      m(e, t),
      (e.prototype._error = function(e) {
        this._unsubscribe(), t.prototype._error.call(this, e);
      }),
      (e.prototype._complete = function() {
        (this.connectable._isComplete = !0),
          this._unsubscribe(),
          t.prototype._complete.call(this);
      }),
      (e.prototype._unsubscribe = function() {
        var t = this.connectable;
        if (t) {
          this.connectable = null;
          var e = t._connection;
          (t._refCount = 0),
            (t._subject = null),
            (t._connection = null),
            e && e.unsubscribe();
        }
      }),
      e
    );
  })($t);
var te = (function() {
    function t(t, e, n, r) {
      (this.keySelector = t),
        (this.elementSelector = e),
        (this.durationSelector = n),
        (this.subjectSelector = r);
    }
    return (
      (t.prototype.call = function(t, e) {
        return e.subscribe(
          new ee(
            t,
            this.keySelector,
            this.elementSelector,
            this.durationSelector,
            this.subjectSelector
          )
        );
      }),
      t
    );
  })(),
  ee = (function(t) {
    function e(e, n, r, i, o) {
      var s = t.call(this, e) || this;
      return (
        (s.keySelector = n),
        (s.elementSelector = r),
        (s.durationSelector = i),
        (s.subjectSelector = o),
        (s.groups = null),
        (s.attemptedToUnsubscribe = !1),
        (s.count = 0),
        s
      );
    }
    return (
      m(e, t),
      (e.prototype._next = function(t) {
        var e;
        try {
          e = this.keySelector(t);
        } catch (t) {
          return void this.error(t);
        }
        this._group(t, e);
      }),
      (e.prototype._group = function(t, e) {
        var n = this.groups;
        n || (n = this.groups = new Map());
        var r,
          i = n.get(e);
        if (this.elementSelector)
          try {
            r = this.elementSelector(t);
          } catch (t) {
            this.error(t);
          }
        else r = t;
        if (!i) {
          (i = this.subjectSelector ? this.subjectSelector() : new Kt()),
            n.set(e, i);
          var o = new re(e, i, this);
          if ((this.destination.next(o), this.durationSelector)) {
            var s = void 0;
            try {
              s = this.durationSelector(new re(e, i));
            } catch (t) {
              return void this.error(t);
            }
            this.add(s.subscribe(new ne(e, i, this)));
          }
        }
        i.closed || i.next(r);
      }),
      (e.prototype._error = function(t) {
        var e = this.groups;
        e &&
          (e.forEach(function(e, n) {
            e.error(t);
          }),
          e.clear()),
          this.destination.error(t);
      }),
      (e.prototype._complete = function() {
        var t = this.groups;
        t &&
          (t.forEach(function(t, e) {
            t.complete();
          }),
          t.clear()),
          this.destination.complete();
      }),
      (e.prototype.removeGroup = function(t) {
        this.groups.delete(t);
      }),
      (e.prototype.unsubscribe = function() {
        this.closed ||
          ((this.attemptedToUnsubscribe = !0),
          0 === this.count && t.prototype.unsubscribe.call(this));
      }),
      e
    );
  })(Tt),
  ne = (function(t) {
    function e(e, n, r) {
      var i = t.call(this, n) || this;
      return (i.key = e), (i.group = n), (i.parent = r), i;
    }
    return (
      m(e, t),
      (e.prototype._next = function(t) {
        this.complete();
      }),
      (e.prototype._unsubscribe = function() {
        var t = this.parent,
          e = this.key;
        (this.key = this.parent = null), t && t.removeGroup(e);
      }),
      e
    );
  })(Tt),
  re = (function(t) {
    function e(e, n, r) {
      var i = t.call(this) || this;
      return (i.key = e), (i.groupSubject = n), (i.refCountSubscription = r), i;
    }
    return (
      m(e, t),
      (e.prototype._subscribe = function(t) {
        var e = new jt(),
          n = this.refCountSubscription,
          r = this.groupSubject;
        return n && !n.closed && e.add(new ie(n)), e.add(r.subscribe(t)), e;
      }),
      e
    );
  })(Ut),
  ie = (function(t) {
    function e(e) {
      var n = t.call(this) || this;
      return (n.parent = e), e.count++, n;
    }
    return (
      m(e, t),
      (e.prototype.unsubscribe = function() {
        var e = this.parent;
        e.closed ||
          this.closed ||
          (t.prototype.unsubscribe.call(this),
          (e.count -= 1),
          0 === e.count && e.attemptedToUnsubscribe && e.unsubscribe());
      }),
      e
    );
  })(jt),
  oe = (function(t) {
    function e(e) {
      var n = t.call(this) || this;
      return (n._value = e), n;
    }
    return (
      m(e, t),
      Object.defineProperty(e.prototype, 'value', {
        get: function() {
          return this.getValue();
        },
        enumerable: !0,
        configurable: !0
      }),
      (e.prototype._subscribe = function(e) {
        var n = t.prototype._subscribe.call(this, e);
        return n && !n.closed && e.next(this._value), n;
      }),
      (e.prototype.getValue = function() {
        if (this.hasError) throw this.thrownError;
        if (this.closed) throw new qt();
        return this._value;
      }),
      (e.prototype.next = function(e) {
        t.prototype.next.call(this, (this._value = e));
      }),
      e
    );
  })(Kt),
  se = (function(t) {
    function e(e, n) {
      var r = t.call(this, e, n) || this;
      return (r.scheduler = e), (r.work = n), (r.pending = !1), r;
    }
    return (
      m(e, t),
      (e.prototype.schedule = function(t, e) {
        if ((void 0 === e && (e = 0), this.closed)) return this;
        this.state = t;
        var n = this.id,
          r = this.scheduler;
        return (
          null != n && (this.id = this.recycleAsyncId(r, n, e)),
          (this.pending = !0),
          (this.delay = e),
          (this.id = this.id || this.requestAsyncId(r, this.id, e)),
          this
        );
      }),
      (e.prototype.requestAsyncId = function(t, e, n) {
        return void 0 === n && (n = 0), setInterval(t.flush.bind(t, this), n);
      }),
      (e.prototype.recycleAsyncId = function(t, e, n) {
        if (
          (void 0 === n && (n = 0),
          null !== n && this.delay === n && !1 === this.pending)
        )
          return e;
        clearInterval(e);
      }),
      (e.prototype.execute = function(t, e) {
        if (this.closed) return new Error('executing a cancelled action');
        this.pending = !1;
        var n = this._execute(t, e);
        if (n) return n;
        !1 === this.pending &&
          null != this.id &&
          (this.id = this.recycleAsyncId(this.scheduler, this.id, null));
      }),
      (e.prototype._execute = function(t, e) {
        var n = !1,
          r = void 0;
        try {
          this.work(t);
        } catch (t) {
          (n = !0), (r = (!!t && t) || new Error(t));
        }
        if (n) return this.unsubscribe(), r;
      }),
      (e.prototype._unsubscribe = function() {
        var t = this.id,
          e = this.scheduler,
          n = e.actions,
          r = n.indexOf(this);
        (this.work = null),
          (this.state = null),
          (this.pending = !1),
          (this.scheduler = null),
          -1 !== r && n.splice(r, 1),
          null != t && (this.id = this.recycleAsyncId(e, t, null)),
          (this.delay = null);
      }),
      e
    );
  })(
    (function(t) {
      function e(e, n) {
        return t.call(this) || this;
      }
      return (
        m(e, t),
        (e.prototype.schedule = function(t, e) {
          return this;
        }),
        e
      );
    })(jt)
  ),
  ue = (function(t) {
    function e(e, n) {
      var r = t.call(this, e, n) || this;
      return (r.scheduler = e), (r.work = n), r;
    }
    return (
      m(e, t),
      (e.prototype.schedule = function(e, n) {
        return (
          void 0 === n && (n = 0),
          n > 0
            ? t.prototype.schedule.call(this, e, n)
            : ((this.delay = n),
              (this.state = e),
              this.scheduler.flush(this),
              this)
        );
      }),
      (e.prototype.execute = function(e, n) {
        return n > 0 || this.closed
          ? t.prototype.execute.call(this, e, n)
          : this._execute(e, n);
      }),
      (e.prototype.requestAsyncId = function(e, n, r) {
        return (
          void 0 === r && (r = 0),
          (null !== r && r > 0) || (null === r && this.delay > 0)
            ? t.prototype.requestAsyncId.call(this, e, n, r)
            : e.flush(this)
        );
      }),
      e
    );
  })(se),
  ce = (function() {
    function t(e, n) {
      void 0 === n && (n = t.now), (this.SchedulerAction = e), (this.now = n);
    }
    return (
      (t.prototype.schedule = function(t, e, n) {
        return (
          void 0 === e && (e = 0),
          new this.SchedulerAction(this, t).schedule(n, e)
        );
      }),
      (t.now = function() {
        return Date.now();
      }),
      t
    );
  })(),
  ae = (function(t) {
    function e(n, r) {
      void 0 === r && (r = ce.now);
      var i =
        t.call(this, n, function() {
          return e.delegate && e.delegate !== i ? e.delegate.now() : r();
        }) || this;
      return (i.actions = []), (i.active = !1), (i.scheduled = void 0), i;
    }
    return (
      m(e, t),
      (e.prototype.schedule = function(n, r, i) {
        return (
          void 0 === r && (r = 0),
          e.delegate && e.delegate !== this
            ? e.delegate.schedule(n, r, i)
            : t.prototype.schedule.call(this, n, r, i)
        );
      }),
      (e.prototype.flush = function(t) {
        var e = this.actions;
        if (this.active) e.push(t);
        else {
          var n;
          this.active = !0;
          do {
            if ((n = t.execute(t.state, t.delay))) break;
          } while ((t = e.shift()));
          if (((this.active = !1), n)) {
            for (; (t = e.shift()); ) t.unsubscribe();
            throw n;
          }
        }
      }),
      e
    );
  })(ce),
  le = new ((function(t) {
    function e() {
      return (null !== t && t.apply(this, arguments)) || this;
    }
    return m(e, t), e;
  })(ae))(ue),
  he = new Ut(function(t) {
    return t.complete();
  });
function fe(t) {
  return t
    ? (function(t) {
        return new Ut(function(e) {
          return t.schedule(function() {
            return e.complete();
          });
        });
      })(t)
    : he;
}
function pe(t) {
  return t && 'function' == typeof t.schedule;
}
var de,
  be = function(t) {
    return function(e) {
      for (var n = 0, r = t.length; n < r && !e.closed; n++) e.next(t[n]);
      e.complete();
    };
  };
function ve(t, e) {
  return new Ut(function(n) {
    var r = new jt(),
      i = 0;
    return (
      r.add(
        e.schedule(function() {
          i !== t.length
            ? (n.next(t[i++]), n.closed || r.add(this.schedule()))
            : n.complete();
        })
      ),
      r
    );
  });
}
function ye(t, e) {
  return e ? ve(t, e) : new Ut(be(t));
}
function ge() {
  for (var t = [], e = 0; e < arguments.length; e++) t[e] = arguments[e];
  var n = t[t.length - 1];
  return pe(n) ? (t.pop(), ve(t, n)) : ye(t);
}
function me(t, e) {
  return new Ut(
    e
      ? function(n) {
          return e.schedule(De, 0, { error: t, subscriber: n });
        }
      : function(e) {
          return e.error(t);
        }
  );
}
function De(t) {
  var e = t.error;
  t.subscriber.error(e);
}
de || (de = {});
var we = (function() {
  function t(t, e, n) {
    (this.kind = t),
      (this.value = e),
      (this.error = n),
      (this.hasValue = 'N' === t);
  }
  return (
    (t.prototype.observe = function(t) {
      switch (this.kind) {
        case 'N':
          return t.next && t.next(this.value);
        case 'E':
          return t.error && t.error(this.error);
        case 'C':
          return t.complete && t.complete();
      }
    }),
    (t.prototype.do = function(t, e, n) {
      switch (this.kind) {
        case 'N':
          return t && t(this.value);
        case 'E':
          return e && e(this.error);
        case 'C':
          return n && n();
      }
    }),
    (t.prototype.accept = function(t, e, n) {
      return t && 'function' == typeof t.next
        ? this.observe(t)
        : this.do(t, e, n);
    }),
    (t.prototype.toObservable = function() {
      switch (this.kind) {
        case 'N':
          return ge(this.value);
        case 'E':
          return me(this.error);
        case 'C':
          return fe();
      }
      throw new Error('unexpected notification kind value');
    }),
    (t.createNext = function(e) {
      return void 0 !== e ? new t('N', e) : t.undefinedValueNotification;
    }),
    (t.createError = function(e) {
      return new t('E', void 0, e);
    }),
    (t.createComplete = function() {
      return t.completeNotification;
    }),
    (t.completeNotification = new t('C')),
    (t.undefinedValueNotification = new t('N', void 0)),
    t
  );
})();
var _e = (function() {
    function t(t, e) {
      void 0 === e && (e = 0), (this.scheduler = t), (this.delay = e);
    }
    return (
      (t.prototype.call = function(t, e) {
        return e.subscribe(new Ce(t, this.scheduler, this.delay));
      }),
      t
    );
  })(),
  Ce = (function(t) {
    function e(e, n, r) {
      void 0 === r && (r = 0);
      var i = t.call(this, e) || this;
      return (i.scheduler = n), (i.delay = r), i;
    }
    return (
      m(e, t),
      (e.dispatch = function(t) {
        var e = t.notification,
          n = t.destination;
        e.observe(n), this.unsubscribe();
      }),
      (e.prototype.scheduleMessage = function(t) {
        this.destination.add(
          this.scheduler.schedule(
            e.dispatch,
            this.delay,
            new xe(t, this.destination)
          )
        );
      }),
      (e.prototype._next = function(t) {
        this.scheduleMessage(we.createNext(t));
      }),
      (e.prototype._error = function(t) {
        this.scheduleMessage(we.createError(t)), this.unsubscribe();
      }),
      (e.prototype._complete = function() {
        this.scheduleMessage(we.createComplete()), this.unsubscribe();
      }),
      e
    );
  })(Tt),
  xe = (function() {
    return function(t, e) {
      (this.notification = t), (this.destination = e);
    };
  })(),
  Ee = (function(t) {
    function e(e, n, r) {
      void 0 === e && (e = Number.POSITIVE_INFINITY),
        void 0 === n && (n = Number.POSITIVE_INFINITY);
      var i = t.call(this) || this;
      return (
        (i.scheduler = r),
        (i._events = []),
        (i._infiniteTimeWindow = !1),
        (i._bufferSize = e < 1 ? 1 : e),
        (i._windowTime = n < 1 ? 1 : n),
        n === Number.POSITIVE_INFINITY
          ? ((i._infiniteTimeWindow = !0), (i.next = i.nextInfiniteTimeWindow))
          : (i.next = i.nextTimeWindow),
        i
      );
    }
    return (
      m(e, t),
      (e.prototype.nextInfiniteTimeWindow = function(e) {
        var n = this._events;
        n.push(e),
          n.length > this._bufferSize && n.shift(),
          t.prototype.next.call(this, e);
      }),
      (e.prototype.nextTimeWindow = function(e) {
        this._events.push(new Fe(this._getNow(), e)),
          this._trimBufferThenGetEvents(),
          t.prototype.next.call(this, e);
      }),
      (e.prototype._subscribe = function(t) {
        var e,
          n = this._infiniteTimeWindow,
          r = n ? this._events : this._trimBufferThenGetEvents(),
          i = this.scheduler,
          o = r.length;
        if (this.closed) throw new qt();
        if (
          (this.isStopped || this.hasError
            ? (e = jt.EMPTY)
            : (this.observers.push(t), (e = new Wt(this, t))),
          i && t.add((t = new Ce(t, i))),
          n)
        )
          for (var s = 0; s < o && !t.closed; s++) t.next(r[s]);
        else for (s = 0; s < o && !t.closed; s++) t.next(r[s].value);
        return (
          this.hasError
            ? t.error(this.thrownError)
            : this.isStopped && t.complete(),
          e
        );
      }),
      (e.prototype._getNow = function() {
        return (this.scheduler || le).now();
      }),
      (e.prototype._trimBufferThenGetEvents = function() {
        for (
          var t = this._getNow(),
            e = this._bufferSize,
            n = this._windowTime,
            r = this._events,
            i = r.length,
            o = 0;
          o < i && !(t - r[o].time < n);

        )
          o++;
        return i > e && (o = Math.max(o, i - e)), o > 0 && r.splice(0, o), r;
      }),
      e
    );
  })(Kt),
  Fe = (function() {
    return function(t, e) {
      (this.time = t), (this.value = e);
    };
  })(),
  Se = (function(t) {
    function e() {
      var e = (null !== t && t.apply(this, arguments)) || this;
      return (e.value = null), (e.hasNext = !1), (e.hasCompleted = !1), e;
    }
    return (
      m(e, t),
      (e.prototype._subscribe = function(e) {
        return this.hasError
          ? (e.error(this.thrownError), jt.EMPTY)
          : this.hasCompleted && this.hasNext
          ? (e.next(this.value), e.complete(), jt.EMPTY)
          : t.prototype._subscribe.call(this, e);
      }),
      (e.prototype.next = function(t) {
        this.hasCompleted || ((this.value = t), (this.hasNext = !0));
      }),
      (e.prototype.error = function(e) {
        this.hasCompleted || t.prototype.error.call(this, e);
      }),
      (e.prototype.complete = function() {
        (this.hasCompleted = !0),
          this.hasNext && t.prototype.next.call(this, this.value),
          t.prototype.complete.call(this);
      }),
      e
    );
  })(Kt),
  Oe = 1,
  ke = {};
var Ae = function(t) {
    var e = Oe++;
    return (
      (ke[e] = t),
      Promise.resolve().then(function() {
        return (function(t) {
          var e = ke[t];
          e && e();
        })(e);
      }),
      e
    );
  },
  je = function(t) {
    delete ke[t];
  },
  Be = (function(t) {
    function e(e, n) {
      var r = t.call(this, e, n) || this;
      return (r.scheduler = e), (r.work = n), r;
    }
    return (
      m(e, t),
      (e.prototype.requestAsyncId = function(e, n, r) {
        return (
          void 0 === r && (r = 0),
          null !== r && r > 0
            ? t.prototype.requestAsyncId.call(this, e, n, r)
            : (e.actions.push(this),
              e.scheduled || (e.scheduled = Ae(e.flush.bind(e, null))))
        );
      }),
      (e.prototype.recycleAsyncId = function(e, n, r) {
        if (
          (void 0 === r && (r = 0),
          (null !== r && r > 0) || (null === r && this.delay > 0))
        )
          return t.prototype.recycleAsyncId.call(this, e, n, r);
        0 === e.actions.length && (je(n), (e.scheduled = void 0));
      }),
      e
    );
  })(se),
  Ie = new ((function(t) {
    function e() {
      return (null !== t && t.apply(this, arguments)) || this;
    }
    return (
      m(e, t),
      (e.prototype.flush = function(t) {
        (this.active = !0), (this.scheduled = void 0);
        var e,
          n = this.actions,
          r = -1,
          i = n.length;
        t = t || n.shift();
        do {
          if ((e = t.execute(t.state, t.delay))) break;
        } while (++r < i && (t = n.shift()));
        if (((this.active = !1), e)) {
          for (; ++r < i && (t = n.shift()); ) t.unsubscribe();
          throw e;
        }
      }),
      e
    );
  })(ae))(Be),
  Te = new ae(se),
  Me = (function(t) {
    function e(e, n) {
      var r = t.call(this, e, n) || this;
      return (r.scheduler = e), (r.work = n), r;
    }
    return (
      m(e, t),
      (e.prototype.requestAsyncId = function(e, n, r) {
        return (
          void 0 === r && (r = 0),
          null !== r && r > 0
            ? t.prototype.requestAsyncId.call(this, e, n, r)
            : (e.actions.push(this),
              e.scheduled ||
                (e.scheduled = requestAnimationFrame(function() {
                  return e.flush(null);
                })))
        );
      }),
      (e.prototype.recycleAsyncId = function(e, n, r) {
        if (
          (void 0 === r && (r = 0),
          (null !== r && r > 0) || (null === r && this.delay > 0))
        )
          return t.prototype.recycleAsyncId.call(this, e, n, r);
        0 === e.actions.length &&
          (cancelAnimationFrame(n), (e.scheduled = void 0));
      }),
      e
    );
  })(se),
  Pe = new ((function(t) {
    function e() {
      return (null !== t && t.apply(this, arguments)) || this;
    }
    return (
      m(e, t),
      (e.prototype.flush = function(t) {
        (this.active = !0), (this.scheduled = void 0);
        var e,
          n = this.actions,
          r = -1,
          i = n.length;
        t = t || n.shift();
        do {
          if ((e = t.execute(t.state, t.delay))) break;
        } while (++r < i && (t = n.shift()));
        if (((this.active = !1), e)) {
          for (; ++r < i && (t = n.shift()); ) t.unsubscribe();
          throw e;
        }
      }),
      e
    );
  })(ae))(Me),
  Ne = (function(t) {
    function e(e, n) {
      void 0 === e && (e = Re), void 0 === n && (n = Number.POSITIVE_INFINITY);
      var r =
        t.call(this, e, function() {
          return r.frame;
        }) || this;
      return (r.maxFrames = n), (r.frame = 0), (r.index = -1), r;
    }
    return (
      m(e, t),
      (e.prototype.flush = function() {
        for (
          var t, e, n = this.actions, r = this.maxFrames;
          (e = n[0]) &&
          e.delay <= r &&
          (n.shift(),
          (this.frame = e.delay),
          !(t = e.execute(e.state, e.delay)));

        );
        if (t) {
          for (; (e = n.shift()); ) e.unsubscribe();
          throw t;
        }
      }),
      (e.frameTimeFactor = 10),
      e
    );
  })(ae),
  Re = (function(t) {
    function e(e, n, r) {
      void 0 === r && (r = e.index += 1);
      var i = t.call(this, e, n) || this;
      return (
        (i.scheduler = e),
        (i.work = n),
        (i.index = r),
        (i.active = !0),
        (i.index = e.index = r),
        i
      );
    }
    return (
      m(e, t),
      (e.prototype.schedule = function(n, r) {
        if ((void 0 === r && (r = 0), !this.id))
          return t.prototype.schedule.call(this, n, r);
        this.active = !1;
        var i = new e(this.scheduler, this.work);
        return this.add(i), i.schedule(n, r);
      }),
      (e.prototype.requestAsyncId = function(t, n, r) {
        void 0 === r && (r = 0), (this.delay = t.frame + r);
        var i = t.actions;
        return i.push(this), i.sort(e.sortActions), !0;
      }),
      (e.prototype.recycleAsyncId = function(t, e, n) {}),
      (e.prototype._execute = function(e, n) {
        if (!0 === this.active) return t.prototype._execute.call(this, e, n);
      }),
      (e.sortActions = function(t, e) {
        return t.delay === e.delay
          ? t.index === e.index
            ? 0
            : t.index > e.index
            ? 1
            : -1
          : t.delay > e.delay
          ? 1
          : -1;
      }),
      e
    );
  })(se);
function Le(t) {
  return t;
}
var Ve = (function() {
    function t() {
      return (
        Error.call(this),
        (this.message = 'argument out of range'),
        (this.name = 'ArgumentOutOfRangeError'),
        this
      );
    }
    return (t.prototype = Object.create(Error.prototype)), t;
  })(),
  Ue = (function() {
    function t() {
      return (
        Error.call(this),
        (this.message = 'no elements in sequence'),
        (this.name = 'EmptyError'),
        this
      );
    }
    return (t.prototype = Object.create(Error.prototype)), t;
  })(),
  ze = (function() {
    function t() {
      return (
        Error.call(this),
        (this.message = 'Timeout has occurred'),
        (this.name = 'TimeoutError'),
        this
      );
    }
    return (t.prototype = Object.create(Error.prototype)), t;
  })();
function qe(t, e) {
  return function(n) {
    if ('function' != typeof t)
      throw new TypeError(
        'argument is not a function. Are you looking for `mapTo()`?'
      );
    return n.lift(new We(t, e));
  };
}
var We = (function() {
    function t(t, e) {
      (this.project = t), (this.thisArg = e);
    }
    return (
      (t.prototype.call = function(t, e) {
        return e.subscribe(new $e(t, this.project, this.thisArg));
      }),
      t
    );
  })(),
  $e = (function(t) {
    function e(e, n, r) {
      var i = t.call(this, e) || this;
      return (i.project = n), (i.count = 0), (i.thisArg = r || i), i;
    }
    return (
      m(e, t),
      (e.prototype._next = function(t) {
        var e;
        try {
          e = this.project.call(this.thisArg, t, this.count++);
        } catch (t) {
          return void this.destination.error(t);
        }
        this.destination.next(e);
      }),
      e
    );
  })(Tt);
function Ke(t) {
  var e = this,
    n = t.args,
    r = t.subscriber,
    i = t.params,
    o = i.callbackFunc,
    s = i.context,
    u = i.scheduler,
    c = i.subject;
  if (!c) {
    c = i.subject = new Se();
    try {
      o.apply(
        s,
        n.concat([
          function() {
            for (var t = [], n = 0; n < arguments.length; n++)
              t[n] = arguments[n];
            var r = t.length <= 1 ? t[0] : t;
            e.add(u.schedule(Ge, 0, { value: r, subject: c }));
          }
        ])
      );
    } catch (t) {
      c.error(t);
    }
  }
  this.add(c.subscribe(r));
}
function Ge(t) {
  var e = t.value,
    n = t.subject;
  n.next(e), n.complete();
}
function Ye(t) {
  var e = this,
    n = t.params,
    r = t.subscriber,
    i = t.context,
    o = n.callbackFunc,
    s = n.args,
    u = n.scheduler,
    c = n.subject;
  if (!c) {
    c = n.subject = new Se();
    try {
      o.apply(
        i,
        s.concat([
          function() {
            for (var t = [], n = 0; n < arguments.length; n++)
              t[n] = arguments[n];
            var r = t.shift();
            if (r) e.add(u.schedule(Qe, 0, { err: r, subject: c }));
            else {
              var i = t.length <= 1 ? t[0] : t;
              e.add(u.schedule(He, 0, { value: i, subject: c }));
            }
          }
        ])
      );
    } catch (t) {
      this.add(u.schedule(Qe, 0, { err: t, subject: c }));
    }
  }
  this.add(c.subscribe(r));
}
function He(t) {
  var e = t.value,
    n = t.subject;
  n.next(e), n.complete();
}
function Qe(t) {
  var e = t.err;
  t.subject.error(e);
}
var Je = (function(t) {
    function e() {
      return (null !== t && t.apply(this, arguments)) || this;
    }
    return (
      m(e, t),
      (e.prototype.notifyNext = function(t, e, n, r, i) {
        this.destination.next(e);
      }),
      (e.prototype.notifyError = function(t, e) {
        this.destination.error(t);
      }),
      (e.prototype.notifyComplete = function(t) {
        this.destination.complete();
      }),
      e
    );
  })(Tt),
  Ze = (function(t) {
    function e(e, n, r) {
      var i = t.call(this) || this;
      return (
        (i.parent = e), (i.outerValue = n), (i.outerIndex = r), (i.index = 0), i
      );
    }
    return (
      m(e, t),
      (e.prototype._next = function(t) {
        this.parent.notifyNext(
          this.outerValue,
          t,
          this.outerIndex,
          this.index++,
          this
        );
      }),
      (e.prototype._error = function(t) {
        this.parent.notifyError(t, this), this.unsubscribe();
      }),
      (e.prototype._complete = function() {
        this.parent.notifyComplete(this), this.unsubscribe();
      }),
      e
    );
  })(Tt);
function Xe() {
  return 'function' == typeof Symbol && Symbol.iterator
    ? Symbol.iterator
    : '@@iterator';
}
var tn = Xe(),
  en = function(t) {
    return t && 'number' == typeof t.length && 'function' != typeof t;
  };
function nn(t) {
  return !!t && 'function' != typeof t.subscribe && 'function' == typeof t.then;
}
var rn = function(t) {
  if (t && 'function' == typeof t[Nt])
    return (
      (n = t),
      function(t) {
        var e = n[Nt]();
        if ('function' != typeof e.subscribe)
          throw new TypeError(
            'Provided object does not correctly implement Symbol.observable'
          );
        return e.subscribe(t);
      }
    );
  if (en(t)) return be(t);
  if (nn(t))
    return (function(t) {
      return function(e) {
        return (
          t
            .then(
              function(t) {
                e.closed || (e.next(t), e.complete());
              },
              function(t) {
                return e.error(t);
              }
            )
            .then(null, Ft),
          e
        );
      };
    })(t);
  if (t && 'function' == typeof t[tn])
    return (
      (e = t),
      function(t) {
        for (var n = e[tn](); ; ) {
          var r = n.next();
          if (r.done) {
            t.complete();
            break;
          }
          if ((t.next(r.value), t.closed)) break;
        }
        return (
          'function' == typeof n.return &&
            t.add(function() {
              n.return && n.return();
            }),
          t
        );
      }
    );
  var e,
    n,
    r = kt(t) ? 'an invalid object' : "'" + t + "'";
  throw new TypeError(
    'You provided ' +
      r +
      ' where a stream was expected. You can provide an Observable, Promise, Array, or Iterable.'
  );
};
function on(t, e, n, r, i) {
  if ((void 0 === i && (i = new Ze(t, n, r)), !i.closed))
    return e instanceof Ut ? e.subscribe(i) : rn(e)(i);
}
var sn = {};
var un = (function() {
    function t(t) {
      this.resultSelector = t;
    }
    return (
      (t.prototype.call = function(t, e) {
        return e.subscribe(new cn(t, this.resultSelector));
      }),
      t
    );
  })(),
  cn = (function(t) {
    function e(e, n) {
      var r = t.call(this, e) || this;
      return (
        (r.resultSelector = n),
        (r.active = 0),
        (r.values = []),
        (r.observables = []),
        r
      );
    }
    return (
      m(e, t),
      (e.prototype._next = function(t) {
        this.values.push(sn), this.observables.push(t);
      }),
      (e.prototype._complete = function() {
        var t = this.observables,
          e = t.length;
        if (0 === e) this.destination.complete();
        else {
          (this.active = e), (this.toRespond = e);
          for (var n = 0; n < e; n++) {
            var r = t[n];
            this.add(on(this, r, r, n));
          }
        }
      }),
      (e.prototype.notifyComplete = function(t) {
        0 == (this.active -= 1) && this.destination.complete();
      }),
      (e.prototype.notifyNext = function(t, e, n, r, i) {
        var o = this.values,
          s = o[n],
          u = this.toRespond
            ? s === sn
              ? --this.toRespond
              : this.toRespond
            : 0;
        (o[n] = e),
          0 === u &&
            (this.resultSelector
              ? this._tryResultSelector(o)
              : this.destination.next(o.slice()));
      }),
      (e.prototype._tryResultSelector = function(t) {
        var e;
        try {
          e = this.resultSelector.apply(this, t);
        } catch (t) {
          return void this.destination.error(t);
        }
        this.destination.next(e);
      }),
      e
    );
  })(Je);
function an(t, e) {
  if (null != t) {
    if (
      (function(t) {
        return t && 'function' == typeof t[Nt];
      })(t)
    )
      return (function(t, e) {
        return new Ut(function(n) {
          var r = new jt();
          return (
            r.add(
              e.schedule(function() {
                var i = t[Nt]();
                r.add(
                  i.subscribe({
                    next: function(t) {
                      r.add(
                        e.schedule(function() {
                          return n.next(t);
                        })
                      );
                    },
                    error: function(t) {
                      r.add(
                        e.schedule(function() {
                          return n.error(t);
                        })
                      );
                    },
                    complete: function() {
                      r.add(
                        e.schedule(function() {
                          return n.complete();
                        })
                      );
                    }
                  })
                );
              })
            ),
            r
          );
        });
      })(t, e);
    if (nn(t))
      return (function(t, e) {
        return new Ut(function(n) {
          var r = new jt();
          return (
            r.add(
              e.schedule(function() {
                return t.then(
                  function(t) {
                    r.add(
                      e.schedule(function() {
                        n.next(t),
                          r.add(
                            e.schedule(function() {
                              return n.complete();
                            })
                          );
                      })
                    );
                  },
                  function(t) {
                    r.add(
                      e.schedule(function() {
                        return n.error(t);
                      })
                    );
                  }
                );
              })
            ),
            r
          );
        });
      })(t, e);
    if (en(t)) return ve(t, e);
    if (
      (function(t) {
        return t && 'function' == typeof t[tn];
      })(t) ||
      'string' == typeof t
    )
      return (function(t, e) {
        if (!t) throw new Error('Iterable cannot be null');
        return new Ut(function(n) {
          var r,
            i = new jt();
          return (
            i.add(function() {
              r && 'function' == typeof r.return && r.return();
            }),
            i.add(
              e.schedule(function() {
                (r = t[tn]()),
                  i.add(
                    e.schedule(function() {
                      if (!n.closed) {
                        var t, e;
                        try {
                          var i = r.next();
                          (t = i.value), (e = i.done);
                        } catch (t) {
                          return void n.error(t);
                        }
                        e ? n.complete() : (n.next(t), this.schedule());
                      }
                    })
                  );
              })
            ),
            i
          );
        });
      })(t, e);
  }
  throw new TypeError(((null !== t && typeof t) || t) + ' is not observable');
}
function ln(t, e) {
  return e ? an(t, e) : t instanceof Ut ? t : new Ut(rn(t));
}
function hn(t, e, n) {
  return (
    void 0 === n && (n = Number.POSITIVE_INFINITY),
    'function' == typeof e
      ? function(r) {
          return r.pipe(
            hn(function(n, r) {
              return ln(t(n, r)).pipe(
                qe(function(t, i) {
                  return e(n, t, r, i);
                })
              );
            }, n)
          );
        }
      : ('number' == typeof e && (n = e),
        function(e) {
          return e.lift(new fn(t, n));
        })
  );
}
var fn = (function() {
    function t(t, e) {
      void 0 === e && (e = Number.POSITIVE_INFINITY),
        (this.project = t),
        (this.concurrent = e);
    }
    return (
      (t.prototype.call = function(t, e) {
        return e.subscribe(new pn(t, this.project, this.concurrent));
      }),
      t
    );
  })(),
  pn = (function(t) {
    function e(e, n, r) {
      void 0 === r && (r = Number.POSITIVE_INFINITY);
      var i = t.call(this, e) || this;
      return (
        (i.project = n),
        (i.concurrent = r),
        (i.hasCompleted = !1),
        (i.buffer = []),
        (i.active = 0),
        (i.index = 0),
        i
      );
    }
    return (
      m(e, t),
      (e.prototype._next = function(t) {
        this.active < this.concurrent ? this._tryNext(t) : this.buffer.push(t);
      }),
      (e.prototype._tryNext = function(t) {
        var e,
          n = this.index++;
        try {
          e = this.project(t, n);
        } catch (t) {
          return void this.destination.error(t);
        }
        this.active++, this._innerSub(e, t, n);
      }),
      (e.prototype._innerSub = function(t, e, n) {
        var r = new Ze(this, void 0, void 0);
        this.destination.add(r), on(this, t, e, n, r);
      }),
      (e.prototype._complete = function() {
        (this.hasCompleted = !0),
          0 === this.active &&
            0 === this.buffer.length &&
            this.destination.complete(),
          this.unsubscribe();
      }),
      (e.prototype.notifyNext = function(t, e, n, r, i) {
        this.destination.next(e);
      }),
      (e.prototype.notifyComplete = function(t) {
        var e = this.buffer;
        this.remove(t),
          this.active--,
          e.length > 0
            ? this._next(e.shift())
            : 0 === this.active &&
              this.hasCompleted &&
              this.destination.complete();
      }),
      e
    );
  })(Je);
function dn(t) {
  return void 0 === t && (t = Number.POSITIVE_INFINITY), hn(Le, t);
}
function bn() {
  return dn(1);
}
function vn() {
  for (var t = [], e = 0; e < arguments.length; e++) t[e] = arguments[e];
  return bn()(ge.apply(void 0, t));
}
function yn(t) {
  return new Ut(function(e) {
    var n;
    try {
      n = t();
    } catch (t) {
      return void e.error(t);
    }
    return (n ? ln(n) : fe()).subscribe(e);
  });
}
function gn(t, e) {
  return new Ut(function(n) {
    var r = t.length;
    if (0 !== r)
      for (
        var i = new Array(r),
          o = 0,
          s = 0,
          u = function(u) {
            var c = ln(t[u]),
              a = !1;
            n.add(
              c.subscribe({
                next: function(t) {
                  a || ((a = !0), s++), (i[u] = t);
                },
                error: function(t) {
                  return n.error(t);
                },
                complete: function() {
                  (++o !== r && a) ||
                    (s === r &&
                      n.next(
                        e
                          ? e.reduce(function(t, e, n) {
                              return (t[e] = i[n]), t;
                            }, {})
                          : i
                      ),
                    n.complete());
                }
              })
            );
          },
          c = 0;
        c < r;
        c++
      )
        u(c);
    else n.complete();
  });
}
function mn(t) {
  var e = t.subscriber,
    n = t.condition;
  if (!e.closed) {
    if (t.needIterate)
      try {
        t.state = t.iterate(t.state);
      } catch (t) {
        return void e.error(t);
      }
    else t.needIterate = !0;
    if (n) {
      var r = void 0;
      try {
        r = n(t.state);
      } catch (t) {
        return void e.error(t);
      }
      if (!r) return void e.complete();
      if (e.closed) return;
    }
    var i;
    try {
      i = t.resultSelector(t.state);
    } catch (t) {
      return void e.error(t);
    }
    if (!e.closed && (e.next(i), !e.closed)) return this.schedule(t);
  }
}
function Dn(t) {
  return !Ot(t) && t - parseFloat(t) + 1 >= 0;
}
function wn(t) {
  var e = t.subscriber,
    n = t.counter,
    r = t.period;
  e.next(n), this.schedule({ subscriber: e, counter: n + 1, period: r }, r);
}
function _n() {
  for (var t = [], e = 0; e < arguments.length; e++) t[e] = arguments[e];
  var n = Number.POSITIVE_INFINITY,
    r = null,
    i = t[t.length - 1];
  return (
    pe(i)
      ? ((r = t.pop()),
        t.length > 1 && 'number' == typeof t[t.length - 1] && (n = t.pop()))
      : 'number' == typeof i && (n = t.pop()),
    null === r && 1 === t.length && t[0] instanceof Ut ? t[0] : dn(n)(ye(t, r))
  );
}
var Cn = new Ut(Rt);
function xn(t) {
  var e = t.keys,
    n = t.index,
    r = t.subscriber,
    i = t.subscription,
    o = t.obj;
  if (!r.closed)
    if (n < e.length) {
      var s = e[n];
      r.next([s, o[s]]),
        i.add(
          this.schedule({
            keys: e,
            index: n + 1,
            subscriber: r,
            subscription: i,
            obj: o
          })
        );
    } else r.complete();
}
function En(t, e) {
  function n() {
    return !n.pred.apply(n.thisArg, arguments);
  }
  return (n.pred = t), (n.thisArg = e), n;
}
function Fn(t, e) {
  return function(n) {
    return n.lift(new Sn(t, e));
  };
}
var Sn = (function() {
    function t(t, e) {
      (this.predicate = t), (this.thisArg = e);
    }
    return (
      (t.prototype.call = function(t, e) {
        return e.subscribe(new On(t, this.predicate, this.thisArg));
      }),
      t
    );
  })(),
  On = (function(t) {
    function e(e, n, r) {
      var i = t.call(this, e) || this;
      return (i.predicate = n), (i.thisArg = r), (i.count = 0), i;
    }
    return (
      m(e, t),
      (e.prototype._next = function(t) {
        var e;
        try {
          e = this.predicate.call(this.thisArg, t, this.count++);
        } catch (t) {
          return void this.destination.error(t);
        }
        e && this.destination.next(t);
      }),
      e
    );
  })(Tt);
function kn() {
  for (var t = [], e = 0; e < arguments.length; e++) t[e] = arguments[e];
  if (1 === t.length) {
    if (!Ot(t[0])) return t[0];
    t = t[0];
  }
  return ye(t, void 0).lift(new An());
}
var An = (function() {
    function t() {}
    return (
      (t.prototype.call = function(t, e) {
        return e.subscribe(new jn(t));
      }),
      t
    );
  })(),
  jn = (function(t) {
    function e(e) {
      var n = t.call(this, e) || this;
      return (n.hasFirst = !1), (n.observables = []), (n.subscriptions = []), n;
    }
    return (
      m(e, t),
      (e.prototype._next = function(t) {
        this.observables.push(t);
      }),
      (e.prototype._complete = function() {
        var t = this.observables,
          e = t.length;
        if (0 === e) this.destination.complete();
        else {
          for (var n = 0; n < e && !this.hasFirst; n++) {
            var r = t[n],
              i = on(this, r, r, n);
            this.subscriptions && this.subscriptions.push(i), this.add(i);
          }
          this.observables = null;
        }
      }),
      (e.prototype.notifyNext = function(t, e, n, r, i) {
        if (!this.hasFirst) {
          this.hasFirst = !0;
          for (var o = 0; o < this.subscriptions.length; o++)
            if (o !== n) {
              var s = this.subscriptions[o];
              s.unsubscribe(), this.remove(s);
            }
          this.subscriptions = null;
        }
        this.destination.next(e);
      }),
      e
    );
  })(Je);
function Bn(t) {
  var e = t.start,
    n = t.index,
    r = t.count,
    i = t.subscriber;
  n >= r
    ? i.complete()
    : (i.next(e),
      i.closed || ((t.index = n + 1), (t.start = e + 1), this.schedule(t)));
}
function In(t, e, n) {
  void 0 === t && (t = 0);
  var r = -1;
  return (
    Dn(e) ? (r = Number(e) < 1 ? 1 : Number(e)) : pe(e) && (n = e),
    pe(n) || (n = Te),
    new Ut(function(e) {
      var i = Dn(t) ? t : +t - n.now();
      return n.schedule(Tn, i, { index: 0, period: r, subscriber: e });
    })
  );
}
function Tn(t) {
  var e = t.index,
    n = t.period,
    r = t.subscriber;
  if ((r.next(e), !r.closed)) {
    if (-1 === n) return r.complete();
    (t.index = e + 1), this.schedule(t, n);
  }
}
function Mn() {
  for (var t = [], e = 0; e < arguments.length; e++) t[e] = arguments[e];
  var n = t[t.length - 1];
  return 'function' == typeof n && t.pop(), ye(t, void 0).lift(new Pn(n));
}
var Pn = (function() {
    function t(t) {
      this.resultSelector = t;
    }
    return (
      (t.prototype.call = function(t, e) {
        return e.subscribe(new Nn(t, this.resultSelector));
      }),
      t
    );
  })(),
  Nn = (function(t) {
    function e(e, n, r) {
      void 0 === r && (r = Object.create(null));
      var i = t.call(this, e) || this;
      return (
        (i.iterators = []),
        (i.active = 0),
        (i.resultSelector = 'function' == typeof n ? n : null),
        (i.values = r),
        i
      );
    }
    return (
      m(e, t),
      (e.prototype._next = function(t) {
        var e = this.iterators;
        Ot(t)
          ? e.push(new Ln(t))
          : 'function' == typeof t[tn]
          ? e.push(new Rn(t[tn]()))
          : e.push(new Vn(this.destination, this, t));
      }),
      (e.prototype._complete = function() {
        var t = this.iterators,
          e = t.length;
        if ((this.unsubscribe(), 0 !== e)) {
          this.active = e;
          for (var n = 0; n < e; n++) {
            var r = t[n];
            if (r.stillUnsubscribed) this.destination.add(r.subscribe(r, n));
            else this.active--;
          }
        } else this.destination.complete();
      }),
      (e.prototype.notifyInactive = function() {
        this.active--, 0 === this.active && this.destination.complete();
      }),
      (e.prototype.checkIterators = function() {
        for (
          var t = this.iterators, e = t.length, n = this.destination, r = 0;
          r < e;
          r++
        ) {
          if ('function' == typeof (s = t[r]).hasValue && !s.hasValue()) return;
        }
        var i = !1,
          o = [];
        for (r = 0; r < e; r++) {
          var s,
            u = (s = t[r]).next();
          if ((s.hasCompleted() && (i = !0), u.done)) return void n.complete();
          o.push(u.value);
        }
        this.resultSelector ? this._tryresultSelector(o) : n.next(o),
          i && n.complete();
      }),
      (e.prototype._tryresultSelector = function(t) {
        var e;
        try {
          e = this.resultSelector.apply(this, t);
        } catch (t) {
          return void this.destination.error(t);
        }
        this.destination.next(e);
      }),
      e
    );
  })(Tt),
  Rn = (function() {
    function t(t) {
      (this.iterator = t), (this.nextResult = t.next());
    }
    return (
      (t.prototype.hasValue = function() {
        return !0;
      }),
      (t.prototype.next = function() {
        var t = this.nextResult;
        return (this.nextResult = this.iterator.next()), t;
      }),
      (t.prototype.hasCompleted = function() {
        var t = this.nextResult;
        return t && t.done;
      }),
      t
    );
  })(),
  Ln = (function() {
    function t(t) {
      (this.array = t),
        (this.index = 0),
        (this.length = 0),
        (this.length = t.length);
    }
    return (
      (t.prototype[tn] = function() {
        return this;
      }),
      (t.prototype.next = function(t) {
        var e = this.index++,
          n = this.array;
        return e < this.length
          ? { value: n[e], done: !1 }
          : { value: null, done: !0 };
      }),
      (t.prototype.hasValue = function() {
        return this.array.length > this.index;
      }),
      (t.prototype.hasCompleted = function() {
        return this.array.length === this.index;
      }),
      t
    );
  })(),
  Vn = (function(t) {
    function e(e, n, r) {
      var i = t.call(this, e) || this;
      return (
        (i.parent = n),
        (i.observable = r),
        (i.stillUnsubscribed = !0),
        (i.buffer = []),
        (i.isComplete = !1),
        i
      );
    }
    return (
      m(e, t),
      (e.prototype[tn] = function() {
        return this;
      }),
      (e.prototype.next = function() {
        var t = this.buffer;
        return 0 === t.length && this.isComplete
          ? { value: null, done: !0 }
          : { value: t.shift(), done: !1 };
      }),
      (e.prototype.hasValue = function() {
        return this.buffer.length > 0;
      }),
      (e.prototype.hasCompleted = function() {
        return 0 === this.buffer.length && this.isComplete;
      }),
      (e.prototype.notifyComplete = function() {
        this.buffer.length > 0
          ? ((this.isComplete = !0), this.parent.notifyInactive())
          : this.destination.complete();
      }),
      (e.prototype.notifyNext = function(t, e, n, r, i) {
        this.buffer.push(e), this.parent.checkIterators();
      }),
      (e.prototype.subscribe = function(t, e) {
        return on(this, this.observable, this, e);
      }),
      e
    );
  })(Je),
  Un = Object.freeze({
    __proto__: null,
    Observable: Ut,
    ConnectableObservable: Jt,
    GroupedObservable: re,
    observable: Nt,
    Subject: Kt,
    BehaviorSubject: oe,
    ReplaySubject: Ee,
    AsyncSubject: Se,
    asapScheduler: Ie,
    asyncScheduler: Te,
    queueScheduler: le,
    animationFrameScheduler: Pe,
    VirtualTimeScheduler: Ne,
    VirtualAction: Re,
    Scheduler: ce,
    Subscription: jt,
    Subscriber: Tt,
    Notification: we,
    get NotificationKind() {
      return de;
    },
    pipe: Lt,
    noop: Rt,
    identity: Le,
    isObservable: function(t) {
      return (
        !!t &&
        (t instanceof Ut ||
          ('function' == typeof t.lift && 'function' == typeof t.subscribe))
      );
    },
    ArgumentOutOfRangeError: Ve,
    EmptyError: Ue,
    ObjectUnsubscribedError: qt,
    UnsubscriptionError: At,
    TimeoutError: ze,
    bindCallback: function t(e, n, r) {
      if (n) {
        if (!pe(n))
          return function() {
            for (var i = [], o = 0; o < arguments.length; o++)
              i[o] = arguments[o];
            return t(e, r)
              .apply(void 0, i)
              .pipe(
                qe(function(t) {
                  return Ot(t) ? n.apply(void 0, t) : n(t);
                })
              );
          };
        r = n;
      }
      return function() {
        for (var t = [], n = 0; n < arguments.length; n++) t[n] = arguments[n];
        var i,
          o = this,
          s = { context: o, subject: i, callbackFunc: e, scheduler: r };
        return new Ut(function(n) {
          if (r) {
            var u = { args: t, subscriber: n, params: s };
            return r.schedule(Ke, 0, u);
          }
          if (!i) {
            i = new Se();
            try {
              e.apply(
                o,
                t.concat([
                  function() {
                    for (var t = [], e = 0; e < arguments.length; e++)
                      t[e] = arguments[e];
                    i.next(t.length <= 1 ? t[0] : t), i.complete();
                  }
                ])
              );
            } catch (t) {
              Pt(i) ? i.error(t) : console.warn(t);
            }
          }
          return i.subscribe(n);
        });
      };
    },
    bindNodeCallback: function t(e, n, r) {
      if (n) {
        if (!pe(n))
          return function() {
            for (var i = [], o = 0; o < arguments.length; o++)
              i[o] = arguments[o];
            return t(e, r)
              .apply(void 0, i)
              .pipe(
                qe(function(t) {
                  return Ot(t) ? n.apply(void 0, t) : n(t);
                })
              );
          };
        r = n;
      }
      return function() {
        for (var t = [], n = 0; n < arguments.length; n++) t[n] = arguments[n];
        var i = {
          subject: void 0,
          args: t,
          callbackFunc: e,
          scheduler: r,
          context: this
        };
        return new Ut(function(n) {
          var o = i.context,
            s = i.subject;
          if (r)
            return r.schedule(Ye, 0, { params: i, subscriber: n, context: o });
          if (!s) {
            s = i.subject = new Se();
            try {
              e.apply(
                o,
                t.concat([
                  function() {
                    for (var t = [], e = 0; e < arguments.length; e++)
                      t[e] = arguments[e];
                    var n = t.shift();
                    n
                      ? s.error(n)
                      : (s.next(t.length <= 1 ? t[0] : t), s.complete());
                  }
                ])
              );
            } catch (t) {
              Pt(s) ? s.error(t) : console.warn(t);
            }
          }
          return s.subscribe(n);
        });
      };
    },
    combineLatest: function() {
      for (var t = [], e = 0; e < arguments.length; e++) t[e] = arguments[e];
      var n = null,
        r = null;
      return (
        pe(t[t.length - 1]) && (r = t.pop()),
        'function' == typeof t[t.length - 1] && (n = t.pop()),
        1 === t.length && Ot(t[0]) && (t = t[0]),
        ye(t, r).lift(new un(n))
      );
    },
    concat: vn,
    defer: yn,
    empty: fe,
    forkJoin: function() {
      for (var t = [], e = 0; e < arguments.length; e++) t[e] = arguments[e];
      if (1 === t.length) {
        var n = t[0];
        if (Ot(n)) return gn(n, null);
        if (kt(n) && Object.getPrototypeOf(n) === Object.prototype) {
          var r = Object.keys(n);
          return gn(
            r.map(function(t) {
              return n[t];
            }),
            r
          );
        }
      }
      if ('function' == typeof t[t.length - 1]) {
        var i = t.pop();
        return gn((t = 1 === t.length && Ot(t[0]) ? t[0] : t), null).pipe(
          qe(function(t) {
            return i.apply(void 0, t);
          })
        );
      }
      return gn(t, null);
    },
    from: ln,
    fromEvent: function t(e, n, r, i) {
      return (
        Ct(r) && ((i = r), (r = void 0)),
        i
          ? t(e, n, r).pipe(
              qe(function(t) {
                return Ot(t) ? i.apply(void 0, t) : i(t);
              })
            )
          : new Ut(function(t) {
              !(function t(e, n, r, i, o) {
                var s;
                if (
                  (function(t) {
                    return (
                      t &&
                      'function' == typeof t.addEventListener &&
                      'function' == typeof t.removeEventListener
                    );
                  })(e)
                ) {
                  var u = e;
                  e.addEventListener(n, r, o),
                    (s = function() {
                      return u.removeEventListener(n, r, o);
                    });
                } else if (
                  (function(t) {
                    return (
                      t &&
                      'function' == typeof t.on &&
                      'function' == typeof t.off
                    );
                  })(e)
                ) {
                  var c = e;
                  e.on(n, r),
                    (s = function() {
                      return c.off(n, r);
                    });
                } else if (
                  (function(t) {
                    return (
                      t &&
                      'function' == typeof t.addListener &&
                      'function' == typeof t.removeListener
                    );
                  })(e)
                ) {
                  var a = e;
                  e.addListener(n, r),
                    (s = function() {
                      return a.removeListener(n, r);
                    });
                } else {
                  if (!e || !e.length)
                    throw new TypeError('Invalid event target');
                  for (var l = 0, h = e.length; l < h; l++) t(e[l], n, r, i, o);
                }
                i.add(s);
              })(
                e,
                n,
                function(e) {
                  arguments.length > 1
                    ? t.next(Array.prototype.slice.call(arguments))
                    : t.next(e);
                },
                t,
                r
              );
            })
      );
    },
    fromEventPattern: function t(e, n, r) {
      return r
        ? t(e, n).pipe(
            qe(function(t) {
              return Ot(t) ? r.apply(void 0, t) : r(t);
            })
          )
        : new Ut(function(t) {
            var r,
              i = function() {
                for (var e = [], n = 0; n < arguments.length; n++)
                  e[n] = arguments[n];
                return t.next(1 === e.length ? e[0] : e);
              };
            try {
              r = e(i);
            } catch (e) {
              return void t.error(e);
            }
            if (Ct(n))
              return function() {
                return n(i, r);
              };
          });
    },
    generate: function(t, e, n, r, i) {
      var o, s;
      if (1 == arguments.length) {
        var u = t;
        (s = u.initialState),
          (e = u.condition),
          (n = u.iterate),
          (o = u.resultSelector || Le),
          (i = u.scheduler);
      } else
        void 0 === r || pe(r)
          ? ((s = t), (o = Le), (i = r))
          : ((s = t), (o = r));
      return new Ut(function(t) {
        var r = s;
        if (i)
          return i.schedule(mn, 0, {
            subscriber: t,
            iterate: n,
            condition: e,
            resultSelector: o,
            state: r
          });
        for (;;) {
          if (e) {
            var u = void 0;
            try {
              u = e(r);
            } catch (e) {
              return void t.error(e);
            }
            if (!u) {
              t.complete();
              break;
            }
          }
          var c = void 0;
          try {
            c = o(r);
          } catch (e) {
            return void t.error(e);
          }
          if ((t.next(c), t.closed)) break;
          try {
            r = n(r);
          } catch (e) {
            return void t.error(e);
          }
        }
      });
    },
    iif: function(t, e, n) {
      return (
        void 0 === e && (e = he),
        void 0 === n && (n = he),
        yn(function() {
          return t() ? e : n;
        })
      );
    },
    interval: function(t, e) {
      return (
        void 0 === t && (t = 0),
        void 0 === e && (e = Te),
        (!Dn(t) || t < 0) && (t = 0),
        (e && 'function' == typeof e.schedule) || (e = Te),
        new Ut(function(n) {
          return (
            n.add(e.schedule(wn, t, { subscriber: n, counter: 0, period: t })),
            n
          );
        })
      );
    },
    merge: _n,
    never: function() {
      return Cn;
    },
    of: ge,
    onErrorResumeNext: function t() {
      for (var e = [], n = 0; n < arguments.length; n++) e[n] = arguments[n];
      if (0 === e.length) return he;
      var r = e[0],
        i = e.slice(1);
      return 1 === e.length && Ot(r)
        ? t.apply(void 0, r)
        : new Ut(function(e) {
            var n = function() {
              return e.add(t.apply(void 0, i).subscribe(e));
            };
            return ln(r).subscribe({
              next: function(t) {
                e.next(t);
              },
              error: n,
              complete: n
            });
          });
    },
    pairs: function(t, e) {
      return new Ut(
        e
          ? function(n) {
              var r = Object.keys(t),
                i = new jt();
              return (
                i.add(
                  e.schedule(xn, 0, {
                    keys: r,
                    index: 0,
                    subscriber: n,
                    subscription: i,
                    obj: t
                  })
                ),
                i
              );
            }
          : function(e) {
              for (
                var n = Object.keys(t), r = 0;
                r < n.length && !e.closed;
                r++
              ) {
                var i = n[r];
                t.hasOwnProperty(i) && e.next([i, t[i]]);
              }
              e.complete();
            }
      );
    },
    partition: function(t, e, n) {
      return [Fn(e, n)(new Ut(rn(t))), Fn(En(e, n))(new Ut(rn(t)))];
    },
    race: kn,
    range: function(t, e, n) {
      return (
        void 0 === t && (t = 0),
        new Ut(function(r) {
          void 0 === e && ((e = t), (t = 0));
          var i = 0,
            o = t;
          if (n)
            return n.schedule(Bn, 0, {
              index: i,
              count: e,
              start: t,
              subscriber: r
            });
          for (;;) {
            if (i++ >= e) {
              r.complete();
              break;
            }
            if ((r.next(o++), r.closed)) break;
          }
        })
      );
    },
    throwError: me,
    timer: In,
    using: function(t, e) {
      return new Ut(function(n) {
        var r, i;
        try {
          r = t();
        } catch (t) {
          return void n.error(t);
        }
        try {
          i = e(r);
        } catch (t) {
          return void n.error(t);
        }
        var o = (i ? ln(i) : he).subscribe(n);
        return function() {
          o.unsubscribe(), r && r.unsubscribe();
        };
      });
    },
    zip: Mn,
    scheduled: an,
    EMPTY: he,
    NEVER: Cn,
    config: Et
  });
function zn(t) {
  return function(e) {
    return e.lift(new qn(t));
  };
}
var qn = (function() {
    function t(t) {
      this.durationSelector = t;
    }
    return (
      (t.prototype.call = function(t, e) {
        return e.subscribe(new Wn(t, this.durationSelector));
      }),
      t
    );
  })(),
  Wn = (function(t) {
    function e(e, n) {
      var r = t.call(this, e) || this;
      return (r.durationSelector = n), (r.hasValue = !1), r;
    }
    return (
      m(e, t),
      (e.prototype._next = function(t) {
        if (((this.value = t), (this.hasValue = !0), !this.throttled)) {
          var e = void 0;
          try {
            e = (0, this.durationSelector)(t);
          } catch (t) {
            return this.destination.error(t);
          }
          var n = on(this, e);
          !n || n.closed
            ? this.clearThrottle()
            : this.add((this.throttled = n));
        }
      }),
      (e.prototype.clearThrottle = function() {
        var t = this.value,
          e = this.hasValue,
          n = this.throttled;
        n && (this.remove(n), (this.throttled = null), n.unsubscribe()),
          e &&
            ((this.value = null),
            (this.hasValue = !1),
            this.destination.next(t));
      }),
      (e.prototype.notifyNext = function(t, e, n, r) {
        this.clearThrottle();
      }),
      (e.prototype.notifyComplete = function() {
        this.clearThrottle();
      }),
      e
    );
  })(Je);
var $n = (function() {
    function t(t) {
      this.closingNotifier = t;
    }
    return (
      (t.prototype.call = function(t, e) {
        return e.subscribe(new Kn(t, this.closingNotifier));
      }),
      t
    );
  })(),
  Kn = (function(t) {
    function e(e, n) {
      var r = t.call(this, e) || this;
      return (r.buffer = []), r.add(on(r, n)), r;
    }
    return (
      m(e, t),
      (e.prototype._next = function(t) {
        this.buffer.push(t);
      }),
      (e.prototype.notifyNext = function(t, e, n, r, i) {
        var o = this.buffer;
        (this.buffer = []), this.destination.next(o);
      }),
      e
    );
  })(Je);
var Gn = (function() {
    function t(t, e) {
      (this.bufferSize = t),
        (this.startBufferEvery = e),
        (this.subscriberClass = e && t !== e ? Hn : Yn);
    }
    return (
      (t.prototype.call = function(t, e) {
        return e.subscribe(
          new this.subscriberClass(t, this.bufferSize, this.startBufferEvery)
        );
      }),
      t
    );
  })(),
  Yn = (function(t) {
    function e(e, n) {
      var r = t.call(this, e) || this;
      return (r.bufferSize = n), (r.buffer = []), r;
    }
    return (
      m(e, t),
      (e.prototype._next = function(t) {
        var e = this.buffer;
        e.push(t),
          e.length == this.bufferSize &&
            (this.destination.next(e), (this.buffer = []));
      }),
      (e.prototype._complete = function() {
        var e = this.buffer;
        e.length > 0 && this.destination.next(e),
          t.prototype._complete.call(this);
      }),
      e
    );
  })(Tt),
  Hn = (function(t) {
    function e(e, n, r) {
      var i = t.call(this, e) || this;
      return (
        (i.bufferSize = n),
        (i.startBufferEvery = r),
        (i.buffers = []),
        (i.count = 0),
        i
      );
    }
    return (
      m(e, t),
      (e.prototype._next = function(t) {
        var e = this.bufferSize,
          n = this.startBufferEvery,
          r = this.buffers,
          i = this.count;
        this.count++, i % n == 0 && r.push([]);
        for (var o = r.length; o--; ) {
          var s = r[o];
          s.push(t),
            s.length === e && (r.splice(o, 1), this.destination.next(s));
        }
      }),
      (e.prototype._complete = function() {
        for (var e = this.buffers, n = this.destination; e.length > 0; ) {
          var r = e.shift();
          r.length > 0 && n.next(r);
        }
        t.prototype._complete.call(this);
      }),
      e
    );
  })(Tt);
var Qn = (function() {
    function t(t, e, n, r) {
      (this.bufferTimeSpan = t),
        (this.bufferCreationInterval = e),
        (this.maxBufferSize = n),
        (this.scheduler = r);
    }
    return (
      (t.prototype.call = function(t, e) {
        return e.subscribe(
          new Zn(
            t,
            this.bufferTimeSpan,
            this.bufferCreationInterval,
            this.maxBufferSize,
            this.scheduler
          )
        );
      }),
      t
    );
  })(),
  Jn = (function() {
    return function() {
      this.buffer = [];
    };
  })(),
  Zn = (function(t) {
    function e(e, n, r, i, o) {
      var s = t.call(this, e) || this;
      (s.bufferTimeSpan = n),
        (s.bufferCreationInterval = r),
        (s.maxBufferSize = i),
        (s.scheduler = o),
        (s.contexts = []);
      var u = s.openContext();
      if (((s.timespanOnly = null == r || r < 0), s.timespanOnly)) {
        var c = { subscriber: s, context: u, bufferTimeSpan: n };
        s.add((u.closeAction = o.schedule(Xn, n, c)));
      } else {
        var a = { subscriber: s, context: u },
          l = {
            bufferTimeSpan: n,
            bufferCreationInterval: r,
            subscriber: s,
            scheduler: o
          };
        s.add((u.closeAction = o.schedule(er, n, a))),
          s.add(o.schedule(tr, r, l));
      }
      return s;
    }
    return (
      m(e, t),
      (e.prototype._next = function(t) {
        for (var e, n = this.contexts, r = n.length, i = 0; i < r; i++) {
          var o = n[i],
            s = o.buffer;
          s.push(t), s.length == this.maxBufferSize && (e = o);
        }
        e && this.onBufferFull(e);
      }),
      (e.prototype._error = function(e) {
        (this.contexts.length = 0), t.prototype._error.call(this, e);
      }),
      (e.prototype._complete = function() {
        for (var e = this.contexts, n = this.destination; e.length > 0; ) {
          var r = e.shift();
          n.next(r.buffer);
        }
        t.prototype._complete.call(this);
      }),
      (e.prototype._unsubscribe = function() {
        this.contexts = null;
      }),
      (e.prototype.onBufferFull = function(t) {
        this.closeContext(t);
        var e = t.closeAction;
        if (
          (e.unsubscribe(), this.remove(e), !this.closed && this.timespanOnly)
        ) {
          t = this.openContext();
          var n = this.bufferTimeSpan,
            r = { subscriber: this, context: t, bufferTimeSpan: n };
          this.add((t.closeAction = this.scheduler.schedule(Xn, n, r)));
        }
      }),
      (e.prototype.openContext = function() {
        var t = new Jn();
        return this.contexts.push(t), t;
      }),
      (e.prototype.closeContext = function(t) {
        this.destination.next(t.buffer);
        var e = this.contexts;
        (e ? e.indexOf(t) : -1) >= 0 && e.splice(e.indexOf(t), 1);
      }),
      e
    );
  })(Tt);
function Xn(t) {
  var e = t.subscriber,
    n = t.context;
  n && e.closeContext(n),
    e.closed ||
      ((t.context = e.openContext()),
      (t.context.closeAction = this.schedule(t, t.bufferTimeSpan)));
}
function tr(t) {
  var e = t.bufferCreationInterval,
    n = t.bufferTimeSpan,
    r = t.subscriber,
    i = t.scheduler,
    o = r.openContext();
  r.closed ||
    (r.add((o.closeAction = i.schedule(er, n, { subscriber: r, context: o }))),
    this.schedule(t, e));
}
function er(t) {
  var e = t.subscriber,
    n = t.context;
  e.closeContext(n);
}
var nr = (function() {
    function t(t, e) {
      (this.openings = t), (this.closingSelector = e);
    }
    return (
      (t.prototype.call = function(t, e) {
        return e.subscribe(new rr(t, this.openings, this.closingSelector));
      }),
      t
    );
  })(),
  rr = (function(t) {
    function e(e, n, r) {
      var i = t.call(this, e) || this;
      return (
        (i.openings = n),
        (i.closingSelector = r),
        (i.contexts = []),
        i.add(on(i, n)),
        i
      );
    }
    return (
      m(e, t),
      (e.prototype._next = function(t) {
        for (var e = this.contexts, n = e.length, r = 0; r < n; r++)
          e[r].buffer.push(t);
      }),
      (e.prototype._error = function(e) {
        for (var n = this.contexts; n.length > 0; ) {
          var r = n.shift();
          r.subscription.unsubscribe(),
            (r.buffer = null),
            (r.subscription = null);
        }
        (this.contexts = null), t.prototype._error.call(this, e);
      }),
      (e.prototype._complete = function() {
        for (var e = this.contexts; e.length > 0; ) {
          var n = e.shift();
          this.destination.next(n.buffer),
            n.subscription.unsubscribe(),
            (n.buffer = null),
            (n.subscription = null);
        }
        (this.contexts = null), t.prototype._complete.call(this);
      }),
      (e.prototype.notifyNext = function(t, e, n, r, i) {
        t ? this.closeBuffer(t) : this.openBuffer(e);
      }),
      (e.prototype.notifyComplete = function(t) {
        this.closeBuffer(t.context);
      }),
      (e.prototype.openBuffer = function(t) {
        try {
          var e = this.closingSelector.call(this, t);
          e && this.trySubscribe(e);
        } catch (t) {
          this._error(t);
        }
      }),
      (e.prototype.closeBuffer = function(t) {
        var e = this.contexts;
        if (e && t) {
          var n = t.buffer,
            r = t.subscription;
          this.destination.next(n),
            e.splice(e.indexOf(t), 1),
            this.remove(r),
            r.unsubscribe();
        }
      }),
      (e.prototype.trySubscribe = function(t) {
        var e = this.contexts,
          n = new jt(),
          r = { buffer: [], subscription: n };
        e.push(r);
        var i = on(this, t, r);
        !i || i.closed
          ? this.closeBuffer(r)
          : ((i.context = r), this.add(i), n.add(i));
      }),
      e
    );
  })(Je);
var ir = (function() {
    function t(t) {
      this.closingSelector = t;
    }
    return (
      (t.prototype.call = function(t, e) {
        return e.subscribe(new or(t, this.closingSelector));
      }),
      t
    );
  })(),
  or = (function(t) {
    function e(e, n) {
      var r = t.call(this, e) || this;
      return (r.closingSelector = n), (r.subscribing = !1), r.openBuffer(), r;
    }
    return (
      m(e, t),
      (e.prototype._next = function(t) {
        this.buffer.push(t);
      }),
      (e.prototype._complete = function() {
        var e = this.buffer;
        e && this.destination.next(e), t.prototype._complete.call(this);
      }),
      (e.prototype._unsubscribe = function() {
        (this.buffer = null), (this.subscribing = !1);
      }),
      (e.prototype.notifyNext = function(t, e, n, r, i) {
        this.openBuffer();
      }),
      (e.prototype.notifyComplete = function() {
        this.subscribing ? this.complete() : this.openBuffer();
      }),
      (e.prototype.openBuffer = function() {
        var t = this.closingSubscription;
        t && (this.remove(t), t.unsubscribe());
        var e,
          n = this.buffer;
        this.buffer && this.destination.next(n), (this.buffer = []);
        try {
          e = (0, this.closingSelector)();
        } catch (t) {
          return this.error(t);
        }
        (t = new jt()),
          (this.closingSubscription = t),
          this.add(t),
          (this.subscribing = !0),
          t.add(on(this, e)),
          (this.subscribing = !1);
      }),
      e
    );
  })(Je);
var sr = (function() {
    function t(t) {
      this.selector = t;
    }
    return (
      (t.prototype.call = function(t, e) {
        return e.subscribe(new ur(t, this.selector, this.caught));
      }),
      t
    );
  })(),
  ur = (function(t) {
    function e(e, n, r) {
      var i = t.call(this, e) || this;
      return (i.selector = n), (i.caught = r), i;
    }
    return (
      m(e, t),
      (e.prototype.error = function(e) {
        if (!this.isStopped) {
          var n = void 0;
          try {
            n = this.selector(e, this.caught);
          } catch (e) {
            return void t.prototype.error.call(this, e);
          }
          this._unsubscribeAndRecycle();
          var r = new Ze(this, void 0, void 0);
          this.add(r), on(this, n, void 0, void 0, r);
        }
      }),
      e
    );
  })(Je);
function cr(t, e) {
  return hn(t, e, 1);
}
var ar = (function() {
    function t(t, e) {
      (this.predicate = t), (this.source = e);
    }
    return (
      (t.prototype.call = function(t, e) {
        return e.subscribe(new lr(t, this.predicate, this.source));
      }),
      t
    );
  })(),
  lr = (function(t) {
    function e(e, n, r) {
      var i = t.call(this, e) || this;
      return (i.predicate = n), (i.source = r), (i.count = 0), (i.index = 0), i;
    }
    return (
      m(e, t),
      (e.prototype._next = function(t) {
        this.predicate ? this._tryPredicate(t) : this.count++;
      }),
      (e.prototype._tryPredicate = function(t) {
        var e;
        try {
          e = this.predicate(t, this.index++, this.source);
        } catch (t) {
          return void this.destination.error(t);
        }
        e && this.count++;
      }),
      (e.prototype._complete = function() {
        this.destination.next(this.count), this.destination.complete();
      }),
      e
    );
  })(Tt);
var hr = (function() {
    function t(t) {
      this.durationSelector = t;
    }
    return (
      (t.prototype.call = function(t, e) {
        return e.subscribe(new fr(t, this.durationSelector));
      }),
      t
    );
  })(),
  fr = (function(t) {
    function e(e, n) {
      var r = t.call(this, e) || this;
      return (
        (r.durationSelector = n),
        (r.hasValue = !1),
        (r.durationSubscription = null),
        r
      );
    }
    return (
      m(e, t),
      (e.prototype._next = function(t) {
        try {
          var e = this.durationSelector.call(this, t);
          e && this._tryNext(t, e);
        } catch (t) {
          this.destination.error(t);
        }
      }),
      (e.prototype._complete = function() {
        this.emitValue(), this.destination.complete();
      }),
      (e.prototype._tryNext = function(t, e) {
        var n = this.durationSubscription;
        (this.value = t),
          (this.hasValue = !0),
          n && (n.unsubscribe(), this.remove(n)),
          (n = on(this, e)) &&
            !n.closed &&
            this.add((this.durationSubscription = n));
      }),
      (e.prototype.notifyNext = function(t, e, n, r, i) {
        this.emitValue();
      }),
      (e.prototype.notifyComplete = function() {
        this.emitValue();
      }),
      (e.prototype.emitValue = function() {
        if (this.hasValue) {
          var e = this.value,
            n = this.durationSubscription;
          n &&
            ((this.durationSubscription = null),
            n.unsubscribe(),
            this.remove(n)),
            (this.value = null),
            (this.hasValue = !1),
            t.prototype._next.call(this, e);
        }
      }),
      e
    );
  })(Je);
var pr = (function() {
    function t(t, e) {
      (this.dueTime = t), (this.scheduler = e);
    }
    return (
      (t.prototype.call = function(t, e) {
        return e.subscribe(new dr(t, this.dueTime, this.scheduler));
      }),
      t
    );
  })(),
  dr = (function(t) {
    function e(e, n, r) {
      var i = t.call(this, e) || this;
      return (
        (i.dueTime = n),
        (i.scheduler = r),
        (i.debouncedSubscription = null),
        (i.lastValue = null),
        (i.hasValue = !1),
        i
      );
    }
    return (
      m(e, t),
      (e.prototype._next = function(t) {
        this.clearDebounce(),
          (this.lastValue = t),
          (this.hasValue = !0),
          this.add(
            (this.debouncedSubscription = this.scheduler.schedule(
              br,
              this.dueTime,
              this
            ))
          );
      }),
      (e.prototype._complete = function() {
        this.debouncedNext(), this.destination.complete();
      }),
      (e.prototype.debouncedNext = function() {
        if ((this.clearDebounce(), this.hasValue)) {
          var t = this.lastValue;
          (this.lastValue = null),
            (this.hasValue = !1),
            this.destination.next(t);
        }
      }),
      (e.prototype.clearDebounce = function() {
        var t = this.debouncedSubscription;
        null !== t &&
          (this.remove(t),
          t.unsubscribe(),
          (this.debouncedSubscription = null));
      }),
      e
    );
  })(Tt);
function br(t) {
  t.debouncedNext();
}
function vr(t) {
  return (
    void 0 === t && (t = null),
    function(e) {
      return e.lift(new yr(t));
    }
  );
}
var yr = (function() {
    function t(t) {
      this.defaultValue = t;
    }
    return (
      (t.prototype.call = function(t, e) {
        return e.subscribe(new gr(t, this.defaultValue));
      }),
      t
    );
  })(),
  gr = (function(t) {
    function e(e, n) {
      var r = t.call(this, e) || this;
      return (r.defaultValue = n), (r.isEmpty = !0), r;
    }
    return (
      m(e, t),
      (e.prototype._next = function(t) {
        (this.isEmpty = !1), this.destination.next(t);
      }),
      (e.prototype._complete = function() {
        this.isEmpty && this.destination.next(this.defaultValue),
          this.destination.complete();
      }),
      e
    );
  })(Tt);
function mr(t) {
  return t instanceof Date && !isNaN(+t);
}
var Dr = (function() {
    function t(t, e) {
      (this.delay = t), (this.scheduler = e);
    }
    return (
      (t.prototype.call = function(t, e) {
        return e.subscribe(new wr(t, this.delay, this.scheduler));
      }),
      t
    );
  })(),
  wr = (function(t) {
    function e(e, n, r) {
      var i = t.call(this, e) || this;
      return (
        (i.delay = n),
        (i.scheduler = r),
        (i.queue = []),
        (i.active = !1),
        (i.errored = !1),
        i
      );
    }
    return (
      m(e, t),
      (e.dispatch = function(t) {
        for (
          var e = t.source, n = e.queue, r = t.scheduler, i = t.destination;
          n.length > 0 && n[0].time - r.now() <= 0;

        )
          n.shift().notification.observe(i);
        if (n.length > 0) {
          var o = Math.max(0, n[0].time - r.now());
          this.schedule(t, o);
        } else this.unsubscribe(), (e.active = !1);
      }),
      (e.prototype._schedule = function(t) {
        (this.active = !0),
          this.destination.add(
            t.schedule(e.dispatch, this.delay, {
              source: this,
              destination: this.destination,
              scheduler: t
            })
          );
      }),
      (e.prototype.scheduleNotification = function(t) {
        if (!0 !== this.errored) {
          var e = this.scheduler,
            n = new _r(e.now() + this.delay, t);
          this.queue.push(n), !1 === this.active && this._schedule(e);
        }
      }),
      (e.prototype._next = function(t) {
        this.scheduleNotification(we.createNext(t));
      }),
      (e.prototype._error = function(t) {
        (this.errored = !0),
          (this.queue = []),
          this.destination.error(t),
          this.unsubscribe();
      }),
      (e.prototype._complete = function() {
        this.scheduleNotification(we.createComplete()), this.unsubscribe();
      }),
      e
    );
  })(Tt),
  _r = (function() {
    return function(t, e) {
      (this.time = t), (this.notification = e);
    };
  })();
var Cr = (function() {
    function t(t) {
      this.delayDurationSelector = t;
    }
    return (
      (t.prototype.call = function(t, e) {
        return e.subscribe(new xr(t, this.delayDurationSelector));
      }),
      t
    );
  })(),
  xr = (function(t) {
    function e(e, n) {
      var r = t.call(this, e) || this;
      return (
        (r.delayDurationSelector = n),
        (r.completed = !1),
        (r.delayNotifierSubscriptions = []),
        (r.index = 0),
        r
      );
    }
    return (
      m(e, t),
      (e.prototype.notifyNext = function(t, e, n, r, i) {
        this.destination.next(t),
          this.removeSubscription(i),
          this.tryComplete();
      }),
      (e.prototype.notifyError = function(t, e) {
        this._error(t);
      }),
      (e.prototype.notifyComplete = function(t) {
        var e = this.removeSubscription(t);
        e && this.destination.next(e), this.tryComplete();
      }),
      (e.prototype._next = function(t) {
        var e = this.index++;
        try {
          var n = this.delayDurationSelector(t, e);
          n && this.tryDelay(n, t);
        } catch (t) {
          this.destination.error(t);
        }
      }),
      (e.prototype._complete = function() {
        (this.completed = !0), this.tryComplete(), this.unsubscribe();
      }),
      (e.prototype.removeSubscription = function(t) {
        t.unsubscribe();
        var e = this.delayNotifierSubscriptions.indexOf(t);
        return (
          -1 !== e && this.delayNotifierSubscriptions.splice(e, 1), t.outerValue
        );
      }),
      (e.prototype.tryDelay = function(t, e) {
        var n = on(this, t, e);
        n &&
          !n.closed &&
          (this.destination.add(n), this.delayNotifierSubscriptions.push(n));
      }),
      (e.prototype.tryComplete = function() {
        this.completed &&
          0 === this.delayNotifierSubscriptions.length &&
          this.destination.complete();
      }),
      e
    );
  })(Je),
  Er = (function(t) {
    function e(e, n) {
      var r = t.call(this) || this;
      return (r.source = e), (r.subscriptionDelay = n), r;
    }
    return (
      m(e, t),
      (e.prototype._subscribe = function(t) {
        this.subscriptionDelay.subscribe(new Fr(t, this.source));
      }),
      e
    );
  })(Ut),
  Fr = (function(t) {
    function e(e, n) {
      var r = t.call(this) || this;
      return (r.parent = e), (r.source = n), (r.sourceSubscribed = !1), r;
    }
    return (
      m(e, t),
      (e.prototype._next = function(t) {
        this.subscribeToSource();
      }),
      (e.prototype._error = function(t) {
        this.unsubscribe(), this.parent.error(t);
      }),
      (e.prototype._complete = function() {
        this.unsubscribe(), this.subscribeToSource();
      }),
      (e.prototype.subscribeToSource = function() {
        this.sourceSubscribed ||
          ((this.sourceSubscribed = !0),
          this.unsubscribe(),
          this.source.subscribe(this.parent));
      }),
      e
    );
  })(Tt);
var Sr = (function() {
    function t() {}
    return (
      (t.prototype.call = function(t, e) {
        return e.subscribe(new Or(t));
      }),
      t
    );
  })(),
  Or = (function(t) {
    function e(e) {
      return t.call(this, e) || this;
    }
    return (
      m(e, t),
      (e.prototype._next = function(t) {
        t.observe(this.destination);
      }),
      e
    );
  })(Tt);
var kr = (function() {
    function t(t, e) {
      (this.keySelector = t), (this.flushes = e);
    }
    return (
      (t.prototype.call = function(t, e) {
        return e.subscribe(new Ar(t, this.keySelector, this.flushes));
      }),
      t
    );
  })(),
  Ar = (function(t) {
    function e(e, n, r) {
      var i = t.call(this, e) || this;
      return (
        (i.keySelector = n), (i.values = new Set()), r && i.add(on(i, r)), i
      );
    }
    return (
      m(e, t),
      (e.prototype.notifyNext = function(t, e, n, r, i) {
        this.values.clear();
      }),
      (e.prototype.notifyError = function(t, e) {
        this._error(t);
      }),
      (e.prototype._next = function(t) {
        this.keySelector ? this._useKeySelector(t) : this._finalizeNext(t, t);
      }),
      (e.prototype._useKeySelector = function(t) {
        var e,
          n = this.destination;
        try {
          e = this.keySelector(t);
        } catch (t) {
          return void n.error(t);
        }
        this._finalizeNext(e, t);
      }),
      (e.prototype._finalizeNext = function(t, e) {
        var n = this.values;
        n.has(t) || (n.add(t), this.destination.next(e));
      }),
      e
    );
  })(Je);
function jr(t, e) {
  return function(n) {
    return n.lift(new Br(t, e));
  };
}
var Br = (function() {
    function t(t, e) {
      (this.compare = t), (this.keySelector = e);
    }
    return (
      (t.prototype.call = function(t, e) {
        return e.subscribe(new Ir(t, this.compare, this.keySelector));
      }),
      t
    );
  })(),
  Ir = (function(t) {
    function e(e, n, r) {
      var i = t.call(this, e) || this;
      return (
        (i.keySelector = r),
        (i.hasKey = !1),
        'function' == typeof n && (i.compare = n),
        i
      );
    }
    return (
      m(e, t),
      (e.prototype.compare = function(t, e) {
        return t === e;
      }),
      (e.prototype._next = function(t) {
        var e;
        try {
          var n = this.keySelector;
          e = n ? n(t) : t;
        } catch (t) {
          return this.destination.error(t);
        }
        var r = !1;
        if (this.hasKey)
          try {
            r = (0, this.compare)(this.key, e);
          } catch (t) {
            return this.destination.error(t);
          }
        else this.hasKey = !0;
        r || ((this.key = e), this.destination.next(t));
      }),
      e
    );
  })(Tt);
function Tr(t) {
  return (
    void 0 === t && (t = Nr),
    function(e) {
      return e.lift(new Mr(t));
    }
  );
}
var Mr = (function() {
    function t(t) {
      this.errorFactory = t;
    }
    return (
      (t.prototype.call = function(t, e) {
        return e.subscribe(new Pr(t, this.errorFactory));
      }),
      t
    );
  })(),
  Pr = (function(t) {
    function e(e, n) {
      var r = t.call(this, e) || this;
      return (r.errorFactory = n), (r.hasValue = !1), r;
    }
    return (
      m(e, t),
      (e.prototype._next = function(t) {
        (this.hasValue = !0), this.destination.next(t);
      }),
      (e.prototype._complete = function() {
        if (this.hasValue) return this.destination.complete();
        var t = void 0;
        try {
          t = this.errorFactory();
        } catch (e) {
          t = e;
        }
        this.destination.error(t);
      }),
      e
    );
  })(Tt);
function Nr() {
  return new Ue();
}
function Rr(t) {
  return function(e) {
    return 0 === t ? fe() : e.lift(new Lr(t));
  };
}
var Lr = (function() {
    function t(t) {
      if (((this.total = t), this.total < 0)) throw new Ve();
    }
    return (
      (t.prototype.call = function(t, e) {
        return e.subscribe(new Vr(t, this.total));
      }),
      t
    );
  })(),
  Vr = (function(t) {
    function e(e, n) {
      var r = t.call(this, e) || this;
      return (r.total = n), (r.count = 0), r;
    }
    return (
      m(e, t),
      (e.prototype._next = function(t) {
        var e = this.total,
          n = ++this.count;
        n <= e &&
          (this.destination.next(t),
          n === e && (this.destination.complete(), this.unsubscribe()));
      }),
      e
    );
  })(Tt);
var Ur = (function() {
    function t(t, e, n) {
      (this.predicate = t), (this.thisArg = e), (this.source = n);
    }
    return (
      (t.prototype.call = function(t, e) {
        return e.subscribe(
          new zr(t, this.predicate, this.thisArg, this.source)
        );
      }),
      t
    );
  })(),
  zr = (function(t) {
    function e(e, n, r, i) {
      var o = t.call(this, e) || this;
      return (
        (o.predicate = n),
        (o.thisArg = r),
        (o.source = i),
        (o.index = 0),
        (o.thisArg = r || o),
        o
      );
    }
    return (
      m(e, t),
      (e.prototype.notifyComplete = function(t) {
        this.destination.next(t), this.destination.complete();
      }),
      (e.prototype._next = function(t) {
        var e = !1;
        try {
          e = this.predicate.call(this.thisArg, t, this.index++, this.source);
        } catch (t) {
          return void this.destination.error(t);
        }
        e || this.notifyComplete(!1);
      }),
      (e.prototype._complete = function() {
        this.notifyComplete(!0);
      }),
      e
    );
  })(Tt);
var qr = (function() {
    function t() {}
    return (
      (t.prototype.call = function(t, e) {
        return e.subscribe(new Wr(t));
      }),
      t
    );
  })(),
  Wr = (function(t) {
    function e(e) {
      var n = t.call(this, e) || this;
      return (n.hasCompleted = !1), (n.hasSubscription = !1), n;
    }
    return (
      m(e, t),
      (e.prototype._next = function(t) {
        this.hasSubscription ||
          ((this.hasSubscription = !0), this.add(on(this, t)));
      }),
      (e.prototype._complete = function() {
        (this.hasCompleted = !0),
          this.hasSubscription || this.destination.complete();
      }),
      (e.prototype.notifyComplete = function(t) {
        this.remove(t),
          (this.hasSubscription = !1),
          this.hasCompleted && this.destination.complete();
      }),
      e
    );
  })(Je);
var $r = (function() {
    function t(t) {
      this.project = t;
    }
    return (
      (t.prototype.call = function(t, e) {
        return e.subscribe(new Kr(t, this.project));
      }),
      t
    );
  })(),
  Kr = (function(t) {
    function e(e, n) {
      var r = t.call(this, e) || this;
      return (
        (r.project = n),
        (r.hasSubscription = !1),
        (r.hasCompleted = !1),
        (r.index = 0),
        r
      );
    }
    return (
      m(e, t),
      (e.prototype._next = function(t) {
        this.hasSubscription || this.tryNext(t);
      }),
      (e.prototype.tryNext = function(t) {
        var e,
          n = this.index++;
        try {
          e = this.project(t, n);
        } catch (t) {
          return void this.destination.error(t);
        }
        (this.hasSubscription = !0), this._innerSub(e, t, n);
      }),
      (e.prototype._innerSub = function(t, e, n) {
        var r = new Ze(this, void 0, void 0);
        this.destination.add(r), on(this, t, e, n, r);
      }),
      (e.prototype._complete = function() {
        (this.hasCompleted = !0),
          this.hasSubscription || this.destination.complete(),
          this.unsubscribe();
      }),
      (e.prototype.notifyNext = function(t, e, n, r, i) {
        this.destination.next(e);
      }),
      (e.prototype.notifyError = function(t) {
        this.destination.error(t);
      }),
      (e.prototype.notifyComplete = function(t) {
        this.destination.remove(t),
          (this.hasSubscription = !1),
          this.hasCompleted && this.destination.complete();
      }),
      e
    );
  })(Je);
var Gr = (function() {
    function t(t, e, n) {
      (this.project = t), (this.concurrent = e), (this.scheduler = n);
    }
    return (
      (t.prototype.call = function(t, e) {
        return e.subscribe(
          new Yr(t, this.project, this.concurrent, this.scheduler)
        );
      }),
      t
    );
  })(),
  Yr = (function(t) {
    function e(e, n, r, i) {
      var o = t.call(this, e) || this;
      return (
        (o.project = n),
        (o.concurrent = r),
        (o.scheduler = i),
        (o.index = 0),
        (o.active = 0),
        (o.hasCompleted = !1),
        r < Number.POSITIVE_INFINITY && (o.buffer = []),
        o
      );
    }
    return (
      m(e, t),
      (e.dispatch = function(t) {
        var e = t.subscriber,
          n = t.result,
          r = t.value,
          i = t.index;
        e.subscribeToProjection(n, r, i);
      }),
      (e.prototype._next = function(t) {
        var n = this.destination;
        if (n.closed) this._complete();
        else {
          var r = this.index++;
          if (this.active < this.concurrent) {
            n.next(t);
            try {
              var i = (0, this.project)(t, r);
              if (this.scheduler) {
                var o = { subscriber: this, result: i, value: t, index: r };
                this.destination.add(this.scheduler.schedule(e.dispatch, 0, o));
              } else this.subscribeToProjection(i, t, r);
            } catch (t) {
              n.error(t);
            }
          } else this.buffer.push(t);
        }
      }),
      (e.prototype.subscribeToProjection = function(t, e, n) {
        this.active++, this.destination.add(on(this, t, e, n));
      }),
      (e.prototype._complete = function() {
        (this.hasCompleted = !0),
          this.hasCompleted && 0 === this.active && this.destination.complete(),
          this.unsubscribe();
      }),
      (e.prototype.notifyNext = function(t, e, n, r, i) {
        this._next(e);
      }),
      (e.prototype.notifyComplete = function(t) {
        var e = this.buffer;
        this.destination.remove(t),
          this.active--,
          e && e.length > 0 && this._next(e.shift()),
          this.hasCompleted && 0 === this.active && this.destination.complete();
      }),
      e
    );
  })(Je);
var Hr = (function() {
    function t(t) {
      this.callback = t;
    }
    return (
      (t.prototype.call = function(t, e) {
        return e.subscribe(new Qr(t, this.callback));
      }),
      t
    );
  })(),
  Qr = (function(t) {
    function e(e, n) {
      var r = t.call(this, e) || this;
      return r.add(new jt(n)), r;
    }
    return m(e, t), e;
  })(Tt);
var Jr = (function() {
    function t(t, e, n, r) {
      (this.predicate = t),
        (this.source = e),
        (this.yieldIndex = n),
        (this.thisArg = r);
    }
    return (
      (t.prototype.call = function(t, e) {
        return e.subscribe(
          new Zr(t, this.predicate, this.source, this.yieldIndex, this.thisArg)
        );
      }),
      t
    );
  })(),
  Zr = (function(t) {
    function e(e, n, r, i, o) {
      var s = t.call(this, e) || this;
      return (
        (s.predicate = n),
        (s.source = r),
        (s.yieldIndex = i),
        (s.thisArg = o),
        (s.index = 0),
        s
      );
    }
    return (
      m(e, t),
      (e.prototype.notifyComplete = function(t) {
        var e = this.destination;
        e.next(t), e.complete(), this.unsubscribe();
      }),
      (e.prototype._next = function(t) {
        var e = this.predicate,
          n = this.thisArg,
          r = this.index++;
        try {
          e.call(n || this, t, r, this.source) &&
            this.notifyComplete(this.yieldIndex ? r : t);
        } catch (t) {
          this.destination.error(t);
        }
      }),
      (e.prototype._complete = function() {
        this.notifyComplete(this.yieldIndex ? -1 : void 0);
      }),
      e
    );
  })(Tt);
var Xr = (function() {
    function t() {}
    return (
      (t.prototype.call = function(t, e) {
        return e.subscribe(new ti(t));
      }),
      t
    );
  })(),
  ti = (function(t) {
    function e() {
      return (null !== t && t.apply(this, arguments)) || this;
    }
    return m(e, t), (e.prototype._next = function(t) {}), e;
  })(Tt);
var ei = (function() {
    function t() {}
    return (
      (t.prototype.call = function(t, e) {
        return e.subscribe(new ni(t));
      }),
      t
    );
  })(),
  ni = (function(t) {
    function e(e) {
      return t.call(this, e) || this;
    }
    return (
      m(e, t),
      (e.prototype.notifyComplete = function(t) {
        var e = this.destination;
        e.next(t), e.complete();
      }),
      (e.prototype._next = function(t) {
        this.notifyComplete(!1);
      }),
      (e.prototype._complete = function() {
        this.notifyComplete(!0);
      }),
      e
    );
  })(Tt);
function ri(t) {
  return function(e) {
    return 0 === t ? fe() : e.lift(new ii(t));
  };
}
var ii = (function() {
    function t(t) {
      if (((this.total = t), this.total < 0)) throw new Ve();
    }
    return (
      (t.prototype.call = function(t, e) {
        return e.subscribe(new oi(t, this.total));
      }),
      t
    );
  })(),
  oi = (function(t) {
    function e(e, n) {
      var r = t.call(this, e) || this;
      return (r.total = n), (r.ring = new Array()), (r.count = 0), r;
    }
    return (
      m(e, t),
      (e.prototype._next = function(t) {
        var e = this.ring,
          n = this.total,
          r = this.count++;
        e.length < n ? e.push(t) : (e[r % n] = t);
      }),
      (e.prototype._complete = function() {
        var t = this.destination,
          e = this.count;
        if (e > 0)
          for (
            var n = this.count >= this.total ? this.total : this.count,
              r = this.ring,
              i = 0;
            i < n;
            i++
          ) {
            var o = e++ % n;
            t.next(r[o]);
          }
        t.complete();
      }),
      e
    );
  })(Tt);
var si = (function() {
    function t(t) {
      this.value = t;
    }
    return (
      (t.prototype.call = function(t, e) {
        return e.subscribe(new ui(t, this.value));
      }),
      t
    );
  })(),
  ui = (function(t) {
    function e(e, n) {
      var r = t.call(this, e) || this;
      return (r.value = n), r;
    }
    return (
      m(e, t),
      (e.prototype._next = function(t) {
        this.destination.next(this.value);
      }),
      e
    );
  })(Tt);
var ci = (function() {
    function t() {}
    return (
      (t.prototype.call = function(t, e) {
        return e.subscribe(new ai(t));
      }),
      t
    );
  })(),
  ai = (function(t) {
    function e(e) {
      return t.call(this, e) || this;
    }
    return (
      m(e, t),
      (e.prototype._next = function(t) {
        this.destination.next(we.createNext(t));
      }),
      (e.prototype._error = function(t) {
        var e = this.destination;
        e.next(we.createError(t)), e.complete();
      }),
      (e.prototype._complete = function() {
        var t = this.destination;
        t.next(we.createComplete()), t.complete();
      }),
      e
    );
  })(Tt);
function li(t, e) {
  var n = !1;
  return (
    arguments.length >= 2 && (n = !0),
    function(r) {
      return r.lift(new hi(t, e, n));
    }
  );
}
var hi = (function() {
    function t(t, e, n) {
      void 0 === n && (n = !1),
        (this.accumulator = t),
        (this.seed = e),
        (this.hasSeed = n);
    }
    return (
      (t.prototype.call = function(t, e) {
        return e.subscribe(
          new fi(t, this.accumulator, this.seed, this.hasSeed)
        );
      }),
      t
    );
  })(),
  fi = (function(t) {
    function e(e, n, r, i) {
      var o = t.call(this, e) || this;
      return (
        (o.accumulator = n), (o._seed = r), (o.hasSeed = i), (o.index = 0), o
      );
    }
    return (
      m(e, t),
      Object.defineProperty(e.prototype, 'seed', {
        get: function() {
          return this._seed;
        },
        set: function(t) {
          (this.hasSeed = !0), (this._seed = t);
        },
        enumerable: !0,
        configurable: !0
      }),
      (e.prototype._next = function(t) {
        if (this.hasSeed) return this._tryNext(t);
        (this.seed = t), this.destination.next(t);
      }),
      (e.prototype._tryNext = function(t) {
        var e,
          n = this.index++;
        try {
          e = this.accumulator(this.seed, t, n);
        } catch (t) {
          this.destination.error(t);
        }
        (this.seed = e), this.destination.next(e);
      }),
      e
    );
  })(Tt);
function pi(t, e) {
  return arguments.length >= 2
    ? function(n) {
        return Lt(li(t, e), ri(1), vr(e))(n);
      }
    : function(e) {
        return Lt(
          li(function(e, n, r) {
            return t(e, n, r + 1);
          }),
          ri(1)
        )(e);
      };
}
var di = (function() {
    function t(t, e, n) {
      (this.accumulator = t), (this.seed = e), (this.concurrent = n);
    }
    return (
      (t.prototype.call = function(t, e) {
        return e.subscribe(
          new bi(t, this.accumulator, this.seed, this.concurrent)
        );
      }),
      t
    );
  })(),
  bi = (function(t) {
    function e(e, n, r, i) {
      var o = t.call(this, e) || this;
      return (
        (o.accumulator = n),
        (o.acc = r),
        (o.concurrent = i),
        (o.hasValue = !1),
        (o.hasCompleted = !1),
        (o.buffer = []),
        (o.active = 0),
        (o.index = 0),
        o
      );
    }
    return (
      m(e, t),
      (e.prototype._next = function(t) {
        if (this.active < this.concurrent) {
          var e = this.index++,
            n = this.destination,
            r = void 0;
          try {
            r = (0, this.accumulator)(this.acc, t, e);
          } catch (t) {
            return n.error(t);
          }
          this.active++, this._innerSub(r, t, e);
        } else this.buffer.push(t);
      }),
      (e.prototype._innerSub = function(t, e, n) {
        var r = new Ze(this, void 0, void 0);
        this.destination.add(r), on(this, t, e, n, r);
      }),
      (e.prototype._complete = function() {
        (this.hasCompleted = !0),
          0 === this.active &&
            0 === this.buffer.length &&
            (!1 === this.hasValue && this.destination.next(this.acc),
            this.destination.complete()),
          this.unsubscribe();
      }),
      (e.prototype.notifyNext = function(t, e, n, r, i) {
        var o = this.destination;
        (this.acc = e), (this.hasValue = !0), o.next(e);
      }),
      (e.prototype.notifyComplete = function(t) {
        var e = this.buffer;
        this.destination.remove(t),
          this.active--,
          e.length > 0
            ? this._next(e.shift())
            : 0 === this.active &&
              this.hasCompleted &&
              (!1 === this.hasValue && this.destination.next(this.acc),
              this.destination.complete());
      }),
      e
    );
  })(Je);
function vi(t, e) {
  return function(n) {
    var r;
    if (
      ((r =
        'function' == typeof t
          ? t
          : function() {
              return t;
            }),
      'function' == typeof e)
    )
      return n.lift(new yi(r, e));
    var i = Object.create(n, Zt);
    return (i.source = n), (i.subjectFactory = r), i;
  };
}
var yi = (function() {
  function t(t, e) {
    (this.subjectFactory = t), (this.selector = e);
  }
  return (
    (t.prototype.call = function(t, e) {
      var n = this.selector,
        r = this.subjectFactory(),
        i = n(r).subscribe(t);
      return i.add(e.subscribe(r)), i;
    }),
    t
  );
})();
var gi = (function() {
    function t(t) {
      this.nextSources = t;
    }
    return (
      (t.prototype.call = function(t, e) {
        return e.subscribe(new mi(t, this.nextSources));
      }),
      t
    );
  })(),
  mi = (function(t) {
    function e(e, n) {
      var r = t.call(this, e) || this;
      return (r.destination = e), (r.nextSources = n), r;
    }
    return (
      m(e, t),
      (e.prototype.notifyError = function(t, e) {
        this.subscribeToNextSource();
      }),
      (e.prototype.notifyComplete = function(t) {
        this.subscribeToNextSource();
      }),
      (e.prototype._error = function(t) {
        this.subscribeToNextSource(), this.unsubscribe();
      }),
      (e.prototype._complete = function() {
        this.subscribeToNextSource(), this.unsubscribe();
      }),
      (e.prototype.subscribeToNextSource = function() {
        var t = this.nextSources.shift();
        if (t) {
          var e = new Ze(this, void 0, void 0);
          this.destination.add(e), on(this, t, void 0, void 0, e);
        } else this.destination.complete();
      }),
      e
    );
  })(Je);
var Di = (function() {
    function t() {}
    return (
      (t.prototype.call = function(t, e) {
        return e.subscribe(new wi(t));
      }),
      t
    );
  })(),
  wi = (function(t) {
    function e(e) {
      var n = t.call(this, e) || this;
      return (n.hasPrev = !1), n;
    }
    return (
      m(e, t),
      (e.prototype._next = function(t) {
        var e;
        this.hasPrev ? (e = [this.prev, t]) : (this.hasPrev = !0),
          (this.prev = t),
          e && this.destination.next(e);
      }),
      e
    );
  })(Tt);
var _i = (function() {
    function t(t, e) {
      (this.count = t), (this.source = e);
    }
    return (
      (t.prototype.call = function(t, e) {
        return e.subscribe(new Ci(t, this.count, this.source));
      }),
      t
    );
  })(),
  Ci = (function(t) {
    function e(e, n, r) {
      var i = t.call(this, e) || this;
      return (i.count = n), (i.source = r), i;
    }
    return (
      m(e, t),
      (e.prototype.complete = function() {
        if (!this.isStopped) {
          var e = this.source,
            n = this.count;
          if (0 === n) return t.prototype.complete.call(this);
          n > -1 && (this.count = n - 1),
            e.subscribe(this._unsubscribeAndRecycle());
        }
      }),
      e
    );
  })(Tt);
var xi = (function() {
    function t(t) {
      this.notifier = t;
    }
    return (
      (t.prototype.call = function(t, e) {
        return e.subscribe(new Ei(t, this.notifier, e));
      }),
      t
    );
  })(),
  Ei = (function(t) {
    function e(e, n, r) {
      var i = t.call(this, e) || this;
      return (
        (i.notifier = n), (i.source = r), (i.sourceIsBeingSubscribedTo = !0), i
      );
    }
    return (
      m(e, t),
      (e.prototype.notifyNext = function(t, e, n, r, i) {
        (this.sourceIsBeingSubscribedTo = !0), this.source.subscribe(this);
      }),
      (e.prototype.notifyComplete = function(e) {
        if (!1 === this.sourceIsBeingSubscribedTo)
          return t.prototype.complete.call(this);
      }),
      (e.prototype.complete = function() {
        if (((this.sourceIsBeingSubscribedTo = !1), !this.isStopped)) {
          if (
            (this.retries || this.subscribeToRetries(),
            !this.retriesSubscription || this.retriesSubscription.closed)
          )
            return t.prototype.complete.call(this);
          this._unsubscribeAndRecycle(), this.notifications.next();
        }
      }),
      (e.prototype._unsubscribe = function() {
        var t = this.notifications,
          e = this.retriesSubscription;
        t && (t.unsubscribe(), (this.notifications = null)),
          e && (e.unsubscribe(), (this.retriesSubscription = null)),
          (this.retries = null);
      }),
      (e.prototype._unsubscribeAndRecycle = function() {
        var e = this._unsubscribe;
        return (
          (this._unsubscribe = null),
          t.prototype._unsubscribeAndRecycle.call(this),
          (this._unsubscribe = e),
          this
        );
      }),
      (e.prototype.subscribeToRetries = function() {
        var e;
        this.notifications = new Kt();
        try {
          e = (0, this.notifier)(this.notifications);
        } catch (e) {
          return t.prototype.complete.call(this);
        }
        (this.retries = e), (this.retriesSubscription = on(this, e));
      }),
      e
    );
  })(Je);
var Fi = (function() {
    function t(t, e) {
      (this.count = t), (this.source = e);
    }
    return (
      (t.prototype.call = function(t, e) {
        return e.subscribe(new Si(t, this.count, this.source));
      }),
      t
    );
  })(),
  Si = (function(t) {
    function e(e, n, r) {
      var i = t.call(this, e) || this;
      return (i.count = n), (i.source = r), i;
    }
    return (
      m(e, t),
      (e.prototype.error = function(e) {
        if (!this.isStopped) {
          var n = this.source,
            r = this.count;
          if (0 === r) return t.prototype.error.call(this, e);
          r > -1 && (this.count = r - 1),
            n.subscribe(this._unsubscribeAndRecycle());
        }
      }),
      e
    );
  })(Tt);
var Oi = (function() {
    function t(t, e) {
      (this.notifier = t), (this.source = e);
    }
    return (
      (t.prototype.call = function(t, e) {
        return e.subscribe(new ki(t, this.notifier, this.source));
      }),
      t
    );
  })(),
  ki = (function(t) {
    function e(e, n, r) {
      var i = t.call(this, e) || this;
      return (i.notifier = n), (i.source = r), i;
    }
    return (
      m(e, t),
      (e.prototype.error = function(e) {
        if (!this.isStopped) {
          var n = this.errors,
            r = this.retries,
            i = this.retriesSubscription;
          if (r) (this.errors = null), (this.retriesSubscription = null);
          else {
            n = new Kt();
            try {
              r = (0, this.notifier)(n);
            } catch (e) {
              return t.prototype.error.call(this, e);
            }
            i = on(this, r);
          }
          this._unsubscribeAndRecycle(),
            (this.errors = n),
            (this.retries = r),
            (this.retriesSubscription = i),
            n.next(e);
        }
      }),
      (e.prototype._unsubscribe = function() {
        var t = this.errors,
          e = this.retriesSubscription;
        t && (t.unsubscribe(), (this.errors = null)),
          e && (e.unsubscribe(), (this.retriesSubscription = null)),
          (this.retries = null);
      }),
      (e.prototype.notifyNext = function(t, e, n, r, i) {
        var o = this._unsubscribe;
        (this._unsubscribe = null),
          this._unsubscribeAndRecycle(),
          (this._unsubscribe = o),
          this.source.subscribe(this);
      }),
      e
    );
  })(Je);
var Ai = (function() {
    function t(t) {
      this.notifier = t;
    }
    return (
      (t.prototype.call = function(t, e) {
        var n = new ji(t),
          r = e.subscribe(n);
        return r.add(on(n, this.notifier)), r;
      }),
      t
    );
  })(),
  ji = (function(t) {
    function e() {
      var e = (null !== t && t.apply(this, arguments)) || this;
      return (e.hasValue = !1), e;
    }
    return (
      m(e, t),
      (e.prototype._next = function(t) {
        (this.value = t), (this.hasValue = !0);
      }),
      (e.prototype.notifyNext = function(t, e, n, r, i) {
        this.emitValue();
      }),
      (e.prototype.notifyComplete = function() {
        this.emitValue();
      }),
      (e.prototype.emitValue = function() {
        this.hasValue &&
          ((this.hasValue = !1), this.destination.next(this.value));
      }),
      e
    );
  })(Je);
var Bi = (function() {
    function t(t, e) {
      (this.period = t), (this.scheduler = e);
    }
    return (
      (t.prototype.call = function(t, e) {
        return e.subscribe(new Ii(t, this.period, this.scheduler));
      }),
      t
    );
  })(),
  Ii = (function(t) {
    function e(e, n, r) {
      var i = t.call(this, e) || this;
      return (
        (i.period = n),
        (i.scheduler = r),
        (i.hasValue = !1),
        i.add(r.schedule(Ti, n, { subscriber: i, period: n })),
        i
      );
    }
    return (
      m(e, t),
      (e.prototype._next = function(t) {
        (this.lastValue = t), (this.hasValue = !0);
      }),
      (e.prototype.notifyNext = function() {
        this.hasValue &&
          ((this.hasValue = !1), this.destination.next(this.lastValue));
      }),
      e
    );
  })(Tt);
function Ti(t) {
  var e = t.subscriber,
    n = t.period;
  e.notifyNext(), this.schedule(t, n);
}
var Mi = (function() {
    function t(t, e) {
      (this.compareTo = t), (this.comparator = e);
    }
    return (
      (t.prototype.call = function(t, e) {
        return e.subscribe(new Pi(t, this.compareTo, this.comparator));
      }),
      t
    );
  })(),
  Pi = (function(t) {
    function e(e, n, r) {
      var i = t.call(this, e) || this;
      return (
        (i.compareTo = n),
        (i.comparator = r),
        (i._a = []),
        (i._b = []),
        (i._oneComplete = !1),
        i.destination.add(n.subscribe(new Ni(e, i))),
        i
      );
    }
    return (
      m(e, t),
      (e.prototype._next = function(t) {
        this._oneComplete && 0 === this._b.length
          ? this.emit(!1)
          : (this._a.push(t), this.checkValues());
      }),
      (e.prototype._complete = function() {
        this._oneComplete
          ? this.emit(0 === this._a.length && 0 === this._b.length)
          : (this._oneComplete = !0),
          this.unsubscribe();
      }),
      (e.prototype.checkValues = function() {
        for (
          var t = this._a, e = this._b, n = this.comparator;
          t.length > 0 && e.length > 0;

        ) {
          var r = t.shift(),
            i = e.shift(),
            o = !1;
          try {
            o = n ? n(r, i) : r === i;
          } catch (t) {
            this.destination.error(t);
          }
          o || this.emit(!1);
        }
      }),
      (e.prototype.emit = function(t) {
        var e = this.destination;
        e.next(t), e.complete();
      }),
      (e.prototype.nextB = function(t) {
        this._oneComplete && 0 === this._a.length
          ? this.emit(!1)
          : (this._b.push(t), this.checkValues());
      }),
      (e.prototype.completeB = function() {
        this._oneComplete
          ? this.emit(0 === this._a.length && 0 === this._b.length)
          : (this._oneComplete = !0);
      }),
      e
    );
  })(Tt),
  Ni = (function(t) {
    function e(e, n) {
      var r = t.call(this, e) || this;
      return (r.parent = n), r;
    }
    return (
      m(e, t),
      (e.prototype._next = function(t) {
        this.parent.nextB(t);
      }),
      (e.prototype._error = function(t) {
        this.parent.error(t), this.unsubscribe();
      }),
      (e.prototype._complete = function() {
        this.parent.completeB(), this.unsubscribe();
      }),
      e
    );
  })(Tt);
function Ri() {
  return new Kt();
}
var Li = (function() {
    function t(t, e) {
      (this.predicate = t), (this.source = e);
    }
    return (
      (t.prototype.call = function(t, e) {
        return e.subscribe(new Vi(t, this.predicate, this.source));
      }),
      t
    );
  })(),
  Vi = (function(t) {
    function e(e, n, r) {
      var i = t.call(this, e) || this;
      return (
        (i.predicate = n), (i.source = r), (i.seenValue = !1), (i.index = 0), i
      );
    }
    return (
      m(e, t),
      (e.prototype.applySingleValue = function(t) {
        this.seenValue
          ? this.destination.error('Sequence contains more than one element')
          : ((this.seenValue = !0), (this.singleValue = t));
      }),
      (e.prototype._next = function(t) {
        var e = this.index++;
        this.predicate ? this.tryNext(t, e) : this.applySingleValue(t);
      }),
      (e.prototype.tryNext = function(t, e) {
        try {
          this.predicate(t, e, this.source) && this.applySingleValue(t);
        } catch (t) {
          this.destination.error(t);
        }
      }),
      (e.prototype._complete = function() {
        var t = this.destination;
        this.index > 0
          ? (t.next(this.seenValue ? this.singleValue : void 0), t.complete())
          : t.error(new Ue());
      }),
      e
    );
  })(Tt);
var Ui = (function() {
    function t(t) {
      this.total = t;
    }
    return (
      (t.prototype.call = function(t, e) {
        return e.subscribe(new zi(t, this.total));
      }),
      t
    );
  })(),
  zi = (function(t) {
    function e(e, n) {
      var r = t.call(this, e) || this;
      return (r.total = n), (r.count = 0), r;
    }
    return (
      m(e, t),
      (e.prototype._next = function(t) {
        ++this.count > this.total && this.destination.next(t);
      }),
      e
    );
  })(Tt);
var qi = (function() {
    function t(t) {
      if (((this._skipCount = t), this._skipCount < 0)) throw new Ve();
    }
    return (
      (t.prototype.call = function(t, e) {
        return 0 === this._skipCount
          ? e.subscribe(new Tt(t))
          : e.subscribe(new Wi(t, this._skipCount));
      }),
      t
    );
  })(),
  Wi = (function(t) {
    function e(e, n) {
      var r = t.call(this, e) || this;
      return (r._skipCount = n), (r._count = 0), (r._ring = new Array(n)), r;
    }
    return (
      m(e, t),
      (e.prototype._next = function(t) {
        var e = this._skipCount,
          n = this._count++;
        if (n < e) this._ring[n] = t;
        else {
          var r = n % e,
            i = this._ring,
            o = i[r];
          (i[r] = t), this.destination.next(o);
        }
      }),
      e
    );
  })(Tt);
var $i = (function() {
    function t(t) {
      this.notifier = t;
    }
    return (
      (t.prototype.call = function(t, e) {
        return e.subscribe(new Ki(t, this.notifier));
      }),
      t
    );
  })(),
  Ki = (function(t) {
    function e(e, n) {
      var r = t.call(this, e) || this;
      r.hasValue = !1;
      var i = new Ze(r, void 0, void 0);
      return (
        r.add(i), (r.innerSubscription = i), on(r, n, void 0, void 0, i), r
      );
    }
    return (
      m(e, t),
      (e.prototype._next = function(e) {
        this.hasValue && t.prototype._next.call(this, e);
      }),
      (e.prototype.notifyNext = function(t, e, n, r, i) {
        (this.hasValue = !0),
          this.innerSubscription && this.innerSubscription.unsubscribe();
      }),
      (e.prototype.notifyComplete = function() {}),
      e
    );
  })(Je);
var Gi = (function() {
    function t(t) {
      this.predicate = t;
    }
    return (
      (t.prototype.call = function(t, e) {
        return e.subscribe(new Yi(t, this.predicate));
      }),
      t
    );
  })(),
  Yi = (function(t) {
    function e(e, n) {
      var r = t.call(this, e) || this;
      return (r.predicate = n), (r.skipping = !0), (r.index = 0), r;
    }
    return (
      m(e, t),
      (e.prototype._next = function(t) {
        var e = this.destination;
        this.skipping && this.tryCallPredicate(t), this.skipping || e.next(t);
      }),
      (e.prototype.tryCallPredicate = function(t) {
        try {
          var e = this.predicate(t, this.index++);
          this.skipping = Boolean(e);
        } catch (t) {
          this.destination.error(t);
        }
      }),
      e
    );
  })(Tt);
var Hi = (function(t) {
  function e(e, n, r) {
    void 0 === n && (n = 0), void 0 === r && (r = Ie);
    var i = t.call(this) || this;
    return (
      (i.source = e),
      (i.delayTime = n),
      (i.scheduler = r),
      (!Dn(n) || n < 0) && (i.delayTime = 0),
      (r && 'function' == typeof r.schedule) || (i.scheduler = Ie),
      i
    );
  }
  return (
    m(e, t),
    (e.create = function(t, n, r) {
      return void 0 === n && (n = 0), void 0 === r && (r = Ie), new e(t, n, r);
    }),
    (e.dispatch = function(t) {
      var e = t.source,
        n = t.subscriber;
      return this.add(e.subscribe(n));
    }),
    (e.prototype._subscribe = function(t) {
      var n = this.delayTime,
        r = this.source;
      return this.scheduler.schedule(e.dispatch, n, {
        source: r,
        subscriber: t
      });
    }),
    e
  );
})(Ut);
var Qi = (function() {
  function t(t, e) {
    (this.scheduler = t), (this.delay = e);
  }
  return (
    (t.prototype.call = function(t, e) {
      return new Hi(e, this.delay, this.scheduler).subscribe(t);
    }),
    t
  );
})();
function Ji(t, e) {
  return 'function' == typeof e
    ? function(n) {
        return n.pipe(
          Ji(function(n, r) {
            return ln(t(n, r)).pipe(
              qe(function(t, i) {
                return e(n, t, r, i);
              })
            );
          })
        );
      }
    : function(e) {
        return e.lift(new Zi(t));
      };
}
var Zi = (function() {
    function t(t) {
      this.project = t;
    }
    return (
      (t.prototype.call = function(t, e) {
        return e.subscribe(new Xi(t, this.project));
      }),
      t
    );
  })(),
  Xi = (function(t) {
    function e(e, n) {
      var r = t.call(this, e) || this;
      return (r.project = n), (r.index = 0), r;
    }
    return (
      m(e, t),
      (e.prototype._next = function(t) {
        var e,
          n = this.index++;
        try {
          e = this.project(t, n);
        } catch (t) {
          return void this.destination.error(t);
        }
        this._innerSub(e, t, n);
      }),
      (e.prototype._innerSub = function(t, e, n) {
        var r = this.innerSubscription;
        r && r.unsubscribe();
        var i = new Ze(this, void 0, void 0);
        this.destination.add(i),
          (this.innerSubscription = on(this, t, e, n, i));
      }),
      (e.prototype._complete = function() {
        var e = this.innerSubscription;
        (e && !e.closed) || t.prototype._complete.call(this),
          this.unsubscribe();
      }),
      (e.prototype._unsubscribe = function() {
        this.innerSubscription = null;
      }),
      (e.prototype.notifyComplete = function(e) {
        this.destination.remove(e),
          (this.innerSubscription = null),
          this.isStopped && t.prototype._complete.call(this);
      }),
      (e.prototype.notifyNext = function(t, e, n, r, i) {
        this.destination.next(e);
      }),
      e
    );
  })(Je);
var to = (function() {
    function t(t) {
      this.notifier = t;
    }
    return (
      (t.prototype.call = function(t, e) {
        var n = new eo(t),
          r = on(n, this.notifier);
        return r && !n.seenValue ? (n.add(r), e.subscribe(n)) : n;
      }),
      t
    );
  })(),
  eo = (function(t) {
    function e(e) {
      var n = t.call(this, e) || this;
      return (n.seenValue = !1), n;
    }
    return (
      m(e, t),
      (e.prototype.notifyNext = function(t, e, n, r, i) {
        (this.seenValue = !0), this.complete();
      }),
      (e.prototype.notifyComplete = function() {}),
      e
    );
  })(Je);
var no = (function() {
    function t(t, e) {
      (this.predicate = t), (this.inclusive = e);
    }
    return (
      (t.prototype.call = function(t, e) {
        return e.subscribe(new ro(t, this.predicate, this.inclusive));
      }),
      t
    );
  })(),
  ro = (function(t) {
    function e(e, n, r) {
      var i = t.call(this, e) || this;
      return (i.predicate = n), (i.inclusive = r), (i.index = 0), i;
    }
    return (
      m(e, t),
      (e.prototype._next = function(t) {
        var e,
          n = this.destination;
        try {
          e = this.predicate(t, this.index++);
        } catch (t) {
          return void n.error(t);
        }
        this.nextOrComplete(t, e);
      }),
      (e.prototype.nextOrComplete = function(t, e) {
        var n = this.destination;
        Boolean(e) ? n.next(t) : (this.inclusive && n.next(t), n.complete());
      }),
      e
    );
  })(Tt);
var io = (function() {
    function t(t, e, n) {
      (this.nextOrObserver = t), (this.error = e), (this.complete = n);
    }
    return (
      (t.prototype.call = function(t, e) {
        return e.subscribe(
          new oo(t, this.nextOrObserver, this.error, this.complete)
        );
      }),
      t
    );
  })(),
  oo = (function(t) {
    function e(e, n, r, i) {
      var o = t.call(this, e) || this;
      return (
        (o._tapNext = Rt),
        (o._tapError = Rt),
        (o._tapComplete = Rt),
        (o._tapError = r || Rt),
        (o._tapComplete = i || Rt),
        Ct(n)
          ? ((o._context = o), (o._tapNext = n))
          : n &&
            ((o._context = n),
            (o._tapNext = n.next || Rt),
            (o._tapError = n.error || Rt),
            (o._tapComplete = n.complete || Rt)),
        o
      );
    }
    return (
      m(e, t),
      (e.prototype._next = function(t) {
        try {
          this._tapNext.call(this._context, t);
        } catch (t) {
          return void this.destination.error(t);
        }
        this.destination.next(t);
      }),
      (e.prototype._error = function(t) {
        try {
          this._tapError.call(this._context, t);
        } catch (t) {
          return void this.destination.error(t);
        }
        this.destination.error(t);
      }),
      (e.prototype._complete = function() {
        try {
          this._tapComplete.call(this._context);
        } catch (t) {
          return void this.destination.error(t);
        }
        return this.destination.complete();
      }),
      e
    );
  })(Tt),
  so = { leading: !0, trailing: !1 };
var uo = (function() {
    function t(t, e, n) {
      (this.durationSelector = t), (this.leading = e), (this.trailing = n);
    }
    return (
      (t.prototype.call = function(t, e) {
        return e.subscribe(
          new co(t, this.durationSelector, this.leading, this.trailing)
        );
      }),
      t
    );
  })(),
  co = (function(t) {
    function e(e, n, r, i) {
      var o = t.call(this, e) || this;
      return (
        (o.destination = e),
        (o.durationSelector = n),
        (o._leading = r),
        (o._trailing = i),
        (o._hasValue = !1),
        o
      );
    }
    return (
      m(e, t),
      (e.prototype._next = function(t) {
        (this._hasValue = !0),
          (this._sendValue = t),
          this._throttled || (this._leading ? this.send() : this.throttle(t));
      }),
      (e.prototype.send = function() {
        var t = this._hasValue,
          e = this._sendValue;
        t && (this.destination.next(e), this.throttle(e)),
          (this._hasValue = !1),
          (this._sendValue = null);
      }),
      (e.prototype.throttle = function(t) {
        var e = this.tryDurationSelector(t);
        e && this.add((this._throttled = on(this, e)));
      }),
      (e.prototype.tryDurationSelector = function(t) {
        try {
          return this.durationSelector(t);
        } catch (t) {
          return this.destination.error(t), null;
        }
      }),
      (e.prototype.throttlingDone = function() {
        var t = this._throttled,
          e = this._trailing;
        t && t.unsubscribe(), (this._throttled = null), e && this.send();
      }),
      (e.prototype.notifyNext = function(t, e, n, r, i) {
        this.throttlingDone();
      }),
      (e.prototype.notifyComplete = function() {
        this.throttlingDone();
      }),
      e
    );
  })(Je);
var ao = (function() {
    function t(t, e, n, r) {
      (this.duration = t),
        (this.scheduler = e),
        (this.leading = n),
        (this.trailing = r);
    }
    return (
      (t.prototype.call = function(t, e) {
        return e.subscribe(
          new lo(t, this.duration, this.scheduler, this.leading, this.trailing)
        );
      }),
      t
    );
  })(),
  lo = (function(t) {
    function e(e, n, r, i, o) {
      var s = t.call(this, e) || this;
      return (
        (s.duration = n),
        (s.scheduler = r),
        (s.leading = i),
        (s.trailing = o),
        (s._hasTrailingValue = !1),
        (s._trailingValue = null),
        s
      );
    }
    return (
      m(e, t),
      (e.prototype._next = function(t) {
        this.throttled
          ? this.trailing &&
            ((this._trailingValue = t), (this._hasTrailingValue = !0))
          : (this.add(
              (this.throttled = this.scheduler.schedule(ho, this.duration, {
                subscriber: this
              }))
            ),
            this.leading
              ? this.destination.next(t)
              : this.trailing &&
                ((this._trailingValue = t), (this._hasTrailingValue = !0)));
      }),
      (e.prototype._complete = function() {
        this._hasTrailingValue
          ? (this.destination.next(this._trailingValue),
            this.destination.complete())
          : this.destination.complete();
      }),
      (e.prototype.clearThrottle = function() {
        var t = this.throttled;
        t &&
          (this.trailing &&
            this._hasTrailingValue &&
            (this.destination.next(this._trailingValue),
            (this._trailingValue = null),
            (this._hasTrailingValue = !1)),
          t.unsubscribe(),
          this.remove(t),
          (this.throttled = null));
      }),
      e
    );
  })(Tt);
function ho(t) {
  t.subscriber.clearThrottle();
}
var fo = (function() {
  return function(t, e) {
    (this.value = t), (this.interval = e);
  };
})();
function po(t, e, n) {
  return (
    void 0 === n && (n = Te),
    function(r) {
      var i = mr(t),
        o = i ? +t - n.now() : Math.abs(t);
      return r.lift(new bo(o, i, e, n));
    }
  );
}
var bo = (function() {
    function t(t, e, n, r) {
      (this.waitFor = t),
        (this.absoluteTimeout = e),
        (this.withObservable = n),
        (this.scheduler = r);
    }
    return (
      (t.prototype.call = function(t, e) {
        return e.subscribe(
          new vo(
            t,
            this.absoluteTimeout,
            this.waitFor,
            this.withObservable,
            this.scheduler
          )
        );
      }),
      t
    );
  })(),
  vo = (function(t) {
    function e(e, n, r, i, o) {
      var s = t.call(this, e) || this;
      return (
        (s.absoluteTimeout = n),
        (s.waitFor = r),
        (s.withObservable = i),
        (s.scheduler = o),
        (s.action = null),
        s.scheduleTimeout(),
        s
      );
    }
    return (
      m(e, t),
      (e.dispatchTimeout = function(t) {
        var e = t.withObservable;
        t._unsubscribeAndRecycle(), t.add(on(t, e));
      }),
      (e.prototype.scheduleTimeout = function() {
        var t = this.action;
        t
          ? (this.action = t.schedule(this, this.waitFor))
          : this.add(
              (this.action = this.scheduler.schedule(
                e.dispatchTimeout,
                this.waitFor,
                this
              ))
            );
      }),
      (e.prototype._next = function(e) {
        this.absoluteTimeout || this.scheduleTimeout(),
          t.prototype._next.call(this, e);
      }),
      (e.prototype._unsubscribe = function() {
        (this.action = null),
          (this.scheduler = null),
          (this.withObservable = null);
      }),
      e
    );
  })(Je);
var yo = (function() {
  return function(t, e) {
    (this.value = t), (this.timestamp = e);
  };
})();
function go(t, e, n) {
  return 0 === n ? [e] : (t.push(e), t);
}
var mo = (function() {
    function t(t) {
      this.windowBoundaries = t;
    }
    return (
      (t.prototype.call = function(t, e) {
        var n = new Do(t),
          r = e.subscribe(n);
        return r.closed || n.add(on(n, this.windowBoundaries)), r;
      }),
      t
    );
  })(),
  Do = (function(t) {
    function e(e) {
      var n = t.call(this, e) || this;
      return (n.window = new Kt()), e.next(n.window), n;
    }
    return (
      m(e, t),
      (e.prototype.notifyNext = function(t, e, n, r, i) {
        this.openWindow();
      }),
      (e.prototype.notifyError = function(t, e) {
        this._error(t);
      }),
      (e.prototype.notifyComplete = function(t) {
        this._complete();
      }),
      (e.prototype._next = function(t) {
        this.window.next(t);
      }),
      (e.prototype._error = function(t) {
        this.window.error(t), this.destination.error(t);
      }),
      (e.prototype._complete = function() {
        this.window.complete(), this.destination.complete();
      }),
      (e.prototype._unsubscribe = function() {
        this.window = null;
      }),
      (e.prototype.openWindow = function() {
        var t = this.window;
        t && t.complete();
        var e = this.destination,
          n = (this.window = new Kt());
        e.next(n);
      }),
      e
    );
  })(Je);
var wo = (function() {
    function t(t, e) {
      (this.windowSize = t), (this.startWindowEvery = e);
    }
    return (
      (t.prototype.call = function(t, e) {
        return e.subscribe(new _o(t, this.windowSize, this.startWindowEvery));
      }),
      t
    );
  })(),
  _o = (function(t) {
    function e(e, n, r) {
      var i = t.call(this, e) || this;
      return (
        (i.destination = e),
        (i.windowSize = n),
        (i.startWindowEvery = r),
        (i.windows = [new Kt()]),
        (i.count = 0),
        e.next(i.windows[0]),
        i
      );
    }
    return (
      m(e, t),
      (e.prototype._next = function(t) {
        for (
          var e =
              this.startWindowEvery > 0
                ? this.startWindowEvery
                : this.windowSize,
            n = this.destination,
            r = this.windowSize,
            i = this.windows,
            o = i.length,
            s = 0;
          s < o && !this.closed;
          s++
        )
          i[s].next(t);
        var u = this.count - r + 1;
        if (
          (u >= 0 && u % e == 0 && !this.closed && i.shift().complete(),
          ++this.count % e == 0 && !this.closed)
        ) {
          var c = new Kt();
          i.push(c), n.next(c);
        }
      }),
      (e.prototype._error = function(t) {
        var e = this.windows;
        if (e) for (; e.length > 0 && !this.closed; ) e.shift().error(t);
        this.destination.error(t);
      }),
      (e.prototype._complete = function() {
        var t = this.windows;
        if (t) for (; t.length > 0 && !this.closed; ) t.shift().complete();
        this.destination.complete();
      }),
      (e.prototype._unsubscribe = function() {
        (this.count = 0), (this.windows = null);
      }),
      e
    );
  })(Tt);
var Co = (function() {
    function t(t, e, n, r) {
      (this.windowTimeSpan = t),
        (this.windowCreationInterval = e),
        (this.maxWindowSize = n),
        (this.scheduler = r);
    }
    return (
      (t.prototype.call = function(t, e) {
        return e.subscribe(
          new Eo(
            t,
            this.windowTimeSpan,
            this.windowCreationInterval,
            this.maxWindowSize,
            this.scheduler
          )
        );
      }),
      t
    );
  })(),
  xo = (function(t) {
    function e() {
      var e = (null !== t && t.apply(this, arguments)) || this;
      return (e._numberOfNextedValues = 0), e;
    }
    return (
      m(e, t),
      (e.prototype.next = function(e) {
        this._numberOfNextedValues++, t.prototype.next.call(this, e);
      }),
      Object.defineProperty(e.prototype, 'numberOfNextedValues', {
        get: function() {
          return this._numberOfNextedValues;
        },
        enumerable: !0,
        configurable: !0
      }),
      e
    );
  })(Kt),
  Eo = (function(t) {
    function e(e, n, r, i, o) {
      var s = t.call(this, e) || this;
      (s.destination = e),
        (s.windowTimeSpan = n),
        (s.windowCreationInterval = r),
        (s.maxWindowSize = i),
        (s.scheduler = o),
        (s.windows = []);
      var u = s.openWindow();
      if (null !== r && r >= 0) {
        var c = { subscriber: s, window: u, context: null },
          a = {
            windowTimeSpan: n,
            windowCreationInterval: r,
            subscriber: s,
            scheduler: o
          };
        s.add(o.schedule(Oo, n, c)), s.add(o.schedule(So, r, a));
      } else {
        var l = { subscriber: s, window: u, windowTimeSpan: n };
        s.add(o.schedule(Fo, n, l));
      }
      return s;
    }
    return (
      m(e, t),
      (e.prototype._next = function(t) {
        for (var e = this.windows, n = e.length, r = 0; r < n; r++) {
          var i = e[r];
          i.closed ||
            (i.next(t),
            i.numberOfNextedValues >= this.maxWindowSize &&
              this.closeWindow(i));
        }
      }),
      (e.prototype._error = function(t) {
        for (var e = this.windows; e.length > 0; ) e.shift().error(t);
        this.destination.error(t);
      }),
      (e.prototype._complete = function() {
        for (var t = this.windows; t.length > 0; ) {
          var e = t.shift();
          e.closed || e.complete();
        }
        this.destination.complete();
      }),
      (e.prototype.openWindow = function() {
        var t = new xo();
        return this.windows.push(t), this.destination.next(t), t;
      }),
      (e.prototype.closeWindow = function(t) {
        t.complete();
        var e = this.windows;
        e.splice(e.indexOf(t), 1);
      }),
      e
    );
  })(Tt);
function Fo(t) {
  var e = t.subscriber,
    n = t.windowTimeSpan,
    r = t.window;
  r && e.closeWindow(r), (t.window = e.openWindow()), this.schedule(t, n);
}
function So(t) {
  var e = t.windowTimeSpan,
    n = t.subscriber,
    r = t.scheduler,
    i = t.windowCreationInterval,
    o = n.openWindow(),
    s = { action: this, subscription: null },
    u = { subscriber: n, window: o, context: s };
  (s.subscription = r.schedule(Oo, e, u)),
    this.add(s.subscription),
    this.schedule(t, i);
}
function Oo(t) {
  var e = t.subscriber,
    n = t.window,
    r = t.context;
  r && r.action && r.subscription && r.action.remove(r.subscription),
    e.closeWindow(n);
}
var ko = (function() {
    function t(t, e) {
      (this.openings = t), (this.closingSelector = e);
    }
    return (
      (t.prototype.call = function(t, e) {
        return e.subscribe(new Ao(t, this.openings, this.closingSelector));
      }),
      t
    );
  })(),
  Ao = (function(t) {
    function e(e, n, r) {
      var i = t.call(this, e) || this;
      return (
        (i.openings = n),
        (i.closingSelector = r),
        (i.contexts = []),
        i.add((i.openSubscription = on(i, n, n))),
        i
      );
    }
    return (
      m(e, t),
      (e.prototype._next = function(t) {
        var e = this.contexts;
        if (e) for (var n = e.length, r = 0; r < n; r++) e[r].window.next(t);
      }),
      (e.prototype._error = function(e) {
        var n = this.contexts;
        if (((this.contexts = null), n))
          for (var r = n.length, i = -1; ++i < r; ) {
            var o = n[i];
            o.window.error(e), o.subscription.unsubscribe();
          }
        t.prototype._error.call(this, e);
      }),
      (e.prototype._complete = function() {
        var e = this.contexts;
        if (((this.contexts = null), e))
          for (var n = e.length, r = -1; ++r < n; ) {
            var i = e[r];
            i.window.complete(), i.subscription.unsubscribe();
          }
        t.prototype._complete.call(this);
      }),
      (e.prototype._unsubscribe = function() {
        var t = this.contexts;
        if (((this.contexts = null), t))
          for (var e = t.length, n = -1; ++n < e; ) {
            var r = t[n];
            r.window.unsubscribe(), r.subscription.unsubscribe();
          }
      }),
      (e.prototype.notifyNext = function(t, e, n, r, i) {
        if (t === this.openings) {
          var o = void 0;
          try {
            o = (0, this.closingSelector)(e);
          } catch (t) {
            return this.error(t);
          }
          var s = new Kt(),
            u = new jt(),
            c = { window: s, subscription: u };
          this.contexts.push(c);
          var a = on(this, o, c);
          a.closed
            ? this.closeWindow(this.contexts.length - 1)
            : ((a.context = c), u.add(a)),
            this.destination.next(s);
        } else this.closeWindow(this.contexts.indexOf(t));
      }),
      (e.prototype.notifyError = function(t) {
        this.error(t);
      }),
      (e.prototype.notifyComplete = function(t) {
        t !== this.openSubscription &&
          this.closeWindow(this.contexts.indexOf(t.context));
      }),
      (e.prototype.closeWindow = function(t) {
        if (-1 !== t) {
          var e = this.contexts,
            n = e[t],
            r = n.window,
            i = n.subscription;
          e.splice(t, 1), r.complete(), i.unsubscribe();
        }
      }),
      e
    );
  })(Je);
var jo = (function() {
    function t(t) {
      this.closingSelector = t;
    }
    return (
      (t.prototype.call = function(t, e) {
        return e.subscribe(new Bo(t, this.closingSelector));
      }),
      t
    );
  })(),
  Bo = (function(t) {
    function e(e, n) {
      var r = t.call(this, e) || this;
      return (r.destination = e), (r.closingSelector = n), r.openWindow(), r;
    }
    return (
      m(e, t),
      (e.prototype.notifyNext = function(t, e, n, r, i) {
        this.openWindow(i);
      }),
      (e.prototype.notifyError = function(t, e) {
        this._error(t);
      }),
      (e.prototype.notifyComplete = function(t) {
        this.openWindow(t);
      }),
      (e.prototype._next = function(t) {
        this.window.next(t);
      }),
      (e.prototype._error = function(t) {
        this.window.error(t),
          this.destination.error(t),
          this.unsubscribeClosingNotification();
      }),
      (e.prototype._complete = function() {
        this.window.complete(),
          this.destination.complete(),
          this.unsubscribeClosingNotification();
      }),
      (e.prototype.unsubscribeClosingNotification = function() {
        this.closingNotification && this.closingNotification.unsubscribe();
      }),
      (e.prototype.openWindow = function(t) {
        void 0 === t && (t = null), t && (this.remove(t), t.unsubscribe());
        var e = this.window;
        e && e.complete();
        var n,
          r = (this.window = new Kt());
        this.destination.next(r);
        try {
          n = (0, this.closingSelector)();
        } catch (t) {
          return this.destination.error(t), void this.window.error(t);
        }
        this.add((this.closingNotification = on(this, n)));
      }),
      e
    );
  })(Je);
var Io = (function() {
    function t(t, e) {
      (this.observables = t), (this.project = e);
    }
    return (
      (t.prototype.call = function(t, e) {
        return e.subscribe(new To(t, this.observables, this.project));
      }),
      t
    );
  })(),
  To = (function(t) {
    function e(e, n, r) {
      var i = t.call(this, e) || this;
      (i.observables = n), (i.project = r), (i.toRespond = []);
      var o = n.length;
      i.values = new Array(o);
      for (var s = 0; s < o; s++) i.toRespond.push(s);
      for (s = 0; s < o; s++) {
        var u = n[s];
        i.add(on(i, u, u, s));
      }
      return i;
    }
    return (
      m(e, t),
      (e.prototype.notifyNext = function(t, e, n, r, i) {
        this.values[n] = e;
        var o = this.toRespond;
        if (o.length > 0) {
          var s = o.indexOf(n);
          -1 !== s && o.splice(s, 1);
        }
      }),
      (e.prototype.notifyComplete = function() {}),
      (e.prototype._next = function(t) {
        if (0 === this.toRespond.length) {
          var e = [t].concat(this.values);
          this.project ? this._tryProject(e) : this.destination.next(e);
        }
      }),
      (e.prototype._tryProject = function(t) {
        var e;
        try {
          e = this.project.apply(this, t);
        } catch (t) {
          return void this.destination.error(t);
        }
        this.destination.next(e);
      }),
      e
    );
  })(Je);
var Mo = Object.freeze({
    __proto__: null,
    audit: zn,
    auditTime: function(t, e) {
      return (
        void 0 === e && (e = Te),
        zn(function() {
          return In(t, e);
        })
      );
    },
    buffer: function(t) {
      return function(e) {
        return e.lift(new $n(t));
      };
    },
    bufferCount: function(t, e) {
      return (
        void 0 === e && (e = null),
        function(n) {
          return n.lift(new Gn(t, e));
        }
      );
    },
    bufferTime: function(t) {
      var e = arguments.length,
        n = Te;
      pe(arguments[arguments.length - 1]) &&
        ((n = arguments[arguments.length - 1]), e--);
      var r = null;
      e >= 2 && (r = arguments[1]);
      var i = Number.POSITIVE_INFINITY;
      return (
        e >= 3 && (i = arguments[2]),
        function(e) {
          return e.lift(new Qn(t, r, i, n));
        }
      );
    },
    bufferToggle: function(t, e) {
      return function(n) {
        return n.lift(new nr(t, e));
      };
    },
    bufferWhen: function(t) {
      return function(e) {
        return e.lift(new ir(t));
      };
    },
    catchError: function(t) {
      return function(e) {
        var n = new sr(t),
          r = e.lift(n);
        return (n.caught = r);
      };
    },
    combineAll: function(t) {
      return function(e) {
        return e.lift(new un(t));
      };
    },
    combineLatest: function() {
      for (var t = [], e = 0; e < arguments.length; e++) t[e] = arguments[e];
      var n = null;
      return (
        'function' == typeof t[t.length - 1] && (n = t.pop()),
        1 === t.length && Ot(t[0]) && (t = t[0].slice()),
        function(e) {
          return e.lift.call(ln([e].concat(t)), new un(n));
        }
      );
    },
    concat: function() {
      for (var t = [], e = 0; e < arguments.length; e++) t[e] = arguments[e];
      return function(e) {
        return e.lift.call(vn.apply(void 0, [e].concat(t)));
      };
    },
    concatAll: bn,
    concatMap: cr,
    concatMapTo: function(t, e) {
      return cr(function() {
        return t;
      }, e);
    },
    count: function(t) {
      return function(e) {
        return e.lift(new ar(t, e));
      };
    },
    debounce: function(t) {
      return function(e) {
        return e.lift(new hr(t));
      };
    },
    debounceTime: function(t, e) {
      return (
        void 0 === e && (e = Te),
        function(n) {
          return n.lift(new pr(t, e));
        }
      );
    },
    defaultIfEmpty: vr,
    delay: function(t, e) {
      void 0 === e && (e = Te);
      var n = mr(t) ? +t - e.now() : Math.abs(t);
      return function(t) {
        return t.lift(new Dr(n, e));
      };
    },
    delayWhen: function(t, e) {
      return e
        ? function(n) {
            return new Er(n, e).lift(new Cr(t));
          }
        : function(e) {
            return e.lift(new Cr(t));
          };
    },
    dematerialize: function() {
      return function(t) {
        return t.lift(new Sr());
      };
    },
    distinct: function(t, e) {
      return function(n) {
        return n.lift(new kr(t, e));
      };
    },
    distinctUntilChanged: jr,
    distinctUntilKeyChanged: function(t, e) {
      return jr(function(n, r) {
        return e ? e(n[t], r[t]) : n[t] === r[t];
      });
    },
    elementAt: function(t, e) {
      if (t < 0) throw new Ve();
      var n = arguments.length >= 2;
      return function(r) {
        return r.pipe(
          Fn(function(e, n) {
            return n === t;
          }),
          Rr(1),
          n
            ? vr(e)
            : Tr(function() {
                return new Ve();
              })
        );
      };
    },
    endWith: function() {
      for (var t = [], e = 0; e < arguments.length; e++) t[e] = arguments[e];
      return function(e) {
        return vn(e, ge.apply(void 0, t));
      };
    },
    every: function(t, e) {
      return function(n) {
        return n.lift(new Ur(t, e, n));
      };
    },
    exhaust: function() {
      return function(t) {
        return t.lift(new qr());
      };
    },
    exhaustMap: function t(e, n) {
      return n
        ? function(r) {
            return r.pipe(
              t(function(t, r) {
                return ln(e(t, r)).pipe(
                  qe(function(e, i) {
                    return n(t, e, r, i);
                  })
                );
              })
            );
          }
        : function(t) {
            return t.lift(new $r(e));
          };
    },
    expand: function(t, e, n) {
      return (
        void 0 === e && (e = Number.POSITIVE_INFINITY),
        void 0 === n && (n = void 0),
        (e = (e || 0) < 1 ? Number.POSITIVE_INFINITY : e),
        function(r) {
          return r.lift(new Gr(t, e, n));
        }
      );
    },
    filter: Fn,
    finalize: function(t) {
      return function(e) {
        return e.lift(new Hr(t));
      };
    },
    find: function(t, e) {
      if ('function' != typeof t)
        throw new TypeError('predicate is not a function');
      return function(n) {
        return n.lift(new Jr(t, n, !1, e));
      };
    },
    findIndex: function(t, e) {
      return function(n) {
        return n.lift(new Jr(t, n, !0, e));
      };
    },
    first: function(t, e) {
      var n = arguments.length >= 2;
      return function(r) {
        return r.pipe(
          t
            ? Fn(function(e, n) {
                return t(e, n, r);
              })
            : Le,
          Rr(1),
          n
            ? vr(e)
            : Tr(function() {
                return new Ue();
              })
        );
      };
    },
    groupBy: function(t, e, n, r) {
      return function(i) {
        return i.lift(new te(t, e, n, r));
      };
    },
    ignoreElements: function() {
      return function(t) {
        return t.lift(new Xr());
      };
    },
    isEmpty: function() {
      return function(t) {
        return t.lift(new ei());
      };
    },
    last: function(t, e) {
      var n = arguments.length >= 2;
      return function(r) {
        return r.pipe(
          t
            ? Fn(function(e, n) {
                return t(e, n, r);
              })
            : Le,
          ri(1),
          n
            ? vr(e)
            : Tr(function() {
                return new Ue();
              })
        );
      };
    },
    map: qe,
    mapTo: function(t) {
      return function(e) {
        return e.lift(new si(t));
      };
    },
    materialize: function() {
      return function(t) {
        return t.lift(new ci());
      };
    },
    max: function(t) {
      return pi(
        'function' == typeof t
          ? function(e, n) {
              return t(e, n) > 0 ? e : n;
            }
          : function(t, e) {
              return t > e ? t : e;
            }
      );
    },
    merge: function() {
      for (var t = [], e = 0; e < arguments.length; e++) t[e] = arguments[e];
      return function(e) {
        return e.lift.call(_n.apply(void 0, [e].concat(t)));
      };
    },
    mergeAll: dn,
    mergeMap: hn,
    flatMap: hn,
    mergeMapTo: function(t, e, n) {
      return (
        void 0 === n && (n = Number.POSITIVE_INFINITY),
        'function' == typeof e
          ? hn(
              function() {
                return t;
              },
              e,
              n
            )
          : ('number' == typeof e && (n = e),
            hn(function() {
              return t;
            }, n))
      );
    },
    mergeScan: function(t, e, n) {
      return (
        void 0 === n && (n = Number.POSITIVE_INFINITY),
        function(r) {
          return r.lift(new di(t, e, n));
        }
      );
    },
    min: function(t) {
      return pi(
        'function' == typeof t
          ? function(e, n) {
              return t(e, n) < 0 ? e : n;
            }
          : function(t, e) {
              return t < e ? t : e;
            }
      );
    },
    multicast: vi,
    observeOn: function(t, e) {
      return (
        void 0 === e && (e = 0),
        function(n) {
          return n.lift(new _e(t, e));
        }
      );
    },
    onErrorResumeNext: function() {
      for (var t = [], e = 0; e < arguments.length; e++) t[e] = arguments[e];
      return (
        1 === t.length && Ot(t[0]) && (t = t[0]),
        function(e) {
          return e.lift(new gi(t));
        }
      );
    },
    pairwise: function() {
      return function(t) {
        return t.lift(new Di());
      };
    },
    partition: function(t, e) {
      return function(n) {
        return [Fn(t, e)(n), Fn(En(t, e))(n)];
      };
    },
    pluck: function() {
      for (var t = [], e = 0; e < arguments.length; e++) t[e] = arguments[e];
      var n = t.length;
      if (0 === n) throw new Error('list of properties cannot be empty.');
      return function(e) {
        return qe(
          (function(t, e) {
            return function(n) {
              for (var r = n, i = 0; i < e; i++) {
                var o = r[t[i]];
                if (void 0 === o) return;
                r = o;
              }
              return r;
            };
          })(t, n)
        )(e);
      };
    },
    publish: function(t) {
      return t
        ? vi(function() {
            return new Kt();
          }, t)
        : vi(new Kt());
    },
    publishBehavior: function(t) {
      return function(e) {
        return vi(new oe(t))(e);
      };
    },
    publishLast: function() {
      return function(t) {
        return vi(new Se())(t);
      };
    },
    publishReplay: function(t, e, n, r) {
      n && 'function' != typeof n && (r = n);
      var i = 'function' == typeof n ? n : void 0,
        o = new Ee(t, e, r);
      return function(t) {
        return vi(function() {
          return o;
        }, i)(t);
      };
    },
    race: function() {
      for (var t = [], e = 0; e < arguments.length; e++) t[e] = arguments[e];
      return function(e) {
        return (
          1 === t.length && Ot(t[0]) && (t = t[0]),
          e.lift.call(kn.apply(void 0, [e].concat(t)))
        );
      };
    },
    reduce: pi,
    repeat: function(t) {
      return (
        void 0 === t && (t = -1),
        function(e) {
          return 0 === t
            ? fe()
            : t < 0
            ? e.lift(new _i(-1, e))
            : e.lift(new _i(t - 1, e));
        }
      );
    },
    repeatWhen: function(t) {
      return function(e) {
        return e.lift(new xi(t));
      };
    },
    retry: function(t) {
      return (
        void 0 === t && (t = -1),
        function(e) {
          return e.lift(new Fi(t, e));
        }
      );
    },
    retryWhen: function(t) {
      return function(e) {
        return e.lift(new Oi(t, e));
      };
    },
    refCount: Yt,
    sample: function(t) {
      return function(e) {
        return e.lift(new Ai(t));
      };
    },
    sampleTime: function(t, e) {
      return (
        void 0 === e && (e = Te),
        function(n) {
          return n.lift(new Bi(t, e));
        }
      );
    },
    scan: li,
    sequenceEqual: function(t, e) {
      return function(n) {
        return n.lift(new Mi(t, e));
      };
    },
    share: function() {
      return function(t) {
        return Yt()(vi(Ri)(t));
      };
    },
    shareReplay: function(t, e, n) {
      var r;
      return (
        (r =
          t && 'object' == typeof t
            ? t
            : { bufferSize: t, windowTime: e, refCount: !1, scheduler: n }),
        function(t) {
          return t.lift(
            (function(t) {
              var e,
                n,
                r = t.bufferSize,
                i = void 0 === r ? Number.POSITIVE_INFINITY : r,
                o = t.windowTime,
                s = void 0 === o ? Number.POSITIVE_INFINITY : o,
                u = t.refCount,
                c = t.scheduler,
                a = 0,
                l = !1,
                h = !1;
              return function(t) {
                a++,
                  (e && !l) ||
                    ((l = !1),
                    (e = new Ee(i, s, c)),
                    (n = t.subscribe({
                      next: function(t) {
                        e.next(t);
                      },
                      error: function(t) {
                        (l = !0), e.error(t);
                      },
                      complete: function() {
                        (h = !0), e.complete();
                      }
                    })));
                var r = e.subscribe(this);
                this.add(function() {
                  a--,
                    r.unsubscribe(),
                    n &&
                      !h &&
                      u &&
                      0 === a &&
                      (n.unsubscribe(), (n = void 0), (e = void 0));
                });
              };
            })(r)
          );
        }
      );
    },
    single: function(t) {
      return function(e) {
        return e.lift(new Li(t, e));
      };
    },
    skip: function(t) {
      return function(e) {
        return e.lift(new Ui(t));
      };
    },
    skipLast: function(t) {
      return function(e) {
        return e.lift(new qi(t));
      };
    },
    skipUntil: function(t) {
      return function(e) {
        return e.lift(new $i(t));
      };
    },
    skipWhile: function(t) {
      return function(e) {
        return e.lift(new Gi(t));
      };
    },
    startWith: function() {
      for (var t = [], e = 0; e < arguments.length; e++) t[e] = arguments[e];
      var n = t[t.length - 1];
      return pe(n)
        ? (t.pop(),
          function(e) {
            return vn(t, e, n);
          })
        : function(e) {
            return vn(t, e);
          };
    },
    subscribeOn: function(t, e) {
      return (
        void 0 === e && (e = 0),
        function(n) {
          return n.lift(new Qi(t, e));
        }
      );
    },
    switchAll: function() {
      return Ji(Le);
    },
    switchMap: Ji,
    switchMapTo: function(t, e) {
      return e
        ? Ji(function() {
            return t;
          }, e)
        : Ji(function() {
            return t;
          });
    },
    take: Rr,
    takeLast: ri,
    takeUntil: function(t) {
      return function(e) {
        return e.lift(new to(t));
      };
    },
    takeWhile: function(t, e) {
      return (
        void 0 === e && (e = !1),
        function(n) {
          return n.lift(new no(t, e));
        }
      );
    },
    tap: function(t, e, n) {
      return function(r) {
        return r.lift(new io(t, e, n));
      };
    },
    throttle: function(t, e) {
      return (
        void 0 === e && (e = so),
        function(n) {
          return n.lift(new uo(t, e.leading, e.trailing));
        }
      );
    },
    throttleTime: function(t, e, n) {
      return (
        void 0 === e && (e = Te),
        void 0 === n && (n = so),
        function(r) {
          return r.lift(new ao(t, e, n.leading, n.trailing));
        }
      );
    },
    throwIfEmpty: Tr,
    timeInterval: function(t) {
      return (
        void 0 === t && (t = Te),
        function(e) {
          return yn(function() {
            return e.pipe(
              li(
                function(e, n) {
                  var r = e.current;
                  return { value: n, current: t.now(), last: r };
                },
                { current: t.now(), value: void 0, last: void 0 }
              ),
              qe(function(t) {
                var e = t.current,
                  n = t.last,
                  r = t.value;
                return new fo(r, e - n);
              })
            );
          });
        }
      );
    },
    timeout: function(t, e) {
      return void 0 === e && (e = Te), po(t, me(new ze()), e);
    },
    timeoutWith: po,
    timestamp: function(t) {
      return (
        void 0 === t && (t = Te),
        qe(function(e) {
          return new yo(e, t.now());
        })
      );
    },
    toArray: function() {
      return pi(go, []);
    },
    window: function(t) {
      return function(e) {
        return e.lift(new mo(t));
      };
    },
    windowCount: function(t, e) {
      return (
        void 0 === e && (e = 0),
        function(n) {
          return n.lift(new wo(t, e));
        }
      );
    },
    windowTime: function(t) {
      var e = Te,
        n = null,
        r = Number.POSITIVE_INFINITY;
      return (
        pe(arguments[3]) && (e = arguments[3]),
        pe(arguments[2])
          ? (e = arguments[2])
          : Dn(arguments[2]) && (r = arguments[2]),
        pe(arguments[1])
          ? (e = arguments[1])
          : Dn(arguments[1]) && (n = arguments[1]),
        function(i) {
          return i.lift(new Co(t, n, r, e));
        }
      );
    },
    windowToggle: function(t, e) {
      return function(n) {
        return n.lift(new ko(t, e));
      };
    },
    windowWhen: function(t) {
      return function(e) {
        return e.lift(new jo(t));
      };
    },
    withLatestFrom: function() {
      for (var t = [], e = 0; e < arguments.length; e++) t[e] = arguments[e];
      return function(e) {
        var n;
        'function' == typeof t[t.length - 1] && (n = t.pop());
        var r = t;
        return e.lift(new Io(r, n));
      };
    },
    zip: function() {
      for (var t = [], e = 0; e < arguments.length; e++) t[e] = arguments[e];
      return function(e) {
        return e.lift.call(Mn.apply(void 0, [e].concat(t)));
      };
    },
    zipAll: function(t) {
      return function(e) {
        return e.lift(new Pn(t));
      };
    }
  }),
  Po = function(t) {
    return (
      !!t &&
      ('object' == typeof t || 'function' == typeof t) &&
      'function' == typeof t.then
    );
  };
var No = F(function(t) {
    var e = (t.exports = function(t, e) {
      return (
        (e = e || function() {}),
        function() {
          var n = !1,
            r = arguments,
            i = new Promise(function(e, i) {
              var o = t.apply(
                {
                  async: function() {
                    return (
                      (n = !0),
                      function(t, n) {
                        t ? i(t) : e(n);
                      }
                    );
                  }
                },
                Array.prototype.slice.call(r)
              );
              n || (Po(o) ? o.then(e, i) : e(o));
            });
          return i.then(e.bind(null, null), e), i;
        }
      );
    });
    e.cb = function(t, n) {
      return e(function() {
        var e = Array.prototype.slice.call(arguments);
        return (
          e.length === t.length - 1 && e.push(this.async()), t.apply(this, e)
        );
      }, n);
    };
  }),
  { from: Ro, of: Lo } = Un,
  Vo = {
    fetchAsyncQuestionProperty: function(t, e, n) {
      return bt.isFunction(t[e])
        ? Ro(No(t[e])(n).then(n => ((t[e] = n), t)))
        : Lo(t);
    }
  },
  { defer: Uo, empty: zo, from: qo, of: Wo } = Un,
  { concatMap: $o, filter: Ko, publish: Go, reduce: Yo } = Mo;
var Ho = class extends mt {
  constructor(t, e) {
    super(e), (this.prompts = t);
  }
  run(t) {
    (this.answers = {}), bt.isPlainObject(t) && (t = [t]);
    var e = bt.isArray(t) ? qo(t) : t;
    return (
      (this.process = e.pipe($o(this.processQuestion.bind(this)), Go())),
      this.process.connect(),
      this.process
        .pipe(
          Yo(
            (t, e) => (bt.set(this.answers, e.name, e.answer), this.answers),
            {}
          )
        )
        .toPromise(Promise)
        .then(this.onCompletion.bind(this))
    );
  }
  onCompletion() {
    return this.close(), this.answers;
  }
  processQuestion(t) {
    return (
      (t = bt.clone(t)),
      Uo(() => {
        return Wo(t).pipe(
          $o(this.setDefaultType.bind(this)),
          $o(this.filterIfRunnable.bind(this)),
          $o(() => Vo.fetchAsyncQuestionProperty(t, 'message', this.answers)),
          $o(() => Vo.fetchAsyncQuestionProperty(t, 'default', this.answers)),
          $o(() => Vo.fetchAsyncQuestionProperty(t, 'choices', this.answers)),
          $o(this.fetchAnswer.bind(this))
        );
      })
    );
  }
  fetchAnswer(t) {
    var e = this.prompts[t.type];
    return (
      (this.activePrompt = new e(t, this.rl, this.answers)),
      Uo(() =>
        qo(this.activePrompt.run().then(e => ({ name: t.name, answer: e })))
      )
    );
  }
  setDefaultType(t) {
    return this.prompts[t.type] || (t.type = 'input'), Uo(() => Wo(t));
  }
  filterIfRunnable(t) {
    if (!1 === t.when) return zo();
    if (!bt.isFunction(t.when)) return Wo(t);
    var e = this.answers;
    return Uo(() =>
      qo(
        No(t.when)(e).then(e => {
          if (e) return t;
        })
      ).pipe(Ko(t => null != t))
    );
  }
};
const Qo = (t, e) => {
  for (const n of Reflect.ownKeys(e))
    Object.defineProperty(t, n, Object.getOwnPropertyDescriptor(e, n));
  return t;
};
var Jo = Qo,
  Zo = Qo;
Jo.default = Zo;
const Xo = new WeakMap(),
  ts = (t, e = {}) => {
    if ('function' != typeof t) throw new TypeError('Expected a function');
    let n,
      r = !1,
      i = 0;
    const o = t.displayName || t.name || '<anonymous>',
      s = function(...u) {
        if ((Xo.set(s, ++i), r)) {
          if (!0 === e.throw)
            throw new Error(`Function \`${o}\` can only be called once`);
          return n;
        }
        return (r = !0), (n = t.apply(this, u)), (t = null), n;
      };
    return Jo(s, t), Xo.set(s, i), s;
  };
var es = ts,
  ns = ts;
(es.default = ns),
  (es.callCount = t => {
    if (!Xo.has(t))
      throw new Error(
        `The given function \`${t.name}\` is not wrapped by the \`onetime\` package`
      );
    return Xo.get(t);
  });
var rs,
  is = F(function(t) {
    (t.exports = ['SIGABRT', 'SIGALRM', 'SIGHUP', 'SIGINT', 'SIGTERM']),
      'win32' !== process.platform &&
        t.exports.push(
          'SIGVTALRM',
          'SIGXCPU',
          'SIGXFSZ',
          'SIGUSR2',
          'SIGTRAP',
          'SIGSYS',
          'SIGQUIT',
          'SIGIOT'
        ),
      'linux' === process.platform &&
        t.exports.push('SIGIO', 'SIGPOLL', 'SIGPWR', 'SIGSTKFLT', 'SIGUNUSED');
  }),
  os = t;
'function' != typeof os && (os = os.EventEmitter),
  process.__signal_exit_emitter__
    ? (rs = process.__signal_exit_emitter__)
    : (((rs = process.__signal_exit_emitter__ = new os()).count = 0),
      (rs.emitted = {})),
  rs.infinite || (rs.setMaxListeners(1 / 0), (rs.infinite = !0));
var ss = function(t, e) {
    a.equal(
      typeof t,
      'function',
      'a callback must be provided for exit handler'
    ),
      !1 === fs && ps();
    var n = 'exit';
    e && e.alwaysLast && (n = 'afterexit');
    return (
      rs.on(n, t),
      function() {
        rs.removeListener(n, t),
          0 === rs.listeners('exit').length &&
            0 === rs.listeners('afterexit').length &&
            cs();
      }
    );
  },
  us = cs;
function cs() {
  fs &&
    ((fs = !1),
    is.forEach(function(t) {
      try {
        process.removeListener(t, ls[t]);
      } catch (t) {}
    }),
    (process.emit = vs),
    (process.reallyExit = ds),
    (rs.count -= 1));
}
function as(t, e, n) {
  rs.emitted[t] || ((rs.emitted[t] = !0), rs.emit(t, e, n));
}
var ls = {};
is.forEach(function(t) {
  ls[t] = function() {
    process.listeners(t).length === rs.count &&
      (cs(),
      as('exit', null, t),
      as('afterexit', null, t),
      process.kill(process.pid, t));
  };
});
var hs = ps,
  fs = !1;
function ps() {
  fs ||
    ((fs = !0),
    (rs.count += 1),
    (is = is.filter(function(t) {
      try {
        return process.on(t, ls[t]), !0;
      } catch (t) {
        return !1;
      }
    })),
    (process.emit = ys),
    (process.reallyExit = bs));
}
var ds = process.reallyExit;
function bs(t) {
  (process.exitCode = t || 0),
    as('exit', process.exitCode, null),
    as('afterexit', process.exitCode, null),
    ds.call(process, process.exitCode);
}
var vs = process.emit;
function ys(t, e) {
  if ('exit' === t) {
    void 0 !== e && (process.exitCode = e);
    var n = vs.apply(this, arguments);
    return (
      as('exit', process.exitCode, null),
      as('afterexit', process.exitCode, null),
      n
    );
  }
  return vs.apply(this, arguments);
}
(ss.unload = us),
  (ss.signals = function() {
    return is;
  }),
  (ss.load = hs);
var gs = es(() => {
    ss(
      () => {
        process.stderr.write('[?25h');
      },
      { alwaysLast: !0 }
    );
  }),
  ms = F(function(t, e) {
    let n = !1;
    (e.show = (t = process.stderr) => {
      t.isTTY && ((n = !1), t.write('[?25h'));
    }),
      (e.hide = (t = process.stderr) => {
        t.isTTY && (gs(), (n = !0), t.write('[?25l'));
      }),
      (e.toggle = (t, r) => {
        void 0 !== t && (n = t), n ? e.show(r) : e.hide(r);
      });
  }),
  Ds =
    (ms.show,
    ms.hide,
    ms.toggle,
    class t {
      constructor(e, n) {
        if (e instanceof t || 'separator' === e.type) return e;
        bt.isString(e) || bt.isNumber(e)
          ? ((this.name = String(e)),
            (this.value = e),
            (this.short = String(e)))
          : bt.extend(this, e, {
              name: e.name || e.value,
              value: 'value' in e ? e.value : e.name,
              short: e.short || e.name || e.value
            }),
          bt.isFunction(e.disabled)
            ? (this.disabled = e.disabled(n))
            : (this.disabled = e.disabled);
      }
    }),
  ws = class {
    constructor(t, e) {
      (this.choices = t.map(t =>
        'separator' === t.type
          ? (t instanceof pt || (t = new pt(t.line)), t)
          : new Ds(t, e)
      )),
        (this.realChoices = this.choices
          .filter(pt.exclude)
          .filter(t => !t.disabled)),
        Object.defineProperty(this, 'length', {
          get() {
            return this.choices.length;
          },
          set(t) {
            this.choices.length = t;
          }
        }),
        Object.defineProperty(this, 'realLength', {
          get() {
            return this.realChoices.length;
          },
          set() {
            throw new Error('Cannot set `realLength` of a Choices collection');
          }
        });
    }
    getChoice(t) {
      return a(bt.isNumber(t)), this.realChoices[t];
    }
    get(t) {
      return a(bt.isNumber(t)), this.choices[t];
    }
    where(t) {
      return bt.filter(this.realChoices, t);
    }
    pluck(t) {
      return bt.map(this.realChoices, t);
    }
    indexOf() {
      return this.choices.indexOf.apply(this.choices, arguments);
    }
    forEach() {
      return this.choices.forEach.apply(this.choices, arguments);
    }
    filter() {
      return this.choices.filter.apply(this.choices, arguments);
    }
    find(t) {
      return bt.find(this.choices, t);
    }
    push() {
      var t = bt.map(arguments, t => new Ds(t));
      return (
        this.choices.push.apply(this.choices, t),
        (this.realChoices = this.choices
          .filter(pt.exclude)
          .filter(t => !t.disabled)),
        this.choices
      );
    }
  },
  _s = F(function(t, e) {
    t.exports = function(t) {
      var e = (function(t) {
        var e = { defaultWidth: 0, output: process.stdout, tty: l };
        return t
          ? (Object.keys(e).forEach(function(n) {
              t[n] || (t[n] = e[n]);
            }),
            t)
          : e;
      })(t);
      if (e.output.getWindowSize)
        return e.output.getWindowSize()[0] || e.defaultWidth;
      if (e.tty.getWindowSize)
        return e.tty.getWindowSize()[1] || e.defaultWidth;
      if (e.output.columns) return e.output.columns;
      if (process.env.CLI_WIDTH) {
        var n = parseInt(process.env.CLI_WIDTH, 10);
        if (!isNaN(n) && 0 !== n) return n;
      }
      return e.defaultWidth;
    };
  });
const Cs = t =>
  'string' == typeof t
    ? t.replace(
        (t => {
          t = Object.assign({ onlyFirst: !1 }, t);
          const e = [
            '[\\u001B\\u009B][[\\]()#;?]*(?:(?:(?:[a-zA-Z\\d]*(?:;[-a-zA-Z\\d\\/#&.:=?%@~_]*)*)?\\u0007)',
            '(?:(?:\\d{1,4}(?:;\\d{0,4})*)?[\\dA-PR-TZcf-ntqry=><~]))'
          ].join('|');
          return new RegExp(e, t.onlyFirst ? void 0 : 'g');
        })(),
        ''
      )
    : t;
var xs = Cs,
  Es = Cs;
xs.default = Es;
var Fs = t =>
  'string' == typeof t
    ? t.replace(
        (({ onlyFirst: t = !1 } = {}) => {
          const e = [
            '[\\u001B\\u009B][[\\]()#;?]*(?:(?:(?:[a-zA-Z\\d]*(?:;[-a-zA-Z\\d\\/#&.:=?%@~_]*)*)?\\u0007)',
            '(?:(?:\\d{1,4}(?:;\\d{0,4})*)?[\\dA-PR-TZcf-ntqry=><~]))'
          ].join('|');
          return new RegExp(e, t ? void 0 : 'g');
        })(),
        ''
      )
    : t;
const Ss = t =>
  !Number.isNaN(t) &&
  t >= 4352 &&
    (t <= 4447 ||
      9001 === t ||
      9002 === t ||
      (11904 <= t && t <= 12871 && 12351 !== t) ||
      (12880 <= t && t <= 19903) ||
      (19968 <= t && t <= 42182) ||
      (43360 <= t && t <= 43388) ||
      (44032 <= t && t <= 55203) ||
      (63744 <= t && t <= 64255) ||
      (65040 <= t && t <= 65049) ||
      (65072 <= t && t <= 65131) ||
      (65281 <= t && t <= 65376) ||
      (65504 <= t && t <= 65510) ||
      (110592 <= t && t <= 110593) ||
      (127488 <= t && t <= 127569) ||
      (131072 <= t && t <= 262141));
var Os = Ss,
  ks = Ss;
Os.default = ks;
const As = t => {
  if (
    'string' !=
      typeof (t = t.replace(
        /\uD83C\uDFF4\uDB40\uDC67\uDB40\uDC62(?:\uDB40\uDC65\uDB40\uDC6E\uDB40\uDC67|\uDB40\uDC73\uDB40\uDC63\uDB40\uDC74|\uDB40\uDC77\uDB40\uDC6C\uDB40\uDC73)\uDB40\uDC7F|\uD83D\uDC68(?:\uD83C\uDFFC\u200D(?:\uD83E\uDD1D\u200D\uD83D\uDC68\uD83C\uDFFB|\uD83C[\uDF3E\uDF73\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E[\uDDAF-\uDDB3\uDDBC\uDDBD])|\uD83C\uDFFF\u200D(?:\uD83E\uDD1D\u200D\uD83D\uDC68(?:\uD83C[\uDFFB-\uDFFE])|\uD83C[\uDF3E\uDF73\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E[\uDDAF-\uDDB3\uDDBC\uDDBD])|\uD83C\uDFFE\u200D(?:\uD83E\uDD1D\u200D\uD83D\uDC68(?:\uD83C[\uDFFB-\uDFFD])|\uD83C[\uDF3E\uDF73\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E[\uDDAF-\uDDB3\uDDBC\uDDBD])|\uD83C\uDFFD\u200D(?:\uD83E\uDD1D\u200D\uD83D\uDC68(?:\uD83C[\uDFFB\uDFFC])|\uD83C[\uDF3E\uDF73\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E[\uDDAF-\uDDB3\uDDBC\uDDBD])|\u200D(?:\u2764\uFE0F\u200D(?:\uD83D\uDC8B\u200D)?\uD83D\uDC68|(?:\uD83D[\uDC68\uDC69])\u200D(?:\uD83D\uDC66\u200D\uD83D\uDC66|\uD83D\uDC67\u200D(?:\uD83D[\uDC66\uDC67]))|\uD83D\uDC66\u200D\uD83D\uDC66|\uD83D\uDC67\u200D(?:\uD83D[\uDC66\uDC67])|(?:\uD83D[\uDC68\uDC69])\u200D(?:\uD83D[\uDC66\uDC67])|[\u2695\u2696\u2708]\uFE0F|\uD83D[\uDC66\uDC67]|\uD83C[\uDF3E\uDF73\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E[\uDDAF-\uDDB3\uDDBC\uDDBD])|(?:\uD83C\uDFFB\u200D[\u2695\u2696\u2708]|\uD83C\uDFFF\u200D[\u2695\u2696\u2708]|\uD83C\uDFFE\u200D[\u2695\u2696\u2708]|\uD83C\uDFFD\u200D[\u2695\u2696\u2708]|\uD83C\uDFFC\u200D[\u2695\u2696\u2708])\uFE0F|\uD83C\uDFFB\u200D(?:\uD83C[\uDF3E\uDF73\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E[\uDDAF-\uDDB3\uDDBC\uDDBD])|\uD83C[\uDFFB-\uDFFF])|(?:\uD83E\uDDD1\uD83C\uDFFB\u200D\uD83E\uDD1D\u200D\uD83E\uDDD1|\uD83D\uDC69\uD83C\uDFFC\u200D\uD83E\uDD1D\u200D\uD83D\uDC69)\uD83C\uDFFB|\uD83E\uDDD1(?:\uD83C\uDFFF\u200D\uD83E\uDD1D\u200D\uD83E\uDDD1(?:\uD83C[\uDFFB-\uDFFF])|\u200D\uD83E\uDD1D\u200D\uD83E\uDDD1)|(?:\uD83E\uDDD1\uD83C\uDFFE\u200D\uD83E\uDD1D\u200D\uD83E\uDDD1|\uD83D\uDC69\uD83C\uDFFF\u200D\uD83E\uDD1D\u200D(?:\uD83D[\uDC68\uDC69]))(?:\uD83C[\uDFFB-\uDFFE])|(?:\uD83E\uDDD1\uD83C\uDFFC\u200D\uD83E\uDD1D\u200D\uD83E\uDDD1|\uD83D\uDC69\uD83C\uDFFD\u200D\uD83E\uDD1D\u200D\uD83D\uDC69)(?:\uD83C[\uDFFB\uDFFC])|\uD83D\uDC69(?:\uD83C\uDFFE\u200D(?:\uD83E\uDD1D\u200D\uD83D\uDC68(?:\uD83C[\uDFFB-\uDFFD\uDFFF])|\uD83C[\uDF3E\uDF73\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E[\uDDAF-\uDDB3\uDDBC\uDDBD])|\uD83C\uDFFC\u200D(?:\uD83E\uDD1D\u200D\uD83D\uDC68(?:\uD83C[\uDFFB\uDFFD-\uDFFF])|\uD83C[\uDF3E\uDF73\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E[\uDDAF-\uDDB3\uDDBC\uDDBD])|\uD83C\uDFFB\u200D(?:\uD83E\uDD1D\u200D\uD83D\uDC68(?:\uD83C[\uDFFC-\uDFFF])|\uD83C[\uDF3E\uDF73\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E[\uDDAF-\uDDB3\uDDBC\uDDBD])|\uD83C\uDFFD\u200D(?:\uD83E\uDD1D\u200D\uD83D\uDC68(?:\uD83C[\uDFFB\uDFFC\uDFFE\uDFFF])|\uD83C[\uDF3E\uDF73\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E[\uDDAF-\uDDB3\uDDBC\uDDBD])|\u200D(?:\u2764\uFE0F\u200D(?:\uD83D\uDC8B\u200D(?:\uD83D[\uDC68\uDC69])|\uD83D[\uDC68\uDC69])|\uD83C[\uDF3E\uDF73\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E[\uDDAF-\uDDB3\uDDBC\uDDBD])|\uD83C\uDFFF\u200D(?:\uD83C[\uDF3E\uDF73\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E[\uDDAF-\uDDB3\uDDBC\uDDBD]))|\uD83D\uDC69\u200D\uD83D\uDC69\u200D(?:\uD83D\uDC66\u200D\uD83D\uDC66|\uD83D\uDC67\u200D(?:\uD83D[\uDC66\uDC67]))|(?:\uD83E\uDDD1\uD83C\uDFFD\u200D\uD83E\uDD1D\u200D\uD83E\uDDD1|\uD83D\uDC69\uD83C\uDFFE\u200D\uD83E\uDD1D\u200D\uD83D\uDC69)(?:\uD83C[\uDFFB-\uDFFD])|\uD83D\uDC69\u200D\uD83D\uDC66\u200D\uD83D\uDC66|\uD83D\uDC69\u200D\uD83D\uDC69\u200D(?:\uD83D[\uDC66\uDC67])|(?:\uD83D\uDC41\uFE0F\u200D\uD83D\uDDE8|\uD83D\uDC69(?:\uD83C\uDFFF\u200D[\u2695\u2696\u2708]|\uD83C\uDFFE\u200D[\u2695\u2696\u2708]|\uD83C\uDFFC\u200D[\u2695\u2696\u2708]|\uD83C\uDFFB\u200D[\u2695\u2696\u2708]|\uD83C\uDFFD\u200D[\u2695\u2696\u2708]|\u200D[\u2695\u2696\u2708])|(?:(?:\u26F9|\uD83C[\uDFCB\uDFCC]|\uD83D\uDD75)\uFE0F|\uD83D\uDC6F|\uD83E[\uDD3C\uDDDE\uDDDF])\u200D[\u2640\u2642]|(?:\u26F9|\uD83C[\uDFCB\uDFCC]|\uD83D\uDD75)(?:\uD83C[\uDFFB-\uDFFF])\u200D[\u2640\u2642]|(?:\uD83C[\uDFC3\uDFC4\uDFCA]|\uD83D[\uDC6E\uDC71\uDC73\uDC77\uDC81\uDC82\uDC86\uDC87\uDE45-\uDE47\uDE4B\uDE4D\uDE4E\uDEA3\uDEB4-\uDEB6]|\uD83E[\uDD26\uDD37-\uDD39\uDD3D\uDD3E\uDDB8\uDDB9\uDDCD-\uDDCF\uDDD6-\uDDDD])(?:(?:\uD83C[\uDFFB-\uDFFF])\u200D[\u2640\u2642]|\u200D[\u2640\u2642])|\uD83C\uDFF4\u200D\u2620)\uFE0F|\uD83D\uDC69\u200D\uD83D\uDC67\u200D(?:\uD83D[\uDC66\uDC67])|\uD83C\uDFF3\uFE0F\u200D\uD83C\uDF08|\uD83D\uDC15\u200D\uD83E\uDDBA|\uD83D\uDC69\u200D\uD83D\uDC66|\uD83D\uDC69\u200D\uD83D\uDC67|\uD83C\uDDFD\uD83C\uDDF0|\uD83C\uDDF4\uD83C\uDDF2|\uD83C\uDDF6\uD83C\uDDE6|[#\*0-9]\uFE0F\u20E3|\uD83C\uDDE7(?:\uD83C[\uDDE6\uDDE7\uDDE9-\uDDEF\uDDF1-\uDDF4\uDDF6-\uDDF9\uDDFB\uDDFC\uDDFE\uDDFF])|\uD83C\uDDF9(?:\uD83C[\uDDE6\uDDE8\uDDE9\uDDEB-\uDDED\uDDEF-\uDDF4\uDDF7\uDDF9\uDDFB\uDDFC\uDDFF])|\uD83C\uDDEA(?:\uD83C[\uDDE6\uDDE8\uDDEA\uDDEC\uDDED\uDDF7-\uDDFA])|\uD83E\uDDD1(?:\uD83C[\uDFFB-\uDFFF])|\uD83C\uDDF7(?:\uD83C[\uDDEA\uDDF4\uDDF8\uDDFA\uDDFC])|\uD83D\uDC69(?:\uD83C[\uDFFB-\uDFFF])|\uD83C\uDDF2(?:\uD83C[\uDDE6\uDDE8-\uDDED\uDDF0-\uDDFF])|\uD83C\uDDE6(?:\uD83C[\uDDE8-\uDDEC\uDDEE\uDDF1\uDDF2\uDDF4\uDDF6-\uDDFA\uDDFC\uDDFD\uDDFF])|\uD83C\uDDF0(?:\uD83C[\uDDEA\uDDEC-\uDDEE\uDDF2\uDDF3\uDDF5\uDDF7\uDDFC\uDDFE\uDDFF])|\uD83C\uDDED(?:\uD83C[\uDDF0\uDDF2\uDDF3\uDDF7\uDDF9\uDDFA])|\uD83C\uDDE9(?:\uD83C[\uDDEA\uDDEC\uDDEF\uDDF0\uDDF2\uDDF4\uDDFF])|\uD83C\uDDFE(?:\uD83C[\uDDEA\uDDF9])|\uD83C\uDDEC(?:\uD83C[\uDDE6\uDDE7\uDDE9-\uDDEE\uDDF1-\uDDF3\uDDF5-\uDDFA\uDDFC\uDDFE])|\uD83C\uDDF8(?:\uD83C[\uDDE6-\uDDEA\uDDEC-\uDDF4\uDDF7-\uDDF9\uDDFB\uDDFD-\uDDFF])|\uD83C\uDDEB(?:\uD83C[\uDDEE-\uDDF0\uDDF2\uDDF4\uDDF7])|\uD83C\uDDF5(?:\uD83C[\uDDE6\uDDEA-\uDDED\uDDF0-\uDDF3\uDDF7-\uDDF9\uDDFC\uDDFE])|\uD83C\uDDFB(?:\uD83C[\uDDE6\uDDE8\uDDEA\uDDEC\uDDEE\uDDF3\uDDFA])|\uD83C\uDDF3(?:\uD83C[\uDDE6\uDDE8\uDDEA-\uDDEC\uDDEE\uDDF1\uDDF4\uDDF5\uDDF7\uDDFA\uDDFF])|\uD83C\uDDE8(?:\uD83C[\uDDE6\uDDE8\uDDE9\uDDEB-\uDDEE\uDDF0-\uDDF5\uDDF7\uDDFA-\uDDFF])|\uD83C\uDDF1(?:\uD83C[\uDDE6-\uDDE8\uDDEE\uDDF0\uDDF7-\uDDFB\uDDFE])|\uD83C\uDDFF(?:\uD83C[\uDDE6\uDDF2\uDDFC])|\uD83C\uDDFC(?:\uD83C[\uDDEB\uDDF8])|\uD83C\uDDFA(?:\uD83C[\uDDE6\uDDEC\uDDF2\uDDF3\uDDF8\uDDFE\uDDFF])|\uD83C\uDDEE(?:\uD83C[\uDDE8-\uDDEA\uDDF1-\uDDF4\uDDF6-\uDDF9])|\uD83C\uDDEF(?:\uD83C[\uDDEA\uDDF2\uDDF4\uDDF5])|(?:\uD83C[\uDFC3\uDFC4\uDFCA]|\uD83D[\uDC6E\uDC71\uDC73\uDC77\uDC81\uDC82\uDC86\uDC87\uDE45-\uDE47\uDE4B\uDE4D\uDE4E\uDEA3\uDEB4-\uDEB6]|\uD83E[\uDD26\uDD37-\uDD39\uDD3D\uDD3E\uDDB8\uDDB9\uDDCD-\uDDCF\uDDD6-\uDDDD])(?:\uD83C[\uDFFB-\uDFFF])|(?:\u26F9|\uD83C[\uDFCB\uDFCC]|\uD83D\uDD75)(?:\uD83C[\uDFFB-\uDFFF])|(?:[\u261D\u270A-\u270D]|\uD83C[\uDF85\uDFC2\uDFC7]|\uD83D[\uDC42\uDC43\uDC46-\uDC50\uDC66\uDC67\uDC6B-\uDC6D\uDC70\uDC72\uDC74-\uDC76\uDC78\uDC7C\uDC83\uDC85\uDCAA\uDD74\uDD7A\uDD90\uDD95\uDD96\uDE4C\uDE4F\uDEC0\uDECC]|\uD83E[\uDD0F\uDD18-\uDD1C\uDD1E\uDD1F\uDD30-\uDD36\uDDB5\uDDB6\uDDBB\uDDD2-\uDDD5])(?:\uD83C[\uDFFB-\uDFFF])|(?:[\u231A\u231B\u23E9-\u23EC\u23F0\u23F3\u25FD\u25FE\u2614\u2615\u2648-\u2653\u267F\u2693\u26A1\u26AA\u26AB\u26BD\u26BE\u26C4\u26C5\u26CE\u26D4\u26EA\u26F2\u26F3\u26F5\u26FA\u26FD\u2705\u270A\u270B\u2728\u274C\u274E\u2753-\u2755\u2757\u2795-\u2797\u27B0\u27BF\u2B1B\u2B1C\u2B50\u2B55]|\uD83C[\uDC04\uDCCF\uDD8E\uDD91-\uDD9A\uDDE6-\uDDFF\uDE01\uDE1A\uDE2F\uDE32-\uDE36\uDE38-\uDE3A\uDE50\uDE51\uDF00-\uDF20\uDF2D-\uDF35\uDF37-\uDF7C\uDF7E-\uDF93\uDFA0-\uDFCA\uDFCF-\uDFD3\uDFE0-\uDFF0\uDFF4\uDFF8-\uDFFF]|\uD83D[\uDC00-\uDC3E\uDC40\uDC42-\uDCFC\uDCFF-\uDD3D\uDD4B-\uDD4E\uDD50-\uDD67\uDD7A\uDD95\uDD96\uDDA4\uDDFB-\uDE4F\uDE80-\uDEC5\uDECC\uDED0-\uDED2\uDED5\uDEEB\uDEEC\uDEF4-\uDEFA\uDFE0-\uDFEB]|\uD83E[\uDD0D-\uDD3A\uDD3C-\uDD45\uDD47-\uDD71\uDD73-\uDD76\uDD7A-\uDDA2\uDDA5-\uDDAA\uDDAE-\uDDCA\uDDCD-\uDDFF\uDE70-\uDE73\uDE78-\uDE7A\uDE80-\uDE82\uDE90-\uDE95])|(?:[#\*0-9\xA9\xAE\u203C\u2049\u2122\u2139\u2194-\u2199\u21A9\u21AA\u231A\u231B\u2328\u23CF\u23E9-\u23F3\u23F8-\u23FA\u24C2\u25AA\u25AB\u25B6\u25C0\u25FB-\u25FE\u2600-\u2604\u260E\u2611\u2614\u2615\u2618\u261D\u2620\u2622\u2623\u2626\u262A\u262E\u262F\u2638-\u263A\u2640\u2642\u2648-\u2653\u265F\u2660\u2663\u2665\u2666\u2668\u267B\u267E\u267F\u2692-\u2697\u2699\u269B\u269C\u26A0\u26A1\u26AA\u26AB\u26B0\u26B1\u26BD\u26BE\u26C4\u26C5\u26C8\u26CE\u26CF\u26D1\u26D3\u26D4\u26E9\u26EA\u26F0-\u26F5\u26F7-\u26FA\u26FD\u2702\u2705\u2708-\u270D\u270F\u2712\u2714\u2716\u271D\u2721\u2728\u2733\u2734\u2744\u2747\u274C\u274E\u2753-\u2755\u2757\u2763\u2764\u2795-\u2797\u27A1\u27B0\u27BF\u2934\u2935\u2B05-\u2B07\u2B1B\u2B1C\u2B50\u2B55\u3030\u303D\u3297\u3299]|\uD83C[\uDC04\uDCCF\uDD70\uDD71\uDD7E\uDD7F\uDD8E\uDD91-\uDD9A\uDDE6-\uDDFF\uDE01\uDE02\uDE1A\uDE2F\uDE32-\uDE3A\uDE50\uDE51\uDF00-\uDF21\uDF24-\uDF93\uDF96\uDF97\uDF99-\uDF9B\uDF9E-\uDFF0\uDFF3-\uDFF5\uDFF7-\uDFFF]|\uD83D[\uDC00-\uDCFD\uDCFF-\uDD3D\uDD49-\uDD4E\uDD50-\uDD67\uDD6F\uDD70\uDD73-\uDD7A\uDD87\uDD8A-\uDD8D\uDD90\uDD95\uDD96\uDDA4\uDDA5\uDDA8\uDDB1\uDDB2\uDDBC\uDDC2-\uDDC4\uDDD1-\uDDD3\uDDDC-\uDDDE\uDDE1\uDDE3\uDDE8\uDDEF\uDDF3\uDDFA-\uDE4F\uDE80-\uDEC5\uDECB-\uDED2\uDED5\uDEE0-\uDEE5\uDEE9\uDEEB\uDEEC\uDEF0\uDEF3-\uDEFA\uDFE0-\uDFEB]|\uD83E[\uDD0D-\uDD3A\uDD3C-\uDD45\uDD47-\uDD71\uDD73-\uDD76\uDD7A-\uDDA2\uDDA5-\uDDAA\uDDAE-\uDDCA\uDDCD-\uDDFF\uDE70-\uDE73\uDE78-\uDE7A\uDE80-\uDE82\uDE90-\uDE95])\uFE0F|(?:[\u261D\u26F9\u270A-\u270D]|\uD83C[\uDF85\uDFC2-\uDFC4\uDFC7\uDFCA-\uDFCC]|\uD83D[\uDC42\uDC43\uDC46-\uDC50\uDC66-\uDC78\uDC7C\uDC81-\uDC83\uDC85-\uDC87\uDC8F\uDC91\uDCAA\uDD74\uDD75\uDD7A\uDD90\uDD95\uDD96\uDE45-\uDE47\uDE4B-\uDE4F\uDEA3\uDEB4-\uDEB6\uDEC0\uDECC]|\uD83E[\uDD0F\uDD18-\uDD1F\uDD26\uDD30-\uDD39\uDD3C-\uDD3E\uDDB5\uDDB6\uDDB8\uDDB9\uDDBB\uDDCD-\uDDCF\uDDD1-\uDDDD])/g,
        '  '
      )) ||
    0 === t.length
  )
    return 0;
  t = Fs(t);
  let e = 0;
  for (let n = 0; n < t.length; n++) {
    const r = t.codePointAt(n);
    r <= 31 ||
      (r >= 127 && r <= 159) ||
      (r >= 768 && r <= 879) || (r > 65535 && n++, (e += Os(r) ? 2 : 1));
  }
  return e;
};
var js = As,
  Bs = As;
function Is(t) {
  return t.split('\n').length;
}
function Ts(t) {
  return bt.last(t.split('\n'));
}
js.default = Bs;
var Ms = class {
    constructor(t) {
      (this.height = 0), (this.extraLinesUnderPrompt = 0), (this.rl = t);
    }
    render(t, e) {
      this.rl.output.unmute(), this.clean(this.extraLinesUnderPrompt);
      var n = Ts(t),
        r = xs(n),
        i = r;
      this.rl.line.length && (i = i.slice(0, -this.rl.line.length)),
        this.rl.setPrompt(i);
      var o = this.rl._getCursorPos(),
        s = this.normalizedCliWidth();
      (t = this.forceLineReturn(t, s)),
        e && (e = this.forceLineReturn(e, s)),
        r.length % s == 0 && (t += '\n');
      var u = t + (e ? '\n' + e : '');
      this.rl.output.write(u);
      var c = Math.floor(r.length / s) - o.rows + (e ? Is(e) : 0);
      c > 0 && wt.up(this.rl, c),
        wt.left(this.rl, js(Ts(u))),
        o.cols > 0 && wt.right(this.rl, o.cols),
        (this.extraLinesUnderPrompt = c),
        (this.height = Is(u)),
        this.rl.output.mute();
    }
    clean(t) {
      t > 0 && wt.down(this.rl, t), wt.clearLine(this.rl, this.height);
    }
    done() {
      this.rl.setPrompt(''),
        this.rl.output.unmute(),
        this.rl.output.write('\n');
    }
    releaseCursor() {
      this.extraLinesUnderPrompt > 0 &&
        wt.down(this.rl, this.extraLinesUnderPrompt);
    }
    normalizedCliWidth() {
      return _s({ defaultWidth: 80, output: this.rl.output });
    }
    breakLines(t, e) {
      e = e || this.normalizedCliWidth();
      var n = new RegExp('(?:(?:\\033[[0-9;]*m)*.?){1,' + e + '}', 'g');
      return t.map(t => {
        var e = t.match(n);
        return e.pop(), e || '';
      });
    }
    forceLineReturn(t, e) {
      return (
        (e = e || this.normalizedCliWidth()),
        bt.flatten(this.breakLines(t.split('\n'), e)).join('\n')
      );
    }
  },
  { filter: Ps, flatMap: Ns, share: Rs, take: Ls, takeUntil: Vs } = Mo;
var Us = class {
    constructor(t, e, n) {
      bt.assign(this, { answers: n, status: 'pending' }),
        (this.opt = bt.defaults(bt.clone(t), {
          validate: () => !0,
          filter: t => t,
          when: () => !0,
          suffix: '',
          prefix: st.green('?')
        })),
        this.opt.name || this.throwParamError('name'),
        this.opt.message || (this.opt.message = this.opt.name + ':'),
        Array.isArray(this.opt.choices) &&
          (this.opt.choices = new ws(this.opt.choices, n)),
        (this.rl = e),
        (this.screen = new Ms(this.rl));
    }
    run() {
      return new Promise(t => {
        this._run(e => t(e));
      });
    }
    _run(t) {
      t();
    }
    throwParamError(t) {
      throw new Error('You must provide a `' + t + '` parameter');
    }
    close() {
      this.screen.releaseCursor();
    }
    handleSubmitEvents(t) {
      var e = this,
        n = No(this.opt.validate),
        r = No(this.opt.filter),
        i = t.pipe(
          Ns(t =>
            r(t, e.answers).then(
              t =>
                n(t, e.answers).then(
                  e => ({ isValid: e, value: t }),
                  e => ({ isValid: e, value: t })
                ),
              t => ({ isValid: t })
            )
          ),
          Rs()
        ),
        o = i.pipe(
          Ps(t => !0 === t.isValid),
          Ls(1)
        );
      return {
        success: o,
        error: i.pipe(
          Ps(t => !0 !== t.isValid),
          Vs(o)
        )
      };
    }
    getQuestion() {
      var t =
        this.opt.prefix +
        ' ' +
        st.bold(this.opt.message) +
        this.opt.suffix +
        st.reset(' ');
      return (
        null != this.opt.default &&
          'answered' !== this.status &&
          ('password' === this.opt.type
            ? (t += st.italic.dim('[hidden] '))
            : (t += st.dim('(' + this.opt.default + ') '))),
        t
      );
    }
  },
  { fromEvent: zs } = Un,
  { filter: qs, map: Ws, share: $s, takeUntil: Ks } = Mo;
function Gs(t, e) {
  return { value: t, key: e || {} };
}
var Ys = function(t) {
  var e = zs(t.input, 'keypress', Gs)
    .pipe(Ks(zs(t, 'close')))
    .pipe(qs(({ key: t }) => 'enter' !== t.name && 'return' !== t.name));
  return {
    line: zs(t, 'line'),
    keypress: e,
    normalizedUpKey: e.pipe(
      qs(
        ({ key: t }) =>
          'up' === t.name || 'k' === t.name || ('p' === t.name && t.ctrl)
      ),
      $s()
    ),
    normalizedDownKey: e.pipe(
      qs(
        ({ key: t }) =>
          'down' === t.name || 'j' === t.name || ('n' === t.name && t.ctrl)
      ),
      $s()
    ),
    numberKey: e.pipe(
      qs(t => t.value && '123456789'.indexOf(t.value) >= 0),
      Ws(t => Number(t.value)),
      $s()
    ),
    spaceKey: e.pipe(
      qs(({ key: t }) => t && 'space' === t.name),
      $s()
    ),
    aKey: e.pipe(
      qs(({ key: t }) => t && 'a' === t.name),
      $s()
    ),
    iKey: e.pipe(
      qs(({ key: t }) => t && 'i' === t.name),
      $s()
    )
  };
};
var Hs = class {
    constructor(t) {
      (this.pointer = 0), (this.lastIndex = 0), (this.screen = t);
    }
    paginate(t, e, n) {
      n = n || 7;
      var r = Math.floor(n / 2),
        i = t.split('\n');
      if (
        (this.screen &&
          ((i = this.screen.breakLines(i)),
          (e = bt.sum(i.map(t => t.length).splice(0, e))),
          (i = bt.flatten(i))),
        i.length <= n)
      )
        return t;
      this.pointer < r &&
        this.lastIndex < e &&
        e - this.lastIndex < n &&
        (this.pointer = Math.min(r, this.pointer + e - this.lastIndex)),
        (this.lastIndex = e);
      var o = bt.flatten([i, i, i]),
        s = Math.max(0, e + i.length - this.pointer);
      return (
        o.splice(s, n).join('\n') +
        '\n' +
        st.dim('(Move up and down to reveal more choices)')
      );
    }
  },
  { flatMap: Qs, map: Js, take: Zs, takeUntil: Xs } = Mo;
var tu = class extends Us {
    constructor(t, e, n) {
      super(t, e, n),
        this.opt.choices || this.throwParamError('choices'),
        (this.firstRender = !0),
        (this.selected = 0);
      var r = this.opt.default;
      if (bt.isNumber(r) && r >= 0 && r < this.opt.choices.realLength)
        this.selected = r;
      else if (!bt.isNumber(r) && null != r) {
        let t = bt.findIndex(
          this.opt.choices.realChoices,
          ({ value: t }) => t === r
        );
        this.selected = Math.max(t, 0);
      }
      (this.opt.default = null), (this.paginator = new Hs(this.screen));
    }
    _run(t) {
      this.done = t;
      var e = this,
        n = Ys(this.rl);
      return (
        n.normalizedUpKey.pipe(Xs(n.line)).forEach(this.onUpKey.bind(this)),
        n.normalizedDownKey.pipe(Xs(n.line)).forEach(this.onDownKey.bind(this)),
        n.numberKey.pipe(Xs(n.line)).forEach(this.onNumberKey.bind(this)),
        n.line
          .pipe(
            Zs(1),
            Js(this.getCurrentValue.bind(this)),
            Qs(t => No(e.opt.filter)(t).catch(t => t))
          )
          .forEach(this.onSubmit.bind(this)),
        ms.hide(),
        this.render(),
        this
      );
    }
    render() {
      var t = this.getQuestion();
      if (
        (this.firstRender && (t += st.dim('(Use arrow keys)')),
        'answered' === this.status)
      )
        t += st.cyan(this.opt.choices.getChoice(this.selected).short);
      else {
        var e = (function(t, e) {
            var n = '',
              r = 0;
            return (
              t.forEach((t, i) => {
                if ('separator' === t.type)
                  return r++, void (n += '  ' + t + '\n');
                if (t.disabled)
                  return (
                    r++,
                    (n += '  - ' + t.name),
                    (n +=
                      ' (' +
                      (bt.isString(t.disabled) ? t.disabled : 'Disabled') +
                      ')'),
                    void (n += '\n')
                  );
                var o = i - r === e,
                  s = (o ? ht.pointer + ' ' : '  ') + t.name;
                o && (s = st.cyan(s)), (n += s + ' \n');
              }),
              n.replace(/\n$/, '')
            );
          })(this.opt.choices, this.selected),
          n = this.opt.choices.indexOf(
            this.opt.choices.getChoice(this.selected)
          );
        t += '\n' + this.paginator.paginate(e, n, this.opt.pageSize);
      }
      (this.firstRender = !1), this.screen.render(t);
    }
    onSubmit(t) {
      (this.status = 'answered'),
        this.render(),
        this.screen.done(),
        ms.show(),
        this.done(t);
    }
    getCurrentValue() {
      return this.opt.choices.getChoice(this.selected).value;
    }
    onUpKey() {
      var t = this.opt.choices.realLength;
      (this.selected = this.selected > 0 ? this.selected - 1 : t - 1),
        this.render();
    }
    onDownKey() {
      var t = this.opt.choices.realLength;
      (this.selected = this.selected < t - 1 ? this.selected + 1 : 0),
        this.render();
    }
    onNumberKey(t) {
      t <= this.opt.choices.realLength && (this.selected = t - 1),
        this.render();
    }
  },
  { map: eu, takeUntil: nu } = Mo;
var ru = class extends Us {
  _run(t) {
    this.done = t;
    var e = Ys(this.rl),
      n = e.line.pipe(eu(this.filterInput.bind(this))),
      r = this.handleSubmitEvents(n);
    return (
      r.success.forEach(this.onEnd.bind(this)),
      r.error.forEach(this.onError.bind(this)),
      e.keypress.pipe(nu(r.success)).forEach(this.onKeypress.bind(this)),
      this.render(),
      this
    );
  }
  render(t) {
    var e = '',
      n = '',
      r = this.getQuestion(),
      i = this.opt.transformer,
      o = 'answered' === this.status;
    (n = o ? this.answer : this.rl.line),
      (r += i ? i(n, this.answers, { isFinal: o }) : o ? st.cyan(n) : n),
      t && (e = st.red('>> ') + t),
      this.screen.render(r, e);
  }
  filterInput(t) {
    return t || (null == this.opt.default ? '' : this.opt.default);
  }
  onEnd(t) {
    (this.answer = t.value),
      (this.status = 'answered'),
      this.render(),
      this.screen.done(),
      this.done(t.value);
  }
  onError({ value: t = '', isValid: e }) {
    (this.rl.line += t), (this.rl.cursor += t.length), this.render(e);
  }
  onKeypress() {
    this.opt.default && (this.opt.default = void 0), this.render();
  }
};
var iu = class extends ru {
    filterInput(t) {
      if (t && 'string' == typeof t) {
        let e = (t = t.trim()).match(/(^-?\d+|^\d+\.\d*|^\d*\.\d+)(e\d+)?$/);
        if (e) return Number(e[0]);
      }
      return null == this.opt.default ? NaN : this.opt.default;
    }
  },
  { take: ou, takeUntil: su } = Mo;
var uu = class extends Us {
    constructor(t, e, n) {
      super(t, e, n);
      var r = !0;
      return (
        bt.extend(this.opt, {
          filter: function(t) {
            var e = r;
            return null != t && '' !== t && (e = /^y(es)?/i.test(t)), e;
          }
        }),
        bt.isBoolean(this.opt.default) && (r = this.opt.default),
        (this.opt.default = r ? 'Y/n' : 'y/N'),
        this
      );
    }
    _run(t) {
      this.done = t;
      var e = Ys(this.rl);
      return (
        e.keypress.pipe(su(e.line)).forEach(this.onKeypress.bind(this)),
        e.line.pipe(ou(1)).forEach(this.onEnd.bind(this)),
        this.render(),
        this
      );
    }
    render(t) {
      var e = this.getQuestion();
      return (
        (e += 'boolean' == typeof t ? st.cyan(t ? 'Yes' : 'No') : this.rl.line),
        this.screen.render(e),
        this
      );
    }
    onEnd(t) {
      this.status = 'answered';
      var e = this.opt.filter(t);
      this.render(e), this.screen.done(), this.done(e);
    }
    onKeypress() {
      this.render();
    }
  },
  { map: cu, takeUntil: au } = Mo;
var lu = class extends Us {
    constructor(t, e, n) {
      super(t, e, n),
        this.opt.choices || this.throwParamError('choices'),
        (this.opt.validChoices = this.opt.choices.filter(pt.exclude)),
        (this.selected = 0),
        (this.rawDefault = 0),
        bt.extend(this.opt, {
          validate: function(t) {
            return null != t;
          }
        });
      var r = this.opt.default;
      if (bt.isNumber(r) && r >= 0 && r < this.opt.choices.realLength)
        (this.selected = r), (this.rawDefault = r);
      else if (!bt.isNumber(r) && null != r) {
        let t = bt.findIndex(
            this.opt.choices.realChoices,
            ({ value: t }) => t === r
          ),
          e = Math.max(t, 0);
        (this.selected = e), (this.rawDefault = e);
      }
      (this.opt.default = null), (this.paginator = new Hs());
    }
    _run(t) {
      this.done = t;
      var e = Ys(this.rl),
        n = e.line.pipe(cu(this.getCurrentValue.bind(this))),
        r = this.handleSubmitEvents(n);
      return (
        r.success.forEach(this.onEnd.bind(this)),
        r.error.forEach(this.onError.bind(this)),
        e.normalizedUpKey.pipe(au(e.line)).forEach(this.onUpKey.bind(this)),
        e.normalizedDownKey.pipe(au(e.line)).forEach(this.onDownKey.bind(this)),
        e.keypress.pipe(au(r.success)).forEach(this.onKeypress.bind(this)),
        this.render(),
        this
      );
    }
    render(t) {
      var e = this.getQuestion(),
        n = '';
      if ('answered' === this.status) e += st.cyan(this.answer);
      else {
        var r = (function(t, e) {
          var n = '',
            r = 0;
          return (
            t.forEach(function(t, i) {
              if (((n += '\n  '), 'separator' === t.type))
                return r++, void (n += ' ' + t);
              var o = i - r,
                s = o + 1 + ') ' + t.name;
              o === e && (s = st.cyan(s)), (n += s);
            }),
            n
          );
        })(this.opt.choices, this.selected);
        (e +=
          '\n' + this.paginator.paginate(r, this.selected, this.opt.pageSize)),
          (e += '\n  Answer: ');
      }
      (e += this.rl.line),
        t && (n = '\n' + st.red('>> ') + t),
        this.screen.render(e, n);
    }
    getCurrentValue(t) {
      null == t
        ? (t = this.rawDefault)
        : '' === t
        ? (t = this.selected)
        : (t -= 1);
      var e = this.opt.choices.getChoice(t);
      return e ? e.value : null;
    }
    onEnd(t) {
      (this.status = 'answered'),
        (this.answer = t.value),
        this.render(),
        this.screen.done(),
        this.done(t.value);
    }
    onError() {
      this.render('Please enter a valid index');
    }
    onKeypress() {
      var t = this.rl.line.length ? Number(this.rl.line) - 1 : 0;
      this.opt.choices.getChoice(t)
        ? (this.selected = t)
        : (this.selected = void 0),
        this.render();
    }
    onUpKey() {
      this.onArrowKey('up');
    }
    onDownKey() {
      this.onArrowKey('down');
    }
    onArrowKey(t) {
      var e = this.opt.choices.realLength;
      (this.selected =
        'up' === t
          ? this.selected > 0
            ? this.selected - 1
            : e - 1
          : this.selected < e - 1
          ? this.selected + 1
          : 0),
        (this.rl.line = String(this.selected + 1));
    }
  },
  { map: hu, takeUntil: fu } = Mo;
var pu = class extends Us {
    constructor(t, e, n) {
      super(t, e, n),
        this.opt.choices || this.throwParamError('choices'),
        this.validateChoices(this.opt.choices),
        this.opt.choices.push({
          key: 'h',
          name: 'Help, list all options',
          value: 'help'
        }),
        (this.opt.validate = t =>
          null == t ? 'Please enter a valid command' : 'help' !== t),
        (this.opt.default = this.generateChoicesString(
          this.opt.choices,
          this.opt.default
        )),
        (this.paginator = new Hs(this.screen));
    }
    _run(t) {
      this.done = t;
      var e = Ys(this.rl),
        n = this.handleSubmitEvents(
          e.line.pipe(hu(this.getCurrentValue.bind(this)))
        );
      return (
        n.success.forEach(this.onSubmit.bind(this)),
        n.error.forEach(this.onError.bind(this)),
        (this.keypressObs = e.keypress
          .pipe(fu(n.success))
          .forEach(this.onKeypress.bind(this))),
        this.render(),
        this
      );
    }
    render(t, e) {
      var n = this.getQuestion(),
        r = '';
      if ('answered' === this.status) n += st.cyan(this.answer);
      else if ('expanded' === this.status) {
        var i = (function(t, e) {
          var n = '';
          return (
            t.forEach(t => {
              if (((n += '\n  '), 'separator' !== t.type)) {
                var r = t.key + ') ' + t.name;
                e === t.key && (r = st.cyan(r)), (n += r);
              } else n += ' ' + t;
            }),
            n
          );
        })(this.opt.choices, this.selectedKey);
        (n += this.paginator.paginate(i, this.selectedKey, this.opt.pageSize)),
          (n += '\n  Answer: ');
      }
      (n += this.rl.line),
        t && (r = st.red('>> ') + t),
        e && (r = st.cyan('>> ') + e),
        this.screen.render(n, r);
    }
    getCurrentValue(t) {
      t || (t = this.rawDefault);
      var e = this.opt.choices.where({ key: t.toLowerCase().trim() })[0];
      return e ? e.value : null;
    }
    getChoices() {
      var t = '';
      return (
        this.opt.choices.forEach(e => {
          if (((t += '\n  '), 'separator' !== e.type)) {
            var n = e.key + ') ' + e.name;
            this.selectedKey === e.key && (n = st.cyan(n)), (t += n);
          } else t += ' ' + e;
        }),
        t
      );
    }
    onError(t) {
      if ('help' === t.value)
        return (
          (this.selectedKey = ''),
          (this.status = 'expanded'),
          void this.render()
        );
      this.render(t.isValid);
    }
    onSubmit(t) {
      this.status = 'answered';
      var e = this.opt.choices.where({ value: t.value })[0];
      (this.answer = e.short || e.name),
        this.render(),
        this.screen.done(),
        this.done(t.value);
    }
    onKeypress() {
      this.selectedKey = this.rl.line.toLowerCase();
      var t = this.opt.choices.where({ key: this.selectedKey })[0];
      'expanded' === this.status
        ? this.render()
        : this.render(null, t ? t.name : null);
    }
    validateChoices(t) {
      var e,
        n = [],
        r = {};
      if (
        (t.filter(pt.exclude).forEach(t => {
          (t.key && 1 === t.key.length) || (e = !0),
            r[t.key] && n.push(t.key),
            (r[t.key] = !0),
            (t.key = String(t.key).toLowerCase());
        }),
        e)
      )
        throw new Error(
          'Format error: `key` param must be a single letter and is required.'
        );
      if (r.h)
        throw new Error(
          'Reserved key error: `key` param cannot be `h` - this value is reserved.'
        );
      if (n.length)
        throw new Error(
          'Duplicate key error: `key` param must be unique. Duplicates: ' +
            bt.uniq(n).join(', ')
        );
    }
    generateChoicesString(t, e) {
      var n = t.realLength - 1;
      if (bt.isNumber(e) && this.opt.choices.getChoice(e)) n = e;
      else if (bt.isString(e)) {
        let r = bt.findIndex(t.realChoices, ({ value: t }) => t === e);
        n = -1 === r ? n : r;
      }
      var r = this.opt.choices.pluck('key');
      return (
        (this.rawDefault = r[n]),
        (r[n] = String(r[n]).toUpperCase()),
        r.join('')
      );
    }
  },
  { map: du, takeUntil: bu } = Mo;
var vu = class extends Us {
    constructor(t, e, n) {
      super(t, e, n),
        this.opt.choices || this.throwParamError('choices'),
        bt.isArray(this.opt.default) &&
          this.opt.choices.forEach(function(t) {
            this.opt.default.indexOf(t.value) >= 0 && (t.checked = !0);
          }, this),
        (this.pointer = 0),
        (this.opt.default = null),
        (this.paginator = new Hs(this.screen));
    }
    _run(t) {
      this.done = t;
      var e = Ys(this.rl),
        n = this.handleSubmitEvents(
          e.line.pipe(du(this.getCurrentValue.bind(this)))
        );
      return (
        n.success.forEach(this.onEnd.bind(this)),
        n.error.forEach(this.onError.bind(this)),
        e.normalizedUpKey.pipe(bu(n.success)).forEach(this.onUpKey.bind(this)),
        e.normalizedDownKey
          .pipe(bu(n.success))
          .forEach(this.onDownKey.bind(this)),
        e.numberKey.pipe(bu(n.success)).forEach(this.onNumberKey.bind(this)),
        e.spaceKey.pipe(bu(n.success)).forEach(this.onSpaceKey.bind(this)),
        e.aKey.pipe(bu(n.success)).forEach(this.onAllKey.bind(this)),
        e.iKey.pipe(bu(n.success)).forEach(this.onInverseKey.bind(this)),
        ms.hide(),
        this.render(),
        (this.firstRender = !1),
        this
      );
    }
    render(t) {
      var e = this.getQuestion(),
        n = '';
      if (
        (this.spaceKeyPressed ||
          (e +=
            '(Press ' +
            st.cyan.bold('<space>') +
            ' to select, ' +
            st.cyan.bold('<a>') +
            ' to toggle all, ' +
            st.cyan.bold('<i>') +
            ' to invert selection)'),
        'answered' === this.status)
      )
        e += st.cyan(this.selection.join(', '));
      else {
        var r = (function(t, e) {
            var n = '',
              r = 0;
            return (
              t.forEach(function(t, i) {
                if ('separator' === t.type)
                  return r++, void (n += ' ' + t + '\n');
                if (t.disabled)
                  r++,
                    (n += ' - ' + t.name),
                    (n +=
                      ' (' +
                      (bt.isString(t.disabled) ? t.disabled : 'Disabled') +
                      ')');
                else {
                  var o =
                    (t.checked ? st.green(ht.radioOn) : ht.radioOff) +
                    ' ' +
                    t.name;
                  n += i - r === e ? st.cyan(ht.pointer + o) : ' ' + o;
                }
                n += '\n';
              }),
              n.replace(/\n$/, '')
            );
          })(this.opt.choices, this.pointer),
          i = this.opt.choices.indexOf(
            this.opt.choices.getChoice(this.pointer)
          );
        e += '\n' + this.paginator.paginate(r, i, this.opt.pageSize);
      }
      t && (n = st.red('>> ') + t), this.screen.render(e, n);
    }
    onEnd(t) {
      (this.status = 'answered'),
        (this.spaceKeyPressed = !0),
        this.render(),
        this.screen.done(),
        ms.show(),
        this.done(t.value);
    }
    onError(t) {
      this.render(t.isValid);
    }
    getCurrentValue() {
      var t = this.opt.choices.filter(function(t) {
        return Boolean(t.checked) && !t.disabled;
      });
      return (this.selection = bt.map(t, 'short')), bt.map(t, 'value');
    }
    onUpKey() {
      var t = this.opt.choices.realLength;
      (this.pointer = this.pointer > 0 ? this.pointer - 1 : t - 1),
        this.render();
    }
    onDownKey() {
      var t = this.opt.choices.realLength;
      (this.pointer = this.pointer < t - 1 ? this.pointer + 1 : 0),
        this.render();
    }
    onNumberKey(t) {
      t <= this.opt.choices.realLength &&
        ((this.pointer = t - 1), this.toggleChoice(this.pointer)),
        this.render();
    }
    onSpaceKey() {
      (this.spaceKeyPressed = !0),
        this.toggleChoice(this.pointer),
        this.render();
    }
    onAllKey() {
      var t = Boolean(
        this.opt.choices.find(function(t) {
          return 'separator' !== t.type && !t.checked;
        })
      );
      this.opt.choices.forEach(function(e) {
        'separator' !== e.type && (e.checked = t);
      }),
        this.render();
    }
    onInverseKey() {
      this.opt.choices.forEach(function(t) {
        'separator' !== t.type && (t.checked = !t.checked);
      }),
        this.render();
    }
    toggleChoice(t) {
      var e = this.opt.choices.getChoice(t);
      void 0 !== e && (this.opt.choices.getChoice(t).checked = !e.checked);
    }
  },
  { map: yu, takeUntil: gu } = Mo;
function mu(t, e) {
  return (
    (e = 'string' == typeof e ? e : '*'),
    0 === (t = String(t)).length ? '' : new Array(t.length + 1).join(e)
  );
}
var Du,
  wu = class extends Us {
    _run(t) {
      this.done = t;
      var e = Ys(this.rl),
        n = e.line.pipe(yu(this.filterInput.bind(this))),
        r = this.handleSubmitEvents(n);
      return (
        r.success.forEach(this.onEnd.bind(this)),
        r.error.forEach(this.onError.bind(this)),
        e.keypress.pipe(gu(r.success)).forEach(this.onKeypress.bind(this)),
        this.render(),
        this
      );
    }
    render(t) {
      var e = this.getQuestion(),
        n = '';
      'answered' === this.status
        ? (e += this.opt.mask
            ? st.cyan(mu(this.answer, this.opt.mask))
            : st.italic.dim('[hidden]'))
        : this.opt.mask
        ? (e += mu(this.rl.line || '', this.opt.mask))
        : (e += st.italic.dim('[input is hidden] ')),
        t && (n = '\n' + st.red('>> ') + t),
        this.screen.render(e, n);
    }
    filterInput(t) {
      return t || (null == this.opt.default ? '' : this.opt.default);
    }
    onEnd(t) {
      (this.status = 'answered'),
        (this.answer = t.value),
        this.render(),
        this.screen.done(),
        this.done(t.value);
    }
    onError(t) {
      this.render(t.isValid);
    }
    onKeypress() {
      this.opt.default && (this.opt.default = void 0), this.render();
    }
  },
  _u = function(t, e, n, r, i) {
    (this.confidence = n), (this.name = r || e.name(t)), (this.lang = i);
  },
  Cu = F(function(t) {
    function e() {}
    (t.exports.UTF_16BE = function() {
      (this.name = function() {
        return 'UTF-16BE';
      }),
        (this.match = function(t) {
          var e = t.fRawInput;
          return e.length >= 2 && 254 == (255 & e[0]) && 255 == (255 & e[1])
            ? new _u(t, this, 100)
            : null;
        });
    }),
      (t.exports.UTF_16LE = function() {
        (this.name = function() {
          return 'UTF-16LE';
        }),
          (this.match = function(t) {
            var e = t.fRawInput;
            return e.length >= 2 && 255 == (255 & e[0]) && 254 == (255 & e[1])
              ? e.length >= 4 && 0 == e[2] && 0 == e[3]
                ? null
                : new _u(t, this, 100)
              : null;
          });
      }),
      (e.prototype.match = function(t) {
        var e = t.fRawInput,
          n = (t.fRawLength / 4) * 4,
          r = 0,
          i = 0,
          o = !1,
          s = 0;
        if (0 == n) return null;
        65279 == this.getChar(e, 0) && (o = !0);
        for (var u = 0; u < n; u += 4) {
          var c = this.getChar(e, u);
          c < 0 || c >= 1114111 || (c >= 55296 && c <= 57343)
            ? (i += 1)
            : (r += 1);
        }
        return (
          o && 0 == i
            ? (s = 100)
            : o && r > 10 * i
            ? (s = 80)
            : r > 3 && 0 == i
            ? (s = 100)
            : r > 0 && 0 == i
            ? (s = 80)
            : r > 10 * i && (s = 25),
          0 == s ? null : new _u(t, this, s)
        );
      }),
      (t.exports.UTF_32BE = function() {
        (this.name = function() {
          return 'UTF-32BE';
        }),
          (this.getChar = function(t, e) {
            return (
              ((255 & t[e + 0]) << 24) |
              ((255 & t[e + 1]) << 16) |
              ((255 & t[e + 2]) << 8) |
              (255 & t[e + 3])
            );
          });
      }),
      o.inherits(t.exports.UTF_32BE, e),
      (t.exports.UTF_32LE = function() {
        (this.name = function() {
          return 'UTF-32LE';
        }),
          (this.getChar = function(t, e) {
            return (
              ((255 & t[e + 3]) << 24) |
              ((255 & t[e + 2]) << 16) |
              ((255 & t[e + 1]) << 8) |
              (255 & t[e + 0])
            );
          });
      }),
      o.inherits(t.exports.UTF_32LE, e);
  }),
  xu =
    (Cu.UTF_16BE,
    Cu.UTF_16LE,
    Cu.UTF_32BE,
    Cu.UTF_32LE,
    F(function(t) {
      function e() {
        (this.charValue = 0),
          (this.index = 0),
          (this.nextIndex = 0),
          (this.error = !1),
          (this.done = !1),
          (this.reset = function() {
            (this.charValue = 0),
              (this.index = -1),
              (this.nextIndex = 0),
              (this.error = !1),
              (this.done = !1);
          }),
          (this.nextByte = function(t) {
            return this.nextIndex >= t.fRawLength
              ? ((this.done = !0), -1)
              : 255 & t.fRawInput[this.nextIndex++];
          });
      }
      function n() {}
      function r(t, e) {
        (t.index = t.nextIndex), (t.error = !1);
        var n = 0,
          r = 0,
          i = 0;
        return (
          (n = t.charValue = t.nextByte(e)) < 0
            ? (t.done = !0)
            : n <= 141 ||
              ((r = t.nextByte(e)),
              (t.charValue = (t.charValue << 8) | r),
              n >= 161 && n <= 254
                ? r < 161 && (t.error = !0)
                : 142 != n
                ? 143 == n &&
                  ((i = t.nextByte(e)),
                  (t.charValue = (t.charValue << 8) | i),
                  i < 161 && (t.error = !0))
                : r < 161 && (t.error = !0)),
          0 == t.done
        );
      }
      (n.prototype.match = function(t) {
        var n,
          r = 0,
          i = 0,
          o = 0,
          s = 0,
          u = 0,
          c = new e();
        t: {
          for (c.reset(); this.nextChar(c, t); ) {
            if ((s++, c.error)) o++;
            else {
              var a = 4294967295 & c.charValue;
              a <= 255 ||
                (r++,
                null != this.commonChars &&
                  (function t(e, n, r, i) {
                    if (i < r) return -1;
                    var o = Math.floor((r + i) >>> 1);
                    return n > e[o]
                      ? t(e, n, o + 1, i)
                      : n < e[o]
                      ? t(e, n, r, o - 1)
                      : o;
                  })((n = this.commonChars), a, 0, n.length - 1) >= 0 &&
                  i++);
            }
            if (o >= 2 && 5 * o >= r) break t;
          }
          if (r <= 10 && 0 == o) u = 0 == r && s < 10 ? 0 : 10;
          else if (r < 20 * o) u = 0;
          else if (null == this.commonChars)
            (u = 30 + r - 20 * o) > 100 && (u = 100);
          else {
            var l = 90 / Math.log(parseFloat(r) / 4);
            (u = Math.floor(Math.log(i + 1) * l + 10)), (u = Math.min(u, 100));
          }
        }
        return 0 == u ? null : new _u(t, this, u);
      }),
        (n.prototype.nextChar = function(t, e) {}),
        (t.exports.sjis = function() {
          (this.name = function() {
            return 'Shift-JIS';
          }),
            (this.language = function() {
              return 'ja';
            }),
            (this.commonChars = [
              33088,
              33089,
              33090,
              33093,
              33115,
              33129,
              33130,
              33141,
              33142,
              33440,
              33442,
              33444,
              33449,
              33450,
              33451,
              33453,
              33455,
              33457,
              33459,
              33461,
              33463,
              33469,
              33470,
              33473,
              33476,
              33477,
              33478,
              33480,
              33481,
              33484,
              33485,
              33500,
              33504,
              33511,
              33512,
              33513,
              33514,
              33520,
              33521,
              33601,
              33603,
              33614,
              33615,
              33624,
              33630,
              33634,
              33639,
              33653,
              33654,
              33673,
              33674,
              33675,
              33677,
              33683,
              36502,
              37882,
              38314
            ]),
            (this.nextChar = function(t, e) {
              var n;
              if (
                ((t.index = t.nextIndex),
                (t.error = !1),
                (n = t.charValue = t.nextByte(e)) < 0)
              )
                return !1;
              if (n <= 127 || (n > 160 && n <= 223)) return !0;
              var r = t.nextByte(e);
              return (
                !(r < 0) &&
                ((t.charValue = (n << 8) | r),
                (r >= 64 && r <= 127) ||
                  (r >= 128 && r <= 255) ||
                  (t.error = !0),
                !0)
              );
            });
        }),
        o.inherits(t.exports.sjis, n),
        (t.exports.big5 = function() {
          (this.name = function() {
            return 'Big5';
          }),
            (this.language = function() {
              return 'zh';
            }),
            (this.commonChars = [
              41280,
              41281,
              41282,
              41283,
              41287,
              41289,
              41333,
              41334,
              42048,
              42054,
              42055,
              42056,
              42065,
              42068,
              42071,
              42084,
              42090,
              42092,
              42103,
              42147,
              42148,
              42151,
              42177,
              42190,
              42193,
              42207,
              42216,
              42237,
              42304,
              42312,
              42328,
              42345,
              42445,
              42471,
              42583,
              42593,
              42594,
              42600,
              42608,
              42664,
              42675,
              42681,
              42707,
              42715,
              42726,
              42738,
              42816,
              42833,
              42841,
              42970,
              43171,
              43173,
              43181,
              43217,
              43219,
              43236,
              43260,
              43456,
              43474,
              43507,
              43627,
              43706,
              43710,
              43724,
              43772,
              44103,
              44111,
              44208,
              44242,
              44377,
              44745,
              45024,
              45290,
              45423,
              45747,
              45764,
              45935,
              46156,
              46158,
              46412,
              46501,
              46525,
              46544,
              46552,
              46705,
              47085,
              47207,
              47428,
              47832,
              47940,
              48033,
              48593,
              49860,
              50105,
              50240,
              50271
            ]),
            (this.nextChar = function(t, e) {
              (t.index = t.nextIndex), (t.error = !1);
              var n = (t.charValue = t.nextByte(e));
              if (n < 0) return !1;
              if (n <= 127 || 255 == n) return !0;
              var r = t.nextByte(e);
              return (
                !(r < 0) &&
                ((t.charValue = (t.charValue << 8) | r),
                (r < 64 || 127 == r || 255 == r) && (t.error = !0),
                !0)
              );
            });
        }),
        o.inherits(t.exports.big5, n),
        (t.exports.euc_jp = function() {
          (this.name = function() {
            return 'EUC-JP';
          }),
            (this.language = function() {
              return 'ja';
            }),
            (this.commonChars = [
              41377,
              41378,
              41379,
              41382,
              41404,
              41418,
              41419,
              41430,
              41431,
              42146,
              42148,
              42150,
              42152,
              42154,
              42155,
              42156,
              42157,
              42159,
              42161,
              42163,
              42165,
              42167,
              42169,
              42171,
              42173,
              42175,
              42176,
              42177,
              42179,
              42180,
              42182,
              42183,
              42184,
              42185,
              42186,
              42187,
              42190,
              42191,
              42192,
              42206,
              42207,
              42209,
              42210,
              42212,
              42216,
              42217,
              42218,
              42219,
              42220,
              42223,
              42226,
              42227,
              42402,
              42403,
              42404,
              42406,
              42407,
              42410,
              42413,
              42415,
              42416,
              42419,
              42421,
              42423,
              42424,
              42425,
              42431,
              42435,
              42438,
              42439,
              42440,
              42441,
              42443,
              42448,
              42453,
              42454,
              42455,
              42462,
              42464,
              42465,
              42469,
              42473,
              42474,
              42475,
              42476,
              42477,
              42483,
              47273,
              47572,
              47854,
              48072,
              48880,
              49079,
              50410,
              50940,
              51133,
              51896,
              51955,
              52188,
              52689
            ]),
            (this.nextChar = r);
        }),
        o.inherits(t.exports.euc_jp, n),
        (t.exports.euc_kr = function() {
          (this.name = function() {
            return 'EUC-KR';
          }),
            (this.language = function() {
              return 'ko';
            }),
            (this.commonChars = [
              45217,
              45235,
              45253,
              45261,
              45268,
              45286,
              45293,
              45304,
              45306,
              45308,
              45496,
              45497,
              45511,
              45527,
              45538,
              45994,
              46011,
              46274,
              46287,
              46297,
              46315,
              46501,
              46517,
              46527,
              46535,
              46569,
              46835,
              47023,
              47042,
              47054,
              47270,
              47278,
              47286,
              47288,
              47291,
              47337,
              47531,
              47534,
              47564,
              47566,
              47613,
              47800,
              47822,
              47824,
              47857,
              48103,
              48115,
              48125,
              48301,
              48314,
              48338,
              48374,
              48570,
              48576,
              48579,
              48581,
              48838,
              48840,
              48863,
              48878,
              48888,
              48890,
              49057,
              49065,
              49088,
              49124,
              49131,
              49132,
              49144,
              49319,
              49327,
              49336,
              49338,
              49339,
              49341,
              49351,
              49356,
              49358,
              49359,
              49366,
              49370,
              49381,
              49403,
              49404,
              49572,
              49574,
              49590,
              49622,
              49631,
              49654,
              49656,
              50337,
              50637,
              50862,
              51151,
              51153,
              51154,
              51160,
              51173,
              51373
            ]),
            (this.nextChar = r);
        }),
        o.inherits(t.exports.euc_kr, n),
        (t.exports.gb_18030 = function() {
          (this.name = function() {
            return 'GB18030';
          }),
            (this.language = function() {
              return 'zh';
            }),
            (this.nextChar = function(t, e) {
              (t.index = t.nextIndex), (t.error = !1);
              var n = 0,
                r = 0,
                i = 0,
                o = 0;
              t: if ((n = t.charValue = t.nextByte(e)) < 0) t.done = !0;
              else if (!(n <= 128))
                if (
                  ((r = t.nextByte(e)),
                  (t.charValue = (t.charValue << 8) | r),
                  n >= 129 && n <= 254)
                ) {
                  if ((r >= 64 && r <= 126) || (r >= 80 && r <= 254)) break t;
                  if (
                    r >= 48 &&
                    r <= 57 &&
                    (i = t.nextByte(e)) >= 129 &&
                    i <= 254 &&
                    (o = t.nextByte(e)) >= 48 &&
                    o <= 57
                  ) {
                    t.charValue = (t.charValue << 16) | (i << 8) | o;
                    break t;
                  }
                  t.error = !0;
                } else;
              return 0 == t.done;
            }),
            (this.commonChars = [
              41377,
              41378,
              41379,
              41380,
              41392,
              41393,
              41457,
              41459,
              41889,
              41900,
              41914,
              45480,
              45496,
              45502,
              45755,
              46025,
              46070,
              46323,
              46525,
              46532,
              46563,
              46767,
              46804,
              46816,
              47010,
              47016,
              47037,
              47062,
              47069,
              47284,
              47327,
              47350,
              47531,
              47561,
              47576,
              47610,
              47613,
              47821,
              48039,
              48086,
              48097,
              48122,
              48316,
              48347,
              48382,
              48588,
              48845,
              48861,
              49076,
              49094,
              49097,
              49332,
              49389,
              49611,
              49883,
              50119,
              50396,
              50410,
              50636,
              50935,
              51192,
              51371,
              51403,
              51413,
              51431,
              51663,
              51706,
              51889,
              51893,
              51911,
              51920,
              51926,
              51957,
              51965,
              52460,
              52728,
              52906,
              52932,
              52946,
              52965,
              53173,
              53186,
              53206,
              53442,
              53445,
              53456,
              53460,
              53671,
              53930,
              53938,
              53941,
              53947,
              53972,
              54211,
              54224,
              54269,
              54466,
              54490,
              54754,
              54992
            ]);
        }),
        o.inherits(t.exports.gb_18030, n);
    })),
  Eu =
    (xu.sjis,
    xu.big5,
    xu.euc_jp,
    xu.euc_kr,
    xu.gb_18030,
    F(function(t) {
      function e(t, e) {
        (this.byteIndex = 0),
          (this.ngram = 0),
          (this.ngramList = t),
          (this.byteMap = e),
          (this.ngramCount = 0),
          (this.hitCount = 0),
          this.spaceChar,
          (this.search = function(t, e) {
            var n = 0;
            return (
              t[n + 32] <= e && (n += 32),
              t[n + 16] <= e && (n += 16),
              t[n + 8] <= e && (n += 8),
              t[n + 4] <= e && (n += 4),
              t[n + 2] <= e && (n += 2),
              t[n + 1] <= e && (n += 1),
              t[n] > e && (n -= 1),
              n < 0 || t[n] != e ? -1 : n
            );
          }),
          (this.lookup = function(t) {
            (this.ngramCount += 1),
              this.search(this.ngramList, t) >= 0 && (this.hitCount += 1);
          }),
          (this.addByte = function(t) {
            (this.ngram = ((this.ngram << 8) + (255 & t)) & 16777215),
              this.lookup(this.ngram);
          }),
          (this.nextByte = function(t) {
            return this.byteIndex >= t.fInputLen
              ? -1
              : 255 & t.fInputBytes[this.byteIndex++];
          }),
          (this.parse = function(t, e) {
            var n,
              r = !1;
            for (this.spaceChar = e; (n = this.nextByte(t)) >= 0; ) {
              var i = this.byteMap[n];
              0 != i &&
                ((i == this.spaceChar && r) || this.addByte(i),
                (r = i == this.spaceChar));
            }
            this.addByte(this.spaceChar);
            var o = this.hitCount / this.ngramCount;
            return o > 0.33 ? 98 : Math.floor(300 * o);
          });
      }
      function n(t, e) {
        (this.fLang = t), (this.fNGrams = e);
      }
      function r() {}
      (r.prototype.spaceChar = 32),
        (r.prototype.ngrams = function() {}),
        (r.prototype.byteMap = function() {}),
        (r.prototype.match = function(t) {
          var r = this.ngrams();
          if (!(Array.isArray(r) && r[0] instanceof n))
            return (u = new e(r, this.byteMap()).parse(t, this.spaceChar)) <= 0
              ? null
              : new _u(t, this, u);
          for (var i = -1, o = null, s = r.length - 1; s >= 0; s--) {
            var u,
              c = r[s];
            (u = new e(c.fNGrams, this.byteMap()).parse(t, this.spaceChar)) >
              i && ((i = u), (o = c.fLang));
          }
          var a = this.name(t);
          return i <= 0 ? null : new _u(t, this, i, a, o);
        }),
        (t.exports.ISO_8859_1 = function() {
          (this.byteMap = function() {
            return [
              32,
              32,
              32,
              32,
              32,
              32,
              32,
              32,
              32,
              32,
              32,
              32,
              32,
              32,
              32,
              32,
              32,
              32,
              32,
              32,
              32,
              32,
              32,
              32,
              32,
              32,
              32,
              32,
              32,
              32,
              32,
              32,
              32,
              32,
              32,
              32,
              32,
              32,
              32,
              0,
              32,
              32,
              32,
              32,
              32,
              32,
              32,
              32,
              32,
              32,
              32,
              32,
              32,
              32,
              32,
              32,
              32,
              32,
              32,
              32,
              32,
              32,
              32,
              32,
              32,
              97,
              98,
              99,
              100,
              101,
              102,
              103,
              104,
              105,
              106,
              107,
              108,
              109,
              110,
              111,
              112,
              113,
              114,
              115,
              116,
              117,
              118,
              119,
              120,
              121,
              122,
              32,
              32,
              32,
              32,
              32,
              32,
              97,
              98,
              99,
              100,
              101,
              102,
              103,
              104,
              105,
              106,
              107,
              108,
              109,
              110,
              111,
              112,
              113,
              114,
              115,
              116,
              117,
              118,
              119,
              120,
              121,
              122,
              32,
              32,
              32,
              32,
              32,
              32,
              32,
              32,
              32,
              32,
              32,
              32,
              32,
              32,
              32,
              32,
              32,
              32,
              32,
              32,
              32,
              32,
              32,
              32,
              32,
              32,
              32,
              32,
              32,
              32,
              32,
              32,
              32,
              32,
              32,
              32,
              32,
              32,
              32,
              32,
              32,
              32,
              32,
              32,
              32,
              32,
              32,
              170,
              32,
              32,
              32,
              32,
              32,
              32,
              32,
              32,
              32,
              32,
              181,
              32,
              32,
              32,
              32,
              186,
              32,
              32,
              32,
              32,
              32,
              224,
              225,
              226,
              227,
              228,
              229,
              230,
              231,
              232,
              233,
              234,
              235,
              236,
              237,
              238,
              239,
              240,
              241,
              242,
              243,
              244,
              245,
              246,
              32,
              248,
              249,
              250,
              251,
              252,
              253,
              254,
              223,
              224,
              225,
              226,
              227,
              228,
              229,
              230,
              231,
              232,
              233,
              234,
              235,
              236,
              237,
              238,
              239,
              240,
              241,
              242,
              243,
              244,
              245,
              246,
              32,
              248,
              249,
              250,
              251,
              252,
              253,
              254,
              255
            ];
          }),
            (this.ngrams = function() {
              return [
                new n('da', [
                  2122086,
                  2122100,
                  2122853,
                  2123118,
                  2123122,
                  2123375,
                  2123873,
                  2124064,
                  2125157,
                  2125671,
                  2126053,
                  2126697,
                  2126708,
                  2126953,
                  2127465,
                  6383136,
                  6385184,
                  6385252,
                  6386208,
                  6386720,
                  6579488,
                  6579566,
                  6579570,
                  6579572,
                  6627443,
                  6644768,
                  6644837,
                  6647328,
                  6647396,
                  6648352,
                  6648421,
                  6648608,
                  6648864,
                  6713202,
                  6776096,
                  6776174,
                  6776178,
                  6907749,
                  6908960,
                  6909543,
                  7038240,
                  7039845,
                  7103858,
                  7104871,
                  7105637,
                  7169380,
                  7234661,
                  7234848,
                  7235360,
                  7235429,
                  7300896,
                  7302432,
                  7303712,
                  7398688,
                  7479396,
                  7479397,
                  7479411,
                  7496992,
                  7566437,
                  7610483,
                  7628064,
                  7628146,
                  7629164,
                  7759218
                ]),
                new n('de', [
                  2122094,
                  2122101,
                  2122341,
                  2122849,
                  2122853,
                  2122857,
                  2123113,
                  2123621,
                  2123873,
                  2124142,
                  2125161,
                  2126691,
                  2126693,
                  2127214,
                  2127461,
                  2127471,
                  2127717,
                  2128501,
                  6448498,
                  6514720,
                  6514789,
                  6514804,
                  6578547,
                  6579566,
                  6579570,
                  6580581,
                  6627428,
                  6627443,
                  6646126,
                  6646132,
                  6647328,
                  6648352,
                  6648608,
                  6776174,
                  6841710,
                  6845472,
                  6906728,
                  6907168,
                  6909472,
                  6909541,
                  6911008,
                  7104867,
                  7105637,
                  7217249,
                  7217252,
                  7217267,
                  7234592,
                  7234661,
                  7234848,
                  7235360,
                  7235429,
                  7238757,
                  7479396,
                  7496805,
                  7497065,
                  7562088,
                  7566437,
                  7610468,
                  7628064,
                  7628142,
                  7628146,
                  7695972,
                  7695975,
                  7759218
                ]),
                new n('en', [
                  2122016,
                  2122094,
                  2122341,
                  2122607,
                  2123375,
                  2123873,
                  2123877,
                  2124142,
                  2125153,
                  2125670,
                  2125938,
                  2126437,
                  2126689,
                  2126708,
                  2126952,
                  2126959,
                  2127720,
                  6383972,
                  6384672,
                  6385184,
                  6385252,
                  6386464,
                  6386720,
                  6386789,
                  6386793,
                  6561889,
                  6561908,
                  6627425,
                  6627443,
                  6627444,
                  6644768,
                  6647412,
                  6648352,
                  6648608,
                  6713202,
                  6840692,
                  6841632,
                  6841714,
                  6906912,
                  6909472,
                  6909543,
                  6909806,
                  6910752,
                  7217249,
                  7217268,
                  7234592,
                  7235360,
                  7238688,
                  7300640,
                  7302688,
                  7303712,
                  7496992,
                  7500576,
                  7544929,
                  7544948,
                  7561577,
                  7566368,
                  7610484,
                  7628146,
                  7628897,
                  7628901,
                  7629167,
                  7630624,
                  7631648
                ]),
                new n('es', [
                  2122016,
                  2122593,
                  2122607,
                  2122853,
                  2123116,
                  2123118,
                  2123123,
                  2124142,
                  2124897,
                  2124911,
                  2125921,
                  2125935,
                  2125938,
                  2126197,
                  2126437,
                  2126693,
                  2127214,
                  2128160,
                  6365283,
                  6365284,
                  6365285,
                  6365292,
                  6365296,
                  6382441,
                  6382703,
                  6384672,
                  6386208,
                  6386464,
                  6515187,
                  6516590,
                  6579488,
                  6579564,
                  6582048,
                  6627428,
                  6627429,
                  6627436,
                  6646816,
                  6647328,
                  6647412,
                  6648608,
                  6648692,
                  6907246,
                  6943598,
                  7102752,
                  7106419,
                  7217253,
                  7238757,
                  7282788,
                  7282789,
                  7302688,
                  7303712,
                  7303968,
                  7364978,
                  7435621,
                  7495968,
                  7497075,
                  7544932,
                  7544933,
                  7544944,
                  7562528,
                  7628064,
                  7630624,
                  7693600,
                  15953440
                ]),
                new n('fr', [
                  2122101,
                  2122607,
                  2122849,
                  2122853,
                  2122869,
                  2123118,
                  2123124,
                  2124897,
                  2124901,
                  2125921,
                  2125935,
                  2125938,
                  2126197,
                  2126693,
                  2126703,
                  2127214,
                  2154528,
                  6385268,
                  6386793,
                  6513952,
                  6516590,
                  6579488,
                  6579571,
                  6583584,
                  6627425,
                  6627427,
                  6627428,
                  6627429,
                  6627436,
                  6627440,
                  6627443,
                  6647328,
                  6647412,
                  6648352,
                  6648608,
                  6648864,
                  6649202,
                  6909806,
                  6910752,
                  6911008,
                  7102752,
                  7103776,
                  7103859,
                  7169390,
                  7217252,
                  7234848,
                  7238432,
                  7238688,
                  7302688,
                  7302772,
                  7304562,
                  7435621,
                  7479404,
                  7496992,
                  7544929,
                  7544932,
                  7544933,
                  7544940,
                  7544944,
                  7610468,
                  7628064,
                  7629167,
                  7693600,
                  7696928
                ]),
                new n('it', [
                  2122092,
                  2122600,
                  2122607,
                  2122853,
                  2122857,
                  2123040,
                  2124140,
                  2124142,
                  2124897,
                  2125925,
                  2125938,
                  2127214,
                  6365283,
                  6365284,
                  6365296,
                  6365299,
                  6386799,
                  6514789,
                  6516590,
                  6579564,
                  6580512,
                  6627425,
                  6627427,
                  6627428,
                  6627433,
                  6627436,
                  6627440,
                  6627443,
                  6646816,
                  6646892,
                  6647412,
                  6648352,
                  6841632,
                  6889569,
                  6889571,
                  6889572,
                  6889587,
                  6906144,
                  6908960,
                  6909472,
                  6909806,
                  7102752,
                  7103776,
                  7104800,
                  7105633,
                  7234848,
                  7235872,
                  7237408,
                  7238757,
                  7282785,
                  7282788,
                  7282793,
                  7282803,
                  7302688,
                  7302757,
                  7366002,
                  7495968,
                  7496992,
                  7563552,
                  7627040,
                  7628064,
                  7629088,
                  7630624,
                  8022383
                ]),
                new n('nl', [
                  2122092,
                  2122341,
                  2122849,
                  2122853,
                  2122857,
                  2123109,
                  2123118,
                  2123621,
                  2123877,
                  2124142,
                  2125153,
                  2125157,
                  2125680,
                  2126949,
                  2127457,
                  2127461,
                  2127471,
                  2127717,
                  2128489,
                  6381934,
                  6381938,
                  6385184,
                  6385252,
                  6386208,
                  6386720,
                  6514804,
                  6579488,
                  6579566,
                  6579570,
                  6627426,
                  6627446,
                  6645102,
                  6645106,
                  6647328,
                  6648352,
                  6648435,
                  6648864,
                  6776174,
                  6841716,
                  6907168,
                  6909472,
                  6909543,
                  6910752,
                  7217250,
                  7217252,
                  7217253,
                  7217256,
                  7217263,
                  7217270,
                  7234661,
                  7235360,
                  7302756,
                  7303026,
                  7303200,
                  7303712,
                  7562088,
                  7566437,
                  7610468,
                  7628064,
                  7628142,
                  7628146,
                  7758190,
                  7759218,
                  7761775
                ]),
                new n('no', [
                  2122100,
                  2122102,
                  2122853,
                  2123118,
                  2123122,
                  2123375,
                  2123873,
                  2124064,
                  2125157,
                  2125671,
                  2126053,
                  2126693,
                  2126699,
                  2126703,
                  2126708,
                  2126953,
                  2127465,
                  2155808,
                  6385252,
                  6386208,
                  6386720,
                  6579488,
                  6579566,
                  6579572,
                  6627443,
                  6644768,
                  6647328,
                  6647397,
                  6648352,
                  6648421,
                  6648864,
                  6648948,
                  6713202,
                  6776174,
                  6908779,
                  6908960,
                  6909543,
                  7038240,
                  7039845,
                  7103776,
                  7105637,
                  7169380,
                  7169390,
                  7217267,
                  7234848,
                  7235360,
                  7235429,
                  7237221,
                  7300896,
                  7302432,
                  7303712,
                  7398688,
                  7479411,
                  7496992,
                  7565165,
                  7566437,
                  7610483,
                  7628064,
                  7628142,
                  7628146,
                  7629164,
                  7631904,
                  7631973,
                  7759218
                ]),
                new n('pt', [
                  2122016,
                  2122607,
                  2122849,
                  2122853,
                  2122863,
                  2123040,
                  2123123,
                  2125153,
                  2125423,
                  2125600,
                  2125921,
                  2125935,
                  2125938,
                  2126197,
                  2126437,
                  2126693,
                  2127213,
                  6365281,
                  6365283,
                  6365284,
                  6365296,
                  6382693,
                  6382703,
                  6384672,
                  6386208,
                  6386273,
                  6386464,
                  6516589,
                  6516590,
                  6578464,
                  6579488,
                  6582048,
                  6582131,
                  6627425,
                  6627428,
                  6647072,
                  6647412,
                  6648608,
                  6648692,
                  6906144,
                  6906721,
                  7169390,
                  7238757,
                  7238767,
                  7282785,
                  7282787,
                  7282788,
                  7282789,
                  7282800,
                  7303968,
                  7364978,
                  7435621,
                  7495968,
                  7497075,
                  7544929,
                  7544932,
                  7544933,
                  7544944,
                  7566433,
                  7628064,
                  7630624,
                  7693600,
                  14905120,
                  15197039
                ]),
                new n('sv', [
                  2122100,
                  2122102,
                  2122853,
                  2123118,
                  2123510,
                  2123873,
                  2124064,
                  2124142,
                  2124655,
                  2125157,
                  2125667,
                  2126053,
                  2126699,
                  2126703,
                  2126708,
                  2126953,
                  2127457,
                  2127465,
                  2155634,
                  6382693,
                  6385184,
                  6385252,
                  6386208,
                  6386804,
                  6514720,
                  6579488,
                  6579566,
                  6579570,
                  6579572,
                  6644768,
                  6647328,
                  6648352,
                  6648864,
                  6747762,
                  6776174,
                  6909036,
                  6909543,
                  7037216,
                  7105568,
                  7169380,
                  7217267,
                  7233824,
                  7234661,
                  7235360,
                  7235429,
                  7235950,
                  7299944,
                  7302432,
                  7302688,
                  7398688,
                  7479393,
                  7479411,
                  7495968,
                  7564129,
                  7565165,
                  7610483,
                  7627040,
                  7628064,
                  7628146,
                  7629164,
                  7631904,
                  7758194,
                  14971424,
                  16151072
                ])
              ];
            }),
            (this.name = function(t) {
              return t && t.fC1Bytes ? 'windows-1252' : 'ISO-8859-1';
            });
        }),
        o.inherits(t.exports.ISO_8859_1, r),
        (t.exports.ISO_8859_2 = function() {
          (this.byteMap = function() {
            return [
              32,
              32,
              32,
              32,
              32,
              32,
              32,
              32,
              32,
              32,
              32,
              32,
              32,
              32,
              32,
              32,
              32,
              32,
              32,
              32,
              32,
              32,
              32,
              32,
              32,
              32,
              32,
              32,
              32,
              32,
              32,
              32,
              32,
              32,
              32,
              32,
              32,
              32,
              32,
              0,
              32,
              32,
              32,
              32,
              32,
              32,
              32,
              32,
              32,
              32,
              32,
              32,
              32,
              32,
              32,
              32,
              32,
              32,
              32,
              32,
              32,
              32,
              32,
              32,
              32,
              97,
              98,
              99,
              100,
              101,
              102,
              103,
              104,
              105,
              106,
              107,
              108,
              109,
              110,
              111,
              112,
              113,
              114,
              115,
              116,
              117,
              118,
              119,
              120,
              121,
              122,
              32,
              32,
              32,
              32,
              32,
              32,
              97,
              98,
              99,
              100,
              101,
              102,
              103,
              104,
              105,
              106,
              107,
              108,
              109,
              110,
              111,
              112,
              113,
              114,
              115,
              116,
              117,
              118,
              119,
              120,
              121,
              122,
              32,
              32,
              32,
              32,
              32,
              32,
              32,
              32,
              32,
              32,
              32,
              32,
              32,
              32,
              32,
              32,
              32,
              32,
              32,
              32,
              32,
              32,
              32,
              32,
              32,
              32,
              32,
              32,
              32,
              32,
              32,
              32,
              32,
              32,
              32,
              32,
              32,
              32,
              177,
              32,
              179,
              32,
              181,
              182,
              32,
              32,
              185,
              186,
              187,
              188,
              32,
              190,
              191,
              32,
              177,
              32,
              179,
              32,
              181,
              182,
              183,
              32,
              185,
              186,
              187,
              188,
              32,
              190,
              191,
              224,
              225,
              226,
              227,
              228,
              229,
              230,
              231,
              232,
              233,
              234,
              235,
              236,
              237,
              238,
              239,
              240,
              241,
              242,
              243,
              244,
              245,
              246,
              32,
              248,
              249,
              250,
              251,
              252,
              253,
              254,
              223,
              224,
              225,
              226,
              227,
              228,
              229,
              230,
              231,
              232,
              233,
              234,
              235,
              236,
              237,
              238,
              239,
              240,
              241,
              242,
              243,
              244,
              245,
              246,
              32,
              248,
              249,
              250,
              251,
              252,
              253,
              254,
              32
            ];
          }),
            (this.ngrams = function() {
              return [
                new n('cs', [
                  2122016,
                  2122361,
                  2122863,
                  2124389,
                  2125409,
                  2125413,
                  2125600,
                  2125668,
                  2125935,
                  2125938,
                  2126072,
                  2126447,
                  2126693,
                  2126703,
                  2126708,
                  2126959,
                  2127392,
                  2127481,
                  2128481,
                  6365296,
                  6513952,
                  6514720,
                  6627440,
                  6627443,
                  6627446,
                  6647072,
                  6647533,
                  6844192,
                  6844260,
                  6910836,
                  6972704,
                  7042149,
                  7103776,
                  7104800,
                  7233824,
                  7268640,
                  7269408,
                  7269664,
                  7282800,
                  7300206,
                  7301737,
                  7304052,
                  7304480,
                  7304801,
                  7368548,
                  7368554,
                  7369327,
                  7403621,
                  7562528,
                  7565173,
                  7566433,
                  7566441,
                  7566446,
                  7628146,
                  7630573,
                  7630624,
                  7676016,
                  12477728,
                  14773997,
                  15296623,
                  15540336,
                  15540339,
                  15559968,
                  16278884
                ]),
                new n('hu', [
                  2122016,
                  2122106,
                  2122341,
                  2123111,
                  2123116,
                  2123365,
                  2123873,
                  2123887,
                  2124147,
                  2124645,
                  2124649,
                  2124790,
                  2124901,
                  2125153,
                  2125157,
                  2125161,
                  2125413,
                  2126714,
                  2126949,
                  2156915,
                  6365281,
                  6365291,
                  6365293,
                  6365299,
                  6384416,
                  6385184,
                  6388256,
                  6447470,
                  6448494,
                  6645625,
                  6646560,
                  6646816,
                  6646885,
                  6647072,
                  6647328,
                  6648421,
                  6648864,
                  6648933,
                  6648948,
                  6781216,
                  6844263,
                  6909556,
                  6910752,
                  7020641,
                  7075450,
                  7169383,
                  7170414,
                  7217249,
                  7233899,
                  7234923,
                  7234925,
                  7238688,
                  7300985,
                  7544929,
                  7567973,
                  7567988,
                  7568097,
                  7596391,
                  7610465,
                  7631904,
                  7659891,
                  8021362,
                  14773792,
                  15299360
                ]),
                new n('pl', [
                  2122618,
                  2122863,
                  2124064,
                  2124389,
                  2124655,
                  2125153,
                  2125161,
                  2125409,
                  2125417,
                  2125668,
                  2125935,
                  2125938,
                  2126697,
                  2127648,
                  2127721,
                  2127737,
                  2128416,
                  2128481,
                  6365296,
                  6365303,
                  6385257,
                  6514720,
                  6519397,
                  6519417,
                  6582048,
                  6584937,
                  6627440,
                  6627443,
                  6627447,
                  6627450,
                  6645615,
                  6646304,
                  6647072,
                  6647401,
                  6778656,
                  6906144,
                  6907168,
                  6907242,
                  7037216,
                  7039264,
                  7039333,
                  7170405,
                  7233824,
                  7235937,
                  7235941,
                  7282800,
                  7305057,
                  7305065,
                  7368556,
                  7369313,
                  7369327,
                  7369338,
                  7502437,
                  7502457,
                  7563754,
                  7564137,
                  7566433,
                  7825765,
                  7955304,
                  7957792,
                  8021280,
                  8022373,
                  8026400,
                  15955744
                ]),
                new n('ro', [
                  2122016,
                  2122083,
                  2122593,
                  2122597,
                  2122607,
                  2122613,
                  2122853,
                  2122857,
                  2124897,
                  2125153,
                  2125925,
                  2125938,
                  2126693,
                  2126819,
                  2127214,
                  2144873,
                  2158190,
                  6365283,
                  6365284,
                  6386277,
                  6386720,
                  6386789,
                  6386976,
                  6513010,
                  6516590,
                  6518048,
                  6546208,
                  6579488,
                  6627425,
                  6627427,
                  6627428,
                  6627440,
                  6627443,
                  6644e3,
                  6646048,
                  6646885,
                  6647412,
                  6648692,
                  6889569,
                  6889571,
                  6889572,
                  6889584,
                  6907168,
                  6908192,
                  6909472,
                  7102752,
                  7103776,
                  7106418,
                  7107945,
                  7234848,
                  7238770,
                  7303712,
                  7365998,
                  7496992,
                  7497057,
                  7501088,
                  7594784,
                  7628064,
                  7631477,
                  7660320,
                  7694624,
                  7695392,
                  12216608,
                  15625760
                ])
              ];
            }),
            (this.name = function(t) {
              return t && t.fC1Bytes ? 'windows-1250' : 'ISO-8859-2';
            });
        }),
        o.inherits(t.exports.ISO_8859_2, r),
        (t.exports.ISO_8859_5 = function() {
          (this.byteMap = function() {
            return [
              32,
              32,
              32,
              32,
              32,
              32,
              32,
              32,
              32,
              32,
              32,
              32,
              32,
              32,
              32,
              32,
              32,
              32,
              32,
              32,
              32,
              32,
              32,
              32,
              32,
              32,
              32,
              32,
              32,
              32,
              32,
              32,
              32,
              32,
              32,
              32,
              32,
              32,
              32,
              0,
              32,
              32,
              32,
              32,
              32,
              32,
              32,
              32,
              32,
              32,
              32,
              32,
              32,
              32,
              32,
              32,
              32,
              32,
              32,
              32,
              32,
              32,
              32,
              32,
              32,
              97,
              98,
              99,
              100,
              101,
              102,
              103,
              104,
              105,
              106,
              107,
              108,
              109,
              110,
              111,
              112,
              113,
              114,
              115,
              116,
              117,
              118,
              119,
              120,
              121,
              122,
              32,
              32,
              32,
              32,
              32,
              32,
              97,
              98,
              99,
              100,
              101,
              102,
              103,
              104,
              105,
              106,
              107,
              108,
              109,
              110,
              111,
              112,
              113,
              114,
              115,
              116,
              117,
              118,
              119,
              120,
              121,
              122,
              32,
              32,
              32,
              32,
              32,
              32,
              32,
              32,
              32,
              32,
              32,
              32,
              32,
              32,
              32,
              32,
              32,
              32,
              32,
              32,
              32,
              32,
              32,
              32,
              32,
              32,
              32,
              32,
              32,
              32,
              32,
              32,
              32,
              32,
              32,
              32,
              32,
              32,
              241,
              242,
              243,
              244,
              245,
              246,
              247,
              248,
              249,
              250,
              251,
              252,
              32,
              254,
              255,
              208,
              209,
              210,
              211,
              212,
              213,
              214,
              215,
              216,
              217,
              218,
              219,
              220,
              221,
              222,
              223,
              224,
              225,
              226,
              227,
              228,
              229,
              230,
              231,
              232,
              233,
              234,
              235,
              236,
              237,
              238,
              239,
              208,
              209,
              210,
              211,
              212,
              213,
              214,
              215,
              216,
              217,
              218,
              219,
              220,
              221,
              222,
              223,
              224,
              225,
              226,
              227,
              228,
              229,
              230,
              231,
              232,
              233,
              234,
              235,
              236,
              237,
              238,
              239,
              32,
              241,
              242,
              243,
              244,
              245,
              246,
              247,
              248,
              249,
              250,
              251,
              252,
              32,
              254,
              255
            ];
          }),
            (this.ngrams = function() {
              return [
                2150944,
                2151134,
                2151646,
                2152400,
                2152480,
                2153168,
                2153182,
                2153936,
                2153941,
                2154193,
                2154462,
                2154464,
                2154704,
                2154974,
                2154978,
                2155230,
                2156514,
                2158050,
                13688280,
                13689580,
                13884960,
                14015468,
                14015960,
                14016994,
                14017056,
                14164191,
                14210336,
                14211104,
                14216992,
                14407133,
                14407712,
                14413021,
                14536736,
                14538016,
                14538965,
                14538991,
                14540320,
                14540498,
                14557394,
                14557407,
                14557409,
                14602784,
                14602960,
                14603230,
                14604576,
                14605292,
                14605344,
                14606818,
                14671579,
                14672085,
                14672088,
                14672094,
                14733522,
                14734804,
                14803664,
                14803666,
                14803672,
                14806816,
                14865883,
                14868e3,
                14868192,
                14871584,
                15196894,
                15459616
              ];
            }),
            (this.name = function(t) {
              return 'ISO-8859-5';
            }),
            (this.language = function() {
              return 'ru';
            });
        }),
        o.inherits(t.exports.ISO_8859_5, r),
        (t.exports.ISO_8859_6 = function() {
          (this.byteMap = function() {
            return [
              32,
              32,
              32,
              32,
              32,
              32,
              32,
              32,
              32,
              32,
              32,
              32,
              32,
              32,
              32,
              32,
              32,
              32,
              32,
              32,
              32,
              32,
              32,
              32,
              32,
              32,
              32,
              32,
              32,
              32,
              32,
              32,
              32,
              32,
              32,
              32,
              32,
              32,
              32,
              0,
              32,
              32,
              32,
              32,
              32,
              32,
              32,
              32,
              32,
              32,
              32,
              32,
              32,
              32,
              32,
              32,
              32,
              32,
              32,
              32,
              32,
              32,
              32,
              32,
              32,
              97,
              98,
              99,
              100,
              101,
              102,
              103,
              104,
              105,
              106,
              107,
              108,
              109,
              110,
              111,
              112,
              113,
              114,
              115,
              116,
              117,
              118,
              119,
              120,
              121,
              122,
              32,
              32,
              32,
              32,
              32,
              32,
              97,
              98,
              99,
              100,
              101,
              102,
              103,
              104,
              105,
              106,
              107,
              108,
              109,
              110,
              111,
              112,
              113,
              114,
              115,
              116,
              117,
              118,
              119,
              120,
              121,
              122,
              32,
              32,
              32,
              32,
              32,
              32,
              32,
              32,
              32,
              32,
              32,
              32,
              32,
              32,
              32,
              32,
              32,
              32,
              32,
              32,
              32,
              32,
              32,
              32,
              32,
              32,
              32,
              32,
              32,
              32,
              32,
              32,
              32,
              32,
              32,
              32,
              32,
              32,
              32,
              32,
              32,
              32,
              32,
              32,
              32,
              32,
              32,
              32,
              32,
              32,
              32,
              32,
              32,
              32,
              32,
              32,
              32,
              32,
              32,
              32,
              32,
              32,
              32,
              32,
              32,
              32,
              32,
              32,
              32,
              32,
              193,
              194,
              195,
              196,
              197,
              198,
              199,
              200,
              201,
              202,
              203,
              204,
              205,
              206,
              207,
              208,
              209,
              210,
              211,
              212,
              213,
              214,
              215,
              216,
              217,
              218,
              32,
              32,
              32,
              32,
              32,
              224,
              225,
              226,
              227,
              228,
              229,
              230,
              231,
              232,
              233,
              234,
              32,
              32,
              32,
              32,
              32,
              32,
              32,
              32,
              32,
              32,
              32,
              32,
              32,
              32,
              32,
              32,
              32,
              32,
              32,
              32,
              32
            ];
          }),
            (this.ngrams = function() {
              return [
                2148324,
                2148326,
                2148551,
                2152932,
                2154986,
                2155748,
                2156006,
                2156743,
                13050055,
                13091104,
                13093408,
                13095200,
                13100064,
                13100227,
                13100231,
                13100232,
                13100234,
                13100236,
                13100237,
                13100239,
                13100243,
                13100249,
                13100258,
                13100261,
                13100264,
                13100266,
                13100320,
                13100576,
                13100746,
                13115591,
                13181127,
                13181153,
                13181156,
                13181157,
                13181160,
                13246663,
                13574343,
                13617440,
                13705415,
                13748512,
                13836487,
                14229703,
                14279913,
                14805536,
                14950599,
                14993696,
                15001888,
                15002144,
                15016135,
                15058720,
                15059232,
                15066656,
                15081671,
                15147207,
                15189792,
                15255524,
                15263264,
                15278279,
                15343815,
                15343845,
                15343848,
                15386912,
                15388960,
                15394336
              ];
            }),
            (this.name = function(t) {
              return 'ISO-8859-6';
            }),
            (this.language = function() {
              return 'ar';
            });
        }),
        o.inherits(t.exports.ISO_8859_6, r),
        (t.exports.ISO_8859_7 = function() {
          (this.byteMap = function() {
            return [
              32,
              32,
              32,
              32,
              32,
              32,
              32,
              32,
              32,
              32,
              32,
              32,
              32,
              32,
              32,
              32,
              32,
              32,
              32,
              32,
              32,
              32,
              32,
              32,
              32,
              32,
              32,
              32,
              32,
              32,
              32,
              32,
              32,
              32,
              32,
              32,
              32,
              32,
              32,
              0,
              32,
              32,
              32,
              32,
              32,
              32,
              32,
              32,
              32,
              32,
              32,
              32,
              32,
              32,
              32,
              32,
              32,
              32,
              32,
              32,
              32,
              32,
              32,
              32,
              32,
              97,
              98,
              99,
              100,
              101,
              102,
              103,
              104,
              105,
              106,
              107,
              108,
              109,
              110,
              111,
              112,
              113,
              114,
              115,
              116,
              117,
              118,
              119,
              120,
              121,
              122,
              32,
              32,
              32,
              32,
              32,
              32,
              97,
              98,
              99,
              100,
              101,
              102,
              103,
              104,
              105,
              106,
              107,
              108,
              109,
              110,
              111,
              112,
              113,
              114,
              115,
              116,
              117,
              118,
              119,
              120,
              121,
              122,
              32,
              32,
              32,
              32,
              32,
              32,
              32,
              32,
              32,
              32,
              32,
              32,
              32,
              32,
              32,
              32,
              32,
              32,
              32,
              32,
              32,
              32,
              32,
              32,
              32,
              32,
              32,
              32,
              32,
              32,
              32,
              32,
              32,
              32,
              32,
              32,
              32,
              32,
              161,
              162,
              32,
              32,
              32,
              32,
              32,
              32,
              32,
              32,
              32,
              32,
              32,
              32,
              32,
              32,
              32,
              32,
              32,
              32,
              32,
              220,
              32,
              221,
              222,
              223,
              32,
              252,
              32,
              253,
              254,
              192,
              225,
              226,
              227,
              228,
              229,
              230,
              231,
              232,
              233,
              234,
              235,
              236,
              237,
              238,
              239,
              240,
              241,
              32,
              243,
              244,
              245,
              246,
              247,
              248,
              249,
              250,
              251,
              220,
              221,
              222,
              223,
              224,
              225,
              226,
              227,
              228,
              229,
              230,
              231,
              232,
              233,
              234,
              235,
              236,
              237,
              238,
              239,
              240,
              241,
              242,
              243,
              244,
              245,
              246,
              247,
              248,
              249,
              250,
              251,
              252,
              253,
              254,
              32
            ];
          }),
            (this.ngrams = function() {
              return [
                2154989,
                2154992,
                2155497,
                2155753,
                2156016,
                2156320,
                2157281,
                2157797,
                2158049,
                2158368,
                2158817,
                2158831,
                2158833,
                2159604,
                2159605,
                2159847,
                2159855,
                14672160,
                14754017,
                14754036,
                14805280,
                14806304,
                14807292,
                14807584,
                14936545,
                15067424,
                15069728,
                15147252,
                15199520,
                15200800,
                15278324,
                15327520,
                15330014,
                15331872,
                15393257,
                15393268,
                15525152,
                15540449,
                15540453,
                15540464,
                15589664,
                15725088,
                15725856,
                15790069,
                15790575,
                15793184,
                15868129,
                15868133,
                15868138,
                15868144,
                15868148,
                15983904,
                15984416,
                15987951,
                16048416,
                16048617,
                16050157,
                16050162,
                16050666,
                16052e3,
                16052213,
                16054765,
                16379168,
                16706848
              ];
            }),
            (this.name = function(t) {
              return t && t.fC1Bytes ? 'windows-1253' : 'ISO-8859-7';
            }),
            (this.language = function() {
              return 'el';
            });
        }),
        o.inherits(t.exports.ISO_8859_7, r),
        (t.exports.ISO_8859_8 = function() {
          (this.byteMap = function() {
            return [
              32,
              32,
              32,
              32,
              32,
              32,
              32,
              32,
              32,
              32,
              32,
              32,
              32,
              32,
              32,
              32,
              32,
              32,
              32,
              32,
              32,
              32,
              32,
              32,
              32,
              32,
              32,
              32,
              32,
              32,
              32,
              32,
              32,
              32,
              32,
              32,
              32,
              32,
              32,
              0,
              32,
              32,
              32,
              32,
              32,
              32,
              32,
              32,
              32,
              32,
              32,
              32,
              32,
              32,
              32,
              32,
              32,
              32,
              32,
              32,
              32,
              32,
              32,
              32,
              32,
              97,
              98,
              99,
              100,
              101,
              102,
              103,
              104,
              105,
              106,
              107,
              108,
              109,
              110,
              111,
              112,
              113,
              114,
              115,
              116,
              117,
              118,
              119,
              120,
              121,
              122,
              32,
              32,
              32,
              32,
              32,
              32,
              97,
              98,
              99,
              100,
              101,
              102,
              103,
              104,
              105,
              106,
              107,
              108,
              109,
              110,
              111,
              112,
              113,
              114,
              115,
              116,
              117,
              118,
              119,
              120,
              121,
              122,
              32,
              32,
              32,
              32,
              32,
              32,
              32,
              32,
              32,
              32,
              32,
              32,
              32,
              32,
              32,
              32,
              32,
              32,
              32,
              32,
              32,
              32,
              32,
              32,
              32,
              32,
              32,
              32,
              32,
              32,
              32,
              32,
              32,
              32,
              32,
              32,
              32,
              32,
              32,
              32,
              32,
              32,
              32,
              32,
              32,
              32,
              32,
              32,
              32,
              32,
              32,
              32,
              32,
              32,
              32,
              32,
              32,
              32,
              181,
              32,
              32,
              32,
              32,
              32,
              32,
              32,
              32,
              32,
              32,
              32,
              32,
              32,
              32,
              32,
              32,
              32,
              32,
              32,
              32,
              32,
              32,
              32,
              32,
              32,
              32,
              32,
              32,
              32,
              32,
              32,
              32,
              32,
              32,
              32,
              32,
              32,
              32,
              32,
              32,
              32,
              32,
              224,
              225,
              226,
              227,
              228,
              229,
              230,
              231,
              232,
              233,
              234,
              235,
              236,
              237,
              238,
              239,
              240,
              241,
              242,
              243,
              244,
              245,
              246,
              247,
              248,
              249,
              250,
              32,
              32,
              32,
              32,
              32
            ];
          }),
            (this.ngrams = function() {
              return [
                new n('he', [
                  2154725,
                  2154727,
                  2154729,
                  2154746,
                  2154985,
                  2154990,
                  2155744,
                  2155749,
                  2155753,
                  2155758,
                  2155762,
                  2155769,
                  2155770,
                  2157792,
                  2157796,
                  2158304,
                  2159340,
                  2161132,
                  14744096,
                  14950624,
                  14950625,
                  14950628,
                  14950636,
                  14950638,
                  14950649,
                  15001056,
                  15065120,
                  15068448,
                  15068960,
                  15071264,
                  15071776,
                  15278308,
                  15328288,
                  15328762,
                  15329773,
                  15330592,
                  15331104,
                  15333408,
                  15333920,
                  15474912,
                  15474916,
                  15523872,
                  15524896,
                  15540448,
                  15540449,
                  15540452,
                  15540460,
                  15540462,
                  15540473,
                  15655968,
                  15671524,
                  15787040,
                  15788320,
                  15788525,
                  15920160,
                  16261348,
                  16312813,
                  16378912,
                  16392416,
                  16392417,
                  16392420,
                  16392428,
                  16392430,
                  16392441
                ]),
                new n('he', [
                  2154725,
                  2154732,
                  2155753,
                  2155756,
                  2155758,
                  2155760,
                  2157040,
                  2157810,
                  2157817,
                  2158053,
                  2158057,
                  2158565,
                  2158569,
                  2160869,
                  2160873,
                  2161376,
                  2161381,
                  2161385,
                  14688484,
                  14688492,
                  14688493,
                  14688506,
                  14738464,
                  14738916,
                  14740512,
                  14741024,
                  14754020,
                  14754029,
                  14754042,
                  14950628,
                  14950633,
                  14950636,
                  14950637,
                  14950639,
                  14950648,
                  14950650,
                  15002656,
                  15065120,
                  15066144,
                  15196192,
                  15327264,
                  15327520,
                  15328288,
                  15474916,
                  15474925,
                  15474938,
                  15528480,
                  15530272,
                  15591913,
                  15591920,
                  15591928,
                  15605988,
                  15605997,
                  15606010,
                  15655200,
                  15655968,
                  15918112,
                  16326884,
                  16326893,
                  16326906,
                  16376864,
                  16441376,
                  16442400,
                  16442857
                ])
              ];
            }),
            (this.name = function(t) {
              return t && t.fC1Bytes ? 'windows-1255' : 'ISO-8859-8';
            }),
            (this.language = function() {
              return 'he';
            });
        }),
        o.inherits(t.exports.ISO_8859_8, r),
        (t.exports.ISO_8859_9 = function() {
          (this.byteMap = function() {
            return [
              32,
              32,
              32,
              32,
              32,
              32,
              32,
              32,
              32,
              32,
              32,
              32,
              32,
              32,
              32,
              32,
              32,
              32,
              32,
              32,
              32,
              32,
              32,
              32,
              32,
              32,
              32,
              32,
              32,
              32,
              32,
              32,
              32,
              32,
              32,
              32,
              32,
              32,
              32,
              0,
              32,
              32,
              32,
              32,
              32,
              32,
              32,
              32,
              32,
              32,
              32,
              32,
              32,
              32,
              32,
              32,
              32,
              32,
              32,
              32,
              32,
              32,
              32,
              32,
              32,
              97,
              98,
              99,
              100,
              101,
              102,
              103,
              104,
              105,
              106,
              107,
              108,
              109,
              110,
              111,
              112,
              113,
              114,
              115,
              116,
              117,
              118,
              119,
              120,
              121,
              122,
              32,
              32,
              32,
              32,
              32,
              32,
              97,
              98,
              99,
              100,
              101,
              102,
              103,
              104,
              105,
              106,
              107,
              108,
              109,
              110,
              111,
              112,
              113,
              114,
              115,
              116,
              117,
              118,
              119,
              120,
              121,
              122,
              32,
              32,
              32,
              32,
              32,
              32,
              32,
              32,
              32,
              32,
              32,
              32,
              32,
              32,
              32,
              32,
              32,
              32,
              32,
              32,
              32,
              32,
              32,
              32,
              32,
              32,
              32,
              32,
              32,
              32,
              32,
              32,
              32,
              32,
              32,
              32,
              32,
              32,
              32,
              32,
              32,
              32,
              32,
              32,
              32,
              32,
              32,
              170,
              32,
              32,
              32,
              32,
              32,
              32,
              32,
              32,
              32,
              32,
              181,
              32,
              32,
              32,
              32,
              186,
              32,
              32,
              32,
              32,
              32,
              224,
              225,
              226,
              227,
              228,
              229,
              230,
              231,
              232,
              233,
              234,
              235,
              236,
              237,
              238,
              239,
              240,
              241,
              242,
              243,
              244,
              245,
              246,
              32,
              248,
              249,
              250,
              251,
              252,
              105,
              254,
              223,
              224,
              225,
              226,
              227,
              228,
              229,
              230,
              231,
              232,
              233,
              234,
              235,
              236,
              237,
              238,
              239,
              240,
              241,
              242,
              243,
              244,
              245,
              246,
              32,
              248,
              249,
              250,
              251,
              252,
              253,
              254,
              255
            ];
          }),
            (this.ngrams = function() {
              return [
                2122337,
                2122345,
                2122357,
                2122849,
                2122853,
                2123621,
                2123873,
                2124140,
                2124641,
                2124655,
                2125153,
                2125676,
                2126689,
                2126945,
                2127461,
                2128225,
                6365282,
                6384416,
                6384737,
                6384993,
                6385184,
                6385405,
                6386208,
                6386273,
                6386429,
                6386685,
                6388065,
                6449522,
                6578464,
                6579488,
                6580512,
                6627426,
                6627435,
                6644841,
                6647328,
                6648352,
                6648425,
                6648681,
                6909029,
                6909472,
                6909545,
                6910496,
                7102830,
                7102834,
                7103776,
                7103858,
                7217249,
                7217250,
                7217259,
                7234657,
                7234661,
                7234848,
                7235872,
                7235950,
                7273760,
                7498094,
                7535982,
                7759136,
                7954720,
                7958386,
                16608800,
                16608868,
                16609021,
                16642301
              ];
            }),
            (this.name = function(t) {
              return t && t.fC1Bytes ? 'windows-1254' : 'ISO-8859-9';
            }),
            (this.language = function() {
              return 'tr';
            });
        }),
        o.inherits(t.exports.ISO_8859_9, r),
        (t.exports.windows_1251 = function() {
          (this.byteMap = function() {
            return [
              32,
              32,
              32,
              32,
              32,
              32,
              32,
              32,
              32,
              32,
              32,
              32,
              32,
              32,
              32,
              32,
              32,
              32,
              32,
              32,
              32,
              32,
              32,
              32,
              32,
              32,
              32,
              32,
              32,
              32,
              32,
              32,
              32,
              32,
              32,
              32,
              32,
              32,
              32,
              0,
              32,
              32,
              32,
              32,
              32,
              32,
              32,
              32,
              32,
              32,
              32,
              32,
              32,
              32,
              32,
              32,
              32,
              32,
              32,
              32,
              32,
              32,
              32,
              32,
              32,
              97,
              98,
              99,
              100,
              101,
              102,
              103,
              104,
              105,
              106,
              107,
              108,
              109,
              110,
              111,
              112,
              113,
              114,
              115,
              116,
              117,
              118,
              119,
              120,
              121,
              122,
              32,
              32,
              32,
              32,
              32,
              32,
              97,
              98,
              99,
              100,
              101,
              102,
              103,
              104,
              105,
              106,
              107,
              108,
              109,
              110,
              111,
              112,
              113,
              114,
              115,
              116,
              117,
              118,
              119,
              120,
              121,
              122,
              32,
              32,
              32,
              32,
              32,
              144,
              131,
              32,
              131,
              32,
              32,
              32,
              32,
              32,
              32,
              154,
              32,
              156,
              157,
              158,
              159,
              144,
              32,
              32,
              32,
              32,
              32,
              32,
              32,
              32,
              32,
              154,
              32,
              156,
              157,
              158,
              159,
              32,
              162,
              162,
              188,
              32,
              180,
              32,
              32,
              184,
              32,
              186,
              32,
              32,
              32,
              32,
              191,
              32,
              32,
              179,
              179,
              180,
              181,
              32,
              32,
              184,
              32,
              186,
              32,
              188,
              190,
              190,
              191,
              224,
              225,
              226,
              227,
              228,
              229,
              230,
              231,
              232,
              233,
              234,
              235,
              236,
              237,
              238,
              239,
              240,
              241,
              242,
              243,
              244,
              245,
              246,
              247,
              248,
              249,
              250,
              251,
              252,
              253,
              254,
              255,
              224,
              225,
              226,
              227,
              228,
              229,
              230,
              231,
              232,
              233,
              234,
              235,
              236,
              237,
              238,
              239,
              240,
              241,
              242,
              243,
              244,
              245,
              246,
              247,
              248,
              249,
              250,
              251,
              252,
              253,
              254,
              255
            ];
          }),
            (this.ngrams = function() {
              return [
                2155040,
                2155246,
                2155758,
                2156512,
                2156576,
                2157280,
                2157294,
                2158048,
                2158053,
                2158305,
                2158574,
                2158576,
                2158816,
                2159086,
                2159090,
                2159342,
                2160626,
                2162162,
                14740968,
                14742268,
                14937632,
                15068156,
                15068648,
                15069682,
                15069728,
                15212783,
                15263008,
                15263776,
                15269664,
                15459821,
                15460384,
                15465709,
                15589408,
                15590688,
                15591653,
                15591679,
                15592992,
                15593186,
                15605986,
                15605999,
                15606001,
                15655456,
                15655648,
                15655918,
                15657248,
                15657980,
                15658016,
                15659506,
                15724267,
                15724773,
                15724776,
                15724782,
                15786210,
                15787492,
                15856352,
                15856354,
                15856360,
                15859488,
                15918571,
                15920672,
                15920880,
                15924256,
                16249582,
                16512288
              ];
            }),
            (this.name = function(t) {
              return 'windows-1251';
            }),
            (this.language = function() {
              return 'ru';
            });
        }),
        o.inherits(t.exports.windows_1251, r),
        (t.exports.windows_1256 = function() {
          (this.byteMap = function() {
            return [
              32,
              32,
              32,
              32,
              32,
              32,
              32,
              32,
              32,
              32,
              32,
              32,
              32,
              32,
              32,
              32,
              32,
              32,
              32,
              32,
              32,
              32,
              32,
              32,
              32,
              32,
              32,
              32,
              32,
              32,
              32,
              32,
              32,
              32,
              32,
              32,
              32,
              32,
              32,
              0,
              32,
              32,
              32,
              32,
              32,
              32,
              32,
              32,
              32,
              32,
              32,
              32,
              32,
              32,
              32,
              32,
              32,
              32,
              32,
              32,
              32,
              32,
              32,
              32,
              32,
              97,
              98,
              99,
              100,
              101,
              102,
              103,
              104,
              105,
              106,
              107,
              108,
              109,
              110,
              111,
              112,
              113,
              114,
              115,
              116,
              117,
              118,
              119,
              120,
              121,
              122,
              32,
              32,
              32,
              32,
              32,
              32,
              97,
              98,
              99,
              100,
              101,
              102,
              103,
              104,
              105,
              106,
              107,
              108,
              109,
              110,
              111,
              112,
              113,
              114,
              115,
              116,
              117,
              118,
              119,
              120,
              121,
              122,
              32,
              32,
              32,
              32,
              32,
              32,
              129,
              32,
              131,
              32,
              32,
              32,
              32,
              136,
              32,
              138,
              32,
              156,
              141,
              142,
              143,
              144,
              32,
              32,
              32,
              32,
              32,
              32,
              32,
              152,
              32,
              154,
              32,
              156,
              32,
              32,
              159,
              32,
              32,
              32,
              32,
              32,
              32,
              32,
              32,
              32,
              32,
              170,
              32,
              32,
              32,
              32,
              32,
              32,
              32,
              32,
              32,
              32,
              181,
              32,
              32,
              32,
              32,
              32,
              32,
              32,
              32,
              32,
              32,
              192,
              193,
              194,
              195,
              196,
              197,
              198,
              199,
              200,
              201,
              202,
              203,
              204,
              205,
              206,
              207,
              208,
              209,
              210,
              211,
              212,
              213,
              214,
              32,
              216,
              217,
              218,
              219,
              220,
              221,
              222,
              223,
              224,
              225,
              226,
              227,
              228,
              229,
              230,
              231,
              232,
              233,
              234,
              235,
              236,
              237,
              238,
              239,
              32,
              32,
              32,
              32,
              244,
              32,
              32,
              32,
              32,
              249,
              32,
              251,
              252,
              32,
              32,
              255
            ];
          }),
            (this.ngrams = function() {
              return [
                2148321,
                2148324,
                2148551,
                2153185,
                2153965,
                2154977,
                2155492,
                2156231,
                13050055,
                13091104,
                13093408,
                13095200,
                13099296,
                13099459,
                13099463,
                13099464,
                13099466,
                13099468,
                13099469,
                13099471,
                13099475,
                13099482,
                13099486,
                13099491,
                13099494,
                13099501,
                13099808,
                13100064,
                13100234,
                13115591,
                13181127,
                13181149,
                13181153,
                13181155,
                13181158,
                13246663,
                13574343,
                13617440,
                13705415,
                13748512,
                13836487,
                14295239,
                14344684,
                14544160,
                14753991,
                14797088,
                14806048,
                14806304,
                14885063,
                14927648,
                14928160,
                14935072,
                14950599,
                15016135,
                15058720,
                15124449,
                15131680,
                15474887,
                15540423,
                15540451,
                15540454,
                15583520,
                15585568,
                15590432
              ];
            }),
            (this.name = function(t) {
              return 'windows-1256';
            }),
            (this.language = function() {
              return 'ar';
            });
        }),
        o.inherits(t.exports.windows_1256, r),
        (t.exports.KOI8_R = function() {
          (this.byteMap = function() {
            return [
              32,
              32,
              32,
              32,
              32,
              32,
              32,
              32,
              32,
              32,
              32,
              32,
              32,
              32,
              32,
              32,
              32,
              32,
              32,
              32,
              32,
              32,
              32,
              32,
              32,
              32,
              32,
              32,
              32,
              32,
              32,
              32,
              32,
              32,
              32,
              32,
              32,
              32,
              32,
              0,
              32,
              32,
              32,
              32,
              32,
              32,
              32,
              32,
              32,
              32,
              32,
              32,
              32,
              32,
              32,
              32,
              32,
              32,
              32,
              32,
              32,
              32,
              32,
              32,
              32,
              97,
              98,
              99,
              100,
              101,
              102,
              103,
              104,
              105,
              106,
              107,
              108,
              109,
              110,
              111,
              112,
              113,
              114,
              115,
              116,
              117,
              118,
              119,
              120,
              121,
              122,
              32,
              32,
              32,
              32,
              32,
              32,
              97,
              98,
              99,
              100,
              101,
              102,
              103,
              104,
              105,
              106,
              107,
              108,
              109,
              110,
              111,
              112,
              113,
              114,
              115,
              116,
              117,
              118,
              119,
              120,
              121,
              122,
              32,
              32,
              32,
              32,
              32,
              32,
              32,
              32,
              32,
              32,
              32,
              32,
              32,
              32,
              32,
              32,
              32,
              32,
              32,
              32,
              32,
              32,
              32,
              32,
              32,
              32,
              32,
              32,
              32,
              32,
              32,
              32,
              32,
              32,
              32,
              32,
              32,
              32,
              32,
              32,
              163,
              32,
              32,
              32,
              32,
              32,
              32,
              32,
              32,
              32,
              32,
              32,
              32,
              32,
              32,
              32,
              163,
              32,
              32,
              32,
              32,
              32,
              32,
              32,
              32,
              32,
              32,
              32,
              32,
              192,
              193,
              194,
              195,
              196,
              197,
              198,
              199,
              200,
              201,
              202,
              203,
              204,
              205,
              206,
              207,
              208,
              209,
              210,
              211,
              212,
              213,
              214,
              215,
              216,
              217,
              218,
              219,
              220,
              221,
              222,
              223,
              192,
              193,
              194,
              195,
              196,
              197,
              198,
              199,
              200,
              201,
              202,
              203,
              204,
              205,
              206,
              207,
              208,
              209,
              210,
              211,
              212,
              213,
              214,
              215,
              216,
              217,
              218,
              219,
              220,
              221,
              222,
              223
            ];
          }),
            (this.ngrams = function() {
              return [
                2147535,
                2148640,
                2149313,
                2149327,
                2150081,
                2150085,
                2150338,
                2150607,
                2150610,
                2151105,
                2151375,
                2151380,
                2151631,
                2152224,
                2152399,
                2153153,
                2153684,
                2154196,
                12701385,
                12702936,
                12963032,
                12963529,
                12964820,
                12964896,
                13094688,
                13181136,
                13223200,
                13224224,
                13226272,
                13419982,
                13420832,
                13424846,
                13549856,
                13550880,
                13552069,
                13552081,
                13553440,
                13553623,
                13574352,
                13574355,
                13574359,
                13617103,
                13617696,
                13618392,
                13618464,
                13620180,
                13621024,
                13621185,
                13684684,
                13685445,
                13685449,
                13685455,
                13812183,
                13813188,
                13881632,
                13882561,
                13882569,
                13882583,
                13944268,
                13946656,
                13946834,
                13948960,
                14272544,
                14603471
              ];
            }),
            (this.name = function(t) {
              return 'KOI8-R';
            }),
            (this.language = function() {
              return 'ru';
            });
        }),
        o.inherits(t.exports.KOI8_R, r);
    })),
  Fu =
    (Eu.ISO_8859_1,
    Eu.ISO_8859_2,
    Eu.ISO_8859_5,
    Eu.ISO_8859_6,
    Eu.ISO_8859_7,
    Eu.ISO_8859_8,
    Eu.ISO_8859_9,
    Eu.windows_1251,
    Eu.windows_1256,
    Eu.KOI8_R,
    F(function(t) {
      function e() {}
      (e.prototype.match = function(t) {
        var e,
          n,
          r,
          i,
          o = 0,
          s = 0,
          u = 0,
          c = t.fInputBytes,
          a = t.fInputLen;
        t: for (e = 0; e < a; e++) {
          if (27 == c[e]) {
            e: for (r = 0; r < this.escapeSequences.length; r++) {
              var l = this.escapeSequences[r];
              if (!(a - e < l.length)) {
                for (n = 1; n < l.length; n++) if (l[n] != c[e + n]) continue e;
                o++, (e += l.length - 1);
                continue t;
              }
            }
            s++;
          }
          (14 != c[e] && 15 != c[e]) || u++;
        }
        return 0 == o
          ? null
          : ((i = (100 * o - 100 * s) / (o + s)),
            o + u < 5 && (i -= 10 * (5 - (o + u))),
            i <= 0 ? null : new _u(t, this, i));
      }),
        (t.exports.ISO_2022_JP = function() {
          (this.name = function() {
            return 'ISO-2022-JP';
          }),
            (this.escapeSequences = [
              [27, 36, 40, 67],
              [27, 36, 40, 68],
              [27, 36, 64],
              [27, 36, 65],
              [27, 36, 66],
              [27, 38, 64],
              [27, 40, 66],
              [27, 40, 72],
              [27, 40, 73],
              [27, 40, 74],
              [27, 46, 65],
              [27, 46, 70]
            ]);
        }),
        o.inherits(t.exports.ISO_2022_JP, e),
        (t.exports.ISO_2022_KR = function() {
          (this.name = function() {
            return 'ISO-2022-KR';
          }),
            (this.escapeSequences = [[27, 36, 41, 67]]);
        }),
        o.inherits(t.exports.ISO_2022_KR, e),
        (t.exports.ISO_2022_CN = function() {
          (this.name = function() {
            return 'ISO-2022-CN';
          }),
            (this.escapeSequences = [
              [27, 36, 41, 65],
              [27, 36, 41, 71],
              [27, 36, 42, 72],
              [27, 36, 41, 69],
              [27, 36, 43, 73],
              [27, 36, 43, 74],
              [27, 36, 43, 75],
              [27, 36, 43, 76],
              [27, 36, 43, 77],
              [27, 78],
              [27, 79]
            ]);
        }),
        o.inherits(t.exports.ISO_2022_CN, e);
    })),
  Su =
    (Fu.ISO_2022_JP,
    Fu.ISO_2022_KR,
    Fu.ISO_2022_CN,
    [
      new (function() {
        (this.name = function() {
          return 'UTF-8';
        }),
          (this.match = function(t) {
            var e,
              n = !1,
              r = 0,
              i = 0,
              o = t.fRawInput,
              s = 0;
            t.fRawLength >= 3 &&
              239 == (255 & o[0]) &&
              187 == (255 & o[1]) &&
              191 == (255 & o[2]) &&
              (n = !0);
            for (var u = 0; u < t.fRawLength; u++) {
              var c = o[u];
              if (0 != (128 & c)) {
                if (192 == (224 & c)) s = 1;
                else if (224 == (240 & c)) s = 2;
                else if (240 == (248 & c)) s = 3;
                else {
                  if (++i > 5) break;
                  s = 0;
                }
                for (; !(++u >= t.fRawLength); ) {
                  if (128 != (192 & o[u])) {
                    i++;
                    break;
                  }
                  if (0 == --s) {
                    r++;
                    break;
                  }
                }
              }
            }
            if (((e = 0), n && 0 == i)) e = 100;
            else if (n && r > 10 * i) e = 80;
            else if (r > 3 && 0 == i) e = 100;
            else if (r > 0 && 0 == i) e = 80;
            else if (0 == r && 0 == i) e = 10;
            else {
              if (!(r > 10 * i)) return null;
              e = 25;
            }
            return new _u(t, this, e);
          });
      })(),
      new Cu.UTF_16BE(),
      new Cu.UTF_16LE(),
      new Cu.UTF_32BE(),
      new Cu.UTF_32LE(),
      new xu.sjis(),
      new xu.big5(),
      new xu.euc_jp(),
      new xu.euc_kr(),
      new xu.gb_18030(),
      new Fu.ISO_2022_JP(),
      new Fu.ISO_2022_KR(),
      new Fu.ISO_2022_CN(),
      new Eu.ISO_8859_1(),
      new Eu.ISO_8859_2(),
      new Eu.ISO_8859_5(),
      new Eu.ISO_8859_6(),
      new Eu.ISO_8859_7(),
      new Eu.ISO_8859_8(),
      new Eu.ISO_8859_9(),
      new Eu.windows_1251(),
      new Eu.windows_1256(),
      new Eu.KOI8_R()
    ]),
  Ou = function(t, e) {
    for (var n = [], r = 0; r < 256; r++) n[r] = 0;
    for (r = t.length - 1; r >= 0; r--) n[255 & t[r]]++;
    var i = !1;
    for (r = 128; r <= 159; r += 1)
      if (0 != n[r]) {
        i = !0;
        break;
      }
    var o = {
        fByteStats: n,
        fC1Bytes: i,
        fRawInput: t,
        fRawLength: t.length,
        fInputBytes: t,
        fInputLen: t.length
      },
      s = Su.map(function(t) {
        return t.match(o);
      })
        .filter(function(t) {
          return !!t;
        })
        .sort(function(t, e) {
          return e.confidence - t.confidence;
        });
    return e && !0 === e.returnAllMatches ? s : s.length > 0 ? s[0].name : null;
  },
  ku = h.Buffer,
  Au = {};
for (Du in h)
  h.hasOwnProperty(Du) &&
    'SlowBuffer' !== Du &&
    'Buffer' !== Du &&
    (Au[Du] = h[Du]);
var ju = (Au.Buffer = {});
for (Du in ku)
  ku.hasOwnProperty(Du) &&
    'allocUnsafe' !== Du &&
    'allocUnsafeSlow' !== Du &&
    (ju[Du] = ku[Du]);
if (
  ((Au.Buffer.prototype = ku.prototype),
  (ju.from && ju.from !== Uint8Array.from) ||
    (ju.from = function(t, e, n) {
      if ('number' == typeof t)
        throw new TypeError(
          'The "value" argument must not be of type number. Received type ' +
            typeof t
        );
      if (t && void 0 === t.length)
        throw new TypeError(
          'The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type ' +
            typeof t
        );
      return ku(t, e, n);
    }),
  ju.alloc ||
    (ju.alloc = function(t, e, n) {
      if ('number' != typeof t)
        throw new TypeError(
          'The "size" argument must be of type number. Received type ' +
            typeof t
        );
      if (t < 0 || t >= 2 * (1 << 30))
        throw new RangeError(
          'The value "' + t + '" is invalid for option "size"'
        );
      var r = ku(t);
      return (
        e && 0 !== e.length
          ? 'string' == typeof n
            ? r.fill(e, n)
            : r.fill(e)
          : r.fill(0),
        r
      );
    }),
  !Au.kStringMaxLength)
)
  try {
    Au.kStringMaxLength = process.binding('buffer').kStringMaxLength;
  } catch (t) {}
Au.constants ||
  ((Au.constants = { MAX_LENGTH: Au.kMaxLength }),
  Au.kStringMaxLength &&
    (Au.constants.MAX_STRING_LENGTH = Au.kStringMaxLength));
var Bu = Au,
  Iu = Tu;
function Tu(t, e) {
  (this.encoder = t), (this.addBOM = !0);
}
(Tu.prototype.write = function(t) {
  return (
    this.addBOM && ((t = '\ufeff' + t), (this.addBOM = !1)),
    this.encoder.write(t)
  );
}),
  (Tu.prototype.end = function() {
    return this.encoder.end();
  });
var Mu = Pu;
function Pu(t, e) {
  (this.decoder = t), (this.pass = !1), (this.options = e || {});
}
(Pu.prototype.write = function(t) {
  var e = this.decoder.write(t);
  return this.pass || !e
    ? e
    : ('\ufeff' === e[0] &&
        ((e = e.slice(1)),
        'function' == typeof this.options.stripBOM && this.options.stripBOM()),
      (this.pass = !0),
      e);
}),
  (Pu.prototype.end = function() {
    return this.decoder.end();
  });
var Nu = { PrependBOM: Iu, StripBOM: Mu },
  Ru = Bu.Buffer,
  Lu = {
    utf8: { type: '_internal', bomAware: !0 },
    cesu8: { type: '_internal', bomAware: !0 },
    unicode11utf8: 'utf8',
    ucs2: { type: '_internal', bomAware: !0 },
    utf16le: 'ucs2',
    binary: { type: '_internal' },
    base64: { type: '_internal' },
    hex: { type: '_internal' },
    _internal: Vu
  };
function Vu(t, e) {
  (this.enc = t.encodingName),
    (this.bomAware = t.bomAware),
    'base64' === this.enc
      ? (this.encoder = Wu)
      : 'cesu8' === this.enc &&
        ((this.enc = 'utf8'),
        (this.encoder = $u),
        '💩' !== Ru.from('eda0bdedb2a9', 'hex').toString() &&
          ((this.decoder = Ku),
          (this.defaultCharUnicode = e.defaultCharUnicode)));
}
(Vu.prototype.encoder = qu), (Vu.prototype.decoder = zu);
var Uu = f.StringDecoder;
function zu(t, e) {
  Uu.call(this, e.enc);
}
function qu(t, e) {
  this.enc = e.enc;
}
function Wu(t, e) {
  this.prevStr = '';
}
function $u(t, e) {}
function Ku(t, e) {
  (this.acc = 0),
    (this.contBytes = 0),
    (this.accBytes = 0),
    (this.defaultCharUnicode = e.defaultCharUnicode);
}
Uu.prototype.end || (Uu.prototype.end = function() {}),
  (zu.prototype = Uu.prototype),
  (qu.prototype.write = function(t) {
    return Ru.from(t, this.enc);
  }),
  (qu.prototype.end = function() {}),
  (Wu.prototype.write = function(t) {
    var e = (t = this.prevStr + t).length - (t.length % 4);
    return (
      (this.prevStr = t.slice(e)), (t = t.slice(0, e)), Ru.from(t, 'base64')
    );
  }),
  (Wu.prototype.end = function() {
    return Ru.from(this.prevStr, 'base64');
  }),
  ($u.prototype.write = function(t) {
    for (var e = Ru.alloc(3 * t.length), n = 0, r = 0; r < t.length; r++) {
      var i = t.charCodeAt(r);
      i < 128
        ? (e[n++] = i)
        : i < 2048
        ? ((e[n++] = 192 + (i >>> 6)), (e[n++] = 128 + (63 & i)))
        : ((e[n++] = 224 + (i >>> 12)),
          (e[n++] = 128 + ((i >>> 6) & 63)),
          (e[n++] = 128 + (63 & i)));
    }
    return e.slice(0, n);
  }),
  ($u.prototype.end = function() {}),
  (Ku.prototype.write = function(t) {
    for (
      var e = this.acc, n = this.contBytes, r = this.accBytes, i = '', o = 0;
      o < t.length;
      o++
    ) {
      var s = t[o];
      128 != (192 & s)
        ? (n > 0 && ((i += this.defaultCharUnicode), (n = 0)),
          s < 128
            ? (i += String.fromCharCode(s))
            : s < 224
            ? ((e = 31 & s), (n = 1), (r = 1))
            : s < 240
            ? ((e = 15 & s), (n = 2), (r = 1))
            : (i += this.defaultCharUnicode))
        : n > 0
        ? ((e = (e << 6) | (63 & s)),
          r++,
          0 === --n &&
            (i +=
              2 === r && e < 128 && e > 0
                ? this.defaultCharUnicode
                : 3 === r && e < 2048
                ? this.defaultCharUnicode
                : String.fromCharCode(e)))
        : (i += this.defaultCharUnicode);
    }
    return (this.acc = e), (this.contBytes = n), (this.accBytes = r), i;
  }),
  (Ku.prototype.end = function() {
    var t = 0;
    return this.contBytes > 0 && (t += this.defaultCharUnicode), t;
  });
var Gu = Bu.Buffer,
  Yu = Hu;
function Hu() {}
function Qu() {}
function Ju() {
  this.overflowByte = -1;
}
(Hu.prototype.encoder = Qu),
  (Hu.prototype.decoder = Ju),
  (Hu.prototype.bomAware = !0),
  (Qu.prototype.write = function(t) {
    for (var e = Gu.from(t, 'ucs2'), n = 0; n < e.length; n += 2) {
      var r = e[n];
      (e[n] = e[n + 1]), (e[n + 1] = r);
    }
    return e;
  }),
  (Qu.prototype.end = function() {}),
  (Ju.prototype.write = function(t) {
    if (0 == t.length) return '';
    var e = Gu.alloc(t.length + 1),
      n = 0,
      r = 0;
    for (
      -1 !== this.overflowByte &&
      ((e[0] = t[0]), (e[1] = this.overflowByte), (n = 1), (r = 2));
      n < t.length - 1;
      n += 2, r += 2
    )
      (e[r] = t[n + 1]), (e[r + 1] = t[n]);
    return (
      (this.overflowByte = n == t.length - 1 ? t[t.length - 1] : -1),
      e.slice(0, r).toString('ucs2')
    );
  }),
  (Ju.prototype.end = function() {});
var Zu = Xu;
function Xu(t, e) {
  this.iconv = e;
}
function tc(t, e) {
  void 0 === (t = t || {}).addBOM && (t.addBOM = !0),
    (this.encoder = e.iconv.getEncoder('utf-16le', t));
}
function ec(t, e) {
  (this.decoder = null),
    (this.initialBytes = []),
    (this.initialBytesLen = 0),
    (this.options = t || {}),
    (this.iconv = e.iconv);
}
function nc(t, e) {
  var n = e || 'utf-16le';
  if (t.length >= 2)
    if (254 == t[0] && 255 == t[1]) n = 'utf-16be';
    else if (255 == t[0] && 254 == t[1]) n = 'utf-16le';
    else {
      for (
        var r = 0, i = 0, o = Math.min(t.length - (t.length % 2), 64), s = 0;
        s < o;
        s += 2
      )
        0 === t[s] && 0 !== t[s + 1] && i++,
          0 !== t[s] && 0 === t[s + 1] && r++;
      i > r ? (n = 'utf-16be') : i < r && (n = 'utf-16le');
    }
  return n;
}
(Xu.prototype.encoder = tc),
  (Xu.prototype.decoder = ec),
  (tc.prototype.write = function(t) {
    return this.encoder.write(t);
  }),
  (tc.prototype.end = function() {
    return this.encoder.end();
  }),
  (ec.prototype.write = function(t) {
    if (!this.decoder) {
      if (
        (this.initialBytes.push(t),
        (this.initialBytesLen += t.length),
        this.initialBytesLen < 16)
      )
        return '';
      var e = nc(
        (t = Gu.concat(this.initialBytes)),
        this.options.defaultEncoding
      );
      (this.decoder = this.iconv.getDecoder(e, this.options)),
        (this.initialBytes.length = this.initialBytesLen = 0);
    }
    return this.decoder.write(t);
  }),
  (ec.prototype.end = function() {
    if (!this.decoder) {
      var t = Gu.concat(this.initialBytes),
        e = nc(t, this.options.defaultEncoding);
      this.decoder = this.iconv.getDecoder(e, this.options);
      var n = this.decoder.write(t),
        r = this.decoder.end();
      return r ? n + r : n;
    }
    return this.decoder.end();
  });
var rc = { utf16be: Yu, utf16: Zu },
  ic = Bu.Buffer,
  oc = sc;
function sc(t, e) {
  this.iconv = e;
}
(sc.prototype.encoder = cc),
  (sc.prototype.decoder = ac),
  (sc.prototype.bomAware = !0);
var uc = /[^A-Za-z0-9'\(\),-\.\/:\? \n\r\t]+/g;
function cc(t, e) {
  this.iconv = e.iconv;
}
function ac(t, e) {
  (this.iconv = e.iconv), (this.inBase64 = !1), (this.base64Accum = '');
}
(cc.prototype.write = function(t) {
  return ic.from(
    t.replace(
      uc,
      function(t) {
        return (
          '+' +
          ('+' === t
            ? ''
            : this.iconv
                .encode(t, 'utf16-be')
                .toString('base64')
                .replace(/=+$/, '')) +
          '-'
        );
      }.bind(this)
    )
  );
}),
  (cc.prototype.end = function() {});
for (var lc = /[A-Za-z0-9\/+]/, hc = [], fc = 0; fc < 256; fc++)
  hc[fc] = lc.test(String.fromCharCode(fc));
var pc = '+'.charCodeAt(0),
  dc = '-'.charCodeAt(0),
  bc = '&'.charCodeAt(0);
(ac.prototype.write = function(t) {
  for (
    var e = '', n = 0, r = this.inBase64, i = this.base64Accum, o = 0;
    o < t.length;
    o++
  )
    if (r) {
      if (!hc[t[o]]) {
        if (o == n && t[o] == dc) e += '+';
        else {
          var s = i + t.slice(n, o).toString();
          e += this.iconv.decode(ic.from(s, 'base64'), 'utf16-be');
        }
        t[o] != dc && o--, (n = o + 1), (r = !1), (i = '');
      }
    } else
      t[o] == pc &&
        ((e += this.iconv.decode(t.slice(n, o), 'ascii')),
        (n = o + 1),
        (r = !0));
  if (r) {
    var u = (s = i + t.slice(n).toString()).length - (s.length % 8);
    (i = s.slice(u)),
      (s = s.slice(0, u)),
      (e += this.iconv.decode(ic.from(s, 'base64'), 'utf16-be'));
  } else e += this.iconv.decode(t.slice(n), 'ascii');
  return (this.inBase64 = r), (this.base64Accum = i), e;
}),
  (ac.prototype.end = function() {
    var t = '';
    return (
      this.inBase64 &&
        this.base64Accum.length > 0 &&
        (t = this.iconv.decode(
          ic.from(this.base64Accum, 'base64'),
          'utf16-be'
        )),
      (this.inBase64 = !1),
      (this.base64Accum = ''),
      t
    );
  });
var vc = yc;
function yc(t, e) {
  this.iconv = e;
}
function gc(t, e) {
  (this.iconv = e.iconv),
    (this.inBase64 = !1),
    (this.base64Accum = ic.alloc(6)),
    (this.base64AccumIdx = 0);
}
function mc(t, e) {
  (this.iconv = e.iconv), (this.inBase64 = !1), (this.base64Accum = '');
}
(yc.prototype.encoder = gc),
  (yc.prototype.decoder = mc),
  (yc.prototype.bomAware = !0),
  (gc.prototype.write = function(t) {
    for (
      var e = this.inBase64,
        n = this.base64Accum,
        r = this.base64AccumIdx,
        i = ic.alloc(5 * t.length + 10),
        o = 0,
        s = 0;
      s < t.length;
      s++
    ) {
      var u = t.charCodeAt(s);
      32 <= u && u <= 126
        ? (e &&
            (r > 0 &&
              ((o += i.write(
                n
                  .slice(0, r)
                  .toString('base64')
                  .replace(/\//g, ',')
                  .replace(/=+$/, ''),
                o
              )),
              (r = 0)),
            (i[o++] = dc),
            (e = !1)),
          e || ((i[o++] = u), u === bc && (i[o++] = dc)))
        : (e || ((i[o++] = bc), (e = !0)),
          e &&
            ((n[r++] = u >> 8),
            (n[r++] = 255 & u),
            r == n.length &&
              ((o += i.write(n.toString('base64').replace(/\//g, ','), o)),
              (r = 0))));
    }
    return (this.inBase64 = e), (this.base64AccumIdx = r), i.slice(0, o);
  }),
  (gc.prototype.end = function() {
    var t = ic.alloc(10),
      e = 0;
    return (
      this.inBase64 &&
        (this.base64AccumIdx > 0 &&
          ((e += t.write(
            this.base64Accum
              .slice(0, this.base64AccumIdx)
              .toString('base64')
              .replace(/\//g, ',')
              .replace(/=+$/, ''),
            e
          )),
          (this.base64AccumIdx = 0)),
        (t[e++] = dc),
        (this.inBase64 = !1)),
      t.slice(0, e)
    );
  });
var Dc = hc.slice();
(Dc[','.charCodeAt(0)] = !0),
  (mc.prototype.write = function(t) {
    for (
      var e = '', n = 0, r = this.inBase64, i = this.base64Accum, o = 0;
      o < t.length;
      o++
    )
      if (r) {
        if (!Dc[t[o]]) {
          if (o == n && t[o] == dc) e += '&';
          else {
            var s =
              i +
              t
                .slice(n, o)
                .toString()
                .replace(/,/g, '/');
            e += this.iconv.decode(ic.from(s, 'base64'), 'utf16-be');
          }
          t[o] != dc && o--, (n = o + 1), (r = !1), (i = '');
        }
      } else
        t[o] == bc &&
          ((e += this.iconv.decode(t.slice(n, o), 'ascii')),
          (n = o + 1),
          (r = !0));
    if (r) {
      var u =
        (s =
          i +
          t
            .slice(n)
            .toString()
            .replace(/,/g, '/')).length -
        (s.length % 8);
      (i = s.slice(u)),
        (s = s.slice(0, u)),
        (e += this.iconv.decode(ic.from(s, 'base64'), 'utf16-be'));
    } else e += this.iconv.decode(t.slice(n), 'ascii');
    return (this.inBase64 = r), (this.base64Accum = i), e;
  }),
  (mc.prototype.end = function() {
    var t = '';
    return (
      this.inBase64 &&
        this.base64Accum.length > 0 &&
        (t = this.iconv.decode(
          ic.from(this.base64Accum, 'base64'),
          'utf16-be'
        )),
      (this.inBase64 = !1),
      (this.base64Accum = ''),
      t
    );
  });
var wc = { utf7: oc, unicode11utf7: 'utf7', utf7imap: vc },
  _c = Bu.Buffer,
  Cc = xc;
function xc(t, e) {
  if (!t) throw new Error('SBCS codec is called without the data.');
  if (!t.chars || (128 !== t.chars.length && 256 !== t.chars.length))
    throw new Error(
      "Encoding '" +
        t.type +
        "' has incorrect 'chars' (must be of len 128 or 256)"
    );
  if (128 === t.chars.length) {
    for (var n = '', r = 0; r < 128; r++) n += String.fromCharCode(r);
    t.chars = n + t.chars;
  }
  this.decodeBuf = _c.from(t.chars, 'ucs2');
  var i = _c.alloc(65536, e.defaultCharSingleByte.charCodeAt(0));
  for (r = 0; r < t.chars.length; r++) i[t.chars.charCodeAt(r)] = r;
  this.encodeBuf = i;
}
function Ec(t, e) {
  this.encodeBuf = e.encodeBuf;
}
function Fc(t, e) {
  this.decodeBuf = e.decodeBuf;
}
(xc.prototype.encoder = Ec),
  (xc.prototype.decoder = Fc),
  (Ec.prototype.write = function(t) {
    for (var e = _c.alloc(t.length), n = 0; n < t.length; n++)
      e[n] = this.encodeBuf[t.charCodeAt(n)];
    return e;
  }),
  (Ec.prototype.end = function() {}),
  (Fc.prototype.write = function(t) {
    for (
      var e = this.decodeBuf, n = _c.alloc(2 * t.length), r = 0, i = 0, o = 0;
      o < t.length;
      o++
    )
      (r = 2 * t[o]), (n[(i = 2 * o)] = e[r]), (n[i + 1] = e[r + 1]);
    return n.toString('ucs2');
  }),
  (Fc.prototype.end = function() {});
for (
  var Sc = { _sbcs: Cc },
    Oc = {
      10029: 'maccenteuro',
      maccenteuro: {
        type: '_sbcs',
        chars:
          'ÄĀāÉĄÖÜáąČäčĆćéŹźĎíďĒēĖóėôöõúĚěü†°Ę£§•¶ß®©™ę¨≠ģĮįĪ≤≥īĶ∂∑łĻļĽľĹĺŅņŃ¬√ńŇ∆«»… ňŐÕőŌ–—“”‘’÷◊ōŔŕŘ‹›řŖŗŠ‚„šŚśÁŤťÍŽžŪÓÔūŮÚůŰűŲųÝýķŻŁżĢˇ'
      },
      808: 'cp808',
      ibm808: 'cp808',
      cp808: {
        type: '_sbcs',
        chars:
          'АБВГДЕЖЗИЙКЛМНОПРСТУФХЦЧШЩЪЫЬЭЮЯабвгдежзийклмноп░▒▓│┤╡╢╖╕╣║╗╝╜╛┐└┴┬├─┼╞╟╚╔╩╦╠═╬╧╨╤╥╙╘╒╓╫╪┘┌█▄▌▐▀рстуфхцчшщъыьэюяЁёЄєЇїЎў°∙·√№€■ '
      },
      mik: {
        type: '_sbcs',
        chars:
          'АБВГДЕЖЗИЙКЛМНОПРСТУФХЦЧШЩЪЫЬЭЮЯабвгдежзийклмнопрстуфхцчшщъыьэюя└┴┬├─┼╣║╚╔╩╦╠═╬┐░▒▓│┤№§╗╝┘┌█▄▌▐▀αßΓπΣσµτΦΘΩδ∞φε∩≡±≥≤⌠⌡÷≈°∙·√ⁿ²■ '
      },
      ascii8bit: 'ascii',
      usascii: 'ascii',
      ansix34: 'ascii',
      ansix341968: 'ascii',
      ansix341986: 'ascii',
      csascii: 'ascii',
      cp367: 'ascii',
      ibm367: 'ascii',
      isoir6: 'ascii',
      iso646us: 'ascii',
      iso646irv: 'ascii',
      us: 'ascii',
      latin1: 'iso88591',
      latin2: 'iso88592',
      latin3: 'iso88593',
      latin4: 'iso88594',
      latin5: 'iso88599',
      latin6: 'iso885910',
      latin7: 'iso885913',
      latin8: 'iso885914',
      latin9: 'iso885915',
      latin10: 'iso885916',
      csisolatin1: 'iso88591',
      csisolatin2: 'iso88592',
      csisolatin3: 'iso88593',
      csisolatin4: 'iso88594',
      csisolatincyrillic: 'iso88595',
      csisolatinarabic: 'iso88596',
      csisolatingreek: 'iso88597',
      csisolatinhebrew: 'iso88598',
      csisolatin5: 'iso88599',
      csisolatin6: 'iso885910',
      l1: 'iso88591',
      l2: 'iso88592',
      l3: 'iso88593',
      l4: 'iso88594',
      l5: 'iso88599',
      l6: 'iso885910',
      l7: 'iso885913',
      l8: 'iso885914',
      l9: 'iso885915',
      l10: 'iso885916',
      isoir14: 'iso646jp',
      isoir57: 'iso646cn',
      isoir100: 'iso88591',
      isoir101: 'iso88592',
      isoir109: 'iso88593',
      isoir110: 'iso88594',
      isoir144: 'iso88595',
      isoir127: 'iso88596',
      isoir126: 'iso88597',
      isoir138: 'iso88598',
      isoir148: 'iso88599',
      isoir157: 'iso885910',
      isoir166: 'tis620',
      isoir179: 'iso885913',
      isoir199: 'iso885914',
      isoir203: 'iso885915',
      isoir226: 'iso885916',
      cp819: 'iso88591',
      ibm819: 'iso88591',
      cyrillic: 'iso88595',
      arabic: 'iso88596',
      arabic8: 'iso88596',
      ecma114: 'iso88596',
      asmo708: 'iso88596',
      greek: 'iso88597',
      greek8: 'iso88597',
      ecma118: 'iso88597',
      elot928: 'iso88597',
      hebrew: 'iso88598',
      hebrew8: 'iso88598',
      turkish: 'iso88599',
      turkish8: 'iso88599',
      thai: 'iso885911',
      thai8: 'iso885911',
      celtic: 'iso885914',
      celtic8: 'iso885914',
      isoceltic: 'iso885914',
      tis6200: 'tis620',
      tis62025291: 'tis620',
      tis62025330: 'tis620',
      1e4: 'macroman',
      10006: 'macgreek',
      10007: 'maccyrillic',
      10079: 'maciceland',
      10081: 'macturkish',
      cspc8codepage437: 'cp437',
      cspc775baltic: 'cp775',
      cspc850multilingual: 'cp850',
      cspcp852: 'cp852',
      cspc862latinhebrew: 'cp862',
      cpgr: 'cp869',
      msee: 'cp1250',
      mscyrl: 'cp1251',
      msansi: 'cp1252',
      msgreek: 'cp1253',
      msturk: 'cp1254',
      mshebr: 'cp1255',
      msarab: 'cp1256',
      winbaltrim: 'cp1257',
      cp20866: 'koi8r',
      20866: 'koi8r',
      ibm878: 'koi8r',
      cskoi8r: 'koi8r',
      cp21866: 'koi8u',
      21866: 'koi8u',
      ibm1168: 'koi8u',
      strk10482002: 'rk1048',
      tcvn5712: 'tcvn',
      tcvn57121: 'tcvn',
      gb198880: 'iso646cn',
      cn: 'iso646cn',
      csiso14jisc6220ro: 'iso646jp',
      jisc62201969ro: 'iso646jp',
      jp: 'iso646jp',
      cshproman8: 'hproman8',
      r8: 'hproman8',
      roman8: 'hproman8',
      xroman8: 'hproman8',
      ibm1051: 'hproman8',
      mac: 'macintosh',
      csmacintosh: 'macintosh'
    },
    kc = {
      437: 'cp437',
      737: 'cp737',
      775: 'cp775',
      850: 'cp850',
      852: 'cp852',
      855: 'cp855',
      856: 'cp856',
      857: 'cp857',
      858: 'cp858',
      860: 'cp860',
      861: 'cp861',
      862: 'cp862',
      863: 'cp863',
      864: 'cp864',
      865: 'cp865',
      866: 'cp866',
      869: 'cp869',
      874: 'windows874',
      922: 'cp922',
      1046: 'cp1046',
      1124: 'cp1124',
      1125: 'cp1125',
      1129: 'cp1129',
      1133: 'cp1133',
      1161: 'cp1161',
      1162: 'cp1162',
      1163: 'cp1163',
      1250: 'windows1250',
      1251: 'windows1251',
      1252: 'windows1252',
      1253: 'windows1253',
      1254: 'windows1254',
      1255: 'windows1255',
      1256: 'windows1256',
      1257: 'windows1257',
      1258: 'windows1258',
      28591: 'iso88591',
      28592: 'iso88592',
      28593: 'iso88593',
      28594: 'iso88594',
      28595: 'iso88595',
      28596: 'iso88596',
      28597: 'iso88597',
      28598: 'iso88598',
      28599: 'iso88599',
      28600: 'iso885910',
      28601: 'iso885911',
      28603: 'iso885913',
      28604: 'iso885914',
      28605: 'iso885915',
      28606: 'iso885916',
      windows874: {
        type: '_sbcs',
        chars:
          '€����…�����������‘’“”•–—�������� กขฃคฅฆงจฉชซฌญฎฏฐฑฒณดตถทธนบปผฝพฟภมยรฤลฦวศษสหฬอฮฯะัาำิีึืฺุู����฿เแโใไๅๆ็่้๊๋์ํ๎๏๐๑๒๓๔๕๖๗๘๙๚๛����'
      },
      win874: 'windows874',
      cp874: 'windows874',
      windows1250: {
        type: '_sbcs',
        chars:
          '€�‚�„…†‡�‰Š‹ŚŤŽŹ�‘’“”•–—�™š›śťžź ˇ˘Ł¤Ą¦§¨©Ş«¬­®Ż°±˛ł´µ¶·¸ąş»Ľ˝ľżŔÁÂĂÄĹĆÇČÉĘËĚÍÎĎĐŃŇÓÔŐÖ×ŘŮÚŰÜÝŢßŕáâăäĺćçčéęëěíîďđńňóôőö÷řůúűüýţ˙'
      },
      win1250: 'windows1250',
      cp1250: 'windows1250',
      windows1251: {
        type: '_sbcs',
        chars:
          'ЂЃ‚ѓ„…†‡€‰Љ‹ЊЌЋЏђ‘’“”•–—�™љ›њќћџ ЎўЈ¤Ґ¦§Ё©Є«¬­®Ї°±Ііґµ¶·ё№є»јЅѕїАБВГДЕЖЗИЙКЛМНОПРСТУФХЦЧШЩЪЫЬЭЮЯабвгдежзийклмнопрстуфхцчшщъыьэюя'
      },
      win1251: 'windows1251',
      cp1251: 'windows1251',
      windows1252: {
        type: '_sbcs',
        chars:
          '€�‚ƒ„…†‡ˆ‰Š‹Œ�Ž��‘’“”•–—˜™š›œ�žŸ ¡¢£¤¥¦§¨©ª«¬­®¯°±²³´µ¶·¸¹º»¼½¾¿ÀÁÂÃÄÅÆÇÈÉÊËÌÍÎÏÐÑÒÓÔÕÖ×ØÙÚÛÜÝÞßàáâãäåæçèéêëìíîïðñòóôõö÷øùúûüýþÿ'
      },
      win1252: 'windows1252',
      cp1252: 'windows1252',
      windows1253: {
        type: '_sbcs',
        chars:
          '€�‚ƒ„…†‡�‰�‹�����‘’“”•–—�™�›���� ΅Ά£¤¥¦§¨©�«¬­®―°±²³΄µ¶·ΈΉΊ»Ό½ΎΏΐΑΒΓΔΕΖΗΘΙΚΛΜΝΞΟΠΡ�ΣΤΥΦΧΨΩΪΫάέήίΰαβγδεζηθικλμνξοπρςστυφχψωϊϋόύώ�'
      },
      win1253: 'windows1253',
      cp1253: 'windows1253',
      windows1254: {
        type: '_sbcs',
        chars:
          '€�‚ƒ„…†‡ˆ‰Š‹Œ����‘’“”•–—˜™š›œ��Ÿ ¡¢£¤¥¦§¨©ª«¬­®¯°±²³´µ¶·¸¹º»¼½¾¿ÀÁÂÃÄÅÆÇÈÉÊËÌÍÎÏĞÑÒÓÔÕÖ×ØÙÚÛÜİŞßàáâãäåæçèéêëìíîïğñòóôõö÷øùúûüışÿ'
      },
      win1254: 'windows1254',
      cp1254: 'windows1254',
      windows1255: {
        type: '_sbcs',
        chars:
          '€�‚ƒ„…†‡ˆ‰�‹�����‘’“”•–—˜™�›���� ¡¢£₪¥¦§¨©×«¬­®¯°±²³´µ¶·¸¹÷»¼½¾¿ְֱֲֳִֵֶַָֹֺֻּֽ־ֿ׀ׁׂ׃װױײ׳״�������אבגדהוזחטיךכלםמןנסעףפץצקרשת��‎‏�'
      },
      win1255: 'windows1255',
      cp1255: 'windows1255',
      windows1256: {
        type: '_sbcs',
        chars:
          '€پ‚ƒ„…†‡ˆ‰ٹ‹Œچژڈگ‘’“”•–—ک™ڑ›œ‌‍ں ،¢£¤¥¦§¨©ھ«¬­®¯°±²³´µ¶·¸¹؛»¼½¾؟ہءآأؤإئابةتثجحخدذرزسشصض×طظعغـفقكàلâمنهوçèéêëىيîïًٌٍَôُِ÷ّùْûü‎‏ے'
      },
      win1256: 'windows1256',
      cp1256: 'windows1256',
      windows1257: {
        type: '_sbcs',
        chars:
          '€�‚�„…†‡�‰�‹�¨ˇ¸�‘’“”•–—�™�›�¯˛� �¢£¤�¦§Ø©Ŗ«¬­®Æ°±²³´µ¶·ø¹ŗ»¼½¾æĄĮĀĆÄÅĘĒČÉŹĖĢĶĪĻŠŃŅÓŌÕÖ×ŲŁŚŪÜŻŽßąįāćäåęēčéźėģķīļšńņóōõö÷ųłśūüżž˙'
      },
      win1257: 'windows1257',
      cp1257: 'windows1257',
      windows1258: {
        type: '_sbcs',
        chars:
          '€�‚ƒ„…†‡ˆ‰�‹Œ����‘’“”•–—˜™�›œ��Ÿ ¡¢£¤¥¦§¨©ª«¬­®¯°±²³´µ¶·¸¹º»¼½¾¿ÀÁÂĂÄÅÆÇÈÉÊË̀ÍÎÏĐÑ̉ÓÔƠÖ×ØÙÚÛÜỮßàáâăäåæçèéêë́íîïđṇ̃óôơö÷øùúûüư₫ÿ'
      },
      win1258: 'windows1258',
      cp1258: 'windows1258',
      iso88591: {
        type: '_sbcs',
        chars:
          ' ¡¢£¤¥¦§¨©ª«¬­®¯°±²³´µ¶·¸¹º»¼½¾¿ÀÁÂÃÄÅÆÇÈÉÊËÌÍÎÏÐÑÒÓÔÕÖ×ØÙÚÛÜÝÞßàáâãäåæçèéêëìíîïðñòóôõö÷øùúûüýþÿ'
      },
      cp28591: 'iso88591',
      iso88592: {
        type: '_sbcs',
        chars:
          ' Ą˘Ł¤ĽŚ§¨ŠŞŤŹ­ŽŻ°ą˛ł´ľśˇ¸šşťź˝žżŔÁÂĂÄĹĆÇČÉĘËĚÍÎĎĐŃŇÓÔŐÖ×ŘŮÚŰÜÝŢßŕáâăäĺćçčéęëěíîďđńňóôőö÷řůúűüýţ˙'
      },
      cp28592: 'iso88592',
      iso88593: {
        type: '_sbcs',
        chars:
          ' Ħ˘£¤�Ĥ§¨İŞĞĴ­�Ż°ħ²³´µĥ·¸ışğĵ½�żÀÁÂ�ÄĊĈÇÈÉÊËÌÍÎÏ�ÑÒÓÔĠÖ×ĜÙÚÛÜŬŜßàáâ�äċĉçèéêëìíîï�ñòóôġö÷ĝùúûüŭŝ˙'
      },
      cp28593: 'iso88593',
      iso88594: {
        type: '_sbcs',
        chars:
          ' ĄĸŖ¤ĨĻ§¨ŠĒĢŦ­Ž¯°ą˛ŗ´ĩļˇ¸šēģŧŊžŋĀÁÂÃÄÅÆĮČÉĘËĖÍÎĪĐŅŌĶÔÕÖ×ØŲÚÛÜŨŪßāáâãäåæįčéęëėíîīđņōķôõö÷øųúûüũū˙'
      },
      cp28594: 'iso88594',
      iso88595: {
        type: '_sbcs',
        chars:
          ' ЁЂЃЄЅІЇЈЉЊЋЌ­ЎЏАБВГДЕЖЗИЙКЛМНОПРСТУФХЦЧШЩЪЫЬЭЮЯабвгдежзийклмнопрстуфхцчшщъыьэюя№ёђѓєѕіїјљњћќ§ўџ'
      },
      cp28595: 'iso88595',
      iso88596: {
        type: '_sbcs',
        chars:
          ' ���¤�������،­�������������؛���؟�ءآأؤإئابةتثجحخدذرزسشصضطظعغ�����ـفقكلمنهوىيًٌٍَُِّْ�������������'
      },
      cp28596: 'iso88596',
      iso88597: {
        type: '_sbcs',
        chars:
          ' ‘’£€₯¦§¨©ͺ«¬­�―°±²³΄΅Ά·ΈΉΊ»Ό½ΎΏΐΑΒΓΔΕΖΗΘΙΚΛΜΝΞΟΠΡ�ΣΤΥΦΧΨΩΪΫάέήίΰαβγδεζηθικλμνξοπρςστυφχψωϊϋόύώ�'
      },
      cp28597: 'iso88597',
      iso88598: {
        type: '_sbcs',
        chars:
          ' �¢£¤¥¦§¨©×«¬­®¯°±²³´µ¶·¸¹÷»¼½¾��������������������������������‗אבגדהוזחטיךכלםמןנסעףפץצקרשת��‎‏�'
      },
      cp28598: 'iso88598',
      iso88599: {
        type: '_sbcs',
        chars:
          ' ¡¢£¤¥¦§¨©ª«¬­®¯°±²³´µ¶·¸¹º»¼½¾¿ÀÁÂÃÄÅÆÇÈÉÊËÌÍÎÏĞÑÒÓÔÕÖ×ØÙÚÛÜİŞßàáâãäåæçèéêëìíîïğñòóôõö÷øùúûüışÿ'
      },
      cp28599: 'iso88599',
      iso885910: {
        type: '_sbcs',
        chars:
          ' ĄĒĢĪĨĶ§ĻĐŠŦŽ­ŪŊ°ąēģīĩķ·ļđšŧž―ūŋĀÁÂÃÄÅÆĮČÉĘËĖÍÎÏÐŅŌÓÔÕÖŨØŲÚÛÜÝÞßāáâãäåæįčéęëėíîïðņōóôõöũøųúûüýþĸ'
      },
      cp28600: 'iso885910',
      iso885911: {
        type: '_sbcs',
        chars:
          ' กขฃคฅฆงจฉชซฌญฎฏฐฑฒณดตถทธนบปผฝพฟภมยรฤลฦวศษสหฬอฮฯะัาำิีึืฺุู����฿เแโใไๅๆ็่้๊๋์ํ๎๏๐๑๒๓๔๕๖๗๘๙๚๛����'
      },
      cp28601: 'iso885911',
      iso885913: {
        type: '_sbcs',
        chars:
          ' ”¢£¤„¦§Ø©Ŗ«¬­®Æ°±²³“µ¶·ø¹ŗ»¼½¾æĄĮĀĆÄÅĘĒČÉŹĖĢĶĪĻŠŃŅÓŌÕÖ×ŲŁŚŪÜŻŽßąįāćäåęēčéźėģķīļšńņóōõö÷ųłśūüżž’'
      },
      cp28603: 'iso885913',
      iso885914: {
        type: '_sbcs',
        chars:
          ' Ḃḃ£ĊċḊ§Ẁ©ẂḋỲ­®ŸḞḟĠġṀṁ¶ṖẁṗẃṠỳẄẅṡÀÁÂÃÄÅÆÇÈÉÊËÌÍÎÏŴÑÒÓÔÕÖṪØÙÚÛÜÝŶßàáâãäåæçèéêëìíîïŵñòóôõöṫøùúûüýŷÿ'
      },
      cp28604: 'iso885914',
      iso885915: {
        type: '_sbcs',
        chars:
          ' ¡¢£€¥Š§š©ª«¬­®¯°±²³Žµ¶·ž¹º»ŒœŸ¿ÀÁÂÃÄÅÆÇÈÉÊËÌÍÎÏÐÑÒÓÔÕÖ×ØÙÚÛÜÝÞßàáâãäåæçèéêëìíîïðñòóôõö÷øùúûüýþÿ'
      },
      cp28605: 'iso885915',
      iso885916: {
        type: '_sbcs',
        chars:
          ' ĄąŁ€„Š§š©Ș«Ź­źŻ°±ČłŽ”¶·žčș»ŒœŸżÀÁÂĂÄĆÆÇÈÉÊËÌÍÎÏĐŃÒÓÔŐÖŚŰÙÚÛÜĘȚßàáâăäćæçèéêëìíîïđńòóôőöśűùúûüęțÿ'
      },
      cp28606: 'iso885916',
      cp437: {
        type: '_sbcs',
        chars:
          'ÇüéâäàåçêëèïîìÄÅÉæÆôöòûùÿÖÜ¢£¥₧ƒáíóúñÑªº¿⌐¬½¼¡«»░▒▓│┤╡╢╖╕╣║╗╝╜╛┐└┴┬├─┼╞╟╚╔╩╦╠═╬╧╨╤╥╙╘╒╓╫╪┘┌█▄▌▐▀αßΓπΣσµτΦΘΩδ∞φε∩≡±≥≤⌠⌡÷≈°∙·√ⁿ²■ '
      },
      ibm437: 'cp437',
      csibm437: 'cp437',
      cp737: {
        type: '_sbcs',
        chars:
          'ΑΒΓΔΕΖΗΘΙΚΛΜΝΞΟΠΡΣΤΥΦΧΨΩαβγδεζηθικλμνξοπρσςτυφχψ░▒▓│┤╡╢╖╕╣║╗╝╜╛┐└┴┬├─┼╞╟╚╔╩╦╠═╬╧╨╤╥╙╘╒╓╫╪┘┌█▄▌▐▀ωάέήϊίόύϋώΆΈΉΊΌΎΏ±≥≤ΪΫ÷≈°∙·√ⁿ²■ '
      },
      ibm737: 'cp737',
      csibm737: 'cp737',
      cp775: {
        type: '_sbcs',
        chars:
          'ĆüéāäģåćłēŖŗīŹÄÅÉæÆōöĢ¢ŚśÖÜø£Ø×¤ĀĪóŻżź”¦©®¬½¼Ł«»░▒▓│┤ĄČĘĖ╣║╗╝ĮŠ┐└┴┬├─┼ŲŪ╚╔╩╦╠═╬Žąčęėįšųūž┘┌█▄▌▐▀ÓßŌŃõÕµńĶķĻļņĒŅ’­±“¾¶§÷„°∙·¹³²■ '
      },
      ibm775: 'cp775',
      csibm775: 'cp775',
      cp850: {
        type: '_sbcs',
        chars:
          'ÇüéâäàåçêëèïîìÄÅÉæÆôöòûùÿÖÜø£Ø×ƒáíóúñÑªº¿®¬½¼¡«»░▒▓│┤ÁÂÀ©╣║╗╝¢¥┐└┴┬├─┼ãÃ╚╔╩╦╠═╬¤ðÐÊËÈıÍÎÏ┘┌█▄¦Ì▀ÓßÔÒõÕµþÞÚÛÙýÝ¯´­±‗¾¶§÷¸°¨·¹³²■ '
      },
      ibm850: 'cp850',
      csibm850: 'cp850',
      cp852: {
        type: '_sbcs',
        chars:
          'ÇüéâäůćçłëŐőîŹÄĆÉĹĺôöĽľŚśÖÜŤťŁ×čáíóúĄąŽžĘę¬źČş«»░▒▓│┤ÁÂĚŞ╣║╗╝Żż┐└┴┬├─┼Ăă╚╔╩╦╠═╬¤đĐĎËďŇÍÎě┘┌█▄ŢŮ▀ÓßÔŃńňŠšŔÚŕŰýÝţ´­˝˛ˇ˘§÷¸°¨˙űŘř■ '
      },
      ibm852: 'cp852',
      csibm852: 'cp852',
      cp855: {
        type: '_sbcs',
        chars:
          'ђЂѓЃёЁєЄѕЅіІїЇјЈљЉњЊћЋќЌўЎџЏюЮъЪаАбБцЦдДеЕфФгГ«»░▒▓│┤хХиИ╣║╗╝йЙ┐└┴┬├─┼кК╚╔╩╦╠═╬¤лЛмМнНоОп┘┌█▄Пя▀ЯрРсСтТуУжЖвВьЬ№­ыЫзЗшШэЭщЩчЧ§■ '
      },
      ibm855: 'cp855',
      csibm855: 'cp855',
      cp856: {
        type: '_sbcs',
        chars:
          'אבגדהוזחטיךכלםמןנסעףפץצקרשת�£�×����������®¬½¼�«»░▒▓│┤���©╣║╗╝¢¥┐└┴┬├─┼��╚╔╩╦╠═╬¤���������┘┌█▄¦�▀������µ�������¯´­±‗¾¶§÷¸°¨·¹³²■ '
      },
      ibm856: 'cp856',
      csibm856: 'cp856',
      cp857: {
        type: '_sbcs',
        chars:
          'ÇüéâäàåçêëèïîıÄÅÉæÆôöòûùİÖÜø£ØŞşáíóúñÑĞğ¿®¬½¼¡«»░▒▓│┤ÁÂÀ©╣║╗╝¢¥┐└┴┬├─┼ãÃ╚╔╩╦╠═╬¤ºªÊËÈ�ÍÎÏ┘┌█▄¦Ì▀ÓßÔÒõÕµ�×ÚÛÙìÿ¯´­±�¾¶§÷¸°¨·¹³²■ '
      },
      ibm857: 'cp857',
      csibm857: 'cp857',
      cp858: {
        type: '_sbcs',
        chars:
          'ÇüéâäàåçêëèïîìÄÅÉæÆôöòûùÿÖÜø£Ø×ƒáíóúñÑªº¿®¬½¼¡«»░▒▓│┤ÁÂÀ©╣║╗╝¢¥┐└┴┬├─┼ãÃ╚╔╩╦╠═╬¤ðÐÊËÈ€ÍÎÏ┘┌█▄¦Ì▀ÓßÔÒõÕµþÞÚÛÙýÝ¯´­±‗¾¶§÷¸°¨·¹³²■ '
      },
      ibm858: 'cp858',
      csibm858: 'cp858',
      cp860: {
        type: '_sbcs',
        chars:
          'ÇüéâãàÁçêÊèÍÔìÃÂÉÀÈôõòÚùÌÕÜ¢£Ù₧ÓáíóúñÑªº¿Ò¬½¼¡«»░▒▓│┤╡╢╖╕╣║╗╝╜╛┐└┴┬├─┼╞╟╚╔╩╦╠═╬╧╨╤╥╙╘╒╓╫╪┘┌█▄▌▐▀αßΓπΣσµτΦΘΩδ∞φε∩≡±≥≤⌠⌡÷≈°∙·√ⁿ²■ '
      },
      ibm860: 'cp860',
      csibm860: 'cp860',
      cp861: {
        type: '_sbcs',
        chars:
          'ÇüéâäàåçêëèÐðÞÄÅÉæÆôöþûÝýÖÜø£Ø₧ƒáíóúÁÍÓÚ¿⌐¬½¼¡«»░▒▓│┤╡╢╖╕╣║╗╝╜╛┐└┴┬├─┼╞╟╚╔╩╦╠═╬╧╨╤╥╙╘╒╓╫╪┘┌█▄▌▐▀αßΓπΣσµτΦΘΩδ∞φε∩≡±≥≤⌠⌡÷≈°∙·√ⁿ²■ '
      },
      ibm861: 'cp861',
      csibm861: 'cp861',
      cp862: {
        type: '_sbcs',
        chars:
          'אבגדהוזחטיךכלםמןנסעףפץצקרשת¢£¥₧ƒáíóúñÑªº¿⌐¬½¼¡«»░▒▓│┤╡╢╖╕╣║╗╝╜╛┐└┴┬├─┼╞╟╚╔╩╦╠═╬╧╨╤╥╙╘╒╓╫╪┘┌█▄▌▐▀αßΓπΣσµτΦΘΩδ∞φε∩≡±≥≤⌠⌡÷≈°∙·√ⁿ²■ '
      },
      ibm862: 'cp862',
      csibm862: 'cp862',
      cp863: {
        type: '_sbcs',
        chars:
          'ÇüéâÂà¶çêëèïî‗À§ÉÈÊôËÏûù¤ÔÜ¢£ÙÛƒ¦´óú¨¸³¯Î⌐¬½¼¾«»░▒▓│┤╡╢╖╕╣║╗╝╜╛┐└┴┬├─┼╞╟╚╔╩╦╠═╬╧╨╤╥╙╘╒╓╫╪┘┌█▄▌▐▀αßΓπΣσµτΦΘΩδ∞φε∩≡±≥≤⌠⌡÷≈°∙·√ⁿ²■ '
      },
      ibm863: 'cp863',
      csibm863: 'cp863',
      cp864: {
        type: '_sbcs',
        chars:
          '\0\b\t\n\v\f\r !"#$٪&\'()*+,-./0123456789:;<=>?@ABCDEFGHIJKLMNOPQRSTUVWXYZ[\\]^_`abcdefghijklmnopqrstuvwxyz{|}~°·∙√▒─│┼┤┬├┴┐┌└┘β∞φ±½¼≈«»ﻷﻸ��ﻻﻼ� ­ﺂ£¤ﺄ��ﺎﺏﺕﺙ،ﺝﺡﺥ٠١٢٣٤٥٦٧٨٩ﻑ؛ﺱﺵﺹ؟¢ﺀﺁﺃﺅﻊﺋﺍﺑﺓﺗﺛﺟﺣﺧﺩﺫﺭﺯﺳﺷﺻﺿﻁﻅﻋﻏ¦¬÷×ﻉـﻓﻗﻛﻟﻣﻧﻫﻭﻯﻳﺽﻌﻎﻍﻡﹽّﻥﻩﻬﻰﻲﻐﻕﻵﻶﻝﻙﻱ■�'
      },
      ibm864: 'cp864',
      csibm864: 'cp864',
      cp865: {
        type: '_sbcs',
        chars:
          'ÇüéâäàåçêëèïîìÄÅÉæÆôöòûùÿÖÜø£Ø₧ƒáíóúñÑªº¿⌐¬½¼¡«¤░▒▓│┤╡╢╖╕╣║╗╝╜╛┐└┴┬├─┼╞╟╚╔╩╦╠═╬╧╨╤╥╙╘╒╓╫╪┘┌█▄▌▐▀αßΓπΣσµτΦΘΩδ∞φε∩≡±≥≤⌠⌡÷≈°∙·√ⁿ²■ '
      },
      ibm865: 'cp865',
      csibm865: 'cp865',
      cp866: {
        type: '_sbcs',
        chars:
          'АБВГДЕЖЗИЙКЛМНОПРСТУФХЦЧШЩЪЫЬЭЮЯабвгдежзийклмноп░▒▓│┤╡╢╖╕╣║╗╝╜╛┐└┴┬├─┼╞╟╚╔╩╦╠═╬╧╨╤╥╙╘╒╓╫╪┘┌█▄▌▐▀рстуфхцчшщъыьэюяЁёЄєЇїЎў°∙·√№¤■ '
      },
      ibm866: 'cp866',
      csibm866: 'cp866',
      cp869: {
        type: '_sbcs',
        chars:
          '������Ά�·¬¦‘’Έ―ΉΊΪΌ��ΎΫ©Ώ²³ά£έήίϊΐόύΑΒΓΔΕΖΗ½ΘΙ«»░▒▓│┤ΚΛΜΝ╣║╗╝ΞΟ┐└┴┬├─┼ΠΡ╚╔╩╦╠═╬ΣΤΥΦΧΨΩαβγ┘┌█▄δε▀ζηθικλμνξοπρσςτ΄­±υφχ§ψ΅°¨ωϋΰώ■ '
      },
      ibm869: 'cp869',
      csibm869: 'cp869',
      cp922: {
        type: '_sbcs',
        chars:
          ' ¡¢£¤¥¦§¨©ª«¬­®‾°±²³´µ¶·¸¹º»¼½¾¿ÀÁÂÃÄÅÆÇÈÉÊËÌÍÎÏŠÑÒÓÔÕÖ×ØÙÚÛÜÝŽßàáâãäåæçèéêëìíîïšñòóôõö÷øùúûüýžÿ'
      },
      ibm922: 'cp922',
      csibm922: 'cp922',
      cp1046: {
        type: '_sbcs',
        chars:
          'ﺈ×÷ﹱ■│─┐┌└┘ﹹﹻﹽﹿﹷﺊﻰﻳﻲﻎﻏﻐﻶﻸﻺﻼ ¤ﺋﺑﺗﺛﺟﺣ،­ﺧﺳ٠١٢٣٤٥٦٧٨٩ﺷ؛ﺻﺿﻊ؟ﻋءآأؤإئابةتثجحخدذرزسشصضطﻇعغﻌﺂﺄﺎﻓـفقكلمنهوىيًٌٍَُِّْﻗﻛﻟﻵﻷﻹﻻﻣﻧﻬﻩ�'
      },
      ibm1046: 'cp1046',
      csibm1046: 'cp1046',
      cp1124: {
        type: '_sbcs',
        chars:
          ' ЁЂҐЄЅІЇЈЉЊЋЌ­ЎЏАБВГДЕЖЗИЙКЛМНОПРСТУФХЦЧШЩЪЫЬЭЮЯабвгдежзийклмнопрстуфхцчшщъыьэюя№ёђґєѕіїјљњћќ§ўџ'
      },
      ibm1124: 'cp1124',
      csibm1124: 'cp1124',
      cp1125: {
        type: '_sbcs',
        chars:
          'АБВГДЕЖЗИЙКЛМНОПРСТУФХЦЧШЩЪЫЬЭЮЯабвгдежзийклмноп░▒▓│┤╡╢╖╕╣║╗╝╜╛┐└┴┬├─┼╞╟╚╔╩╦╠═╬╧╨╤╥╙╘╒╓╫╪┘┌█▄▌▐▀рстуфхцчшщъыьэюяЁёҐґЄєІіЇї·√№¤■ '
      },
      ibm1125: 'cp1125',
      csibm1125: 'cp1125',
      cp1129: {
        type: '_sbcs',
        chars:
          ' ¡¢£¤¥¦§œ©ª«¬­®¯°±²³Ÿµ¶·Œ¹º»¼½¾¿ÀÁÂĂÄÅÆÇÈÉÊË̀ÍÎÏĐÑ̉ÓÔƠÖ×ØÙÚÛÜỮßàáâăäåæçèéêë́íîïđṇ̃óôơö÷øùúûüư₫ÿ'
      },
      ibm1129: 'cp1129',
      csibm1129: 'cp1129',
      cp1133: {
        type: '_sbcs',
        chars:
          ' ກຂຄງຈສຊຍດຕຖທນບປຜຝພຟມຢຣລວຫອຮ���ຯະາຳິີຶືຸູຼັົຽ���ເແໂໃໄ່້໊໋໌ໍໆ�ໜໝ₭����������������໐໑໒໓໔໕໖໗໘໙��¢¬¦�'
      },
      ibm1133: 'cp1133',
      csibm1133: 'cp1133',
      cp1161: {
        type: '_sbcs',
        chars:
          '��������������������������������่กขฃคฅฆงจฉชซฌญฎฏฐฑฒณดตถทธนบปผฝพฟภมยรฤลฦวศษสหฬอฮฯะัาำิีึืฺุู้๊๋€฿เแโใไๅๆ็่้๊๋์ํ๎๏๐๑๒๓๔๕๖๗๘๙๚๛¢¬¦ '
      },
      ibm1161: 'cp1161',
      csibm1161: 'cp1161',
      cp1162: {
        type: '_sbcs',
        chars:
          '€…‘’“”•–— กขฃคฅฆงจฉชซฌญฎฏฐฑฒณดตถทธนบปผฝพฟภมยรฤลฦวศษสหฬอฮฯะัาำิีึืฺุู����฿เแโใไๅๆ็่้๊๋์ํ๎๏๐๑๒๓๔๕๖๗๘๙๚๛����'
      },
      ibm1162: 'cp1162',
      csibm1162: 'cp1162',
      cp1163: {
        type: '_sbcs',
        chars:
          ' ¡¢£€¥¦§œ©ª«¬­®¯°±²³Ÿµ¶·Œ¹º»¼½¾¿ÀÁÂĂÄÅÆÇÈÉÊË̀ÍÎÏĐÑ̉ÓÔƠÖ×ØÙÚÛÜỮßàáâăäåæçèéêë́íîïđṇ̃óôơö÷øùúûüư₫ÿ'
      },
      ibm1163: 'cp1163',
      csibm1163: 'cp1163',
      maccroatian: {
        type: '_sbcs',
        chars:
          'ÄÅÇÉÑÖÜáàâäãåçéèêëíìîïñóòôöõúùûü†°¢£§•¶ß®Š™´¨≠ŽØ∞±≤≥∆µ∂∑∏š∫ªºΩžø¿¡¬√ƒ≈Ć«Č… ÀÃÕŒœĐ—“”‘’÷◊�©⁄¤‹›Æ»–·‚„‰ÂćÁčÈÍÎÏÌÓÔđÒÚÛÙıˆ˜¯πË˚¸Êæˇ'
      },
      maccyrillic: {
        type: '_sbcs',
        chars:
          'АБВГДЕЖЗИЙКЛМНОПРСТУФХЦЧШЩЪЫЬЭЮЯ†°¢£§•¶І®©™Ђђ≠Ѓѓ∞±≤≥іµ∂ЈЄєЇїЉљЊњјЅ¬√ƒ≈∆«»… ЋћЌќѕ–—“”‘’÷„ЎўЏџ№Ёёяабвгдежзийклмнопрстуфхцчшщъыьэю¤'
      },
      macgreek: {
        type: '_sbcs',
        chars:
          'Ä¹²É³ÖÜ΅àâä΄¨çéèêë£™îï•½‰ôö¦­ùûü†ΓΔΘΛΞΠß®©ΣΪ§≠°·Α±≤≥¥ΒΕΖΗΙΚΜΦΫΨΩάΝ¬ΟΡ≈Τ«»… ΥΧΆΈœ–―“”‘’÷ΉΊΌΎέήίόΏύαβψδεφγηιξκλμνοπώρστθωςχυζϊϋΐΰ�'
      },
      maciceland: {
        type: '_sbcs',
        chars:
          'ÄÅÇÉÑÖÜáàâäãåçéèêëíìîïñóòôöõúùûüÝ°¢£§•¶ß®©™´¨≠ÆØ∞±≤≥¥µ∂∑∏π∫ªºΩæø¿¡¬√ƒ≈∆«»… ÀÃÕŒœ–—“”‘’÷◊ÿŸ⁄¤ÐðÞþý·‚„‰ÂÊÁËÈÍÎÏÌÓÔ�ÒÚÛÙıˆ˜¯˘˙˚¸˝˛ˇ'
      },
      macroman: {
        type: '_sbcs',
        chars:
          'ÄÅÇÉÑÖÜáàâäãåçéèêëíìîïñóòôöõúùûü†°¢£§•¶ß®©™´¨≠ÆØ∞±≤≥¥µ∂∑∏π∫ªºΩæø¿¡¬√ƒ≈∆«»… ÀÃÕŒœ–—“”‘’÷◊ÿŸ⁄¤‹›ﬁﬂ‡·‚„‰ÂÊÁËÈÍÎÏÌÓÔ�ÒÚÛÙıˆ˜¯˘˙˚¸˝˛ˇ'
      },
      macromania: {
        type: '_sbcs',
        chars:
          'ÄÅÇÉÑÖÜáàâäãåçéèêëíìîïñóòôöõúùûü†°¢£§•¶ß®©™´¨≠ĂŞ∞±≤≥¥µ∂∑∏π∫ªºΩăş¿¡¬√ƒ≈∆«»… ÀÃÕŒœ–—“”‘’÷◊ÿŸ⁄¤‹›Ţţ‡·‚„‰ÂÊÁËÈÍÎÏÌÓÔ�ÒÚÛÙıˆ˜¯˘˙˚¸˝˛ˇ'
      },
      macthai: {
        type: '_sbcs',
        chars:
          '«»…“”�•‘’� กขฃคฅฆงจฉชซฌญฎฏฐฑฒณดตถทธนบปผฝพฟภมยรฤลฦวศษสหฬอฮฯะัาำิีึืฺุู\ufeff​–—฿เแโใไๅๆ็่้๊๋์ํ™๏๐๑๒๓๔๕๖๗๘๙®©����'
      },
      macturkish: {
        type: '_sbcs',
        chars:
          'ÄÅÇÉÑÖÜáàâäãåçéèêëíìîïñóòôöõúùûü†°¢£§•¶ß®©™´¨≠ÆØ∞±≤≥¥µ∂∑∏π∫ªºΩæø¿¡¬√ƒ≈∆«»… ÀÃÕŒœ–—“”‘’÷◊ÿŸĞğİıŞş‡·‚„‰ÂÊÁËÈÍÎÏÌÓÔ�ÒÚÛÙ�ˆ˜¯˘˙˚¸˝˛ˇ'
      },
      macukraine: {
        type: '_sbcs',
        chars:
          'АБВГДЕЖЗИЙКЛМНОПРСТУФХЦЧШЩЪЫЬЭЮЯ†°Ґ£§•¶І®©™Ђђ≠Ѓѓ∞±≤≥іµґЈЄєЇїЉљЊњјЅ¬√ƒ≈∆«»… ЋћЌќѕ–—“”‘’÷„ЎўЏџ№Ёёяабвгдежзийклмнопрстуфхцчшщъыьэю¤'
      },
      koi8r: {
        type: '_sbcs',
        chars:
          '─│┌┐└┘├┤┬┴┼▀▄█▌▐░▒▓⌠■∙√≈≤≥ ⌡°²·÷═║╒ё╓╔╕╖╗╘╙╚╛╜╝╞╟╠╡Ё╢╣╤╥╦╧╨╩╪╫╬©юабцдефгхийклмнопярстужвьызшэщчъЮАБЦДЕФГХИЙКЛМНОПЯРСТУЖВЬЫЗШЭЩЧЪ'
      },
      koi8u: {
        type: '_sbcs',
        chars:
          '─│┌┐└┘├┤┬┴┼▀▄█▌▐░▒▓⌠■∙√≈≤≥ ⌡°²·÷═║╒ёє╔ії╗╘╙╚╛ґ╝╞╟╠╡ЁЄ╣ІЇ╦╧╨╩╪Ґ╬©юабцдефгхийклмнопярстужвьызшэщчъЮАБЦДЕФГХИЙКЛМНОПЯРСТУЖВЬЫЗШЭЩЧЪ'
      },
      koi8ru: {
        type: '_sbcs',
        chars:
          '─│┌┐└┘├┤┬┴┼▀▄█▌▐░▒▓⌠■∙√≈≤≥ ⌡°²·÷═║╒ёє╔ії╗╘╙╚╛ґў╞╟╠╡ЁЄ╣ІЇ╦╧╨╩╪ҐЎ©юабцдефгхийклмнопярстужвьызшэщчъЮАБЦДЕФГХИЙКЛМНОПЯРСТУЖВЬЫЗШЭЩЧЪ'
      },
      koi8t: {
        type: '_sbcs',
        chars:
          'қғ‚Ғ„…†‡�‰ҳ‹ҲҷҶ�Қ‘’“”•–—�™�›�����ӯӮё¤ӣ¦§���«¬­®�°±²Ё�Ӣ¶·�№�»���©юабцдефгхийклмнопярстужвьызшэщчъЮАБЦДЕФГХИЙКЛМНОПЯРСТУЖВЬЫЗШЭЩЧЪ'
      },
      armscii8: {
        type: '_sbcs',
        chars:
          ' �և։)(»«—.՝,-֊…՜՛՞ԱաԲբԳգԴդԵեԶզԷէԸըԹթԺժԻիԼլԽխԾծԿկՀհՁձՂղՃճՄմՅյՆնՇշՈոՉչՊպՋջՌռՍսՎվՏտՐրՑցՒւՓփՔքՕօՖֆ՚�'
      },
      rk1048: {
        type: '_sbcs',
        chars:
          'ЂЃ‚ѓ„…†‡€‰Љ‹ЊҚҺЏђ‘’“”•–—�™љ›њқһџ ҰұӘ¤Ө¦§Ё©Ғ«¬­®Ү°±Ііөµ¶·ё№ғ»әҢңүАБВГДЕЖЗИЙКЛМНОПРСТУФХЦЧШЩЪЫЬЭЮЯабвгдежзийклмнопрстуфхцчшщъыьэюя'
      },
      tcvn: {
        type: '_sbcs',
        chars:
          '\0ÚỤỪỬỮ\b\t\n\v\f\rỨỰỲỶỸÝỴ !"#$%&\'()*+,-./0123456789:;<=>?@ABCDEFGHIJKLMNOPQRSTUVWXYZ[\\]^_`abcdefghijklmnopqrstuvwxyz{|}~ÀẢÃÁẠẶẬÈẺẼÉẸỆÌỈĨÍỊÒỎÕÓỌỘỜỞỠỚỢÙỦŨ ĂÂÊÔƠƯĐăâêôơưđẶ̀̀̉̃́àảãáạẲằẳẵắẴẮẦẨẪẤỀặầẩẫấậèỂẻẽéẹềểễếệìỉỄẾỒĩíịòỔỏõóọồổỗốộờởỡớợùỖủũúụừửữứựỳỷỹýỵỐ'
      },
      georgianacademy: {
        type: '_sbcs',
        chars:
          '‚ƒ„…†‡ˆ‰Š‹Œ‘’“”•–—˜™š›œŸ ¡¢£¤¥¦§¨©ª«¬­®¯°±²³´µ¶·¸¹º»¼½¾¿აბგდევზთიკლმნოპჟრსტუფქღყშჩცძწჭხჯჰჱჲჳჴჵჶçèéêëìíîïðñòóôõö÷øùúûüýþÿ'
      },
      georgianps: {
        type: '_sbcs',
        chars:
          '‚ƒ„…†‡ˆ‰Š‹Œ‘’“”•–—˜™š›œŸ ¡¢£¤¥¦§¨©ª«¬­®¯°±²³´µ¶·¸¹º»¼½¾¿აბგდევზჱთიკლმნჲოპჟრსტჳუფქღყშჩცძწჭხჴჯჰჵæçèéêëìíîïðñòóôõö÷øùúûüýþÿ'
      },
      pt154: {
        type: '_sbcs',
        chars:
          'ҖҒӮғ„…ҶҮҲүҠӢҢҚҺҸҗ‘’“”•–—ҳҷҡӣңқһҹ ЎўЈӨҘҰ§Ё©Ә«¬ӯ®Ҝ°ұІіҙө¶·ё№ә»јҪҫҝАБВГДЕЖЗИЙКЛМНОПРСТУФХЦЧШЩЪЫЬЭЮЯабвгдежзийклмнопрстуфхцчшщъыьэюя'
      },
      viscii: {
        type: '_sbcs',
        chars:
          '\0ẲẴẪ\b\t\n\v\f\rỶỸỴ !"#$%&\'()*+,-./0123456789:;<=>?@ABCDEFGHIJKLMNOPQRSTUVWXYZ[\\]^_`abcdefghijklmnopqrstuvwxyz{|}~ẠẮẰẶẤẦẨẬẼẸẾỀỂỄỆỐỒỔỖỘỢỚỜỞỊỎỌỈỦŨỤỲÕắằặấầẩậẽẹếềểễệốồổỗỠƠộờởịỰỨỪỬơớƯÀÁÂÃẢĂẳẵÈÉÊẺÌÍĨỳĐứÒÓÔạỷừửÙÚỹỵÝỡưàáâãảăữẫèéêẻìíĩỉđựòóôõỏọụùúũủýợỮ'
      },
      iso646cn: {
        type: '_sbcs',
        chars:
          '\0\b\t\n\v\f\r !"#¥%&\'()*+,-./0123456789:;<=>?@ABCDEFGHIJKLMNOPQRSTUVWXYZ[\\]^_`abcdefghijklmnopqrstuvwxyz{|}‾��������������������������������������������������������������������������������������������������������������������������������'
      },
      iso646jp: {
        type: '_sbcs',
        chars:
          '\0\b\t\n\v\f\r !"#$%&\'()*+,-./0123456789:;<=>?@ABCDEFGHIJKLMNOPQRSTUVWXYZ[¥]^_`abcdefghijklmnopqrstuvwxyz{|}‾��������������������������������������������������������������������������������������������������������������������������������'
      },
      hproman8: {
        type: '_sbcs',
        chars:
          ' ÀÂÈÊËÎÏ´ˋˆ¨˜ÙÛ₤¯Ýý°ÇçÑñ¡¿¤£¥§ƒ¢âêôûáéóúàèòùäëöüÅîØÆåíøæÄìÖÜÉïßÔÁÃãÐðÍÌÓÒÕõŠšÚŸÿÞþ·µ¶¾—¼½ªº«■»±�'
      },
      macintosh: {
        type: '_sbcs',
        chars:
          'ÄÅÇÉÑÖÜáàâäãåçéèêëíìîïñóòôöõúùûü†°¢£§•¶ß®©™´¨≠ÆØ∞±≤≥¥µ∂∑∏π∫ªºΩæø¿¡¬√ƒ≈∆«»… ÀÃÕŒœ–—“”‘’÷◊ÿŸ⁄¤‹›ﬁﬂ‡·‚„‰ÂÊÁËÈÍÎÏÌÓÔ�ÒÚÛÙıˆ˜¯˘˙˚¸˝˛ˇ'
      },
      ascii: {
        type: '_sbcs',
        chars:
          '��������������������������������������������������������������������������������������������������������������������������������'
      },
      tis620: {
        type: '_sbcs',
        chars:
          '���������������������������������กขฃคฅฆงจฉชซฌญฎฏฐฑฒณดตถทธนบปผฝพฟภมยรฤลฦวศษสหฬอฮฯะัาำิีึืฺุู����฿เแโใไๅๆ็่้๊๋์ํ๎๏๐๑๒๓๔๕๖๗๘๙๚๛����'
      }
    },
    Ac = Bu.Buffer,
    jc = Nc,
    Bc = -1,
    Ic = -2,
    Tc = -1e3,
    Mc = new Array(256),
    Pc = 0;
  Pc < 256;
  Pc++
)
  Mc[Pc] = Bc;
function Nc(t, e) {
  if (((this.encodingName = t.encodingName), !t))
    throw new Error('DBCS codec is called without the data.');
  if (!t.table)
    throw new Error("Encoding '" + this.encodingName + "' has no data.");
  var n = t.table();
  (this.decodeTables = []),
    (this.decodeTables[0] = Mc.slice(0)),
    (this.decodeTableSeq = []);
  for (var r = 0; r < n.length; r++) this._addDecodeChunk(n[r]);
  (this.defaultCharUnicode = e.defaultCharUnicode),
    (this.encodeTable = []),
    (this.encodeTableSeq = []);
  var i = {};
  if (t.encodeSkipVals)
    for (r = 0; r < t.encodeSkipVals.length; r++) {
      var o = t.encodeSkipVals[r];
      if ('number' == typeof o) i[o] = !0;
      else for (var s = o.from; s <= o.to; s++) i[s] = !0;
    }
  if ((this._fillEncodeTable(0, 0, i), t.encodeAdd))
    for (var u in t.encodeAdd)
      Object.prototype.hasOwnProperty.call(t.encodeAdd, u) &&
        this._setEncodeChar(u.charCodeAt(0), t.encodeAdd[u]);
  if (
    ((this.defCharSB = this.encodeTable[0][
      e.defaultCharSingleByte.charCodeAt(0)
    ]),
    this.defCharSB === Bc && (this.defCharSB = this.encodeTable[0]['?']),
    this.defCharSB === Bc && (this.defCharSB = '?'.charCodeAt(0)),
    'function' == typeof t.gb18030)
  ) {
    this.gb18030 = t.gb18030();
    var c = this.decodeTables.length,
      a = (this.decodeTables[c] = Mc.slice(0)),
      l = this.decodeTables.length,
      h = (this.decodeTables[l] = Mc.slice(0));
    for (r = 129; r <= 254; r++) {
      var f = Tc - this.decodeTables[0][r],
        p = this.decodeTables[f];
      for (s = 48; s <= 57; s++) p[s] = Tc - c;
    }
    for (r = 129; r <= 254; r++) a[r] = Tc - l;
    for (r = 48; r <= 57; r++) h[r] = Ic;
  }
}
function Rc(t, e) {
  (this.leadSurrogate = -1),
    (this.seqObj = void 0),
    (this.encodeTable = e.encodeTable),
    (this.encodeTableSeq = e.encodeTableSeq),
    (this.defaultCharSingleByte = e.defCharSB),
    (this.gb18030 = e.gb18030);
}
function Lc(t, e) {
  (this.nodeIdx = 0),
    (this.prevBuf = Ac.alloc(0)),
    (this.decodeTables = e.decodeTables),
    (this.decodeTableSeq = e.decodeTableSeq),
    (this.defaultCharUnicode = e.defaultCharUnicode),
    (this.gb18030 = e.gb18030);
}
function Vc(t, e) {
  if (t[0] > e) return -1;
  for (var n = 0, r = t.length; n < r - 1; ) {
    var i = n + Math.floor((r - n + 1) / 2);
    t[i] <= e ? (n = i) : (r = i);
  }
  return n;
}
(Nc.prototype.encoder = Rc),
  (Nc.prototype.decoder = Lc),
  (Nc.prototype._getDecodeTrieNode = function(t) {
    for (var e = []; t > 0; t >>= 8) e.push(255 & t);
    0 == e.length && e.push(0);
    for (var n = this.decodeTables[0], r = e.length - 1; r > 0; r--) {
      var i = n[e[r]];
      if (i == Bc)
        (n[e[r]] = Tc - this.decodeTables.length),
          this.decodeTables.push((n = Mc.slice(0)));
      else {
        if (!(i <= Tc))
          throw new Error(
            'Overwrite byte in ' +
              this.encodingName +
              ', addr: ' +
              t.toString(16)
          );
        n = this.decodeTables[Tc - i];
      }
    }
    return n;
  }),
  (Nc.prototype._addDecodeChunk = function(t) {
    var e = parseInt(t[0], 16),
      n = this._getDecodeTrieNode(e);
    e &= 255;
    for (var r = 1; r < t.length; r++) {
      var i = t[r];
      if ('string' == typeof i)
        for (var o = 0; o < i.length; ) {
          var s = i.charCodeAt(o++);
          if (55296 <= s && s < 56320) {
            var u = i.charCodeAt(o++);
            if (!(56320 <= u && u < 57344))
              throw new Error(
                'Incorrect surrogate pair in ' +
                  this.encodingName +
                  ' at chunk ' +
                  t[0]
              );
            n[e++] = 65536 + 1024 * (s - 55296) + (u - 56320);
          } else if (4080 < s && s <= 4095) {
            for (var c = 4095 - s + 2, a = [], l = 0; l < c; l++)
              a.push(i.charCodeAt(o++));
            (n[e++] = -10 - this.decodeTableSeq.length),
              this.decodeTableSeq.push(a);
          } else n[e++] = s;
        }
      else {
        if ('number' != typeof i)
          throw new Error(
            "Incorrect type '" +
              typeof i +
              "' given in " +
              this.encodingName +
              ' at chunk ' +
              t[0]
          );
        var h = n[e - 1] + 1;
        for (o = 0; o < i; o++) n[e++] = h++;
      }
    }
    if (e > 255)
      throw new Error(
        'Incorrect chunk in ' +
          this.encodingName +
          ' at addr ' +
          t[0] +
          ': too long' +
          e
      );
  }),
  (Nc.prototype._getEncodeBucket = function(t) {
    var e = t >> 8;
    return (
      void 0 === this.encodeTable[e] && (this.encodeTable[e] = Mc.slice(0)),
      this.encodeTable[e]
    );
  }),
  (Nc.prototype._setEncodeChar = function(t, e) {
    var n = this._getEncodeBucket(t),
      r = 255 & t;
    n[r] <= -10
      ? (this.encodeTableSeq[-10 - n[r]][-1] = e)
      : n[r] == Bc && (n[r] = e);
  }),
  (Nc.prototype._setEncodeSequence = function(t, e) {
    var n,
      r = t[0],
      i = this._getEncodeBucket(r),
      o = 255 & r;
    i[o] <= -10
      ? (n = this.encodeTableSeq[-10 - i[o]])
      : ((n = {}),
        i[o] !== Bc && (n[-1] = i[o]),
        (i[o] = -10 - this.encodeTableSeq.length),
        this.encodeTableSeq.push(n));
    for (var s = 1; s < t.length - 1; s++) {
      var u = n[r];
      'object' == typeof u
        ? (n = u)
        : ((n = n[r] = {}), void 0 !== u && (n[-1] = u));
    }
    n[(r = t[t.length - 1])] = e;
  }),
  (Nc.prototype._fillEncodeTable = function(t, e, n) {
    for (var r = this.decodeTables[t], i = 0; i < 256; i++) {
      var o = r[i],
        s = e + i;
      n[s] ||
        (o >= 0
          ? this._setEncodeChar(o, s)
          : o <= Tc
          ? this._fillEncodeTable(Tc - o, s << 8, n)
          : o <= -10 &&
            this._setEncodeSequence(this.decodeTableSeq[-10 - o], s));
    }
  }),
  (Rc.prototype.write = function(t) {
    for (
      var e = Ac.alloc(t.length * (this.gb18030 ? 4 : 3)),
        n = this.leadSurrogate,
        r = this.seqObj,
        i = -1,
        o = 0,
        s = 0;
      ;

    ) {
      if (-1 === i) {
        if (o == t.length) break;
        var u = t.charCodeAt(o++);
      } else {
        u = i;
        i = -1;
      }
      if (55296 <= u && u < 57344)
        if (u < 56320) {
          if (-1 === n) {
            n = u;
            continue;
          }
          (n = u), (u = Bc);
        } else
          -1 !== n
            ? ((u = 65536 + 1024 * (n - 55296) + (u - 56320)), (n = -1))
            : (u = Bc);
      else -1 !== n && ((i = u), (u = Bc), (n = -1));
      var c = Bc;
      if (void 0 !== r && u != Bc) {
        var a = r[u];
        if ('object' == typeof a) {
          r = a;
          continue;
        }
        'number' == typeof a
          ? (c = a)
          : null == a && void 0 !== (a = r[-1]) && ((c = a), (i = u)),
          (r = void 0);
      } else if (u >= 0) {
        var l = this.encodeTable[u >> 8];
        if ((void 0 !== l && (c = l[255 & u]), c <= -10)) {
          r = this.encodeTableSeq[-10 - c];
          continue;
        }
        if (c == Bc && this.gb18030) {
          var h = Vc(this.gb18030.uChars, u);
          if (-1 != h) {
            c = this.gb18030.gbChars[h] + (u - this.gb18030.uChars[h]);
            (e[s++] = 129 + Math.floor(c / 12600)),
              (c %= 12600),
              (e[s++] = 48 + Math.floor(c / 1260)),
              (c %= 1260),
              (e[s++] = 129 + Math.floor(c / 10)),
              (c %= 10),
              (e[s++] = 48 + c);
            continue;
          }
        }
      }
      c === Bc && (c = this.defaultCharSingleByte),
        c < 256
          ? (e[s++] = c)
          : c < 65536
          ? ((e[s++] = c >> 8), (e[s++] = 255 & c))
          : ((e[s++] = c >> 16), (e[s++] = (c >> 8) & 255), (e[s++] = 255 & c));
    }
    return (this.seqObj = r), (this.leadSurrogate = n), e.slice(0, s);
  }),
  (Rc.prototype.end = function() {
    if (-1 !== this.leadSurrogate || void 0 !== this.seqObj) {
      var t = Ac.alloc(10),
        e = 0;
      if (this.seqObj) {
        var n = this.seqObj[-1];
        void 0 !== n &&
          (n < 256 ? (t[e++] = n) : ((t[e++] = n >> 8), (t[e++] = 255 & n))),
          (this.seqObj = void 0);
      }
      return (
        -1 !== this.leadSurrogate &&
          ((t[e++] = this.defaultCharSingleByte), (this.leadSurrogate = -1)),
        t.slice(0, e)
      );
    }
  }),
  (Rc.prototype.findIdx = Vc),
  (Lc.prototype.write = function(t) {
    var e = Ac.alloc(2 * t.length),
      n = this.nodeIdx,
      r = this.prevBuf,
      i = this.prevBuf.length,
      o = -this.prevBuf.length;
    i > 0 && (r = Ac.concat([r, t.slice(0, 10)]));
    for (var s = 0, u = 0; s < t.length; s++) {
      var c,
        a = s >= 0 ? t[s] : r[s + i];
      if ((c = this.decodeTables[n][a]) >= 0);
      else if (c === Bc) (s = o), (c = this.defaultCharUnicode.charCodeAt(0));
      else if (c === Ic) {
        var l = o >= 0 ? t.slice(o, s + 1) : r.slice(o + i, s + 1 + i),
          h =
            12600 * (l[0] - 129) +
            1260 * (l[1] - 48) +
            10 * (l[2] - 129) +
            (l[3] - 48),
          f = Vc(this.gb18030.gbChars, h);
        c = this.gb18030.uChars[f] + h - this.gb18030.gbChars[f];
      } else {
        if (c <= Tc) {
          n = Tc - c;
          continue;
        }
        if (!(c <= -10))
          throw new Error(
            'iconv-lite internal error: invalid decoding table value ' +
              c +
              ' at ' +
              n +
              '/' +
              a
          );
        for (var p = this.decodeTableSeq[-10 - c], d = 0; d < p.length - 1; d++)
          (c = p[d]), (e[u++] = 255 & c), (e[u++] = c >> 8);
        c = p[p.length - 1];
      }
      if (c > 65535) {
        c -= 65536;
        var b = 55296 + Math.floor(c / 1024);
        (e[u++] = 255 & b), (e[u++] = b >> 8), (c = 56320 + (c % 1024));
      }
      (e[u++] = 255 & c), (e[u++] = c >> 8), (n = 0), (o = s + 1);
    }
    return (
      (this.nodeIdx = n),
      (this.prevBuf = o >= 0 ? t.slice(o) : r.slice(o + i)),
      e.slice(0, u).toString('ucs2')
    );
  }),
  (Lc.prototype.end = function() {
    for (var t = ''; this.prevBuf.length > 0; ) {
      t += this.defaultCharUnicode;
      var e = this.prevBuf.slice(1);
      (this.prevBuf = Ac.alloc(0)),
        (this.nodeIdx = 0),
        e.length > 0 && (t += this.write(e));
    }
    return (this.nodeIdx = 0), t;
  });
var Uc = { _dbcs: jc },
  zc = Object.freeze({
    __proto__: null,
    default: [
      ['0', '\0', 128],
      ['a1', '｡', 62],
      [
        '8140',
        '　、。，．・：；？！゛゜´｀¨＾￣＿ヽヾゝゞ〃仝々〆〇ー―‐／＼～∥｜…‥‘’“”（）〔〕［］｛｝〈',
        9,
        '＋－±×'
      ],
      ['8180', '÷＝≠＜＞≦≧∞∴♂♀°′″℃￥＄￠￡％＃＆＊＠§☆★○●◎◇◆□■△▲▽▼※〒→←↑↓〓'],
      ['81b8', '∈∋⊆⊇⊂⊃∪∩'],
      ['81c8', '∧∨￢⇒⇔∀∃'],
      ['81da', '∠⊥⌒∂∇≡≒≪≫√∽∝∵∫∬'],
      ['81f0', 'Å‰♯♭♪†‡¶'],
      ['81fc', '◯'],
      ['824f', '０', 9],
      ['8260', 'Ａ', 25],
      ['8281', 'ａ', 25],
      ['829f', 'ぁ', 82],
      ['8340', 'ァ', 62],
      ['8380', 'ム', 22],
      ['839f', 'Α', 16, 'Σ', 6],
      ['83bf', 'α', 16, 'σ', 6],
      ['8440', 'А', 5, 'ЁЖ', 25],
      ['8470', 'а', 5, 'ёж', 7],
      ['8480', 'о', 17],
      ['849f', '─│┌┐┘└├┬┤┴┼━┃┏┓┛┗┣┳┫┻╋┠┯┨┷┿┝┰┥┸╂'],
      ['8740', '①', 19, 'Ⅰ', 9],
      ['875f', '㍉㌔㌢㍍㌘㌧㌃㌶㍑㍗㌍㌦㌣㌫㍊㌻㎜㎝㎞㎎㎏㏄㎡'],
      ['877e', '㍻'],
      ['8780', '〝〟№㏍℡㊤', 4, '㈱㈲㈹㍾㍽㍼≒≡∫∮∑√⊥∠∟⊿∵∩∪'],
      [
        '889f',
        '亜唖娃阿哀愛挨姶逢葵茜穐悪握渥旭葦芦鯵梓圧斡扱宛姐虻飴絢綾鮎或粟袷安庵按暗案闇鞍杏以伊位依偉囲夷委威尉惟意慰易椅為畏異移維緯胃萎衣謂違遺医井亥域育郁磯一壱溢逸稲茨芋鰯允印咽員因姻引飲淫胤蔭'
      ],
      [
        '8940',
        '院陰隠韻吋右宇烏羽迂雨卯鵜窺丑碓臼渦嘘唄欝蔚鰻姥厩浦瓜閏噂云運雲荏餌叡営嬰影映曳栄永泳洩瑛盈穎頴英衛詠鋭液疫益駅悦謁越閲榎厭円'
      ],
      [
        '8980',
        '園堰奄宴延怨掩援沿演炎焔煙燕猿縁艶苑薗遠鉛鴛塩於汚甥凹央奥往応押旺横欧殴王翁襖鴬鴎黄岡沖荻億屋憶臆桶牡乙俺卸恩温穏音下化仮何伽価佳加可嘉夏嫁家寡科暇果架歌河火珂禍禾稼箇花苛茄荷華菓蝦課嘩貨迦過霞蚊俄峨我牙画臥芽蛾賀雅餓駕介会解回塊壊廻快怪悔恢懐戒拐改'
      ],
      [
        '8a40',
        '魁晦械海灰界皆絵芥蟹開階貝凱劾外咳害崖慨概涯碍蓋街該鎧骸浬馨蛙垣柿蛎鈎劃嚇各廓拡撹格核殻獲確穫覚角赫較郭閣隔革学岳楽額顎掛笠樫'
      ],
      [
        '8a80',
        '橿梶鰍潟割喝恰括活渇滑葛褐轄且鰹叶椛樺鞄株兜竃蒲釜鎌噛鴨栢茅萱粥刈苅瓦乾侃冠寒刊勘勧巻喚堪姦完官寛干幹患感慣憾換敢柑桓棺款歓汗漢澗潅環甘監看竿管簡緩缶翰肝艦莞観諌貫還鑑間閑関陥韓館舘丸含岸巌玩癌眼岩翫贋雁頑顔願企伎危喜器基奇嬉寄岐希幾忌揮机旗既期棋棄'
      ],
      [
        '8b40',
        '機帰毅気汽畿祈季稀紀徽規記貴起軌輝飢騎鬼亀偽儀妓宜戯技擬欺犠疑祇義蟻誼議掬菊鞠吉吃喫桔橘詰砧杵黍却客脚虐逆丘久仇休及吸宮弓急救'
      ],
      [
        '8b80',
        '朽求汲泣灸球究窮笈級糾給旧牛去居巨拒拠挙渠虚許距鋸漁禦魚亨享京供侠僑兇競共凶協匡卿叫喬境峡強彊怯恐恭挟教橋況狂狭矯胸脅興蕎郷鏡響饗驚仰凝尭暁業局曲極玉桐粁僅勤均巾錦斤欣欽琴禁禽筋緊芹菌衿襟謹近金吟銀九倶句区狗玖矩苦躯駆駈駒具愚虞喰空偶寓遇隅串櫛釧屑屈'
      ],
      [
        '8c40',
        '掘窟沓靴轡窪熊隈粂栗繰桑鍬勲君薫訓群軍郡卦袈祁係傾刑兄啓圭珪型契形径恵慶慧憩掲携敬景桂渓畦稽系経継繋罫茎荊蛍計詣警軽頚鶏芸迎鯨'
      ],
      [
        '8c80',
        '劇戟撃激隙桁傑欠決潔穴結血訣月件倹倦健兼券剣喧圏堅嫌建憲懸拳捲検権牽犬献研硯絹県肩見謙賢軒遣鍵険顕験鹸元原厳幻弦減源玄現絃舷言諺限乎個古呼固姑孤己庫弧戸故枯湖狐糊袴股胡菰虎誇跨鈷雇顧鼓五互伍午呉吾娯後御悟梧檎瑚碁語誤護醐乞鯉交佼侯候倖光公功効勾厚口向'
      ],
      [
        '8d40',
        '后喉坑垢好孔孝宏工巧巷幸広庚康弘恒慌抗拘控攻昂晃更杭校梗構江洪浩港溝甲皇硬稿糠紅紘絞綱耕考肯肱腔膏航荒行衡講貢購郊酵鉱砿鋼閤降'
      ],
      [
        '8d80',
        '項香高鴻剛劫号合壕拷濠豪轟麹克刻告国穀酷鵠黒獄漉腰甑忽惚骨狛込此頃今困坤墾婚恨懇昏昆根梱混痕紺艮魂些佐叉唆嵯左差査沙瑳砂詐鎖裟坐座挫債催再最哉塞妻宰彩才採栽歳済災采犀砕砦祭斎細菜裁載際剤在材罪財冴坂阪堺榊肴咲崎埼碕鷺作削咋搾昨朔柵窄策索錯桜鮭笹匙冊刷'
      ],
      [
        '8e40',
        '察拶撮擦札殺薩雑皐鯖捌錆鮫皿晒三傘参山惨撒散桟燦珊産算纂蚕讃賛酸餐斬暫残仕仔伺使刺司史嗣四士始姉姿子屍市師志思指支孜斯施旨枝止'
      ],
      [
        '8e80',
        '死氏獅祉私糸紙紫肢脂至視詞詩試誌諮資賜雌飼歯事似侍児字寺慈持時次滋治爾璽痔磁示而耳自蒔辞汐鹿式識鴫竺軸宍雫七叱執失嫉室悉湿漆疾質実蔀篠偲柴芝屡蕊縞舎写射捨赦斜煮社紗者謝車遮蛇邪借勺尺杓灼爵酌釈錫若寂弱惹主取守手朱殊狩珠種腫趣酒首儒受呪寿授樹綬需囚収周'
      ],
      [
        '8f40',
        '宗就州修愁拾洲秀秋終繍習臭舟蒐衆襲讐蹴輯週酋酬集醜什住充十従戎柔汁渋獣縦重銃叔夙宿淑祝縮粛塾熟出術述俊峻春瞬竣舜駿准循旬楯殉淳'
      ],
      [
        '8f80',
        '準潤盾純巡遵醇順処初所暑曙渚庶緒署書薯藷諸助叙女序徐恕鋤除傷償勝匠升召哨商唱嘗奨妾娼宵将小少尚庄床廠彰承抄招掌捷昇昌昭晶松梢樟樵沼消渉湘焼焦照症省硝礁祥称章笑粧紹肖菖蒋蕉衝裳訟証詔詳象賞醤鉦鍾鐘障鞘上丈丞乗冗剰城場壌嬢常情擾条杖浄状畳穣蒸譲醸錠嘱埴飾'
      ],
      [
        '9040',
        '拭植殖燭織職色触食蝕辱尻伸信侵唇娠寝審心慎振新晋森榛浸深申疹真神秦紳臣芯薪親診身辛進針震人仁刃塵壬尋甚尽腎訊迅陣靭笥諏須酢図厨'
      ],
      [
        '9080',
        '逗吹垂帥推水炊睡粋翠衰遂酔錐錘随瑞髄崇嵩数枢趨雛据杉椙菅頗雀裾澄摺寸世瀬畝是凄制勢姓征性成政整星晴棲栖正清牲生盛精聖声製西誠誓請逝醒青静斉税脆隻席惜戚斥昔析石積籍績脊責赤跡蹟碩切拙接摂折設窃節説雪絶舌蝉仙先千占宣専尖川戦扇撰栓栴泉浅洗染潜煎煽旋穿箭線'
      ],
      [
        '9140',
        '繊羨腺舛船薦詮賎践選遷銭銑閃鮮前善漸然全禅繕膳糎噌塑岨措曾曽楚狙疏疎礎祖租粗素組蘇訴阻遡鼠僧創双叢倉喪壮奏爽宋層匝惣想捜掃挿掻'
      ],
      [
        '9180',
        '操早曹巣槍槽漕燥争痩相窓糟総綜聡草荘葬蒼藻装走送遭鎗霜騒像増憎臓蔵贈造促側則即息捉束測足速俗属賊族続卒袖其揃存孫尊損村遜他多太汰詑唾堕妥惰打柁舵楕陀駄騨体堆対耐岱帯待怠態戴替泰滞胎腿苔袋貸退逮隊黛鯛代台大第醍題鷹滝瀧卓啄宅托択拓沢濯琢託鐸濁諾茸凧蛸只'
      ],
      [
        '9240',
        '叩但達辰奪脱巽竪辿棚谷狸鱈樽誰丹単嘆坦担探旦歎淡湛炭短端箪綻耽胆蛋誕鍛団壇弾断暖檀段男談値知地弛恥智池痴稚置致蜘遅馳築畜竹筑蓄'
      ],
      [
        '9280',
        '逐秩窒茶嫡着中仲宙忠抽昼柱注虫衷註酎鋳駐樗瀦猪苧著貯丁兆凋喋寵帖帳庁弔張彫徴懲挑暢朝潮牒町眺聴脹腸蝶調諜超跳銚長頂鳥勅捗直朕沈珍賃鎮陳津墜椎槌追鎚痛通塚栂掴槻佃漬柘辻蔦綴鍔椿潰坪壷嬬紬爪吊釣鶴亭低停偵剃貞呈堤定帝底庭廷弟悌抵挺提梯汀碇禎程締艇訂諦蹄逓'
      ],
      [
        '9340',
        '邸鄭釘鼎泥摘擢敵滴的笛適鏑溺哲徹撤轍迭鉄典填天展店添纏甜貼転顛点伝殿澱田電兎吐堵塗妬屠徒斗杜渡登菟賭途都鍍砥砺努度土奴怒倒党冬'
      ],
      [
        '9380',
        '凍刀唐塔塘套宕島嶋悼投搭東桃梼棟盗淘湯涛灯燈当痘祷等答筒糖統到董蕩藤討謄豆踏逃透鐙陶頭騰闘働動同堂導憧撞洞瞳童胴萄道銅峠鴇匿得徳涜特督禿篤毒独読栃橡凸突椴届鳶苫寅酉瀞噸屯惇敦沌豚遁頓呑曇鈍奈那内乍凪薙謎灘捺鍋楢馴縄畷南楠軟難汝二尼弐迩匂賑肉虹廿日乳入'
      ],
      [
        '9440',
        '如尿韮任妊忍認濡禰祢寧葱猫熱年念捻撚燃粘乃廼之埜嚢悩濃納能脳膿農覗蚤巴把播覇杷波派琶破婆罵芭馬俳廃拝排敗杯盃牌背肺輩配倍培媒梅'
      ],
      [
        '9480',
        '楳煤狽買売賠陪這蝿秤矧萩伯剥博拍柏泊白箔粕舶薄迫曝漠爆縛莫駁麦函箱硲箸肇筈櫨幡肌畑畠八鉢溌発醗髪伐罰抜筏閥鳩噺塙蛤隼伴判半反叛帆搬斑板氾汎版犯班畔繁般藩販範釆煩頒飯挽晩番盤磐蕃蛮匪卑否妃庇彼悲扉批披斐比泌疲皮碑秘緋罷肥被誹費避非飛樋簸備尾微枇毘琵眉美'
      ],
      [
        '9540',
        '鼻柊稗匹疋髭彦膝菱肘弼必畢筆逼桧姫媛紐百謬俵彪標氷漂瓢票表評豹廟描病秒苗錨鋲蒜蛭鰭品彬斌浜瀕貧賓頻敏瓶不付埠夫婦富冨布府怖扶敷'
      ],
      [
        '9580',
        '斧普浮父符腐膚芙譜負賦赴阜附侮撫武舞葡蕪部封楓風葺蕗伏副復幅服福腹複覆淵弗払沸仏物鮒分吻噴墳憤扮焚奮粉糞紛雰文聞丙併兵塀幣平弊柄並蔽閉陛米頁僻壁癖碧別瞥蔑箆偏変片篇編辺返遍便勉娩弁鞭保舗鋪圃捕歩甫補輔穂募墓慕戊暮母簿菩倣俸包呆報奉宝峰峯崩庖抱捧放方朋'
      ],
      [
        '9640',
        '法泡烹砲縫胞芳萌蓬蜂褒訪豊邦鋒飽鳳鵬乏亡傍剖坊妨帽忘忙房暴望某棒冒紡肪膨謀貌貿鉾防吠頬北僕卜墨撲朴牧睦穆釦勃没殆堀幌奔本翻凡盆'
      ],
      [
        '9680',
        '摩磨魔麻埋妹昧枚毎哩槙幕膜枕鮪柾鱒桝亦俣又抹末沫迄侭繭麿万慢満漫蔓味未魅巳箕岬密蜜湊蓑稔脈妙粍民眠務夢無牟矛霧鵡椋婿娘冥名命明盟迷銘鳴姪牝滅免棉綿緬面麺摸模茂妄孟毛猛盲網耗蒙儲木黙目杢勿餅尤戻籾貰問悶紋門匁也冶夜爺耶野弥矢厄役約薬訳躍靖柳薮鑓愉愈油癒'
      ],
      [
        '9740',
        '諭輸唯佑優勇友宥幽悠憂揖有柚湧涌猶猷由祐裕誘遊邑郵雄融夕予余与誉輿預傭幼妖容庸揚揺擁曜楊様洋溶熔用窯羊耀葉蓉要謡踊遥陽養慾抑欲'
      ],
      [
        '9780',
        '沃浴翌翼淀羅螺裸来莱頼雷洛絡落酪乱卵嵐欄濫藍蘭覧利吏履李梨理璃痢裏裡里離陸律率立葎掠略劉流溜琉留硫粒隆竜龍侶慮旅虜了亮僚両凌寮料梁涼猟療瞭稜糧良諒遼量陵領力緑倫厘林淋燐琳臨輪隣鱗麟瑠塁涙累類令伶例冷励嶺怜玲礼苓鈴隷零霊麗齢暦歴列劣烈裂廉恋憐漣煉簾練聯'
      ],
      [
        '9840',
        '蓮連錬呂魯櫓炉賂路露労婁廊弄朗楼榔浪漏牢狼篭老聾蝋郎六麓禄肋録論倭和話歪賄脇惑枠鷲亙亘鰐詫藁蕨椀湾碗腕'
      ],
      [
        '989f',
        '弌丐丕个丱丶丼丿乂乖乘亂亅豫亊舒弍于亞亟亠亢亰亳亶从仍仄仆仂仗仞仭仟价伉佚估佛佝佗佇佶侈侏侘佻佩佰侑佯來侖儘俔俟俎俘俛俑俚俐俤俥倚倨倔倪倥倅伜俶倡倩倬俾俯們倆偃假會偕偐偈做偖偬偸傀傚傅傴傲'
      ],
      [
        '9940',
        '僉僊傳僂僖僞僥僭僣僮價僵儉儁儂儖儕儔儚儡儺儷儼儻儿兀兒兌兔兢竸兩兪兮冀冂囘册冉冏冑冓冕冖冤冦冢冩冪冫决冱冲冰况冽凅凉凛几處凩凭'
      ],
      [
        '9980',
        '凰凵凾刄刋刔刎刧刪刮刳刹剏剄剋剌剞剔剪剴剩剳剿剽劍劔劒剱劈劑辨辧劬劭劼劵勁勍勗勞勣勦飭勠勳勵勸勹匆匈甸匍匐匏匕匚匣匯匱匳匸區卆卅丗卉卍凖卞卩卮夘卻卷厂厖厠厦厥厮厰厶參簒雙叟曼燮叮叨叭叺吁吽呀听吭吼吮吶吩吝呎咏呵咎呟呱呷呰咒呻咀呶咄咐咆哇咢咸咥咬哄哈咨'
      ],
      [
        '9a40',
        '咫哂咤咾咼哘哥哦唏唔哽哮哭哺哢唹啀啣啌售啜啅啖啗唸唳啝喙喀咯喊喟啻啾喘喞單啼喃喩喇喨嗚嗅嗟嗄嗜嗤嗔嘔嗷嘖嗾嗽嘛嗹噎噐營嘴嘶嘲嘸'
      ],
      [
        '9a80',
        '噫噤嘯噬噪嚆嚀嚊嚠嚔嚏嚥嚮嚶嚴囂嚼囁囃囀囈囎囑囓囗囮囹圀囿圄圉圈國圍圓團圖嗇圜圦圷圸坎圻址坏坩埀垈坡坿垉垓垠垳垤垪垰埃埆埔埒埓堊埖埣堋堙堝塲堡塢塋塰毀塒堽塹墅墹墟墫墺壞墻墸墮壅壓壑壗壙壘壥壜壤壟壯壺壹壻壼壽夂夊夐夛梦夥夬夭夲夸夾竒奕奐奎奚奘奢奠奧奬奩'
      ],
      [
        '9b40',
        '奸妁妝佞侫妣妲姆姨姜妍姙姚娥娟娑娜娉娚婀婬婉娵娶婢婪媚媼媾嫋嫂媽嫣嫗嫦嫩嫖嫺嫻嬌嬋嬖嬲嫐嬪嬶嬾孃孅孀孑孕孚孛孥孩孰孳孵學斈孺宀'
      ],
      [
        '9b80',
        '它宦宸寃寇寉寔寐寤實寢寞寥寫寰寶寳尅將專對尓尠尢尨尸尹屁屆屎屓屐屏孱屬屮乢屶屹岌岑岔妛岫岻岶岼岷峅岾峇峙峩峽峺峭嶌峪崋崕崗嵜崟崛崑崔崢崚崙崘嵌嵒嵎嵋嵬嵳嵶嶇嶄嶂嶢嶝嶬嶮嶽嶐嶷嶼巉巍巓巒巖巛巫已巵帋帚帙帑帛帶帷幄幃幀幎幗幔幟幢幤幇幵并幺麼广庠廁廂廈廐廏'
      ],
      [
        '9c40',
        '廖廣廝廚廛廢廡廨廩廬廱廳廰廴廸廾弃弉彝彜弋弑弖弩弭弸彁彈彌彎弯彑彖彗彙彡彭彳彷徃徂彿徊很徑徇從徙徘徠徨徭徼忖忻忤忸忱忝悳忿怡恠'
      ],
      [
        '9c80',
        '怙怐怩怎怱怛怕怫怦怏怺恚恁恪恷恟恊恆恍恣恃恤恂恬恫恙悁悍惧悃悚悄悛悖悗悒悧悋惡悸惠惓悴忰悽惆悵惘慍愕愆惶惷愀惴惺愃愡惻惱愍愎慇愾愨愧慊愿愼愬愴愽慂慄慳慷慘慙慚慫慴慯慥慱慟慝慓慵憙憖憇憬憔憚憊憑憫憮懌懊應懷懈懃懆憺懋罹懍懦懣懶懺懴懿懽懼懾戀戈戉戍戌戔戛'
      ],
      [
        '9d40',
        '戞戡截戮戰戲戳扁扎扞扣扛扠扨扼抂抉找抒抓抖拔抃抔拗拑抻拏拿拆擔拈拜拌拊拂拇抛拉挌拮拱挧挂挈拯拵捐挾捍搜捏掖掎掀掫捶掣掏掉掟掵捫'
      ],
      [
        '9d80',
        '捩掾揩揀揆揣揉插揶揄搖搴搆搓搦搶攝搗搨搏摧摯摶摎攪撕撓撥撩撈撼據擒擅擇撻擘擂擱擧舉擠擡抬擣擯攬擶擴擲擺攀擽攘攜攅攤攣攫攴攵攷收攸畋效敖敕敍敘敞敝敲數斂斃變斛斟斫斷旃旆旁旄旌旒旛旙无旡旱杲昊昃旻杳昵昶昴昜晏晄晉晁晞晝晤晧晨晟晢晰暃暈暎暉暄暘暝曁暹曉暾暼'
      ],
      [
        '9e40',
        '曄暸曖曚曠昿曦曩曰曵曷朏朖朞朦朧霸朮朿朶杁朸朷杆杞杠杙杣杤枉杰枩杼杪枌枋枦枡枅枷柯枴柬枳柩枸柤柞柝柢柮枹柎柆柧檜栞框栩桀桍栲桎'
      ],
      [
        '9e80',
        '梳栫桙档桷桿梟梏梭梔條梛梃檮梹桴梵梠梺椏梍桾椁棊椈棘椢椦棡椌棍棔棧棕椶椒椄棗棣椥棹棠棯椨椪椚椣椡棆楹楷楜楸楫楔楾楮椹楴椽楙椰楡楞楝榁楪榲榮槐榿槁槓榾槎寨槊槝榻槃榧樮榑榠榜榕榴槞槨樂樛槿權槹槲槧樅榱樞槭樔槫樊樒櫁樣樓橄樌橲樶橸橇橢橙橦橈樸樢檐檍檠檄檢檣'
      ],
      [
        '9f40',
        '檗蘗檻櫃櫂檸檳檬櫞櫑櫟檪櫚櫪櫻欅蘖櫺欒欖鬱欟欸欷盜欹飮歇歃歉歐歙歔歛歟歡歸歹歿殀殄殃殍殘殕殞殤殪殫殯殲殱殳殷殼毆毋毓毟毬毫毳毯'
      ],
      [
        '9f80',
        '麾氈氓气氛氤氣汞汕汢汪沂沍沚沁沛汾汨汳沒沐泄泱泓沽泗泅泝沮沱沾沺泛泯泙泪洟衍洶洫洽洸洙洵洳洒洌浣涓浤浚浹浙涎涕濤涅淹渕渊涵淇淦涸淆淬淞淌淨淒淅淺淙淤淕淪淮渭湮渮渙湲湟渾渣湫渫湶湍渟湃渺湎渤滿渝游溂溪溘滉溷滓溽溯滄溲滔滕溏溥滂溟潁漑灌滬滸滾漿滲漱滯漲滌'
      ],
      [
        'e040',
        '漾漓滷澆潺潸澁澀潯潛濳潭澂潼潘澎澑濂潦澳澣澡澤澹濆澪濟濕濬濔濘濱濮濛瀉瀋濺瀑瀁瀏濾瀛瀚潴瀝瀘瀟瀰瀾瀲灑灣炙炒炯烱炬炸炳炮烟烋烝'
      ],
      [
        'e080',
        '烙焉烽焜焙煥煕熈煦煢煌煖煬熏燻熄熕熨熬燗熹熾燒燉燔燎燠燬燧燵燼燹燿爍爐爛爨爭爬爰爲爻爼爿牀牆牋牘牴牾犂犁犇犒犖犢犧犹犲狃狆狄狎狒狢狠狡狹狷倏猗猊猜猖猝猴猯猩猥猾獎獏默獗獪獨獰獸獵獻獺珈玳珎玻珀珥珮珞璢琅瑯琥珸琲琺瑕琿瑟瑙瑁瑜瑩瑰瑣瑪瑶瑾璋璞璧瓊瓏瓔珱'
      ],
      [
        'e140',
        '瓠瓣瓧瓩瓮瓲瓰瓱瓸瓷甄甃甅甌甎甍甕甓甞甦甬甼畄畍畊畉畛畆畚畩畤畧畫畭畸當疆疇畴疊疉疂疔疚疝疥疣痂疳痃疵疽疸疼疱痍痊痒痙痣痞痾痿'
      ],
      [
        'e180',
        '痼瘁痰痺痲痳瘋瘍瘉瘟瘧瘠瘡瘢瘤瘴瘰瘻癇癈癆癜癘癡癢癨癩癪癧癬癰癲癶癸發皀皃皈皋皎皖皓皙皚皰皴皸皹皺盂盍盖盒盞盡盥盧盪蘯盻眈眇眄眩眤眞眥眦眛眷眸睇睚睨睫睛睥睿睾睹瞎瞋瞑瞠瞞瞰瞶瞹瞿瞼瞽瞻矇矍矗矚矜矣矮矼砌砒礦砠礪硅碎硴碆硼碚碌碣碵碪碯磑磆磋磔碾碼磅磊磬'
      ],
      [
        'e240',
        '磧磚磽磴礇礒礑礙礬礫祀祠祗祟祚祕祓祺祿禊禝禧齋禪禮禳禹禺秉秕秧秬秡秣稈稍稘稙稠稟禀稱稻稾稷穃穗穉穡穢穩龝穰穹穽窈窗窕窘窖窩竈窰'
      ],
      [
        'e280',
        '窶竅竄窿邃竇竊竍竏竕竓站竚竝竡竢竦竭竰笂笏笊笆笳笘笙笞笵笨笶筐筺笄筍笋筌筅筵筥筴筧筰筱筬筮箝箘箟箍箜箚箋箒箏筝箙篋篁篌篏箴篆篝篩簑簔篦篥籠簀簇簓篳篷簗簍篶簣簧簪簟簷簫簽籌籃籔籏籀籐籘籟籤籖籥籬籵粃粐粤粭粢粫粡粨粳粲粱粮粹粽糀糅糂糘糒糜糢鬻糯糲糴糶糺紆'
      ],
      [
        'e340',
        '紂紜紕紊絅絋紮紲紿紵絆絳絖絎絲絨絮絏絣經綉絛綏絽綛綺綮綣綵緇綽綫總綢綯緜綸綟綰緘緝緤緞緻緲緡縅縊縣縡縒縱縟縉縋縢繆繦縻縵縹繃縷'
      ],
      [
        'e380',
        '縲縺繧繝繖繞繙繚繹繪繩繼繻纃緕繽辮繿纈纉續纒纐纓纔纖纎纛纜缸缺罅罌罍罎罐网罕罔罘罟罠罨罩罧罸羂羆羃羈羇羌羔羞羝羚羣羯羲羹羮羶羸譱翅翆翊翕翔翡翦翩翳翹飜耆耄耋耒耘耙耜耡耨耿耻聊聆聒聘聚聟聢聨聳聲聰聶聹聽聿肄肆肅肛肓肚肭冐肬胛胥胙胝胄胚胖脉胯胱脛脩脣脯腋'
      ],
      [
        'e440',
        '隋腆脾腓腑胼腱腮腥腦腴膃膈膊膀膂膠膕膤膣腟膓膩膰膵膾膸膽臀臂膺臉臍臑臙臘臈臚臟臠臧臺臻臾舁舂舅與舊舍舐舖舩舫舸舳艀艙艘艝艚艟艤'
      ],
      [
        'e480',
        '艢艨艪艫舮艱艷艸艾芍芒芫芟芻芬苡苣苟苒苴苳苺莓范苻苹苞茆苜茉苙茵茴茖茲茱荀茹荐荅茯茫茗茘莅莚莪莟莢莖茣莎莇莊荼莵荳荵莠莉莨菴萓菫菎菽萃菘萋菁菷萇菠菲萍萢萠莽萸蔆菻葭萪萼蕚蒄葷葫蒭葮蒂葩葆萬葯葹萵蓊葢蒹蒿蒟蓙蓍蒻蓚蓐蓁蓆蓖蒡蔡蓿蓴蔗蔘蔬蔟蔕蔔蓼蕀蕣蕘蕈'
      ],
      [
        'e540',
        '蕁蘂蕋蕕薀薤薈薑薊薨蕭薔薛藪薇薜蕷蕾薐藉薺藏薹藐藕藝藥藜藹蘊蘓蘋藾藺蘆蘢蘚蘰蘿虍乕虔號虧虱蚓蚣蚩蚪蚋蚌蚶蚯蛄蛆蚰蛉蠣蚫蛔蛞蛩蛬'
      ],
      [
        'e580',
        '蛟蛛蛯蜒蜆蜈蜀蜃蛻蜑蜉蜍蛹蜊蜴蜿蜷蜻蜥蜩蜚蝠蝟蝸蝌蝎蝴蝗蝨蝮蝙蝓蝣蝪蠅螢螟螂螯蟋螽蟀蟐雖螫蟄螳蟇蟆螻蟯蟲蟠蠏蠍蟾蟶蟷蠎蟒蠑蠖蠕蠢蠡蠱蠶蠹蠧蠻衄衂衒衙衞衢衫袁衾袞衵衽袵衲袂袗袒袮袙袢袍袤袰袿袱裃裄裔裘裙裝裹褂裼裴裨裲褄褌褊褓襃褞褥褪褫襁襄褻褶褸襌褝襠襞'
      ],
      [
        'e640',
        '襦襤襭襪襯襴襷襾覃覈覊覓覘覡覩覦覬覯覲覺覽覿觀觚觜觝觧觴觸訃訖訐訌訛訝訥訶詁詛詒詆詈詼詭詬詢誅誂誄誨誡誑誥誦誚誣諄諍諂諚諫諳諧'
      ],
      [
        'e680',
        '諤諱謔諠諢諷諞諛謌謇謚諡謖謐謗謠謳鞫謦謫謾謨譁譌譏譎證譖譛譚譫譟譬譯譴譽讀讌讎讒讓讖讙讚谺豁谿豈豌豎豐豕豢豬豸豺貂貉貅貊貍貎貔豼貘戝貭貪貽貲貳貮貶賈賁賤賣賚賽賺賻贄贅贊贇贏贍贐齎贓賍贔贖赧赭赱赳趁趙跂趾趺跏跚跖跌跛跋跪跫跟跣跼踈踉跿踝踞踐踟蹂踵踰踴蹊'
      ],
      [
        'e740',
        '蹇蹉蹌蹐蹈蹙蹤蹠踪蹣蹕蹶蹲蹼躁躇躅躄躋躊躓躑躔躙躪躡躬躰軆躱躾軅軈軋軛軣軼軻軫軾輊輅輕輒輙輓輜輟輛輌輦輳輻輹轅轂輾轌轉轆轎轗轜'
      ],
      [
        'e780',
        '轢轣轤辜辟辣辭辯辷迚迥迢迪迯邇迴逅迹迺逑逕逡逍逞逖逋逧逶逵逹迸遏遐遑遒逎遉逾遖遘遞遨遯遶隨遲邂遽邁邀邊邉邏邨邯邱邵郢郤扈郛鄂鄒鄙鄲鄰酊酖酘酣酥酩酳酲醋醉醂醢醫醯醪醵醴醺釀釁釉釋釐釖釟釡釛釼釵釶鈞釿鈔鈬鈕鈑鉞鉗鉅鉉鉤鉈銕鈿鉋鉐銜銖銓銛鉚鋏銹銷鋩錏鋺鍄錮'
      ],
      [
        'e840',
        '錙錢錚錣錺錵錻鍜鍠鍼鍮鍖鎰鎬鎭鎔鎹鏖鏗鏨鏥鏘鏃鏝鏐鏈鏤鐚鐔鐓鐃鐇鐐鐶鐫鐵鐡鐺鑁鑒鑄鑛鑠鑢鑞鑪鈩鑰鑵鑷鑽鑚鑼鑾钁鑿閂閇閊閔閖閘閙'
      ],
      [
        'e880',
        '閠閨閧閭閼閻閹閾闊濶闃闍闌闕闔闖關闡闥闢阡阨阮阯陂陌陏陋陷陜陞陝陟陦陲陬隍隘隕隗險隧隱隲隰隴隶隸隹雎雋雉雍襍雜霍雕雹霄霆霈霓霎霑霏霖霙霤霪霰霹霽霾靄靆靈靂靉靜靠靤靦靨勒靫靱靹鞅靼鞁靺鞆鞋鞏鞐鞜鞨鞦鞣鞳鞴韃韆韈韋韜韭齏韲竟韶韵頏頌頸頤頡頷頽顆顏顋顫顯顰'
      ],
      [
        'e940',
        '顱顴顳颪颯颱颶飄飃飆飩飫餃餉餒餔餘餡餝餞餤餠餬餮餽餾饂饉饅饐饋饑饒饌饕馗馘馥馭馮馼駟駛駝駘駑駭駮駱駲駻駸騁騏騅駢騙騫騷驅驂驀驃'
      ],
      [
        'e980',
        '騾驕驍驛驗驟驢驥驤驩驫驪骭骰骼髀髏髑髓體髞髟髢髣髦髯髫髮髴髱髷髻鬆鬘鬚鬟鬢鬣鬥鬧鬨鬩鬪鬮鬯鬲魄魃魏魍魎魑魘魴鮓鮃鮑鮖鮗鮟鮠鮨鮴鯀鯊鮹鯆鯏鯑鯒鯣鯢鯤鯔鯡鰺鯲鯱鯰鰕鰔鰉鰓鰌鰆鰈鰒鰊鰄鰮鰛鰥鰤鰡鰰鱇鰲鱆鰾鱚鱠鱧鱶鱸鳧鳬鳰鴉鴈鳫鴃鴆鴪鴦鶯鴣鴟鵄鴕鴒鵁鴿鴾鵆鵈'
      ],
      [
        'ea40',
        '鵝鵞鵤鵑鵐鵙鵲鶉鶇鶫鵯鵺鶚鶤鶩鶲鷄鷁鶻鶸鶺鷆鷏鷂鷙鷓鷸鷦鷭鷯鷽鸚鸛鸞鹵鹹鹽麁麈麋麌麒麕麑麝麥麩麸麪麭靡黌黎黏黐黔黜點黝黠黥黨黯'
      ],
      [
        'ea80',
        '黴黶黷黹黻黼黽鼇鼈皷鼕鼡鼬鼾齊齒齔齣齟齠齡齦齧齬齪齷齲齶龕龜龠堯槇遙瑤凜熙'
      ],
      [
        'ed40',
        '纊褜鍈銈蓜俉炻昱棈鋹曻彅丨仡仼伀伃伹佖侒侊侚侔俍偀倢俿倞偆偰偂傔僴僘兊兤冝冾凬刕劜劦勀勛匀匇匤卲厓厲叝﨎咜咊咩哿喆坙坥垬埈埇﨏'
      ],
      [
        'ed80',
        '塚增墲夋奓奛奝奣妤妺孖寀甯寘寬尞岦岺峵崧嵓﨑嵂嵭嶸嶹巐弡弴彧德忞恝悅悊惞惕愠惲愑愷愰憘戓抦揵摠撝擎敎昀昕昻昉昮昞昤晥晗晙晴晳暙暠暲暿曺朎朗杦枻桒柀栁桄棏﨓楨﨔榘槢樰橫橆橳橾櫢櫤毖氿汜沆汯泚洄涇浯涖涬淏淸淲淼渹湜渧渼溿澈澵濵瀅瀇瀨炅炫焏焄煜煆煇凞燁燾犱'
      ],
      [
        'ee40',
        '犾猤猪獷玽珉珖珣珒琇珵琦琪琩琮瑢璉璟甁畯皂皜皞皛皦益睆劯砡硎硤硺礰礼神祥禔福禛竑竧靖竫箞精絈絜綷綠緖繒罇羡羽茁荢荿菇菶葈蒴蕓蕙'
      ],
      [
        'ee80',
        '蕫﨟薰蘒﨡蠇裵訒訷詹誧誾諟諸諶譓譿賰賴贒赶﨣軏﨤逸遧郞都鄕鄧釚釗釞釭釮釤釥鈆鈐鈊鈺鉀鈼鉎鉙鉑鈹鉧銧鉷鉸鋧鋗鋙鋐﨧鋕鋠鋓錥錡鋻﨨錞鋿錝錂鍰鍗鎤鏆鏞鏸鐱鑅鑈閒隆﨩隝隯霳霻靃靍靏靑靕顗顥飯飼餧館馞驎髙髜魵魲鮏鮱鮻鰀鵰鵫鶴鸙黑'
      ],
      ['eeef', 'ⅰ', 9, '￢￤＇＂'],
      ['f040', '', 62],
      ['f080', '', 124],
      ['f140', '', 62],
      ['f180', '', 124],
      ['f240', '', 62],
      ['f280', '', 124],
      ['f340', '', 62],
      ['f380', '', 124],
      ['f440', '', 62],
      ['f480', '', 124],
      ['f540', '', 62],
      ['f580', '', 124],
      ['f640', '', 62],
      ['f680', '', 124],
      ['f740', '', 62],
      ['f780', '', 124],
      ['f840', '', 62],
      ['f880', '', 124],
      ['f940', ''],
      [
        'fa40',
        'ⅰ',
        9,
        'Ⅰ',
        9,
        '￢￤＇＂㈱№℡∵纊褜鍈銈蓜俉炻昱棈鋹曻彅丨仡仼伀伃伹佖侒侊侚侔俍偀倢俿倞偆偰偂傔僴僘兊'
      ],
      [
        'fa80',
        '兤冝冾凬刕劜劦勀勛匀匇匤卲厓厲叝﨎咜咊咩哿喆坙坥垬埈埇﨏塚增墲夋奓奛奝奣妤妺孖寀甯寘寬尞岦岺峵崧嵓﨑嵂嵭嶸嶹巐弡弴彧德忞恝悅悊惞惕愠惲愑愷愰憘戓抦揵摠撝擎敎昀昕昻昉昮昞昤晥晗晙晴晳暙暠暲暿曺朎朗杦枻桒柀栁桄棏﨓楨﨔榘槢樰橫橆橳橾櫢櫤毖氿汜沆汯泚洄涇浯'
      ],
      [
        'fb40',
        '涖涬淏淸淲淼渹湜渧渼溿澈澵濵瀅瀇瀨炅炫焏焄煜煆煇凞燁燾犱犾猤猪獷玽珉珖珣珒琇珵琦琪琩琮瑢璉璟甁畯皂皜皞皛皦益睆劯砡硎硤硺礰礼神'
      ],
      [
        'fb80',
        '祥禔福禛竑竧靖竫箞精絈絜綷綠緖繒罇羡羽茁荢荿菇菶葈蒴蕓蕙蕫﨟薰蘒﨡蠇裵訒訷詹誧誾諟諸諶譓譿賰賴贒赶﨣軏﨤逸遧郞都鄕鄧釚釗釞釭釮釤釥鈆鈐鈊鈺鉀鈼鉎鉙鉑鈹鉧銧鉷鉸鋧鋗鋙鋐﨧鋕鋠鋓錥錡鋻﨨錞鋿錝錂鍰鍗鎤鏆鏞鏸鐱鑅鑈閒隆﨩隝隯霳霻靃靍靏靑靕顗顥飯飼餧館馞驎髙'
      ],
      ['fc40', '髜魵魲鮏鮱鮻鰀鵰鵫鶴鸙黑']
    ]
  }),
  qc = Object.freeze({
    __proto__: null,
    default: [
      ['0', '\0', 127],
      ['8ea1', '｡', 62],
      [
        'a1a1',
        '　、。，．・：；？！゛゜´｀¨＾￣＿ヽヾゝゞ〃仝々〆〇ー―‐／＼～∥｜…‥‘’“”（）〔〕［］｛｝〈',
        9,
        '＋－±×÷＝≠＜＞≦≧∞∴♂♀°′″℃￥＄￠￡％＃＆＊＠§☆★○●◎◇'
      ],
      ['a2a1', '◆□■△▲▽▼※〒→←↑↓〓'],
      ['a2ba', '∈∋⊆⊇⊂⊃∪∩'],
      ['a2ca', '∧∨￢⇒⇔∀∃'],
      ['a2dc', '∠⊥⌒∂∇≡≒≪≫√∽∝∵∫∬'],
      ['a2f2', 'Å‰♯♭♪†‡¶'],
      ['a2fe', '◯'],
      ['a3b0', '０', 9],
      ['a3c1', 'Ａ', 25],
      ['a3e1', 'ａ', 25],
      ['a4a1', 'ぁ', 82],
      ['a5a1', 'ァ', 85],
      ['a6a1', 'Α', 16, 'Σ', 6],
      ['a6c1', 'α', 16, 'σ', 6],
      ['a7a1', 'А', 5, 'ЁЖ', 25],
      ['a7d1', 'а', 5, 'ёж', 25],
      ['a8a1', '─│┌┐┘└├┬┤┴┼━┃┏┓┛┗┣┳┫┻╋┠┯┨┷┿┝┰┥┸╂'],
      ['ada1', '①', 19, 'Ⅰ', 9],
      ['adc0', '㍉㌔㌢㍍㌘㌧㌃㌶㍑㍗㌍㌦㌣㌫㍊㌻㎜㎝㎞㎎㎏㏄㎡'],
      ['addf', '㍻〝〟№㏍℡㊤', 4, '㈱㈲㈹㍾㍽㍼≒≡∫∮∑√⊥∠∟⊿∵∩∪'],
      [
        'b0a1',
        '亜唖娃阿哀愛挨姶逢葵茜穐悪握渥旭葦芦鯵梓圧斡扱宛姐虻飴絢綾鮎或粟袷安庵按暗案闇鞍杏以伊位依偉囲夷委威尉惟意慰易椅為畏異移維緯胃萎衣謂違遺医井亥域育郁磯一壱溢逸稲茨芋鰯允印咽員因姻引飲淫胤蔭'
      ],
      [
        'b1a1',
        '院陰隠韻吋右宇烏羽迂雨卯鵜窺丑碓臼渦嘘唄欝蔚鰻姥厩浦瓜閏噂云運雲荏餌叡営嬰影映曳栄永泳洩瑛盈穎頴英衛詠鋭液疫益駅悦謁越閲榎厭円園堰奄宴延怨掩援沿演炎焔煙燕猿縁艶苑薗遠鉛鴛塩於汚甥凹央奥往応'
      ],
      [
        'b2a1',
        '押旺横欧殴王翁襖鴬鴎黄岡沖荻億屋憶臆桶牡乙俺卸恩温穏音下化仮何伽価佳加可嘉夏嫁家寡科暇果架歌河火珂禍禾稼箇花苛茄荷華菓蝦課嘩貨迦過霞蚊俄峨我牙画臥芽蛾賀雅餓駕介会解回塊壊廻快怪悔恢懐戒拐改'
      ],
      [
        'b3a1',
        '魁晦械海灰界皆絵芥蟹開階貝凱劾外咳害崖慨概涯碍蓋街該鎧骸浬馨蛙垣柿蛎鈎劃嚇各廓拡撹格核殻獲確穫覚角赫較郭閣隔革学岳楽額顎掛笠樫橿梶鰍潟割喝恰括活渇滑葛褐轄且鰹叶椛樺鞄株兜竃蒲釜鎌噛鴨栢茅萱'
      ],
      [
        'b4a1',
        '粥刈苅瓦乾侃冠寒刊勘勧巻喚堪姦完官寛干幹患感慣憾換敢柑桓棺款歓汗漢澗潅環甘監看竿管簡緩缶翰肝艦莞観諌貫還鑑間閑関陥韓館舘丸含岸巌玩癌眼岩翫贋雁頑顔願企伎危喜器基奇嬉寄岐希幾忌揮机旗既期棋棄'
      ],
      [
        'b5a1',
        '機帰毅気汽畿祈季稀紀徽規記貴起軌輝飢騎鬼亀偽儀妓宜戯技擬欺犠疑祇義蟻誼議掬菊鞠吉吃喫桔橘詰砧杵黍却客脚虐逆丘久仇休及吸宮弓急救朽求汲泣灸球究窮笈級糾給旧牛去居巨拒拠挙渠虚許距鋸漁禦魚亨享京'
      ],
      [
        'b6a1',
        '供侠僑兇競共凶協匡卿叫喬境峡強彊怯恐恭挟教橋況狂狭矯胸脅興蕎郷鏡響饗驚仰凝尭暁業局曲極玉桐粁僅勤均巾錦斤欣欽琴禁禽筋緊芹菌衿襟謹近金吟銀九倶句区狗玖矩苦躯駆駈駒具愚虞喰空偶寓遇隅串櫛釧屑屈'
      ],
      [
        'b7a1',
        '掘窟沓靴轡窪熊隈粂栗繰桑鍬勲君薫訓群軍郡卦袈祁係傾刑兄啓圭珪型契形径恵慶慧憩掲携敬景桂渓畦稽系経継繋罫茎荊蛍計詣警軽頚鶏芸迎鯨劇戟撃激隙桁傑欠決潔穴結血訣月件倹倦健兼券剣喧圏堅嫌建憲懸拳捲'
      ],
      [
        'b8a1',
        '検権牽犬献研硯絹県肩見謙賢軒遣鍵険顕験鹸元原厳幻弦減源玄現絃舷言諺限乎個古呼固姑孤己庫弧戸故枯湖狐糊袴股胡菰虎誇跨鈷雇顧鼓五互伍午呉吾娯後御悟梧檎瑚碁語誤護醐乞鯉交佼侯候倖光公功効勾厚口向'
      ],
      [
        'b9a1',
        '后喉坑垢好孔孝宏工巧巷幸広庚康弘恒慌抗拘控攻昂晃更杭校梗構江洪浩港溝甲皇硬稿糠紅紘絞綱耕考肯肱腔膏航荒行衡講貢購郊酵鉱砿鋼閤降項香高鴻剛劫号合壕拷濠豪轟麹克刻告国穀酷鵠黒獄漉腰甑忽惚骨狛込'
      ],
      [
        'baa1',
        '此頃今困坤墾婚恨懇昏昆根梱混痕紺艮魂些佐叉唆嵯左差査沙瑳砂詐鎖裟坐座挫債催再最哉塞妻宰彩才採栽歳済災采犀砕砦祭斎細菜裁載際剤在材罪財冴坂阪堺榊肴咲崎埼碕鷺作削咋搾昨朔柵窄策索錯桜鮭笹匙冊刷'
      ],
      [
        'bba1',
        '察拶撮擦札殺薩雑皐鯖捌錆鮫皿晒三傘参山惨撒散桟燦珊産算纂蚕讃賛酸餐斬暫残仕仔伺使刺司史嗣四士始姉姿子屍市師志思指支孜斯施旨枝止死氏獅祉私糸紙紫肢脂至視詞詩試誌諮資賜雌飼歯事似侍児字寺慈持時'
      ],
      [
        'bca1',
        '次滋治爾璽痔磁示而耳自蒔辞汐鹿式識鴫竺軸宍雫七叱執失嫉室悉湿漆疾質実蔀篠偲柴芝屡蕊縞舎写射捨赦斜煮社紗者謝車遮蛇邪借勺尺杓灼爵酌釈錫若寂弱惹主取守手朱殊狩珠種腫趣酒首儒受呪寿授樹綬需囚収周'
      ],
      [
        'bda1',
        '宗就州修愁拾洲秀秋終繍習臭舟蒐衆襲讐蹴輯週酋酬集醜什住充十従戎柔汁渋獣縦重銃叔夙宿淑祝縮粛塾熟出術述俊峻春瞬竣舜駿准循旬楯殉淳準潤盾純巡遵醇順処初所暑曙渚庶緒署書薯藷諸助叙女序徐恕鋤除傷償'
      ],
      [
        'bea1',
        '勝匠升召哨商唱嘗奨妾娼宵将小少尚庄床廠彰承抄招掌捷昇昌昭晶松梢樟樵沼消渉湘焼焦照症省硝礁祥称章笑粧紹肖菖蒋蕉衝裳訟証詔詳象賞醤鉦鍾鐘障鞘上丈丞乗冗剰城場壌嬢常情擾条杖浄状畳穣蒸譲醸錠嘱埴飾'
      ],
      [
        'bfa1',
        '拭植殖燭織職色触食蝕辱尻伸信侵唇娠寝審心慎振新晋森榛浸深申疹真神秦紳臣芯薪親診身辛進針震人仁刃塵壬尋甚尽腎訊迅陣靭笥諏須酢図厨逗吹垂帥推水炊睡粋翠衰遂酔錐錘随瑞髄崇嵩数枢趨雛据杉椙菅頗雀裾'
      ],
      [
        'c0a1',
        '澄摺寸世瀬畝是凄制勢姓征性成政整星晴棲栖正清牲生盛精聖声製西誠誓請逝醒青静斉税脆隻席惜戚斥昔析石積籍績脊責赤跡蹟碩切拙接摂折設窃節説雪絶舌蝉仙先千占宣専尖川戦扇撰栓栴泉浅洗染潜煎煽旋穿箭線'
      ],
      [
        'c1a1',
        '繊羨腺舛船薦詮賎践選遷銭銑閃鮮前善漸然全禅繕膳糎噌塑岨措曾曽楚狙疏疎礎祖租粗素組蘇訴阻遡鼠僧創双叢倉喪壮奏爽宋層匝惣想捜掃挿掻操早曹巣槍槽漕燥争痩相窓糟総綜聡草荘葬蒼藻装走送遭鎗霜騒像増憎'
      ],
      [
        'c2a1',
        '臓蔵贈造促側則即息捉束測足速俗属賊族続卒袖其揃存孫尊損村遜他多太汰詑唾堕妥惰打柁舵楕陀駄騨体堆対耐岱帯待怠態戴替泰滞胎腿苔袋貸退逮隊黛鯛代台大第醍題鷹滝瀧卓啄宅托択拓沢濯琢託鐸濁諾茸凧蛸只'
      ],
      [
        'c3a1',
        '叩但達辰奪脱巽竪辿棚谷狸鱈樽誰丹単嘆坦担探旦歎淡湛炭短端箪綻耽胆蛋誕鍛団壇弾断暖檀段男談値知地弛恥智池痴稚置致蜘遅馳築畜竹筑蓄逐秩窒茶嫡着中仲宙忠抽昼柱注虫衷註酎鋳駐樗瀦猪苧著貯丁兆凋喋寵'
      ],
      [
        'c4a1',
        '帖帳庁弔張彫徴懲挑暢朝潮牒町眺聴脹腸蝶調諜超跳銚長頂鳥勅捗直朕沈珍賃鎮陳津墜椎槌追鎚痛通塚栂掴槻佃漬柘辻蔦綴鍔椿潰坪壷嬬紬爪吊釣鶴亭低停偵剃貞呈堤定帝底庭廷弟悌抵挺提梯汀碇禎程締艇訂諦蹄逓'
      ],
      [
        'c5a1',
        '邸鄭釘鼎泥摘擢敵滴的笛適鏑溺哲徹撤轍迭鉄典填天展店添纏甜貼転顛点伝殿澱田電兎吐堵塗妬屠徒斗杜渡登菟賭途都鍍砥砺努度土奴怒倒党冬凍刀唐塔塘套宕島嶋悼投搭東桃梼棟盗淘湯涛灯燈当痘祷等答筒糖統到'
      ],
      [
        'c6a1',
        '董蕩藤討謄豆踏逃透鐙陶頭騰闘働動同堂導憧撞洞瞳童胴萄道銅峠鴇匿得徳涜特督禿篤毒独読栃橡凸突椴届鳶苫寅酉瀞噸屯惇敦沌豚遁頓呑曇鈍奈那内乍凪薙謎灘捺鍋楢馴縄畷南楠軟難汝二尼弐迩匂賑肉虹廿日乳入'
      ],
      [
        'c7a1',
        '如尿韮任妊忍認濡禰祢寧葱猫熱年念捻撚燃粘乃廼之埜嚢悩濃納能脳膿農覗蚤巴把播覇杷波派琶破婆罵芭馬俳廃拝排敗杯盃牌背肺輩配倍培媒梅楳煤狽買売賠陪這蝿秤矧萩伯剥博拍柏泊白箔粕舶薄迫曝漠爆縛莫駁麦'
      ],
      [
        'c8a1',
        '函箱硲箸肇筈櫨幡肌畑畠八鉢溌発醗髪伐罰抜筏閥鳩噺塙蛤隼伴判半反叛帆搬斑板氾汎版犯班畔繁般藩販範釆煩頒飯挽晩番盤磐蕃蛮匪卑否妃庇彼悲扉批披斐比泌疲皮碑秘緋罷肥被誹費避非飛樋簸備尾微枇毘琵眉美'
      ],
      [
        'c9a1',
        '鼻柊稗匹疋髭彦膝菱肘弼必畢筆逼桧姫媛紐百謬俵彪標氷漂瓢票表評豹廟描病秒苗錨鋲蒜蛭鰭品彬斌浜瀕貧賓頻敏瓶不付埠夫婦富冨布府怖扶敷斧普浮父符腐膚芙譜負賦赴阜附侮撫武舞葡蕪部封楓風葺蕗伏副復幅服'
      ],
      [
        'caa1',
        '福腹複覆淵弗払沸仏物鮒分吻噴墳憤扮焚奮粉糞紛雰文聞丙併兵塀幣平弊柄並蔽閉陛米頁僻壁癖碧別瞥蔑箆偏変片篇編辺返遍便勉娩弁鞭保舗鋪圃捕歩甫補輔穂募墓慕戊暮母簿菩倣俸包呆報奉宝峰峯崩庖抱捧放方朋'
      ],
      [
        'cba1',
        '法泡烹砲縫胞芳萌蓬蜂褒訪豊邦鋒飽鳳鵬乏亡傍剖坊妨帽忘忙房暴望某棒冒紡肪膨謀貌貿鉾防吠頬北僕卜墨撲朴牧睦穆釦勃没殆堀幌奔本翻凡盆摩磨魔麻埋妹昧枚毎哩槙幕膜枕鮪柾鱒桝亦俣又抹末沫迄侭繭麿万慢満'
      ],
      [
        'cca1',
        '漫蔓味未魅巳箕岬密蜜湊蓑稔脈妙粍民眠務夢無牟矛霧鵡椋婿娘冥名命明盟迷銘鳴姪牝滅免棉綿緬面麺摸模茂妄孟毛猛盲網耗蒙儲木黙目杢勿餅尤戻籾貰問悶紋門匁也冶夜爺耶野弥矢厄役約薬訳躍靖柳薮鑓愉愈油癒'
      ],
      [
        'cda1',
        '諭輸唯佑優勇友宥幽悠憂揖有柚湧涌猶猷由祐裕誘遊邑郵雄融夕予余与誉輿預傭幼妖容庸揚揺擁曜楊様洋溶熔用窯羊耀葉蓉要謡踊遥陽養慾抑欲沃浴翌翼淀羅螺裸来莱頼雷洛絡落酪乱卵嵐欄濫藍蘭覧利吏履李梨理璃'
      ],
      [
        'cea1',
        '痢裏裡里離陸律率立葎掠略劉流溜琉留硫粒隆竜龍侶慮旅虜了亮僚両凌寮料梁涼猟療瞭稜糧良諒遼量陵領力緑倫厘林淋燐琳臨輪隣鱗麟瑠塁涙累類令伶例冷励嶺怜玲礼苓鈴隷零霊麗齢暦歴列劣烈裂廉恋憐漣煉簾練聯'
      ],
      [
        'cfa1',
        '蓮連錬呂魯櫓炉賂路露労婁廊弄朗楼榔浪漏牢狼篭老聾蝋郎六麓禄肋録論倭和話歪賄脇惑枠鷲亙亘鰐詫藁蕨椀湾碗腕'
      ],
      [
        'd0a1',
        '弌丐丕个丱丶丼丿乂乖乘亂亅豫亊舒弍于亞亟亠亢亰亳亶从仍仄仆仂仗仞仭仟价伉佚估佛佝佗佇佶侈侏侘佻佩佰侑佯來侖儘俔俟俎俘俛俑俚俐俤俥倚倨倔倪倥倅伜俶倡倩倬俾俯們倆偃假會偕偐偈做偖偬偸傀傚傅傴傲'
      ],
      [
        'd1a1',
        '僉僊傳僂僖僞僥僭僣僮價僵儉儁儂儖儕儔儚儡儺儷儼儻儿兀兒兌兔兢竸兩兪兮冀冂囘册冉冏冑冓冕冖冤冦冢冩冪冫决冱冲冰况冽凅凉凛几處凩凭凰凵凾刄刋刔刎刧刪刮刳刹剏剄剋剌剞剔剪剴剩剳剿剽劍劔劒剱劈劑辨'
      ],
      [
        'd2a1',
        '辧劬劭劼劵勁勍勗勞勣勦飭勠勳勵勸勹匆匈甸匍匐匏匕匚匣匯匱匳匸區卆卅丗卉卍凖卞卩卮夘卻卷厂厖厠厦厥厮厰厶參簒雙叟曼燮叮叨叭叺吁吽呀听吭吼吮吶吩吝呎咏呵咎呟呱呷呰咒呻咀呶咄咐咆哇咢咸咥咬哄哈咨'
      ],
      [
        'd3a1',
        '咫哂咤咾咼哘哥哦唏唔哽哮哭哺哢唹啀啣啌售啜啅啖啗唸唳啝喙喀咯喊喟啻啾喘喞單啼喃喩喇喨嗚嗅嗟嗄嗜嗤嗔嘔嗷嘖嗾嗽嘛嗹噎噐營嘴嘶嘲嘸噫噤嘯噬噪嚆嚀嚊嚠嚔嚏嚥嚮嚶嚴囂嚼囁囃囀囈囎囑囓囗囮囹圀囿圄圉'
      ],
      [
        'd4a1',
        '圈國圍圓團圖嗇圜圦圷圸坎圻址坏坩埀垈坡坿垉垓垠垳垤垪垰埃埆埔埒埓堊埖埣堋堙堝塲堡塢塋塰毀塒堽塹墅墹墟墫墺壞墻墸墮壅壓壑壗壙壘壥壜壤壟壯壺壹壻壼壽夂夊夐夛梦夥夬夭夲夸夾竒奕奐奎奚奘奢奠奧奬奩'
      ],
      [
        'd5a1',
        '奸妁妝佞侫妣妲姆姨姜妍姙姚娥娟娑娜娉娚婀婬婉娵娶婢婪媚媼媾嫋嫂媽嫣嫗嫦嫩嫖嫺嫻嬌嬋嬖嬲嫐嬪嬶嬾孃孅孀孑孕孚孛孥孩孰孳孵學斈孺宀它宦宸寃寇寉寔寐寤實寢寞寥寫寰寶寳尅將專對尓尠尢尨尸尹屁屆屎屓'
      ],
      [
        'd6a1',
        '屐屏孱屬屮乢屶屹岌岑岔妛岫岻岶岼岷峅岾峇峙峩峽峺峭嶌峪崋崕崗嵜崟崛崑崔崢崚崙崘嵌嵒嵎嵋嵬嵳嵶嶇嶄嶂嶢嶝嶬嶮嶽嶐嶷嶼巉巍巓巒巖巛巫已巵帋帚帙帑帛帶帷幄幃幀幎幗幔幟幢幤幇幵并幺麼广庠廁廂廈廐廏'
      ],
      [
        'd7a1',
        '廖廣廝廚廛廢廡廨廩廬廱廳廰廴廸廾弃弉彝彜弋弑弖弩弭弸彁彈彌彎弯彑彖彗彙彡彭彳彷徃徂彿徊很徑徇從徙徘徠徨徭徼忖忻忤忸忱忝悳忿怡恠怙怐怩怎怱怛怕怫怦怏怺恚恁恪恷恟恊恆恍恣恃恤恂恬恫恙悁悍惧悃悚'
      ],
      [
        'd8a1',
        '悄悛悖悗悒悧悋惡悸惠惓悴忰悽惆悵惘慍愕愆惶惷愀惴惺愃愡惻惱愍愎慇愾愨愧慊愿愼愬愴愽慂慄慳慷慘慙慚慫慴慯慥慱慟慝慓慵憙憖憇憬憔憚憊憑憫憮懌懊應懷懈懃懆憺懋罹懍懦懣懶懺懴懿懽懼懾戀戈戉戍戌戔戛'
      ],
      [
        'd9a1',
        '戞戡截戮戰戲戳扁扎扞扣扛扠扨扼抂抉找抒抓抖拔抃抔拗拑抻拏拿拆擔拈拜拌拊拂拇抛拉挌拮拱挧挂挈拯拵捐挾捍搜捏掖掎掀掫捶掣掏掉掟掵捫捩掾揩揀揆揣揉插揶揄搖搴搆搓搦搶攝搗搨搏摧摯摶摎攪撕撓撥撩撈撼'
      ],
      [
        'daa1',
        '據擒擅擇撻擘擂擱擧舉擠擡抬擣擯攬擶擴擲擺攀擽攘攜攅攤攣攫攴攵攷收攸畋效敖敕敍敘敞敝敲數斂斃變斛斟斫斷旃旆旁旄旌旒旛旙无旡旱杲昊昃旻杳昵昶昴昜晏晄晉晁晞晝晤晧晨晟晢晰暃暈暎暉暄暘暝曁暹曉暾暼'
      ],
      [
        'dba1',
        '曄暸曖曚曠昿曦曩曰曵曷朏朖朞朦朧霸朮朿朶杁朸朷杆杞杠杙杣杤枉杰枩杼杪枌枋枦枡枅枷柯枴柬枳柩枸柤柞柝柢柮枹柎柆柧檜栞框栩桀桍栲桎梳栫桙档桷桿梟梏梭梔條梛梃檮梹桴梵梠梺椏梍桾椁棊椈棘椢椦棡椌棍'
      ],
      [
        'dca1',
        '棔棧棕椶椒椄棗棣椥棹棠棯椨椪椚椣椡棆楹楷楜楸楫楔楾楮椹楴椽楙椰楡楞楝榁楪榲榮槐榿槁槓榾槎寨槊槝榻槃榧樮榑榠榜榕榴槞槨樂樛槿權槹槲槧樅榱樞槭樔槫樊樒櫁樣樓橄樌橲樶橸橇橢橙橦橈樸樢檐檍檠檄檢檣'
      ],
      [
        'dda1',
        '檗蘗檻櫃櫂檸檳檬櫞櫑櫟檪櫚櫪櫻欅蘖櫺欒欖鬱欟欸欷盜欹飮歇歃歉歐歙歔歛歟歡歸歹歿殀殄殃殍殘殕殞殤殪殫殯殲殱殳殷殼毆毋毓毟毬毫毳毯麾氈氓气氛氤氣汞汕汢汪沂沍沚沁沛汾汨汳沒沐泄泱泓沽泗泅泝沮沱沾'
      ],
      [
        'dea1',
        '沺泛泯泙泪洟衍洶洫洽洸洙洵洳洒洌浣涓浤浚浹浙涎涕濤涅淹渕渊涵淇淦涸淆淬淞淌淨淒淅淺淙淤淕淪淮渭湮渮渙湲湟渾渣湫渫湶湍渟湃渺湎渤滿渝游溂溪溘滉溷滓溽溯滄溲滔滕溏溥滂溟潁漑灌滬滸滾漿滲漱滯漲滌'
      ],
      [
        'dfa1',
        '漾漓滷澆潺潸澁澀潯潛濳潭澂潼潘澎澑濂潦澳澣澡澤澹濆澪濟濕濬濔濘濱濮濛瀉瀋濺瀑瀁瀏濾瀛瀚潴瀝瀘瀟瀰瀾瀲灑灣炙炒炯烱炬炸炳炮烟烋烝烙焉烽焜焙煥煕熈煦煢煌煖煬熏燻熄熕熨熬燗熹熾燒燉燔燎燠燬燧燵燼'
      ],
      [
        'e0a1',
        '燹燿爍爐爛爨爭爬爰爲爻爼爿牀牆牋牘牴牾犂犁犇犒犖犢犧犹犲狃狆狄狎狒狢狠狡狹狷倏猗猊猜猖猝猴猯猩猥猾獎獏默獗獪獨獰獸獵獻獺珈玳珎玻珀珥珮珞璢琅瑯琥珸琲琺瑕琿瑟瑙瑁瑜瑩瑰瑣瑪瑶瑾璋璞璧瓊瓏瓔珱'
      ],
      [
        'e1a1',
        '瓠瓣瓧瓩瓮瓲瓰瓱瓸瓷甄甃甅甌甎甍甕甓甞甦甬甼畄畍畊畉畛畆畚畩畤畧畫畭畸當疆疇畴疊疉疂疔疚疝疥疣痂疳痃疵疽疸疼疱痍痊痒痙痣痞痾痿痼瘁痰痺痲痳瘋瘍瘉瘟瘧瘠瘡瘢瘤瘴瘰瘻癇癈癆癜癘癡癢癨癩癪癧癬癰'
      ],
      [
        'e2a1',
        '癲癶癸發皀皃皈皋皎皖皓皙皚皰皴皸皹皺盂盍盖盒盞盡盥盧盪蘯盻眈眇眄眩眤眞眥眦眛眷眸睇睚睨睫睛睥睿睾睹瞎瞋瞑瞠瞞瞰瞶瞹瞿瞼瞽瞻矇矍矗矚矜矣矮矼砌砒礦砠礪硅碎硴碆硼碚碌碣碵碪碯磑磆磋磔碾碼磅磊磬'
      ],
      [
        'e3a1',
        '磧磚磽磴礇礒礑礙礬礫祀祠祗祟祚祕祓祺祿禊禝禧齋禪禮禳禹禺秉秕秧秬秡秣稈稍稘稙稠稟禀稱稻稾稷穃穗穉穡穢穩龝穰穹穽窈窗窕窘窖窩竈窰窶竅竄窿邃竇竊竍竏竕竓站竚竝竡竢竦竭竰笂笏笊笆笳笘笙笞笵笨笶筐'
      ],
      [
        'e4a1',
        '筺笄筍笋筌筅筵筥筴筧筰筱筬筮箝箘箟箍箜箚箋箒箏筝箙篋篁篌篏箴篆篝篩簑簔篦篥籠簀簇簓篳篷簗簍篶簣簧簪簟簷簫簽籌籃籔籏籀籐籘籟籤籖籥籬籵粃粐粤粭粢粫粡粨粳粲粱粮粹粽糀糅糂糘糒糜糢鬻糯糲糴糶糺紆'
      ],
      [
        'e5a1',
        '紂紜紕紊絅絋紮紲紿紵絆絳絖絎絲絨絮絏絣經綉絛綏絽綛綺綮綣綵緇綽綫總綢綯緜綸綟綰緘緝緤緞緻緲緡縅縊縣縡縒縱縟縉縋縢繆繦縻縵縹繃縷縲縺繧繝繖繞繙繚繹繪繩繼繻纃緕繽辮繿纈纉續纒纐纓纔纖纎纛纜缸缺'
      ],
      [
        'e6a1',
        '罅罌罍罎罐网罕罔罘罟罠罨罩罧罸羂羆羃羈羇羌羔羞羝羚羣羯羲羹羮羶羸譱翅翆翊翕翔翡翦翩翳翹飜耆耄耋耒耘耙耜耡耨耿耻聊聆聒聘聚聟聢聨聳聲聰聶聹聽聿肄肆肅肛肓肚肭冐肬胛胥胙胝胄胚胖脉胯胱脛脩脣脯腋'
      ],
      [
        'e7a1',
        '隋腆脾腓腑胼腱腮腥腦腴膃膈膊膀膂膠膕膤膣腟膓膩膰膵膾膸膽臀臂膺臉臍臑臙臘臈臚臟臠臧臺臻臾舁舂舅與舊舍舐舖舩舫舸舳艀艙艘艝艚艟艤艢艨艪艫舮艱艷艸艾芍芒芫芟芻芬苡苣苟苒苴苳苺莓范苻苹苞茆苜茉苙'
      ],
      [
        'e8a1',
        '茵茴茖茲茱荀茹荐荅茯茫茗茘莅莚莪莟莢莖茣莎莇莊荼莵荳荵莠莉莨菴萓菫菎菽萃菘萋菁菷萇菠菲萍萢萠莽萸蔆菻葭萪萼蕚蒄葷葫蒭葮蒂葩葆萬葯葹萵蓊葢蒹蒿蒟蓙蓍蒻蓚蓐蓁蓆蓖蒡蔡蓿蓴蔗蔘蔬蔟蔕蔔蓼蕀蕣蕘蕈'
      ],
      [
        'e9a1',
        '蕁蘂蕋蕕薀薤薈薑薊薨蕭薔薛藪薇薜蕷蕾薐藉薺藏薹藐藕藝藥藜藹蘊蘓蘋藾藺蘆蘢蘚蘰蘿虍乕虔號虧虱蚓蚣蚩蚪蚋蚌蚶蚯蛄蛆蚰蛉蠣蚫蛔蛞蛩蛬蛟蛛蛯蜒蜆蜈蜀蜃蛻蜑蜉蜍蛹蜊蜴蜿蜷蜻蜥蜩蜚蝠蝟蝸蝌蝎蝴蝗蝨蝮蝙'
      ],
      [
        'eaa1',
        '蝓蝣蝪蠅螢螟螂螯蟋螽蟀蟐雖螫蟄螳蟇蟆螻蟯蟲蟠蠏蠍蟾蟶蟷蠎蟒蠑蠖蠕蠢蠡蠱蠶蠹蠧蠻衄衂衒衙衞衢衫袁衾袞衵衽袵衲袂袗袒袮袙袢袍袤袰袿袱裃裄裔裘裙裝裹褂裼裴裨裲褄褌褊褓襃褞褥褪褫襁襄褻褶褸襌褝襠襞'
      ],
      [
        'eba1',
        '襦襤襭襪襯襴襷襾覃覈覊覓覘覡覩覦覬覯覲覺覽覿觀觚觜觝觧觴觸訃訖訐訌訛訝訥訶詁詛詒詆詈詼詭詬詢誅誂誄誨誡誑誥誦誚誣諄諍諂諚諫諳諧諤諱謔諠諢諷諞諛謌謇謚諡謖謐謗謠謳鞫謦謫謾謨譁譌譏譎證譖譛譚譫'
      ],
      [
        'eca1',
        '譟譬譯譴譽讀讌讎讒讓讖讙讚谺豁谿豈豌豎豐豕豢豬豸豺貂貉貅貊貍貎貔豼貘戝貭貪貽貲貳貮貶賈賁賤賣賚賽賺賻贄贅贊贇贏贍贐齎贓賍贔贖赧赭赱赳趁趙跂趾趺跏跚跖跌跛跋跪跫跟跣跼踈踉跿踝踞踐踟蹂踵踰踴蹊'
      ],
      [
        'eda1',
        '蹇蹉蹌蹐蹈蹙蹤蹠踪蹣蹕蹶蹲蹼躁躇躅躄躋躊躓躑躔躙躪躡躬躰軆躱躾軅軈軋軛軣軼軻軫軾輊輅輕輒輙輓輜輟輛輌輦輳輻輹轅轂輾轌轉轆轎轗轜轢轣轤辜辟辣辭辯辷迚迥迢迪迯邇迴逅迹迺逑逕逡逍逞逖逋逧逶逵逹迸'
      ],
      [
        'eea1',
        '遏遐遑遒逎遉逾遖遘遞遨遯遶隨遲邂遽邁邀邊邉邏邨邯邱邵郢郤扈郛鄂鄒鄙鄲鄰酊酖酘酣酥酩酳酲醋醉醂醢醫醯醪醵醴醺釀釁釉釋釐釖釟釡釛釼釵釶鈞釿鈔鈬鈕鈑鉞鉗鉅鉉鉤鉈銕鈿鉋鉐銜銖銓銛鉚鋏銹銷鋩錏鋺鍄錮'
      ],
      [
        'efa1',
        '錙錢錚錣錺錵錻鍜鍠鍼鍮鍖鎰鎬鎭鎔鎹鏖鏗鏨鏥鏘鏃鏝鏐鏈鏤鐚鐔鐓鐃鐇鐐鐶鐫鐵鐡鐺鑁鑒鑄鑛鑠鑢鑞鑪鈩鑰鑵鑷鑽鑚鑼鑾钁鑿閂閇閊閔閖閘閙閠閨閧閭閼閻閹閾闊濶闃闍闌闕闔闖關闡闥闢阡阨阮阯陂陌陏陋陷陜陞'
      ],
      [
        'f0a1',
        '陝陟陦陲陬隍隘隕隗險隧隱隲隰隴隶隸隹雎雋雉雍襍雜霍雕雹霄霆霈霓霎霑霏霖霙霤霪霰霹霽霾靄靆靈靂靉靜靠靤靦靨勒靫靱靹鞅靼鞁靺鞆鞋鞏鞐鞜鞨鞦鞣鞳鞴韃韆韈韋韜韭齏韲竟韶韵頏頌頸頤頡頷頽顆顏顋顫顯顰'
      ],
      [
        'f1a1',
        '顱顴顳颪颯颱颶飄飃飆飩飫餃餉餒餔餘餡餝餞餤餠餬餮餽餾饂饉饅饐饋饑饒饌饕馗馘馥馭馮馼駟駛駝駘駑駭駮駱駲駻駸騁騏騅駢騙騫騷驅驂驀驃騾驕驍驛驗驟驢驥驤驩驫驪骭骰骼髀髏髑髓體髞髟髢髣髦髯髫髮髴髱髷'
      ],
      [
        'f2a1',
        '髻鬆鬘鬚鬟鬢鬣鬥鬧鬨鬩鬪鬮鬯鬲魄魃魏魍魎魑魘魴鮓鮃鮑鮖鮗鮟鮠鮨鮴鯀鯊鮹鯆鯏鯑鯒鯣鯢鯤鯔鯡鰺鯲鯱鯰鰕鰔鰉鰓鰌鰆鰈鰒鰊鰄鰮鰛鰥鰤鰡鰰鱇鰲鱆鰾鱚鱠鱧鱶鱸鳧鳬鳰鴉鴈鳫鴃鴆鴪鴦鶯鴣鴟鵄鴕鴒鵁鴿鴾鵆鵈'
      ],
      [
        'f3a1',
        '鵝鵞鵤鵑鵐鵙鵲鶉鶇鶫鵯鵺鶚鶤鶩鶲鷄鷁鶻鶸鶺鷆鷏鷂鷙鷓鷸鷦鷭鷯鷽鸚鸛鸞鹵鹹鹽麁麈麋麌麒麕麑麝麥麩麸麪麭靡黌黎黏黐黔黜點黝黠黥黨黯黴黶黷黹黻黼黽鼇鼈皷鼕鼡鼬鼾齊齒齔齣齟齠齡齦齧齬齪齷齲齶龕龜龠'
      ],
      ['f4a1', '堯槇遙瑤凜熙'],
      [
        'f9a1',
        '纊褜鍈銈蓜俉炻昱棈鋹曻彅丨仡仼伀伃伹佖侒侊侚侔俍偀倢俿倞偆偰偂傔僴僘兊兤冝冾凬刕劜劦勀勛匀匇匤卲厓厲叝﨎咜咊咩哿喆坙坥垬埈埇﨏塚增墲夋奓奛奝奣妤妺孖寀甯寘寬尞岦岺峵崧嵓﨑嵂嵭嶸嶹巐弡弴彧德'
      ],
      [
        'faa1',
        '忞恝悅悊惞惕愠惲愑愷愰憘戓抦揵摠撝擎敎昀昕昻昉昮昞昤晥晗晙晴晳暙暠暲暿曺朎朗杦枻桒柀栁桄棏﨓楨﨔榘槢樰橫橆橳橾櫢櫤毖氿汜沆汯泚洄涇浯涖涬淏淸淲淼渹湜渧渼溿澈澵濵瀅瀇瀨炅炫焏焄煜煆煇凞燁燾犱'
      ],
      [
        'fba1',
        '犾猤猪獷玽珉珖珣珒琇珵琦琪琩琮瑢璉璟甁畯皂皜皞皛皦益睆劯砡硎硤硺礰礼神祥禔福禛竑竧靖竫箞精絈絜綷綠緖繒罇羡羽茁荢荿菇菶葈蒴蕓蕙蕫﨟薰蘒﨡蠇裵訒訷詹誧誾諟諸諶譓譿賰賴贒赶﨣軏﨤逸遧郞都鄕鄧釚'
      ],
      [
        'fca1',
        '釗釞釭釮釤釥鈆鈐鈊鈺鉀鈼鉎鉙鉑鈹鉧銧鉷鉸鋧鋗鋙鋐﨧鋕鋠鋓錥錡鋻﨨錞鋿錝錂鍰鍗鎤鏆鏞鏸鐱鑅鑈閒隆﨩隝隯霳霻靃靍靏靑靕顗顥飯飼餧館馞驎髙髜魵魲鮏鮱鮻鰀鵰鵫鶴鸙黑'
      ],
      ['fcf1', 'ⅰ', 9, '￢￤＇＂'],
      ['8fa2af', '˘ˇ¸˙˝¯˛˚～΄΅'],
      ['8fa2c2', '¡¦¿'],
      ['8fa2eb', 'ºª©®™¤№'],
      ['8fa6e1', 'ΆΈΉΊΪ'],
      ['8fa6e7', 'Ό'],
      ['8fa6e9', 'ΎΫ'],
      ['8fa6ec', 'Ώ'],
      ['8fa6f1', 'άέήίϊΐόςύϋΰώ'],
      ['8fa7c2', 'Ђ', 10, 'ЎЏ'],
      ['8fa7f2', 'ђ', 10, 'ўџ'],
      ['8fa9a1', 'ÆĐ'],
      ['8fa9a4', 'Ħ'],
      ['8fa9a6', 'Ĳ'],
      ['8fa9a8', 'ŁĿ'],
      ['8fa9ab', 'ŊØŒ'],
      ['8fa9af', 'ŦÞ'],
      ['8fa9c1', 'æđðħıĳĸłŀŉŋøœßŧþ'],
      ['8faaa1', 'ÁÀÄÂĂǍĀĄÅÃĆĈČÇĊĎÉÈËÊĚĖĒĘ'],
      [
        '8faaba',
        'ĜĞĢĠĤÍÌÏÎǏİĪĮĨĴĶĹĽĻŃŇŅÑÓÒÖÔǑŐŌÕŔŘŖŚŜŠŞŤŢÚÙÜÛŬǓŰŪŲŮŨǗǛǙǕŴÝŸŶŹŽŻ'
      ],
      ['8faba1', 'áàäâăǎāąåãćĉčçċďéèëêěėēęǵĝğ'],
      ['8fabbd', 'ġĥíìïîǐ'],
      ['8fabc5', 'īįĩĵķĺľļńňņñóòöôǒőōõŕřŗśŝšşťţúùüûŭǔűūųůũǘǜǚǖŵýÿŷźžż'],
      [
        '8fb0a1',
        '丂丄丅丌丒丟丣两丨丫丮丯丰丵乀乁乄乇乑乚乜乣乨乩乴乵乹乿亍亖亗亝亯亹仃仐仚仛仠仡仢仨仯仱仳仵份仾仿伀伂伃伈伋伌伒伕伖众伙伮伱你伳伵伷伹伻伾佀佂佈佉佋佌佒佔佖佘佟佣佪佬佮佱佷佸佹佺佽佾侁侂侄'
      ],
      [
        '8fb1a1',
        '侅侉侊侌侎侐侒侓侔侗侙侚侞侟侲侷侹侻侼侽侾俀俁俅俆俈俉俋俌俍俏俒俜俠俢俰俲俼俽俿倀倁倄倇倊倌倎倐倓倗倘倛倜倝倞倢倧倮倰倲倳倵偀偁偂偅偆偊偌偎偑偒偓偗偙偟偠偢偣偦偧偪偭偰偱倻傁傃傄傆傊傎傏傐'
      ],
      [
        '8fb2a1',
        '傒傓傔傖傛傜傞',
        4,
        '傪傯傰傹傺傽僀僃僄僇僌僎僐僓僔僘僜僝僟僢僤僦僨僩僯僱僶僺僾儃儆儇儈儋儌儍儎僲儐儗儙儛儜儝儞儣儧儨儬儭儯儱儳儴儵儸儹兂兊兏兓兕兗兘兟兤兦兾冃冄冋冎冘冝冡冣冭冸冺冼冾冿凂'
      ],
      [
        '8fb3a1',
        '凈减凑凒凓凕凘凞凢凥凮凲凳凴凷刁刂刅划刓刕刖刘刢刨刱刲刵刼剅剉剕剗剘剚剜剟剠剡剦剮剷剸剹劀劂劅劊劌劓劕劖劗劘劚劜劤劥劦劧劯劰劶劷劸劺劻劽勀勄勆勈勌勏勑勔勖勛勜勡勥勨勩勪勬勰勱勴勶勷匀匃匊匋'
      ],
      [
        '8fb4a1',
        '匌匑匓匘匛匜匞匟匥匧匨匩匫匬匭匰匲匵匼匽匾卂卌卋卙卛卡卣卥卬卭卲卹卾厃厇厈厎厓厔厙厝厡厤厪厫厯厲厴厵厷厸厺厽叀叅叏叒叓叕叚叝叞叠另叧叵吂吓吚吡吧吨吪启吱吴吵呃呄呇呍呏呞呢呤呦呧呩呫呭呮呴呿'
      ],
      [
        '8fb5a1',
        '咁咃咅咈咉咍咑咕咖咜咟咡咦咧咩咪咭咮咱咷咹咺咻咿哆哊响哎哠哪哬哯哶哼哾哿唀唁唅唈唉唌唍唎唕唪唫唲唵唶唻唼唽啁啇啉啊啍啐啑啘啚啛啞啠啡啤啦啿喁喂喆喈喎喏喑喒喓喔喗喣喤喭喲喿嗁嗃嗆嗉嗋嗌嗎嗑嗒'
      ],
      [
        '8fb6a1',
        '嗓嗗嗘嗛嗞嗢嗩嗶嗿嘅嘈嘊嘍',
        5,
        '嘙嘬嘰嘳嘵嘷嘹嘻嘼嘽嘿噀噁噃噄噆噉噋噍噏噔噞噠噡噢噣噦噩噭噯噱噲噵嚄嚅嚈嚋嚌嚕嚙嚚嚝嚞嚟嚦嚧嚨嚩嚫嚬嚭嚱嚳嚷嚾囅囉囊囋囏囐囌囍囙囜囝囟囡囤',
        4,
        '囱囫园'
      ],
      [
        '8fb7a1',
        '囶囷圁圂圇圊圌圑圕圚圛圝圠圢圣圤圥圩圪圬圮圯圳圴圽圾圿坅坆坌坍坒坢坥坧坨坫坭',
        4,
        '坳坴坵坷坹坺坻坼坾垁垃垌垔垗垙垚垜垝垞垟垡垕垧垨垩垬垸垽埇埈埌埏埕埝埞埤埦埧埩埭埰埵埶埸埽埾埿堃堄堈堉埡'
      ],
      [
        '8fb8a1',
        '堌堍堛堞堟堠堦堧堭堲堹堿塉塌塍塏塐塕塟塡塤塧塨塸塼塿墀墁墇墈墉墊墌墍墏墐墔墖墝墠墡墢墦墩墱墲壄墼壂壈壍壎壐壒壔壖壚壝壡壢壩壳夅夆夋夌夒夓夔虁夝夡夣夤夨夯夰夳夵夶夿奃奆奒奓奙奛奝奞奟奡奣奫奭'
      ],
      [
        '8fb9a1',
        '奯奲奵奶她奻奼妋妌妎妒妕妗妟妤妧妭妮妯妰妳妷妺妼姁姃姄姈姊姍姒姝姞姟姣姤姧姮姯姱姲姴姷娀娄娌娍娎娒娓娞娣娤娧娨娪娭娰婄婅婇婈婌婐婕婞婣婥婧婭婷婺婻婾媋媐媓媖媙媜媞媟媠媢媧媬媱媲媳媵媸媺媻媿'
      ],
      [
        '8fbaa1',
        '嫄嫆嫈嫏嫚嫜嫠嫥嫪嫮嫵嫶嫽嬀嬁嬈嬗嬴嬙嬛嬝嬡嬥嬭嬸孁孋孌孒孖孞孨孮孯孼孽孾孿宁宄宆宊宎宐宑宓宔宖宨宩宬宭宯宱宲宷宺宼寀寁寍寏寖',
        4,
        '寠寯寱寴寽尌尗尞尟尣尦尩尫尬尮尰尲尵尶屙屚屜屢屣屧屨屩'
      ],
      [
        '8fbba1',
        '屭屰屴屵屺屻屼屽岇岈岊岏岒岝岟岠岢岣岦岪岲岴岵岺峉峋峒峝峗峮峱峲峴崁崆崍崒崫崣崤崦崧崱崴崹崽崿嵂嵃嵆嵈嵕嵑嵙嵊嵟嵠嵡嵢嵤嵪嵭嵰嵹嵺嵾嵿嶁嶃嶈嶊嶒嶓嶔嶕嶙嶛嶟嶠嶧嶫嶰嶴嶸嶹巃巇巋巐巎巘巙巠巤'
      ],
      [
        '8fbca1',
        '巩巸巹帀帇帍帒帔帕帘帟帠帮帨帲帵帾幋幐幉幑幖幘幛幜幞幨幪',
        4,
        '幰庀庋庎庢庤庥庨庪庬庱庳庽庾庿廆廌廋廎廑廒廔廕廜廞廥廫异弆弇弈弎弙弜弝弡弢弣弤弨弫弬弮弰弴弶弻弽弿彀彄彅彇彍彐彔彘彛彠彣彤彧'
      ],
      [
        '8fbda1',
        '彯彲彴彵彸彺彽彾徉徍徏徖徜徝徢徧徫徤徬徯徰徱徸忄忇忈忉忋忐',
        4,
        '忞忡忢忨忩忪忬忭忮忯忲忳忶忺忼怇怊怍怓怔怗怘怚怟怤怭怳怵恀恇恈恉恌恑恔恖恗恝恡恧恱恾恿悂悆悈悊悎悑悓悕悘悝悞悢悤悥您悰悱悷'
      ],
      [
        '8fbea1',
        '悻悾惂惄惈惉惊惋惎惏惔惕惙惛惝惞惢惥惲惵惸惼惽愂愇愊愌愐',
        4,
        '愖愗愙愜愞愢愪愫愰愱愵愶愷愹慁慅慆慉慞慠慬慲慸慻慼慿憀憁憃憄憋憍憒憓憗憘憜憝憟憠憥憨憪憭憸憹憼懀懁懂懎懏懕懜懝懞懟懡懢懧懩懥'
      ],
      [
        '8fbfa1',
        '懬懭懯戁戃戄戇戓戕戜戠戢戣戧戩戫戹戽扂扃扄扆扌扐扑扒扔扖扚扜扤扭扯扳扺扽抍抎抏抐抦抨抳抶抷抺抾抿拄拎拕拖拚拪拲拴拼拽挃挄挊挋挍挐挓挖挘挩挪挭挵挶挹挼捁捂捃捄捆捊捋捎捒捓捔捘捛捥捦捬捭捱捴捵'
      ],
      [
        '8fc0a1',
        '捸捼捽捿掂掄掇掊掐掔掕掙掚掞掤掦掭掮掯掽揁揅揈揎揑揓揔揕揜揠揥揪揬揲揳揵揸揹搉搊搐搒搔搘搞搠搢搤搥搩搪搯搰搵搽搿摋摏摑摒摓摔摚摛摜摝摟摠摡摣摭摳摴摻摽撅撇撏撐撑撘撙撛撝撟撡撣撦撨撬撳撽撾撿'
      ],
      [
        '8fc1a1',
        '擄擉擊擋擌擎擐擑擕擗擤擥擩擪擭擰擵擷擻擿攁攄攈攉攊攏攓攔攖攙攛攞攟攢攦攩攮攱攺攼攽敃敇敉敐敒敔敟敠敧敫敺敽斁斅斊斒斕斘斝斠斣斦斮斲斳斴斿旂旈旉旎旐旔旖旘旟旰旲旴旵旹旾旿昀昄昈昉昍昑昒昕昖昝'
      ],
      [
        '8fc2a1',
        '昞昡昢昣昤昦昩昪昫昬昮昰昱昳昹昷晀晅晆晊晌晑晎晗晘晙晛晜晠晡曻晪晫晬晾晳晵晿晷晸晹晻暀晼暋暌暍暐暒暙暚暛暜暟暠暤暭暱暲暵暻暿曀曂曃曈曌曎曏曔曛曟曨曫曬曮曺朅朇朎朓朙朜朠朢朳朾杅杇杈杌杔杕杝'
      ],
      [
        '8fc3a1',
        '杦杬杮杴杶杻极构枎枏枑枓枖枘枙枛枰枱枲枵枻枼枽柹柀柂柃柅柈柉柒柗柙柜柡柦柰柲柶柷桒栔栙栝栟栨栧栬栭栯栰栱栳栻栿桄桅桊桌桕桗桘桛桫桮',
        4,
        '桵桹桺桻桼梂梄梆梈梖梘梚梜梡梣梥梩梪梮梲梻棅棈棌棏'
      ],
      [
        '8fc4a1',
        '棐棑棓棖棙棜棝棥棨棪棫棬棭棰棱棵棶棻棼棽椆椉椊椐椑椓椖椗椱椳椵椸椻楂楅楉楎楗楛楣楤楥楦楨楩楬楰楱楲楺楻楿榀榍榒榖榘榡榥榦榨榫榭榯榷榸榺榼槅槈槑槖槗槢槥槮槯槱槳槵槾樀樁樃樏樑樕樚樝樠樤樨樰樲'
      ],
      [
        '8fc5a1',
        '樴樷樻樾樿橅橆橉橊橎橐橑橒橕橖橛橤橧橪橱橳橾檁檃檆檇檉檋檑檛檝檞檟檥檫檯檰檱檴檽檾檿櫆櫉櫈櫌櫐櫔櫕櫖櫜櫝櫤櫧櫬櫰櫱櫲櫼櫽欂欃欆欇欉欏欐欑欗欛欞欤欨欫欬欯欵欶欻欿歆歊歍歒歖歘歝歠歧歫歮歰歵歽'
      ],
      [
        '8fc6a1',
        '歾殂殅殗殛殟殠殢殣殨殩殬殭殮殰殸殹殽殾毃毄毉毌毖毚毡毣毦毧毮毱毷毹毿氂氄氅氉氍氎氐氒氙氟氦氧氨氬氮氳氵氶氺氻氿汊汋汍汏汒汔汙汛汜汫汭汯汴汶汸汹汻沅沆沇沉沔沕沗沘沜沟沰沲沴泂泆泍泏泐泑泒泔泖'
      ],
      [
        '8fc7a1',
        '泚泜泠泧泩泫泬泮泲泴洄洇洊洎洏洑洓洚洦洧洨汧洮洯洱洹洼洿浗浞浟浡浥浧浯浰浼涂涇涑涒涔涖涗涘涪涬涴涷涹涽涿淄淈淊淎淏淖淛淝淟淠淢淥淩淯淰淴淶淼渀渄渞渢渧渲渶渹渻渼湄湅湈湉湋湏湑湒湓湔湗湜湝湞'
      ],
      [
        '8fc8a1',
        '湢湣湨湳湻湽溍溓溙溠溧溭溮溱溳溻溿滀滁滃滇滈滊滍滎滏滫滭滮滹滻滽漄漈漊漌漍漖漘漚漛漦漩漪漯漰漳漶漻漼漭潏潑潒潓潗潙潚潝潞潡潢潨潬潽潾澃澇澈澋澌澍澐澒澓澔澖澚澟澠澥澦澧澨澮澯澰澵澶澼濅濇濈濊'
      ],
      [
        '8fc9a1',
        '濚濞濨濩濰濵濹濼濽瀀瀅瀆瀇瀍瀗瀠瀣瀯瀴瀷瀹瀼灃灄灈灉灊灋灔灕灝灞灎灤灥灬灮灵灶灾炁炅炆炔',
        4,
        '炛炤炫炰炱炴炷烊烑烓烔烕烖烘烜烤烺焃',
        4,
        '焋焌焏焞焠焫焭焯焰焱焸煁煅煆煇煊煋煐煒煗煚煜煞煠'
      ],
      [
        '8fcaa1',
        '煨煹熀熅熇熌熒熚熛熠熢熯熰熲熳熺熿燀燁燄燋燌燓燖燙燚燜燸燾爀爇爈爉爓爗爚爝爟爤爫爯爴爸爹牁牂牃牅牎牏牐牓牕牖牚牜牞牠牣牨牫牮牯牱牷牸牻牼牿犄犉犍犎犓犛犨犭犮犱犴犾狁狇狉狌狕狖狘狟狥狳狴狺狻'
      ],
      [
        '8fcba1',
        '狾猂猄猅猇猋猍猒猓猘猙猞猢猤猧猨猬猱猲猵猺猻猽獃獍獐獒獖獘獝獞獟獠獦獧獩獫獬獮獯獱獷獹獼玀玁玃玅玆玎玐玓玕玗玘玜玞玟玠玢玥玦玪玫玭玵玷玹玼玽玿珅珆珉珋珌珏珒珓珖珙珝珡珣珦珧珩珴珵珷珹珺珻珽'
      ],
      [
        '8fcca1',
        '珿琀琁琄琇琊琑琚琛琤琦琨',
        9,
        '琹瑀瑃瑄瑆瑇瑋瑍瑑瑒瑗瑝瑢瑦瑧瑨瑫瑭瑮瑱瑲璀璁璅璆璇璉璏璐璑璒璘璙璚璜璟璠璡璣璦璨璩璪璫璮璯璱璲璵璹璻璿瓈瓉瓌瓐瓓瓘瓚瓛瓞瓟瓤瓨瓪瓫瓯瓴瓺瓻瓼瓿甆'
      ],
      [
        '8fcda1',
        '甒甖甗甠甡甤甧甩甪甯甶甹甽甾甿畀畃畇畈畎畐畒畗畞畟畡畯畱畹',
        5,
        '疁疅疐疒疓疕疙疜疢疤疴疺疿痀痁痄痆痌痎痏痗痜痟痠痡痤痧痬痮痯痱痹瘀瘂瘃瘄瘇瘈瘊瘌瘏瘒瘓瘕瘖瘙瘛瘜瘝瘞瘣瘥瘦瘩瘭瘲瘳瘵瘸瘹'
      ],
      [
        '8fcea1',
        '瘺瘼癊癀癁癃癄癅癉癋癕癙癟癤癥癭癮癯癱癴皁皅皌皍皕皛皜皝皟皠皢',
        6,
        '皪皭皽盁盅盉盋盌盎盔盙盠盦盨盬盰盱盶盹盼眀眆眊眎眒眔眕眗眙眚眜眢眨眭眮眯眴眵眶眹眽眾睂睅睆睊睍睎睏睒睖睗睜睞睟睠睢'
      ],
      [
        '8fcfa1',
        '睤睧睪睬睰睲睳睴睺睽瞀瞄瞌瞍瞔瞕瞖瞚瞟瞢瞧瞪瞮瞯瞱瞵瞾矃矉矑矒矕矙矞矟矠矤矦矪矬矰矱矴矸矻砅砆砉砍砎砑砝砡砢砣砭砮砰砵砷硃硄硇硈硌硎硒硜硞硠硡硣硤硨硪确硺硾碊碏碔碘碡碝碞碟碤碨碬碭碰碱碲碳'
      ],
      [
        '8fd0a1',
        '碻碽碿磇磈磉磌磎磒磓磕磖磤磛磟磠磡磦磪磲磳礀磶磷磺磻磿礆礌礐礚礜礞礟礠礥礧礩礭礱礴礵礻礽礿祄祅祆祊祋祏祑祔祘祛祜祧祩祫祲祹祻祼祾禋禌禑禓禔禕禖禘禛禜禡禨禩禫禯禱禴禸离秂秄秇秈秊秏秔秖秚秝秞'
      ],
      [
        '8fd1a1',
        '秠秢秥秪秫秭秱秸秼稂稃稇稉稊稌稑稕稛稞稡稧稫稭稯稰稴稵稸稹稺穄穅穇穈穌穕穖穙穜穝穟穠穥穧穪穭穵穸穾窀窂窅窆窊窋窐窑窔窞窠窣窬窳窵窹窻窼竆竉竌竎竑竛竨竩竫竬竱竴竻竽竾笇笔笟笣笧笩笪笫笭笮笯笰'
      ],
      [
        '8fd2a1',
        '笱笴笽笿筀筁筇筎筕筠筤筦筩筪筭筯筲筳筷箄箉箎箐箑箖箛箞箠箥箬箯箰箲箵箶箺箻箼箽篂篅篈篊篔篖篗篙篚篛篨篪篲篴篵篸篹篺篼篾簁簂簃簄簆簉簋簌簎簏簙簛簠簥簦簨簬簱簳簴簶簹簺籆籊籕籑籒籓籙',
        5
      ],
      [
        '8fd3a1',
        '籡籣籧籩籭籮籰籲籹籼籽粆粇粏粔粞粠粦粰粶粷粺粻粼粿糄糇糈糉糍糏糓糔糕糗糙糚糝糦糩糫糵紃紇紈紉紏紑紒紓紖紝紞紣紦紪紭紱紼紽紾絀絁絇絈絍絑絓絗絙絚絜絝絥絧絪絰絸絺絻絿綁綂綃綅綆綈綋綌綍綑綖綗綝'
      ],
      [
        '8fd4a1',
        '綞綦綧綪綳綶綷綹緂',
        4,
        '緌緍緎緗緙縀緢緥緦緪緫緭緱緵緶緹緺縈縐縑縕縗縜縝縠縧縨縬縭縯縳縶縿繄繅繇繎繐繒繘繟繡繢繥繫繮繯繳繸繾纁纆纇纊纍纑纕纘纚纝纞缼缻缽缾缿罃罄罇罏罒罓罛罜罝罡罣罤罥罦罭'
      ],
      [
        '8fd5a1',
        '罱罽罾罿羀羋羍羏羐羑羖羗羜羡羢羦羪羭羴羼羿翀翃翈翎翏翛翟翣翥翨翬翮翯翲翺翽翾翿耇耈耊耍耎耏耑耓耔耖耝耞耟耠耤耦耬耮耰耴耵耷耹耺耼耾聀聄聠聤聦聭聱聵肁肈肎肜肞肦肧肫肸肹胈胍胏胒胔胕胗胘胠胭胮'
      ],
      [
        '8fd6a1',
        '胰胲胳胶胹胺胾脃脋脖脗脘脜脞脠脤脧脬脰脵脺脼腅腇腊腌腒腗腠腡腧腨腩腭腯腷膁膐膄膅膆膋膎膖膘膛膞膢膮膲膴膻臋臃臅臊臎臏臕臗臛臝臞臡臤臫臬臰臱臲臵臶臸臹臽臿舀舃舏舓舔舙舚舝舡舢舨舲舴舺艃艄艅艆'
      ],
      [
        '8fd7a1',
        '艋艎艏艑艖艜艠艣艧艭艴艻艽艿芀芁芃芄芇芉芊芎芑芔芖芘芚芛芠芡芣芤芧芨芩芪芮芰芲芴芷芺芼芾芿苆苐苕苚苠苢苤苨苪苭苯苶苷苽苾茀茁茇茈茊茋荔茛茝茞茟茡茢茬茭茮茰茳茷茺茼茽荂荃荄荇荍荎荑荕荖荗荰荸'
      ],
      [
        '8fd8a1',
        '荽荿莀莂莄莆莍莒莔莕莘莙莛莜莝莦莧莩莬莾莿菀菇菉菏菐菑菔菝荓菨菪菶菸菹菼萁萆萊萏萑萕萙莭萯萹葅葇葈葊葍葏葑葒葖葘葙葚葜葠葤葥葧葪葰葳葴葶葸葼葽蒁蒅蒒蒓蒕蒞蒦蒨蒩蒪蒯蒱蒴蒺蒽蒾蓀蓂蓇蓈蓌蓏蓓'
      ],
      [
        '8fd9a1',
        '蓜蓧蓪蓯蓰蓱蓲蓷蔲蓺蓻蓽蔂蔃蔇蔌蔎蔐蔜蔞蔢蔣蔤蔥蔧蔪蔫蔯蔳蔴蔶蔿蕆蕏',
        4,
        '蕖蕙蕜',
        6,
        '蕤蕫蕯蕹蕺蕻蕽蕿薁薅薆薉薋薌薏薓薘薝薟薠薢薥薧薴薶薷薸薼薽薾薿藂藇藊藋藎薭藘藚藟藠藦藨藭藳藶藼'
      ],
      [
        '8fdaa1',
        '藿蘀蘄蘅蘍蘎蘐蘑蘒蘘蘙蘛蘞蘡蘧蘩蘶蘸蘺蘼蘽虀虂虆虒虓虖虗虘虙虝虠',
        4,
        '虩虬虯虵虶虷虺蚍蚑蚖蚘蚚蚜蚡蚦蚧蚨蚭蚱蚳蚴蚵蚷蚸蚹蚿蛀蛁蛃蛅蛑蛒蛕蛗蛚蛜蛠蛣蛥蛧蚈蛺蛼蛽蜄蜅蜇蜋蜎蜏蜐蜓蜔蜙蜞蜟蜡蜣'
      ],
      [
        '8fdba1',
        '蜨蜮蜯蜱蜲蜹蜺蜼蜽蜾蝀蝃蝅蝍蝘蝝蝡蝤蝥蝯蝱蝲蝻螃',
        6,
        '螋螌螐螓螕螗螘螙螞螠螣螧螬螭螮螱螵螾螿蟁蟈蟉蟊蟎蟕蟖蟙蟚蟜蟟蟢蟣蟤蟪蟫蟭蟱蟳蟸蟺蟿蠁蠃蠆蠉蠊蠋蠐蠙蠒蠓蠔蠘蠚蠛蠜蠞蠟蠨蠭蠮蠰蠲蠵'
      ],
      [
        '8fdca1',
        '蠺蠼衁衃衅衈衉衊衋衎衑衕衖衘衚衜衟衠衤衩衱衹衻袀袘袚袛袜袟袠袨袪袺袽袾裀裊',
        4,
        '裑裒裓裛裞裧裯裰裱裵裷褁褆褍褎褏褕褖褘褙褚褜褠褦褧褨褰褱褲褵褹褺褾襀襂襅襆襉襏襒襗襚襛襜襡襢襣襫襮襰襳襵襺'
      ],
      [
        '8fdda1',
        '襻襼襽覉覍覐覔覕覛覜覟覠覥覰覴覵覶覷覼觔',
        4,
        '觥觩觫觭觱觳觶觹觽觿訄訅訇訏訑訒訔訕訞訠訢訤訦訫訬訯訵訷訽訾詀詃詅詇詉詍詎詓詖詗詘詜詝詡詥詧詵詶詷詹詺詻詾詿誀誃誆誋誏誐誒誖誗誙誟誧誩誮誯誳'
      ],
      [
        '8fdea1',
        '誶誷誻誾諃諆諈諉諊諑諓諔諕諗諝諟諬諰諴諵諶諼諿謅謆謋謑謜謞謟謊謭謰謷謼譂',
        4,
        '譈譒譓譔譙譍譞譣譭譶譸譹譼譾讁讄讅讋讍讏讔讕讜讞讟谸谹谽谾豅豇豉豋豏豑豓豔豗豘豛豝豙豣豤豦豨豩豭豳豵豶豻豾貆'
      ],
      [
        '8fdfa1',
        '貇貋貐貒貓貙貛貜貤貹貺賅賆賉賋賏賖賕賙賝賡賨賬賯賰賲賵賷賸賾賿贁贃贉贒贗贛赥赩赬赮赿趂趄趈趍趐趑趕趞趟趠趦趫趬趯趲趵趷趹趻跀跅跆跇跈跊跎跑跔跕跗跙跤跥跧跬跰趼跱跲跴跽踁踄踅踆踋踑踔踖踠踡踢'
      ],
      [
        '8fe0a1',
        '踣踦踧踱踳踶踷踸踹踽蹀蹁蹋蹍蹎蹏蹔蹛蹜蹝蹞蹡蹢蹩蹬蹭蹯蹰蹱蹹蹺蹻躂躃躉躐躒躕躚躛躝躞躢躧躩躭躮躳躵躺躻軀軁軃軄軇軏軑軔軜軨軮軰軱軷軹軺軭輀輂輇輈輏輐輖輗輘輞輠輡輣輥輧輨輬輭輮輴輵輶輷輺轀轁'
      ],
      [
        '8fe1a1',
        '轃轇轏轑',
        4,
        '轘轝轞轥辝辠辡辤辥辦辵辶辸达迀迁迆迊迋迍运迒迓迕迠迣迤迨迮迱迵迶迻迾适逄逈逌逘逛逨逩逯逪逬逭逳逴逷逿遃遄遌遛遝遢遦遧遬遰遴遹邅邈邋邌邎邐邕邗邘邙邛邠邡邢邥邰邲邳邴邶邽郌邾郃'
      ],
      [
        '8fe2a1',
        '郄郅郇郈郕郗郘郙郜郝郟郥郒郶郫郯郰郴郾郿鄀鄄鄅鄆鄈鄍鄐鄔鄖鄗鄘鄚鄜鄞鄠鄥鄢鄣鄧鄩鄮鄯鄱鄴鄶鄷鄹鄺鄼鄽酃酇酈酏酓酗酙酚酛酡酤酧酭酴酹酺酻醁醃醅醆醊醎醑醓醔醕醘醞醡醦醨醬醭醮醰醱醲醳醶醻醼醽醿'
      ],
      [
        '8fe3a1',
        '釂釃釅釓釔釗釙釚釞釤釥釩釪釬',
        5,
        '釷釹釻釽鈀鈁鈄鈅鈆鈇鈉鈊鈌鈐鈒鈓鈖鈘鈜鈝鈣鈤鈥鈦鈨鈮鈯鈰鈳鈵鈶鈸鈹鈺鈼鈾鉀鉂鉃鉆鉇鉊鉍鉎鉏鉑鉘鉙鉜鉝鉠鉡鉥鉧鉨鉩鉮鉯鉰鉵',
        4,
        '鉻鉼鉽鉿銈銉銊銍銎銒銗'
      ],
      [
        '8fe4a1',
        '銙銟銠銤銥銧銨銫銯銲銶銸銺銻銼銽銿',
        4,
        '鋅鋆鋇鋈鋋鋌鋍鋎鋐鋓鋕鋗鋘鋙鋜鋝鋟鋠鋡鋣鋥鋧鋨鋬鋮鋰鋹鋻鋿錀錂錈錍錑錔錕錜錝錞錟錡錤錥錧錩錪錳錴錶錷鍇鍈鍉鍐鍑鍒鍕鍗鍘鍚鍞鍤鍥鍧鍩鍪鍭鍯鍰鍱鍳鍴鍶'
      ],
      [
        '8fe5a1',
        '鍺鍽鍿鎀鎁鎂鎈鎊鎋鎍鎏鎒鎕鎘鎛鎞鎡鎣鎤鎦鎨鎫鎴鎵鎶鎺鎩鏁鏄鏅鏆鏇鏉',
        4,
        '鏓鏙鏜鏞鏟鏢鏦鏧鏹鏷鏸鏺鏻鏽鐁鐂鐄鐈鐉鐍鐎鐏鐕鐖鐗鐟鐮鐯鐱鐲鐳鐴鐻鐿鐽鑃鑅鑈鑊鑌鑕鑙鑜鑟鑡鑣鑨鑫鑭鑮鑯鑱鑲钄钃镸镹'
      ],
      [
        '8fe6a1',
        '镾閄閈閌閍閎閝閞閟閡閦閩閫閬閴閶閺閽閿闆闈闉闋闐闑闒闓闙闚闝闞闟闠闤闦阝阞阢阤阥阦阬阱阳阷阸阹阺阼阽陁陒陔陖陗陘陡陮陴陻陼陾陿隁隂隃隄隉隑隖隚隝隟隤隥隦隩隮隯隳隺雊雒嶲雘雚雝雞雟雩雯雱雺霂'
      ],
      [
        '8fe7a1',
        '霃霅霉霚霛霝霡霢霣霨霱霳靁靃靊靎靏靕靗靘靚靛靣靧靪靮靳靶靷靸靻靽靿鞀鞉鞕鞖鞗鞙鞚鞞鞟鞢鞬鞮鞱鞲鞵鞶鞸鞹鞺鞼鞾鞿韁韄韅韇韉韊韌韍韎韐韑韔韗韘韙韝韞韠韛韡韤韯韱韴韷韸韺頇頊頙頍頎頔頖頜頞頠頣頦'
      ],
      [
        '8fe8a1',
        '頫頮頯頰頲頳頵頥頾顄顇顊顑顒顓顖顗顙顚顢顣顥顦顪顬颫颭颮颰颴颷颸颺颻颿飂飅飈飌飡飣飥飦飧飪飳飶餂餇餈餑餕餖餗餚餛餜餟餢餦餧餫餱',
        4,
        '餹餺餻餼饀饁饆饇饈饍饎饔饘饙饛饜饞饟饠馛馝馟馦馰馱馲馵'
      ],
      [
        '8fe9a1',
        '馹馺馽馿駃駉駓駔駙駚駜駞駧駪駫駬駰駴駵駹駽駾騂騃騄騋騌騐騑騖騞騠騢騣騤騧騭騮騳騵騶騸驇驁驄驊驋驌驎驑驔驖驝骪骬骮骯骲骴骵骶骹骻骾骿髁髃髆髈髎髐髒髕髖髗髛髜髠髤髥髧髩髬髲髳髵髹髺髽髿',
        4
      ],
      [
        '8feaa1',
        '鬄鬅鬈鬉鬋鬌鬍鬎鬐鬒鬖鬙鬛鬜鬠鬦鬫鬭鬳鬴鬵鬷鬹鬺鬽魈魋魌魕魖魗魛魞魡魣魥魦魨魪',
        4,
        '魳魵魷魸魹魿鮀鮄鮅鮆鮇鮉鮊鮋鮍鮏鮐鮔鮚鮝鮞鮦鮧鮩鮬鮰鮱鮲鮷鮸鮻鮼鮾鮿鯁鯇鯈鯎鯐鯗鯘鯝鯟鯥鯧鯪鯫鯯鯳鯷鯸'
      ],
      [
        '8feba1',
        '鯹鯺鯽鯿鰀鰂鰋鰏鰑鰖鰘鰙鰚鰜鰞鰢鰣鰦',
        4,
        '鰱鰵鰶鰷鰽鱁鱃鱄鱅鱉鱊鱎鱏鱐鱓鱔鱖鱘鱛鱝鱞鱟鱣鱩鱪鱜鱫鱨鱮鱰鱲鱵鱷鱻鳦鳲鳷鳹鴋鴂鴑鴗鴘鴜鴝鴞鴯鴰鴲鴳鴴鴺鴼鵅鴽鵂鵃鵇鵊鵓鵔鵟鵣鵢鵥鵩鵪鵫鵰鵶鵷鵻'
      ],
      [
        '8feca1',
        '鵼鵾鶃鶄鶆鶊鶍鶎鶒鶓鶕鶖鶗鶘鶡鶪鶬鶮鶱鶵鶹鶼鶿鷃鷇鷉鷊鷔鷕鷖鷗鷚鷞鷟鷠鷥鷧鷩鷫鷮鷰鷳鷴鷾鸊鸂鸇鸎鸐鸑鸒鸕鸖鸙鸜鸝鹺鹻鹼麀麂麃麄麅麇麎麏麖麘麛麞麤麨麬麮麯麰麳麴麵黆黈黋黕黟黤黧黬黭黮黰黱黲黵'
      ],
      [
        '8feda1',
        '黸黿鼂鼃鼉鼏鼐鼑鼒鼔鼖鼗鼙鼚鼛鼟鼢鼦鼪鼫鼯鼱鼲鼴鼷鼹鼺鼼鼽鼿齁齃',
        4,
        '齓齕齖齗齘齚齝齞齨齩齭',
        4,
        '齳齵齺齽龏龐龑龒龔龖龗龞龡龢龣龥'
      ]
    ]
  }),
  Wc = Object.freeze({
    __proto__: null,
    default: [
      ['0', '\0', 127, '€'],
      [
        '8140',
        '丂丄丅丆丏丒丗丟丠両丣並丩丮丯丱丳丵丷丼乀乁乂乄乆乊乑乕乗乚乛乢乣乤乥乧乨乪',
        5,
        '乲乴',
        9,
        '乿',
        6,
        '亇亊'
      ],
      [
        '8180',
        '亐亖亗亙亜亝亞亣亪亯亰亱亴亶亷亸亹亼亽亾仈仌仏仐仒仚仛仜仠仢仦仧仩仭仮仯仱仴仸仹仺仼仾伀伂',
        6,
        '伋伌伒',
        4,
        '伜伝伡伣伨伩伬伭伮伱伳伵伷伹伻伾',
        4,
        '佄佅佇',
        5,
        '佒佔佖佡佢佦佨佪佫佭佮佱佲併佷佸佹佺佽侀侁侂侅來侇侊侌侎侐侒侓侕侖侘侙侚侜侞侟価侢'
      ],
      [
        '8240',
        '侤侫侭侰',
        4,
        '侶',
        8,
        '俀俁係俆俇俈俉俋俌俍俒',
        4,
        '俙俛俠俢俤俥俧俫俬俰俲俴俵俶俷俹俻俼俽俿',
        11
      ],
      [
        '8280',
        '個倎倐們倓倕倖倗倛倝倞倠倢倣値倧倫倯',
        10,
        '倻倽倿偀偁偂偄偅偆偉偊偋偍偐',
        4,
        '偖偗偘偙偛偝',
        7,
        '偦',
        5,
        '偭',
        8,
        '偸偹偺偼偽傁傂傃傄傆傇傉傊傋傌傎',
        20,
        '傤傦傪傫傭',
        4,
        '傳',
        6,
        '傼'
      ],
      [
        '8340',
        '傽',
        17,
        '僐',
        5,
        '僗僘僙僛',
        10,
        '僨僩僪僫僯僰僱僲僴僶',
        4,
        '僼',
        9,
        '儈'
      ],
      [
        '8380',
        '儉儊儌',
        5,
        '儓',
        13,
        '儢',
        28,
        '兂兇兊兌兎兏児兒兓兗兘兙兛兝',
        4,
        '兣兤兦內兩兪兯兲兺兾兿冃冄円冇冊冋冎冏冐冑冓冔冘冚冝冞冟冡冣冦',
        4,
        '冭冮冴冸冹冺冾冿凁凂凃凅凈凊凍凎凐凒',
        5
      ],
      [
        '8440',
        '凘凙凚凜凞凟凢凣凥',
        5,
        '凬凮凱凲凴凷凾刄刅刉刋刌刏刐刓刔刕刜刞刟刡刢刣別刦刧刪刬刯刱刲刴刵刼刾剄',
        5,
        '剋剎剏剒剓剕剗剘'
      ],
      [
        '8480',
        '剙剚剛剝剟剠剢剣剤剦剨剫剬剭剮剰剱剳',
        9,
        '剾劀劃',
        4,
        '劉',
        6,
        '劑劒劔',
        6,
        '劜劤劥劦劧劮劯劰労',
        9,
        '勀勁勂勄勅勆勈勊勌勍勎勏勑勓勔動勗務',
        5,
        '勠勡勢勣勥',
        10,
        '勱',
        7,
        '勻勼勽匁匂匃匄匇匉匊匋匌匎'
      ],
      [
        '8540',
        '匑匒匓匔匘匛匜匞匟匢匤匥匧匨匩匫匬匭匯',
        9,
        '匼匽區卂卄卆卋卌卍卐協単卙卛卝卥卨卪卬卭卲卶卹卻卼卽卾厀厁厃厇厈厊厎厏'
      ],
      [
        '8580',
        '厐',
        4,
        '厖厗厙厛厜厞厠厡厤厧厪厫厬厭厯',
        6,
        '厷厸厹厺厼厽厾叀參',
        4,
        '収叏叐叒叓叕叚叜叝叞叡叢叧叴叺叾叿吀吂吅吇吋吔吘吙吚吜吢吤吥吪吰吳吶吷吺吽吿呁呂呄呅呇呉呌呍呎呏呑呚呝',
        4,
        '呣呥呧呩',
        7,
        '呴呹呺呾呿咁咃咅咇咈咉咊咍咑咓咗咘咜咞咟咠咡'
      ],
      [
        '8640',
        '咢咥咮咰咲咵咶咷咹咺咼咾哃哅哊哋哖哘哛哠',
        4,
        '哫哬哯哰哱哴',
        5,
        '哻哾唀唂唃唄唅唈唊',
        4,
        '唒唓唕',
        5,
        '唜唝唞唟唡唥唦'
      ],
      [
        '8680',
        '唨唩唫唭唲唴唵唶唸唹唺唻唽啀啂啅啇啈啋',
        4,
        '啑啒啓啔啗',
        4,
        '啝啞啟啠啢啣啨啩啫啯',
        5,
        '啹啺啽啿喅喆喌喍喎喐喒喓喕喖喗喚喛喞喠',
        6,
        '喨',
        8,
        '喲喴営喸喺喼喿',
        4,
        '嗆嗇嗈嗊嗋嗎嗏嗐嗕嗗',
        4,
        '嗞嗠嗢嗧嗩嗭嗮嗰嗱嗴嗶嗸',
        4,
        '嗿嘂嘃嘄嘅'
      ],
      [
        '8740',
        '嘆嘇嘊嘋嘍嘐',
        7,
        '嘙嘚嘜嘝嘠嘡嘢嘥嘦嘨嘩嘪嘫嘮嘯嘰嘳嘵嘷嘸嘺嘼嘽嘾噀',
        11,
        '噏',
        4,
        '噕噖噚噛噝',
        4
      ],
      [
        '8780',
        '噣噥噦噧噭噮噯噰噲噳噴噵噷噸噹噺噽',
        7,
        '嚇',
        6,
        '嚐嚑嚒嚔',
        14,
        '嚤',
        10,
        '嚰',
        6,
        '嚸嚹嚺嚻嚽',
        12,
        '囋',
        8,
        '囕囖囘囙囜団囥',
        5,
        '囬囮囯囲図囶囷囸囻囼圀圁圂圅圇國',
        6
      ],
      [
        '8840',
        '園',
        9,
        '圝圞圠圡圢圤圥圦圧圫圱圲圴',
        4,
        '圼圽圿坁坃坄坅坆坈坉坋坒',
        4,
        '坘坙坢坣坥坧坬坮坰坱坲坴坵坸坹坺坽坾坿垀'
      ],
      [
        '8880',
        '垁垇垈垉垊垍',
        4,
        '垔',
        6,
        '垜垝垞垟垥垨垪垬垯垰垱垳垵垶垷垹',
        8,
        '埄',
        6,
        '埌埍埐埑埓埖埗埛埜埞埡埢埣埥',
        7,
        '埮埰埱埲埳埵埶執埻埼埾埿堁堃堄堅堈堉堊堌堎堏堐堒堓堔堖堗堘堚堛堜堝堟堢堣堥',
        4,
        '堫',
        4,
        '報堲堳場堶',
        7
      ],
      [
        '8940',
        '堾',
        5,
        '塅',
        6,
        '塎塏塐塒塓塕塖塗塙',
        4,
        '塟',
        5,
        '塦',
        4,
        '塭',
        16,
        '塿墂墄墆墇墈墊墋墌'
      ],
      [
        '8980',
        '墍',
        4,
        '墔',
        4,
        '墛墜墝墠',
        7,
        '墪',
        17,
        '墽墾墿壀壂壃壄壆',
        10,
        '壒壓壔壖',
        13,
        '壥',
        5,
        '壭壯壱売壴壵壷壸壺',
        7,
        '夃夅夆夈',
        4,
        '夎夐夑夒夓夗夘夛夝夞夠夡夢夣夦夨夬夰夲夳夵夶夻'
      ],
      [
        '8a40',
        '夽夾夿奀奃奅奆奊奌奍奐奒奓奙奛',
        4,
        '奡奣奤奦',
        12,
        '奵奷奺奻奼奾奿妀妅妉妋妌妎妏妐妑妔妕妘妚妛妜妝妟妠妡妢妦'
      ],
      [
        '8a80',
        '妧妬妭妰妱妳',
        5,
        '妺妼妽妿',
        6,
        '姇姈姉姌姍姎姏姕姖姙姛姞',
        4,
        '姤姦姧姩姪姫姭',
        11,
        '姺姼姽姾娀娂娊娋娍娎娏娐娒娔娕娖娗娙娚娛娝娞娡娢娤娦娧娨娪',
        6,
        '娳娵娷',
        4,
        '娽娾娿婁',
        4,
        '婇婈婋',
        9,
        '婖婗婘婙婛',
        5
      ],
      [
        '8b40',
        '婡婣婤婥婦婨婩婫',
        8,
        '婸婹婻婼婽婾媀',
        17,
        '媓',
        6,
        '媜',
        13,
        '媫媬'
      ],
      [
        '8b80',
        '媭',
        4,
        '媴媶媷媹',
        4,
        '媿嫀嫃',
        5,
        '嫊嫋嫍',
        4,
        '嫓嫕嫗嫙嫚嫛嫝嫞嫟嫢嫤嫥嫧嫨嫪嫬',
        4,
        '嫲',
        22,
        '嬊',
        11,
        '嬘',
        25,
        '嬳嬵嬶嬸',
        7,
        '孁',
        6
      ],
      [
        '8c40',
        '孈',
        7,
        '孒孖孞孠孡孧孨孫孭孮孯孲孴孶孷學孹孻孼孾孿宂宆宊宍宎宐宑宒宔宖実宧宨宩宬宭宮宯宱宲宷宺宻宼寀寁寃寈寉寊寋寍寎寏'
      ],
      [
        '8c80',
        '寑寔',
        8,
        '寠寢寣實寧審',
        4,
        '寯寱',
        6,
        '寽対尀専尃尅將專尋尌對導尐尒尓尗尙尛尞尟尠尡尣尦尨尩尪尫尭尮尯尰尲尳尵尶尷屃屄屆屇屌屍屒屓屔屖屗屘屚屛屜屝屟屢層屧',
        6,
        '屰屲',
        6,
        '屻屼屽屾岀岃',
        4,
        '岉岊岋岎岏岒岓岕岝',
        4,
        '岤',
        4
      ],
      [
        '8d40',
        '岪岮岯岰岲岴岶岹岺岻岼岾峀峂峃峅',
        5,
        '峌',
        5,
        '峓',
        5,
        '峚',
        6,
        '峢峣峧峩峫峬峮峯峱',
        9,
        '峼',
        4
      ],
      [
        '8d80',
        '崁崄崅崈',
        5,
        '崏',
        4,
        '崕崗崘崙崚崜崝崟',
        4,
        '崥崨崪崫崬崯',
        4,
        '崵',
        7,
        '崿',
        7,
        '嵈嵉嵍',
        10,
        '嵙嵚嵜嵞',
        10,
        '嵪嵭嵮嵰嵱嵲嵳嵵',
        12,
        '嶃',
        21,
        '嶚嶛嶜嶞嶟嶠'
      ],
      ['8e40', '嶡', 21, '嶸', 12, '巆', 6, '巎', 12, '巜巟巠巣巤巪巬巭'],
      [
        '8e80',
        '巰巵巶巸',
        4,
        '巿帀帄帇帉帊帋帍帎帒帓帗帞',
        7,
        '帨',
        4,
        '帯帰帲',
        4,
        '帹帺帾帿幀幁幃幆',
        5,
        '幍',
        6,
        '幖',
        4,
        '幜幝幟幠幣',
        14,
        '幵幷幹幾庁庂広庅庈庉庌庍庎庒庘庛庝庡庢庣庤庨',
        4,
        '庮',
        4,
        '庴庺庻庼庽庿',
        6
      ],
      [
        '8f40',
        '廆廇廈廋',
        5,
        '廔廕廗廘廙廚廜',
        11,
        '廩廫',
        8,
        '廵廸廹廻廼廽弅弆弇弉弌弍弎弐弒弔弖弙弚弜弝弞弡弢弣弤'
      ],
      [
        '8f80',
        '弨弫弬弮弰弲',
        6,
        '弻弽弾弿彁',
        14,
        '彑彔彙彚彛彜彞彟彠彣彥彧彨彫彮彯彲彴彵彶彸彺彽彾彿徃徆徍徎徏徑従徔徖徚徛徝從徟徠徢',
        5,
        '復徫徬徯',
        5,
        '徶徸徹徺徻徾',
        4,
        '忇忈忊忋忎忓忔忕忚忛応忞忟忢忣忥忦忨忩忬忯忰忲忳忴忶忷忹忺忼怇'
      ],
      [
        '9040',
        '怈怉怋怌怐怑怓怗怘怚怞怟怢怣怤怬怭怮怰',
        4,
        '怶',
        4,
        '怽怾恀恄',
        6,
        '恌恎恏恑恓恔恖恗恘恛恜恞恟恠恡恥恦恮恱恲恴恵恷恾悀'
      ],
      [
        '9080',
        '悁悂悅悆悇悈悊悋悎悏悐悑悓悕悗悘悙悜悞悡悢悤悥悧悩悪悮悰悳悵悶悷悹悺悽',
        7,
        '惇惈惉惌',
        4,
        '惒惓惔惖惗惙惛惞惡',
        4,
        '惪惱惲惵惷惸惻',
        4,
        '愂愃愄愅愇愊愋愌愐',
        4,
        '愖愗愘愙愛愜愝愞愡愢愥愨愩愪愬',
        18,
        '慀',
        6
      ],
      [
        '9140',
        '慇慉態慍慏慐慒慓慔慖',
        6,
        '慞慟慠慡慣慤慥慦慩',
        6,
        '慱慲慳慴慶慸',
        18,
        '憌憍憏',
        4,
        '憕'
      ],
      [
        '9180',
        '憖',
        6,
        '憞',
        8,
        '憪憫憭',
        9,
        '憸',
        5,
        '憿懀懁懃',
        4,
        '應懌',
        4,
        '懓懕',
        16,
        '懧',
        13,
        '懶',
        8,
        '戀',
        5,
        '戇戉戓戔戙戜戝戞戠戣戦戧戨戩戫戭戯戰戱戲戵戶戸',
        4,
        '扂扄扅扆扊'
      ],
      [
        '9240',
        '扏扐払扖扗扙扚扜',
        6,
        '扤扥扨扱扲扴扵扷扸扺扻扽抁抂抃抅抆抇抈抋',
        5,
        '抔抙抜抝択抣抦抧抩抪抭抮抯抰抲抳抴抶抷抸抺抾拀拁'
      ],
      [
        '9280',
        '拃拋拏拑拕拝拞拠拡拤拪拫拰拲拵拸拹拺拻挀挃挄挅挆挊挋挌挍挏挐挒挓挔挕挗挘挙挜挦挧挩挬挭挮挰挱挳',
        5,
        '挻挼挾挿捀捁捄捇捈捊捑捒捓捔捖',
        7,
        '捠捤捥捦捨捪捫捬捯捰捲捳捴捵捸捹捼捽捾捿掁掃掄掅掆掋掍掑掓掔掕掗掙',
        6,
        '採掤掦掫掯掱掲掵掶掹掻掽掿揀'
      ],
      [
        '9340',
        '揁揂揃揅揇揈揊揋揌揑揓揔揕揗',
        6,
        '揟揢揤',
        4,
        '揫揬揮揯揰揱揳揵揷揹揺揻揼揾搃搄搆',
        4,
        '損搎搑搒搕',
        5,
        '搝搟搢搣搤'
      ],
      [
        '9380',
        '搥搧搨搩搫搮',
        5,
        '搵',
        4,
        '搻搼搾摀摂摃摉摋',
        6,
        '摓摕摖摗摙',
        4,
        '摟',
        7,
        '摨摪摫摬摮',
        9,
        '摻',
        6,
        '撃撆撈',
        8,
        '撓撔撗撘撚撛撜撝撟',
        4,
        '撥撦撧撨撪撫撯撱撲撳撴撶撹撻撽撾撿擁擃擄擆',
        6,
        '擏擑擓擔擕擖擙據'
      ],
      ['9440', '擛擜擝擟擠擡擣擥擧', 24, '攁', 7, '攊', 7, '攓', 4, '攙', 8],
      [
        '9480',
        '攢攣攤攦',
        4,
        '攬攭攰攱攲攳攷攺攼攽敀',
        4,
        '敆敇敊敋敍敎敐敒敓敔敗敘敚敜敟敠敡敤敥敧敨敩敪敭敮敯敱敳敵敶數',
        14,
        '斈斉斊斍斎斏斒斔斕斖斘斚斝斞斠斢斣斦斨斪斬斮斱',
        7,
        '斺斻斾斿旀旂旇旈旉旊旍旐旑旓旔旕旘',
        7,
        '旡旣旤旪旫'
      ],
      [
        '9540',
        '旲旳旴旵旸旹旻',
        4,
        '昁昄昅昇昈昉昋昍昐昑昒昖昗昘昚昛昜昞昡昢昣昤昦昩昪昫昬昮昰昲昳昷',
        4,
        '昽昿晀時晄',
        6,
        '晍晎晐晑晘'
      ],
      [
        '9580',
        '晙晛晜晝晞晠晢晣晥晧晩',
        4,
        '晱晲晳晵晸晹晻晼晽晿暀暁暃暅暆暈暉暊暋暍暎暏暐暒暓暔暕暘',
        4,
        '暞',
        8,
        '暩',
        4,
        '暯',
        4,
        '暵暶暷暸暺暻暼暽暿',
        25,
        '曚曞',
        7,
        '曧曨曪',
        5,
        '曱曵曶書曺曻曽朁朂會'
      ],
      [
        '9640',
        '朄朅朆朇朌朎朏朑朒朓朖朘朙朚朜朞朠',
        5,
        '朧朩朮朰朲朳朶朷朸朹朻朼朾朿杁杄杅杇杊杋杍杒杔杕杗',
        4,
        '杝杢杣杤杦杧杫杬杮東杴杶'
      ],
      [
        '9680',
        '杸杹杺杻杽枀枂枃枅枆枈枊枌枍枎枏枑枒枓枔枖枙枛枟枠枡枤枦枩枬枮枱枲枴枹',
        7,
        '柂柅',
        9,
        '柕柖柗柛柟柡柣柤柦柧柨柪柫柭柮柲柵',
        7,
        '柾栁栂栃栄栆栍栐栒栔栕栘',
        4,
        '栞栟栠栢',
        6,
        '栫',
        6,
        '栴栵栶栺栻栿桇桋桍桏桒桖',
        5
      ],
      [
        '9740',
        '桜桝桞桟桪桬',
        7,
        '桵桸',
        8,
        '梂梄梇',
        7,
        '梐梑梒梔梕梖梘',
        9,
        '梣梤梥梩梪梫梬梮梱梲梴梶梷梸'
      ],
      [
        '9780',
        '梹',
        6,
        '棁棃',
        5,
        '棊棌棎棏棐棑棓棔棖棗棙棛',
        4,
        '棡棢棤',
        9,
        '棯棲棳棴棶棷棸棻棽棾棿椀椂椃椄椆',
        4,
        '椌椏椑椓',
        11,
        '椡椢椣椥',
        7,
        '椮椯椱椲椳椵椶椷椸椺椻椼椾楀楁楃',
        16,
        '楕楖楘楙楛楜楟'
      ],
      [
        '9840',
        '楡楢楤楥楧楨楩楪楬業楯楰楲',
        4,
        '楺楻楽楾楿榁榃榅榊榋榌榎',
        5,
        '榖榗榙榚榝',
        9,
        '榩榪榬榮榯榰榲榳榵榶榸榹榺榼榽'
      ],
      [
        '9880',
        '榾榿槀槂',
        7,
        '構槍槏槑槒槓槕',
        5,
        '槜槝槞槡',
        11,
        '槮槯槰槱槳',
        9,
        '槾樀',
        9,
        '樋',
        11,
        '標',
        5,
        '樠樢',
        5,
        '権樫樬樭樮樰樲樳樴樶',
        6,
        '樿',
        4,
        '橅橆橈',
        7,
        '橑',
        6,
        '橚'
      ],
      [
        '9940',
        '橜',
        4,
        '橢橣橤橦',
        10,
        '橲',
        6,
        '橺橻橽橾橿檁檂檃檅',
        8,
        '檏檒',
        4,
        '檘',
        7,
        '檡',
        5
      ],
      ['9980', '檧檨檪檭', 114, '欥欦欨', 6],
      [
        '9a40',
        '欯欰欱欳欴欵欶欸欻欼欽欿歀歁歂歄歅歈歊歋歍',
        11,
        '歚',
        7,
        '歨歩歫',
        13,
        '歺歽歾歿殀殅殈'
      ],
      [
        '9a80',
        '殌殎殏殐殑殔殕殗殘殙殜',
        4,
        '殢',
        7,
        '殫',
        7,
        '殶殸',
        6,
        '毀毃毄毆',
        4,
        '毌毎毐毑毘毚毜',
        4,
        '毢',
        7,
        '毬毭毮毰毱毲毴毶毷毸毺毻毼毾',
        6,
        '氈',
        4,
        '氎氒気氜氝氞氠氣氥氫氬氭氱氳氶氷氹氺氻氼氾氿汃汄汅汈汋',
        4,
        '汑汒汓汖汘'
      ],
      [
        '9b40',
        '汙汚汢汣汥汦汧汫',
        4,
        '汱汳汵汷汸決汻汼汿沀沄沇沊沋沍沎沑沒沕沖沗沘沚沜沝沞沠沢沨沬沯沰沴沵沶沷沺泀況泂泃泆泇泈泋泍泎泏泑泒泘'
      ],
      [
        '9b80',
        '泙泚泜泝泟泤泦泧泩泬泭泲泴泹泿洀洂洃洅洆洈洉洊洍洏洐洑洓洔洕洖洘洜洝洟',
        5,
        '洦洨洩洬洭洯洰洴洶洷洸洺洿浀浂浄浉浌浐浕浖浗浘浛浝浟浡浢浤浥浧浨浫浬浭浰浱浲浳浵浶浹浺浻浽',
        4,
        '涃涄涆涇涊涋涍涏涐涒涖',
        4,
        '涜涢涥涬涭涰涱涳涴涶涷涹',
        5,
        '淁淂淃淈淉淊'
      ],
      [
        '9c40',
        '淍淎淏淐淒淓淔淕淗淚淛淜淟淢淣淥淧淨淩淪淭淯淰淲淴淵淶淸淺淽',
        7,
        '渆渇済渉渋渏渒渓渕渘渙減渜渞渟渢渦渧渨渪測渮渰渱渳渵'
      ],
      [
        '9c80',
        '渶渷渹渻',
        7,
        '湅',
        7,
        '湏湐湑湒湕湗湙湚湜湝湞湠',
        10,
        '湬湭湯',
        14,
        '満溁溂溄溇溈溊',
        4,
        '溑',
        6,
        '溙溚溛溝溞溠溡溣溤溦溨溩溫溬溭溮溰溳溵溸溹溼溾溿滀滃滄滅滆滈滉滊滌滍滎滐滒滖滘滙滛滜滝滣滧滪',
        5
      ],
      [
        '9d40',
        '滰滱滲滳滵滶滷滸滺',
        7,
        '漃漄漅漇漈漊',
        4,
        '漐漑漒漖',
        9,
        '漡漢漣漥漦漧漨漬漮漰漲漴漵漷',
        6,
        '漿潀潁潂'
      ],
      [
        '9d80',
        '潃潄潅潈潉潊潌潎',
        9,
        '潙潚潛潝潟潠潡潣潤潥潧',
        5,
        '潯潰潱潳潵潶潷潹潻潽',
        6,
        '澅澆澇澊澋澏',
        12,
        '澝澞澟澠澢',
        4,
        '澨',
        10,
        '澴澵澷澸澺',
        5,
        '濁濃',
        5,
        '濊',
        6,
        '濓',
        10,
        '濟濢濣濤濥'
      ],
      ['9e40', '濦', 7, '濰', 32, '瀒', 7, '瀜', 6, '瀤', 6],
      [
        '9e80',
        '瀫',
        9,
        '瀶瀷瀸瀺',
        17,
        '灍灎灐',
        13,
        '灟',
        11,
        '灮灱灲灳灴灷灹灺灻災炁炂炃炄炆炇炈炋炌炍炏炐炑炓炗炘炚炛炞',
        12,
        '炰炲炴炵炶為炾炿烄烅烆烇烉烋',
        12,
        '烚'
      ],
      [
        '9f40',
        '烜烝烞烠烡烢烣烥烪烮烰',
        6,
        '烸烺烻烼烾',
        10,
        '焋',
        4,
        '焑焒焔焗焛',
        10,
        '焧',
        7,
        '焲焳焴'
      ],
      [
        '9f80',
        '焵焷',
        13,
        '煆煇煈煉煋煍煏',
        12,
        '煝煟',
        4,
        '煥煩',
        4,
        '煯煰煱煴煵煶煷煹煻煼煾',
        5,
        '熅',
        4,
        '熋熌熍熎熐熑熒熓熕熖熗熚',
        4,
        '熡',
        6,
        '熩熪熫熭',
        5,
        '熴熶熷熸熺',
        8,
        '燄',
        9,
        '燏',
        4
      ],
      ['a040', '燖', 9, '燡燢燣燤燦燨', 5, '燯', 9, '燺', 11, '爇', 19],
      [
        'a080',
        '爛爜爞',
        9,
        '爩爫爭爮爯爲爳爴爺爼爾牀',
        6,
        '牉牊牋牎牏牐牑牓牔牕牗牘牚牜牞牠牣牤牥牨牪牫牬牭牰牱牳牴牶牷牸牻牼牽犂犃犅',
        4,
        '犌犎犐犑犓',
        11,
        '犠',
        11,
        '犮犱犲犳犵犺',
        6,
        '狅狆狇狉狊狋狌狏狑狓狔狕狖狘狚狛'
      ],
      [
        'a1a1',
        '　、。·ˉˇ¨〃々—～‖…‘’“”〔〕〈',
        7,
        '〖〗【】±×÷∶∧∨∑∏∪∩∈∷√⊥∥∠⌒⊙∫∮≡≌≈∽∝≠≮≯≤≥∞∵∴♂♀°′″℃＄¤￠￡‰§№☆★○●◎◇◆□■△▲※→←↑↓〓'
      ],
      ['a2a1', 'ⅰ', 9],
      ['a2b1', '⒈', 19, '⑴', 19, '①', 9],
      ['a2e5', '㈠', 9],
      ['a2f1', 'Ⅰ', 11],
      ['a3a1', '！＂＃￥％', 88, '￣'],
      ['a4a1', 'ぁ', 82],
      ['a5a1', 'ァ', 85],
      ['a6a1', 'Α', 16, 'Σ', 6],
      ['a6c1', 'α', 16, 'σ', 6],
      ['a6e0', '︵︶︹︺︿﹀︽︾﹁﹂﹃﹄'],
      ['a6ee', '︻︼︷︸︱'],
      ['a6f4', '︳︴'],
      ['a7a1', 'А', 5, 'ЁЖ', 25],
      ['a7d1', 'а', 5, 'ёж', 25],
      ['a840', 'ˊˋ˙–―‥‵℅℉↖↗↘↙∕∟∣≒≦≧⊿═', 35, '▁', 6],
      ['a880', '█', 7, '▓▔▕▼▽◢◣◤◥☉⊕〒〝〞'],
      ['a8a1', 'āáǎàēéěèīíǐìōóǒòūúǔùǖǘǚǜüêɑ'],
      ['a8bd', 'ńň'],
      ['a8c0', 'ɡ'],
      ['a8c5', 'ㄅ', 36],
      ['a940', '〡', 8, '㊣㎎㎏㎜㎝㎞㎡㏄㏎㏑㏒㏕︰￢￤'],
      ['a959', '℡㈱'],
      ['a95c', '‐'],
      ['a960', 'ー゛゜ヽヾ〆ゝゞ﹉', 9, '﹔﹕﹖﹗﹙', 8],
      ['a980', '﹢', 4, '﹨﹩﹪﹫'],
      ['a996', '〇'],
      ['a9a4', '─', 75],
      [
        'aa40',
        '狜狝狟狢',
        5,
        '狪狫狵狶狹狽狾狿猀猂猄',
        5,
        '猋猌猍猏猐猑猒猔猘猙猚猟猠猣猤猦猧猨猭猯猰猲猳猵猶猺猻猼猽獀',
        8
      ],
      ['aa80', '獉獊獋獌獎獏獑獓獔獕獖獘', 7, '獡', 10, '獮獰獱'],
      [
        'ab40',
        '獲',
        11,
        '獿',
        4,
        '玅玆玈玊玌玍玏玐玒玓玔玕玗玘玙玚玜玝玞玠玡玣',
        5,
        '玪玬玭玱玴玵玶玸玹玼玽玾玿珁珃',
        4
      ],
      ['ab80', '珋珌珎珒', 6, '珚珛珜珝珟珡珢珣珤珦珨珪珫珬珮珯珰珱珳', 4],
      [
        'ac40',
        '珸',
        10,
        '琄琇琈琋琌琍琎琑',
        8,
        '琜',
        5,
        '琣琤琧琩琫琭琯琱琲琷',
        4,
        '琽琾琿瑀瑂',
        11
      ],
      ['ac80', '瑎', 6, '瑖瑘瑝瑠', 12, '瑮瑯瑱', 4, '瑸瑹瑺'],
      [
        'ad40',
        '瑻瑼瑽瑿璂璄璅璆璈璉璊璌璍璏璑',
        10,
        '璝璟',
        7,
        '璪',
        15,
        '璻',
        12
      ],
      ['ad80', '瓈', 9, '瓓', 8, '瓝瓟瓡瓥瓧', 6, '瓰瓱瓲'],
      [
        'ae40',
        '瓳瓵瓸',
        6,
        '甀甁甂甃甅',
        7,
        '甎甐甒甔甕甖甗甛甝甞甠',
        4,
        '甦甧甪甮甴甶甹甼甽甿畁畂畃畄畆畇畉畊畍畐畑畒畓畕畖畗畘'
      ],
      ['ae80', '畝', 7, '畧畨畩畫', 6, '畳畵當畷畺', 4, '疀疁疂疄疅疇'],
      [
        'af40',
        '疈疉疊疌疍疎疐疓疕疘疛疜疞疢疦',
        4,
        '疭疶疷疺疻疿痀痁痆痋痌痎痏痐痑痓痗痙痚痜痝痟痠痡痥痩痬痭痮痯痲痳痵痶痷痸痺痻痽痾瘂瘄瘆瘇'
      ],
      [
        'af80',
        '瘈瘉瘋瘍瘎瘏瘑瘒瘓瘔瘖瘚瘜瘝瘞瘡瘣瘧瘨瘬瘮瘯瘱瘲瘶瘷瘹瘺瘻瘽癁療癄'
      ],
      [
        'b040',
        '癅',
        6,
        '癎',
        5,
        '癕癗',
        4,
        '癝癟癠癡癢癤',
        6,
        '癬癭癮癰',
        7,
        '癹発發癿皀皁皃皅皉皊皌皍皏皐皒皔皕皗皘皚皛'
      ],
      [
        'b080',
        '皜',
        7,
        '皥',
        8,
        '皯皰皳皵',
        9,
        '盀盁盃啊阿埃挨哎唉哀皑癌蔼矮艾碍爱隘鞍氨安俺按暗岸胺案肮昂盎凹敖熬翱袄傲奥懊澳芭捌扒叭吧笆八疤巴拔跋靶把耙坝霸罢爸白柏百摆佰败拜稗斑班搬扳般颁板版扮拌伴瓣半办绊邦帮梆榜膀绑棒磅蚌镑傍谤苞胞包褒剥'
      ],
      [
        'b140',
        '盄盇盉盋盌盓盕盙盚盜盝盞盠',
        4,
        '盦',
        7,
        '盰盳盵盶盷盺盻盽盿眀眂眃眅眆眊県眎',
        10,
        '眛眜眝眞眡眣眤眥眧眪眫'
      ],
      [
        'b180',
        '眬眮眰',
        4,
        '眹眻眽眾眿睂睄睅睆睈',
        7,
        '睒',
        7,
        '睜薄雹保堡饱宝抱报暴豹鲍爆杯碑悲卑北辈背贝钡倍狈备惫焙被奔苯本笨崩绷甭泵蹦迸逼鼻比鄙笔彼碧蓖蔽毕毙毖币庇痹闭敝弊必辟壁臂避陛鞭边编贬扁便变卞辨辩辫遍标彪膘表鳖憋别瘪彬斌濒滨宾摈兵冰柄丙秉饼炳'
      ],
      [
        'b240',
        '睝睞睟睠睤睧睩睪睭',
        11,
        '睺睻睼瞁瞂瞃瞆',
        5,
        '瞏瞐瞓',
        11,
        '瞡瞣瞤瞦瞨瞫瞭瞮瞯瞱瞲瞴瞶',
        4
      ],
      [
        'b280',
        '瞼瞾矀',
        12,
        '矎',
        8,
        '矘矙矚矝',
        4,
        '矤病并玻菠播拨钵波博勃搏铂箔伯帛舶脖膊渤泊驳捕卜哺补埠不布步簿部怖擦猜裁材才财睬踩采彩菜蔡餐参蚕残惭惨灿苍舱仓沧藏操糙槽曹草厕策侧册测层蹭插叉茬茶查碴搽察岔差诧拆柴豺搀掺蝉馋谗缠铲产阐颤昌猖'
      ],
      [
        'b340',
        '矦矨矪矯矰矱矲矴矵矷矹矺矻矼砃',
        5,
        '砊砋砎砏砐砓砕砙砛砞砠砡砢砤砨砪砫砮砯砱砲砳砵砶砽砿硁硂硃硄硆硈硉硊硋硍硏硑硓硔硘硙硚'
      ],
      [
        'b380',
        '硛硜硞',
        11,
        '硯',
        7,
        '硸硹硺硻硽',
        6,
        '场尝常长偿肠厂敞畅唱倡超抄钞朝嘲潮巢吵炒车扯撤掣彻澈郴臣辰尘晨忱沉陈趁衬撑称城橙成呈乘程惩澄诚承逞骋秤吃痴持匙池迟弛驰耻齿侈尺赤翅斥炽充冲虫崇宠抽酬畴踌稠愁筹仇绸瞅丑臭初出橱厨躇锄雏滁除楚'
      ],
      [
        'b440',
        '碄碅碆碈碊碋碏碐碒碔碕碖碙碝碞碠碢碤碦碨',
        7,
        '碵碶碷碸確碻碼碽碿磀磂磃磄磆磇磈磌磍磎磏磑磒磓磖磗磘磚',
        9
      ],
      [
        'b480',
        '磤磥磦磧磩磪磫磭',
        4,
        '磳磵磶磸磹磻',
        5,
        '礂礃礄礆',
        6,
        '础储矗搐触处揣川穿椽传船喘串疮窗幢床闯创吹炊捶锤垂春椿醇唇淳纯蠢戳绰疵茨磁雌辞慈瓷词此刺赐次聪葱囱匆从丛凑粗醋簇促蹿篡窜摧崔催脆瘁粹淬翠村存寸磋撮搓措挫错搭达答瘩打大呆歹傣戴带殆代贷袋待逮'
      ],
      [
        'b540',
        '礍',
        5,
        '礔',
        9,
        '礟',
        4,
        '礥',
        14,
        '礵',
        4,
        '礽礿祂祃祄祅祇祊',
        8,
        '祔祕祘祙祡祣'
      ],
      [
        'b580',
        '祤祦祩祪祫祬祮祰',
        6,
        '祹祻',
        4,
        '禂禃禆禇禈禉禋禌禍禎禐禑禒怠耽担丹单郸掸胆旦氮但惮淡诞弹蛋当挡党荡档刀捣蹈倒岛祷导到稻悼道盗德得的蹬灯登等瞪凳邓堤低滴迪敌笛狄涤翟嫡抵底地蒂第帝弟递缔颠掂滇碘点典靛垫电佃甸店惦奠淀殿碉叼雕凋刁掉吊钓调跌爹碟蝶迭谍叠'
      ],
      [
        'b640',
        '禓',
        6,
        '禛',
        11,
        '禨',
        10,
        '禴',
        4,
        '禼禿秂秄秅秇秈秊秌秎秏秐秓秔秖秗秙',
        5,
        '秠秡秢秥秨秪'
      ],
      [
        'b680',
        '秬秮秱',
        6,
        '秹秺秼秾秿稁稄稅稇稈稉稊稌稏',
        4,
        '稕稖稘稙稛稜丁盯叮钉顶鼎锭定订丢东冬董懂动栋侗恫冻洞兜抖斗陡豆逗痘都督毒犊独读堵睹赌杜镀肚度渡妒端短锻段断缎堆兑队对墩吨蹲敦顿囤钝盾遁掇哆多夺垛躲朵跺舵剁惰堕蛾峨鹅俄额讹娥恶厄扼遏鄂饿恩而儿耳尔饵洱二'
      ],
      [
        'b740',
        '稝稟稡稢稤',
        14,
        '稴稵稶稸稺稾穀',
        5,
        '穇',
        9,
        '穒',
        4,
        '穘',
        16
      ],
      [
        'b780',
        '穩',
        6,
        '穱穲穳穵穻穼穽穾窂窅窇窉窊窋窌窎窏窐窓窔窙窚窛窞窡窢贰发罚筏伐乏阀法珐藩帆番翻樊矾钒繁凡烦反返范贩犯饭泛坊芳方肪房防妨仿访纺放菲非啡飞肥匪诽吠肺废沸费芬酚吩氛分纷坟焚汾粉奋份忿愤粪丰封枫蜂峰锋风疯烽逢冯缝讽奉凤佛否夫敷肤孵扶拂辐幅氟符伏俘服'
      ],
      [
        'b840',
        '窣窤窧窩窪窫窮',
        4,
        '窴',
        10,
        '竀',
        10,
        '竌',
        9,
        '竗竘竚竛竜竝竡竢竤竧',
        5,
        '竮竰竱竲竳'
      ],
      [
        'b880',
        '竴',
        4,
        '竻竼竾笀笁笂笅笇笉笌笍笎笐笒笓笖笗笘笚笜笝笟笡笢笣笧笩笭浮涪福袱弗甫抚辅俯釜斧脯腑府腐赴副覆赋复傅付阜父腹负富讣附妇缚咐噶嘎该改概钙盖溉干甘杆柑竿肝赶感秆敢赣冈刚钢缸肛纲岗港杠篙皋高膏羔糕搞镐稿告哥歌搁戈鸽胳疙割革葛格蛤阁隔铬个各给根跟耕更庚羹'
      ],
      [
        'b940',
        '笯笰笲笴笵笶笷笹笻笽笿',
        5,
        '筆筈筊筍筎筓筕筗筙筜筞筟筡筣',
        10,
        '筯筰筳筴筶筸筺筼筽筿箁箂箃箄箆',
        6,
        '箎箏'
      ],
      [
        'b980',
        '箑箒箓箖箘箙箚箛箞箟箠箣箤箥箮箯箰箲箳箵箶箷箹',
        7,
        '篂篃範埂耿梗工攻功恭龚供躬公宫弓巩汞拱贡共钩勾沟苟狗垢构购够辜菇咕箍估沽孤姑鼓古蛊骨谷股故顾固雇刮瓜剐寡挂褂乖拐怪棺关官冠观管馆罐惯灌贯光广逛瑰规圭硅归龟闺轨鬼诡癸桂柜跪贵刽辊滚棍锅郭国果裹过哈'
      ],
      [
        'ba40',
        '篅篈築篊篋篍篎篏篐篒篔',
        4,
        '篛篜篞篟篠篢篣篤篧篨篩篫篬篭篯篰篲',
        4,
        '篸篹篺篻篽篿',
        7,
        '簈簉簊簍簎簐',
        5,
        '簗簘簙'
      ],
      [
        'ba80',
        '簚',
        4,
        '簠',
        5,
        '簨簩簫',
        12,
        '簹',
        5,
        '籂骸孩海氦亥害骇酣憨邯韩含涵寒函喊罕翰撼捍旱憾悍焊汗汉夯杭航壕嚎豪毫郝好耗号浩呵喝荷菏核禾和何合盒貉阂河涸赫褐鹤贺嘿黑痕很狠恨哼亨横衡恒轰哄烘虹鸿洪宏弘红喉侯猴吼厚候后呼乎忽瑚壶葫胡蝴狐糊湖'
      ],
      ['bb40', '籃', 9, '籎', 36, '籵', 5, '籾', 9],
      [
        'bb80',
        '粈粊',
        6,
        '粓粔粖粙粚粛粠粡粣粦粧粨粩粫粬粭粯粰粴',
        4,
        '粺粻弧虎唬护互沪户花哗华猾滑画划化话槐徊怀淮坏欢环桓还缓换患唤痪豢焕涣宦幻荒慌黄磺蝗簧皇凰惶煌晃幌恍谎灰挥辉徽恢蛔回毁悔慧卉惠晦贿秽会烩汇讳诲绘荤昏婚魂浑混豁活伙火获或惑霍货祸击圾基机畸稽积箕'
      ],
      [
        'bc40',
        '粿糀糂糃糄糆糉糋糎',
        6,
        '糘糚糛糝糞糡',
        6,
        '糩',
        5,
        '糰',
        7,
        '糹糺糼',
        13,
        '紋',
        5
      ],
      [
        'bc80',
        '紑',
        14,
        '紡紣紤紥紦紨紩紪紬紭紮細',
        6,
        '肌饥迹激讥鸡姬绩缉吉极棘辑籍集及急疾汲即嫉级挤几脊己蓟技冀季伎祭剂悸济寄寂计记既忌际妓继纪嘉枷夹佳家加荚颊贾甲钾假稼价架驾嫁歼监坚尖笺间煎兼肩艰奸缄茧检柬碱硷拣捡简俭剪减荐槛鉴践贱见键箭件'
      ],
      ['bd40', '紷', 54, '絯', 7],
      [
        'bd80',
        '絸',
        32,
        '健舰剑饯渐溅涧建僵姜将浆江疆蒋桨奖讲匠酱降蕉椒礁焦胶交郊浇骄娇嚼搅铰矫侥脚狡角饺缴绞剿教酵轿较叫窖揭接皆秸街阶截劫节桔杰捷睫竭洁结解姐戒藉芥界借介疥诫届巾筋斤金今津襟紧锦仅谨进靳晋禁近烬浸'
      ],
      ['be40', '継', 12, '綧', 6, '綯', 42],
      [
        'be80',
        '線',
        32,
        '尽劲荆兢茎睛晶鲸京惊精粳经井警景颈静境敬镜径痉靖竟竞净炯窘揪究纠玖韭久灸九酒厩救旧臼舅咎就疚鞠拘狙疽居驹菊局咀矩举沮聚拒据巨具距踞锯俱句惧炬剧捐鹃娟倦眷卷绢撅攫抉掘倔爵觉决诀绝均菌钧军君峻'
      ],
      ['bf40', '緻', 62],
      [
        'bf80',
        '縺縼',
        4,
        '繂',
        4,
        '繈',
        21,
        '俊竣浚郡骏喀咖卡咯开揩楷凯慨刊堪勘坎砍看康慷糠扛抗亢炕考拷烤靠坷苛柯棵磕颗科壳咳可渴克刻客课肯啃垦恳坑吭空恐孔控抠口扣寇枯哭窟苦酷库裤夸垮挎跨胯块筷侩快宽款匡筐狂框矿眶旷况亏盔岿窥葵奎魁傀'
      ],
      ['c040', '繞', 35, '纃', 23, '纜纝纞'],
      [
        'c080',
        '纮纴纻纼绖绤绬绹缊缐缞缷缹缻',
        6,
        '罃罆',
        9,
        '罒罓馈愧溃坤昆捆困括扩廓阔垃拉喇蜡腊辣啦莱来赖蓝婪栏拦篮阑兰澜谰揽览懒缆烂滥琅榔狼廊郎朗浪捞劳牢老佬姥酪烙涝勒乐雷镭蕾磊累儡垒擂肋类泪棱楞冷厘梨犁黎篱狸离漓理李里鲤礼莉荔吏栗丽厉励砾历利傈例俐'
      ],
      [
        'c140',
        '罖罙罛罜罝罞罠罣',
        4,
        '罫罬罭罯罰罳罵罶罷罸罺罻罼罽罿羀羂',
        7,
        '羋羍羏',
        4,
        '羕',
        4,
        '羛羜羠羢羣羥羦羨',
        6,
        '羱'
      ],
      [
        'c180',
        '羳',
        4,
        '羺羻羾翀翂翃翄翆翇翈翉翋翍翏',
        4,
        '翖翗翙',
        5,
        '翢翣痢立粒沥隶力璃哩俩联莲连镰廉怜涟帘敛脸链恋炼练粮凉梁粱良两辆量晾亮谅撩聊僚疗燎寥辽潦了撂镣廖料列裂烈劣猎琳林磷霖临邻鳞淋凛赁吝拎玲菱零龄铃伶羚凌灵陵岭领另令溜琉榴硫馏留刘瘤流柳六龙聋咙笼窿'
      ],
      [
        'c240',
        '翤翧翨翪翫翬翭翯翲翴',
        6,
        '翽翾翿耂耇耈耉耊耎耏耑耓耚耛耝耞耟耡耣耤耫',
        5,
        '耲耴耹耺耼耾聀聁聄聅聇聈聉聎聏聐聑聓聕聖聗'
      ],
      [
        'c280',
        '聙聛',
        13,
        '聫',
        5,
        '聲',
        11,
        '隆垄拢陇楼娄搂篓漏陋芦卢颅庐炉掳卤虏鲁麓碌露路赂鹿潞禄录陆戮驴吕铝侣旅履屡缕虑氯律率滤绿峦挛孪滦卵乱掠略抡轮伦仑沦纶论萝螺罗逻锣箩骡裸落洛骆络妈麻玛码蚂马骂嘛吗埋买麦卖迈脉瞒馒蛮满蔓曼慢漫'
      ],
      [
        'c340',
        '聾肁肂肅肈肊肍',
        5,
        '肔肕肗肙肞肣肦肧肨肬肰肳肵肶肸肹肻胅胇',
        4,
        '胏',
        6,
        '胘胟胠胢胣胦胮胵胷胹胻胾胿脀脁脃脄脅脇脈脋'
      ],
      [
        'c380',
        '脌脕脗脙脛脜脝脟',
        12,
        '脭脮脰脳脴脵脷脹',
        4,
        '脿谩芒茫盲氓忙莽猫茅锚毛矛铆卯茂冒帽貌贸么玫枚梅酶霉煤没眉媒镁每美昧寐妹媚门闷们萌蒙檬盟锰猛梦孟眯醚靡糜迷谜弥米秘觅泌蜜密幂棉眠绵冕免勉娩缅面苗描瞄藐秒渺庙妙蔑灭民抿皿敏悯闽明螟鸣铭名命谬摸'
      ],
      [
        'c440',
        '腀',
        5,
        '腇腉腍腎腏腒腖腗腘腛',
        4,
        '腡腢腣腤腦腨腪腫腬腯腲腳腵腶腷腸膁膃',
        4,
        '膉膋膌膍膎膐膒',
        5,
        '膙膚膞',
        4,
        '膤膥'
      ],
      [
        'c480',
        '膧膩膫',
        7,
        '膴',
        5,
        '膼膽膾膿臄臅臇臈臉臋臍',
        6,
        '摹蘑模膜磨摩魔抹末莫墨默沫漠寞陌谋牟某拇牡亩姆母墓暮幕募慕木目睦牧穆拿哪呐钠那娜纳氖乃奶耐奈南男难囊挠脑恼闹淖呢馁内嫩能妮霓倪泥尼拟你匿腻逆溺蔫拈年碾撵捻念娘酿鸟尿捏聂孽啮镊镍涅您柠狞凝宁'
      ],
      [
        'c540',
        '臔',
        14,
        '臤臥臦臨臩臫臮',
        4,
        '臵',
        5,
        '臽臿舃與',
        4,
        '舎舏舑舓舕',
        5,
        '舝舠舤舥舦舧舩舮舲舺舼舽舿'
      ],
      [
        'c580',
        '艀艁艂艃艅艆艈艊艌艍艎艐',
        7,
        '艙艛艜艝艞艠',
        7,
        '艩拧泞牛扭钮纽脓浓农弄奴努怒女暖虐疟挪懦糯诺哦欧鸥殴藕呕偶沤啪趴爬帕怕琶拍排牌徘湃派攀潘盘磐盼畔判叛乓庞旁耪胖抛咆刨炮袍跑泡呸胚培裴赔陪配佩沛喷盆砰抨烹澎彭蓬棚硼篷膨朋鹏捧碰坯砒霹批披劈琵毗'
      ],
      [
        'c640',
        '艪艫艬艭艱艵艶艷艸艻艼芀芁芃芅芆芇芉芌芐芓芔芕芖芚芛芞芠芢芣芧芲芵芶芺芻芼芿苀苂苃苅苆苉苐苖苙苚苝苢苧苨苩苪苬苭苮苰苲苳苵苶苸'
      ],
      [
        'c680',
        '苺苼',
        4,
        '茊茋茍茐茒茓茖茘茙茝',
        9,
        '茩茪茮茰茲茷茻茽啤脾疲皮匹痞僻屁譬篇偏片骗飘漂瓢票撇瞥拼频贫品聘乒坪苹萍平凭瓶评屏坡泼颇婆破魄迫粕剖扑铺仆莆葡菩蒲埔朴圃普浦谱曝瀑期欺栖戚妻七凄漆柒沏其棋奇歧畦崎脐齐旗祈祁骑起岂乞企启契砌器气迄弃汽泣讫掐'
      ],
      [
        'c740',
        '茾茿荁荂荄荅荈荊',
        4,
        '荓荕',
        4,
        '荝荢荰',
        6,
        '荹荺荾',
        6,
        '莇莈莊莋莌莍莏莐莑莔莕莖莗莙莚莝莟莡',
        6,
        '莬莭莮'
      ],
      [
        'c780',
        '莯莵莻莾莿菂菃菄菆菈菉菋菍菎菐菑菒菓菕菗菙菚菛菞菢菣菤菦菧菨菫菬菭恰洽牵扦钎铅千迁签仟谦乾黔钱钳前潜遣浅谴堑嵌欠歉枪呛腔羌墙蔷强抢橇锹敲悄桥瞧乔侨巧鞘撬翘峭俏窍切茄且怯窃钦侵亲秦琴勤芹擒禽寝沁青轻氢倾卿清擎晴氰情顷请庆琼穷秋丘邱球求囚酋泅趋区蛆曲躯屈驱渠'
      ],
      [
        'c840',
        '菮華菳',
        4,
        '菺菻菼菾菿萀萂萅萇萈萉萊萐萒',
        5,
        '萙萚萛萞',
        5,
        '萩',
        7,
        '萲',
        5,
        '萹萺萻萾',
        7,
        '葇葈葉'
      ],
      [
        'c880',
        '葊',
        6,
        '葒',
        4,
        '葘葝葞葟葠葢葤',
        4,
        '葪葮葯葰葲葴葷葹葻葼取娶龋趣去圈颧权醛泉全痊拳犬券劝缺炔瘸却鹊榷确雀裙群然燃冉染瓤壤攘嚷让饶扰绕惹热壬仁人忍韧任认刃妊纫扔仍日戎茸蓉荣融熔溶容绒冗揉柔肉茹蠕儒孺如辱乳汝入褥软阮蕊瑞锐闰润若弱撒洒萨腮鳃塞赛三叁'
      ],
      [
        'c940',
        '葽',
        4,
        '蒃蒄蒅蒆蒊蒍蒏',
        7,
        '蒘蒚蒛蒝蒞蒟蒠蒢',
        12,
        '蒰蒱蒳蒵蒶蒷蒻蒼蒾蓀蓂蓃蓅蓆蓇蓈蓋蓌蓎蓏蓒蓔蓕蓗'
      ],
      [
        'c980',
        '蓘',
        4,
        '蓞蓡蓢蓤蓧',
        4,
        '蓭蓮蓯蓱',
        10,
        '蓽蓾蔀蔁蔂伞散桑嗓丧搔骚扫嫂瑟色涩森僧莎砂杀刹沙纱傻啥煞筛晒珊苫杉山删煽衫闪陕擅赡膳善汕扇缮墒伤商赏晌上尚裳梢捎稍烧芍勺韶少哨邵绍奢赊蛇舌舍赦摄射慑涉社设砷申呻伸身深娠绅神沈审婶甚肾慎渗声生甥牲升绳'
      ],
      [
        'ca40',
        '蔃',
        8,
        '蔍蔎蔏蔐蔒蔔蔕蔖蔘蔙蔛蔜蔝蔞蔠蔢',
        8,
        '蔭',
        9,
        '蔾',
        4,
        '蕄蕅蕆蕇蕋',
        10
      ],
      [
        'ca80',
        '蕗蕘蕚蕛蕜蕝蕟',
        4,
        '蕥蕦蕧蕩',
        8,
        '蕳蕵蕶蕷蕸蕼蕽蕿薀薁省盛剩胜圣师失狮施湿诗尸虱十石拾时什食蚀实识史矢使屎驶始式示士世柿事拭誓逝势是嗜噬适仕侍释饰氏市恃室视试收手首守寿授售受瘦兽蔬枢梳殊抒输叔舒淑疏书赎孰熟薯暑曙署蜀黍鼠属术述树束戍竖墅庶数漱'
      ],
      [
        'cb40',
        '薂薃薆薈',
        6,
        '薐',
        10,
        '薝',
        6,
        '薥薦薧薩薫薬薭薱',
        5,
        '薸薺',
        6,
        '藂',
        6,
        '藊',
        4,
        '藑藒'
      ],
      [
        'cb80',
        '藔藖',
        5,
        '藝',
        6,
        '藥藦藧藨藪',
        14,
        '恕刷耍摔衰甩帅栓拴霜双爽谁水睡税吮瞬顺舜说硕朔烁斯撕嘶思私司丝死肆寺嗣四伺似饲巳松耸怂颂送宋讼诵搜艘擞嗽苏酥俗素速粟僳塑溯宿诉肃酸蒜算虽隋随绥髓碎岁穗遂隧祟孙损笋蓑梭唆缩琐索锁所塌他它她塔'
      ],
      [
        'cc40',
        '藹藺藼藽藾蘀',
        4,
        '蘆',
        10,
        '蘒蘓蘔蘕蘗',
        15,
        '蘨蘪',
        13,
        '蘹蘺蘻蘽蘾蘿虀'
      ],
      [
        'cc80',
        '虁',
        11,
        '虒虓處',
        4,
        '虛虜虝號虠虡虣',
        7,
        '獭挞蹋踏胎苔抬台泰酞太态汰坍摊贪瘫滩坛檀痰潭谭谈坦毯袒碳探叹炭汤塘搪堂棠膛唐糖倘躺淌趟烫掏涛滔绦萄桃逃淘陶讨套特藤腾疼誊梯剔踢锑提题蹄啼体替嚏惕涕剃屉天添填田甜恬舔腆挑条迢眺跳贴铁帖厅听烃'
      ],
      [
        'cd40',
        '虭虯虰虲',
        6,
        '蚃',
        6,
        '蚎',
        4,
        '蚔蚖',
        5,
        '蚞',
        4,
        '蚥蚦蚫蚭蚮蚲蚳蚷蚸蚹蚻',
        4,
        '蛁蛂蛃蛅蛈蛌蛍蛒蛓蛕蛖蛗蛚蛜'
      ],
      [
        'cd80',
        '蛝蛠蛡蛢蛣蛥蛦蛧蛨蛪蛫蛬蛯蛵蛶蛷蛺蛻蛼蛽蛿蜁蜄蜅蜆蜋蜌蜎蜏蜐蜑蜔蜖汀廷停亭庭挺艇通桐酮瞳同铜彤童桶捅筒统痛偷投头透凸秃突图徒途涂屠土吐兔湍团推颓腿蜕褪退吞屯臀拖托脱鸵陀驮驼椭妥拓唾挖哇蛙洼娃瓦袜歪外豌弯湾玩顽丸烷完碗挽晚皖惋宛婉万腕汪王亡枉网往旺望忘妄威'
      ],
      [
        'ce40',
        '蜙蜛蜝蜟蜠蜤蜦蜧蜨蜪蜫蜬蜭蜯蜰蜲蜳蜵蜶蜸蜹蜺蜼蜽蝀',
        6,
        '蝊蝋蝍蝏蝐蝑蝒蝔蝕蝖蝘蝚',
        5,
        '蝡蝢蝦',
        7,
        '蝯蝱蝲蝳蝵'
      ],
      [
        'ce80',
        '蝷蝸蝹蝺蝿螀螁螄螆螇螉螊螌螎',
        4,
        '螔螕螖螘',
        6,
        '螠',
        4,
        '巍微危韦违桅围唯惟为潍维苇萎委伟伪尾纬未蔚味畏胃喂魏位渭谓尉慰卫瘟温蚊文闻纹吻稳紊问嗡翁瓮挝蜗涡窝我斡卧握沃巫呜钨乌污诬屋无芜梧吾吴毋武五捂午舞伍侮坞戊雾晤物勿务悟误昔熙析西硒矽晰嘻吸锡牺'
      ],
      [
        'cf40',
        '螥螦螧螩螪螮螰螱螲螴螶螷螸螹螻螼螾螿蟁',
        4,
        '蟇蟈蟉蟌',
        4,
        '蟔',
        6,
        '蟜蟝蟞蟟蟡蟢蟣蟤蟦蟧蟨蟩蟫蟬蟭蟯',
        9
      ],
      [
        'cf80',
        '蟺蟻蟼蟽蟿蠀蠁蠂蠄',
        5,
        '蠋',
        7,
        '蠔蠗蠘蠙蠚蠜',
        4,
        '蠣稀息希悉膝夕惜熄烯溪汐犀檄袭席习媳喜铣洗系隙戏细瞎虾匣霞辖暇峡侠狭下厦夏吓掀锨先仙鲜纤咸贤衔舷闲涎弦嫌显险现献县腺馅羡宪陷限线相厢镶香箱襄湘乡翔祥详想响享项巷橡像向象萧硝霄削哮嚣销消宵淆晓'
      ],
      [
        'd040',
        '蠤',
        13,
        '蠳',
        5,
        '蠺蠻蠽蠾蠿衁衂衃衆',
        5,
        '衎',
        5,
        '衕衖衘衚',
        6,
        '衦衧衪衭衯衱衳衴衵衶衸衹衺'
      ],
      [
        'd080',
        '衻衼袀袃袆袇袉袊袌袎袏袐袑袓袔袕袗',
        4,
        '袝',
        4,
        '袣袥',
        5,
        '小孝校肖啸笑效楔些歇蝎鞋协挟携邪斜胁谐写械卸蟹懈泄泻谢屑薪芯锌欣辛新忻心信衅星腥猩惺兴刑型形邢行醒幸杏性姓兄凶胸匈汹雄熊休修羞朽嗅锈秀袖绣墟戌需虚嘘须徐许蓄酗叙旭序畜恤絮婿绪续轩喧宣悬旋玄'
      ],
      [
        'd140',
        '袬袮袯袰袲',
        4,
        '袸袹袺袻袽袾袿裀裃裄裇裈裊裋裌裍裏裐裑裓裖裗裚',
        4,
        '裠裡裦裧裩',
        6,
        '裲裵裶裷裺裻製裿褀褁褃',
        5
      ],
      [
        'd180',
        '褉褋',
        4,
        '褑褔',
        4,
        '褜',
        4,
        '褢褣褤褦褧褨褩褬褭褮褯褱褲褳褵褷选癣眩绚靴薛学穴雪血勋熏循旬询寻驯巡殉汛训讯逊迅压押鸦鸭呀丫芽牙蚜崖衙涯雅哑亚讶焉咽阉烟淹盐严研蜒岩延言颜阎炎沿奄掩眼衍演艳堰燕厌砚雁唁彦焰宴谚验殃央鸯秧杨扬佯疡羊洋阳氧仰痒养样漾邀腰妖瑶'
      ],
      ['d240', '褸', 8, '襂襃襅', 24, '襠', 5, '襧', 19, '襼'],
      [
        'd280',
        '襽襾覀覂覄覅覇',
        26,
        '摇尧遥窑谣姚咬舀药要耀椰噎耶爷野冶也页掖业叶曳腋夜液一壹医揖铱依伊衣颐夷遗移仪胰疑沂宜姨彝椅蚁倚已乙矣以艺抑易邑屹亿役臆逸肄疫亦裔意毅忆义益溢诣议谊译异翼翌绎茵荫因殷音阴姻吟银淫寅饮尹引隐'
      ],
      [
        'd340',
        '覢',
        30,
        '觃觍觓觔觕觗觘觙觛觝觟觠觡觢觤觧觨觩觪觬觭觮觰觱觲觴',
        6
      ],
      [
        'd380',
        '觻',
        4,
        '訁',
        5,
        '計',
        21,
        '印英樱婴鹰应缨莹萤营荧蝇迎赢盈影颖硬映哟拥佣臃痈庸雍踊蛹咏泳涌永恿勇用幽优悠忧尤由邮铀犹油游酉有友右佑釉诱又幼迂淤于盂榆虞愚舆余俞逾鱼愉渝渔隅予娱雨与屿禹宇语羽玉域芋郁吁遇喻峪御愈欲狱育誉'
      ],
      ['d440', '訞', 31, '訿', 8, '詉', 21],
      [
        'd480',
        '詟',
        25,
        '詺',
        6,
        '浴寓裕预豫驭鸳渊冤元垣袁原援辕园员圆猿源缘远苑愿怨院曰约越跃钥岳粤月悦阅耘云郧匀陨允运蕴酝晕韵孕匝砸杂栽哉灾宰载再在咱攒暂赞赃脏葬遭糟凿藻枣早澡蚤躁噪造皂灶燥责择则泽贼怎增憎曾赠扎喳渣札轧'
      ],
      ['d540', '誁', 7, '誋', 7, '誔', 46],
      [
        'd580',
        '諃',
        32,
        '铡闸眨栅榨咋乍炸诈摘斋宅窄债寨瞻毡詹粘沾盏斩辗崭展蘸栈占战站湛绽樟章彰漳张掌涨杖丈帐账仗胀瘴障招昭找沼赵照罩兆肇召遮折哲蛰辙者锗蔗这浙珍斟真甄砧臻贞针侦枕疹诊震振镇阵蒸挣睁征狰争怔整拯正政'
      ],
      ['d640', '諤', 34, '謈', 27],
      [
        'd680',
        '謤謥謧',
        30,
        '帧症郑证芝枝支吱蜘知肢脂汁之织职直植殖执值侄址指止趾只旨纸志挚掷至致置帜峙制智秩稚质炙痔滞治窒中盅忠钟衷终种肿重仲众舟周州洲诌粥轴肘帚咒皱宙昼骤珠株蛛朱猪诸诛逐竹烛煮拄瞩嘱主著柱助蛀贮铸筑'
      ],
      ['d740', '譆', 31, '譧', 4, '譭', 25],
      [
        'd780',
        '讇',
        24,
        '讬讱讻诇诐诪谉谞住注祝驻抓爪拽专砖转撰赚篆桩庄装妆撞壮状椎锥追赘坠缀谆准捉拙卓桌琢茁酌啄着灼浊兹咨资姿滋淄孜紫仔籽滓子自渍字鬃棕踪宗综总纵邹走奏揍租足卒族祖诅阻组钻纂嘴醉最罪尊遵昨左佐柞做作坐座'
      ],
      [
        'd840',
        '谸',
        8,
        '豂豃豄豅豈豊豋豍',
        7,
        '豖豗豘豙豛',
        5,
        '豣',
        6,
        '豬',
        6,
        '豴豵豶豷豻',
        6,
        '貃貄貆貇'
      ],
      [
        'd880',
        '貈貋貍',
        6,
        '貕貖貗貙',
        20,
        '亍丌兀丐廿卅丕亘丞鬲孬噩丨禺丿匕乇夭爻卮氐囟胤馗毓睾鼗丶亟鼐乜乩亓芈孛啬嘏仄厍厝厣厥厮靥赝匚叵匦匮匾赜卦卣刂刈刎刭刳刿剀剌剞剡剜蒯剽劂劁劐劓冂罔亻仃仉仂仨仡仫仞伛仳伢佤仵伥伧伉伫佞佧攸佚佝'
      ],
      ['d940', '貮', 62],
      [
        'd980',
        '賭',
        32,
        '佟佗伲伽佶佴侑侉侃侏佾佻侪佼侬侔俦俨俪俅俚俣俜俑俟俸倩偌俳倬倏倮倭俾倜倌倥倨偾偃偕偈偎偬偻傥傧傩傺僖儆僭僬僦僮儇儋仝氽佘佥俎龠汆籴兮巽黉馘冁夔勹匍訇匐凫夙兕亠兖亳衮袤亵脔裒禀嬴蠃羸冫冱冽冼'
      ],
      [
        'da40',
        '贎',
        14,
        '贠赑赒赗赟赥赨赩赪赬赮赯赱赲赸',
        8,
        '趂趃趆趇趈趉趌',
        4,
        '趒趓趕',
        9,
        '趠趡'
      ],
      [
        'da80',
        '趢趤',
        12,
        '趲趶趷趹趻趽跀跁跂跅跇跈跉跊跍跐跒跓跔凇冖冢冥讠讦讧讪讴讵讷诂诃诋诏诎诒诓诔诖诘诙诜诟诠诤诨诩诮诰诳诶诹诼诿谀谂谄谇谌谏谑谒谔谕谖谙谛谘谝谟谠谡谥谧谪谫谮谯谲谳谵谶卩卺阝阢阡阱阪阽阼陂陉陔陟陧陬陲陴隈隍隗隰邗邛邝邙邬邡邴邳邶邺'
      ],
      [
        'db40',
        '跕跘跙跜跠跡跢跥跦跧跩跭跮跰跱跲跴跶跼跾',
        6,
        '踆踇踈踋踍踎踐踑踒踓踕',
        7,
        '踠踡踤',
        4,
        '踫踭踰踲踳踴踶踷踸踻踼踾'
      ],
      [
        'db80',
        '踿蹃蹅蹆蹌',
        4,
        '蹓',
        5,
        '蹚',
        11,
        '蹧蹨蹪蹫蹮蹱邸邰郏郅邾郐郄郇郓郦郢郜郗郛郫郯郾鄄鄢鄞鄣鄱鄯鄹酃酆刍奂劢劬劭劾哿勐勖勰叟燮矍廴凵凼鬯厶弁畚巯坌垩垡塾墼壅壑圩圬圪圳圹圮圯坜圻坂坩垅坫垆坼坻坨坭坶坳垭垤垌垲埏垧垴垓垠埕埘埚埙埒垸埴埯埸埤埝'
      ],
      [
        'dc40',
        '蹳蹵蹷',
        4,
        '蹽蹾躀躂躃躄躆躈',
        6,
        '躑躒躓躕',
        6,
        '躝躟',
        11,
        '躭躮躰躱躳',
        6,
        '躻',
        7
      ],
      [
        'dc80',
        '軃',
        10,
        '軏',
        21,
        '堋堍埽埭堀堞堙塄堠塥塬墁墉墚墀馨鼙懿艹艽艿芏芊芨芄芎芑芗芙芫芸芾芰苈苊苣芘芷芮苋苌苁芩芴芡芪芟苄苎芤苡茉苷苤茏茇苜苴苒苘茌苻苓茑茚茆茔茕苠苕茜荑荛荜茈莒茼茴茱莛荞茯荏荇荃荟荀茗荠茭茺茳荦荥'
      ],
      ['dd40', '軥', 62],
      [
        'dd80',
        '輤',
        32,
        '荨茛荩荬荪荭荮莰荸莳莴莠莪莓莜莅荼莶莩荽莸荻莘莞莨莺莼菁萁菥菘堇萘萋菝菽菖萜萸萑萆菔菟萏萃菸菹菪菅菀萦菰菡葜葑葚葙葳蒇蒈葺蒉葸萼葆葩葶蒌蒎萱葭蓁蓍蓐蓦蒽蓓蓊蒿蒺蓠蒡蒹蒴蒗蓥蓣蔌甍蔸蓰蔹蔟蔺'
      ],
      [
        'de40',
        '轅',
        32,
        '轪辀辌辒辝辠辡辢辤辥辦辧辪辬辭辮辯農辳辴辵辷辸辺辻込辿迀迃迆'
      ],
      [
        'de80',
        '迉',
        4,
        '迏迒迖迗迚迠迡迣迧迬迯迱迲迴迵迶迺迻迼迾迿逇逈逌逎逓逕逘蕖蔻蓿蓼蕙蕈蕨蕤蕞蕺瞢蕃蕲蕻薤薨薇薏蕹薮薜薅薹薷薰藓藁藜藿蘧蘅蘩蘖蘼廾弈夼奁耷奕奚奘匏尢尥尬尴扌扪抟抻拊拚拗拮挢拶挹捋捃掭揶捱捺掎掴捭掬掊捩掮掼揲揸揠揿揄揞揎摒揆掾摅摁搋搛搠搌搦搡摞撄摭撖'
      ],
      [
        'df40',
        '這逜連逤逥逧',
        5,
        '逰',
        4,
        '逷逹逺逽逿遀遃遅遆遈',
        4,
        '過達違遖遙遚遜',
        5,
        '遤遦遧適遪遫遬遯',
        4,
        '遶',
        6,
        '遾邁'
      ],
      [
        'df80',
        '還邅邆邇邉邊邌',
        4,
        '邒邔邖邘邚邜邞邟邠邤邥邧邨邩邫邭邲邷邼邽邿郀摺撷撸撙撺擀擐擗擤擢攉攥攮弋忒甙弑卟叱叽叩叨叻吒吖吆呋呒呓呔呖呃吡呗呙吣吲咂咔呷呱呤咚咛咄呶呦咝哐咭哂咴哒咧咦哓哔呲咣哕咻咿哌哙哚哜咩咪咤哝哏哞唛哧唠哽唔哳唢唣唏唑唧唪啧喏喵啉啭啁啕唿啐唼'
      ],
      [
        'e040',
        '郂郃郆郈郉郋郌郍郒郔郕郖郘郙郚郞郟郠郣郤郥郩郪郬郮郰郱郲郳郵郶郷郹郺郻郼郿鄀鄁鄃鄅',
        19,
        '鄚鄛鄜'
      ],
      [
        'e080',
        '鄝鄟鄠鄡鄤',
        10,
        '鄰鄲',
        6,
        '鄺',
        8,
        '酄唷啖啵啶啷唳唰啜喋嗒喃喱喹喈喁喟啾嗖喑啻嗟喽喾喔喙嗪嗷嗉嘟嗑嗫嗬嗔嗦嗝嗄嗯嗥嗲嗳嗌嗍嗨嗵嗤辔嘞嘈嘌嘁嘤嘣嗾嘀嘧嘭噘嘹噗嘬噍噢噙噜噌噔嚆噤噱噫噻噼嚅嚓嚯囔囗囝囡囵囫囹囿圄圊圉圜帏帙帔帑帱帻帼'
      ],
      [
        'e140',
        '酅酇酈酑酓酔酕酖酘酙酛酜酟酠酦酧酨酫酭酳酺酻酼醀',
        4,
        '醆醈醊醎醏醓',
        6,
        '醜',
        5,
        '醤',
        5,
        '醫醬醰醱醲醳醶醷醸醹醻'
      ],
      [
        'e180',
        '醼',
        10,
        '釈釋釐釒',
        9,
        '針',
        8,
        '帷幄幔幛幞幡岌屺岍岐岖岈岘岙岑岚岜岵岢岽岬岫岱岣峁岷峄峒峤峋峥崂崃崧崦崮崤崞崆崛嵘崾崴崽嵬嵛嵯嵝嵫嵋嵊嵩嵴嶂嶙嶝豳嶷巅彳彷徂徇徉後徕徙徜徨徭徵徼衢彡犭犰犴犷犸狃狁狎狍狒狨狯狩狲狴狷猁狳猃狺'
      ],
      ['e240', '釦', 62],
      [
        'e280',
        '鈥',
        32,
        '狻猗猓猡猊猞猝猕猢猹猥猬猸猱獐獍獗獠獬獯獾舛夥飧夤夂饣饧',
        5,
        '饴饷饽馀馄馇馊馍馐馑馓馔馕庀庑庋庖庥庠庹庵庾庳赓廒廑廛廨廪膺忄忉忖忏怃忮怄忡忤忾怅怆忪忭忸怙怵怦怛怏怍怩怫怊怿怡恸恹恻恺恂'
      ],
      ['e340', '鉆', 45, '鉵', 16],
      [
        'e380',
        '銆',
        7,
        '銏',
        24,
        '恪恽悖悚悭悝悃悒悌悛惬悻悱惝惘惆惚悴愠愦愕愣惴愀愎愫慊慵憬憔憧憷懔懵忝隳闩闫闱闳闵闶闼闾阃阄阆阈阊阋阌阍阏阒阕阖阗阙阚丬爿戕氵汔汜汊沣沅沐沔沌汨汩汴汶沆沩泐泔沭泷泸泱泗沲泠泖泺泫泮沱泓泯泾'
      ],
      ['e440', '銨', 5, '銯', 24, '鋉', 31],
      [
        'e480',
        '鋩',
        32,
        '洹洧洌浃浈洇洄洙洎洫浍洮洵洚浏浒浔洳涑浯涞涠浞涓涔浜浠浼浣渚淇淅淞渎涿淠渑淦淝淙渖涫渌涮渫湮湎湫溲湟溆湓湔渲渥湄滟溱溘滠漭滢溥溧溽溻溷滗溴滏溏滂溟潢潆潇漤漕滹漯漶潋潴漪漉漩澉澍澌潸潲潼潺濑'
      ],
      ['e540', '錊', 51, '錿', 10],
      [
        'e580',
        '鍊',
        31,
        '鍫濉澧澹澶濂濡濮濞濠濯瀚瀣瀛瀹瀵灏灞宀宄宕宓宥宸甯骞搴寤寮褰寰蹇謇辶迓迕迥迮迤迩迦迳迨逅逄逋逦逑逍逖逡逵逶逭逯遄遑遒遐遨遘遢遛暹遴遽邂邈邃邋彐彗彖彘尻咫屐屙孱屣屦羼弪弩弭艴弼鬻屮妁妃妍妩妪妣'
      ],
      ['e640', '鍬', 34, '鎐', 27],
      [
        'e680',
        '鎬',
        29,
        '鏋鏌鏍妗姊妫妞妤姒妲妯姗妾娅娆姝娈姣姘姹娌娉娲娴娑娣娓婀婧婊婕娼婢婵胬媪媛婷婺媾嫫媲嫒嫔媸嫠嫣嫱嫖嫦嫘嫜嬉嬗嬖嬲嬷孀尕尜孚孥孳孑孓孢驵驷驸驺驿驽骀骁骅骈骊骐骒骓骖骘骛骜骝骟骠骢骣骥骧纟纡纣纥纨纩'
      ],
      ['e740', '鏎', 7, '鏗', 54],
      [
        'e780',
        '鐎',
        32,
        '纭纰纾绀绁绂绉绋绌绐绔绗绛绠绡绨绫绮绯绱绲缍绶绺绻绾缁缂缃缇缈缋缌缏缑缒缗缙缜缛缟缡',
        6,
        '缪缫缬缭缯',
        4,
        '缵幺畿巛甾邕玎玑玮玢玟珏珂珑玷玳珀珉珈珥珙顼琊珩珧珞玺珲琏琪瑛琦琥琨琰琮琬'
      ],
      ['e840', '鐯', 14, '鐿', 43, '鑬鑭鑮鑯'],
      [
        'e880',
        '鑰',
        20,
        '钑钖钘铇铏铓铔铚铦铻锜锠琛琚瑁瑜瑗瑕瑙瑷瑭瑾璜璎璀璁璇璋璞璨璩璐璧瓒璺韪韫韬杌杓杞杈杩枥枇杪杳枘枧杵枨枞枭枋杷杼柰栉柘栊柩枰栌柙枵柚枳柝栀柃枸柢栎柁柽栲栳桠桡桎桢桄桤梃栝桕桦桁桧桀栾桊桉栩梵梏桴桷梓桫棂楮棼椟椠棹'
      ],
      ['e940', '锧锳锽镃镈镋镕镚镠镮镴镵長', 7, '門', 42],
      [
        'e980',
        '閫',
        32,
        '椤棰椋椁楗棣椐楱椹楠楂楝榄楫榀榘楸椴槌榇榈槎榉楦楣楹榛榧榻榫榭槔榱槁槊槟榕槠榍槿樯槭樗樘橥槲橄樾檠橐橛樵檎橹樽樨橘橼檑檐檩檗檫猷獒殁殂殇殄殒殓殍殚殛殡殪轫轭轱轲轳轵轶轸轷轹轺轼轾辁辂辄辇辋'
      ],
      [
        'ea40',
        '闌',
        27,
        '闬闿阇阓阘阛阞阠阣',
        6,
        '阫阬阭阯阰阷阸阹阺阾陁陃陊陎陏陑陒陓陖陗'
      ],
      [
        'ea80',
        '陘陙陚陜陝陞陠陣陥陦陫陭',
        4,
        '陳陸',
        12,
        '隇隉隊辍辎辏辘辚軎戋戗戛戟戢戡戥戤戬臧瓯瓴瓿甏甑甓攴旮旯旰昊昙杲昃昕昀炅曷昝昴昱昶昵耆晟晔晁晏晖晡晗晷暄暌暧暝暾曛曜曦曩贲贳贶贻贽赀赅赆赈赉赇赍赕赙觇觊觋觌觎觏觐觑牮犟牝牦牯牾牿犄犋犍犏犒挈挲掰'
      ],
      [
        'eb40',
        '隌階隑隒隓隕隖隚際隝',
        9,
        '隨',
        7,
        '隱隲隴隵隷隸隺隻隿雂雃雈雊雋雐雑雓雔雖',
        9,
        '雡',
        6,
        '雫'
      ],
      [
        'eb80',
        '雬雭雮雰雱雲雴雵雸雺電雼雽雿霂霃霅霊霋霌霐霑霒霔霕霗',
        4,
        '霝霟霠搿擘耄毪毳毽毵毹氅氇氆氍氕氘氙氚氡氩氤氪氲攵敕敫牍牒牖爰虢刖肟肜肓肼朊肽肱肫肭肴肷胧胨胩胪胛胂胄胙胍胗朐胝胫胱胴胭脍脎胲胼朕脒豚脶脞脬脘脲腈腌腓腴腙腚腱腠腩腼腽腭腧塍媵膈膂膑滕膣膪臌朦臊膻'
      ],
      [
        'ec40',
        '霡',
        8,
        '霫霬霮霯霱霳',
        4,
        '霺霻霼霽霿',
        18,
        '靔靕靗靘靚靜靝靟靣靤靦靧靨靪',
        7
      ],
      [
        'ec80',
        '靲靵靷',
        4,
        '靽',
        7,
        '鞆',
        4,
        '鞌鞎鞏鞐鞓鞕鞖鞗鞙',
        4,
        '臁膦欤欷欹歃歆歙飑飒飓飕飙飚殳彀毂觳斐齑斓於旆旄旃旌旎旒旖炀炜炖炝炻烀炷炫炱烨烊焐焓焖焯焱煳煜煨煅煲煊煸煺熘熳熵熨熠燠燔燧燹爝爨灬焘煦熹戾戽扃扈扉礻祀祆祉祛祜祓祚祢祗祠祯祧祺禅禊禚禧禳忑忐'
      ],
      ['ed40', '鞞鞟鞡鞢鞤', 6, '鞬鞮鞰鞱鞳鞵', 46],
      [
        'ed80',
        '韤韥韨韮',
        4,
        '韴韷',
        23,
        '怼恝恚恧恁恙恣悫愆愍慝憩憝懋懑戆肀聿沓泶淼矶矸砀砉砗砘砑斫砭砜砝砹砺砻砟砼砥砬砣砩硎硭硖硗砦硐硇硌硪碛碓碚碇碜碡碣碲碹碥磔磙磉磬磲礅磴礓礤礞礴龛黹黻黼盱眄眍盹眇眈眚眢眙眭眦眵眸睐睑睇睃睚睨'
      ],
      ['ee40', '頏', 62],
      [
        'ee80',
        '顎',
        32,
        '睢睥睿瞍睽瞀瞌瞑瞟瞠瞰瞵瞽町畀畎畋畈畛畲畹疃罘罡罟詈罨罴罱罹羁罾盍盥蠲钅钆钇钋钊钌钍钏钐钔钗钕钚钛钜钣钤钫钪钭钬钯钰钲钴钶',
        4,
        '钼钽钿铄铈',
        6,
        '铐铑铒铕铖铗铙铘铛铞铟铠铢铤铥铧铨铪'
      ],
      ['ef40', '顯', 5, '颋颎颒颕颙颣風', 37, '飏飐飔飖飗飛飜飝飠', 4],
      [
        'ef80',
        '飥飦飩',
        30,
        '铩铫铮铯铳铴铵铷铹铼铽铿锃锂锆锇锉锊锍锎锏锒',
        4,
        '锘锛锝锞锟锢锪锫锩锬锱锲锴锶锷锸锼锾锿镂锵镄镅镆镉镌镎镏镒镓镔镖镗镘镙镛镞镟镝镡镢镤',
        8,
        '镯镱镲镳锺矧矬雉秕秭秣秫稆嵇稃稂稞稔'
      ],
      ['f040', '餈', 4, '餎餏餑', 28, '餯', 26],
      [
        'f080',
        '饊',
        9,
        '饖',
        12,
        '饤饦饳饸饹饻饾馂馃馉稹稷穑黏馥穰皈皎皓皙皤瓞瓠甬鸠鸢鸨',
        4,
        '鸲鸱鸶鸸鸷鸹鸺鸾鹁鹂鹄鹆鹇鹈鹉鹋鹌鹎鹑鹕鹗鹚鹛鹜鹞鹣鹦',
        6,
        '鹱鹭鹳疒疔疖疠疝疬疣疳疴疸痄疱疰痃痂痖痍痣痨痦痤痫痧瘃痱痼痿瘐瘀瘅瘌瘗瘊瘥瘘瘕瘙'
      ],
      ['f140', '馌馎馚', 10, '馦馧馩', 47],
      [
        'f180',
        '駙',
        32,
        '瘛瘼瘢瘠癀瘭瘰瘿瘵癃瘾瘳癍癞癔癜癖癫癯翊竦穸穹窀窆窈窕窦窠窬窨窭窳衤衩衲衽衿袂袢裆袷袼裉裢裎裣裥裱褚裼裨裾裰褡褙褓褛褊褴褫褶襁襦襻疋胥皲皴矜耒耔耖耜耠耢耥耦耧耩耨耱耋耵聃聆聍聒聩聱覃顸颀颃'
      ],
      ['f240', '駺', 62],
      [
        'f280',
        '騹',
        32,
        '颉颌颍颏颔颚颛颞颟颡颢颥颦虍虔虬虮虿虺虼虻蚨蚍蚋蚬蚝蚧蚣蚪蚓蚩蚶蛄蚵蛎蚰蚺蚱蚯蛉蛏蚴蛩蛱蛲蛭蛳蛐蜓蛞蛴蛟蛘蛑蜃蜇蛸蜈蜊蜍蜉蜣蜻蜞蜥蜮蜚蜾蝈蜴蜱蜩蜷蜿螂蜢蝽蝾蝻蝠蝰蝌蝮螋蝓蝣蝼蝤蝙蝥螓螯螨蟒'
      ],
      [
        'f340',
        '驚',
        17,
        '驲骃骉骍骎骔骕骙骦骩',
        6,
        '骲骳骴骵骹骻骽骾骿髃髄髆',
        4,
        '髍髎髏髐髒體髕髖髗髙髚髛髜'
      ],
      [
        'f380',
        '髝髞髠髢髣髤髥髧髨髩髪髬髮髰',
        8,
        '髺髼',
        6,
        '鬄鬅鬆蟆螈螅螭螗螃螫蟥螬螵螳蟋蟓螽蟑蟀蟊蟛蟪蟠蟮蠖蠓蟾蠊蠛蠡蠹蠼缶罂罄罅舐竺竽笈笃笄笕笊笫笏筇笸笪笙笮笱笠笥笤笳笾笞筘筚筅筵筌筝筠筮筻筢筲筱箐箦箧箸箬箝箨箅箪箜箢箫箴篑篁篌篝篚篥篦篪簌篾篼簏簖簋'
      ],
      [
        'f440',
        '鬇鬉',
        5,
        '鬐鬑鬒鬔',
        10,
        '鬠鬡鬢鬤',
        10,
        '鬰鬱鬳',
        7,
        '鬽鬾鬿魀魆魊魋魌魎魐魒魓魕',
        5
      ],
      [
        'f480',
        '魛',
        32,
        '簟簪簦簸籁籀臾舁舂舄臬衄舡舢舣舭舯舨舫舸舻舳舴舾艄艉艋艏艚艟艨衾袅袈裘裟襞羝羟羧羯羰羲籼敉粑粝粜粞粢粲粼粽糁糇糌糍糈糅糗糨艮暨羿翎翕翥翡翦翩翮翳糸絷綦綮繇纛麸麴赳趄趔趑趱赧赭豇豉酊酐酎酏酤'
      ],
      ['f540', '魼', 62],
      [
        'f580',
        '鮻',
        32,
        '酢酡酰酩酯酽酾酲酴酹醌醅醐醍醑醢醣醪醭醮醯醵醴醺豕鹾趸跫踅蹙蹩趵趿趼趺跄跖跗跚跞跎跏跛跆跬跷跸跣跹跻跤踉跽踔踝踟踬踮踣踯踺蹀踹踵踽踱蹉蹁蹂蹑蹒蹊蹰蹶蹼蹯蹴躅躏躔躐躜躞豸貂貊貅貘貔斛觖觞觚觜'
      ],
      ['f640', '鯜', 62],
      [
        'f680',
        '鰛',
        32,
        '觥觫觯訾謦靓雩雳雯霆霁霈霏霎霪霭霰霾龀龃龅',
        5,
        '龌黾鼋鼍隹隼隽雎雒瞿雠銎銮鋈錾鍪鏊鎏鐾鑫鱿鲂鲅鲆鲇鲈稣鲋鲎鲐鲑鲒鲔鲕鲚鲛鲞',
        5,
        '鲥',
        4,
        '鲫鲭鲮鲰',
        7,
        '鲺鲻鲼鲽鳄鳅鳆鳇鳊鳋'
      ],
      ['f740', '鰼', 62],
      [
        'f780',
        '鱻鱽鱾鲀鲃鲄鲉鲊鲌鲏鲓鲖鲗鲘鲙鲝鲪鲬鲯鲹鲾',
        4,
        '鳈鳉鳑鳒鳚鳛鳠鳡鳌',
        4,
        '鳓鳔鳕鳗鳘鳙鳜鳝鳟鳢靼鞅鞑鞒鞔鞯鞫鞣鞲鞴骱骰骷鹘骶骺骼髁髀髅髂髋髌髑魅魃魇魉魈魍魑飨餍餮饕饔髟髡髦髯髫髻髭髹鬈鬏鬓鬟鬣麽麾縻麂麇麈麋麒鏖麝麟黛黜黝黠黟黢黩黧黥黪黯鼢鼬鼯鼹鼷鼽鼾齄'
      ],
      ['f840', '鳣', 62],
      ['f880', '鴢', 32],
      ['f940', '鵃', 62],
      ['f980', '鶂', 32],
      ['fa40', '鶣', 62],
      ['fa80', '鷢', 32],
      [
        'fb40',
        '鸃',
        27,
        '鸤鸧鸮鸰鸴鸻鸼鹀鹍鹐鹒鹓鹔鹖鹙鹝鹟鹠鹡鹢鹥鹮鹯鹲鹴',
        9,
        '麀'
      ],
      ['fb80', '麁麃麄麅麆麉麊麌', 5, '麔', 8, '麞麠', 5, '麧麨麩麪'],
      [
        'fc40',
        '麫',
        8,
        '麵麶麷麹麺麼麿',
        4,
        '黅黆黇黈黊黋黌黐黒黓黕黖黗黙黚點黡黣黤黦黨黫黬黭黮黰',
        8,
        '黺黽黿',
        6
      ],
      ['fc80', '鼆', 4, '鼌鼏鼑鼒鼔鼕鼖鼘鼚', 5, '鼡鼣', 8, '鼭鼮鼰鼱'],
      ['fd40', '鼲', 4, '鼸鼺鼼鼿', 4, '齅', 10, '齒', 38],
      ['fd80', '齹', 5, '龁龂龍', 11, '龜龝龞龡', 4, '郎凉秊裏隣'],
      ['fe40', '兀嗀﨎﨏﨑﨓﨔礼﨟蘒﨡﨣﨤﨧﨨﨩']
    ]
  }),
  $c = Object.freeze({
    __proto__: null,
    default: [
      ['a140', '', 62],
      ['a180', '', 32],
      ['a240', '', 62],
      ['a280', '', 32],
      ['a2ab', '', 5],
      ['a2e3', '€'],
      ['a2ef', ''],
      ['a2fd', ''],
      ['a340', '', 62],
      ['a380', '', 31, '　'],
      ['a440', '', 62],
      ['a480', '', 32],
      ['a4f4', '', 10],
      ['a540', '', 62],
      ['a580', '', 32],
      ['a5f7', '', 7],
      ['a640', '', 62],
      ['a680', '', 32],
      ['a6b9', '', 7],
      ['a6d9', '', 6],
      ['a6ec', ''],
      ['a6f3', ''],
      ['a6f6', '', 8],
      ['a740', '', 62],
      ['a780', '', 32],
      ['a7c2', '', 14],
      ['a7f2', '', 12],
      ['a896', '', 10],
      ['a8bc', ''],
      ['a8bf', 'ǹ'],
      ['a8c1', ''],
      ['a8ea', '', 20],
      ['a958', ''],
      ['a95b', ''],
      ['a95d', ''],
      ['a989', '〾⿰', 11],
      ['a997', '', 12],
      ['a9f0', '', 14],
      ['aaa1', '', 93],
      ['aba1', '', 93],
      ['aca1', '', 93],
      ['ada1', '', 93],
      ['aea1', '', 93],
      ['afa1', '', 93],
      ['d7fa', '', 4],
      ['f8a1', '', 93],
      ['f9a1', '', 93],
      ['faa1', '', 93],
      ['fba1', '', 93],
      ['fca1', '', 93],
      ['fda1', '', 93],
      [
        'fe50',
        '⺁⺄㑳㑇⺈⺋㖞㘚㘎⺌⺗㥮㤘㧏㧟㩳㧐㭎㱮㳠⺧⺪䁖䅟⺮䌷⺳⺶⺷䎱䎬⺻䏝䓖䙡䙌'
      ],
      [
        'fe80',
        '䜣䜩䝼䞍⻊䥇䥺䥽䦂䦃䦅䦆䦟䦛䦷䦶䲣䲟䲠䲡䱷䲢䴓',
        6,
        '䶮',
        93
      ]
    ]
  }),
  Kc = [
    128,
    165,
    169,
    178,
    184,
    216,
    226,
    235,
    238,
    244,
    248,
    251,
    253,
    258,
    276,
    284,
    300,
    325,
    329,
    334,
    364,
    463,
    465,
    467,
    469,
    471,
    473,
    475,
    477,
    506,
    594,
    610,
    712,
    716,
    730,
    930,
    938,
    962,
    970,
    1026,
    1104,
    1106,
    8209,
    8215,
    8218,
    8222,
    8231,
    8241,
    8244,
    8246,
    8252,
    8365,
    8452,
    8454,
    8458,
    8471,
    8482,
    8556,
    8570,
    8596,
    8602,
    8713,
    8720,
    8722,
    8726,
    8731,
    8737,
    8740,
    8742,
    8748,
    8751,
    8760,
    8766,
    8777,
    8781,
    8787,
    8802,
    8808,
    8816,
    8854,
    8858,
    8870,
    8896,
    8979,
    9322,
    9372,
    9548,
    9588,
    9616,
    9622,
    9634,
    9652,
    9662,
    9672,
    9676,
    9680,
    9702,
    9735,
    9738,
    9793,
    9795,
    11906,
    11909,
    11913,
    11917,
    11928,
    11944,
    11947,
    11951,
    11956,
    11960,
    11964,
    11979,
    12284,
    12292,
    12312,
    12319,
    12330,
    12351,
    12436,
    12447,
    12535,
    12543,
    12586,
    12842,
    12850,
    12964,
    13200,
    13215,
    13218,
    13253,
    13263,
    13267,
    13270,
    13384,
    13428,
    13727,
    13839,
    13851,
    14617,
    14703,
    14801,
    14816,
    14964,
    15183,
    15471,
    15585,
    16471,
    16736,
    17208,
    17325,
    17330,
    17374,
    17623,
    17997,
    18018,
    18212,
    18218,
    18301,
    18318,
    18760,
    18811,
    18814,
    18820,
    18823,
    18844,
    18848,
    18872,
    19576,
    19620,
    19738,
    19887,
    40870,
    59244,
    59336,
    59367,
    59413,
    59417,
    59423,
    59431,
    59437,
    59443,
    59452,
    59460,
    59478,
    59493,
    63789,
    63866,
    63894,
    63976,
    63986,
    64016,
    64018,
    64021,
    64025,
    64034,
    64037,
    64042,
    65074,
    65093,
    65107,
    65112,
    65127,
    65132,
    65375,
    65510,
    65536
  ],
  Gc = [
    0,
    36,
    38,
    45,
    50,
    81,
    89,
    95,
    96,
    100,
    103,
    104,
    105,
    109,
    126,
    133,
    148,
    172,
    175,
    179,
    208,
    306,
    307,
    308,
    309,
    310,
    311,
    312,
    313,
    341,
    428,
    443,
    544,
    545,
    558,
    741,
    742,
    749,
    750,
    805,
    819,
    820,
    7922,
    7924,
    7925,
    7927,
    7934,
    7943,
    7944,
    7945,
    7950,
    8062,
    8148,
    8149,
    8152,
    8164,
    8174,
    8236,
    8240,
    8262,
    8264,
    8374,
    8380,
    8381,
    8384,
    8388,
    8390,
    8392,
    8393,
    8394,
    8396,
    8401,
    8406,
    8416,
    8419,
    8424,
    8437,
    8439,
    8445,
    8482,
    8485,
    8496,
    8521,
    8603,
    8936,
    8946,
    9046,
    9050,
    9063,
    9066,
    9076,
    9092,
    9100,
    9108,
    9111,
    9113,
    9131,
    9162,
    9164,
    9218,
    9219,
    11329,
    11331,
    11334,
    11336,
    11346,
    11361,
    11363,
    11366,
    11370,
    11372,
    11375,
    11389,
    11682,
    11686,
    11687,
    11692,
    11694,
    11714,
    11716,
    11723,
    11725,
    11730,
    11736,
    11982,
    11989,
    12102,
    12336,
    12348,
    12350,
    12384,
    12393,
    12395,
    12397,
    12510,
    12553,
    12851,
    12962,
    12973,
    13738,
    13823,
    13919,
    13933,
    14080,
    14298,
    14585,
    14698,
    15583,
    15847,
    16318,
    16434,
    16438,
    16481,
    16729,
    17102,
    17122,
    17315,
    17320,
    17402,
    17418,
    17859,
    17909,
    17911,
    17915,
    17916,
    17936,
    17939,
    17961,
    18664,
    18703,
    18814,
    18962,
    19043,
    33469,
    33470,
    33471,
    33484,
    33485,
    33490,
    33497,
    33501,
    33505,
    33513,
    33520,
    33536,
    33550,
    37845,
    37921,
    37948,
    38029,
    38038,
    38064,
    38065,
    38066,
    38069,
    38075,
    38076,
    38078,
    39108,
    39109,
    39113,
    39114,
    39115,
    39116,
    39265,
    39394,
    189e3
  ],
  Yc = { uChars: Kc, gbChars: Gc },
  Hc = Object.freeze({ __proto__: null, uChars: Kc, gbChars: Gc, default: Yc }),
  Qc = Object.freeze({
    __proto__: null,
    default: [
      ['0', '\0', 127],
      ['8141', '갂갃갅갆갋', 4, '갘갞갟갡갢갣갥', 6, '갮갲갳갴'],
      ['8161', '갵갶갷갺갻갽갾갿걁', 9, '걌걎', 5, '걕'],
      [
        '8181',
        '걖걗걙걚걛걝',
        18,
        '걲걳걵걶걹걻',
        4,
        '겂겇겈겍겎겏겑겒겓겕',
        6,
        '겞겢',
        5,
        '겫겭겮겱',
        6,
        '겺겾겿곀곂곃곅곆곇곉곊곋곍',
        7,
        '곖곘',
        7,
        '곢곣곥곦곩곫곭곮곲곴곷',
        4,
        '곾곿괁괂괃괅괇',
        4,
        '괎괐괒괓'
      ],
      ['8241', '괔괕괖괗괙괚괛괝괞괟괡', 7, '괪괫괮', 5],
      ['8261', '괶괷괹괺괻괽', 6, '굆굈굊', 5, '굑굒굓굕굖굗'],
      [
        '8281',
        '굙',
        7,
        '굢굤',
        7,
        '굮굯굱굲굷굸굹굺굾궀궃',
        4,
        '궊궋궍궎궏궑',
        10,
        '궞',
        5,
        '궥',
        17,
        '궸',
        7,
        '귂귃귅귆귇귉',
        6,
        '귒귔',
        7,
        '귝귞귟귡귢귣귥',
        18
      ],
      ['8341', '귺귻귽귾긂', 5, '긊긌긎', 5, '긕', 7],
      ['8361', '긝', 18, '긲긳긵긶긹긻긼'],
      [
        '8381',
        '긽긾긿깂깄깇깈깉깋깏깑깒깓깕깗',
        4,
        '깞깢깣깤깦깧깪깫깭깮깯깱',
        6,
        '깺깾',
        5,
        '꺆',
        5,
        '꺍',
        46,
        '꺿껁껂껃껅',
        6,
        '껎껒',
        5,
        '껚껛껝',
        8
      ],
      ['8441', '껦껧껩껪껬껮', 5, '껵껶껷껹껺껻껽', 8],
      ['8461', '꼆꼉꼊꼋꼌꼎꼏꼑', 18],
      [
        '8481',
        '꼤',
        7,
        '꼮꼯꼱꼳꼵',
        6,
        '꼾꽀꽄꽅꽆꽇꽊',
        5,
        '꽑',
        10,
        '꽞',
        5,
        '꽦',
        18,
        '꽺',
        5,
        '꾁꾂꾃꾅꾆꾇꾉',
        6,
        '꾒꾓꾔꾖',
        5,
        '꾝',
        26,
        '꾺꾻꾽꾾'
      ],
      ['8541', '꾿꿁', 5, '꿊꿌꿏', 4, '꿕', 6, '꿝', 4],
      ['8561', '꿢', 5, '꿪', 5, '꿲꿳꿵꿶꿷꿹', 6, '뀂뀃'],
      [
        '8581',
        '뀅',
        6,
        '뀍뀎뀏뀑뀒뀓뀕',
        6,
        '뀞',
        9,
        '뀩',
        26,
        '끆끇끉끋끍끏끐끑끒끖끘끚끛끜끞',
        29,
        '끾끿낁낂낃낅',
        6,
        '낎낐낒',
        5,
        '낛낝낞낣낤'
      ],
      ['8641', '낥낦낧낪낰낲낶낷낹낺낻낽', 6, '냆냊', 5, '냒'],
      ['8661', '냓냕냖냗냙', 6, '냡냢냣냤냦', 10],
      [
        '8681',
        '냱',
        22,
        '넊넍넎넏넑넔넕넖넗넚넞',
        4,
        '넦넧넩넪넫넭',
        6,
        '넶넺',
        5,
        '녂녃녅녆녇녉',
        6,
        '녒녓녖녗녙녚녛녝녞녟녡',
        22,
        '녺녻녽녾녿놁놃',
        4,
        '놊놌놎놏놐놑놕놖놗놙놚놛놝'
      ],
      ['8741', '놞', 9, '놩', 15],
      ['8761', '놹', 18, '뇍뇎뇏뇑뇒뇓뇕'],
      [
        '8781',
        '뇖',
        5,
        '뇞뇠',
        7,
        '뇪뇫뇭뇮뇯뇱',
        7,
        '뇺뇼뇾',
        5,
        '눆눇눉눊눍',
        6,
        '눖눘눚',
        5,
        '눡',
        18,
        '눵',
        6,
        '눽',
        26,
        '뉙뉚뉛뉝뉞뉟뉡',
        6,
        '뉪',
        4
      ],
      ['8841', '뉯', 4, '뉶', 5, '뉽', 6, '늆늇늈늊', 4],
      ['8861', '늏늒늓늕늖늗늛', 4, '늢늤늧늨늩늫늭늮늯늱늲늳늵늶늷'],
      [
        '8881',
        '늸',
        15,
        '닊닋닍닎닏닑닓',
        4,
        '닚닜닞닟닠닡닣닧닩닪닰닱닲닶닼닽닾댂댃댅댆댇댉',
        6,
        '댒댖',
        5,
        '댝',
        54,
        '덗덙덚덝덠덡덢덣'
      ],
      ['8941', '덦덨덪덬덭덯덲덳덵덶덷덹', 6, '뎂뎆', 5, '뎍'],
      ['8961', '뎎뎏뎑뎒뎓뎕', 10, '뎢', 5, '뎩뎪뎫뎭'],
      [
        '8981',
        '뎮',
        21,
        '돆돇돉돊돍돏돑돒돓돖돘돚돜돞돟돡돢돣돥돦돧돩',
        18,
        '돽',
        18,
        '됑',
        6,
        '됙됚됛됝됞됟됡',
        6,
        '됪됬',
        7,
        '됵',
        15
      ],
      ['8a41', '둅', 10, '둒둓둕둖둗둙', 6, '둢둤둦'],
      ['8a61', '둧', 4, '둭', 18, '뒁뒂'],
      [
        '8a81',
        '뒃',
        4,
        '뒉',
        19,
        '뒞',
        5,
        '뒥뒦뒧뒩뒪뒫뒭',
        7,
        '뒶뒸뒺',
        5,
        '듁듂듃듅듆듇듉',
        6,
        '듑듒듓듔듖',
        5,
        '듞듟듡듢듥듧',
        4,
        '듮듰듲',
        5,
        '듹',
        26,
        '딖딗딙딚딝'
      ],
      ['8b41', '딞', 5, '딦딫', 4, '딲딳딵딶딷딹', 6, '땂땆'],
      ['8b61', '땇땈땉땊땎땏땑땒땓땕', 6, '땞땢', 8],
      [
        '8b81',
        '땫',
        52,
        '떢떣떥떦떧떩떬떭떮떯떲떶',
        4,
        '떾떿뗁뗂뗃뗅',
        6,
        '뗎뗒',
        5,
        '뗙',
        18,
        '뗭',
        18
      ],
      ['8c41', '똀', 15, '똒똓똕똖똗똙', 4],
      ['8c61', '똞', 6, '똦', 5, '똭', 6, '똵', 5],
      [
        '8c81',
        '똻',
        12,
        '뙉',
        26,
        '뙥뙦뙧뙩',
        50,
        '뚞뚟뚡뚢뚣뚥',
        5,
        '뚭뚮뚯뚰뚲',
        16
      ],
      ['8d41', '뛃', 16, '뛕', 8],
      ['8d61', '뛞', 17, '뛱뛲뛳뛵뛶뛷뛹뛺'],
      [
        '8d81',
        '뛻',
        4,
        '뜂뜃뜄뜆',
        33,
        '뜪뜫뜭뜮뜱',
        6,
        '뜺뜼',
        7,
        '띅띆띇띉띊띋띍',
        6,
        '띖',
        9,
        '띡띢띣띥띦띧띩',
        6,
        '띲띴띶',
        5,
        '띾띿랁랂랃랅',
        6,
        '랎랓랔랕랚랛랝랞'
      ],
      ['8e41', '랟랡', 6, '랪랮', 5, '랶랷랹', 8],
      ['8e61', '럂', 4, '럈럊', 19],
      [
        '8e81',
        '럞',
        13,
        '럮럯럱럲럳럵',
        6,
        '럾렂',
        4,
        '렊렋렍렎렏렑',
        6,
        '렚렜렞',
        5,
        '렦렧렩렪렫렭',
        6,
        '렶렺',
        5,
        '롁롂롃롅',
        11,
        '롒롔',
        7,
        '롞롟롡롢롣롥',
        6,
        '롮롰롲',
        5,
        '롹롺롻롽',
        7
      ],
      ['8f41', '뢅', 7, '뢎', 17],
      ['8f61', '뢠', 7, '뢩', 6, '뢱뢲뢳뢵뢶뢷뢹', 4],
      [
        '8f81',
        '뢾뢿룂룄룆',
        5,
        '룍룎룏룑룒룓룕',
        7,
        '룞룠룢',
        5,
        '룪룫룭룮룯룱',
        6,
        '룺룼룾',
        5,
        '뤅',
        18,
        '뤙',
        6,
        '뤡',
        26,
        '뤾뤿륁륂륃륅',
        6,
        '륍륎륐륒',
        5
      ],
      ['9041', '륚륛륝륞륟륡', 6, '륪륬륮', 5, '륶륷륹륺륻륽'],
      ['9061', '륾', 5, '릆릈릋릌릏', 15],
      [
        '9081',
        '릟',
        12,
        '릮릯릱릲릳릵',
        6,
        '릾맀맂',
        5,
        '맊맋맍맓',
        4,
        '맚맜맟맠맢맦맧맩맪맫맭',
        6,
        '맶맻',
        4,
        '먂',
        5,
        '먉',
        11,
        '먖',
        33,
        '먺먻먽먾먿멁멃멄멅멆'
      ],
      ['9141', '멇멊멌멏멐멑멒멖멗멙멚멛멝', 6, '멦멪', 5],
      ['9161', '멲멳멵멶멷멹', 9, '몆몈몉몊몋몍', 5],
      [
        '9181',
        '몓',
        20,
        '몪몭몮몯몱몳',
        4,
        '몺몼몾',
        5,
        '뫅뫆뫇뫉',
        14,
        '뫚',
        33,
        '뫽뫾뫿묁묂묃묅',
        7,
        '묎묐묒',
        5,
        '묙묚묛묝묞묟묡',
        6
      ],
      ['9241', '묨묪묬', 7, '묷묹묺묿', 4, '뭆뭈뭊뭋뭌뭎뭑뭒'],
      ['9261', '뭓뭕뭖뭗뭙', 7, '뭢뭤', 7, '뭭', 4],
      [
        '9281',
        '뭲',
        21,
        '뮉뮊뮋뮍뮎뮏뮑',
        18,
        '뮥뮦뮧뮩뮪뮫뮭',
        6,
        '뮵뮶뮸',
        7,
        '믁믂믃믅믆믇믉',
        6,
        '믑믒믔',
        35,
        '믺믻믽믾밁'
      ],
      ['9341', '밃', 4, '밊밎밐밒밓밙밚밠밡밢밣밦밨밪밫밬밮밯밲밳밵'],
      ['9361', '밶밷밹', 6, '뱂뱆뱇뱈뱊뱋뱎뱏뱑', 8],
      [
        '9381',
        '뱚뱛뱜뱞',
        37,
        '벆벇벉벊벍벏',
        4,
        '벖벘벛',
        4,
        '벢벣벥벦벩',
        6,
        '벲벶',
        5,
        '벾벿볁볂볃볅',
        7,
        '볎볒볓볔볖볗볙볚볛볝',
        22,
        '볷볹볺볻볽'
      ],
      ['9441', '볾', 5, '봆봈봊', 5, '봑봒봓봕', 8],
      ['9461', '봞', 5, '봥', 6, '봭', 12],
      [
        '9481',
        '봺',
        5,
        '뵁',
        6,
        '뵊뵋뵍뵎뵏뵑',
        6,
        '뵚',
        9,
        '뵥뵦뵧뵩',
        22,
        '붂붃붅붆붋',
        4,
        '붒붔붖붗붘붛붝',
        6,
        '붥',
        10,
        '붱',
        6,
        '붹',
        24
      ],
      ['9541', '뷒뷓뷖뷗뷙뷚뷛뷝', 11, '뷪', 5, '뷱'],
      ['9561', '뷲뷳뷵뷶뷷뷹', 6, '븁븂븄븆', 5, '븎븏븑븒븓'],
      [
        '9581',
        '븕',
        6,
        '븞븠',
        35,
        '빆빇빉빊빋빍빏',
        4,
        '빖빘빜빝빞빟빢빣빥빦빧빩빫',
        4,
        '빲빶',
        4,
        '빾빿뺁뺂뺃뺅',
        6,
        '뺎뺒',
        5,
        '뺚',
        13,
        '뺩',
        14
      ],
      ['9641', '뺸', 23, '뻒뻓'],
      ['9661', '뻕뻖뻙', 6, '뻡뻢뻦', 5, '뻭', 8],
      [
        '9681',
        '뻶',
        10,
        '뼂',
        5,
        '뼊',
        13,
        '뼚뼞',
        33,
        '뽂뽃뽅뽆뽇뽉',
        6,
        '뽒뽓뽔뽖',
        44
      ],
      ['9741', '뾃', 16, '뾕', 8],
      ['9761', '뾞', 17, '뾱', 7],
      ['9781', '뾹', 11, '뿆', 5, '뿎뿏뿑뿒뿓뿕', 6, '뿝뿞뿠뿢', 89, '쀽쀾쀿'],
      ['9841', '쁀', 16, '쁒', 5, '쁙쁚쁛'],
      ['9861', '쁝쁞쁟쁡', 6, '쁪', 15],
      [
        '9881',
        '쁺',
        21,
        '삒삓삕삖삗삙',
        6,
        '삢삤삦',
        5,
        '삮삱삲삷',
        4,
        '삾샂샃샄샆샇샊샋샍샎샏샑',
        6,
        '샚샞',
        5,
        '샦샧샩샪샫샭',
        6,
        '샶샸샺',
        5,
        '섁섂섃섅섆섇섉',
        6,
        '섑섒섓섔섖',
        5,
        '섡섢섥섨섩섪섫섮'
      ],
      ['9941', '섲섳섴섵섷섺섻섽섾섿셁', 6, '셊셎', 5, '셖셗'],
      ['9961', '셙셚셛셝', 6, '셦셪', 5, '셱셲셳셵셶셷셹셺셻'],
      [
        '9981',
        '셼',
        8,
        '솆',
        5,
        '솏솑솒솓솕솗',
        4,
        '솞솠솢솣솤솦솧솪솫솭솮솯솱',
        11,
        '솾',
        5,
        '쇅쇆쇇쇉쇊쇋쇍',
        6,
        '쇕쇖쇙',
        6,
        '쇡쇢쇣쇥쇦쇧쇩',
        6,
        '쇲쇴',
        7,
        '쇾쇿숁숂숃숅',
        6,
        '숎숐숒',
        5,
        '숚숛숝숞숡숢숣'
      ],
      ['9a41', '숤숥숦숧숪숬숮숰숳숵', 16],
      ['9a61', '쉆쉇쉉', 6, '쉒쉓쉕쉖쉗쉙', 6, '쉡쉢쉣쉤쉦'],
      [
        '9a81',
        '쉧',
        4,
        '쉮쉯쉱쉲쉳쉵',
        6,
        '쉾슀슂',
        5,
        '슊',
        5,
        '슑',
        6,
        '슙슚슜슞',
        5,
        '슦슧슩슪슫슮',
        5,
        '슶슸슺',
        33,
        '싞싟싡싢싥',
        5,
        '싮싰싲싳싴싵싷싺싽싾싿쌁',
        6,
        '쌊쌋쌎쌏'
      ],
      ['9b41', '쌐쌑쌒쌖쌗쌙쌚쌛쌝', 6, '쌦쌧쌪', 8],
      ['9b61', '쌳', 17, '썆', 7],
      [
        '9b81',
        '썎',
        25,
        '썪썫썭썮썯썱썳',
        4,
        '썺썻썾',
        5,
        '쎅쎆쎇쎉쎊쎋쎍',
        50,
        '쏁',
        22,
        '쏚'
      ],
      ['9c41', '쏛쏝쏞쏡쏣', 4, '쏪쏫쏬쏮', 5, '쏶쏷쏹', 5],
      ['9c61', '쏿', 8, '쐉', 6, '쐑', 9],
      [
        '9c81',
        '쐛',
        8,
        '쐥',
        6,
        '쐭쐮쐯쐱쐲쐳쐵',
        6,
        '쐾',
        9,
        '쑉',
        26,
        '쑦쑧쑩쑪쑫쑭',
        6,
        '쑶쑷쑸쑺',
        5,
        '쒁',
        18,
        '쒕',
        6,
        '쒝',
        12
      ],
      ['9d41', '쒪', 13, '쒹쒺쒻쒽', 8],
      ['9d61', '쓆', 25],
      [
        '9d81',
        '쓠',
        8,
        '쓪',
        5,
        '쓲쓳쓵쓶쓷쓹쓻쓼쓽쓾씂',
        9,
        '씍씎씏씑씒씓씕',
        6,
        '씝',
        10,
        '씪씫씭씮씯씱',
        6,
        '씺씼씾',
        5,
        '앆앇앋앏앐앑앒앖앚앛앜앟앢앣앥앦앧앩',
        6,
        '앲앶',
        5,
        '앾앿얁얂얃얅얆얈얉얊얋얎얐얒얓얔'
      ],
      ['9e41', '얖얙얚얛얝얞얟얡', 7, '얪', 9, '얶'],
      ['9e61', '얷얺얿', 4, '엋엍엏엒엓엕엖엗엙', 6, '엢엤엦엧'],
      [
        '9e81',
        '엨엩엪엫엯엱엲엳엵엸엹엺엻옂옃옄옉옊옋옍옎옏옑',
        6,
        '옚옝',
        6,
        '옦옧옩옪옫옯옱옲옶옸옺옼옽옾옿왂왃왅왆왇왉',
        6,
        '왒왖',
        5,
        '왞왟왡',
        10,
        '왭왮왰왲',
        5,
        '왺왻왽왾왿욁',
        6,
        '욊욌욎',
        5,
        '욖욗욙욚욛욝',
        6,
        '욦'
      ],
      ['9f41', '욨욪', 5, '욲욳욵욶욷욻', 4, '웂웄웆', 5, '웎'],
      ['9f61', '웏웑웒웓웕', 6, '웞웟웢', 5, '웪웫웭웮웯웱웲'],
      [
        '9f81',
        '웳',
        4,
        '웺웻웼웾',
        5,
        '윆윇윉윊윋윍',
        6,
        '윖윘윚',
        5,
        '윢윣윥윦윧윩',
        6,
        '윲윴윶윸윹윺윻윾윿읁읂읃읅',
        4,
        '읋읎읐읙읚읛읝읞읟읡',
        6,
        '읩읪읬',
        7,
        '읶읷읹읺읻읿잀잁잂잆잋잌잍잏잒잓잕잙잛',
        4,
        '잢잧',
        4,
        '잮잯잱잲잳잵잶잷'
      ],
      ['a041', '잸잹잺잻잾쟂', 5, '쟊쟋쟍쟏쟑', 6, '쟙쟚쟛쟜'],
      ['a061', '쟞', 5, '쟥쟦쟧쟩쟪쟫쟭', 13],
      [
        'a081',
        '쟻',
        4,
        '젂젃젅젆젇젉젋',
        4,
        '젒젔젗',
        4,
        '젞젟젡젢젣젥',
        6,
        '젮젰젲',
        5,
        '젹젺젻젽젾젿졁',
        6,
        '졊졋졎',
        5,
        '졕',
        26,
        '졲졳졵졶졷졹졻',
        4,
        '좂좄좈좉좊좎',
        5,
        '좕',
        7,
        '좞좠좢좣좤'
      ],
      ['a141', '좥좦좧좩', 18, '좾좿죀죁'],
      ['a161', '죂죃죅죆죇죉죊죋죍', 6, '죖죘죚', 5, '죢죣죥'],
      [
        'a181',
        '죦',
        14,
        '죶',
        5,
        '죾죿줁줂줃줇',
        4,
        '줎　、。·‥…¨〃­―∥＼∼‘’“”〔〕〈',
        9,
        '±×÷≠≤≥∞∴°′″℃Å￠￡￥♂♀∠⊥⌒∂∇≡≒§※☆★○●◎◇◆□■△▲▽▼→←↑↓↔〓≪≫√∽∝∵∫∬∈∋⊆⊇⊂⊃∪∩∧∨￢'
      ],
      ['a241', '줐줒', 5, '줙', 18],
      ['a261', '줭', 6, '줵', 18],
      [
        'a281',
        '쥈',
        7,
        '쥒쥓쥕쥖쥗쥙',
        6,
        '쥢쥤',
        7,
        '쥭쥮쥯⇒⇔∀∃´～ˇ˘˝˚˙¸˛¡¿ː∮∑∏¤℉‰◁◀▷▶♤♠♡♥♧♣⊙◈▣◐◑▒▤▥▨▧▦▩♨☏☎☜☞¶†‡↕↗↙↖↘♭♩♪♬㉿㈜№㏇™㏂㏘℡€®'
      ],
      ['a341', '쥱쥲쥳쥵', 6, '쥽', 10, '즊즋즍즎즏'],
      ['a361', '즑', 6, '즚즜즞', 16],
      [
        'a381',
        '즯',
        16,
        '짂짃짅짆짉짋',
        4,
        '짒짔짗짘짛！',
        58,
        '￦］',
        32,
        '￣'
      ],
      ['a441', '짞짟짡짣짥짦짨짩짪짫짮짲', 5, '짺짻짽짾짿쨁쨂쨃쨄'],
      ['a461', '쨅쨆쨇쨊쨎', 5, '쨕쨖쨗쨙', 12],
      ['a481', '쨦쨧쨨쨪', 28, 'ㄱ', 93],
      ['a541', '쩇', 4, '쩎쩏쩑쩒쩓쩕', 6, '쩞쩢', 5, '쩩쩪'],
      ['a561', '쩫', 17, '쩾', 5, '쪅쪆'],
      ['a581', '쪇', 16, '쪙', 14, 'ⅰ', 9],
      ['a5b0', 'Ⅰ', 9],
      ['a5c1', 'Α', 16, 'Σ', 6],
      ['a5e1', 'α', 16, 'σ', 6],
      ['a641', '쪨', 19, '쪾쪿쫁쫂쫃쫅'],
      ['a661', '쫆', 5, '쫎쫐쫒쫔쫕쫖쫗쫚', 5, '쫡', 6],
      [
        'a681',
        '쫨쫩쫪쫫쫭',
        6,
        '쫵',
        18,
        '쬉쬊─│┌┐┘└├┬┤┴┼━┃┏┓┛┗┣┳┫┻╋┠┯┨┷┿┝┰┥┸╂┒┑┚┙┖┕┎┍┞┟┡┢┦┧┩┪┭┮┱┲┵┶┹┺┽┾╀╁╃',
        7
      ],
      ['a741', '쬋', 4, '쬑쬒쬓쬕쬖쬗쬙', 6, '쬢', 7],
      ['a761', '쬪', 22, '쭂쭃쭄'],
      [
        'a781',
        '쭅쭆쭇쭊쭋쭍쭎쭏쭑',
        6,
        '쭚쭛쭜쭞',
        5,
        '쭥',
        7,
        '㎕㎖㎗ℓ㎘㏄㎣㎤㎥㎦㎙',
        9,
        '㏊㎍㎎㎏㏏㎈㎉㏈㎧㎨㎰',
        9,
        '㎀',
        4,
        '㎺',
        5,
        '㎐',
        4,
        'Ω㏀㏁㎊㎋㎌㏖㏅㎭㎮㎯㏛㎩㎪㎫㎬㏝㏐㏓㏃㏉㏜㏆'
      ],
      ['a841', '쭭', 10, '쭺', 14],
      ['a861', '쮉', 18, '쮝', 6],
      ['a881', '쮤', 19, '쮹', 11, 'ÆÐªĦ'],
      ['a8a6', 'Ĳ'],
      ['a8a8', 'ĿŁØŒºÞŦŊ'],
      ['a8b1', '㉠', 27, 'ⓐ', 25, '①', 14, '½⅓⅔¼¾⅛⅜⅝⅞'],
      ['a941', '쯅', 14, '쯕', 10],
      ['a961', '쯠쯡쯢쯣쯥쯦쯨쯪', 18],
      [
        'a981',
        '쯽',
        14,
        '찎찏찑찒찓찕',
        6,
        '찞찟찠찣찤æđðħıĳĸŀłøœßþŧŋŉ㈀',
        27,
        '⒜',
        25,
        '⑴',
        14,
        '¹²³⁴ⁿ₁₂₃₄'
      ],
      ['aa41', '찥찦찪찫찭찯찱', 6, '찺찿', 4, '챆챇챉챊챋챍챎'],
      ['aa61', '챏', 4, '챖챚', 5, '챡챢챣챥챧챩', 6, '챱챲'],
      ['aa81', '챳챴챶', 29, 'ぁ', 82],
      ['ab41', '첔첕첖첗첚첛첝첞첟첡', 6, '첪첮', 5, '첶첷첹'],
      ['ab61', '첺첻첽', 6, '쳆쳈쳊', 5, '쳑쳒쳓쳕', 5],
      ['ab81', '쳛', 8, '쳥', 6, '쳭쳮쳯쳱', 12, 'ァ', 85],
      ['ac41', '쳾쳿촀촂', 5, '촊촋촍촎촏촑', 6, '촚촜촞촟촠'],
      ['ac61', '촡촢촣촥촦촧촩촪촫촭', 11, '촺', 4],
      ['ac81', '촿', 28, '쵝쵞쵟А', 5, 'ЁЖ', 25],
      ['acd1', 'а', 5, 'ёж', 25],
      ['ad41', '쵡쵢쵣쵥', 6, '쵮쵰쵲', 5, '쵹', 7],
      ['ad61', '춁', 6, '춉', 10, '춖춗춙춚춛춝춞춟'],
      ['ad81', '춠춡춢춣춦춨춪', 5, '춱', 18, '췅'],
      ['ae41', '췆', 5, '췍췎췏췑', 16],
      ['ae61', '췢', 5, '췩췪췫췭췮췯췱', 6, '췺췼췾', 4],
      ['ae81', '츃츅츆츇츉츊츋츍', 6, '츕츖츗츘츚', 5, '츢츣츥츦츧츩츪츫'],
      ['af41', '츬츭츮츯츲츴츶', 19],
      ['af61', '칊', 13, '칚칛칝칞칢', 5, '칪칬'],
      ['af81', '칮', 5, '칶칷칹칺칻칽', 6, '캆캈캊', 5, '캒캓캕캖캗캙'],
      ['b041', '캚', 5, '캢캦', 5, '캮', 12],
      ['b061', '캻', 5, '컂', 19],
      [
        'b081',
        '컖',
        13,
        '컦컧컩컪컭',
        6,
        '컶컺',
        5,
        '가각간갇갈갉갊감',
        7,
        '같',
        4,
        '갠갤갬갭갯갰갱갸갹갼걀걋걍걔걘걜거걱건걷걸걺검겁것겄겅겆겉겊겋게겐겔겜겝겟겠겡겨격겪견겯결겸겹겻겼경곁계곈곌곕곗고곡곤곧골곪곬곯곰곱곳공곶과곽관괄괆'
      ],
      ['b141', '켂켃켅켆켇켉', 6, '켒켔켖', 5, '켝켞켟켡켢켣'],
      ['b161', '켥', 6, '켮켲', 5, '켹', 11],
      [
        'b181',
        '콅',
        14,
        '콖콗콙콚콛콝',
        6,
        '콦콨콪콫콬괌괍괏광괘괜괠괩괬괭괴괵괸괼굄굅굇굉교굔굘굡굣구국군굳굴굵굶굻굼굽굿궁궂궈궉권궐궜궝궤궷귀귁귄귈귐귑귓규균귤그극근귿글긁금급긋긍긔기긱긴긷길긺김깁깃깅깆깊까깍깎깐깔깖깜깝깟깠깡깥깨깩깬깰깸'
      ],
      ['b241', '콭콮콯콲콳콵콶콷콹', 6, '쾁쾂쾃쾄쾆', 5, '쾍'],
      ['b261', '쾎', 18, '쾢', 5, '쾩'],
      [
        'b281',
        '쾪',
        5,
        '쾱',
        18,
        '쿅',
        6,
        '깹깻깼깽꺄꺅꺌꺼꺽꺾껀껄껌껍껏껐껑께껙껜껨껫껭껴껸껼꼇꼈꼍꼐꼬꼭꼰꼲꼴꼼꼽꼿꽁꽂꽃꽈꽉꽐꽜꽝꽤꽥꽹꾀꾄꾈꾐꾑꾕꾜꾸꾹꾼꿀꿇꿈꿉꿋꿍꿎꿔꿜꿨꿩꿰꿱꿴꿸뀀뀁뀄뀌뀐뀔뀜뀝뀨끄끅끈끊끌끎끓끔끕끗끙'
      ],
      ['b341', '쿌', 19, '쿢쿣쿥쿦쿧쿩'],
      ['b361', '쿪', 5, '쿲쿴쿶', 5, '쿽쿾쿿퀁퀂퀃퀅', 5],
      [
        'b381',
        '퀋',
        5,
        '퀒',
        5,
        '퀙',
        19,
        '끝끼끽낀낄낌낍낏낑나낙낚난낟날낡낢남납낫',
        4,
        '낱낳내낵낸낼냄냅냇냈냉냐냑냔냘냠냥너넉넋넌널넒넓넘넙넛넜넝넣네넥넨넬넴넵넷넸넹녀녁년녈념녑녔녕녘녜녠노녹논놀놂놈놉놋농높놓놔놘놜놨뇌뇐뇔뇜뇝'
      ],
      ['b441', '퀮', 5, '퀶퀷퀹퀺퀻퀽', 6, '큆큈큊', 5],
      ['b461', '큑큒큓큕큖큗큙', 6, '큡', 10, '큮큯'],
      [
        'b481',
        '큱큲큳큵',
        6,
        '큾큿킀킂',
        18,
        '뇟뇨뇩뇬뇰뇹뇻뇽누눅눈눋눌눔눕눗눙눠눴눼뉘뉜뉠뉨뉩뉴뉵뉼늄늅늉느늑는늘늙늚늠늡늣능늦늪늬늰늴니닉닌닐닒님닙닛닝닢다닥닦단닫',
        4,
        '닳담답닷',
        4,
        '닿대댁댄댈댐댑댓댔댕댜더덕덖던덛덜덞덟덤덥'
      ],
      ['b541', '킕', 14, '킦킧킩킪킫킭', 5],
      ['b561', '킳킶킸킺', 5, '탂탃탅탆탇탊', 5, '탒탖', 4],
      [
        'b581',
        '탛탞탟탡탢탣탥',
        6,
        '탮탲',
        5,
        '탹',
        11,
        '덧덩덫덮데덱덴델뎀뎁뎃뎄뎅뎌뎐뎔뎠뎡뎨뎬도독돈돋돌돎돐돔돕돗동돛돝돠돤돨돼됐되된될됨됩됫됴두둑둔둘둠둡둣둥둬뒀뒈뒝뒤뒨뒬뒵뒷뒹듀듄듈듐듕드득든듣들듦듬듭듯등듸디딕딘딛딜딤딥딧딨딩딪따딱딴딸'
      ],
      ['b641', '턅', 7, '턎', 17],
      ['b661', '턠', 15, '턲턳턵턶턷턹턻턼턽턾'],
      [
        'b681',
        '턿텂텆',
        5,
        '텎텏텑텒텓텕',
        6,
        '텞텠텢',
        5,
        '텩텪텫텭땀땁땃땄땅땋때땍땐땔땜땝땟땠땡떠떡떤떨떪떫떰떱떳떴떵떻떼떽뗀뗄뗌뗍뗏뗐뗑뗘뗬또똑똔똘똥똬똴뙈뙤뙨뚜뚝뚠뚤뚫뚬뚱뛔뛰뛴뛸뜀뜁뜅뜨뜩뜬뜯뜰뜸뜹뜻띄띈띌띔띕띠띤띨띰띱띳띵라락란랄람랍랏랐랑랒랖랗'
      ],
      ['b741', '텮', 13, '텽', 6, '톅톆톇톉톊'],
      ['b761', '톋', 20, '톢톣톥톦톧'],
      [
        'b781',
        '톩',
        6,
        '톲톴톶톷톸톹톻톽톾톿퇁',
        14,
        '래랙랜랠램랩랫랬랭랴략랸럇량러럭런럴럼럽럿렀렁렇레렉렌렐렘렙렛렝려력련렬렴렵렷렸령례롄롑롓로록론롤롬롭롯롱롸롼뢍뢨뢰뢴뢸룀룁룃룅료룐룔룝룟룡루룩룬룰룸룹룻룽뤄뤘뤠뤼뤽륀륄륌륏륑류륙륜률륨륩'
      ],
      ['b841', '퇐', 7, '퇙', 17],
      ['b861', '퇫', 8, '퇵퇶퇷퇹', 13],
      [
        'b881',
        '툈툊',
        5,
        '툑',
        24,
        '륫륭르륵른를름릅릇릉릊릍릎리릭린릴림립릿링마막만많',
        4,
        '맘맙맛망맞맡맣매맥맨맬맴맵맷맸맹맺먀먁먈먕머먹먼멀멂멈멉멋멍멎멓메멕멘멜멤멥멧멨멩며멱면멸몃몄명몇몌모목몫몬몰몲몸몹못몽뫄뫈뫘뫙뫼'
      ],
      ['b941', '툪툫툮툯툱툲툳툵', 6, '툾퉀퉂', 5, '퉉퉊퉋퉌'],
      ['b961', '퉍', 14, '퉝', 6, '퉥퉦퉧퉨'],
      [
        'b981',
        '퉩',
        22,
        '튂튃튅튆튇튉튊튋튌묀묄묍묏묑묘묜묠묩묫무묵묶문묻물묽묾뭄뭅뭇뭉뭍뭏뭐뭔뭘뭡뭣뭬뮈뮌뮐뮤뮨뮬뮴뮷므믄믈믐믓미믹민믿밀밂밈밉밋밌밍및밑바',
        4,
        '받',
        4,
        '밤밥밧방밭배백밴밸뱀뱁뱃뱄뱅뱉뱌뱍뱐뱝버벅번벋벌벎범법벗'
      ],
      ['ba41', '튍튎튏튒튓튔튖', 5, '튝튞튟튡튢튣튥', 6, '튭'],
      ['ba61', '튮튯튰튲', 5, '튺튻튽튾틁틃', 4, '틊틌', 5],
      [
        'ba81',
        '틒틓틕틖틗틙틚틛틝',
        6,
        '틦',
        9,
        '틲틳틵틶틷틹틺벙벚베벡벤벧벨벰벱벳벴벵벼벽변별볍볏볐병볕볘볜보복볶본볼봄봅봇봉봐봔봤봬뵀뵈뵉뵌뵐뵘뵙뵤뵨부북분붇불붉붊붐붑붓붕붙붚붜붤붰붸뷔뷕뷘뷜뷩뷰뷴뷸븀븃븅브븍븐블븜븝븟비빅빈빌빎빔빕빗빙빚빛빠빡빤'
      ],
      ['bb41', '틻', 4, '팂팄팆', 5, '팏팑팒팓팕팗', 4, '팞팢팣'],
      ['bb61', '팤팦팧팪팫팭팮팯팱', 6, '팺팾', 5, '퍆퍇퍈퍉'],
      [
        'bb81',
        '퍊',
        31,
        '빨빪빰빱빳빴빵빻빼빽뺀뺄뺌뺍뺏뺐뺑뺘뺙뺨뻐뻑뻔뻗뻘뻠뻣뻤뻥뻬뼁뼈뼉뼘뼙뼛뼜뼝뽀뽁뽄뽈뽐뽑뽕뾔뾰뿅뿌뿍뿐뿔뿜뿟뿡쀼쁑쁘쁜쁠쁨쁩삐삑삔삘삠삡삣삥사삭삯산삳살삵삶삼삽삿샀상샅새색샌샐샘샙샛샜생샤'
      ],
      ['bc41', '퍪', 17, '퍾퍿펁펂펃펅펆펇'],
      ['bc61', '펈펉펊펋펎펒', 5, '펚펛펝펞펟펡', 6, '펪펬펮'],
      [
        'bc81',
        '펯',
        4,
        '펵펶펷펹펺펻펽',
        6,
        '폆폇폊',
        5,
        '폑',
        5,
        '샥샨샬샴샵샷샹섀섄섈섐섕서',
        4,
        '섣설섦섧섬섭섯섰성섶세섹센셀셈셉셋셌셍셔셕션셜셤셥셧셨셩셰셴셸솅소속솎손솔솖솜솝솟송솥솨솩솬솰솽쇄쇈쇌쇔쇗쇘쇠쇤쇨쇰쇱쇳쇼쇽숀숄숌숍숏숑수숙순숟술숨숩숫숭'
      ],
      ['bd41', '폗폙', 7, '폢폤', 7, '폮폯폱폲폳폵폶폷'],
      ['bd61', '폸폹폺폻폾퐀퐂', 5, '퐉', 13],
      [
        'bd81',
        '퐗',
        5,
        '퐞',
        25,
        '숯숱숲숴쉈쉐쉑쉔쉘쉠쉥쉬쉭쉰쉴쉼쉽쉿슁슈슉슐슘슛슝스슥슨슬슭슴습슷승시식신싣실싫심십싯싱싶싸싹싻싼쌀쌈쌉쌌쌍쌓쌔쌕쌘쌜쌤쌥쌨쌩썅써썩썬썰썲썸썹썼썽쎄쎈쎌쏀쏘쏙쏜쏟쏠쏢쏨쏩쏭쏴쏵쏸쐈쐐쐤쐬쐰'
      ],
      ['be41', '퐸', 7, '푁푂푃푅', 14],
      ['be61', '푔', 7, '푝푞푟푡푢푣푥', 7, '푮푰푱푲'],
      [
        'be81',
        '푳',
        4,
        '푺푻푽푾풁풃',
        4,
        '풊풌풎',
        5,
        '풕',
        8,
        '쐴쐼쐽쑈쑤쑥쑨쑬쑴쑵쑹쒀쒔쒜쒸쒼쓩쓰쓱쓴쓸쓺쓿씀씁씌씐씔씜씨씩씬씰씸씹씻씽아악안앉않알앍앎앓암압앗았앙앝앞애액앤앨앰앱앳앴앵야약얀얄얇얌얍얏양얕얗얘얜얠얩어억언얹얻얼얽얾엄',
        6,
        '엌엎'
      ],
      ['bf41', '풞', 10, '풪', 14],
      ['bf61', '풹', 18, '퓍퓎퓏퓑퓒퓓퓕'],
      [
        'bf81',
        '퓖',
        5,
        '퓝퓞퓠',
        7,
        '퓩퓪퓫퓭퓮퓯퓱',
        6,
        '퓹퓺퓼에엑엔엘엠엡엣엥여역엮연열엶엷염',
        5,
        '옅옆옇예옌옐옘옙옛옜오옥온올옭옮옰옳옴옵옷옹옻와왁완왈왐왑왓왔왕왜왝왠왬왯왱외왹왼욀욈욉욋욍요욕욘욜욤욥욧용우욱운울욹욺움웁웃웅워웍원월웜웝웠웡웨'
      ],
      ['c041', '퓾', 5, '픅픆픇픉픊픋픍', 6, '픖픘', 5],
      ['c061', '픞', 25],
      [
        'c081',
        '픸픹픺픻픾픿핁핂핃핅',
        6,
        '핎핐핒',
        5,
        '핚핛핝핞핟핡핢핣웩웬웰웸웹웽위윅윈윌윔윕윗윙유육윤율윰윱윳융윷으윽은을읊음읍읏응',
        7,
        '읜읠읨읫이익인일읽읾잃임입잇있잉잊잎자작잔잖잗잘잚잠잡잣잤장잦재잭잰잴잼잽잿쟀쟁쟈쟉쟌쟎쟐쟘쟝쟤쟨쟬저적전절젊'
      ],
      ['c141', '핤핦핧핪핬핮', 5, '핶핷핹핺핻핽', 6, '햆햊햋'],
      ['c161', '햌햍햎햏햑', 19, '햦햧'],
      [
        'c181',
        '햨',
        31,
        '점접젓정젖제젝젠젤젬젭젯젱져젼졀졈졉졌졍졔조족존졸졺좀좁좃종좆좇좋좌좍좔좝좟좡좨좼좽죄죈죌죔죕죗죙죠죡죤죵주죽준줄줅줆줌줍줏중줘줬줴쥐쥑쥔쥘쥠쥡쥣쥬쥰쥴쥼즈즉즌즐즘즙즛증지직진짇질짊짐집짓'
      ],
      ['c241', '헊헋헍헎헏헑헓', 4, '헚헜헞', 5, '헦헧헩헪헫헭헮'],
      ['c261', '헯', 4, '헶헸헺', 5, '혂혃혅혆혇혉', 6, '혒'],
      [
        'c281',
        '혖',
        5,
        '혝혞혟혡혢혣혥',
        7,
        '혮',
        9,
        '혺혻징짖짙짚짜짝짠짢짤짧짬짭짯짰짱째짹짼쨀쨈쨉쨋쨌쨍쨔쨘쨩쩌쩍쩐쩔쩜쩝쩟쩠쩡쩨쩽쪄쪘쪼쪽쫀쫄쫌쫍쫏쫑쫓쫘쫙쫠쫬쫴쬈쬐쬔쬘쬠쬡쭁쭈쭉쭌쭐쭘쭙쭝쭤쭸쭹쮜쮸쯔쯤쯧쯩찌찍찐찔찜찝찡찢찧차착찬찮찰참찹찻'
      ],
      ['c341', '혽혾혿홁홂홃홄홆홇홊홌홎홏홐홒홓홖홗홙홚홛홝', 4],
      ['c361', '홢', 4, '홨홪', 5, '홲홳홵', 11],
      [
        'c381',
        '횁횂횄횆',
        5,
        '횎횏횑횒횓횕',
        7,
        '횞횠횢',
        5,
        '횩횪찼창찾채책챈챌챔챕챗챘챙챠챤챦챨챰챵처척천철첨첩첫첬청체첵첸첼쳄쳅쳇쳉쳐쳔쳤쳬쳰촁초촉촌촐촘촙촛총촤촨촬촹최쵠쵤쵬쵭쵯쵱쵸춈추축춘출춤춥춧충춰췄췌췐취췬췰췸췹췻췽츄츈츌츔츙츠측츤츨츰츱츳층'
      ],
      ['c441', '횫횭횮횯횱', 7, '횺횼', 7, '훆훇훉훊훋'],
      ['c461', '훍훎훏훐훒훓훕훖훘훚', 5, '훡훢훣훥훦훧훩', 4],
      [
        'c481',
        '훮훯훱훲훳훴훶',
        5,
        '훾훿휁휂휃휅',
        11,
        '휒휓휔치칙친칟칠칡침칩칫칭카칵칸칼캄캅캇캉캐캑캔캘캠캡캣캤캥캬캭컁커컥컨컫컬컴컵컷컸컹케켁켄켈켐켑켓켕켜켠켤켬켭켯켰켱켸코콕콘콜콤콥콧콩콰콱콴콸쾀쾅쾌쾡쾨쾰쿄쿠쿡쿤쿨쿰쿱쿳쿵쿼퀀퀄퀑퀘퀭퀴퀵퀸퀼'
      ],
      ['c541', '휕휖휗휚휛휝휞휟휡', 6, '휪휬휮', 5, '휶휷휹'],
      ['c561', '휺휻휽', 6, '흅흆흈흊', 5, '흒흓흕흚', 4],
      [
        'c581',
        '흟흢흤흦흧흨흪흫흭흮흯흱흲흳흵',
        6,
        '흾흿힀힂',
        5,
        '힊힋큄큅큇큉큐큔큘큠크큭큰클큼큽킁키킥킨킬킴킵킷킹타탁탄탈탉탐탑탓탔탕태택탠탤탬탭탯탰탱탸턍터턱턴털턺텀텁텃텄텅테텍텐텔템텝텟텡텨텬텼톄톈토톡톤톨톰톱톳통톺톼퇀퇘퇴퇸툇툉툐투툭툰툴툼툽툿퉁퉈퉜'
      ],
      ['c641', '힍힎힏힑', 6, '힚힜힞', 5],
      [
        'c6a1',
        '퉤튀튁튄튈튐튑튕튜튠튤튬튱트특튼튿틀틂틈틉틋틔틘틜틤틥티틱틴틸팀팁팃팅파팍팎판팔팖팜팝팟팠팡팥패팩팬팰팸팹팻팼팽퍄퍅퍼퍽펀펄펌펍펏펐펑페펙펜펠펨펩펫펭펴편펼폄폅폈평폐폘폡폣포폭폰폴폼폽폿퐁'
      ],
      [
        'c7a1',
        '퐈퐝푀푄표푠푤푭푯푸푹푼푿풀풂품풉풋풍풔풩퓌퓐퓔퓜퓟퓨퓬퓰퓸퓻퓽프픈플픔픕픗피픽핀필핌핍핏핑하학한할핥함합핫항해핵핸핼햄햅햇했행햐향허헉헌헐헒험헙헛헝헤헥헨헬헴헵헷헹혀혁현혈혐협혓혔형혜혠'
      ],
      [
        'c8a1',
        '혤혭호혹혼홀홅홈홉홋홍홑화확환활홧황홰홱홴횃횅회획횐횔횝횟횡효횬횰횹횻후훅훈훌훑훔훗훙훠훤훨훰훵훼훽휀휄휑휘휙휜휠휨휩휫휭휴휵휸휼흄흇흉흐흑흔흖흗흘흙흠흡흣흥흩희흰흴흼흽힁히힉힌힐힘힙힛힝'
      ],
      [
        'caa1',
        '伽佳假價加可呵哥嘉嫁家暇架枷柯歌珂痂稼苛茄街袈訶賈跏軻迦駕刻却各恪慤殼珏脚覺角閣侃刊墾奸姦干幹懇揀杆柬桿澗癎看磵稈竿簡肝艮艱諫間乫喝曷渴碣竭葛褐蝎鞨勘坎堪嵌感憾戡敢柑橄減甘疳監瞰紺邯鑑鑒龕'
      ],
      [
        'cba1',
        '匣岬甲胛鉀閘剛堈姜岡崗康强彊慷江畺疆糠絳綱羌腔舡薑襁講鋼降鱇介价個凱塏愷愾慨改槪漑疥皆盖箇芥蓋豈鎧開喀客坑更粳羹醵倨去居巨拒据據擧渠炬祛距踞車遽鉅鋸乾件健巾建愆楗腱虔蹇鍵騫乞傑杰桀儉劍劒檢'
      ],
      [
        'cca1',
        '瞼鈐黔劫怯迲偈憩揭擊格檄激膈覡隔堅牽犬甄絹繭肩見譴遣鵑抉決潔結缺訣兼慊箝謙鉗鎌京俓倞傾儆勁勍卿坰境庚徑慶憬擎敬景暻更梗涇炅烱璟璥瓊痙硬磬竟競絅經耕耿脛莖警輕逕鏡頃頸驚鯨係啓堺契季屆悸戒桂械'
      ],
      [
        'cda1',
        '棨溪界癸磎稽系繫繼計誡谿階鷄古叩告呱固姑孤尻庫拷攷故敲暠枯槁沽痼皐睾稿羔考股膏苦苽菰藁蠱袴誥賈辜錮雇顧高鼓哭斛曲梏穀谷鵠困坤崑昆梱棍滾琨袞鯤汨滑骨供公共功孔工恐恭拱控攻珙空蚣貢鞏串寡戈果瓜'
      ],
      [
        'cea1',
        '科菓誇課跨過鍋顆廓槨藿郭串冠官寬慣棺款灌琯瓘管罐菅觀貫關館刮恝括适侊光匡壙廣曠洸炚狂珖筐胱鑛卦掛罫乖傀塊壞怪愧拐槐魁宏紘肱轟交僑咬喬嬌嶠巧攪敎校橋狡皎矯絞翹膠蕎蛟較轎郊餃驕鮫丘久九仇俱具勾'
      ],
      [
        'cfa1',
        '區口句咎嘔坵垢寇嶇廐懼拘救枸柩構歐毆毬求溝灸狗玖球瞿矩究絿耉臼舅舊苟衢謳購軀逑邱鉤銶駒驅鳩鷗龜國局菊鞠鞫麴君窘群裙軍郡堀屈掘窟宮弓穹窮芎躬倦券勸卷圈拳捲權淃眷厥獗蕨蹶闕机櫃潰詭軌饋句晷歸貴'
      ],
      [
        'd0a1',
        '鬼龜叫圭奎揆槻珪硅窺竅糾葵規赳逵閨勻均畇筠菌鈞龜橘克剋劇戟棘極隙僅劤勤懃斤根槿瑾筋芹菫覲謹近饉契今妗擒昑檎琴禁禽芩衾衿襟金錦伋及急扱汲級給亘兢矜肯企伎其冀嗜器圻基埼夔奇妓寄岐崎己幾忌技旗旣'
      ],
      [
        'd1a1',
        '朞期杞棋棄機欺氣汽沂淇玘琦琪璂璣畸畿碁磯祁祇祈祺箕紀綺羈耆耭肌記譏豈起錡錤飢饑騎騏驥麒緊佶吉拮桔金喫儺喇奈娜懦懶拏拿癩',
        5,
        '那樂',
        4,
        '諾酪駱亂卵暖欄煖爛蘭難鸞捏捺南嵐枏楠湳濫男藍襤拉'
      ],
      [
        'd2a1',
        '納臘蠟衲囊娘廊',
        4,
        '乃來內奈柰耐冷女年撚秊念恬拈捻寧寗努勞奴弩怒擄櫓爐瑙盧',
        5,
        '駑魯',
        10,
        '濃籠聾膿農惱牢磊腦賂雷尿壘',
        7,
        '嫩訥杻紐勒',
        5,
        '能菱陵尼泥匿溺多茶'
      ],
      [
        'd3a1',
        '丹亶但單團壇彖斷旦檀段湍短端簞緞蛋袒鄲鍛撻澾獺疸達啖坍憺擔曇淡湛潭澹痰聃膽蕁覃談譚錟沓畓答踏遝唐堂塘幢戇撞棠當糖螳黨代垈坮大對岱帶待戴擡玳臺袋貸隊黛宅德悳倒刀到圖堵塗導屠島嶋度徒悼挑掉搗桃'
      ],
      [
        'd4a1',
        '棹櫂淘渡滔濤燾盜睹禱稻萄覩賭跳蹈逃途道都鍍陶韜毒瀆牘犢獨督禿篤纛讀墩惇敦旽暾沌焞燉豚頓乭突仝冬凍動同憧東桐棟洞潼疼瞳童胴董銅兜斗杜枓痘竇荳讀豆逗頭屯臀芚遁遯鈍得嶝橙燈登等藤謄鄧騰喇懶拏癩羅'
      ],
      [
        'd5a1',
        '蘿螺裸邏樂洛烙珞絡落諾酪駱丹亂卵欄欒瀾爛蘭鸞剌辣嵐擥攬欖濫籃纜藍襤覽拉臘蠟廊朗浪狼琅瑯螂郞來崍徠萊冷掠略亮倆兩凉梁樑粮粱糧良諒輛量侶儷勵呂廬慮戾旅櫚濾礪藜蠣閭驢驪麗黎力曆歷瀝礫轢靂憐戀攣漣'
      ],
      [
        'd6a1',
        '煉璉練聯蓮輦連鍊冽列劣洌烈裂廉斂殮濂簾獵令伶囹寧岺嶺怜玲笭羚翎聆逞鈴零靈領齡例澧禮醴隷勞怒撈擄櫓潞瀘爐盧老蘆虜路輅露魯鷺鹵碌祿綠菉錄鹿麓論壟弄朧瀧瓏籠聾儡瀨牢磊賂賚賴雷了僚寮廖料燎療瞭聊蓼'
      ],
      [
        'd7a1',
        '遼鬧龍壘婁屢樓淚漏瘻累縷蔞褸鏤陋劉旒柳榴流溜瀏琉瑠留瘤硫謬類六戮陸侖倫崙淪綸輪律慄栗率隆勒肋凜凌楞稜綾菱陵俚利厘吏唎履悧李梨浬犁狸理璃異痢籬罹羸莉裏裡里釐離鯉吝潾燐璘藺躪隣鱗麟林淋琳臨霖砬'
      ],
      [
        'd8a1',
        '立笠粒摩瑪痲碼磨馬魔麻寞幕漠膜莫邈万卍娩巒彎慢挽晩曼滿漫灣瞞萬蔓蠻輓饅鰻唜抹末沫茉襪靺亡妄忘忙望網罔芒茫莽輞邙埋妹媒寐昧枚梅每煤罵買賣邁魅脈貊陌驀麥孟氓猛盲盟萌冪覓免冕勉棉沔眄眠綿緬面麵滅'
      ],
      [
        'd9a1',
        '蔑冥名命明暝椧溟皿瞑茗蓂螟酩銘鳴袂侮冒募姆帽慕摸摹暮某模母毛牟牡瑁眸矛耗芼茅謀謨貌木沐牧目睦穆鶩歿沒夢朦蒙卯墓妙廟描昴杳渺猫竗苗錨務巫憮懋戊拇撫无楙武毋無珷畝繆舞茂蕪誣貿霧鵡墨默們刎吻問文'
      ],
      [
        'daa1',
        '汶紊紋聞蚊門雯勿沕物味媚尾嵋彌微未梶楣渼湄眉米美薇謎迷靡黴岷悶愍憫敏旻旼民泯玟珉緡閔密蜜謐剝博拍搏撲朴樸泊珀璞箔粕縛膊舶薄迫雹駁伴半反叛拌搬攀斑槃泮潘班畔瘢盤盼磐磻礬絆般蟠返頒飯勃拔撥渤潑'
      ],
      [
        'dba1',
        '發跋醱鉢髮魃倣傍坊妨尨幇彷房放方旁昉枋榜滂磅紡肪膀舫芳蒡蚌訪謗邦防龐倍俳北培徘拜排杯湃焙盃背胚裴裵褙賠輩配陪伯佰帛柏栢白百魄幡樊煩燔番磻繁蕃藩飜伐筏罰閥凡帆梵氾汎泛犯範范法琺僻劈壁擘檗璧癖'
      ],
      [
        'dca1',
        '碧蘗闢霹便卞弁變辨辯邊別瞥鱉鼈丙倂兵屛幷昞昺柄棅炳甁病秉竝輧餠騈保堡報寶普步洑湺潽珤甫菩補褓譜輔伏僕匐卜宓復服福腹茯蔔複覆輹輻馥鰒本乶俸奉封峯峰捧棒烽熢琫縫蓬蜂逢鋒鳳不付俯傅剖副否咐埠夫婦'
      ],
      [
        'dda1',
        '孚孵富府復扶敷斧浮溥父符簿缶腐腑膚艀芙莩訃負賦賻赴趺部釜阜附駙鳧北分吩噴墳奔奮忿憤扮昐汾焚盆粉糞紛芬賁雰不佛弗彿拂崩朋棚硼繃鵬丕備匕匪卑妃婢庇悲憊扉批斐枇榧比毖毗毘沸泌琵痺砒碑秕秘粃緋翡肥'
      ],
      [
        'dea1',
        '脾臂菲蜚裨誹譬費鄙非飛鼻嚬嬪彬斌檳殯浜濱瀕牝玭貧賓頻憑氷聘騁乍事些仕伺似使俟僿史司唆嗣四士奢娑寫寺射巳師徙思捨斜斯柶査梭死沙泗渣瀉獅砂社祀祠私篩紗絲肆舍莎蓑蛇裟詐詞謝賜赦辭邪飼駟麝削數朔索'
      ],
      [
        'dfa1',
        '傘刪山散汕珊産疝算蒜酸霰乷撒殺煞薩三參杉森渗芟蔘衫揷澁鈒颯上傷像償商喪嘗孀尙峠常床庠廂想桑橡湘爽牀狀相祥箱翔裳觴詳象賞霜塞璽賽嗇塞穡索色牲生甥省笙墅壻嶼序庶徐恕抒捿敍暑曙書栖棲犀瑞筮絮緖署'
      ],
      [
        'e0a1',
        '胥舒薯西誓逝鋤黍鼠夕奭席惜昔晳析汐淅潟石碩蓆釋錫仙僊先善嬋宣扇敾旋渲煽琁瑄璇璿癬禪線繕羨腺膳船蘚蟬詵跣選銑鐥饍鮮卨屑楔泄洩渫舌薛褻設說雪齧剡暹殲纖蟾贍閃陝攝涉燮葉城姓宬性惺成星晟猩珹盛省筬'
      ],
      [
        'e1a1',
        '聖聲腥誠醒世勢歲洗稅笹細說貰召嘯塑宵小少巢所掃搔昭梳沼消溯瀟炤燒甦疏疎瘙笑篠簫素紹蔬蕭蘇訴逍遡邵銷韶騷俗屬束涑粟續謖贖速孫巽損蓀遜飡率宋悚松淞訟誦送頌刷殺灑碎鎖衰釗修受嗽囚垂壽嫂守岫峀帥愁'
      ],
      [
        'e2a1',
        '戍手授搜收數樹殊水洙漱燧狩獸琇璲瘦睡秀穗竪粹綏綬繡羞脩茱蒐蓚藪袖誰讐輸遂邃酬銖銹隋隧隨雖需須首髓鬚叔塾夙孰宿淑潚熟琡璹肅菽巡徇循恂旬栒楯橓殉洵淳珣盾瞬筍純脣舜荀蓴蕣詢諄醇錞順馴戌術述鉥崇崧'
      ],
      [
        'e3a1',
        '嵩瑟膝蝨濕拾習褶襲丞乘僧勝升承昇繩蠅陞侍匙嘶始媤尸屎屍市弑恃施是時枾柴猜矢示翅蒔蓍視試詩諡豕豺埴寔式息拭植殖湜熄篒蝕識軾食飾伸侁信呻娠宸愼新晨燼申神紳腎臣莘薪藎蜃訊身辛辰迅失室實悉審尋心沁'
      ],
      [
        'e4a1',
        '沈深瀋甚芯諶什十拾雙氏亞俄兒啞娥峨我牙芽莪蛾衙訝阿雅餓鴉鵝堊岳嶽幄惡愕握樂渥鄂鍔顎鰐齷安岸按晏案眼雁鞍顔鮟斡謁軋閼唵岩巖庵暗癌菴闇壓押狎鴨仰央怏昻殃秧鴦厓哀埃崖愛曖涯碍艾隘靄厄扼掖液縊腋額'
      ],
      [
        'e5a1',
        '櫻罌鶯鸚也倻冶夜惹揶椰爺耶若野弱掠略約若葯蒻藥躍亮佯兩凉壤孃恙揚攘敭暘梁楊樣洋瀁煬痒瘍禳穰糧羊良襄諒讓釀陽量養圄御於漁瘀禦語馭魚齬億憶抑檍臆偃堰彦焉言諺孼蘖俺儼嚴奄掩淹嶪業円予余勵呂女如廬'
      ],
      [
        'e6a1',
        '旅歟汝濾璵礖礪與艅茹輿轝閭餘驪麗黎亦力域役易曆歷疫繹譯轢逆驛嚥堧姸娟宴年延憐戀捐挻撚椽沇沿涎涓淵演漣烟然煙煉燃燕璉硏硯秊筵緣練縯聯衍軟輦蓮連鉛鍊鳶列劣咽悅涅烈熱裂說閱厭廉念捻染殮炎焰琰艶苒'
      ],
      [
        'e7a1',
        '簾閻髥鹽曄獵燁葉令囹塋寧嶺嶸影怜映暎楹榮永泳渶潁濚瀛瀯煐營獰玲瑛瑩瓔盈穎纓羚聆英詠迎鈴鍈零霙靈領乂倪例刈叡曳汭濊猊睿穢芮藝蘂禮裔詣譽豫醴銳隸霓預五伍俉傲午吾吳嗚塢墺奧娛寤悟惡懊敖旿晤梧汚澳'
      ],
      [
        'e8a1',
        '烏熬獒筽蜈誤鰲鼇屋沃獄玉鈺溫瑥瘟穩縕蘊兀壅擁瓮甕癰翁邕雍饔渦瓦窩窪臥蛙蝸訛婉完宛梡椀浣玩琓琬碗緩翫脘腕莞豌阮頑曰往旺枉汪王倭娃歪矮外嵬巍猥畏了僚僥凹堯夭妖姚寥寮尿嶢拗搖撓擾料曜樂橈燎燿瑤療'
      ],
      [
        'e9a1',
        '窈窯繇繞耀腰蓼蟯要謠遙遼邀饒慾欲浴縟褥辱俑傭冗勇埇墉容庸慂榕涌湧溶熔瑢用甬聳茸蓉踊鎔鏞龍于佑偶優又友右宇寓尤愚憂旴牛玗瑀盂祐禑禹紆羽芋藕虞迂遇郵釪隅雨雩勖彧旭昱栯煜稶郁頊云暈橒殞澐熉耘芸蕓'
      ],
      [
        'eaa1',
        '運隕雲韻蔚鬱亐熊雄元原員圓園垣媛嫄寃怨愿援沅洹湲源爰猿瑗苑袁轅遠阮院願鴛月越鉞位偉僞危圍委威尉慰暐渭爲瑋緯胃萎葦蔿蝟衛褘謂違韋魏乳侑儒兪劉唯喩孺宥幼幽庾悠惟愈愉揄攸有杻柔柚柳楡楢油洧流游溜'
      ],
      [
        'eba1',
        '濡猶猷琉瑜由留癒硫紐維臾萸裕誘諛諭踰蹂遊逾遺酉釉鍮類六堉戮毓肉育陸倫允奫尹崙淪潤玧胤贇輪鈗閏律慄栗率聿戎瀜絨融隆垠恩慇殷誾銀隱乙吟淫蔭陰音飮揖泣邑凝應膺鷹依倚儀宜意懿擬椅毅疑矣義艤薏蟻衣誼'
      ],
      [
        'eca1',
        '議醫二以伊利吏夷姨履已弛彛怡易李梨泥爾珥理異痍痢移罹而耳肄苡荑裏裡貽貳邇里離飴餌匿溺瀷益翊翌翼謚人仁刃印吝咽因姻寅引忍湮燐璘絪茵藺蚓認隣靭靷鱗麟一佚佾壹日溢逸鎰馹任壬妊姙恁林淋稔臨荏賃入卄'
      ],
      [
        'eda1',
        '立笠粒仍剩孕芿仔刺咨姉姿子字孜恣慈滋炙煮玆瓷疵磁紫者自茨蔗藉諮資雌作勺嚼斫昨灼炸爵綽芍酌雀鵲孱棧殘潺盞岑暫潛箴簪蠶雜丈仗匠場墻壯奬將帳庄張掌暲杖樟檣欌漿牆狀獐璋章粧腸臟臧莊葬蔣薔藏裝贓醬長'
      ],
      [
        'eea1',
        '障再哉在宰才材栽梓渽滓災縡裁財載齋齎爭箏諍錚佇低儲咀姐底抵杵楮樗沮渚狙猪疽箸紵苧菹著藷詛貯躇這邸雎齟勣吊嫡寂摘敵滴狄炙的積笛籍績翟荻謫賊赤跡蹟迪迹適鏑佃佺傳全典前剪塡塼奠專展廛悛戰栓殿氈澱'
      ],
      [
        'efa1',
        '煎琠田甸畑癲筌箋箭篆纏詮輾轉鈿銓錢鐫電顚顫餞切截折浙癤竊節絶占岾店漸点粘霑鮎點接摺蝶丁井亭停偵呈姃定幀庭廷征情挺政整旌晶晸柾楨檉正汀淀淨渟湞瀞炡玎珽町睛碇禎程穽精綎艇訂諪貞鄭酊釘鉦鋌錠霆靖'
      ],
      [
        'f0a1',
        '靜頂鼎制劑啼堤帝弟悌提梯濟祭第臍薺製諸蹄醍除際霽題齊俎兆凋助嘲弔彫措操早晁曺曹朝條棗槽漕潮照燥爪璪眺祖祚租稠窕粗糟組繰肇藻蚤詔調趙躁造遭釣阻雕鳥族簇足鏃存尊卒拙猝倧宗從悰慫棕淙琮種終綜縱腫'
      ],
      [
        'f1a1',
        '踪踵鍾鐘佐坐左座挫罪主住侏做姝胄呪周嗾奏宙州廚晝朱柱株注洲湊澍炷珠疇籌紂紬綢舟蛛註誅走躊輳週酎酒鑄駐竹粥俊儁准埈寯峻晙樽浚準濬焌畯竣蠢逡遵雋駿茁中仲衆重卽櫛楫汁葺增憎曾拯烝甑症繒蒸證贈之只'
      ],
      [
        'f2a1',
        '咫地址志持指摯支旨智枝枳止池沚漬知砥祉祗紙肢脂至芝芷蜘誌識贄趾遲直稙稷織職唇嗔塵振搢晉晋桭榛殄津溱珍瑨璡畛疹盡眞瞋秦縉縝臻蔯袗診賑軫辰進鎭陣陳震侄叱姪嫉帙桎瓆疾秩窒膣蛭質跌迭斟朕什執潗緝輯'
      ],
      [
        'f3a1',
        '鏶集徵懲澄且侘借叉嗟嵯差次此磋箚茶蹉車遮捉搾着窄錯鑿齪撰澯燦璨瓚竄簒纂粲纘讚贊鑽餐饌刹察擦札紮僭參塹慘慙懺斬站讒讖倉倡創唱娼廠彰愴敞昌昶暢槍滄漲猖瘡窓脹艙菖蒼債埰寀寨彩採砦綵菜蔡采釵冊柵策'
      ],
      [
        'f4a1',
        '責凄妻悽處倜刺剔尺慽戚拓擲斥滌瘠脊蹠陟隻仟千喘天川擅泉淺玔穿舛薦賤踐遷釧闡阡韆凸哲喆徹撤澈綴輟轍鐵僉尖沾添甛瞻簽籤詹諂堞妾帖捷牒疊睫諜貼輒廳晴淸聽菁請靑鯖切剃替涕滯締諦逮遞體初剿哨憔抄招梢'
      ],
      [
        'f5a1',
        '椒楚樵炒焦硝礁礎秒稍肖艸苕草蕉貂超酢醋醮促囑燭矗蜀觸寸忖村邨叢塚寵悤憁摠總聰蔥銃撮催崔最墜抽推椎楸樞湫皺秋芻萩諏趨追鄒酋醜錐錘鎚雛騶鰍丑畜祝竺筑築縮蓄蹙蹴軸逐春椿瑃出朮黜充忠沖蟲衝衷悴膵萃'
      ],
      [
        'f6a1',
        '贅取吹嘴娶就炊翠聚脆臭趣醉驟鷲側仄厠惻測層侈値嗤峙幟恥梔治淄熾痔痴癡稚穉緇緻置致蚩輜雉馳齒則勅飭親七柒漆侵寢枕沈浸琛砧針鍼蟄秤稱快他咤唾墮妥惰打拖朶楕舵陀馱駝倬卓啄坼度托拓擢晫柝濁濯琢琸託'
      ],
      [
        'f7a1',
        '鐸呑嘆坦彈憚歎灘炭綻誕奪脫探眈耽貪塔搭榻宕帑湯糖蕩兌台太怠態殆汰泰笞胎苔跆邰颱宅擇澤撑攄兎吐土討慟桶洞痛筒統通堆槌腿褪退頹偸套妬投透鬪慝特闖坡婆巴把播擺杷波派爬琶破罷芭跛頗判坂板版瓣販辦鈑'
      ],
      [
        'f8a1',
        '阪八叭捌佩唄悖敗沛浿牌狽稗覇貝彭澎烹膨愎便偏扁片篇編翩遍鞭騙貶坪平枰萍評吠嬖幣廢弊斃肺蔽閉陛佈包匍匏咆哺圃布怖抛抱捕暴泡浦疱砲胞脯苞葡蒲袍褒逋鋪飽鮑幅暴曝瀑爆輻俵剽彪慓杓標漂瓢票表豹飇飄驃'
      ],
      [
        'f9a1',
        '品稟楓諷豊風馮彼披疲皮被避陂匹弼必泌珌畢疋筆苾馝乏逼下何厦夏廈昰河瑕荷蝦賀遐霞鰕壑學虐謔鶴寒恨悍旱汗漢澣瀚罕翰閑閒限韓割轄函含咸啣喊檻涵緘艦銜陷鹹合哈盒蛤閤闔陜亢伉姮嫦巷恒抗杭桁沆港缸肛航'
      ],
      [
        'faa1',
        '行降項亥偕咳垓奚孩害懈楷海瀣蟹解該諧邂駭骸劾核倖幸杏荇行享向嚮珦鄕響餉饗香噓墟虛許憲櫶獻軒歇險驗奕爀赫革俔峴弦懸晛泫炫玄玹現眩睍絃絢縣舷衒見賢鉉顯孑穴血頁嫌俠協夾峽挾浹狹脅脇莢鋏頰亨兄刑型'
      ],
      [
        'fba1',
        '形泂滎瀅灐炯熒珩瑩荊螢衡逈邢鎣馨兮彗惠慧暳蕙蹊醯鞋乎互呼壕壺好岵弧戶扈昊晧毫浩淏湖滸澔濠濩灝狐琥瑚瓠皓祜糊縞胡芦葫蒿虎號蝴護豪鎬頀顥惑或酷婚昏混渾琿魂忽惚笏哄弘汞泓洪烘紅虹訌鴻化和嬅樺火畵'
      ],
      [
        'fca1',
        '禍禾花華話譁貨靴廓擴攫確碻穫丸喚奐宦幻患換歡晥桓渙煥環紈還驩鰥活滑猾豁闊凰幌徨恍惶愰慌晃晄榥況湟滉潢煌璜皇篁簧荒蝗遑隍黃匯回廻徊恢悔懷晦會檜淮澮灰獪繪膾茴蛔誨賄劃獲宖橫鐄哮嚆孝效斅曉梟涍淆'
      ],
      [
        'fda1',
        '爻肴酵驍侯候厚后吼喉嗅帿後朽煦珝逅勛勳塤壎焄熏燻薰訓暈薨喧暄煊萱卉喙毁彙徽揮暉煇諱輝麾休携烋畦虧恤譎鷸兇凶匈洶胸黑昕欣炘痕吃屹紇訖欠欽歆吸恰洽翕興僖凞喜噫囍姬嬉希憙憘戱晞曦熙熹熺犧禧稀羲詰'
      ]
    ]
  }),
  Jc = Object.freeze({
    __proto__: null,
    default: [
      ['0', '\0', 127],
      [
        'a140',
        '　，、。．‧；：？！︰…‥﹐﹑﹒·﹔﹕﹖﹗｜–︱—︳╴︴﹏（）︵︶｛｝︷︸〔〕︹︺【】︻︼《》︽︾〈〉︿﹀「」﹁﹂『』﹃﹄﹙﹚'
      ],
      [
        'a1a1',
        '﹛﹜﹝﹞‘’“”〝〞‵′＃＆＊※§〃○●△▲◎☆★◇◆□■▽▼㊣℅¯￣＿ˍ﹉﹊﹍﹎﹋﹌﹟﹠﹡＋－×÷±√＜＞＝≦≧≠∞≒≡﹢',
        4,
        '～∩∪⊥∠∟⊿㏒㏑∫∮∵∴♀♂⊕⊙↑↓←→↖↗↙↘∥∣／'
      ],
      [
        'a240',
        '＼∕﹨＄￥〒￠￡％＠℃℉﹩﹪﹫㏕㎜㎝㎞㏎㎡㎎㎏㏄°兙兛兞兝兡兣嗧瓩糎▁',
        7,
        '▏▎▍▌▋▊▉┼┴┬┤├▔─│▕┌┐└┘╭'
      ],
      [
        'a2a1',
        '╮╰╯═╞╪╡◢◣◥◤╱╲╳０',
        9,
        'Ⅰ',
        9,
        '〡',
        8,
        '十卄卅Ａ',
        25,
        'ａ',
        21
      ],
      ['a340', 'ｗｘｙｚΑ', 16, 'Σ', 6, 'α', 16, 'σ', 6, 'ㄅ', 10],
      ['a3a1', 'ㄐ', 25, '˙ˉˊˇˋ'],
      ['a3e1', '€'],
      [
        'a440',
        '一乙丁七乃九了二人儿入八几刀刁力匕十卜又三下丈上丫丸凡久么也乞于亡兀刃勺千叉口土士夕大女子孑孓寸小尢尸山川工己已巳巾干廾弋弓才'
      ],
      [
        'a4a1',
        '丑丐不中丰丹之尹予云井互五亢仁什仃仆仇仍今介仄元允內六兮公冗凶分切刈勻勾勿化匹午升卅卞厄友及反壬天夫太夭孔少尤尺屯巴幻廿弔引心戈戶手扎支文斗斤方日曰月木欠止歹毋比毛氏水火爪父爻片牙牛犬王丙'
      ],
      [
        'a540',
        '世丕且丘主乍乏乎以付仔仕他仗代令仙仞充兄冉冊冬凹出凸刊加功包匆北匝仟半卉卡占卯卮去可古右召叮叩叨叼司叵叫另只史叱台句叭叻四囚外'
      ],
      [
        'a5a1',
        '央失奴奶孕它尼巨巧左市布平幼弁弘弗必戊打扔扒扑斥旦朮本未末札正母民氐永汁汀氾犯玄玉瓜瓦甘生用甩田由甲申疋白皮皿目矛矢石示禾穴立丞丟乒乓乩亙交亦亥仿伉伙伊伕伍伐休伏仲件任仰仳份企伋光兇兆先全'
      ],
      [
        'a640',
        '共再冰列刑划刎刖劣匈匡匠印危吉吏同吊吐吁吋各向名合吃后吆吒因回囝圳地在圭圬圯圩夙多夷夸妄奸妃好她如妁字存宇守宅安寺尖屹州帆并年'
      ],
      [
        'a6a1',
        '式弛忙忖戎戌戍成扣扛托收早旨旬旭曲曳有朽朴朱朵次此死氖汝汗汙江池汐汕污汛汍汎灰牟牝百竹米糸缶羊羽老考而耒耳聿肉肋肌臣自至臼舌舛舟艮色艾虫血行衣西阡串亨位住佇佗佞伴佛何估佐佑伽伺伸佃佔似但佣'
      ],
      [
        'a740',
        '作你伯低伶余佝佈佚兌克免兵冶冷別判利刪刨劫助努劬匣即卵吝吭吞吾否呎吧呆呃吳呈呂君吩告吹吻吸吮吵吶吠吼呀吱含吟听囪困囤囫坊坑址坍'
      ],
      [
        'a7a1',
        '均坎圾坐坏圻壯夾妝妒妨妞妣妙妖妍妤妓妊妥孝孜孚孛完宋宏尬局屁尿尾岐岑岔岌巫希序庇床廷弄弟彤形彷役忘忌志忍忱快忸忪戒我抄抗抖技扶抉扭把扼找批扳抒扯折扮投抓抑抆改攻攸旱更束李杏材村杜杖杞杉杆杠'
      ],
      [
        'a840',
        '杓杗步每求汞沙沁沈沉沅沛汪決沐汰沌汨沖沒汽沃汲汾汴沆汶沍沔沘沂灶灼災灸牢牡牠狄狂玖甬甫男甸皂盯矣私秀禿究系罕肖肓肝肘肛肚育良芒'
      ],
      [
        'a8a1',
        '芋芍見角言谷豆豕貝赤走足身車辛辰迂迆迅迄巡邑邢邪邦那酉釆里防阮阱阪阬並乖乳事些亞享京佯依侍佳使佬供例來侃佰併侈佩佻侖佾侏侑佺兔兒兕兩具其典冽函刻券刷刺到刮制剁劾劻卒協卓卑卦卷卸卹取叔受味呵'
      ],
      [
        'a940',
        '咖呸咕咀呻呷咄咒咆呼咐呱呶和咚呢周咋命咎固垃坷坪坩坡坦坤坼夜奉奇奈奄奔妾妻委妹妮姑姆姐姍始姓姊妯妳姒姅孟孤季宗定官宜宙宛尚屈居'
      ],
      [
        'a9a1',
        '屆岷岡岸岩岫岱岳帘帚帖帕帛帑幸庚店府底庖延弦弧弩往征彿彼忝忠忽念忿怏怔怯怵怖怪怕怡性怩怫怛或戕房戾所承拉拌拄抿拂抹拒招披拓拔拋拈抨抽押拐拙拇拍抵拚抱拘拖拗拆抬拎放斧於旺昔易昌昆昂明昀昏昕昊'
      ],
      [
        'aa40',
        '昇服朋杭枋枕東果杳杷枇枝林杯杰板枉松析杵枚枓杼杪杲欣武歧歿氓氛泣注泳沱泌泥河沽沾沼波沫法泓沸泄油況沮泗泅泱沿治泡泛泊沬泯泜泖泠'
      ],
      [
        'aaa1',
        '炕炎炒炊炙爬爭爸版牧物狀狎狙狗狐玩玨玟玫玥甽疝疙疚的盂盲直知矽社祀祁秉秈空穹竺糾罔羌羋者肺肥肢肱股肫肩肴肪肯臥臾舍芳芝芙芭芽芟芹花芬芥芯芸芣芰芾芷虎虱初表軋迎返近邵邸邱邶采金長門阜陀阿阻附'
      ],
      [
        'ab40',
        '陂隹雨青非亟亭亮信侵侯便俠俑俏保促侶俘俟俊俗侮俐俄係俚俎俞侷兗冒冑冠剎剃削前剌剋則勇勉勃勁匍南卻厚叛咬哀咨哎哉咸咦咳哇哂咽咪品'
      ],
      [
        'aba1',
        '哄哈咯咫咱咻咩咧咿囿垂型垠垣垢城垮垓奕契奏奎奐姜姘姿姣姨娃姥姪姚姦威姻孩宣宦室客宥封屎屏屍屋峙峒巷帝帥帟幽庠度建弈弭彥很待徊律徇後徉怒思怠急怎怨恍恰恨恢恆恃恬恫恪恤扁拜挖按拼拭持拮拽指拱拷'
      ],
      [
        'ac40',
        '拯括拾拴挑挂政故斫施既春昭映昧是星昨昱昤曷柿染柱柔某柬架枯柵柩柯柄柑枴柚查枸柏柞柳枰柙柢柝柒歪殃殆段毒毗氟泉洋洲洪流津洌洱洞洗'
      ],
      [
        'aca1',
        '活洽派洶洛泵洹洧洸洩洮洵洎洫炫為炳炬炯炭炸炮炤爰牲牯牴狩狠狡玷珊玻玲珍珀玳甚甭畏界畎畋疫疤疥疢疣癸皆皇皈盈盆盃盅省盹相眉看盾盼眇矜砂研砌砍祆祉祈祇禹禺科秒秋穿突竿竽籽紂紅紀紉紇約紆缸美羿耄'
      ],
      [
        'ad40',
        '耐耍耑耶胖胥胚胃胄背胡胛胎胞胤胝致舢苧范茅苣苛苦茄若茂茉苒苗英茁苜苔苑苞苓苟苯茆虐虹虻虺衍衫要觔計訂訃貞負赴赳趴軍軌述迦迢迪迥'
      ],
      [
        'ada1',
        '迭迫迤迨郊郎郁郃酋酊重閂限陋陌降面革韋韭音頁風飛食首香乘亳倌倍倣俯倦倥俸倩倖倆值借倚倒們俺倀倔倨俱倡個候倘俳修倭倪俾倫倉兼冤冥冢凍凌准凋剖剜剔剛剝匪卿原厝叟哨唐唁唷哼哥哲唆哺唔哩哭員唉哮哪'
      ],
      [
        'ae40',
        '哦唧唇哽唏圃圄埂埔埋埃堉夏套奘奚娑娘娜娟娛娓姬娠娣娩娥娌娉孫屘宰害家宴宮宵容宸射屑展屐峭峽峻峪峨峰島崁峴差席師庫庭座弱徒徑徐恙'
      ],
      [
        'aea1',
        '恣恥恐恕恭恩息悄悟悚悍悔悌悅悖扇拳挈拿捎挾振捕捂捆捏捉挺捐挽挪挫挨捍捌效敉料旁旅時晉晏晃晒晌晅晁書朔朕朗校核案框桓根桂桔栩梳栗桌桑栽柴桐桀格桃株桅栓栘桁殊殉殷氣氧氨氦氤泰浪涕消涇浦浸海浙涓'
      ],
      [
        'af40',
        '浬涉浮浚浴浩涌涊浹涅浥涔烊烘烤烙烈烏爹特狼狹狽狸狷玆班琉珮珠珪珞畔畝畜畚留疾病症疲疳疽疼疹痂疸皋皰益盍盎眩真眠眨矩砰砧砸砝破砷'
      ],
      [
        'afa1',
        '砥砭砠砟砲祕祐祠祟祖神祝祗祚秤秣秧租秦秩秘窄窈站笆笑粉紡紗紋紊素索純紐紕級紜納紙紛缺罟羔翅翁耆耘耕耙耗耽耿胱脂胰脅胭胴脆胸胳脈能脊胼胯臭臬舀舐航舫舨般芻茫荒荔荊茸荐草茵茴荏茲茹茶茗荀茱茨荃'
      ],
      [
        'b040',
        '虔蚊蚪蚓蚤蚩蚌蚣蚜衰衷袁袂衽衹記訐討訌訕訊託訓訖訏訑豈豺豹財貢起躬軒軔軏辱送逆迷退迺迴逃追逅迸邕郡郝郢酒配酌釘針釗釜釙閃院陣陡'
      ],
      [
        'b0a1',
        '陛陝除陘陞隻飢馬骨高鬥鬲鬼乾偺偽停假偃偌做偉健偶偎偕偵側偷偏倏偯偭兜冕凰剪副勒務勘動匐匏匙匿區匾參曼商啪啦啄啞啡啃啊唱啖問啕唯啤唸售啜唬啣唳啁啗圈國圉域堅堊堆埠埤基堂堵執培夠奢娶婁婉婦婪婀'
      ],
      [
        'b140',
        '娼婢婚婆婊孰寇寅寄寂宿密尉專將屠屜屝崇崆崎崛崖崢崑崩崔崙崤崧崗巢常帶帳帷康庸庶庵庾張強彗彬彩彫得徙從徘御徠徜恿患悉悠您惋悴惦悽'
      ],
      [
        'b1a1',
        '情悻悵惜悼惘惕惆惟悸惚惇戚戛扈掠控捲掖探接捷捧掘措捱掩掉掃掛捫推掄授掙採掬排掏掀捻捩捨捺敝敖救教敗啟敏敘敕敔斜斛斬族旋旌旎晝晚晤晨晦晞曹勗望梁梯梢梓梵桿桶梱梧梗械梃棄梭梆梅梔條梨梟梡梂欲殺'
      ],
      [
        'b240',
        '毫毬氫涎涼淳淙液淡淌淤添淺清淇淋涯淑涮淞淹涸混淵淅淒渚涵淚淫淘淪深淮淨淆淄涪淬涿淦烹焉焊烽烯爽牽犁猜猛猖猓猙率琅琊球理現琍瓠瓶'
      ],
      [
        'b2a1',
        '瓷甜產略畦畢異疏痔痕疵痊痍皎盔盒盛眷眾眼眶眸眺硫硃硎祥票祭移窒窕笠笨笛第符笙笞笮粒粗粕絆絃統紮紹紼絀細紳組累終紲紱缽羞羚翌翎習耜聊聆脯脖脣脫脩脰脤舂舵舷舶船莎莞莘荸莢莖莽莫莒莊莓莉莠荷荻荼'
      ],
      [
        'b340',
        '莆莧處彪蛇蛀蚶蛄蚵蛆蛋蚱蚯蛉術袞袈被袒袖袍袋覓規訪訝訣訥許設訟訛訢豉豚販責貫貨貪貧赧赦趾趺軛軟這逍通逗連速逝逐逕逞造透逢逖逛途'
      ],
      [
        'b3a1',
        '部郭都酗野釵釦釣釧釭釩閉陪陵陳陸陰陴陶陷陬雀雪雩章竟頂頃魚鳥鹵鹿麥麻傢傍傅備傑傀傖傘傚最凱割剴創剩勞勝勛博厥啻喀喧啼喊喝喘喂喜喪喔喇喋喃喳單喟唾喲喚喻喬喱啾喉喫喙圍堯堪場堤堰報堡堝堠壹壺奠'
      ],
      [
        'b440',
        '婷媚婿媒媛媧孳孱寒富寓寐尊尋就嵌嵐崴嵇巽幅帽幀幃幾廊廁廂廄弼彭復循徨惑惡悲悶惠愜愣惺愕惰惻惴慨惱愎惶愉愀愒戟扉掣掌描揀揩揉揆揍'
      ],
      [
        'b4a1',
        '插揣提握揖揭揮捶援揪換摒揚揹敞敦敢散斑斐斯普晰晴晶景暑智晾晷曾替期朝棺棕棠棘棗椅棟棵森棧棹棒棲棣棋棍植椒椎棉棚楮棻款欺欽殘殖殼毯氮氯氬港游湔渡渲湧湊渠渥渣減湛湘渤湖湮渭渦湯渴湍渺測湃渝渾滋'
      ],
      [
        'b540',
        '溉渙湎湣湄湲湩湟焙焚焦焰無然煮焜牌犄犀猶猥猴猩琺琪琳琢琥琵琶琴琯琛琦琨甥甦畫番痢痛痣痙痘痞痠登發皖皓皴盜睏短硝硬硯稍稈程稅稀窘'
      ],
      [
        'b5a1',
        '窗窖童竣等策筆筐筒答筍筋筏筑粟粥絞結絨絕紫絮絲絡給絢絰絳善翔翕耋聒肅腕腔腋腑腎脹腆脾腌腓腴舒舜菩萃菸萍菠菅萋菁華菱菴著萊菰萌菌菽菲菊萸萎萄菜萇菔菟虛蛟蛙蛭蛔蛛蛤蛐蛞街裁裂袱覃視註詠評詞証詁'
      ],
      [
        'b640',
        '詔詛詐詆訴診訶詖象貂貯貼貳貽賁費賀貴買貶貿貸越超趁跎距跋跚跑跌跛跆軻軸軼辜逮逵週逸進逶鄂郵鄉郾酣酥量鈔鈕鈣鈉鈞鈍鈐鈇鈑閔閏開閑'
      ],
      [
        'b6a1',
        '間閒閎隊階隋陽隅隆隍陲隄雁雅雄集雇雯雲韌項順須飧飪飯飩飲飭馮馭黃黍黑亂傭債傲傳僅傾催傷傻傯僇剿剷剽募勦勤勢勣匯嗟嗨嗓嗦嗎嗜嗇嗑嗣嗤嗯嗚嗡嗅嗆嗥嗉園圓塞塑塘塗塚塔填塌塭塊塢塒塋奧嫁嫉嫌媾媽媼'
      ],
      [
        'b740',
        '媳嫂媲嵩嵯幌幹廉廈弒彙徬微愚意慈感想愛惹愁愈慎慌慄慍愾愴愧愍愆愷戡戢搓搾搞搪搭搽搬搏搜搔損搶搖搗搆敬斟新暗暉暇暈暖暄暘暍會榔業'
      ],
      [
        'b7a1',
        '楚楷楠楔極椰概楊楨楫楞楓楹榆楝楣楛歇歲毀殿毓毽溢溯滓溶滂源溝滇滅溥溘溼溺溫滑準溜滄滔溪溧溴煎煙煩煤煉照煜煬煦煌煥煞煆煨煖爺牒猷獅猿猾瑯瑚瑕瑟瑞瑁琿瑙瑛瑜當畸瘀痰瘁痲痱痺痿痴痳盞盟睛睫睦睞督'
      ],
      [
        'b840',
        '睹睪睬睜睥睨睢矮碎碰碗碘碌碉硼碑碓硿祺祿禁萬禽稜稚稠稔稟稞窟窠筷節筠筮筧粱粳粵經絹綑綁綏絛置罩罪署義羨群聖聘肆肄腱腰腸腥腮腳腫'
      ],
      [
        'b8a1',
        '腹腺腦舅艇蒂葷落萱葵葦葫葉葬葛萼萵葡董葩葭葆虞虜號蛹蜓蜈蜇蜀蛾蛻蜂蜃蜆蜊衙裟裔裙補裘裝裡裊裕裒覜解詫該詳試詩詰誇詼詣誠話誅詭詢詮詬詹詻訾詨豢貊貉賊資賈賄貲賃賂賅跡跟跨路跳跺跪跤跦躲較載軾輊'
      ],
      [
        'b940',
        '辟農運遊道遂達逼違遐遇遏過遍遑逾遁鄒鄗酬酪酩釉鈷鉗鈸鈽鉀鈾鉛鉋鉤鉑鈴鉉鉍鉅鈹鈿鉚閘隘隔隕雍雋雉雊雷電雹零靖靴靶預頑頓頊頒頌飼飴'
      ],
      [
        'b9a1',
        '飽飾馳馱馴髡鳩麂鼎鼓鼠僧僮僥僖僭僚僕像僑僱僎僩兢凳劃劂匱厭嗾嘀嘛嘗嗽嘔嘆嘉嘍嘎嗷嘖嘟嘈嘐嗶團圖塵塾境墓墊塹墅塽壽夥夢夤奪奩嫡嫦嫩嫗嫖嫘嫣孵寞寧寡寥實寨寢寤察對屢嶄嶇幛幣幕幗幔廓廖弊彆彰徹慇'
      ],
      [
        'ba40',
        '愿態慷慢慣慟慚慘慵截撇摘摔撤摸摟摺摑摧搴摭摻敲斡旗旖暢暨暝榜榨榕槁榮槓構榛榷榻榫榴槐槍榭槌榦槃榣歉歌氳漳演滾漓滴漩漾漠漬漏漂漢'
      ],
      [
        'baa1',
        '滿滯漆漱漸漲漣漕漫漯澈漪滬漁滲滌滷熔熙煽熊熄熒爾犒犖獄獐瑤瑣瑪瑰瑭甄疑瘧瘍瘋瘉瘓盡監瞄睽睿睡磁碟碧碳碩碣禎福禍種稱窪窩竭端管箕箋筵算箝箔箏箸箇箄粹粽精綻綰綜綽綾綠緊綴網綱綺綢綿綵綸維緒緇綬'
      ],
      [
        'bb40',
        '罰翠翡翟聞聚肇腐膀膏膈膊腿膂臧臺與舔舞艋蓉蒿蓆蓄蒙蒞蒲蒜蓋蒸蓀蓓蒐蒼蓑蓊蜿蜜蜻蜢蜥蜴蜘蝕蜷蜩裳褂裴裹裸製裨褚裯誦誌語誣認誡誓誤'
      ],
      [
        'bba1',
        '說誥誨誘誑誚誧豪貍貌賓賑賒赫趙趕跼輔輒輕輓辣遠遘遜遣遙遞遢遝遛鄙鄘鄞酵酸酷酴鉸銀銅銘銖鉻銓銜銨鉼銑閡閨閩閣閥閤隙障際雌雒需靼鞅韶頗領颯颱餃餅餌餉駁骯骰髦魁魂鳴鳶鳳麼鼻齊億儀僻僵價儂儈儉儅凜'
      ],
      [
        'bc40',
        '劇劈劉劍劊勰厲嘮嘻嘹嘲嘿嘴嘩噓噎噗噴嘶嘯嘰墀墟增墳墜墮墩墦奭嬉嫻嬋嫵嬌嬈寮寬審寫層履嶝嶔幢幟幡廢廚廟廝廣廠彈影德徵慶慧慮慝慕憂'
      ],
      [
        'bca1',
        '慼慰慫慾憧憐憫憎憬憚憤憔憮戮摩摯摹撞撲撈撐撰撥撓撕撩撒撮播撫撚撬撙撢撳敵敷數暮暫暴暱樣樟槨樁樞標槽模樓樊槳樂樅槭樑歐歎殤毅毆漿潼澄潑潦潔澆潭潛潸潮澎潺潰潤澗潘滕潯潠潟熟熬熱熨牖犛獎獗瑩璋璃'
      ],
      [
        'bd40',
        '瑾璀畿瘠瘩瘟瘤瘦瘡瘢皚皺盤瞎瞇瞌瞑瞋磋磅確磊碾磕碼磐稿稼穀稽稷稻窯窮箭箱範箴篆篇篁箠篌糊締練緯緻緘緬緝編緣線緞緩綞緙緲緹罵罷羯'
      ],
      [
        'bda1',
        '翩耦膛膜膝膠膚膘蔗蔽蔚蓮蔬蔭蔓蔑蔣蔡蔔蓬蔥蓿蔆螂蝴蝶蝠蝦蝸蝨蝙蝗蝌蝓衛衝褐複褒褓褕褊誼諒談諄誕請諸課諉諂調誰論諍誶誹諛豌豎豬賠賞賦賤賬賭賢賣賜質賡赭趟趣踫踐踝踢踏踩踟踡踞躺輝輛輟輩輦輪輜輞'
      ],
      [
        'be40',
        '輥適遮遨遭遷鄰鄭鄧鄱醇醉醋醃鋅銻銷鋪銬鋤鋁銳銼鋒鋇鋰銲閭閱霄霆震霉靠鞍鞋鞏頡頫頜颳養餓餒餘駝駐駟駛駑駕駒駙骷髮髯鬧魅魄魷魯鴆鴉'
      ],
      [
        'bea1',
        '鴃麩麾黎墨齒儒儘儔儐儕冀冪凝劑劓勳噙噫噹噩噤噸噪器噥噱噯噬噢噶壁墾壇壅奮嬝嬴學寰導彊憲憑憩憊懍憶憾懊懈戰擅擁擋撻撼據擄擇擂操撿擒擔撾整曆曉暹曄曇暸樽樸樺橙橫橘樹橄橢橡橋橇樵機橈歙歷氅濂澱澡'
      ],
      [
        'bf40',
        '濃澤濁澧澳激澹澶澦澠澴熾燉燐燒燈燕熹燎燙燜燃燄獨璜璣璘璟璞瓢甌甍瘴瘸瘺盧盥瞠瞞瞟瞥磨磚磬磧禦積穎穆穌穋窺篙簑築篤篛篡篩篦糕糖縊'
      ],
      [
        'bfa1',
        '縑縈縛縣縞縝縉縐罹羲翰翱翮耨膳膩膨臻興艘艙蕊蕙蕈蕨蕩蕃蕉蕭蕪蕞螃螟螞螢融衡褪褲褥褫褡親覦諦諺諫諱謀諜諧諮諾謁謂諷諭諳諶諼豫豭貓賴蹄踱踴蹂踹踵輻輯輸輳辨辦遵遴選遲遼遺鄴醒錠錶鋸錳錯錢鋼錫錄錚'
      ],
      [
        'c040',
        '錐錦錡錕錮錙閻隧隨險雕霎霑霖霍霓霏靛靜靦鞘頰頸頻頷頭頹頤餐館餞餛餡餚駭駢駱骸骼髻髭鬨鮑鴕鴣鴦鴨鴒鴛默黔龍龜優償儡儲勵嚎嚀嚐嚅嚇'
      ],
      [
        'c0a1',
        '嚏壕壓壑壎嬰嬪嬤孺尷屨嶼嶺嶽嶸幫彌徽應懂懇懦懋戲戴擎擊擘擠擰擦擬擱擢擭斂斃曙曖檀檔檄檢檜櫛檣橾檗檐檠歜殮毚氈濘濱濟濠濛濤濫濯澀濬濡濩濕濮濰燧營燮燦燥燭燬燴燠爵牆獰獲璩環璦璨癆療癌盪瞳瞪瞰瞬'
      ],
      [
        'c140',
        '瞧瞭矯磷磺磴磯礁禧禪穗窿簇簍篾篷簌篠糠糜糞糢糟糙糝縮績繆縷縲繃縫總縱繅繁縴縹繈縵縿縯罄翳翼聱聲聰聯聳臆臃膺臂臀膿膽臉膾臨舉艱薪'
      ],
      [
        'c1a1',
        '薄蕾薜薑薔薯薛薇薨薊虧蟀蟑螳蟒蟆螫螻螺蟈蟋褻褶襄褸褽覬謎謗謙講謊謠謝謄謐豁谿豳賺賽購賸賻趨蹉蹋蹈蹊轄輾轂轅輿避遽還邁邂邀鄹醣醞醜鍍鎂錨鍵鍊鍥鍋錘鍾鍬鍛鍰鍚鍔闊闋闌闈闆隱隸雖霜霞鞠韓顆颶餵騁'
      ],
      [
        'c240',
        '駿鮮鮫鮪鮭鴻鴿麋黏點黜黝黛鼾齋叢嚕嚮壙壘嬸彝懣戳擴擲擾攆擺擻擷斷曜朦檳檬櫃檻檸櫂檮檯歟歸殯瀉瀋濾瀆濺瀑瀏燻燼燾燸獷獵璧璿甕癖癘'
      ],
      [
        'c2a1',
        '癒瞽瞿瞻瞼礎禮穡穢穠竄竅簫簧簪簞簣簡糧織繕繞繚繡繒繙罈翹翻職聶臍臏舊藏薩藍藐藉薰薺薹薦蟯蟬蟲蟠覆覲觴謨謹謬謫豐贅蹙蹣蹦蹤蹟蹕軀轉轍邇邃邈醫醬釐鎔鎊鎖鎢鎳鎮鎬鎰鎘鎚鎗闔闖闐闕離雜雙雛雞霤鞣鞦'
      ],
      [
        'c340',
        '鞭韹額顏題顎顓颺餾餿餽餮馥騎髁鬃鬆魏魎魍鯊鯉鯽鯈鯀鵑鵝鵠黠鼕鼬儳嚥壞壟壢寵龐廬懲懷懶懵攀攏曠曝櫥櫝櫚櫓瀛瀟瀨瀚瀝瀕瀘爆爍牘犢獸'
      ],
      [
        'c3a1',
        '獺璽瓊瓣疇疆癟癡矇礙禱穫穩簾簿簸簽簷籀繫繭繹繩繪羅繳羶羹羸臘藩藝藪藕藤藥藷蟻蠅蠍蟹蟾襠襟襖襞譁譜識證譚譎譏譆譙贈贊蹼蹲躇蹶蹬蹺蹴轔轎辭邊邋醱醮鏡鏑鏟鏃鏈鏜鏝鏖鏢鏍鏘鏤鏗鏨關隴難霪霧靡韜韻類'
      ],
      [
        'c440',
        '願顛颼饅饉騖騙鬍鯨鯧鯖鯛鶉鵡鵲鵪鵬麒麗麓麴勸嚨嚷嚶嚴嚼壤孀孃孽寶巉懸懺攘攔攙曦朧櫬瀾瀰瀲爐獻瓏癢癥礦礪礬礫竇競籌籃籍糯糰辮繽繼'
      ],
      [
        'c4a1',
        '纂罌耀臚艦藻藹蘑藺蘆蘋蘇蘊蠔蠕襤覺觸議譬警譯譟譫贏贍躉躁躅躂醴釋鐘鐃鏽闡霰飄饒饑馨騫騰騷騵鰓鰍鹹麵黨鼯齟齣齡儷儸囁囀囂夔屬巍懼懾攝攜斕曩櫻欄櫺殲灌爛犧瓖瓔癩矓籐纏續羼蘗蘭蘚蠣蠢蠡蠟襪襬覽譴'
      ],
      [
        'c540',
        '護譽贓躊躍躋轟辯醺鐮鐳鐵鐺鐸鐲鐫闢霸霹露響顧顥饗驅驃驀騾髏魔魑鰭鰥鶯鶴鷂鶸麝黯鼙齜齦齧儼儻囈囊囉孿巔巒彎懿攤權歡灑灘玀瓤疊癮癬'
      ],
      [
        'c5a1',
        '禳籠籟聾聽臟襲襯觼讀贖贗躑躓轡酈鑄鑑鑒霽霾韃韁顫饕驕驍髒鬚鱉鰱鰾鰻鷓鷗鼴齬齪龔囌巖戀攣攫攪曬欐瓚竊籤籣籥纓纖纔臢蘸蘿蠱變邐邏鑣鑠鑤靨顯饜驚驛驗髓體髑鱔鱗鱖鷥麟黴囑壩攬灞癱癲矗罐羈蠶蠹衢讓讒'
      ],
      [
        'c640',
        '讖艷贛釀鑪靂靈靄韆顰驟鬢魘鱟鷹鷺鹼鹽鼇齷齲廳欖灣籬籮蠻觀躡釁鑲鑰顱饞髖鬣黌灤矚讚鑷韉驢驥纜讜躪釅鑽鑾鑼鱷鱸黷豔鑿鸚爨驪鬱鸛鸞籲'
      ],
      [
        'c940',
        '乂乜凵匚厂万丌乇亍囗兀屮彳丏冇与丮亓仂仉仈冘勼卬厹圠夃夬尐巿旡殳毌气爿丱丼仨仜仩仡仝仚刌匜卌圢圣夗夯宁宄尒尻屴屳帄庀庂忉戉扐氕'
      ],
      [
        'c9a1',
        '氶汃氿氻犮犰玊禸肊阞伎优伬仵伔仱伀价伈伝伂伅伢伓伄仴伒冱刓刉刐劦匢匟卍厊吇囡囟圮圪圴夼妀奼妅奻奾奷奿孖尕尥屼屺屻屾巟幵庄异弚彴忕忔忏扜扞扤扡扦扢扙扠扚扥旯旮朾朹朸朻机朿朼朳氘汆汒汜汏汊汔汋'
      ],
      [
        'ca40',
        '汌灱牞犴犵玎甪癿穵网艸艼芀艽艿虍襾邙邗邘邛邔阢阤阠阣佖伻佢佉体佤伾佧佒佟佁佘伭伳伿佡冏冹刜刞刡劭劮匉卣卲厎厏吰吷吪呔呅吙吜吥吘'
      ],
      [
        'caa1',
        '吽呏呁吨吤呇囮囧囥坁坅坌坉坋坒夆奀妦妘妠妗妎妢妐妏妧妡宎宒尨尪岍岏岈岋岉岒岊岆岓岕巠帊帎庋庉庌庈庍弅弝彸彶忒忑忐忭忨忮忳忡忤忣忺忯忷忻怀忴戺抃抌抎抏抔抇扱扻扺扰抁抈扷扽扲扴攷旰旴旳旲旵杅杇'
      ],
      [
        'cb40',
        '杙杕杌杈杝杍杚杋毐氙氚汸汧汫沄沋沏汱汯汩沚汭沇沕沜汦汳汥汻沎灴灺牣犿犽狃狆狁犺狅玕玗玓玔玒町甹疔疕皁礽耴肕肙肐肒肜芐芏芅芎芑芓'
      ],
      [
        'cba1',
        '芊芃芄豸迉辿邟邡邥邞邧邠阰阨阯阭丳侘佼侅佽侀侇佶佴侉侄佷佌侗佪侚佹侁佸侐侜侔侞侒侂侕佫佮冞冼冾刵刲刳剆刱劼匊匋匼厒厔咇呿咁咑咂咈呫呺呾呥呬呴呦咍呯呡呠咘呣呧呤囷囹坯坲坭坫坱坰坶垀坵坻坳坴坢'
      ],
      [
        'cc40',
        '坨坽夌奅妵妺姏姎妲姌姁妶妼姃姖妱妽姀姈妴姇孢孥宓宕屄屇岮岤岠岵岯岨岬岟岣岭岢岪岧岝岥岶岰岦帗帔帙弨弢弣弤彔徂彾彽忞忥怭怦怙怲怋'
      ],
      [
        'cca1',
        '怴怊怗怳怚怞怬怢怍怐怮怓怑怌怉怜戔戽抭抴拑抾抪抶拊抮抳抯抻抩抰抸攽斨斻昉旼昄昒昈旻昃昋昍昅旽昑昐曶朊枅杬枎枒杶杻枘枆构杴枍枌杺枟枑枙枃杽极杸杹枔欥殀歾毞氝沓泬泫泮泙沶泔沭泧沷泐泂沺泃泆泭泲'
      ],
      [
        'cd40',
        '泒泝沴沊沝沀泞泀洰泍泇沰泹泏泩泑炔炘炅炓炆炄炑炖炂炚炃牪狖狋狘狉狜狒狔狚狌狑玤玡玭玦玢玠玬玝瓝瓨甿畀甾疌疘皯盳盱盰盵矸矼矹矻矺'
      ],
      [
        'cda1',
        '矷祂礿秅穸穻竻籵糽耵肏肮肣肸肵肭舠芠苀芫芚芘芛芵芧芮芼芞芺芴芨芡芩苂芤苃芶芢虰虯虭虮豖迒迋迓迍迖迕迗邲邴邯邳邰阹阽阼阺陃俍俅俓侲俉俋俁俔俜俙侻侳俛俇俖侺俀侹俬剄剉勀勂匽卼厗厖厙厘咺咡咭咥哏'
      ],
      [
        'ce40',
        '哃茍咷咮哖咶哅哆咠呰咼咢咾呲哞咰垵垞垟垤垌垗垝垛垔垘垏垙垥垚垕壴复奓姡姞姮娀姱姝姺姽姼姶姤姲姷姛姩姳姵姠姾姴姭宨屌峐峘峌峗峋峛'
      ],
      [
        'cea1',
        '峞峚峉峇峊峖峓峔峏峈峆峎峟峸巹帡帢帣帠帤庰庤庢庛庣庥弇弮彖徆怷怹恔恲恞恅恓恇恉恛恌恀恂恟怤恄恘恦恮扂扃拏挍挋拵挎挃拫拹挏挌拸拶挀挓挔拺挕拻拰敁敃斪斿昶昡昲昵昜昦昢昳昫昺昝昴昹昮朏朐柁柲柈枺'
      ],
      [
        'cf40',
        '柜枻柸柘柀枷柅柫柤柟枵柍枳柷柶柮柣柂枹柎柧柰枲柼柆柭柌枮柦柛柺柉柊柃柪柋欨殂殄殶毖毘毠氠氡洨洴洭洟洼洿洒洊泚洳洄洙洺洚洑洀洝浂'
      ],
      [
        'cfa1',
        '洁洘洷洃洏浀洇洠洬洈洢洉洐炷炟炾炱炰炡炴炵炩牁牉牊牬牰牳牮狊狤狨狫狟狪狦狣玅珌珂珈珅玹玶玵玴珫玿珇玾珃珆玸珋瓬瓮甮畇畈疧疪癹盄眈眃眄眅眊盷盻盺矧矨砆砑砒砅砐砏砎砉砃砓祊祌祋祅祄秕种秏秖秎窀'
      ],
      [
        'd040',
        '穾竑笀笁籺籸籹籿粀粁紃紈紁罘羑羍羾耇耎耏耔耷胘胇胠胑胈胂胐胅胣胙胜胊胕胉胏胗胦胍臿舡芔苙苾苹茇苨茀苕茺苫苖苴苬苡苲苵茌苻苶苰苪'
      ],
      [
        'd0a1',
        '苤苠苺苳苭虷虴虼虳衁衎衧衪衩觓訄訇赲迣迡迮迠郱邽邿郕郅邾郇郋郈釔釓陔陏陑陓陊陎倞倅倇倓倢倰倛俵俴倳倷倬俶俷倗倜倠倧倵倯倱倎党冔冓凊凄凅凈凎剡剚剒剞剟剕剢勍匎厞唦哢唗唒哧哳哤唚哿唄唈哫唑唅哱'
      ],
      [
        'd140',
        '唊哻哷哸哠唎唃唋圁圂埌堲埕埒垺埆垽垼垸垶垿埇埐垹埁夎奊娙娖娭娮娕娏娗娊娞娳孬宧宭宬尃屖屔峬峿峮峱峷崀峹帩帨庨庮庪庬弳弰彧恝恚恧'
      ],
      [
        'd1a1',
        '恁悢悈悀悒悁悝悃悕悛悗悇悜悎戙扆拲挐捖挬捄捅挶捃揤挹捋捊挼挩捁挴捘捔捙挭捇挳捚捑挸捗捀捈敊敆旆旃旄旂晊晟晇晑朒朓栟栚桉栲栳栻桋桏栖栱栜栵栫栭栯桎桄栴栝栒栔栦栨栮桍栺栥栠欬欯欭欱欴歭肂殈毦毤'
      ],
      [
        'd240',
        '毨毣毢毧氥浺浣浤浶洍浡涒浘浢浭浯涑涍淯浿涆浞浧浠涗浰浼浟涂涘洯浨涋浾涀涄洖涃浻浽浵涐烜烓烑烝烋缹烢烗烒烞烠烔烍烅烆烇烚烎烡牂牸'
      ],
      [
        'd2a1',
        '牷牶猀狺狴狾狶狳狻猁珓珙珥珖玼珧珣珩珜珒珛珔珝珚珗珘珨瓞瓟瓴瓵甡畛畟疰痁疻痄痀疿疶疺皊盉眝眛眐眓眒眣眑眕眙眚眢眧砣砬砢砵砯砨砮砫砡砩砳砪砱祔祛祏祜祓祒祑秫秬秠秮秭秪秜秞秝窆窉窅窋窌窊窇竘笐'
      ],
      [
        'd340',
        '笄笓笅笏笈笊笎笉笒粄粑粊粌粈粍粅紞紝紑紎紘紖紓紟紒紏紌罜罡罞罠罝罛羖羒翃翂翀耖耾耹胺胲胹胵脁胻脀舁舯舥茳茭荄茙荑茥荖茿荁茦茜茢'
      ],
      [
        'd3a1',
        '荂荎茛茪茈茼荍茖茤茠茷茯茩荇荅荌荓茞茬荋茧荈虓虒蚢蚨蚖蚍蚑蚞蚇蚗蚆蚋蚚蚅蚥蚙蚡蚧蚕蚘蚎蚝蚐蚔衃衄衭衵衶衲袀衱衿衯袃衾衴衼訒豇豗豻貤貣赶赸趵趷趶軑軓迾迵适迿迻逄迼迶郖郠郙郚郣郟郥郘郛郗郜郤酐'
      ],
      [
        'd440',
        '酎酏釕釢釚陜陟隼飣髟鬯乿偰偪偡偞偠偓偋偝偲偈偍偁偛偊偢倕偅偟偩偫偣偤偆偀偮偳偗偑凐剫剭剬剮勖勓匭厜啵啶唼啍啐唴唪啑啢唶唵唰啒啅'
      ],
      [
        'd4a1',
        '唌唲啥啎唹啈唭唻啀啋圊圇埻堔埢埶埜埴堀埭埽堈埸堋埳埏堇埮埣埲埥埬埡堎埼堐埧堁堌埱埩埰堍堄奜婠婘婕婧婞娸娵婭婐婟婥婬婓婤婗婃婝婒婄婛婈媎娾婍娹婌婰婩婇婑婖婂婜孲孮寁寀屙崞崋崝崚崠崌崨崍崦崥崏'
      ],
      [
        'd540',
        '崰崒崣崟崮帾帴庱庴庹庲庳弶弸徛徖徟悊悐悆悾悰悺惓惔惏惤惙惝惈悱惛悷惊悿惃惍惀挲捥掊掂捽掽掞掭掝掗掫掎捯掇掐据掯捵掜捭掮捼掤挻掟'
      ],
      [
        'd5a1',
        '捸掅掁掑掍捰敓旍晥晡晛晙晜晢朘桹梇梐梜桭桮梮梫楖桯梣梬梩桵桴梲梏桷梒桼桫桲梪梀桱桾梛梖梋梠梉梤桸桻梑梌梊桽欶欳欷欸殑殏殍殎殌氪淀涫涴涳湴涬淩淢涷淶淔渀淈淠淟淖涾淥淜淝淛淴淊涽淭淰涺淕淂淏淉'
      ],
      [
        'd640',
        '淐淲淓淽淗淍淣涻烺焍烷焗烴焌烰焄烳焐烼烿焆焓焀烸烶焋焂焎牾牻牼牿猝猗猇猑猘猊猈狿猏猞玈珶珸珵琄琁珽琇琀珺珼珿琌琋珴琈畤畣痎痒痏'
      ],
      [
        'd6a1',
        '痋痌痑痐皏皉盓眹眯眭眱眲眴眳眽眥眻眵硈硒硉硍硊硌砦硅硐祤祧祩祪祣祫祡离秺秸秶秷窏窔窐笵筇笴笥笰笢笤笳笘笪笝笱笫笭笯笲笸笚笣粔粘粖粣紵紽紸紶紺絅紬紩絁絇紾紿絊紻紨罣羕羜羝羛翊翋翍翐翑翇翏翉耟'
      ],
      [
        'd740',
        '耞耛聇聃聈脘脥脙脛脭脟脬脞脡脕脧脝脢舑舸舳舺舴舲艴莐莣莨莍荺荳莤荴莏莁莕莙荵莔莩荽莃莌莝莛莪莋荾莥莯莈莗莰荿莦莇莮荶莚虙虖蚿蚷'
      ],
      [
        'd7a1',
        '蛂蛁蛅蚺蚰蛈蚹蚳蚸蛌蚴蚻蚼蛃蚽蚾衒袉袕袨袢袪袚袑袡袟袘袧袙袛袗袤袬袌袓袎覂觖觙觕訰訧訬訞谹谻豜豝豽貥赽赻赹趼跂趹趿跁軘軞軝軜軗軠軡逤逋逑逜逌逡郯郪郰郴郲郳郔郫郬郩酖酘酚酓酕釬釴釱釳釸釤釹釪'
      ],
      [
        'd840',
        '釫釷釨釮镺閆閈陼陭陫陱陯隿靪頄飥馗傛傕傔傞傋傣傃傌傎傝偨傜傒傂傇兟凔匒匑厤厧喑喨喥喭啷噅喢喓喈喏喵喁喣喒喤啽喌喦啿喕喡喎圌堩堷'
      ],
      [
        'd8a1',
        '堙堞堧堣堨埵塈堥堜堛堳堿堶堮堹堸堭堬堻奡媯媔媟婺媢媞婸媦婼媥媬媕媮娷媄媊媗媃媋媩婻婽媌媜媏媓媝寪寍寋寔寑寊寎尌尰崷嵃嵫嵁嵋崿崵嵑嵎嵕崳崺嵒崽崱嵙嵂崹嵉崸崼崲崶嵀嵅幄幁彘徦徥徫惉悹惌惢惎惄愔'
      ],
      [
        'd940',
        '惲愊愖愅惵愓惸惼惾惁愃愘愝愐惿愄愋扊掔掱掰揎揥揨揯揃撝揳揊揠揶揕揲揵摡揟掾揝揜揄揘揓揂揇揌揋揈揰揗揙攲敧敪敤敜敨敥斌斝斞斮旐旒'
      ],
      [
        'd9a1',
        '晼晬晻暀晱晹晪晲朁椌棓椄棜椪棬棪棱椏棖棷棫棤棶椓椐棳棡椇棌椈楰梴椑棯棆椔棸棐棽棼棨椋椊椗棎棈棝棞棦棴棑椆棔棩椕椥棇欹欻欿欼殔殗殙殕殽毰毲毳氰淼湆湇渟湉溈渼渽湅湢渫渿湁湝湳渜渳湋湀湑渻渃渮湞'
      ],
      [
        'da40',
        '湨湜湡渱渨湠湱湫渹渢渰湓湥渧湸湤湷湕湹湒湦渵渶湚焠焞焯烻焮焱焣焥焢焲焟焨焺焛牋牚犈犉犆犅犋猒猋猰猢猱猳猧猲猭猦猣猵猌琮琬琰琫琖'
      ],
      [
        'daa1',
        '琚琡琭琱琤琣琝琩琠琲瓻甯畯畬痧痚痡痦痝痟痤痗皕皒盚睆睇睄睍睅睊睎睋睌矞矬硠硤硥硜硭硱硪确硰硩硨硞硢祴祳祲祰稂稊稃稌稄窙竦竤筊笻筄筈筌筎筀筘筅粢粞粨粡絘絯絣絓絖絧絪絏絭絜絫絒絔絩絑絟絎缾缿罥'
      ],
      [
        'db40',
        '罦羢羠羡翗聑聏聐胾胔腃腊腒腏腇脽腍脺臦臮臷臸臹舄舼舽舿艵茻菏菹萣菀菨萒菧菤菼菶萐菆菈菫菣莿萁菝菥菘菿菡菋菎菖菵菉萉萏菞萑萆菂菳'
      ],
      [
        'dba1',
        '菕菺菇菑菪萓菃菬菮菄菻菗菢萛菛菾蛘蛢蛦蛓蛣蛚蛪蛝蛫蛜蛬蛩蛗蛨蛑衈衖衕袺裗袹袸裀袾袶袼袷袽袲褁裉覕覘覗觝觚觛詎詍訹詙詀詗詘詄詅詒詈詑詊詌詏豟貁貀貺貾貰貹貵趄趀趉跘跓跍跇跖跜跏跕跙跈跗跅軯軷軺'
      ],
      [
        'dc40',
        '軹軦軮軥軵軧軨軶軫軱軬軴軩逭逴逯鄆鄬鄄郿郼鄈郹郻鄁鄀鄇鄅鄃酡酤酟酢酠鈁鈊鈥鈃鈚鈦鈏鈌鈀鈒釿釽鈆鈄鈧鈂鈜鈤鈙鈗鈅鈖镻閍閌閐隇陾隈'
      ],
      [
        'dca1',
        '隉隃隀雂雈雃雱雰靬靰靮頇颩飫鳦黹亃亄亶傽傿僆傮僄僊傴僈僂傰僁傺傱僋僉傶傸凗剺剸剻剼嗃嗛嗌嗐嗋嗊嗝嗀嗔嗄嗩喿嗒喍嗏嗕嗢嗖嗈嗲嗍嗙嗂圔塓塨塤塏塍塉塯塕塎塝塙塥塛堽塣塱壼嫇嫄嫋媺媸媱媵媰媿嫈媻嫆'
      ],
      [
        'dd40',
        '媷嫀嫊媴媶嫍媹媐寖寘寙尟尳嵱嵣嵊嵥嵲嵬嵞嵨嵧嵢巰幏幎幊幍幋廅廌廆廋廇彀徯徭惷慉慊愫慅愶愲愮慆愯慏愩慀戠酨戣戥戤揅揱揫搐搒搉搠搤'
      ],
      [
        'dda1',
        '搳摃搟搕搘搹搷搢搣搌搦搰搨摁搵搯搊搚摀搥搧搋揧搛搮搡搎敯斒旓暆暌暕暐暋暊暙暔晸朠楦楟椸楎楢楱椿楅楪椹楂楗楙楺楈楉椵楬椳椽楥棰楸椴楩楀楯楄楶楘楁楴楌椻楋椷楜楏楑椲楒椯楻椼歆歅歃歂歈歁殛嗀毻毼'
      ],
      [
        'de40',
        '毹毷毸溛滖滈溏滀溟溓溔溠溱溹滆滒溽滁溞滉溷溰滍溦滏溲溾滃滜滘溙溒溎溍溤溡溿溳滐滊溗溮溣煇煔煒煣煠煁煝煢煲煸煪煡煂煘煃煋煰煟煐煓'
      ],
      [
        'dea1',
        '煄煍煚牏犍犌犑犐犎猼獂猻猺獀獊獉瑄瑊瑋瑒瑑瑗瑀瑏瑐瑎瑂瑆瑍瑔瓡瓿瓾瓽甝畹畷榃痯瘏瘃痷痾痼痹痸瘐痻痶痭痵痽皙皵盝睕睟睠睒睖睚睩睧睔睙睭矠碇碚碔碏碄碕碅碆碡碃硹碙碀碖硻祼禂祽祹稑稘稙稒稗稕稢稓'
      ],
      [
        'df40',
        '稛稐窣窢窞竫筦筤筭筴筩筲筥筳筱筰筡筸筶筣粲粴粯綈綆綀綍絿綅絺綎絻綃絼綌綔綄絽綒罭罫罧罨罬羦羥羧翛翜耡腤腠腷腜腩腛腢腲朡腞腶腧腯'
      ],
      [
        'dfa1',
        '腄腡舝艉艄艀艂艅蓱萿葖葶葹蒏蒍葥葑葀蒆葧萰葍葽葚葙葴葳葝蔇葞萷萺萴葺葃葸萲葅萩菙葋萯葂萭葟葰萹葎葌葒葯蓅蒎萻葇萶萳葨葾葄萫葠葔葮葐蜋蜄蛷蜌蛺蛖蛵蝍蛸蜎蜉蜁蛶蜍蜅裖裋裍裎裞裛裚裌裐覅覛觟觥觤'
      ],
      [
        'e040',
        '觡觠觢觜触詶誆詿詡訿詷誂誄詵誃誁詴詺谼豋豊豥豤豦貆貄貅賌赨赩趑趌趎趏趍趓趔趐趒跰跠跬跱跮跐跩跣跢跧跲跫跴輆軿輁輀輅輇輈輂輋遒逿'
      ],
      [
        'e0a1',
        '遄遉逽鄐鄍鄏鄑鄖鄔鄋鄎酮酯鉈鉒鈰鈺鉦鈳鉥鉞銃鈮鉊鉆鉭鉬鉏鉠鉧鉯鈶鉡鉰鈱鉔鉣鉐鉲鉎鉓鉌鉖鈲閟閜閞閛隒隓隑隗雎雺雽雸雵靳靷靸靲頏頍頎颬飶飹馯馲馰馵骭骫魛鳪鳭鳧麀黽僦僔僗僨僳僛僪僝僤僓僬僰僯僣僠'
      ],
      [
        'e140',
        '凘劀劁勩勫匰厬嘧嘕嘌嘒嗼嘏嘜嘁嘓嘂嗺嘝嘄嗿嗹墉塼墐墘墆墁塿塴墋塺墇墑墎塶墂墈塻墔墏壾奫嫜嫮嫥嫕嫪嫚嫭嫫嫳嫢嫠嫛嫬嫞嫝嫙嫨嫟孷寠'
      ],
      [
        'e1a1',
        '寣屣嶂嶀嵽嶆嵺嶁嵷嶊嶉嶈嵾嵼嶍嵹嵿幘幙幓廘廑廗廎廜廕廙廒廔彄彃彯徶愬愨慁慞慱慳慒慓慲慬憀慴慔慺慛慥愻慪慡慖戩戧戫搫摍摛摝摴摶摲摳摽摵摦撦摎撂摞摜摋摓摠摐摿搿摬摫摙摥摷敳斠暡暠暟朅朄朢榱榶槉'
      ],
      [
        'e240',
        '榠槎榖榰榬榼榑榙榎榧榍榩榾榯榿槄榽榤槔榹槊榚槏榳榓榪榡榞槙榗榐槂榵榥槆歊歍歋殞殟殠毃毄毾滎滵滱漃漥滸漷滻漮漉潎漙漚漧漘漻漒滭漊'
      ],
      [
        'e2a1',
        '漶潳滹滮漭潀漰漼漵滫漇漎潃漅滽滶漹漜滼漺漟漍漞漈漡熇熐熉熀熅熂熏煻熆熁熗牄牓犗犕犓獃獍獑獌瑢瑳瑱瑵瑲瑧瑮甀甂甃畽疐瘖瘈瘌瘕瘑瘊瘔皸瞁睼瞅瞂睮瞀睯睾瞃碲碪碴碭碨硾碫碞碥碠碬碢碤禘禊禋禖禕禔禓'
      ],
      [
        'e340',
        '禗禈禒禐稫穊稰稯稨稦窨窫窬竮箈箜箊箑箐箖箍箌箛箎箅箘劄箙箤箂粻粿粼粺綧綷緂綣綪緁緀緅綝緎緄緆緋緌綯綹綖綼綟綦綮綩綡緉罳翢翣翥翞'
      ],
      [
        'e3a1',
        '耤聝聜膉膆膃膇膍膌膋舕蒗蒤蒡蒟蒺蓎蓂蒬蒮蒫蒹蒴蓁蓍蒪蒚蒱蓐蒝蒧蒻蒢蒔蓇蓌蒛蒩蒯蒨蓖蒘蒶蓏蒠蓗蓔蓒蓛蒰蒑虡蜳蜣蜨蝫蝀蜮蜞蜡蜙蜛蝃蜬蝁蜾蝆蜠蜲蜪蜭蜼蜒蜺蜱蜵蝂蜦蜧蜸蜤蜚蜰蜑裷裧裱裲裺裾裮裼裶裻'
      ],
      [
        'e440',
        '裰裬裫覝覡覟覞觩觫觨誫誙誋誒誏誖谽豨豩賕賏賗趖踉踂跿踍跽踊踃踇踆踅跾踀踄輐輑輎輍鄣鄜鄠鄢鄟鄝鄚鄤鄡鄛酺酲酹酳銥銤鉶銛鉺銠銔銪銍'
      ],
      [
        'e4a1',
        '銦銚銫鉹銗鉿銣鋮銎銂銕銢鉽銈銡銊銆銌銙銧鉾銇銩銝銋鈭隞隡雿靘靽靺靾鞃鞀鞂靻鞄鞁靿韎韍頖颭颮餂餀餇馝馜駃馹馻馺駂馽駇骱髣髧鬾鬿魠魡魟鳱鳲鳵麧僿儃儰僸儆儇僶僾儋儌僽儊劋劌勱勯噈噂噌嘵噁噊噉噆噘'
      ],
      [
        'e540',
        '噚噀嘳嘽嘬嘾嘸嘪嘺圚墫墝墱墠墣墯墬墥墡壿嫿嫴嫽嫷嫶嬃嫸嬂嫹嬁嬇嬅嬏屧嶙嶗嶟嶒嶢嶓嶕嶠嶜嶡嶚嶞幩幝幠幜緳廛廞廡彉徲憋憃慹憱憰憢憉'
      ],
      [
        'e5a1',
        '憛憓憯憭憟憒憪憡憍慦憳戭摮摰撖撠撅撗撜撏撋撊撌撣撟摨撱撘敶敺敹敻斲斳暵暰暩暲暷暪暯樀樆樗槥槸樕槱槤樠槿槬槢樛樝槾樧槲槮樔槷槧橀樈槦槻樍槼槫樉樄樘樥樏槶樦樇槴樖歑殥殣殢殦氁氀毿氂潁漦潾澇濆澒'
      ],
      [
        'e640',
        '澍澉澌潢潏澅潚澖潶潬澂潕潲潒潐潗澔澓潝漀潡潫潽潧澐潓澋潩潿澕潣潷潪潻熲熯熛熰熠熚熩熵熝熥熞熤熡熪熜熧熳犘犚獘獒獞獟獠獝獛獡獚獙'
      ],
      [
        'e6a1',
        '獢璇璉璊璆璁瑽璅璈瑼瑹甈甇畾瘥瘞瘙瘝瘜瘣瘚瘨瘛皜皝皞皛瞍瞏瞉瞈磍碻磏磌磑磎磔磈磃磄磉禚禡禠禜禢禛歶稹窲窴窳箷篋箾箬篎箯箹篊箵糅糈糌糋緷緛緪緧緗緡縃緺緦緶緱緰緮緟罶羬羰羭翭翫翪翬翦翨聤聧膣膟'
      ],
      [
        'e740',
        '膞膕膢膙膗舖艏艓艒艐艎艑蔤蔻蔏蔀蔩蔎蔉蔍蔟蔊蔧蔜蓻蔫蓺蔈蔌蓴蔪蓲蔕蓷蓫蓳蓼蔒蓪蓩蔖蓾蔨蔝蔮蔂蓽蔞蓶蔱蔦蓧蓨蓰蓯蓹蔘蔠蔰蔋蔙蔯虢'
      ],
      [
        'e7a1',
        '蝖蝣蝤蝷蟡蝳蝘蝔蝛蝒蝡蝚蝑蝞蝭蝪蝐蝎蝟蝝蝯蝬蝺蝮蝜蝥蝏蝻蝵蝢蝧蝩衚褅褌褔褋褗褘褙褆褖褑褎褉覢覤覣觭觰觬諏諆誸諓諑諔諕誻諗誾諀諅諘諃誺誽諙谾豍貏賥賟賙賨賚賝賧趠趜趡趛踠踣踥踤踮踕踛踖踑踙踦踧'
      ],
      [
        'e840',
        '踔踒踘踓踜踗踚輬輤輘輚輠輣輖輗遳遰遯遧遫鄯鄫鄩鄪鄲鄦鄮醅醆醊醁醂醄醀鋐鋃鋄鋀鋙銶鋏鋱鋟鋘鋩鋗鋝鋌鋯鋂鋨鋊鋈鋎鋦鋍鋕鋉鋠鋞鋧鋑鋓'
      ],
      [
        'e8a1',
        '銵鋡鋆銴镼閬閫閮閰隤隢雓霅霈霂靚鞊鞎鞈韐韏頞頝頦頩頨頠頛頧颲餈飺餑餔餖餗餕駜駍駏駓駔駎駉駖駘駋駗駌骳髬髫髳髲髱魆魃魧魴魱魦魶魵魰魨魤魬鳼鳺鳽鳿鳷鴇鴀鳹鳻鴈鴅鴄麃黓鼏鼐儜儓儗儚儑凞匴叡噰噠噮'
      ],
      [
        'e940',
        '噳噦噣噭噲噞噷圜圛壈墽壉墿墺壂墼壆嬗嬙嬛嬡嬔嬓嬐嬖嬨嬚嬠嬞寯嶬嶱嶩嶧嶵嶰嶮嶪嶨嶲嶭嶯嶴幧幨幦幯廩廧廦廨廥彋徼憝憨憖懅憴懆懁懌憺'
      ],
      [
        'e9a1',
        '憿憸憌擗擖擐擏擉撽撉擃擛擳擙攳敿敼斢曈暾曀曊曋曏暽暻暺曌朣樴橦橉橧樲橨樾橝橭橶橛橑樨橚樻樿橁橪橤橐橏橔橯橩橠樼橞橖橕橍橎橆歕歔歖殧殪殫毈毇氄氃氆澭濋澣濇澼濎濈潞濄澽澞濊澨瀄澥澮澺澬澪濏澿澸'
      ],
      [
        'ea40',
        '澢濉澫濍澯澲澰燅燂熿熸燖燀燁燋燔燊燇燏熽燘熼燆燚燛犝犞獩獦獧獬獥獫獪瑿璚璠璔璒璕璡甋疀瘯瘭瘱瘽瘳瘼瘵瘲瘰皻盦瞚瞝瞡瞜瞛瞢瞣瞕瞙'
      ],
      [
        'eaa1',
        '瞗磝磩磥磪磞磣磛磡磢磭磟磠禤穄穈穇窶窸窵窱窷篞篣篧篝篕篥篚篨篹篔篪篢篜篫篘篟糒糔糗糐糑縒縡縗縌縟縠縓縎縜縕縚縢縋縏縖縍縔縥縤罃罻罼罺羱翯耪耩聬膱膦膮膹膵膫膰膬膴膲膷膧臲艕艖艗蕖蕅蕫蕍蕓蕡蕘'
      ],
      [
        'eb40',
        '蕀蕆蕤蕁蕢蕄蕑蕇蕣蔾蕛蕱蕎蕮蕵蕕蕧蕠薌蕦蕝蕔蕥蕬虣虥虤螛螏螗螓螒螈螁螖螘蝹螇螣螅螐螑螝螄螔螜螚螉褞褦褰褭褮褧褱褢褩褣褯褬褟觱諠'
      ],
      [
        'eba1',
        '諢諲諴諵諝謔諤諟諰諈諞諡諨諿諯諻貑貒貐賵賮賱賰賳赬赮趥趧踳踾踸蹀蹅踶踼踽蹁踰踿躽輶輮輵輲輹輷輴遶遹遻邆郺鄳鄵鄶醓醐醑醍醏錧錞錈錟錆錏鍺錸錼錛錣錒錁鍆錭錎錍鋋錝鋺錥錓鋹鋷錴錂錤鋿錩錹錵錪錔錌'
      ],
      [
        'ec40',
        '錋鋾錉錀鋻錖閼闍閾閹閺閶閿閵閽隩雔霋霒霐鞙鞗鞔韰韸頵頯頲餤餟餧餩馞駮駬駥駤駰駣駪駩駧骹骿骴骻髶髺髹髷鬳鮀鮅鮇魼魾魻鮂鮓鮒鮐魺鮕'
      ],
      [
        'eca1',
        '魽鮈鴥鴗鴠鴞鴔鴩鴝鴘鴢鴐鴙鴟麈麆麇麮麭黕黖黺鼒鼽儦儥儢儤儠儩勴嚓嚌嚍嚆嚄嚃噾嚂噿嚁壖壔壏壒嬭嬥嬲嬣嬬嬧嬦嬯嬮孻寱寲嶷幬幪徾徻懃憵憼懧懠懥懤懨懞擯擩擣擫擤擨斁斀斶旚曒檍檖檁檥檉檟檛檡檞檇檓檎'
      ],
      [
        'ed40',
        '檕檃檨檤檑橿檦檚檅檌檒歛殭氉濌澩濴濔濣濜濭濧濦濞濲濝濢濨燡燱燨燲燤燰燢獳獮獯璗璲璫璐璪璭璱璥璯甐甑甒甏疄癃癈癉癇皤盩瞵瞫瞲瞷瞶'
      ],
      [
        'eda1',
        '瞴瞱瞨矰磳磽礂磻磼磲礅磹磾礄禫禨穜穛穖穘穔穚窾竀竁簅簏篲簀篿篻簎篴簋篳簂簉簃簁篸篽簆篰篱簐簊糨縭縼繂縳顈縸縪繉繀繇縩繌縰縻縶繄縺罅罿罾罽翴翲耬膻臄臌臊臅臇膼臩艛艚艜薃薀薏薧薕薠薋薣蕻薤薚薞'
      ],
      [
        'ee40',
        '蕷蕼薉薡蕺蕸蕗薎薖薆薍薙薝薁薢薂薈薅蕹蕶薘薐薟虨螾螪螭蟅螰螬螹螵螼螮蟉蟃蟂蟌螷螯蟄蟊螴螶螿螸螽蟞螲褵褳褼褾襁襒褷襂覭覯覮觲觳謞'
      ],
      [
        'eea1',
        '謘謖謑謅謋謢謏謒謕謇謍謈謆謜謓謚豏豰豲豱豯貕貔賹赯蹎蹍蹓蹐蹌蹇轃轀邅遾鄸醚醢醛醙醟醡醝醠鎡鎃鎯鍤鍖鍇鍼鍘鍜鍶鍉鍐鍑鍠鍭鎏鍌鍪鍹鍗鍕鍒鍏鍱鍷鍻鍡鍞鍣鍧鎀鍎鍙闇闀闉闃闅閷隮隰隬霠霟霘霝霙鞚鞡鞜'
      ],
      [
        'ef40',
        '鞞鞝韕韔韱顁顄顊顉顅顃餥餫餬餪餳餲餯餭餱餰馘馣馡騂駺駴駷駹駸駶駻駽駾駼騃骾髾髽鬁髼魈鮚鮨鮞鮛鮦鮡鮥鮤鮆鮢鮠鮯鴳鵁鵧鴶鴮鴯鴱鴸鴰'
      ],
      [
        'efa1',
        '鵅鵂鵃鴾鴷鵀鴽翵鴭麊麉麍麰黈黚黻黿鼤鼣鼢齔龠儱儭儮嚘嚜嚗嚚嚝嚙奰嬼屩屪巀幭幮懘懟懭懮懱懪懰懫懖懩擿攄擽擸攁攃擼斔旛曚曛曘櫅檹檽櫡櫆檺檶檷櫇檴檭歞毉氋瀇瀌瀍瀁瀅瀔瀎濿瀀濻瀦濼濷瀊爁燿燹爃燽獶'
      ],
      [
        'f040',
        '璸瓀璵瓁璾璶璻瓂甔甓癜癤癙癐癓癗癚皦皽盬矂瞺磿礌礓礔礉礐礒礑禭禬穟簜簩簙簠簟簭簝簦簨簢簥簰繜繐繖繣繘繢繟繑繠繗繓羵羳翷翸聵臑臒'
      ],
      [
        'f0a1',
        '臐艟艞薴藆藀藃藂薳薵薽藇藄薿藋藎藈藅薱薶藒蘤薸薷薾虩蟧蟦蟢蟛蟫蟪蟥蟟蟳蟤蟔蟜蟓蟭蟘蟣螤蟗蟙蠁蟴蟨蟝襓襋襏襌襆襐襑襉謪謧謣謳謰謵譇謯謼謾謱謥謷謦謶謮謤謻謽謺豂豵貙貘貗賾贄贂贀蹜蹢蹠蹗蹖蹞蹥蹧'
      ],
      [
        'f140',
        '蹛蹚蹡蹝蹩蹔轆轇轈轋鄨鄺鄻鄾醨醥醧醯醪鎵鎌鎒鎷鎛鎝鎉鎧鎎鎪鎞鎦鎕鎈鎙鎟鎍鎱鎑鎲鎤鎨鎴鎣鎥闒闓闑隳雗雚巂雟雘雝霣霢霥鞬鞮鞨鞫鞤鞪'
      ],
      [
        'f1a1',
        '鞢鞥韗韙韖韘韺顐顑顒颸饁餼餺騏騋騉騍騄騑騊騅騇騆髀髜鬈鬄鬅鬩鬵魊魌魋鯇鯆鯃鮿鯁鮵鮸鯓鮶鯄鮹鮽鵜鵓鵏鵊鵛鵋鵙鵖鵌鵗鵒鵔鵟鵘鵚麎麌黟鼁鼀鼖鼥鼫鼪鼩鼨齌齕儴儵劖勷厴嚫嚭嚦嚧嚪嚬壚壝壛夒嬽嬾嬿巃幰'
      ],
      [
        'f240',
        '徿懻攇攐攍攉攌攎斄旞旝曞櫧櫠櫌櫑櫙櫋櫟櫜櫐櫫櫏櫍櫞歠殰氌瀙瀧瀠瀖瀫瀡瀢瀣瀩瀗瀤瀜瀪爌爊爇爂爅犥犦犤犣犡瓋瓅璷瓃甖癠矉矊矄矱礝礛'
      ],
      [
        'f2a1',
        '礡礜礗礞禰穧穨簳簼簹簬簻糬糪繶繵繸繰繷繯繺繲繴繨罋罊羃羆羷翽翾聸臗臕艤艡艣藫藱藭藙藡藨藚藗藬藲藸藘藟藣藜藑藰藦藯藞藢蠀蟺蠃蟶蟷蠉蠌蠋蠆蟼蠈蟿蠊蠂襢襚襛襗襡襜襘襝襙覈覷覶觶譐譈譊譀譓譖譔譋譕'
      ],
      [
        'f340',
        '譑譂譒譗豃豷豶貚贆贇贉趬趪趭趫蹭蹸蹳蹪蹯蹻軂轒轑轏轐轓辴酀鄿醰醭鏞鏇鏏鏂鏚鏐鏹鏬鏌鏙鎩鏦鏊鏔鏮鏣鏕鏄鏎鏀鏒鏧镽闚闛雡霩霫霬霨霦'
      ],
      [
        'f3a1',
        '鞳鞷鞶韝韞韟顜顙顝顗颿颽颻颾饈饇饃馦馧騚騕騥騝騤騛騢騠騧騣騞騜騔髂鬋鬊鬎鬌鬷鯪鯫鯠鯞鯤鯦鯢鯰鯔鯗鯬鯜鯙鯥鯕鯡鯚鵷鶁鶊鶄鶈鵱鶀鵸鶆鶋鶌鵽鵫鵴鵵鵰鵩鶅鵳鵻鶂鵯鵹鵿鶇鵨麔麑黀黼鼭齀齁齍齖齗齘匷嚲'
      ],
      [
        'f440',
        '嚵嚳壣孅巆巇廮廯忀忁懹攗攖攕攓旟曨曣曤櫳櫰櫪櫨櫹櫱櫮櫯瀼瀵瀯瀷瀴瀱灂瀸瀿瀺瀹灀瀻瀳灁爓爔犨獽獼璺皫皪皾盭矌矎矏矍矲礥礣礧礨礤礩'
      ],
      [
        'f4a1',
        '禲穮穬穭竷籉籈籊籇籅糮繻繾纁纀羺翿聹臛臙舋艨艩蘢藿蘁藾蘛蘀藶蘄蘉蘅蘌藽蠙蠐蠑蠗蠓蠖襣襦覹觷譠譪譝譨譣譥譧譭趮躆躈躄轙轖轗轕轘轚邍酃酁醷醵醲醳鐋鐓鏻鐠鐏鐔鏾鐕鐐鐨鐙鐍鏵鐀鏷鐇鐎鐖鐒鏺鐉鏸鐊鏿'
      ],
      [
        'f540',
        '鏼鐌鏶鐑鐆闞闠闟霮霯鞹鞻韽韾顠顢顣顟飁飂饐饎饙饌饋饓騲騴騱騬騪騶騩騮騸騭髇髊髆鬐鬒鬑鰋鰈鯷鰅鰒鯸鱀鰇鰎鰆鰗鰔鰉鶟鶙鶤鶝鶒鶘鶐鶛'
      ],
      [
        'f5a1',
        '鶠鶔鶜鶪鶗鶡鶚鶢鶨鶞鶣鶿鶩鶖鶦鶧麙麛麚黥黤黧黦鼰鼮齛齠齞齝齙龑儺儹劘劗囃嚽嚾孈孇巋巏廱懽攛欂櫼欃櫸欀灃灄灊灈灉灅灆爝爚爙獾甗癪矐礭礱礯籔籓糲纊纇纈纋纆纍罍羻耰臝蘘蘪蘦蘟蘣蘜蘙蘧蘮蘡蘠蘩蘞蘥'
      ],
      [
        'f640',
        '蠩蠝蠛蠠蠤蠜蠫衊襭襩襮襫觺譹譸譅譺譻贐贔趯躎躌轞轛轝酆酄酅醹鐿鐻鐶鐩鐽鐼鐰鐹鐪鐷鐬鑀鐱闥闤闣霵霺鞿韡顤飉飆飀饘饖騹騽驆驄驂驁騺'
      ],
      [
        'f6a1',
        '騿髍鬕鬗鬘鬖鬺魒鰫鰝鰜鰬鰣鰨鰩鰤鰡鶷鶶鶼鷁鷇鷊鷏鶾鷅鷃鶻鶵鷎鶹鶺鶬鷈鶱鶭鷌鶳鷍鶲鹺麜黫黮黭鼛鼘鼚鼱齎齥齤龒亹囆囅囋奱孋孌巕巑廲攡攠攦攢欋欈欉氍灕灖灗灒爞爟犩獿瓘瓕瓙瓗癭皭礵禴穰穱籗籜籙籛籚'
      ],
      [
        'f740',
        '糴糱纑罏羇臞艫蘴蘵蘳蘬蘲蘶蠬蠨蠦蠪蠥襱覿覾觻譾讄讂讆讅譿贕躕躔躚躒躐躖躗轠轢酇鑌鑐鑊鑋鑏鑇鑅鑈鑉鑆霿韣顪顩飋饔饛驎驓驔驌驏驈驊'
      ],
      [
        'f7a1',
        '驉驒驐髐鬙鬫鬻魖魕鱆鱈鰿鱄鰹鰳鱁鰼鰷鰴鰲鰽鰶鷛鷒鷞鷚鷋鷐鷜鷑鷟鷩鷙鷘鷖鷵鷕鷝麶黰鼵鼳鼲齂齫龕龢儽劙壨壧奲孍巘蠯彏戁戃戄攩攥斖曫欑欒欏毊灛灚爢玂玁玃癰矔籧籦纕艬蘺虀蘹蘼蘱蘻蘾蠰蠲蠮蠳襶襴襳觾'
      ],
      [
        'f840',
        '讌讎讋讈豅贙躘轤轣醼鑢鑕鑝鑗鑞韄韅頀驖驙鬞鬟鬠鱒鱘鱐鱊鱍鱋鱕鱙鱌鱎鷻鷷鷯鷣鷫鷸鷤鷶鷡鷮鷦鷲鷰鷢鷬鷴鷳鷨鷭黂黐黲黳鼆鼜鼸鼷鼶齃齏'
      ],
      [
        'f8a1',
        '齱齰齮齯囓囍孎屭攭曭曮欓灟灡灝灠爣瓛瓥矕礸禷禶籪纗羉艭虃蠸蠷蠵衋讔讕躞躟躠躝醾醽釂鑫鑨鑩雥靆靃靇韇韥驞髕魙鱣鱧鱦鱢鱞鱠鸂鷾鸇鸃鸆鸅鸀鸁鸉鷿鷽鸄麠鼞齆齴齵齶囔攮斸欘欙欗欚灢爦犪矘矙礹籩籫糶纚'
      ],
      [
        'f940',
        '纘纛纙臠臡虆虇虈襹襺襼襻觿讘讙躥躤躣鑮鑭鑯鑱鑳靉顲饟鱨鱮鱭鸋鸍鸐鸏鸒鸑麡黵鼉齇齸齻齺齹圞灦籯蠼趲躦釃鑴鑸鑶鑵驠鱴鱳鱱鱵鸔鸓黶鼊'
      ],
      [
        'f9a1',
        '龤灨灥糷虪蠾蠽蠿讞貜躩軉靋顳顴飌饡馫驤驦驧鬤鸕鸗齈戇欞爧虌躨钂钀钁驩驨鬮鸙爩虋讟钃鱹麷癵驫鱺鸝灩灪麤齾齉龘碁銹裏墻恒粧嫺╔╦╗╠╬╣╚╩╝╒╤╕╞╪╡╘╧╛╓╥╖╟╫╢╙╨╜║═╭╮╰╯▓'
      ]
    ]
  }),
  Zc = Object.freeze({
    __proto__: null,
    default: [
      [
        '8740',
        '䏰䰲䘃䖦䕸𧉧䵷䖳𧲱䳢𧳅㮕䜶䝄䱇䱀𤊿𣘗𧍒𦺋𧃒䱗𪍑䝏䗚䲅𧱬䴇䪤䚡𦬣爥𥩔𡩣𣸆𣽡晍囻'
      ],
      ['8767', '綕夝𨮹㷴霴𧯯寛𡵞媤㘥𩺰嫑宷峼杮薓𩥅瑡璝㡵𡵓𣚞𦀡㻬'],
      [
        '87a1',
        '𥣞㫵竼龗𤅡𨤍𣇪𠪊𣉞䌊蒄龖鐯䤰蘓墖靊鈘秐稲晠権袝瑌篅枂稬剏遆㓦珄𥶹瓆鿇垳䤯呌䄱𣚎堘穲𧭥讏䚮𦺈䆁𥶙箮𢒼鿈𢓁𢓉𢓌鿉蔄𣖻䂴鿊䓡𪷿拁灮鿋'
      ],
      [
        '8840',
        '㇀',
        4,
        '𠄌㇅𠃑𠃍㇆㇇𠃋𡿨㇈𠃊㇉㇊㇋㇌𠄎㇍㇎ĀÁǍÀĒÉĚÈŌÓǑÒ࿿Ê̄Ế࿿Ê̌ỀÊāáǎàɑēéěèīíǐìōóǒòūúǔùǖǘǚ'
      ],
      ['88a1', 'ǜü࿿ê̄ế࿿ê̌ềêɡ⏚⏛'],
      ['8940', '𪎩𡅅'],
      ['8943', '攊'],
      ['8946', '丽滝鵎釟'],
      [
        '894c',
        '𧜵撑会伨侨兖兴农凤务动医华发变团声处备夲头学实実岚庆总斉柾栄桥济炼电纤纬纺织经统缆缷艺苏药视设询车轧轮'
      ],
      ['89a1', '琑糼緍楆竉刧'],
      ['89ab', '醌碸酞肼'],
      ['89b0', '贋胶𠧧'],
      ['89b5', '肟黇䳍鷉鸌䰾𩷶𧀎鸊𪄳㗁'],
      ['89c1', '溚舾甙'],
      [
        '89c5',
        '䤑马骏龙禇𨑬𡷊𠗐𢫦两亁亀亇亿仫伷㑌侽㹈倃傈㑽㒓㒥円夅凛凼刅争剹劐匧㗇厩㕑厰㕓参吣㕭㕲㚁咓咣咴咹哐哯唘唣唨㖘唿㖥㖿嗗㗅'
      ],
      ['8a40', '𧶄唥'],
      [
        '8a43',
        '𠱂𠴕𥄫喐𢳆㧬𠍁蹆𤶸𩓥䁓𨂾睺𢰸㨴䟕𨅝𦧲𤷪擝𠵼𠾴𠳕𡃴撍蹾𠺖𠰋𠽤𢲩𨉖𤓓'
      ],
      ['8a64', '𠵆𩩍𨃩䟴𤺧𢳂骲㩧𩗴㿭㔆𥋇𩟔𧣈𢵄鵮頕'],
      ['8a76', '䏙𦂥撴哣𢵌𢯊𡁷㧻𡁯'],
      ['8aa1', '𦛚𦜖𧦠擪𥁒𠱃蹨𢆡𨭌𠜱'],
      ['8aac', '䠋𠆩㿺塳𢶍'],
      ['8ab2', '𤗈𠓼𦂗𠽌𠶖啹䂻䎺'],
      ['8abb', '䪴𢩦𡂝膪飵𠶜捹㧾𢝵跀嚡摼㹃'],
      ['8ac9', '𪘁𠸉𢫏𢳉'],
      ['8ace', '𡃈𣧂㦒㨆𨊛㕸𥹉𢃇噒𠼱𢲲𩜠㒼氽𤸻'],
      ['8adf', '𧕴𢺋𢈈𪙛𨳍𠹺𠰴𦠜羓𡃏𢠃𢤹㗻𥇣𠺌𠾍𠺪㾓𠼰𠵇𡅏𠹌'],
      ['8af6', '𠺫𠮩𠵈𡃀𡄽㿹𢚖搲𠾭'],
      ['8b40', '𣏴𧘹𢯎𠵾𠵿𢱑𢱕㨘𠺘𡃇𠼮𪘲𦭐𨳒𨶙𨳊閪哌苄喹'],
      [
        '8b55',
        '𩻃鰦骶𧝞𢷮煀腭胬尜𦕲脴㞗卟𨂽醶𠻺𠸏𠹷𠻻㗝𤷫㘉𠳖嚯𢞵𡃉𠸐𠹸𡁸𡅈𨈇𡑕𠹹𤹐𢶤婔𡀝𡀞𡃵𡃶垜𠸑'
      ],
      [
        '8ba1',
        '𧚔𨋍𠾵𠹻𥅾㜃𠾶𡆀𥋘𪊽𤧚𡠺𤅷𨉼墙剨㘚𥜽箲孨䠀䬬鼧䧧鰟鮍𥭴𣄽嗻㗲嚉丨夂𡯁屮靑𠂆乛亻㔾尣彑忄㣺扌攵歺氵氺灬爫丬犭𤣩罒礻糹罓𦉪㓁'
      ],
      [
        '8bde',
        '𦍋耂肀𦘒𦥑卝衤见𧢲讠贝钅镸长门𨸏韦页风飞饣𩠐鱼鸟黄歯龜丷𠂇阝户钢'
      ],
      [
        '8c40',
        '倻淾𩱳龦㷉袏𤅎灷峵䬠𥇍㕙𥴰愢𨨲辧釶熑朙玺𣊁𪄇㲋𡦀䬐磤琂冮𨜏䀉橣𪊺䈣蘏𠩯稪𩥇𨫪靕灍匤𢁾鏴盙𨧣龧矝亣俰傼丯众龨吴綋墒壐𡶶庒庙忂𢜒斋'
      ],
      ['8ca1', '𣏹椙橃𣱣泿'],
      [
        '8ca7',
        '爀𤔅玌㻛𤨓嬕璹讃𥲤𥚕窓篬糃繬苸薗龩袐龪躹龫迏蕟駠鈡龬𨶹𡐿䁱䊢娚'
      ],
      ['8cc9', '顨杫䉶圽'],
      ['8cce', '藖𤥻芿𧄍䲁𦵴嵻𦬕𦾾龭龮宖龯曧繛湗秊㶈䓃𣉖𢞖䎚䔶'],
      ['8ce6', '峕𣬚諹屸㴒𣕑嵸龲煗䕘𤃬𡸣䱷㥸㑊𠆤𦱁諌侴𠈹妿腬顖𩣺弻'],
      ['8d40', '𠮟'],
      [
        '8d42',
        '𢇁𨥭䄂䚻𩁹㼇龳𪆵䃸㟖䛷𦱆䅼𨚲𧏿䕭㣔𥒚䕡䔛䶉䱻䵶䗪㿈𤬏㙡䓞䒽䇭崾嵈嵖㷼㠏嶤嶹㠠㠸幂庽弥徃㤈㤔㤿㥍惗愽峥㦉憷憹懏㦸戬抐拥挘㧸嚱'
      ],
      [
        '8da1',
        '㨃揢揻搇摚㩋擀崕嘡龟㪗斆㪽旿晓㫲暒㬢朖㭂枤栀㭘桊梄㭲㭱㭻椉楃牜楤榟榅㮼槖㯝橥橴橱檂㯬檙㯲檫檵櫔櫶殁毁毪汵沪㳋洂洆洦涁㳯涤涱渕渘温溆𨧀溻滢滚齿滨滩漤漴㵆𣽁澁澾㵪㵵熷岙㶊瀬㶑灐灔灯灿炉𠌥䏁㗱𠻘'
      ],
      [
        '8e40',
        '𣻗垾𦻓焾𥟠㙎榢𨯩孴穉𥣡𩓙穥穽𥦬窻窰竂竃燑𦒍䇊竚竝竪䇯咲𥰁笋筕笩𥌎𥳾箢筯莜𥮴𦱿篐萡箒箸𥴠㶭𥱥蒒篺簆簵𥳁籄粃𤢂粦晽𤕸糉糇糦籴糳糵糎'
      ],
      [
        '8ea1',
        '繧䔝𦹄絝𦻖璍綉綫焵綳緒𤁗𦀩緤㴓緵𡟹緥𨍭縝𦄡𦅚繮纒䌫鑬縧罀罁罇礶𦋐駡羗𦍑羣𡙡𠁨䕜𣝦䔃𨌺翺𦒉者耈耝耨耯𪂇𦳃耻耼聡𢜔䦉𦘦𣷣𦛨朥肧𨩈脇脚墰𢛶汿𦒘𤾸擧𡒊舘𡡞橓𤩥𤪕䑺舩𠬍𦩒𣵾俹𡓽蓢荢𦬊𤦧𣔰𡝳𣷸芪椛芳䇛'
      ],
      [
        '8f40',
        '蕋苐茚𠸖𡞴㛁𣅽𣕚艻苢茘𣺋𦶣𦬅𦮗𣗎㶿茝嗬莅䔋𦶥莬菁菓㑾𦻔橗蕚㒖𦹂𢻯葘𥯤葱㷓䓤檧葊𣲵祘蒨𦮖𦹷𦹃蓞萏莑䒠蒓蓤𥲑䉀𥳀䕃蔴嫲𦺙䔧蕳䔖枿蘖'
      ],
      [
        '8fa1',
        '𨘥𨘻藁𧂈蘂𡖂𧃍䕫䕪蘨㙈𡢢号𧎚虾蝱𪃸蟮𢰧螱蟚蠏噡虬桖䘏衅衆𧗠𣶹𧗤衞袜䙛袴袵揁装睷𧜏覇覊覦覩覧覼𨨥觧𧤤𧪽誜瞓釾誐𧩙竩𧬺𣾏䜓𧬸煼謌謟𥐰𥕥謿譌譍誩𤩺讐讛誯𡛟䘕衏貛𧵔𧶏貫㜥𧵓賖𧶘𧶽贒贃𡤐賛灜贑𤳉㻐起'
      ],
      [
        '9040',
        '趩𨀂𡀔𤦊㭼𨆼𧄌竧躭躶軃鋔輙輭𨍥𨐒辥錃𪊟𠩐辳䤪𨧞𨔽𣶻廸𣉢迹𪀔𨚼𨔁𢌥㦀𦻗逷𨔼𧪾遡𨕬𨘋邨𨜓郄𨛦邮都酧㫰醩釄粬𨤳𡺉鈎沟鉁鉢𥖹銹𨫆𣲛𨬌𥗛'
      ],
      [
        '90a1',
        '𠴱錬鍫𨫡𨯫炏嫃𨫢𨫥䥥鉄𨯬𨰹𨯿鍳鑛躼閅閦鐦閠濶䊹𢙺𨛘𡉼𣸮䧟氜陻隖䅬隣𦻕懚隶磵𨫠隽双䦡𦲸𠉴𦐐𩂯𩃥𤫑𡤕𣌊霱虂霶䨏䔽䖅𤫩灵孁霛靜𩇕靗孊𩇫靟鐥僐𣂷𣂼鞉鞟鞱鞾韀韒韠𥑬韮琜𩐳響韵𩐝𧥺䫑頴頳顋顦㬎𧅵㵑𠘰𤅜'
      ],
      [
        '9140',
        '𥜆飊颷飈飇䫿𦴧𡛓喰飡飦飬鍸餹𤨩䭲𩡗𩤅駵騌騻騐驘𥜥㛄𩂱𩯕髠髢𩬅髴䰎鬔鬭𨘀倴鬴𦦨㣃𣁽魐魀𩴾婅𡡣鮎𤉋鰂鯿鰌𩹨鷔𩾷𪆒𪆫𪃡𪄣𪇟鵾鶃𪄴鸎梈'
      ],
      [
        '91a1',
        '鷄𢅛𪆓𪈠𡤻𪈳鴹𪂹𪊴麐麕麞麢䴴麪麯𤍤黁㭠㧥㴝伲㞾𨰫鼂鼈䮖鐤𦶢鼗鼖鼹嚟嚊齅馸𩂋韲葿齢齩竜龎爖䮾𤥵𤦻煷𤧸𤍈𤩑玞𨯚𡣺禟𨥾𨸶鍩鏳𨩄鋬鎁鏋𨥬𤒹爗㻫睲穃烐𤑳𤏸煾𡟯炣𡢾𣖙㻇𡢅𥐯𡟸㜢𡛻𡠹㛡𡝴𡣑𥽋㜣𡛀坛𤨥𡏾𡊨'
      ],
      [
        '9240',
        '𡏆𡒶蔃𣚦蔃葕𤦔𧅥𣸱𥕜𣻻𧁒䓴𣛮𩦝𦼦柹㜳㰕㷧塬𡤢栐䁗𣜿𤃡𤂋𤄏𦰡哋嚞𦚱嚒𠿟𠮨𠸍鏆𨬓鎜仸儫㠙𤐶亼𠑥𠍿佋侊𥙑婨𠆫𠏋㦙𠌊𠐔㐵伩𠋀𨺳𠉵諚𠈌亘'
      ],
      [
        '92a1',
        '働儍侢伃𤨎𣺊佂倮偬傁俌俥偘僼兙兛兝兞湶𣖕𣸹𣺿浲𡢄𣺉冨凃𠗠䓝𠒣𠒒𠒑赺𨪜𠜎剙劤𠡳勡鍮䙺熌𤎌𠰠𤦬𡃤槑𠸝瑹㻞璙琔瑖玘䮎𤪼𤂍叐㖄爏𤃉喴𠍅响𠯆圝鉝雴鍦埝垍坿㘾壋媙𨩆𡛺𡝯𡜐娬妸銏婾嫏娒𥥆𡧳𡡡𤊕㛵洅瑃娡𥺃'
      ],
      [
        '9340',
        '媁𨯗𠐓鏠璌𡌃焅䥲鐈𨧻鎽㞠尞岞幞幈𡦖𡥼𣫮廍孏𡤃𡤄㜁𡢠㛝𡛾㛓脪𨩇𡶺𣑲𨦨弌弎𡤧𡞫婫𡜻孄蘔𧗽衠恾𢡠𢘫忛㺸𢖯𢖾𩂈𦽳懀𠀾𠁆𢘛憙憘恵𢲛𢴇𤛔𩅍'
      ],
      [
        '93a1',
        '摱𤙥𢭪㨩𢬢𣑐𩣪𢹸挷𪑛撶挱揑𤧣𢵧护𢲡搻敫楲㯴𣂎𣊭𤦉𣊫唍𣋠𡣙𩐿曎𣊉𣆳㫠䆐𥖄𨬢𥖏𡛼𥕛𥐥磮𣄃𡠪𣈴㑤𣈏𣆂𤋉暎𦴤晫䮓昰𧡰𡷫晣𣋒𣋡昞𥡲㣑𣠺𣞼㮙𣞢𣏾瓐㮖枏𤘪梶栞㯄檾㡣𣟕𤒇樳橒櫉欅𡤒攑梘橌㯗橺歗𣿀𣲚鎠鋲𨯪𨫋'
      ],
      [
        '9440',
        '銉𨀞𨧜鑧涥漋𤧬浧𣽿㶏渄𤀼娽渊塇洤硂焻𤌚𤉶烱牐犇犔𤞏𤜥兹𤪤𠗫瑺𣻸𣙟𤩊𤤗𥿡㼆㺱𤫟𨰣𣼵悧㻳瓌琼鎇琷䒟𦷪䕑疃㽣𤳙𤴆㽘畕癳𪗆㬙瑨𨫌𤦫𤦎㫻'
      ],
      [
        '94a1',
        '㷍𤩎㻿𤧅𤣳釺圲鍂𨫣𡡤僟𥈡𥇧睸𣈲眎眏睻𤚗𣞁㩞𤣰琸璛㺿𤪺𤫇䃈𤪖𦆮錇𥖁砞碍碈磒珐祙𧝁𥛣䄎禛蒖禥樭𣻺稺秴䅮𡛦䄲鈵秱𠵌𤦌𠊙𣶺𡝮㖗啫㕰㚪𠇔𠰍竢婙𢛵𥪯𥪜娍𠉛磰娪𥯆竾䇹籝籭䈑𥮳𥺼𥺦糍𤧹𡞰粎籼粮檲緜縇緓罎𦉡'
      ],
      [
        '9540',
        '𦅜𧭈綗𥺂䉪𦭵𠤖柖𠁎𣗏埄𦐒𦏸𤥢翝笧𠠬𥫩𥵃笌𥸎駦虅驣樜𣐿㧢𤧷𦖭騟𦖠蒀𧄧𦳑䓪脷䐂胆脉腂𦞴飃𦩂艢艥𦩑葓𦶧蘐𧈛媆䅿𡡀嬫𡢡嫤𡣘蚠蜨𣶏蠭𧐢娂'
      ],
      [
        '95a1',
        '衮佅袇袿裦襥襍𥚃襔𧞅𧞄𨯵𨯙𨮜𨧹㺭蒣䛵䛏㟲訽訜𩑈彍鈫𤊄旔焩烄𡡅鵭貟賩𧷜妚矃姰䍮㛔踪躧𤰉輰轊䋴汘澻𢌡䢛潹溋𡟚鯩㚵𤤯邻邗啱䤆醻鐄𨩋䁢𨫼鐧𨰝𨰻蓥訫閙閧閗閖𨴴瑅㻂𤣿𤩂𤏪㻧𣈥随𨻧𨹦𨹥㻌𤧭𤩸𣿮琒瑫㻼靁𩂰'
      ],
      [
        '9640',
        '桇䨝𩂓𥟟靝鍨𨦉𨰦𨬯𦎾銺嬑譩䤼珹𤈛鞛靱餸𠼦巁𨯅𤪲頟𩓚鋶𩗗釥䓀𨭐𤩧𨭤飜𨩅㼀鈪䤥萔餻饍𧬆㷽馛䭯馪驜𨭥𥣈檏騡嫾騯𩣱䮐𩥈馼䮽䮗鍽塲𡌂堢𤦸'
      ],
      [
        '96a1',
        '𡓨硄𢜟𣶸棅㵽鑘㤧慐𢞁𢥫愇鱏鱓鱻鰵鰐魿鯏𩸭鮟𪇵𪃾鴡䲮𤄄鸘䲰鴌𪆴𪃭𪃳𩤯鶥蒽𦸒𦿟𦮂藼䔳𦶤𦺄𦷰萠藮𦸀𣟗𦁤秢𣖜𣙀䤭𤧞㵢鏛銾鍈𠊿碹鉷鑍俤㑀遤𥕝砽硔碶硋𡝗𣇉𤥁㚚佲濚濙瀞瀞吔𤆵垻壳垊鴖埗焴㒯𤆬燫𦱀𤾗嬨𡞵𨩉'
      ],
      [
        '9740',
        '愌嫎娋䊼𤒈㜬䭻𨧼鎻鎸𡣖𠼝葲𦳀𡐓𤋺𢰦𤏁妔𣶷𦝁綨𦅛𦂤𤦹𤦋𨧺鋥珢㻩璴𨭣𡢟㻡𤪳櫘珳珻㻖𤨾𤪔𡟙𤩦𠎧𡐤𤧥瑈𤤖炥𤥶銄珦鍟𠓾錱𨫎𨨖鎆𨯧𥗕䤵𨪂煫'
      ],
      [
        '97a1',
        '𤥃𠳿嚤𠘚𠯫𠲸唂秄𡟺緾𡛂𤩐𡡒䔮鐁㜊𨫀𤦭妰𡢿𡢃𧒄媡㛢𣵛㚰鉟婹𨪁𡡢鍴㳍𠪴䪖㦊僴㵩㵌𡎜煵䋻𨈘渏𩃤䓫浗𧹏灧沯㳖𣿭𣸭渂漌㵯𠏵畑㚼㓈䚀㻚䡱姄鉮䤾轁𨰜𦯀堒埈㛖𡑒烾𤍢𤩱𢿣𡊰𢎽梹楧𡎘𣓥𧯴𣛟𨪃𣟖𣏺𤲟樚𣚭𦲷萾䓟䓎'
      ],
      [
        '9840',
        '𦴦𦵑𦲂𦿞漗𧄉茽𡜺菭𦲀𧁓𡟛妉媂𡞳婡婱𡤅𤇼㜭姯𡜼㛇熎鎐暚𤊥婮娫𤊓樫𣻹𧜶𤑛𤋊焝𤉙𨧡侰𦴨峂𤓎𧹍𤎽樌𤉖𡌄炦焳𤏩㶥泟勇𤩏繥姫崯㷳彜𤩝𡟟綤萦'
      ],
      [
        '98a1',
        '咅𣫺𣌀𠈔坾𠣕𠘙㿥𡾞𪊶瀃𩅛嵰玏糓𨩙𩐠俈翧狍猐𧫴猸猹𥛶獁獈㺩𧬘遬燵𤣲珡臶㻊県㻑沢国琙琞琟㻢㻰㻴㻺瓓㼎㽓畂畭畲疍㽼痈痜㿀癍㿗癴㿜発𤽜熈嘣覀塩䀝睃䀹条䁅㗛瞘䁪䁯属瞾矋売砘点砜䂨砹硇硑硦葈𥔵礳栃礲䄃'
      ],
      [
        '9940',
        '䄉禑禙辻稆込䅧窑䆲窼艹䇄竏竛䇏両筢筬筻簒簛䉠䉺类粜䊌粸䊔糭输烀𠳏総緔緐緽羮羴犟䎗耠耥笹耮耱联㷌垴炠肷胩䏭脌猪脎脒畠脔䐁㬹腖腙腚'
      ],
      [
        '99a1',
        '䐓堺腼膄䐥膓䐭膥埯臁臤艔䒏芦艶苊苘苿䒰荗险榊萅烵葤惣蒈䔄蒾蓡蓸蔐蔸蕒䔻蕯蕰藠䕷虲蚒蚲蛯际螋䘆䘗袮裿褤襇覑𧥧訩訸誔誴豑賔賲贜䞘塟跃䟭仮踺嗘坔蹱嗵躰䠷軎転軤軭軲辷迁迊迌逳駄䢭飠鈓䤞鈨鉘鉫銱銮銿'
      ],
      [
        '9a40',
        '鋣鋫鋳鋴鋽鍃鎄鎭䥅䥑麿鐗匁鐝鐭鐾䥪鑔鑹锭関䦧间阳䧥枠䨤靀䨵鞲韂噔䫤惨颹䬙飱塄餎餙冴餜餷饂饝饢䭰駅䮝騼鬏窃魩鮁鯝鯱鯴䱭鰠㝯𡯂鵉鰺'
      ],
      [
        '9aa1',
        '黾噐鶓鶽鷀鷼银辶鹻麬麱麽黆铜黢黱黸竈齄𠂔𠊷𠎠椚铃妬𠓗塀铁㞹𠗕𠘕𠙶𡚺块煳𠫂𠫍𠮿呪吆𠯋咞𠯻𠰻𠱓𠱥𠱼惧𠲍噺𠲵𠳝𠳭𠵯𠶲𠷈楕鰯螥𠸄𠸎𠻗𠾐𠼭𠹳尠𠾼帋𡁜𡁏𡁶朞𡁻𡂈𡂖㙇𡂿𡃓𡄯𡄻卤蒭𡋣𡍵𡌶讁𡕷𡘙𡟃𡟇乸炻𡠭𡥪'
      ],
      [
        '9b40',
        '𡨭𡩅𡰪𡱰𡲬𡻈拃𡻕𡼕熘桕𢁅槩㛈𢉼𢏗𢏺𢜪𢡱𢥏苽𢥧𢦓𢫕覥𢫨辠𢬎鞸𢬿顇骽𢱌'
      ],
      ['9b62', '𢲈𢲷𥯨𢴈𢴒𢶷𢶕𢹂𢽴𢿌𣀳𣁦𣌟𣏞徱晈暿𧩹𣕧𣗳爁𤦺矗𣘚𣜖纇𠍆墵朎'],
      [
        '9ba1',
        '椘𣪧𧙗𥿢𣸑𣺹𧗾𢂚䣐䪸𤄙𨪚𤋮𤌍𤀻𤌴𤎖𤩅𠗊凒𠘑妟𡺨㮾𣳿𤐄𤓖垈𤙴㦛𤜯𨗨𩧉㝢𢇃譞𨭎駖𤠒𤣻𤨕爉𤫀𠱸奥𤺥𤾆𠝹軚𥀬劏圿煱𥊙𥐙𣽊𤪧喼𥑆𥑮𦭒釔㑳𥔿𧘲𥕞䜘𥕢𥕦𥟇𤤿𥡝偦㓻𣏌惞𥤃䝼𨥈𥪮𥮉𥰆𡶐垡煑澶𦄂𧰒遖𦆲𤾚譢𦐂𦑊'
      ],
      [
        '9c40',
        '嵛𦯷輶𦒄𡤜諪𤧶𦒈𣿯𦔒䯀𦖿𦚵𢜛鑥𥟡憕娧晉侻嚹𤔡𦛼乪𤤴陖涏𦲽㘘襷𦞙𦡮𦐑𦡞營𦣇筂𩃀𠨑𦤦鄄𦤹穅鷰𦧺騦𦨭㙟𦑩𠀡禃𦨴𦭛崬𣔙菏𦮝䛐𦲤画补𦶮墶'
      ],
      [
        '9ca1',
        '㜜𢖍𧁋𧇍㱔𧊀𧊅銁𢅺𧊋錰𧋦𤧐氹钟𧑐𠻸蠧裵𢤦𨑳𡞱溸𤨪𡠠㦤㚹尐秣䔿暶𩲭𩢤襃𧟌𧡘囖䃟𡘊㦡𣜯𨃨𡏅熭荦𧧝𩆨婧䲷𧂯𨦫𧧽𧨊𧬋𧵦𤅺筃祾𨀉澵𪋟樃𨌘厢𦸇鎿栶靝𨅯𨀣𦦵𡏭𣈯𨁈嶅𨰰𨂃圕頣𨥉嶫𤦈斾槕叒𤪥𣾁㰑朶𨂐𨃴𨄮𡾡𨅏'
      ],
      [
        '9d40',
        '𨆉𨆯𨈚𨌆𨌯𨎊㗊𨑨𨚪䣺揦𨥖砈鉕𨦸䏲𨧧䏟𨧨𨭆𨯔姸𨰉輋𨿅𩃬筑𩄐𩄼㷷𩅞𤫊运犏嚋𩓧𩗩𩖰𩖸𩜲𩣑𩥉𩥪𩧃𩨨𩬎𩵚𩶛纟𩻸𩼣䲤镇𪊓熢𪋿䶑递𪗋䶜𠲜达嗁'
      ],
      [
        '9da1',
        '辺𢒰边𤪓䔉繿潖檱仪㓤𨬬𧢝㜺躀𡟵𨀤𨭬𨮙𧨾𦚯㷫𧙕𣲷𥘵𥥖亚𥺁𦉘嚿𠹭踎孭𣺈𤲞揞拐𡟶𡡻攰嘭𥱊吚𥌑㷆𩶘䱽嘢嘞罉𥻘奵𣵀蝰东𠿪𠵉𣚺脗鵞贘瘻鱅癎瞹鍅吲腈苷嘥脲萘肽嗪祢噃吖𠺝㗎嘅嗱曱𨋢㘭甴嗰喺咗啲𠱁𠲖廐𥅈𠹶𢱢'
      ],
      [
        '9e40',
        '𠺢麫絚嗞𡁵抝靭咔賍燶酶揼掹揾啩𢭃鱲𢺳冚㓟𠶧冧呍唞唓癦踭𦢊疱肶蠄螆裇膶萜𡃁䓬猄𤜆宐茋𦢓噻𢛴𧴯𤆣𧵳𦻐𧊶酰𡇙鈈𣳼𪚩𠺬𠻹牦𡲢䝎𤿂𧿹𠿫䃺'
      ],
      ['9ea1', '鱝攟𢶠䣳𤟠𩵼𠿬𠸊恢𧖣𠿭'],
      ['9ead', '𦁈𡆇熣纎鵐业丄㕷嬍沲卧㚬㧜卽㚥𤘘墚𤭮舭呋垪𥪕𠥹'],
      [
        '9ec5',
        '㩒𢑥獴𩺬䴉鯭𣳾𩼰䱛𤾩𩖞𩿞葜𣶶𧊲𦞳𣜠挮紥𣻷𣸬㨪逈勌㹴㙺䗩𠒎癀嫰𠺶硺𧼮墧䂿噼鮋嵴癔𪐴麅䳡痹㟻愙𣃚𤏲'
      ],
      ['9ef5', '噝𡊩垧𤥣𩸆刴𧂮㖭汊鵼'],
      ['9f40', '籖鬹埞𡝬屓擓𩓐𦌵𧅤蚭𠴨𦴢𤫢𠵱'],
      [
        '9f4f',
        '凾𡼏嶎霃𡷑麁遌笟鬂峑箣扨挵髿篏鬪籾鬮籂粆鰕篼鬉鼗鰛𤤾齚啳寃俽麘俲剠㸆勑坧偖妷帒韈鶫轜呩鞴饀鞺匬愰'
      ],
      ['9fa1', '椬叚鰊鴂䰻陁榀傦畆𡝭駚剳'],
      ['9fae', '酙隁酜'],
      ['9fb2', '酑𨺗捿𦴣櫊嘑醎畺抅𠏼獏籰𥰡𣳽'],
      ['9fc1', '𤤙盖鮝个𠳔莾衂'],
      ['9fc9', '届槀僭坺刟巵从氱𠇲伹咜哚劚趂㗾弌㗳'],
      ['9fdb', '歒酼龥鮗頮颴骺麨麄煺笔'],
      ['9fe7', '毺蠘罸'],
      ['9feb', '嘠𪙊蹷齓'],
      ['9ff0', '跔蹏鸜踁抂𨍽踨蹵竓𤩷稾磘泪詧瘇'],
      ['a040', '𨩚鼦泎蟖痃𪊲硓咢贌狢獱謭猂瓱賫𤪻蘯徺袠䒷'],
      ['a055', '𡠻𦸅'],
      ['a058', '詾𢔛'],
      ['a05b', '惽癧髗鵄鍮鮏蟵'],
      ['a063', '蠏賷猬霡鮰㗖犲䰇籑饊𦅙慙䰄麖慽'],
      ['a073', '坟慯抦戹拎㩜懢厪𣏵捤栂㗒'],
      ['a0a1', '嵗𨯂迚𨸹'],
      ['a0a6', '僙𡵆礆匲阸𠼻䁥'],
      ['a0ae', '矾'],
      [
        'a0b0',
        '糂𥼚糚稭聦聣絍甅瓲覔舚朌聢𧒆聛瓰脃眤覉𦟌畓𦻑螩蟎臈螌詉貭譃眫瓸蓚㘵榲趦'
      ],
      ['a0d4', '覩瑨涹蟁𤀑瓧㷛煶悤憜㳑煢恷'],
      ['a0e2', '罱𨬭牐惩䭾删㰘𣳇𥻗𧙖𥔱𡥄𡋾𩤃𦷜𧂭峁𦆭𨨏𣙷𠃮𦡆𤼎䕢嬟𦍌齐麦𦉫'],
      ['a3c0', '␀', 31, '␡'],
      [
        'c6a1',
        '①',
        9,
        '⑴',
        9,
        'ⅰ',
        9,
        '丶丿亅亠冂冖冫勹匸卩厶夊宀巛⼳广廴彐彡攴无疒癶辵隶¨ˆヽヾゝゞ〃仝々〆〇ー［］✽ぁ',
        23
      ],
      ['c740', 'す', 58, 'ァアィイ'],
      ['c7a1', 'ゥ', 81, 'А', 5, 'ЁЖ', 4],
      ['c840', 'Л', 26, 'ёж', 25, '⇧↸↹㇏𠃌乚𠂊刂䒑'],
      ['c8a1', '龰冈龱𧘇'],
      [
        'c8cd',
        '￢￤＇＂㈱№℡゛゜⺀⺄⺆⺇⺈⺊⺌⺍⺕⺜⺝⺥⺧⺪⺬⺮⺶⺼⺾⻆⻊⻌⻍⻏⻖⻗⻞⻣'
      ],
      ['c8f5', 'ʃɐɛɔɵœøŋʊɪ'],
      ['f9fe', '￭'],
      [
        'fa40',
        '𠕇鋛𠗟𣿅蕌䊵珯况㙉𤥂𨧤鍄𡧛苮𣳈砼杄拟𤤳𨦪𠊠𦮳𡌅侫𢓭倈𦴩𧪄𣘀𤪱𢔓倩𠍾徤𠎀𠍇滛𠐟偽儁㑺儎顬㝃萖𤦤𠒇兠𣎴兪𠯿𢃼𠋥𢔰𠖎𣈳𡦃宂蝽𠖳𣲙冲冸'
      ],
      [
        'faa1',
        '鴴凉减凑㳜凓𤪦决凢卂凭菍椾𣜭彻刋刦刼劵剗劔効勅簕蕂勠蘍𦬓包𨫞啉滙𣾀𠥔𣿬匳卄𠯢泋𡜦栛珕恊㺪㣌𡛨燝䒢卭却𨚫卾卿𡖖𡘓矦厓𨪛厠厫厮玧𥝲㽙玜叁叅汉义埾叙㪫𠮏叠𣿫𢶣叶𠱷吓灹唫晗浛呭𦭓𠵴啝咏咤䞦𡜍𠻝㶴𠵍'
      ],
      [
        'fb40',
        '𨦼𢚘啇䳭启琗喆喩嘅𡣗𤀺䕒𤐵暳𡂴嘷曍𣊊暤暭噍噏磱囱鞇叾圀囯园𨭦㘣𡉏坆𤆥汮炋坂㚱𦱾埦𡐖堃𡑔𤍣堦𤯵塜墪㕡壠壜𡈼壻寿坃𪅐𤉸鏓㖡够梦㛃湙'
      ],
      [
        'fba1',
        '𡘾娤啓𡚒蔅姉𠵎𦲁𦴪𡟜姙𡟻𡞲𦶦浱𡠨𡛕姹𦹅媫婣㛦𤦩婷㜈媖瑥嫓𦾡𢕔㶅𡤑㜲𡚸広勐孶斈孼𧨎䀄䡝𠈄寕慠𡨴𥧌𠖥寳宝䴐尅𡭄尓珎尔𡲥𦬨屉䣝岅峩峯嶋𡷹𡸷崐崘嵆𡺤岺巗苼㠭𤤁𢁉𢅳芇㠶㯂帮檊幵幺𤒼𠳓厦亷廐厨𡝱帉廴𨒂'
      ],
      [
        'fc40',
        '廹廻㢠廼栾鐛弍𠇁弢㫞䢮𡌺强𦢈𢏐彘𢑱彣鞽𦹮彲鍀𨨶徧嶶㵟𥉐𡽪𧃸𢙨釖𠊞𨨩怱暅𡡷㥣㷇㘹垐𢞴祱㹀悞悤悳𤦂𤦏𧩓璤僡媠慤萤慂慈𦻒憁凴𠙖憇宪𣾷'
      ],
      [
        'fca1',
        '𢡟懓𨮝𩥝懐㤲𢦀𢣁怣慜攞掋𠄘担𡝰拕𢸍捬𤧟㨗搸揸𡎎𡟼撐澊𢸶頔𤂌𥜝擡擥鑻㩦携㩗敍漖𤨨𤨣斅敭敟𣁾斵𤥀䬷旑䃘𡠩无旣忟𣐀昘𣇷𣇸晄𣆤𣆥晋𠹵晧𥇦晳晴𡸽𣈱𨗴𣇈𥌓矅𢣷馤朂𤎜𤨡㬫槺𣟂杞杧杢𤇍𩃭柗䓩栢湐鈼栁𣏦𦶠桝'
      ],
      [
        'fd40',
        '𣑯槡樋𨫟楳棃𣗍椁椀㴲㨁𣘼㮀枬楡𨩊䋼椶榘㮡𠏉荣傐槹𣙙𢄪橅𣜃檝㯳枱櫈𩆜㰍欝𠤣惞欵歴𢟍溵𣫛𠎵𡥘㝀吡𣭚毡𣻼毜氷𢒋𤣱𦭑汚舦汹𣶼䓅𣶽𤆤𤤌𤤀'
      ],
      [
        'fda1',
        '𣳉㛥㳫𠴲鮃𣇹𢒑羏样𦴥𦶡𦷫涖浜湼漄𤥿𤂅𦹲蔳𦽴凇沜渝萮𨬡港𣸯瑓𣾂秌湏媑𣁋濸㜍澝𣸰滺𡒗𤀽䕕鏰潄潜㵎潴𩅰㴻澟𤅄濓𤂑𤅕𤀹𣿰𣾴𤄿凟𤅖𤅗𤅀𦇝灋灾炧炁烌烕烖烟䄄㷨熴熖𤉷焫煅媈煊煮岜𤍥煏鍢𤋁焬𤑚𤨧𤨢熺𨯨炽爎'
      ],
      [
        'fe40',
        '鑂爕夑鑃爤鍁𥘅爮牀𤥴梽牕牗㹕𣁄栍漽犂猪猫𤠣𨠫䣭𨠄猨献珏玪𠰺𦨮珉瑉𤇢𡛧𤨤昣㛅𤦷𤦍𤧻珷琕椃𤨦琹𠗃㻗瑜𢢭瑠𨺲瑇珤瑶莹瑬㜰瑴鏱樬璂䥓𤪌'
      ],
      [
        'fea1',
        '𤅟𤩹𨮏孆𨰃𡢞瓈𡦈甎瓩甞𨻙𡩋寗𨺬鎅畍畊畧畮𤾂㼄𤴓疎瑝疞疴瘂瘬癑癏癯癶𦏵皐臯㟸𦤑𦤎皡皥皷盌𦾟葢𥂝𥅽𡸜眞眦着撯𥈠睘𣊬瞯𨥤𨥨𡛁矴砉𡍶𤨒棊碯磇磓隥礮𥗠磗礴碱𧘌辸袄𨬫𦂃𢘜禆褀椂禀𥡗禝𧬹礼禩渪𧄦㺨秆𩄍秔'
      ]
    ]
  }),
  Xc = S(zc),
  ta = S(qc),
  ea = S(Wc),
  na = S($c),
  ra = S(Hc),
  ia = S(Qc),
  oa = S(Jc),
  sa = S(Zc),
  ua = {
    shiftjis: {
      type: '_dbcs',
      table: function() {
        return Xc;
      },
      encodeAdd: { '¥': 92, '‾': 126 },
      encodeSkipVals: [{ from: 60736, to: 63808 }]
    },
    csshiftjis: 'shiftjis',
    mskanji: 'shiftjis',
    sjis: 'shiftjis',
    windows31j: 'shiftjis',
    ms31j: 'shiftjis',
    xsjis: 'shiftjis',
    windows932: 'shiftjis',
    ms932: 'shiftjis',
    932: 'shiftjis',
    cp932: 'shiftjis',
    eucjp: {
      type: '_dbcs',
      table: function() {
        return ta;
      },
      encodeAdd: { '¥': 92, '‾': 126 }
    },
    gb2312: 'cp936',
    gb231280: 'cp936',
    gb23121980: 'cp936',
    csgb2312: 'cp936',
    csiso58gb231280: 'cp936',
    euccn: 'cp936',
    windows936: 'cp936',
    ms936: 'cp936',
    936: 'cp936',
    cp936: {
      type: '_dbcs',
      table: function() {
        return ea;
      }
    },
    gbk: {
      type: '_dbcs',
      table: function() {
        return ea.concat(na);
      }
    },
    xgbk: 'gbk',
    isoir58: 'gbk',
    gb18030: {
      type: '_dbcs',
      table: function() {
        return ea.concat(na);
      },
      gb18030: function() {
        return ra;
      },
      encodeSkipVals: [128],
      encodeAdd: { '€': 41699 }
    },
    chinese: 'gb18030',
    windows949: 'cp949',
    ms949: 'cp949',
    949: 'cp949',
    cp949: {
      type: '_dbcs',
      table: function() {
        return ia;
      }
    },
    cseuckr: 'cp949',
    csksc56011987: 'cp949',
    euckr: 'cp949',
    isoir149: 'cp949',
    korean: 'cp949',
    ksc56011987: 'cp949',
    ksc56011989: 'cp949',
    ksc5601: 'cp949',
    windows950: 'cp950',
    ms950: 'cp950',
    950: 'cp950',
    cp950: {
      type: '_dbcs',
      table: function() {
        return oa;
      }
    },
    big5: 'big5hkscs',
    big5hkscs: {
      type: '_dbcs',
      table: function() {
        return oa.concat(sa);
      },
      encodeSkipVals: [41676]
    },
    cnbig5: 'big5hkscs',
    csbig5: 'big5hkscs',
    xxbig5: 'big5hkscs'
  },
  ca = F(function(t, e) {
    for (var n = [Lu, rc, wc, Sc, Oc, kc, Uc, ua], r = 0; r < n.length; r++) {
      t = n[r];
      for (var i in t)
        Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i]);
    }
  }),
  aa = h.Buffer,
  la = u.Transform;
function ha(t, e) {
  (this.conv = t), ((e = e || {}).decodeStrings = !1), la.call(this, e);
}
function fa(t, e) {
  (this.conv = t),
    ((e = e || {}).encoding = this.encoding = 'utf8'),
    la.call(this, e);
}
(ha.prototype = Object.create(la.prototype, { constructor: { value: ha } })),
  (ha.prototype._transform = function(t, e, n) {
    if ('string' != typeof t)
      return n(new Error('Iconv encoding stream needs strings as its input.'));
    try {
      var r = this.conv.write(t);
      r && r.length && this.push(r), n();
    } catch (t) {
      n(t);
    }
  }),
  (ha.prototype._flush = function(t) {
    try {
      var e = this.conv.end();
      e && e.length && this.push(e), t();
    } catch (e) {
      t(e);
    }
  }),
  (ha.prototype.collect = function(t) {
    var e = [];
    return (
      this.on('error', t),
      this.on('data', function(t) {
        e.push(t);
      }),
      this.on('end', function() {
        t(null, aa.concat(e));
      }),
      this
    );
  }),
  (fa.prototype = Object.create(la.prototype, { constructor: { value: fa } })),
  (fa.prototype._transform = function(t, e, n) {
    if (!aa.isBuffer(t))
      return n(new Error('Iconv decoding stream needs buffers as its input.'));
    try {
      var r = this.conv.write(t);
      r && r.length && this.push(r, this.encoding), n();
    } catch (t) {
      n(t);
    }
  }),
  (fa.prototype._flush = function(t) {
    try {
      var e = this.conv.end();
      e && e.length && this.push(e, this.encoding), t();
    } catch (e) {
      t(e);
    }
  }),
  (fa.prototype.collect = function(t) {
    var e = '';
    return (
      this.on('error', t),
      this.on('data', function(t) {
        e += t;
      }),
      this.on('end', function() {
        t(null, e);
      }),
      this
    );
  });
var pa = h.Buffer,
  da = F(function(t) {
    var e = Bu.Buffer,
      n = t.exports;
    (n.encodings = null),
      (n.defaultCharUnicode = '�'),
      (n.defaultCharSingleByte = '?'),
      (n.encode = function(t, r, i) {
        t = '' + (t || '');
        var o = n.getEncoder(r, i),
          s = o.write(t),
          u = o.end();
        return u && u.length > 0 ? e.concat([s, u]) : s;
      }),
      (n.decode = function(t, r, i) {
        'string' == typeof t &&
          (n.skipDecodeWarning ||
            (console.error(
              'Iconv-lite warning: decode()-ing strings is deprecated. Refer to https://github.com/ashtuchkin/iconv-lite/wiki/Use-Buffers-when-decoding'
            ),
            (n.skipDecodeWarning = !0)),
          (t = e.from('' + (t || ''), 'binary')));
        var o = n.getDecoder(r, i),
          s = o.write(t),
          u = o.end();
        return u ? s + u : s;
      }),
      (n.encodingExists = function(t) {
        try {
          return n.getCodec(t), !0;
        } catch (t) {
          return !1;
        }
      }),
      (n.toEncoding = n.encode),
      (n.fromEncoding = n.decode),
      (n._codecDataCache = {}),
      (n.getCodec = function(t) {
        n.encodings || (n.encodings = ca);
        for (var e = n._canonicalizeEncoding(t), r = {}; ; ) {
          var i = n._codecDataCache[e];
          if (i) return i;
          var o = n.encodings[e];
          switch (typeof o) {
            case 'string':
              e = o;
              break;
            case 'object':
              for (var s in o) r[s] = o[s];
              r.encodingName || (r.encodingName = e), (e = o.type);
              break;
            case 'function':
              return (
                r.encodingName || (r.encodingName = e),
                (i = new o(r, n)),
                (n._codecDataCache[r.encodingName] = i),
                i
              );
            default:
              throw new Error(
                "Encoding not recognized: '" +
                  t +
                  "' (searched as: '" +
                  e +
                  "')"
              );
          }
        }
      }),
      (n._canonicalizeEncoding = function(t) {
        return ('' + t).toLowerCase().replace(/:\d{4}$|[^0-9a-z]/g, '');
      }),
      (n.getEncoder = function(t, e) {
        var r = n.getCodec(t),
          i = new r.encoder(e, r);
        return r.bomAware && e && e.addBOM && (i = new Nu.PrependBOM(i, e)), i;
      }),
      (n.getDecoder = function(t, e) {
        var r = n.getCodec(t),
          i = new r.decoder(e, r);
        return (
          !r.bomAware ||
            (e && !1 === e.stripBOM) ||
            (i = new Nu.StripBOM(i, e)),
          i
        );
      });
    var r =
      'undefined' != typeof process &&
      process.versions &&
      process.versions.node;
    if (r) {
      var i = r.split('.').map(Number);
      (i[0] > 0 || i[1] >= 10) &&
        (function(t) {
          (t.encodeStream = function(e, n) {
            return new ha(t.getEncoder(e, n), n);
          }),
            (t.decodeStream = function(e, n) {
              return new fa(t.getDecoder(e, n), n);
            }),
            (t.supportsStreams = !0),
            (t.IconvLiteEncoderStream = ha),
            (t.IconvLiteDecoderStream = fa),
            (t._collect = fa.prototype.collect);
        })(n),
        (function(t) {
          var e = void 0;
          (t.supportsNodeEncodingsExtension = !(
            pa.from || new pa(0) instanceof Uint8Array
          )),
            (t.extendNodeEncodings = function() {
              if (!e) {
                if (((e = {}), !t.supportsNodeEncodingsExtension))
                  return (
                    console.error(
                      "ACTION NEEDED: require('iconv-lite').extendNodeEncodings() is not supported in your version of Node"
                    ),
                    void console.error(
                      'See more info at https://github.com/ashtuchkin/iconv-lite/wiki/Node-v4-compatibility'
                    )
                  );
                var n = {
                  hex: !0,
                  utf8: !0,
                  'utf-8': !0,
                  ascii: !0,
                  binary: !0,
                  base64: !0,
                  ucs2: !0,
                  'ucs-2': !0,
                  utf16le: !0,
                  'utf-16le': !0
                };
                pa.isNativeEncoding = function(t) {
                  return t && n[t.toLowerCase()];
                };
                var r = h.SlowBuffer;
                if (
                  ((e.SlowBufferToString = r.prototype.toString),
                  (r.prototype.toString = function(n, r, i) {
                    return (
                      (n = String(n || 'utf8').toLowerCase()),
                      pa.isNativeEncoding(n)
                        ? e.SlowBufferToString.call(this, n, r, i)
                        : (void 0 === r && (r = 0),
                          void 0 === i && (i = this.length),
                          t.decode(this.slice(r, i), n))
                    );
                  }),
                  (e.SlowBufferWrite = r.prototype.write),
                  (r.prototype.write = function(n, r, i, o) {
                    if (isFinite(r)) isFinite(i) || ((o = i), (i = void 0));
                    else {
                      var s = o;
                      (o = r), (r = i), (i = s);
                    }
                    r = +r || 0;
                    var u = this.length - r;
                    if (
                      (i ? (i = +i) > u && (i = u) : (i = u),
                      (o = String(o || 'utf8').toLowerCase()),
                      pa.isNativeEncoding(o))
                    )
                      return e.SlowBufferWrite.call(this, n, r, i, o);
                    if (n.length > 0 && (i < 0 || r < 0))
                      throw new RangeError(
                        'attempt to write beyond buffer bounds'
                      );
                    var c = t.encode(n, o);
                    return (
                      c.length < i && (i = c.length), c.copy(this, r, 0, i), i
                    );
                  }),
                  (e.BufferIsEncoding = pa.isEncoding),
                  (pa.isEncoding = function(e) {
                    return pa.isNativeEncoding(e) || t.encodingExists(e);
                  }),
                  (e.BufferByteLength = pa.byteLength),
                  (pa.byteLength = r.byteLength = function(n, r) {
                    return (
                      (r = String(r || 'utf8').toLowerCase()),
                      pa.isNativeEncoding(r)
                        ? e.BufferByteLength.call(this, n, r)
                        : t.encode(n, r).length
                    );
                  }),
                  (e.BufferToString = pa.prototype.toString),
                  (pa.prototype.toString = function(n, r, i) {
                    return (
                      (n = String(n || 'utf8').toLowerCase()),
                      pa.isNativeEncoding(n)
                        ? e.BufferToString.call(this, n, r, i)
                        : (void 0 === r && (r = 0),
                          void 0 === i && (i = this.length),
                          t.decode(this.slice(r, i), n))
                    );
                  }),
                  (e.BufferWrite = pa.prototype.write),
                  (pa.prototype.write = function(n, r, i, o) {
                    var s = r,
                      u = i,
                      c = o;
                    if (isFinite(r)) isFinite(i) || ((o = i), (i = void 0));
                    else {
                      var a = o;
                      (o = r), (r = i), (i = a);
                    }
                    if (
                      ((o = String(o || 'utf8').toLowerCase()),
                      pa.isNativeEncoding(o))
                    )
                      return e.BufferWrite.call(this, n, s, u, c);
                    r = +r || 0;
                    var l = this.length - r;
                    if (
                      (i ? (i = +i) > l && (i = l) : (i = l),
                      n.length > 0 && (i < 0 || r < 0))
                    )
                      throw new RangeError(
                        'attempt to write beyond buffer bounds'
                      );
                    var h = t.encode(n, o);
                    return (
                      h.length < i && (i = h.length), h.copy(this, r, 0, i), i
                    );
                  }),
                  t.supportsStreams)
                ) {
                  var i = u.Readable;
                  (e.ReadableSetEncoding = i.prototype.setEncoding),
                    (i.prototype.setEncoding = function(e, n) {
                      (this._readableState.decoder = t.getDecoder(e, n)),
                        (this._readableState.encoding = e);
                    }),
                    (i.prototype.collect = t._collect);
                }
              }
            }),
            (t.undoExtendNodeEncodings = function() {
              if (t.supportsNodeEncodingsExtension) {
                if (!e)
                  throw new Error(
                    "require('iconv-lite').undoExtendNodeEncodings(): Nothing to undo; extendNodeEncodings() is not called."
                  );
                delete pa.isNativeEncoding;
                var n = h.SlowBuffer;
                if (
                  ((n.prototype.toString = e.SlowBufferToString),
                  (n.prototype.write = e.SlowBufferWrite),
                  (pa.isEncoding = e.BufferIsEncoding),
                  (pa.byteLength = e.BufferByteLength),
                  (pa.prototype.toString = e.BufferToString),
                  (pa.prototype.write = e.BufferWrite),
                  t.supportsStreams)
                ) {
                  var r = u.Readable;
                  (r.prototype.setEncoding = e.ReadableSetEncoding),
                    delete r.prototype.collect;
                }
                e = void 0;
              }
            });
        })(n);
    }
  }),
  ba = 'win32' === process.platform,
  va = ba ? /[^:]\\$/ : /.\/$/;
/*!
 * Tmp
 *
 * Copyright (c) 2011-2017 KARASZI Istvan <github@spam.raszi.hu>
 *
 * MIT Licensed
 */
const ya = process.binding('constants'),
  ga =
    ((Oa = ba
      ? process.env.TEMP ||
        process.env.TMP ||
        (process.env.SystemRoot || process.env.windir) + '\\temp'
      : process.env.TMPDIR || process.env.TMP || process.env.TEMP || '/tmp'),
    va.test(Oa) && (Oa = Oa.slice(0, -1)),
    Oa),
  ma = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz',
  Da = /XXXXXX/,
  wa = 3,
  _a =
    (ya.O_CREAT || ya.fs.O_CREAT) |
    (ya.O_EXCL || ya.fs.O_EXCL) |
    (ya.O_RDWR || ya.fs.O_RDWR),
  Ca = ya.EBADF || ya.os.errno.EBADF,
  xa = ya.ENOENT || ya.os.errno.ENOENT,
  Ea = 448,
  Fa = 384,
  Sa = [];
var Oa,
  ka = !1,
  Aa = !1;
function ja(t) {
  var e = [],
    n = null;
  try {
    n = p.randomBytes(t);
  } catch (e) {
    n = p.pseudoRandomBytes(t);
  }
  for (var r = 0; r < t; r++) e.push(ma[n[r] % ma.length]);
  return e.join('');
}
function Ba(t) {
  return void 0 === t;
}
function Ia(t, e) {
  return 'function' == typeof t ? [e || {}, t] : Ba(t) ? [{}, e] : [t, e];
}
function Ta(t) {
  if (t.name) return n.join(t.dir || ga, t.name);
  if (t.template) return t.template.replace(Da, ja(6));
  const e = [t.prefix || 'tmp-', process.pid, ja(12), t.postfix || ''].join('');
  return n.join(t.dir || ga, e);
}
function Ma(t, e) {
  var n = Ia(t, e),
    r = n[0],
    o = n[1],
    s = r.name ? 1 : r.tries || wa;
  return isNaN(s) || s < 0
    ? o(new Error('Invalid tries'))
    : r.template && !r.template.match(Da)
    ? o(new Error('Invalid template provided'))
    : void (function t() {
        const e = Ta(r);
        i.stat(e, function(n) {
          if (!n)
            return s-- > 0
              ? t()
              : o(
                  new Error(
                    'Could not get a unique tmp filename, max tries reached ' +
                      e
                  )
                );
          o(null, e);
        });
      })();
}
function Pa(t) {
  var e = Ia(t)[0],
    n = e.name ? 1 : e.tries || wa;
  if (isNaN(n) || n < 0) throw new Error('Invalid tries');
  if (e.template && !e.template.match(Da))
    throw new Error('Invalid template provided');
  do {
    const t = Ta(e);
    try {
      i.statSync(t);
    } catch (e) {
      return t;
    }
  } while (n-- > 0);
  throw new Error('Could not get a unique tmp filename, max tries reached');
}
function Na(t) {
  const e = [t];
  do {
    for (
      var r = e.pop(), o = !1, s = i.readdirSync(r), u = 0, c = s.length;
      u < c;
      u++
    ) {
      var a = n.join(r, s[u]);
      i.lstatSync(a).isDirectory()
        ? (o || ((o = !0), e.push(r)), e.push(a))
        : i.unlinkSync(a);
    }
    o || i.rmdirSync(r);
  } while (0 !== e.length);
}
function Ra(t, e, n) {
  const r = Va(
    function(t) {
      try {
        0 <= t[0] && i.closeSync(t[0]);
      } catch (t) {
        if (
          !(function(t) {
            return qa(t, -Ca, 'EBADF');
          })(t) &&
          !za(t)
        )
          throw t;
      }
      try {
        i.unlinkSync(t[1]);
      } catch (t) {
        if (!za(t)) throw t;
      }
    },
    [e, t]
  );
  return n.keep || Sa.unshift(r), r;
}
function La(t, e) {
  const n = Va(e.unsafeCleanup ? Na : i.rmdirSync.bind(i), t);
  return e.keep || Sa.unshift(n), n;
}
function Va(t, e) {
  var n = !1;
  return function r(i) {
    if (!n) {
      const i = Sa.indexOf(r);
      i >= 0 && Sa.splice(i, 1), (n = !0), t(e);
    }
    i && i(null);
  };
}
function Ua() {
  if (!Aa || ka)
    for (; Sa.length; )
      try {
        Sa[0].call(null);
      } catch (t) {}
}
function za(t) {
  return qa(t, -xa, 'ENOENT');
}
function qa(t, e, n) {
  return t.code == e || t.code == n;
}
const Wa = process.versions.node.split('.').map(function(t) {
  return parseInt(t, 10);
});
0 === Wa[0] &&
  (Wa[1] < 9 || (9 === Wa[1] && Wa[2] < 5)) &&
  process.addListener('uncaughtException', function(t) {
    throw ((Aa = !0), Ua(), t);
  }),
  process.addListener('exit', function(t) {
    t && (Aa = !0), Ua();
  });
var $a = {
    tmpdir: ga,
    dir: function(t, e) {
      var n = Ia(t, e),
        r = n[0],
        o = n[1];
      Ma(r, function(t, e) {
        if (t) return o(t);
        i.mkdir(e, r.mode || Ea, function(t) {
          if (t) return o(t);
          o(null, e, La(e, r));
        });
      });
    },
    dirSync: function(t) {
      var e = Ia(t)[0];
      const n = Pa(e);
      return (
        i.mkdirSync(n, e.mode || Ea), { name: n, removeCallback: La(n, e) }
      );
    },
    file: function(t, e) {
      var n = Ia(t, e),
        r = n[0],
        o = n[1];
      (r.postfix = Ba(r.postfix) ? '.tmp' : r.postfix),
        Ma(r, function(t, e) {
          if (t) return o(t);
          i.open(e, _a, r.mode || Fa, function(t, n) {
            return t
              ? o(t)
              : r.discardDescriptor
              ? i.close(n, function(t) {
                  if (t) {
                    try {
                      i.unlinkSync(e);
                    } catch (e) {
                      za(e) || (t = e);
                    }
                    return o(t);
                  }
                  o(null, e, void 0, Ra(e, -1, r));
                })
              : r.detachDescriptor
              ? o(null, e, n, Ra(e, -1, r))
              : void o(null, e, n, Ra(e, n, r));
          });
        });
    },
    fileSync: function(t) {
      var e = Ia(t)[0];
      e.postfix = e.postfix || '.tmp';
      const n = e.discardDescriptor || e.detachDescriptor,
        r = Pa(e);
      var o = i.openSync(r, _a, e.mode || Fa);
      return (
        e.discardDescriptor && (i.closeSync(o), (o = void 0)),
        { name: r, fd: o, removeCallback: Ra(r, n ? -1 : o, e) }
      );
    },
    tmpName: Ma,
    tmpNameSync: Pa,
    setGracefulCleanup: function() {
      ka = !0;
    }
  },
  Ka = F(function(t, e) {
    var n =
      (C && C.__extends) ||
      (function() {
        var t = function(e, n) {
          return (t =
            Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array &&
              function(t, e) {
                t.__proto__ = e;
              }) ||
            function(t, e) {
              for (var n in e) e.hasOwnProperty(n) && (t[n] = e[n]);
            })(e, n);
        };
        return function(e, n) {
          function r() {
            this.constructor = e;
          }
          t(e, n),
            (e.prototype =
              null === n
                ? Object.create(n)
                : ((r.prototype = n.prototype), new r()));
        };
      })();
    Object.defineProperty(e, '__esModule', { value: !0 });
    var r = (function(t) {
      function e(e) {
        var n = this.constructor,
          r =
            t.call(this, 'Failed to create temporary file for editor') || this;
        r.originalError = e;
        var i = n.prototype;
        return (
          Object.setPrototypeOf
            ? Object.setPrototypeOf(r, i)
            : (r.__proto__ = n.prototype),
          r
        );
      }
      return n(e, t), e;
    })(Error);
    e.CreateFileError = r;
  });
E(Ka);
Ka.CreateFileError;
var Ga = F(function(t, e) {
  var n =
    (C && C.__extends) ||
    (function() {
      var t = function(e, n) {
        return (t =
          Object.setPrototypeOf ||
          ({ __proto__: [] } instanceof Array &&
            function(t, e) {
              t.__proto__ = e;
            }) ||
          function(t, e) {
            for (var n in e) e.hasOwnProperty(n) && (t[n] = e[n]);
          })(e, n);
      };
      return function(e, n) {
        function r() {
          this.constructor = e;
        }
        t(e, n),
          (e.prototype =
            null === n
              ? Object.create(n)
              : ((r.prototype = n.prototype), new r()));
      };
    })();
  Object.defineProperty(e, '__esModule', { value: !0 });
  var r = (function(t) {
    function e(e) {
      var n = this.constructor,
        r = t.call(this, 'Failed launch editor') || this;
      r.originalError = e;
      var i = n.prototype;
      return (
        Object.setPrototypeOf
          ? Object.setPrototypeOf(r, i)
          : (r.__proto__ = n.prototype),
        r
      );
    }
    return n(e, t), e;
  })(Error);
  e.LaunchEditorError = r;
});
E(Ga);
Ga.LaunchEditorError;
var Ya = F(function(t, e) {
  var n =
    (C && C.__extends) ||
    (function() {
      var t = function(e, n) {
        return (t =
          Object.setPrototypeOf ||
          ({ __proto__: [] } instanceof Array &&
            function(t, e) {
              t.__proto__ = e;
            }) ||
          function(t, e) {
            for (var n in e) e.hasOwnProperty(n) && (t[n] = e[n]);
          })(e, n);
      };
      return function(e, n) {
        function r() {
          this.constructor = e;
        }
        t(e, n),
          (e.prototype =
            null === n
              ? Object.create(n)
              : ((r.prototype = n.prototype), new r()));
      };
    })();
  Object.defineProperty(e, '__esModule', { value: !0 });
  var r = (function(t) {
    function e(e) {
      var n = this.constructor,
        r = t.call(this, 'Failed to read temporary file') || this;
      r.originalError = e;
      var i = n.prototype;
      return (
        Object.setPrototypeOf
          ? Object.setPrototypeOf(r, i)
          : (r.__proto__ = n.prototype),
        r
      );
    }
    return n(e, t), e;
  })(Error);
  e.ReadFileError = r;
});
E(Ya);
Ya.ReadFileError;
var Ha = F(function(t, e) {
  var n =
    (C && C.__extends) ||
    (function() {
      var t = function(e, n) {
        return (t =
          Object.setPrototypeOf ||
          ({ __proto__: [] } instanceof Array &&
            function(t, e) {
              t.__proto__ = e;
            }) ||
          function(t, e) {
            for (var n in e) e.hasOwnProperty(n) && (t[n] = e[n]);
          })(e, n);
      };
      return function(e, n) {
        function r() {
          this.constructor = e;
        }
        t(e, n),
          (e.prototype =
            null === n
              ? Object.create(n)
              : ((r.prototype = n.prototype), new r()));
      };
    })();
  Object.defineProperty(e, '__esModule', { value: !0 });
  var r = (function(t) {
    function e(e) {
      var n = this.constructor,
        r = t.call(this, 'Failed to cleanup temporary file') || this;
      r.originalError = e;
      var i = n.prototype;
      return (
        Object.setPrototypeOf
          ? Object.setPrototypeOf(r, i)
          : (r.__proto__ = n.prototype),
        r
      );
    }
    return n(e, t), e;
  })(Error);
  e.RemoveFileError = r;
});
E(Ha);
Ha.RemoveFileError;
var Qa = F(function(t, n) {
  Object.defineProperty(n, '__esModule', { value: !0 }),
    (n.CreateFileError = Ka.CreateFileError),
    (n.LaunchEditorError = Ga.LaunchEditorError),
    (n.ReadFileError = Ya.ReadFileError),
    (n.RemoveFileError = Ha.RemoveFileError),
    (n.edit = function(t, e) {
      void 0 === t && (t = '');
      var n = new r(t, e);
      return n.run(), n.cleanup(), n.text;
    }),
    (n.editAsync = function(t, e, n) {
      void 0 === t && (t = '');
      var i = new r(t, n);
      i.runAsync(function(t, n) {
        if (t) setImmediate(e, t, null);
        else
          try {
            i.cleanup(), setImmediate(e, null, n);
          } catch (t) {
            setImmediate(e, t, null);
          }
      });
    });
  var r = (function() {
    function t(t, e) {
      void 0 === t && (t = ''),
        (this.text = ''),
        (this.fileOptions = {}),
        (this.text = t),
        e && (this.fileOptions = e),
        this.determineEditor(),
        this.createTemporaryFile();
    }
    return (
      (t.splitStringBySpace = function(t) {
        for (var e = [], n = '', r = 0; r < t.length; r++) {
          var i = t[r];
          r > 0 && ' ' === i && '\\' !== t[r - 1] && n.length > 0
            ? (e.push(n), (n = ''))
            : (n += i);
        }
        return n.length > 0 && e.push(n), e;
      }),
      Object.defineProperty(t.prototype, 'temp_file', {
        get: function() {
          return (
            console.log('DEPRECATED: temp_file. Use tempFile moving forward.'),
            this.tempFile
          );
        },
        enumerable: !0,
        configurable: !0
      }),
      Object.defineProperty(t.prototype, 'last_exit_status', {
        get: function() {
          return (
            console.log(
              'DEPRECATED: last_exit_status. Use lastExitStatus moving forward.'
            ),
            this.lastExitStatus
          );
        },
        enumerable: !0,
        configurable: !0
      }),
      (t.prototype.run = function() {
        return this.launchEditor(), this.readTemporaryFile(), this.text;
      }),
      (t.prototype.runAsync = function(t) {
        var e = this;
        try {
          this.launchEditorAsync(function() {
            try {
              e.readTemporaryFile(), setImmediate(t, null, e.text);
            } catch (e) {
              setImmediate(t, e, null);
            }
          });
        } catch (e) {
          setImmediate(t, e, null);
        }
      }),
      (t.prototype.cleanup = function() {
        this.removeTemporaryFile();
      }),
      (t.prototype.determineEditor = function() {
        var e = process.env.VISUAL
            ? process.env.VISUAL
            : process.env.EDITOR
            ? process.env.EDITOR
            : /^win/.test(process.platform)
            ? 'notepad'
            : 'vim',
          n = t.splitStringBySpace(e).map(function(t) {
            return t.replace('\\ ', ' ');
          }),
          r = n.shift();
        this.editor = { args: n, bin: r };
      }),
      (t.prototype.createTemporaryFile = function() {
        try {
          this.tempFile = $a.tmpNameSync(this.fileOptions);
          var t = { encoding: 'utf8' };
          this.fileOptions.hasOwnProperty('mode') &&
            (t.mode = this.fileOptions.mode),
            i.writeFileSync(this.tempFile, this.text, t);
        } catch (t) {
          throw new Ka.CreateFileError(t);
        }
      }),
      (t.prototype.readTemporaryFile = function() {
        try {
          var t = i.readFileSync(this.tempFile);
          if (0 === t.length) this.text = '';
          else {
            var e = Ou(t).toString();
            da.encodingExists(e) || (e = 'utf8'), (this.text = da.decode(t, e));
          }
        } catch (t) {
          throw new Ya.ReadFileError(t);
        }
      }),
      (t.prototype.removeTemporaryFile = function() {
        try {
          i.unlinkSync(this.tempFile);
        } catch (t) {
          throw new Ha.RemoveFileError(t);
        }
      }),
      (t.prototype.launchEditor = function() {
        try {
          var t = e.spawnSync(
            this.editor.bin,
            this.editor.args.concat([this.tempFile]),
            { stdio: 'inherit' }
          );
          this.lastExitStatus = t.status;
        } catch (t) {
          throw new Ga.LaunchEditorError(t);
        }
      }),
      (t.prototype.launchEditorAsync = function(t) {
        var n = this;
        try {
          e.spawn(this.editor.bin, this.editor.args.concat([this.tempFile]), {
            stdio: 'inherit'
          }).on('exit', function(e) {
            (n.lastExitStatus = e), setImmediate(t);
          });
        } catch (t) {
          throw new Ga.LaunchEditorError(t);
        }
      }),
      t
    );
  })();
  n.ExternalEditor = r;
});
E(Qa);
Qa.CreateFileError,
  Qa.LaunchEditorError,
  Qa.ReadFileError,
  Qa.RemoveFileError,
  Qa.edit,
  Qa.editAsync,
  Qa.ExternalEditor;
var Ja = Qa.editAsync,
  { Subject: Za } = Un;
var Xa = class extends Us {
    _run(t) {
      (this.done = t), (this.editorResult = new Za());
      var e = Ys(this.rl);
      this.lineSubscription = e.line.subscribe(
        this.startExternalEditor.bind(this)
      );
      var n = this.handleSubmitEvents(this.editorResult);
      return (
        n.success.forEach(this.onEnd.bind(this)),
        n.error.forEach(this.onError.bind(this)),
        (this.currentText = this.opt.default),
        (this.opt.default = null),
        this.render(),
        this
      );
    }
    render(t) {
      var e = '',
        n = this.getQuestion();
      'answered' === this.status
        ? (n += st.dim('Received'))
        : (n += st.dim('Press <enter> to launch your preferred editor.')),
        t && (e = st.red('>> ') + t),
        this.screen.render(n, e);
    }
    startExternalEditor() {
      this.rl.pause(), Ja(this.currentText, this.endExternalEditor.bind(this));
    }
    endExternalEditor(t, e) {
      this.rl.resume(),
        t ? this.editorResult.error(t) : this.editorResult.next(e);
    }
    onEnd(t) {
      this.editorResult.unsubscribe(),
        this.lineSubscription.unsubscribe(),
        (this.answer = t.value),
        (this.status = 'answered'),
        this.render(),
        this.screen.done(),
        this.done(this.answer);
    }
    onError(t) {
      this.render(t.isValid);
    }
  },
  tl = F(function(t) {
    var e = t.exports;
    (e.prompts = {}),
      (e.Separator = pt),
      (e.ui = { BottomBar: _t, Prompt: Ho }),
      (e.createPromptModule = function(t) {
        var n = function(r) {
          var i = new e.ui.Prompt(n.prompts, t),
            o = i.run(r);
          return (o.ui = i), o;
        };
        return (
          (n.prompts = {}),
          (n.registerPrompt = function(t, e) {
            return (n.prompts[t] = e), this;
          }),
          (n.restoreDefaultPrompts = function() {
            this.registerPrompt('list', tu),
              this.registerPrompt('input', ru),
              this.registerPrompt('number', iu),
              this.registerPrompt('confirm', uu),
              this.registerPrompt('rawlist', lu),
              this.registerPrompt('expand', pu),
              this.registerPrompt('checkbox', vu),
              this.registerPrompt('password', wu),
              this.registerPrompt('editor', Xa);
          }),
          n.restoreDefaultPrompts(),
          n
        );
      }),
      (e.prompt = e.createPromptModule()),
      (e.registerPrompt = function(t, n) {
        e.prompt.registerPrompt(t, n);
      }),
      (e.restoreDefaultPrompts = function() {
        e.prompt.restoreDefaultPrompts();
      });
  }),
  el = [
    {
      name: 'language',
      type: 'input',
      message:
        'Input the language code to return. See https://developers.google.com/maps/faq#languagesupport for more information.',
      default: 'en'
    },
    {
      name: 'mode',
      type: 'list',
      message: 'Select a mode of transportation',
      choices: ['bicycling', 'driving', 'transit', 'walking'],
      default: 'driving'
    },
    {
      name: 'units',
      type: 'list',
      message: 'Specify measurement unit',
      choices: ['imperial', 'metric'],
      default: 'metric'
    }
  ],
  nl = {
    aliceblue: [240, 248, 255],
    antiquewhite: [250, 235, 215],
    aqua: [0, 255, 255],
    aquamarine: [127, 255, 212],
    azure: [240, 255, 255],
    beige: [245, 245, 220],
    bisque: [255, 228, 196],
    black: [0, 0, 0],
    blanchedalmond: [255, 235, 205],
    blue: [0, 0, 255],
    blueviolet: [138, 43, 226],
    brown: [165, 42, 42],
    burlywood: [222, 184, 135],
    cadetblue: [95, 158, 160],
    chartreuse: [127, 255, 0],
    chocolate: [210, 105, 30],
    coral: [255, 127, 80],
    cornflowerblue: [100, 149, 237],
    cornsilk: [255, 248, 220],
    crimson: [220, 20, 60],
    cyan: [0, 255, 255],
    darkblue: [0, 0, 139],
    darkcyan: [0, 139, 139],
    darkgoldenrod: [184, 134, 11],
    darkgray: [169, 169, 169],
    darkgreen: [0, 100, 0],
    darkgrey: [169, 169, 169],
    darkkhaki: [189, 183, 107],
    darkmagenta: [139, 0, 139],
    darkolivegreen: [85, 107, 47],
    darkorange: [255, 140, 0],
    darkorchid: [153, 50, 204],
    darkred: [139, 0, 0],
    darksalmon: [233, 150, 122],
    darkseagreen: [143, 188, 143],
    darkslateblue: [72, 61, 139],
    darkslategray: [47, 79, 79],
    darkslategrey: [47, 79, 79],
    darkturquoise: [0, 206, 209],
    darkviolet: [148, 0, 211],
    deeppink: [255, 20, 147],
    deepskyblue: [0, 191, 255],
    dimgray: [105, 105, 105],
    dimgrey: [105, 105, 105],
    dodgerblue: [30, 144, 255],
    firebrick: [178, 34, 34],
    floralwhite: [255, 250, 240],
    forestgreen: [34, 139, 34],
    fuchsia: [255, 0, 255],
    gainsboro: [220, 220, 220],
    ghostwhite: [248, 248, 255],
    gold: [255, 215, 0],
    goldenrod: [218, 165, 32],
    gray: [128, 128, 128],
    green: [0, 128, 0],
    greenyellow: [173, 255, 47],
    grey: [128, 128, 128],
    honeydew: [240, 255, 240],
    hotpink: [255, 105, 180],
    indianred: [205, 92, 92],
    indigo: [75, 0, 130],
    ivory: [255, 255, 240],
    khaki: [240, 230, 140],
    lavender: [230, 230, 250],
    lavenderblush: [255, 240, 245],
    lawngreen: [124, 252, 0],
    lemonchiffon: [255, 250, 205],
    lightblue: [173, 216, 230],
    lightcoral: [240, 128, 128],
    lightcyan: [224, 255, 255],
    lightgoldenrodyellow: [250, 250, 210],
    lightgray: [211, 211, 211],
    lightgreen: [144, 238, 144],
    lightgrey: [211, 211, 211],
    lightpink: [255, 182, 193],
    lightsalmon: [255, 160, 122],
    lightseagreen: [32, 178, 170],
    lightskyblue: [135, 206, 250],
    lightslategray: [119, 136, 153],
    lightslategrey: [119, 136, 153],
    lightsteelblue: [176, 196, 222],
    lightyellow: [255, 255, 224],
    lime: [0, 255, 0],
    limegreen: [50, 205, 50],
    linen: [250, 240, 230],
    magenta: [255, 0, 255],
    maroon: [128, 0, 0],
    mediumaquamarine: [102, 205, 170],
    mediumblue: [0, 0, 205],
    mediumorchid: [186, 85, 211],
    mediumpurple: [147, 112, 219],
    mediumseagreen: [60, 179, 113],
    mediumslateblue: [123, 104, 238],
    mediumspringgreen: [0, 250, 154],
    mediumturquoise: [72, 209, 204],
    mediumvioletred: [199, 21, 133],
    midnightblue: [25, 25, 112],
    mintcream: [245, 255, 250],
    mistyrose: [255, 228, 225],
    moccasin: [255, 228, 181],
    navajowhite: [255, 222, 173],
    navy: [0, 0, 128],
    oldlace: [253, 245, 230],
    olive: [128, 128, 0],
    olivedrab: [107, 142, 35],
    orange: [255, 165, 0],
    orangered: [255, 69, 0],
    orchid: [218, 112, 214],
    palegoldenrod: [238, 232, 170],
    palegreen: [152, 251, 152],
    paleturquoise: [175, 238, 238],
    palevioletred: [219, 112, 147],
    papayawhip: [255, 239, 213],
    peachpuff: [255, 218, 185],
    peru: [205, 133, 63],
    pink: [255, 192, 203],
    plum: [221, 160, 221],
    powderblue: [176, 224, 230],
    purple: [128, 0, 128],
    rebeccapurple: [102, 51, 153],
    red: [255, 0, 0],
    rosybrown: [188, 143, 143],
    royalblue: [65, 105, 225],
    saddlebrown: [139, 69, 19],
    salmon: [250, 128, 114],
    sandybrown: [244, 164, 96],
    seagreen: [46, 139, 87],
    seashell: [255, 245, 238],
    sienna: [160, 82, 45],
    silver: [192, 192, 192],
    skyblue: [135, 206, 235],
    slateblue: [106, 90, 205],
    slategray: [112, 128, 144],
    slategrey: [112, 128, 144],
    snow: [255, 250, 250],
    springgreen: [0, 255, 127],
    steelblue: [70, 130, 180],
    tan: [210, 180, 140],
    teal: [0, 128, 128],
    thistle: [216, 191, 216],
    tomato: [255, 99, 71],
    turquoise: [64, 224, 208],
    violet: [238, 130, 238],
    wheat: [245, 222, 179],
    white: [255, 255, 255],
    whitesmoke: [245, 245, 245],
    yellow: [255, 255, 0],
    yellowgreen: [154, 205, 50]
  };
const rl = {};
for (const t of Object.keys(nl)) rl[nl[t]] = t;
const il = {
  rgb: { channels: 3, labels: 'rgb' },
  hsl: { channels: 3, labels: 'hsl' },
  hsv: { channels: 3, labels: 'hsv' },
  hwb: { channels: 3, labels: 'hwb' },
  cmyk: { channels: 4, labels: 'cmyk' },
  xyz: { channels: 3, labels: 'xyz' },
  lab: { channels: 3, labels: 'lab' },
  lch: { channels: 3, labels: 'lch' },
  hex: { channels: 1, labels: ['hex'] },
  keyword: { channels: 1, labels: ['keyword'] },
  ansi16: { channels: 1, labels: ['ansi16'] },
  ansi256: { channels: 1, labels: ['ansi256'] },
  hcg: { channels: 3, labels: ['h', 'c', 'g'] },
  apple: { channels: 3, labels: ['r16', 'g16', 'b16'] },
  gray: { channels: 1, labels: ['gray'] }
};
var ol = il;
for (const t of Object.keys(il)) {
  if (!('channels' in il[t]))
    throw new Error('missing channels property: ' + t);
  if (!('labels' in il[t]))
    throw new Error('missing channel labels property: ' + t);
  if (il[t].labels.length !== il[t].channels)
    throw new Error('channel and label counts mismatch: ' + t);
  const { channels: e, labels: n } = il[t];
  delete il[t].channels,
    delete il[t].labels,
    Object.defineProperty(il[t], 'channels', { value: e }),
    Object.defineProperty(il[t], 'labels', { value: n });
}
function sl(t, e) {
  return (t[0] - e[0]) ** 2 + (t[1] - e[1]) ** 2 + (t[2] - e[2]) ** 2;
}
function ul(t) {
  const e = (function() {
      const t = {},
        e = Object.keys(ol);
      for (let n = e.length, r = 0; r < n; r++)
        t[e[r]] = { distance: -1, parent: null };
      return t;
    })(),
    n = [t];
  for (e[t].distance = 0; n.length; ) {
    const t = n.pop(),
      r = Object.keys(ol[t]);
    for (let i = r.length, o = 0; o < i; o++) {
      const i = r[o],
        s = e[i];
      -1 === s.distance &&
        ((s.distance = e[t].distance + 1), (s.parent = t), n.unshift(i));
    }
  }
  return e;
}
function cl(t, e) {
  return function(n) {
    return e(t(n));
  };
}
function al(t, e) {
  const n = [e[t].parent, t];
  let r = ol[e[t].parent][t],
    i = e[t].parent;
  for (; e[i].parent; )
    n.unshift(e[i].parent), (r = cl(ol[e[i].parent][i], r)), (i = e[i].parent);
  return (r.conversion = n), r;
}
(il.rgb.hsl = function(t) {
  const e = t[0] / 255,
    n = t[1] / 255,
    r = t[2] / 255,
    i = Math.min(e, n, r),
    o = Math.max(e, n, r),
    s = o - i;
  let u, c;
  o === i
    ? (u = 0)
    : e === o
    ? (u = (n - r) / s)
    : n === o
    ? (u = 2 + (r - e) / s)
    : r === o && (u = 4 + (e - n) / s),
    (u = Math.min(60 * u, 360)),
    u < 0 && (u += 360);
  const a = (i + o) / 2;
  return (
    (c = o === i ? 0 : a <= 0.5 ? s / (o + i) : s / (2 - o - i)),
    [u, 100 * c, 100 * a]
  );
}),
  (il.rgb.hsv = function(t) {
    let e, n, r, i, o;
    const s = t[0] / 255,
      u = t[1] / 255,
      c = t[2] / 255,
      a = Math.max(s, u, c),
      l = a - Math.min(s, u, c),
      h = function(t) {
        return (a - t) / 6 / l + 0.5;
      };
    return (
      0 === l
        ? ((i = 0), (o = 0))
        : ((o = l / a),
          (e = h(s)),
          (n = h(u)),
          (r = h(c)),
          s === a
            ? (i = r - n)
            : u === a
            ? (i = 1 / 3 + e - r)
            : c === a && (i = 2 / 3 + n - e),
          i < 0 ? (i += 1) : i > 1 && (i -= 1)),
      [360 * i, 100 * o, 100 * a]
    );
  }),
  (il.rgb.hwb = function(t) {
    const e = t[0],
      n = t[1];
    let r = t[2];
    const i = il.rgb.hsl(t)[0],
      o = (1 / 255) * Math.min(e, Math.min(n, r));
    return (
      (r = 1 - (1 / 255) * Math.max(e, Math.max(n, r))), [i, 100 * o, 100 * r]
    );
  }),
  (il.rgb.cmyk = function(t) {
    const e = t[0] / 255,
      n = t[1] / 255,
      r = t[2] / 255,
      i = Math.min(1 - e, 1 - n, 1 - r);
    return [
      100 * ((1 - e - i) / (1 - i) || 0),
      100 * ((1 - n - i) / (1 - i) || 0),
      100 * ((1 - r - i) / (1 - i) || 0),
      100 * i
    ];
  }),
  (il.rgb.keyword = function(t) {
    const e = rl[t];
    if (e) return e;
    let n,
      r = 1 / 0;
    for (const e of Object.keys(nl)) {
      const i = sl(t, nl[e]);
      i < r && ((r = i), (n = e));
    }
    return n;
  }),
  (il.keyword.rgb = function(t) {
    return nl[t];
  }),
  (il.rgb.xyz = function(t) {
    let e = t[0] / 255,
      n = t[1] / 255,
      r = t[2] / 255;
    return (
      (e = e > 0.04045 ? ((e + 0.055) / 1.055) ** 2.4 : e / 12.92),
      (n = n > 0.04045 ? ((n + 0.055) / 1.055) ** 2.4 : n / 12.92),
      (r = r > 0.04045 ? ((r + 0.055) / 1.055) ** 2.4 : r / 12.92),
      [
        100 * (0.4124 * e + 0.3576 * n + 0.1805 * r),
        100 * (0.2126 * e + 0.7152 * n + 0.0722 * r),
        100 * (0.0193 * e + 0.1192 * n + 0.9505 * r)
      ]
    );
  }),
  (il.rgb.lab = function(t) {
    const e = il.rgb.xyz(t);
    let n = e[0],
      r = e[1],
      i = e[2];
    return (
      (n /= 95.047),
      (r /= 100),
      (i /= 108.883),
      (n = n > 0.008856 ? n ** (1 / 3) : 7.787 * n + 16 / 116),
      (r = r > 0.008856 ? r ** (1 / 3) : 7.787 * r + 16 / 116),
      (i = i > 0.008856 ? i ** (1 / 3) : 7.787 * i + 16 / 116),
      [116 * r - 16, 500 * (n - r), 200 * (r - i)]
    );
  }),
  (il.hsl.rgb = function(t) {
    const e = t[0] / 360,
      n = t[1] / 100,
      r = t[2] / 100;
    let i, o, s;
    if (0 === n) return (s = 255 * r), [s, s, s];
    i = r < 0.5 ? r * (1 + n) : r + n - r * n;
    const u = 2 * r - i,
      c = [0, 0, 0];
    for (let t = 0; t < 3; t++)
      (o = e + (1 / 3) * -(t - 1)),
        o < 0 && o++,
        o > 1 && o--,
        (s =
          6 * o < 1
            ? u + 6 * (i - u) * o
            : 2 * o < 1
            ? i
            : 3 * o < 2
            ? u + (i - u) * (2 / 3 - o) * 6
            : u),
        (c[t] = 255 * s);
    return c;
  }),
  (il.hsl.hsv = function(t) {
    const e = t[0];
    let n = t[1] / 100,
      r = t[2] / 100,
      i = n;
    const o = Math.max(r, 0.01);
    return (
      (r *= 2),
      (n *= r <= 1 ? r : 2 - r),
      (i *= o <= 1 ? o : 2 - o),
      [
        e,
        100 * (0 === r ? (2 * i) / (o + i) : (2 * n) / (r + n)),
        100 * ((r + n) / 2)
      ]
    );
  }),
  (il.hsv.rgb = function(t) {
    const e = t[0] / 60,
      n = t[1] / 100;
    let r = t[2] / 100;
    const i = Math.floor(e) % 6,
      o = e - Math.floor(e),
      s = 255 * r * (1 - n),
      u = 255 * r * (1 - n * o),
      c = 255 * r * (1 - n * (1 - o));
    switch (((r *= 255), i)) {
      case 0:
        return [r, c, s];
      case 1:
        return [u, r, s];
      case 2:
        return [s, r, c];
      case 3:
        return [s, u, r];
      case 4:
        return [c, s, r];
      case 5:
        return [r, s, u];
    }
  }),
  (il.hsv.hsl = function(t) {
    const e = t[0],
      n = t[1] / 100,
      r = t[2] / 100,
      i = Math.max(r, 0.01);
    let o, s;
    s = (2 - n) * r;
    const u = (2 - n) * i;
    return (
      (o = n * i),
      (o /= u <= 1 ? u : 2 - u),
      (o = o || 0),
      (s /= 2),
      [e, 100 * o, 100 * s]
    );
  }),
  (il.hwb.rgb = function(t) {
    const e = t[0] / 360;
    let n = t[1] / 100,
      r = t[2] / 100;
    const i = n + r;
    let o;
    i > 1 && ((n /= i), (r /= i));
    const s = Math.floor(6 * e),
      u = 1 - r;
    (o = 6 * e - s), 0 != (1 & s) && (o = 1 - o);
    const c = n + o * (u - n);
    let a, l, h;
    switch (s) {
      default:
      case 6:
      case 0:
        (a = u), (l = c), (h = n);
        break;
      case 1:
        (a = c), (l = u), (h = n);
        break;
      case 2:
        (a = n), (l = u), (h = c);
        break;
      case 3:
        (a = n), (l = c), (h = u);
        break;
      case 4:
        (a = c), (l = n), (h = u);
        break;
      case 5:
        (a = u), (l = n), (h = c);
    }
    return [255 * a, 255 * l, 255 * h];
  }),
  (il.cmyk.rgb = function(t) {
    const e = t[0] / 100,
      n = t[1] / 100,
      r = t[2] / 100,
      i = t[3] / 100;
    return [
      255 * (1 - Math.min(1, e * (1 - i) + i)),
      255 * (1 - Math.min(1, n * (1 - i) + i)),
      255 * (1 - Math.min(1, r * (1 - i) + i))
    ];
  }),
  (il.xyz.rgb = function(t) {
    const e = t[0] / 100,
      n = t[1] / 100,
      r = t[2] / 100;
    let i, o, s;
    return (
      (i = 3.2406 * e + -1.5372 * n + -0.4986 * r),
      (o = -0.9689 * e + 1.8758 * n + 0.0415 * r),
      (s = 0.0557 * e + -0.204 * n + 1.057 * r),
      (i = i > 0.0031308 ? 1.055 * i ** (1 / 2.4) - 0.055 : 12.92 * i),
      (o = o > 0.0031308 ? 1.055 * o ** (1 / 2.4) - 0.055 : 12.92 * o),
      (s = s > 0.0031308 ? 1.055 * s ** (1 / 2.4) - 0.055 : 12.92 * s),
      (i = Math.min(Math.max(0, i), 1)),
      (o = Math.min(Math.max(0, o), 1)),
      (s = Math.min(Math.max(0, s), 1)),
      [255 * i, 255 * o, 255 * s]
    );
  }),
  (il.xyz.lab = function(t) {
    let e = t[0],
      n = t[1],
      r = t[2];
    return (
      (e /= 95.047),
      (n /= 100),
      (r /= 108.883),
      (e = e > 0.008856 ? e ** (1 / 3) : 7.787 * e + 16 / 116),
      (n = n > 0.008856 ? n ** (1 / 3) : 7.787 * n + 16 / 116),
      (r = r > 0.008856 ? r ** (1 / 3) : 7.787 * r + 16 / 116),
      [116 * n - 16, 500 * (e - n), 200 * (n - r)]
    );
  }),
  (il.lab.xyz = function(t) {
    let e, n, r;
    (n = (t[0] + 16) / 116), (e = t[1] / 500 + n), (r = n - t[2] / 200);
    const i = n ** 3,
      o = e ** 3,
      s = r ** 3;
    return (
      (n = i > 0.008856 ? i : (n - 16 / 116) / 7.787),
      (e = o > 0.008856 ? o : (e - 16 / 116) / 7.787),
      (r = s > 0.008856 ? s : (r - 16 / 116) / 7.787),
      (e *= 95.047),
      (n *= 100),
      (r *= 108.883),
      [e, n, r]
    );
  }),
  (il.lab.lch = function(t) {
    const e = t[0],
      n = t[1],
      r = t[2];
    let i;
    return (
      (i = (360 * Math.atan2(r, n)) / 2 / Math.PI),
      i < 0 && (i += 360),
      [e, Math.sqrt(n * n + r * r), i]
    );
  }),
  (il.lch.lab = function(t) {
    const e = t[0],
      n = t[1],
      r = (t[2] / 360) * 2 * Math.PI;
    return [e, n * Math.cos(r), n * Math.sin(r)];
  }),
  (il.rgb.ansi16 = function(t, e = null) {
    const [n, r, i] = t;
    let o = null === e ? il.rgb.hsv(t)[2] : e;
    if (((o = Math.round(o / 50)), 0 === o)) return 30;
    let s =
      30 +
      ((Math.round(i / 255) << 2) |
        (Math.round(r / 255) << 1) |
        Math.round(n / 255));
    return 2 === o && (s += 60), s;
  }),
  (il.hsv.ansi16 = function(t) {
    return il.rgb.ansi16(il.hsv.rgb(t), t[2]);
  }),
  (il.rgb.ansi256 = function(t) {
    const e = t[0],
      n = t[1],
      r = t[2];
    return e === n && n === r
      ? e < 8
        ? 16
        : e > 248
        ? 231
        : Math.round(((e - 8) / 247) * 24) + 232
      : 16 +
          36 * Math.round((e / 255) * 5) +
          6 * Math.round((n / 255) * 5) +
          Math.round((r / 255) * 5);
  }),
  (il.ansi16.rgb = function(t) {
    let e = t % 10;
    if (0 === e || 7 === e)
      return t > 50 && (e += 3.5), (e = (e / 10.5) * 255), [e, e, e];
    const n = 0.5 * (1 + ~~(t > 50));
    return [
      (1 & e) * n * 255,
      ((e >> 1) & 1) * n * 255,
      ((e >> 2) & 1) * n * 255
    ];
  }),
  (il.ansi256.rgb = function(t) {
    if (t >= 232) {
      const e = 10 * (t - 232) + 8;
      return [e, e, e];
    }
    let e;
    return (
      (t -= 16),
      [
        (Math.floor(t / 36) / 5) * 255,
        (Math.floor((e = t % 36) / 6) / 5) * 255,
        ((e % 6) / 5) * 255
      ]
    );
  }),
  (il.rgb.hex = function(t) {
    const e = (
      ((255 & Math.round(t[0])) << 16) +
      ((255 & Math.round(t[1])) << 8) +
      (255 & Math.round(t[2]))
    )
      .toString(16)
      .toUpperCase();
    return '000000'.substring(e.length) + e;
  }),
  (il.hex.rgb = function(t) {
    const e = t.toString(16).match(/[a-f0-9]{6}|[a-f0-9]{3}/i);
    if (!e) return [0, 0, 0];
    let n = e[0];
    3 === e[0].length &&
      (n = n
        .split('')
        .map(t => t + t)
        .join(''));
    const r = parseInt(n, 16);
    return [(r >> 16) & 255, (r >> 8) & 255, 255 & r];
  }),
  (il.rgb.hcg = function(t) {
    const e = t[0] / 255,
      n = t[1] / 255,
      r = t[2] / 255,
      i = Math.max(Math.max(e, n), r),
      o = Math.min(Math.min(e, n), r),
      s = i - o;
    let u, c;
    return (
      (u = s < 1 ? o / (1 - s) : 0),
      (c =
        s <= 0
          ? 0
          : i === e
          ? ((n - r) / s) % 6
          : i === n
          ? 2 + (r - e) / s
          : 4 + (e - n) / s),
      (c /= 6),
      (c %= 1),
      [360 * c, 100 * s, 100 * u]
    );
  }),
  (il.hsl.hcg = function(t) {
    const e = t[1] / 100,
      n = t[2] / 100,
      r = n < 0.5 ? 2 * e * n : 2 * e * (1 - n);
    let i = 0;
    return r < 1 && (i = (n - 0.5 * r) / (1 - r)), [t[0], 100 * r, 100 * i];
  }),
  (il.hsv.hcg = function(t) {
    const e = t[1] / 100,
      n = t[2] / 100,
      r = e * n;
    let i = 0;
    return r < 1 && (i = (n - r) / (1 - r)), [t[0], 100 * r, 100 * i];
  }),
  (il.hcg.rgb = function(t) {
    const e = t[0] / 360,
      n = t[1] / 100,
      r = t[2] / 100;
    if (0 === n) return [255 * r, 255 * r, 255 * r];
    const i = [0, 0, 0],
      o = (e % 1) * 6,
      s = o % 1,
      u = 1 - s;
    let c = 0;
    switch (Math.floor(o)) {
      case 0:
        (i[0] = 1), (i[1] = s), (i[2] = 0);
        break;
      case 1:
        (i[0] = u), (i[1] = 1), (i[2] = 0);
        break;
      case 2:
        (i[0] = 0), (i[1] = 1), (i[2] = s);
        break;
      case 3:
        (i[0] = 0), (i[1] = u), (i[2] = 1);
        break;
      case 4:
        (i[0] = s), (i[1] = 0), (i[2] = 1);
        break;
      default:
        (i[0] = 1), (i[1] = 0), (i[2] = u);
    }
    return (
      (c = (1 - n) * r),
      [255 * (n * i[0] + c), 255 * (n * i[1] + c), 255 * (n * i[2] + c)]
    );
  }),
  (il.hcg.hsv = function(t) {
    const e = t[1] / 100,
      n = e + (t[2] / 100) * (1 - e);
    let r = 0;
    return n > 0 && (r = e / n), [t[0], 100 * r, 100 * n];
  }),
  (il.hcg.hsl = function(t) {
    const e = t[1] / 100,
      n = (t[2] / 100) * (1 - e) + 0.5 * e;
    let r = 0;
    return (
      n > 0 && n < 0.5
        ? (r = e / (2 * n))
        : n >= 0.5 && n < 1 && (r = e / (2 * (1 - n))),
      [t[0], 100 * r, 100 * n]
    );
  }),
  (il.hcg.hwb = function(t) {
    const e = t[1] / 100,
      n = e + (t[2] / 100) * (1 - e);
    return [t[0], 100 * (n - e), 100 * (1 - n)];
  }),
  (il.hwb.hcg = function(t) {
    const e = t[1] / 100,
      n = 1 - t[2] / 100,
      r = n - e;
    let i = 0;
    return r < 1 && (i = (n - r) / (1 - r)), [t[0], 100 * r, 100 * i];
  }),
  (il.apple.rgb = function(t) {
    return [(t[0] / 65535) * 255, (t[1] / 65535) * 255, (t[2] / 65535) * 255];
  }),
  (il.rgb.apple = function(t) {
    return [(t[0] / 255) * 65535, (t[1] / 255) * 65535, (t[2] / 255) * 65535];
  }),
  (il.gray.rgb = function(t) {
    return [(t[0] / 100) * 255, (t[0] / 100) * 255, (t[0] / 100) * 255];
  }),
  (il.gray.hsl = function(t) {
    return [0, 0, t[0]];
  }),
  (il.gray.hsv = il.gray.hsl),
  (il.gray.hwb = function(t) {
    return [0, 100, t[0]];
  }),
  (il.gray.cmyk = function(t) {
    return [0, 0, 0, t[0]];
  }),
  (il.gray.lab = function(t) {
    return [t[0], 0, 0];
  }),
  (il.gray.hex = function(t) {
    const e = 255 & Math.round((t[0] / 100) * 255),
      n = ((e << 16) + (e << 8) + e).toString(16).toUpperCase();
    return '000000'.substring(n.length) + n;
  }),
  (il.rgb.gray = function(t) {
    return [((t[0] + t[1] + t[2]) / 3 / 255) * 100];
  });
const ll = {};
Object.keys(ol).forEach(t => {
  (ll[t] = {}),
    Object.defineProperty(ll[t], 'channels', { value: ol[t].channels }),
    Object.defineProperty(ll[t], 'labels', { value: ol[t].labels });
  const e = (function(t) {
    const e = ul(t),
      n = {},
      r = Object.keys(e);
    for (let t = r.length, i = 0; i < t; i++) {
      const t = r[i];
      null !== e[t].parent && (n[t] = al(t, e));
    }
    return n;
  })(t);
  Object.keys(e).forEach(n => {
    const r = e[n];
    (ll[t][n] = (function(t) {
      const e = function(...e) {
        const n = e[0];
        if (null == n) return n;
        n.length > 1 && (e = n);
        const r = t(e);
        if ('object' == typeof r)
          for (let t = r.length, e = 0; e < t; e++) r[e] = Math.round(r[e]);
        return r;
      };
      return 'conversion' in t && (e.conversion = t.conversion), e;
    })(r)),
      (ll[t][n].raw = (function(t) {
        const e = function(...e) {
          const n = e[0];
          return null == n ? n : (n.length > 1 && (e = n), t(e));
        };
        return 'conversion' in t && (e.conversion = t.conversion), e;
      })(r));
  });
});
var hl = ll,
  fl = F(function(t) {
    const e = (t, e) => (...n) => {
        return `[${t(...n) + e}m`;
      },
      n = (t, e) => (...n) => {
        const r = t(...n);
        return `[${38 + e};5;${r}m`;
      },
      r = (t, e) => (...n) => {
        const r = t(...n);
        return `[${38 + e};2;${r[0]};${r[1]};${r[2]}m`;
      },
      i = t => t,
      o = (t, e, n) => [t, e, n],
      s = (t, e, n) => {
        Object.defineProperty(t, e, {
          get: () => {
            const r = n();
            return (
              Object.defineProperty(t, e, {
                value: r,
                enumerable: !0,
                configurable: !0
              }),
              r
            );
          },
          enumerable: !0,
          configurable: !0
        });
      };
    let u;
    const c = (t, e, n, r) => {
      void 0 === u && (u = hl);
      const i = r ? 10 : 0,
        o = {};
      for (const [r, s] of Object.entries(u)) {
        const u = 'ansi16' === r ? 'ansi' : r;
        r === e
          ? (o[u] = t(n, i))
          : 'object' == typeof s && (o[u] = t(s[e], i));
      }
      return o;
    };
    Object.defineProperty(t, 'exports', {
      enumerable: !0,
      get: function() {
        const t = new Map(),
          u = {
            modifier: {
              reset: [0, 0],
              bold: [1, 22],
              dim: [2, 22],
              italic: [3, 23],
              underline: [4, 24],
              inverse: [7, 27],
              hidden: [8, 28],
              strikethrough: [9, 29]
            },
            color: {
              black: [30, 39],
              red: [31, 39],
              green: [32, 39],
              yellow: [33, 39],
              blue: [34, 39],
              magenta: [35, 39],
              cyan: [36, 39],
              white: [37, 39],
              blackBright: [90, 39],
              redBright: [91, 39],
              greenBright: [92, 39],
              yellowBright: [93, 39],
              blueBright: [94, 39],
              magentaBright: [95, 39],
              cyanBright: [96, 39],
              whiteBright: [97, 39]
            },
            bgColor: {
              bgBlack: [40, 49],
              bgRed: [41, 49],
              bgGreen: [42, 49],
              bgYellow: [43, 49],
              bgBlue: [44, 49],
              bgMagenta: [45, 49],
              bgCyan: [46, 49],
              bgWhite: [47, 49],
              bgBlackBright: [100, 49],
              bgRedBright: [101, 49],
              bgGreenBright: [102, 49],
              bgYellowBright: [103, 49],
              bgBlueBright: [104, 49],
              bgMagentaBright: [105, 49],
              bgCyanBright: [106, 49],
              bgWhiteBright: [107, 49]
            }
          };
        (u.color.gray = u.color.blackBright),
          (u.bgColor.bgGray = u.bgColor.bgBlackBright),
          (u.color.grey = u.color.blackBright),
          (u.bgColor.bgGrey = u.bgColor.bgBlackBright);
        for (const [e, n] of Object.entries(u)) {
          for (const [e, r] of Object.entries(n))
            (u[e] = { open: `[${r[0]}m`, close: `[${r[1]}m` }),
              (n[e] = u[e]),
              t.set(r[0], r[1]);
          Object.defineProperty(u, e, { value: n, enumerable: !1 }),
            Object.defineProperty(u, 'codes', { value: t, enumerable: !1 });
        }
        return (
          (u.color.close = '[39m'),
          (u.bgColor.close = '[49m'),
          s(u.color, 'ansi', () => c(e, 'ansi16', i, !1)),
          s(u.color, 'ansi256', () => c(n, 'ansi256', i, !1)),
          s(u.color, 'ansi16m', () => c(r, 'rgb', o, !1)),
          s(u.bgColor, 'ansi', () => c(e, 'ansi16', i, !0)),
          s(u.bgColor, 'ansi256', () => c(n, 'ansi256', i, !0)),
          s(u.bgColor, 'ansi16m', () => c(r, 'rgb', o, !0)),
          u
        );
      }
    });
  }),
  pl = (t, e = process.argv) => {
    const n = t.startsWith('-') ? '' : 1 === t.length ? '-' : '--',
      r = e.indexOf(n + t),
      i = e.indexOf('--');
    return -1 !== r && (-1 === i || r < i);
  };
const { env: dl } = process;
let bl;
function vl(t) {
  return 0 !== t && { level: t, hasBasic: !0, has256: t >= 2, has16m: t >= 3 };
}
function yl(t, e) {
  if (0 === bl) return 0;
  if (pl('color=16m') || pl('color=full') || pl('color=truecolor')) return 3;
  if (pl('color=256')) return 2;
  if (t && !e && void 0 === bl) return 0;
  const n = bl || 0;
  if ('dumb' === dl.TERM) return n;
  if ('win32' === process.platform) {
    const t = s.release().split('.');
    return Number(t[0]) >= 10 && Number(t[2]) >= 10586
      ? Number(t[2]) >= 14931
        ? 3
        : 2
      : 1;
  }
  if ('CI' in dl)
    return ['TRAVIS', 'CIRCLECI', 'APPVEYOR', 'GITLAB_CI'].some(t => t in dl) ||
      'codeship' === dl.CI_NAME
      ? 1
      : n;
  if ('TEAMCITY_VERSION' in dl)
    return /^(9\.(0*[1-9]\d*)\.|\d{2,}\.)/.test(dl.TEAMCITY_VERSION) ? 1 : 0;
  if ('GITHUB_ACTIONS' in dl) return 1;
  if ('truecolor' === dl.COLORTERM) return 3;
  if ('TERM_PROGRAM' in dl) {
    const t = parseInt((dl.TERM_PROGRAM_VERSION || '').split('.')[0], 10);
    switch (dl.TERM_PROGRAM) {
      case 'iTerm.app':
        return t >= 3 ? 3 : 2;
      case 'Apple_Terminal':
        return 2;
    }
  }
  return /-256(color)?$/i.test(dl.TERM)
    ? 2
    : /^screen|^xterm|^vt100|^vt220|^rxvt|color|ansi|cygwin|linux/i.test(
        dl.TERM
      )
    ? 1
    : 'COLORTERM' in dl
    ? 1
    : n;
}
pl('no-color') || pl('no-colors') || pl('color=false') || pl('color=never')
  ? (bl = 0)
  : (pl('color') || pl('colors') || pl('color=true') || pl('color=always')) &&
    (bl = 1),
  'FORCE_COLOR' in dl &&
    (bl =
      'true' === dl.FORCE_COLOR
        ? 1
        : 'false' === dl.FORCE_COLOR
        ? 0
        : 0 === dl.FORCE_COLOR.length
        ? 1
        : Math.min(parseInt(dl.FORCE_COLOR, 10), 3));
var gl = {
  supportsColor: function(t) {
    return vl(yl(t, t && t.isTTY));
  },
  stdout: vl(yl(!0, l.isatty(1))),
  stderr: vl(yl(!0, l.isatty(2)))
};
var ml = {
  stringReplaceAll: (t, e, n) => {
    let r = t.indexOf(e);
    if (-1 === r) return t;
    const i = e.length;
    let o = 0,
      s = '';
    do {
      (s += t.substr(o, r - o) + e + n), (o = r + i), (r = t.indexOf(e, o));
    } while (-1 !== r);
    return (s += t.substr(o)), s;
  },
  stringEncaseCRLFWithFirstIndex: (t, e, n, r) => {
    let i = 0,
      o = '';
    do {
      const s = '\r' === t[r - 1];
      (o += t.substr(i, (s ? r - 1 : r) - i) + e + (s ? '\r\n' : '\n') + n),
        (i = r + 1),
        (r = t.indexOf('\n', i));
    } while (-1 !== r);
    return (o += t.substr(i)), o;
  }
};
const Dl = /(?:\\(u(?:[a-f\d]{4}|\{[a-f\d]{1,6}\})|x[a-f\d]{2}|.))|(?:\{(~)?(\w+(?:\([^)]*\))?(?:\.\w+(?:\([^)]*\))?)*)(?:[ \t]|(?=\r?\n)))|(\})|((?:.|[\r\n\f])+?)/gi,
  wl = /(?:^|\.)(\w+)(?:\(([^)]*)\))?/g,
  _l = /^(['"])((?:\\.|(?!\1)[^\\])*)\1$/,
  Cl = /\\(u(?:[a-f\d]{4}|\{[a-f\d]{1,6}\})|x[a-f\d]{2}|.)|([^\\])/gi,
  xl = new Map([
    ['n', '\n'],
    ['r', '\r'],
    ['t', '\t'],
    ['b', '\b'],
    ['f', '\f'],
    ['v', '\v'],
    ['0', '\0'],
    ['\\', '\\'],
    ['e', ''],
    ['a', '']
  ]);
function El(t) {
  const e = 'u' === t[0],
    n = '{' === t[1];
  return (e && !n && 5 === t.length) || ('x' === t[0] && 3 === t.length)
    ? String.fromCharCode(parseInt(t.slice(1), 16))
    : e && n
    ? String.fromCodePoint(parseInt(t.slice(2, -1), 16))
    : xl.get(t) || t;
}
function Fl(t, e) {
  const n = [],
    r = e.trim().split(/\s*,\s*/g);
  let i;
  for (const e of r) {
    const r = Number(e);
    if (Number.isNaN(r)) {
      if (!(i = e.match(_l)))
        throw new Error(
          `Invalid Chalk template style argument: ${e} (in style '${t}')`
        );
      n.push(i[2].replace(Cl, (t, e, n) => (e ? El(e) : n)));
    } else n.push(r);
  }
  return n;
}
function Sl(t) {
  wl.lastIndex = 0;
  const e = [];
  let n;
  for (; null !== (n = wl.exec(t)); ) {
    const t = n[1];
    if (n[2]) {
      const r = Fl(t, n[2]);
      e.push([t].concat(r));
    } else e.push([t]);
  }
  return e;
}
function Ol(t, e) {
  const n = {};
  for (const t of e)
    for (const e of t.styles) n[e[0]] = t.inverse ? null : e.slice(1);
  let r = t;
  for (const [t, e] of Object.entries(n))
    if (Array.isArray(e)) {
      if (!(t in r)) throw new Error(`Unknown Chalk style: ${t}`);
      r = e.length > 0 ? r[t](...e) : r[t];
    }
  return r;
}
var kl = (t, e) => {
  const n = [],
    r = [];
  let i = [];
  if (
    (e.replace(Dl, (e, o, s, u, c, a) => {
      if (o) i.push(El(o));
      else if (u) {
        const e = i.join('');
        (i = []),
          r.push(0 === n.length ? e : Ol(t, n)(e)),
          n.push({ inverse: s, styles: Sl(u) });
      } else if (c) {
        if (0 === n.length)
          throw new Error('Found extraneous } in Chalk template literal');
        r.push(Ol(t, n)(i.join(''))), (i = []), n.pop();
      } else i.push(a);
    }),
    r.push(i.join('')),
    n.length > 0)
  ) {
    const t = `Chalk template literal is missing ${n.length} closing bracket${
      1 === n.length ? '' : 's'
    } (\`}\`)`;
    throw new Error(t);
  }
  return r.join('');
};
const { stdout: Al, stderr: jl } = gl,
  { stringReplaceAll: Bl, stringEncaseCRLFWithFirstIndex: Il } = ml,
  Tl = ['ansi', 'ansi', 'ansi256', 'ansi16m'],
  Ml = Object.create(null);
class Pl {
  constructor(t) {
    return Nl(t);
  }
}
const Nl = t => {
  const e = {};
  return (
    ((t, e = {}) => {
      if (e.level > 3 || e.level < 0)
        throw new Error('The `level` option should be an integer from 0 to 3');
      const n = Al ? Al.level : 0;
      t.level = void 0 === e.level ? n : e.level;
    })(e, t),
    (e.template = (...t) => $l(e.template, ...t)),
    Object.setPrototypeOf(e, Rl.prototype),
    Object.setPrototypeOf(e.template, e),
    (e.template.constructor = () => {
      throw new Error(
        '`chalk.constructor()` is deprecated. Use `new chalk.Instance()` instead.'
      );
    }),
    (e.template.Instance = Pl),
    e.template
  );
};
function Rl(t) {
  return Nl(t);
}
for (const [t, e] of Object.entries(fl))
  Ml[t] = {
    get() {
      const n = zl(this, Ul(e.open, e.close, this._styler), this._isEmpty);
      return Object.defineProperty(this, t, { value: n }), n;
    }
  };
Ml.visible = {
  get() {
    const t = zl(this, this._styler, !0);
    return Object.defineProperty(this, 'visible', { value: t }), t;
  }
};
const Ll = ['rgb', 'hex', 'keyword', 'hsl', 'hsv', 'hwb', 'ansi', 'ansi256'];
for (const t of Ll)
  Ml[t] = {
    get() {
      const { level: e } = this;
      return function(...n) {
        const r = Ul(fl.color[Tl[e]][t](...n), fl.color.close, this._styler);
        return zl(this, r, this._isEmpty);
      };
    }
  };
for (const t of Ll) {
  Ml['bg' + t[0].toUpperCase() + t.slice(1)] = {
    get() {
      const { level: e } = this;
      return function(...n) {
        const r = Ul(
          fl.bgColor[Tl[e]][t](...n),
          fl.bgColor.close,
          this._styler
        );
        return zl(this, r, this._isEmpty);
      };
    }
  };
}
const Vl = Object.defineProperties(() => {}, {
    ...Ml,
    level: {
      enumerable: !0,
      get() {
        return this._generator.level;
      },
      set(t) {
        this._generator.level = t;
      }
    }
  }),
  Ul = (t, e, n) => {
    let r, i;
    return (
      void 0 === n
        ? ((r = t), (i = e))
        : ((r = n.openAll + t), (i = e + n.closeAll)),
      { open: t, close: e, openAll: r, closeAll: i, parent: n }
    );
  },
  zl = (t, e, n) => {
    const r = (...t) => ql(r, 1 === t.length ? '' + t[0] : t.join(' '));
    return (
      (r.__proto__ = Vl),
      (r._generator = t),
      (r._styler = e),
      (r._isEmpty = n),
      r
    );
  },
  ql = (t, e) => {
    if (t.level <= 0 || !e) return t._isEmpty ? '' : e;
    let n = t._styler;
    if (void 0 === n) return e;
    const { openAll: r, closeAll: i } = n;
    if (-1 !== e.indexOf(''))
      for (; void 0 !== n; ) (e = Bl(e, n.close, n.open)), (n = n.parent);
    const o = e.indexOf('\n');
    return -1 !== o && (e = Il(e, i, r, o)), r + e + i;
  };
let Wl;
const $l = (t, ...e) => {
  const [n] = e;
  if (!Array.isArray(n)) return e.join(' ');
  const r = e.slice(1),
    i = [n.raw[0]];
  for (let t = 1; t < n.length; t++)
    i.push(String(r[t - 1]).replace(/[{}\\]/g, '\\$&'), String(n.raw[t]));
  return void 0 === Wl && (Wl = kl), Wl(t, i.join(''));
};
Object.defineProperties(Rl.prototype, Ml);
const Kl = Rl();
(Kl.supportsColor = Al),
  (Kl.stderr = Rl({ level: jl ? jl.level : 0 })),
  (Kl.stderr.supportsColor = jl),
  (Kl.Level = {
    None: 0,
    Basic: 1,
    Ansi256: 2,
    TrueColor: 3,
    0: 'None',
    1: 'Basic',
    2: 'Ansi256',
    3: 'TrueColor'
  });
var Gl = Kl,
  Yl = F(function(t) {
    var e = {};
    t.exports = e;
    var n = {
      reset: [0, 0],
      bold: [1, 22],
      dim: [2, 22],
      italic: [3, 23],
      underline: [4, 24],
      inverse: [7, 27],
      hidden: [8, 28],
      strikethrough: [9, 29],
      black: [30, 39],
      red: [31, 39],
      green: [32, 39],
      yellow: [33, 39],
      blue: [34, 39],
      magenta: [35, 39],
      cyan: [36, 39],
      white: [37, 39],
      gray: [90, 39],
      grey: [90, 39],
      bgBlack: [40, 49],
      bgRed: [41, 49],
      bgGreen: [42, 49],
      bgYellow: [43, 49],
      bgBlue: [44, 49],
      bgMagenta: [45, 49],
      bgCyan: [46, 49],
      bgWhite: [47, 49],
      blackBG: [40, 49],
      redBG: [41, 49],
      greenBG: [42, 49],
      yellowBG: [43, 49],
      blueBG: [44, 49],
      magentaBG: [45, 49],
      cyanBG: [46, 49],
      whiteBG: [47, 49]
    };
    Object.keys(n).forEach(function(t) {
      var r = n[t],
        i = (e[t] = []);
      (i.open = '[' + r[0] + 'm'), (i.close = '[' + r[1] + 'm');
    });
  }),
  Hl = process.argv,
  Ql = !(
    -1 !== Hl.indexOf('--no-color') ||
    -1 !== Hl.indexOf('--color=false') ||
    (-1 === Hl.indexOf('--color') &&
      -1 === Hl.indexOf('--color=true') &&
      -1 === Hl.indexOf('--color=always') &&
      ((process.stdout && !process.stdout.isTTY) ||
        ('win32' !== process.platform &&
          !(
            'COLORTERM' in process.env ||
            ('dumb' !== process.env.TERM &&
              /^screen|^xterm|^vt100|color|ansi|cygwin|linux/i.test(
                process.env.TERM
              ))
          ))))
  ),
  Jl = F(function(t) {
    t.exports = function(t, e) {
      var n = '';
      t = (t = t || 'Run the trap, drop the bass').split('');
      var r = {
        a: ['@', 'Ą', 'Ⱥ', 'Ʌ', 'Δ', 'Λ', 'Д'],
        b: ['ß', 'Ɓ', 'Ƀ', 'ɮ', 'β', '฿'],
        c: ['©', 'Ȼ', 'Ͼ'],
        d: ['Ð', 'Ɗ', 'Ԁ', 'ԁ', 'Ԃ', 'ԃ'],
        e: ['Ë', 'ĕ', 'Ǝ', 'ɘ', 'Σ', 'ξ', 'Ҽ', '੬'],
        f: ['Ӻ'],
        g: ['ɢ'],
        h: ['Ħ', 'ƕ', 'Ң', 'Һ', 'Ӈ', 'Ԋ'],
        i: ['༏'],
        j: ['Ĵ'],
        k: ['ĸ', 'Ҡ', 'Ӄ', 'Ԟ'],
        l: ['Ĺ'],
        m: ['ʍ', 'Ӎ', 'ӎ', 'Ԡ', 'ԡ', '൩'],
        n: ['Ñ', 'ŋ', 'Ɲ', 'Ͷ', 'Π', 'Ҋ'],
        o: ['Ø', 'õ', 'ø', 'Ǿ', 'ʘ', 'Ѻ', 'ם', '۝', '๏'],
        p: ['Ƿ', 'Ҏ'],
        q: ['্'],
        r: ['®', 'Ʀ', 'Ȑ', 'Ɍ', 'ʀ', 'Я'],
        s: ['§', 'Ϟ', 'ϟ', 'Ϩ'],
        t: ['Ł', 'Ŧ', 'ͳ'],
        u: ['Ʊ', 'Ս'],
        v: ['ט'],
        w: ['Ш', 'Ѡ', 'Ѽ', '൰'],
        x: ['Ҳ', 'Ӿ', 'Ӽ', 'ӽ'],
        y: ['¥', 'Ұ', 'Ӌ'],
        z: ['Ƶ', 'ɀ']
      };
      return (
        t.forEach(function(t) {
          t = t.toLowerCase();
          var e = r[t] || [' '],
            i = Math.floor(Math.random() * e.length);
          n += void 0 !== r[t] ? r[t][i] : t;
        }),
        n
      );
    };
  }),
  Zl = F(function(t) {
    t.exports = function(t, e) {
      t = t || '   he is here   ';
      var n = {
          up: [
            '̍',
            '̎',
            '̄',
            '̅',
            '̿',
            '̑',
            '̆',
            '̐',
            '͒',
            '͗',
            '͑',
            '̇',
            '̈',
            '̊',
            '͂',
            '̓',
            '̈',
            '͊',
            '͋',
            '͌',
            '̃',
            '̂',
            '̌',
            '͐',
            '̀',
            '́',
            '̋',
            '̏',
            '̒',
            '̓',
            '̔',
            '̽',
            '̉',
            'ͣ',
            'ͤ',
            'ͥ',
            'ͦ',
            'ͧ',
            'ͨ',
            'ͩ',
            'ͪ',
            'ͫ',
            'ͬ',
            'ͭ',
            'ͮ',
            'ͯ',
            '̾',
            '͛',
            '͆',
            '̚'
          ],
          down: [
            '̖',
            '̗',
            '̘',
            '̙',
            '̜',
            '̝',
            '̞',
            '̟',
            '̠',
            '̤',
            '̥',
            '̦',
            '̩',
            '̪',
            '̫',
            '̬',
            '̭',
            '̮',
            '̯',
            '̰',
            '̱',
            '̲',
            '̳',
            '̹',
            '̺',
            '̻',
            '̼',
            'ͅ',
            '͇',
            '͈',
            '͉',
            '͍',
            '͎',
            '͓',
            '͔',
            '͕',
            '͖',
            '͙',
            '͚',
            '̣'
          ],
          mid: [
            '̕',
            '̛',
            '̀',
            '́',
            '͘',
            '̡',
            '̢',
            '̧',
            '̨',
            '̴',
            '̵',
            '̶',
            '͜',
            '͝',
            '͞',
            '͟',
            '͠',
            '͢',
            '̸',
            '̷',
            '͡',
            ' ҉'
          ]
        },
        r = [].concat(n.up, n.down, n.mid);
      function i(t) {
        return Math.floor(Math.random() * t);
      }
      function o(t) {
        var e = !1;
        return (
          r.filter(function(n) {
            e = n === t;
          }),
          e
        );
      }
      return (function(t, e) {
        var r,
          s,
          u = '';
        for (s in (((e = e || {}).up = e.up || !0),
        (e.mid = e.mid || !0),
        (e.down = e.down || !0),
        (e.size = e.size || 'maxi'),
        (t = t.split(''))))
          if (!o(s)) {
            switch (((u += t[s]), (r = { up: 0, down: 0, mid: 0 }), e.size)) {
              case 'mini':
                (r.up = i(8)), (r.min = i(2)), (r.down = i(8));
                break;
              case 'maxi':
                (r.up = i(16) + 3), (r.min = i(4) + 1), (r.down = i(64) + 3);
                break;
              default:
                (r.up = i(8) + 1), (r.mid = i(6) / 2), (r.down = i(8) + 1);
            }
            var c = ['up', 'mid', 'down'];
            for (var a in c)
              for (var l = c[a], h = 0; h <= r[l]; h++)
                e[l] && (u += n[l][i(n[l].length)]);
          }
        return u;
      })(t);
    };
  }),
  Xl = F(function(t) {
    t.exports = function(t, e, n) {
      if (' ' === t) return t;
      switch (e % 3) {
        case 0:
          return rh.red(t);
        case 1:
          return rh.white(t);
        case 2:
          return rh.blue(t);
      }
    };
  }),
  th = F(function(t) {
    t.exports = function(t, e, n) {
      return e % 2 == 0 ? t : rh.inverse(t);
    };
  }),
  eh = F(function(t) {
    var e;
    t.exports =
      ((e = ['red', 'yellow', 'green', 'blue', 'magenta']),
      function(t, n, r) {
        return ' ' === t ? t : rh[e[n++ % e.length]](t);
      });
  }),
  nh = F(function(t) {
    var e;
    t.exports =
      ((e = [
        'underline',
        'inverse',
        'grey',
        'yellow',
        'red',
        'green',
        'blue',
        'white',
        'cyan',
        'magenta'
      ]),
      function(t, n, r) {
        return ' ' === t
          ? t
          : rh[e[Math.round(Math.random() * (e.length - 1))]](t);
      });
  }),
  rh = F(function(t) {
    var e = {};
    (t.exports = e), (e.themes = {});
    var n = (e.styles = Yl),
      r = Object.defineProperties;
    (e.supportsColor = Ql),
      void 0 === e.enabled && (e.enabled = e.supportsColor),
      (e.stripColors = e.strip = function(t) {
        return ('' + t).replace(/\x1B\[\d+m/g, '');
      });
    e.stylize = function(t, e) {
      return n[e].open + t + n[e].close;
    };
    var i = /[|\\{}()[\]^$+*?.]/g;
    function o(t) {
      var e = function t() {
        return a.apply(t, arguments);
      };
      return (e._styles = t), (e.__proto__ = c), e;
    }
    var s,
      u =
        ((s = {}),
        (n.grey = n.gray),
        Object.keys(n).forEach(function(t) {
          (n[t].closeRe = new RegExp(
            (function(t) {
              if ('string' != typeof t)
                throw new TypeError('Expected a string');
              return t.replace(i, '\\$&');
            })(n[t].close),
            'g'
          )),
            (s[t] = {
              get: function() {
                return o(this._styles.concat(t));
              }
            });
        }),
        s),
      c = r(function() {}, u);
    function a() {
      var t = arguments,
        r = t.length,
        i = 0 !== r && String(arguments[0]);
      if (r > 1) for (var o = 1; o < r; o++) i += ' ' + t[o];
      if (!e.enabled || !i) return i;
      for (var s = this._styles, u = s.length; u--; ) {
        var c = n[s[u]];
        i = c.open + i.replace(c.closeRe, c.open) + c.close;
      }
      return i;
    }
    function l(t) {
      for (var n in t)
        !(function(n) {
          e[n] = function(r) {
            return e[t[n]](r);
          };
        })(n);
    }
    e.setTheme = function(t) {
      if ('string' == typeof t)
        try {
          return (e.themes[t] = x()), l(e.themes[t]), e.themes[t];
        } catch (t) {
          return console.log(t), t;
        }
      else l(t);
    };
    var h = function(t, e) {
      var n = e.split('');
      return (n = n.map(t)).join('');
    };
    for (var f in ((e.trap = Jl),
    (e.zalgo = Zl),
    (e.maps = {}),
    (e.maps.america = Xl),
    (e.maps.zebra = th),
    (e.maps.rainbow = eh),
    (e.maps.random = nh),
    e.maps))
      !(function(t) {
        e[t] = function(n) {
          return h(e.maps[t], n);
        };
      })(f);
    r(
      e,
      (function() {
        var t = {};
        return (
          Object.keys(u).forEach(function(e) {
            t[e] = {
              get: function() {
                return o([e]);
              }
            };
          }),
          t
        );
      })()
    );
  }),
  ih = F(function(t) {
    t.exports = rh;
  });
var oh = {
    repeat: function(t, e) {
      return Array(e + 1).join(t);
    },
    pad: function(t, e, n, r) {
      if (e + 1 >= t.length)
        switch (r) {
          case 'left':
            t = Array(e + 1 - t.length).join(n) + t;
            break;
          case 'both':
            var i = Math.ceil((padlen = e - t.length) / 2),
              o = padlen - i;
            t = Array(o + 1).join(n) + t + Array(i + 1).join(n);
            break;
          default:
            t += Array(e + 1 - t.length).join(n);
        }
      return t;
    },
    truncate: function(t, e, n) {
      return (n = n || '…'), t.length >= e ? t.substr(0, e - n.length) + n : t;
    },
    options: function t(e, n) {
      for (var r in n)
        n[r] && n[r].constructor && n[r].constructor === Object
          ? ((e[r] = e[r] || {}), t(e[r], n[r]))
          : (e[r] = n[r]);
      return e;
    },
    strlen: function(t) {
      return ('' + t)
        .replace(/\u001b\[(?:\d*;){0,5}\d*m/g, '')
        .split('\n')
        .reduce(function(t, e) {
          return e.length > t ? e.length : t;
        }, 0);
    }
  },
  sh = oh.repeat,
  uh = oh.truncate,
  ch = oh.pad;
function ah(t) {
  this.options = oh.options(
    {
      chars: {
        top: '─',
        'top-mid': '┬',
        'top-left': '┌',
        'top-right': '┐',
        bottom: '─',
        'bottom-mid': '┴',
        'bottom-left': '└',
        'bottom-right': '┘',
        left: '│',
        'left-mid': '├',
        mid: '─',
        'mid-mid': '┼',
        right: '│',
        'right-mid': '┤',
        middle: '│'
      },
      truncate: '…',
      colWidths: [],
      colAligns: [],
      style: {
        'padding-left': 1,
        'padding-right': 1,
        head: ['red'],
        border: ['grey'],
        compact: !1
      },
      head: []
    },
    t
  );
}
(ah.prototype.__proto__ = Array.prototype),
  ah.prototype.__defineGetter__('width', function() {
    var t = this.toString().split('\n');
    return t.length ? t[0].length : 0;
  }),
  (ah.prototype.toString = function() {
    var t = '',
      e = this.options,
      n = e.style,
      r = e.head,
      i = e.chars,
      o = e.truncate,
      s = e.colWidths || new Array(this.head.length),
      u = 0;
    if (!r.length && !this.length) return '';
    if (!s.length) {
      var c = this.slice(0);
      r.length && (c = c.concat([r])),
        c.forEach(function(t) {
          if ('object' == typeof t && t.length) a(t);
          else {
            var e = Object.keys(t)[0],
              n = t[e];
            (s[0] = Math.max(s[0] || 0, l(e) || 0)),
              'object' == typeof n && n.length
                ? a(n, 1)
                : (s[1] = Math.max(s[1] || 0, l(n) || 0));
          }
        });
    }
    function a(t, e) {
      e = e || 0;
      t.forEach(function(t, n) {
        s[n + e] = Math.max(s[n + e] || 0, l(t) || 0);
      });
    }
    function l(t) {
      return 'object' == typeof t && null != t.width
        ? t.width
        : ('object' == typeof t ? oh.strlen(t.text) : oh.strlen(t)) +
            (n['padding-left'] || 0) +
            (n['padding-right'] || 0);
    }
    function h(t, n, r, i) {
      var o = 0;
      t = n + sh(t, u - 2) + r;
      return (
        s.forEach(function(e, n) {
          n != s.length - 1 &&
            ((o += e + 1), (t = t.substr(0, o) + i + t.substr(o + 1)));
        }),
        d(e.style.border, t)
      );
    }
    function f() {
      var e = h(
        i.top,
        i['top-left'] || i.top,
        i['top-right'] || i.top,
        i['top-mid']
      );
      e && (t += e + '\n');
    }
    function p(t, n) {
      var r = [],
        o = 0;
      if (!Array.isArray(t) && 'object' == typeof t) {
        var s = Object.keys(t)[0],
          u = t[s],
          c = !0;
        Array.isArray(u) ? (t = u).unshift(s) : (t = [s, u]);
      }
      t.forEach(function(t, e) {
        var n = t
            .toString()
            .split('\n')
            .reduce(function(t, n) {
              return t.push(b(n, e)), t;
            }, []),
          i = n.length;
        i > o && (o = i), r.push({ contents: n, height: i });
      });
      var a = new Array(o);
      r.forEach(function(t, r) {
        t.contents.forEach(function(t, i) {
          a[i] || (a[i] = []),
            (n || (c && 0 === r && e.style.head)) && (t = d(e.style.head, t)),
            a[i].push(t);
        });
        for (var i = t.height, s = o; i < s; i++)
          a[i] || (a[i] = []), a[i].push(b('', r));
      });
      var l = '';
      return (
        a.forEach(function(t, n) {
          l.length > 0 && (l += '\n' + d(e.style.border, i.left)),
            (l +=
              t.join(d(e.style.border, i.middle)) + d(e.style.border, i.right));
        }),
        d(e.style.border, i.left) + l
      );
    }
    function d(t, e) {
      return e
        ? (t.forEach(function(t) {
            e = ih[t](e);
          }),
          e)
        : '';
    }
    function b(t, r) {
      t = String('object' == typeof t && t.text ? t.text : t);
      var i = oh.strlen(t),
        u = s[r] - (n['padding-left'] || 0) - (n['padding-right'] || 0),
        c = e.colAligns[r] || 'left';
      return (
        sh(' ', n['padding-left'] || 0) +
        (i == u
          ? t
          : i < u
          ? ch(
              t,
              u + (t.length - i),
              ' ',
              'left' == c ? 'right' : 'middle' == c ? 'both' : 'left'
            )
          : o
          ? uh(t, u, o)
          : t) +
        sh(' ', n['padding-right'] || 0)
      );
    }
    (u =
      (1 == s.length
        ? s[0]
        : s.reduce(function(t, e) {
            return t + e;
          })) +
      s.length +
      1),
      r.length && (f(), (t += p(r, n.head) + '\n')),
      this.length &&
        this.forEach(function(e, o) {
          if (r.length || 0 != o) {
            if (!n.compact || o < !!r.length || 0 == e.length) {
              var s = h(i.mid, i['left-mid'], i['right-mid'], i['mid-mid']);
              s && (t += s + '\n');
            }
          } else f();
          (e.hasOwnProperty('length') && !e.length) || (t += p(e) + '\n');
        });
    var v = h(
      i.bottom,
      i['bottom-left'] || i.bottom,
      i['bottom-right'] || i.bottom,
      i['bottom-mid']
    );
    return v ? (t += v) : (t = t.slice(0, -1)), t;
  });
var lh = ah;
lh.version = '0.0.1';
var hh = console.log,
  fh = function(t) {
    return hh(Gl.red.underline('Error'), t);
  },
  ph = function(t) {
    return hh(Gl.cyan.underline('Info'), t);
  },
  dh = function(t) {
    return hh(Gl.green.underline('OK'), t);
  },
  bh = function(t, e) {
    var n = new lh({ head: t });
    n.push.apply(n, e), hh(n.toString());
  },
  vh = r(__dirname, 'userConfig.json'),
  yh = { language: 'en', mode: 'driving', units: 'metric' };
function gh() {
  i.existsSync(vh) ||
    (ph('Initializing default user configuration'),
    i.writeFileSync(vh, JSON.stringify(D({}, yh), null, 2), 'utf8'));
}
function mh() {
  return w(this, void 0, Promise, function() {
    var t;
    return _(this, function(e) {
      return gh(), (t = require(vh)), dh(t), [2, t];
    });
  });
}
var Dh = function() {
    return w(void 0, void 0, void 0, function() {
      return _(this, function(t) {
        switch (t.label) {
          case 0:
            return [4, tl.prompt(el)];
          case 1:
            return (
              (function(t) {
                gh();
                var e = require(vh),
                  n = Object.assign({}, D(D({}, e), t));
                i.writeFileSync(vh, JSON.stringify(n, null, 2), 'utf8');
              })(t.sent()),
              [4, mh()]
            );
          case 2:
            return t.sent(), [2];
        }
      });
    });
  },
  wh = F(function(t, e) {
    /**
     * @license
     * Copyright 2016 Google Inc. All Rights Reserved.
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *     http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */
    var n = e;
    (n.start = function(t) {
      var e,
        r,
        i = {},
        o = [];
      function s(t, n) {
        if (!e) {
          var i;
          for (
            e = { err: t, result: n }, r && (r(), (r = function() {}));
            (i = o.pop());

          )
            i();
          'cancelled' === t && u && u(), (u = null);
        }
      }
      try {
        var u = t(
          function(t) {
            s(null, t);
          },
          function(t) {
            s(t, null);
          }
        );
      } catch (t) {
        s(t, null);
      }
      function c(t) {
        if (r) throw new Error('thenDo/finally called more than once');
        e
          ? ((r = function() {}), t(e.err, e.result))
          : (r = function() {
              t(e.err, e.result);
            });
      }
      return (
        (i.cancel = function() {
          s('cancelled', null);
        }),
        (i.thenDo = function(t, e) {
          return (function(t, e, r, i) {
            return n.start(function(n, o) {
              var s,
                u = t;
              return (
                e(function(t, e) {
                  (u = null),
                    process.nextTick(function() {
                      if (s || 'cancelled' === t) return o('cancelled');
                      if (null == t) {
                        if (!r) return n(e);
                        try {
                          u = r(e);
                        } catch (t) {
                          return o(t);
                        }
                      } else {
                        if (!i) return o(t);
                        try {
                          u = i(t);
                        } catch (t) {
                          return o(t);
                        }
                      }
                      if (!u) return n(void 0);
                      u.thenDo(n, o);
                    });
                }),
                function() {
                  (s = !0), u && u.cancel();
                }
              );
            });
          })(i, c, t, e);
        }),
        (i.finally = function(t) {
          return (
            e
              ? process.nextTick(t)
              : o.push(function() {
                  process.nextTick(t);
                }),
            i
          );
        }),
        i
      );
    }),
      (n.withValue = function(t) {
        return n.start(function(e) {
          e(t);
        });
      }),
      (n.withError = function(t) {
        return n.start(function(e, n) {
          n(t);
        });
      }),
      (n.race = function(t) {
        return n.start(function(e, n) {
          function r() {
            t.forEach(function(t) {
              t.cancel();
            });
          }
          return (
            t.forEach(function(t) {
              t.finally(r).thenDo(e, n);
            }),
            r
          );
        });
      });
  });
const _h = '__agent_base_https_request_patched__';
var Ch;
b.request[_h] ||
  ((b.request =
    ((Ch = b.request),
    function(t, e) {
      let n;
      return (
        (n = 'string' == typeof t ? d.parse(t) : Object.assign({}, t)),
        null == n.port && (n.port = 443),
        (n.secureEndpoint = !0),
        Ch.call(b, n, e)
      );
    })),
  (b.request[_h] = !0)),
  (b.get = function(t, e, n) {
    let r;
    'string' == typeof t && e && 'function' != typeof e
      ? (r = Object.assign({}, d.parse(t), e))
      : e || n
      ? n || ((r = t), (n = e))
      : (r = t);
    const i = b.request(r, n);
    return i.end(), i;
  });
var xh,
  Eh = F(function(t, e) {
    /*!
     * @overview es6-promise - a tiny implementation of Promises/A+.
     * @copyright Copyright (c) 2014 Yehuda Katz, Tom Dale, Stefan Penner and contributors (Conversion to ES6 API by Jake Archibald)
     * @license   Licensed under MIT license
     *            See https://raw.githubusercontent.com/stefanpenner/es6-promise/master/LICENSE
     * @version   v4.2.8+1e68dce6
     */
    t.exports = (function() {
      function t(t) {
        return 'function' == typeof t;
      }
      var e = Array.isArray
          ? Array.isArray
          : function(t) {
              return '[object Array]' === Object.prototype.toString.call(t);
            },
        n = 0,
        r = void 0,
        i = void 0,
        o = function(t, e) {
          (f[n] = t), (f[n + 1] = e), 2 === (n += 2) && (i ? i(p) : b());
        },
        s = 'undefined' != typeof window ? window : void 0,
        u = s || {},
        c = u.MutationObserver || u.WebKitMutationObserver,
        a =
          'undefined' == typeof self &&
          'undefined' != typeof process &&
          '[object process]' === {}.toString.call(process),
        l =
          'undefined' != typeof Uint8ClampedArray &&
          'undefined' != typeof importScripts &&
          'undefined' != typeof MessageChannel;
      function h() {
        var t = setTimeout;
        return function() {
          return t(p, 1);
        };
      }
      var f = new Array(1e3);
      function p() {
        for (var t = 0; t < n; t += 2)
          (0, f[t])(f[t + 1]), (f[t] = void 0), (f[t + 1] = void 0);
        n = 0;
      }
      var d,
        b = void 0;
      function v(t, e) {
        var n = this,
          r = new this.constructor(m);
        void 0 === r[g] && I(r);
        var i = n._state;
        if (i) {
          var s = arguments[i - 1];
          o(function() {
            return j(i, r, s, n._result);
          });
        } else k(n, r, t, e);
        return r;
      }
      function y(t) {
        if (t && 'object' == typeof t && t.constructor === this) return t;
        var e = new this(m);
        return E(e, t), e;
      }
      a
        ? (b = function() {
            return process.nextTick(p);
          })
        : c
        ? (b = (function() {
            var t = 0,
              e = new c(p),
              n = document.createTextNode('');
            return (
              e.observe(n, { characterData: !0 }),
              function() {
                n.data = t = ++t % 2;
              }
            );
          })())
        : l
        ? (((d = new MessageChannel()).port1.onmessage = p),
          (b = function() {
            return d.port2.postMessage(0);
          }))
        : (b =
            void 0 === s
              ? (function() {
                  try {
                    var t = Function('return this')().require('vertx');
                    return void 0 !== (r = t.runOnLoop || t.runOnContext)
                      ? function() {
                          r(p);
                        }
                      : h();
                  } catch (t) {
                    return h();
                  }
                })()
              : h());
      var g = Math.random()
        .toString(36)
        .substring(2);
      function m() {}
      var D = void 0,
        w = 1,
        _ = 2;
      function x(e, n, r) {
        n.constructor === e.constructor &&
        r === v &&
        n.constructor.resolve === y
          ? (function(t, e) {
              e._state === w
                ? S(t, e._result)
                : e._state === _
                ? O(t, e._result)
                : k(
                    e,
                    void 0,
                    function(e) {
                      return E(t, e);
                    },
                    function(e) {
                      return O(t, e);
                    }
                  );
            })(e, n)
          : void 0 === r
          ? S(e, n)
          : t(r)
          ? (function(t, e, n) {
              o(function(t) {
                var r = !1,
                  i = (function(t, e, n, r) {
                    try {
                      t.call(e, n, r);
                    } catch (t) {
                      return t;
                    }
                  })(
                    n,
                    e,
                    function(n) {
                      r || ((r = !0), e !== n ? E(t, n) : S(t, n));
                    },
                    function(e) {
                      r || ((r = !0), O(t, e));
                    },
                    t._label
                  );
                !r && i && ((r = !0), O(t, i));
              }, t);
            })(e, n, r)
          : S(e, n);
      }
      function E(t, e) {
        if (t === e)
          O(t, new TypeError('You cannot resolve a promise with itself'));
        else if (
          ((i = typeof (r = e)),
          null === r || ('object' !== i && 'function' !== i))
        )
          S(t, e);
        else {
          var n = void 0;
          try {
            n = e.then;
          } catch (e) {
            return void O(t, e);
          }
          x(t, e, n);
        }
        var r, i;
      }
      function F(t) {
        t._onerror && t._onerror(t._result), A(t);
      }
      function S(t, e) {
        t._state === D &&
          ((t._result = e),
          (t._state = w),
          0 !== t._subscribers.length && o(A, t));
      }
      function O(t, e) {
        t._state === D && ((t._state = _), (t._result = e), o(F, t));
      }
      function k(t, e, n, r) {
        var i = t._subscribers,
          s = i.length;
        (t._onerror = null),
          (i[s] = e),
          (i[s + w] = n),
          (i[s + _] = r),
          0 === s && t._state && o(A, t);
      }
      function A(t) {
        var e = t._subscribers,
          n = t._state;
        if (0 !== e.length) {
          for (
            var r = void 0, i = void 0, o = t._result, s = 0;
            s < e.length;
            s += 3
          )
            (r = e[s]), (i = e[s + n]), r ? j(n, r, i, o) : i(o);
          t._subscribers.length = 0;
        }
      }
      function j(e, n, r, i) {
        var o = t(r),
          s = void 0,
          u = void 0,
          c = !0;
        if (o) {
          try {
            s = r(i);
          } catch (t) {
            (c = !1), (u = t);
          }
          if (n === s)
            return void O(
              n,
              new TypeError(
                'A promises callback cannot return that same promise.'
              )
            );
        } else s = i;
        n._state !== D ||
          (o && c
            ? E(n, s)
            : !1 === c
            ? O(n, u)
            : e === w
            ? S(n, s)
            : e === _ && O(n, s));
      }
      var B = 0;
      function I(t) {
        (t[g] = B++),
          (t._state = void 0),
          (t._result = void 0),
          (t._subscribers = []);
      }
      var T = (function() {
          function t(t, n) {
            (this._instanceConstructor = t),
              (this.promise = new t(m)),
              this.promise[g] || I(this.promise),
              e(n)
                ? ((this.length = n.length),
                  (this._remaining = n.length),
                  (this._result = new Array(this.length)),
                  0 === this.length
                    ? S(this.promise, this._result)
                    : ((this.length = this.length || 0),
                      this._enumerate(n),
                      0 === this._remaining && S(this.promise, this._result)))
                : O(
                    this.promise,
                    new Error('Array Methods must be provided an Array')
                  );
          }
          return (
            (t.prototype._enumerate = function(t) {
              for (var e = 0; this._state === D && e < t.length; e++)
                this._eachEntry(t[e], e);
            }),
            (t.prototype._eachEntry = function(t, e) {
              var n = this._instanceConstructor,
                r = n.resolve;
              if (r === y) {
                var i = void 0,
                  o = void 0,
                  s = !1;
                try {
                  i = t.then;
                } catch (t) {
                  (s = !0), (o = t);
                }
                if (i === v && t._state !== D)
                  this._settledAt(t._state, e, t._result);
                else if ('function' != typeof i)
                  this._remaining--, (this._result[e] = t);
                else if (n === M) {
                  var u = new n(m);
                  s ? O(u, o) : x(u, t, i), this._willSettleAt(u, e);
                } else
                  this._willSettleAt(
                    new n(function(e) {
                      return e(t);
                    }),
                    e
                  );
              } else this._willSettleAt(r(t), e);
            }),
            (t.prototype._settledAt = function(t, e, n) {
              var r = this.promise;
              r._state === D &&
                (this._remaining--, t === _ ? O(r, n) : (this._result[e] = n)),
                0 === this._remaining && S(r, this._result);
            }),
            (t.prototype._willSettleAt = function(t, e) {
              var n = this;
              k(
                t,
                void 0,
                function(t) {
                  return n._settledAt(w, e, t);
                },
                function(t) {
                  return n._settledAt(_, e, t);
                }
              );
            }),
            t
          );
        })(),
        M = (function() {
          function e(t) {
            (this[g] = B++),
              (this._result = this._state = void 0),
              (this._subscribers = []),
              m !== t &&
                ('function' != typeof t &&
                  (function() {
                    throw new TypeError(
                      'You must pass a resolver function as the first argument to the promise constructor'
                    );
                  })(),
                this instanceof e
                  ? (function(t, e) {
                      try {
                        e(
                          function(e) {
                            E(t, e);
                          },
                          function(e) {
                            O(t, e);
                          }
                        );
                      } catch (e) {
                        O(t, e);
                      }
                    })(this, t)
                  : (function() {
                      throw new TypeError(
                        "Failed to construct 'Promise': Please use the 'new' operator, this object constructor cannot be called as a function."
                      );
                    })());
          }
          return (
            (e.prototype.catch = function(t) {
              return this.then(null, t);
            }),
            (e.prototype.finally = function(e) {
              var n = this.constructor;
              return t(e)
                ? this.then(
                    function(t) {
                      return n.resolve(e()).then(function() {
                        return t;
                      });
                    },
                    function(t) {
                      return n.resolve(e()).then(function() {
                        throw t;
                      });
                    }
                  )
                : this.then(e, e);
            }),
            e
          );
        })();
      return (
        (M.prototype.then = v),
        (M.all = function(t) {
          return new T(this, t).promise;
        }),
        (M.race = function(t) {
          var n = this;
          return e(t)
            ? new n(function(e, r) {
                for (var i = t.length, o = 0; o < i; o++)
                  n.resolve(t[o]).then(e, r);
              })
            : new n(function(t, e) {
                return e(new TypeError('You must pass an array to race.'));
              });
        }),
        (M.resolve = y),
        (M.reject = function(t) {
          var e = new this(m);
          return O(e, t), e;
        }),
        (M._setScheduler = function(t) {
          i = t;
        }),
        (M._setAsap = function(t) {
          o = t;
        }),
        (M._asap = o),
        (M.polyfill = function() {
          var t = void 0;
          if (void 0 !== C) t = C;
          else if ('undefined' != typeof self) t = self;
          else
            try {
              t = Function('return this')();
            } catch (t) {
              throw new Error(
                'polyfill failed because global object is unavailable in this environment'
              );
            }
          var e = t.Promise;
          if (e) {
            var n = null;
            try {
              n = Object.prototype.toString.call(e.resolve());
            } catch (t) {}
            if ('[object Promise]' === n && !e.cast) return;
          }
          t.Promise = M;
        }),
        (M.Promise = M),
        M
      );
    })();
  }),
  Fh =
    ((xh = void 0),
    (xh =
      void 0 !== C ? C : void 0 !== window && window.document ? window : self),
    (function() {
      if (!xh.hasOwnProperty('Promise')) return !1;
      var t,
        e = xh.Promise;
      return !!(
        e.hasOwnProperty('resolve') &&
        e.hasOwnProperty('reject') &&
        e.hasOwnProperty('all') &&
        e.hasOwnProperty('race') &&
        ((t = void 0),
        new xh.Promise(function(e) {
          t = e;
        }) && 'function' == typeof t)
      );
    })()
      ? xh.Promise
      : Eh.Promise),
  Sh = (function() {
    var t = Fh;
    function e(t) {
      return t && 'function' == typeof t.then && 'function' == typeof t.catch;
    }
    return function(n, r) {
      return function() {
        for (var i = arguments.length, o = Array(i), s = 0; s < i; s++)
          o[s] = arguments[s];
        var u = r && r.multiArgs,
          c = void 0;
        return (
          r && r.thisArg ? (c = r.thisArg) : r && (c = r),
          new t(function(t, r) {
            o.push(function(e) {
              if (e) return r(e);
              for (
                var n = arguments.length, i = Array(n > 1 ? n - 1 : 0), o = 1;
                o < n;
                o++
              )
                i[o - 1] = arguments[o];
              if (!1 == !!u) return t(i[0]);
              t(i);
            });
            var i = n.apply(c, o);
            e(i) && t(i);
          })
        );
      };
    };
  })();
const Oh = o.inherits,
  kh = t.EventEmitter;
var Ah = jh;
function jh(t, e) {
  if (!(this instanceof jh)) return new jh(t, e);
  kh.call(this), (this._promisifiedCallback = !1);
  let n = e;
  'function' == typeof t ? (this.callback = t) : t && (n = t),
    (this.timeout = (n && n.timeout) || null),
    (this.options = n);
}
Oh(jh, kh),
  (jh.prototype.callback = function(t, e) {
    throw new Error(
      '"agent-base" has no default implementation, you must subclass and override `callback()`'
    );
  }),
  (jh.prototype.addRequest = function(t, e) {
    const n = Object.assign({}, e);
    null == n.host && (n.host = 'localhost'),
      null == n.port && (n.port = n.secureEndpoint ? 443 : 80);
    const r = Object.assign({}, this.options, n);
    let i;
    r.host && r.path && delete r.path,
      delete r.agent,
      delete r.hostname,
      delete r._defaultAgent,
      delete r.defaultPort,
      delete r.createConnection,
      (t._last = !0),
      (t.shouldKeepAlive = !1);
    let o = !1;
    const s = this.timeout,
      u = this.freeSocket;
    function c(e) {
      t._hadError || (t.emit('error', e), (t._hadError = !0));
    }
    function a(t) {
      o || (null != i && (clearTimeout(i), (i = null)), c(t));
    }
    !this._promisifiedCallback &&
      this.callback.length >= 3 &&
      ((this.callback = Sh(this.callback, this)),
      (this._promisifiedCallback = !0)),
      s > 0 &&
        (i = setTimeout(function() {
          (i = null), (o = !0);
          const t = new Error(
            'A "socket" was not created for HTTP request before ' + s + 'ms'
          );
          (t.code = 'ETIMEOUT'), c(t);
        }, s));
    try {
      Promise.resolve(this.callback(t, r)).then(function(e) {
        var n;
        if (!o)
          if (
            (null != i && (clearTimeout(i), (i = null)),
            (n = e) && 'function' == typeof n.addRequest)
          )
            e.addRequest(t, r);
          else if (e) {
            e.on('free', function() {
              u(e, r);
            }),
              t.onSocket(e);
          } else {
            c(
              new Error(
                'no Duplex stream was returned to agent-base for `' +
                  t.method +
                  ' ' +
                  t.path +
                  '`'
              )
            );
          }
      }, a);
    } catch (t) {
      Promise.reject(t).catch(a);
    }
  }),
  (jh.prototype.freeSocket = function(t, e) {
    t.destroy();
  });
var Bh = 1e3,
  Ih = 60 * Bh,
  Th = 60 * Ih,
  Mh = 24 * Th,
  Ph = 7 * Mh,
  Nh = 365.25 * Mh,
  Rh = function(t, e) {
    e = e || {};
    var n = typeof t;
    if ('string' === n && t.length > 0)
      return (function(t) {
        if ((t = String(t)).length > 100) return;
        var e = /^(-?(?:\d+)?\.?\d+) *(milliseconds?|msecs?|ms|seconds?|secs?|s|minutes?|mins?|m|hours?|hrs?|h|days?|d|weeks?|w|years?|yrs?|y)?$/i.exec(
          t
        );
        if (!e) return;
        var n = parseFloat(e[1]);
        switch ((e[2] || 'ms').toLowerCase()) {
          case 'years':
          case 'year':
          case 'yrs':
          case 'yr':
          case 'y':
            return n * Nh;
          case 'weeks':
          case 'week':
          case 'w':
            return n * Ph;
          case 'days':
          case 'day':
          case 'd':
            return n * Mh;
          case 'hours':
          case 'hour':
          case 'hrs':
          case 'hr':
          case 'h':
            return n * Th;
          case 'minutes':
          case 'minute':
          case 'mins':
          case 'min':
          case 'm':
            return n * Ih;
          case 'seconds':
          case 'second':
          case 'secs':
          case 'sec':
          case 's':
            return n * Bh;
          case 'milliseconds':
          case 'millisecond':
          case 'msecs':
          case 'msec':
          case 'ms':
            return n;
          default:
            return;
        }
      })(t);
    if ('number' === n && isFinite(t))
      return e.long
        ? (function(t) {
            var e = Math.abs(t);
            if (e >= Mh) return Lh(t, e, Mh, 'day');
            if (e >= Th) return Lh(t, e, Th, 'hour');
            if (e >= Ih) return Lh(t, e, Ih, 'minute');
            if (e >= Bh) return Lh(t, e, Bh, 'second');
            return t + ' ms';
          })(t)
        : (function(t) {
            var e = Math.abs(t);
            if (e >= Mh) return Math.round(t / Mh) + 'd';
            if (e >= Th) return Math.round(t / Th) + 'h';
            if (e >= Ih) return Math.round(t / Ih) + 'm';
            if (e >= Bh) return Math.round(t / Bh) + 's';
            return t + 'ms';
          })(t);
    throw new Error(
      'val is not a non-empty string or a valid number. val=' +
        JSON.stringify(t)
    );
  };
function Lh(t, e, n, r) {
  var i = e >= 1.5 * n;
  return Math.round(t / n) + ' ' + r + (i ? 's' : '');
}
var Vh = function(t) {
    function e(t) {
      for (var e = 0, r = 0; r < t.length; r++)
        (e = (e << 5) - e + t.charCodeAt(r)), (e |= 0);
      return n.colors[Math.abs(e) % n.colors.length];
    }
    function n(t) {
      var o;
      function s() {
        if (s.enabled) {
          for (var t = arguments.length, e = new Array(t), r = 0; r < t; r++)
            e[r] = arguments[r];
          var i = s,
            u = Number(new Date()),
            c = u - (o || u);
          (i.diff = c),
            (i.prev = o),
            (i.curr = u),
            (o = u),
            (e[0] = n.coerce(e[0])),
            'string' != typeof e[0] && e.unshift('%O');
          var a = 0;
          (e[0] = e[0].replace(/%([a-zA-Z%])/g, function(t, r) {
            if ('%%' === t) return t;
            a++;
            var o = n.formatters[r];
            if ('function' == typeof o) {
              var s = e[a];
              (t = o.call(i, s)), e.splice(a, 1), a--;
            }
            return t;
          })),
            n.formatArgs.call(i, e),
            (i.log || n.log).apply(i, e);
        }
      }
      return (
        (s.namespace = t),
        (s.enabled = n.enabled(t)),
        (s.useColors = n.useColors()),
        (s.color = e(t)),
        (s.destroy = r),
        (s.extend = i),
        'function' == typeof n.init && n.init(s),
        n.instances.push(s),
        s
      );
    }
    function r() {
      var t = n.instances.indexOf(this);
      return -1 !== t && (n.instances.splice(t, 1), !0);
    }
    function i(t, e) {
      return n(this.namespace + (void 0 === e ? ':' : e) + t);
    }
    return (
      (n.debug = n),
      (n.default = n),
      (n.coerce = function(t) {
        if (t instanceof Error) return t.stack || t.message;
        return t;
      }),
      (n.disable = function() {
        n.enable('');
      }),
      (n.enable = function(t) {
        var e;
        n.save(t), (n.names = []), (n.skips = []);
        var r = ('string' == typeof t ? t : '').split(/[\s,]+/),
          i = r.length;
        for (e = 0; e < i; e++)
          r[e] &&
            ('-' === (t = r[e].replace(/\*/g, '.*?'))[0]
              ? n.skips.push(new RegExp('^' + t.substr(1) + '$'))
              : n.names.push(new RegExp('^' + t + '$')));
        for (e = 0; e < n.instances.length; e++) {
          var o = n.instances[e];
          o.enabled = n.enabled(o.namespace);
        }
      }),
      (n.enabled = function(t) {
        if ('*' === t[t.length - 1]) return !0;
        var e, r;
        for (e = 0, r = n.skips.length; e < r; e++)
          if (n.skips[e].test(t)) return !1;
        for (e = 0, r = n.names.length; e < r; e++)
          if (n.names[e].test(t)) return !0;
        return !1;
      }),
      (n.humanize = Rh),
      Object.keys(t).forEach(function(e) {
        n[e] = t[e];
      }),
      (n.instances = []),
      (n.names = []),
      (n.skips = []),
      (n.formatters = {}),
      (n.selectColor = e),
      n.enable(n.load()),
      n
    );
  },
  Uh = F(function(t, e) {
    function n(t) {
      return (n =
        'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator
          ? function(t) {
              return typeof t;
            }
          : function(t) {
              return t &&
                'function' == typeof Symbol &&
                t.constructor === Symbol &&
                t !== Symbol.prototype
                ? 'symbol'
                : typeof t;
            })(t);
    }
    (e.log = function() {
      var t;
      return (
        'object' ===
          ('undefined' == typeof console ? 'undefined' : n(console)) &&
        console.log &&
        (t = console).log.apply(t, arguments)
      );
    }),
      (e.formatArgs = function(e) {
        if (
          ((e[0] =
            (this.useColors ? '%c' : '') +
            this.namespace +
            (this.useColors ? ' %c' : ' ') +
            e[0] +
            (this.useColors ? '%c ' : ' ') +
            '+' +
            t.exports.humanize(this.diff)),
          !this.useColors)
        )
          return;
        var n = 'color: ' + this.color;
        e.splice(1, 0, n, 'color: inherit');
        var r = 0,
          i = 0;
        e[0].replace(/%[a-zA-Z%]/g, function(t) {
          '%%' !== t && (r++, '%c' === t && (i = r));
        }),
          e.splice(i, 0, n);
      }),
      (e.save = function(t) {
        try {
          t ? e.storage.setItem('debug', t) : e.storage.removeItem('debug');
        } catch (t) {}
      }),
      (e.load = function() {
        var t;
        try {
          t = e.storage.getItem('debug');
        } catch (t) {}
        !t &&
          'undefined' != typeof process &&
          'env' in process &&
          (t = process.env.DEBUG);
        return t;
      }),
      (e.useColors = function() {
        if (
          'undefined' != typeof window &&
          window.process &&
          ('renderer' === window.process.type || window.process.__nwjs)
        )
          return !0;
        if (
          'undefined' != typeof navigator &&
          navigator.userAgent &&
          navigator.userAgent.toLowerCase().match(/(edge|trident)\/(\d+)/)
        )
          return !1;
        return (
          ('undefined' != typeof document &&
            document.documentElement &&
            document.documentElement.style &&
            document.documentElement.style.WebkitAppearance) ||
          ('undefined' != typeof window &&
            window.console &&
            (window.console.firebug ||
              (window.console.exception && window.console.table))) ||
          ('undefined' != typeof navigator &&
            navigator.userAgent &&
            navigator.userAgent.toLowerCase().match(/firefox\/(\d+)/) &&
            parseInt(RegExp.$1, 10) >= 31) ||
          ('undefined' != typeof navigator &&
            navigator.userAgent &&
            navigator.userAgent.toLowerCase().match(/applewebkit\/(\d+)/))
        );
      }),
      (e.storage = (function() {
        try {
          return localStorage;
        } catch (t) {}
      })()),
      (e.colors = [
        '#0000CC',
        '#0000FF',
        '#0033CC',
        '#0033FF',
        '#0066CC',
        '#0066FF',
        '#0099CC',
        '#0099FF',
        '#00CC00',
        '#00CC33',
        '#00CC66',
        '#00CC99',
        '#00CCCC',
        '#00CCFF',
        '#3300CC',
        '#3300FF',
        '#3333CC',
        '#3333FF',
        '#3366CC',
        '#3366FF',
        '#3399CC',
        '#3399FF',
        '#33CC00',
        '#33CC33',
        '#33CC66',
        '#33CC99',
        '#33CCCC',
        '#33CCFF',
        '#6600CC',
        '#6600FF',
        '#6633CC',
        '#6633FF',
        '#66CC00',
        '#66CC33',
        '#9900CC',
        '#9900FF',
        '#9933CC',
        '#9933FF',
        '#99CC00',
        '#99CC33',
        '#CC0000',
        '#CC0033',
        '#CC0066',
        '#CC0099',
        '#CC00CC',
        '#CC00FF',
        '#CC3300',
        '#CC3333',
        '#CC3366',
        '#CC3399',
        '#CC33CC',
        '#CC33FF',
        '#CC6600',
        '#CC6633',
        '#CC9900',
        '#CC9933',
        '#CCCC00',
        '#CCCC33',
        '#FF0000',
        '#FF0033',
        '#FF0066',
        '#FF0099',
        '#FF00CC',
        '#FF00FF',
        '#FF3300',
        '#FF3333',
        '#FF3366',
        '#FF3399',
        '#FF33CC',
        '#FF33FF',
        '#FF6600',
        '#FF6633',
        '#FF9900',
        '#FF9933',
        '#FFCC00',
        '#FFCC33'
      ]),
      (t.exports = Vh(e)),
      (t.exports.formatters.j = function(t) {
        try {
          return JSON.stringify(t);
        } catch (t) {
          return '[UnexpectedJSONParseError]: ' + t.message;
        }
      });
  }),
  zh =
    (Uh.log,
    Uh.formatArgs,
    Uh.save,
    Uh.load,
    Uh.useColors,
    Uh.storage,
    Uh.colors,
    F(function(t, e) {
      (e.init = function(t) {
        t.inspectOpts = {};
        for (var n = Object.keys(e.inspectOpts), r = 0; r < n.length; r++)
          t.inspectOpts[n[r]] = e.inspectOpts[n[r]];
      }),
        (e.log = function() {
          return process.stderr.write(o.format.apply(o, arguments) + '\n');
        }),
        (e.formatArgs = function(n) {
          var r = this.namespace;
          if (this.useColors) {
            var i = this.color,
              o = '[3' + (i < 8 ? i : '8;5;' + i),
              s = '  '.concat(o, ';1m').concat(r, ' [0m');
            (n[0] = s + n[0].split('\n').join('\n' + s)),
              n.push(o + 'm+' + t.exports.humanize(this.diff) + '[0m');
          } else
            n[0] =
              (function() {
                if (e.inspectOpts.hideDate) return '';
                return new Date().toISOString() + ' ';
              })() +
              r +
              ' ' +
              n[0];
        }),
        (e.save = function(t) {
          t ? (process.env.DEBUG = t) : delete process.env.DEBUG;
        }),
        (e.load = function() {
          return process.env.DEBUG;
        }),
        (e.useColors = function() {
          return 'colors' in e.inspectOpts
            ? Boolean(e.inspectOpts.colors)
            : l.isatty(process.stderr.fd);
        }),
        (e.colors = [6, 2, 3, 4, 5, 1]);
      try {
        H &&
          (H.stderr || H).level >= 2 &&
          (e.colors = [
            20,
            21,
            26,
            27,
            32,
            33,
            38,
            39,
            40,
            41,
            42,
            43,
            44,
            45,
            56,
            57,
            62,
            63,
            68,
            69,
            74,
            75,
            76,
            77,
            78,
            79,
            80,
            81,
            92,
            93,
            98,
            99,
            112,
            113,
            128,
            129,
            134,
            135,
            148,
            149,
            160,
            161,
            162,
            163,
            164,
            165,
            166,
            167,
            168,
            169,
            170,
            171,
            172,
            173,
            178,
            179,
            184,
            185,
            196,
            197,
            198,
            199,
            200,
            201,
            202,
            203,
            204,
            205,
            206,
            207,
            208,
            209,
            214,
            215,
            220,
            221
          ]);
      } catch (t) {}
      (e.inspectOpts = Object.keys(process.env)
        .filter(function(t) {
          return /^debug_/i.test(t);
        })
        .reduce(function(t, e) {
          var n = e
              .substring(6)
              .toLowerCase()
              .replace(/_([a-z])/g, function(t, e) {
                return e.toUpperCase();
              }),
            r = process.env[e];
          return (
            (r =
              !!/^(yes|on|true|enabled)$/i.test(r) ||
              (!/^(no|off|false|disabled)$/i.test(r) &&
                ('null' === r ? null : Number(r)))),
            (t[n] = r),
            t
          );
        }, {})),
        (t.exports = Vh(e));
      var n = t.exports.formatters;
      (n.o = function(t) {
        return (
          (this.inspectOpts.colors = this.useColors),
          o.inspect(t, this.inspectOpts).replace(/\s*\n\s*/g, ' ')
        );
      }),
        (n.O = function(t) {
          return (
            (this.inspectOpts.colors = this.useColors),
            o.inspect(t, this.inspectOpts)
          );
        });
    })),
  qh =
    (zh.init,
    zh.log,
    zh.formatArgs,
    zh.save,
    zh.load,
    zh.useColors,
    zh.colors,
    zh.inspectOpts,
    F(function(t) {
      'undefined' == typeof process ||
      'renderer' === process.type ||
      !0 === process.browser ||
      process.__nwjs
        ? (t.exports = Uh)
        : (t.exports = zh);
    })),
  Wh = o.inherits,
  $h = qh('https-proxy-agent'),
  Kh = Gh;
function Gh(t) {
  if (!(this instanceof Gh)) return new Gh(t);
  if (('string' == typeof t && (t = d.parse(t)), !t))
    throw new Error(
      'an HTTP(S) proxy server `host` and `port` must be specified!'
    );
  $h('creating new HttpsProxyAgent instance: %o', t), Ah.call(this, t);
  var e = Object.assign({}, t);
  (this.secureProxy = !!e.protocol && /^https:?$/i.test(e.protocol)),
    (e.host = e.hostname || e.host),
    (e.port = +e.port || (this.secureProxy ? 443 : 80)),
    !this.secureProxy ||
      'ALPNProtocols' in e ||
      (e.ALPNProtocols = ['http 1.1']),
    e.host && e.path && (delete e.path, delete e.pathname),
    (this.proxy = e),
    (this.defaultPort = 443);
}
function Yh(t) {
  t.resume();
}
Wh(Gh, Ah),
  (Gh.prototype.callback = function(e, n, r) {
    var i,
      o = this.proxy;
    i = this.secureProxy ? y.connect(o) : v.connect(o);
    var s = [],
      u = 0;
    function c() {
      var o = i.read();
      o
        ? (function(o) {
            s.push(o), (u += o.length);
            var l = Buffer.concat(s, u),
              h = l.toString('ascii');
            if (!~h.indexOf('\r\n\r\n'))
              return (
                $h('have not received end of HTTP headers yet...'), void c()
              );
            var f = h.substring(0, h.indexOf('\r\n')),
              d = +f.split(' ')[1];
            if (($h('got proxy server response: %o', f), 200 == d)) {
              var b = i;
              (s = l = null),
                n.secureEndpoint &&
                  ($h(
                    'upgrading proxy-connected socket to TLS connection: %o',
                    n.host
                  ),
                  (n.socket = i),
                  (n.servername = n.servername || n.host),
                  (n.host = null),
                  (n.hostname = null),
                  (n.port = null),
                  (b = y.connect(n))),
                a(),
                e.once('socket', Yh),
                r(null, b);
            } else
              a(),
                i.destroy(),
                (i = new t.EventEmitter()),
                (s = l),
                e.once('socket', p),
                r(null, i);
          })(o)
        : i.once('readable', c);
    }
    function a() {
      i.removeListener('end', h),
        i.removeListener('error', f),
        i.removeListener('close', l),
        i.removeListener('readable', c);
    }
    function l(t) {
      $h('onclose had error %o', t);
    }
    function h() {
      $h('onend');
    }
    function f(t) {
      a(), r(t);
    }
    function p(t) {
      if (
        ($h('replaying proxy buffer for failed request'),
        !(t.listenerCount('data') > 0))
      )
        throw new Error('should not happen...');
      t.emit('data', s), (s = null);
    }
    i.on('error', f), i.on('close', l), i.on('end', h), c();
    var d = 'CONNECT ' + (n.host + ':' + n.port) + ' HTTP/1.1\r\n',
      b = Object.assign({}, o.headers);
    o.auth &&
      (b['Proxy-Authorization'] =
        'Basic ' + Buffer.from(o.auth).toString('base64'));
    var g,
      m,
      D = n.host;
    (g = n.port),
      (m = n.secureEndpoint),
      Boolean((!m && 80 === g) || (m && 443 === g)) || (D += ':' + n.port),
      (b.Host = D),
      (b.Connection = 'close'),
      Object.keys(b).forEach(function(t) {
        d += t + ': ' + b[t] + '\r\n';
      }),
      i.write(d + '\r\n');
  });
for (
  /**
   * @license
   * Copyright 2016 Google Inc. All Rights Reserved.
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *     http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   */
  var Hh = d.parse,
    Qh =
      (new b.Agent({ keepAlive: !0 }),
      function t(e, n, r, i) {
        var o,
          s = Hh(e);
        if (i) for (var u in i) 'body' === u ? (o = i[u]) : (s[u] = i[u]);
        (s.headers = s.headers || {}),
          (s.headers['User-Agent'] = 'GoogleGeoApiClientJS/0.5.5');
        var c = process.env.http_proxy || process.env.https_proxy;
        if (c) {
          var a = new Kh(c);
          s.agent = a;
        }
        var l = b
          .request(s, function(e) {
            if (
              (e.on('error', function(t) {
                r(t);
              }),
              302 === e.statusCode)
            ) {
              var o = e.headers.location;
              t(o, n, r, i);
            } else if (
              'application/json; charset=utf-8' ==
              e.headers['content-type'].toLowerCase()
            ) {
              var s = [];
              e.on('data', function(t) {
                s.push(t);
              }),
                e.on('end', function() {
                  var t;
                  try {
                    t = JSON.parse(Buffer.concat(s).toString());
                  } catch (t) {
                    return void r(t);
                  }
                  n({ status: e.statusCode, headers: e.headers, json: t });
                });
            } else (e.status = e.statusCode), n(e);
          })
          .on('error', function(t) {
            r(t);
          });
        return (
          o && l.write(JSON.stringify(o)),
          l.end(),
          function() {
            l.abort();
          }
        );
      }),
    Jh = function(t, e) {
      return function(n) {
        return wh.start(function(r) {
          var i = t(r, n);
          return function() {
            e(i);
          };
        });
      };
    },
    Zh = function(t) {
      var e = wh;
      return {
        attempt: function(n) {
          var r = n.do,
            i = n.until,
            o = n.interval || 500,
            s = n.increment || 1.5,
            u = n.jitter || 0.5;
          return e.withValue().thenDo(function n() {
            return r().thenDo(function(r) {
              if (i(r)) return e.withValue(r);
              var c = o * (1 + u * (2 * Math.random() - 1));
              return (o *= s), t(c).thenDo(n);
            });
          });
        }
      };
    },
    Xh = function(t) {
      var e = [],
        n = 0;
      return {
        insert: function(r) {
          e[(n = (n + 1) % t)] = r;
        },
        item: function(r) {
          return e[(n - r + t) % t];
        }
      };
    },
    tf = function(t, e) {
      return {
        create: function(n, r) {
          var i = {},
            o = wh.withValue(),
            s = Xh(n);
          return (
            (i.add = function(i) {
              var u = wh
                .start(function(t) {
                  o.finally(t);
                })
                .thenDo(function() {
                  var i = s.item(n - 1);
                  if (null != i) return t(Math.max(i + r - e(), 0));
                })
                .thenDo(function() {
                  s.insert(e());
                });
              return (
                (o = o.thenDo(function() {
                  return wh.start(function(t) {
                    u.finally(t);
                  });
                })),
                u.thenDo(i)
              );
            }),
            i
          );
        }
      };
    },
    ef = function(t) {
      var e = t.key || process.env.GOOGLE_MAPS_API_KEY,
        n = t.channel,
        r = t.clientId || process.env.GOOGLE_MAPS_API_CLIENT_ID,
        i = t.clientSecret || process.env.GOOGLE_MAPS_API_CLIENT_SECRET,
        o = t.rate || {},
        s = o.limit || 50,
        u = o.period || 1e3,
        c = t.makeUrlRequest || Qh,
        a = t.setTimeout || setTimeout,
        l = t.clearTimeout || clearTimeout,
        h =
          t.getTime ||
          function() {
            return new Date().getTime();
          },
        f = Jh(a, l),
        b = Zh(f).attempt,
        v = tf(f, h).create(s, u);
      return function(o, s, u) {
        u = u || function() {};
        var a = s.retryOptions || t.retryOptions || {};
        delete s.retryOptions;
        var l = s.timeout || t.timeout || 6e4;
        delete s.timeout;
        var h = s.supportsClientId && r && i;
        delete s.supportsClientId;
        var y = s.options || {};
        delete s.options;
        var g = 'POST' === y.method,
          m = (function(t, o, s) {
            n && (o.channel = n);
            if (s) o.client = r;
            else {
              if (!e || 0 != e.indexOf('AIza'))
                throw 'Missing either a valid API key, or a client ID and secret';
              o.key = e;
            }
            var u = d.format({ pathname: t, query: o });
            if (s) {
              var c = new Buffer(i, 'base64'),
                a = d.parse(u).path,
                l = (function(t, e) {
                  var n = new Buffer(
                    p
                      .createHmac('sha1', t)
                      .update(e)
                      .digest('base64')
                  )
                    .toString()
                    .replace(/\+/g, '-')
                    .replace(/\//g, '_')
                    .replace(/=+$/, '');
                  for (; n.length % 4; ) n += '=';
                  return n;
                })(c, a);
              u += '&signature=' + encodeURIComponent(l);
            }
            return u;
          })(o, g ? {} : s, h);
        g && (y.body = s);
        var D =
          y.canRetry ||
          function(t, e) {
            return (
              null == t ||
              500 === t.status ||
              503 === t.status ||
              504 === t.status ||
              (t.json &&
                ('OVER_QUERY_LIMIT' === t.json.status ||
                  'RESOURCE_EXHAUSTED' === t.json.status ||
                  ('INVALID_REQUEST' === t.json.status && e.pagetoken)))
            );
          };
        delete y.canRetry;
        var w =
          y.isSuccessful ||
          function(t) {
            return (
              200 === t.status &&
              (null == t.json ||
                void 0 === t.json.status ||
                'OK' === t.json.status ||
                'ZERO_RESULTS' === t.json.status)
            );
          };
        delete y.isSuccessful;
        var _ = f(l).thenDo(function() {
            throw 'timeout';
          }),
          C = b({
            do: function() {
              return v.add(function() {
                return wh.start(function(t, e) {
                  return c(m, t, e, y);
                });
              });
            },
            until: function(t) {
              return !D(t, s);
            },
            interval: a.interval,
            increment: a.increment,
            jitter: a.jitter
          }),
          x = wh
            .race([_, C])
            .thenDo(function(t) {
              return (
                (t.requestUrl = m),
                (t.query = s),
                w(t) ? wh.withValue(t) : wh.withError(t)
              );
            })
            .thenDo(
              function(t) {
                u(null, t);
              },
              function(t) {
                u(t);
              }
            );
        if (t.Promise) {
          var E = u,
            F = new t.Promise(function(t, e) {
              u = function(n, r) {
                null != n ? e(n) : t(r), E(n, r);
              };
            });
          x.asPromise = function() {
            return F;
          };
        }
        return delete x.thenDo, x;
      };
    },
    nf = F(function(t, e) {
      /**
       * @license
       * Copyright 2016 Google Inc. All Rights Reserved.
       *
       * Licensed under the Apache License, Version 2.0 (the "License");
       * you may not use this file except in compliance with the License.
       * You may obtain a copy of the License at
       *
       *     http://www.apache.org/licenses/LICENSE-2.0
       *
       * Unless required by applicable law or agreed to in writing, software
       * distributed under the License is distributed on an "AS IS" BASIS,
       * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
       * See the License for the specific language governing permissions and
       * limitations under the License.
       */
      var n = e;
      function r(t) {
        (this.message = t),
          (this.name = 'InvalidValueError'),
          Error.captureStackTrace(this, r);
      }
      (r.prototype = Object.create(Error.prototype)),
        (r.prototype.constructor = r),
        (r.prepend = function(t, e) {
          return e instanceof r ? new r(t + ': ' + e.message) : e;
        }),
        (n.InvalidValueError = r),
        (n.acceptAll = function(t) {
          return t;
        }),
        (n.optional = function(t) {
          return function(e) {
            return null == e ? e : t(e);
          };
        }),
        (n.that = function(t, e) {
          return function(n) {
            if (t(n)) return n;
            throw new r(e);
          };
        }),
        (n.number = n.that(function(t) {
          return 'number' == typeof t;
        }, 'not a number')),
        (n.string = n.that(function(t) {
          return 'string' == typeof t;
        }, 'not a string')),
        (n.object = function(t) {
          return function(e) {
            var n = {};
            if (!e || 'object' != typeof e) throw new r('not an Object');
            for (s in t) {
              var i = t[s];
              try {
                var o = i(e[s]);
              } catch (t) {
                throw (s in e)
                  ? r.prepend('in property "' + s + '"', t)
                  : new r('missing property "' + s + '"');
              }
              void 0 !== o && (n[s] = o);
            }
            for (var s in e)
              if (!t[s]) throw new r('unexpected property "' + s + '"');
            return n;
          };
        }),
        (n.array = function(t) {
          return function(e) {
            var n = [];
            if ('[object Array]' !== Object.prototype.toString.call(e))
              throw new r('not an Array');
            for (var i = 0; i < e.length; ++i)
              try {
                n[i] = t(e[i]);
              } catch (t) {
                throw r.prepend('at index ' + i, t);
              }
            return n;
          };
        }),
        (n.oneOf = function(t) {
          var e = {},
            n = [];
          return (
            t.forEach(function(t) {
              (e[t] = !0), n.push('"' + t + '"');
            }),
            function(t) {
              if (e[t]) return t;
              throw new r('not one of ' + n.join(', '));
            }
          );
        }),
        (n.atLeastOneOfProperties = function(t) {
          return function(e) {
            if (!e) return e;
            for (var n = [], i = 0; i < t.length; i++) {
              if ((t[i] in e)) return e;
              n.push('"' + t[i] + '"');
            }
            throw new r('one of ' + n.join(', ') + ' is required');
          };
        }),
        (n.mutuallyExclusiveProperties = function(t, e) {
          return function(n) {
            if (!n) return n;
            var i = [],
              o = [];
            if (
              (t.forEach(function(t) {
                (t in n) && i.push('"' + t + '"'), o.push('"' + t + '"');
              }),
              i.length > 1)
            )
              throw new r(
                'cannot specify properties ' +
                  i.slice(0, -1).join(', ') +
                  ' and ' +
                  i.slice(-1) +
                  ' together'
              );
            if (0 == i.length && e)
              throw new r('one of ' + o.join(', ') + ' is required');
            return n;
          };
        }),
        (n.mutuallyExclusivePropertiesRequired = function(t) {
          return n.mutuallyExclusiveProperties(t, !0);
        }),
        (n.compose = function(t) {
          return function(e) {
            return (
              t.forEach(function(t) {
                e = t(e);
              }),
              e
            );
          };
        }),
        (n.boolean = n.compose([
          n.that(function(t) {
            return 'boolean' == typeof t;
          }, 'not a boolean'),
          function(t) {
            return t || void 0;
          }
        ])),
        (n.deprecate = function(t) {
          var e = {};
          return (
            t.forEach(function(t) {
              e[t] = !0;
            }),
            function(t) {
              return (
                e[t] &&
                  process.emitWarning(
                    'Value, ' +
                      t +
                      ', is deprecated. See https://developers.google.com/maps/deprecations.'
                  ),
                t
              );
            }
          );
        });
    }),
    rf = F(function(t, e) {
      /**
       * @license
       * Copyright 2016 Google Inc. All Rights Reserved.
       *
       * Licensed under the Apache License, Version 2.0 (the "License");
       * you may not use this file except in compliance with the License.
       * You may obtain a copy of the License at
       *
       *     http://www.apache.org/licenses/LICENSE-2.0
       *
       * Unless required by applicable law or agreed to in writing, software
       * distributed under the License is distributed on an "AS IS" BASIS,
       * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
       * See the License for the specific language governing permissions and
       * limitations under the License.
       */
      var n = function(t) {
        return Array.isArray(t) ? t : [t];
      };
      (e.pipedKeyValues = function(t) {
        if (!t || 'object' != typeof t)
          throw new nf.InvalidValueError('not an Object');
        return Object.keys(t)
          .sort()
          .map(function(e) {
            return 'object' == typeof t[e]
              ? t[e]
                  .map(function(t) {
                    return e + ':' + t;
                  })
                  .join('|')
              : e + ':' + t[e];
          })
          .join('|');
      }),
        (e.locations = function(t) {
          return (
            Array.isArray(t) &&
              2 == t.length &&
              'number' == typeof t[0] &&
              'number' == typeof t[1] &&
              (t = [t]),
            n(t)
              .map(e.latLng)
              .join('|')
          );
        }),
        (e.arrayOf = function(t, e) {
          var r = nf.array(t);
          return function(t) {
            return (t = r(n(t))).join(e || '|');
          };
        }),
        (e.latLng = function(t) {
          if (!t) throw new nf.InvalidValueError();
          return (
            null != t.lat && null != t.lng
              ? (t = [t.lat, t.lng])
              : null != t.latitude &&
                null != t.longitude &&
                (t = [t.latitude, t.longitude]),
            n(t).join(',')
          );
        });
      var r = nf.object({
        south: nf.number,
        west: nf.number,
        north: nf.number,
        east: nf.number
      });
      (e.bounds = function(t) {
        return (t = r(t)).south + ',' + t.west + '|' + t.north + ',' + t.east;
      }),
        (e.timeStamp = function(t) {
          return (
            null == t && (t = new Date()),
            t.getTime ? ((t = t.getTime()), Math.round(t / 1e3)) : t
          );
        }),
        (e.retryOptions = nf.object({
          timeout: nf.optional(nf.number),
          interval: nf.optional(nf.number),
          increment: nf.optional(nf.number),
          jitter: nf.optional(nf.number)
        }));
    }),
    of =
      (rf.pipedKeyValues,
      rf.locations,
      rf.arrayOf,
      rf.latLng,
      rf.bounds,
      rf.timeStamp,
      rf.retryOptions,
      {
        geocode: {
          url: 'https://maps.googleapis.com/maps/api/geocode/json',
          validator: nf.object({
            address: nf.optional(nf.string),
            components: nf.optional(rf.pipedKeyValues),
            bounds: nf.optional(rf.bounds),
            region: nf.optional(nf.string),
            language: nf.optional(nf.string),
            retryOptions: nf.optional(rf.retryOptions),
            timeout: nf.optional(nf.number)
          })
        },
        reverseGeocode: {
          url: 'https://maps.googleapis.com/maps/api/geocode/json',
          validator: nf.compose([
            nf.mutuallyExclusiveProperties(['place_id', 'latlng']),
            nf.mutuallyExclusiveProperties(['place_id', 'result_type']),
            nf.mutuallyExclusiveProperties(['place_id', 'location_type']),
            nf.object({
              latlng: nf.optional(rf.latLng),
              place_id: nf.optional(nf.string),
              result_type: nf.optional(rf.arrayOf(nf.string)),
              location_type: nf.optional(
                rf.arrayOf(
                  nf.oneOf([
                    'ROOFTOP',
                    'RANGE_INTERPOLATED',
                    'GEOMETRIC_CENTER',
                    'APPROXIMATE'
                  ])
                )
              ),
              language: nf.optional(nf.string),
              retryOptions: nf.optional(rf.retryOptions),
              timeout: nf.optional(nf.number)
            })
          ])
        }
      }),
    sf = {
      geolocate: {
        url: 'https://www.googleapis.com/geolocation/v1/geolocate',
        options: {
          method: 'POST',
          headers: { 'content-type': 'application/json;' },
          canRetry: function(t) {
            return 403 === t.status;
          },
          isSuccessful: function(t) {
            return 200 === t.status || 404 === t.status;
          }
        },
        validator: nf.object({
          homeMobileCountryCode: nf.optional(nf.number),
          homeMobileNetworkCode: nf.optional(nf.number),
          radioType: nf.optional(nf.string),
          carrier: nf.optional(nf.string),
          considerIp: nf.optional(nf.boolean),
          cellTowers: nf.optional(
            nf.array(
              nf.object({
                cellId: nf.number,
                locationAreaCode: nf.number,
                mobileCountryCode: nf.number,
                mobileNetworkCode: nf.number,
                age: nf.optional(nf.number),
                signalStrength: nf.optional(nf.number),
                timingAdvance: nf.optional(nf.number)
              })
            )
          ),
          wifiAccessPoints: nf.optional(
            nf.array(
              nf.object({
                macAddress: nf.string,
                signalStrength: nf.optional(nf.number),
                age: nf.optional(nf.number),
                channel: nf.optional(nf.number),
                signalToNoiseRatio: nf.optional(nf.number)
              })
            )
          ),
          retryOptions: nf.optional(rf.retryOptions),
          timeout: nf.optional(nf.number)
        })
      }
    },
    uf = {
      timezone: {
        url: 'https://maps.googleapis.com/maps/api/timezone/json',
        validator: nf.object({
          location: rf.latLng,
          timestamp: rf.timeStamp,
          language: nf.optional(nf.string),
          retryOptions: nf.optional(rf.retryOptions),
          timeout: nf.optional(nf.number)
        })
      }
    },
    cf = {
      directions: {
        url: 'https://maps.googleapis.com/maps/api/directions/json',
        validator: nf.compose([
          nf.mutuallyExclusiveProperties(['arrival_time', 'departure_time']),
          nf.object({
            origin: rf.latLng,
            destination: rf.latLng,
            mode: nf.optional(
              nf.oneOf(['driving', 'walking', 'bicycling', 'transit'])
            ),
            waypoints: nf.optional(rf.arrayOf(rf.latLng)),
            alternatives: nf.optional(nf.boolean),
            avoid: nf.optional(
              rf.arrayOf(nf.oneOf(['tolls', 'highways', 'ferries', 'indoor']))
            ),
            language: nf.optional(nf.string),
            units: nf.optional(nf.oneOf(['metric', 'imperial'])),
            region: nf.optional(nf.string),
            departure_time: nf.optional(rf.timeStamp),
            arrival_time: nf.optional(rf.timeStamp),
            traffic_model: nf.optional(
              nf.oneOf(['best_guess', 'pessimistic', 'optimistic'])
            ),
            transit_mode: nf.optional(
              rf.arrayOf(nf.oneOf(['bus', 'subway', 'train', 'tram', 'rail']))
            ),
            transit_routing_preference: nf.optional(
              nf.oneOf(['less_walking', 'fewer_transfers'])
            ),
            optimize: nf.optional(nf.boolean),
            retryOptions: nf.optional(rf.retryOptions),
            timeout: nf.optional(nf.number)
          }),
          function(t) {
            if (
              (t.waypoints &&
                t.optimize &&
                (t.waypoints = 'optimize:true|' + t.waypoints),
              delete t.optimize,
              t.waypoints && 'transit' === t.mode)
            )
              throw new nf.InvalidValueError(
                'cannot specify waypoints with transit'
              );
            if (t.traffic_model && !t.departure_time)
              throw new nf.InvalidValueError(
                'traffic_model requires departure_time'
              );
            return t;
          }
        ])
      }
    },
    af = {
      distanceMatrix: {
        url: 'https://maps.googleapis.com/maps/api/distancematrix/json',
        validator: nf.compose([
          nf.mutuallyExclusiveProperties(['arrival_time', 'departure_time']),
          nf.object({
            origins: rf.arrayOf(rf.latLng),
            destinations: rf.arrayOf(rf.latLng),
            mode: nf.optional(
              nf.oneOf(['driving', 'walking', 'bicycling', 'transit'])
            ),
            language: nf.optional(nf.string),
            region: nf.optional(nf.string),
            avoid: nf.optional(
              rf.arrayOf(nf.oneOf(['tolls', 'highways', 'ferries', 'indoor']))
            ),
            units: nf.optional(nf.oneOf(['metric', 'imperial'])),
            departure_time: nf.optional(rf.timeStamp),
            arrival_time: nf.optional(rf.timeStamp),
            transit_mode: nf.optional(
              rf.arrayOf(nf.oneOf(['bus', 'subway', 'train', 'tram', 'rail']))
            ),
            transit_routing_preference: nf.optional(
              nf.oneOf(['less_walking', 'fewer_transfers'])
            ),
            traffic_model: nf.optional(
              nf.oneOf(['best_guess', 'pessimistic', 'optimistic'])
            ),
            retryOptions: nf.optional(rf.retryOptions),
            timeout: nf.optional(nf.number)
          })
        ])
      }
    },
    lf = {
      elevation: {
        url: 'https://maps.googleapis.com/maps/api/elevation/json',
        validator: nf.object({
          locations: rf.arrayOf(rf.latLng),
          retryOptions: nf.optional(rf.retryOptions),
          timeout: nf.optional(nf.number)
        })
      },
      elevationAlongPath: {
        url: 'https://maps.googleapis.com/maps/api/elevation/json',
        validator: nf.object({
          path: function(t) {
            return 'string' == typeof t ? 'enc:' + t : rf.arrayOf(rf.latLng)(t);
          },
          samples: nf.number,
          retryOptions: nf.optional(rf.retryOptions),
          timeout: nf.optional(nf.number)
        })
      }
    },
    hf = {
      snapToRoads: {
        url: 'https://roads.googleapis.com/v1/snapToRoads',
        supportsClientId: !1,
        validator: nf.object({
          path: rf.arrayOf(rf.latLng),
          interpolate: nf.optional(nf.boolean),
          retryOptions: nf.optional(rf.retryOptions),
          timeout: nf.optional(nf.number)
        })
      },
      nearestRoads: {
        url: 'https://roads.googleapis.com/v1/nearestRoads',
        supportsClientId: !1,
        validator: nf.object({
          points: rf.arrayOf(rf.latLng),
          retryOptions: nf.optional(rf.retryOptions),
          timeout: nf.optional(nf.number)
        })
      },
      speedLimits: {
        url: 'https://roads.googleapis.com/v1/speedLimits',
        supportsClientId: !1,
        validator: nf.object({
          placeId: nf.array(nf.string),
          units: nf.optional(nf.oneOf(['KPH', 'MPH'])),
          retryOptions: nf.optional(rf.retryOptions),
          timeout: nf.optional(nf.number)
        })
      },
      snappedSpeedLimits: {
        url: 'https://roads.googleapis.com/v1/speedLimits',
        supportsClientId: !1,
        validator: nf.object({
          path: rf.arrayOf(rf.latLng),
          units: nf.optional(nf.oneOf(['KPH', 'MPH'])),
          retryOptions: nf.optional(rf.retryOptions),
          timeout: nf.optional(nf.number)
        })
      }
    },
    ff = {
      findPlace: {
        url:
          'https://maps.googleapis.com/maps/api/place/findplacefromtext/json',
        validator: nf.compose([
          nf.object({
            input: nf.string,
            inputtype: nf.oneOf(['textquery', 'phonenumber']),
            language: nf.optional(nf.string),
            fields: nf.optional(
              rf.arrayOf(
                nf.compose([
                  nf.oneOf([
                    'formatted_address',
                    'geometry',
                    'geometry/location',
                    'geometry/location/lat',
                    'geometry/location/lng',
                    'geometry/viewport',
                    'geometry/viewport/northeast',
                    'geometry/viewport/northeast/lat',
                    'geometry/viewport/northeast/lng',
                    'geometry/viewport/southwest',
                    'geometry/viewport/southwest/lat',
                    'geometry/viewport/southwest/lng',
                    'icon',
                    'id',
                    'name',
                    'permanently_closed',
                    'photos',
                    'place_id',
                    'scope',
                    'types',
                    'vicinity',
                    'opening_hours',
                    'price_level',
                    'rating',
                    'plus_code'
                  ]),
                  nf.deprecate(['alt_id', 'id', 'reference', 'scope'])
                ]),
                ','
              )
            ),
            locationbias: nf.optional(nf.string),
            retryOptions: nf.optional(rf.retryOptions),
            timeout: nf.optional(nf.number)
          }),
          function(t) {
            if (!t.locationbias || 'ipbias' == t.locationbias) return t;
            var e = function(t) {
                return (
                  2 == (t = t.split(',')).length && !isNaN(t[0]) && !isNaN(t[1])
                );
              },
              n = t.locationbias.split(':');
            switch (n[0]) {
              case 'point':
                if (e(n[n.length - 1])) return t;
                break;
              case 'circle':
                if (
                  ((n = n[n.length - 1].split('@')),
                  !isNaN(n[0]) && e(n[n.length - 1]))
                )
                  return t;
                break;
              case 'rectangle':
                if (
                  2 == (n = n[n.length - 1].split('|')).length &&
                  e(n[0]) &&
                  e(n[1])
                )
                  return t;
            }
            throw new nf.InvalidValueError('invalid locationbias');
          }
        ])
      },
      places: {
        url: 'https://maps.googleapis.com/maps/api/place/textsearch/json',
        validator: nf.object({
          query: nf.optional(nf.string),
          language: nf.optional(nf.string),
          location: nf.optional(rf.latLng),
          radius: nf.optional(nf.number),
          minprice: nf.optional(nf.number),
          maxprice: nf.optional(nf.number),
          opennow: nf.optional(nf.boolean),
          type: nf.optional(nf.string),
          pagetoken: nf.optional(nf.string),
          retryOptions: nf.optional(rf.retryOptions),
          timeout: nf.optional(nf.number),
          region: nf.optional(nf.string)
        })
      },
      placesNearby: {
        url: 'https://maps.googleapis.com/maps/api/place/nearbysearch/json',
        validator: nf.compose([
          nf.mutuallyExclusivePropertiesRequired(['location', 'pagetoken']),
          nf.object({
            location: nf.optional(rf.latLng),
            language: nf.optional(nf.string),
            radius: nf.optional(nf.number),
            keyword: nf.optional(nf.string),
            minprice: nf.optional(nf.number),
            maxprice: nf.optional(nf.number),
            name: nf.optional(nf.string),
            opennow: nf.optional(nf.boolean),
            rankby: nf.optional(nf.oneOf(['prominence', 'distance'])),
            type: nf.optional(nf.string),
            pagetoken: nf.optional(nf.string),
            retryOptions: nf.optional(rf.retryOptions),
            timeout: nf.optional(nf.number)
          })
        ])
      },
      place: {
        url: 'https://maps.googleapis.com/maps/api/place/details/json',
        validator: nf.object({
          placeid: nf.string,
          sessiontoken: nf.optional(nf.string),
          language: nf.optional(nf.string),
          fields: nf.optional(
            rf.arrayOf(
              nf.compose([
                nf.oneOf([
                  'address_component',
                  'adr_address',
                  'alt_id',
                  'formatted_address',
                  'geometry',
                  'geometry/location',
                  'geometry/location/lat',
                  'geometry/location/lng',
                  'geometry/viewport',
                  'geometry/viewport/northeast',
                  'geometry/viewport/northeast/lat',
                  'geometry/viewport/northeast/lng',
                  'geometry/viewport/southwest',
                  'geometry/viewport/southwest/lat',
                  'geometry/viewport/southwest/lng',
                  'icon',
                  'id',
                  'name',
                  'permanently_closed',
                  'photo',
                  'place_id',
                  'scope',
                  'type',
                  'url',
                  'utc_offset',
                  'vicinity',
                  'formatted_phone_number',
                  'international_phone_number',
                  'opening_hours',
                  'website',
                  'price_level',
                  'rating',
                  'reviews',
                  'user_ratings_total',
                  'plus_code'
                ]),
                nf.deprecate(['alt_id', 'id', 'reference', 'scope'])
              ]),
              ','
            )
          ),
          retryOptions: nf.optional(rf.retryOptions),
          timeout: nf.optional(nf.number)
        })
      },
      placesPhoto: {
        url: 'https://maps.googleapis.com/maps/api/place/photo',
        validator: nf.compose([
          nf.atLeastOneOfProperties(['maxwidth', 'maxheight']),
          nf.object({
            photoreference: nf.string,
            maxwidth: nf.optional(nf.number),
            maxheight: nf.optional(nf.number),
            retryOptions: nf.optional(rf.retryOptions),
            timeout: nf.optional(nf.number)
          })
        ])
      },
      placesAutoComplete: {
        url: 'https://maps.googleapis.com/maps/api/place/autocomplete/json',
        validator: nf.object({
          input: nf.string,
          sessiontoken: nf.optional(nf.string),
          offset: nf.optional(nf.number),
          location: nf.optional(rf.latLng),
          language: nf.optional(nf.string),
          radius: nf.optional(nf.number),
          origin: nf.optional(nf.string),
          types: nf.optional(
            nf.oneOf([
              'geocode',
              'address',
              'establishment',
              '(regions)',
              '(cities)'
            ])
          ),
          components: nf.optional(rf.pipedKeyValues),
          strictbounds: nf.optional(nf.boolean),
          retryOptions: nf.optional(rf.retryOptions),
          timeout: nf.optional(nf.number)
        })
      },
      placesQueryAutoComplete: {
        url:
          'https://maps.googleapis.com/maps/api/place/queryautocomplete/json',
        validator: nf.object({
          input: nf.string,
          offset: nf.optional(nf.number),
          location: nf.optional(rf.latLng),
          language: nf.optional(nf.string),
          radius: nf.optional(nf.number),
          retryOptions: nf.optional(rf.retryOptions),
          timeout: nf.optional(nf.number)
        })
      }
    },
    pf = [],
    df = 0;
  df < 256;
  ++df
)
  pf[df] = (df + 256).toString(16).substr(1);
/**
 * @license
 * Copyright 2016 Google Inc. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ var bf = function(t) {
  var e = ef((t = t || {})),
    n =
      (o.deprecate,
      function(n) {
        return function(r, i, o) {
          ((r = n.validator(r)).supportsClientId = !1 !== n.supportsClientId),
            (r.options = n.options),
            t.language && !r.language && (r.language = t.language);
          var s = {};
          return (
            [r, (o = o || {})].map(function(t) {
              Object.keys(t)
                .sort()
                .map(function(e) {
                  s[e] = t[e];
                });
            }),
            e(n.url, s, i)
          );
        };
      }),
    r = of,
    i = sf,
    s = uf,
    u = af,
    c = lf,
    a = hf,
    l = ff;
  return {
    directions: n(cf.directions),
    distanceMatrix: n(u.distanceMatrix),
    elevation: n(c.elevation),
    elevationAlongPath: n(c.elevationAlongPath),
    geocode: n(r.geocode),
    geolocate: n(i.geolocate),
    reverseGeocode: n(r.reverseGeocode),
    findPlace: n(l.findPlace),
    places: n(l.places),
    placesNearby: n(l.placesNearby),
    place: n(l.place),
    placesPhoto: n(l.placesPhoto),
    placesAutoComplete: n(l.placesAutoComplete),
    placesQueryAutoComplete: n(l.placesQueryAutoComplete),
    snapToRoads: n(a.snapToRoads),
    nearestRoads: n(a.nearestRoads),
    speedLimits: n(a.speedLimits),
    snappedSpeedLimits: n(a.snappedSpeedLimits),
    timezone: n(s.timezone)
  };
};
function vf() {
  return bf({ key: process.env.WAY_CLI_API_KEY, Promise: Promise });
}
var yf = [
    {
      name: 'origin',
      type: 'input',
      message: 'Specify origin',
      default: '',
      validate: function(t) {
        return !!t;
      }
    },
    {
      name: 'destination',
      type: 'input',
      message: 'Specify destination',
      default: '',
      validate: function(t) {
        return !!t;
      }
    }
  ],
  gf = t =>
    encodeURIComponent(t).replace(
      /[!'()*]/g,
      t =>
        `%${t
          .charCodeAt(0)
          .toString(16)
          .toUpperCase()}`
    );
function mf(t, e) {
  return e.encode ? (e.strict ? gf(t) : encodeURIComponent(t)) : t;
}
var Df = (t, e) => {
    if (!t) return '';
    const n = (function(t) {
        switch (t.arrayFormat) {
          case 'index':
            return e => (n, r) => {
              const i = n.length;
              return void 0 === r || (t.skipNull && null === r)
                ? n
                : null === r
                ? [...n, [mf(e, t), '[', i, ']'].join('')]
                : [...n, [mf(e, t), '[', mf(i, t), ']=', mf(r, t)].join('')];
            };
          case 'bracket':
            return e => (n, r) =>
              void 0 === r || (t.skipNull && null === r)
                ? n
                : null === r
                ? [...n, [mf(e, t), '[]'].join('')]
                : [...n, [mf(e, t), '[]=', mf(r, t)].join('')];
          case 'comma':
            return e => (n, r) =>
              null == r || 0 === r.length
                ? n
                : 0 === n.length
                ? [[mf(e, t), '=', mf(r, t)].join('')]
                : [[n, mf(r, t)].join(',')];
          default:
            return e => (n, r) =>
              void 0 === r || (t.skipNull && null === r)
                ? n
                : null === r
                ? [...n, mf(e, t)]
                : [...n, [mf(e, t), '=', mf(r, t)].join('')];
        }
      })(
        (e = Object.assign({ encode: !0, strict: !0, arrayFormat: 'none' }, e))
      ),
      r = Object.assign({}, t);
    if (e.skipNull)
      for (const t of Object.keys(r))
        (void 0 !== r[t] && null !== r[t]) || delete r[t];
    const i = Object.keys(r);
    return (
      !1 !== e.sort && i.sort(e.sort),
      i
        .map(r => {
          const i = t[r];
          return void 0 === i
            ? ''
            : null === i
            ? mf(r, e)
            : Array.isArray(i)
            ? i.reduce(n(r), []).join('&')
            : mf(r, e) + '=' + mf(i, e);
        })
        .filter(t => t.length > 0)
        .join('&')
    );
  },
  wf = F(function(t) {
    const e = () => {
      if ('linux' !== process.platform) return !1;
      if (
        s
          .release()
          .toLowerCase()
          .includes('microsoft')
      )
        return !0;
      try {
        return i
          .readFileSync('/proc/version', 'utf8')
          .toLowerCase()
          .includes('microsoft');
      } catch (t) {
        return !1;
      }
    };
    process.env.__IS_WSL_TEST__ ? (t.exports = e) : (t.exports = e());
  });
const { promisify: _f } = o,
  Cf = _f(i.access),
  xf = _f(e.execFile),
  Ef = n.join(__dirname, 'xdg-open');
var Ff = async (t, n) => {
  if ('string' != typeof t) throw new TypeError('Expected a `target`');
  let r;
  n = { wait: !1, background: !1, url: !1, ...n };
  let o = [];
  const s = [],
    u = {};
  if (
    (Array.isArray(n.app) && ((o = n.app.slice(1)), (n.app = n.app[0])),
    n.url && (t = encodeURI(t)),
    'darwin' === process.platform)
  )
    (r = 'open'),
      n.wait && s.push('--wait-apps'),
      n.background && s.push('--background'),
      n.app && s.push('-a', n.app);
  else if ('win32' === process.platform || wf) {
    if (
      ((r = 'cmd' + (wf ? '.exe' : '')),
      s.push('/s', '/c', 'start', '""', '/b'),
      (t = `"${t}"`),
      (u.windowsVerbatimArguments = !0),
      n.wait && s.push('/wait'),
      n.app)
    ) {
      if (wf && n.app.startsWith('/mnt/')) {
        const t = await (async t => {
          const { stdout: e } = await xf('wslpath', ['-w', t]);
          return e.trim();
        })(n.app);
        n.app = t;
      }
      s.push(n.app);
    }
    o.length > 0 && s.push(...o);
  } else {
    if (n.app) r = n.app;
    else {
      const t = !__dirname || '/' === __dirname;
      let e = !1;
      try {
        await Cf(Ef, i.constants.X_OK), (e = !0);
      } catch (t) {}
      r =
        process.versions.electron || 'android' === process.platform || t || !e
          ? 'xdg-open'
          : Ef;
    }
    o.length > 0 && s.push(...o),
      n.wait || ((u.stdio = 'ignore'), (u.detached = !0));
  }
  s.push(t),
    'darwin' === process.platform && o.length > 0 && s.push('--args', ...o);
  const c = e.spawn(r, s, u);
  return n.wait
    ? new Promise((t, e) => {
        c.once('error', e),
          c.once('close', n => {
            n > 0 ? e(new Error(`Exited with code ${n}`)) : t(c);
          });
      })
    : (c.unref(), c);
};
function Sf(t, e) {
  return w(this, void 0, void 0, function() {
    var n, r, i, o, s, u;
    return _(this, function(c) {
      switch (c.label) {
        case 0:
          return (
            c.trys.push([0, 2, , 3]),
            (n = t.origin),
            (r = t.destination),
            (i = e.language),
            (o = e.mode),
            (s = e.units),
            [
              4,
              vf()
                .directions({
                  origin: n,
                  destination: r,
                  language: i,
                  mode: o,
                  units: s
                })
                .asPromise()
            ]
          );
        case 1:
          return [2, c.sent()];
        case 2:
          return (u = c.sent()), fh(u), [3, 3];
        case 3:
          return [2];
      }
    });
  });
}
function Of(t, e, n) {
  return w(this, void 0, Promise, function() {
    var r, i, o, s, u, c, a;
    return _(this, function(l) {
      return (
        'https://www.google.com/maps/dir/?api=1',
        (r = t.geocoded_waypoints),
        (i = e.origin),
        (o = e.destination),
        (s = r[0]),
        (u = r[1]),
        (c = n.mode),
        (a = {
          origin: i,
          destination: o,
          origin_place_id: s.place_id,
          destination_place_id: u.place_id,
          travel_mode: c
        }),
        [2, 'https://www.google.com/maps/dir/?api=1&' + Df(a)]
      );
    });
  });
}
var kf = [
  {
    name: 'origins',
    type: 'input',
    message:
      'Specify origin(s). For multiple origins use the "|" as the delimiter.\nExample: "Origin A | Origin B"',
    default: '',
    validate: function(t) {
      return !!t;
    }
  },
  {
    name: 'destinations',
    type: 'input',
    message:
      'Specify destination(s). For multiple destinations use the "|" as the delimiter.\nExample: "Destination A | Destination B"',
    default: '',
    validate: function(t) {
      return !!t;
    }
  },
  {
    name: 'avoid',
    type: 'checkbox',
    message: 'Do you need to avoid anything?',
    choices: ['none', 'ferries', 'highways', 'indoor', 'tolls'],
    default: 'none'
  }
];
function Af(t) {
  return w(this, void 0, void 0, function() {
    var e, n, r, i, o, s, u;
    return _(this, function(c) {
      switch (c.label) {
        case 0:
          return (
            c.trys.push([0, 3, , 4]),
            (e = t.origins),
            (n = t.destinations),
            (r = t.avoid),
            [4, mh()]
          );
        case 1:
          return (
            (i = c.sent()),
            (o = vf()),
            (s = D({ origins: e, destinations: n }, i)),
            (0 !== r.length && r.includes('none')) || (s.avoid = r),
            [4, o.distanceMatrix(s).asPromise()]
          );
        case 2:
          return [2, c.sent()];
        case 3:
          return (u = c.sent()), fh(u), [3, 4];
        case 4:
          return [2];
      }
    });
  });
}
function jf() {
  return w(this, void 0, void 0, function() {
    var t, e, n, r, i, o, s, u, c;
    return _(this, function(a) {
      switch (a.label) {
        case 0:
          return a.trys.push([0, 3, , 4]), [4, tl.prompt(kf)];
        case 1:
          return [4, Af(a.sent())];
        case 2:
          if ((t = a.sent())) {
            if (
              ((e = t.json),
              (n = e.status),
              (r = e.error_message),
              (i = e.origin_addresses),
              (o = e.destination_addresses),
              (s = e.rows),
              'OK' !== n)
            )
              throw new Error(n + ': ' + r);
            (u = (function(t, e, n) {
              var r = [];
              return (
                n.forEach(function(n, i) {
                  var o = n.elements,
                    s = t[i];
                  o.forEach(function(t, n) {
                    var i,
                      o,
                      u,
                      c,
                      a = e[n],
                      l = t.status,
                      h = t.duration,
                      f = t.duration_in_traffic,
                      p = t.distance,
                      d = t.fare,
                      b = { origin: s, destination: a };
                    'OK' === l
                      ? r.push(
                          Object.assign(b, {
                            duration:
                              null === (i = h) || void 0 === i
                                ? void 0
                                : i.text,
                            distance:
                              null === (o = p) || void 0 === o
                                ? void 0
                                : o.text,
                            durationInTraffic:
                              null === (u = f) || void 0 === u
                                ? void 0
                                : u.text,
                            fare:
                              null === (c = d) || void 0 === c ? void 0 : c.text
                          })
                        )
                      : r.push(Object.assign(b, { error: !0 }));
                  });
                }),
                r
              );
            })(i, o, s)),
              bh(
                ['Origin', 'Destination', 'Duration', 'Distance', 'Fare'],
                u.map(function(t) {
                  return [
                    t.origin || '',
                    t.destination || '',
                    t.duration || '',
                    t.distance || '',
                    t.fare || ''
                  ];
                })
              );
          }
          return [3, 4];
        case 3:
          return (c = a.sent()), fh(c), [3, 4];
        case 4:
          return [2];
      }
    });
  });
}
T(),
  O.version('2.0.0', '-v, --version'),
  O.command('configure')
    .alias('config')
    .description('Set up common configurations for way-cli')
    .action(function() {
      return w(void 0, void 0, void 0, function() {
        return _(this, function(t) {
          return [2, Dh()];
        });
      });
    }),
  O.command('distance')
    .alias('dist')
    .description(
      'Creates a distance matrix between <origins> and <destinations>'
    )
    .action(function() {
      return jf();
    }),
  O.command('directions')
    .alias('dir')
    .description('Get directions from <origin> to <destination>')
    .action(function() {
      return (function() {
        return w(this, void 0, void 0, function() {
          var t, e, n, r;
          return _(this, function(i) {
            switch (i.label) {
              case 0:
                return [4, tl.prompt(yf)];
              case 1:
                return (t = i.sent()), [4, mh()];
              case 2:
                return (e = i.sent()), [4, Sf(t, e)];
              case 3:
                return (n = i.sent()) ? [4, Of(n.json, t, e)] : [3, 6];
              case 4:
                return (r = i.sent()), dh(r), [4, Ff(r)];
              case 5:
                i.sent(), (i.label = 6);
              case 6:
                return [2];
            }
          });
        });
      })();
    }),
  O.parse(process.argv);
//# sourceMappingURL=main.es.js.map
