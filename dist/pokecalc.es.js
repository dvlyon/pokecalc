import xe, { useRef as yo, useDebugValue as Cr, createElement as go, useContext as vo, useState as Ge, useEffect as bo } from "react";
var Yt = { exports: {} }, Je = {};
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Pr;
function wo() {
  if (Pr)
    return Je;
  Pr = 1;
  var e = xe, t = Symbol.for("react.element"), r = Symbol.for("react.fragment"), n = Object.prototype.hasOwnProperty, o = e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, s = { key: !0, ref: !0, __self: !0, __source: !0 };
  function i(c, f, u) {
    var d, h = {}, w = null, g = null;
    u !== void 0 && (w = "" + u), f.key !== void 0 && (w = "" + f.key), f.ref !== void 0 && (g = f.ref);
    for (d in f)
      n.call(f, d) && !s.hasOwnProperty(d) && (h[d] = f[d]);
    if (c && c.defaultProps)
      for (d in f = c.defaultProps, f)
        h[d] === void 0 && (h[d] = f[d]);
    return { $$typeof: t, type: c, key: w, ref: g, props: h, _owner: o.current };
  }
  return Je.Fragment = r, Je.jsx = i, Je.jsxs = i, Je;
}
var Ke = {};
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Nr;
function Eo() {
  return Nr || (Nr = 1, {}.NODE_ENV !== "production" && function() {
    var e = xe, t = Symbol.for("react.element"), r = Symbol.for("react.portal"), n = Symbol.for("react.fragment"), o = Symbol.for("react.strict_mode"), s = Symbol.for("react.profiler"), i = Symbol.for("react.provider"), c = Symbol.for("react.context"), f = Symbol.for("react.forward_ref"), u = Symbol.for("react.suspense"), d = Symbol.for("react.suspense_list"), h = Symbol.for("react.memo"), w = Symbol.for("react.lazy"), g = Symbol.for("react.offscreen"), m = Symbol.iterator, v = "@@iterator";
    function j(a) {
      if (a === null || typeof a != "object")
        return null;
      var p = m && a[m] || a[v];
      return typeof p == "function" ? p : null;
    }
    var R = e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function E(a) {
      {
        for (var p = arguments.length, y = new Array(p > 1 ? p - 1 : 0), _ = 1; _ < p; _++)
          y[_ - 1] = arguments[_];
        O("error", a, y);
      }
    }
    function O(a, p, y) {
      {
        var _ = R.ReactDebugCurrentFrame, P = _.getStackAddendum();
        P !== "" && (p += "%s", y = y.concat([P]));
        var I = y.map(function(x) {
          return String(x);
        });
        I.unshift("Warning: " + p), Function.prototype.apply.call(console[a], console, I);
      }
    }
    var C = !1, F = !1, b = !1, S = !1, re = !1, H;
    H = Symbol.for("react.module.reference");
    function we(a) {
      return !!(typeof a == "string" || typeof a == "function" || a === n || a === s || re || a === o || a === u || a === d || S || a === g || C || F || b || typeof a == "object" && a !== null && (a.$$typeof === w || a.$$typeof === h || a.$$typeof === i || a.$$typeof === c || a.$$typeof === f || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      a.$$typeof === H || a.getModuleId !== void 0));
    }
    function Ce(a, p, y) {
      var _ = a.displayName;
      if (_)
        return _;
      var P = p.displayName || p.name || "";
      return P !== "" ? y + "(" + P + ")" : y;
    }
    function Ee(a) {
      return a.displayName || "Context";
    }
    function Y(a) {
      if (a == null)
        return null;
      if (typeof a.tag == "number" && E("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof a == "function")
        return a.displayName || a.name || null;
      if (typeof a == "string")
        return a;
      switch (a) {
        case n:
          return "Fragment";
        case r:
          return "Portal";
        case s:
          return "Profiler";
        case o:
          return "StrictMode";
        case u:
          return "Suspense";
        case d:
          return "SuspenseList";
      }
      if (typeof a == "object")
        switch (a.$$typeof) {
          case c:
            var p = a;
            return Ee(p) + ".Consumer";
          case i:
            var y = a;
            return Ee(y._context) + ".Provider";
          case f:
            return Ce(a, a.render, "ForwardRef");
          case h:
            var _ = a.displayName || null;
            return _ !== null ? _ : Y(a.type) || "Memo";
          case w: {
            var P = a, I = P._payload, x = P._init;
            try {
              return Y(x(I));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    var D = Object.assign, U = 0, L, K, ne, me, ye, G, Pe;
    function Ne() {
    }
    Ne.__reactDisabledLog = !0;
    function De() {
      {
        if (U === 0) {
          L = console.log, K = console.info, ne = console.warn, me = console.error, ye = console.group, G = console.groupCollapsed, Pe = console.groupEnd;
          var a = {
            configurable: !0,
            enumerable: !0,
            value: Ne,
            writable: !0
          };
          Object.defineProperties(console, {
            info: a,
            log: a,
            warn: a,
            error: a,
            group: a,
            groupCollapsed: a,
            groupEnd: a
          });
        }
        U++;
      }
    }
    function Se() {
      {
        if (U--, U === 0) {
          var a = {
            configurable: !0,
            enumerable: !0,
            writable: !0
          };
          Object.defineProperties(console, {
            log: D({}, a, {
              value: L
            }),
            info: D({}, a, {
              value: K
            }),
            warn: D({}, a, {
              value: ne
            }),
            error: D({}, a, {
              value: me
            }),
            group: D({}, a, {
              value: ye
            }),
            groupCollapsed: D({}, a, {
              value: G
            }),
            groupEnd: D({}, a, {
              value: Pe
            })
          });
        }
        U < 0 && E("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var ge = R.ReactCurrentDispatcher, se;
    function Z(a, p, y) {
      {
        if (se === void 0)
          try {
            throw Error();
          } catch (P) {
            var _ = P.stack.trim().match(/\n( *(at )?)/);
            se = _ && _[1] || "";
          }
        return `
` + se + a;
      }
    }
    var _e = !1, fe;
    {
      var ie = typeof WeakMap == "function" ? WeakMap : Map;
      fe = new ie();
    }
    function yr(a, p) {
      if (!a || _e)
        return "";
      {
        var y = fe.get(a);
        if (y !== void 0)
          return y;
      }
      var _;
      _e = !0;
      var P = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var I;
      I = ge.current, ge.current = null, De();
      try {
        if (p) {
          var x = function() {
            throw Error();
          };
          if (Object.defineProperty(x.prototype, "props", {
            set: function() {
              throw Error();
            }
          }), typeof Reflect == "object" && Reflect.construct) {
            try {
              Reflect.construct(x, []);
            } catch (de) {
              _ = de;
            }
            Reflect.construct(a, [], x);
          } else {
            try {
              x.call();
            } catch (de) {
              _ = de;
            }
            a.call(x.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (de) {
            _ = de;
          }
          a();
        }
      } catch (de) {
        if (de && _ && typeof de.stack == "string") {
          for (var T = de.stack.split(`
`), J = _.stack.split(`
`), $ = T.length - 1, M = J.length - 1; $ >= 1 && M >= 0 && T[$] !== J[M]; )
            M--;
          for (; $ >= 1 && M >= 0; $--, M--)
            if (T[$] !== J[M]) {
              if ($ !== 1 || M !== 1)
                do
                  if ($--, M--, M < 0 || T[$] !== J[M]) {
                    var Q = `
` + T[$].replace(" at new ", " at ");
                    return a.displayName && Q.includes("<anonymous>") && (Q = Q.replace("<anonymous>", a.displayName)), typeof a == "function" && fe.set(a, Q), Q;
                  }
                while ($ >= 1 && M >= 0);
              break;
            }
        }
      } finally {
        _e = !1, ge.current = I, Se(), Error.prepareStackTrace = P;
      }
      var Ie = a ? a.displayName || a.name : "", Ar = Ie ? Z(Ie) : "";
      return typeof a == "function" && fe.set(a, Ar), Ar;
    }
    function Yn(a, p, y) {
      return yr(a, !1);
    }
    function Gn(a) {
      var p = a.prototype;
      return !!(p && p.isReactComponent);
    }
    function nt(a, p, y) {
      if (a == null)
        return "";
      if (typeof a == "function")
        return yr(a, Gn(a));
      if (typeof a == "string")
        return Z(a);
      switch (a) {
        case u:
          return Z("Suspense");
        case d:
          return Z("SuspenseList");
      }
      if (typeof a == "object")
        switch (a.$$typeof) {
          case f:
            return Yn(a.render);
          case h:
            return nt(a.type, p, y);
          case w: {
            var _ = a, P = _._payload, I = _._init;
            try {
              return nt(I(P), p, y);
            } catch {
            }
          }
        }
      return "";
    }
    var ot = Object.prototype.hasOwnProperty, gr = {}, vr = R.ReactDebugCurrentFrame;
    function st(a) {
      if (a) {
        var p = a._owner, y = nt(a.type, a._source, p ? p.type : null);
        vr.setExtraStackFrame(y);
      } else
        vr.setExtraStackFrame(null);
    }
    function Jn(a, p, y, _, P) {
      {
        var I = Function.call.bind(ot);
        for (var x in a)
          if (I(a, x)) {
            var T = void 0;
            try {
              if (typeof a[x] != "function") {
                var J = Error((_ || "React class") + ": " + y + " type `" + x + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof a[x] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw J.name = "Invariant Violation", J;
              }
              T = a[x](p, x, _, y, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch ($) {
              T = $;
            }
            T && !(T instanceof Error) && (st(P), E("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", _ || "React class", y, x, typeof T), st(null)), T instanceof Error && !(T.message in gr) && (gr[T.message] = !0, st(P), E("Failed %s type: %s", y, T.message), st(null));
          }
      }
    }
    var Kn = Array.isArray;
    function Pt(a) {
      return Kn(a);
    }
    function Xn(a) {
      {
        var p = typeof Symbol == "function" && Symbol.toStringTag, y = p && a[Symbol.toStringTag] || a.constructor.name || "Object";
        return y;
      }
    }
    function Zn(a) {
      try {
        return br(a), !1;
      } catch {
        return !0;
      }
    }
    function br(a) {
      return "" + a;
    }
    function wr(a) {
      if (Zn(a))
        return E("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", Xn(a)), br(a);
    }
    var Ye = R.ReactCurrentOwner, Qn = {
      key: !0,
      ref: !0,
      __self: !0,
      __source: !0
    }, Er, Sr, Nt;
    Nt = {};
    function eo(a) {
      if (ot.call(a, "ref")) {
        var p = Object.getOwnPropertyDescriptor(a, "ref").get;
        if (p && p.isReactWarning)
          return !1;
      }
      return a.ref !== void 0;
    }
    function to(a) {
      if (ot.call(a, "key")) {
        var p = Object.getOwnPropertyDescriptor(a, "key").get;
        if (p && p.isReactWarning)
          return !1;
      }
      return a.key !== void 0;
    }
    function ro(a, p) {
      if (typeof a.ref == "string" && Ye.current && p && Ye.current.stateNode !== p) {
        var y = Y(Ye.current.type);
        Nt[y] || (E('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', Y(Ye.current.type), a.ref), Nt[y] = !0);
      }
    }
    function no(a, p) {
      {
        var y = function() {
          Er || (Er = !0, E("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", p));
        };
        y.isReactWarning = !0, Object.defineProperty(a, "key", {
          get: y,
          configurable: !0
        });
      }
    }
    function oo(a, p) {
      {
        var y = function() {
          Sr || (Sr = !0, E("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", p));
        };
        y.isReactWarning = !0, Object.defineProperty(a, "ref", {
          get: y,
          configurable: !0
        });
      }
    }
    var so = function(a, p, y, _, P, I, x) {
      var T = {
        // This tag allows us to uniquely identify this as a React Element
        $$typeof: t,
        // Built-in properties that belong on the element
        type: a,
        key: p,
        ref: y,
        props: x,
        // Record the component responsible for creating this element.
        _owner: I
      };
      return T._store = {}, Object.defineProperty(T._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: !1
      }), Object.defineProperty(T, "_self", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: _
      }), Object.defineProperty(T, "_source", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: P
      }), Object.freeze && (Object.freeze(T.props), Object.freeze(T)), T;
    };
    function io(a, p, y, _, P) {
      {
        var I, x = {}, T = null, J = null;
        y !== void 0 && (wr(y), T = "" + y), to(p) && (wr(p.key), T = "" + p.key), eo(p) && (J = p.ref, ro(p, P));
        for (I in p)
          ot.call(p, I) && !Qn.hasOwnProperty(I) && (x[I] = p[I]);
        if (a && a.defaultProps) {
          var $ = a.defaultProps;
          for (I in $)
            x[I] === void 0 && (x[I] = $[I]);
        }
        if (T || J) {
          var M = typeof a == "function" ? a.displayName || a.name || "Unknown" : a;
          T && no(x, M), J && oo(x, M);
        }
        return so(a, T, J, P, _, Ye.current, x);
      }
    }
    var Dt = R.ReactCurrentOwner, _r = R.ReactDebugCurrentFrame;
    function je(a) {
      if (a) {
        var p = a._owner, y = nt(a.type, a._source, p ? p.type : null);
        _r.setExtraStackFrame(y);
      } else
        _r.setExtraStackFrame(null);
    }
    var jt;
    jt = !1;
    function It(a) {
      return typeof a == "object" && a !== null && a.$$typeof === t;
    }
    function Rr() {
      {
        if (Dt.current) {
          var a = Y(Dt.current.type);
          if (a)
            return `

Check the render method of \`` + a + "`.";
        }
        return "";
      }
    }
    function ao(a) {
      {
        if (a !== void 0) {
          var p = a.fileName.replace(/^.*[\\\/]/, ""), y = a.lineNumber;
          return `

Check your code at ` + p + ":" + y + ".";
        }
        return "";
      }
    }
    var kr = {};
    function co(a) {
      {
        var p = Rr();
        if (!p) {
          var y = typeof a == "string" ? a : a.displayName || a.name;
          y && (p = `

Check the top-level render call using <` + y + ">.");
        }
        return p;
      }
    }
    function Tr(a, p) {
      {
        if (!a._store || a._store.validated || a.key != null)
          return;
        a._store.validated = !0;
        var y = co(p);
        if (kr[y])
          return;
        kr[y] = !0;
        var _ = "";
        a && a._owner && a._owner !== Dt.current && (_ = " It was passed a child from " + Y(a._owner.type) + "."), je(a), E('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', y, _), je(null);
      }
    }
    function Or(a, p) {
      {
        if (typeof a != "object")
          return;
        if (Pt(a))
          for (var y = 0; y < a.length; y++) {
            var _ = a[y];
            It(_) && Tr(_, p);
          }
        else if (It(a))
          a._store && (a._store.validated = !0);
        else if (a) {
          var P = j(a);
          if (typeof P == "function" && P !== a.entries)
            for (var I = P.call(a), x; !(x = I.next()).done; )
              It(x.value) && Tr(x.value, p);
        }
      }
    }
    function uo(a) {
      {
        var p = a.type;
        if (p == null || typeof p == "string")
          return;
        var y;
        if (typeof p == "function")
          y = p.propTypes;
        else if (typeof p == "object" && (p.$$typeof === f || // Note: Memo only checks outer props here.
        // Inner props are checked in the reconciler.
        p.$$typeof === h))
          y = p.propTypes;
        else
          return;
        if (y) {
          var _ = Y(p);
          Jn(y, a.props, "prop", _, a);
        } else if (p.PropTypes !== void 0 && !jt) {
          jt = !0;
          var P = Y(p);
          E("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", P || "Unknown");
        }
        typeof p.getDefaultProps == "function" && !p.getDefaultProps.isReactClassApproved && E("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
      }
    }
    function lo(a) {
      {
        for (var p = Object.keys(a.props), y = 0; y < p.length; y++) {
          var _ = p[y];
          if (_ !== "children" && _ !== "key") {
            je(a), E("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", _), je(null);
            break;
          }
        }
        a.ref !== null && (je(a), E("Invalid attribute `ref` supplied to `React.Fragment`."), je(null));
      }
    }
    function xr(a, p, y, _, P, I) {
      {
        var x = we(a);
        if (!x) {
          var T = "";
          (a === void 0 || typeof a == "object" && a !== null && Object.keys(a).length === 0) && (T += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var J = ao(P);
          J ? T += J : T += Rr();
          var $;
          a === null ? $ = "null" : Pt(a) ? $ = "array" : a !== void 0 && a.$$typeof === t ? ($ = "<" + (Y(a.type) || "Unknown") + " />", T = " Did you accidentally export a JSX literal instead of a component?") : $ = typeof a, E("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", $, T);
        }
        var M = io(a, p, y, P, I);
        if (M == null)
          return M;
        if (x) {
          var Q = p.children;
          if (Q !== void 0)
            if (_)
              if (Pt(Q)) {
                for (var Ie = 0; Ie < Q.length; Ie++)
                  Or(Q[Ie], a);
                Object.freeze && Object.freeze(Q);
              } else
                E("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
            else
              Or(Q, a);
        }
        return a === n ? lo(M) : uo(M), M;
      }
    }
    function fo(a, p, y) {
      return xr(a, p, y, !0);
    }
    function po(a, p, y) {
      return xr(a, p, y, !1);
    }
    var ho = po, mo = fo;
    Ke.Fragment = n, Ke.jsx = ho, Ke.jsxs = mo;
  }()), Ke;
}
({}).NODE_ENV === "production" ? Yt.exports = wo() : Yt.exports = Eo();
var q = Yt.exports;
function cn(e, t) {
  return function() {
    return e.apply(t, arguments);
  };
}
const { toString: So } = Object.prototype, { getPrototypeOf: ir } = Object, wt = ((e) => (t) => {
  const r = So.call(t);
  return e[r] || (e[r] = r.slice(8, -1).toLowerCase());
})(/* @__PURE__ */ Object.create(null)), ue = (e) => (e = e.toLowerCase(), (t) => wt(t) === e), Et = (e) => (t) => typeof t === e, { isArray: Ve } = Array, et = Et("undefined");
function _o(e) {
  return e !== null && !et(e) && e.constructor !== null && !et(e.constructor) && ee(e.constructor.isBuffer) && e.constructor.isBuffer(e);
}
const un = ue("ArrayBuffer");
function Ro(e) {
  let t;
  return typeof ArrayBuffer < "u" && ArrayBuffer.isView ? t = ArrayBuffer.isView(e) : t = e && e.buffer && un(e.buffer), t;
}
const ko = Et("string"), ee = Et("function"), ln = Et("number"), St = (e) => e !== null && typeof e == "object", To = (e) => e === !0 || e === !1, ut = (e) => {
  if (wt(e) !== "object")
    return !1;
  const t = ir(e);
  return (t === null || t === Object.prototype || Object.getPrototypeOf(t) === null) && !(Symbol.toStringTag in e) && !(Symbol.iterator in e);
}, Oo = ue("Date"), xo = ue("File"), Ao = ue("Blob"), Co = ue("FileList"), Po = (e) => St(e) && ee(e.pipe), No = (e) => {
  let t;
  return e && (typeof FormData == "function" && e instanceof FormData || ee(e.append) && ((t = wt(e)) === "formdata" || // detect form-data instance
  t === "object" && ee(e.toString) && e.toString() === "[object FormData]"));
}, Do = ue("URLSearchParams"), jo = (e) => e.trim ? e.trim() : e.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, "");
function tt(e, t, { allOwnKeys: r = !1 } = {}) {
  if (e === null || typeof e > "u")
    return;
  let n, o;
  if (typeof e != "object" && (e = [e]), Ve(e))
    for (n = 0, o = e.length; n < o; n++)
      t.call(null, e[n], n, e);
  else {
    const s = r ? Object.getOwnPropertyNames(e) : Object.keys(e), i = s.length;
    let c;
    for (n = 0; n < i; n++)
      c = s[n], t.call(null, e[c], c, e);
  }
}
function fn(e, t) {
  t = t.toLowerCase();
  const r = Object.keys(e);
  let n = r.length, o;
  for (; n-- > 0; )
    if (o = r[n], t === o.toLowerCase())
      return o;
  return null;
}
const dn = (() => typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : global)(), pn = (e) => !et(e) && e !== dn;
function Gt() {
  const { caseless: e } = pn(this) && this || {}, t = {}, r = (n, o) => {
    const s = e && fn(t, o) || o;
    ut(t[s]) && ut(n) ? t[s] = Gt(t[s], n) : ut(n) ? t[s] = Gt({}, n) : Ve(n) ? t[s] = n.slice() : t[s] = n;
  };
  for (let n = 0, o = arguments.length; n < o; n++)
    arguments[n] && tt(arguments[n], r);
  return t;
}
const Io = (e, t, r, { allOwnKeys: n } = {}) => (tt(t, (o, s) => {
  r && ee(o) ? e[s] = cn(o, r) : e[s] = o;
}, { allOwnKeys: n }), e), Fo = (e) => (e.charCodeAt(0) === 65279 && (e = e.slice(1)), e), Lo = (e, t, r, n) => {
  e.prototype = Object.create(t.prototype, n), e.prototype.constructor = e, Object.defineProperty(e, "super", {
    value: t.prototype
  }), r && Object.assign(e.prototype, r);
}, Bo = (e, t, r, n) => {
  let o, s, i;
  const c = {};
  if (t = t || {}, e == null)
    return t;
  do {
    for (o = Object.getOwnPropertyNames(e), s = o.length; s-- > 0; )
      i = o[s], (!n || n(i, e, t)) && !c[i] && (t[i] = e[i], c[i] = !0);
    e = r !== !1 && ir(e);
  } while (e && (!r || r(e, t)) && e !== Object.prototype);
  return t;
}, $o = (e, t, r) => {
  e = String(e), (r === void 0 || r > e.length) && (r = e.length), r -= t.length;
  const n = e.indexOf(t, r);
  return n !== -1 && n === r;
}, Uo = (e) => {
  if (!e)
    return null;
  if (Ve(e))
    return e;
  let t = e.length;
  if (!ln(t))
    return null;
  const r = new Array(t);
  for (; t-- > 0; )
    r[t] = e[t];
  return r;
}, Mo = ((e) => (t) => e && t instanceof e)(typeof Uint8Array < "u" && ir(Uint8Array)), qo = (e, t) => {
  const n = (e && e[Symbol.iterator]).call(e);
  let o;
  for (; (o = n.next()) && !o.done; ) {
    const s = o.value;
    t.call(e, s[0], s[1]);
  }
}, zo = (e, t) => {
  let r;
  const n = [];
  for (; (r = e.exec(t)) !== null; )
    n.push(r);
  return n;
}, Vo = ue("HTMLFormElement"), Ho = (e) => e.toLowerCase().replace(
  /[-_\s]([a-z\d])(\w*)/g,
  function(r, n, o) {
    return n.toUpperCase() + o;
  }
), Dr = (({ hasOwnProperty: e }) => (t, r) => e.call(t, r))(Object.prototype), Wo = ue("RegExp"), hn = (e, t) => {
  const r = Object.getOwnPropertyDescriptors(e), n = {};
  tt(r, (o, s) => {
    t(o, s, e) !== !1 && (n[s] = o);
  }), Object.defineProperties(e, n);
}, Yo = (e) => {
  hn(e, (t, r) => {
    if (ee(e) && ["arguments", "caller", "callee"].indexOf(r) !== -1)
      return !1;
    const n = e[r];
    if (ee(n)) {
      if (t.enumerable = !1, "writable" in t) {
        t.writable = !1;
        return;
      }
      t.set || (t.set = () => {
        throw Error("Can not rewrite read-only method '" + r + "'");
      });
    }
  });
}, Go = (e, t) => {
  const r = {}, n = (o) => {
    o.forEach((s) => {
      r[s] = !0;
    });
  };
  return Ve(e) ? n(e) : n(String(e).split(t)), r;
}, Jo = () => {
}, Ko = (e, t) => (e = +e, Number.isFinite(e) ? e : t), Ft = "abcdefghijklmnopqrstuvwxyz", jr = "0123456789", mn = {
  DIGIT: jr,
  ALPHA: Ft,
  ALPHA_DIGIT: Ft + Ft.toUpperCase() + jr
}, Xo = (e = 16, t = mn.ALPHA_DIGIT) => {
  let r = "";
  const { length: n } = t;
  for (; e--; )
    r += t[Math.random() * n | 0];
  return r;
};
function Zo(e) {
  return !!(e && ee(e.append) && e[Symbol.toStringTag] === "FormData" && e[Symbol.iterator]);
}
const Qo = (e) => {
  const t = new Array(10), r = (n, o) => {
    if (St(n)) {
      if (t.indexOf(n) >= 0)
        return;
      if (!("toJSON" in n)) {
        t[o] = n;
        const s = Ve(n) ? [] : {};
        return tt(n, (i, c) => {
          const f = r(i, o + 1);
          !et(f) && (s[c] = f);
        }), t[o] = void 0, s;
      }
    }
    return n;
  };
  return r(e, 0);
}, es = ue("AsyncFunction"), ts = (e) => e && (St(e) || ee(e)) && ee(e.then) && ee(e.catch), l = {
  isArray: Ve,
  isArrayBuffer: un,
  isBuffer: _o,
  isFormData: No,
  isArrayBufferView: Ro,
  isString: ko,
  isNumber: ln,
  isBoolean: To,
  isObject: St,
  isPlainObject: ut,
  isUndefined: et,
  isDate: Oo,
  isFile: xo,
  isBlob: Ao,
  isRegExp: Wo,
  isFunction: ee,
  isStream: Po,
  isURLSearchParams: Do,
  isTypedArray: Mo,
  isFileList: Co,
  forEach: tt,
  merge: Gt,
  extend: Io,
  trim: jo,
  stripBOM: Fo,
  inherits: Lo,
  toFlatObject: Bo,
  kindOf: wt,
  kindOfTest: ue,
  endsWith: $o,
  toArray: Uo,
  forEachEntry: qo,
  matchAll: zo,
  isHTMLForm: Vo,
  hasOwnProperty: Dr,
  hasOwnProp: Dr,
  // an alias to avoid ESLint no-prototype-builtins detection
  reduceDescriptors: hn,
  freezeMethods: Yo,
  toObjectSet: Go,
  toCamelCase: Ho,
  noop: Jo,
  toFiniteNumber: Ko,
  findKey: fn,
  global: dn,
  isContextDefined: pn,
  ALPHABET: mn,
  generateString: Xo,
  isSpecCompliantForm: Zo,
  toJSONObject: Qo,
  isAsyncFn: es,
  isThenable: ts
};
function A(e, t, r, n, o) {
  Error.call(this), Error.captureStackTrace ? Error.captureStackTrace(this, this.constructor) : this.stack = new Error().stack, this.message = e, this.name = "AxiosError", t && (this.code = t), r && (this.config = r), n && (this.request = n), o && (this.response = o);
}
l.inherits(A, Error, {
  toJSON: function() {
    return {
      // Standard
      message: this.message,
      name: this.name,
      // Microsoft
      description: this.description,
      number: this.number,
      // Mozilla
      fileName: this.fileName,
      lineNumber: this.lineNumber,
      columnNumber: this.columnNumber,
      stack: this.stack,
      // Axios
      config: l.toJSONObject(this.config),
      code: this.code,
      status: this.response && this.response.status ? this.response.status : null
    };
  }
});
const yn = A.prototype, gn = {};
[
  "ERR_BAD_OPTION_VALUE",
  "ERR_BAD_OPTION",
  "ECONNABORTED",
  "ETIMEDOUT",
  "ERR_NETWORK",
  "ERR_FR_TOO_MANY_REDIRECTS",
  "ERR_DEPRECATED",
  "ERR_BAD_RESPONSE",
  "ERR_BAD_REQUEST",
  "ERR_CANCELED",
  "ERR_NOT_SUPPORT",
  "ERR_INVALID_URL"
  // eslint-disable-next-line func-names
].forEach((e) => {
  gn[e] = { value: e };
});
Object.defineProperties(A, gn);
Object.defineProperty(yn, "isAxiosError", { value: !0 });
A.from = (e, t, r, n, o, s) => {
  const i = Object.create(yn);
  return l.toFlatObject(e, i, function(f) {
    return f !== Error.prototype;
  }, (c) => c !== "isAxiosError"), A.call(i, e.message, t, r, n, o), i.cause = e, i.name = e.name, s && Object.assign(i, s), i;
};
const rs = null;
function Jt(e) {
  return l.isPlainObject(e) || l.isArray(e);
}
function vn(e) {
  return l.endsWith(e, "[]") ? e.slice(0, -2) : e;
}
function Ir(e, t, r) {
  return e ? e.concat(t).map(function(o, s) {
    return o = vn(o), !r && s ? "[" + o + "]" : o;
  }).join(r ? "." : "") : t;
}
function ns(e) {
  return l.isArray(e) && !e.some(Jt);
}
const os = l.toFlatObject(l, {}, null, function(t) {
  return /^is[A-Z]/.test(t);
});
function _t(e, t, r) {
  if (!l.isObject(e))
    throw new TypeError("target must be an object");
  t = t || new FormData(), r = l.toFlatObject(r, {
    metaTokens: !0,
    dots: !1,
    indexes: !1
  }, !1, function(v, j) {
    return !l.isUndefined(j[v]);
  });
  const n = r.metaTokens, o = r.visitor || d, s = r.dots, i = r.indexes, f = (r.Blob || typeof Blob < "u" && Blob) && l.isSpecCompliantForm(t);
  if (!l.isFunction(o))
    throw new TypeError("visitor must be a function");
  function u(m) {
    if (m === null)
      return "";
    if (l.isDate(m))
      return m.toISOString();
    if (!f && l.isBlob(m))
      throw new A("Blob is not supported. Use a Buffer instead.");
    return l.isArrayBuffer(m) || l.isTypedArray(m) ? f && typeof Blob == "function" ? new Blob([m]) : Buffer.from(m) : m;
  }
  function d(m, v, j) {
    let R = m;
    if (m && !j && typeof m == "object") {
      if (l.endsWith(v, "{}"))
        v = n ? v : v.slice(0, -2), m = JSON.stringify(m);
      else if (l.isArray(m) && ns(m) || (l.isFileList(m) || l.endsWith(v, "[]")) && (R = l.toArray(m)))
        return v = vn(v), R.forEach(function(O, C) {
          !(l.isUndefined(O) || O === null) && t.append(
            // eslint-disable-next-line no-nested-ternary
            i === !0 ? Ir([v], C, s) : i === null ? v : v + "[]",
            u(O)
          );
        }), !1;
    }
    return Jt(m) ? !0 : (t.append(Ir(j, v, s), u(m)), !1);
  }
  const h = [], w = Object.assign(os, {
    defaultVisitor: d,
    convertValue: u,
    isVisitable: Jt
  });
  function g(m, v) {
    if (!l.isUndefined(m)) {
      if (h.indexOf(m) !== -1)
        throw Error("Circular reference detected in " + v.join("."));
      h.push(m), l.forEach(m, function(R, E) {
        (!(l.isUndefined(R) || R === null) && o.call(
          t,
          R,
          l.isString(E) ? E.trim() : E,
          v,
          w
        )) === !0 && g(R, v ? v.concat(E) : [E]);
      }), h.pop();
    }
  }
  if (!l.isObject(e))
    throw new TypeError("data must be an object");
  return g(e), t;
}
function Fr(e) {
  const t = {
    "!": "%21",
    "'": "%27",
    "(": "%28",
    ")": "%29",
    "~": "%7E",
    "%20": "+",
    "%00": "\0"
  };
  return encodeURIComponent(e).replace(/[!'()~]|%20|%00/g, function(n) {
    return t[n];
  });
}
function ar(e, t) {
  this._pairs = [], e && _t(e, this, t);
}
const bn = ar.prototype;
bn.append = function(t, r) {
  this._pairs.push([t, r]);
};
bn.toString = function(t) {
  const r = t ? function(n) {
    return t.call(this, n, Fr);
  } : Fr;
  return this._pairs.map(function(o) {
    return r(o[0]) + "=" + r(o[1]);
  }, "").join("&");
};
function ss(e) {
  return encodeURIComponent(e).replace(/%3A/gi, ":").replace(/%24/g, "$").replace(/%2C/gi, ",").replace(/%20/g, "+").replace(/%5B/gi, "[").replace(/%5D/gi, "]");
}
function wn(e, t, r) {
  if (!t)
    return e;
  const n = r && r.encode || ss, o = r && r.serialize;
  let s;
  if (o ? s = o(t, r) : s = l.isURLSearchParams(t) ? t.toString() : new ar(t, r).toString(n), s) {
    const i = e.indexOf("#");
    i !== -1 && (e = e.slice(0, i)), e += (e.indexOf("?") === -1 ? "?" : "&") + s;
  }
  return e;
}
class is {
  constructor() {
    this.handlers = [];
  }
  /**
   * Add a new interceptor to the stack
   *
   * @param {Function} fulfilled The function to handle `then` for a `Promise`
   * @param {Function} rejected The function to handle `reject` for a `Promise`
   *
   * @return {Number} An ID used to remove interceptor later
   */
  use(t, r, n) {
    return this.handlers.push({
      fulfilled: t,
      rejected: r,
      synchronous: n ? n.synchronous : !1,
      runWhen: n ? n.runWhen : null
    }), this.handlers.length - 1;
  }
  /**
   * Remove an interceptor from the stack
   *
   * @param {Number} id The ID that was returned by `use`
   *
   * @returns {Boolean} `true` if the interceptor was removed, `false` otherwise
   */
  eject(t) {
    this.handlers[t] && (this.handlers[t] = null);
  }
  /**
   * Clear all interceptors from the stack
   *
   * @returns {void}
   */
  clear() {
    this.handlers && (this.handlers = []);
  }
  /**
   * Iterate over all the registered interceptors
   *
   * This method is particularly useful for skipping over any
   * interceptors that may have become `null` calling `eject`.
   *
   * @param {Function} fn The function to call for each interceptor
   *
   * @returns {void}
   */
  forEach(t) {
    l.forEach(this.handlers, function(n) {
      n !== null && t(n);
    });
  }
}
const Lr = is, En = {
  silentJSONParsing: !0,
  forcedJSONParsing: !0,
  clarifyTimeoutError: !1
}, as = typeof URLSearchParams < "u" ? URLSearchParams : ar, cs = typeof FormData < "u" ? FormData : null, us = typeof Blob < "u" ? Blob : null, ls = (() => {
  let e;
  return typeof navigator < "u" && ((e = navigator.product) === "ReactNative" || e === "NativeScript" || e === "NS") ? !1 : typeof window < "u" && typeof document < "u";
})(), fs = (() => typeof WorkerGlobalScope < "u" && // eslint-disable-next-line no-undef
self instanceof WorkerGlobalScope && typeof self.importScripts == "function")(), ce = {
  isBrowser: !0,
  classes: {
    URLSearchParams: as,
    FormData: cs,
    Blob: us
  },
  isStandardBrowserEnv: ls,
  isStandardBrowserWebWorkerEnv: fs,
  protocols: ["http", "https", "file", "blob", "url", "data"]
};
function ds(e, t) {
  return _t(e, new ce.classes.URLSearchParams(), Object.assign({
    visitor: function(r, n, o, s) {
      return ce.isNode && l.isBuffer(r) ? (this.append(n, r.toString("base64")), !1) : s.defaultVisitor.apply(this, arguments);
    }
  }, t));
}
function ps(e) {
  return l.matchAll(/\w+|\[(\w*)]/g, e).map((t) => t[0] === "[]" ? "" : t[1] || t[0]);
}
function hs(e) {
  const t = {}, r = Object.keys(e);
  let n;
  const o = r.length;
  let s;
  for (n = 0; n < o; n++)
    s = r[n], t[s] = e[s];
  return t;
}
function Sn(e) {
  function t(r, n, o, s) {
    let i = r[s++];
    const c = Number.isFinite(+i), f = s >= r.length;
    return i = !i && l.isArray(o) ? o.length : i, f ? (l.hasOwnProp(o, i) ? o[i] = [o[i], n] : o[i] = n, !c) : ((!o[i] || !l.isObject(o[i])) && (o[i] = []), t(r, n, o[i], s) && l.isArray(o[i]) && (o[i] = hs(o[i])), !c);
  }
  if (l.isFormData(e) && l.isFunction(e.entries)) {
    const r = {};
    return l.forEachEntry(e, (n, o) => {
      t(ps(n), o, r, 0);
    }), r;
  }
  return null;
}
const ms = {
  "Content-Type": void 0
};
function ys(e, t, r) {
  if (l.isString(e))
    try {
      return (t || JSON.parse)(e), l.trim(e);
    } catch (n) {
      if (n.name !== "SyntaxError")
        throw n;
    }
  return (r || JSON.stringify)(e);
}
const Rt = {
  transitional: En,
  adapter: ["xhr", "http"],
  transformRequest: [function(t, r) {
    const n = r.getContentType() || "", o = n.indexOf("application/json") > -1, s = l.isObject(t);
    if (s && l.isHTMLForm(t) && (t = new FormData(t)), l.isFormData(t))
      return o && o ? JSON.stringify(Sn(t)) : t;
    if (l.isArrayBuffer(t) || l.isBuffer(t) || l.isStream(t) || l.isFile(t) || l.isBlob(t))
      return t;
    if (l.isArrayBufferView(t))
      return t.buffer;
    if (l.isURLSearchParams(t))
      return r.setContentType("application/x-www-form-urlencoded;charset=utf-8", !1), t.toString();
    let c;
    if (s) {
      if (n.indexOf("application/x-www-form-urlencoded") > -1)
        return ds(t, this.formSerializer).toString();
      if ((c = l.isFileList(t)) || n.indexOf("multipart/form-data") > -1) {
        const f = this.env && this.env.FormData;
        return _t(
          c ? { "files[]": t } : t,
          f && new f(),
          this.formSerializer
        );
      }
    }
    return s || o ? (r.setContentType("application/json", !1), ys(t)) : t;
  }],
  transformResponse: [function(t) {
    const r = this.transitional || Rt.transitional, n = r && r.forcedJSONParsing, o = this.responseType === "json";
    if (t && l.isString(t) && (n && !this.responseType || o)) {
      const i = !(r && r.silentJSONParsing) && o;
      try {
        return JSON.parse(t);
      } catch (c) {
        if (i)
          throw c.name === "SyntaxError" ? A.from(c, A.ERR_BAD_RESPONSE, this, null, this.response) : c;
      }
    }
    return t;
  }],
  /**
   * A timeout in milliseconds to abort a request. If set to 0 (default) a
   * timeout is not created.
   */
  timeout: 0,
  xsrfCookieName: "XSRF-TOKEN",
  xsrfHeaderName: "X-XSRF-TOKEN",
  maxContentLength: -1,
  maxBodyLength: -1,
  env: {
    FormData: ce.classes.FormData,
    Blob: ce.classes.Blob
  },
  validateStatus: function(t) {
    return t >= 200 && t < 300;
  },
  headers: {
    common: {
      Accept: "application/json, text/plain, */*"
    }
  }
};
l.forEach(["delete", "get", "head"], function(t) {
  Rt.headers[t] = {};
});
l.forEach(["post", "put", "patch"], function(t) {
  Rt.headers[t] = l.merge(ms);
});
const cr = Rt, gs = l.toObjectSet([
  "age",
  "authorization",
  "content-length",
  "content-type",
  "etag",
  "expires",
  "from",
  "host",
  "if-modified-since",
  "if-unmodified-since",
  "last-modified",
  "location",
  "max-forwards",
  "proxy-authorization",
  "referer",
  "retry-after",
  "user-agent"
]), vs = (e) => {
  const t = {};
  let r, n, o;
  return e && e.split(`
`).forEach(function(i) {
    o = i.indexOf(":"), r = i.substring(0, o).trim().toLowerCase(), n = i.substring(o + 1).trim(), !(!r || t[r] && gs[r]) && (r === "set-cookie" ? t[r] ? t[r].push(n) : t[r] = [n] : t[r] = t[r] ? t[r] + ", " + n : n);
  }), t;
}, Br = Symbol("internals");
function Xe(e) {
  return e && String(e).trim().toLowerCase();
}
function lt(e) {
  return e === !1 || e == null ? e : l.isArray(e) ? e.map(lt) : String(e);
}
function bs(e) {
  const t = /* @__PURE__ */ Object.create(null), r = /([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;
  let n;
  for (; n = r.exec(e); )
    t[n[1]] = n[2];
  return t;
}
const ws = (e) => /^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(e.trim());
function Lt(e, t, r, n, o) {
  if (l.isFunction(n))
    return n.call(this, t, r);
  if (o && (t = r), !!l.isString(t)) {
    if (l.isString(n))
      return t.indexOf(n) !== -1;
    if (l.isRegExp(n))
      return n.test(t);
  }
}
function Es(e) {
  return e.trim().toLowerCase().replace(/([a-z\d])(\w*)/g, (t, r, n) => r.toUpperCase() + n);
}
function Ss(e, t) {
  const r = l.toCamelCase(" " + t);
  ["get", "set", "has"].forEach((n) => {
    Object.defineProperty(e, n + r, {
      value: function(o, s, i) {
        return this[n].call(this, t, o, s, i);
      },
      configurable: !0
    });
  });
}
class kt {
  constructor(t) {
    t && this.set(t);
  }
  set(t, r, n) {
    const o = this;
    function s(c, f, u) {
      const d = Xe(f);
      if (!d)
        throw new Error("header name must be a non-empty string");
      const h = l.findKey(o, d);
      (!h || o[h] === void 0 || u === !0 || u === void 0 && o[h] !== !1) && (o[h || f] = lt(c));
    }
    const i = (c, f) => l.forEach(c, (u, d) => s(u, d, f));
    return l.isPlainObject(t) || t instanceof this.constructor ? i(t, r) : l.isString(t) && (t = t.trim()) && !ws(t) ? i(vs(t), r) : t != null && s(r, t, n), this;
  }
  get(t, r) {
    if (t = Xe(t), t) {
      const n = l.findKey(this, t);
      if (n) {
        const o = this[n];
        if (!r)
          return o;
        if (r === !0)
          return bs(o);
        if (l.isFunction(r))
          return r.call(this, o, n);
        if (l.isRegExp(r))
          return r.exec(o);
        throw new TypeError("parser must be boolean|regexp|function");
      }
    }
  }
  has(t, r) {
    if (t = Xe(t), t) {
      const n = l.findKey(this, t);
      return !!(n && this[n] !== void 0 && (!r || Lt(this, this[n], n, r)));
    }
    return !1;
  }
  delete(t, r) {
    const n = this;
    let o = !1;
    function s(i) {
      if (i = Xe(i), i) {
        const c = l.findKey(n, i);
        c && (!r || Lt(n, n[c], c, r)) && (delete n[c], o = !0);
      }
    }
    return l.isArray(t) ? t.forEach(s) : s(t), o;
  }
  clear(t) {
    const r = Object.keys(this);
    let n = r.length, o = !1;
    for (; n--; ) {
      const s = r[n];
      (!t || Lt(this, this[s], s, t, !0)) && (delete this[s], o = !0);
    }
    return o;
  }
  normalize(t) {
    const r = this, n = {};
    return l.forEach(this, (o, s) => {
      const i = l.findKey(n, s);
      if (i) {
        r[i] = lt(o), delete r[s];
        return;
      }
      const c = t ? Es(s) : String(s).trim();
      c !== s && delete r[s], r[c] = lt(o), n[c] = !0;
    }), this;
  }
  concat(...t) {
    return this.constructor.concat(this, ...t);
  }
  toJSON(t) {
    const r = /* @__PURE__ */ Object.create(null);
    return l.forEach(this, (n, o) => {
      n != null && n !== !1 && (r[o] = t && l.isArray(n) ? n.join(", ") : n);
    }), r;
  }
  [Symbol.iterator]() {
    return Object.entries(this.toJSON())[Symbol.iterator]();
  }
  toString() {
    return Object.entries(this.toJSON()).map(([t, r]) => t + ": " + r).join(`
`);
  }
  get [Symbol.toStringTag]() {
    return "AxiosHeaders";
  }
  static from(t) {
    return t instanceof this ? t : new this(t);
  }
  static concat(t, ...r) {
    const n = new this(t);
    return r.forEach((o) => n.set(o)), n;
  }
  static accessor(t) {
    const n = (this[Br] = this[Br] = {
      accessors: {}
    }).accessors, o = this.prototype;
    function s(i) {
      const c = Xe(i);
      n[c] || (Ss(o, i), n[c] = !0);
    }
    return l.isArray(t) ? t.forEach(s) : s(t), this;
  }
}
kt.accessor(["Content-Type", "Content-Length", "Accept", "Accept-Encoding", "User-Agent", "Authorization"]);
l.freezeMethods(kt.prototype);
l.freezeMethods(kt);
const he = kt;
function Bt(e, t) {
  const r = this || cr, n = t || r, o = he.from(n.headers);
  let s = n.data;
  return l.forEach(e, function(c) {
    s = c.call(r, s, o.normalize(), t ? t.status : void 0);
  }), o.normalize(), s;
}
function _n(e) {
  return !!(e && e.__CANCEL__);
}
function rt(e, t, r) {
  A.call(this, e ?? "canceled", A.ERR_CANCELED, t, r), this.name = "CanceledError";
}
l.inherits(rt, A, {
  __CANCEL__: !0
});
function _s(e, t, r) {
  const n = r.config.validateStatus;
  !r.status || !n || n(r.status) ? e(r) : t(new A(
    "Request failed with status code " + r.status,
    [A.ERR_BAD_REQUEST, A.ERR_BAD_RESPONSE][Math.floor(r.status / 100) - 4],
    r.config,
    r.request,
    r
  ));
}
const Rs = ce.isStandardBrowserEnv ? (
  // Standard browser envs support document.cookie
  function() {
    return {
      write: function(r, n, o, s, i, c) {
        const f = [];
        f.push(r + "=" + encodeURIComponent(n)), l.isNumber(o) && f.push("expires=" + new Date(o).toGMTString()), l.isString(s) && f.push("path=" + s), l.isString(i) && f.push("domain=" + i), c === !0 && f.push("secure"), document.cookie = f.join("; ");
      },
      read: function(r) {
        const n = document.cookie.match(new RegExp("(^|;\\s*)(" + r + ")=([^;]*)"));
        return n ? decodeURIComponent(n[3]) : null;
      },
      remove: function(r) {
        this.write(r, "", Date.now() - 864e5);
      }
    };
  }()
) : (
  // Non standard browser env (web workers, react-native) lack needed support.
  function() {
    return {
      write: function() {
      },
      read: function() {
        return null;
      },
      remove: function() {
      }
    };
  }()
);
function ks(e) {
  return /^([a-z][a-z\d+\-.]*:)?\/\//i.test(e);
}
function Ts(e, t) {
  return t ? e.replace(/\/+$/, "") + "/" + t.replace(/^\/+/, "") : e;
}
function Rn(e, t) {
  return e && !ks(t) ? Ts(e, t) : t;
}
const Os = ce.isStandardBrowserEnv ? (
  // Standard browser envs have full support of the APIs needed to test
  // whether the request URL is of the same origin as current location.
  function() {
    const t = /(msie|trident)/i.test(navigator.userAgent), r = document.createElement("a");
    let n;
    function o(s) {
      let i = s;
      return t && (r.setAttribute("href", i), i = r.href), r.setAttribute("href", i), {
        href: r.href,
        protocol: r.protocol ? r.protocol.replace(/:$/, "") : "",
        host: r.host,
        search: r.search ? r.search.replace(/^\?/, "") : "",
        hash: r.hash ? r.hash.replace(/^#/, "") : "",
        hostname: r.hostname,
        port: r.port,
        pathname: r.pathname.charAt(0) === "/" ? r.pathname : "/" + r.pathname
      };
    }
    return n = o(window.location.href), function(i) {
      const c = l.isString(i) ? o(i) : i;
      return c.protocol === n.protocol && c.host === n.host;
    };
  }()
) : (
  // Non standard browser envs (web workers, react-native) lack needed support.
  function() {
    return function() {
      return !0;
    };
  }()
);
function xs(e) {
  const t = /^([-+\w]{1,25})(:?\/\/|:)/.exec(e);
  return t && t[1] || "";
}
function As(e, t) {
  e = e || 10;
  const r = new Array(e), n = new Array(e);
  let o = 0, s = 0, i;
  return t = t !== void 0 ? t : 1e3, function(f) {
    const u = Date.now(), d = n[s];
    i || (i = u), r[o] = f, n[o] = u;
    let h = s, w = 0;
    for (; h !== o; )
      w += r[h++], h = h % e;
    if (o = (o + 1) % e, o === s && (s = (s + 1) % e), u - i < t)
      return;
    const g = d && u - d;
    return g ? Math.round(w * 1e3 / g) : void 0;
  };
}
function $r(e, t) {
  let r = 0;
  const n = As(50, 250);
  return (o) => {
    const s = o.loaded, i = o.lengthComputable ? o.total : void 0, c = s - r, f = n(c), u = s <= i;
    r = s;
    const d = {
      loaded: s,
      total: i,
      progress: i ? s / i : void 0,
      bytes: c,
      rate: f || void 0,
      estimated: f && i && u ? (i - s) / f : void 0,
      event: o
    };
    d[t ? "download" : "upload"] = !0, e(d);
  };
}
const Cs = typeof XMLHttpRequest < "u", Ps = Cs && function(e) {
  return new Promise(function(r, n) {
    let o = e.data;
    const s = he.from(e.headers).normalize(), i = e.responseType;
    let c;
    function f() {
      e.cancelToken && e.cancelToken.unsubscribe(c), e.signal && e.signal.removeEventListener("abort", c);
    }
    l.isFormData(o) && (ce.isStandardBrowserEnv || ce.isStandardBrowserWebWorkerEnv ? s.setContentType(!1) : s.setContentType("multipart/form-data;", !1));
    let u = new XMLHttpRequest();
    if (e.auth) {
      const g = e.auth.username || "", m = e.auth.password ? unescape(encodeURIComponent(e.auth.password)) : "";
      s.set("Authorization", "Basic " + btoa(g + ":" + m));
    }
    const d = Rn(e.baseURL, e.url);
    u.open(e.method.toUpperCase(), wn(d, e.params, e.paramsSerializer), !0), u.timeout = e.timeout;
    function h() {
      if (!u)
        return;
      const g = he.from(
        "getAllResponseHeaders" in u && u.getAllResponseHeaders()
      ), v = {
        data: !i || i === "text" || i === "json" ? u.responseText : u.response,
        status: u.status,
        statusText: u.statusText,
        headers: g,
        config: e,
        request: u
      };
      _s(function(R) {
        r(R), f();
      }, function(R) {
        n(R), f();
      }, v), u = null;
    }
    if ("onloadend" in u ? u.onloadend = h : u.onreadystatechange = function() {
      !u || u.readyState !== 4 || u.status === 0 && !(u.responseURL && u.responseURL.indexOf("file:") === 0) || setTimeout(h);
    }, u.onabort = function() {
      u && (n(new A("Request aborted", A.ECONNABORTED, e, u)), u = null);
    }, u.onerror = function() {
      n(new A("Network Error", A.ERR_NETWORK, e, u)), u = null;
    }, u.ontimeout = function() {
      let m = e.timeout ? "timeout of " + e.timeout + "ms exceeded" : "timeout exceeded";
      const v = e.transitional || En;
      e.timeoutErrorMessage && (m = e.timeoutErrorMessage), n(new A(
        m,
        v.clarifyTimeoutError ? A.ETIMEDOUT : A.ECONNABORTED,
        e,
        u
      )), u = null;
    }, ce.isStandardBrowserEnv) {
      const g = (e.withCredentials || Os(d)) && e.xsrfCookieName && Rs.read(e.xsrfCookieName);
      g && s.set(e.xsrfHeaderName, g);
    }
    o === void 0 && s.setContentType(null), "setRequestHeader" in u && l.forEach(s.toJSON(), function(m, v) {
      u.setRequestHeader(v, m);
    }), l.isUndefined(e.withCredentials) || (u.withCredentials = !!e.withCredentials), i && i !== "json" && (u.responseType = e.responseType), typeof e.onDownloadProgress == "function" && u.addEventListener("progress", $r(e.onDownloadProgress, !0)), typeof e.onUploadProgress == "function" && u.upload && u.upload.addEventListener("progress", $r(e.onUploadProgress)), (e.cancelToken || e.signal) && (c = (g) => {
      u && (n(!g || g.type ? new rt(null, e, u) : g), u.abort(), u = null);
    }, e.cancelToken && e.cancelToken.subscribe(c), e.signal && (e.signal.aborted ? c() : e.signal.addEventListener("abort", c)));
    const w = xs(d);
    if (w && ce.protocols.indexOf(w) === -1) {
      n(new A("Unsupported protocol " + w + ":", A.ERR_BAD_REQUEST, e));
      return;
    }
    u.send(o || null);
  });
}, ft = {
  http: rs,
  xhr: Ps
};
l.forEach(ft, (e, t) => {
  if (e) {
    try {
      Object.defineProperty(e, "name", { value: t });
    } catch {
    }
    Object.defineProperty(e, "adapterName", { value: t });
  }
});
const Ns = {
  getAdapter: (e) => {
    e = l.isArray(e) ? e : [e];
    const { length: t } = e;
    let r, n;
    for (let o = 0; o < t && (r = e[o], !(n = l.isString(r) ? ft[r.toLowerCase()] : r)); o++)
      ;
    if (!n)
      throw n === !1 ? new A(
        `Adapter ${r} is not supported by the environment`,
        "ERR_NOT_SUPPORT"
      ) : new Error(
        l.hasOwnProp(ft, r) ? `Adapter '${r}' is not available in the build` : `Unknown adapter '${r}'`
      );
    if (!l.isFunction(n))
      throw new TypeError("adapter is not a function");
    return n;
  },
  adapters: ft
};
function $t(e) {
  if (e.cancelToken && e.cancelToken.throwIfRequested(), e.signal && e.signal.aborted)
    throw new rt(null, e);
}
function Ur(e) {
  return $t(e), e.headers = he.from(e.headers), e.data = Bt.call(
    e,
    e.transformRequest
  ), ["post", "put", "patch"].indexOf(e.method) !== -1 && e.headers.setContentType("application/x-www-form-urlencoded", !1), Ns.getAdapter(e.adapter || cr.adapter)(e).then(function(n) {
    return $t(e), n.data = Bt.call(
      e,
      e.transformResponse,
      n
    ), n.headers = he.from(n.headers), n;
  }, function(n) {
    return _n(n) || ($t(e), n && n.response && (n.response.data = Bt.call(
      e,
      e.transformResponse,
      n.response
    ), n.response.headers = he.from(n.response.headers))), Promise.reject(n);
  });
}
const Mr = (e) => e instanceof he ? e.toJSON() : e;
function Le(e, t) {
  t = t || {};
  const r = {};
  function n(u, d, h) {
    return l.isPlainObject(u) && l.isPlainObject(d) ? l.merge.call({ caseless: h }, u, d) : l.isPlainObject(d) ? l.merge({}, d) : l.isArray(d) ? d.slice() : d;
  }
  function o(u, d, h) {
    if (l.isUndefined(d)) {
      if (!l.isUndefined(u))
        return n(void 0, u, h);
    } else
      return n(u, d, h);
  }
  function s(u, d) {
    if (!l.isUndefined(d))
      return n(void 0, d);
  }
  function i(u, d) {
    if (l.isUndefined(d)) {
      if (!l.isUndefined(u))
        return n(void 0, u);
    } else
      return n(void 0, d);
  }
  function c(u, d, h) {
    if (h in t)
      return n(u, d);
    if (h in e)
      return n(void 0, u);
  }
  const f = {
    url: s,
    method: s,
    data: s,
    baseURL: i,
    transformRequest: i,
    transformResponse: i,
    paramsSerializer: i,
    timeout: i,
    timeoutMessage: i,
    withCredentials: i,
    adapter: i,
    responseType: i,
    xsrfCookieName: i,
    xsrfHeaderName: i,
    onUploadProgress: i,
    onDownloadProgress: i,
    decompress: i,
    maxContentLength: i,
    maxBodyLength: i,
    beforeRedirect: i,
    transport: i,
    httpAgent: i,
    httpsAgent: i,
    cancelToken: i,
    socketPath: i,
    responseEncoding: i,
    validateStatus: c,
    headers: (u, d) => o(Mr(u), Mr(d), !0)
  };
  return l.forEach(Object.keys(Object.assign({}, e, t)), function(d) {
    const h = f[d] || o, w = h(e[d], t[d], d);
    l.isUndefined(w) && h !== c || (r[d] = w);
  }), r;
}
const kn = "1.4.0", ur = {};
["object", "boolean", "number", "function", "string", "symbol"].forEach((e, t) => {
  ur[e] = function(n) {
    return typeof n === e || "a" + (t < 1 ? "n " : " ") + e;
  };
});
const qr = {};
ur.transitional = function(t, r, n) {
  function o(s, i) {
    return "[Axios v" + kn + "] Transitional option '" + s + "'" + i + (n ? ". " + n : "");
  }
  return (s, i, c) => {
    if (t === !1)
      throw new A(
        o(i, " has been removed" + (r ? " in " + r : "")),
        A.ERR_DEPRECATED
      );
    return r && !qr[i] && (qr[i] = !0, console.warn(
      o(
        i,
        " has been deprecated since v" + r + " and will be removed in the near future"
      )
    )), t ? t(s, i, c) : !0;
  };
};
function Ds(e, t, r) {
  if (typeof e != "object")
    throw new A("options must be an object", A.ERR_BAD_OPTION_VALUE);
  const n = Object.keys(e);
  let o = n.length;
  for (; o-- > 0; ) {
    const s = n[o], i = t[s];
    if (i) {
      const c = e[s], f = c === void 0 || i(c, s, e);
      if (f !== !0)
        throw new A("option " + s + " must be " + f, A.ERR_BAD_OPTION_VALUE);
      continue;
    }
    if (r !== !0)
      throw new A("Unknown option " + s, A.ERR_BAD_OPTION);
  }
}
const Kt = {
  assertOptions: Ds,
  validators: ur
}, ve = Kt.validators;
class gt {
  constructor(t) {
    this.defaults = t, this.interceptors = {
      request: new Lr(),
      response: new Lr()
    };
  }
  /**
   * Dispatch a request
   *
   * @param {String|Object} configOrUrl The config specific for this request (merged with this.defaults)
   * @param {?Object} config
   *
   * @returns {Promise} The Promise to be fulfilled
   */
  request(t, r) {
    typeof t == "string" ? (r = r || {}, r.url = t) : r = t || {}, r = Le(this.defaults, r);
    const { transitional: n, paramsSerializer: o, headers: s } = r;
    n !== void 0 && Kt.assertOptions(n, {
      silentJSONParsing: ve.transitional(ve.boolean),
      forcedJSONParsing: ve.transitional(ve.boolean),
      clarifyTimeoutError: ve.transitional(ve.boolean)
    }, !1), o != null && (l.isFunction(o) ? r.paramsSerializer = {
      serialize: o
    } : Kt.assertOptions(o, {
      encode: ve.function,
      serialize: ve.function
    }, !0)), r.method = (r.method || this.defaults.method || "get").toLowerCase();
    let i;
    i = s && l.merge(
      s.common,
      s[r.method]
    ), i && l.forEach(
      ["delete", "get", "head", "post", "put", "patch", "common"],
      (m) => {
        delete s[m];
      }
    ), r.headers = he.concat(i, s);
    const c = [];
    let f = !0;
    this.interceptors.request.forEach(function(v) {
      typeof v.runWhen == "function" && v.runWhen(r) === !1 || (f = f && v.synchronous, c.unshift(v.fulfilled, v.rejected));
    });
    const u = [];
    this.interceptors.response.forEach(function(v) {
      u.push(v.fulfilled, v.rejected);
    });
    let d, h = 0, w;
    if (!f) {
      const m = [Ur.bind(this), void 0];
      for (m.unshift.apply(m, c), m.push.apply(m, u), w = m.length, d = Promise.resolve(r); h < w; )
        d = d.then(m[h++], m[h++]);
      return d;
    }
    w = c.length;
    let g = r;
    for (h = 0; h < w; ) {
      const m = c[h++], v = c[h++];
      try {
        g = m(g);
      } catch (j) {
        v.call(this, j);
        break;
      }
    }
    try {
      d = Ur.call(this, g);
    } catch (m) {
      return Promise.reject(m);
    }
    for (h = 0, w = u.length; h < w; )
      d = d.then(u[h++], u[h++]);
    return d;
  }
  getUri(t) {
    t = Le(this.defaults, t);
    const r = Rn(t.baseURL, t.url);
    return wn(r, t.params, t.paramsSerializer);
  }
}
l.forEach(["delete", "get", "head", "options"], function(t) {
  gt.prototype[t] = function(r, n) {
    return this.request(Le(n || {}, {
      method: t,
      url: r,
      data: (n || {}).data
    }));
  };
});
l.forEach(["post", "put", "patch"], function(t) {
  function r(n) {
    return function(s, i, c) {
      return this.request(Le(c || {}, {
        method: t,
        headers: n ? {
          "Content-Type": "multipart/form-data"
        } : {},
        url: s,
        data: i
      }));
    };
  }
  gt.prototype[t] = r(), gt.prototype[t + "Form"] = r(!0);
});
const dt = gt;
class lr {
  constructor(t) {
    if (typeof t != "function")
      throw new TypeError("executor must be a function.");
    let r;
    this.promise = new Promise(function(s) {
      r = s;
    });
    const n = this;
    this.promise.then((o) => {
      if (!n._listeners)
        return;
      let s = n._listeners.length;
      for (; s-- > 0; )
        n._listeners[s](o);
      n._listeners = null;
    }), this.promise.then = (o) => {
      let s;
      const i = new Promise((c) => {
        n.subscribe(c), s = c;
      }).then(o);
      return i.cancel = function() {
        n.unsubscribe(s);
      }, i;
    }, t(function(s, i, c) {
      n.reason || (n.reason = new rt(s, i, c), r(n.reason));
    });
  }
  /**
   * Throws a `CanceledError` if cancellation has been requested.
   */
  throwIfRequested() {
    if (this.reason)
      throw this.reason;
  }
  /**
   * Subscribe to the cancel signal
   */
  subscribe(t) {
    if (this.reason) {
      t(this.reason);
      return;
    }
    this._listeners ? this._listeners.push(t) : this._listeners = [t];
  }
  /**
   * Unsubscribe from the cancel signal
   */
  unsubscribe(t) {
    if (!this._listeners)
      return;
    const r = this._listeners.indexOf(t);
    r !== -1 && this._listeners.splice(r, 1);
  }
  /**
   * Returns an object that contains a new `CancelToken` and a function that, when called,
   * cancels the `CancelToken`.
   */
  static source() {
    let t;
    return {
      token: new lr(function(o) {
        t = o;
      }),
      cancel: t
    };
  }
}
const js = lr;
function Is(e) {
  return function(r) {
    return e.apply(null, r);
  };
}
function Fs(e) {
  return l.isObject(e) && e.isAxiosError === !0;
}
const Xt = {
  Continue: 100,
  SwitchingProtocols: 101,
  Processing: 102,
  EarlyHints: 103,
  Ok: 200,
  Created: 201,
  Accepted: 202,
  NonAuthoritativeInformation: 203,
  NoContent: 204,
  ResetContent: 205,
  PartialContent: 206,
  MultiStatus: 207,
  AlreadyReported: 208,
  ImUsed: 226,
  MultipleChoices: 300,
  MovedPermanently: 301,
  Found: 302,
  SeeOther: 303,
  NotModified: 304,
  UseProxy: 305,
  Unused: 306,
  TemporaryRedirect: 307,
  PermanentRedirect: 308,
  BadRequest: 400,
  Unauthorized: 401,
  PaymentRequired: 402,
  Forbidden: 403,
  NotFound: 404,
  MethodNotAllowed: 405,
  NotAcceptable: 406,
  ProxyAuthenticationRequired: 407,
  RequestTimeout: 408,
  Conflict: 409,
  Gone: 410,
  LengthRequired: 411,
  PreconditionFailed: 412,
  PayloadTooLarge: 413,
  UriTooLong: 414,
  UnsupportedMediaType: 415,
  RangeNotSatisfiable: 416,
  ExpectationFailed: 417,
  ImATeapot: 418,
  MisdirectedRequest: 421,
  UnprocessableEntity: 422,
  Locked: 423,
  FailedDependency: 424,
  TooEarly: 425,
  UpgradeRequired: 426,
  PreconditionRequired: 428,
  TooManyRequests: 429,
  RequestHeaderFieldsTooLarge: 431,
  UnavailableForLegalReasons: 451,
  InternalServerError: 500,
  NotImplemented: 501,
  BadGateway: 502,
  ServiceUnavailable: 503,
  GatewayTimeout: 504,
  HttpVersionNotSupported: 505,
  VariantAlsoNegotiates: 506,
  InsufficientStorage: 507,
  LoopDetected: 508,
  NotExtended: 510,
  NetworkAuthenticationRequired: 511
};
Object.entries(Xt).forEach(([e, t]) => {
  Xt[t] = e;
});
const Ls = Xt;
function Tn(e) {
  const t = new dt(e), r = cn(dt.prototype.request, t);
  return l.extend(r, dt.prototype, t, { allOwnKeys: !0 }), l.extend(r, t, null, { allOwnKeys: !0 }), r.create = function(o) {
    return Tn(Le(e, o));
  }, r;
}
const V = Tn(cr);
V.Axios = dt;
V.CanceledError = rt;
V.CancelToken = js;
V.isCancel = _n;
V.VERSION = kn;
V.toFormData = _t;
V.AxiosError = A;
V.Cancel = V.CanceledError;
V.all = function(t) {
  return Promise.all(t);
};
V.spread = Is;
V.isAxiosError = Fs;
V.mergeConfig = Le;
V.AxiosHeaders = he;
V.formToJSON = (e) => Sn(l.isHTMLForm(e) ? new FormData(e) : e);
V.HttpStatusCode = Ls;
V.default = V;
const Ut = V;
var X = function() {
  return X = Object.assign || function(t) {
    for (var r, n = 1, o = arguments.length; n < o; n++) {
      r = arguments[n];
      for (var s in r)
        Object.prototype.hasOwnProperty.call(r, s) && (t[s] = r[s]);
    }
    return t;
  }, X.apply(this, arguments);
};
function Be(e, t, r) {
  if (r || arguments.length === 2)
    for (var n = 0, o = t.length, s; n < o; n++)
      (s || !(n in t)) && (s || (s = Array.prototype.slice.call(t, 0, n)), s[n] = t[n]);
  return e.concat(s || Array.prototype.slice.call(t));
}
function Bs(e) {
  var t = /* @__PURE__ */ Object.create(null);
  return function(r) {
    return t[r] === void 0 && (t[r] = e(r)), t[r];
  };
}
var $s = /^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|abbr|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|download|draggable|encType|enterKeyHint|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|translate|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|incremental|fallback|inert|itemProp|itemScope|itemType|itemID|itemRef|on|option|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/, Us = /* @__PURE__ */ Bs(
  function(e) {
    return $s.test(e) || e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && e.charCodeAt(2) < 91;
  }
  /* Z+1 */
), B = "-ms-", Qe = "-moz-", N = "-webkit-", On = "comm", Tt = "rule", fr = "decl", Ms = "@import", xn = "@keyframes", qs = "@layer", zs = Math.abs, dr = String.fromCharCode, Zt = Object.assign;
function Vs(e, t) {
  return W(e, 0) ^ 45 ? (((t << 2 ^ W(e, 0)) << 2 ^ W(e, 1)) << 2 ^ W(e, 2)) << 2 ^ W(e, 3) : 0;
}
function An(e) {
  return e.trim();
}
function pe(e, t) {
  return (e = t.exec(e)) ? e[0] : e;
}
function k(e, t, r) {
  return e.replace(t, r);
}
function pt(e, t) {
  return e.indexOf(t);
}
function W(e, t) {
  return e.charCodeAt(t) | 0;
}
function $e(e, t, r) {
  return e.slice(t, r);
}
function ae(e) {
  return e.length;
}
function Cn(e) {
  return e.length;
}
function Ze(e, t) {
  return t.push(e), e;
}
function Hs(e, t) {
  return e.map(t).join("");
}
function zr(e, t) {
  return e.filter(function(r) {
    return !pe(r, t);
  });
}
var Ot = 1, Ue = 1, Pn = 0, te = 0, z = 0, He = "";
function xt(e, t, r, n, o, s, i, c) {
  return { value: e, root: t, parent: r, type: n, props: o, children: s, line: Ot, column: Ue, length: i, return: "", siblings: c };
}
function be(e, t) {
  return Zt(xt("", null, null, "", null, null, 0, e.siblings), e, { length: -e.length }, t);
}
function Fe(e) {
  for (; e.root; )
    e = be(e.root, { children: [e] });
  Ze(e, e.siblings);
}
function Ws() {
  return z;
}
function Ys() {
  return z = te > 0 ? W(He, --te) : 0, Ue--, z === 10 && (Ue = 1, Ot--), z;
}
function oe() {
  return z = te < Pn ? W(He, te++) : 0, Ue++, z === 10 && (Ue = 1, Ot++), z;
}
function Te() {
  return W(He, te);
}
function ht() {
  return te;
}
function At(e, t) {
  return $e(He, e, t);
}
function Qt(e) {
  switch (e) {
    case 0:
    case 9:
    case 10:
    case 13:
    case 32:
      return 5;
    case 33:
    case 43:
    case 44:
    case 47:
    case 62:
    case 64:
    case 126:
    case 59:
    case 123:
    case 125:
      return 4;
    case 58:
      return 3;
    case 34:
    case 39:
    case 40:
    case 91:
      return 2;
    case 41:
    case 93:
      return 1;
  }
  return 0;
}
function Gs(e) {
  return Ot = Ue = 1, Pn = ae(He = e), te = 0, [];
}
function Js(e) {
  return He = "", e;
}
function Mt(e) {
  return An(At(te - 1, er(e === 91 ? e + 2 : e === 40 ? e + 1 : e)));
}
function Ks(e) {
  for (; (z = Te()) && z < 33; )
    oe();
  return Qt(e) > 2 || Qt(z) > 3 ? "" : " ";
}
function Xs(e, t) {
  for (; --t && oe() && !(z < 48 || z > 102 || z > 57 && z < 65 || z > 70 && z < 97); )
    ;
  return At(e, ht() + (t < 6 && Te() == 32 && oe() == 32));
}
function er(e) {
  for (; oe(); )
    switch (z) {
      case e:
        return te;
      case 34:
      case 39:
        e !== 34 && e !== 39 && er(z);
        break;
      case 40:
        e === 41 && er(e);
        break;
      case 92:
        oe();
        break;
    }
  return te;
}
function Zs(e, t) {
  for (; oe() && e + z !== 47 + 10; )
    if (e + z === 42 + 42 && Te() === 47)
      break;
  return "/*" + At(t, te - 1) + "*" + dr(e === 47 ? e : oe());
}
function Qs(e) {
  for (; !Qt(Te()); )
    oe();
  return At(e, te);
}
function ei(e) {
  return Js(mt("", null, null, null, [""], e = Gs(e), 0, [0], e));
}
function mt(e, t, r, n, o, s, i, c, f) {
  for (var u = 0, d = 0, h = i, w = 0, g = 0, m = 0, v = 1, j = 1, R = 1, E = 0, O = "", C = o, F = s, b = n, S = O; j; )
    switch (m = E, E = oe()) {
      case 40:
        if (m != 108 && W(S, h - 1) == 58) {
          pt(S += k(Mt(E), "&", "&\f"), "&\f") != -1 && (R = -1);
          break;
        }
      case 34:
      case 39:
      case 91:
        S += Mt(E);
        break;
      case 9:
      case 10:
      case 13:
      case 32:
        S += Ks(m);
        break;
      case 92:
        S += Xs(ht() - 1, 7);
        continue;
      case 47:
        switch (Te()) {
          case 42:
          case 47:
            Ze(ti(Zs(oe(), ht()), t, r, f), f);
            break;
          default:
            S += "/";
        }
        break;
      case 123 * v:
        c[u++] = ae(S) * R;
      case 125 * v:
      case 59:
      case 0:
        switch (E) {
          case 0:
          case 125:
            j = 0;
          case 59 + d:
            R == -1 && (S = k(S, /\f/g, "")), g > 0 && ae(S) - h && Ze(g > 32 ? Hr(S + ";", n, r, h - 1, f) : Hr(k(S, " ", "") + ";", n, r, h - 2, f), f);
            break;
          case 59:
            S += ";";
          default:
            if (Ze(b = Vr(S, t, r, u, d, o, c, O, C = [], F = [], h, s), s), E === 123)
              if (d === 0)
                mt(S, t, b, b, C, s, h, c, F);
              else
                switch (w === 99 && W(S, 3) === 110 ? 100 : w) {
                  case 100:
                  case 108:
                  case 109:
                  case 115:
                    mt(e, b, b, n && Ze(Vr(e, b, b, 0, 0, o, c, O, o, C = [], h, F), F), o, F, h, c, n ? C : F);
                    break;
                  default:
                    mt(S, b, b, b, [""], F, 0, c, F);
                }
        }
        u = d = g = 0, v = R = 1, O = S = "", h = i;
        break;
      case 58:
        h = 1 + ae(S), g = m;
      default:
        if (v < 1) {
          if (E == 123)
            --v;
          else if (E == 125 && v++ == 0 && Ys() == 125)
            continue;
        }
        switch (S += dr(E), E * v) {
          case 38:
            R = d > 0 ? 1 : (S += "\f", -1);
            break;
          case 44:
            c[u++] = (ae(S) - 1) * R, R = 1;
            break;
          case 64:
            Te() === 45 && (S += Mt(oe())), w = Te(), d = h = ae(O = S += Qs(ht())), E++;
            break;
          case 45:
            m === 45 && ae(S) == 2 && (v = 0);
        }
    }
  return s;
}
function Vr(e, t, r, n, o, s, i, c, f, u, d, h) {
  for (var w = o - 1, g = o === 0 ? s : [""], m = Cn(g), v = 0, j = 0, R = 0; v < n; ++v)
    for (var E = 0, O = $e(e, w + 1, w = zs(j = i[v])), C = e; E < m; ++E)
      (C = An(j > 0 ? g[E] + " " + O : k(O, /&\f/g, g[E]))) && (f[R++] = C);
  return xt(e, t, r, o === 0 ? Tt : c, f, u, d, h);
}
function ti(e, t, r, n) {
  return xt(e, t, r, On, dr(Ws()), $e(e, 2, -2), 0, n);
}
function Hr(e, t, r, n, o) {
  return xt(e, t, r, fr, $e(e, 0, n), $e(e, n + 1, -1), n, o);
}
function Nn(e, t, r) {
  switch (Vs(e, t)) {
    case 5103:
      return N + "print-" + e + e;
    case 5737:
    case 4201:
    case 3177:
    case 3433:
    case 1641:
    case 4457:
    case 2921:
    case 5572:
    case 6356:
    case 5844:
    case 3191:
    case 6645:
    case 3005:
    case 6391:
    case 5879:
    case 5623:
    case 6135:
    case 4599:
    case 4855:
    case 4215:
    case 6389:
    case 5109:
    case 5365:
    case 5621:
    case 3829:
      return N + e + e;
    case 4789:
      return Qe + e + e;
    case 5349:
    case 4246:
    case 4810:
    case 6968:
    case 2756:
      return N + e + Qe + e + B + e + e;
    case 5936:
      switch (W(e, t + 11)) {
        case 114:
          return N + e + B + k(e, /[svh]\w+-[tblr]{2}/, "tb") + e;
        case 108:
          return N + e + B + k(e, /[svh]\w+-[tblr]{2}/, "tb-rl") + e;
        case 45:
          return N + e + B + k(e, /[svh]\w+-[tblr]{2}/, "lr") + e;
      }
    case 6828:
    case 4268:
    case 2903:
      return N + e + B + e + e;
    case 6165:
      return N + e + B + "flex-" + e + e;
    case 5187:
      return N + e + k(e, /(\w+).+(:[^]+)/, N + "box-$1$2" + B + "flex-$1$2") + e;
    case 5443:
      return N + e + B + "flex-item-" + k(e, /flex-|-self/g, "") + (pe(e, /flex-|baseline/) ? "" : B + "grid-row-" + k(e, /flex-|-self/g, "")) + e;
    case 4675:
      return N + e + B + "flex-line-pack" + k(e, /align-content|flex-|-self/g, "") + e;
    case 5548:
      return N + e + B + k(e, "shrink", "negative") + e;
    case 5292:
      return N + e + B + k(e, "basis", "preferred-size") + e;
    case 6060:
      return N + "box-" + k(e, "-grow", "") + N + e + B + k(e, "grow", "positive") + e;
    case 4554:
      return N + k(e, /([^-])(transform)/g, "$1" + N + "$2") + e;
    case 6187:
      return k(k(k(e, /(zoom-|grab)/, N + "$1"), /(image-set)/, N + "$1"), e, "") + e;
    case 5495:
    case 3959:
      return k(e, /(image-set\([^]*)/, N + "$1$`$1");
    case 4968:
      return k(k(e, /(.+:)(flex-)?(.*)/, N + "box-pack:$3" + B + "flex-pack:$3"), /s.+-b[^;]+/, "justify") + N + e + e;
    case 4200:
      if (!pe(e, /flex-|baseline/))
        return B + "grid-column-align" + $e(e, t) + e;
      break;
    case 2592:
    case 3360:
      return B + k(e, "template-", "") + e;
    case 4384:
    case 3616:
      return r && r.some(function(n, o) {
        return t = o, pe(n.props, /grid-\w+-end/);
      }) ? ~pt(e + (r = r[t].value), "span") ? e : B + k(e, "-start", "") + e + B + "grid-row-span:" + (~pt(r, "span") ? pe(r, /\d+/) : +pe(r, /\d+/) - +pe(e, /\d+/)) + ";" : B + k(e, "-start", "") + e;
    case 4896:
    case 4128:
      return r && r.some(function(n) {
        return pe(n.props, /grid-\w+-start/);
      }) ? e : B + k(k(e, "-end", "-span"), "span ", "") + e;
    case 4095:
    case 3583:
    case 4068:
    case 2532:
      return k(e, /(.+)-inline(.+)/, N + "$1$2") + e;
    case 8116:
    case 7059:
    case 5753:
    case 5535:
    case 5445:
    case 5701:
    case 4933:
    case 4677:
    case 5533:
    case 5789:
    case 5021:
    case 4765:
      if (ae(e) - 1 - t > 6)
        switch (W(e, t + 1)) {
          case 109:
            if (W(e, t + 4) !== 45)
              break;
          case 102:
            return k(e, /(.+:)(.+)-([^]+)/, "$1" + N + "$2-$3$1" + Qe + (W(e, t + 3) == 108 ? "$3" : "$2-$3")) + e;
          case 115:
            return ~pt(e, "stretch") ? Nn(k(e, "stretch", "fill-available"), t, r) + e : e;
        }
      break;
    case 5152:
    case 5920:
      return k(e, /(.+?):(\d+)(\s*\/\s*(span)?\s*(\d+))?(.*)/, function(n, o, s, i, c, f, u) {
        return B + o + ":" + s + u + (i ? B + o + "-span:" + (c ? f : +f - +s) + u : "") + e;
      });
    case 4949:
      if (W(e, t + 6) === 121)
        return k(e, ":", ":" + N) + e;
      break;
    case 6444:
      switch (W(e, W(e, 14) === 45 ? 18 : 11)) {
        case 120:
          return k(e, /(.+:)([^;\s!]+)(;|(\s+)?!.+)?/, "$1" + N + (W(e, 14) === 45 ? "inline-" : "") + "box$3$1" + N + "$2$3$1" + B + "$2box$3") + e;
        case 100:
          return k(e, ":", ":" + B) + e;
      }
      break;
    case 5719:
    case 2647:
    case 2135:
    case 3927:
    case 2391:
      return k(e, "scroll-", "scroll-snap-") + e;
  }
  return e;
}
function vt(e, t) {
  for (var r = "", n = 0; n < e.length; n++)
    r += t(e[n], n, e, t) || "";
  return r;
}
function ri(e, t, r, n) {
  switch (e.type) {
    case qs:
      if (e.children.length)
        break;
    case Ms:
    case fr:
      return e.return = e.return || e.value;
    case On:
      return "";
    case xn:
      return e.return = e.value + "{" + vt(e.children, n) + "}";
    case Tt:
      if (!ae(e.value = e.props.join(",")))
        return "";
  }
  return ae(r = vt(e.children, n)) ? e.return = e.value + "{" + r + "}" : "";
}
function ni(e) {
  var t = Cn(e);
  return function(r, n, o, s) {
    for (var i = "", c = 0; c < t; c++)
      i += e[c](r, n, o, s) || "";
    return i;
  };
}
function oi(e) {
  return function(t) {
    t.root || (t = t.return) && e(t);
  };
}
function si(e, t, r, n) {
  if (e.length > -1 && !e.return)
    switch (e.type) {
      case fr:
        e.return = Nn(e.value, e.length, r);
        return;
      case xn:
        return vt([be(e, { value: k(e.value, "@", "@" + N) })], n);
      case Tt:
        if (e.length)
          return Hs(r = e.props, function(o) {
            switch (pe(o, n = /(::plac\w+|:read-\w+)/)) {
              case ":read-only":
              case ":read-write":
                Fe(be(e, { props: [k(o, /:(read-\w+)/, ":" + Qe + "$1")] })), Fe(be(e, { props: [o] })), Zt(e, { props: zr(r, n) });
                break;
              case "::placeholder":
                Fe(be(e, { props: [k(o, /:(plac\w+)/, ":" + N + "input-$1")] })), Fe(be(e, { props: [k(o, /:(plac\w+)/, ":" + Qe + "$1")] })), Fe(be(e, { props: [k(o, /:(plac\w+)/, B + "input-$1")] })), Fe(be(e, { props: [o] })), Zt(e, { props: zr(r, n) });
                break;
            }
            return "";
          });
    }
}
var ii = {
  animationIterationCount: 1,
  aspectRatio: 1,
  borderImageOutset: 1,
  borderImageSlice: 1,
  borderImageWidth: 1,
  boxFlex: 1,
  boxFlexGroup: 1,
  boxOrdinalGroup: 1,
  columnCount: 1,
  columns: 1,
  flex: 1,
  flexGrow: 1,
  flexPositive: 1,
  flexShrink: 1,
  flexNegative: 1,
  flexOrder: 1,
  gridRow: 1,
  gridRowEnd: 1,
  gridRowSpan: 1,
  gridRowStart: 1,
  gridColumn: 1,
  gridColumnEnd: 1,
  gridColumnSpan: 1,
  gridColumnStart: 1,
  msGridRow: 1,
  msGridRowSpan: 1,
  msGridColumn: 1,
  msGridColumnSpan: 1,
  fontWeight: 1,
  lineHeight: 1,
  opacity: 1,
  order: 1,
  orphans: 1,
  tabSize: 1,
  widows: 1,
  zIndex: 1,
  zoom: 1,
  WebkitLineClamp: 1,
  // SVG-related properties
  fillOpacity: 1,
  floodOpacity: 1,
  stopOpacity: 1,
  strokeDasharray: 1,
  strokeDashoffset: 1,
  strokeMiterlimit: 1,
  strokeOpacity: 1,
  strokeWidth: 1
}, Ae = typeof process < "u" && {} !== void 0 && ({}.REACT_APP_SC_ATTR || {}.SC_ATTR) || "data-styled", pr = typeof window < "u" && "HTMLElement" in window, ai = !!(typeof SC_DISABLE_SPEEDY == "boolean" ? SC_DISABLE_SPEEDY : typeof process < "u" && {} !== void 0 && {}.REACT_APP_SC_DISABLE_SPEEDY !== void 0 && {}.REACT_APP_SC_DISABLE_SPEEDY !== "" ? {}.REACT_APP_SC_DISABLE_SPEEDY !== "false" && {}.REACT_APP_SC_DISABLE_SPEEDY : typeof process < "u" && {} !== void 0 && {}.SC_DISABLE_SPEEDY !== void 0 && {}.SC_DISABLE_SPEEDY !== "" ? {}.SC_DISABLE_SPEEDY !== "false" && {}.SC_DISABLE_SPEEDY : {}.NODE_ENV !== "production"), Wr = /invalid hook call/i, it = /* @__PURE__ */ new Set(), ci = function(e, t) {
  if ({}.NODE_ENV !== "production") {
    var r = t ? ' with the id of "'.concat(t, '"') : "", n = "The component ".concat(e).concat(r, ` has been created dynamically.
`) + `You may see this warning because you've called styled inside another component.
To resolve this only create new StyledComponents outside of any render method and function component.`, o = console.error;
    try {
      var s = !0;
      console.error = function(i) {
        for (var c = [], f = 1; f < arguments.length; f++)
          c[f - 1] = arguments[f];
        Wr.test(i) ? (s = !1, it.delete(n)) : o.apply(void 0, Be([i], c, !1));
      }, yo(), s && !it.has(n) && (console.warn(n), it.add(n));
    } catch (i) {
      Wr.test(i.message) && it.delete(n);
    } finally {
      console.error = o;
    }
  }
}, Ct = Object.freeze([]), Me = Object.freeze({});
function ui(e, t, r) {
  return r === void 0 && (r = Me), e.theme !== r.theme && e.theme || t || r.theme;
}
var tr = /* @__PURE__ */ new Set(["a", "abbr", "address", "area", "article", "aside", "audio", "b", "base", "bdi", "bdo", "big", "blockquote", "body", "br", "button", "canvas", "caption", "cite", "code", "col", "colgroup", "data", "datalist", "dd", "del", "details", "dfn", "dialog", "div", "dl", "dt", "em", "embed", "fieldset", "figcaption", "figure", "footer", "form", "h1", "h2", "h3", "h4", "h5", "h6", "head", "header", "hgroup", "hr", "html", "i", "iframe", "img", "input", "ins", "kbd", "keygen", "label", "legend", "li", "link", "main", "map", "mark", "menu", "menuitem", "meta", "meter", "nav", "noscript", "object", "ol", "optgroup", "option", "output", "p", "param", "picture", "pre", "progress", "q", "rp", "rt", "ruby", "s", "samp", "script", "section", "select", "small", "source", "span", "strong", "style", "sub", "summary", "sup", "table", "tbody", "td", "textarea", "tfoot", "th", "thead", "time", "title", "tr", "track", "u", "ul", "use", "var", "video", "wbr", "circle", "clipPath", "defs", "ellipse", "foreignObject", "g", "image", "line", "linearGradient", "marker", "mask", "path", "pattern", "polygon", "polyline", "radialGradient", "rect", "stop", "svg", "text", "tspan"]), li = /[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g, fi = /(^-|-$)/g;
function Yr(e) {
  return e.replace(li, "-").replace(fi, "");
}
var di = /(a)(d)/gi, Gr = function(e) {
  return String.fromCharCode(e + (e > 25 ? 39 : 97));
};
function rr(e) {
  var t, r = "";
  for (t = Math.abs(e); t > 52; t = t / 52 | 0)
    r = Gr(t % 52) + r;
  return (Gr(t % 52) + r).replace(di, "$1-$2");
}
var qt, Re = function(e, t) {
  for (var r = t.length; r; )
    e = 33 * e ^ t.charCodeAt(--r);
  return e;
}, Dn = function(e) {
  return Re(5381, e);
};
function pi(e) {
  return rr(Dn(e) >>> 0);
}
function jn(e) {
  return {}.NODE_ENV !== "production" && typeof e == "string" && e || e.displayName || e.name || "Component";
}
function zt(e) {
  return typeof e == "string" && ({}.NODE_ENV === "production" || e.charAt(0) === e.charAt(0).toLowerCase());
}
var In = typeof Symbol == "function" && Symbol.for, Fn = In ? Symbol.for("react.memo") : 60115, hi = In ? Symbol.for("react.forward_ref") : 60112, mi = { childContextTypes: !0, contextType: !0, contextTypes: !0, defaultProps: !0, displayName: !0, getDefaultProps: !0, getDerivedStateFromError: !0, getDerivedStateFromProps: !0, mixins: !0, propTypes: !0, type: !0 }, yi = { name: !0, length: !0, prototype: !0, caller: !0, callee: !0, arguments: !0, arity: !0 }, Ln = { $$typeof: !0, compare: !0, defaultProps: !0, displayName: !0, propTypes: !0, type: !0 }, gi = ((qt = {})[hi] = { $$typeof: !0, render: !0, defaultProps: !0, displayName: !0, propTypes: !0 }, qt[Fn] = Ln, qt);
function Jr(e) {
  return ("type" in (t = e) && t.type.$$typeof) === Fn ? Ln : "$$typeof" in e ? gi[e.$$typeof] : mi;
  var t;
}
var vi = Object.defineProperty, bi = Object.getOwnPropertyNames, Kr = Object.getOwnPropertySymbols, wi = Object.getOwnPropertyDescriptor, Ei = Object.getPrototypeOf, Xr = Object.prototype;
function Bn(e, t, r) {
  if (typeof t != "string") {
    if (Xr) {
      var n = Ei(t);
      n && n !== Xr && Bn(e, n, r);
    }
    var o = bi(t);
    Kr && (o = o.concat(Kr(t)));
    for (var s = Jr(e), i = Jr(t), c = 0; c < o.length; ++c) {
      var f = o[c];
      if (!(f in yi || r && r[f] || i && f in i || s && f in s)) {
        var u = wi(t, f);
        try {
          vi(e, f, u);
        } catch {
        }
      }
    }
  }
  return e;
}
function qe(e) {
  return typeof e == "function";
}
function hr(e) {
  return typeof e == "object" && "styledComponentId" in e;
}
function ke(e, t) {
  return e && t ? "".concat(e, " ").concat(t) : e || t || "";
}
function Zr(e, t) {
  if (e.length === 0)
    return "";
  for (var r = e[0], n = 1; n < e.length; n++)
    r += t ? t + e[n] : e[n];
  return r;
}
function ze(e) {
  return e !== null && typeof e == "object" && e.constructor.name === Object.name && !("props" in e && e.$$typeof);
}
function nr(e, t, r) {
  if (r === void 0 && (r = !1), !r && !ze(e) && !Array.isArray(e))
    return t;
  if (Array.isArray(t))
    for (var n = 0; n < t.length; n++)
      e[n] = nr(e[n], t[n]);
  else if (ze(t))
    for (var n in t)
      e[n] = nr(e[n], t[n]);
  return e;
}
function mr(e, t) {
  Object.defineProperty(e, "toString", { value: t });
}
var Si = {}.NODE_ENV !== "production" ? { 1: `Cannot create styled-component for component: %s.

`, 2: `Can't collect styles once you've consumed a \`ServerStyleSheet\`'s styles! \`ServerStyleSheet\` is a one off instance for each server-side render cycle.

- Are you trying to reuse it across renders?
- Are you accidentally calling collectStyles twice?

`, 3: `Streaming SSR is only supported in a Node.js environment; Please do not try to call this method in the browser.

`, 4: `The \`StyleSheetManager\` expects a valid target or sheet prop!

- Does this error occur on the client and is your target falsy?
- Does this error occur on the server and is the sheet falsy?

`, 5: `The clone method cannot be used on the client!

- Are you running in a client-like environment on the server?
- Are you trying to run SSR on the client?

`, 6: `Trying to insert a new style tag, but the given Node is unmounted!

- Are you using a custom target that isn't mounted?
- Does your document not have a valid head element?
- Have you accidentally removed a style tag manually?

`, 7: 'ThemeProvider: Please return an object from your "theme" prop function, e.g.\n\n```js\ntheme={() => ({})}\n```\n\n', 8: `ThemeProvider: Please make your "theme" prop an object.

`, 9: "Missing document `<head>`\n\n", 10: `Cannot find a StyleSheet instance. Usually this happens if there are multiple copies of styled-components loaded at once. Check out this issue for how to troubleshoot and fix the common cases where this situation can happen: https://github.com/styled-components/styled-components/issues/1941#issuecomment-417862021

`, 11: `_This error was replaced with a dev-time warning, it will be deleted for v4 final._ [createGlobalStyle] received children which will not be rendered. Please use the component without passing children elements.

`, 12: "It seems you are interpolating a keyframe declaration (%s) into an untagged string. This was supported in styled-components v3, but is not longer supported in v4 as keyframes are now injected on-demand. Please wrap your string in the css\\`\\` helper which ensures the styles are injected correctly. See https://www.styled-components.com/docs/api#css\n\n", 13: `%s is not a styled component and cannot be referred to via component selector. See https://www.styled-components.com/docs/advanced#referring-to-other-components for more details.

`, 14: `ThemeProvider: "theme" prop is required.

`, 15: "A stylis plugin has been supplied that is not named. We need a name for each plugin to be able to prevent styling collisions between different stylis configurations within the same app. Before you pass your plugin to `<StyleSheetManager stylisPlugins={[]}>`, please make sure each plugin is uniquely-named, e.g.\n\n```js\nObject.defineProperty(importedPlugin, 'name', { value: 'some-unique-name' });\n```\n\n", 16: `Reached the limit of how many styled components may be created at group %s.
You may only create up to 1,073,741,824 components. If you're creating components dynamically,
as for instance in your render method then you may be running into this limitation.

`, 17: `CSSStyleSheet could not be found on HTMLStyleElement.
Has styled-components' style tag been unmounted or altered by another script?
`, 18: "ThemeProvider: Please make sure your useTheme hook is within a `<ThemeProvider>`" } : {};
function _i() {
  for (var e = [], t = 0; t < arguments.length; t++)
    e[t] = arguments[t];
  for (var r = e[0], n = [], o = 1, s = e.length; o < s; o += 1)
    n.push(e[o]);
  return n.forEach(function(i) {
    r = r.replace(/%[a-z]/, i);
  }), r;
}
function We(e) {
  for (var t = [], r = 1; r < arguments.length; r++)
    t[r - 1] = arguments[r];
  return {}.NODE_ENV === "production" ? new Error("An error occurred. See https://github.com/styled-components/styled-components/blob/main/packages/styled-components/src/utils/errors.md#".concat(e, " for more information.").concat(t.length > 0 ? " Args: ".concat(t.join(", ")) : "")) : new Error(_i.apply(void 0, Be([Si[e]], t, !1)).trim());
}
var Ri = function() {
  function e(t) {
    this.groupSizes = new Uint32Array(512), this.length = 512, this.tag = t;
  }
  return e.prototype.indexOfGroup = function(t) {
    for (var r = 0, n = 0; n < t; n++)
      r += this.groupSizes[n];
    return r;
  }, e.prototype.insertRules = function(t, r) {
    if (t >= this.groupSizes.length) {
      for (var n = this.groupSizes, o = n.length, s = o; t >= s; )
        if ((s <<= 1) < 0)
          throw We(16, "".concat(t));
      this.groupSizes = new Uint32Array(s), this.groupSizes.set(n), this.length = s;
      for (var i = o; i < s; i++)
        this.groupSizes[i] = 0;
    }
    for (var c = this.indexOfGroup(t + 1), f = (i = 0, r.length); i < f; i++)
      this.tag.insertRule(c, r[i]) && (this.groupSizes[t]++, c++);
  }, e.prototype.clearGroup = function(t) {
    if (t < this.length) {
      var r = this.groupSizes[t], n = this.indexOfGroup(t), o = n + r;
      this.groupSizes[t] = 0;
      for (var s = n; s < o; s++)
        this.tag.deleteRule(n);
    }
  }, e.prototype.getGroup = function(t) {
    var r = "";
    if (t >= this.length || this.groupSizes[t] === 0)
      return r;
    for (var n = this.groupSizes[t], o = this.indexOfGroup(t), s = o + n, i = o; i < s; i++)
      r += "".concat(this.tag.getRule(i)).concat(`/*!sc*/
`);
    return r;
  }, e;
}(), yt = /* @__PURE__ */ new Map(), bt = /* @__PURE__ */ new Map(), Vt = 1, at = function(e) {
  if (yt.has(e))
    return yt.get(e);
  for (; bt.has(Vt); )
    Vt++;
  var t = Vt++;
  if ({}.NODE_ENV !== "production" && ((0 | t) < 0 || t > 1073741824))
    throw We(16, "".concat(t));
  return yt.set(e, t), bt.set(t, e), t;
}, ki = function(e, t) {
  yt.set(e, t), bt.set(t, e);
}, Ti = "style[".concat(Ae, "][").concat("data-styled-version", '="').concat("6.0.7", '"]'), Oi = new RegExp("^".concat(Ae, '\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)')), xi = function(e, t, r) {
  for (var n, o = r.split(","), s = 0, i = o.length; s < i; s++)
    (n = o[s]) && e.registerName(t, n);
}, Ai = function(e, t) {
  for (var r, n = ((r = t.textContent) !== null && r !== void 0 ? r : "").split(`/*!sc*/
`), o = [], s = 0, i = n.length; s < i; s++) {
    var c = n[s].trim();
    if (c) {
      var f = c.match(Oi);
      if (f) {
        var u = 0 | parseInt(f[1], 10), d = f[2];
        u !== 0 && (ki(d, u), xi(e, d, f[3]), e.getTag().insertRules(u, o)), o.length = 0;
      } else
        o.push(c);
    }
  }
};
function Ci() {
  return typeof __webpack_nonce__ < "u" ? __webpack_nonce__ : null;
}
var $n = function(e) {
  var t = document.head, r = e || t, n = document.createElement("style"), o = function(c) {
    var f = Array.from(c.querySelectorAll("style[".concat(Ae, "]")));
    return f[f.length - 1];
  }(r), s = o !== void 0 ? o.nextSibling : null;
  n.setAttribute(Ae, "active"), n.setAttribute("data-styled-version", "6.0.7");
  var i = Ci();
  return i && n.setAttribute("nonce", i), r.insertBefore(n, s), n;
}, Pi = function() {
  function e(t) {
    this.element = $n(t), this.element.appendChild(document.createTextNode("")), this.sheet = function(r) {
      if (r.sheet)
        return r.sheet;
      for (var n = document.styleSheets, o = 0, s = n.length; o < s; o++) {
        var i = n[o];
        if (i.ownerNode === r)
          return i;
      }
      throw We(17);
    }(this.element), this.length = 0;
  }
  return e.prototype.insertRule = function(t, r) {
    try {
      return this.sheet.insertRule(r, t), this.length++, !0;
    } catch {
      return !1;
    }
  }, e.prototype.deleteRule = function(t) {
    this.sheet.deleteRule(t), this.length--;
  }, e.prototype.getRule = function(t) {
    var r = this.sheet.cssRules[t];
    return r && r.cssText ? r.cssText : "";
  }, e;
}(), Ni = function() {
  function e(t) {
    this.element = $n(t), this.nodes = this.element.childNodes, this.length = 0;
  }
  return e.prototype.insertRule = function(t, r) {
    if (t <= this.length && t >= 0) {
      var n = document.createTextNode(r);
      return this.element.insertBefore(n, this.nodes[t] || null), this.length++, !0;
    }
    return !1;
  }, e.prototype.deleteRule = function(t) {
    this.element.removeChild(this.nodes[t]), this.length--;
  }, e.prototype.getRule = function(t) {
    return t < this.length ? this.nodes[t].textContent : "";
  }, e;
}(), Di = function() {
  function e(t) {
    this.rules = [], this.length = 0;
  }
  return e.prototype.insertRule = function(t, r) {
    return t <= this.length && (this.rules.splice(t, 0, r), this.length++, !0);
  }, e.prototype.deleteRule = function(t) {
    this.rules.splice(t, 1), this.length--;
  }, e.prototype.getRule = function(t) {
    return t < this.length ? this.rules[t] : "";
  }, e;
}(), Qr = pr, ji = { isServer: !pr, useCSSOMInjection: !ai }, Un = function() {
  function e(t, r, n) {
    t === void 0 && (t = Me), r === void 0 && (r = {});
    var o = this;
    this.options = X(X({}, ji), t), this.gs = r, this.names = new Map(n), this.server = !!t.isServer, !this.server && pr && Qr && (Qr = !1, function(s) {
      for (var i = document.querySelectorAll(Ti), c = 0, f = i.length; c < f; c++) {
        var u = i[c];
        u && u.getAttribute(Ae) !== "active" && (Ai(s, u), u.parentNode && u.parentNode.removeChild(u));
      }
    }(this)), mr(this, function() {
      return function(s) {
        for (var i = s.getTag(), c = i.length, f = "", u = function(h) {
          var w = function(R) {
            return bt.get(R);
          }(h);
          if (w === void 0)
            return "continue";
          var g = s.names.get(w), m = i.getGroup(h);
          if (g === void 0 || m.length === 0)
            return "continue";
          var v = "".concat(Ae, ".g").concat(h, '[id="').concat(w, '"]'), j = "";
          g !== void 0 && g.forEach(function(R) {
            R.length > 0 && (j += "".concat(R, ","));
          }), f += "".concat(m).concat(v, '{content:"').concat(j, '"}').concat(`/*!sc*/
`);
        }, d = 0; d < c; d++)
          u(d);
        return f;
      }(o);
    });
  }
  return e.registerId = function(t) {
    return at(t);
  }, e.prototype.reconstructWithOptions = function(t, r) {
    return r === void 0 && (r = !0), new e(X(X({}, this.options), t), this.gs, r && this.names || void 0);
  }, e.prototype.allocateGSInstance = function(t) {
    return this.gs[t] = (this.gs[t] || 0) + 1;
  }, e.prototype.getTag = function() {
    return this.tag || (this.tag = (t = function(r) {
      var n = r.useCSSOMInjection, o = r.target;
      return r.isServer ? new Di(o) : n ? new Pi(o) : new Ni(o);
    }(this.options), new Ri(t)));
    var t;
  }, e.prototype.hasNameForId = function(t, r) {
    return this.names.has(t) && this.names.get(t).has(r);
  }, e.prototype.registerName = function(t, r) {
    if (at(t), this.names.has(t))
      this.names.get(t).add(r);
    else {
      var n = /* @__PURE__ */ new Set();
      n.add(r), this.names.set(t, n);
    }
  }, e.prototype.insertRules = function(t, r, n) {
    this.registerName(t, r), this.getTag().insertRules(at(t), n);
  }, e.prototype.clearNames = function(t) {
    this.names.has(t) && this.names.get(t).clear();
  }, e.prototype.clearRules = function(t) {
    this.getTag().clearGroup(at(t)), this.clearNames(t);
  }, e.prototype.clearTag = function() {
    this.tag = void 0;
  }, e;
}(), Ii = /&/g, Fi = /^\s*\/\/.*$/gm;
function Mn(e, t) {
  return e.map(function(r) {
    return r.type === "rule" && (r.value = "".concat(t, " ").concat(r.value), r.value = r.value.replaceAll(",", ",".concat(t, " ")), r.props = r.props.map(function(n) {
      return "".concat(t, " ").concat(n);
    })), Array.isArray(r.children) && r.type !== "@keyframes" && (r.children = Mn(r.children, t)), r;
  });
}
function Li(e) {
  var t, r, n, o = e === void 0 ? Me : e, s = o.options, i = s === void 0 ? Me : s, c = o.plugins, f = c === void 0 ? Ct : c, u = function(w, g, m) {
    return m === r || m.startsWith(r) && m.endsWith(r) && m.replaceAll(r, "").length > 0 ? ".".concat(t) : w;
  }, d = f.slice();
  d.push(function(w) {
    w.type === Tt && w.value.includes("&") && (w.props[0] = w.props[0].replace(Ii, r).replace(n, u));
  }), i.prefix && d.push(si), d.push(ri);
  var h = function(w, g, m, v) {
    g === void 0 && (g = ""), m === void 0 && (m = ""), v === void 0 && (v = "&"), t = v, r = g, n = new RegExp("\\".concat(r, "\\b"), "g");
    var j = w.replace(Fi, ""), R = ei(m || g ? "".concat(m, " ").concat(g, " { ").concat(j, " }") : j);
    i.namespace && (R = Mn(R, i.namespace));
    var E = [];
    return vt(R, ni(d.concat(oi(function(O) {
      return E.push(O);
    })))), E;
  };
  return h.hash = f.length ? f.reduce(function(w, g) {
    return g.name || We(15), Re(w, g.name);
  }, 5381).toString() : "", h;
}
var Bi = new Un(), or = Li(), qn = xe.createContext({ shouldForwardProp: void 0, styleSheet: Bi, stylis: or });
qn.Consumer;
xe.createContext(void 0);
function en() {
  return vo(qn);
}
var tn = function() {
  function e(t, r) {
    var n = this;
    this.inject = function(o, s) {
      s === void 0 && (s = or);
      var i = n.name + s.hash;
      o.hasNameForId(n.id, i) || o.insertRules(n.id, i, s(n.rules, i, "@keyframes"));
    }, this.name = t, this.id = "sc-keyframes-".concat(t), this.rules = r, mr(this, function() {
      throw We(12, String(n.name));
    });
  }
  return e.prototype.getName = function(t) {
    return t === void 0 && (t = or), this.name + t.hash;
  }, e;
}(), $i = function(e) {
  return e >= "A" && e <= "Z";
};
function rn(e) {
  for (var t = "", r = 0; r < e.length; r++) {
    var n = e[r];
    if (r === 1 && n === "-" && e[0] === "-")
      return e;
    $i(n) ? t += "-" + n.toLowerCase() : t += n;
  }
  return t.startsWith("ms-") ? "-" + t : t;
}
var zn = function(e) {
  return e == null || e === !1 || e === "";
}, Vn = function(e) {
  var t, r, n = [];
  for (var o in e) {
    var s = e[o];
    e.hasOwnProperty(o) && !zn(s) && (Array.isArray(s) && s.isCss || qe(s) ? n.push("".concat(rn(o), ":"), s, ";") : ze(s) ? n.push.apply(n, Be(Be(["".concat(o, " {")], Vn(s), !1), ["}"], !1)) : n.push("".concat(rn(o), ": ").concat((t = o, (r = s) == null || typeof r == "boolean" || r === "" ? "" : typeof r != "number" || r === 0 || t in ii || t.startsWith("--") ? String(r).trim() : "".concat(r, "px")), ";")));
  }
  return n;
};
function Oe(e, t, r, n) {
  if (zn(e))
    return [];
  if (hr(e))
    return [".".concat(e.styledComponentId)];
  if (qe(e)) {
    if (!qe(s = e) || s.prototype && s.prototype.isReactComponent || !t)
      return [e];
    var o = e(t);
    return {}.NODE_ENV === "production" || typeof o != "object" || Array.isArray(o) || o instanceof tn || ze(o) || o === null || console.error("".concat(jn(e), " is not a styled component and cannot be referred to via component selector. See https://www.styled-components.com/docs/advanced#referring-to-other-components for more details.")), Oe(o, t, r, n);
  }
  var s;
  return e instanceof tn ? r ? (e.inject(r, n), [e.getName(n)]) : [e] : ze(e) ? Vn(e) : Array.isArray(e) ? Array.prototype.concat.apply(Ct, e.map(function(i) {
    return Oe(i, t, r, n);
  })) : [e.toString()];
}
function Ui(e) {
  for (var t = 0; t < e.length; t += 1) {
    var r = e[t];
    if (qe(r) && !hr(r))
      return !1;
  }
  return !0;
}
var Mi = Dn("6.0.7"), qi = function() {
  function e(t, r, n) {
    this.rules = t, this.staticRulesId = "", this.isStatic = {}.NODE_ENV === "production" && (n === void 0 || n.isStatic) && Ui(t), this.componentId = r, this.baseHash = Re(Mi, r), this.baseStyle = n, Un.registerId(r);
  }
  return e.prototype.generateAndInjectStyles = function(t, r, n) {
    var o = this.baseStyle ? this.baseStyle.generateAndInjectStyles(t, r, n) : "";
    if (this.isStatic && !n.hash)
      if (this.staticRulesId && r.hasNameForId(this.componentId, this.staticRulesId))
        o = ke(o, this.staticRulesId);
      else {
        var s = Zr(Oe(this.rules, t, r, n)), i = rr(Re(this.baseHash, s) >>> 0);
        if (!r.hasNameForId(this.componentId, i)) {
          var c = n(s, ".".concat(i), void 0, this.componentId);
          r.insertRules(this.componentId, i, c);
        }
        o = ke(o, i), this.staticRulesId = i;
      }
    else {
      for (var f = Re(this.baseHash, n.hash), u = "", d = 0; d < this.rules.length; d++) {
        var h = this.rules[d];
        if (typeof h == "string")
          u += h, {}.NODE_ENV !== "production" && (f = Re(f, h));
        else if (h) {
          var w = Zr(Oe(h, t, r, n));
          f = Re(f, w), u += w;
        }
      }
      if (u) {
        var g = rr(f >>> 0);
        r.hasNameForId(this.componentId, g) || r.insertRules(this.componentId, g, n(u, ".".concat(g), void 0, this.componentId)), o = ke(o, g);
      }
    }
    return o;
  }, e;
}(), Hn = xe.createContext(void 0);
Hn.Consumer;
var Ht = {}, nn = /* @__PURE__ */ new Set();
function zi(e, t, r) {
  var n = hr(e), o = e, s = !zt(e), i = t.attrs, c = i === void 0 ? Ct : i, f = t.componentId, u = f === void 0 ? function(C, F) {
    var b = typeof C != "string" ? "sc" : Yr(C);
    Ht[b] = (Ht[b] || 0) + 1;
    var S = "".concat(b, "-").concat(pi("6.0.7" + b + Ht[b]));
    return F ? "".concat(F, "-").concat(S) : S;
  }(t.displayName, t.parentComponentId) : f, d = t.displayName, h = d === void 0 ? function(C) {
    return zt(C) ? "styled.".concat(C) : "Styled(".concat(jn(C), ")");
  }(e) : d, w = t.displayName && t.componentId ? "".concat(Yr(t.displayName), "-").concat(t.componentId) : t.componentId || u, g = n && o.attrs ? o.attrs.concat(c).filter(Boolean) : c, m = t.shouldForwardProp;
  if (n && o.shouldForwardProp) {
    var v = o.shouldForwardProp;
    if (t.shouldForwardProp) {
      var j = t.shouldForwardProp;
      m = function(C, F) {
        return v(C, F) && j(C, F);
      };
    } else
      m = v;
  }
  var R = new qi(r, w, n ? o.componentStyle : void 0);
  function E(C, F) {
    return function(b, S, re) {
      var H = b.attrs, we = b.componentStyle, Ce = b.defaultProps, Ee = b.foldedComponentIds, Y = b.styledComponentId, D = b.target, U = xe.useContext(Hn), L = en(), K = b.shouldForwardProp || L.shouldForwardProp;
      ({}).NODE_ENV !== "production" && Cr(Y);
      var ne = function(De, Se, ge) {
        for (var se, Z = X(X({}, Se), { className: void 0, theme: ge }), _e = 0; _e < De.length; _e += 1) {
          var fe = qe(se = De[_e]) ? se(Z) : se;
          for (var ie in fe)
            Z[ie] = ie === "className" ? ke(Z[ie], fe[ie]) : ie === "style" ? X(X({}, Z[ie]), fe[ie]) : fe[ie];
        }
        return Se.className && (Z.className = ke(Z.className, Se.className)), Z;
      }(H, S, ui(S, U, Ce) || Me), me = ne.as || D, ye = {};
      for (var G in ne)
        ne[G] === void 0 || G[0] === "$" || G === "as" || G === "theme" || (G === "forwardedAs" ? ye.as = ne.forwardedAs : K && !K(G, me) || (ye[G] = ne[G], K || {}.NODE_ENV !== "development" || Us(G) || nn.has(G) || !tr.has(me) || (nn.add(G), console.warn('styled-components: it looks like an unknown prop "'.concat(G, '" is being sent through to the DOM, which will likely trigger a React console error. If you would like automatic filtering of unknown props, you can opt-into that behavior via `<StyleSheetManager shouldForwardProp={...}>` (connect an API like `@emotion/is-prop-valid`) or consider using transient props (`$` prefix for automatic filtering.)')))));
      var Pe = function(De, Se) {
        var ge = en(), se = De.generateAndInjectStyles(Se, ge.styleSheet, ge.stylis);
        return {}.NODE_ENV !== "production" && Cr(se), se;
      }(we, ne);
      ({}).NODE_ENV !== "production" && b.warnTooManyClasses && b.warnTooManyClasses(Pe);
      var Ne = ke(Ee, Y);
      return Pe && (Ne += " " + Pe), ne.className && (Ne += " " + ne.className), ye[zt(me) && !tr.has(me) ? "class" : "className"] = Ne, ye.ref = re, go(me, ye);
    }(O, C, F);
  }
  ({}).NODE_ENV !== "production" && (E.displayName = h);
  var O = xe.forwardRef(E);
  return O.attrs = g, O.componentStyle = R, O.shouldForwardProp = m, {}.NODE_ENV !== "production" && (O.displayName = h), O.foldedComponentIds = n ? ke(o.foldedComponentIds, o.styledComponentId) : "", O.styledComponentId = w, O.target = n ? o.target : e, Object.defineProperty(O, "defaultProps", { get: function() {
    return this._foldedDefaultProps;
  }, set: function(C) {
    this._foldedDefaultProps = n ? function(F) {
      for (var b = [], S = 1; S < arguments.length; S++)
        b[S - 1] = arguments[S];
      for (var re = 0, H = b; re < H.length; re++)
        nr(F, H[re], !0);
      return F;
    }({}, o.defaultProps, C) : C;
  } }), {}.NODE_ENV !== "production" && (ci(h, w), O.warnTooManyClasses = function(C, F) {
    var b = {}, S = !1;
    return function(re) {
      if (!S && (b[re] = !0, Object.keys(b).length >= 200)) {
        var H = F ? ' with the id of "'.concat(F, '"') : "";
        console.warn("Over ".concat(200, " classes were generated for component ").concat(C).concat(H, `.
`) + `Consider using the attrs method, together with a style object for frequently changed styles.
Example:
  const Component = styled.div.attrs(props => ({
    style: {
      background: props.background,
    },
  }))\`width: 100%;\`

  <Component />`), S = !0, b = {};
      }
    };
  }(h, w)), mr(O, function() {
    return ".".concat(O.styledComponentId);
  }), s && Bn(O, e, { attrs: !0, componentStyle: !0, displayName: !0, foldedComponentIds: !0, shouldForwardProp: !0, styledComponentId: !0, target: !0 }), O;
}
function on(e, t) {
  for (var r = [e[0]], n = 0, o = t.length; n < o; n += 1)
    r.push(t[n], e[n + 1]);
  return r;
}
var sn = function(e) {
  return Object.assign(e, { isCss: !0 });
};
function Vi(e) {
  for (var t = [], r = 1; r < arguments.length; r++)
    t[r - 1] = arguments[r];
  if (qe(e) || ze(e)) {
    var n = e;
    return sn(Oe(on(Ct, Be([n], t, !0))));
  }
  var o = e;
  return t.length === 0 && o.length === 1 && typeof o[0] == "string" ? Oe(o) : sn(Oe(on(o, t)));
}
function sr(e, t, r) {
  if (r === void 0 && (r = Me), !t)
    throw We(1, t);
  var n = function(o) {
    for (var s = [], i = 1; i < arguments.length; i++)
      s[i - 1] = arguments[i];
    return e(t, r, Vi.apply(void 0, Be([o], s, !1)));
  };
  return n.attrs = function(o) {
    return sr(e, t, X(X({}, r), { attrs: Array.prototype.concat(r.attrs, o).filter(Boolean) }));
  }, n.withConfig = function(o) {
    return sr(e, t, X(X({}, r), o));
  }, n;
}
var Wn = function(e) {
  return sr(zi, e);
}, le = Wn;
tr.forEach(function(e) {
  le[e] = Wn(e);
});
({}).NODE_ENV !== "production" && typeof navigator < "u" && navigator.product === "ReactNative" && console.warn(`It looks like you've imported 'styled-components' on React Native.
Perhaps you're looking to import 'styled-components/native'?
Read more about this at https://www.styled-components.com/docs/basics#react-native`);
var ct = "__sc-".concat(Ae, "__");
({}).NODE_ENV !== "production" && {}.NODE_ENV !== "test" && typeof window < "u" && (window[ct] || (window[ct] = 0), window[ct] === 1 && console.warn(`It looks like there are several instances of 'styled-components' initialized in this application. This may cause dynamic styles to not render properly, errors during the rehydration process, a missing theme prop, and makes your application bigger without good reason.

See https://s-c.sh/2BAXzed for more info.`), window[ct] += 1);
const an = (e) => `${e.pokemon_v2_pokemonspecy.pokemon_v2_pokemonspeciesnames[0].name}${e.pokemon_v2_pokemonforms[0].pokemon_v2_pokemonformnames.length ? " (" + e.pokemon_v2_pokemonforms[0].pokemon_v2_pokemonformnames[0].name + ")" : ""}`, Wt = le.div``, Hi = le.h4``, Wi = le.label``, Yi = le.select``, Gi = le.option``, Ji = le.input``, Ki = le.h5``, Xi = le.ul``, Zi = le.li``, ea = ({
  Box: e = Wt,
  Title: t = Hi,
  Form: r = Wt,
  Result: n = Wt,
  Label: o = Wi,
  Select: s = Yi,
  Option: i = Gi,
  Button: c = Ji,
  SubTitle: f = Ki,
  List: u = Xi,
  ListItem: d = Zi
}) => {
  const [h, w] = Ge([]), [g, m] = Ge(0), [v, j] = Ge(0), [R, E] = Ge(0), [O, C] = Ge([]);
  bo(() => {
    (async () => {
      const {
        data: S
      } = await Ut.post("https://beta.pokeapi.co/graphql/v1beta", {
        query: `
                    query typesPokeAPIquery {
                        pokemon_v2_type(where: {pokemon_v2_pokemontypes_aggregate: {count: {predicate: {_gt: 0}}}}) {
                            id
                            pokemon_v2_typeefficacies {
                                damage_factor
                                pokemonV2TypeByTargetTypeId {
                                    id
                                }
                            }
                            pokemon_v2_typenames(where: {language_id: {_eq: 9}}) {
                                name
                            }
                        }
                    }
                `
      });
      w(S.data.pokemon_v2_type);
    })();
  }, []);
  const F = async () => {
    var Ce, Ee, Y;
    const b = R || g, S = h.map((D) => {
      let U = 0;
      return U = -D.pokemon_v2_typeefficacies.find((L) => L.pokemonV2TypeByTargetTypeId.id === b).damage_factor, U += h.find((L) => L.id === g).pokemon_v2_typeefficacies.find((L) => L.pokemonV2TypeByTargetTypeId.id === D.id).damage_factor, v && (U += h.find((L) => L.id === v).pokemon_v2_typeefficacies.find((L) => L.pokemonV2TypeByTargetTypeId.id === D.id).damage_factor), b !== g && b !== v && (U += h.find((L) => L.id === b).pokemon_v2_typeefficacies.find((L) => L.pokemonV2TypeByTargetTypeId.id === D.id).damage_factor), {
        id: D.id,
        points: U
      };
    }).sort((D, U) => D.points - U.points);
    let re = S[0].points, H = [], we = 0;
    for (; S[we].points <= re; )
      H.push(S[we].id), we++;
    if (H.length === 1) {
      const {
        data: D
      } = await Ut.post("https://beta.pokeapi.co/graphql/v1beta", {
        query: `
                    query pokemonPokeAPIquery {
                        pokemon_v2_pokemon(where: {pokemon_v2_pokemontypes: {pokemon_v2_type: {id: {_eq: ${H[0]}}}}, pokemon_v2_pokemontypes_aggregate: {count: {predicate: {_eq: 1}}}}, order_by: {pokemon_v2_pokemonstats_aggregate: {sum: {base_stat: desc}}}) {
                            pokemon_v2_pokemonspecy {
                                pokemon_v2_pokemonspeciesnames(where: {language_id: {_eq: 9}}) {
                                    name
                                }
                            }
                            pokemon_v2_pokemonforms {
                                pokemon_v2_pokemonformnames(where: {language_id: {_eq: 9}}) {
                                    name
                                }
                            }
                        }
                    }
                `
      });
      D.data && C([((Ce = h.find((U) => U.id === H[0])) == null ? void 0 : Ce.pokemon_v2_typenames[0].name) + ": " + D.data.pokemon_v2_pokemon.map(an).join(", ")]);
    } else {
      let D = [], U = [];
      for (let L = 0; L < H.length - 1; L++)
        for (let K = L + 1; K < H.length; K++)
          D.push(H[L]), D.push(H[K]);
      for (; D.length; ) {
        const {
          data: L
        } = await Ut.post("https://beta.pokeapi.co/graphql/v1beta", {
          query: `
                        query pokemonPokeAPIquery {
                            pokemon_v2_pokemon(where: {pokemon_v2_pokemontypes: {pokemon_v2_type: {id: {_eq: ${D[0]}}}}, _and: {pokemon_v2_pokemontypes: {pokemon_v2_type: {id: {_eq: ${D[1]}}}}}}, order_by: {pokemon_v2_pokemonstats_aggregate: {sum: {base_stat: desc}}}) {
                                pokemon_v2_pokemonspecy {
                                    pokemon_v2_pokemonspeciesnames(where: {language_id: {_eq: 9}}) {
                                        name
                                    }
                                }
                                pokemon_v2_pokemonforms {
                                    pokemon_v2_pokemonformnames(where: {language_id: {_eq: 9}}) {
                                        name
                                    }
                                }
                            }
                        }
                    `
        });
        L.data && U.push(((Ee = h.find((K) => K.id === D[0])) == null ? void 0 : Ee.pokemon_v2_typenames[0].name) + " + " + ((Y = h.find((K) => K.id === D[1])) == null ? void 0 : Y.pokemon_v2_typenames[0].name) + ": " + L.data.pokemon_v2_pokemon.map(an).join(", ")), D.splice(0, 2);
      }
      C(U);
    }
  };
  return /* @__PURE__ */ q.jsxs(e, { children: [
    /* @__PURE__ */ q.jsx(t, { children: "Tera Raid Pkmn Calculator" }),
    /* @__PURE__ */ q.jsxs(r, { children: [
      /* @__PURE__ */ q.jsxs(o, { children: [
        "Type 1:",
        /* @__PURE__ */ q.jsxs(s, { value: g, onChange: (b) => m(parseInt(b.target.value)), children: [
          /* @__PURE__ */ q.jsx(i, { value: 0, children: "None" }),
          h.map((b) => /* @__PURE__ */ q.jsx(i, { value: b.id, children: b.pokemon_v2_typenames[0].name }, "type1-" + b.id))
        ] })
      ] }),
      /* @__PURE__ */ q.jsxs(o, { children: [
        "Type 2:",
        /* @__PURE__ */ q.jsxs(s, { value: v, onChange: (b) => j(parseInt(b.target.value)), disabled: !g, children: [
          /* @__PURE__ */ q.jsx(i, { value: 0, children: "None" }),
          h.map((b) => /* @__PURE__ */ q.jsx(i, { value: b.id, children: b.pokemon_v2_typenames[0].name }, "type2-" + b.id))
        ] })
      ] }),
      /* @__PURE__ */ q.jsxs(o, { children: [
        "Tera Type:",
        /* @__PURE__ */ q.jsxs(s, { value: R, onChange: (b) => E(parseInt(b.target.value)), children: [
          /* @__PURE__ */ q.jsx(i, { value: 0, children: "None" }),
          h.map((b) => /* @__PURE__ */ q.jsx(i, { value: b.id, children: b.pokemon_v2_typenames[0].name }, "teraType-" + b.id))
        ] })
      ] }),
      /* @__PURE__ */ q.jsx(c, { type: "button", value: "Calculate", onClick: F, disabled: !g })
    ] }),
    /* @__PURE__ */ q.jsxs(n, { children: [
      /* @__PURE__ */ q.jsx(f, { children: O.length > 0 && "Recommended Pkmn: " }),
      /* @__PURE__ */ q.jsx(u, { children: O.map((b) => /* @__PURE__ */ q.jsx(d, { children: b }, b.replaceAll(" ", ""))) })
    ] })
  ] });
};
export {
  ea as TeraRaidCalc
};
