import Ie, { useState as q, useEffect as dr } from "react";
var pe = { exports: {} }, K = {};
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Ye;
function vr() {
  if (Ye) return K;
  Ye = 1;
  var I = Ie, x = Symbol.for("react.element"), U = Symbol.for("react.fragment"), M = Object.prototype.hasOwnProperty, $ = I.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, O = { key: !0, ref: !0, __self: !0, __source: !0 };
  function F(T, f, D) {
    var h, S = {}, j = null, W = null;
    D !== void 0 && (j = "" + D), f.key !== void 0 && (j = "" + f.key), f.ref !== void 0 && (W = f.ref);
    for (h in f) M.call(f, h) && !O.hasOwnProperty(h) && (S[h] = f[h]);
    if (T && T.defaultProps) for (h in f = T.defaultProps, f) S[h] === void 0 && (S[h] = f[h]);
    return { $$typeof: x, type: T, key: j, ref: W, props: S, _owner: $.current };
  }
  return K.Fragment = U, K.jsx = F, K.jsxs = F, K;
}
var z = {};
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Ne;
function pr() {
  return Ne || (Ne = 1, process.env.NODE_ENV !== "production" && function() {
    var I = Ie, x = Symbol.for("react.element"), U = Symbol.for("react.portal"), M = Symbol.for("react.fragment"), $ = Symbol.for("react.strict_mode"), O = Symbol.for("react.profiler"), F = Symbol.for("react.provider"), T = Symbol.for("react.context"), f = Symbol.for("react.forward_ref"), D = Symbol.for("react.suspense"), h = Symbol.for("react.suspense_list"), S = Symbol.for("react.memo"), j = Symbol.for("react.lazy"), W = Symbol.for("react.offscreen"), Y = Symbol.iterator, G = "@@iterator";
    function X(e) {
      if (e === null || typeof e != "object")
        return null;
      var r = Y && e[Y] || e[G];
      return typeof r == "function" ? r : null;
    }
    var P = I.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function v(e) {
      {
        for (var r = arguments.length, t = new Array(r > 1 ? r - 1 : 0), a = 1; a < r; a++)
          t[a - 1] = arguments[a];
        te("error", e, t);
      }
    }
    function te(e, r, t) {
      {
        var a = P.ReactDebugCurrentFrame, s = a.getStackAddendum();
        s !== "" && (r += "%s", t = t.concat([s]));
        var u = t.map(function(i) {
          return String(i);
        });
        u.unshift("Warning: " + r), Function.prototype.apply.call(console[e], console, u);
      }
    }
    var ne = !1, ae = !1, n = !1, c = !1, g = !1, m;
    m = Symbol.for("react.module.reference");
    function w(e) {
      return !!(typeof e == "string" || typeof e == "function" || e === M || e === O || g || e === $ || e === D || e === h || c || e === W || ne || ae || n || typeof e == "object" && e !== null && (e.$$typeof === j || e.$$typeof === S || e.$$typeof === F || e.$$typeof === T || e.$$typeof === f || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      e.$$typeof === m || e.getModuleId !== void 0));
    }
    function k(e, r, t) {
      var a = e.displayName;
      if (a)
        return a;
      var s = r.displayName || r.name || "";
      return s !== "" ? t + "(" + s + ")" : t;
    }
    function A(e) {
      return e.displayName || "Context";
    }
    function b(e) {
      if (e == null)
        return null;
      if (typeof e.tag == "number" && v("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof e == "function")
        return e.displayName || e.name || null;
      if (typeof e == "string")
        return e;
      switch (e) {
        case M:
          return "Fragment";
        case U:
          return "Portal";
        case O:
          return "Profiler";
        case $:
          return "StrictMode";
        case D:
          return "Suspense";
        case h:
          return "SuspenseList";
      }
      if (typeof e == "object")
        switch (e.$$typeof) {
          case T:
            var r = e;
            return A(r) + ".Consumer";
          case F:
            var t = e;
            return A(t._context) + ".Provider";
          case f:
            return k(e, e.render, "ForwardRef");
          case S:
            var a = e.displayName || null;
            return a !== null ? a : b(e.type) || "Memo";
          case j: {
            var s = e, u = s._payload, i = s._init;
            try {
              return b(i(u));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    var C = Object.assign, E = 0, H, he, ge, me, ye, be, Ee;
    function _e() {
    }
    _e.__reactDisabledLog = !0;
    function $e() {
      {
        if (E === 0) {
          H = console.log, he = console.info, ge = console.warn, me = console.error, ye = console.group, be = console.groupCollapsed, Ee = console.groupEnd;
          var e = {
            configurable: !0,
            enumerable: !0,
            value: _e,
            writable: !0
          };
          Object.defineProperties(console, {
            info: e,
            log: e,
            warn: e,
            error: e,
            group: e,
            groupCollapsed: e,
            groupEnd: e
          });
        }
        E++;
      }
    }
    function We() {
      {
        if (E--, E === 0) {
          var e = {
            configurable: !0,
            enumerable: !0,
            writable: !0
          };
          Object.defineProperties(console, {
            log: C({}, e, {
              value: H
            }),
            info: C({}, e, {
              value: he
            }),
            warn: C({}, e, {
              value: ge
            }),
            error: C({}, e, {
              value: me
            }),
            group: C({}, e, {
              value: ye
            }),
            groupCollapsed: C({}, e, {
              value: be
            }),
            groupEnd: C({}, e, {
              value: Ee
            })
          });
        }
        E < 0 && v("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var oe = P.ReactCurrentDispatcher, ie;
    function Z(e, r, t) {
      {
        if (ie === void 0)
          try {
            throw Error();
          } catch (s) {
            var a = s.stack.trim().match(/\n( *(at )?)/);
            ie = a && a[1] || "";
          }
        return `
` + ie + e;
      }
    }
    var se = !1, Q;
    {
      var Le = typeof WeakMap == "function" ? WeakMap : Map;
      Q = new Le();
    }
    function Re(e, r) {
      if (!e || se)
        return "";
      {
        var t = Q.get(e);
        if (t !== void 0)
          return t;
      }
      var a;
      se = !0;
      var s = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var u;
      u = oe.current, oe.current = null, $e();
      try {
        if (r) {
          var i = function() {
            throw Error();
          };
          if (Object.defineProperty(i.prototype, "props", {
            set: function() {
              throw Error();
            }
          }), typeof Reflect == "object" && Reflect.construct) {
            try {
              Reflect.construct(i, []);
            } catch (_) {
              a = _;
            }
            Reflect.construct(e, [], i);
          } else {
            try {
              i.call();
            } catch (_) {
              a = _;
            }
            e.call(i.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (_) {
            a = _;
          }
          e();
        }
      } catch (_) {
        if (_ && a && typeof _.stack == "string") {
          for (var o = _.stack.split(`
`), y = a.stack.split(`
`), l = o.length - 1, d = y.length - 1; l >= 1 && d >= 0 && o[l] !== y[d]; )
            d--;
          for (; l >= 1 && d >= 0; l--, d--)
            if (o[l] !== y[d]) {
              if (l !== 1 || d !== 1)
                do
                  if (l--, d--, d < 0 || o[l] !== y[d]) {
                    var R = `
` + o[l].replace(" at new ", " at ");
                    return e.displayName && R.includes("<anonymous>") && (R = R.replace("<anonymous>", e.displayName)), typeof e == "function" && Q.set(e, R), R;
                  }
                while (l >= 1 && d >= 0);
              break;
            }
        }
      } finally {
        se = !1, oe.current = u, We(), Error.prepareStackTrace = s;
      }
      var V = e ? e.displayName || e.name : "", N = V ? Z(V) : "";
      return typeof e == "function" && Q.set(e, N), N;
    }
    function Ve(e, r, t) {
      return Re(e, !1);
    }
    function Ue(e) {
      var r = e.prototype;
      return !!(r && r.isReactComponent);
    }
    function ee(e, r, t) {
      if (e == null)
        return "";
      if (typeof e == "function")
        return Re(e, Ue(e));
      if (typeof e == "string")
        return Z(e);
      switch (e) {
        case D:
          return Z("Suspense");
        case h:
          return Z("SuspenseList");
      }
      if (typeof e == "object")
        switch (e.$$typeof) {
          case f:
            return Ve(e.render);
          case S:
            return ee(e.type, r, t);
          case j: {
            var a = e, s = a._payload, u = a._init;
            try {
              return ee(u(s), r, t);
            } catch {
            }
          }
        }
      return "";
    }
    var J = Object.prototype.hasOwnProperty, Se = {}, xe = P.ReactDebugCurrentFrame;
    function re(e) {
      if (e) {
        var r = e._owner, t = ee(e.type, e._source, r ? r.type : null);
        xe.setExtraStackFrame(t);
      } else
        xe.setExtraStackFrame(null);
    }
    function Ge(e, r, t, a, s) {
      {
        var u = Function.call.bind(J);
        for (var i in e)
          if (u(e, i)) {
            var o = void 0;
            try {
              if (typeof e[i] != "function") {
                var y = Error((a || "React class") + ": " + t + " type `" + i + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof e[i] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw y.name = "Invariant Violation", y;
              }
              o = e[i](r, i, a, t, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (l) {
              o = l;
            }
            o && !(o instanceof Error) && (re(s), v("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", a || "React class", t, i, typeof o), re(null)), o instanceof Error && !(o.message in Se) && (Se[o.message] = !0, re(s), v("Failed %s type: %s", t, o.message), re(null));
          }
      }
    }
    var Je = Array.isArray;
    function ue(e) {
      return Je(e);
    }
    function Be(e) {
      {
        var r = typeof Symbol == "function" && Symbol.toStringTag, t = r && e[Symbol.toStringTag] || e.constructor.name || "Object";
        return t;
      }
    }
    function qe(e) {
      try {
        return Te(e), !1;
      } catch {
        return !0;
      }
    }
    function Te(e) {
      return "" + e;
    }
    function je(e) {
      if (qe(e))
        return v("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", Be(e)), Te(e);
    }
    var B = P.ReactCurrentOwner, Ke = {
      key: !0,
      ref: !0,
      __self: !0,
      __source: !0
    }, we, Ce, ce;
    ce = {};
    function ze(e) {
      if (J.call(e, "ref")) {
        var r = Object.getOwnPropertyDescriptor(e, "ref").get;
        if (r && r.isReactWarning)
          return !1;
      }
      return e.ref !== void 0;
    }
    function Xe(e) {
      if (J.call(e, "key")) {
        var r = Object.getOwnPropertyDescriptor(e, "key").get;
        if (r && r.isReactWarning)
          return !1;
      }
      return e.key !== void 0;
    }
    function He(e, r) {
      if (typeof e.ref == "string" && B.current && r && B.current.stateNode !== r) {
        var t = b(B.current.type);
        ce[t] || (v('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', b(B.current.type), e.ref), ce[t] = !0);
      }
    }
    function Ze(e, r) {
      {
        var t = function() {
          we || (we = !0, v("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", r));
        };
        t.isReactWarning = !0, Object.defineProperty(e, "key", {
          get: t,
          configurable: !0
        });
      }
    }
    function Qe(e, r) {
      {
        var t = function() {
          Ce || (Ce = !0, v("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", r));
        };
        t.isReactWarning = !0, Object.defineProperty(e, "ref", {
          get: t,
          configurable: !0
        });
      }
    }
    var er = function(e, r, t, a, s, u, i) {
      var o = {
        // This tag allows us to uniquely identify this as a React Element
        $$typeof: x,
        // Built-in properties that belong on the element
        type: e,
        key: r,
        ref: t,
        props: i,
        // Record the component responsible for creating this element.
        _owner: u
      };
      return o._store = {}, Object.defineProperty(o._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: !1
      }), Object.defineProperty(o, "_self", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: a
      }), Object.defineProperty(o, "_source", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: s
      }), Object.freeze && (Object.freeze(o.props), Object.freeze(o)), o;
    };
    function rr(e, r, t, a, s) {
      {
        var u, i = {}, o = null, y = null;
        t !== void 0 && (je(t), o = "" + t), Xe(r) && (je(r.key), o = "" + r.key), ze(r) && (y = r.ref, He(r, s));
        for (u in r)
          J.call(r, u) && !Ke.hasOwnProperty(u) && (i[u] = r[u]);
        if (e && e.defaultProps) {
          var l = e.defaultProps;
          for (u in l)
            i[u] === void 0 && (i[u] = l[u]);
        }
        if (o || y) {
          var d = typeof e == "function" ? e.displayName || e.name || "Unknown" : e;
          o && Ze(i, d), y && Qe(i, d);
        }
        return er(e, o, y, s, a, B.current, i);
      }
    }
    var le = P.ReactCurrentOwner, Oe = P.ReactDebugCurrentFrame;
    function L(e) {
      if (e) {
        var r = e._owner, t = ee(e.type, e._source, r ? r.type : null);
        Oe.setExtraStackFrame(t);
      } else
        Oe.setExtraStackFrame(null);
    }
    var fe;
    fe = !1;
    function de(e) {
      return typeof e == "object" && e !== null && e.$$typeof === x;
    }
    function De() {
      {
        if (le.current) {
          var e = b(le.current.type);
          if (e)
            return `

Check the render method of \`` + e + "`.";
        }
        return "";
      }
    }
    function tr(e) {
      return "";
    }
    var Pe = {};
    function nr(e) {
      {
        var r = De();
        if (!r) {
          var t = typeof e == "string" ? e : e.displayName || e.name;
          t && (r = `

Check the top-level render call using <` + t + ">.");
        }
        return r;
      }
    }
    function ke(e, r) {
      {
        if (!e._store || e._store.validated || e.key != null)
          return;
        e._store.validated = !0;
        var t = nr(r);
        if (Pe[t])
          return;
        Pe[t] = !0;
        var a = "";
        e && e._owner && e._owner !== le.current && (a = " It was passed a child from " + b(e._owner.type) + "."), L(e), v('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', t, a), L(null);
      }
    }
    function Ae(e, r) {
      {
        if (typeof e != "object")
          return;
        if (ue(e))
          for (var t = 0; t < e.length; t++) {
            var a = e[t];
            de(a) && ke(a, r);
          }
        else if (de(e))
          e._store && (e._store.validated = !0);
        else if (e) {
          var s = X(e);
          if (typeof s == "function" && s !== e.entries)
            for (var u = s.call(e), i; !(i = u.next()).done; )
              de(i.value) && ke(i.value, r);
        }
      }
    }
    function ar(e) {
      {
        var r = e.type;
        if (r == null || typeof r == "string")
          return;
        var t;
        if (typeof r == "function")
          t = r.propTypes;
        else if (typeof r == "object" && (r.$$typeof === f || // Note: Memo only checks outer props here.
        // Inner props are checked in the reconciler.
        r.$$typeof === S))
          t = r.propTypes;
        else
          return;
        if (t) {
          var a = b(r);
          Ge(t, e.props, "prop", a, e);
        } else if (r.PropTypes !== void 0 && !fe) {
          fe = !0;
          var s = b(r);
          v("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", s || "Unknown");
        }
        typeof r.getDefaultProps == "function" && !r.getDefaultProps.isReactClassApproved && v("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
      }
    }
    function or(e) {
      {
        for (var r = Object.keys(e.props), t = 0; t < r.length; t++) {
          var a = r[t];
          if (a !== "children" && a !== "key") {
            L(e), v("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", a), L(null);
            break;
          }
        }
        e.ref !== null && (L(e), v("Invalid attribute `ref` supplied to `React.Fragment`."), L(null));
      }
    }
    var Me = {};
    function Fe(e, r, t, a, s, u) {
      {
        var i = w(e);
        if (!i) {
          var o = "";
          (e === void 0 || typeof e == "object" && e !== null && Object.keys(e).length === 0) && (o += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var y = tr();
          y ? o += y : o += De();
          var l;
          e === null ? l = "null" : ue(e) ? l = "array" : e !== void 0 && e.$$typeof === x ? (l = "<" + (b(e.type) || "Unknown") + " />", o = " Did you accidentally export a JSX literal instead of a component?") : l = typeof e, v("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", l, o);
        }
        var d = rr(e, r, t, s, u);
        if (d == null)
          return d;
        if (i) {
          var R = r.children;
          if (R !== void 0)
            if (a)
              if (ue(R)) {
                for (var V = 0; V < R.length; V++)
                  Ae(R[V], e);
                Object.freeze && Object.freeze(R);
              } else
                v("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
            else
              Ae(R, e);
        }
        if (J.call(r, "key")) {
          var N = b(e), _ = Object.keys(r).filter(function(fr) {
            return fr !== "key";
          }), ve = _.length > 0 ? "{key: someKey, " + _.join(": ..., ") + ": ...}" : "{key: someKey}";
          if (!Me[N + ve]) {
            var lr = _.length > 0 ? "{" + _.join(": ..., ") + ": ...}" : "{}";
            v(`A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`, ve, N, lr, N), Me[N + ve] = !0;
          }
        }
        return e === M ? or(d) : ar(d), d;
      }
    }
    function ir(e, r, t) {
      return Fe(e, r, t, !0);
    }
    function sr(e, r, t) {
      return Fe(e, r, t, !1);
    }
    var ur = sr, cr = ir;
    z.Fragment = M, z.jsx = ur, z.jsxs = cr;
  }()), z;
}
process.env.NODE_ENV === "production" ? pe.exports = vr() : pe.exports = pr();
var p = pe.exports;
function gr({
  id: I,
  value: x,
  onChange: U
}) {
  const [$, O] = q(!1), [F, T] = q([]), [f, D] = q(
    G().getMonth()
  ), [h, S] = q(
    G().getFullYear()
  ), [j, W] = q(
    x ? new Date(x) : /* @__PURE__ */ new Date()
  );
  dr(() => {
    te();
    const n = (c) => {
      var k;
      const g = document.getElementById("datePickerModal");
      if (!g) return;
      const m = c.target, w = (k = c.target) == null ? void 0 : k.id;
      !g.contains(m) && m !== g && w !== I && O(!1);
    };
    return document.addEventListener("click", n), () => {
      document.removeEventListener("click", n);
    };
  }, [f, h]);
  function Y() {
    const n = /* @__PURE__ */ new Date();
    return n.setMonth(f), n.setFullYear(h), n.setHours(0, 0, 0, 0), n;
  }
  function G() {
    const n = /* @__PURE__ */ new Date();
    return n.setHours(0, 0, 0, 0), n;
  }
  function X(n) {
    const c = n.getFullYear(), g = n.getMonth(), m = new Date(c, g + 1, 1);
    return m.setDate(m.getDate() - 1), m.getDate();
  }
  function P() {
    const c = G().getFullYear(), g = c - 500, w = c + 500 - g;
    return Array.from({ length: w }, (k, A) => g + A);
  }
  function v(n) {
    const c = n.getFullYear(), g = String(n.getMonth() + 1).padStart(2, "0"), m = String(n.getDate()).padStart(2, "0");
    return `${c}-${g}-${m}`;
  }
  function te() {
    const n = Y();
    n.setMonth(n.getMonth() - 1);
    const c = X(n), g = Y();
    g.setDate(1);
    const m = X(Y());
    let w = g.getDay() - 1;
    w < 0 && (w = 6);
    const k = [];
    for (let E = w; E > 0; E--)
      k.push({
        dayNumber: c - E + 1,
        month: n.getMonth()
      });
    const A = k.concat(
      Array.from({ length: m }, (E, H) => ({
        dayNumber: H + 1,
        month: g.getMonth()
      }))
    ), b = Y();
    b.setMonth(b.getMonth() + 1);
    const C = 42 - A.length;
    for (let E = 1; E <= C; E++)
      A.push({
        dayNumber: E,
        month: b.getMonth()
      });
    T(A);
  }
  function ne(n) {
    const { dayNumber: c, month: g } = n, m = /* @__PURE__ */ new Date(`${h}-${g + 1}-${c}`);
    m.setHours(0, 0, 0, 0), W(m), U(v(m)), O(!1);
  }
  function ae(n) {
    n.preventDefault(), O((c) => !c);
  }
  return /* @__PURE__ */ p.jsxs("div", { className: "date-picker-container", children: [
    $ && /* @__PURE__ */ p.jsxs("div", { id: "datePickerModal", className: "calendar-modal", children: [
      /* @__PURE__ */ p.jsxs("div", { className: "calendar-head", children: [
        /* @__PURE__ */ p.jsx(
          "select",
          {
            name: "month",
            id: "month",
            value: f,
            onChange: (n) => D(+n.target.value),
            children: [
              "January",
              "February",
              "March",
              "April",
              "May",
              "June",
              "July",
              "August",
              "September",
              "October",
              "November",
              "December"
            ].map((n, c) => /* @__PURE__ */ p.jsx("option", { value: c, children: n }, n))
          }
        ),
        /* @__PURE__ */ p.jsx(
          "select",
          {
            name: "year",
            id: "year",
            value: h,
            onChange: (n) => S(+n.target.value),
            size: 1,
            children: P().map((n) => /* @__PURE__ */ p.jsx("option", { value: n, children: n }, n))
          }
        )
      ] }),
      /* @__PURE__ */ p.jsxs("div", { className: "calendar-grid", children: [
        /* @__PURE__ */ p.jsxs("div", { className: "grid-head", children: [
          /* @__PURE__ */ p.jsx("span", { className: "grid-box", children: "M" }),
          /* @__PURE__ */ p.jsx("span", { className: "grid-box", children: "T" }),
          /* @__PURE__ */ p.jsx("span", { className: "grid-box", children: "W" }),
          /* @__PURE__ */ p.jsx("span", { className: "grid-box", children: "T" }),
          /* @__PURE__ */ p.jsx("span", { className: "grid-box", children: "F" }),
          /* @__PURE__ */ p.jsx("span", { className: "grid-box", children: "S" }),
          /* @__PURE__ */ p.jsx("span", { className: "grid-box", children: "S" })
        ] }),
        /* @__PURE__ */ p.jsx("div", { className: "grid-body", children: F.map((n, c) => /* @__PURE__ */ p.jsx(
          "div",
          {
            className: `grid-box day-chip ${n.month !== f ? "faded" : ""}`,
            onClick: () => {
              ne(n);
            },
            children: n.dayNumber
          },
          c + 1
        )) })
      ] })
    ] }),
    /* @__PURE__ */ p.jsx(
      "input",
      {
        id: I,
        type: "date",
        style: { width: "100%" },
        value: x ? v(j) : "",
        onChange: () => {
        },
        onClick: (n) => ae(n)
      }
    )
  ] });
}
export {
  gr as default
};
