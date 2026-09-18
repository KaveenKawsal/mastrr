var uo = Object.create, xs = Object.defineProperty, ho = Object.getOwnPropertyDescriptor, po = Object.getOwnPropertyNames, fo = Object.getPrototypeOf, mo = Object.prototype.hasOwnProperty, Ti = (e, t) => () => (t || (e((t = { exports: {} }).exports, t), e = null), t.exports), go = (e, t, i, r) => {
  if (t && typeof t == "object" || typeof t == "function") for (var a = po(t), n = 0, s = a.length, o; n < s; n++) o = a[n], !mo.call(e, o) && o !== i && xs(e, o, { get: ((l) => t[l]).bind(null, o), enumerable: !(r = ho(t, o)) || r.enumerable });
  return e;
}, _o = (e, t, i) => (i = e == null ? {} : uo(fo(e)), go(xs(i, "default", { value: e, enumerable: !0 }), e)), hr = 1e3, yi = 1001, Va = 1002, Tt = 1003, vo = 1004, xo = 1005, Mi = 1006, yo = 1007, en = 1008, dr = 1009, So = 1010, Mo = 1011, Eo = 1012, bo = 1013, tn = 1014, ta = 1015, ia = 1016, To = 1017, wo = 1018, Ao = 1020, Ro = 35902, Co = 35899, Po = 1021, Do = 1022, Ei = 1023, ys = 1026, Ss = 1027, Lo = 1028, Uo = 1029, Io = 1030, No = 1031, Oo = 1033, Fo = 33776, Bo = 33777, zo = 33778, ko = 33779, Ho = 35840, Vo = 35841, Go = 35842, Wo = 35843, Xo = 36196, jo = 37492, qo = 37496, Yo = 37808, Ko = 37809, Zo = 37810, Jo = 37811, $o = 37812, Qo = 37813, el = 37814, tl = 37815, il = 37816, rl = 37817, al = 37818, nl = 37819, sl = 37820, ol = 37821, ll = 36492, cl = 36494, ul = 36495, hl = 36283, dl = 36284, pl = 36285, fl = 36286, ml = 3200, gl = 3201, Nt = "srgb", pr = "srgb-linear", Jr = "linear", $r = "srgb", la = 7680, _l = 35044, Yi = 2e3, Zi = class {
  addEventListener(e, t) {
    this._listeners === void 0 && (this._listeners = {});
    let i = this._listeners;
    i[e] === void 0 && (i[e] = []), i[e].indexOf(t) === -1 && i[e].push(t);
  }
  hasEventListener(e, t) {
    let i = this._listeners;
    return i !== void 0 && i[e] !== void 0 && i[e].indexOf(t) !== -1;
  }
  removeEventListener(e, t) {
    let i = this._listeners;
    if (i === void 0) return;
    let r = i[e];
    if (r !== void 0) {
      let a = r.indexOf(t);
      a !== -1 && r.splice(a, 1);
    }
  }
  dispatchEvent(e) {
    let t = this._listeners;
    if (t === void 0) return;
    let i = t[e.type];
    if (i !== void 0) {
      e.target = this;
      let r = i.slice(0);
      for (let a = 0, n = r.length; a < n; a++) r[a].call(this, e);
      e.target = null;
    }
  }
}, gt = "00.01.02.03.04.05.06.07.08.09.0a.0b.0c.0d.0e.0f.10.11.12.13.14.15.16.17.18.19.1a.1b.1c.1d.1e.1f.20.21.22.23.24.25.26.27.28.29.2a.2b.2c.2d.2e.2f.30.31.32.33.34.35.36.37.38.39.3a.3b.3c.3d.3e.3f.40.41.42.43.44.45.46.47.48.49.4a.4b.4c.4d.4e.4f.50.51.52.53.54.55.56.57.58.59.5a.5b.5c.5d.5e.5f.60.61.62.63.64.65.66.67.68.69.6a.6b.6c.6d.6e.6f.70.71.72.73.74.75.76.77.78.79.7a.7b.7c.7d.7e.7f.80.81.82.83.84.85.86.87.88.89.8a.8b.8c.8d.8e.8f.90.91.92.93.94.95.96.97.98.99.9a.9b.9c.9d.9e.9f.a0.a1.a2.a3.a4.a5.a6.a7.a8.a9.aa.ab.ac.ad.ae.af.b0.b1.b2.b3.b4.b5.b6.b7.b8.b9.ba.bb.bc.bd.be.bf.c0.c1.c2.c3.c4.c5.c6.c7.c8.c9.ca.cb.cc.cd.ce.cf.d0.d1.d2.d3.d4.d5.d6.d7.d8.d9.da.db.dc.dd.de.df.e0.e1.e2.e3.e4.e5.e6.e7.e8.e9.ea.eb.ec.ed.ee.ef.f0.f1.f2.f3.f4.f5.f6.f7.f8.f9.fa.fb.fc.fd.fe.ff".split("."), ca = Math.PI / 180, Ga = 180 / Math.PI;
function gr() {
  let e = Math.random() * 4294967295 | 0, t = Math.random() * 4294967295 | 0, i = Math.random() * 4294967295 | 0, r = Math.random() * 4294967295 | 0;
  return (gt[e & 255] + gt[e >> 8 & 255] + gt[e >> 16 & 255] + gt[e >> 24 & 255] + "-" + gt[t & 255] + gt[t >> 8 & 255] + "-" + gt[t >> 16 & 15 | 64] + gt[t >> 24 & 255] + "-" + gt[i & 63 | 128] + gt[i >> 8 & 255] + "-" + gt[i >> 16 & 255] + gt[i >> 24 & 255] + gt[r & 255] + gt[r >> 8 & 255] + gt[r >> 16 & 255] + gt[r >> 24 & 255]).toLowerCase();
}
function Be(e, t, i) {
  return Math.max(t, Math.min(i, e));
}
function vl(e, t) {
  return (e % t + t) % t;
}
function ua(e, t, i) {
  return (1 - i) * e + i * t;
}
function Qi(e, t) {
  switch (t.constructor) {
    case Float32Array:
      return e;
    case Uint32Array:
      return e / 4294967295;
    case Uint16Array:
      return e / 65535;
    case Uint8Array:
      return e / 255;
    case Int32Array:
      return Math.max(e / 2147483647, -1);
    case Int16Array:
      return Math.max(e / 32767, -1);
    case Int8Array:
      return Math.max(e / 127, -1);
    default:
      throw Error("Invalid component type.");
  }
}
function yt(e, t) {
  switch (t.constructor) {
    case Float32Array:
      return e;
    case Uint32Array:
      return Math.round(e * 4294967295);
    case Uint16Array:
      return Math.round(e * 65535);
    case Uint8Array:
      return Math.round(e * 255);
    case Int32Array:
      return Math.round(e * 2147483647);
    case Int16Array:
      return Math.round(e * 32767);
    case Int8Array:
      return Math.round(e * 127);
    default:
      throw Error("Invalid component type.");
  }
}
var ke = class Ms {
  constructor(t = 0, i = 0) {
    Ms.prototype.isVector2 = !0, this.x = t, this.y = i;
  }
  get width() {
    return this.x;
  }
  set width(t) {
    this.x = t;
  }
  get height() {
    return this.y;
  }
  set height(t) {
    this.y = t;
  }
  set(t, i) {
    return this.x = t, this.y = i, this;
  }
  setScalar(t) {
    return this.x = t, this.y = t, this;
  }
  setX(t) {
    return this.x = t, this;
  }
  setY(t) {
    return this.y = t, this;
  }
  setComponent(t, i) {
    switch (t) {
      case 0:
        this.x = i;
        break;
      case 1:
        this.y = i;
        break;
      default:
        throw Error("index is out of range: " + t);
    }
    return this;
  }
  getComponent(t) {
    switch (t) {
      case 0:
        return this.x;
      case 1:
        return this.y;
      default:
        throw Error("index is out of range: " + t);
    }
  }
  clone() {
    return new this.constructor(this.x, this.y);
  }
  copy(t) {
    return this.x = t.x, this.y = t.y, this;
  }
  add(t) {
    return this.x += t.x, this.y += t.y, this;
  }
  addScalar(t) {
    return this.x += t, this.y += t, this;
  }
  addVectors(t, i) {
    return this.x = t.x + i.x, this.y = t.y + i.y, this;
  }
  addScaledVector(t, i) {
    return this.x += t.x * i, this.y += t.y * i, this;
  }
  sub(t) {
    return this.x -= t.x, this.y -= t.y, this;
  }
  subScalar(t) {
    return this.x -= t, this.y -= t, this;
  }
  subVectors(t, i) {
    return this.x = t.x - i.x, this.y = t.y - i.y, this;
  }
  multiply(t) {
    return this.x *= t.x, this.y *= t.y, this;
  }
  multiplyScalar(t) {
    return this.x *= t, this.y *= t, this;
  }
  divide(t) {
    return this.x /= t.x, this.y /= t.y, this;
  }
  divideScalar(t) {
    return this.multiplyScalar(1 / t);
  }
  applyMatrix3(t) {
    let i = this.x, r = this.y, a = t.elements;
    return this.x = a[0] * i + a[3] * r + a[6], this.y = a[1] * i + a[4] * r + a[7], this;
  }
  min(t) {
    return this.x = Math.min(this.x, t.x), this.y = Math.min(this.y, t.y), this;
  }
  max(t) {
    return this.x = Math.max(this.x, t.x), this.y = Math.max(this.y, t.y), this;
  }
  clamp(t, i) {
    return this.x = Be(this.x, t.x, i.x), this.y = Be(this.y, t.y, i.y), this;
  }
  clampScalar(t, i) {
    return this.x = Be(this.x, t, i), this.y = Be(this.y, t, i), this;
  }
  clampLength(t, i) {
    let r = this.length();
    return this.divideScalar(r || 1).multiplyScalar(Be(r, t, i));
  }
  floor() {
    return this.x = Math.floor(this.x), this.y = Math.floor(this.y), this;
  }
  ceil() {
    return this.x = Math.ceil(this.x), this.y = Math.ceil(this.y), this;
  }
  round() {
    return this.x = Math.round(this.x), this.y = Math.round(this.y), this;
  }
  roundToZero() {
    return this.x = Math.trunc(this.x), this.y = Math.trunc(this.y), this;
  }
  negate() {
    return this.x = -this.x, this.y = -this.y, this;
  }
  dot(t) {
    return this.x * t.x + this.y * t.y;
  }
  cross(t) {
    return this.x * t.y - this.y * t.x;
  }
  lengthSq() {
    return this.x * this.x + this.y * this.y;
  }
  length() {
    return Math.sqrt(this.x * this.x + this.y * this.y);
  }
  manhattanLength() {
    return Math.abs(this.x) + Math.abs(this.y);
  }
  normalize() {
    return this.divideScalar(this.length() || 1);
  }
  angle() {
    return Math.atan2(-this.y, -this.x) + Math.PI;
  }
  angleTo(t) {
    let i = Math.sqrt(this.lengthSq() * t.lengthSq());
    if (i === 0) return Math.PI / 2;
    let r = this.dot(t) / i;
    return Math.acos(Be(r, -1, 1));
  }
  distanceTo(t) {
    return Math.sqrt(this.distanceToSquared(t));
  }
  distanceToSquared(t) {
    let i = this.x - t.x, r = this.y - t.y;
    return i * i + r * r;
  }
  manhattanDistanceTo(t) {
    return Math.abs(this.x - t.x) + Math.abs(this.y - t.y);
  }
  setLength(t) {
    return this.normalize().multiplyScalar(t);
  }
  lerp(t, i) {
    return this.x += (t.x - this.x) * i, this.y += (t.y - this.y) * i, this;
  }
  lerpVectors(t, i, r) {
    return this.x = t.x + (i.x - t.x) * r, this.y = t.y + (i.y - t.y) * r, this;
  }
  equals(t) {
    return t.x === this.x && t.y === this.y;
  }
  fromArray(t, i = 0) {
    return this.x = t[i], this.y = t[i + 1], this;
  }
  toArray(t = [], i = 0) {
    return t[i] = this.x, t[i + 1] = this.y, t;
  }
  fromBufferAttribute(t, i) {
    return this.x = t.getX(i), this.y = t.getY(i), this;
  }
  rotateAround(t, i) {
    let r = Math.cos(i), a = Math.sin(i), n = this.x - t.x, s = this.y - t.y;
    return this.x = n * r - s * a + t.x, this.y = n * a + s * r + t.y, this;
  }
  random() {
    return this.x = Math.random(), this.y = Math.random(), this;
  }
  *[Symbol.iterator]() {
    yield this.x, yield this.y;
  }
}, _r = class {
  constructor(e = 0, t = 0, i = 0, r = 1) {
    this.isQuaternion = !0, this._x = e, this._y = t, this._z = i, this._w = r;
  }
  static slerpFlat(e, t, i, r, a, n, s) {
    let o = i[r + 0], l = i[r + 1], c = i[r + 2], u = i[r + 3], h = a[n + 0], d = a[n + 1], m = a[n + 2], x = a[n + 3];
    if (s === 0) {
      e[t + 0] = o, e[t + 1] = l, e[t + 2] = c, e[t + 3] = u;
      return;
    }
    if (s === 1) {
      e[t + 0] = h, e[t + 1] = d, e[t + 2] = m, e[t + 3] = x;
      return;
    }
    if (u !== x || o !== h || l !== d || c !== m) {
      let _ = 1 - s, f = o * h + l * d + c * m + u * x, p = f >= 0 ? 1 : -1, R = 1 - f * f;
      if (R > 2 ** -52) {
        let A = Math.sqrt(R), I = Math.atan2(A, f * p);
        _ = Math.sin(_ * I) / A, s = Math.sin(s * I) / A;
      }
      let y = s * p;
      if (o = o * _ + h * y, l = l * _ + d * y, c = c * _ + m * y, u = u * _ + x * y, _ === 1 - s) {
        let A = 1 / Math.sqrt(o * o + l * l + c * c + u * u);
        o *= A, l *= A, c *= A, u *= A;
      }
    }
    e[t] = o, e[t + 1] = l, e[t + 2] = c, e[t + 3] = u;
  }
  static multiplyQuaternionsFlat(e, t, i, r, a, n) {
    let s = i[r], o = i[r + 1], l = i[r + 2], c = i[r + 3], u = a[n], h = a[n + 1], d = a[n + 2], m = a[n + 3];
    return e[t] = s * m + c * u + o * d - l * h, e[t + 1] = o * m + c * h + l * u - s * d, e[t + 2] = l * m + c * d + s * h - o * u, e[t + 3] = c * m - s * u - o * h - l * d, e;
  }
  get x() {
    return this._x;
  }
  set x(e) {
    this._x = e, this._onChangeCallback();
  }
  get y() {
    return this._y;
  }
  set y(e) {
    this._y = e, this._onChangeCallback();
  }
  get z() {
    return this._z;
  }
  set z(e) {
    this._z = e, this._onChangeCallback();
  }
  get w() {
    return this._w;
  }
  set w(e) {
    this._w = e, this._onChangeCallback();
  }
  set(e, t, i, r) {
    return this._x = e, this._y = t, this._z = i, this._w = r, this._onChangeCallback(), this;
  }
  clone() {
    return new this.constructor(this._x, this._y, this._z, this._w);
  }
  copy(e) {
    return this._x = e.x, this._y = e.y, this._z = e.z, this._w = e.w, this._onChangeCallback(), this;
  }
  setFromEuler(e, t = !0) {
    let i = e._x, r = e._y, a = e._z, n = e._order, s = Math.cos, o = Math.sin, l = s(i / 2), c = s(r / 2), u = s(a / 2), h = o(i / 2), d = o(r / 2), m = o(a / 2);
    switch (n) {
      case "XYZ":
        this._x = h * c * u + l * d * m, this._y = l * d * u - h * c * m, this._z = l * c * m + h * d * u, this._w = l * c * u - h * d * m;
        break;
      case "YXZ":
        this._x = h * c * u + l * d * m, this._y = l * d * u - h * c * m, this._z = l * c * m - h * d * u, this._w = l * c * u + h * d * m;
        break;
      case "ZXY":
        this._x = h * c * u - l * d * m, this._y = l * d * u + h * c * m, this._z = l * c * m + h * d * u, this._w = l * c * u - h * d * m;
        break;
      case "ZYX":
        this._x = h * c * u - l * d * m, this._y = l * d * u + h * c * m, this._z = l * c * m - h * d * u, this._w = l * c * u + h * d * m;
        break;
      case "YZX":
        this._x = h * c * u + l * d * m, this._y = l * d * u + h * c * m, this._z = l * c * m - h * d * u, this._w = l * c * u - h * d * m;
        break;
      case "XZY":
        this._x = h * c * u - l * d * m, this._y = l * d * u - h * c * m, this._z = l * c * m + h * d * u, this._w = l * c * u + h * d * m;
        break;
      default:
        console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: " + n);
    }
    return t === !0 && this._onChangeCallback(), this;
  }
  setFromAxisAngle(e, t) {
    let i = t / 2, r = Math.sin(i);
    return this._x = e.x * r, this._y = e.y * r, this._z = e.z * r, this._w = Math.cos(i), this._onChangeCallback(), this;
  }
  setFromRotationMatrix(e) {
    let t = e.elements, i = t[0], r = t[4], a = t[8], n = t[1], s = t[5], o = t[9], l = t[2], c = t[6], u = t[10], h = i + s + u;
    if (h > 0) {
      let d = 0.5 / Math.sqrt(h + 1);
      this._w = 0.25 / d, this._x = (c - o) * d, this._y = (a - l) * d, this._z = (n - r) * d;
    } else if (i > s && i > u) {
      let d = 2 * Math.sqrt(1 + i - s - u);
      this._w = (c - o) / d, this._x = 0.25 * d, this._y = (r + n) / d, this._z = (a + l) / d;
    } else if (s > u) {
      let d = 2 * Math.sqrt(1 + s - i - u);
      this._w = (a - l) / d, this._x = (r + n) / d, this._y = 0.25 * d, this._z = (o + c) / d;
    } else {
      let d = 2 * Math.sqrt(1 + u - i - s);
      this._w = (n - r) / d, this._x = (a + l) / d, this._y = (o + c) / d, this._z = 0.25 * d;
    }
    return this._onChangeCallback(), this;
  }
  setFromUnitVectors(e, t) {
    let i = e.dot(t) + 1;
    return i < 1e-8 ? (i = 0, Math.abs(e.x) > Math.abs(e.z) ? (this._x = -e.y, this._y = e.x, this._z = 0, this._w = i) : (this._x = 0, this._y = -e.z, this._z = e.y, this._w = i)) : (this._x = e.y * t.z - e.z * t.y, this._y = e.z * t.x - e.x * t.z, this._z = e.x * t.y - e.y * t.x, this._w = i), this.normalize();
  }
  angleTo(e) {
    return 2 * Math.acos(Math.abs(Be(this.dot(e), -1, 1)));
  }
  rotateTowards(e, t) {
    let i = this.angleTo(e);
    if (i === 0) return this;
    let r = Math.min(1, t / i);
    return this.slerp(e, r), this;
  }
  identity() {
    return this.set(0, 0, 0, 1);
  }
  invert() {
    return this.conjugate();
  }
  conjugate() {
    return this._x *= -1, this._y *= -1, this._z *= -1, this._onChangeCallback(), this;
  }
  dot(e) {
    return this._x * e._x + this._y * e._y + this._z * e._z + this._w * e._w;
  }
  lengthSq() {
    return this._x * this._x + this._y * this._y + this._z * this._z + this._w * this._w;
  }
  length() {
    return Math.sqrt(this._x * this._x + this._y * this._y + this._z * this._z + this._w * this._w);
  }
  normalize() {
    let e = this.length();
    return e === 0 ? (this._x = 0, this._y = 0, this._z = 0, this._w = 1) : (e = 1 / e, this._x *= e, this._y *= e, this._z *= e, this._w *= e), this._onChangeCallback(), this;
  }
  multiply(e) {
    return this.multiplyQuaternions(this, e);
  }
  premultiply(e) {
    return this.multiplyQuaternions(e, this);
  }
  multiplyQuaternions(e, t) {
    let i = e._x, r = e._y, a = e._z, n = e._w, s = t._x, o = t._y, l = t._z, c = t._w;
    return this._x = i * c + n * s + r * l - a * o, this._y = r * c + n * o + a * s - i * l, this._z = a * c + n * l + i * o - r * s, this._w = n * c - i * s - r * o - a * l, this._onChangeCallback(), this;
  }
  slerp(e, t) {
    if (t === 0) return this;
    if (t === 1) return this.copy(e);
    let i = this._x, r = this._y, a = this._z, n = this._w, s = n * e._w + i * e._x + r * e._y + a * e._z;
    if (s < 0 ? (this._w = -e._w, this._x = -e._x, this._y = -e._y, this._z = -e._z, s = -s) : this.copy(e), s >= 1) return this._w = n, this._x = i, this._y = r, this._z = a, this;
    let o = 1 - s * s;
    if (o <= 2 ** -52) {
      let d = 1 - t;
      return this._w = d * n + t * this._w, this._x = d * i + t * this._x, this._y = d * r + t * this._y, this._z = d * a + t * this._z, this.normalize(), this;
    }
    let l = Math.sqrt(o), c = Math.atan2(l, s), u = Math.sin((1 - t) * c) / l, h = Math.sin(t * c) / l;
    return this._w = n * u + this._w * h, this._x = i * u + this._x * h, this._y = r * u + this._y * h, this._z = a * u + this._z * h, this._onChangeCallback(), this;
  }
  slerpQuaternions(e, t, i) {
    return this.copy(e).slerp(t, i);
  }
  random() {
    let e = 2 * Math.PI * Math.random(), t = 2 * Math.PI * Math.random(), i = Math.random(), r = Math.sqrt(1 - i), a = Math.sqrt(i);
    return this.set(r * Math.sin(e), r * Math.cos(e), a * Math.sin(t), a * Math.cos(t));
  }
  equals(e) {
    return e._x === this._x && e._y === this._y && e._z === this._z && e._w === this._w;
  }
  fromArray(e, t = 0) {
    return this._x = e[t], this._y = e[t + 1], this._z = e[t + 2], this._w = e[t + 3], this._onChangeCallback(), this;
  }
  toArray(e = [], t = 0) {
    return e[t] = this._x, e[t + 1] = this._y, e[t + 2] = this._z, e[t + 3] = this._w, e;
  }
  fromBufferAttribute(e, t) {
    return this._x = e.getX(t), this._y = e.getY(t), this._z = e.getZ(t), this._w = e.getW(t), this._onChangeCallback(), this;
  }
  toJSON() {
    return this.toArray();
  }
  _onChange(e) {
    return this._onChangeCallback = e, this;
  }
  _onChangeCallback() {
  }
  *[Symbol.iterator]() {
    yield this._x, yield this._y, yield this._z, yield this._w;
  }
}, F = class Es {
  constructor(t = 0, i = 0, r = 0) {
    Es.prototype.isVector3 = !0, this.x = t, this.y = i, this.z = r;
  }
  set(t, i, r) {
    return r === void 0 && (r = this.z), this.x = t, this.y = i, this.z = r, this;
  }
  setScalar(t) {
    return this.x = t, this.y = t, this.z = t, this;
  }
  setX(t) {
    return this.x = t, this;
  }
  setY(t) {
    return this.y = t, this;
  }
  setZ(t) {
    return this.z = t, this;
  }
  setComponent(t, i) {
    switch (t) {
      case 0:
        this.x = i;
        break;
      case 1:
        this.y = i;
        break;
      case 2:
        this.z = i;
        break;
      default:
        throw Error("index is out of range: " + t);
    }
    return this;
  }
  getComponent(t) {
    switch (t) {
      case 0:
        return this.x;
      case 1:
        return this.y;
      case 2:
        return this.z;
      default:
        throw Error("index is out of range: " + t);
    }
  }
  clone() {
    return new this.constructor(this.x, this.y, this.z);
  }
  copy(t) {
    return this.x = t.x, this.y = t.y, this.z = t.z, this;
  }
  add(t) {
    return this.x += t.x, this.y += t.y, this.z += t.z, this;
  }
  addScalar(t) {
    return this.x += t, this.y += t, this.z += t, this;
  }
  addVectors(t, i) {
    return this.x = t.x + i.x, this.y = t.y + i.y, this.z = t.z + i.z, this;
  }
  addScaledVector(t, i) {
    return this.x += t.x * i, this.y += t.y * i, this.z += t.z * i, this;
  }
  sub(t) {
    return this.x -= t.x, this.y -= t.y, this.z -= t.z, this;
  }
  subScalar(t) {
    return this.x -= t, this.y -= t, this.z -= t, this;
  }
  subVectors(t, i) {
    return this.x = t.x - i.x, this.y = t.y - i.y, this.z = t.z - i.z, this;
  }
  multiply(t) {
    return this.x *= t.x, this.y *= t.y, this.z *= t.z, this;
  }
  multiplyScalar(t) {
    return this.x *= t, this.y *= t, this.z *= t, this;
  }
  multiplyVectors(t, i) {
    return this.x = t.x * i.x, this.y = t.y * i.y, this.z = t.z * i.z, this;
  }
  applyEuler(t) {
    return this.applyQuaternion(mn.setFromEuler(t));
  }
  applyAxisAngle(t, i) {
    return this.applyQuaternion(mn.setFromAxisAngle(t, i));
  }
  applyMatrix3(t) {
    let i = this.x, r = this.y, a = this.z, n = t.elements;
    return this.x = n[0] * i + n[3] * r + n[6] * a, this.y = n[1] * i + n[4] * r + n[7] * a, this.z = n[2] * i + n[5] * r + n[8] * a, this;
  }
  applyNormalMatrix(t) {
    return this.applyMatrix3(t).normalize();
  }
  applyMatrix4(t) {
    let i = this.x, r = this.y, a = this.z, n = t.elements, s = 1 / (n[3] * i + n[7] * r + n[11] * a + n[15]);
    return this.x = (n[0] * i + n[4] * r + n[8] * a + n[12]) * s, this.y = (n[1] * i + n[5] * r + n[9] * a + n[13]) * s, this.z = (n[2] * i + n[6] * r + n[10] * a + n[14]) * s, this;
  }
  applyQuaternion(t) {
    let i = this.x, r = this.y, a = this.z, n = t.x, s = t.y, o = t.z, l = t.w, c = 2 * (s * a - o * r), u = 2 * (o * i - n * a), h = 2 * (n * r - s * i);
    return this.x = i + l * c + s * h - o * u, this.y = r + l * u + o * c - n * h, this.z = a + l * h + n * u - s * c, this;
  }
  project(t) {
    return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix);
  }
  unproject(t) {
    return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld);
  }
  transformDirection(t) {
    let i = this.x, r = this.y, a = this.z, n = t.elements;
    return this.x = n[0] * i + n[4] * r + n[8] * a, this.y = n[1] * i + n[5] * r + n[9] * a, this.z = n[2] * i + n[6] * r + n[10] * a, this.normalize();
  }
  divide(t) {
    return this.x /= t.x, this.y /= t.y, this.z /= t.z, this;
  }
  divideScalar(t) {
    return this.multiplyScalar(1 / t);
  }
  min(t) {
    return this.x = Math.min(this.x, t.x), this.y = Math.min(this.y, t.y), this.z = Math.min(this.z, t.z), this;
  }
  max(t) {
    return this.x = Math.max(this.x, t.x), this.y = Math.max(this.y, t.y), this.z = Math.max(this.z, t.z), this;
  }
  clamp(t, i) {
    return this.x = Be(this.x, t.x, i.x), this.y = Be(this.y, t.y, i.y), this.z = Be(this.z, t.z, i.z), this;
  }
  clampScalar(t, i) {
    return this.x = Be(this.x, t, i), this.y = Be(this.y, t, i), this.z = Be(this.z, t, i), this;
  }
  clampLength(t, i) {
    let r = this.length();
    return this.divideScalar(r || 1).multiplyScalar(Be(r, t, i));
  }
  floor() {
    return this.x = Math.floor(this.x), this.y = Math.floor(this.y), this.z = Math.floor(this.z), this;
  }
  ceil() {
    return this.x = Math.ceil(this.x), this.y = Math.ceil(this.y), this.z = Math.ceil(this.z), this;
  }
  round() {
    return this.x = Math.round(this.x), this.y = Math.round(this.y), this.z = Math.round(this.z), this;
  }
  roundToZero() {
    return this.x = Math.trunc(this.x), this.y = Math.trunc(this.y), this.z = Math.trunc(this.z), this;
  }
  negate() {
    return this.x = -this.x, this.y = -this.y, this.z = -this.z, this;
  }
  dot(t) {
    return this.x * t.x + this.y * t.y + this.z * t.z;
  }
  lengthSq() {
    return this.x * this.x + this.y * this.y + this.z * this.z;
  }
  length() {
    return Math.sqrt(this.x * this.x + this.y * this.y + this.z * this.z);
  }
  manhattanLength() {
    return Math.abs(this.x) + Math.abs(this.y) + Math.abs(this.z);
  }
  normalize() {
    return this.divideScalar(this.length() || 1);
  }
  setLength(t) {
    return this.normalize().multiplyScalar(t);
  }
  lerp(t, i) {
    return this.x += (t.x - this.x) * i, this.y += (t.y - this.y) * i, this.z += (t.z - this.z) * i, this;
  }
  lerpVectors(t, i, r) {
    return this.x = t.x + (i.x - t.x) * r, this.y = t.y + (i.y - t.y) * r, this.z = t.z + (i.z - t.z) * r, this;
  }
  cross(t) {
    return this.crossVectors(this, t);
  }
  crossVectors(t, i) {
    let r = t.x, a = t.y, n = t.z, s = i.x, o = i.y, l = i.z;
    return this.x = a * l - n * o, this.y = n * s - r * l, this.z = r * o - a * s, this;
  }
  projectOnVector(t) {
    let i = t.lengthSq();
    if (i === 0) return this.set(0, 0, 0);
    let r = t.dot(this) / i;
    return this.copy(t).multiplyScalar(r);
  }
  projectOnPlane(t) {
    return ha.copy(this).projectOnVector(t), this.sub(ha);
  }
  reflect(t) {
    return this.sub(ha.copy(t).multiplyScalar(2 * this.dot(t)));
  }
  angleTo(t) {
    let i = Math.sqrt(this.lengthSq() * t.lengthSq());
    if (i === 0) return Math.PI / 2;
    let r = this.dot(t) / i;
    return Math.acos(Be(r, -1, 1));
  }
  distanceTo(t) {
    return Math.sqrt(this.distanceToSquared(t));
  }
  distanceToSquared(t) {
    let i = this.x - t.x, r = this.y - t.y, a = this.z - t.z;
    return i * i + r * r + a * a;
  }
  manhattanDistanceTo(t) {
    return Math.abs(this.x - t.x) + Math.abs(this.y - t.y) + Math.abs(this.z - t.z);
  }
  setFromSpherical(t) {
    return this.setFromSphericalCoords(t.radius, t.phi, t.theta);
  }
  setFromSphericalCoords(t, i, r) {
    let a = Math.sin(i) * t;
    return this.x = a * Math.sin(r), this.y = Math.cos(i) * t, this.z = a * Math.cos(r), this;
  }
  setFromCylindrical(t) {
    return this.setFromCylindricalCoords(t.radius, t.theta, t.y);
  }
  setFromCylindricalCoords(t, i, r) {
    return this.x = t * Math.sin(i), this.y = r, this.z = t * Math.cos(i), this;
  }
  setFromMatrixPosition(t) {
    let i = t.elements;
    return this.x = i[12], this.y = i[13], this.z = i[14], this;
  }
  setFromMatrixScale(t) {
    let i = this.setFromMatrixColumn(t, 0).length(), r = this.setFromMatrixColumn(t, 1).length(), a = this.setFromMatrixColumn(t, 2).length();
    return this.x = i, this.y = r, this.z = a, this;
  }
  setFromMatrixColumn(t, i) {
    return this.fromArray(t.elements, i * 4);
  }
  setFromMatrix3Column(t, i) {
    return this.fromArray(t.elements, i * 3);
  }
  setFromEuler(t) {
    return this.x = t._x, this.y = t._y, this.z = t._z, this;
  }
  setFromColor(t) {
    return this.x = t.r, this.y = t.g, this.z = t.b, this;
  }
  equals(t) {
    return t.x === this.x && t.y === this.y && t.z === this.z;
  }
  fromArray(t, i = 0) {
    return this.x = t[i], this.y = t[i + 1], this.z = t[i + 2], this;
  }
  toArray(t = [], i = 0) {
    return t[i] = this.x, t[i + 1] = this.y, t[i + 2] = this.z, t;
  }
  fromBufferAttribute(t, i) {
    return this.x = t.getX(i), this.y = t.getY(i), this.z = t.getZ(i), this;
  }
  random() {
    return this.x = Math.random(), this.y = Math.random(), this.z = Math.random(), this;
  }
  randomDirection() {
    let t = Math.random() * Math.PI * 2, i = Math.random() * 2 - 1, r = Math.sqrt(1 - i * i);
    return this.x = r * Math.cos(t), this.y = i, this.z = r * Math.sin(t), this;
  }
  *[Symbol.iterator]() {
    yield this.x, yield this.y, yield this.z;
  }
}, ha = new F(), mn = new _r(), Ne = class bs {
  constructor(t, i, r, a, n, s, o, l, c) {
    bs.prototype.isMatrix3 = !0, this.elements = [1, 0, 0, 0, 1, 0, 0, 0, 1], t !== void 0 && this.set(t, i, r, a, n, s, o, l, c);
  }
  set(t, i, r, a, n, s, o, l, c) {
    let u = this.elements;
    return u[0] = t, u[1] = a, u[2] = o, u[3] = i, u[4] = n, u[5] = l, u[6] = r, u[7] = s, u[8] = c, this;
  }
  identity() {
    return this.set(1, 0, 0, 0, 1, 0, 0, 0, 1), this;
  }
  copy(t) {
    let i = this.elements, r = t.elements;
    return i[0] = r[0], i[1] = r[1], i[2] = r[2], i[3] = r[3], i[4] = r[4], i[5] = r[5], i[6] = r[6], i[7] = r[7], i[8] = r[8], this;
  }
  extractBasis(t, i, r) {
    return t.setFromMatrix3Column(this, 0), i.setFromMatrix3Column(this, 1), r.setFromMatrix3Column(this, 2), this;
  }
  setFromMatrix4(t) {
    let i = t.elements;
    return this.set(i[0], i[4], i[8], i[1], i[5], i[9], i[2], i[6], i[10]), this;
  }
  multiply(t) {
    return this.multiplyMatrices(this, t);
  }
  premultiply(t) {
    return this.multiplyMatrices(t, this);
  }
  multiplyMatrices(t, i) {
    let r = t.elements, a = i.elements, n = this.elements, s = r[0], o = r[3], l = r[6], c = r[1], u = r[4], h = r[7], d = r[2], m = r[5], x = r[8], _ = a[0], f = a[3], p = a[6], R = a[1], y = a[4], A = a[7], I = a[2], L = a[5], D = a[8];
    return n[0] = s * _ + o * R + l * I, n[3] = s * f + o * y + l * L, n[6] = s * p + o * A + l * D, n[1] = c * _ + u * R + h * I, n[4] = c * f + u * y + h * L, n[7] = c * p + u * A + h * D, n[2] = d * _ + m * R + x * I, n[5] = d * f + m * y + x * L, n[8] = d * p + m * A + x * D, this;
  }
  multiplyScalar(t) {
    let i = this.elements;
    return i[0] *= t, i[3] *= t, i[6] *= t, i[1] *= t, i[4] *= t, i[7] *= t, i[2] *= t, i[5] *= t, i[8] *= t, this;
  }
  determinant() {
    let t = this.elements, i = t[0], r = t[1], a = t[2], n = t[3], s = t[4], o = t[5], l = t[6], c = t[7], u = t[8];
    return i * s * u - i * o * c - r * n * u + r * o * l + a * n * c - a * s * l;
  }
  invert() {
    let t = this.elements, i = t[0], r = t[1], a = t[2], n = t[3], s = t[4], o = t[5], l = t[6], c = t[7], u = t[8], h = u * s - o * c, d = o * l - u * n, m = c * n - s * l, x = i * h + r * d + a * m;
    if (x === 0) return this.set(0, 0, 0, 0, 0, 0, 0, 0, 0);
    let _ = 1 / x;
    return t[0] = h * _, t[1] = (a * c - u * r) * _, t[2] = (o * r - a * s) * _, t[3] = d * _, t[4] = (u * i - a * l) * _, t[5] = (a * n - o * i) * _, t[6] = m * _, t[7] = (r * l - c * i) * _, t[8] = (s * i - r * n) * _, this;
  }
  transpose() {
    let t, i = this.elements;
    return t = i[1], i[1] = i[3], i[3] = t, t = i[2], i[2] = i[6], i[6] = t, t = i[5], i[5] = i[7], i[7] = t, this;
  }
  getNormalMatrix(t) {
    return this.setFromMatrix4(t).invert().transpose();
  }
  transposeIntoArray(t) {
    let i = this.elements;
    return t[0] = i[0], t[1] = i[3], t[2] = i[6], t[3] = i[1], t[4] = i[4], t[5] = i[7], t[6] = i[2], t[7] = i[5], t[8] = i[8], this;
  }
  setUvTransform(t, i, r, a, n, s, o) {
    let l = Math.cos(n), c = Math.sin(n);
    return this.set(r * l, r * c, -r * (l * s + c * o) + s + t, -a * c, a * l, -a * (-c * s + l * o) + o + i, 0, 0, 1), this;
  }
  scale(t, i) {
    return this.premultiply(da.makeScale(t, i)), this;
  }
  rotate(t) {
    return this.premultiply(da.makeRotation(-t)), this;
  }
  translate(t, i) {
    return this.premultiply(da.makeTranslation(t, i)), this;
  }
  makeTranslation(t, i) {
    return t.isVector2 ? this.set(1, 0, t.x, 0, 1, t.y, 0, 0, 1) : this.set(1, 0, t, 0, 1, i, 0, 0, 1), this;
  }
  makeRotation(t) {
    let i = Math.cos(t), r = Math.sin(t);
    return this.set(i, -r, 0, r, i, 0, 0, 0, 1), this;
  }
  makeScale(t, i) {
    return this.set(t, 0, 0, 0, i, 0, 0, 0, 1), this;
  }
  equals(t) {
    let i = this.elements, r = t.elements;
    for (let a = 0; a < 9; a++) if (i[a] !== r[a]) return !1;
    return !0;
  }
  fromArray(t, i = 0) {
    for (let r = 0; r < 9; r++) this.elements[r] = t[r + i];
    return this;
  }
  toArray(t = [], i = 0) {
    let r = this.elements;
    return t[i] = r[0], t[i + 1] = r[1], t[i + 2] = r[2], t[i + 3] = r[3], t[i + 4] = r[4], t[i + 5] = r[5], t[i + 6] = r[6], t[i + 7] = r[7], t[i + 8] = r[8], t;
  }
  clone() {
    return new this.constructor().fromArray(this.elements);
  }
}, da = new Ne();
function Ts(e) {
  for (let t = e.length - 1; t >= 0; --t) if (e[t] >= 65535) return !0;
  return !1;
}
function Qr(e) {
  return document.createElementNS("http://www.w3.org/1999/xhtml", e);
}
function xl() {
  let e = Qr("canvas");
  return e.style.display = "block", e;
}
var gn = {};
function fr(e) {
  e in gn || (gn[e] = !0, console.warn(e));
}
function yl(e, t, i) {
  return new Promise(function(r, a) {
    function n() {
      switch (e.clientWaitSync(t, e.SYNC_FLUSH_COMMANDS_BIT, 0)) {
        case e.WAIT_FAILED:
          a();
          break;
        case e.TIMEOUT_EXPIRED:
          setTimeout(n, i);
          break;
        default:
          r();
      }
    }
    setTimeout(n, i);
  });
}
var _n = new Ne().set(0.4123908, 0.3575843, 0.1804808, 0.212639, 0.7151687, 0.0721923, 0.0193308, 0.1191948, 0.9505322), vn = new Ne().set(3.2409699, -1.5373832, -0.4986108, -0.9692436, 1.8759675, 0.0415551, 0.0556301, -0.203977, 1.0569715);
function Sl() {
  let e = { enabled: !0, workingColorSpace: pr, spaces: {}, convert: function(a, n, s) {
    return this.enabled === !1 || n === s || !n || !s || (this.spaces[n].transfer === "srgb" && (a.r = Jt(a.r), a.g = Jt(a.g), a.b = Jt(a.b)), this.spaces[n].primaries !== this.spaces[s].primaries && (a.applyMatrix3(this.spaces[n].toXYZ), a.applyMatrix3(this.spaces[s].fromXYZ)), this.spaces[s].transfer === "srgb" && (a.r = qi(a.r), a.g = qi(a.g), a.b = qi(a.b))), a;
  }, workingToColorSpace: function(a, n) {
    return this.convert(a, this.workingColorSpace, n);
  }, colorSpaceToWorking: function(a, n) {
    return this.convert(a, n, this.workingColorSpace);
  }, getPrimaries: function(a) {
    return this.spaces[a].primaries;
  }, getTransfer: function(a) {
    return a === "" ? Jr : this.spaces[a].transfer;
  }, getToneMappingMode: function(a) {
    return this.spaces[a].outputColorSpaceConfig.toneMappingMode || "standard";
  }, getLuminanceCoefficients: function(a, n = this.workingColorSpace) {
    return a.fromArray(this.spaces[n].luminanceCoefficients);
  }, define: function(a) {
    Object.assign(this.spaces, a);
  }, _getMatrix: function(a, n, s) {
    return a.copy(this.spaces[n].toXYZ).multiply(this.spaces[s].fromXYZ);
  }, _getDrawingBufferColorSpace: function(a) {
    return this.spaces[a].outputColorSpaceConfig.drawingBufferColorSpace;
  }, _getUnpackColorSpace: function(a = this.workingColorSpace) {
    return this.spaces[a].workingColorSpaceConfig.unpackColorSpace;
  }, fromWorkingColorSpace: function(a, n) {
    return fr("THREE.ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."), e.workingToColorSpace(a, n);
  }, toWorkingColorSpace: function(a, n) {
    return fr("THREE.ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."), e.colorSpaceToWorking(a, n);
  } }, t = [0.64, 0.33, 0.3, 0.6, 0.15, 0.06], i = [0.2126, 0.7152, 0.0722], r = [0.3127, 0.329];
  return e.define({ [pr]: { primaries: t, whitePoint: r, transfer: Jr, toXYZ: _n, fromXYZ: vn, luminanceCoefficients: i, workingColorSpaceConfig: { unpackColorSpace: Nt }, outputColorSpaceConfig: { drawingBufferColorSpace: Nt } }, [Nt]: { primaries: t, whitePoint: r, transfer: $r, toXYZ: _n, fromXYZ: vn, luminanceCoefficients: i, outputColorSpaceConfig: { drawingBufferColorSpace: Nt } } }), e;
}
var We = Sl();
function Jt(e) {
  return e < 0.04045 ? e * 0.0773993808 : (e * 0.9478672986 + 0.0521327014) ** 2.4;
}
function qi(e) {
  return e < 31308e-7 ? e * 12.92 : 1.055 * e ** 0.41666 - 0.055;
}
var Ci, Ml = class {
  static getDataURL(e, t = "image/png") {
    if (/^data:/i.test(e.src) || typeof HTMLCanvasElement > "u") return e.src;
    let i;
    if (e instanceof HTMLCanvasElement) i = e;
    else {
      Ci === void 0 && (Ci = Qr("canvas")), Ci.width = e.width, Ci.height = e.height;
      let r = Ci.getContext("2d");
      e instanceof ImageData ? r.putImageData(e, 0, 0) : r.drawImage(e, 0, 0, e.width, e.height), i = Ci;
    }
    return i.toDataURL(t);
  }
  static sRGBToLinear(e) {
    if (typeof HTMLImageElement < "u" && e instanceof HTMLImageElement || typeof HTMLCanvasElement < "u" && e instanceof HTMLCanvasElement || typeof ImageBitmap < "u" && e instanceof ImageBitmap) {
      let t = Qr("canvas");
      t.width = e.width, t.height = e.height;
      let i = t.getContext("2d");
      i.drawImage(e, 0, 0, e.width, e.height);
      let r = i.getImageData(0, 0, e.width, e.height), a = r.data;
      for (let n = 0; n < a.length; n++) a[n] = Jt(a[n] / 255) * 255;
      return i.putImageData(r, 0, 0), t;
    } else if (e.data) {
      let t = e.data.slice(0);
      for (let i = 0; i < t.length; i++) t instanceof Uint8Array || t instanceof Uint8ClampedArray ? t[i] = Math.floor(Jt(t[i] / 255) * 255) : t[i] = Jt(t[i]);
      return { data: t, width: e.width, height: e.height };
    } else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."), e;
  }
}, El = 0, rn = class {
  constructor(e = null) {
    this.isSource = !0, Object.defineProperty(this, "id", { value: El++ }), this.uuid = gr(), this.data = e, this.dataReady = !0, this.version = 0;
  }
  getSize(e) {
    let t = this.data;
    return typeof HTMLVideoElement < "u" && t instanceof HTMLVideoElement ? e.set(t.videoWidth, t.videoHeight, 0) : t instanceof VideoFrame ? e.set(t.displayHeight, t.displayWidth, 0) : t === null ? e.set(0, 0, 0) : e.set(t.width, t.height, t.depth || 0), e;
  }
  set needsUpdate(e) {
    e === !0 && this.version++;
  }
  toJSON(e) {
    let t = e === void 0 || typeof e == "string";
    if (!t && e.images[this.uuid] !== void 0) return e.images[this.uuid];
    let i = { uuid: this.uuid, url: "" }, r = this.data;
    if (r !== null) {
      let a;
      if (Array.isArray(r)) {
        a = [];
        for (let n = 0, s = r.length; n < s; n++) r[n].isDataTexture ? a.push(pa(r[n].image)) : a.push(pa(r[n]));
      } else a = pa(r);
      i.url = a;
    }
    return t || (e.images[this.uuid] = i), i;
  }
};
function pa(e) {
  return typeof HTMLImageElement < "u" && e instanceof HTMLImageElement || typeof HTMLCanvasElement < "u" && e instanceof HTMLCanvasElement || typeof ImageBitmap < "u" && e instanceof ImageBitmap ? Ml.getDataURL(e) : e.data ? { data: Array.from(e.data), width: e.width, height: e.height, type: e.data.constructor.name } : (console.warn("THREE.Texture: Unable to serialize Texture."), {});
}
var bl = 0, fa = new F(), Ft = class Yr extends Zi {
  constructor(t = Yr.DEFAULT_IMAGE, i = Yr.DEFAULT_MAPPING, r = yi, a = yi, n = Mi, s = en, o = Ei, l = dr, c = Yr.DEFAULT_ANISOTROPY, u = "") {
    super(), this.isTexture = !0, Object.defineProperty(this, "id", { value: bl++ }), this.uuid = gr(), this.name = "", this.source = new rn(t), this.mipmaps = [], this.mapping = i, this.channel = 0, this.wrapS = r, this.wrapT = a, this.magFilter = n, this.minFilter = s, this.anisotropy = c, this.format = o, this.internalFormat = null, this.type = l, this.offset = new ke(0, 0), this.repeat = new ke(1, 1), this.center = new ke(0, 0), this.rotation = 0, this.matrixAutoUpdate = !0, this.matrix = new Ne(), this.generateMipmaps = !0, this.premultiplyAlpha = !1, this.flipY = !0, this.unpackAlignment = 4, this.colorSpace = u, this.userData = {}, this.updateRanges = [], this.version = 0, this.onUpdate = null, this.renderTarget = null, this.isRenderTargetTexture = !1, this.isArrayTexture = !!(t && t.depth && t.depth > 1), this.pmremVersion = 0;
  }
  get width() {
    return this.source.getSize(fa).x;
  }
  get height() {
    return this.source.getSize(fa).y;
  }
  get depth() {
    return this.source.getSize(fa).z;
  }
  get image() {
    return this.source.data;
  }
  set image(t = null) {
    this.source.data = t;
  }
  updateMatrix() {
    this.matrix.setUvTransform(this.offset.x, this.offset.y, this.repeat.x, this.repeat.y, this.rotation, this.center.x, this.center.y);
  }
  addUpdateRange(t, i) {
    this.updateRanges.push({ start: t, count: i });
  }
  clearUpdateRanges() {
    this.updateRanges.length = 0;
  }
  clone() {
    return new this.constructor().copy(this);
  }
  copy(t) {
    return this.name = t.name, this.source = t.source, this.mipmaps = t.mipmaps.slice(0), this.mapping = t.mapping, this.channel = t.channel, this.wrapS = t.wrapS, this.wrapT = t.wrapT, this.magFilter = t.magFilter, this.minFilter = t.minFilter, this.anisotropy = t.anisotropy, this.format = t.format, this.internalFormat = t.internalFormat, this.type = t.type, this.offset.copy(t.offset), this.repeat.copy(t.repeat), this.center.copy(t.center), this.rotation = t.rotation, this.matrixAutoUpdate = t.matrixAutoUpdate, this.matrix.copy(t.matrix), this.generateMipmaps = t.generateMipmaps, this.premultiplyAlpha = t.premultiplyAlpha, this.flipY = t.flipY, this.unpackAlignment = t.unpackAlignment, this.colorSpace = t.colorSpace, this.renderTarget = t.renderTarget, this.isRenderTargetTexture = t.isRenderTargetTexture, this.isArrayTexture = t.isArrayTexture, this.userData = JSON.parse(JSON.stringify(t.userData)), this.needsUpdate = !0, this;
  }
  setValues(t) {
    for (let i in t) {
      let r = t[i];
      if (r === void 0) {
        console.warn(`THREE.Texture.setValues(): parameter '${i}' has value of undefined.`);
        continue;
      }
      let a = this[i];
      if (a === void 0) {
        console.warn(`THREE.Texture.setValues(): property '${i}' does not exist.`);
        continue;
      }
      a && r && a.isVector2 && r.isVector2 || a && r && a.isVector3 && r.isVector3 || a && r && a.isMatrix3 && r.isMatrix3 ? a.copy(r) : this[i] = r;
    }
  }
  toJSON(t) {
    let i = t === void 0 || typeof t == "string";
    if (!i && t.textures[this.uuid] !== void 0) return t.textures[this.uuid];
    let r = { metadata: { version: 4.7, type: "Texture", generator: "Texture.toJSON" }, uuid: this.uuid, name: this.name, image: this.source.toJSON(t).uuid, mapping: this.mapping, channel: this.channel, repeat: [this.repeat.x, this.repeat.y], offset: [this.offset.x, this.offset.y], center: [this.center.x, this.center.y], rotation: this.rotation, wrap: [this.wrapS, this.wrapT], format: this.format, internalFormat: this.internalFormat, type: this.type, colorSpace: this.colorSpace, minFilter: this.minFilter, magFilter: this.magFilter, anisotropy: this.anisotropy, flipY: this.flipY, generateMipmaps: this.generateMipmaps, premultiplyAlpha: this.premultiplyAlpha, unpackAlignment: this.unpackAlignment };
    return Object.keys(this.userData).length > 0 && (r.userData = this.userData), i || (t.textures[this.uuid] = r), r;
  }
  dispose() {
    this.dispatchEvent({ type: "dispose" });
  }
  transformUv(t) {
    if (this.mapping !== 300) return t;
    if (t.applyMatrix3(this.matrix), t.x < 0 || t.x > 1) switch (this.wrapS) {
      case hr:
        t.x -= Math.floor(t.x);
        break;
      case yi:
        t.x = t.x < 0 ? 0 : 1;
        break;
      case Va:
        Math.abs(Math.floor(t.x) % 2) === 1 ? t.x = Math.ceil(t.x) - t.x : t.x -= Math.floor(t.x);
        break;
    }
    if (t.y < 0 || t.y > 1) switch (this.wrapT) {
      case hr:
        t.y -= Math.floor(t.y);
        break;
      case yi:
        t.y = t.y < 0 ? 0 : 1;
        break;
      case Va:
        Math.abs(Math.floor(t.y) % 2) === 1 ? t.y = Math.ceil(t.y) - t.y : t.y -= Math.floor(t.y);
        break;
    }
    return this.flipY && (t.y = 1 - t.y), t;
  }
  set needsUpdate(t) {
    t === !0 && (this.version++, this.source.needsUpdate = !0);
  }
  set needsPMREMUpdate(t) {
    t === !0 && this.pmremVersion++;
  }
};
Ft.DEFAULT_IMAGE = null, Ft.DEFAULT_MAPPING = 300, Ft.DEFAULT_ANISOTROPY = 1;
var st = class ws {
  constructor(t = 0, i = 0, r = 0, a = 1) {
    ws.prototype.isVector4 = !0, this.x = t, this.y = i, this.z = r, this.w = a;
  }
  get width() {
    return this.z;
  }
  set width(t) {
    this.z = t;
  }
  get height() {
    return this.w;
  }
  set height(t) {
    this.w = t;
  }
  set(t, i, r, a) {
    return this.x = t, this.y = i, this.z = r, this.w = a, this;
  }
  setScalar(t) {
    return this.x = t, this.y = t, this.z = t, this.w = t, this;
  }
  setX(t) {
    return this.x = t, this;
  }
  setY(t) {
    return this.y = t, this;
  }
  setZ(t) {
    return this.z = t, this;
  }
  setW(t) {
    return this.w = t, this;
  }
  setComponent(t, i) {
    switch (t) {
      case 0:
        this.x = i;
        break;
      case 1:
        this.y = i;
        break;
      case 2:
        this.z = i;
        break;
      case 3:
        this.w = i;
        break;
      default:
        throw Error("index is out of range: " + t);
    }
    return this;
  }
  getComponent(t) {
    switch (t) {
      case 0:
        return this.x;
      case 1:
        return this.y;
      case 2:
        return this.z;
      case 3:
        return this.w;
      default:
        throw Error("index is out of range: " + t);
    }
  }
  clone() {
    return new this.constructor(this.x, this.y, this.z, this.w);
  }
  copy(t) {
    return this.x = t.x, this.y = t.y, this.z = t.z, this.w = t.w === void 0 ? 1 : t.w, this;
  }
  add(t) {
    return this.x += t.x, this.y += t.y, this.z += t.z, this.w += t.w, this;
  }
  addScalar(t) {
    return this.x += t, this.y += t, this.z += t, this.w += t, this;
  }
  addVectors(t, i) {
    return this.x = t.x + i.x, this.y = t.y + i.y, this.z = t.z + i.z, this.w = t.w + i.w, this;
  }
  addScaledVector(t, i) {
    return this.x += t.x * i, this.y += t.y * i, this.z += t.z * i, this.w += t.w * i, this;
  }
  sub(t) {
    return this.x -= t.x, this.y -= t.y, this.z -= t.z, this.w -= t.w, this;
  }
  subScalar(t) {
    return this.x -= t, this.y -= t, this.z -= t, this.w -= t, this;
  }
  subVectors(t, i) {
    return this.x = t.x - i.x, this.y = t.y - i.y, this.z = t.z - i.z, this.w = t.w - i.w, this;
  }
  multiply(t) {
    return this.x *= t.x, this.y *= t.y, this.z *= t.z, this.w *= t.w, this;
  }
  multiplyScalar(t) {
    return this.x *= t, this.y *= t, this.z *= t, this.w *= t, this;
  }
  applyMatrix4(t) {
    let i = this.x, r = this.y, a = this.z, n = this.w, s = t.elements;
    return this.x = s[0] * i + s[4] * r + s[8] * a + s[12] * n, this.y = s[1] * i + s[5] * r + s[9] * a + s[13] * n, this.z = s[2] * i + s[6] * r + s[10] * a + s[14] * n, this.w = s[3] * i + s[7] * r + s[11] * a + s[15] * n, this;
  }
  divide(t) {
    return this.x /= t.x, this.y /= t.y, this.z /= t.z, this.w /= t.w, this;
  }
  divideScalar(t) {
    return this.multiplyScalar(1 / t);
  }
  setAxisAngleFromQuaternion(t) {
    this.w = 2 * Math.acos(t.w);
    let i = Math.sqrt(1 - t.w * t.w);
    return i < 1e-4 ? (this.x = 1, this.y = 0, this.z = 0) : (this.x = t.x / i, this.y = t.y / i, this.z = t.z / i), this;
  }
  setAxisAngleFromRotationMatrix(t) {
    let i, r, a, n, s = 0.01, o = 0.1, l = t.elements, c = l[0], u = l[4], h = l[8], d = l[1], m = l[5], x = l[9], _ = l[2], f = l[6], p = l[10];
    if (Math.abs(u - d) < s && Math.abs(h - _) < s && Math.abs(x - f) < s) {
      if (Math.abs(u + d) < o && Math.abs(h + _) < o && Math.abs(x + f) < o && Math.abs(c + m + p - 3) < o) return this.set(1, 0, 0, 0), this;
      i = Math.PI;
      let y = (c + 1) / 2, A = (m + 1) / 2, I = (p + 1) / 2, L = (u + d) / 4, D = (h + _) / 4, z = (x + f) / 4;
      return y > A && y > I ? y < s ? (r = 0, a = 0.707106781, n = 0.707106781) : (r = Math.sqrt(y), a = L / r, n = D / r) : A > I ? A < s ? (r = 0.707106781, a = 0, n = 0.707106781) : (a = Math.sqrt(A), r = L / a, n = z / a) : I < s ? (r = 0.707106781, a = 0.707106781, n = 0) : (n = Math.sqrt(I), r = D / n, a = z / n), this.set(r, a, n, i), this;
    }
    let R = Math.sqrt((f - x) * (f - x) + (h - _) * (h - _) + (d - u) * (d - u));
    return Math.abs(R) < 1e-3 && (R = 1), this.x = (f - x) / R, this.y = (h - _) / R, this.z = (d - u) / R, this.w = Math.acos((c + m + p - 1) / 2), this;
  }
  setFromMatrixPosition(t) {
    let i = t.elements;
    return this.x = i[12], this.y = i[13], this.z = i[14], this.w = i[15], this;
  }
  min(t) {
    return this.x = Math.min(this.x, t.x), this.y = Math.min(this.y, t.y), this.z = Math.min(this.z, t.z), this.w = Math.min(this.w, t.w), this;
  }
  max(t) {
    return this.x = Math.max(this.x, t.x), this.y = Math.max(this.y, t.y), this.z = Math.max(this.z, t.z), this.w = Math.max(this.w, t.w), this;
  }
  clamp(t, i) {
    return this.x = Be(this.x, t.x, i.x), this.y = Be(this.y, t.y, i.y), this.z = Be(this.z, t.z, i.z), this.w = Be(this.w, t.w, i.w), this;
  }
  clampScalar(t, i) {
    return this.x = Be(this.x, t, i), this.y = Be(this.y, t, i), this.z = Be(this.z, t, i), this.w = Be(this.w, t, i), this;
  }
  clampLength(t, i) {
    let r = this.length();
    return this.divideScalar(r || 1).multiplyScalar(Be(r, t, i));
  }
  floor() {
    return this.x = Math.floor(this.x), this.y = Math.floor(this.y), this.z = Math.floor(this.z), this.w = Math.floor(this.w), this;
  }
  ceil() {
    return this.x = Math.ceil(this.x), this.y = Math.ceil(this.y), this.z = Math.ceil(this.z), this.w = Math.ceil(this.w), this;
  }
  round() {
    return this.x = Math.round(this.x), this.y = Math.round(this.y), this.z = Math.round(this.z), this.w = Math.round(this.w), this;
  }
  roundToZero() {
    return this.x = Math.trunc(this.x), this.y = Math.trunc(this.y), this.z = Math.trunc(this.z), this.w = Math.trunc(this.w), this;
  }
  negate() {
    return this.x = -this.x, this.y = -this.y, this.z = -this.z, this.w = -this.w, this;
  }
  dot(t) {
    return this.x * t.x + this.y * t.y + this.z * t.z + this.w * t.w;
  }
  lengthSq() {
    return this.x * this.x + this.y * this.y + this.z * this.z + this.w * this.w;
  }
  length() {
    return Math.sqrt(this.x * this.x + this.y * this.y + this.z * this.z + this.w * this.w);
  }
  manhattanLength() {
    return Math.abs(this.x) + Math.abs(this.y) + Math.abs(this.z) + Math.abs(this.w);
  }
  normalize() {
    return this.divideScalar(this.length() || 1);
  }
  setLength(t) {
    return this.normalize().multiplyScalar(t);
  }
  lerp(t, i) {
    return this.x += (t.x - this.x) * i, this.y += (t.y - this.y) * i, this.z += (t.z - this.z) * i, this.w += (t.w - this.w) * i, this;
  }
  lerpVectors(t, i, r) {
    return this.x = t.x + (i.x - t.x) * r, this.y = t.y + (i.y - t.y) * r, this.z = t.z + (i.z - t.z) * r, this.w = t.w + (i.w - t.w) * r, this;
  }
  equals(t) {
    return t.x === this.x && t.y === this.y && t.z === this.z && t.w === this.w;
  }
  fromArray(t, i = 0) {
    return this.x = t[i], this.y = t[i + 1], this.z = t[i + 2], this.w = t[i + 3], this;
  }
  toArray(t = [], i = 0) {
    return t[i] = this.x, t[i + 1] = this.y, t[i + 2] = this.z, t[i + 3] = this.w, t;
  }
  fromBufferAttribute(t, i) {
    return this.x = t.getX(i), this.y = t.getY(i), this.z = t.getZ(i), this.w = t.getW(i), this;
  }
  random() {
    return this.x = Math.random(), this.y = Math.random(), this.z = Math.random(), this.w = Math.random(), this;
  }
  *[Symbol.iterator]() {
    yield this.x, yield this.y, yield this.z, yield this.w;
  }
}, Tl = class extends Zi {
  constructor(e = 1, t = 1, i = {}) {
    super(), i = Object.assign({ generateMipmaps: !1, internalFormat: null, minFilter: Mi, depthBuffer: !0, stencilBuffer: !1, resolveDepthBuffer: !0, resolveStencilBuffer: !0, depthTexture: null, samples: 0, count: 1, depth: 1, multiview: !1 }, i), this.isRenderTarget = !0, this.width = e, this.height = t, this.depth = i.depth, this.scissor = new st(0, 0, e, t), this.scissorTest = !1, this.viewport = new st(0, 0, e, t);
    let r = new Ft({ width: e, height: t, depth: i.depth });
    this.textures = [];
    let a = i.count;
    for (let n = 0; n < a; n++) this.textures[n] = r.clone(), this.textures[n].isRenderTargetTexture = !0, this.textures[n].renderTarget = this;
    this._setTextureOptions(i), this.depthBuffer = i.depthBuffer, this.stencilBuffer = i.stencilBuffer, this.resolveDepthBuffer = i.resolveDepthBuffer, this.resolveStencilBuffer = i.resolveStencilBuffer, this._depthTexture = null, this.depthTexture = i.depthTexture, this.samples = i.samples, this.multiview = i.multiview;
  }
  _setTextureOptions(e = {}) {
    let t = { minFilter: Mi, generateMipmaps: !1, flipY: !1, internalFormat: null };
    e.mapping !== void 0 && (t.mapping = e.mapping), e.wrapS !== void 0 && (t.wrapS = e.wrapS), e.wrapT !== void 0 && (t.wrapT = e.wrapT), e.wrapR !== void 0 && (t.wrapR = e.wrapR), e.magFilter !== void 0 && (t.magFilter = e.magFilter), e.minFilter !== void 0 && (t.minFilter = e.minFilter), e.format !== void 0 && (t.format = e.format), e.type !== void 0 && (t.type = e.type), e.anisotropy !== void 0 && (t.anisotropy = e.anisotropy), e.colorSpace !== void 0 && (t.colorSpace = e.colorSpace), e.flipY !== void 0 && (t.flipY = e.flipY), e.generateMipmaps !== void 0 && (t.generateMipmaps = e.generateMipmaps), e.internalFormat !== void 0 && (t.internalFormat = e.internalFormat);
    for (let i = 0; i < this.textures.length; i++) this.textures[i].setValues(t);
  }
  get texture() {
    return this.textures[0];
  }
  set texture(e) {
    this.textures[0] = e;
  }
  set depthTexture(e) {
    this._depthTexture !== null && (this._depthTexture.renderTarget = null), e !== null && (e.renderTarget = this), this._depthTexture = e;
  }
  get depthTexture() {
    return this._depthTexture;
  }
  setSize(e, t, i = 1) {
    if (this.width !== e || this.height !== t || this.depth !== i) {
      this.width = e, this.height = t, this.depth = i;
      for (let r = 0, a = this.textures.length; r < a; r++) this.textures[r].image.width = e, this.textures[r].image.height = t, this.textures[r].image.depth = i, this.textures[r].isArrayTexture = this.textures[r].image.depth > 1;
      this.dispose();
    }
    this.viewport.set(0, 0, e, t), this.scissor.set(0, 0, e, t);
  }
  clone() {
    return new this.constructor().copy(this);
  }
  copy(e) {
    this.width = e.width, this.height = e.height, this.depth = e.depth, this.scissor.copy(e.scissor), this.scissorTest = e.scissorTest, this.viewport.copy(e.viewport), this.textures.length = 0;
    for (let t = 0, i = e.textures.length; t < i; t++) {
      this.textures[t] = e.textures[t].clone(), this.textures[t].isRenderTargetTexture = !0, this.textures[t].renderTarget = this;
      let r = Object.assign({}, e.textures[t].image);
      this.textures[t].source = new rn(r);
    }
    return this.depthBuffer = e.depthBuffer, this.stencilBuffer = e.stencilBuffer, this.resolveDepthBuffer = e.resolveDepthBuffer, this.resolveStencilBuffer = e.resolveStencilBuffer, e.depthTexture !== null && (this.depthTexture = e.depthTexture.clone()), this.samples = e.samples, this;
  }
  dispose() {
    this.dispatchEvent({ type: "dispose" });
  }
}, ai = class extends Tl {
  constructor(e = 1, t = 1, i = {}) {
    super(e, t, i), this.isWebGLRenderTarget = !0;
  }
}, As = class extends Ft {
  constructor(e = null, t = 1, i = 1, r = 1) {
    super(null), this.isDataArrayTexture = !0, this.image = { data: e, width: t, height: i, depth: r }, this.magFilter = Tt, this.minFilter = Tt, this.wrapR = yi, this.generateMipmaps = !1, this.flipY = !1, this.unpackAlignment = 1, this.layerUpdates = /* @__PURE__ */ new Set();
  }
  addLayerUpdate(e) {
    this.layerUpdates.add(e);
  }
  clearLayerUpdates() {
    this.layerUpdates.clear();
  }
}, wl = class extends Ft {
  constructor(e = null, t = 1, i = 1, r = 1) {
    super(null), this.isData3DTexture = !0, this.image = { data: e, width: t, height: i, depth: r }, this.magFilter = Tt, this.minFilter = Tt, this.wrapR = yi, this.generateMipmaps = !1, this.flipY = !1, this.unpackAlignment = 1;
  }
}, vr = class {
  constructor(e = new F(1 / 0, 1 / 0, 1 / 0), t = new F(-1 / 0, -1 / 0, -1 / 0)) {
    this.isBox3 = !0, this.min = e, this.max = t;
  }
  set(e, t) {
    return this.min.copy(e), this.max.copy(t), this;
  }
  setFromArray(e) {
    this.makeEmpty();
    for (let t = 0, i = e.length; t < i; t += 3) this.expandByPoint(Lt.fromArray(e, t));
    return this;
  }
  setFromBufferAttribute(e) {
    this.makeEmpty();
    for (let t = 0, i = e.count; t < i; t++) this.expandByPoint(Lt.fromBufferAttribute(e, t));
    return this;
  }
  setFromPoints(e) {
    this.makeEmpty();
    for (let t = 0, i = e.length; t < i; t++) this.expandByPoint(e[t]);
    return this;
  }
  setFromCenterAndSize(e, t) {
    let i = Lt.copy(t).multiplyScalar(0.5);
    return this.min.copy(e).sub(i), this.max.copy(e).add(i), this;
  }
  setFromObject(e, t = !1) {
    return this.makeEmpty(), this.expandByObject(e, t);
  }
  clone() {
    return new this.constructor().copy(this);
  }
  copy(e) {
    return this.min.copy(e.min), this.max.copy(e.max), this;
  }
  makeEmpty() {
    return this.min.x = this.min.y = this.min.z = 1 / 0, this.max.x = this.max.y = this.max.z = -1 / 0, this;
  }
  isEmpty() {
    return this.max.x < this.min.x || this.max.y < this.min.y || this.max.z < this.min.z;
  }
  getCenter(e) {
    return this.isEmpty() ? e.set(0, 0, 0) : e.addVectors(this.min, this.max).multiplyScalar(0.5);
  }
  getSize(e) {
    return this.isEmpty() ? e.set(0, 0, 0) : e.subVectors(this.max, this.min);
  }
  expandByPoint(e) {
    return this.min.min(e), this.max.max(e), this;
  }
  expandByVector(e) {
    return this.min.sub(e), this.max.add(e), this;
  }
  expandByScalar(e) {
    return this.min.addScalar(-e), this.max.addScalar(e), this;
  }
  expandByObject(e, t = !1) {
    e.updateWorldMatrix(!1, !1);
    let i = e.geometry;
    if (i !== void 0) {
      let a = i.getAttribute("position");
      if (t === !0 && a !== void 0 && e.isInstancedMesh !== !0) for (let n = 0, s = a.count; n < s; n++) e.isMesh === !0 ? e.getVertexPosition(n, Lt) : Lt.fromBufferAttribute(a, n), Lt.applyMatrix4(e.matrixWorld), this.expandByPoint(Lt);
      else e.boundingBox === void 0 ? (i.boundingBox === null && i.computeBoundingBox(), Mr.copy(i.boundingBox)) : (e.boundingBox === null && e.computeBoundingBox(), Mr.copy(e.boundingBox)), Mr.applyMatrix4(e.matrixWorld), this.union(Mr);
    }
    let r = e.children;
    for (let a = 0, n = r.length; a < n; a++) this.expandByObject(r[a], t);
    return this;
  }
  containsPoint(e) {
    return e.x >= this.min.x && e.x <= this.max.x && e.y >= this.min.y && e.y <= this.max.y && e.z >= this.min.z && e.z <= this.max.z;
  }
  containsBox(e) {
    return this.min.x <= e.min.x && e.max.x <= this.max.x && this.min.y <= e.min.y && e.max.y <= this.max.y && this.min.z <= e.min.z && e.max.z <= this.max.z;
  }
  getParameter(e, t) {
    return t.set((e.x - this.min.x) / (this.max.x - this.min.x), (e.y - this.min.y) / (this.max.y - this.min.y), (e.z - this.min.z) / (this.max.z - this.min.z));
  }
  intersectsBox(e) {
    return e.max.x >= this.min.x && e.min.x <= this.max.x && e.max.y >= this.min.y && e.min.y <= this.max.y && e.max.z >= this.min.z && e.min.z <= this.max.z;
  }
  intersectsSphere(e) {
    return this.clampPoint(e.center, Lt), Lt.distanceToSquared(e.center) <= e.radius * e.radius;
  }
  intersectsPlane(e) {
    let t, i;
    return e.normal.x > 0 ? (t = e.normal.x * this.min.x, i = e.normal.x * this.max.x) : (t = e.normal.x * this.max.x, i = e.normal.x * this.min.x), e.normal.y > 0 ? (t += e.normal.y * this.min.y, i += e.normal.y * this.max.y) : (t += e.normal.y * this.max.y, i += e.normal.y * this.min.y), e.normal.z > 0 ? (t += e.normal.z * this.min.z, i += e.normal.z * this.max.z) : (t += e.normal.z * this.max.z, i += e.normal.z * this.min.z), t <= -e.constant && i >= -e.constant;
  }
  intersectsTriangle(e) {
    if (this.isEmpty()) return !1;
    this.getCenter(er), Er.subVectors(this.max, er), Pi.subVectors(e.a, er), Di.subVectors(e.b, er), Li.subVectors(e.c, er), $t.subVectors(Di, Pi), Qt.subVectors(Li, Di), ui.subVectors(Pi, Li);
    let t = [0, -$t.z, $t.y, 0, -Qt.z, Qt.y, 0, -ui.z, ui.y, $t.z, 0, -$t.x, Qt.z, 0, -Qt.x, ui.z, 0, -ui.x, -$t.y, $t.x, 0, -Qt.y, Qt.x, 0, -ui.y, ui.x, 0];
    return !ma(t, Pi, Di, Li, Er) || (t = [1, 0, 0, 0, 1, 0, 0, 0, 1], !ma(t, Pi, Di, Li, Er)) ? !1 : (br.crossVectors($t, Qt), t = [br.x, br.y, br.z], ma(t, Pi, Di, Li, Er));
  }
  clampPoint(e, t) {
    return t.copy(e).clamp(this.min, this.max);
  }
  distanceToPoint(e) {
    return this.clampPoint(e, Lt).distanceTo(e);
  }
  getBoundingSphere(e) {
    return this.isEmpty() ? e.makeEmpty() : (this.getCenter(e.center), e.radius = this.getSize(Lt).length() * 0.5), e;
  }
  intersect(e) {
    return this.min.max(e.min), this.max.min(e.max), this.isEmpty() && this.makeEmpty(), this;
  }
  union(e) {
    return this.min.min(e.min), this.max.max(e.max), this;
  }
  applyMatrix4(e) {
    return this.isEmpty() ? this : (jt[0].set(this.min.x, this.min.y, this.min.z).applyMatrix4(e), jt[1].set(this.min.x, this.min.y, this.max.z).applyMatrix4(e), jt[2].set(this.min.x, this.max.y, this.min.z).applyMatrix4(e), jt[3].set(this.min.x, this.max.y, this.max.z).applyMatrix4(e), jt[4].set(this.max.x, this.min.y, this.min.z).applyMatrix4(e), jt[5].set(this.max.x, this.min.y, this.max.z).applyMatrix4(e), jt[6].set(this.max.x, this.max.y, this.min.z).applyMatrix4(e), jt[7].set(this.max.x, this.max.y, this.max.z).applyMatrix4(e), this.setFromPoints(jt), this);
  }
  translate(e) {
    return this.min.add(e), this.max.add(e), this;
  }
  equals(e) {
    return e.min.equals(this.min) && e.max.equals(this.max);
  }
  toJSON() {
    return { min: this.min.toArray(), max: this.max.toArray() };
  }
  fromJSON(e) {
    return this.min.fromArray(e.min), this.max.fromArray(e.max), this;
  }
}, jt = [new F(), new F(), new F(), new F(), new F(), new F(), new F(), new F()], Lt = new F(), Mr = new vr(), Pi = new F(), Di = new F(), Li = new F(), $t = new F(), Qt = new F(), ui = new F(), er = new F(), Er = new F(), br = new F(), hi = new F();
function ma(e, t, i, r, a) {
  for (let n = 0, s = e.length - 3; n <= s; n += 3) {
    hi.fromArray(e, n);
    let o = a.x * Math.abs(hi.x) + a.y * Math.abs(hi.y) + a.z * Math.abs(hi.z), l = t.dot(hi), c = i.dot(hi), u = r.dot(hi);
    if (Math.max(-Math.max(l, c, u), Math.min(l, c, u)) > o) return !1;
  }
  return !0;
}
var Al = new vr(), tr = new F(), ga = new F(), ra = class {
  constructor(e = new F(), t = -1) {
    this.isSphere = !0, this.center = e, this.radius = t;
  }
  set(e, t) {
    return this.center.copy(e), this.radius = t, this;
  }
  setFromPoints(e, t) {
    let i = this.center;
    t === void 0 ? Al.setFromPoints(e).getCenter(i) : i.copy(t);
    let r = 0;
    for (let a = 0, n = e.length; a < n; a++) r = Math.max(r, i.distanceToSquared(e[a]));
    return this.radius = Math.sqrt(r), this;
  }
  copy(e) {
    return this.center.copy(e.center), this.radius = e.radius, this;
  }
  isEmpty() {
    return this.radius < 0;
  }
  makeEmpty() {
    return this.center.set(0, 0, 0), this.radius = -1, this;
  }
  containsPoint(e) {
    return e.distanceToSquared(this.center) <= this.radius * this.radius;
  }
  distanceToPoint(e) {
    return e.distanceTo(this.center) - this.radius;
  }
  intersectsSphere(e) {
    let t = this.radius + e.radius;
    return e.center.distanceToSquared(this.center) <= t * t;
  }
  intersectsBox(e) {
    return e.intersectsSphere(this);
  }
  intersectsPlane(e) {
    return Math.abs(e.distanceToPoint(this.center)) <= this.radius;
  }
  clampPoint(e, t) {
    let i = this.center.distanceToSquared(e);
    return t.copy(e), i > this.radius * this.radius && (t.sub(this.center).normalize(), t.multiplyScalar(this.radius).add(this.center)), t;
  }
  getBoundingBox(e) {
    return this.isEmpty() ? (e.makeEmpty(), e) : (e.set(this.center, this.center), e.expandByScalar(this.radius), e);
  }
  applyMatrix4(e) {
    return this.center.applyMatrix4(e), this.radius *= e.getMaxScaleOnAxis(), this;
  }
  translate(e) {
    return this.center.add(e), this;
  }
  expandByPoint(e) {
    if (this.isEmpty()) return this.center.copy(e), this.radius = 0, this;
    tr.subVectors(e, this.center);
    let t = tr.lengthSq();
    if (t > this.radius * this.radius) {
      let i = Math.sqrt(t), r = (i - this.radius) * 0.5;
      this.center.addScaledVector(tr, r / i), this.radius += r;
    }
    return this;
  }
  union(e) {
    return e.isEmpty() ? this : this.isEmpty() ? (this.copy(e), this) : (this.center.equals(e.center) === !0 ? this.radius = Math.max(this.radius, e.radius) : (ga.subVectors(e.center, this.center).setLength(e.radius), this.expandByPoint(tr.copy(e.center).add(ga)), this.expandByPoint(tr.copy(e.center).sub(ga))), this);
  }
  equals(e) {
    return e.center.equals(this.center) && e.radius === this.radius;
  }
  clone() {
    return new this.constructor().copy(this);
  }
  toJSON() {
    return { radius: this.radius, center: this.center.toArray() };
  }
  fromJSON(e) {
    return this.radius = e.radius, this.center.fromArray(e.center), this;
  }
}, qt = new F(), _a = new F(), Tr = new F(), ei = new F(), va = new F(), wr = new F(), xa = new F(), an = class {
  constructor(e = new F(), t = new F(0, 0, -1)) {
    this.origin = e, this.direction = t;
  }
  set(e, t) {
    return this.origin.copy(e), this.direction.copy(t), this;
  }
  copy(e) {
    return this.origin.copy(e.origin), this.direction.copy(e.direction), this;
  }
  at(e, t) {
    return t.copy(this.origin).addScaledVector(this.direction, e);
  }
  lookAt(e) {
    return this.direction.copy(e).sub(this.origin).normalize(), this;
  }
  recast(e) {
    return this.origin.copy(this.at(e, qt)), this;
  }
  closestPointToPoint(e, t) {
    t.subVectors(e, this.origin);
    let i = t.dot(this.direction);
    return i < 0 ? t.copy(this.origin) : t.copy(this.origin).addScaledVector(this.direction, i);
  }
  distanceToPoint(e) {
    return Math.sqrt(this.distanceSqToPoint(e));
  }
  distanceSqToPoint(e) {
    let t = qt.subVectors(e, this.origin).dot(this.direction);
    return t < 0 ? this.origin.distanceToSquared(e) : (qt.copy(this.origin).addScaledVector(this.direction, t), qt.distanceToSquared(e));
  }
  distanceSqToSegment(e, t, i, r) {
    _a.copy(e).add(t).multiplyScalar(0.5), Tr.copy(t).sub(e).normalize(), ei.copy(this.origin).sub(_a);
    let a = e.distanceTo(t) * 0.5, n = -this.direction.dot(Tr), s = ei.dot(this.direction), o = -ei.dot(Tr), l = ei.lengthSq(), c = Math.abs(1 - n * n), u, h, d, m;
    if (c > 0) if (u = n * o - s, h = n * s - o, m = a * c, u >= 0) if (h >= -m) if (h <= m) {
      let x = 1 / c;
      u *= x, h *= x, d = u * (u + n * h + 2 * s) + h * (n * u + h + 2 * o) + l;
    } else h = a, u = Math.max(0, -(n * h + s)), d = -u * u + h * (h + 2 * o) + l;
    else h = -a, u = Math.max(0, -(n * h + s)), d = -u * u + h * (h + 2 * o) + l;
    else h <= -m ? (u = Math.max(0, -(-n * a + s)), h = u > 0 ? -a : Math.min(Math.max(-a, -o), a), d = -u * u + h * (h + 2 * o) + l) : h <= m ? (u = 0, h = Math.min(Math.max(-a, -o), a), d = h * (h + 2 * o) + l) : (u = Math.max(0, -(n * a + s)), h = u > 0 ? a : Math.min(Math.max(-a, -o), a), d = -u * u + h * (h + 2 * o) + l);
    else h = n > 0 ? -a : a, u = Math.max(0, -(n * h + s)), d = -u * u + h * (h + 2 * o) + l;
    return i && i.copy(this.origin).addScaledVector(this.direction, u), r && r.copy(_a).addScaledVector(Tr, h), d;
  }
  intersectSphere(e, t) {
    qt.subVectors(e.center, this.origin);
    let i = qt.dot(this.direction), r = qt.dot(qt) - i * i, a = e.radius * e.radius;
    if (r > a) return null;
    let n = Math.sqrt(a - r), s = i - n, o = i + n;
    return o < 0 ? null : s < 0 ? this.at(o, t) : this.at(s, t);
  }
  intersectsSphere(e) {
    return e.radius < 0 ? !1 : this.distanceSqToPoint(e.center) <= e.radius * e.radius;
  }
  distanceToPlane(e) {
    let t = e.normal.dot(this.direction);
    if (t === 0) return e.distanceToPoint(this.origin) === 0 ? 0 : null;
    let i = -(this.origin.dot(e.normal) + e.constant) / t;
    return i >= 0 ? i : null;
  }
  intersectPlane(e, t) {
    let i = this.distanceToPlane(e);
    return i === null ? null : this.at(i, t);
  }
  intersectsPlane(e) {
    let t = e.distanceToPoint(this.origin);
    return t === 0 || e.normal.dot(this.direction) * t < 0;
  }
  intersectBox(e, t) {
    let i, r, a, n, s, o, l = 1 / this.direction.x, c = 1 / this.direction.y, u = 1 / this.direction.z, h = this.origin;
    return l >= 0 ? (i = (e.min.x - h.x) * l, r = (e.max.x - h.x) * l) : (i = (e.max.x - h.x) * l, r = (e.min.x - h.x) * l), c >= 0 ? (a = (e.min.y - h.y) * c, n = (e.max.y - h.y) * c) : (a = (e.max.y - h.y) * c, n = (e.min.y - h.y) * c), i > n || a > r || ((a > i || isNaN(i)) && (i = a), (n < r || isNaN(r)) && (r = n), u >= 0 ? (s = (e.min.z - h.z) * u, o = (e.max.z - h.z) * u) : (s = (e.max.z - h.z) * u, o = (e.min.z - h.z) * u), i > o || s > r) || ((s > i || i !== i) && (i = s), (o < r || r !== r) && (r = o), r < 0) ? null : this.at(i >= 0 ? i : r, t);
  }
  intersectsBox(e) {
    return this.intersectBox(e, qt) !== null;
  }
  intersectTriangle(e, t, i, r, a) {
    va.subVectors(t, e), wr.subVectors(i, e), xa.crossVectors(va, wr);
    let n = this.direction.dot(xa), s;
    if (n > 0) {
      if (r) return null;
      s = 1;
    } else if (n < 0) s = -1, n = -n;
    else return null;
    ei.subVectors(this.origin, e);
    let o = s * this.direction.dot(wr.crossVectors(ei, wr));
    if (o < 0) return null;
    let l = s * this.direction.dot(va.cross(ei));
    if (l < 0 || o + l > n) return null;
    let c = -s * ei.dot(xa);
    return c < 0 ? null : this.at(c / n, a);
  }
  applyMatrix4(e) {
    return this.origin.applyMatrix4(e), this.direction.transformDirection(e), this;
  }
  equals(e) {
    return e.origin.equals(this.origin) && e.direction.equals(this.direction);
  }
  clone() {
    return new this.constructor().copy(this);
  }
}, dt = class Wa {
  constructor(t, i, r, a, n, s, o, l, c, u, h, d, m, x, _, f) {
    Wa.prototype.isMatrix4 = !0, this.elements = [1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1], t !== void 0 && this.set(t, i, r, a, n, s, o, l, c, u, h, d, m, x, _, f);
  }
  set(t, i, r, a, n, s, o, l, c, u, h, d, m, x, _, f) {
    let p = this.elements;
    return p[0] = t, p[4] = i, p[8] = r, p[12] = a, p[1] = n, p[5] = s, p[9] = o, p[13] = l, p[2] = c, p[6] = u, p[10] = h, p[14] = d, p[3] = m, p[7] = x, p[11] = _, p[15] = f, this;
  }
  identity() {
    return this.set(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1), this;
  }
  clone() {
    return new Wa().fromArray(this.elements);
  }
  copy(t) {
    let i = this.elements, r = t.elements;
    return i[0] = r[0], i[1] = r[1], i[2] = r[2], i[3] = r[3], i[4] = r[4], i[5] = r[5], i[6] = r[6], i[7] = r[7], i[8] = r[8], i[9] = r[9], i[10] = r[10], i[11] = r[11], i[12] = r[12], i[13] = r[13], i[14] = r[14], i[15] = r[15], this;
  }
  copyPosition(t) {
    let i = this.elements, r = t.elements;
    return i[12] = r[12], i[13] = r[13], i[14] = r[14], this;
  }
  setFromMatrix3(t) {
    let i = t.elements;
    return this.set(i[0], i[3], i[6], 0, i[1], i[4], i[7], 0, i[2], i[5], i[8], 0, 0, 0, 0, 1), this;
  }
  extractBasis(t, i, r) {
    return t.setFromMatrixColumn(this, 0), i.setFromMatrixColumn(this, 1), r.setFromMatrixColumn(this, 2), this;
  }
  makeBasis(t, i, r) {
    return this.set(t.x, i.x, r.x, 0, t.y, i.y, r.y, 0, t.z, i.z, r.z, 0, 0, 0, 0, 1), this;
  }
  extractRotation(t) {
    let i = this.elements, r = t.elements, a = 1 / Ui.setFromMatrixColumn(t, 0).length(), n = 1 / Ui.setFromMatrixColumn(t, 1).length(), s = 1 / Ui.setFromMatrixColumn(t, 2).length();
    return i[0] = r[0] * a, i[1] = r[1] * a, i[2] = r[2] * a, i[3] = 0, i[4] = r[4] * n, i[5] = r[5] * n, i[6] = r[6] * n, i[7] = 0, i[8] = r[8] * s, i[9] = r[9] * s, i[10] = r[10] * s, i[11] = 0, i[12] = 0, i[13] = 0, i[14] = 0, i[15] = 1, this;
  }
  makeRotationFromEuler(t) {
    let i = this.elements, r = t.x, a = t.y, n = t.z, s = Math.cos(r), o = Math.sin(r), l = Math.cos(a), c = Math.sin(a), u = Math.cos(n), h = Math.sin(n);
    if (t.order === "XYZ") {
      let d = s * u, m = s * h, x = o * u, _ = o * h;
      i[0] = l * u, i[4] = -l * h, i[8] = c, i[1] = m + x * c, i[5] = d - _ * c, i[9] = -o * l, i[2] = _ - d * c, i[6] = x + m * c, i[10] = s * l;
    } else if (t.order === "YXZ") {
      let d = l * u, m = l * h, x = c * u, _ = c * h;
      i[0] = d + _ * o, i[4] = x * o - m, i[8] = s * c, i[1] = s * h, i[5] = s * u, i[9] = -o, i[2] = m * o - x, i[6] = _ + d * o, i[10] = s * l;
    } else if (t.order === "ZXY") {
      let d = l * u, m = l * h, x = c * u, _ = c * h;
      i[0] = d - _ * o, i[4] = -s * h, i[8] = x + m * o, i[1] = m + x * o, i[5] = s * u, i[9] = _ - d * o, i[2] = -s * c, i[6] = o, i[10] = s * l;
    } else if (t.order === "ZYX") {
      let d = s * u, m = s * h, x = o * u, _ = o * h;
      i[0] = l * u, i[4] = x * c - m, i[8] = d * c + _, i[1] = l * h, i[5] = _ * c + d, i[9] = m * c - x, i[2] = -c, i[6] = o * l, i[10] = s * l;
    } else if (t.order === "YZX") {
      let d = s * l, m = s * c, x = o * l, _ = o * c;
      i[0] = l * u, i[4] = _ - d * h, i[8] = x * h + m, i[1] = h, i[5] = s * u, i[9] = -o * u, i[2] = -c * u, i[6] = m * h + x, i[10] = d - _ * h;
    } else if (t.order === "XZY") {
      let d = s * l, m = s * c, x = o * l, _ = o * c;
      i[0] = l * u, i[4] = -h, i[8] = c * u, i[1] = d * h + _, i[5] = s * u, i[9] = m * h - x, i[2] = x * h - m, i[6] = o * u, i[10] = _ * h + d;
    }
    return i[3] = 0, i[7] = 0, i[11] = 0, i[12] = 0, i[13] = 0, i[14] = 0, i[15] = 1, this;
  }
  makeRotationFromQuaternion(t) {
    return this.compose(Rl, t, Cl);
  }
  lookAt(t, i, r) {
    let a = this.elements;
    return Mt.subVectors(t, i), Mt.lengthSq() === 0 && (Mt.z = 1), Mt.normalize(), ti.crossVectors(r, Mt), ti.lengthSq() === 0 && (Math.abs(r.z) === 1 ? Mt.x += 1e-4 : Mt.z += 1e-4, Mt.normalize(), ti.crossVectors(r, Mt)), ti.normalize(), Ar.crossVectors(Mt, ti), a[0] = ti.x, a[4] = Ar.x, a[8] = Mt.x, a[1] = ti.y, a[5] = Ar.y, a[9] = Mt.y, a[2] = ti.z, a[6] = Ar.z, a[10] = Mt.z, this;
  }
  multiply(t) {
    return this.multiplyMatrices(this, t);
  }
  premultiply(t) {
    return this.multiplyMatrices(t, this);
  }
  multiplyMatrices(t, i) {
    let r = t.elements, a = i.elements, n = this.elements, s = r[0], o = r[4], l = r[8], c = r[12], u = r[1], h = r[5], d = r[9], m = r[13], x = r[2], _ = r[6], f = r[10], p = r[14], R = r[3], y = r[7], A = r[11], I = r[15], L = a[0], D = a[4], z = a[8], M = a[12], S = a[1], w = a[5], W = a[9], V = a[13], k = a[2], J = a[6], H = a[10], Q = a[14], X = a[3], ie = a[7], pe = a[11], Ue = a[15];
    return n[0] = s * L + o * S + l * k + c * X, n[4] = s * D + o * w + l * J + c * ie, n[8] = s * z + o * W + l * H + c * pe, n[12] = s * M + o * V + l * Q + c * Ue, n[1] = u * L + h * S + d * k + m * X, n[5] = u * D + h * w + d * J + m * ie, n[9] = u * z + h * W + d * H + m * pe, n[13] = u * M + h * V + d * Q + m * Ue, n[2] = x * L + _ * S + f * k + p * X, n[6] = x * D + _ * w + f * J + p * ie, n[10] = x * z + _ * W + f * H + p * pe, n[14] = x * M + _ * V + f * Q + p * Ue, n[3] = R * L + y * S + A * k + I * X, n[7] = R * D + y * w + A * J + I * ie, n[11] = R * z + y * W + A * H + I * pe, n[15] = R * M + y * V + A * Q + I * Ue, this;
  }
  multiplyScalar(t) {
    let i = this.elements;
    return i[0] *= t, i[4] *= t, i[8] *= t, i[12] *= t, i[1] *= t, i[5] *= t, i[9] *= t, i[13] *= t, i[2] *= t, i[6] *= t, i[10] *= t, i[14] *= t, i[3] *= t, i[7] *= t, i[11] *= t, i[15] *= t, this;
  }
  determinant() {
    let t = this.elements, i = t[0], r = t[4], a = t[8], n = t[12], s = t[1], o = t[5], l = t[9], c = t[13], u = t[2], h = t[6], d = t[10], m = t[14], x = t[3], _ = t[7], f = t[11], p = t[15];
    return x * (+n * l * h - a * c * h - n * o * d + r * c * d + a * o * m - r * l * m) + _ * (+i * l * m - i * c * d + n * s * d - a * s * m + a * c * u - n * l * u) + f * (+i * c * h - i * o * m - n * s * h + r * s * m + n * o * u - r * c * u) + p * (-a * o * u - i * l * h + i * o * d + a * s * h - r * s * d + r * l * u);
  }
  transpose() {
    let t = this.elements, i;
    return i = t[1], t[1] = t[4], t[4] = i, i = t[2], t[2] = t[8], t[8] = i, i = t[6], t[6] = t[9], t[9] = i, i = t[3], t[3] = t[12], t[12] = i, i = t[7], t[7] = t[13], t[13] = i, i = t[11], t[11] = t[14], t[14] = i, this;
  }
  setPosition(t, i, r) {
    let a = this.elements;
    return t.isVector3 ? (a[12] = t.x, a[13] = t.y, a[14] = t.z) : (a[12] = t, a[13] = i, a[14] = r), this;
  }
  invert() {
    let t = this.elements, i = t[0], r = t[1], a = t[2], n = t[3], s = t[4], o = t[5], l = t[6], c = t[7], u = t[8], h = t[9], d = t[10], m = t[11], x = t[12], _ = t[13], f = t[14], p = t[15], R = h * f * c - _ * d * c + _ * l * m - o * f * m - h * l * p + o * d * p, y = x * d * c - u * f * c - x * l * m + s * f * m + u * l * p - s * d * p, A = u * _ * c - x * h * c + x * o * m - s * _ * m - u * o * p + s * h * p, I = x * h * l - u * _ * l - x * o * d + s * _ * d + u * o * f - s * h * f, L = i * R + r * y + a * A + n * I;
    if (L === 0) return this.set(0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0);
    let D = 1 / L;
    return t[0] = R * D, t[1] = (_ * d * n - h * f * n - _ * a * m + r * f * m + h * a * p - r * d * p) * D, t[2] = (o * f * n - _ * l * n + _ * a * c - r * f * c - o * a * p + r * l * p) * D, t[3] = (h * l * n - o * d * n - h * a * c + r * d * c + o * a * m - r * l * m) * D, t[4] = y * D, t[5] = (u * f * n - x * d * n + x * a * m - i * f * m - u * a * p + i * d * p) * D, t[6] = (x * l * n - s * f * n - x * a * c + i * f * c + s * a * p - i * l * p) * D, t[7] = (s * d * n - u * l * n + u * a * c - i * d * c - s * a * m + i * l * m) * D, t[8] = A * D, t[9] = (x * h * n - u * _ * n - x * r * m + i * _ * m + u * r * p - i * h * p) * D, t[10] = (s * _ * n - x * o * n + x * r * c - i * _ * c - s * r * p + i * o * p) * D, t[11] = (u * o * n - s * h * n - u * r * c + i * h * c + s * r * m - i * o * m) * D, t[12] = I * D, t[13] = (u * _ * a - x * h * a + x * r * d - i * _ * d - u * r * f + i * h * f) * D, t[14] = (x * o * a - s * _ * a - x * r * l + i * _ * l + s * r * f - i * o * f) * D, t[15] = (s * h * a - u * o * a + u * r * l - i * h * l - s * r * d + i * o * d) * D, this;
  }
  scale(t) {
    let i = this.elements, r = t.x, a = t.y, n = t.z;
    return i[0] *= r, i[4] *= a, i[8] *= n, i[1] *= r, i[5] *= a, i[9] *= n, i[2] *= r, i[6] *= a, i[10] *= n, i[3] *= r, i[7] *= a, i[11] *= n, this;
  }
  getMaxScaleOnAxis() {
    let t = this.elements, i = t[0] * t[0] + t[1] * t[1] + t[2] * t[2], r = t[4] * t[4] + t[5] * t[5] + t[6] * t[6], a = t[8] * t[8] + t[9] * t[9] + t[10] * t[10];
    return Math.sqrt(Math.max(i, r, a));
  }
  makeTranslation(t, i, r) {
    return t.isVector3 ? this.set(1, 0, 0, t.x, 0, 1, 0, t.y, 0, 0, 1, t.z, 0, 0, 0, 1) : this.set(1, 0, 0, t, 0, 1, 0, i, 0, 0, 1, r, 0, 0, 0, 1), this;
  }
  makeRotationX(t) {
    let i = Math.cos(t), r = Math.sin(t);
    return this.set(1, 0, 0, 0, 0, i, -r, 0, 0, r, i, 0, 0, 0, 0, 1), this;
  }
  makeRotationY(t) {
    let i = Math.cos(t), r = Math.sin(t);
    return this.set(i, 0, r, 0, 0, 1, 0, 0, -r, 0, i, 0, 0, 0, 0, 1), this;
  }
  makeRotationZ(t) {
    let i = Math.cos(t), r = Math.sin(t);
    return this.set(i, -r, 0, 0, r, i, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1), this;
  }
  makeRotationAxis(t, i) {
    let r = Math.cos(i), a = Math.sin(i), n = 1 - r, s = t.x, o = t.y, l = t.z, c = n * s, u = n * o;
    return this.set(c * s + r, c * o - a * l, c * l + a * o, 0, c * o + a * l, u * o + r, u * l - a * s, 0, c * l - a * o, u * l + a * s, n * l * l + r, 0, 0, 0, 0, 1), this;
  }
  makeScale(t, i, r) {
    return this.set(t, 0, 0, 0, 0, i, 0, 0, 0, 0, r, 0, 0, 0, 0, 1), this;
  }
  makeShear(t, i, r, a, n, s) {
    return this.set(1, r, n, 0, t, 1, s, 0, i, a, 1, 0, 0, 0, 0, 1), this;
  }
  compose(t, i, r) {
    let a = this.elements, n = i._x, s = i._y, o = i._z, l = i._w, c = n + n, u = s + s, h = o + o, d = n * c, m = n * u, x = n * h, _ = s * u, f = s * h, p = o * h, R = l * c, y = l * u, A = l * h, I = r.x, L = r.y, D = r.z;
    return a[0] = (1 - (_ + p)) * I, a[1] = (m + A) * I, a[2] = (x - y) * I, a[3] = 0, a[4] = (m - A) * L, a[5] = (1 - (d + p)) * L, a[6] = (f + R) * L, a[7] = 0, a[8] = (x + y) * D, a[9] = (f - R) * D, a[10] = (1 - (d + _)) * D, a[11] = 0, a[12] = t.x, a[13] = t.y, a[14] = t.z, a[15] = 1, this;
  }
  decompose(t, i, r) {
    let a = this.elements, n = Ui.set(a[0], a[1], a[2]).length(), s = Ui.set(a[4], a[5], a[6]).length(), o = Ui.set(a[8], a[9], a[10]).length();
    this.determinant() < 0 && (n = -n), t.x = a[12], t.y = a[13], t.z = a[14], Ut.copy(this);
    let l = 1 / n, c = 1 / s, u = 1 / o;
    return Ut.elements[0] *= l, Ut.elements[1] *= l, Ut.elements[2] *= l, Ut.elements[4] *= c, Ut.elements[5] *= c, Ut.elements[6] *= c, Ut.elements[8] *= u, Ut.elements[9] *= u, Ut.elements[10] *= u, i.setFromRotationMatrix(Ut), r.x = n, r.y = s, r.z = o, this;
  }
  makePerspective(t, i, r, a, n, s, o = Yi, l = !1) {
    let c = this.elements, u = 2 * n / (i - t), h = 2 * n / (r - a), d = (i + t) / (i - t), m = (r + a) / (r - a), x, _;
    if (l) x = n / (s - n), _ = s * n / (s - n);
    else if (o === 2e3) x = -(s + n) / (s - n), _ = -2 * s * n / (s - n);
    else if (o === 2001) x = -s / (s - n), _ = -s * n / (s - n);
    else throw Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: " + o);
    return c[0] = u, c[4] = 0, c[8] = d, c[12] = 0, c[1] = 0, c[5] = h, c[9] = m, c[13] = 0, c[2] = 0, c[6] = 0, c[10] = x, c[14] = _, c[3] = 0, c[7] = 0, c[11] = -1, c[15] = 0, this;
  }
  makeOrthographic(t, i, r, a, n, s, o = Yi, l = !1) {
    let c = this.elements, u = 2 / (i - t), h = 2 / (r - a), d = -(i + t) / (i - t), m = -(r + a) / (r - a), x, _;
    if (l) x = 1 / (s - n), _ = s / (s - n);
    else if (o === 2e3) x = -2 / (s - n), _ = -(s + n) / (s - n);
    else if (o === 2001) x = -1 / (s - n), _ = -n / (s - n);
    else throw Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: " + o);
    return c[0] = u, c[4] = 0, c[8] = 0, c[12] = d, c[1] = 0, c[5] = h, c[9] = 0, c[13] = m, c[2] = 0, c[6] = 0, c[10] = x, c[14] = _, c[3] = 0, c[7] = 0, c[11] = 0, c[15] = 1, this;
  }
  equals(t) {
    let i = this.elements, r = t.elements;
    for (let a = 0; a < 16; a++) if (i[a] !== r[a]) return !1;
    return !0;
  }
  fromArray(t, i = 0) {
    for (let r = 0; r < 16; r++) this.elements[r] = t[r + i];
    return this;
  }
  toArray(t = [], i = 0) {
    let r = this.elements;
    return t[i] = r[0], t[i + 1] = r[1], t[i + 2] = r[2], t[i + 3] = r[3], t[i + 4] = r[4], t[i + 5] = r[5], t[i + 6] = r[6], t[i + 7] = r[7], t[i + 8] = r[8], t[i + 9] = r[9], t[i + 10] = r[10], t[i + 11] = r[11], t[i + 12] = r[12], t[i + 13] = r[13], t[i + 14] = r[14], t[i + 15] = r[15], t;
  }
}, Ui = new F(), Ut = new dt(), Rl = new F(0, 0, 0), Cl = new F(1, 1, 1), ti = new F(), Ar = new F(), Mt = new F(), xn = new dt(), yn = new _r(), bi = class Rs {
  constructor(t = 0, i = 0, r = 0, a = Rs.DEFAULT_ORDER) {
    this.isEuler = !0, this._x = t, this._y = i, this._z = r, this._order = a;
  }
  get x() {
    return this._x;
  }
  set x(t) {
    this._x = t, this._onChangeCallback();
  }
  get y() {
    return this._y;
  }
  set y(t) {
    this._y = t, this._onChangeCallback();
  }
  get z() {
    return this._z;
  }
  set z(t) {
    this._z = t, this._onChangeCallback();
  }
  get order() {
    return this._order;
  }
  set order(t) {
    this._order = t, this._onChangeCallback();
  }
  set(t, i, r, a = this._order) {
    return this._x = t, this._y = i, this._z = r, this._order = a, this._onChangeCallback(), this;
  }
  clone() {
    return new this.constructor(this._x, this._y, this._z, this._order);
  }
  copy(t) {
    return this._x = t._x, this._y = t._y, this._z = t._z, this._order = t._order, this._onChangeCallback(), this;
  }
  setFromRotationMatrix(t, i = this._order, r = !0) {
    let a = t.elements, n = a[0], s = a[4], o = a[8], l = a[1], c = a[5], u = a[9], h = a[2], d = a[6], m = a[10];
    switch (i) {
      case "XYZ":
        this._y = Math.asin(Be(o, -1, 1)), Math.abs(o) < 0.9999999 ? (this._x = Math.atan2(-u, m), this._z = Math.atan2(-s, n)) : (this._x = Math.atan2(d, c), this._z = 0);
        break;
      case "YXZ":
        this._x = Math.asin(-Be(u, -1, 1)), Math.abs(u) < 0.9999999 ? (this._y = Math.atan2(o, m), this._z = Math.atan2(l, c)) : (this._y = Math.atan2(-h, n), this._z = 0);
        break;
      case "ZXY":
        this._x = Math.asin(Be(d, -1, 1)), Math.abs(d) < 0.9999999 ? (this._y = Math.atan2(-h, m), this._z = Math.atan2(-s, c)) : (this._y = 0, this._z = Math.atan2(l, n));
        break;
      case "ZYX":
        this._y = Math.asin(-Be(h, -1, 1)), Math.abs(h) < 0.9999999 ? (this._x = Math.atan2(d, m), this._z = Math.atan2(l, n)) : (this._x = 0, this._z = Math.atan2(-s, c));
        break;
      case "YZX":
        this._z = Math.asin(Be(l, -1, 1)), Math.abs(l) < 0.9999999 ? (this._x = Math.atan2(-u, c), this._y = Math.atan2(-h, n)) : (this._x = 0, this._y = Math.atan2(o, m));
        break;
      case "XZY":
        this._z = Math.asin(-Be(s, -1, 1)), Math.abs(s) < 0.9999999 ? (this._x = Math.atan2(d, c), this._y = Math.atan2(o, n)) : (this._x = Math.atan2(-u, m), this._y = 0);
        break;
      default:
        console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: " + i);
    }
    return this._order = i, r === !0 && this._onChangeCallback(), this;
  }
  setFromQuaternion(t, i, r) {
    return xn.makeRotationFromQuaternion(t), this.setFromRotationMatrix(xn, i, r);
  }
  setFromVector3(t, i = this._order) {
    return this.set(t.x, t.y, t.z, i);
  }
  reorder(t) {
    return yn.setFromEuler(this), this.setFromQuaternion(yn, t);
  }
  equals(t) {
    return t._x === this._x && t._y === this._y && t._z === this._z && t._order === this._order;
  }
  fromArray(t) {
    return this._x = t[0], this._y = t[1], this._z = t[2], t[3] !== void 0 && (this._order = t[3]), this._onChangeCallback(), this;
  }
  toArray(t = [], i = 0) {
    return t[i] = this._x, t[i + 1] = this._y, t[i + 2] = this._z, t[i + 3] = this._order, t;
  }
  _onChange(t) {
    return this._onChangeCallback = t, this;
  }
  _onChangeCallback() {
  }
  *[Symbol.iterator]() {
    yield this._x, yield this._y, yield this._z, yield this._order;
  }
};
bi.DEFAULT_ORDER = "XYZ";
var nn = class {
  constructor() {
    this.mask = 1;
  }
  set(e) {
    this.mask = (1 << e | 0) >>> 0;
  }
  enable(e) {
    this.mask |= 1 << e | 0;
  }
  enableAll() {
    this.mask = -1;
  }
  toggle(e) {
    this.mask ^= 1 << e | 0;
  }
  disable(e) {
    this.mask &= ~(1 << e | 0);
  }
  disableAll() {
    this.mask = 0;
  }
  test(e) {
    return (this.mask & e.mask) !== 0;
  }
  isEnabled(e) {
    return (this.mask & (1 << e | 0)) != 0;
  }
}, Pl = 0, Sn = new F(), Ii = new _r(), Yt = new dt(), Rr = new F(), ir = new F(), Dl = new F(), Ll = new _r(), Mn = new F(1, 0, 0), En = new F(0, 1, 0), bn = new F(0, 0, 1), Tn = { type: "added" }, Ul = { type: "removed" }, Ni = { type: "childadded", child: null }, ya = { type: "childremoved", child: null }, Wt = class Kr extends Zi {
  constructor() {
    super(), this.isObject3D = !0, Object.defineProperty(this, "id", { value: Pl++ }), this.uuid = gr(), this.name = "", this.type = "Object3D", this.parent = null, this.children = [], this.up = Kr.DEFAULT_UP.clone();
    let t = new F(), i = new bi(), r = new _r(), a = new F(1, 1, 1);
    function n() {
      r.setFromEuler(i, !1);
    }
    function s() {
      i.setFromQuaternion(r, void 0, !1);
    }
    i._onChange(n), r._onChange(s), Object.defineProperties(this, { position: { configurable: !0, enumerable: !0, value: t }, rotation: { configurable: !0, enumerable: !0, value: i }, quaternion: { configurable: !0, enumerable: !0, value: r }, scale: { configurable: !0, enumerable: !0, value: a }, modelViewMatrix: { value: new dt() }, normalMatrix: { value: new Ne() } }), this.matrix = new dt(), this.matrixWorld = new dt(), this.matrixAutoUpdate = Kr.DEFAULT_MATRIX_AUTO_UPDATE, this.matrixWorldAutoUpdate = Kr.DEFAULT_MATRIX_WORLD_AUTO_UPDATE, this.matrixWorldNeedsUpdate = !1, this.layers = new nn(), this.visible = !0, this.castShadow = !1, this.receiveShadow = !1, this.frustumCulled = !0, this.renderOrder = 0, this.animations = [], this.customDepthMaterial = void 0, this.customDistanceMaterial = void 0, this.userData = {};
  }
  onBeforeShadow() {
  }
  onAfterShadow() {
  }
  onBeforeRender() {
  }
  onAfterRender() {
  }
  applyMatrix4(t) {
    this.matrixAutoUpdate && this.updateMatrix(), this.matrix.premultiply(t), this.matrix.decompose(this.position, this.quaternion, this.scale);
  }
  applyQuaternion(t) {
    return this.quaternion.premultiply(t), this;
  }
  setRotationFromAxisAngle(t, i) {
    this.quaternion.setFromAxisAngle(t, i);
  }
  setRotationFromEuler(t) {
    this.quaternion.setFromEuler(t, !0);
  }
  setRotationFromMatrix(t) {
    this.quaternion.setFromRotationMatrix(t);
  }
  setRotationFromQuaternion(t) {
    this.quaternion.copy(t);
  }
  rotateOnAxis(t, i) {
    return Ii.setFromAxisAngle(t, i), this.quaternion.multiply(Ii), this;
  }
  rotateOnWorldAxis(t, i) {
    return Ii.setFromAxisAngle(t, i), this.quaternion.premultiply(Ii), this;
  }
  rotateX(t) {
    return this.rotateOnAxis(Mn, t);
  }
  rotateY(t) {
    return this.rotateOnAxis(En, t);
  }
  rotateZ(t) {
    return this.rotateOnAxis(bn, t);
  }
  translateOnAxis(t, i) {
    return Sn.copy(t).applyQuaternion(this.quaternion), this.position.add(Sn.multiplyScalar(i)), this;
  }
  translateX(t) {
    return this.translateOnAxis(Mn, t);
  }
  translateY(t) {
    return this.translateOnAxis(En, t);
  }
  translateZ(t) {
    return this.translateOnAxis(bn, t);
  }
  localToWorld(t) {
    return this.updateWorldMatrix(!0, !1), t.applyMatrix4(this.matrixWorld);
  }
  worldToLocal(t) {
    return this.updateWorldMatrix(!0, !1), t.applyMatrix4(Yt.copy(this.matrixWorld).invert());
  }
  lookAt(t, i, r) {
    t.isVector3 ? Rr.copy(t) : Rr.set(t, i, r);
    let a = this.parent;
    this.updateWorldMatrix(!0, !1), ir.setFromMatrixPosition(this.matrixWorld), this.isCamera || this.isLight ? Yt.lookAt(ir, Rr, this.up) : Yt.lookAt(Rr, ir, this.up), this.quaternion.setFromRotationMatrix(Yt), a && (Yt.extractRotation(a.matrixWorld), Ii.setFromRotationMatrix(Yt), this.quaternion.premultiply(Ii.invert()));
  }
  add(t) {
    if (arguments.length > 1) {
      for (let i = 0; i < arguments.length; i++) this.add(arguments[i]);
      return this;
    }
    return t === this ? (console.error("THREE.Object3D.add: object can't be added as a child of itself.", t), this) : (t && t.isObject3D ? (t.removeFromParent(), t.parent = this, this.children.push(t), t.dispatchEvent(Tn), Ni.child = t, this.dispatchEvent(Ni), Ni.child = null) : console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.", t), this);
  }
  remove(t) {
    if (arguments.length > 1) {
      for (let r = 0; r < arguments.length; r++) this.remove(arguments[r]);
      return this;
    }
    let i = this.children.indexOf(t);
    return i !== -1 && (t.parent = null, this.children.splice(i, 1), t.dispatchEvent(Ul), ya.child = t, this.dispatchEvent(ya), ya.child = null), this;
  }
  removeFromParent() {
    let t = this.parent;
    return t !== null && t.remove(this), this;
  }
  clear() {
    return this.remove(...this.children);
  }
  attach(t) {
    return this.updateWorldMatrix(!0, !1), Yt.copy(this.matrixWorld).invert(), t.parent !== null && (t.parent.updateWorldMatrix(!0, !1), Yt.multiply(t.parent.matrixWorld)), t.applyMatrix4(Yt), t.removeFromParent(), t.parent = this, this.children.push(t), t.updateWorldMatrix(!1, !0), t.dispatchEvent(Tn), Ni.child = t, this.dispatchEvent(Ni), Ni.child = null, this;
  }
  getObjectById(t) {
    return this.getObjectByProperty("id", t);
  }
  getObjectByName(t) {
    return this.getObjectByProperty("name", t);
  }
  getObjectByProperty(t, i) {
    if (this[t] === i) return this;
    for (let r = 0, a = this.children.length; r < a; r++) {
      let n = this.children[r].getObjectByProperty(t, i);
      if (n !== void 0) return n;
    }
  }
  getObjectsByProperty(t, i, r = []) {
    this[t] === i && r.push(this);
    let a = this.children;
    for (let n = 0, s = a.length; n < s; n++) a[n].getObjectsByProperty(t, i, r);
    return r;
  }
  getWorldPosition(t) {
    return this.updateWorldMatrix(!0, !1), t.setFromMatrixPosition(this.matrixWorld);
  }
  getWorldQuaternion(t) {
    return this.updateWorldMatrix(!0, !1), this.matrixWorld.decompose(ir, t, Dl), t;
  }
  getWorldScale(t) {
    return this.updateWorldMatrix(!0, !1), this.matrixWorld.decompose(ir, Ll, t), t;
  }
  getWorldDirection(t) {
    this.updateWorldMatrix(!0, !1);
    let i = this.matrixWorld.elements;
    return t.set(i[8], i[9], i[10]).normalize();
  }
  raycast() {
  }
  traverse(t) {
    t(this);
    let i = this.children;
    for (let r = 0, a = i.length; r < a; r++) i[r].traverse(t);
  }
  traverseVisible(t) {
    if (this.visible === !1) return;
    t(this);
    let i = this.children;
    for (let r = 0, a = i.length; r < a; r++) i[r].traverseVisible(t);
  }
  traverseAncestors(t) {
    let i = this.parent;
    i !== null && (t(i), i.traverseAncestors(t));
  }
  updateMatrix() {
    this.matrix.compose(this.position, this.quaternion, this.scale), this.matrixWorldNeedsUpdate = !0;
  }
  updateMatrixWorld(t) {
    this.matrixAutoUpdate && this.updateMatrix(), (this.matrixWorldNeedsUpdate || t) && (this.matrixWorldAutoUpdate === !0 && (this.parent === null ? this.matrixWorld.copy(this.matrix) : this.matrixWorld.multiplyMatrices(this.parent.matrixWorld, this.matrix)), this.matrixWorldNeedsUpdate = !1, t = !0);
    let i = this.children;
    for (let r = 0, a = i.length; r < a; r++) i[r].updateMatrixWorld(t);
  }
  updateWorldMatrix(t, i) {
    let r = this.parent;
    if (t === !0 && r !== null && r.updateWorldMatrix(!0, !1), this.matrixAutoUpdate && this.updateMatrix(), this.matrixWorldAutoUpdate === !0 && (this.parent === null ? this.matrixWorld.copy(this.matrix) : this.matrixWorld.multiplyMatrices(this.parent.matrixWorld, this.matrix)), i === !0) {
      let a = this.children;
      for (let n = 0, s = a.length; n < s; n++) a[n].updateWorldMatrix(!1, !0);
    }
  }
  toJSON(t) {
    let i = t === void 0 || typeof t == "string", r = {};
    i && (t = { geometries: {}, materials: {}, textures: {}, images: {}, shapes: {}, skeletons: {}, animations: {}, nodes: {} }, r.metadata = { version: 4.7, type: "Object", generator: "Object3D.toJSON" });
    let a = {};
    a.uuid = this.uuid, a.type = this.type, this.name !== "" && (a.name = this.name), this.castShadow === !0 && (a.castShadow = !0), this.receiveShadow === !0 && (a.receiveShadow = !0), this.visible === !1 && (a.visible = !1), this.frustumCulled === !1 && (a.frustumCulled = !1), this.renderOrder !== 0 && (a.renderOrder = this.renderOrder), Object.keys(this.userData).length > 0 && (a.userData = this.userData), a.layers = this.layers.mask, a.matrix = this.matrix.toArray(), a.up = this.up.toArray(), this.matrixAutoUpdate === !1 && (a.matrixAutoUpdate = !1), this.isInstancedMesh && (a.type = "InstancedMesh", a.count = this.count, a.instanceMatrix = this.instanceMatrix.toJSON(), this.instanceColor !== null && (a.instanceColor = this.instanceColor.toJSON())), this.isBatchedMesh && (a.type = "BatchedMesh", a.perObjectFrustumCulled = this.perObjectFrustumCulled, a.sortObjects = this.sortObjects, a.drawRanges = this._drawRanges, a.reservedRanges = this._reservedRanges, a.geometryInfo = this._geometryInfo.map((o) => ({ ...o, boundingBox: o.boundingBox ? o.boundingBox.toJSON() : void 0, boundingSphere: o.boundingSphere ? o.boundingSphere.toJSON() : void 0 })), a.instanceInfo = this._instanceInfo.map((o) => ({ ...o })), a.availableInstanceIds = this._availableInstanceIds.slice(), a.availableGeometryIds = this._availableGeometryIds.slice(), a.nextIndexStart = this._nextIndexStart, a.nextVertexStart = this._nextVertexStart, a.geometryCount = this._geometryCount, a.maxInstanceCount = this._maxInstanceCount, a.maxVertexCount = this._maxVertexCount, a.maxIndexCount = this._maxIndexCount, a.geometryInitialized = this._geometryInitialized, a.matricesTexture = this._matricesTexture.toJSON(t), a.indirectTexture = this._indirectTexture.toJSON(t), this._colorsTexture !== null && (a.colorsTexture = this._colorsTexture.toJSON(t)), this.boundingSphere !== null && (a.boundingSphere = this.boundingSphere.toJSON()), this.boundingBox !== null && (a.boundingBox = this.boundingBox.toJSON()));
    function n(o, l) {
      return o[l.uuid] === void 0 && (o[l.uuid] = l.toJSON(t)), l.uuid;
    }
    if (this.isScene) this.background && (this.background.isColor ? a.background = this.background.toJSON() : this.background.isTexture && (a.background = this.background.toJSON(t).uuid)), this.environment && this.environment.isTexture && this.environment.isRenderTargetTexture !== !0 && (a.environment = this.environment.toJSON(t).uuid);
    else if (this.isMesh || this.isLine || this.isPoints) {
      a.geometry = n(t.geometries, this.geometry);
      let o = this.geometry.parameters;
      if (o !== void 0 && o.shapes !== void 0) {
        let l = o.shapes;
        if (Array.isArray(l)) for (let c = 0, u = l.length; c < u; c++) {
          let h = l[c];
          n(t.shapes, h);
        }
        else n(t.shapes, l);
      }
    }
    if (this.isSkinnedMesh && (a.bindMode = this.bindMode, a.bindMatrix = this.bindMatrix.toArray(), this.skeleton !== void 0 && (n(t.skeletons, this.skeleton), a.skeleton = this.skeleton.uuid)), this.material !== void 0) if (Array.isArray(this.material)) {
      let o = [];
      for (let l = 0, c = this.material.length; l < c; l++) o.push(n(t.materials, this.material[l]));
      a.material = o;
    } else a.material = n(t.materials, this.material);
    if (this.children.length > 0) {
      a.children = [];
      for (let o = 0; o < this.children.length; o++) a.children.push(this.children[o].toJSON(t).object);
    }
    if (this.animations.length > 0) {
      a.animations = [];
      for (let o = 0; o < this.animations.length; o++) {
        let l = this.animations[o];
        a.animations.push(n(t.animations, l));
      }
    }
    if (i) {
      let o = s(t.geometries), l = s(t.materials), c = s(t.textures), u = s(t.images), h = s(t.shapes), d = s(t.skeletons), m = s(t.animations), x = s(t.nodes);
      o.length > 0 && (r.geometries = o), l.length > 0 && (r.materials = l), c.length > 0 && (r.textures = c), u.length > 0 && (r.images = u), h.length > 0 && (r.shapes = h), d.length > 0 && (r.skeletons = d), m.length > 0 && (r.animations = m), x.length > 0 && (r.nodes = x);
    }
    return r.object = a, r;
    function s(o) {
      let l = [];
      for (let c in o) {
        let u = o[c];
        delete u.metadata, l.push(u);
      }
      return l;
    }
  }
  clone(t) {
    return new this.constructor().copy(this, t);
  }
  copy(t, i = !0) {
    if (this.name = t.name, this.up.copy(t.up), this.position.copy(t.position), this.rotation.order = t.rotation.order, this.quaternion.copy(t.quaternion), this.scale.copy(t.scale), this.matrix.copy(t.matrix), this.matrixWorld.copy(t.matrixWorld), this.matrixAutoUpdate = t.matrixAutoUpdate, this.matrixWorldAutoUpdate = t.matrixWorldAutoUpdate, this.matrixWorldNeedsUpdate = t.matrixWorldNeedsUpdate, this.layers.mask = t.layers.mask, this.visible = t.visible, this.castShadow = t.castShadow, this.receiveShadow = t.receiveShadow, this.frustumCulled = t.frustumCulled, this.renderOrder = t.renderOrder, this.animations = t.animations.slice(), this.userData = JSON.parse(JSON.stringify(t.userData)), i === !0) for (let r = 0; r < t.children.length; r++) {
      let a = t.children[r];
      this.add(a.clone());
    }
    return this;
  }
};
Wt.DEFAULT_UP = new F(0, 1, 0), Wt.DEFAULT_MATRIX_AUTO_UPDATE = !0, Wt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE = !0;
var It = new F(), Kt = new F(), Sa = new F(), Zt = new F(), Oi = new F(), Fi = new F(), wn = new F(), Ma = new F(), Ea = new F(), ba = new F(), Ta = new st(), wa = new st(), Aa = new st(), rr = class Vi {
  constructor(t = new F(), i = new F(), r = new F()) {
    this.a = t, this.b = i, this.c = r;
  }
  static getNormal(t, i, r, a) {
    a.subVectors(r, i), It.subVectors(t, i), a.cross(It);
    let n = a.lengthSq();
    return n > 0 ? a.multiplyScalar(1 / Math.sqrt(n)) : a.set(0, 0, 0);
  }
  static getBarycoord(t, i, r, a, n) {
    It.subVectors(a, i), Kt.subVectors(r, i), Sa.subVectors(t, i);
    let s = It.dot(It), o = It.dot(Kt), l = It.dot(Sa), c = Kt.dot(Kt), u = Kt.dot(Sa), h = s * c - o * o;
    if (h === 0) return n.set(0, 0, 0), null;
    let d = 1 / h, m = (c * l - o * u) * d, x = (s * u - o * l) * d;
    return n.set(1 - m - x, x, m);
  }
  static containsPoint(t, i, r, a) {
    return this.getBarycoord(t, i, r, a, Zt) !== null && Zt.x >= 0 && Zt.y >= 0 && Zt.x + Zt.y <= 1;
  }
  static getInterpolation(t, i, r, a, n, s, o, l) {
    return this.getBarycoord(t, i, r, a, Zt) === null ? (l.x = 0, l.y = 0, "z" in l && (l.z = 0), "w" in l && (l.w = 0), null) : (l.setScalar(0), l.addScaledVector(n, Zt.x), l.addScaledVector(s, Zt.y), l.addScaledVector(o, Zt.z), l);
  }
  static getInterpolatedAttribute(t, i, r, a, n, s) {
    return Ta.setScalar(0), wa.setScalar(0), Aa.setScalar(0), Ta.fromBufferAttribute(t, i), wa.fromBufferAttribute(t, r), Aa.fromBufferAttribute(t, a), s.setScalar(0), s.addScaledVector(Ta, n.x), s.addScaledVector(wa, n.y), s.addScaledVector(Aa, n.z), s;
  }
  static isFrontFacing(t, i, r, a) {
    return It.subVectors(r, i), Kt.subVectors(t, i), It.cross(Kt).dot(a) < 0;
  }
  set(t, i, r) {
    return this.a.copy(t), this.b.copy(i), this.c.copy(r), this;
  }
  setFromPointsAndIndices(t, i, r, a) {
    return this.a.copy(t[i]), this.b.copy(t[r]), this.c.copy(t[a]), this;
  }
  setFromAttributeAndIndices(t, i, r, a) {
    return this.a.fromBufferAttribute(t, i), this.b.fromBufferAttribute(t, r), this.c.fromBufferAttribute(t, a), this;
  }
  clone() {
    return new this.constructor().copy(this);
  }
  copy(t) {
    return this.a.copy(t.a), this.b.copy(t.b), this.c.copy(t.c), this;
  }
  getArea() {
    return It.subVectors(this.c, this.b), Kt.subVectors(this.a, this.b), It.cross(Kt).length() * 0.5;
  }
  getMidpoint(t) {
    return t.addVectors(this.a, this.b).add(this.c).multiplyScalar(1 / 3);
  }
  getNormal(t) {
    return Vi.getNormal(this.a, this.b, this.c, t);
  }
  getPlane(t) {
    return t.setFromCoplanarPoints(this.a, this.b, this.c);
  }
  getBarycoord(t, i) {
    return Vi.getBarycoord(t, this.a, this.b, this.c, i);
  }
  getInterpolation(t, i, r, a, n) {
    return Vi.getInterpolation(t, this.a, this.b, this.c, i, r, a, n);
  }
  containsPoint(t) {
    return Vi.containsPoint(t, this.a, this.b, this.c);
  }
  isFrontFacing(t) {
    return Vi.isFrontFacing(this.a, this.b, this.c, t);
  }
  intersectsBox(t) {
    return t.intersectsTriangle(this);
  }
  closestPointToPoint(t, i) {
    let r = this.a, a = this.b, n = this.c, s, o;
    Oi.subVectors(a, r), Fi.subVectors(n, r), Ma.subVectors(t, r);
    let l = Oi.dot(Ma), c = Fi.dot(Ma);
    if (l <= 0 && c <= 0) return i.copy(r);
    Ea.subVectors(t, a);
    let u = Oi.dot(Ea), h = Fi.dot(Ea);
    if (u >= 0 && h <= u) return i.copy(a);
    let d = l * h - u * c;
    if (d <= 0 && l >= 0 && u <= 0) return s = l / (l - u), i.copy(r).addScaledVector(Oi, s);
    ba.subVectors(t, n);
    let m = Oi.dot(ba), x = Fi.dot(ba);
    if (x >= 0 && m <= x) return i.copy(n);
    let _ = m * c - l * x;
    if (_ <= 0 && c >= 0 && x <= 0) return o = c / (c - x), i.copy(r).addScaledVector(Fi, o);
    let f = u * x - m * h;
    if (f <= 0 && h - u >= 0 && m - x >= 0) return wn.subVectors(n, a), o = (h - u) / (h - u + (m - x)), i.copy(a).addScaledVector(wn, o);
    let p = 1 / (f + _ + d);
    return s = _ * p, o = d * p, i.copy(r).addScaledVector(Oi, s).addScaledVector(Fi, o);
  }
  equals(t) {
    return t.a.equals(this.a) && t.b.equals(this.b) && t.c.equals(this.c);
  }
}, Cs = { aliceblue: 15792383, antiquewhite: 16444375, aqua: 65535, aquamarine: 8388564, azure: 15794175, beige: 16119260, bisque: 16770244, black: 0, blanchedalmond: 16772045, blue: 255, blueviolet: 9055202, brown: 10824234, burlywood: 14596231, cadetblue: 6266528, chartreuse: 8388352, chocolate: 13789470, coral: 16744272, cornflowerblue: 6591981, cornsilk: 16775388, crimson: 14423100, cyan: 65535, darkblue: 139, darkcyan: 35723, darkgoldenrod: 12092939, darkgray: 11119017, darkgreen: 25600, darkgrey: 11119017, darkkhaki: 12433259, darkmagenta: 9109643, darkolivegreen: 5597999, darkorange: 16747520, darkorchid: 10040012, darkred: 9109504, darksalmon: 15308410, darkseagreen: 9419919, darkslateblue: 4734347, darkslategray: 3100495, darkslategrey: 3100495, darkturquoise: 52945, darkviolet: 9699539, deeppink: 16716947, deepskyblue: 49151, dimgray: 6908265, dimgrey: 6908265, dodgerblue: 2003199, firebrick: 11674146, floralwhite: 16775920, forestgreen: 2263842, fuchsia: 16711935, gainsboro: 14474460, ghostwhite: 16316671, gold: 16766720, goldenrod: 14329120, gray: 8421504, green: 32768, greenyellow: 11403055, grey: 8421504, honeydew: 15794160, hotpink: 16738740, indianred: 13458524, indigo: 4915330, ivory: 16777200, khaki: 15787660, lavender: 15132410, lavenderblush: 16773365, lawngreen: 8190976, lemonchiffon: 16775885, lightblue: 11393254, lightcoral: 15761536, lightcyan: 14745599, lightgoldenrodyellow: 16448210, lightgray: 13882323, lightgreen: 9498256, lightgrey: 13882323, lightpink: 16758465, lightsalmon: 16752762, lightseagreen: 2142890, lightskyblue: 8900346, lightslategray: 7833753, lightslategrey: 7833753, lightsteelblue: 11584734, lightyellow: 16777184, lime: 65280, limegreen: 3329330, linen: 16445670, magenta: 16711935, maroon: 8388608, mediumaquamarine: 6737322, mediumblue: 205, mediumorchid: 12211667, mediumpurple: 9662683, mediumseagreen: 3978097, mediumslateblue: 8087790, mediumspringgreen: 64154, mediumturquoise: 4772300, mediumvioletred: 13047173, midnightblue: 1644912, mintcream: 16121850, mistyrose: 16770273, moccasin: 16770229, navajowhite: 16768685, navy: 128, oldlace: 16643558, olive: 8421376, olivedrab: 7048739, orange: 16753920, orangered: 16729344, orchid: 14315734, palegoldenrod: 15657130, palegreen: 10025880, paleturquoise: 11529966, palevioletred: 14381203, papayawhip: 16773077, peachpuff: 16767673, peru: 13468991, pink: 16761035, plum: 14524637, powderblue: 11591910, purple: 8388736, rebeccapurple: 6697881, red: 16711680, rosybrown: 12357519, royalblue: 4286945, saddlebrown: 9127187, salmon: 16416882, sandybrown: 16032864, seagreen: 3050327, seashell: 16774638, sienna: 10506797, silver: 12632256, skyblue: 8900331, slateblue: 6970061, slategray: 7372944, slategrey: 7372944, snow: 16775930, springgreen: 65407, steelblue: 4620980, tan: 13808780, teal: 32896, thistle: 14204888, tomato: 16737095, turquoise: 4251856, violet: 15631086, wheat: 16113331, white: 16777215, whitesmoke: 16119285, yellow: 16776960, yellowgreen: 10145074 }, ii = { h: 0, s: 0, l: 0 }, Cr = { h: 0, s: 0, l: 0 };
function Ra(e, t, i) {
  return i < 0 && (i += 1), i > 1 && --i, i < 1 / 6 ? e + (t - e) * 6 * i : i < 1 / 2 ? t : i < 2 / 3 ? e + (t - e) * 6 * (2 / 3 - i) : e;
}
var He = class {
  constructor(e, t, i) {
    return this.isColor = !0, this.r = 1, this.g = 1, this.b = 1, this.set(e, t, i);
  }
  set(e, t, i) {
    if (t === void 0 && i === void 0) {
      let r = e;
      r && r.isColor ? this.copy(r) : typeof r == "number" ? this.setHex(r) : typeof r == "string" && this.setStyle(r);
    } else this.setRGB(e, t, i);
    return this;
  }
  setScalar(e) {
    return this.r = e, this.g = e, this.b = e, this;
  }
  setHex(e, t = Nt) {
    return e = Math.floor(e), this.r = (e >> 16 & 255) / 255, this.g = (e >> 8 & 255) / 255, this.b = (e & 255) / 255, We.colorSpaceToWorking(this, t), this;
  }
  setRGB(e, t, i, r = We.workingColorSpace) {
    return this.r = e, this.g = t, this.b = i, We.colorSpaceToWorking(this, r), this;
  }
  setHSL(e, t, i, r = We.workingColorSpace) {
    if (e = vl(e, 1), t = Be(t, 0, 1), i = Be(i, 0, 1), t === 0) this.r = this.g = this.b = i;
    else {
      let a = i <= 0.5 ? i * (1 + t) : i + t - i * t, n = 2 * i - a;
      this.r = Ra(n, a, e + 1 / 3), this.g = Ra(n, a, e), this.b = Ra(n, a, e - 1 / 3);
    }
    return We.colorSpaceToWorking(this, r), this;
  }
  setStyle(e, t = Nt) {
    function i(a) {
      a !== void 0 && parseFloat(a) < 1 && console.warn("THREE.Color: Alpha component of " + e + " will be ignored.");
    }
    let r;
    if (r = /^(\w+)\(([^\)]*)\)/.exec(e)) {
      let a, n = r[1], s = r[2];
      switch (n) {
        case "rgb":
        case "rgba":
          if (a = /^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(s)) return i(a[4]), this.setRGB(Math.min(255, parseInt(a[1], 10)) / 255, Math.min(255, parseInt(a[2], 10)) / 255, Math.min(255, parseInt(a[3], 10)) / 255, t);
          if (a = /^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(s)) return i(a[4]), this.setRGB(Math.min(100, parseInt(a[1], 10)) / 100, Math.min(100, parseInt(a[2], 10)) / 100, Math.min(100, parseInt(a[3], 10)) / 100, t);
          break;
        case "hsl":
        case "hsla":
          if (a = /^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(s)) return i(a[4]), this.setHSL(parseFloat(a[1]) / 360, parseFloat(a[2]) / 100, parseFloat(a[3]) / 100, t);
          break;
        default:
          console.warn("THREE.Color: Unknown color model " + e);
      }
    } else if (r = /^\#([A-Fa-f\d]+)$/.exec(e)) {
      let a = r[1], n = a.length;
      if (n === 3) return this.setRGB(parseInt(a.charAt(0), 16) / 15, parseInt(a.charAt(1), 16) / 15, parseInt(a.charAt(2), 16) / 15, t);
      if (n === 6) return this.setHex(parseInt(a, 16), t);
      console.warn("THREE.Color: Invalid hex color " + e);
    } else if (e && e.length > 0) return this.setColorName(e, t);
    return this;
  }
  setColorName(e, t = Nt) {
    let i = Cs[e.toLowerCase()];
    return i === void 0 ? console.warn("THREE.Color: Unknown color " + e) : this.setHex(i, t), this;
  }
  clone() {
    return new this.constructor(this.r, this.g, this.b);
  }
  copy(e) {
    return this.r = e.r, this.g = e.g, this.b = e.b, this;
  }
  copySRGBToLinear(e) {
    return this.r = Jt(e.r), this.g = Jt(e.g), this.b = Jt(e.b), this;
  }
  copyLinearToSRGB(e) {
    return this.r = qi(e.r), this.g = qi(e.g), this.b = qi(e.b), this;
  }
  convertSRGBToLinear() {
    return this.copySRGBToLinear(this), this;
  }
  convertLinearToSRGB() {
    return this.copyLinearToSRGB(this), this;
  }
  getHex(e = Nt) {
    return We.workingToColorSpace(_t.copy(this), e), Math.round(Be(_t.r * 255, 0, 255)) * 65536 + Math.round(Be(_t.g * 255, 0, 255)) * 256 + Math.round(Be(_t.b * 255, 0, 255));
  }
  getHexString(e = Nt) {
    return ("000000" + this.getHex(e).toString(16)).slice(-6);
  }
  getHSL(e, t = We.workingColorSpace) {
    We.workingToColorSpace(_t.copy(this), t);
    let i = _t.r, r = _t.g, a = _t.b, n = Math.max(i, r, a), s = Math.min(i, r, a), o, l, c = (s + n) / 2;
    if (s === n) o = 0, l = 0;
    else {
      let u = n - s;
      switch (l = c <= 0.5 ? u / (n + s) : u / (2 - n - s), n) {
        case i:
          o = (r - a) / u + (r < a ? 6 : 0);
          break;
        case r:
          o = (a - i) / u + 2;
          break;
        case a:
          o = (i - r) / u + 4;
          break;
      }
      o /= 6;
    }
    return e.h = o, e.s = l, e.l = c, e;
  }
  getRGB(e, t = We.workingColorSpace) {
    return We.workingToColorSpace(_t.copy(this), t), e.r = _t.r, e.g = _t.g, e.b = _t.b, e;
  }
  getStyle(e = Nt) {
    We.workingToColorSpace(_t.copy(this), e);
    let t = _t.r, i = _t.g, r = _t.b;
    return e === "srgb" ? `rgb(${Math.round(t * 255)},${Math.round(i * 255)},${Math.round(r * 255)})` : `color(${e} ${t.toFixed(3)} ${i.toFixed(3)} ${r.toFixed(3)})`;
  }
  offsetHSL(e, t, i) {
    return this.getHSL(ii), this.setHSL(ii.h + e, ii.s + t, ii.l + i);
  }
  add(e) {
    return this.r += e.r, this.g += e.g, this.b += e.b, this;
  }
  addColors(e, t) {
    return this.r = e.r + t.r, this.g = e.g + t.g, this.b = e.b + t.b, this;
  }
  addScalar(e) {
    return this.r += e, this.g += e, this.b += e, this;
  }
  sub(e) {
    return this.r = Math.max(0, this.r - e.r), this.g = Math.max(0, this.g - e.g), this.b = Math.max(0, this.b - e.b), this;
  }
  multiply(e) {
    return this.r *= e.r, this.g *= e.g, this.b *= e.b, this;
  }
  multiplyScalar(e) {
    return this.r *= e, this.g *= e, this.b *= e, this;
  }
  lerp(e, t) {
    return this.r += (e.r - this.r) * t, this.g += (e.g - this.g) * t, this.b += (e.b - this.b) * t, this;
  }
  lerpColors(e, t, i) {
    return this.r = e.r + (t.r - e.r) * i, this.g = e.g + (t.g - e.g) * i, this.b = e.b + (t.b - e.b) * i, this;
  }
  lerpHSL(e, t) {
    this.getHSL(ii), e.getHSL(Cr);
    let i = ua(ii.h, Cr.h, t), r = ua(ii.s, Cr.s, t), a = ua(ii.l, Cr.l, t);
    return this.setHSL(i, r, a), this;
  }
  setFromVector3(e) {
    return this.r = e.x, this.g = e.y, this.b = e.z, this;
  }
  applyMatrix3(e) {
    let t = this.r, i = this.g, r = this.b, a = e.elements;
    return this.r = a[0] * t + a[3] * i + a[6] * r, this.g = a[1] * t + a[4] * i + a[7] * r, this.b = a[2] * t + a[5] * i + a[8] * r, this;
  }
  equals(e) {
    return e.r === this.r && e.g === this.g && e.b === this.b;
  }
  fromArray(e, t = 0) {
    return this.r = e[t], this.g = e[t + 1], this.b = e[t + 2], this;
  }
  toArray(e = [], t = 0) {
    return e[t] = this.r, e[t + 1] = this.g, e[t + 2] = this.b, e;
  }
  fromBufferAttribute(e, t) {
    return this.r = e.getX(t), this.g = e.getY(t), this.b = e.getZ(t), this;
  }
  toJSON() {
    return this.getHex();
  }
  *[Symbol.iterator]() {
    yield this.r, yield this.g, yield this.b;
  }
}, _t = new He();
He.NAMES = Cs;
var Il = 0, xr = class extends Zi {
  constructor() {
    super(), this.isMaterial = !0, Object.defineProperty(this, "id", { value: Il++ }), this.uuid = gr(), this.name = "", this.type = "Material", this.blending = 1, this.side = 0, this.vertexColors = !1, this.opacity = 1, this.transparent = !1, this.alphaHash = !1, this.blendSrc = 204, this.blendDst = 205, this.blendEquation = 100, this.blendSrcAlpha = null, this.blendDstAlpha = null, this.blendEquationAlpha = null, this.blendColor = new He(0, 0, 0), this.blendAlpha = 0, this.depthFunc = 3, this.depthTest = !0, this.depthWrite = !0, this.stencilWriteMask = 255, this.stencilFunc = 519, this.stencilRef = 0, this.stencilFuncMask = 255, this.stencilFail = la, this.stencilZFail = la, this.stencilZPass = la, this.stencilWrite = !1, this.clippingPlanes = null, this.clipIntersection = !1, this.clipShadows = !1, this.shadowSide = null, this.colorWrite = !0, this.precision = null, this.polygonOffset = !1, this.polygonOffsetFactor = 0, this.polygonOffsetUnits = 0, this.dithering = !1, this.alphaToCoverage = !1, this.premultipliedAlpha = !1, this.forceSinglePass = !1, this.allowOverride = !0, this.visible = !0, this.toneMapped = !0, this.userData = {}, this.version = 0, this._alphaTest = 0;
  }
  get alphaTest() {
    return this._alphaTest;
  }
  set alphaTest(e) {
    this._alphaTest > 0 != e > 0 && this.version++, this._alphaTest = e;
  }
  onBeforeRender() {
  }
  onBeforeCompile() {
  }
  customProgramCacheKey() {
    return this.onBeforeCompile.toString();
  }
  setValues(e) {
    if (e !== void 0) for (let t in e) {
      let i = e[t];
      if (i === void 0) {
        console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);
        continue;
      }
      let r = this[t];
      if (r === void 0) {
        console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);
        continue;
      }
      r && r.isColor ? r.set(i) : r && r.isVector3 && i && i.isVector3 ? r.copy(i) : this[t] = i;
    }
  }
  toJSON(e) {
    let t = e === void 0 || typeof e == "string";
    t && (e = { textures: {}, images: {} });
    let i = { metadata: { version: 4.7, type: "Material", generator: "Material.toJSON" } };
    i.uuid = this.uuid, i.type = this.type, this.name !== "" && (i.name = this.name), this.color && this.color.isColor && (i.color = this.color.getHex()), this.roughness !== void 0 && (i.roughness = this.roughness), this.metalness !== void 0 && (i.metalness = this.metalness), this.sheen !== void 0 && (i.sheen = this.sheen), this.sheenColor && this.sheenColor.isColor && (i.sheenColor = this.sheenColor.getHex()), this.sheenRoughness !== void 0 && (i.sheenRoughness = this.sheenRoughness), this.emissive && this.emissive.isColor && (i.emissive = this.emissive.getHex()), this.emissiveIntensity !== void 0 && this.emissiveIntensity !== 1 && (i.emissiveIntensity = this.emissiveIntensity), this.specular && this.specular.isColor && (i.specular = this.specular.getHex()), this.specularIntensity !== void 0 && (i.specularIntensity = this.specularIntensity), this.specularColor && this.specularColor.isColor && (i.specularColor = this.specularColor.getHex()), this.shininess !== void 0 && (i.shininess = this.shininess), this.clearcoat !== void 0 && (i.clearcoat = this.clearcoat), this.clearcoatRoughness !== void 0 && (i.clearcoatRoughness = this.clearcoatRoughness), this.clearcoatMap && this.clearcoatMap.isTexture && (i.clearcoatMap = this.clearcoatMap.toJSON(e).uuid), this.clearcoatRoughnessMap && this.clearcoatRoughnessMap.isTexture && (i.clearcoatRoughnessMap = this.clearcoatRoughnessMap.toJSON(e).uuid), this.clearcoatNormalMap && this.clearcoatNormalMap.isTexture && (i.clearcoatNormalMap = this.clearcoatNormalMap.toJSON(e).uuid, i.clearcoatNormalScale = this.clearcoatNormalScale.toArray()), this.sheenColorMap && this.sheenColorMap.isTexture && (i.sheenColorMap = this.sheenColorMap.toJSON(e).uuid), this.sheenRoughnessMap && this.sheenRoughnessMap.isTexture && (i.sheenRoughnessMap = this.sheenRoughnessMap.toJSON(e).uuid), this.dispersion !== void 0 && (i.dispersion = this.dispersion), this.iridescence !== void 0 && (i.iridescence = this.iridescence), this.iridescenceIOR !== void 0 && (i.iridescenceIOR = this.iridescenceIOR), this.iridescenceThicknessRange !== void 0 && (i.iridescenceThicknessRange = this.iridescenceThicknessRange), this.iridescenceMap && this.iridescenceMap.isTexture && (i.iridescenceMap = this.iridescenceMap.toJSON(e).uuid), this.iridescenceThicknessMap && this.iridescenceThicknessMap.isTexture && (i.iridescenceThicknessMap = this.iridescenceThicknessMap.toJSON(e).uuid), this.anisotropy !== void 0 && (i.anisotropy = this.anisotropy), this.anisotropyRotation !== void 0 && (i.anisotropyRotation = this.anisotropyRotation), this.anisotropyMap && this.anisotropyMap.isTexture && (i.anisotropyMap = this.anisotropyMap.toJSON(e).uuid), this.map && this.map.isTexture && (i.map = this.map.toJSON(e).uuid), this.matcap && this.matcap.isTexture && (i.matcap = this.matcap.toJSON(e).uuid), this.alphaMap && this.alphaMap.isTexture && (i.alphaMap = this.alphaMap.toJSON(e).uuid), this.lightMap && this.lightMap.isTexture && (i.lightMap = this.lightMap.toJSON(e).uuid, i.lightMapIntensity = this.lightMapIntensity), this.aoMap && this.aoMap.isTexture && (i.aoMap = this.aoMap.toJSON(e).uuid, i.aoMapIntensity = this.aoMapIntensity), this.bumpMap && this.bumpMap.isTexture && (i.bumpMap = this.bumpMap.toJSON(e).uuid, i.bumpScale = this.bumpScale), this.normalMap && this.normalMap.isTexture && (i.normalMap = this.normalMap.toJSON(e).uuid, i.normalMapType = this.normalMapType, i.normalScale = this.normalScale.toArray()), this.displacementMap && this.displacementMap.isTexture && (i.displacementMap = this.displacementMap.toJSON(e).uuid, i.displacementScale = this.displacementScale, i.displacementBias = this.displacementBias), this.roughnessMap && this.roughnessMap.isTexture && (i.roughnessMap = this.roughnessMap.toJSON(e).uuid), this.metalnessMap && this.metalnessMap.isTexture && (i.metalnessMap = this.metalnessMap.toJSON(e).uuid), this.emissiveMap && this.emissiveMap.isTexture && (i.emissiveMap = this.emissiveMap.toJSON(e).uuid), this.specularMap && this.specularMap.isTexture && (i.specularMap = this.specularMap.toJSON(e).uuid), this.specularIntensityMap && this.specularIntensityMap.isTexture && (i.specularIntensityMap = this.specularIntensityMap.toJSON(e).uuid), this.specularColorMap && this.specularColorMap.isTexture && (i.specularColorMap = this.specularColorMap.toJSON(e).uuid), this.envMap && this.envMap.isTexture && (i.envMap = this.envMap.toJSON(e).uuid, this.combine !== void 0 && (i.combine = this.combine)), this.envMapRotation !== void 0 && (i.envMapRotation = this.envMapRotation.toArray()), this.envMapIntensity !== void 0 && (i.envMapIntensity = this.envMapIntensity), this.reflectivity !== void 0 && (i.reflectivity = this.reflectivity), this.refractionRatio !== void 0 && (i.refractionRatio = this.refractionRatio), this.gradientMap && this.gradientMap.isTexture && (i.gradientMap = this.gradientMap.toJSON(e).uuid), this.transmission !== void 0 && (i.transmission = this.transmission), this.transmissionMap && this.transmissionMap.isTexture && (i.transmissionMap = this.transmissionMap.toJSON(e).uuid), this.thickness !== void 0 && (i.thickness = this.thickness), this.thicknessMap && this.thicknessMap.isTexture && (i.thicknessMap = this.thicknessMap.toJSON(e).uuid), this.attenuationDistance !== void 0 && this.attenuationDistance !== 1 / 0 && (i.attenuationDistance = this.attenuationDistance), this.attenuationColor !== void 0 && (i.attenuationColor = this.attenuationColor.getHex()), this.size !== void 0 && (i.size = this.size), this.shadowSide !== null && (i.shadowSide = this.shadowSide), this.sizeAttenuation !== void 0 && (i.sizeAttenuation = this.sizeAttenuation), this.blending !== 1 && (i.blending = this.blending), this.side !== 0 && (i.side = this.side), this.vertexColors === !0 && (i.vertexColors = !0), this.opacity < 1 && (i.opacity = this.opacity), this.transparent === !0 && (i.transparent = !0), this.blendSrc !== 204 && (i.blendSrc = this.blendSrc), this.blendDst !== 205 && (i.blendDst = this.blendDst), this.blendEquation !== 100 && (i.blendEquation = this.blendEquation), this.blendSrcAlpha !== null && (i.blendSrcAlpha = this.blendSrcAlpha), this.blendDstAlpha !== null && (i.blendDstAlpha = this.blendDstAlpha), this.blendEquationAlpha !== null && (i.blendEquationAlpha = this.blendEquationAlpha), this.blendColor && this.blendColor.isColor && (i.blendColor = this.blendColor.getHex()), this.blendAlpha !== 0 && (i.blendAlpha = this.blendAlpha), this.depthFunc !== 3 && (i.depthFunc = this.depthFunc), this.depthTest === !1 && (i.depthTest = this.depthTest), this.depthWrite === !1 && (i.depthWrite = this.depthWrite), this.colorWrite === !1 && (i.colorWrite = this.colorWrite), this.stencilWriteMask !== 255 && (i.stencilWriteMask = this.stencilWriteMask), this.stencilFunc !== 519 && (i.stencilFunc = this.stencilFunc), this.stencilRef !== 0 && (i.stencilRef = this.stencilRef), this.stencilFuncMask !== 255 && (i.stencilFuncMask = this.stencilFuncMask), this.stencilFail !== 7680 && (i.stencilFail = this.stencilFail), this.stencilZFail !== 7680 && (i.stencilZFail = this.stencilZFail), this.stencilZPass !== 7680 && (i.stencilZPass = this.stencilZPass), this.stencilWrite === !0 && (i.stencilWrite = this.stencilWrite), this.rotation !== void 0 && this.rotation !== 0 && (i.rotation = this.rotation), this.polygonOffset === !0 && (i.polygonOffset = !0), this.polygonOffsetFactor !== 0 && (i.polygonOffsetFactor = this.polygonOffsetFactor), this.polygonOffsetUnits !== 0 && (i.polygonOffsetUnits = this.polygonOffsetUnits), this.linewidth !== void 0 && this.linewidth !== 1 && (i.linewidth = this.linewidth), this.dashSize !== void 0 && (i.dashSize = this.dashSize), this.gapSize !== void 0 && (i.gapSize = this.gapSize), this.scale !== void 0 && (i.scale = this.scale), this.dithering === !0 && (i.dithering = !0), this.alphaTest > 0 && (i.alphaTest = this.alphaTest), this.alphaHash === !0 && (i.alphaHash = !0), this.alphaToCoverage === !0 && (i.alphaToCoverage = !0), this.premultipliedAlpha === !0 && (i.premultipliedAlpha = !0), this.forceSinglePass === !0 && (i.forceSinglePass = !0), this.wireframe === !0 && (i.wireframe = !0), this.wireframeLinewidth > 1 && (i.wireframeLinewidth = this.wireframeLinewidth), this.wireframeLinecap !== "round" && (i.wireframeLinecap = this.wireframeLinecap), this.wireframeLinejoin !== "round" && (i.wireframeLinejoin = this.wireframeLinejoin), this.flatShading === !0 && (i.flatShading = !0), this.visible === !1 && (i.visible = !1), this.toneMapped === !1 && (i.toneMapped = !1), this.fog === !1 && (i.fog = !1), Object.keys(this.userData).length > 0 && (i.userData = this.userData);
    function r(a) {
      let n = [];
      for (let s in a) {
        let o = a[s];
        delete o.metadata, n.push(o);
      }
      return n;
    }
    if (t) {
      let a = r(e.textures), n = r(e.images);
      a.length > 0 && (i.textures = a), n.length > 0 && (i.images = n);
    }
    return i;
  }
  clone() {
    return new this.constructor().copy(this);
  }
  copy(e) {
    this.name = e.name, this.blending = e.blending, this.side = e.side, this.vertexColors = e.vertexColors, this.opacity = e.opacity, this.transparent = e.transparent, this.blendSrc = e.blendSrc, this.blendDst = e.blendDst, this.blendEquation = e.blendEquation, this.blendSrcAlpha = e.blendSrcAlpha, this.blendDstAlpha = e.blendDstAlpha, this.blendEquationAlpha = e.blendEquationAlpha, this.blendColor.copy(e.blendColor), this.blendAlpha = e.blendAlpha, this.depthFunc = e.depthFunc, this.depthTest = e.depthTest, this.depthWrite = e.depthWrite, this.stencilWriteMask = e.stencilWriteMask, this.stencilFunc = e.stencilFunc, this.stencilRef = e.stencilRef, this.stencilFuncMask = e.stencilFuncMask, this.stencilFail = e.stencilFail, this.stencilZFail = e.stencilZFail, this.stencilZPass = e.stencilZPass, this.stencilWrite = e.stencilWrite;
    let t = e.clippingPlanes, i = null;
    if (t !== null) {
      let r = t.length;
      i = Array(r);
      for (let a = 0; a !== r; ++a) i[a] = t[a].clone();
    }
    return this.clippingPlanes = i, this.clipIntersection = e.clipIntersection, this.clipShadows = e.clipShadows, this.shadowSide = e.shadowSide, this.colorWrite = e.colorWrite, this.precision = e.precision, this.polygonOffset = e.polygonOffset, this.polygonOffsetFactor = e.polygonOffsetFactor, this.polygonOffsetUnits = e.polygonOffsetUnits, this.dithering = e.dithering, this.alphaTest = e.alphaTest, this.alphaHash = e.alphaHash, this.alphaToCoverage = e.alphaToCoverage, this.premultipliedAlpha = e.premultipliedAlpha, this.forceSinglePass = e.forceSinglePass, this.visible = e.visible, this.toneMapped = e.toneMapped, this.userData = JSON.parse(JSON.stringify(e.userData)), this;
  }
  dispose() {
    this.dispatchEvent({ type: "dispose" });
  }
  set needsUpdate(e) {
    e === !0 && this.version++;
  }
}, sn = class extends xr {
  constructor(e) {
    super(), this.isMeshBasicMaterial = !0, this.type = "MeshBasicMaterial", this.color = new He(16777215), this.map = null, this.lightMap = null, this.lightMapIntensity = 1, this.aoMap = null, this.aoMapIntensity = 1, this.specularMap = null, this.alphaMap = null, this.envMap = null, this.envMapRotation = new bi(), this.combine = 0, this.reflectivity = 1, this.refractionRatio = 0.98, this.wireframe = !1, this.wireframeLinewidth = 1, this.wireframeLinecap = "round", this.wireframeLinejoin = "round", this.fog = !0, this.setValues(e);
  }
  copy(e) {
    return super.copy(e), this.color.copy(e.color), this.map = e.map, this.lightMap = e.lightMap, this.lightMapIntensity = e.lightMapIntensity, this.aoMap = e.aoMap, this.aoMapIntensity = e.aoMapIntensity, this.specularMap = e.specularMap, this.alphaMap = e.alphaMap, this.envMap = e.envMap, this.envMapRotation.copy(e.envMapRotation), this.combine = e.combine, this.reflectivity = e.reflectivity, this.refractionRatio = e.refractionRatio, this.wireframe = e.wireframe, this.wireframeLinewidth = e.wireframeLinewidth, this.wireframeLinecap = e.wireframeLinecap, this.wireframeLinejoin = e.wireframeLinejoin, this.fog = e.fog, this;
  }
}, nt = new F(), Pr = new ke(), Nl = 0, bt = class {
  constructor(e, t, i = !1) {
    if (Array.isArray(e)) throw TypeError("THREE.BufferAttribute: array should be a Typed Array.");
    this.isBufferAttribute = !0, Object.defineProperty(this, "id", { value: Nl++ }), this.name = "", this.array = e, this.itemSize = t, this.count = e === void 0 ? 0 : e.length / t, this.normalized = i, this.usage = _l, this.updateRanges = [], this.gpuType = ta, this.version = 0;
  }
  onUploadCallback() {
  }
  set needsUpdate(e) {
    e === !0 && this.version++;
  }
  setUsage(e) {
    return this.usage = e, this;
  }
  addUpdateRange(e, t) {
    this.updateRanges.push({ start: e, count: t });
  }
  clearUpdateRanges() {
    this.updateRanges.length = 0;
  }
  copy(e) {
    return this.name = e.name, this.array = new e.array.constructor(e.array), this.itemSize = e.itemSize, this.count = e.count, this.normalized = e.normalized, this.usage = e.usage, this.gpuType = e.gpuType, this;
  }
  copyAt(e, t, i) {
    e *= this.itemSize, i *= t.itemSize;
    for (let r = 0, a = this.itemSize; r < a; r++) this.array[e + r] = t.array[i + r];
    return this;
  }
  copyArray(e) {
    return this.array.set(e), this;
  }
  applyMatrix3(e) {
    if (this.itemSize === 2) for (let t = 0, i = this.count; t < i; t++) Pr.fromBufferAttribute(this, t), Pr.applyMatrix3(e), this.setXY(t, Pr.x, Pr.y);
    else if (this.itemSize === 3) for (let t = 0, i = this.count; t < i; t++) nt.fromBufferAttribute(this, t), nt.applyMatrix3(e), this.setXYZ(t, nt.x, nt.y, nt.z);
    return this;
  }
  applyMatrix4(e) {
    for (let t = 0, i = this.count; t < i; t++) nt.fromBufferAttribute(this, t), nt.applyMatrix4(e), this.setXYZ(t, nt.x, nt.y, nt.z);
    return this;
  }
  applyNormalMatrix(e) {
    for (let t = 0, i = this.count; t < i; t++) nt.fromBufferAttribute(this, t), nt.applyNormalMatrix(e), this.setXYZ(t, nt.x, nt.y, nt.z);
    return this;
  }
  transformDirection(e) {
    for (let t = 0, i = this.count; t < i; t++) nt.fromBufferAttribute(this, t), nt.transformDirection(e), this.setXYZ(t, nt.x, nt.y, nt.z);
    return this;
  }
  set(e, t = 0) {
    return this.array.set(e, t), this;
  }
  getComponent(e, t) {
    let i = this.array[e * this.itemSize + t];
    return this.normalized && (i = Qi(i, this.array)), i;
  }
  setComponent(e, t, i) {
    return this.normalized && (i = yt(i, this.array)), this.array[e * this.itemSize + t] = i, this;
  }
  getX(e) {
    let t = this.array[e * this.itemSize];
    return this.normalized && (t = Qi(t, this.array)), t;
  }
  setX(e, t) {
    return this.normalized && (t = yt(t, this.array)), this.array[e * this.itemSize] = t, this;
  }
  getY(e) {
    let t = this.array[e * this.itemSize + 1];
    return this.normalized && (t = Qi(t, this.array)), t;
  }
  setY(e, t) {
    return this.normalized && (t = yt(t, this.array)), this.array[e * this.itemSize + 1] = t, this;
  }
  getZ(e) {
    let t = this.array[e * this.itemSize + 2];
    return this.normalized && (t = Qi(t, this.array)), t;
  }
  setZ(e, t) {
    return this.normalized && (t = yt(t, this.array)), this.array[e * this.itemSize + 2] = t, this;
  }
  getW(e) {
    let t = this.array[e * this.itemSize + 3];
    return this.normalized && (t = Qi(t, this.array)), t;
  }
  setW(e, t) {
    return this.normalized && (t = yt(t, this.array)), this.array[e * this.itemSize + 3] = t, this;
  }
  setXY(e, t, i) {
    return e *= this.itemSize, this.normalized && (t = yt(t, this.array), i = yt(i, this.array)), this.array[e + 0] = t, this.array[e + 1] = i, this;
  }
  setXYZ(e, t, i, r) {
    return e *= this.itemSize, this.normalized && (t = yt(t, this.array), i = yt(i, this.array), r = yt(r, this.array)), this.array[e + 0] = t, this.array[e + 1] = i, this.array[e + 2] = r, this;
  }
  setXYZW(e, t, i, r, a) {
    return e *= this.itemSize, this.normalized && (t = yt(t, this.array), i = yt(i, this.array), r = yt(r, this.array), a = yt(a, this.array)), this.array[e + 0] = t, this.array[e + 1] = i, this.array[e + 2] = r, this.array[e + 3] = a, this;
  }
  onUpload(e) {
    return this.onUploadCallback = e, this;
  }
  clone() {
    return new this.constructor(this.array, this.itemSize).copy(this);
  }
  toJSON() {
    let e = { itemSize: this.itemSize, type: this.array.constructor.name, array: Array.from(this.array), normalized: this.normalized };
    return this.name !== "" && (e.name = this.name), this.usage !== 35044 && (e.usage = this.usage), e;
  }
}, Ps = class extends bt {
  constructor(e, t, i) {
    super(new Uint16Array(e), t, i);
  }
}, Ds = class extends bt {
  constructor(e, t, i) {
    super(new Uint32Array(e), t, i);
  }
}, Si = class extends bt {
  constructor(e, t, i) {
    super(new Float32Array(e), t, i);
  }
}, Ol = 0, Rt = new dt(), Ca = new Wt(), Bi = new F(), Et = new vr(), ar = new vr(), ut = new F(), wi = class Ls extends Zi {
  constructor() {
    super(), this.isBufferGeometry = !0, Object.defineProperty(this, "id", { value: Ol++ }), this.uuid = gr(), this.name = "", this.type = "BufferGeometry", this.index = null, this.indirect = null, this.attributes = {}, this.morphAttributes = {}, this.morphTargetsRelative = !1, this.groups = [], this.boundingBox = null, this.boundingSphere = null, this.drawRange = { start: 0, count: 1 / 0 }, this.userData = {};
  }
  getIndex() {
    return this.index;
  }
  setIndex(t) {
    return Array.isArray(t) ? this.index = new (Ts(t) ? Ds : Ps)(t, 1) : this.index = t, this;
  }
  setIndirect(t) {
    return this.indirect = t, this;
  }
  getIndirect() {
    return this.indirect;
  }
  getAttribute(t) {
    return this.attributes[t];
  }
  setAttribute(t, i) {
    return this.attributes[t] = i, this;
  }
  deleteAttribute(t) {
    return delete this.attributes[t], this;
  }
  hasAttribute(t) {
    return this.attributes[t] !== void 0;
  }
  addGroup(t, i, r = 0) {
    this.groups.push({ start: t, count: i, materialIndex: r });
  }
  clearGroups() {
    this.groups = [];
  }
  setDrawRange(t, i) {
    this.drawRange.start = t, this.drawRange.count = i;
  }
  applyMatrix4(t) {
    let i = this.attributes.position;
    i !== void 0 && (i.applyMatrix4(t), i.needsUpdate = !0);
    let r = this.attributes.normal;
    if (r !== void 0) {
      let n = new Ne().getNormalMatrix(t);
      r.applyNormalMatrix(n), r.needsUpdate = !0;
    }
    let a = this.attributes.tangent;
    return a !== void 0 && (a.transformDirection(t), a.needsUpdate = !0), this.boundingBox !== null && this.computeBoundingBox(), this.boundingSphere !== null && this.computeBoundingSphere(), this;
  }
  applyQuaternion(t) {
    return Rt.makeRotationFromQuaternion(t), this.applyMatrix4(Rt), this;
  }
  rotateX(t) {
    return Rt.makeRotationX(t), this.applyMatrix4(Rt), this;
  }
  rotateY(t) {
    return Rt.makeRotationY(t), this.applyMatrix4(Rt), this;
  }
  rotateZ(t) {
    return Rt.makeRotationZ(t), this.applyMatrix4(Rt), this;
  }
  translate(t, i, r) {
    return Rt.makeTranslation(t, i, r), this.applyMatrix4(Rt), this;
  }
  scale(t, i, r) {
    return Rt.makeScale(t, i, r), this.applyMatrix4(Rt), this;
  }
  lookAt(t) {
    return Ca.lookAt(t), Ca.updateMatrix(), this.applyMatrix4(Ca.matrix), this;
  }
  center() {
    return this.computeBoundingBox(), this.boundingBox.getCenter(Bi).negate(), this.translate(Bi.x, Bi.y, Bi.z), this;
  }
  setFromPoints(t) {
    let i = this.getAttribute("position");
    if (i === void 0) {
      let r = [];
      for (let a = 0, n = t.length; a < n; a++) {
        let s = t[a];
        r.push(s.x, s.y, s.z || 0);
      }
      this.setAttribute("position", new Si(r, 3));
    } else {
      let r = Math.min(t.length, i.count);
      for (let a = 0; a < r; a++) {
        let n = t[a];
        i.setXYZ(a, n.x, n.y, n.z || 0);
      }
      t.length > i.count && console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."), i.needsUpdate = !0;
    }
    return this;
  }
  computeBoundingBox() {
    this.boundingBox === null && (this.boundingBox = new vr());
    let t = this.attributes.position, i = this.morphAttributes.position;
    if (t && t.isGLBufferAttribute) {
      console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.", this), this.boundingBox.set(new F(-1 / 0, -1 / 0, -1 / 0), new F(1 / 0, 1 / 0, 1 / 0));
      return;
    }
    if (t !== void 0) {
      if (this.boundingBox.setFromBufferAttribute(t), i) for (let r = 0, a = i.length; r < a; r++) {
        let n = i[r];
        Et.setFromBufferAttribute(n), this.morphTargetsRelative ? (ut.addVectors(this.boundingBox.min, Et.min), this.boundingBox.expandByPoint(ut), ut.addVectors(this.boundingBox.max, Et.max), this.boundingBox.expandByPoint(ut)) : (this.boundingBox.expandByPoint(Et.min), this.boundingBox.expandByPoint(Et.max));
      }
    } else this.boundingBox.makeEmpty();
    (isNaN(this.boundingBox.min.x) || isNaN(this.boundingBox.min.y) || isNaN(this.boundingBox.min.z)) && console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.', this);
  }
  computeBoundingSphere() {
    this.boundingSphere === null && (this.boundingSphere = new ra());
    let t = this.attributes.position, i = this.morphAttributes.position;
    if (t && t.isGLBufferAttribute) {
      console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.", this), this.boundingSphere.set(new F(), 1 / 0);
      return;
    }
    if (t) {
      let r = this.boundingSphere.center;
      if (Et.setFromBufferAttribute(t), i) for (let n = 0, s = i.length; n < s; n++) {
        let o = i[n];
        ar.setFromBufferAttribute(o), this.morphTargetsRelative ? (ut.addVectors(Et.min, ar.min), Et.expandByPoint(ut), ut.addVectors(Et.max, ar.max), Et.expandByPoint(ut)) : (Et.expandByPoint(ar.min), Et.expandByPoint(ar.max));
      }
      Et.getCenter(r);
      let a = 0;
      for (let n = 0, s = t.count; n < s; n++) ut.fromBufferAttribute(t, n), a = Math.max(a, r.distanceToSquared(ut));
      if (i) for (let n = 0, s = i.length; n < s; n++) {
        let o = i[n], l = this.morphTargetsRelative;
        for (let c = 0, u = o.count; c < u; c++) ut.fromBufferAttribute(o, c), l && (Bi.fromBufferAttribute(t, c), ut.add(Bi)), a = Math.max(a, r.distanceToSquared(ut));
      }
      this.boundingSphere.radius = Math.sqrt(a), isNaN(this.boundingSphere.radius) && console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.', this);
    }
  }
  computeTangents() {
    let t = this.index, i = this.attributes;
    if (t === null || i.position === void 0 || i.normal === void 0 || i.uv === void 0) {
      console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");
      return;
    }
    let r = i.position, a = i.normal, n = i.uv;
    this.hasAttribute("tangent") === !1 && this.setAttribute("tangent", new bt(new Float32Array(4 * r.count), 4));
    let s = this.getAttribute("tangent"), o = [], l = [];
    for (let z = 0; z < r.count; z++) o[z] = new F(), l[z] = new F();
    let c = new F(), u = new F(), h = new F(), d = new ke(), m = new ke(), x = new ke(), _ = new F(), f = new F();
    function p(z, M, S) {
      c.fromBufferAttribute(r, z), u.fromBufferAttribute(r, M), h.fromBufferAttribute(r, S), d.fromBufferAttribute(n, z), m.fromBufferAttribute(n, M), x.fromBufferAttribute(n, S), u.sub(c), h.sub(c), m.sub(d), x.sub(d);
      let w = 1 / (m.x * x.y - x.x * m.y);
      isFinite(w) && (_.copy(u).multiplyScalar(x.y).addScaledVector(h, -m.y).multiplyScalar(w), f.copy(h).multiplyScalar(m.x).addScaledVector(u, -x.x).multiplyScalar(w), o[z].add(_), o[M].add(_), o[S].add(_), l[z].add(f), l[M].add(f), l[S].add(f));
    }
    let R = this.groups;
    R.length === 0 && (R = [{ start: 0, count: t.count }]);
    for (let z = 0, M = R.length; z < M; ++z) {
      let S = R[z], w = S.start, W = S.count;
      for (let V = w, k = w + W; V < k; V += 3) p(t.getX(V + 0), t.getX(V + 1), t.getX(V + 2));
    }
    let y = new F(), A = new F(), I = new F(), L = new F();
    function D(z) {
      I.fromBufferAttribute(a, z), L.copy(I);
      let M = o[z];
      y.copy(M), y.sub(I.multiplyScalar(I.dot(M))).normalize(), A.crossVectors(L, M);
      let S = A.dot(l[z]) < 0 ? -1 : 1;
      s.setXYZW(z, y.x, y.y, y.z, S);
    }
    for (let z = 0, M = R.length; z < M; ++z) {
      let S = R[z], w = S.start, W = S.count;
      for (let V = w, k = w + W; V < k; V += 3) D(t.getX(V + 0)), D(t.getX(V + 1)), D(t.getX(V + 2));
    }
  }
  computeVertexNormals() {
    let t = this.index, i = this.getAttribute("position");
    if (i !== void 0) {
      let r = this.getAttribute("normal");
      if (r === void 0) r = new bt(new Float32Array(i.count * 3), 3), this.setAttribute("normal", r);
      else for (let d = 0, m = r.count; d < m; d++) r.setXYZ(d, 0, 0, 0);
      let a = new F(), n = new F(), s = new F(), o = new F(), l = new F(), c = new F(), u = new F(), h = new F();
      if (t) for (let d = 0, m = t.count; d < m; d += 3) {
        let x = t.getX(d + 0), _ = t.getX(d + 1), f = t.getX(d + 2);
        a.fromBufferAttribute(i, x), n.fromBufferAttribute(i, _), s.fromBufferAttribute(i, f), u.subVectors(s, n), h.subVectors(a, n), u.cross(h), o.fromBufferAttribute(r, x), l.fromBufferAttribute(r, _), c.fromBufferAttribute(r, f), o.add(u), l.add(u), c.add(u), r.setXYZ(x, o.x, o.y, o.z), r.setXYZ(_, l.x, l.y, l.z), r.setXYZ(f, c.x, c.y, c.z);
      }
      else for (let d = 0, m = i.count; d < m; d += 3) a.fromBufferAttribute(i, d + 0), n.fromBufferAttribute(i, d + 1), s.fromBufferAttribute(i, d + 2), u.subVectors(s, n), h.subVectors(a, n), u.cross(h), r.setXYZ(d + 0, u.x, u.y, u.z), r.setXYZ(d + 1, u.x, u.y, u.z), r.setXYZ(d + 2, u.x, u.y, u.z);
      this.normalizeNormals(), r.needsUpdate = !0;
    }
  }
  normalizeNormals() {
    let t = this.attributes.normal;
    for (let i = 0, r = t.count; i < r; i++) ut.fromBufferAttribute(t, i), ut.normalize(), t.setXYZ(i, ut.x, ut.y, ut.z);
  }
  toNonIndexed() {
    function t(o, l) {
      let c = o.array, u = o.itemSize, h = o.normalized, d = new c.constructor(l.length * u), m = 0, x = 0;
      for (let _ = 0, f = l.length; _ < f; _++) {
        m = o.isInterleavedBufferAttribute ? l[_] * o.data.stride + o.offset : l[_] * u;
        for (let p = 0; p < u; p++) d[x++] = c[m++];
      }
      return new bt(d, u, h);
    }
    if (this.index === null) return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."), this;
    let i = new Ls(), r = this.index.array, a = this.attributes;
    for (let o in a) {
      let l = a[o], c = t(l, r);
      i.setAttribute(o, c);
    }
    let n = this.morphAttributes;
    for (let o in n) {
      let l = [], c = n[o];
      for (let u = 0, h = c.length; u < h; u++) {
        let d = c[u], m = t(d, r);
        l.push(m);
      }
      i.morphAttributes[o] = l;
    }
    i.morphTargetsRelative = this.morphTargetsRelative;
    let s = this.groups;
    for (let o = 0, l = s.length; o < l; o++) {
      let c = s[o];
      i.addGroup(c.start, c.count, c.materialIndex);
    }
    return i;
  }
  toJSON() {
    let t = { metadata: { version: 4.7, type: "BufferGeometry", generator: "BufferGeometry.toJSON" } };
    if (t.uuid = this.uuid, t.type = this.type, this.name !== "" && (t.name = this.name), Object.keys(this.userData).length > 0 && (t.userData = this.userData), this.parameters !== void 0) {
      let l = this.parameters;
      for (let c in l) l[c] !== void 0 && (t[c] = l[c]);
      return t;
    }
    t.data = { attributes: {} };
    let i = this.index;
    i !== null && (t.data.index = { type: i.array.constructor.name, array: Array.prototype.slice.call(i.array) });
    let r = this.attributes;
    for (let l in r) {
      let c = r[l];
      t.data.attributes[l] = c.toJSON(t.data);
    }
    let a = {}, n = !1;
    for (let l in this.morphAttributes) {
      let c = this.morphAttributes[l], u = [];
      for (let h = 0, d = c.length; h < d; h++) {
        let m = c[h];
        u.push(m.toJSON(t.data));
      }
      u.length > 0 && (a[l] = u, n = !0);
    }
    n && (t.data.morphAttributes = a, t.data.morphTargetsRelative = this.morphTargetsRelative);
    let s = this.groups;
    s.length > 0 && (t.data.groups = JSON.parse(JSON.stringify(s)));
    let o = this.boundingSphere;
    return o !== null && (t.data.boundingSphere = o.toJSON()), t;
  }
  clone() {
    return new this.constructor().copy(this);
  }
  copy(t) {
    this.index = null, this.attributes = {}, this.morphAttributes = {}, this.groups = [], this.boundingBox = null, this.boundingSphere = null;
    let i = {};
    this.name = t.name;
    let r = t.index;
    r !== null && this.setIndex(r.clone());
    let a = t.attributes;
    for (let c in a) {
      let u = a[c];
      this.setAttribute(c, u.clone(i));
    }
    let n = t.morphAttributes;
    for (let c in n) {
      let u = [], h = n[c];
      for (let d = 0, m = h.length; d < m; d++) u.push(h[d].clone(i));
      this.morphAttributes[c] = u;
    }
    this.morphTargetsRelative = t.morphTargetsRelative;
    let s = t.groups;
    for (let c = 0, u = s.length; c < u; c++) {
      let h = s[c];
      this.addGroup(h.start, h.count, h.materialIndex);
    }
    let o = t.boundingBox;
    o !== null && (this.boundingBox = o.clone());
    let l = t.boundingSphere;
    return l !== null && (this.boundingSphere = l.clone()), this.drawRange.start = t.drawRange.start, this.drawRange.count = t.drawRange.count, this.userData = t.userData, this;
  }
  dispose() {
    this.dispatchEvent({ type: "dispose" });
  }
}, An = new dt(), di = new an(), Dr = new ra(), Rn = new F(), Lr = new F(), Ur = new F(), Ir = new F(), Pa = new F(), Nr = new F(), Cn = new F(), Or = new F(), Ot = class extends Wt {
  constructor(e = new wi(), t = new sn()) {
    super(), this.isMesh = !0, this.type = "Mesh", this.geometry = e, this.material = t, this.morphTargetDictionary = void 0, this.morphTargetInfluences = void 0, this.count = 1, this.updateMorphTargets();
  }
  copy(e, t) {
    return super.copy(e, t), e.morphTargetInfluences !== void 0 && (this.morphTargetInfluences = e.morphTargetInfluences.slice()), e.morphTargetDictionary !== void 0 && (this.morphTargetDictionary = Object.assign({}, e.morphTargetDictionary)), this.material = Array.isArray(e.material) ? e.material.slice() : e.material, this.geometry = e.geometry, this;
  }
  updateMorphTargets() {
    let e = this.geometry.morphAttributes, t = Object.keys(e);
    if (t.length > 0) {
      let i = e[t[0]];
      if (i !== void 0) {
        this.morphTargetInfluences = [], this.morphTargetDictionary = {};
        for (let r = 0, a = i.length; r < a; r++) {
          let n = i[r].name || String(r);
          this.morphTargetInfluences.push(0), this.morphTargetDictionary[n] = r;
        }
      }
    }
  }
  getVertexPosition(e, t) {
    let i = this.geometry, r = i.attributes.position, a = i.morphAttributes.position, n = i.morphTargetsRelative;
    t.fromBufferAttribute(r, e);
    let s = this.morphTargetInfluences;
    if (a && s) {
      Nr.set(0, 0, 0);
      for (let o = 0, l = a.length; o < l; o++) {
        let c = s[o], u = a[o];
        c !== 0 && (Pa.fromBufferAttribute(u, e), n ? Nr.addScaledVector(Pa, c) : Nr.addScaledVector(Pa.sub(t), c));
      }
      t.add(Nr);
    }
    return t;
  }
  raycast(e, t) {
    let i = this.geometry, r = this.material, a = this.matrixWorld;
    r !== void 0 && (i.boundingSphere === null && i.computeBoundingSphere(), Dr.copy(i.boundingSphere), Dr.applyMatrix4(a), di.copy(e.ray).recast(e.near), !(Dr.containsPoint(di.origin) === !1 && (di.intersectSphere(Dr, Rn) === null || di.origin.distanceToSquared(Rn) > (e.far - e.near) ** 2)) && (An.copy(a).invert(), di.copy(e.ray).applyMatrix4(An), !(i.boundingBox !== null && di.intersectsBox(i.boundingBox) === !1) && this._computeIntersections(e, t, di)));
  }
  _computeIntersections(e, t, i) {
    let r, a = this.geometry, n = this.material, s = a.index, o = a.attributes.position, l = a.attributes.uv, c = a.attributes.uv1, u = a.attributes.normal, h = a.groups, d = a.drawRange;
    if (s !== null) if (Array.isArray(n)) for (let m = 0, x = h.length; m < x; m++) {
      let _ = h[m], f = n[_.materialIndex], p = Math.max(_.start, d.start), R = Math.min(s.count, Math.min(_.start + _.count, d.start + d.count));
      for (let y = p, A = R; y < A; y += 3) {
        let I = s.getX(y), L = s.getX(y + 1), D = s.getX(y + 2);
        r = Fr(this, f, e, i, l, c, u, I, L, D), r && (r.faceIndex = Math.floor(y / 3), r.face.materialIndex = _.materialIndex, t.push(r));
      }
    }
    else {
      let m = Math.max(0, d.start), x = Math.min(s.count, d.start + d.count);
      for (let _ = m, f = x; _ < f; _ += 3) {
        let p = s.getX(_), R = s.getX(_ + 1), y = s.getX(_ + 2);
        r = Fr(this, n, e, i, l, c, u, p, R, y), r && (r.faceIndex = Math.floor(_ / 3), t.push(r));
      }
    }
    else if (o !== void 0) if (Array.isArray(n)) for (let m = 0, x = h.length; m < x; m++) {
      let _ = h[m], f = n[_.materialIndex], p = Math.max(_.start, d.start), R = Math.min(o.count, Math.min(_.start + _.count, d.start + d.count));
      for (let y = p, A = R; y < A; y += 3) {
        let I = y, L = y + 1, D = y + 2;
        r = Fr(this, f, e, i, l, c, u, I, L, D), r && (r.faceIndex = Math.floor(y / 3), r.face.materialIndex = _.materialIndex, t.push(r));
      }
    }
    else {
      let m = Math.max(0, d.start), x = Math.min(o.count, d.start + d.count);
      for (let _ = m, f = x; _ < f; _ += 3) {
        let p = _, R = _ + 1, y = _ + 2;
        r = Fr(this, n, e, i, l, c, u, p, R, y), r && (r.faceIndex = Math.floor(_ / 3), t.push(r));
      }
    }
  }
};
function Fl(e, t, i, r, a, n, s, o) {
  let l;
  if (l = t.side === 1 ? r.intersectTriangle(s, n, a, !0, o) : r.intersectTriangle(a, n, s, t.side === 0, o), l === null) return null;
  Or.copy(o), Or.applyMatrix4(e.matrixWorld);
  let c = i.ray.origin.distanceTo(Or);
  return c < i.near || c > i.far ? null : { distance: c, point: Or.clone(), object: e };
}
function Fr(e, t, i, r, a, n, s, o, l, c) {
  e.getVertexPosition(o, Lr), e.getVertexPosition(l, Ur), e.getVertexPosition(c, Ir);
  let u = Fl(e, t, i, r, Lr, Ur, Ir, Cn);
  if (u) {
    let h = new F();
    rr.getBarycoord(Cn, Lr, Ur, Ir, h), a && (u.uv = rr.getInterpolatedAttribute(a, o, l, c, h, new ke())), n && (u.uv1 = rr.getInterpolatedAttribute(n, o, l, c, h, new ke())), s && (u.normal = rr.getInterpolatedAttribute(s, o, l, c, h, new F()), u.normal.dot(r.direction) > 0 && u.normal.multiplyScalar(-1));
    let d = { a: o, b: l, c, normal: new F(), materialIndex: 0 };
    rr.getNormal(Lr, Ur, Ir, d.normal), u.face = d, u.barycoord = h;
  }
  return u;
}
var on = class Us extends wi {
  constructor(t = 1, i = 1, r = 1, a = 1, n = 1, s = 1) {
    super(), this.type = "BoxGeometry", this.parameters = { width: t, height: i, depth: r, widthSegments: a, heightSegments: n, depthSegments: s };
    let o = this;
    a = Math.floor(a), n = Math.floor(n), s = Math.floor(s);
    let l = [], c = [], u = [], h = [], d = 0, m = 0;
    x("z", "y", "x", -1, -1, r, i, t, s, n, 0), x("z", "y", "x", 1, -1, r, i, -t, s, n, 1), x("x", "z", "y", 1, 1, t, r, i, a, s, 2), x("x", "z", "y", 1, -1, t, r, -i, a, s, 3), x("x", "y", "z", 1, -1, t, i, r, a, n, 4), x("x", "y", "z", -1, -1, t, i, -r, a, n, 5), this.setIndex(l), this.setAttribute("position", new Si(c, 3)), this.setAttribute("normal", new Si(u, 3)), this.setAttribute("uv", new Si(h, 2));
    function x(_, f, p, R, y, A, I, L, D, z, M) {
      let S = A / D, w = I / z, W = A / 2, V = I / 2, k = L / 2, J = D + 1, H = z + 1, Q = 0, X = 0, ie = new F();
      for (let pe = 0; pe < H; pe++) {
        let Ue = pe * w - V;
        for (let Oe = 0; Oe < J; Oe++) ie[_] = (Oe * S - W) * R, ie[f] = Ue * y, ie[p] = k, c.push(ie.x, ie.y, ie.z), ie[_] = 0, ie[f] = 0, ie[p] = L > 0 ? 1 : -1, u.push(ie.x, ie.y, ie.z), h.push(Oe / D), h.push(1 - pe / z), Q += 1;
      }
      for (let pe = 0; pe < z; pe++) for (let Ue = 0; Ue < D; Ue++) {
        let Oe = d + Ue + J * pe, it = d + Ue + J * (pe + 1), Xe = d + (Ue + 1) + J * (pe + 1), j = d + (Ue + 1) + J * pe;
        l.push(Oe, it, j), l.push(it, Xe, j), X += 6;
      }
      o.addGroup(m, X, M), m += X, d += Q;
    }
  }
  copy(t) {
    return super.copy(t), this.parameters = Object.assign({}, t.parameters), this;
  }
  static fromJSON(t) {
    return new Us(t.width, t.height, t.depth, t.widthSegments, t.heightSegments, t.depthSegments);
  }
};
function Ki(e) {
  let t = {};
  for (let i in e) {
    t[i] = {};
    for (let r in e[i]) {
      let a = e[i][r];
      a && (a.isColor || a.isMatrix3 || a.isMatrix4 || a.isVector2 || a.isVector3 || a.isVector4 || a.isTexture || a.isQuaternion) ? a.isRenderTargetTexture ? (console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."), t[i][r] = null) : t[i][r] = a.clone() : Array.isArray(a) ? t[i][r] = a.slice() : t[i][r] = a;
    }
  }
  return t;
}
function xt(e) {
  let t = {};
  for (let i = 0; i < e.length; i++) {
    let r = Ki(e[i]);
    for (let a in r) t[a] = r[a];
  }
  return t;
}
function Bl(e) {
  let t = [];
  for (let i = 0; i < e.length; i++) t.push(e[i].clone());
  return t;
}
function Is(e) {
  let t = e.getRenderTarget();
  return t === null ? e.outputColorSpace : t.isXRRenderTarget === !0 ? t.texture.colorSpace : We.workingColorSpace;
}
var zl = { clone: Ki, merge: xt }, kl = `void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`, Hl = `void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`, Xt = class extends xr {
  constructor(e) {
    super(), this.isShaderMaterial = !0, this.type = "ShaderMaterial", this.defines = {}, this.uniforms = {}, this.uniformsGroups = [], this.vertexShader = kl, this.fragmentShader = Hl, this.linewidth = 1, this.wireframe = !1, this.wireframeLinewidth = 1, this.fog = !1, this.lights = !1, this.clipping = !1, this.forceSinglePass = !0, this.extensions = { clipCullDistance: !1, multiDraw: !1 }, this.defaultAttributeValues = { color: [1, 1, 1], uv: [0, 0], uv1: [0, 0] }, this.index0AttributeName = void 0, this.uniformsNeedUpdate = !1, this.glslVersion = null, e !== void 0 && this.setValues(e);
  }
  copy(e) {
    return super.copy(e), this.fragmentShader = e.fragmentShader, this.vertexShader = e.vertexShader, this.uniforms = Ki(e.uniforms), this.uniformsGroups = Bl(e.uniformsGroups), this.defines = Object.assign({}, e.defines), this.wireframe = e.wireframe, this.wireframeLinewidth = e.wireframeLinewidth, this.fog = e.fog, this.lights = e.lights, this.clipping = e.clipping, this.extensions = Object.assign({}, e.extensions), this.glslVersion = e.glslVersion, this;
  }
  toJSON(e) {
    let t = super.toJSON(e);
    t.glslVersion = this.glslVersion, t.uniforms = {};
    for (let r in this.uniforms) {
      let a = this.uniforms[r].value;
      a && a.isTexture ? t.uniforms[r] = { type: "t", value: a.toJSON(e).uuid } : a && a.isColor ? t.uniforms[r] = { type: "c", value: a.getHex() } : a && a.isVector2 ? t.uniforms[r] = { type: "v2", value: a.toArray() } : a && a.isVector3 ? t.uniforms[r] = { type: "v3", value: a.toArray() } : a && a.isVector4 ? t.uniforms[r] = { type: "v4", value: a.toArray() } : a && a.isMatrix3 ? t.uniforms[r] = { type: "m3", value: a.toArray() } : a && a.isMatrix4 ? t.uniforms[r] = { type: "m4", value: a.toArray() } : t.uniforms[r] = { value: a };
    }
    Object.keys(this.defines).length > 0 && (t.defines = this.defines), t.vertexShader = this.vertexShader, t.fragmentShader = this.fragmentShader, t.lights = this.lights, t.clipping = this.clipping;
    let i = {};
    for (let r in this.extensions) this.extensions[r] === !0 && (i[r] = !0);
    return Object.keys(i).length > 0 && (t.extensions = i), t;
  }
}, Ns = class extends Wt {
  constructor() {
    super(), this.isCamera = !0, this.type = "Camera", this.matrixWorldInverse = new dt(), this.projectionMatrix = new dt(), this.projectionMatrixInverse = new dt(), this.coordinateSystem = Yi, this._reversedDepth = !1;
  }
  get reversedDepth() {
    return this._reversedDepth;
  }
  copy(e, t) {
    return super.copy(e, t), this.matrixWorldInverse.copy(e.matrixWorldInverse), this.projectionMatrix.copy(e.projectionMatrix), this.projectionMatrixInverse.copy(e.projectionMatrixInverse), this.coordinateSystem = e.coordinateSystem, this;
  }
  getWorldDirection(e) {
    return super.getWorldDirection(e).negate();
  }
  updateMatrixWorld(e) {
    super.updateMatrixWorld(e), this.matrixWorldInverse.copy(this.matrixWorld).invert();
  }
  updateWorldMatrix(e, t) {
    super.updateWorldMatrix(e, t), this.matrixWorldInverse.copy(this.matrixWorld).invert();
  }
  clone() {
    return new this.constructor().copy(this);
  }
}, ri = new F(), Pn = new ke(), Dn = new ke(), Ct = class extends Ns {
  constructor(e = 50, t = 1, i = 0.1, r = 2e3) {
    super(), this.isPerspectiveCamera = !0, this.type = "PerspectiveCamera", this.fov = e, this.zoom = 1, this.near = i, this.far = r, this.focus = 10, this.aspect = t, this.view = null, this.filmGauge = 35, this.filmOffset = 0, this.updateProjectionMatrix();
  }
  copy(e, t) {
    return super.copy(e, t), this.fov = e.fov, this.zoom = e.zoom, this.near = e.near, this.far = e.far, this.focus = e.focus, this.aspect = e.aspect, this.view = e.view === null ? null : Object.assign({}, e.view), this.filmGauge = e.filmGauge, this.filmOffset = e.filmOffset, this;
  }
  setFocalLength(e) {
    let t = 0.5 * this.getFilmHeight() / e;
    this.fov = Ga * 2 * Math.atan(t), this.updateProjectionMatrix();
  }
  getFocalLength() {
    let e = Math.tan(ca * 0.5 * this.fov);
    return 0.5 * this.getFilmHeight() / e;
  }
  getEffectiveFOV() {
    return Ga * 2 * Math.atan(Math.tan(ca * 0.5 * this.fov) / this.zoom);
  }
  getFilmWidth() {
    return this.filmGauge * Math.min(this.aspect, 1);
  }
  getFilmHeight() {
    return this.filmGauge / Math.max(this.aspect, 1);
  }
  getViewBounds(e, t, i) {
    ri.set(-1, -1, 0.5).applyMatrix4(this.projectionMatrixInverse), t.set(ri.x, ri.y).multiplyScalar(-e / ri.z), ri.set(1, 1, 0.5).applyMatrix4(this.projectionMatrixInverse), i.set(ri.x, ri.y).multiplyScalar(-e / ri.z);
  }
  getViewSize(e, t) {
    return this.getViewBounds(e, Pn, Dn), t.subVectors(Dn, Pn);
  }
  setViewOffset(e, t, i, r, a, n) {
    this.aspect = e / t, this.view === null && (this.view = { enabled: !0, fullWidth: 1, fullHeight: 1, offsetX: 0, offsetY: 0, width: 1, height: 1 }), this.view.enabled = !0, this.view.fullWidth = e, this.view.fullHeight = t, this.view.offsetX = i, this.view.offsetY = r, this.view.width = a, this.view.height = n, this.updateProjectionMatrix();
  }
  clearViewOffset() {
    this.view !== null && (this.view.enabled = !1), this.updateProjectionMatrix();
  }
  updateProjectionMatrix() {
    let e = this.near, t = e * Math.tan(ca * 0.5 * this.fov) / this.zoom, i = 2 * t, r = this.aspect * i, a = -0.5 * r, n = this.view;
    if (this.view !== null && this.view.enabled) {
      let o = n.fullWidth, l = n.fullHeight;
      a += n.offsetX * r / o, t -= n.offsetY * i / l, r *= n.width / o, i *= n.height / l;
    }
    let s = this.filmOffset;
    s !== 0 && (a += e * s / this.getFilmWidth()), this.projectionMatrix.makePerspective(a, a + r, t, t - i, e, this.far, this.coordinateSystem, this.reversedDepth), this.projectionMatrixInverse.copy(this.projectionMatrix).invert();
  }
  toJSON(e) {
    let t = super.toJSON(e);
    return t.object.fov = this.fov, t.object.zoom = this.zoom, t.object.near = this.near, t.object.far = this.far, t.object.focus = this.focus, t.object.aspect = this.aspect, this.view !== null && (t.object.view = Object.assign({}, this.view)), t.object.filmGauge = this.filmGauge, t.object.filmOffset = this.filmOffset, t;
  }
}, zi = -90, ki = 1, Vl = class extends Wt {
  constructor(e, t, i) {
    super(), this.type = "CubeCamera", this.renderTarget = i, this.coordinateSystem = null, this.activeMipmapLevel = 0;
    let r = new Ct(zi, ki, e, t);
    r.layers = this.layers, this.add(r);
    let a = new Ct(zi, ki, e, t);
    a.layers = this.layers, this.add(a);
    let n = new Ct(zi, ki, e, t);
    n.layers = this.layers, this.add(n);
    let s = new Ct(zi, ki, e, t);
    s.layers = this.layers, this.add(s);
    let o = new Ct(zi, ki, e, t);
    o.layers = this.layers, this.add(o);
    let l = new Ct(zi, ki, e, t);
    l.layers = this.layers, this.add(l);
  }
  updateCoordinateSystem() {
    let e = this.coordinateSystem, t = this.children.concat(), [i, r, a, n, s, o] = t;
    for (let l of t) this.remove(l);
    if (e === 2e3) i.up.set(0, 1, 0), i.lookAt(1, 0, 0), r.up.set(0, 1, 0), r.lookAt(-1, 0, 0), a.up.set(0, 0, -1), a.lookAt(0, 1, 0), n.up.set(0, 0, 1), n.lookAt(0, -1, 0), s.up.set(0, 1, 0), s.lookAt(0, 0, 1), o.up.set(0, 1, 0), o.lookAt(0, 0, -1);
    else if (e === 2001) i.up.set(0, -1, 0), i.lookAt(-1, 0, 0), r.up.set(0, -1, 0), r.lookAt(1, 0, 0), a.up.set(0, 0, 1), a.lookAt(0, 1, 0), n.up.set(0, 0, -1), n.lookAt(0, -1, 0), s.up.set(0, -1, 0), s.lookAt(0, 0, 1), o.up.set(0, -1, 0), o.lookAt(0, 0, -1);
    else throw Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: " + e);
    for (let l of t) this.add(l), l.updateMatrixWorld();
  }
  update(e, t) {
    this.parent === null && this.updateMatrixWorld();
    let { renderTarget: i, activeMipmapLevel: r } = this;
    this.coordinateSystem !== e.coordinateSystem && (this.coordinateSystem = e.coordinateSystem, this.updateCoordinateSystem());
    let [a, n, s, o, l, c] = this.children, u = e.getRenderTarget(), h = e.getActiveCubeFace(), d = e.getActiveMipmapLevel(), m = e.xr.enabled;
    e.xr.enabled = !1;
    let x = i.texture.generateMipmaps;
    i.texture.generateMipmaps = !1, e.setRenderTarget(i, 0, r), e.render(t, a), e.setRenderTarget(i, 1, r), e.render(t, n), e.setRenderTarget(i, 2, r), e.render(t, s), e.setRenderTarget(i, 3, r), e.render(t, o), e.setRenderTarget(i, 4, r), e.render(t, l), i.texture.generateMipmaps = x, e.setRenderTarget(i, 5, r), e.render(t, c), e.setRenderTarget(u, h, d), e.xr.enabled = m, i.texture.needsPMREMUpdate = !0;
  }
}, Os = class extends Ft {
  constructor(e = [], t = 301, i, r, a, n, s, o, l, c) {
    super(e, t, i, r, a, n, s, o, l, c), this.isCubeTexture = !0, this.flipY = !1;
  }
  get images() {
    return this.image;
  }
  set images(e) {
    this.image = e;
  }
}, Gl = class extends ai {
  constructor(e = 1, t = {}) {
    super(e, e, t), this.isWebGLCubeRenderTarget = !0;
    let i = { width: e, height: e, depth: 1 }, r = [i, i, i, i, i, i];
    this.texture = new Os(r), this._setTextureOptions(t), this.texture.isRenderTargetTexture = !0;
  }
  fromEquirectangularTexture(e, t) {
    this.texture.type = t.type, this.texture.colorSpace = t.colorSpace, this.texture.generateMipmaps = t.generateMipmaps, this.texture.minFilter = t.minFilter, this.texture.magFilter = t.magFilter;
    let i = { uniforms: { tEquirect: { value: null } }, vertexShader: `

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`, fragmentShader: `

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			` }, r = new on(5, 5, 5), a = new Xt({ name: "CubemapFromEquirect", uniforms: Ki(i.uniforms), vertexShader: i.vertexShader, fragmentShader: i.fragmentShader, side: 1, blending: 0 });
    a.uniforms.tEquirect.value = t;
    let n = new Ot(r, a), s = t.minFilter;
    return t.minFilter === 1008 && (t.minFilter = Mi), new Vl(1, 10, this).update(e, n), t.minFilter = s, n.geometry.dispose(), n.material.dispose(), this;
  }
  clear(e, t = !0, i = !0, r = !0) {
    let a = e.getRenderTarget();
    for (let n = 0; n < 6; n++) e.setRenderTarget(this, n), e.clear(t, i, r);
    e.setRenderTarget(a);
  }
}, Br = class extends Wt {
  constructor() {
    super(), this.isGroup = !0, this.type = "Group";
  }
}, Wl = { type: "move" }, Da = class {
  constructor() {
    this._targetRay = null, this._grip = null, this._hand = null;
  }
  getHandSpace() {
    return this._hand === null && (this._hand = new Br(), this._hand.matrixAutoUpdate = !1, this._hand.visible = !1, this._hand.joints = {}, this._hand.inputState = { pinching: !1 }), this._hand;
  }
  getTargetRaySpace() {
    return this._targetRay === null && (this._targetRay = new Br(), this._targetRay.matrixAutoUpdate = !1, this._targetRay.visible = !1, this._targetRay.hasLinearVelocity = !1, this._targetRay.linearVelocity = new F(), this._targetRay.hasAngularVelocity = !1, this._targetRay.angularVelocity = new F()), this._targetRay;
  }
  getGripSpace() {
    return this._grip === null && (this._grip = new Br(), this._grip.matrixAutoUpdate = !1, this._grip.visible = !1, this._grip.hasLinearVelocity = !1, this._grip.linearVelocity = new F(), this._grip.hasAngularVelocity = !1, this._grip.angularVelocity = new F()), this._grip;
  }
  dispatchEvent(e) {
    return this._targetRay !== null && this._targetRay.dispatchEvent(e), this._grip !== null && this._grip.dispatchEvent(e), this._hand !== null && this._hand.dispatchEvent(e), this;
  }
  connect(e) {
    if (e && e.hand) {
      let t = this._hand;
      if (t) for (let i of e.hand.values()) this._getHandJoint(t, i);
    }
    return this.dispatchEvent({ type: "connected", data: e }), this;
  }
  disconnect(e) {
    return this.dispatchEvent({ type: "disconnected", data: e }), this._targetRay !== null && (this._targetRay.visible = !1), this._grip !== null && (this._grip.visible = !1), this._hand !== null && (this._hand.visible = !1), this;
  }
  update(e, t, i) {
    let r = null, a = null, n = null, s = this._targetRay, o = this._grip, l = this._hand;
    if (e && t.session.visibilityState !== "visible-blurred") {
      if (l && e.hand) {
        n = !0;
        for (let d of e.hand.values()) {
          let m = t.getJointPose(d, i), x = this._getHandJoint(l, d);
          m !== null && (x.matrix.fromArray(m.transform.matrix), x.matrix.decompose(x.position, x.rotation, x.scale), x.matrixWorldNeedsUpdate = !0, x.jointRadius = m.radius), x.visible = m !== null;
        }
        let c = l.joints["index-finger-tip"], u = l.joints["thumb-tip"], h = c.position.distanceTo(u.position);
        l.inputState.pinching && h > 0.025 ? (l.inputState.pinching = !1, this.dispatchEvent({ type: "pinchend", handedness: e.handedness, target: this })) : !l.inputState.pinching && h <= 0.015 && (l.inputState.pinching = !0, this.dispatchEvent({ type: "pinchstart", handedness: e.handedness, target: this }));
      } else o !== null && e.gripSpace && (a = t.getPose(e.gripSpace, i), a !== null && (o.matrix.fromArray(a.transform.matrix), o.matrix.decompose(o.position, o.rotation, o.scale), o.matrixWorldNeedsUpdate = !0, a.linearVelocity ? (o.hasLinearVelocity = !0, o.linearVelocity.copy(a.linearVelocity)) : o.hasLinearVelocity = !1, a.angularVelocity ? (o.hasAngularVelocity = !0, o.angularVelocity.copy(a.angularVelocity)) : o.hasAngularVelocity = !1));
      s !== null && (r = t.getPose(e.targetRaySpace, i), r === null && a !== null && (r = a), r !== null && (s.matrix.fromArray(r.transform.matrix), s.matrix.decompose(s.position, s.rotation, s.scale), s.matrixWorldNeedsUpdate = !0, r.linearVelocity ? (s.hasLinearVelocity = !0, s.linearVelocity.copy(r.linearVelocity)) : s.hasLinearVelocity = !1, r.angularVelocity ? (s.hasAngularVelocity = !0, s.angularVelocity.copy(r.angularVelocity)) : s.hasAngularVelocity = !1, this.dispatchEvent(Wl)));
    }
    return s !== null && (s.visible = r !== null), o !== null && (o.visible = a !== null), l !== null && (l.visible = n !== null), this;
  }
  _getHandJoint(e, t) {
    if (e.joints[t.jointName] === void 0) {
      let i = new Br();
      i.matrixAutoUpdate = !1, i.visible = !1, e.joints[t.jointName] = i, e.add(i);
    }
    return e.joints[t.jointName];
  }
}, Fs = class extends Wt {
  constructor() {
    super(), this.isScene = !0, this.type = "Scene", this.background = null, this.environment = null, this.fog = null, this.backgroundBlurriness = 0, this.backgroundIntensity = 1, this.backgroundRotation = new bi(), this.environmentIntensity = 1, this.environmentRotation = new bi(), this.overrideMaterial = null, typeof __THREE_DEVTOOLS__ < "u" && __THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe", { detail: this }));
  }
  copy(e, t) {
    return super.copy(e, t), e.background !== null && (this.background = e.background.clone()), e.environment !== null && (this.environment = e.environment.clone()), e.fog !== null && (this.fog = e.fog.clone()), this.backgroundBlurriness = e.backgroundBlurriness, this.backgroundIntensity = e.backgroundIntensity, this.backgroundRotation.copy(e.backgroundRotation), this.environmentIntensity = e.environmentIntensity, this.environmentRotation.copy(e.environmentRotation), e.overrideMaterial !== null && (this.overrideMaterial = e.overrideMaterial.clone()), this.matrixAutoUpdate = e.matrixAutoUpdate, this;
  }
  toJSON(e) {
    let t = super.toJSON(e);
    return this.fog !== null && (t.object.fog = this.fog.toJSON()), this.backgroundBlurriness > 0 && (t.object.backgroundBlurriness = this.backgroundBlurriness), this.backgroundIntensity !== 1 && (t.object.backgroundIntensity = this.backgroundIntensity), t.object.backgroundRotation = this.backgroundRotation.toArray(), this.environmentIntensity !== 1 && (t.object.environmentIntensity = this.environmentIntensity), t.object.environmentRotation = this.environmentRotation.toArray(), t;
  }
}, Xl = class extends Ft {
  constructor(e = null, t = 1, i = 1, r, a, n, s, o, l = Tt, c = Tt, u, h) {
    super(null, n, s, o, l, c, r, a, u, h), this.isDataTexture = !0, this.image = { data: e, width: t, height: i }, this.generateMipmaps = !1, this.flipY = !1, this.unpackAlignment = 1;
  }
}, La = new F(), jl = new F(), ql = new Ne(), _i = class {
  constructor(e = new F(1, 0, 0), t = 0) {
    this.isPlane = !0, this.normal = e, this.constant = t;
  }
  set(e, t) {
    return this.normal.copy(e), this.constant = t, this;
  }
  setComponents(e, t, i, r) {
    return this.normal.set(e, t, i), this.constant = r, this;
  }
  setFromNormalAndCoplanarPoint(e, t) {
    return this.normal.copy(e), this.constant = -t.dot(this.normal), this;
  }
  setFromCoplanarPoints(e, t, i) {
    let r = La.subVectors(i, t).cross(jl.subVectors(e, t)).normalize();
    return this.setFromNormalAndCoplanarPoint(r, e), this;
  }
  copy(e) {
    return this.normal.copy(e.normal), this.constant = e.constant, this;
  }
  normalize() {
    let e = 1 / this.normal.length();
    return this.normal.multiplyScalar(e), this.constant *= e, this;
  }
  negate() {
    return this.constant *= -1, this.normal.negate(), this;
  }
  distanceToPoint(e) {
    return this.normal.dot(e) + this.constant;
  }
  distanceToSphere(e) {
    return this.distanceToPoint(e.center) - e.radius;
  }
  projectPoint(e, t) {
    return t.copy(e).addScaledVector(this.normal, -this.distanceToPoint(e));
  }
  intersectLine(e, t) {
    let i = e.delta(La), r = this.normal.dot(i);
    if (r === 0) return this.distanceToPoint(e.start) === 0 ? t.copy(e.start) : null;
    let a = -(e.start.dot(this.normal) + this.constant) / r;
    return a < 0 || a > 1 ? null : t.copy(e.start).addScaledVector(i, a);
  }
  intersectsLine(e) {
    let t = this.distanceToPoint(e.start), i = this.distanceToPoint(e.end);
    return t < 0 && i > 0 || i < 0 && t > 0;
  }
  intersectsBox(e) {
    return e.intersectsPlane(this);
  }
  intersectsSphere(e) {
    return e.intersectsPlane(this);
  }
  coplanarPoint(e) {
    return e.copy(this.normal).multiplyScalar(-this.constant);
  }
  applyMatrix4(e, t) {
    let i = t || ql.getNormalMatrix(e), r = this.coplanarPoint(La).applyMatrix4(e), a = this.normal.applyMatrix3(i).normalize();
    return this.constant = -r.dot(a), this;
  }
  translate(e) {
    return this.constant -= e.dot(this.normal), this;
  }
  equals(e) {
    return e.normal.equals(this.normal) && e.constant === this.constant;
  }
  clone() {
    return new this.constructor().copy(this);
  }
}, pi = new ra(), Yl = new ke(0.5, 0.5), zr = new F(), Bs = class {
  constructor(e = new _i(), t = new _i(), i = new _i(), r = new _i(), a = new _i(), n = new _i()) {
    this.planes = [e, t, i, r, a, n];
  }
  set(e, t, i, r, a, n) {
    let s = this.planes;
    return s[0].copy(e), s[1].copy(t), s[2].copy(i), s[3].copy(r), s[4].copy(a), s[5].copy(n), this;
  }
  copy(e) {
    let t = this.planes;
    for (let i = 0; i < 6; i++) t[i].copy(e.planes[i]);
    return this;
  }
  setFromProjectionMatrix(e, t = Yi, i = !1) {
    let r = this.planes, a = e.elements, n = a[0], s = a[1], o = a[2], l = a[3], c = a[4], u = a[5], h = a[6], d = a[7], m = a[8], x = a[9], _ = a[10], f = a[11], p = a[12], R = a[13], y = a[14], A = a[15];
    if (r[0].setComponents(l - n, d - c, f - m, A - p).normalize(), r[1].setComponents(l + n, d + c, f + m, A + p).normalize(), r[2].setComponents(l + s, d + u, f + x, A + R).normalize(), r[3].setComponents(l - s, d - u, f - x, A - R).normalize(), i) r[4].setComponents(o, h, _, y).normalize(), r[5].setComponents(l - o, d - h, f - _, A - y).normalize();
    else if (r[4].setComponents(l - o, d - h, f - _, A - y).normalize(), t === 2e3) r[5].setComponents(l + o, d + h, f + _, A + y).normalize();
    else if (t === 2001) r[5].setComponents(o, h, _, y).normalize();
    else throw Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: " + t);
    return this;
  }
  intersectsObject(e) {
    if (e.boundingSphere !== void 0) e.boundingSphere === null && e.computeBoundingSphere(), pi.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);
    else {
      let t = e.geometry;
      t.boundingSphere === null && t.computeBoundingSphere(), pi.copy(t.boundingSphere).applyMatrix4(e.matrixWorld);
    }
    return this.intersectsSphere(pi);
  }
  intersectsSprite(e) {
    return pi.center.set(0, 0, 0), pi.radius = 0.7071067811865476 + Yl.distanceTo(e.center), pi.applyMatrix4(e.matrixWorld), this.intersectsSphere(pi);
  }
  intersectsSphere(e) {
    let t = this.planes, i = e.center, r = -e.radius;
    for (let a = 0; a < 6; a++) if (t[a].distanceToPoint(i) < r) return !1;
    return !0;
  }
  intersectsBox(e) {
    let t = this.planes;
    for (let i = 0; i < 6; i++) {
      let r = t[i];
      if (zr.x = r.normal.x > 0 ? e.max.x : e.min.x, zr.y = r.normal.y > 0 ? e.max.y : e.min.y, zr.z = r.normal.z > 0 ? e.max.z : e.min.z, r.distanceToPoint(zr) < 0) return !1;
    }
    return !0;
  }
  containsPoint(e) {
    let t = this.planes;
    for (let i = 0; i < 6; i++) if (t[i].distanceToPoint(e) < 0) return !1;
    return !0;
  }
  clone() {
    return new this.constructor().copy(this);
  }
}, Kl = class extends xr {
  constructor(e) {
    super(), this.isPointsMaterial = !0, this.type = "PointsMaterial", this.color = new He(16777215), this.map = null, this.alphaMap = null, this.size = 1, this.sizeAttenuation = !0, this.fog = !0, this.setValues(e);
  }
  copy(e) {
    return super.copy(e), this.color.copy(e.color), this.map = e.map, this.alphaMap = e.alphaMap, this.size = e.size, this.sizeAttenuation = e.sizeAttenuation, this.fog = e.fog, this;
  }
}, Ln = new dt(), Xa = new an(), kr = new ra(), Hr = new F(), Zl = class extends Wt {
  constructor(e = new wi(), t = new Kl()) {
    super(), this.isPoints = !0, this.type = "Points", this.geometry = e, this.material = t, this.morphTargetDictionary = void 0, this.morphTargetInfluences = void 0, this.updateMorphTargets();
  }
  copy(e, t) {
    return super.copy(e, t), this.material = Array.isArray(e.material) ? e.material.slice() : e.material, this.geometry = e.geometry, this;
  }
  raycast(e, t) {
    let i = this.geometry, r = this.matrixWorld, a = e.params.Points.threshold, n = i.drawRange;
    if (i.boundingSphere === null && i.computeBoundingSphere(), kr.copy(i.boundingSphere), kr.applyMatrix4(r), kr.radius += a, e.ray.intersectsSphere(kr) === !1) return;
    Ln.copy(r).invert(), Xa.copy(e.ray).applyMatrix4(Ln);
    let s = a / ((this.scale.x + this.scale.y + this.scale.z) / 3), o = s * s, l = i.index, c = i.attributes.position;
    if (l !== null) {
      let u = Math.max(0, n.start), h = Math.min(l.count, n.start + n.count);
      for (let d = u, m = h; d < m; d++) {
        let x = l.getX(d);
        Hr.fromBufferAttribute(c, x), Un(Hr, x, o, r, e, t, this);
      }
    } else {
      let u = Math.max(0, n.start), h = Math.min(c.count, n.start + n.count);
      for (let d = u, m = h; d < m; d++) Hr.fromBufferAttribute(c, d), Un(Hr, d, o, r, e, t, this);
    }
  }
  updateMorphTargets() {
    let e = this.geometry.morphAttributes, t = Object.keys(e);
    if (t.length > 0) {
      let i = e[t[0]];
      if (i !== void 0) {
        this.morphTargetInfluences = [], this.morphTargetDictionary = {};
        for (let r = 0, a = i.length; r < a; r++) {
          let n = i[r].name || String(r);
          this.morphTargetInfluences.push(0), this.morphTargetDictionary[n] = r;
        }
      }
    }
  }
};
function Un(e, t, i, r, a, n, s) {
  let o = Xa.distanceSqToPoint(e);
  if (o < i) {
    let l = new F();
    Xa.closestPointToPoint(e, l), l.applyMatrix4(r);
    let c = a.ray.origin.distanceTo(l);
    if (c < a.near || c > a.far) return;
    n.push({ distance: c, distanceToRay: Math.sqrt(o), point: l, index: t, face: null, faceIndex: null, barycoord: null, object: s });
  }
}
var zs = class extends Ft {
  constructor(e, t, i = tn, r, a, n, s = Tt, o = Tt, l, c = ys, u = 1) {
    if (c !== 1026 && c !== 1027) throw Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");
    super({ width: e, height: t, depth: u }, r, a, n, s, o, c, i, l), this.isDepthTexture = !0, this.flipY = !1, this.generateMipmaps = !1, this.compareFunction = null;
  }
  copy(e) {
    return super.copy(e), this.source = new rn(Object.assign({}, e.image)), this.compareFunction = e.compareFunction, this;
  }
  toJSON(e) {
    let t = super.toJSON(e);
    return this.compareFunction !== null && (t.compareFunction = this.compareFunction), t;
  }
}, ks = class extends Ft {
  constructor(e = null) {
    super(), this.sourceTexture = e, this.isExternalTexture = !0;
  }
  copy(e) {
    return super.copy(e), this.sourceTexture = e.sourceTexture, this;
  }
}, aa = class Hs extends wi {
  constructor(t = 1, i = 1, r = 1, a = 1) {
    super(), this.type = "PlaneGeometry", this.parameters = { width: t, height: i, widthSegments: r, heightSegments: a };
    let n = t / 2, s = i / 2, o = Math.floor(r), l = Math.floor(a), c = o + 1, u = l + 1, h = t / o, d = i / l, m = [], x = [], _ = [], f = [];
    for (let p = 0; p < u; p++) {
      let R = p * d - s;
      for (let y = 0; y < c; y++) {
        let A = y * h - n;
        x.push(A, -R, 0), _.push(0, 0, 1), f.push(y / o), f.push(1 - p / l);
      }
    }
    for (let p = 0; p < l; p++) for (let R = 0; R < o; R++) {
      let y = R + c * p, A = R + c * (p + 1), I = R + 1 + c * (p + 1), L = R + 1 + c * p;
      m.push(y, A, L), m.push(A, I, L);
    }
    this.setIndex(m), this.setAttribute("position", new Si(x, 3)), this.setAttribute("normal", new Si(_, 3)), this.setAttribute("uv", new Si(f, 2));
  }
  copy(t) {
    return super.copy(t), this.parameters = Object.assign({}, t.parameters), this;
  }
  static fromJSON(t) {
    return new Hs(t.width, t.height, t.widthSegments, t.heightSegments);
  }
}, Jl = class extends xr {
  constructor(e) {
    super(), this.isMeshDepthMaterial = !0, this.type = "MeshDepthMaterial", this.depthPacking = ml, this.map = null, this.alphaMap = null, this.displacementMap = null, this.displacementScale = 1, this.displacementBias = 0, this.wireframe = !1, this.wireframeLinewidth = 1, this.setValues(e);
  }
  copy(e) {
    return super.copy(e), this.depthPacking = e.depthPacking, this.map = e.map, this.alphaMap = e.alphaMap, this.displacementMap = e.displacementMap, this.displacementScale = e.displacementScale, this.displacementBias = e.displacementBias, this.wireframe = e.wireframe, this.wireframeLinewidth = e.wireframeLinewidth, this;
  }
}, $l = class extends xr {
  constructor(e) {
    super(), this.isMeshDistanceMaterial = !0, this.type = "MeshDistanceMaterial", this.map = null, this.alphaMap = null, this.displacementMap = null, this.displacementScale = 1, this.displacementBias = 0, this.setValues(e);
  }
  copy(e) {
    return super.copy(e), this.map = e.map, this.alphaMap = e.alphaMap, this.displacementMap = e.displacementMap, this.displacementScale = e.displacementScale, this.displacementBias = e.displacementBias, this;
  }
};
new class {
  constructor(e, t, i) {
    let r = this, a = !1, n = 0, s = 0, o, l = [];
    this.onStart = void 0, this.onLoad = e, this.onProgress = t, this.onError = i, this.abortController = new AbortController(), this.itemStart = function(c) {
      s++, a === !1 && r.onStart !== void 0 && r.onStart(c, n, s), a = !0;
    }, this.itemEnd = function(c) {
      n++, r.onProgress !== void 0 && r.onProgress(c, n, s), n === s && (a = !1, r.onLoad !== void 0 && r.onLoad());
    }, this.itemError = function(c) {
      r.onError !== void 0 && r.onError(c);
    }, this.resolveURL = function(c) {
      return o ? o(c) : c;
    }, this.setURLModifier = function(c) {
      return o = c, this;
    }, this.addHandler = function(c, u) {
      return l.push(c, u), this;
    }, this.removeHandler = function(c) {
      let u = l.indexOf(c);
      return u !== -1 && l.splice(u, 2), this;
    }, this.getHandler = function(c) {
      for (let u = 0, h = l.length; u < h; u += 2) {
        let d = l[u], m = l[u + 1];
        if (d.global && (d.lastIndex = 0), d.test(c)) return m;
      }
      return null;
    }, this.abort = function() {
      return this.abortController.abort(), this.abortController = new AbortController(), this;
    };
  }
}();
var Vs = class extends Ns {
  constructor(e = -1, t = 1, i = 1, r = -1, a = 0.1, n = 2e3) {
    super(), this.isOrthographicCamera = !0, this.type = "OrthographicCamera", this.zoom = 1, this.view = null, this.left = e, this.right = t, this.top = i, this.bottom = r, this.near = a, this.far = n, this.updateProjectionMatrix();
  }
  copy(e, t) {
    return super.copy(e, t), this.left = e.left, this.right = e.right, this.top = e.top, this.bottom = e.bottom, this.near = e.near, this.far = e.far, this.zoom = e.zoom, this.view = e.view === null ? null : Object.assign({}, e.view), this;
  }
  setViewOffset(e, t, i, r, a, n) {
    this.view === null && (this.view = { enabled: !0, fullWidth: 1, fullHeight: 1, offsetX: 0, offsetY: 0, width: 1, height: 1 }), this.view.enabled = !0, this.view.fullWidth = e, this.view.fullHeight = t, this.view.offsetX = i, this.view.offsetY = r, this.view.width = a, this.view.height = n, this.updateProjectionMatrix();
  }
  clearViewOffset() {
    this.view !== null && (this.view.enabled = !1), this.updateProjectionMatrix();
  }
  updateProjectionMatrix() {
    let e = (this.right - this.left) / (2 * this.zoom), t = (this.top - this.bottom) / (2 * this.zoom), i = (this.right + this.left) / 2, r = (this.top + this.bottom) / 2, a = i - e, n = i + e, s = r + t, o = r - t;
    if (this.view !== null && this.view.enabled) {
      let l = (this.right - this.left) / this.view.fullWidth / this.zoom, c = (this.top - this.bottom) / this.view.fullHeight / this.zoom;
      a += l * this.view.offsetX, n = a + l * this.view.width, s -= c * this.view.offsetY, o = s - c * this.view.height;
    }
    this.projectionMatrix.makeOrthographic(a, n, s, o, this.near, this.far, this.coordinateSystem, this.reversedDepth), this.projectionMatrixInverse.copy(this.projectionMatrix).invert();
  }
  toJSON(e) {
    let t = super.toJSON(e);
    return t.object.zoom = this.zoom, t.object.left = this.left, t.object.right = this.right, t.object.top = this.top, t.object.bottom = this.bottom, t.object.near = this.near, t.object.far = this.far, this.view !== null && (t.object.view = Object.assign({}, this.view)), t;
  }
}, Ql = class extends Ct {
  constructor(e = []) {
    super(), this.isArrayCamera = !0, this.isMultiViewCamera = !1, this.cameras = e;
  }
}, ec = class {
  constructor(e = !0) {
    this.autoStart = e, this.startTime = 0, this.oldTime = 0, this.elapsedTime = 0, this.running = !1;
  }
  start() {
    this.startTime = performance.now(), this.oldTime = this.startTime, this.elapsedTime = 0, this.running = !0;
  }
  stop() {
    this.getElapsedTime(), this.running = !1, this.autoStart = !1;
  }
  getElapsedTime() {
    return this.getDelta(), this.elapsedTime;
  }
  getDelta() {
    let e = 0;
    if (this.autoStart && !this.running) return this.start(), 0;
    if (this.running) {
      let t = performance.now();
      e = (t - this.oldTime) / 1e3, this.oldTime = t, this.elapsedTime += e;
    }
    return e;
  }
}, tc = "\\[\\]\\.:\\/", ic = "[^" + tc.replace("\\.", "") + "]";
"(WCOD+)?".replace("WCOD", ic);
var In = new dt(), rc = class {
  constructor(e, t, i = 0, r = 1 / 0) {
    this.ray = new an(e, t), this.near = i, this.far = r, this.camera = null, this.layers = new nn(), this.params = { Mesh: {}, Line: { threshold: 1 }, LOD: {}, Points: { threshold: 1 }, Sprite: {} };
  }
  set(e, t) {
    this.ray.set(e, t);
  }
  setFromCamera(e, t) {
    t.isPerspectiveCamera ? (this.ray.origin.setFromMatrixPosition(t.matrixWorld), this.ray.direction.set(e.x, e.y, 0.5).unproject(t).sub(this.ray.origin).normalize(), this.camera = t) : t.isOrthographicCamera ? (this.ray.origin.set(e.x, e.y, (t.near + t.far) / (t.near - t.far)).unproject(t), this.ray.direction.set(0, 0, -1).transformDirection(t.matrixWorld), this.camera = t) : console.error("THREE.Raycaster: Unsupported camera type: " + t.type);
  }
  setFromXRController(e) {
    return In.identity().extractRotation(e.matrixWorld), this.ray.origin.setFromMatrixPosition(e.matrixWorld), this.ray.direction.set(0, 0, -1).applyMatrix4(In), this;
  }
  intersectObject(e, t = !0, i = []) {
    return ja(e, this, i, t), i.sort(Nn), i;
  }
  intersectObjects(e, t = !0, i = []) {
    for (let r = 0, a = e.length; r < a; r++) ja(e[r], this, i, t);
    return i.sort(Nn), i;
  }
};
function Nn(e, t) {
  return e.distance - t.distance;
}
function ja(e, t, i, r) {
  let a = !0;
  if (e.layers.test(t.layers) && e.raycast(t, i) === !1 && (a = !1), a === !0 && r === !0) {
    let n = e.children;
    for (let s = 0, o = n.length; s < o; s++) ja(n[s], t, i, !0);
  }
}
function On(e, t, i, r) {
  let a = ac(r);
  switch (i) {
    case Po:
      return e * t;
    case Lo:
      return e * t / a.components * a.byteLength;
    case Uo:
      return e * t / a.components * a.byteLength;
    case Io:
      return e * t * 2 / a.components * a.byteLength;
    case No:
      return e * t * 2 / a.components * a.byteLength;
    case Do:
      return e * t * 3 / a.components * a.byteLength;
    case Ei:
      return e * t * 4 / a.components * a.byteLength;
    case Oo:
      return e * t * 4 / a.components * a.byteLength;
    case Fo:
    case Bo:
      return Math.floor((e + 3) / 4) * Math.floor((t + 3) / 4) * 8;
    case zo:
    case ko:
      return Math.floor((e + 3) / 4) * Math.floor((t + 3) / 4) * 16;
    case Vo:
    case Wo:
      return Math.max(e, 16) * Math.max(t, 8) / 4;
    case Ho:
    case Go:
      return Math.max(e, 8) * Math.max(t, 8) / 2;
    case Xo:
    case jo:
      return Math.floor((e + 3) / 4) * Math.floor((t + 3) / 4) * 8;
    case qo:
      return Math.floor((e + 3) / 4) * Math.floor((t + 3) / 4) * 16;
    case Yo:
      return Math.floor((e + 3) / 4) * Math.floor((t + 3) / 4) * 16;
    case Ko:
      return Math.floor((e + 4) / 5) * Math.floor((t + 3) / 4) * 16;
    case Zo:
      return Math.floor((e + 4) / 5) * Math.floor((t + 4) / 5) * 16;
    case Jo:
      return Math.floor((e + 5) / 6) * Math.floor((t + 4) / 5) * 16;
    case $o:
      return Math.floor((e + 5) / 6) * Math.floor((t + 5) / 6) * 16;
    case Qo:
      return Math.floor((e + 7) / 8) * Math.floor((t + 4) / 5) * 16;
    case el:
      return Math.floor((e + 7) / 8) * Math.floor((t + 5) / 6) * 16;
    case tl:
      return Math.floor((e + 7) / 8) * Math.floor((t + 7) / 8) * 16;
    case il:
      return Math.floor((e + 9) / 10) * Math.floor((t + 4) / 5) * 16;
    case rl:
      return Math.floor((e + 9) / 10) * Math.floor((t + 5) / 6) * 16;
    case al:
      return Math.floor((e + 9) / 10) * Math.floor((t + 7) / 8) * 16;
    case nl:
      return Math.floor((e + 9) / 10) * Math.floor((t + 9) / 10) * 16;
    case sl:
      return Math.floor((e + 11) / 12) * Math.floor((t + 9) / 10) * 16;
    case ol:
      return Math.floor((e + 11) / 12) * Math.floor((t + 11) / 12) * 16;
    case ll:
    case cl:
    case ul:
      return Math.ceil(e / 4) * Math.ceil(t / 4) * 16;
    case hl:
    case dl:
      return Math.ceil(e / 4) * Math.ceil(t / 4) * 8;
    case pl:
    case fl:
      return Math.ceil(e / 4) * Math.ceil(t / 4) * 16;
  }
  throw Error(`Unable to determine texture byte length for ${i} format.`);
}
function ac(e) {
  switch (e) {
    case dr:
    case So:
      return { byteLength: 1, components: 1 };
    case Eo:
    case Mo:
    case ia:
      return { byteLength: 2, components: 1 };
    case To:
    case wo:
      return { byteLength: 2, components: 4 };
    case tn:
    case bo:
    case ta:
      return { byteLength: 4, components: 1 };
    case Ro:
    case Co:
      return { byteLength: 4, components: 3 };
  }
  throw Error(`Unknown texture type ${e}.`);
}
typeof __THREE_DEVTOOLS__ < "u" && __THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register", { detail: { revision: "180" } })), typeof window < "u" && (window.__THREE__ ? console.warn("WARNING: Multiple instances of Three.js being imported.") : window.__THREE__ = "180");
function Gs() {
  let e = null, t = !1, i = null, r = null;
  function a(n, s) {
    i(n, s), r = e.requestAnimationFrame(a);
  }
  return { start: function() {
    t !== !0 && i !== null && (r = e.requestAnimationFrame(a), t = !0);
  }, stop: function() {
    e.cancelAnimationFrame(r), t = !1;
  }, setAnimationLoop: function(n) {
    i = n;
  }, setContext: function(n) {
    e = n;
  } };
}
function nc(e) {
  let t = /* @__PURE__ */ new WeakMap();
  function i(o, l) {
    let c = o.array, u = o.usage, h = c.byteLength, d = e.createBuffer();
    e.bindBuffer(l, d), e.bufferData(l, c, u), o.onUploadCallback();
    let m;
    if (c instanceof Float32Array) m = e.FLOAT;
    else if (typeof Float16Array < "u" && c instanceof Float16Array) m = e.HALF_FLOAT;
    else if (c instanceof Uint16Array) m = o.isFloat16BufferAttribute ? e.HALF_FLOAT : e.UNSIGNED_SHORT;
    else if (c instanceof Int16Array) m = e.SHORT;
    else if (c instanceof Uint32Array) m = e.UNSIGNED_INT;
    else if (c instanceof Int32Array) m = e.INT;
    else if (c instanceof Int8Array) m = e.BYTE;
    else if (c instanceof Uint8Array) m = e.UNSIGNED_BYTE;
    else if (c instanceof Uint8ClampedArray) m = e.UNSIGNED_BYTE;
    else throw Error("THREE.WebGLAttributes: Unsupported buffer data format: " + c);
    return { buffer: d, type: m, bytesPerElement: c.BYTES_PER_ELEMENT, version: o.version, size: h };
  }
  function r(o, l, c) {
    let u = l.array, h = l.updateRanges;
    if (e.bindBuffer(c, o), h.length === 0) e.bufferSubData(c, 0, u);
    else {
      h.sort((m, x) => m.start - x.start);
      let d = 0;
      for (let m = 1; m < h.length; m++) {
        let x = h[d], _ = h[m];
        _.start <= x.start + x.count + 1 ? x.count = Math.max(x.count, _.start + _.count - x.start) : (++d, h[d] = _);
      }
      h.length = d + 1;
      for (let m = 0, x = h.length; m < x; m++) {
        let _ = h[m];
        e.bufferSubData(c, _.start * u.BYTES_PER_ELEMENT, u, _.start, _.count);
      }
      l.clearUpdateRanges();
    }
    l.onUploadCallback();
  }
  function a(o) {
    return o.isInterleavedBufferAttribute && (o = o.data), t.get(o);
  }
  function n(o) {
    o.isInterleavedBufferAttribute && (o = o.data);
    let l = t.get(o);
    l && (e.deleteBuffer(l.buffer), t.delete(o));
  }
  function s(o, l) {
    if (o.isInterleavedBufferAttribute && (o = o.data), o.isGLBufferAttribute) {
      let u = t.get(o);
      (!u || u.version < o.version) && t.set(o, { buffer: o.buffer, type: o.type, bytesPerElement: o.elementSize, version: o.version });
      return;
    }
    let c = t.get(o);
    if (c === void 0) t.set(o, i(o, l));
    else if (c.version < o.version) {
      if (c.size !== o.array.byteLength) throw Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");
      r(c.buffer, o, l), c.version = o.version;
    }
  }
  return { get: a, remove: n, update: s };
}
var Ie = { alphahash_fragment: `#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`, alphahash_pars_fragment: `#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`, alphamap_fragment: `#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`, alphamap_pars_fragment: `#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`, alphatest_fragment: `#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`, alphatest_pars_fragment: `#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`, aomap_fragment: `#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`, aomap_pars_fragment: `#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`, batching_pars_vertex: `#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`, batching_vertex: `#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`, begin_vertex: `vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`, beginnormal_vertex: `vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`, bsdfs: `float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`, iridescence_fragment: `#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`, bumpmap_pars_fragment: `#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`, clipping_planes_fragment: `#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`, clipping_planes_pars_fragment: `#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`, clipping_planes_pars_vertex: `#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`, clipping_planes_vertex: `#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`, color_fragment: `#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`, color_pars_fragment: `#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`, color_pars_vertex: `#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`, color_vertex: `#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`, common: `#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`, cube_uv_reflection_fragment: `#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`, defaultnormal_vertex: `vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`, displacementmap_pars_vertex: `#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`, displacementmap_vertex: `#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`, emissivemap_fragment: `#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`, emissivemap_pars_fragment: `#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`, colorspace_fragment: "gl_FragColor = linearToOutputTexel( gl_FragColor );", colorspace_pars_fragment: `vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`, envmap_fragment: `#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`, envmap_common_pars_fragment: `#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`, envmap_pars_fragment: `#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`, envmap_pars_vertex: `#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`, envmap_physical_pars_fragment: `#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`, envmap_vertex: `#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`, fog_vertex: `#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`, fog_pars_vertex: `#ifdef USE_FOG
	varying float vFogDepth;
#endif`, fog_fragment: `#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`, fog_pars_fragment: `#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`, gradientmap_pars_fragment: `#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`, lightmap_pars_fragment: `#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`, lights_lambert_fragment: `LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`, lights_lambert_pars_fragment: `varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`, lights_pars_begin: `uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`, lights_toon_fragment: `ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`, lights_toon_pars_fragment: `varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`, lights_phong_fragment: `BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`, lights_phong_pars_fragment: `varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`, lights_physical_fragment: `PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`, lights_physical_pars_fragment: `struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`, lights_fragment_begin: `
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`, lights_fragment_maps: `#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`, lights_fragment_end: `#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`, logdepthbuf_fragment: `#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`, logdepthbuf_pars_fragment: `#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`, logdepthbuf_pars_vertex: `#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`, logdepthbuf_vertex: `#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`, map_fragment: `#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`, map_pars_fragment: `#ifdef USE_MAP
	uniform sampler2D map;
#endif`, map_particle_fragment: `#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`, map_particle_pars_fragment: `#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`, metalnessmap_fragment: `float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`, metalnessmap_pars_fragment: `#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`, morphinstance_vertex: `#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`, morphcolor_vertex: `#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`, morphnormal_vertex: `#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`, morphtarget_pars_vertex: `#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`, morphtarget_vertex: `#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`, normal_fragment_begin: `float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`, normal_fragment_maps: `#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`, normal_pars_fragment: `#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`, normal_pars_vertex: `#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`, normal_vertex: `#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`, normalmap_pars_fragment: `#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`, clearcoat_normal_fragment_begin: `#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`, clearcoat_normal_fragment_maps: `#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`, clearcoat_pars_fragment: `#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`, iridescence_pars_fragment: `#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`, opaque_fragment: `#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`, packing: `vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`, premultiplied_alpha_fragment: `#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`, project_vertex: `vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`, dithering_fragment: `#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`, dithering_pars_fragment: `#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`, roughnessmap_fragment: `float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`, roughnessmap_pars_fragment: `#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`, shadowmap_pars_fragment: `#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		float depth = unpackRGBAToDepth( texture2D( depths, uv ) );
		#ifdef USE_REVERSED_DEPTH_BUFFER
			return step( depth, compare );
		#else
			return step( compare, depth );
		#endif
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow( sampler2D shadow, vec2 uv, float compare ) {
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		#ifdef USE_REVERSED_DEPTH_BUFFER
			float hard_shadow = step( distribution.x, compare );
		#else
			float hard_shadow = step( compare, distribution.x );
		#endif
		if ( hard_shadow != 1.0 ) {
			float distance = compare - distribution.x;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`, shadowmap_pars_vertex: `#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`, shadowmap_vertex: `#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`, shadowmask_pars_fragment: `float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`, skinbase_vertex: `#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`, skinning_pars_vertex: `#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`, skinning_vertex: `#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`, skinnormal_vertex: `#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`, specularmap_fragment: `float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`, specularmap_pars_fragment: `#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`, tonemapping_fragment: `#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`, tonemapping_pars_fragment: `#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`, transmission_fragment: `#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`, transmission_pars_fragment: `#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`, uv_pars_fragment: `#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`, uv_pars_vertex: `#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`, uv_vertex: `#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`, worldpos_vertex: `#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`, background_vert: `varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`, background_frag: `uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`, backgroundCube_vert: `varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`, backgroundCube_frag: `#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`, cube_vert: `varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`, cube_frag: `uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`, depth_vert: `#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`, depth_frag: `#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`, distanceRGBA_vert: `#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`, distanceRGBA_frag: `#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`, equirect_vert: `varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`, equirect_frag: `uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`, linedashed_vert: `uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`, linedashed_frag: `uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`, meshbasic_vert: `#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`, meshbasic_frag: `uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`, meshlambert_vert: `#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`, meshlambert_frag: `#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`, meshmatcap_vert: `#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`, meshmatcap_frag: `#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`, meshnormal_vert: `#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`, meshnormal_frag: `#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`, meshphong_vert: `#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`, meshphong_frag: `#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`, meshphysical_vert: `#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`, meshphysical_frag: `#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`, meshtoon_vert: `#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`, meshtoon_frag: `#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`, points_vert: `uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`, points_frag: `uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`, shadow_vert: `#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`, shadow_frag: `uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`, sprite_vert: `uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`, sprite_frag: `uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}` }, oe = { common: { diffuse: { value: new He(16777215) }, opacity: { value: 1 }, map: { value: null }, mapTransform: { value: new Ne() }, alphaMap: { value: null }, alphaMapTransform: { value: new Ne() }, alphaTest: { value: 0 } }, specularmap: { specularMap: { value: null }, specularMapTransform: { value: new Ne() } }, envmap: { envMap: { value: null }, envMapRotation: { value: new Ne() }, flipEnvMap: { value: -1 }, reflectivity: { value: 1 }, ior: { value: 1.5 }, refractionRatio: { value: 0.98 } }, aomap: { aoMap: { value: null }, aoMapIntensity: { value: 1 }, aoMapTransform: { value: new Ne() } }, lightmap: { lightMap: { value: null }, lightMapIntensity: { value: 1 }, lightMapTransform: { value: new Ne() } }, bumpmap: { bumpMap: { value: null }, bumpMapTransform: { value: new Ne() }, bumpScale: { value: 1 } }, normalmap: { normalMap: { value: null }, normalMapTransform: { value: new Ne() }, normalScale: { value: new ke(1, 1) } }, displacementmap: { displacementMap: { value: null }, displacementMapTransform: { value: new Ne() }, displacementScale: { value: 1 }, displacementBias: { value: 0 } }, emissivemap: { emissiveMap: { value: null }, emissiveMapTransform: { value: new Ne() } }, metalnessmap: { metalnessMap: { value: null }, metalnessMapTransform: { value: new Ne() } }, roughnessmap: { roughnessMap: { value: null }, roughnessMapTransform: { value: new Ne() } }, gradientmap: { gradientMap: { value: null } }, fog: { fogDensity: { value: 25e-5 }, fogNear: { value: 1 }, fogFar: { value: 2e3 }, fogColor: { value: new He(16777215) } }, lights: { ambientLightColor: { value: [] }, lightProbe: { value: [] }, directionalLights: { value: [], properties: { direction: {}, color: {} } }, directionalLightShadows: { value: [], properties: { shadowIntensity: 1, shadowBias: {}, shadowNormalBias: {}, shadowRadius: {}, shadowMapSize: {} } }, directionalShadowMap: { value: [] }, directionalShadowMatrix: { value: [] }, spotLights: { value: [], properties: { color: {}, position: {}, direction: {}, distance: {}, coneCos: {}, penumbraCos: {}, decay: {} } }, spotLightShadows: { value: [], properties: { shadowIntensity: 1, shadowBias: {}, shadowNormalBias: {}, shadowRadius: {}, shadowMapSize: {} } }, spotLightMap: { value: [] }, spotShadowMap: { value: [] }, spotLightMatrix: { value: [] }, pointLights: { value: [], properties: { color: {}, position: {}, decay: {}, distance: {} } }, pointLightShadows: { value: [], properties: { shadowIntensity: 1, shadowBias: {}, shadowNormalBias: {}, shadowRadius: {}, shadowMapSize: {}, shadowCameraNear: {}, shadowCameraFar: {} } }, pointShadowMap: { value: [] }, pointShadowMatrix: { value: [] }, hemisphereLights: { value: [], properties: { direction: {}, skyColor: {}, groundColor: {} } }, rectAreaLights: { value: [], properties: { color: {}, position: {}, width: {}, height: {} } }, ltc_1: { value: null }, ltc_2: { value: null } }, points: { diffuse: { value: new He(16777215) }, opacity: { value: 1 }, size: { value: 1 }, scale: { value: 1 }, map: { value: null }, alphaMap: { value: null }, alphaMapTransform: { value: new Ne() }, alphaTest: { value: 0 }, uvTransform: { value: new Ne() } }, sprite: { diffuse: { value: new He(16777215) }, opacity: { value: 1 }, center: { value: new ke(0.5, 0.5) }, rotation: { value: 0 }, map: { value: null }, mapTransform: { value: new Ne() }, alphaMap: { value: null }, alphaMapTransform: { value: new Ne() }, alphaTest: { value: 0 } } }, Gt = { basic: { uniforms: xt([oe.common, oe.specularmap, oe.envmap, oe.aomap, oe.lightmap, oe.fog]), vertexShader: Ie.meshbasic_vert, fragmentShader: Ie.meshbasic_frag }, lambert: { uniforms: xt([oe.common, oe.specularmap, oe.envmap, oe.aomap, oe.lightmap, oe.emissivemap, oe.bumpmap, oe.normalmap, oe.displacementmap, oe.fog, oe.lights, { emissive: { value: new He(0) } }]), vertexShader: Ie.meshlambert_vert, fragmentShader: Ie.meshlambert_frag }, phong: { uniforms: xt([oe.common, oe.specularmap, oe.envmap, oe.aomap, oe.lightmap, oe.emissivemap, oe.bumpmap, oe.normalmap, oe.displacementmap, oe.fog, oe.lights, { emissive: { value: new He(0) }, specular: { value: new He(1118481) }, shininess: { value: 30 } }]), vertexShader: Ie.meshphong_vert, fragmentShader: Ie.meshphong_frag }, standard: { uniforms: xt([oe.common, oe.envmap, oe.aomap, oe.lightmap, oe.emissivemap, oe.bumpmap, oe.normalmap, oe.displacementmap, oe.roughnessmap, oe.metalnessmap, oe.fog, oe.lights, { emissive: { value: new He(0) }, roughness: { value: 1 }, metalness: { value: 0 }, envMapIntensity: { value: 1 } }]), vertexShader: Ie.meshphysical_vert, fragmentShader: Ie.meshphysical_frag }, toon: { uniforms: xt([oe.common, oe.aomap, oe.lightmap, oe.emissivemap, oe.bumpmap, oe.normalmap, oe.displacementmap, oe.gradientmap, oe.fog, oe.lights, { emissive: { value: new He(0) } }]), vertexShader: Ie.meshtoon_vert, fragmentShader: Ie.meshtoon_frag }, matcap: { uniforms: xt([oe.common, oe.bumpmap, oe.normalmap, oe.displacementmap, oe.fog, { matcap: { value: null } }]), vertexShader: Ie.meshmatcap_vert, fragmentShader: Ie.meshmatcap_frag }, points: { uniforms: xt([oe.points, oe.fog]), vertexShader: Ie.points_vert, fragmentShader: Ie.points_frag }, dashed: { uniforms: xt([oe.common, oe.fog, { scale: { value: 1 }, dashSize: { value: 1 }, totalSize: { value: 2 } }]), vertexShader: Ie.linedashed_vert, fragmentShader: Ie.linedashed_frag }, depth: { uniforms: xt([oe.common, oe.displacementmap]), vertexShader: Ie.depth_vert, fragmentShader: Ie.depth_frag }, normal: { uniforms: xt([oe.common, oe.bumpmap, oe.normalmap, oe.displacementmap, { opacity: { value: 1 } }]), vertexShader: Ie.meshnormal_vert, fragmentShader: Ie.meshnormal_frag }, sprite: { uniforms: xt([oe.sprite, oe.fog]), vertexShader: Ie.sprite_vert, fragmentShader: Ie.sprite_frag }, background: { uniforms: { uvTransform: { value: new Ne() }, t2D: { value: null }, backgroundIntensity: { value: 1 } }, vertexShader: Ie.background_vert, fragmentShader: Ie.background_frag }, backgroundCube: { uniforms: { envMap: { value: null }, flipEnvMap: { value: -1 }, backgroundBlurriness: { value: 0 }, backgroundIntensity: { value: 1 }, backgroundRotation: { value: new Ne() } }, vertexShader: Ie.backgroundCube_vert, fragmentShader: Ie.backgroundCube_frag }, cube: { uniforms: { tCube: { value: null }, tFlip: { value: -1 }, opacity: { value: 1 } }, vertexShader: Ie.cube_vert, fragmentShader: Ie.cube_frag }, equirect: { uniforms: { tEquirect: { value: null } }, vertexShader: Ie.equirect_vert, fragmentShader: Ie.equirect_frag }, distanceRGBA: { uniforms: xt([oe.common, oe.displacementmap, { referencePosition: { value: new F() }, nearDistance: { value: 1 }, farDistance: { value: 1e3 } }]), vertexShader: Ie.distanceRGBA_vert, fragmentShader: Ie.distanceRGBA_frag }, shadow: { uniforms: xt([oe.lights, oe.fog, { color: { value: new He(0) }, opacity: { value: 1 } }]), vertexShader: Ie.shadow_vert, fragmentShader: Ie.shadow_frag } };
Gt.physical = { uniforms: xt([Gt.standard.uniforms, { clearcoat: { value: 0 }, clearcoatMap: { value: null }, clearcoatMapTransform: { value: new Ne() }, clearcoatNormalMap: { value: null }, clearcoatNormalMapTransform: { value: new Ne() }, clearcoatNormalScale: { value: new ke(1, 1) }, clearcoatRoughness: { value: 0 }, clearcoatRoughnessMap: { value: null }, clearcoatRoughnessMapTransform: { value: new Ne() }, dispersion: { value: 0 }, iridescence: { value: 0 }, iridescenceMap: { value: null }, iridescenceMapTransform: { value: new Ne() }, iridescenceIOR: { value: 1.3 }, iridescenceThicknessMinimum: { value: 100 }, iridescenceThicknessMaximum: { value: 400 }, iridescenceThicknessMap: { value: null }, iridescenceThicknessMapTransform: { value: new Ne() }, sheen: { value: 0 }, sheenColor: { value: new He(0) }, sheenColorMap: { value: null }, sheenColorMapTransform: { value: new Ne() }, sheenRoughness: { value: 1 }, sheenRoughnessMap: { value: null }, sheenRoughnessMapTransform: { value: new Ne() }, transmission: { value: 0 }, transmissionMap: { value: null }, transmissionMapTransform: { value: new Ne() }, transmissionSamplerSize: { value: new ke() }, transmissionSamplerMap: { value: null }, thickness: { value: 0 }, thicknessMap: { value: null }, thicknessMapTransform: { value: new Ne() }, attenuationDistance: { value: 0 }, attenuationColor: { value: new He(0) }, specularColor: { value: new He(1, 1, 1) }, specularColorMap: { value: null }, specularColorMapTransform: { value: new Ne() }, specularIntensity: { value: 1 }, specularIntensityMap: { value: null }, specularIntensityMapTransform: { value: new Ne() }, anisotropyVector: { value: new ke() }, anisotropyMap: { value: null }, anisotropyMapTransform: { value: new Ne() } }]), vertexShader: Ie.meshphysical_vert, fragmentShader: Ie.meshphysical_frag };
var Vr = { r: 0, b: 0, g: 0 }, fi = new bi(), sc = new dt();
function oc(e, t, i, r, a, n, s) {
  let o = new He(0), l = n === !0 ? 0 : 1, c, u, h = null, d = 0, m = null;
  function x(y) {
    let A = y.isScene === !0 ? y.background : null;
    return A && A.isTexture && (A = (y.backgroundBlurriness > 0 ? i : t).get(A)), A;
  }
  function _(y) {
    let A = !1, I = x(y);
    I === null ? p(o, l) : I && I.isColor && (p(I, 1), A = !0);
    let L = e.xr.getEnvironmentBlendMode();
    L === "additive" ? r.buffers.color.setClear(0, 0, 0, 1, s) : L === "alpha-blend" && r.buffers.color.setClear(0, 0, 0, 0, s), (e.autoClear || A) && (r.buffers.depth.setTest(!0), r.buffers.depth.setMask(!0), r.buffers.color.setMask(!0), e.clear(e.autoClearColor, e.autoClearDepth, e.autoClearStencil));
  }
  function f(y, A) {
    let I = x(A);
    I && (I.isCubeTexture || I.mapping === 306) ? (u === void 0 && (u = new Ot(new on(1, 1, 1), new Xt({ name: "BackgroundCubeMaterial", uniforms: Ki(Gt.backgroundCube.uniforms), vertexShader: Gt.backgroundCube.vertexShader, fragmentShader: Gt.backgroundCube.fragmentShader, side: 1, depthTest: !1, depthWrite: !1, fog: !1, allowOverride: !1 })), u.geometry.deleteAttribute("normal"), u.geometry.deleteAttribute("uv"), u.onBeforeRender = function(L, D, z) {
      this.matrixWorld.copyPosition(z.matrixWorld);
    }, Object.defineProperty(u.material, "envMap", { get: function() {
      return this.uniforms.envMap.value;
    } }), a.update(u)), fi.copy(A.backgroundRotation), fi.x *= -1, fi.y *= -1, fi.z *= -1, I.isCubeTexture && I.isRenderTargetTexture === !1 && (fi.y *= -1, fi.z *= -1), u.material.uniforms.envMap.value = I, u.material.uniforms.flipEnvMap.value = I.isCubeTexture && I.isRenderTargetTexture === !1 ? -1 : 1, u.material.uniforms.backgroundBlurriness.value = A.backgroundBlurriness, u.material.uniforms.backgroundIntensity.value = A.backgroundIntensity, u.material.uniforms.backgroundRotation.value.setFromMatrix4(sc.makeRotationFromEuler(fi)), u.material.toneMapped = We.getTransfer(I.colorSpace) !== $r, (h !== I || d !== I.version || m !== e.toneMapping) && (u.material.needsUpdate = !0, h = I, d = I.version, m = e.toneMapping), u.layers.enableAll(), y.unshift(u, u.geometry, u.material, 0, 0, null)) : I && I.isTexture && (c === void 0 && (c = new Ot(new aa(2, 2), new Xt({ name: "BackgroundMaterial", uniforms: Ki(Gt.background.uniforms), vertexShader: Gt.background.vertexShader, fragmentShader: Gt.background.fragmentShader, side: 0, depthTest: !1, depthWrite: !1, fog: !1, allowOverride: !1 })), c.geometry.deleteAttribute("normal"), Object.defineProperty(c.material, "map", { get: function() {
      return this.uniforms.t2D.value;
    } }), a.update(c)), c.material.uniforms.t2D.value = I, c.material.uniforms.backgroundIntensity.value = A.backgroundIntensity, c.material.toneMapped = We.getTransfer(I.colorSpace) !== $r, I.matrixAutoUpdate === !0 && I.updateMatrix(), c.material.uniforms.uvTransform.value.copy(I.matrix), (h !== I || d !== I.version || m !== e.toneMapping) && (c.material.needsUpdate = !0, h = I, d = I.version, m = e.toneMapping), c.layers.enableAll(), y.unshift(c, c.geometry, c.material, 0, 0, null));
  }
  function p(y, A) {
    y.getRGB(Vr, Is(e)), r.buffers.color.setClear(Vr.r, Vr.g, Vr.b, A, s);
  }
  function R() {
    u !== void 0 && (u.geometry.dispose(), u.material.dispose(), u = void 0), c !== void 0 && (c.geometry.dispose(), c.material.dispose(), c = void 0);
  }
  return { getClearColor: function() {
    return o;
  }, setClearColor: function(y, A = 1) {
    o.set(y), l = A, p(o, l);
  }, getClearAlpha: function() {
    return l;
  }, setClearAlpha: function(y) {
    l = y, p(o, l);
  }, render: _, addToRenderList: f, dispose: R };
}
function lc(e, t) {
  let i = e.getParameter(e.MAX_VERTEX_ATTRIBS), r = {}, a = d(null), n = a, s = !1;
  function o(S, w, W, V, k) {
    let J = !1, H = h(V, W, w);
    n !== H && (n = H, c(n.object)), J = m(S, V, W, k), J && x(S, V, W, k), k !== null && t.update(k, e.ELEMENT_ARRAY_BUFFER), (J || s) && (s = !1, A(S, w, W, V), k !== null && e.bindBuffer(e.ELEMENT_ARRAY_BUFFER, t.get(k).buffer));
  }
  function l() {
    return e.createVertexArray();
  }
  function c(S) {
    return e.bindVertexArray(S);
  }
  function u(S) {
    return e.deleteVertexArray(S);
  }
  function h(S, w, W) {
    let V = W.wireframe === !0, k = r[S.id];
    k === void 0 && (k = {}, r[S.id] = k);
    let J = k[w.id];
    J === void 0 && (J = {}, k[w.id] = J);
    let H = J[V];
    return H === void 0 && (H = d(l()), J[V] = H), H;
  }
  function d(S) {
    let w = [], W = [], V = [];
    for (let k = 0; k < i; k++) w[k] = 0, W[k] = 0, V[k] = 0;
    return { geometry: null, program: null, wireframe: !1, newAttributes: w, enabledAttributes: W, attributeDivisors: V, object: S, attributes: {}, index: null };
  }
  function m(S, w, W, V) {
    let k = n.attributes, J = w.attributes, H = 0, Q = W.getAttributes();
    for (let X in Q) if (Q[X].location >= 0) {
      let ie = k[X], pe = J[X];
      if (pe === void 0 && (X === "instanceMatrix" && S.instanceMatrix && (pe = S.instanceMatrix), X === "instanceColor" && S.instanceColor && (pe = S.instanceColor)), ie === void 0 || ie.attribute !== pe || pe && ie.data !== pe.data) return !0;
      H++;
    }
    return n.attributesNum !== H || n.index !== V;
  }
  function x(S, w, W, V) {
    let k = {}, J = w.attributes, H = 0, Q = W.getAttributes();
    for (let X in Q) if (Q[X].location >= 0) {
      let ie = J[X];
      ie === void 0 && (X === "instanceMatrix" && S.instanceMatrix && (ie = S.instanceMatrix), X === "instanceColor" && S.instanceColor && (ie = S.instanceColor));
      let pe = {};
      pe.attribute = ie, ie && ie.data && (pe.data = ie.data), k[X] = pe, H++;
    }
    n.attributes = k, n.attributesNum = H, n.index = V;
  }
  function _() {
    let S = n.newAttributes;
    for (let w = 0, W = S.length; w < W; w++) S[w] = 0;
  }
  function f(S) {
    p(S, 0);
  }
  function p(S, w) {
    let W = n.newAttributes, V = n.enabledAttributes, k = n.attributeDivisors;
    W[S] = 1, V[S] === 0 && (e.enableVertexAttribArray(S), V[S] = 1), k[S] !== w && (e.vertexAttribDivisor(S, w), k[S] = w);
  }
  function R() {
    let S = n.newAttributes, w = n.enabledAttributes;
    for (let W = 0, V = w.length; W < V; W++) w[W] !== S[W] && (e.disableVertexAttribArray(W), w[W] = 0);
  }
  function y(S, w, W, V, k, J, H) {
    H === !0 ? e.vertexAttribIPointer(S, w, W, k, J) : e.vertexAttribPointer(S, w, W, V, k, J);
  }
  function A(S, w, W, V) {
    _();
    let k = V.attributes, J = W.getAttributes(), H = w.defaultAttributeValues;
    for (let Q in J) {
      let X = J[Q];
      if (X.location >= 0) {
        let ie = k[Q];
        if (ie === void 0 && (Q === "instanceMatrix" && S.instanceMatrix && (ie = S.instanceMatrix), Q === "instanceColor" && S.instanceColor && (ie = S.instanceColor)), ie !== void 0) {
          let pe = ie.normalized, Ue = ie.itemSize, Oe = t.get(ie);
          if (Oe === void 0) continue;
          let it = Oe.buffer, Xe = Oe.type, j = Oe.bytesPerElement, ne = Xe === e.INT || Xe === e.UNSIGNED_INT || ie.gpuType === 1013;
          if (ie.isInterleavedBufferAttribute) {
            let se = ie.data, Se = se.stride, Le = ie.offset;
            if (se.isInstancedInterleavedBuffer) {
              for (let ge = 0; ge < X.locationSize; ge++) p(X.location + ge, se.meshPerAttribute);
              S.isInstancedMesh !== !0 && V._maxInstanceCount === void 0 && (V._maxInstanceCount = se.meshPerAttribute * se.count);
            } else for (let ge = 0; ge < X.locationSize; ge++) f(X.location + ge);
            e.bindBuffer(e.ARRAY_BUFFER, it);
            for (let ge = 0; ge < X.locationSize; ge++) y(X.location + ge, Ue / X.locationSize, Xe, pe, Se * j, (Le + Ue / X.locationSize * ge) * j, ne);
          } else {
            if (ie.isInstancedBufferAttribute) {
              for (let se = 0; se < X.locationSize; se++) p(X.location + se, ie.meshPerAttribute);
              S.isInstancedMesh !== !0 && V._maxInstanceCount === void 0 && (V._maxInstanceCount = ie.meshPerAttribute * ie.count);
            } else for (let se = 0; se < X.locationSize; se++) f(X.location + se);
            e.bindBuffer(e.ARRAY_BUFFER, it);
            for (let se = 0; se < X.locationSize; se++) y(X.location + se, Ue / X.locationSize, Xe, pe, Ue * j, Ue / X.locationSize * se * j, ne);
          }
        } else if (H !== void 0) {
          let pe = H[Q];
          if (pe !== void 0) switch (pe.length) {
            case 2:
              e.vertexAttrib2fv(X.location, pe);
              break;
            case 3:
              e.vertexAttrib3fv(X.location, pe);
              break;
            case 4:
              e.vertexAttrib4fv(X.location, pe);
              break;
            default:
              e.vertexAttrib1fv(X.location, pe);
          }
        }
      }
    }
    R();
  }
  function I() {
    z();
    for (let S in r) {
      let w = r[S];
      for (let W in w) {
        let V = w[W];
        for (let k in V) u(V[k].object), delete V[k];
        delete w[W];
      }
      delete r[S];
    }
  }
  function L(S) {
    if (r[S.id] === void 0) return;
    let w = r[S.id];
    for (let W in w) {
      let V = w[W];
      for (let k in V) u(V[k].object), delete V[k];
      delete w[W];
    }
    delete r[S.id];
  }
  function D(S) {
    for (let w in r) {
      let W = r[w];
      if (W[S.id] === void 0) continue;
      let V = W[S.id];
      for (let k in V) u(V[k].object), delete V[k];
      delete W[S.id];
    }
  }
  function z() {
    M(), s = !0, n !== a && (n = a, c(n.object));
  }
  function M() {
    a.geometry = null, a.program = null, a.wireframe = !1;
  }
  return { setup: o, reset: z, resetDefaultState: M, dispose: I, releaseStatesOfGeometry: L, releaseStatesOfProgram: D, initAttributes: _, enableAttribute: f, disableUnusedAttributes: R };
}
function cc(e, t, i) {
  let r;
  function a(c) {
    r = c;
  }
  function n(c, u) {
    e.drawArrays(r, c, u), i.update(u, r, 1);
  }
  function s(c, u, h) {
    h !== 0 && (e.drawArraysInstanced(r, c, u, h), i.update(u, r, h));
  }
  function o(c, u, h) {
    if (h === 0) return;
    t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(r, c, 0, u, 0, h);
    let d = 0;
    for (let m = 0; m < h; m++) d += u[m];
    i.update(d, r, 1);
  }
  function l(c, u, h, d) {
    if (h === 0) return;
    let m = t.get("WEBGL_multi_draw");
    if (m === null) for (let x = 0; x < c.length; x++) s(c[x], u[x], d[x]);
    else {
      m.multiDrawArraysInstancedWEBGL(r, c, 0, u, 0, d, 0, h);
      let x = 0;
      for (let _ = 0; _ < h; _++) x += u[_] * d[_];
      i.update(x, r, 1);
    }
  }
  this.setMode = a, this.render = n, this.renderInstances = s, this.renderMultiDraw = o, this.renderMultiDrawInstances = l;
}
function uc(e, t, i, r) {
  let a;
  function n() {
    if (a !== void 0) return a;
    if (t.has("EXT_texture_filter_anisotropic") === !0) {
      let D = t.get("EXT_texture_filter_anisotropic");
      a = e.getParameter(D.MAX_TEXTURE_MAX_ANISOTROPY_EXT);
    } else a = 0;
    return a;
  }
  function s(D) {
    return !(D !== 1023 && r.convert(D) !== e.getParameter(e.IMPLEMENTATION_COLOR_READ_FORMAT));
  }
  function o(D) {
    let z = D === 1016 && (t.has("EXT_color_buffer_half_float") || t.has("EXT_color_buffer_float"));
    return !(D !== 1009 && r.convert(D) !== e.getParameter(e.IMPLEMENTATION_COLOR_READ_TYPE) && D !== 1015 && !z);
  }
  function l(D) {
    if (D === "highp") {
      if (e.getShaderPrecisionFormat(e.VERTEX_SHADER, e.HIGH_FLOAT).precision > 0 && e.getShaderPrecisionFormat(e.FRAGMENT_SHADER, e.HIGH_FLOAT).precision > 0) return "highp";
      D = "mediump";
    }
    return D === "mediump" && e.getShaderPrecisionFormat(e.VERTEX_SHADER, e.MEDIUM_FLOAT).precision > 0 && e.getShaderPrecisionFormat(e.FRAGMENT_SHADER, e.MEDIUM_FLOAT).precision > 0 ? "mediump" : "lowp";
  }
  let c = i.precision === void 0 ? "highp" : i.precision, u = l(c);
  u !== c && (console.warn("THREE.WebGLRenderer:", c, "not supported, using", u, "instead."), c = u);
  let h = i.logarithmicDepthBuffer === !0, d = i.reversedDepthBuffer === !0 && t.has("EXT_clip_control"), m = e.getParameter(e.MAX_TEXTURE_IMAGE_UNITS), x = e.getParameter(e.MAX_VERTEX_TEXTURE_IMAGE_UNITS), _ = e.getParameter(e.MAX_TEXTURE_SIZE), f = e.getParameter(e.MAX_CUBE_MAP_TEXTURE_SIZE), p = e.getParameter(e.MAX_VERTEX_ATTRIBS), R = e.getParameter(e.MAX_VERTEX_UNIFORM_VECTORS), y = e.getParameter(e.MAX_VARYING_VECTORS), A = e.getParameter(e.MAX_FRAGMENT_UNIFORM_VECTORS), I = x > 0, L = e.getParameter(e.MAX_SAMPLES);
  return { isWebGL2: !0, getMaxAnisotropy: n, getMaxPrecision: l, textureFormatReadable: s, textureTypeReadable: o, precision: c, logarithmicDepthBuffer: h, reversedDepthBuffer: d, maxTextures: m, maxVertexTextures: x, maxTextureSize: _, maxCubemapSize: f, maxAttributes: p, maxVertexUniforms: R, maxVaryings: y, maxFragmentUniforms: A, vertexTextures: I, maxSamples: L };
}
function hc(e) {
  let t = this, i = null, r = 0, a = !1, n = !1, s = new _i(), o = new Ne(), l = { value: null, needsUpdate: !1 };
  this.uniform = l, this.numPlanes = 0, this.numIntersection = 0, this.init = function(h, d) {
    let m = h.length !== 0 || d || r !== 0 || a;
    return a = d, r = h.length, m;
  }, this.beginShadows = function() {
    n = !0, u(null);
  }, this.endShadows = function() {
    n = !1;
  }, this.setGlobalState = function(h, d) {
    i = u(h, d, 0);
  }, this.setState = function(h, d, m) {
    let x = h.clippingPlanes, _ = h.clipIntersection, f = h.clipShadows, p = e.get(h);
    if (!a || x === null || x.length === 0 || n && !f) n ? u(null) : c();
    else {
      let R = n ? 0 : r, y = R * 4, A = p.clippingState || null;
      l.value = A, A = u(x, d, y, m);
      for (let I = 0; I !== y; ++I) A[I] = i[I];
      p.clippingState = A, this.numIntersection = _ ? this.numPlanes : 0, this.numPlanes += R;
    }
  };
  function c() {
    l.value !== i && (l.value = i, l.needsUpdate = r > 0), t.numPlanes = r, t.numIntersection = 0;
  }
  function u(h, d, m, x) {
    let _ = h === null ? 0 : h.length, f = null;
    if (_ !== 0) {
      if (f = l.value, x !== !0 || f === null) {
        let p = m + _ * 4, R = d.matrixWorldInverse;
        o.getNormalMatrix(R), (f === null || f.length < p) && (f = new Float32Array(p));
        for (let y = 0, A = m; y !== _; ++y, A += 4) s.copy(h[y]).applyMatrix4(R, o), s.normal.toArray(f, A), f[A + 3] = s.constant;
      }
      l.value = f, l.needsUpdate = !0;
    }
    return t.numPlanes = _, t.numIntersection = 0, f;
  }
}
function dc(e) {
  let t = /* @__PURE__ */ new WeakMap();
  function i(s, o) {
    return o === 303 ? s.mapping = 301 : o === 304 && (s.mapping = 302), s;
  }
  function r(s) {
    if (s && s.isTexture) {
      let o = s.mapping;
      if (o === 303 || o === 304) if (t.has(s)) {
        let l = t.get(s).texture;
        return i(l, s.mapping);
      } else {
        let l = s.image;
        if (l && l.height > 0) {
          let c = new Gl(l.height);
          return c.fromEquirectangularTexture(e, s), t.set(s, c), s.addEventListener("dispose", a), i(c.texture, s.mapping);
        } else return null;
      }
    }
    return s;
  }
  function a(s) {
    let o = s.target;
    o.removeEventListener("dispose", a);
    let l = t.get(o);
    l !== void 0 && (t.delete(o), l.dispose());
  }
  function n() {
    t = /* @__PURE__ */ new WeakMap();
  }
  return { get: r, dispose: n };
}
var Xi = 4, Fn = [0.125, 0.215, 0.35, 0.446, 0.526, 0.582], xi = 20, Ua = new Vs(), Bn = new He(), Ia = null, Na = 0, Oa = 0, Fa = !1, vi = (1 + Math.sqrt(5)) / 2, Hi = 1 / vi, zn = [new F(-vi, Hi, 0), new F(vi, Hi, 0), new F(-Hi, 0, vi), new F(Hi, 0, vi), new F(0, vi, -Hi), new F(0, vi, Hi), new F(-1, 1, -1), new F(1, 1, -1), new F(-1, 1, 1), new F(1, 1, 1)], pc = new F(), kn = class {
  constructor(e) {
    this._renderer = e, this._pingPongRenderTarget = null, this._lodMax = 0, this._cubeSize = 0, this._lodPlanes = [], this._sizeLods = [], this._sigmas = [], this._blurMaterial = null, this._cubemapMaterial = null, this._equirectMaterial = null, this._compileMaterial(this._blurMaterial);
  }
  fromScene(e, t = 0, i = 0.1, r = 100, a = {}) {
    let { size: n = 256, position: s = pc } = a;
    Ia = this._renderer.getRenderTarget(), Na = this._renderer.getActiveCubeFace(), Oa = this._renderer.getActiveMipmapLevel(), Fa = this._renderer.xr.enabled, this._renderer.xr.enabled = !1, this._setSize(n);
    let o = this._allocateTargets();
    return o.depthBuffer = !0, this._sceneToCubeUV(e, i, r, o, s), t > 0 && this._blur(o, 0, 0, t), this._applyPMREM(o), this._cleanup(o), o;
  }
  fromEquirectangular(e, t = null) {
    return this._fromTexture(e, t);
  }
  fromCubemap(e, t = null) {
    return this._fromTexture(e, t);
  }
  compileCubemapShader() {
    this._cubemapMaterial === null && (this._cubemapMaterial = Gn(), this._compileMaterial(this._cubemapMaterial));
  }
  compileEquirectangularShader() {
    this._equirectMaterial === null && (this._equirectMaterial = Vn(), this._compileMaterial(this._equirectMaterial));
  }
  dispose() {
    this._dispose(), this._cubemapMaterial !== null && this._cubemapMaterial.dispose(), this._equirectMaterial !== null && this._equirectMaterial.dispose();
  }
  _setSize(e) {
    this._lodMax = Math.floor(Math.log2(e)), this._cubeSize = 2 ** this._lodMax;
  }
  _dispose() {
    this._blurMaterial !== null && this._blurMaterial.dispose(), this._pingPongRenderTarget !== null && this._pingPongRenderTarget.dispose();
    for (let e = 0; e < this._lodPlanes.length; e++) this._lodPlanes[e].dispose();
  }
  _cleanup(e) {
    this._renderer.setRenderTarget(Ia, Na, Oa), this._renderer.xr.enabled = Fa, e.scissorTest = !1, Gr(e, 0, 0, e.width, e.height);
  }
  _fromTexture(e, t) {
    e.mapping === 301 || e.mapping === 302 ? this._setSize(e.image.length === 0 ? 16 : e.image[0].width || e.image[0].image.width) : this._setSize(e.image.width / 4), Ia = this._renderer.getRenderTarget(), Na = this._renderer.getActiveCubeFace(), Oa = this._renderer.getActiveMipmapLevel(), Fa = this._renderer.xr.enabled, this._renderer.xr.enabled = !1;
    let i = t || this._allocateTargets();
    return this._textureToCubeUV(e, i), this._applyPMREM(i), this._cleanup(i), i;
  }
  _allocateTargets() {
    let e = 3 * Math.max(this._cubeSize, 112), t = 4 * this._cubeSize, i = { magFilter: Mi, minFilter: Mi, generateMipmaps: !1, type: ia, format: Ei, colorSpace: pr, depthBuffer: !1 }, r = Hn(e, t, i);
    if (this._pingPongRenderTarget === null || this._pingPongRenderTarget.width !== e || this._pingPongRenderTarget.height !== t) {
      this._pingPongRenderTarget !== null && this._dispose(), this._pingPongRenderTarget = Hn(e, t, i);
      let { _lodMax: a } = this;
      ({ sizeLods: this._sizeLods, lodPlanes: this._lodPlanes, sigmas: this._sigmas } = fc(a)), this._blurMaterial = mc(a, e, t);
    }
    return r;
  }
  _compileMaterial(e) {
    let t = new Ot(this._lodPlanes[0], e);
    this._renderer.compile(t, Ua);
  }
  _sceneToCubeUV(e, t, i, r, a) {
    let n = new Ct(90, 1, t, i), s = [1, -1, 1, 1, 1, 1], o = [1, 1, 1, -1, -1, -1], l = this._renderer, c = l.autoClear, u = l.toneMapping;
    l.getClearColor(Bn), l.toneMapping = 0, l.autoClear = !1, l.state.buffers.depth.getReversed() && (l.setRenderTarget(r), l.clearDepth(), l.setRenderTarget(null));
    let h = new sn({ name: "PMREM.Background", side: 1, depthWrite: !1, depthTest: !1 }), d = new Ot(new on(), h), m = !1, x = e.background;
    x ? x.isColor && (h.color.copy(x), e.background = null, m = !0) : (h.color.copy(Bn), m = !0);
    for (let _ = 0; _ < 6; _++) {
      let f = _ % 3;
      f === 0 ? (n.up.set(0, s[_], 0), n.position.set(a.x, a.y, a.z), n.lookAt(a.x + o[_], a.y, a.z)) : f === 1 ? (n.up.set(0, 0, s[_]), n.position.set(a.x, a.y, a.z), n.lookAt(a.x, a.y + o[_], a.z)) : (n.up.set(0, s[_], 0), n.position.set(a.x, a.y, a.z), n.lookAt(a.x, a.y, a.z + o[_]));
      let p = this._cubeSize;
      Gr(r, f * p, _ > 2 ? p : 0, p, p), l.setRenderTarget(r), m && l.render(d, n), l.render(e, n);
    }
    d.geometry.dispose(), d.material.dispose(), l.toneMapping = u, l.autoClear = c, e.background = x;
  }
  _textureToCubeUV(e, t) {
    let i = this._renderer, r = e.mapping === 301 || e.mapping === 302;
    r ? (this._cubemapMaterial === null && (this._cubemapMaterial = Gn()), this._cubemapMaterial.uniforms.flipEnvMap.value = e.isRenderTargetTexture === !1 ? -1 : 1) : this._equirectMaterial === null && (this._equirectMaterial = Vn());
    let a = r ? this._cubemapMaterial : this._equirectMaterial, n = new Ot(this._lodPlanes[0], a), s = a.uniforms;
    s.envMap.value = e;
    let o = this._cubeSize;
    Gr(t, 0, 0, 3 * o, 2 * o), i.setRenderTarget(t), i.render(n, Ua);
  }
  _applyPMREM(e) {
    let t = this._renderer, i = t.autoClear;
    t.autoClear = !1;
    let r = this._lodPlanes.length;
    for (let a = 1; a < r; a++) {
      let n = Math.sqrt(this._sigmas[a] * this._sigmas[a] - this._sigmas[a - 1] * this._sigmas[a - 1]), s = zn[(r - a - 1) % zn.length];
      this._blur(e, a - 1, a, n, s);
    }
    t.autoClear = i;
  }
  _blur(e, t, i, r, a) {
    let n = this._pingPongRenderTarget;
    this._halfBlur(e, n, t, i, r, "latitudinal", a), this._halfBlur(n, e, i, i, r, "longitudinal", a);
  }
  _halfBlur(e, t, i, r, a, n, s) {
    let o = this._renderer, l = this._blurMaterial;
    n !== "latitudinal" && n !== "longitudinal" && console.error("blur direction must be either latitudinal or longitudinal!");
    let c = new Ot(this._lodPlanes[r], l), u = l.uniforms, h = this._sizeLods[i] - 1, d = isFinite(a) ? Math.PI / (2 * h) : 2 * Math.PI / (2 * xi - 1), m = a / d, x = isFinite(a) ? 1 + Math.floor(3 * m) : xi;
    x > xi && console.warn(`sigmaRadians, ${a}, is too large and will clip, as it requested ${x} samples when the maximum is set to ${xi}`);
    let _ = [], f = 0;
    for (let y = 0; y < xi; ++y) {
      let A = y / m, I = Math.exp(-A * A / 2);
      _.push(I), y === 0 ? f += I : y < x && (f += 2 * I);
    }
    for (let y = 0; y < _.length; y++) _[y] = _[y] / f;
    u.envMap.value = e.texture, u.samples.value = x, u.weights.value = _, u.latitudinal.value = n === "latitudinal", s && (u.poleAxis.value = s);
    let { _lodMax: p } = this;
    u.dTheta.value = d, u.mipInt.value = p - i;
    let R = this._sizeLods[r];
    Gr(t, 3 * R * (r > p - Xi ? r - p + Xi : 0), 4 * (this._cubeSize - R), 3 * R, 2 * R), o.setRenderTarget(t), o.render(c, Ua);
  }
};
function fc(e) {
  let t = [], i = [], r = [], a = e, n = e - Xi + 1 + Fn.length;
  for (let s = 0; s < n; s++) {
    let o = 2 ** a;
    i.push(o);
    let l = 1 / o;
    s > e - Xi ? l = Fn[s - e + Xi - 1] : s === 0 && (l = 0), r.push(l);
    let c = 1 / (o - 2), u = -c, h = 1 + c, d = [u, u, h, u, h, h, u, u, h, h, u, h], m = new Float32Array(108), x = new Float32Array(72), _ = new Float32Array(36);
    for (let p = 0; p < 6; p++) {
      let R = p % 3 * 2 / 3 - 1, y = p > 2 ? 0 : -1, A = [R, y, 0, R + 2 / 3, y, 0, R + 2 / 3, y + 1, 0, R, y, 0, R + 2 / 3, y + 1, 0, R, y + 1, 0];
      m.set(A, 18 * p), x.set(d, 12 * p);
      let I = [p, p, p, p, p, p];
      _.set(I, 6 * p);
    }
    let f = new wi();
    f.setAttribute("position", new bt(m, 3)), f.setAttribute("uv", new bt(x, 2)), f.setAttribute("faceIndex", new bt(_, 1)), t.push(f), a > Xi && a--;
  }
  return { lodPlanes: t, sizeLods: i, sigmas: r };
}
function Hn(e, t, i) {
  let r = new ai(e, t, i);
  return r.texture.mapping = 306, r.texture.name = "PMREM.cubeUv", r.scissorTest = !0, r;
}
function Gr(e, t, i, r, a) {
  e.viewport.set(t, i, r, a), e.scissor.set(t, i, r, a);
}
function mc(e, t, i) {
  let r = new Float32Array(xi), a = new F(0, 1, 0);
  return new Xt({ name: "SphericalGaussianBlur", defines: { n: xi, CUBEUV_TEXEL_WIDTH: 1 / t, CUBEUV_TEXEL_HEIGHT: 1 / i, CUBEUV_MAX_MIP: `${e}.0` }, uniforms: { envMap: { value: null }, samples: { value: 1 }, weights: { value: r }, latitudinal: { value: !1 }, dTheta: { value: 0 }, mipInt: { value: 0 }, poleAxis: { value: a } }, vertexShader: ln(), fragmentShader: `

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`, blending: 0, depthTest: !1, depthWrite: !1 });
}
function Vn() {
  return new Xt({ name: "EquirectangularToCubeUV", uniforms: { envMap: { value: null } }, vertexShader: ln(), fragmentShader: `

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`, blending: 0, depthTest: !1, depthWrite: !1 });
}
function Gn() {
  return new Xt({ name: "CubemapToCubeUV", uniforms: { envMap: { value: null }, flipEnvMap: { value: -1 } }, vertexShader: ln(), fragmentShader: `

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`, blending: 0, depthTest: !1, depthWrite: !1 });
}
function ln() {
  return `

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`;
}
function gc(e) {
  let t = /* @__PURE__ */ new WeakMap(), i = null;
  function r(o) {
    if (o && o.isTexture) {
      let l = o.mapping, c = l === 303 || l === 304, u = l === 301 || l === 302;
      if (c || u) {
        let h = t.get(o), d = h === void 0 ? 0 : h.texture.pmremVersion;
        if (o.isRenderTargetTexture && o.pmremVersion !== d) return i === null && (i = new kn(e)), h = c ? i.fromEquirectangular(o, h) : i.fromCubemap(o, h), h.texture.pmremVersion = o.pmremVersion, t.set(o, h), h.texture;
        if (h !== void 0) return h.texture;
        {
          let m = o.image;
          return c && m && m.height > 0 || u && m && a(m) ? (i === null && (i = new kn(e)), h = c ? i.fromEquirectangular(o) : i.fromCubemap(o), h.texture.pmremVersion = o.pmremVersion, t.set(o, h), o.addEventListener("dispose", n), h.texture) : null;
        }
      }
    }
    return o;
  }
  function a(o) {
    let l = 0;
    for (let c = 0; c < 6; c++) o[c] !== void 0 && l++;
    return l === 6;
  }
  function n(o) {
    let l = o.target;
    l.removeEventListener("dispose", n);
    let c = t.get(l);
    c !== void 0 && (t.delete(l), c.dispose());
  }
  function s() {
    t = /* @__PURE__ */ new WeakMap(), i !== null && (i.dispose(), i = null);
  }
  return { get: r, dispose: s };
}
function _c(e) {
  let t = {};
  function i(r) {
    if (t[r] !== void 0) return t[r];
    let a;
    switch (r) {
      case "WEBGL_depth_texture":
        a = e.getExtension("WEBGL_depth_texture") || e.getExtension("MOZ_WEBGL_depth_texture") || e.getExtension("WEBKIT_WEBGL_depth_texture");
        break;
      case "EXT_texture_filter_anisotropic":
        a = e.getExtension("EXT_texture_filter_anisotropic") || e.getExtension("MOZ_EXT_texture_filter_anisotropic") || e.getExtension("WEBKIT_EXT_texture_filter_anisotropic");
        break;
      case "WEBGL_compressed_texture_s3tc":
        a = e.getExtension("WEBGL_compressed_texture_s3tc") || e.getExtension("MOZ_WEBGL_compressed_texture_s3tc") || e.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");
        break;
      case "WEBGL_compressed_texture_pvrtc":
        a = e.getExtension("WEBGL_compressed_texture_pvrtc") || e.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");
        break;
      default:
        a = e.getExtension(r);
    }
    return t[r] = a, a;
  }
  return { has: function(r) {
    return i(r) !== null;
  }, init: function() {
    i("EXT_color_buffer_float"), i("WEBGL_clip_cull_distance"), i("OES_texture_float_linear"), i("EXT_color_buffer_half_float"), i("WEBGL_multisampled_render_to_texture"), i("WEBGL_render_shared_exponent");
  }, get: function(r) {
    let a = i(r);
    return a === null && fr("THREE.WebGLRenderer: " + r + " extension not supported."), a;
  } };
}
function vc(e, t, i, r) {
  let a = {}, n = /* @__PURE__ */ new WeakMap();
  function s(h) {
    let d = h.target;
    d.index !== null && t.remove(d.index);
    for (let x in d.attributes) t.remove(d.attributes[x]);
    d.removeEventListener("dispose", s), delete a[d.id];
    let m = n.get(d);
    m && (t.remove(m), n.delete(d)), r.releaseStatesOfGeometry(d), d.isInstancedBufferGeometry === !0 && delete d._maxInstanceCount, i.memory.geometries--;
  }
  function o(h, d) {
    return a[d.id] === !0 || (d.addEventListener("dispose", s), a[d.id] = !0, i.memory.geometries++), d;
  }
  function l(h) {
    let d = h.attributes;
    for (let m in d) t.update(d[m], e.ARRAY_BUFFER);
  }
  function c(h) {
    let d = [], m = h.index, x = h.attributes.position, _ = 0;
    if (m !== null) {
      let R = m.array;
      _ = m.version;
      for (let y = 0, A = R.length; y < A; y += 3) {
        let I = R[y + 0], L = R[y + 1], D = R[y + 2];
        d.push(I, L, L, D, D, I);
      }
    } else if (x !== void 0) {
      let R = x.array;
      _ = x.version;
      for (let y = 0, A = R.length / 3 - 1; y < A; y += 3) {
        let I = y + 0, L = y + 1, D = y + 2;
        d.push(I, L, L, D, D, I);
      }
    } else return;
    let f = new (Ts(d) ? Ds : Ps)(d, 1);
    f.version = _;
    let p = n.get(h);
    p && t.remove(p), n.set(h, f);
  }
  function u(h) {
    let d = n.get(h);
    if (d) {
      let m = h.index;
      m !== null && d.version < m.version && c(h);
    } else c(h);
    return n.get(h);
  }
  return { get: o, update: l, getWireframeAttribute: u };
}
function xc(e, t, i) {
  let r;
  function a(d) {
    r = d;
  }
  let n, s;
  function o(d) {
    n = d.type, s = d.bytesPerElement;
  }
  function l(d, m) {
    e.drawElements(r, m, n, d * s), i.update(m, r, 1);
  }
  function c(d, m, x) {
    x !== 0 && (e.drawElementsInstanced(r, m, n, d * s, x), i.update(m, r, x));
  }
  function u(d, m, x) {
    if (x === 0) return;
    t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(r, m, 0, n, d, 0, x);
    let _ = 0;
    for (let f = 0; f < x; f++) _ += m[f];
    i.update(_, r, 1);
  }
  function h(d, m, x, _) {
    if (x === 0) return;
    let f = t.get("WEBGL_multi_draw");
    if (f === null) for (let p = 0; p < d.length; p++) c(d[p] / s, m[p], _[p]);
    else {
      f.multiDrawElementsInstancedWEBGL(r, m, 0, n, d, 0, _, 0, x);
      let p = 0;
      for (let R = 0; R < x; R++) p += m[R] * _[R];
      i.update(p, r, 1);
    }
  }
  this.setMode = a, this.setIndex = o, this.render = l, this.renderInstances = c, this.renderMultiDraw = u, this.renderMultiDrawInstances = h;
}
function yc(e) {
  let t = { geometries: 0, textures: 0 }, i = { frame: 0, calls: 0, triangles: 0, points: 0, lines: 0 };
  function r(n, s, o) {
    switch (i.calls++, s) {
      case e.TRIANGLES:
        i.triangles += n / 3 * o;
        break;
      case e.LINES:
        i.lines += n / 2 * o;
        break;
      case e.LINE_STRIP:
        i.lines += o * (n - 1);
        break;
      case e.LINE_LOOP:
        i.lines += o * n;
        break;
      case e.POINTS:
        i.points += o * n;
        break;
      default:
        console.error("THREE.WebGLInfo: Unknown draw mode:", s);
        break;
    }
  }
  function a() {
    i.calls = 0, i.triangles = 0, i.points = 0, i.lines = 0;
  }
  return { memory: t, render: i, programs: null, autoReset: !0, reset: a, update: r };
}
function Sc(e, t, i) {
  let r = /* @__PURE__ */ new WeakMap(), a = new st();
  function n(s, o, l) {
    let c = s.morphTargetInfluences, u = o.morphAttributes.position || o.morphAttributes.normal || o.morphAttributes.color, h = u === void 0 ? 0 : u.length, d = r.get(o);
    if (d === void 0 || d.count !== h) {
      let M = function() {
        D.dispose(), r.delete(o), o.removeEventListener("dispose", M);
      };
      d !== void 0 && d.texture.dispose();
      let m = o.morphAttributes.position !== void 0, x = o.morphAttributes.normal !== void 0, _ = o.morphAttributes.color !== void 0, f = o.morphAttributes.position || [], p = o.morphAttributes.normal || [], R = o.morphAttributes.color || [], y = 0;
      m === !0 && (y = 1), x === !0 && (y = 2), _ === !0 && (y = 3);
      let A = o.attributes.position.count * y, I = 1;
      A > t.maxTextureSize && (I = Math.ceil(A / t.maxTextureSize), A = t.maxTextureSize);
      let L = new Float32Array(A * I * 4 * h), D = new As(L, A, I, h);
      D.type = ta, D.needsUpdate = !0;
      let z = y * 4;
      for (let S = 0; S < h; S++) {
        let w = f[S], W = p[S], V = R[S], k = A * I * 4 * S;
        for (let J = 0; J < w.count; J++) {
          let H = J * z;
          m === !0 && (a.fromBufferAttribute(w, J), L[k + H + 0] = a.x, L[k + H + 1] = a.y, L[k + H + 2] = a.z, L[k + H + 3] = 0), x === !0 && (a.fromBufferAttribute(W, J), L[k + H + 4] = a.x, L[k + H + 5] = a.y, L[k + H + 6] = a.z, L[k + H + 7] = 0), _ === !0 && (a.fromBufferAttribute(V, J), L[k + H + 8] = a.x, L[k + H + 9] = a.y, L[k + H + 10] = a.z, L[k + H + 11] = V.itemSize === 4 ? a.w : 1);
        }
      }
      d = { count: h, texture: D, size: new ke(A, I) }, r.set(o, d), o.addEventListener("dispose", M);
    }
    if (s.isInstancedMesh === !0 && s.morphTexture !== null) l.getUniforms().setValue(e, "morphTexture", s.morphTexture, i);
    else {
      let m = 0;
      for (let _ = 0; _ < c.length; _++) m += c[_];
      let x = o.morphTargetsRelative ? 1 : 1 - m;
      l.getUniforms().setValue(e, "morphTargetBaseInfluence", x), l.getUniforms().setValue(e, "morphTargetInfluences", c);
    }
    l.getUniforms().setValue(e, "morphTargetsTexture", d.texture, i), l.getUniforms().setValue(e, "morphTargetsTextureSize", d.size);
  }
  return { update: n };
}
function Mc(e, t, i, r) {
  let a = /* @__PURE__ */ new WeakMap();
  function n(l) {
    let c = r.render.frame, u = l.geometry, h = t.get(l, u);
    if (a.get(h) !== c && (t.update(h), a.set(h, c)), l.isInstancedMesh && (l.hasEventListener("dispose", o) === !1 && l.addEventListener("dispose", o), a.get(l) !== c && (i.update(l.instanceMatrix, e.ARRAY_BUFFER), l.instanceColor !== null && i.update(l.instanceColor, e.ARRAY_BUFFER), a.set(l, c))), l.isSkinnedMesh) {
      let d = l.skeleton;
      a.get(d) !== c && (d.update(), a.set(d, c));
    }
    return h;
  }
  function s() {
    a = /* @__PURE__ */ new WeakMap();
  }
  function o(l) {
    let c = l.target;
    c.removeEventListener("dispose", o), i.remove(c.instanceMatrix), c.instanceColor !== null && i.remove(c.instanceColor);
  }
  return { update: n, dispose: s };
}
var Ws = new Ft(), Wn = new zs(1, 1), Xs = new As(), js = new wl(), qs = new Os(), Xn = [], jn = [], qn = new Float32Array(16), Yn = new Float32Array(9), Kn = new Float32Array(4);
function Ji(e, t, i) {
  let r = e[0];
  if (r <= 0 || r > 0) return e;
  let a = t * i, n = Xn[a];
  if (n === void 0 && (n = new Float32Array(a), Xn[a] = n), t !== 0) {
    r.toArray(n, 0);
    for (let s = 1, o = 0; s !== t; ++s) o += i, e[s].toArray(n, o);
  }
  return n;
}
function ot(e, t) {
  if (e.length !== t.length) return !1;
  for (let i = 0, r = e.length; i < r; i++) if (e[i] !== t[i]) return !1;
  return !0;
}
function lt(e, t) {
  for (let i = 0, r = t.length; i < r; i++) e[i] = t[i];
}
function na(e, t) {
  let i = jn[t];
  i === void 0 && (i = new Int32Array(t), jn[t] = i);
  for (let r = 0; r !== t; ++r) i[r] = e.allocateTextureUnit();
  return i;
}
function Ec(e, t) {
  let i = this.cache;
  i[0] !== t && (e.uniform1f(this.addr, t), i[0] = t);
}
function bc(e, t) {
  let i = this.cache;
  if (t.x !== void 0) (i[0] !== t.x || i[1] !== t.y) && (e.uniform2f(this.addr, t.x, t.y), i[0] = t.x, i[1] = t.y);
  else {
    if (ot(i, t)) return;
    e.uniform2fv(this.addr, t), lt(i, t);
  }
}
function Tc(e, t) {
  let i = this.cache;
  if (t.x !== void 0) (i[0] !== t.x || i[1] !== t.y || i[2] !== t.z) && (e.uniform3f(this.addr, t.x, t.y, t.z), i[0] = t.x, i[1] = t.y, i[2] = t.z);
  else if (t.r !== void 0) (i[0] !== t.r || i[1] !== t.g || i[2] !== t.b) && (e.uniform3f(this.addr, t.r, t.g, t.b), i[0] = t.r, i[1] = t.g, i[2] = t.b);
  else {
    if (ot(i, t)) return;
    e.uniform3fv(this.addr, t), lt(i, t);
  }
}
function wc(e, t) {
  let i = this.cache;
  if (t.x !== void 0) (i[0] !== t.x || i[1] !== t.y || i[2] !== t.z || i[3] !== t.w) && (e.uniform4f(this.addr, t.x, t.y, t.z, t.w), i[0] = t.x, i[1] = t.y, i[2] = t.z, i[3] = t.w);
  else {
    if (ot(i, t)) return;
    e.uniform4fv(this.addr, t), lt(i, t);
  }
}
function Ac(e, t) {
  let i = this.cache, r = t.elements;
  if (r === void 0) {
    if (ot(i, t)) return;
    e.uniformMatrix2fv(this.addr, !1, t), lt(i, t);
  } else {
    if (ot(i, r)) return;
    Kn.set(r), e.uniformMatrix2fv(this.addr, !1, Kn), lt(i, r);
  }
}
function Rc(e, t) {
  let i = this.cache, r = t.elements;
  if (r === void 0) {
    if (ot(i, t)) return;
    e.uniformMatrix3fv(this.addr, !1, t), lt(i, t);
  } else {
    if (ot(i, r)) return;
    Yn.set(r), e.uniformMatrix3fv(this.addr, !1, Yn), lt(i, r);
  }
}
function Cc(e, t) {
  let i = this.cache, r = t.elements;
  if (r === void 0) {
    if (ot(i, t)) return;
    e.uniformMatrix4fv(this.addr, !1, t), lt(i, t);
  } else {
    if (ot(i, r)) return;
    qn.set(r), e.uniformMatrix4fv(this.addr, !1, qn), lt(i, r);
  }
}
function Pc(e, t) {
  let i = this.cache;
  i[0] !== t && (e.uniform1i(this.addr, t), i[0] = t);
}
function Dc(e, t) {
  let i = this.cache;
  if (t.x !== void 0) (i[0] !== t.x || i[1] !== t.y) && (e.uniform2i(this.addr, t.x, t.y), i[0] = t.x, i[1] = t.y);
  else {
    if (ot(i, t)) return;
    e.uniform2iv(this.addr, t), lt(i, t);
  }
}
function Lc(e, t) {
  let i = this.cache;
  if (t.x !== void 0) (i[0] !== t.x || i[1] !== t.y || i[2] !== t.z) && (e.uniform3i(this.addr, t.x, t.y, t.z), i[0] = t.x, i[1] = t.y, i[2] = t.z);
  else {
    if (ot(i, t)) return;
    e.uniform3iv(this.addr, t), lt(i, t);
  }
}
function Uc(e, t) {
  let i = this.cache;
  if (t.x !== void 0) (i[0] !== t.x || i[1] !== t.y || i[2] !== t.z || i[3] !== t.w) && (e.uniform4i(this.addr, t.x, t.y, t.z, t.w), i[0] = t.x, i[1] = t.y, i[2] = t.z, i[3] = t.w);
  else {
    if (ot(i, t)) return;
    e.uniform4iv(this.addr, t), lt(i, t);
  }
}
function Ic(e, t) {
  let i = this.cache;
  i[0] !== t && (e.uniform1ui(this.addr, t), i[0] = t);
}
function Nc(e, t) {
  let i = this.cache;
  if (t.x !== void 0) (i[0] !== t.x || i[1] !== t.y) && (e.uniform2ui(this.addr, t.x, t.y), i[0] = t.x, i[1] = t.y);
  else {
    if (ot(i, t)) return;
    e.uniform2uiv(this.addr, t), lt(i, t);
  }
}
function Oc(e, t) {
  let i = this.cache;
  if (t.x !== void 0) (i[0] !== t.x || i[1] !== t.y || i[2] !== t.z) && (e.uniform3ui(this.addr, t.x, t.y, t.z), i[0] = t.x, i[1] = t.y, i[2] = t.z);
  else {
    if (ot(i, t)) return;
    e.uniform3uiv(this.addr, t), lt(i, t);
  }
}
function Fc(e, t) {
  let i = this.cache;
  if (t.x !== void 0) (i[0] !== t.x || i[1] !== t.y || i[2] !== t.z || i[3] !== t.w) && (e.uniform4ui(this.addr, t.x, t.y, t.z, t.w), i[0] = t.x, i[1] = t.y, i[2] = t.z, i[3] = t.w);
  else {
    if (ot(i, t)) return;
    e.uniform4uiv(this.addr, t), lt(i, t);
  }
}
function Bc(e, t, i) {
  let r = this.cache, a = i.allocateTextureUnit();
  r[0] !== a && (e.uniform1i(this.addr, a), r[0] = a);
  let n;
  this.type === e.SAMPLER_2D_SHADOW ? (Wn.compareFunction = 515, n = Wn) : n = Ws, i.setTexture2D(t || n, a);
}
function zc(e, t, i) {
  let r = this.cache, a = i.allocateTextureUnit();
  r[0] !== a && (e.uniform1i(this.addr, a), r[0] = a), i.setTexture3D(t || js, a);
}
function kc(e, t, i) {
  let r = this.cache, a = i.allocateTextureUnit();
  r[0] !== a && (e.uniform1i(this.addr, a), r[0] = a), i.setTextureCube(t || qs, a);
}
function Hc(e, t, i) {
  let r = this.cache, a = i.allocateTextureUnit();
  r[0] !== a && (e.uniform1i(this.addr, a), r[0] = a), i.setTexture2DArray(t || Xs, a);
}
function Vc(e) {
  switch (e) {
    case 5126:
      return Ec;
    case 35664:
      return bc;
    case 35665:
      return Tc;
    case 35666:
      return wc;
    case 35674:
      return Ac;
    case 35675:
      return Rc;
    case 35676:
      return Cc;
    case 5124:
    case 35670:
      return Pc;
    case 35667:
    case 35671:
      return Dc;
    case 35668:
    case 35672:
      return Lc;
    case 35669:
    case 35673:
      return Uc;
    case 5125:
      return Ic;
    case 36294:
      return Nc;
    case 36295:
      return Oc;
    case 36296:
      return Fc;
    case 35678:
    case 36198:
    case 36298:
    case 36306:
    case 35682:
      return Bc;
    case 35679:
    case 36299:
    case 36307:
      return zc;
    case 35680:
    case 36300:
    case 36308:
    case 36293:
      return kc;
    case 36289:
    case 36303:
    case 36311:
    case 36292:
      return Hc;
  }
}
function Gc(e, t) {
  e.uniform1fv(this.addr, t);
}
function Wc(e, t) {
  let i = Ji(t, this.size, 2);
  e.uniform2fv(this.addr, i);
}
function Xc(e, t) {
  let i = Ji(t, this.size, 3);
  e.uniform3fv(this.addr, i);
}
function jc(e, t) {
  let i = Ji(t, this.size, 4);
  e.uniform4fv(this.addr, i);
}
function qc(e, t) {
  let i = Ji(t, this.size, 4);
  e.uniformMatrix2fv(this.addr, !1, i);
}
function Yc(e, t) {
  let i = Ji(t, this.size, 9);
  e.uniformMatrix3fv(this.addr, !1, i);
}
function Kc(e, t) {
  let i = Ji(t, this.size, 16);
  e.uniformMatrix4fv(this.addr, !1, i);
}
function Zc(e, t) {
  e.uniform1iv(this.addr, t);
}
function Jc(e, t) {
  e.uniform2iv(this.addr, t);
}
function $c(e, t) {
  e.uniform3iv(this.addr, t);
}
function Qc(e, t) {
  e.uniform4iv(this.addr, t);
}
function eu(e, t) {
  e.uniform1uiv(this.addr, t);
}
function tu(e, t) {
  e.uniform2uiv(this.addr, t);
}
function iu(e, t) {
  e.uniform3uiv(this.addr, t);
}
function ru(e, t) {
  e.uniform4uiv(this.addr, t);
}
function au(e, t, i) {
  let r = this.cache, a = t.length, n = na(i, a);
  ot(r, n) || (e.uniform1iv(this.addr, n), lt(r, n));
  for (let s = 0; s !== a; ++s) i.setTexture2D(t[s] || Ws, n[s]);
}
function nu(e, t, i) {
  let r = this.cache, a = t.length, n = na(i, a);
  ot(r, n) || (e.uniform1iv(this.addr, n), lt(r, n));
  for (let s = 0; s !== a; ++s) i.setTexture3D(t[s] || js, n[s]);
}
function su(e, t, i) {
  let r = this.cache, a = t.length, n = na(i, a);
  ot(r, n) || (e.uniform1iv(this.addr, n), lt(r, n));
  for (let s = 0; s !== a; ++s) i.setTextureCube(t[s] || qs, n[s]);
}
function ou(e, t, i) {
  let r = this.cache, a = t.length, n = na(i, a);
  ot(r, n) || (e.uniform1iv(this.addr, n), lt(r, n));
  for (let s = 0; s !== a; ++s) i.setTexture2DArray(t[s] || Xs, n[s]);
}
function lu(e) {
  switch (e) {
    case 5126:
      return Gc;
    case 35664:
      return Wc;
    case 35665:
      return Xc;
    case 35666:
      return jc;
    case 35674:
      return qc;
    case 35675:
      return Yc;
    case 35676:
      return Kc;
    case 5124:
    case 35670:
      return Zc;
    case 35667:
    case 35671:
      return Jc;
    case 35668:
    case 35672:
      return $c;
    case 35669:
    case 35673:
      return Qc;
    case 5125:
      return eu;
    case 36294:
      return tu;
    case 36295:
      return iu;
    case 36296:
      return ru;
    case 35678:
    case 36198:
    case 36298:
    case 36306:
    case 35682:
      return au;
    case 35679:
    case 36299:
    case 36307:
      return nu;
    case 35680:
    case 36300:
    case 36308:
    case 36293:
      return su;
    case 36289:
    case 36303:
    case 36311:
    case 36292:
      return ou;
  }
}
var cu = class {
  constructor(e, t, i) {
    this.id = e, this.addr = i, this.cache = [], this.type = t.type, this.setValue = Vc(t.type);
  }
}, uu = class {
  constructor(e, t, i) {
    this.id = e, this.addr = i, this.cache = [], this.type = t.type, this.size = t.size, this.setValue = lu(t.type);
  }
}, hu = class {
  constructor(e) {
    this.id = e, this.seq = [], this.map = {};
  }
  setValue(e, t, i) {
    let r = this.seq;
    for (let a = 0, n = r.length; a !== n; ++a) {
      let s = r[a];
      s.setValue(e, t[s.id], i);
    }
  }
}, Ba = /(\w+)(\])?(\[|\.)?/g;
function Zn(e, t) {
  e.seq.push(t), e.map[t.id] = t;
}
function du(e, t, i) {
  let r = e.name, a = r.length;
  for (Ba.lastIndex = 0; ; ) {
    let n = Ba.exec(r), s = Ba.lastIndex, o = n[1], l = n[2] === "]", c = n[3];
    if (l && (o |= 0), c === void 0 || c === "[" && s + 2 === a) {
      Zn(i, c === void 0 ? new cu(o, e, t) : new uu(o, e, t));
      break;
    } else {
      let u = i.map[o];
      u === void 0 && (u = new hu(o), Zn(i, u)), i = u;
    }
  }
}
var Zr = class {
  constructor(e, t) {
    this.seq = [], this.map = {};
    let i = e.getProgramParameter(t, e.ACTIVE_UNIFORMS);
    for (let r = 0; r < i; ++r) {
      let a = e.getActiveUniform(t, r);
      du(a, e.getUniformLocation(t, a.name), this);
    }
  }
  setValue(e, t, i, r) {
    let a = this.map[t];
    a !== void 0 && a.setValue(e, i, r);
  }
  setOptional(e, t, i) {
    let r = t[i];
    r !== void 0 && this.setValue(e, i, r);
  }
  static upload(e, t, i, r) {
    for (let a = 0, n = t.length; a !== n; ++a) {
      let s = t[a], o = i[s.id];
      o.needsUpdate !== !1 && s.setValue(e, o.value, r);
    }
  }
  static seqWithValue(e, t) {
    let i = [];
    for (let r = 0, a = e.length; r !== a; ++r) {
      let n = e[r];
      n.id in t && i.push(n);
    }
    return i;
  }
};
function Jn(e, t, i) {
  let r = e.createShader(t);
  return e.shaderSource(r, i), e.compileShader(r), r;
}
var pu = 37297, fu = 0;
function mu(e, t) {
  let i = e.split(`
`), r = [], a = Math.max(t - 6, 0), n = Math.min(t + 6, i.length);
  for (let s = a; s < n; s++) {
    let o = s + 1;
    r.push(`${o === t ? ">" : " "} ${o}: ${i[s]}`);
  }
  return r.join(`
`);
}
var $n = new Ne();
function gu(e) {
  We._getMatrix($n, We.workingColorSpace, e);
  let t = `mat3( ${$n.elements.map((i) => i.toFixed(4))} )`;
  switch (We.getTransfer(e)) {
    case Jr:
      return [t, "LinearTransferOETF"];
    case $r:
      return [t, "sRGBTransferOETF"];
    default:
      return console.warn("THREE.WebGLProgram: Unsupported color space: ", e), [t, "LinearTransferOETF"];
  }
}
function Qn(e, t, i) {
  let r = e.getShaderParameter(t, e.COMPILE_STATUS), a = (e.getShaderInfoLog(t) || "").trim();
  if (r && a === "") return "";
  let n = /ERROR: 0:(\d+)/.exec(a);
  if (n) {
    let s = parseInt(n[1]);
    return i.toUpperCase() + `

` + a + `

` + mu(e.getShaderSource(t), s);
  } else return a;
}
function _u(e, t) {
  let i = gu(t);
  return [`vec4 ${e}( vec4 value ) {`, `	return ${i[1]}( vec4( value.rgb * ${i[0]}, value.a ) );`, "}"].join(`
`);
}
function vu(e, t) {
  let i;
  switch (t) {
    case 1:
      i = "Linear";
      break;
    case 2:
      i = "Reinhard";
      break;
    case 3:
      i = "Cineon";
      break;
    case 4:
      i = "ACESFilmic";
      break;
    case 6:
      i = "AgX";
      break;
    case 7:
      i = "Neutral";
      break;
    case 5:
      i = "Custom";
      break;
    default:
      console.warn("THREE.WebGLProgram: Unsupported toneMapping:", t), i = "Linear";
  }
  return "vec3 " + e + "( vec3 color ) { return " + i + "ToneMapping( color ); }";
}
var Wr = new F();
function xu() {
  return We.getLuminanceCoefficients(Wr), ["float luminance( const in vec3 rgb ) {", `	const vec3 weights = vec3( ${Wr.x.toFixed(4)}, ${Wr.y.toFixed(4)}, ${Wr.z.toFixed(4)} );`, "	return dot( weights, rgb );", "}"].join(`
`);
}
function yu(e) {
  return [e.extensionClipCullDistance ? "#extension GL_ANGLE_clip_cull_distance : require" : "", e.extensionMultiDraw ? "#extension GL_ANGLE_multi_draw : require" : ""].filter(or).join(`
`);
}
function Su(e) {
  let t = [];
  for (let i in e) {
    let r = e[i];
    r !== !1 && t.push("#define " + i + " " + r);
  }
  return t.join(`
`);
}
function Mu(e, t) {
  let i = {}, r = e.getProgramParameter(t, e.ACTIVE_ATTRIBUTES);
  for (let a = 0; a < r; a++) {
    let n = e.getActiveAttrib(t, a), s = n.name, o = 1;
    n.type === e.FLOAT_MAT2 && (o = 2), n.type === e.FLOAT_MAT3 && (o = 3), n.type === e.FLOAT_MAT4 && (o = 4), i[s] = { type: n.type, location: e.getAttribLocation(t, s), locationSize: o };
  }
  return i;
}
function or(e) {
  return e !== "";
}
function es(e, t) {
  let i = t.numSpotLightShadows + t.numSpotLightMaps - t.numSpotLightShadowsWithMaps;
  return e.replace(/NUM_DIR_LIGHTS/g, t.numDirLights).replace(/NUM_SPOT_LIGHTS/g, t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g, t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g, i).replace(/NUM_RECT_AREA_LIGHTS/g, t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g, t.numPointLights).replace(/NUM_HEMI_LIGHTS/g, t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g, t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g, t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g, t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g, t.numPointLightShadows);
}
function ts(e, t) {
  return e.replace(/NUM_CLIPPING_PLANES/g, t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g, t.numClippingPlanes - t.numClipIntersection);
}
var Eu = /^[ \t]*#include +<([\w\d./]+)>/gm;
function qa(e) {
  return e.replace(Eu, Tu);
}
var bu = /* @__PURE__ */ new Map();
function Tu(e, t) {
  let i = Ie[t];
  if (i === void 0) {
    let r = bu.get(t);
    if (r !== void 0) i = Ie[r], console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.', t, r);
    else throw Error("Can not resolve #include <" + t + ">");
  }
  return qa(i);
}
var wu = /#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;
function is(e) {
  return e.replace(wu, Au);
}
function Au(e, t, i, r) {
  let a = "";
  for (let n = parseInt(t); n < parseInt(i); n++) a += r.replace(/\[\s*i\s*\]/g, "[ " + n + " ]").replace(/UNROLLED_LOOP_INDEX/g, n);
  return a;
}
function rs(e) {
  let t = `precision ${e.precision} float;
	precision ${e.precision} int;
	precision ${e.precision} sampler2D;
	precision ${e.precision} samplerCube;
	precision ${e.precision} sampler3D;
	precision ${e.precision} sampler2DArray;
	precision ${e.precision} sampler2DShadow;
	precision ${e.precision} samplerCubeShadow;
	precision ${e.precision} sampler2DArrayShadow;
	precision ${e.precision} isampler2D;
	precision ${e.precision} isampler3D;
	precision ${e.precision} isamplerCube;
	precision ${e.precision} isampler2DArray;
	precision ${e.precision} usampler2D;
	precision ${e.precision} usampler3D;
	precision ${e.precision} usamplerCube;
	precision ${e.precision} usampler2DArray;
	`;
  return e.precision === "highp" ? t += `
#define HIGH_PRECISION` : e.precision === "mediump" ? t += `
#define MEDIUM_PRECISION` : e.precision === "lowp" && (t += `
#define LOW_PRECISION`), t;
}
function Ru(e) {
  let t = "SHADOWMAP_TYPE_BASIC";
  return e.shadowMapType === 1 ? t = "SHADOWMAP_TYPE_PCF" : e.shadowMapType === 2 ? t = "SHADOWMAP_TYPE_PCF_SOFT" : e.shadowMapType === 3 && (t = "SHADOWMAP_TYPE_VSM"), t;
}
function Cu(e) {
  let t = "ENVMAP_TYPE_CUBE";
  if (e.envMap) switch (e.envMapMode) {
    case 301:
    case 302:
      t = "ENVMAP_TYPE_CUBE";
      break;
    case 306:
      t = "ENVMAP_TYPE_CUBE_UV";
      break;
  }
  return t;
}
function Pu(e) {
  let t = "ENVMAP_MODE_REFLECTION";
  if (e.envMap) switch (e.envMapMode) {
    case 302:
      t = "ENVMAP_MODE_REFRACTION";
      break;
  }
  return t;
}
function Du(e) {
  let t = "ENVMAP_BLENDING_NONE";
  if (e.envMap) switch (e.combine) {
    case 0:
      t = "ENVMAP_BLENDING_MULTIPLY";
      break;
    case 1:
      t = "ENVMAP_BLENDING_MIX";
      break;
    case 2:
      t = "ENVMAP_BLENDING_ADD";
      break;
  }
  return t;
}
function Lu(e) {
  let t = e.envMapCubeUVHeight;
  if (t === null) return null;
  let i = Math.log2(t) - 2, r = 1 / t;
  return { texelWidth: 1 / (3 * Math.max(2 ** i, 112)), texelHeight: r, maxMip: i };
}
function Uu(e, t, i, r) {
  let a = e.getContext(), n = i.defines, s = i.vertexShader, o = i.fragmentShader, l = Ru(i), c = Cu(i), u = Pu(i), h = Du(i), d = Lu(i), m = yu(i), x = Su(n), _ = a.createProgram(), f, p, R = i.glslVersion ? "#version " + i.glslVersion + `
` : "";
  i.isRawShaderMaterial ? (f = ["#define SHADER_TYPE " + i.shaderType, "#define SHADER_NAME " + i.shaderName, x].filter(or).join(`
`), f.length > 0 && (f += `
`), p = ["#define SHADER_TYPE " + i.shaderType, "#define SHADER_NAME " + i.shaderName, x].filter(or).join(`
`), p.length > 0 && (p += `
`)) : (f = [rs(i), "#define SHADER_TYPE " + i.shaderType, "#define SHADER_NAME " + i.shaderName, x, i.extensionClipCullDistance ? "#define USE_CLIP_DISTANCE" : "", i.batching ? "#define USE_BATCHING" : "", i.batchingColor ? "#define USE_BATCHING_COLOR" : "", i.instancing ? "#define USE_INSTANCING" : "", i.instancingColor ? "#define USE_INSTANCING_COLOR" : "", i.instancingMorph ? "#define USE_INSTANCING_MORPH" : "", i.useFog && i.fog ? "#define USE_FOG" : "", i.useFog && i.fogExp2 ? "#define FOG_EXP2" : "", i.map ? "#define USE_MAP" : "", i.envMap ? "#define USE_ENVMAP" : "", i.envMap ? "#define " + u : "", i.lightMap ? "#define USE_LIGHTMAP" : "", i.aoMap ? "#define USE_AOMAP" : "", i.bumpMap ? "#define USE_BUMPMAP" : "", i.normalMap ? "#define USE_NORMALMAP" : "", i.normalMapObjectSpace ? "#define USE_NORMALMAP_OBJECTSPACE" : "", i.normalMapTangentSpace ? "#define USE_NORMALMAP_TANGENTSPACE" : "", i.displacementMap ? "#define USE_DISPLACEMENTMAP" : "", i.emissiveMap ? "#define USE_EMISSIVEMAP" : "", i.anisotropy ? "#define USE_ANISOTROPY" : "", i.anisotropyMap ? "#define USE_ANISOTROPYMAP" : "", i.clearcoatMap ? "#define USE_CLEARCOATMAP" : "", i.clearcoatRoughnessMap ? "#define USE_CLEARCOAT_ROUGHNESSMAP" : "", i.clearcoatNormalMap ? "#define USE_CLEARCOAT_NORMALMAP" : "", i.iridescenceMap ? "#define USE_IRIDESCENCEMAP" : "", i.iridescenceThicknessMap ? "#define USE_IRIDESCENCE_THICKNESSMAP" : "", i.specularMap ? "#define USE_SPECULARMAP" : "", i.specularColorMap ? "#define USE_SPECULAR_COLORMAP" : "", i.specularIntensityMap ? "#define USE_SPECULAR_INTENSITYMAP" : "", i.roughnessMap ? "#define USE_ROUGHNESSMAP" : "", i.metalnessMap ? "#define USE_METALNESSMAP" : "", i.alphaMap ? "#define USE_ALPHAMAP" : "", i.alphaHash ? "#define USE_ALPHAHASH" : "", i.transmission ? "#define USE_TRANSMISSION" : "", i.transmissionMap ? "#define USE_TRANSMISSIONMAP" : "", i.thicknessMap ? "#define USE_THICKNESSMAP" : "", i.sheenColorMap ? "#define USE_SHEEN_COLORMAP" : "", i.sheenRoughnessMap ? "#define USE_SHEEN_ROUGHNESSMAP" : "", i.mapUv ? "#define MAP_UV " + i.mapUv : "", i.alphaMapUv ? "#define ALPHAMAP_UV " + i.alphaMapUv : "", i.lightMapUv ? "#define LIGHTMAP_UV " + i.lightMapUv : "", i.aoMapUv ? "#define AOMAP_UV " + i.aoMapUv : "", i.emissiveMapUv ? "#define EMISSIVEMAP_UV " + i.emissiveMapUv : "", i.bumpMapUv ? "#define BUMPMAP_UV " + i.bumpMapUv : "", i.normalMapUv ? "#define NORMALMAP_UV " + i.normalMapUv : "", i.displacementMapUv ? "#define DISPLACEMENTMAP_UV " + i.displacementMapUv : "", i.metalnessMapUv ? "#define METALNESSMAP_UV " + i.metalnessMapUv : "", i.roughnessMapUv ? "#define ROUGHNESSMAP_UV " + i.roughnessMapUv : "", i.anisotropyMapUv ? "#define ANISOTROPYMAP_UV " + i.anisotropyMapUv : "", i.clearcoatMapUv ? "#define CLEARCOATMAP_UV " + i.clearcoatMapUv : "", i.clearcoatNormalMapUv ? "#define CLEARCOAT_NORMALMAP_UV " + i.clearcoatNormalMapUv : "", i.clearcoatRoughnessMapUv ? "#define CLEARCOAT_ROUGHNESSMAP_UV " + i.clearcoatRoughnessMapUv : "", i.iridescenceMapUv ? "#define IRIDESCENCEMAP_UV " + i.iridescenceMapUv : "", i.iridescenceThicknessMapUv ? "#define IRIDESCENCE_THICKNESSMAP_UV " + i.iridescenceThicknessMapUv : "", i.sheenColorMapUv ? "#define SHEEN_COLORMAP_UV " + i.sheenColorMapUv : "", i.sheenRoughnessMapUv ? "#define SHEEN_ROUGHNESSMAP_UV " + i.sheenRoughnessMapUv : "", i.specularMapUv ? "#define SPECULARMAP_UV " + i.specularMapUv : "", i.specularColorMapUv ? "#define SPECULAR_COLORMAP_UV " + i.specularColorMapUv : "", i.specularIntensityMapUv ? "#define SPECULAR_INTENSITYMAP_UV " + i.specularIntensityMapUv : "", i.transmissionMapUv ? "#define TRANSMISSIONMAP_UV " + i.transmissionMapUv : "", i.thicknessMapUv ? "#define THICKNESSMAP_UV " + i.thicknessMapUv : "", i.vertexTangents && i.flatShading === !1 ? "#define USE_TANGENT" : "", i.vertexColors ? "#define USE_COLOR" : "", i.vertexAlphas ? "#define USE_COLOR_ALPHA" : "", i.vertexUv1s ? "#define USE_UV1" : "", i.vertexUv2s ? "#define USE_UV2" : "", i.vertexUv3s ? "#define USE_UV3" : "", i.pointsUvs ? "#define USE_POINTS_UV" : "", i.flatShading ? "#define FLAT_SHADED" : "", i.skinning ? "#define USE_SKINNING" : "", i.morphTargets ? "#define USE_MORPHTARGETS" : "", i.morphNormals && i.flatShading === !1 ? "#define USE_MORPHNORMALS" : "", i.morphColors ? "#define USE_MORPHCOLORS" : "", i.morphTargetsCount > 0 ? "#define MORPHTARGETS_TEXTURE_STRIDE " + i.morphTextureStride : "", i.morphTargetsCount > 0 ? "#define MORPHTARGETS_COUNT " + i.morphTargetsCount : "", i.doubleSided ? "#define DOUBLE_SIDED" : "", i.flipSided ? "#define FLIP_SIDED" : "", i.shadowMapEnabled ? "#define USE_SHADOWMAP" : "", i.shadowMapEnabled ? "#define " + l : "", i.sizeAttenuation ? "#define USE_SIZEATTENUATION" : "", i.numLightProbes > 0 ? "#define USE_LIGHT_PROBES" : "", i.logarithmicDepthBuffer ? "#define USE_LOGARITHMIC_DEPTH_BUFFER" : "", i.reversedDepthBuffer ? "#define USE_REVERSED_DEPTH_BUFFER" : "", "uniform mat4 modelMatrix;", "uniform mat4 modelViewMatrix;", "uniform mat4 projectionMatrix;", "uniform mat4 viewMatrix;", "uniform mat3 normalMatrix;", "uniform vec3 cameraPosition;", "uniform bool isOrthographic;", "#ifdef USE_INSTANCING", "	attribute mat4 instanceMatrix;", "#endif", "#ifdef USE_INSTANCING_COLOR", "	attribute vec3 instanceColor;", "#endif", "#ifdef USE_INSTANCING_MORPH", "	uniform sampler2D morphTexture;", "#endif", "attribute vec3 position;", "attribute vec3 normal;", "attribute vec2 uv;", "#ifdef USE_UV1", "	attribute vec2 uv1;", "#endif", "#ifdef USE_UV2", "	attribute vec2 uv2;", "#endif", "#ifdef USE_UV3", "	attribute vec2 uv3;", "#endif", "#ifdef USE_TANGENT", "	attribute vec4 tangent;", "#endif", "#if defined( USE_COLOR_ALPHA )", "	attribute vec4 color;", "#elif defined( USE_COLOR )", "	attribute vec3 color;", "#endif", "#ifdef USE_SKINNING", "	attribute vec4 skinIndex;", "	attribute vec4 skinWeight;", "#endif", `
`].filter(or).join(`
`), p = [rs(i), "#define SHADER_TYPE " + i.shaderType, "#define SHADER_NAME " + i.shaderName, x, i.useFog && i.fog ? "#define USE_FOG" : "", i.useFog && i.fogExp2 ? "#define FOG_EXP2" : "", i.alphaToCoverage ? "#define ALPHA_TO_COVERAGE" : "", i.map ? "#define USE_MAP" : "", i.matcap ? "#define USE_MATCAP" : "", i.envMap ? "#define USE_ENVMAP" : "", i.envMap ? "#define " + c : "", i.envMap ? "#define " + u : "", i.envMap ? "#define " + h : "", d ? "#define CUBEUV_TEXEL_WIDTH " + d.texelWidth : "", d ? "#define CUBEUV_TEXEL_HEIGHT " + d.texelHeight : "", d ? "#define CUBEUV_MAX_MIP " + d.maxMip + ".0" : "", i.lightMap ? "#define USE_LIGHTMAP" : "", i.aoMap ? "#define USE_AOMAP" : "", i.bumpMap ? "#define USE_BUMPMAP" : "", i.normalMap ? "#define USE_NORMALMAP" : "", i.normalMapObjectSpace ? "#define USE_NORMALMAP_OBJECTSPACE" : "", i.normalMapTangentSpace ? "#define USE_NORMALMAP_TANGENTSPACE" : "", i.emissiveMap ? "#define USE_EMISSIVEMAP" : "", i.anisotropy ? "#define USE_ANISOTROPY" : "", i.anisotropyMap ? "#define USE_ANISOTROPYMAP" : "", i.clearcoat ? "#define USE_CLEARCOAT" : "", i.clearcoatMap ? "#define USE_CLEARCOATMAP" : "", i.clearcoatRoughnessMap ? "#define USE_CLEARCOAT_ROUGHNESSMAP" : "", i.clearcoatNormalMap ? "#define USE_CLEARCOAT_NORMALMAP" : "", i.dispersion ? "#define USE_DISPERSION" : "", i.iridescence ? "#define USE_IRIDESCENCE" : "", i.iridescenceMap ? "#define USE_IRIDESCENCEMAP" : "", i.iridescenceThicknessMap ? "#define USE_IRIDESCENCE_THICKNESSMAP" : "", i.specularMap ? "#define USE_SPECULARMAP" : "", i.specularColorMap ? "#define USE_SPECULAR_COLORMAP" : "", i.specularIntensityMap ? "#define USE_SPECULAR_INTENSITYMAP" : "", i.roughnessMap ? "#define USE_ROUGHNESSMAP" : "", i.metalnessMap ? "#define USE_METALNESSMAP" : "", i.alphaMap ? "#define USE_ALPHAMAP" : "", i.alphaTest ? "#define USE_ALPHATEST" : "", i.alphaHash ? "#define USE_ALPHAHASH" : "", i.sheen ? "#define USE_SHEEN" : "", i.sheenColorMap ? "#define USE_SHEEN_COLORMAP" : "", i.sheenRoughnessMap ? "#define USE_SHEEN_ROUGHNESSMAP" : "", i.transmission ? "#define USE_TRANSMISSION" : "", i.transmissionMap ? "#define USE_TRANSMISSIONMAP" : "", i.thicknessMap ? "#define USE_THICKNESSMAP" : "", i.vertexTangents && i.flatShading === !1 ? "#define USE_TANGENT" : "", i.vertexColors || i.instancingColor || i.batchingColor ? "#define USE_COLOR" : "", i.vertexAlphas ? "#define USE_COLOR_ALPHA" : "", i.vertexUv1s ? "#define USE_UV1" : "", i.vertexUv2s ? "#define USE_UV2" : "", i.vertexUv3s ? "#define USE_UV3" : "", i.pointsUvs ? "#define USE_POINTS_UV" : "", i.gradientMap ? "#define USE_GRADIENTMAP" : "", i.flatShading ? "#define FLAT_SHADED" : "", i.doubleSided ? "#define DOUBLE_SIDED" : "", i.flipSided ? "#define FLIP_SIDED" : "", i.shadowMapEnabled ? "#define USE_SHADOWMAP" : "", i.shadowMapEnabled ? "#define " + l : "", i.premultipliedAlpha ? "#define PREMULTIPLIED_ALPHA" : "", i.numLightProbes > 0 ? "#define USE_LIGHT_PROBES" : "", i.decodeVideoTexture ? "#define DECODE_VIDEO_TEXTURE" : "", i.decodeVideoTextureEmissive ? "#define DECODE_VIDEO_TEXTURE_EMISSIVE" : "", i.logarithmicDepthBuffer ? "#define USE_LOGARITHMIC_DEPTH_BUFFER" : "", i.reversedDepthBuffer ? "#define USE_REVERSED_DEPTH_BUFFER" : "", "uniform mat4 viewMatrix;", "uniform vec3 cameraPosition;", "uniform bool isOrthographic;", i.toneMapping === 0 ? "" : "#define TONE_MAPPING", i.toneMapping === 0 ? "" : Ie.tonemapping_pars_fragment, i.toneMapping === 0 ? "" : vu("toneMapping", i.toneMapping), i.dithering ? "#define DITHERING" : "", i.opaque ? "#define OPAQUE" : "", Ie.colorspace_pars_fragment, _u("linearToOutputTexel", i.outputColorSpace), xu(), i.useDepthPacking ? "#define DEPTH_PACKING " + i.depthPacking : "", `
`].filter(or).join(`
`)), s = qa(s), s = es(s, i), s = ts(s, i), o = qa(o), o = es(o, i), o = ts(o, i), s = is(s), o = is(o), i.isRawShaderMaterial !== !0 && (R = `#version 300 es
`, f = [m, "#define attribute in", "#define varying out", "#define texture2D texture"].join(`
`) + `
` + f, p = ["#define varying in", i.glslVersion === "300 es" ? "" : "layout(location = 0) out highp vec4 pc_fragColor;", i.glslVersion === "300 es" ? "" : "#define gl_FragColor pc_fragColor", "#define gl_FragDepthEXT gl_FragDepth", "#define texture2D texture", "#define textureCube texture", "#define texture2DProj textureProj", "#define texture2DLodEXT textureLod", "#define texture2DProjLodEXT textureProjLod", "#define textureCubeLodEXT textureLod", "#define texture2DGradEXT textureGrad", "#define texture2DProjGradEXT textureProjGrad", "#define textureCubeGradEXT textureGrad"].join(`
`) + `
` + p);
  let y = R + f + s, A = R + p + o, I = Jn(a, a.VERTEX_SHADER, y), L = Jn(a, a.FRAGMENT_SHADER, A);
  a.attachShader(_, I), a.attachShader(_, L), i.index0AttributeName === void 0 ? i.morphTargets === !0 && a.bindAttribLocation(_, 0, "position") : a.bindAttribLocation(_, 0, i.index0AttributeName), a.linkProgram(_);
  function D(w) {
    if (e.debug.checkShaderErrors) {
      let W = a.getProgramInfoLog(_) || "", V = a.getShaderInfoLog(I) || "", k = a.getShaderInfoLog(L) || "", J = W.trim(), H = V.trim(), Q = k.trim(), X = !0, ie = !0;
      if (a.getProgramParameter(_, a.LINK_STATUS) === !1) if (X = !1, typeof e.debug.onShaderError == "function") e.debug.onShaderError(a, _, I, L);
      else {
        let pe = Qn(a, I, "vertex"), Ue = Qn(a, L, "fragment");
        console.error("THREE.WebGLProgram: Shader Error " + a.getError() + " - VALIDATE_STATUS " + a.getProgramParameter(_, a.VALIDATE_STATUS) + `

Material Name: ` + w.name + `
Material Type: ` + w.type + `

Program Info Log: ` + J + `
` + pe + `
` + Ue);
      }
      else J === "" ? (H === "" || Q === "") && (ie = !1) : console.warn("THREE.WebGLProgram: Program Info Log:", J);
      ie && (w.diagnostics = { runnable: X, programLog: J, vertexShader: { log: H, prefix: f }, fragmentShader: { log: Q, prefix: p } });
    }
    a.deleteShader(I), a.deleteShader(L), z = new Zr(a, _), M = Mu(a, _);
  }
  let z;
  this.getUniforms = function() {
    return z === void 0 && D(this), z;
  };
  let M;
  this.getAttributes = function() {
    return M === void 0 && D(this), M;
  };
  let S = i.rendererExtensionParallelShaderCompile === !1;
  return this.isReady = function() {
    return S === !1 && (S = a.getProgramParameter(_, pu)), S;
  }, this.destroy = function() {
    r.releaseStatesOfProgram(this), a.deleteProgram(_), this.program = void 0;
  }, this.type = i.shaderType, this.name = i.shaderName, this.id = fu++, this.cacheKey = t, this.usedTimes = 1, this.program = _, this.vertexShader = I, this.fragmentShader = L, this;
}
var Iu = 0, Nu = class {
  constructor() {
    this.shaderCache = /* @__PURE__ */ new Map(), this.materialCache = /* @__PURE__ */ new Map();
  }
  update(e) {
    let t = e.vertexShader, i = e.fragmentShader, r = this._getShaderStage(t), a = this._getShaderStage(i), n = this._getShaderCacheForMaterial(e);
    return n.has(r) === !1 && (n.add(r), r.usedTimes++), n.has(a) === !1 && (n.add(a), a.usedTimes++), this;
  }
  remove(e) {
    let t = this.materialCache.get(e);
    for (let i of t) i.usedTimes--, i.usedTimes === 0 && this.shaderCache.delete(i.code);
    return this.materialCache.delete(e), this;
  }
  getVertexShaderID(e) {
    return this._getShaderStage(e.vertexShader).id;
  }
  getFragmentShaderID(e) {
    return this._getShaderStage(e.fragmentShader).id;
  }
  dispose() {
    this.shaderCache.clear(), this.materialCache.clear();
  }
  _getShaderCacheForMaterial(e) {
    let t = this.materialCache, i = t.get(e);
    return i === void 0 && (i = /* @__PURE__ */ new Set(), t.set(e, i)), i;
  }
  _getShaderStage(e) {
    let t = this.shaderCache, i = t.get(e);
    return i === void 0 && (i = new Ou(e), t.set(e, i)), i;
  }
}, Ou = class {
  constructor(e) {
    this.id = Iu++, this.code = e, this.usedTimes = 0;
  }
};
function Fu(e, t, i, r, a, n, s) {
  let o = new nn(), l = new Nu(), c = /* @__PURE__ */ new Set(), u = [], h = a.logarithmicDepthBuffer, d = a.vertexTextures, m = a.precision, x = { MeshDepthMaterial: "depth", MeshDistanceMaterial: "distanceRGBA", MeshNormalMaterial: "normal", MeshBasicMaterial: "basic", MeshLambertMaterial: "lambert", MeshPhongMaterial: "phong", MeshToonMaterial: "toon", MeshStandardMaterial: "physical", MeshPhysicalMaterial: "physical", MeshMatcapMaterial: "matcap", LineBasicMaterial: "basic", LineDashedMaterial: "dashed", PointsMaterial: "points", ShadowMaterial: "shadow", SpriteMaterial: "sprite" };
  function _(M) {
    return c.add(M), M === 0 ? "uv" : `uv${M}`;
  }
  function f(M, S, w, W, V) {
    let k = W.fog, J = V.geometry, H = M.isMeshStandardMaterial ? W.environment : null, Q = (M.isMeshStandardMaterial ? i : t).get(M.envMap || H), X = Q && Q.mapping === 306 ? Q.image.height : null, ie = x[M.type];
    M.precision !== null && (m = a.getMaxPrecision(M.precision), m !== M.precision && console.warn("THREE.WebGLProgram.getParameters:", M.precision, "not supported, using", m, "instead."));
    let pe = J.morphAttributes.position || J.morphAttributes.normal || J.morphAttributes.color, Ue = pe === void 0 ? 0 : pe.length, Oe = 0;
    J.morphAttributes.position !== void 0 && (Oe = 1), J.morphAttributes.normal !== void 0 && (Oe = 2), J.morphAttributes.color !== void 0 && (Oe = 3);
    let it, Xe, j, ne;
    if (ie) {
      let je = Gt[ie];
      it = je.vertexShader, Xe = je.fragmentShader;
    } else it = M.vertexShader, Xe = M.fragmentShader, l.update(M), j = l.getVertexShaderID(M), ne = l.getFragmentShaderID(M);
    let se = e.getRenderTarget(), Se = e.state.buffers.depth.getReversed(), Le = V.isInstancedMesh === !0, ge = V.isBatchedMesh === !0, qe = !!M.map, b = !!M.matcap, Ve = !!Q, ze = !!M.aoMap, Ye = !!M.lightMap, Me = !!M.bumpMap, Qe = !!M.normalMap, Te = !!M.displacementMap, we = !!M.emissiveMap, pt = !!M.metalnessMap, ct = !!M.roughnessMap, rt = M.anisotropy > 0, E = M.clearcoat > 0, g = M.dispersion > 0, U = M.iridescence > 0, q = M.sheen > 0, Z = M.transmission > 0, G = rt && !!M.anisotropyMap, fe = E && !!M.clearcoatMap, re = E && !!M.clearcoatNormalMap, xe = E && !!M.clearcoatRoughnessMap, Ee = U && !!M.iridescenceMap, te = U && !!M.iridescenceThicknessMap, le = q && !!M.sheenColorMap, Re = q && !!M.sheenRoughnessMap, be = !!M.specularMap, ce = !!M.specularColorMap, Fe = !!M.specularIntensityMap, T = Z && !!M.transmissionMap, ue = Z && !!M.thicknessMap, ae = !!M.gradientMap, _e = !!M.alphaMap, ee = M.alphaTest > 0, K = !!M.alphaHash, ve = !!M.extensions, Ae = 0;
    M.toneMapped && (se === null || se.isXRRenderTarget === !0) && (Ae = e.toneMapping);
    let at = { shaderID: ie, shaderType: M.type, shaderName: M.name, vertexShader: it, fragmentShader: Xe, defines: M.defines, customVertexShaderID: j, customFragmentShaderID: ne, isRawShaderMaterial: M.isRawShaderMaterial === !0, glslVersion: M.glslVersion, precision: m, batching: ge, batchingColor: ge && V._colorsTexture !== null, instancing: Le, instancingColor: Le && V.instanceColor !== null, instancingMorph: Le && V.morphTexture !== null, supportsVertexTextures: d, outputColorSpace: se === null ? e.outputColorSpace : se.isXRRenderTarget === !0 ? se.texture.colorSpace : pr, alphaToCoverage: !!M.alphaToCoverage, map: qe, matcap: b, envMap: Ve, envMapMode: Ve && Q.mapping, envMapCubeUVHeight: X, aoMap: ze, lightMap: Ye, bumpMap: Me, normalMap: Qe, displacementMap: d && Te, emissiveMap: we, normalMapObjectSpace: Qe && M.normalMapType === 1, normalMapTangentSpace: Qe && M.normalMapType === 0, metalnessMap: pt, roughnessMap: ct, anisotropy: rt, anisotropyMap: G, clearcoat: E, clearcoatMap: fe, clearcoatNormalMap: re, clearcoatRoughnessMap: xe, dispersion: g, iridescence: U, iridescenceMap: Ee, iridescenceThicknessMap: te, sheen: q, sheenColorMap: le, sheenRoughnessMap: Re, specularMap: be, specularColorMap: ce, specularIntensityMap: Fe, transmission: Z, transmissionMap: T, thicknessMap: ue, gradientMap: ae, opaque: M.transparent === !1 && M.blending === 1 && M.alphaToCoverage === !1, alphaMap: _e, alphaTest: ee, alphaHash: K, combine: M.combine, mapUv: qe && _(M.map.channel), aoMapUv: ze && _(M.aoMap.channel), lightMapUv: Ye && _(M.lightMap.channel), bumpMapUv: Me && _(M.bumpMap.channel), normalMapUv: Qe && _(M.normalMap.channel), displacementMapUv: Te && _(M.displacementMap.channel), emissiveMapUv: we && _(M.emissiveMap.channel), metalnessMapUv: pt && _(M.metalnessMap.channel), roughnessMapUv: ct && _(M.roughnessMap.channel), anisotropyMapUv: G && _(M.anisotropyMap.channel), clearcoatMapUv: fe && _(M.clearcoatMap.channel), clearcoatNormalMapUv: re && _(M.clearcoatNormalMap.channel), clearcoatRoughnessMapUv: xe && _(M.clearcoatRoughnessMap.channel), iridescenceMapUv: Ee && _(M.iridescenceMap.channel), iridescenceThicknessMapUv: te && _(M.iridescenceThicknessMap.channel), sheenColorMapUv: le && _(M.sheenColorMap.channel), sheenRoughnessMapUv: Re && _(M.sheenRoughnessMap.channel), specularMapUv: be && _(M.specularMap.channel), specularColorMapUv: ce && _(M.specularColorMap.channel), specularIntensityMapUv: Fe && _(M.specularIntensityMap.channel), transmissionMapUv: T && _(M.transmissionMap.channel), thicknessMapUv: ue && _(M.thicknessMap.channel), alphaMapUv: _e && _(M.alphaMap.channel), vertexTangents: !!J.attributes.tangent && (Qe || rt), vertexColors: M.vertexColors, vertexAlphas: M.vertexColors === !0 && !!J.attributes.color && J.attributes.color.itemSize === 4, pointsUvs: V.isPoints === !0 && !!J.attributes.uv && (qe || _e), fog: !!k, useFog: M.fog === !0, fogExp2: !!k && k.isFogExp2, flatShading: M.flatShading === !0 && M.wireframe === !1, sizeAttenuation: M.sizeAttenuation === !0, logarithmicDepthBuffer: h, reversedDepthBuffer: Se, skinning: V.isSkinnedMesh === !0, morphTargets: J.morphAttributes.position !== void 0, morphNormals: J.morphAttributes.normal !== void 0, morphColors: J.morphAttributes.color !== void 0, morphTargetsCount: Ue, morphTextureStride: Oe, numDirLights: S.directional.length, numPointLights: S.point.length, numSpotLights: S.spot.length, numSpotLightMaps: S.spotLightMap.length, numRectAreaLights: S.rectArea.length, numHemiLights: S.hemi.length, numDirLightShadows: S.directionalShadowMap.length, numPointLightShadows: S.pointShadowMap.length, numSpotLightShadows: S.spotShadowMap.length, numSpotLightShadowsWithMaps: S.numSpotLightShadowsWithMaps, numLightProbes: S.numLightProbes, numClippingPlanes: s.numPlanes, numClipIntersection: s.numIntersection, dithering: M.dithering, shadowMapEnabled: e.shadowMap.enabled && w.length > 0, shadowMapType: e.shadowMap.type, toneMapping: Ae, decodeVideoTexture: qe && M.map.isVideoTexture === !0 && We.getTransfer(M.map.colorSpace) === "srgb", decodeVideoTextureEmissive: we && M.emissiveMap.isVideoTexture === !0 && We.getTransfer(M.emissiveMap.colorSpace) === "srgb", premultipliedAlpha: M.premultipliedAlpha, doubleSided: M.side === 2, flipSided: M.side === 1, useDepthPacking: M.depthPacking >= 0, depthPacking: M.depthPacking || 0, index0AttributeName: M.index0AttributeName, extensionClipCullDistance: ve && M.extensions.clipCullDistance === !0 && r.has("WEBGL_clip_cull_distance"), extensionMultiDraw: (ve && M.extensions.multiDraw === !0 || ge) && r.has("WEBGL_multi_draw"), rendererExtensionParallelShaderCompile: r.has("KHR_parallel_shader_compile"), customProgramCacheKey: M.customProgramCacheKey() };
    return at.vertexUv1s = c.has(1), at.vertexUv2s = c.has(2), at.vertexUv3s = c.has(3), c.clear(), at;
  }
  function p(M) {
    let S = [];
    if (M.shaderID ? S.push(M.shaderID) : (S.push(M.customVertexShaderID), S.push(M.customFragmentShaderID)), M.defines !== void 0) for (let w in M.defines) S.push(w), S.push(M.defines[w]);
    return M.isRawShaderMaterial === !1 && (R(S, M), y(S, M), S.push(e.outputColorSpace)), S.push(M.customProgramCacheKey), S.join();
  }
  function R(M, S) {
    M.push(S.precision), M.push(S.outputColorSpace), M.push(S.envMapMode), M.push(S.envMapCubeUVHeight), M.push(S.mapUv), M.push(S.alphaMapUv), M.push(S.lightMapUv), M.push(S.aoMapUv), M.push(S.bumpMapUv), M.push(S.normalMapUv), M.push(S.displacementMapUv), M.push(S.emissiveMapUv), M.push(S.metalnessMapUv), M.push(S.roughnessMapUv), M.push(S.anisotropyMapUv), M.push(S.clearcoatMapUv), M.push(S.clearcoatNormalMapUv), M.push(S.clearcoatRoughnessMapUv), M.push(S.iridescenceMapUv), M.push(S.iridescenceThicknessMapUv), M.push(S.sheenColorMapUv), M.push(S.sheenRoughnessMapUv), M.push(S.specularMapUv), M.push(S.specularColorMapUv), M.push(S.specularIntensityMapUv), M.push(S.transmissionMapUv), M.push(S.thicknessMapUv), M.push(S.combine), M.push(S.fogExp2), M.push(S.sizeAttenuation), M.push(S.morphTargetsCount), M.push(S.morphAttributeCount), M.push(S.numDirLights), M.push(S.numPointLights), M.push(S.numSpotLights), M.push(S.numSpotLightMaps), M.push(S.numHemiLights), M.push(S.numRectAreaLights), M.push(S.numDirLightShadows), M.push(S.numPointLightShadows), M.push(S.numSpotLightShadows), M.push(S.numSpotLightShadowsWithMaps), M.push(S.numLightProbes), M.push(S.shadowMapType), M.push(S.toneMapping), M.push(S.numClippingPlanes), M.push(S.numClipIntersection), M.push(S.depthPacking);
  }
  function y(M, S) {
    o.disableAll(), S.supportsVertexTextures && o.enable(0), S.instancing && o.enable(1), S.instancingColor && o.enable(2), S.instancingMorph && o.enable(3), S.matcap && o.enable(4), S.envMap && o.enable(5), S.normalMapObjectSpace && o.enable(6), S.normalMapTangentSpace && o.enable(7), S.clearcoat && o.enable(8), S.iridescence && o.enable(9), S.alphaTest && o.enable(10), S.vertexColors && o.enable(11), S.vertexAlphas && o.enable(12), S.vertexUv1s && o.enable(13), S.vertexUv2s && o.enable(14), S.vertexUv3s && o.enable(15), S.vertexTangents && o.enable(16), S.anisotropy && o.enable(17), S.alphaHash && o.enable(18), S.batching && o.enable(19), S.dispersion && o.enable(20), S.batchingColor && o.enable(21), S.gradientMap && o.enable(22), M.push(o.mask), o.disableAll(), S.fog && o.enable(0), S.useFog && o.enable(1), S.flatShading && o.enable(2), S.logarithmicDepthBuffer && o.enable(3), S.reversedDepthBuffer && o.enable(4), S.skinning && o.enable(5), S.morphTargets && o.enable(6), S.morphNormals && o.enable(7), S.morphColors && o.enable(8), S.premultipliedAlpha && o.enable(9), S.shadowMapEnabled && o.enable(10), S.doubleSided && o.enable(11), S.flipSided && o.enable(12), S.useDepthPacking && o.enable(13), S.dithering && o.enable(14), S.transmission && o.enable(15), S.sheen && o.enable(16), S.opaque && o.enable(17), S.pointsUvs && o.enable(18), S.decodeVideoTexture && o.enable(19), S.decodeVideoTextureEmissive && o.enable(20), S.alphaToCoverage && o.enable(21), M.push(o.mask);
  }
  function A(M) {
    let S = x[M.type], w;
    if (S) {
      let W = Gt[S];
      w = zl.clone(W.uniforms);
    } else w = M.uniforms;
    return w;
  }
  function I(M, S) {
    let w;
    for (let W = 0, V = u.length; W < V; W++) {
      let k = u[W];
      if (k.cacheKey === S) {
        w = k, ++w.usedTimes;
        break;
      }
    }
    return w === void 0 && (w = new Uu(e, S, M, n), u.push(w)), w;
  }
  function L(M) {
    if (--M.usedTimes === 0) {
      let S = u.indexOf(M);
      u[S] = u[u.length - 1], u.pop(), M.destroy();
    }
  }
  function D(M) {
    l.remove(M);
  }
  function z() {
    l.dispose();
  }
  return { getParameters: f, getProgramCacheKey: p, getUniforms: A, acquireProgram: I, releaseProgram: L, releaseShaderCache: D, programs: u, dispose: z };
}
function Bu() {
  let e = /* @__PURE__ */ new WeakMap();
  function t(s) {
    return e.has(s);
  }
  function i(s) {
    let o = e.get(s);
    return o === void 0 && (o = {}, e.set(s, o)), o;
  }
  function r(s) {
    e.delete(s);
  }
  function a(s, o, l) {
    e.get(s)[o] = l;
  }
  function n() {
    e = /* @__PURE__ */ new WeakMap();
  }
  return { has: t, get: i, remove: r, update: a, dispose: n };
}
function zu(e, t) {
  return e.groupOrder === t.groupOrder ? e.renderOrder === t.renderOrder ? e.material.id === t.material.id ? e.z === t.z ? e.id - t.id : e.z - t.z : e.material.id - t.material.id : e.renderOrder - t.renderOrder : e.groupOrder - t.groupOrder;
}
function as(e, t) {
  return e.groupOrder === t.groupOrder ? e.renderOrder === t.renderOrder ? e.z === t.z ? e.id - t.id : t.z - e.z : e.renderOrder - t.renderOrder : e.groupOrder - t.groupOrder;
}
function ns() {
  let e = [], t = 0, i = [], r = [], a = [];
  function n() {
    t = 0, i.length = 0, r.length = 0, a.length = 0;
  }
  function s(h, d, m, x, _, f) {
    let p = e[t];
    return p === void 0 ? (p = { id: h.id, object: h, geometry: d, material: m, groupOrder: x, renderOrder: h.renderOrder, z: _, group: f }, e[t] = p) : (p.id = h.id, p.object = h, p.geometry = d, p.material = m, p.groupOrder = x, p.renderOrder = h.renderOrder, p.z = _, p.group = f), t++, p;
  }
  function o(h, d, m, x, _, f) {
    let p = s(h, d, m, x, _, f);
    m.transmission > 0 ? r.push(p) : m.transparent === !0 ? a.push(p) : i.push(p);
  }
  function l(h, d, m, x, _, f) {
    let p = s(h, d, m, x, _, f);
    m.transmission > 0 ? r.unshift(p) : m.transparent === !0 ? a.unshift(p) : i.unshift(p);
  }
  function c(h, d) {
    i.length > 1 && i.sort(h || zu), r.length > 1 && r.sort(d || as), a.length > 1 && a.sort(d || as);
  }
  function u() {
    for (let h = t, d = e.length; h < d; h++) {
      let m = e[h];
      if (m.id === null) break;
      m.id = null, m.object = null, m.geometry = null, m.material = null, m.group = null;
    }
  }
  return { opaque: i, transmissive: r, transparent: a, init: n, push: o, unshift: l, finish: u, sort: c };
}
function ku() {
  let e = /* @__PURE__ */ new WeakMap();
  function t(r, a) {
    let n = e.get(r), s;
    return n === void 0 ? (s = new ns(), e.set(r, [s])) : a >= n.length ? (s = new ns(), n.push(s)) : s = n[a], s;
  }
  function i() {
    e = /* @__PURE__ */ new WeakMap();
  }
  return { get: t, dispose: i };
}
function Hu() {
  let e = {};
  return { get: function(t) {
    if (e[t.id] !== void 0) return e[t.id];
    let i;
    switch (t.type) {
      case "DirectionalLight":
        i = { direction: new F(), color: new He() };
        break;
      case "SpotLight":
        i = { position: new F(), direction: new F(), color: new He(), distance: 0, coneCos: 0, penumbraCos: 0, decay: 0 };
        break;
      case "PointLight":
        i = { position: new F(), color: new He(), distance: 0, decay: 0 };
        break;
      case "HemisphereLight":
        i = { direction: new F(), skyColor: new He(), groundColor: new He() };
        break;
      case "RectAreaLight":
        i = { color: new He(), position: new F(), halfWidth: new F(), halfHeight: new F() };
        break;
    }
    return e[t.id] = i, i;
  } };
}
function Vu() {
  let e = {};
  return { get: function(t) {
    if (e[t.id] !== void 0) return e[t.id];
    let i;
    switch (t.type) {
      case "DirectionalLight":
        i = { shadowIntensity: 1, shadowBias: 0, shadowNormalBias: 0, shadowRadius: 1, shadowMapSize: new ke() };
        break;
      case "SpotLight":
        i = { shadowIntensity: 1, shadowBias: 0, shadowNormalBias: 0, shadowRadius: 1, shadowMapSize: new ke() };
        break;
      case "PointLight":
        i = { shadowIntensity: 1, shadowBias: 0, shadowNormalBias: 0, shadowRadius: 1, shadowMapSize: new ke(), shadowCameraNear: 1, shadowCameraFar: 1e3 };
        break;
    }
    return e[t.id] = i, i;
  } };
}
var Gu = 0;
function Wu(e, t) {
  return (t.castShadow ? 2 : 0) - (e.castShadow ? 2 : 0) + +!!t.map - !!e.map;
}
function Xu(e) {
  let t = new Hu(), i = Vu(), r = { version: 0, hash: { directionalLength: -1, pointLength: -1, spotLength: -1, rectAreaLength: -1, hemiLength: -1, numDirectionalShadows: -1, numPointShadows: -1, numSpotShadows: -1, numSpotMaps: -1, numLightProbes: -1 }, ambient: [0, 0, 0], probe: [], directional: [], directionalShadow: [], directionalShadowMap: [], directionalShadowMatrix: [], spot: [], spotLightMap: [], spotShadow: [], spotShadowMap: [], spotLightMatrix: [], rectArea: [], rectAreaLTC1: null, rectAreaLTC2: null, point: [], pointShadow: [], pointShadowMap: [], pointShadowMatrix: [], hemi: [], numSpotLightShadowsWithMaps: 0, numLightProbes: 0 };
  for (let c = 0; c < 9; c++) r.probe.push(new F());
  let a = new F(), n = new dt(), s = new dt();
  function o(c) {
    let u = 0, h = 0, d = 0;
    for (let M = 0; M < 9; M++) r.probe[M].set(0, 0, 0);
    let m = 0, x = 0, _ = 0, f = 0, p = 0, R = 0, y = 0, A = 0, I = 0, L = 0, D = 0;
    c.sort(Wu);
    for (let M = 0, S = c.length; M < S; M++) {
      let w = c[M], W = w.color, V = w.intensity, k = w.distance, J = w.shadow && w.shadow.map ? w.shadow.map.texture : null;
      if (w.isAmbientLight) u += W.r * V, h += W.g * V, d += W.b * V;
      else if (w.isLightProbe) {
        for (let H = 0; H < 9; H++) r.probe[H].addScaledVector(w.sh.coefficients[H], V);
        D++;
      } else if (w.isDirectionalLight) {
        let H = t.get(w);
        if (H.color.copy(w.color).multiplyScalar(w.intensity), w.castShadow) {
          let Q = w.shadow, X = i.get(w);
          X.shadowIntensity = Q.intensity, X.shadowBias = Q.bias, X.shadowNormalBias = Q.normalBias, X.shadowRadius = Q.radius, X.shadowMapSize = Q.mapSize, r.directionalShadow[m] = X, r.directionalShadowMap[m] = J, r.directionalShadowMatrix[m] = w.shadow.matrix, R++;
        }
        r.directional[m] = H, m++;
      } else if (w.isSpotLight) {
        let H = t.get(w);
        H.position.setFromMatrixPosition(w.matrixWorld), H.color.copy(W).multiplyScalar(V), H.distance = k, H.coneCos = Math.cos(w.angle), H.penumbraCos = Math.cos(w.angle * (1 - w.penumbra)), H.decay = w.decay, r.spot[_] = H;
        let Q = w.shadow;
        if (w.map && (r.spotLightMap[I] = w.map, I++, Q.updateMatrices(w), w.castShadow && L++), r.spotLightMatrix[_] = Q.matrix, w.castShadow) {
          let X = i.get(w);
          X.shadowIntensity = Q.intensity, X.shadowBias = Q.bias, X.shadowNormalBias = Q.normalBias, X.shadowRadius = Q.radius, X.shadowMapSize = Q.mapSize, r.spotShadow[_] = X, r.spotShadowMap[_] = J, A++;
        }
        _++;
      } else if (w.isRectAreaLight) {
        let H = t.get(w);
        H.color.copy(W).multiplyScalar(V), H.halfWidth.set(w.width * 0.5, 0, 0), H.halfHeight.set(0, w.height * 0.5, 0), r.rectArea[f] = H, f++;
      } else if (w.isPointLight) {
        let H = t.get(w);
        if (H.color.copy(w.color).multiplyScalar(w.intensity), H.distance = w.distance, H.decay = w.decay, w.castShadow) {
          let Q = w.shadow, X = i.get(w);
          X.shadowIntensity = Q.intensity, X.shadowBias = Q.bias, X.shadowNormalBias = Q.normalBias, X.shadowRadius = Q.radius, X.shadowMapSize = Q.mapSize, X.shadowCameraNear = Q.camera.near, X.shadowCameraFar = Q.camera.far, r.pointShadow[x] = X, r.pointShadowMap[x] = J, r.pointShadowMatrix[x] = w.shadow.matrix, y++;
        }
        r.point[x] = H, x++;
      } else if (w.isHemisphereLight) {
        let H = t.get(w);
        H.skyColor.copy(w.color).multiplyScalar(V), H.groundColor.copy(w.groundColor).multiplyScalar(V), r.hemi[p] = H, p++;
      }
    }
    f > 0 && (e.has("OES_texture_float_linear") === !0 ? (r.rectAreaLTC1 = oe.LTC_FLOAT_1, r.rectAreaLTC2 = oe.LTC_FLOAT_2) : (r.rectAreaLTC1 = oe.LTC_HALF_1, r.rectAreaLTC2 = oe.LTC_HALF_2)), r.ambient[0] = u, r.ambient[1] = h, r.ambient[2] = d;
    let z = r.hash;
    (z.directionalLength !== m || z.pointLength !== x || z.spotLength !== _ || z.rectAreaLength !== f || z.hemiLength !== p || z.numDirectionalShadows !== R || z.numPointShadows !== y || z.numSpotShadows !== A || z.numSpotMaps !== I || z.numLightProbes !== D) && (r.directional.length = m, r.spot.length = _, r.rectArea.length = f, r.point.length = x, r.hemi.length = p, r.directionalShadow.length = R, r.directionalShadowMap.length = R, r.pointShadow.length = y, r.pointShadowMap.length = y, r.spotShadow.length = A, r.spotShadowMap.length = A, r.directionalShadowMatrix.length = R, r.pointShadowMatrix.length = y, r.spotLightMatrix.length = A + I - L, r.spotLightMap.length = I, r.numSpotLightShadowsWithMaps = L, r.numLightProbes = D, z.directionalLength = m, z.pointLength = x, z.spotLength = _, z.rectAreaLength = f, z.hemiLength = p, z.numDirectionalShadows = R, z.numPointShadows = y, z.numSpotShadows = A, z.numSpotMaps = I, z.numLightProbes = D, r.version = Gu++);
  }
  function l(c, u) {
    let h = 0, d = 0, m = 0, x = 0, _ = 0, f = u.matrixWorldInverse;
    for (let p = 0, R = c.length; p < R; p++) {
      let y = c[p];
      if (y.isDirectionalLight) {
        let A = r.directional[h];
        A.direction.setFromMatrixPosition(y.matrixWorld), a.setFromMatrixPosition(y.target.matrixWorld), A.direction.sub(a), A.direction.transformDirection(f), h++;
      } else if (y.isSpotLight) {
        let A = r.spot[m];
        A.position.setFromMatrixPosition(y.matrixWorld), A.position.applyMatrix4(f), A.direction.setFromMatrixPosition(y.matrixWorld), a.setFromMatrixPosition(y.target.matrixWorld), A.direction.sub(a), A.direction.transformDirection(f), m++;
      } else if (y.isRectAreaLight) {
        let A = r.rectArea[x];
        A.position.setFromMatrixPosition(y.matrixWorld), A.position.applyMatrix4(f), s.identity(), n.copy(y.matrixWorld), n.premultiply(f), s.extractRotation(n), A.halfWidth.set(y.width * 0.5, 0, 0), A.halfHeight.set(0, y.height * 0.5, 0), A.halfWidth.applyMatrix4(s), A.halfHeight.applyMatrix4(s), x++;
      } else if (y.isPointLight) {
        let A = r.point[d];
        A.position.setFromMatrixPosition(y.matrixWorld), A.position.applyMatrix4(f), d++;
      } else if (y.isHemisphereLight) {
        let A = r.hemi[_];
        A.direction.setFromMatrixPosition(y.matrixWorld), A.direction.transformDirection(f), _++;
      }
    }
  }
  return { setup: o, setupView: l, state: r };
}
function ss(e) {
  let t = new Xu(e), i = [], r = [];
  function a(u) {
    c.camera = u, i.length = 0, r.length = 0;
  }
  function n(u) {
    i.push(u);
  }
  function s(u) {
    r.push(u);
  }
  function o() {
    t.setup(i);
  }
  function l(u) {
    t.setupView(i, u);
  }
  let c = { lightsArray: i, shadowsArray: r, camera: null, lights: t, transmissionRenderTarget: {} };
  return { init: a, state: c, setupLights: o, setupLightsView: l, pushLight: n, pushShadow: s };
}
function ju(e) {
  let t = /* @__PURE__ */ new WeakMap();
  function i(a, n = 0) {
    let s = t.get(a), o;
    return s === void 0 ? (o = new ss(e), t.set(a, [o])) : n >= s.length ? (o = new ss(e), s.push(o)) : o = s[n], o;
  }
  function r() {
    t = /* @__PURE__ */ new WeakMap();
  }
  return { get: i, dispose: r };
}
var qu = `void main() {
	gl_Position = vec4( position, 1.0 );
}`, Yu = `uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;
function Ku(e, t, i) {
  let r = new Bs(), a = new ke(), n = new ke(), s = new st(), o = new Jl({ depthPacking: gl }), l = new $l(), c = {}, u = i.maxTextureSize, h = { 0: 1, 1: 0, 2: 2 }, d = new Xt({ defines: { VSM_SAMPLES: 8 }, uniforms: { shadow_pass: { value: null }, resolution: { value: new ke() }, radius: { value: 4 } }, vertexShader: qu, fragmentShader: Yu }), m = d.clone();
  m.defines.HORIZONTAL_PASS = 1;
  let x = new wi();
  x.setAttribute("position", new bt(new Float32Array([-1, -1, 0.5, 3, -1, 0.5, -1, 3, 0.5]), 3));
  let _ = new Ot(x, d), f = this;
  this.enabled = !1, this.autoUpdate = !0, this.needsUpdate = !1, this.type = 1;
  let p = this.type;
  this.render = function(L, D, z) {
    if (f.enabled === !1 || f.autoUpdate === !1 && f.needsUpdate === !1 || L.length === 0) return;
    let M = e.getRenderTarget(), S = e.getActiveCubeFace(), w = e.getActiveMipmapLevel(), W = e.state;
    W.setBlending(0), W.buffers.depth.getReversed() === !0 ? W.buffers.color.setClear(0, 0, 0, 0) : W.buffers.color.setClear(1, 1, 1, 1), W.buffers.depth.setTest(!0), W.setScissorTest(!1);
    let V = p !== 3 && this.type === 3, k = p === 3 && this.type !== 3;
    for (let J = 0, H = L.length; J < H; J++) {
      let Q = L[J], X = Q.shadow;
      if (X === void 0) {
        console.warn("THREE.WebGLShadowMap:", Q, "has no shadow.");
        continue;
      }
      if (X.autoUpdate === !1 && X.needsUpdate === !1) continue;
      a.copy(X.mapSize);
      let ie = X.getFrameExtents();
      if (a.multiply(ie), n.copy(X.mapSize), (a.x > u || a.y > u) && (a.x > u && (n.x = Math.floor(u / ie.x), a.x = n.x * ie.x, X.mapSize.x = n.x), a.y > u && (n.y = Math.floor(u / ie.y), a.y = n.y * ie.y, X.mapSize.y = n.y)), X.map === null || V === !0 || k === !0) {
        let Ue = this.type === 3 ? {} : { minFilter: Tt, magFilter: Tt };
        X.map !== null && X.map.dispose(), X.map = new ai(a.x, a.y, Ue), X.map.texture.name = Q.name + ".shadowMap", X.camera.updateProjectionMatrix();
      }
      e.setRenderTarget(X.map), e.clear();
      let pe = X.getViewportCount();
      for (let Ue = 0; Ue < pe; Ue++) {
        let Oe = X.getViewport(Ue);
        s.set(n.x * Oe.x, n.y * Oe.y, n.x * Oe.z, n.y * Oe.w), W.viewport(s), X.updateMatrices(Q, Ue), r = X.getFrustum(), A(D, z, X.camera, Q, this.type);
      }
      X.isPointLightShadow !== !0 && this.type === 3 && R(X, z), X.needsUpdate = !1;
    }
    p = this.type, f.needsUpdate = !1, e.setRenderTarget(M, S, w);
  };
  function R(L, D) {
    let z = t.update(_);
    d.defines.VSM_SAMPLES !== L.blurSamples && (d.defines.VSM_SAMPLES = L.blurSamples, m.defines.VSM_SAMPLES = L.blurSamples, d.needsUpdate = !0, m.needsUpdate = !0), L.mapPass === null && (L.mapPass = new ai(a.x, a.y)), d.uniforms.shadow_pass.value = L.map.texture, d.uniforms.resolution.value = L.mapSize, d.uniforms.radius.value = L.radius, e.setRenderTarget(L.mapPass), e.clear(), e.renderBufferDirect(D, null, z, d, _, null), m.uniforms.shadow_pass.value = L.mapPass.texture, m.uniforms.resolution.value = L.mapSize, m.uniforms.radius.value = L.radius, e.setRenderTarget(L.map), e.clear(), e.renderBufferDirect(D, null, z, m, _, null);
  }
  function y(L, D, z, M) {
    let S = null, w = z.isPointLight === !0 ? L.customDistanceMaterial : L.customDepthMaterial;
    if (w !== void 0) S = w;
    else if (S = z.isPointLight === !0 ? l : o, e.localClippingEnabled && D.clipShadows === !0 && Array.isArray(D.clippingPlanes) && D.clippingPlanes.length !== 0 || D.displacementMap && D.displacementScale !== 0 || D.alphaMap && D.alphaTest > 0 || D.map && D.alphaTest > 0 || D.alphaToCoverage === !0) {
      let W = S.uuid, V = D.uuid, k = c[W];
      k === void 0 && (k = {}, c[W] = k);
      let J = k[V];
      J === void 0 && (J = S.clone(), k[V] = J, D.addEventListener("dispose", I)), S = J;
    }
    if (S.visible = D.visible, S.wireframe = D.wireframe, M === 3 ? S.side = D.shadowSide === null ? D.side : D.shadowSide : S.side = D.shadowSide === null ? h[D.side] : D.shadowSide, S.alphaMap = D.alphaMap, S.alphaTest = D.alphaToCoverage === !0 ? 0.5 : D.alphaTest, S.map = D.map, S.clipShadows = D.clipShadows, S.clippingPlanes = D.clippingPlanes, S.clipIntersection = D.clipIntersection, S.displacementMap = D.displacementMap, S.displacementScale = D.displacementScale, S.displacementBias = D.displacementBias, S.wireframeLinewidth = D.wireframeLinewidth, S.linewidth = D.linewidth, z.isPointLight === !0 && S.isMeshDistanceMaterial === !0) {
      let W = e.properties.get(S);
      W.light = z;
    }
    return S;
  }
  function A(L, D, z, M, S) {
    if (L.visible === !1) return;
    if (L.layers.test(D.layers) && (L.isMesh || L.isLine || L.isPoints) && (L.castShadow || L.receiveShadow && S === 3) && (!L.frustumCulled || r.intersectsObject(L))) {
      L.modelViewMatrix.multiplyMatrices(z.matrixWorldInverse, L.matrixWorld);
      let W = t.update(L), V = L.material;
      if (Array.isArray(V)) {
        let k = W.groups;
        for (let J = 0, H = k.length; J < H; J++) {
          let Q = k[J], X = V[Q.materialIndex];
          if (X && X.visible) {
            let ie = y(L, X, M, S);
            L.onBeforeShadow(e, L, D, z, W, ie, Q), e.renderBufferDirect(z, null, W, ie, L, Q), L.onAfterShadow(e, L, D, z, W, ie, Q);
          }
        }
      } else if (V.visible) {
        let k = y(L, V, M, S);
        L.onBeforeShadow(e, L, D, z, W, k, null), e.renderBufferDirect(z, null, W, k, L, null), L.onAfterShadow(e, L, D, z, W, k, null);
      }
    }
    let w = L.children;
    for (let W = 0, V = w.length; W < V; W++) A(w[W], D, z, M, S);
  }
  function I(L) {
    L.target.removeEventListener("dispose", I);
    for (let D in c) {
      let z = c[D], M = L.target.uuid;
      M in z && (z[M].dispose(), delete z[M]);
    }
  }
}
var Zu = { 0: 1, 2: 6, 4: 7, 3: 5, 1: 0, 6: 2, 7: 4, 5: 3 };
function Ju(e, t) {
  function i() {
    let T = !1, ue = new st(), ae = null, _e = new st(0, 0, 0, 0);
    return { setMask: function(ee) {
      ae !== ee && !T && (e.colorMask(ee, ee, ee, ee), ae = ee);
    }, setLocked: function(ee) {
      T = ee;
    }, setClear: function(ee, K, ve, Ae, at) {
      at === !0 && (ee *= Ae, K *= Ae, ve *= Ae), ue.set(ee, K, ve, Ae), _e.equals(ue) === !1 && (e.clearColor(ee, K, ve, Ae), _e.copy(ue));
    }, reset: function() {
      T = !1, ae = null, _e.set(-1, 0, 0, 0);
    } };
  }
  function r() {
    let T = !1, ue = !1, ae = null, _e = null, ee = null;
    return { setReversed: function(K) {
      if (ue !== K) {
        let ve = t.get("EXT_clip_control");
        K ? ve.clipControlEXT(ve.LOWER_LEFT_EXT, ve.ZERO_TO_ONE_EXT) : ve.clipControlEXT(ve.LOWER_LEFT_EXT, ve.NEGATIVE_ONE_TO_ONE_EXT), ue = K;
        let Ae = ee;
        ee = null, this.setClear(Ae);
      }
    }, getReversed: function() {
      return ue;
    }, setTest: function(K) {
      K ? se(e.DEPTH_TEST) : Se(e.DEPTH_TEST);
    }, setMask: function(K) {
      ae !== K && !T && (e.depthMask(K), ae = K);
    }, setFunc: function(K) {
      if (ue && (K = Zu[K]), _e !== K) {
        switch (K) {
          case 0:
            e.depthFunc(e.NEVER);
            break;
          case 1:
            e.depthFunc(e.ALWAYS);
            break;
          case 2:
            e.depthFunc(e.LESS);
            break;
          case 3:
            e.depthFunc(e.LEQUAL);
            break;
          case 4:
            e.depthFunc(e.EQUAL);
            break;
          case 5:
            e.depthFunc(e.GEQUAL);
            break;
          case 6:
            e.depthFunc(e.GREATER);
            break;
          case 7:
            e.depthFunc(e.NOTEQUAL);
            break;
          default:
            e.depthFunc(e.LEQUAL);
        }
        _e = K;
      }
    }, setLocked: function(K) {
      T = K;
    }, setClear: function(K) {
      ee !== K && (ue && (K = 1 - K), e.clearDepth(K), ee = K);
    }, reset: function() {
      T = !1, ae = null, _e = null, ee = null, ue = !1;
    } };
  }
  function a() {
    let T = !1, ue = null, ae = null, _e = null, ee = null, K = null, ve = null, Ae = null, at = null;
    return { setTest: function(je) {
      T || (je ? se(e.STENCIL_TEST) : Se(e.STENCIL_TEST));
    }, setMask: function(je) {
      ue !== je && !T && (e.stencilMask(je), ue = je);
    }, setFunc: function(je, kt, Ht) {
      (ae !== je || _e !== kt || ee !== Ht) && (e.stencilFunc(je, kt, Ht), ae = je, _e = kt, ee = Ht);
    }, setOp: function(je, kt, Ht) {
      (K !== je || ve !== kt || Ae !== Ht) && (e.stencilOp(je, kt, Ht), K = je, ve = kt, Ae = Ht);
    }, setLocked: function(je) {
      T = je;
    }, setClear: function(je) {
      at !== je && (e.clearStencil(je), at = je);
    }, reset: function() {
      T = !1, ue = null, ae = null, _e = null, ee = null, K = null, ve = null, Ae = null, at = null;
    } };
  }
  let n = new i(), s = new r(), o = new a(), l = /* @__PURE__ */ new WeakMap(), c = /* @__PURE__ */ new WeakMap(), u = {}, h = {}, d = /* @__PURE__ */ new WeakMap(), m = [], x = null, _ = !1, f = null, p = null, R = null, y = null, A = null, I = null, L = null, D = new He(0, 0, 0), z = 0, M = !1, S = null, w = null, W = null, V = null, k = null, J = e.getParameter(e.MAX_COMBINED_TEXTURE_IMAGE_UNITS), H = !1, Q = 0, X = e.getParameter(e.VERSION);
  X.indexOf("WebGL") === -1 ? X.indexOf("OpenGL ES") !== -1 && (Q = parseFloat(/^OpenGL ES (\d)/.exec(X)[1]), H = Q >= 2) : (Q = parseFloat(/^WebGL (\d)/.exec(X)[1]), H = Q >= 1);
  let ie = null, pe = {}, Ue = e.getParameter(e.SCISSOR_BOX), Oe = e.getParameter(e.VIEWPORT), it = new st().fromArray(Ue), Xe = new st().fromArray(Oe);
  function j(T, ue, ae, _e) {
    let ee = new Uint8Array(4), K = e.createTexture();
    e.bindTexture(T, K), e.texParameteri(T, e.TEXTURE_MIN_FILTER, e.NEAREST), e.texParameteri(T, e.TEXTURE_MAG_FILTER, e.NEAREST);
    for (let ve = 0; ve < ae; ve++) T === e.TEXTURE_3D || T === e.TEXTURE_2D_ARRAY ? e.texImage3D(ue, 0, e.RGBA, 1, 1, _e, 0, e.RGBA, e.UNSIGNED_BYTE, ee) : e.texImage2D(ue + ve, 0, e.RGBA, 1, 1, 0, e.RGBA, e.UNSIGNED_BYTE, ee);
    return K;
  }
  let ne = {};
  ne[e.TEXTURE_2D] = j(e.TEXTURE_2D, e.TEXTURE_2D, 1), ne[e.TEXTURE_CUBE_MAP] = j(e.TEXTURE_CUBE_MAP, e.TEXTURE_CUBE_MAP_POSITIVE_X, 6), ne[e.TEXTURE_2D_ARRAY] = j(e.TEXTURE_2D_ARRAY, e.TEXTURE_2D_ARRAY, 1, 1), ne[e.TEXTURE_3D] = j(e.TEXTURE_3D, e.TEXTURE_3D, 1, 1), n.setClear(0, 0, 0, 1), s.setClear(1), o.setClear(0), se(e.DEPTH_TEST), s.setFunc(3), Me(!1), Qe(1), se(e.CULL_FACE), ze(0);
  function se(T) {
    u[T] !== !0 && (e.enable(T), u[T] = !0);
  }
  function Se(T) {
    u[T] !== !1 && (e.disable(T), u[T] = !1);
  }
  function Le(T, ue) {
    return h[T] === ue ? !1 : (e.bindFramebuffer(T, ue), h[T] = ue, T === e.DRAW_FRAMEBUFFER && (h[e.FRAMEBUFFER] = ue), T === e.FRAMEBUFFER && (h[e.DRAW_FRAMEBUFFER] = ue), !0);
  }
  function ge(T, ue) {
    let ae = m, _e = !1;
    if (T) {
      ae = d.get(ue), ae === void 0 && (ae = [], d.set(ue, ae));
      let ee = T.textures;
      if (ae.length !== ee.length || ae[0] !== e.COLOR_ATTACHMENT0) {
        for (let K = 0, ve = ee.length; K < ve; K++) ae[K] = e.COLOR_ATTACHMENT0 + K;
        ae.length = ee.length, _e = !0;
      }
    } else ae[0] !== e.BACK && (ae[0] = e.BACK, _e = !0);
    _e && e.drawBuffers(ae);
  }
  function qe(T) {
    return x === T ? !1 : (e.useProgram(T), x = T, !0);
  }
  let b = { 100: e.FUNC_ADD, 101: e.FUNC_SUBTRACT, 102: e.FUNC_REVERSE_SUBTRACT };
  b[103] = e.MIN, b[104] = e.MAX;
  let Ve = { 200: e.ZERO, 201: e.ONE, 202: e.SRC_COLOR, 204: e.SRC_ALPHA, 210: e.SRC_ALPHA_SATURATE, 208: e.DST_COLOR, 206: e.DST_ALPHA, 203: e.ONE_MINUS_SRC_COLOR, 205: e.ONE_MINUS_SRC_ALPHA, 209: e.ONE_MINUS_DST_COLOR, 207: e.ONE_MINUS_DST_ALPHA, 211: e.CONSTANT_COLOR, 212: e.ONE_MINUS_CONSTANT_COLOR, 213: e.CONSTANT_ALPHA, 214: e.ONE_MINUS_CONSTANT_ALPHA };
  function ze(T, ue, ae, _e, ee, K, ve, Ae, at, je) {
    if (T === 0) {
      _ === !0 && (Se(e.BLEND), _ = !1);
      return;
    }
    if (_ === !1 && (se(e.BLEND), _ = !0), T !== 5) {
      if (T !== f || je !== M) {
        if ((p !== 100 || A !== 100) && (e.blendEquation(e.FUNC_ADD), p = 100, A = 100), je) switch (T) {
          case 1:
            e.blendFuncSeparate(e.ONE, e.ONE_MINUS_SRC_ALPHA, e.ONE, e.ONE_MINUS_SRC_ALPHA);
            break;
          case 2:
            e.blendFunc(e.ONE, e.ONE);
            break;
          case 3:
            e.blendFuncSeparate(e.ZERO, e.ONE_MINUS_SRC_COLOR, e.ZERO, e.ONE);
            break;
          case 4:
            e.blendFuncSeparate(e.DST_COLOR, e.ONE_MINUS_SRC_ALPHA, e.ZERO, e.ONE);
            break;
          default:
            console.error("THREE.WebGLState: Invalid blending: ", T);
            break;
        }
        else switch (T) {
          case 1:
            e.blendFuncSeparate(e.SRC_ALPHA, e.ONE_MINUS_SRC_ALPHA, e.ONE, e.ONE_MINUS_SRC_ALPHA);
            break;
          case 2:
            e.blendFuncSeparate(e.SRC_ALPHA, e.ONE, e.ONE, e.ONE);
            break;
          case 3:
            console.error("THREE.WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");
            break;
          case 4:
            console.error("THREE.WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");
            break;
          default:
            console.error("THREE.WebGLState: Invalid blending: ", T);
            break;
        }
        R = null, y = null, I = null, L = null, D.set(0, 0, 0), z = 0, f = T, M = je;
      }
      return;
    }
    ee || (ee = ue), K || (K = ae), ve || (ve = _e), (ue !== p || ee !== A) && (e.blendEquationSeparate(b[ue], b[ee]), p = ue, A = ee), (ae !== R || _e !== y || K !== I || ve !== L) && (e.blendFuncSeparate(Ve[ae], Ve[_e], Ve[K], Ve[ve]), R = ae, y = _e, I = K, L = ve), (Ae.equals(D) === !1 || at !== z) && (e.blendColor(Ae.r, Ae.g, Ae.b, at), D.copy(Ae), z = at), f = T, M = !1;
  }
  function Ye(T, ue) {
    T.side === 2 ? Se(e.CULL_FACE) : se(e.CULL_FACE);
    let ae = T.side === 1;
    ue && (ae = !ae), Me(ae), T.blending === 1 && T.transparent === !1 ? ze(0) : ze(T.blending, T.blendEquation, T.blendSrc, T.blendDst, T.blendEquationAlpha, T.blendSrcAlpha, T.blendDstAlpha, T.blendColor, T.blendAlpha, T.premultipliedAlpha), s.setFunc(T.depthFunc), s.setTest(T.depthTest), s.setMask(T.depthWrite), n.setMask(T.colorWrite);
    let _e = T.stencilWrite;
    o.setTest(_e), _e && (o.setMask(T.stencilWriteMask), o.setFunc(T.stencilFunc, T.stencilRef, T.stencilFuncMask), o.setOp(T.stencilFail, T.stencilZFail, T.stencilZPass)), we(T.polygonOffset, T.polygonOffsetFactor, T.polygonOffsetUnits), T.alphaToCoverage === !0 ? se(e.SAMPLE_ALPHA_TO_COVERAGE) : Se(e.SAMPLE_ALPHA_TO_COVERAGE);
  }
  function Me(T) {
    S !== T && (T ? e.frontFace(e.CW) : e.frontFace(e.CCW), S = T);
  }
  function Qe(T) {
    T === 0 ? Se(e.CULL_FACE) : (se(e.CULL_FACE), T !== w && (T === 1 ? e.cullFace(e.BACK) : T === 2 ? e.cullFace(e.FRONT) : e.cullFace(e.FRONT_AND_BACK))), w = T;
  }
  function Te(T) {
    T !== W && (H && e.lineWidth(T), W = T);
  }
  function we(T, ue, ae) {
    T ? (se(e.POLYGON_OFFSET_FILL), (V !== ue || k !== ae) && (e.polygonOffset(ue, ae), V = ue, k = ae)) : Se(e.POLYGON_OFFSET_FILL);
  }
  function pt(T) {
    T ? se(e.SCISSOR_TEST) : Se(e.SCISSOR_TEST);
  }
  function ct(T) {
    T === void 0 && (T = e.TEXTURE0 + J - 1), ie !== T && (e.activeTexture(T), ie = T);
  }
  function rt(T, ue, ae) {
    ae === void 0 && (ae = ie === null ? e.TEXTURE0 + J - 1 : ie);
    let _e = pe[ae];
    _e === void 0 && (_e = { type: void 0, texture: void 0 }, pe[ae] = _e), (_e.type !== T || _e.texture !== ue) && (ie !== ae && (e.activeTexture(ae), ie = ae), e.bindTexture(T, ue || ne[T]), _e.type = T, _e.texture = ue);
  }
  function E() {
    let T = pe[ie];
    T !== void 0 && T.type !== void 0 && (e.bindTexture(T.type, null), T.type = void 0, T.texture = void 0);
  }
  function g() {
    try {
      e.compressedTexImage2D(...arguments);
    } catch (T) {
      console.error("THREE.WebGLState:", T);
    }
  }
  function U() {
    try {
      e.compressedTexImage3D(...arguments);
    } catch (T) {
      console.error("THREE.WebGLState:", T);
    }
  }
  function q() {
    try {
      e.texSubImage2D(...arguments);
    } catch (T) {
      console.error("THREE.WebGLState:", T);
    }
  }
  function Z() {
    try {
      e.texSubImage3D(...arguments);
    } catch (T) {
      console.error("THREE.WebGLState:", T);
    }
  }
  function G() {
    try {
      e.compressedTexSubImage2D(...arguments);
    } catch (T) {
      console.error("THREE.WebGLState:", T);
    }
  }
  function fe() {
    try {
      e.compressedTexSubImage3D(...arguments);
    } catch (T) {
      console.error("THREE.WebGLState:", T);
    }
  }
  function re() {
    try {
      e.texStorage2D(...arguments);
    } catch (T) {
      console.error("THREE.WebGLState:", T);
    }
  }
  function xe() {
    try {
      e.texStorage3D(...arguments);
    } catch (T) {
      console.error("THREE.WebGLState:", T);
    }
  }
  function Ee() {
    try {
      e.texImage2D(...arguments);
    } catch (T) {
      console.error("THREE.WebGLState:", T);
    }
  }
  function te() {
    try {
      e.texImage3D(...arguments);
    } catch (T) {
      console.error("THREE.WebGLState:", T);
    }
  }
  function le(T) {
    it.equals(T) === !1 && (e.scissor(T.x, T.y, T.z, T.w), it.copy(T));
  }
  function Re(T) {
    Xe.equals(T) === !1 && (e.viewport(T.x, T.y, T.z, T.w), Xe.copy(T));
  }
  function be(T, ue) {
    let ae = c.get(ue);
    ae === void 0 && (ae = /* @__PURE__ */ new WeakMap(), c.set(ue, ae));
    let _e = ae.get(T);
    _e === void 0 && (_e = e.getUniformBlockIndex(ue, T.name), ae.set(T, _e));
  }
  function ce(T, ue) {
    let ae = c.get(ue).get(T);
    l.get(ue) !== ae && (e.uniformBlockBinding(ue, ae, T.__bindingPointIndex), l.set(ue, ae));
  }
  function Fe() {
    e.disable(e.BLEND), e.disable(e.CULL_FACE), e.disable(e.DEPTH_TEST), e.disable(e.POLYGON_OFFSET_FILL), e.disable(e.SCISSOR_TEST), e.disable(e.STENCIL_TEST), e.disable(e.SAMPLE_ALPHA_TO_COVERAGE), e.blendEquation(e.FUNC_ADD), e.blendFunc(e.ONE, e.ZERO), e.blendFuncSeparate(e.ONE, e.ZERO, e.ONE, e.ZERO), e.blendColor(0, 0, 0, 0), e.colorMask(!0, !0, !0, !0), e.clearColor(0, 0, 0, 0), e.depthMask(!0), e.depthFunc(e.LESS), s.setReversed(!1), e.clearDepth(1), e.stencilMask(4294967295), e.stencilFunc(e.ALWAYS, 0, 4294967295), e.stencilOp(e.KEEP, e.KEEP, e.KEEP), e.clearStencil(0), e.cullFace(e.BACK), e.frontFace(e.CCW), e.polygonOffset(0, 0), e.activeTexture(e.TEXTURE0), e.bindFramebuffer(e.FRAMEBUFFER, null), e.bindFramebuffer(e.DRAW_FRAMEBUFFER, null), e.bindFramebuffer(e.READ_FRAMEBUFFER, null), e.useProgram(null), e.lineWidth(1), e.scissor(0, 0, e.canvas.width, e.canvas.height), e.viewport(0, 0, e.canvas.width, e.canvas.height), u = {}, ie = null, pe = {}, h = {}, d = /* @__PURE__ */ new WeakMap(), m = [], x = null, _ = !1, f = null, p = null, R = null, y = null, A = null, I = null, L = null, D = new He(0, 0, 0), z = 0, M = !1, S = null, w = null, W = null, V = null, k = null, it.set(0, 0, e.canvas.width, e.canvas.height), Xe.set(0, 0, e.canvas.width, e.canvas.height), n.reset(), s.reset(), o.reset();
  }
  return { buffers: { color: n, depth: s, stencil: o }, enable: se, disable: Se, bindFramebuffer: Le, drawBuffers: ge, useProgram: qe, setBlending: ze, setMaterial: Ye, setFlipSided: Me, setCullFace: Qe, setLineWidth: Te, setPolygonOffset: we, setScissorTest: pt, activeTexture: ct, bindTexture: rt, unbindTexture: E, compressedTexImage2D: g, compressedTexImage3D: U, texImage2D: Ee, texImage3D: te, updateUBOMapping: be, uniformBlockBinding: ce, texStorage2D: re, texStorage3D: xe, texSubImage2D: q, texSubImage3D: Z, compressedTexSubImage2D: G, compressedTexSubImage3D: fe, scissor: le, viewport: Re, reset: Fe };
}
function $u(e, t, i, r, a, n, s) {
  let o = t.has("WEBGL_multisampled_render_to_texture") ? t.get("WEBGL_multisampled_render_to_texture") : null, l = typeof navigator > "u" ? !1 : /OculusBrowser/g.test(navigator.userAgent), c = new ke(), u = /* @__PURE__ */ new WeakMap(), h, d = /* @__PURE__ */ new WeakMap(), m = !1;
  try {
    m = typeof OffscreenCanvas < "u" && new OffscreenCanvas(1, 1).getContext("2d") !== null;
  } catch {
  }
  function x(E, g) {
    return m ? new OffscreenCanvas(E, g) : Qr("canvas");
  }
  function _(E, g, U) {
    let q = 1, Z = rt(E);
    if ((Z.width > U || Z.height > U) && (q = U / Math.max(Z.width, Z.height)), q < 1) if (typeof HTMLImageElement < "u" && E instanceof HTMLImageElement || typeof HTMLCanvasElement < "u" && E instanceof HTMLCanvasElement || typeof ImageBitmap < "u" && E instanceof ImageBitmap || typeof VideoFrame < "u" && E instanceof VideoFrame) {
      let G = Math.floor(q * Z.width), fe = Math.floor(q * Z.height);
      h === void 0 && (h = x(G, fe));
      let re = g ? x(G, fe) : h;
      return re.width = G, re.height = fe, re.getContext("2d").drawImage(E, 0, 0, G, fe), console.warn("THREE.WebGLRenderer: Texture has been resized from (" + Z.width + "x" + Z.height + ") to (" + G + "x" + fe + ")."), re;
    } else return "data" in E && console.warn("THREE.WebGLRenderer: Image in DataTexture is too big (" + Z.width + "x" + Z.height + ")."), E;
    return E;
  }
  function f(E) {
    return E.generateMipmaps;
  }
  function p(E) {
    e.generateMipmap(E);
  }
  function R(E) {
    return E.isWebGLCubeRenderTarget ? e.TEXTURE_CUBE_MAP : E.isWebGL3DRenderTarget ? e.TEXTURE_3D : E.isWebGLArrayRenderTarget || E.isCompressedArrayTexture ? e.TEXTURE_2D_ARRAY : e.TEXTURE_2D;
  }
  function y(E, g, U, q, Z = !1) {
    if (E !== null) {
      if (e[E] !== void 0) return e[E];
      console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '" + E + "'");
    }
    let G = g;
    if (g === e.RED && (U === e.FLOAT && (G = e.R32F), U === e.HALF_FLOAT && (G = e.R16F), U === e.UNSIGNED_BYTE && (G = e.R8)), g === e.RED_INTEGER && (U === e.UNSIGNED_BYTE && (G = e.R8UI), U === e.UNSIGNED_SHORT && (G = e.R16UI), U === e.UNSIGNED_INT && (G = e.R32UI), U === e.BYTE && (G = e.R8I), U === e.SHORT && (G = e.R16I), U === e.INT && (G = e.R32I)), g === e.RG && (U === e.FLOAT && (G = e.RG32F), U === e.HALF_FLOAT && (G = e.RG16F), U === e.UNSIGNED_BYTE && (G = e.RG8)), g === e.RG_INTEGER && (U === e.UNSIGNED_BYTE && (G = e.RG8UI), U === e.UNSIGNED_SHORT && (G = e.RG16UI), U === e.UNSIGNED_INT && (G = e.RG32UI), U === e.BYTE && (G = e.RG8I), U === e.SHORT && (G = e.RG16I), U === e.INT && (G = e.RG32I)), g === e.RGB_INTEGER && (U === e.UNSIGNED_BYTE && (G = e.RGB8UI), U === e.UNSIGNED_SHORT && (G = e.RGB16UI), U === e.UNSIGNED_INT && (G = e.RGB32UI), U === e.BYTE && (G = e.RGB8I), U === e.SHORT && (G = e.RGB16I), U === e.INT && (G = e.RGB32I)), g === e.RGBA_INTEGER && (U === e.UNSIGNED_BYTE && (G = e.RGBA8UI), U === e.UNSIGNED_SHORT && (G = e.RGBA16UI), U === e.UNSIGNED_INT && (G = e.RGBA32UI), U === e.BYTE && (G = e.RGBA8I), U === e.SHORT && (G = e.RGBA16I), U === e.INT && (G = e.RGBA32I)), g === e.RGB && (U === e.UNSIGNED_INT_5_9_9_9_REV && (G = e.RGB9_E5), U === e.UNSIGNED_INT_10F_11F_11F_REV && (G = e.R11F_G11F_B10F)), g === e.RGBA) {
      let fe = Z ? Jr : We.getTransfer(q);
      U === e.FLOAT && (G = e.RGBA32F), U === e.HALF_FLOAT && (G = e.RGBA16F), U === e.UNSIGNED_BYTE && (G = fe === "srgb" ? e.SRGB8_ALPHA8 : e.RGBA8), U === e.UNSIGNED_SHORT_4_4_4_4 && (G = e.RGBA4), U === e.UNSIGNED_SHORT_5_5_5_1 && (G = e.RGB5_A1);
    }
    return (G === e.R16F || G === e.R32F || G === e.RG16F || G === e.RG32F || G === e.RGBA16F || G === e.RGBA32F) && t.get("EXT_color_buffer_float"), G;
  }
  function A(E, g) {
    let U;
    return E ? g === null || g === 1014 || g === 1020 ? U = e.DEPTH24_STENCIL8 : g === 1015 ? U = e.DEPTH32F_STENCIL8 : g === 1012 && (U = e.DEPTH24_STENCIL8, console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")) : g === null || g === 1014 || g === 1020 ? U = e.DEPTH_COMPONENT24 : g === 1015 ? U = e.DEPTH_COMPONENT32F : g === 1012 && (U = e.DEPTH_COMPONENT16), U;
  }
  function I(E, g) {
    return f(E) === !0 || E.isFramebufferTexture && E.minFilter !== 1003 && E.minFilter !== 1006 ? Math.log2(Math.max(g.width, g.height)) + 1 : E.mipmaps !== void 0 && E.mipmaps.length > 0 ? E.mipmaps.length : E.isCompressedTexture && Array.isArray(E.image) ? g.mipmaps.length : 1;
  }
  function L(E) {
    let g = E.target;
    g.removeEventListener("dispose", L), z(g), g.isVideoTexture && u.delete(g);
  }
  function D(E) {
    let g = E.target;
    g.removeEventListener("dispose", D), S(g);
  }
  function z(E) {
    let g = r.get(E);
    if (g.__webglInit === void 0) return;
    let U = E.source, q = d.get(U);
    if (q) {
      let Z = q[g.__cacheKey];
      Z.usedTimes--, Z.usedTimes === 0 && M(E), Object.keys(q).length === 0 && d.delete(U);
    }
    r.remove(E);
  }
  function M(E) {
    let g = r.get(E);
    e.deleteTexture(g.__webglTexture);
    let U = E.source, q = d.get(U);
    delete q[g.__cacheKey], s.memory.textures--;
  }
  function S(E) {
    let g = r.get(E);
    if (E.depthTexture && (E.depthTexture.dispose(), r.remove(E.depthTexture)), E.isWebGLCubeRenderTarget) for (let q = 0; q < 6; q++) {
      if (Array.isArray(g.__webglFramebuffer[q])) for (let Z = 0; Z < g.__webglFramebuffer[q].length; Z++) e.deleteFramebuffer(g.__webglFramebuffer[q][Z]);
      else e.deleteFramebuffer(g.__webglFramebuffer[q]);
      g.__webglDepthbuffer && e.deleteRenderbuffer(g.__webglDepthbuffer[q]);
    }
    else {
      if (Array.isArray(g.__webglFramebuffer)) for (let q = 0; q < g.__webglFramebuffer.length; q++) e.deleteFramebuffer(g.__webglFramebuffer[q]);
      else e.deleteFramebuffer(g.__webglFramebuffer);
      if (g.__webglDepthbuffer && e.deleteRenderbuffer(g.__webglDepthbuffer), g.__webglMultisampledFramebuffer && e.deleteFramebuffer(g.__webglMultisampledFramebuffer), g.__webglColorRenderbuffer) for (let q = 0; q < g.__webglColorRenderbuffer.length; q++) g.__webglColorRenderbuffer[q] && e.deleteRenderbuffer(g.__webglColorRenderbuffer[q]);
      g.__webglDepthRenderbuffer && e.deleteRenderbuffer(g.__webglDepthRenderbuffer);
    }
    let U = E.textures;
    for (let q = 0, Z = U.length; q < Z; q++) {
      let G = r.get(U[q]);
      G.__webglTexture && (e.deleteTexture(G.__webglTexture), s.memory.textures--), r.remove(U[q]);
    }
    r.remove(E);
  }
  let w = 0;
  function W() {
    w = 0;
  }
  function V() {
    let E = w;
    return E >= a.maxTextures && console.warn("THREE.WebGLTextures: Trying to use " + E + " texture units while this GPU supports only " + a.maxTextures), w += 1, E;
  }
  function k(E) {
    let g = [];
    return g.push(E.wrapS), g.push(E.wrapT), g.push(E.wrapR || 0), g.push(E.magFilter), g.push(E.minFilter), g.push(E.anisotropy), g.push(E.internalFormat), g.push(E.format), g.push(E.type), g.push(E.generateMipmaps), g.push(E.premultiplyAlpha), g.push(E.flipY), g.push(E.unpackAlignment), g.push(E.colorSpace), g.join();
  }
  function J(E, g) {
    let U = r.get(E);
    if (E.isVideoTexture && pt(E), E.isRenderTargetTexture === !1 && E.isExternalTexture !== !0 && E.version > 0 && U.__version !== E.version) {
      let q = E.image;
      if (q === null) console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");
      else if (q.complete === !1) console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");
      else {
        ne(U, E, g);
        return;
      }
    } else E.isExternalTexture && (U.__webglTexture = E.sourceTexture ? E.sourceTexture : null);
    i.bindTexture(e.TEXTURE_2D, U.__webglTexture, e.TEXTURE0 + g);
  }
  function H(E, g) {
    let U = r.get(E);
    if (E.isRenderTargetTexture === !1 && E.version > 0 && U.__version !== E.version) {
      ne(U, E, g);
      return;
    }
    i.bindTexture(e.TEXTURE_2D_ARRAY, U.__webglTexture, e.TEXTURE0 + g);
  }
  function Q(E, g) {
    let U = r.get(E);
    if (E.isRenderTargetTexture === !1 && E.version > 0 && U.__version !== E.version) {
      ne(U, E, g);
      return;
    }
    i.bindTexture(e.TEXTURE_3D, U.__webglTexture, e.TEXTURE0 + g);
  }
  function X(E, g) {
    let U = r.get(E);
    if (E.version > 0 && U.__version !== E.version) {
      se(U, E, g);
      return;
    }
    i.bindTexture(e.TEXTURE_CUBE_MAP, U.__webglTexture, e.TEXTURE0 + g);
  }
  let ie = { [hr]: e.REPEAT, [yi]: e.CLAMP_TO_EDGE, [Va]: e.MIRRORED_REPEAT }, pe = { [Tt]: e.NEAREST, [vo]: e.NEAREST_MIPMAP_NEAREST, [xo]: e.NEAREST_MIPMAP_LINEAR, [Mi]: e.LINEAR, [yo]: e.LINEAR_MIPMAP_NEAREST, [en]: e.LINEAR_MIPMAP_LINEAR }, Ue = { 512: e.NEVER, 519: e.ALWAYS, 513: e.LESS, 515: e.LEQUAL, 514: e.EQUAL, 518: e.GEQUAL, 516: e.GREATER, 517: e.NOTEQUAL };
  function Oe(E, g) {
    if (g.type === 1015 && t.has("OES_texture_float_linear") === !1 && (g.magFilter === 1006 || g.magFilter === 1007 || g.magFilter === 1005 || g.magFilter === 1008 || g.minFilter === 1006 || g.minFilter === 1007 || g.minFilter === 1005 || g.minFilter === 1008) && console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."), e.texParameteri(E, e.TEXTURE_WRAP_S, ie[g.wrapS]), e.texParameteri(E, e.TEXTURE_WRAP_T, ie[g.wrapT]), (E === e.TEXTURE_3D || E === e.TEXTURE_2D_ARRAY) && e.texParameteri(E, e.TEXTURE_WRAP_R, ie[g.wrapR]), e.texParameteri(E, e.TEXTURE_MAG_FILTER, pe[g.magFilter]), e.texParameteri(E, e.TEXTURE_MIN_FILTER, pe[g.minFilter]), g.compareFunction && (e.texParameteri(E, e.TEXTURE_COMPARE_MODE, e.COMPARE_REF_TO_TEXTURE), e.texParameteri(E, e.TEXTURE_COMPARE_FUNC, Ue[g.compareFunction])), t.has("EXT_texture_filter_anisotropic") === !0) {
      if (g.magFilter === 1003 || g.minFilter !== 1005 && g.minFilter !== 1008 || g.type === 1015 && t.has("OES_texture_float_linear") === !1) return;
      if (g.anisotropy > 1 || r.get(g).__currentAnisotropy) {
        let U = t.get("EXT_texture_filter_anisotropic");
        e.texParameterf(E, U.TEXTURE_MAX_ANISOTROPY_EXT, Math.min(g.anisotropy, a.getMaxAnisotropy())), r.get(g).__currentAnisotropy = g.anisotropy;
      }
    }
  }
  function it(E, g) {
    let U = !1;
    E.__webglInit === void 0 && (E.__webglInit = !0, g.addEventListener("dispose", L));
    let q = g.source, Z = d.get(q);
    Z === void 0 && (Z = {}, d.set(q, Z));
    let G = k(g);
    if (G !== E.__cacheKey) {
      Z[G] === void 0 && (Z[G] = { texture: e.createTexture(), usedTimes: 0 }, s.memory.textures++, U = !0), Z[G].usedTimes++;
      let fe = Z[E.__cacheKey];
      fe !== void 0 && (Z[E.__cacheKey].usedTimes--, fe.usedTimes === 0 && M(g)), E.__cacheKey = G, E.__webglTexture = Z[G].texture;
    }
    return U;
  }
  function Xe(E, g, U) {
    return Math.floor(Math.floor(E / U) / g);
  }
  function j(E, g, U, q) {
    let Z = E.updateRanges;
    if (Z.length === 0) i.texSubImage2D(e.TEXTURE_2D, 0, 0, 0, g.width, g.height, U, q, g.data);
    else {
      Z.sort((Ee, te) => Ee.start - te.start);
      let G = 0;
      for (let Ee = 1; Ee < Z.length; Ee++) {
        let te = Z[G], le = Z[Ee], Re = te.start + te.count, be = Xe(le.start, g.width, 4), ce = Xe(te.start, g.width, 4);
        le.start <= Re + 1 && be === ce && Xe(le.start + le.count - 1, g.width, 4) === be ? te.count = Math.max(te.count, le.start + le.count - te.start) : (++G, Z[G] = le);
      }
      Z.length = G + 1;
      let fe = e.getParameter(e.UNPACK_ROW_LENGTH), re = e.getParameter(e.UNPACK_SKIP_PIXELS), xe = e.getParameter(e.UNPACK_SKIP_ROWS);
      e.pixelStorei(e.UNPACK_ROW_LENGTH, g.width);
      for (let Ee = 0, te = Z.length; Ee < te; Ee++) {
        let le = Z[Ee], Re = Math.floor(le.start / 4), be = Math.ceil(le.count / 4), ce = Re % g.width, Fe = Math.floor(Re / g.width), T = be;
        e.pixelStorei(e.UNPACK_SKIP_PIXELS, ce), e.pixelStorei(e.UNPACK_SKIP_ROWS, Fe), i.texSubImage2D(e.TEXTURE_2D, 0, ce, Fe, T, 1, U, q, g.data);
      }
      E.clearUpdateRanges(), e.pixelStorei(e.UNPACK_ROW_LENGTH, fe), e.pixelStorei(e.UNPACK_SKIP_PIXELS, re), e.pixelStorei(e.UNPACK_SKIP_ROWS, xe);
    }
  }
  function ne(E, g, U) {
    let q = e.TEXTURE_2D;
    (g.isDataArrayTexture || g.isCompressedArrayTexture) && (q = e.TEXTURE_2D_ARRAY), g.isData3DTexture && (q = e.TEXTURE_3D);
    let Z = it(E, g), G = g.source;
    i.bindTexture(q, E.__webglTexture, e.TEXTURE0 + U);
    let fe = r.get(G);
    if (G.version !== fe.__version || Z === !0) {
      i.activeTexture(e.TEXTURE0 + U);
      let re = We.getPrimaries(We.workingColorSpace), xe = g.colorSpace === "" ? null : We.getPrimaries(g.colorSpace), Ee = g.colorSpace === "" || re === xe ? e.NONE : e.BROWSER_DEFAULT_WEBGL;
      e.pixelStorei(e.UNPACK_FLIP_Y_WEBGL, g.flipY), e.pixelStorei(e.UNPACK_PREMULTIPLY_ALPHA_WEBGL, g.premultiplyAlpha), e.pixelStorei(e.UNPACK_ALIGNMENT, g.unpackAlignment), e.pixelStorei(e.UNPACK_COLORSPACE_CONVERSION_WEBGL, Ee);
      let te = _(g.image, !1, a.maxTextureSize);
      te = ct(g, te);
      let le = n.convert(g.format, g.colorSpace), Re = n.convert(g.type), be = y(g.internalFormat, le, Re, g.colorSpace, g.isVideoTexture);
      Oe(q, g);
      let ce, Fe = g.mipmaps, T = g.isVideoTexture !== !0, ue = fe.__version === void 0 || Z === !0, ae = G.dataReady, _e = I(g, te);
      if (g.isDepthTexture) be = A(g.format === Ss, g.type), ue && (T ? i.texStorage2D(e.TEXTURE_2D, 1, be, te.width, te.height) : i.texImage2D(e.TEXTURE_2D, 0, be, te.width, te.height, 0, le, Re, null));
      else if (g.isDataTexture) if (Fe.length > 0) {
        T && ue && i.texStorage2D(e.TEXTURE_2D, _e, be, Fe[0].width, Fe[0].height);
        for (let ee = 0, K = Fe.length; ee < K; ee++) ce = Fe[ee], T ? ae && i.texSubImage2D(e.TEXTURE_2D, ee, 0, 0, ce.width, ce.height, le, Re, ce.data) : i.texImage2D(e.TEXTURE_2D, ee, be, ce.width, ce.height, 0, le, Re, ce.data);
        g.generateMipmaps = !1;
      } else T ? (ue && i.texStorage2D(e.TEXTURE_2D, _e, be, te.width, te.height), ae && j(g, te, le, Re)) : i.texImage2D(e.TEXTURE_2D, 0, be, te.width, te.height, 0, le, Re, te.data);
      else if (g.isCompressedTexture) if (g.isCompressedArrayTexture) {
        T && ue && i.texStorage3D(e.TEXTURE_2D_ARRAY, _e, be, Fe[0].width, Fe[0].height, te.depth);
        for (let ee = 0, K = Fe.length; ee < K; ee++) if (ce = Fe[ee], g.format !== 1023) if (le !== null) if (T) {
          if (ae) if (g.layerUpdates.size > 0) {
            let ve = On(ce.width, ce.height, g.format, g.type);
            for (let Ae of g.layerUpdates) {
              let at = ce.data.subarray(Ae * ve / ce.data.BYTES_PER_ELEMENT, (Ae + 1) * ve / ce.data.BYTES_PER_ELEMENT);
              i.compressedTexSubImage3D(e.TEXTURE_2D_ARRAY, ee, 0, 0, Ae, ce.width, ce.height, 1, le, at);
            }
            g.clearLayerUpdates();
          } else i.compressedTexSubImage3D(e.TEXTURE_2D_ARRAY, ee, 0, 0, 0, ce.width, ce.height, te.depth, le, ce.data);
        } else i.compressedTexImage3D(e.TEXTURE_2D_ARRAY, ee, be, ce.width, ce.height, te.depth, 0, ce.data, 0, 0);
        else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");
        else T ? ae && i.texSubImage3D(e.TEXTURE_2D_ARRAY, ee, 0, 0, 0, ce.width, ce.height, te.depth, le, Re, ce.data) : i.texImage3D(e.TEXTURE_2D_ARRAY, ee, be, ce.width, ce.height, te.depth, 0, le, Re, ce.data);
      } else {
        T && ue && i.texStorage2D(e.TEXTURE_2D, _e, be, Fe[0].width, Fe[0].height);
        for (let ee = 0, K = Fe.length; ee < K; ee++) ce = Fe[ee], g.format === 1023 ? T ? ae && i.texSubImage2D(e.TEXTURE_2D, ee, 0, 0, ce.width, ce.height, le, Re, ce.data) : i.texImage2D(e.TEXTURE_2D, ee, be, ce.width, ce.height, 0, le, Re, ce.data) : le === null ? console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()") : T ? ae && i.compressedTexSubImage2D(e.TEXTURE_2D, ee, 0, 0, ce.width, ce.height, le, ce.data) : i.compressedTexImage2D(e.TEXTURE_2D, ee, be, ce.width, ce.height, 0, ce.data);
      }
      else if (g.isDataArrayTexture) if (T) {
        if (ue && i.texStorage3D(e.TEXTURE_2D_ARRAY, _e, be, te.width, te.height, te.depth), ae) if (g.layerUpdates.size > 0) {
          let ee = On(te.width, te.height, g.format, g.type);
          for (let K of g.layerUpdates) {
            let ve = te.data.subarray(K * ee / te.data.BYTES_PER_ELEMENT, (K + 1) * ee / te.data.BYTES_PER_ELEMENT);
            i.texSubImage3D(e.TEXTURE_2D_ARRAY, 0, 0, 0, K, te.width, te.height, 1, le, Re, ve);
          }
          g.clearLayerUpdates();
        } else i.texSubImage3D(e.TEXTURE_2D_ARRAY, 0, 0, 0, 0, te.width, te.height, te.depth, le, Re, te.data);
      } else i.texImage3D(e.TEXTURE_2D_ARRAY, 0, be, te.width, te.height, te.depth, 0, le, Re, te.data);
      else if (g.isData3DTexture) T ? (ue && i.texStorage3D(e.TEXTURE_3D, _e, be, te.width, te.height, te.depth), ae && i.texSubImage3D(e.TEXTURE_3D, 0, 0, 0, 0, te.width, te.height, te.depth, le, Re, te.data)) : i.texImage3D(e.TEXTURE_3D, 0, be, te.width, te.height, te.depth, 0, le, Re, te.data);
      else if (g.isFramebufferTexture) {
        if (ue) if (T) i.texStorage2D(e.TEXTURE_2D, _e, be, te.width, te.height);
        else {
          let ee = te.width, K = te.height;
          for (let ve = 0; ve < _e; ve++) i.texImage2D(e.TEXTURE_2D, ve, be, ee, K, 0, le, Re, null), ee >>= 1, K >>= 1;
        }
      } else if (Fe.length > 0) {
        if (T && ue) {
          let ee = rt(Fe[0]);
          i.texStorage2D(e.TEXTURE_2D, _e, be, ee.width, ee.height);
        }
        for (let ee = 0, K = Fe.length; ee < K; ee++) ce = Fe[ee], T ? ae && i.texSubImage2D(e.TEXTURE_2D, ee, 0, 0, le, Re, ce) : i.texImage2D(e.TEXTURE_2D, ee, be, le, Re, ce);
        g.generateMipmaps = !1;
      } else if (T) {
        if (ue) {
          let ee = rt(te);
          i.texStorage2D(e.TEXTURE_2D, _e, be, ee.width, ee.height);
        }
        ae && i.texSubImage2D(e.TEXTURE_2D, 0, 0, 0, le, Re, te);
      } else i.texImage2D(e.TEXTURE_2D, 0, be, le, Re, te);
      f(g) && p(q), fe.__version = G.version, g.onUpdate && g.onUpdate(g);
    }
    E.__version = g.version;
  }
  function se(E, g, U) {
    if (g.image.length !== 6) return;
    let q = it(E, g), Z = g.source;
    i.bindTexture(e.TEXTURE_CUBE_MAP, E.__webglTexture, e.TEXTURE0 + U);
    let G = r.get(Z);
    if (Z.version !== G.__version || q === !0) {
      i.activeTexture(e.TEXTURE0 + U);
      let fe = We.getPrimaries(We.workingColorSpace), re = g.colorSpace === "" ? null : We.getPrimaries(g.colorSpace), xe = g.colorSpace === "" || fe === re ? e.NONE : e.BROWSER_DEFAULT_WEBGL;
      e.pixelStorei(e.UNPACK_FLIP_Y_WEBGL, g.flipY), e.pixelStorei(e.UNPACK_PREMULTIPLY_ALPHA_WEBGL, g.premultiplyAlpha), e.pixelStorei(e.UNPACK_ALIGNMENT, g.unpackAlignment), e.pixelStorei(e.UNPACK_COLORSPACE_CONVERSION_WEBGL, xe);
      let Ee = g.isCompressedTexture || g.image[0].isCompressedTexture, te = g.image[0] && g.image[0].isDataTexture, le = [];
      for (let K = 0; K < 6; K++) !Ee && !te ? le[K] = _(g.image[K], !0, a.maxCubemapSize) : le[K] = te ? g.image[K].image : g.image[K], le[K] = ct(g, le[K]);
      let Re = le[0], be = n.convert(g.format, g.colorSpace), ce = n.convert(g.type), Fe = y(g.internalFormat, be, ce, g.colorSpace), T = g.isVideoTexture !== !0, ue = G.__version === void 0 || q === !0, ae = Z.dataReady, _e = I(g, Re);
      Oe(e.TEXTURE_CUBE_MAP, g);
      let ee;
      if (Ee) {
        T && ue && i.texStorage2D(e.TEXTURE_CUBE_MAP, _e, Fe, Re.width, Re.height);
        for (let K = 0; K < 6; K++) {
          ee = le[K].mipmaps;
          for (let ve = 0; ve < ee.length; ve++) {
            let Ae = ee[ve];
            g.format === 1023 ? T ? ae && i.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X + K, ve, 0, 0, Ae.width, Ae.height, be, ce, Ae.data) : i.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X + K, ve, Fe, Ae.width, Ae.height, 0, be, ce, Ae.data) : be === null ? console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()") : T ? ae && i.compressedTexSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X + K, ve, 0, 0, Ae.width, Ae.height, be, Ae.data) : i.compressedTexImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X + K, ve, Fe, Ae.width, Ae.height, 0, Ae.data);
          }
        }
      } else {
        if (ee = g.mipmaps, T && ue) {
          ee.length > 0 && _e++;
          let K = rt(le[0]);
          i.texStorage2D(e.TEXTURE_CUBE_MAP, _e, Fe, K.width, K.height);
        }
        for (let K = 0; K < 6; K++) if (te) {
          T ? ae && i.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X + K, 0, 0, 0, le[K].width, le[K].height, be, ce, le[K].data) : i.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X + K, 0, Fe, le[K].width, le[K].height, 0, be, ce, le[K].data);
          for (let ve = 0; ve < ee.length; ve++) {
            let Ae = ee[ve].image[K].image;
            T ? ae && i.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X + K, ve + 1, 0, 0, Ae.width, Ae.height, be, ce, Ae.data) : i.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X + K, ve + 1, Fe, Ae.width, Ae.height, 0, be, ce, Ae.data);
          }
        } else {
          T ? ae && i.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X + K, 0, 0, 0, be, ce, le[K]) : i.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X + K, 0, Fe, be, ce, le[K]);
          for (let ve = 0; ve < ee.length; ve++) {
            let Ae = ee[ve];
            T ? ae && i.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X + K, ve + 1, 0, 0, be, ce, Ae.image[K]) : i.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X + K, ve + 1, Fe, be, ce, Ae.image[K]);
          }
        }
      }
      f(g) && p(e.TEXTURE_CUBE_MAP), G.__version = Z.version, g.onUpdate && g.onUpdate(g);
    }
    E.__version = g.version;
  }
  function Se(E, g, U, q, Z, G) {
    let fe = n.convert(U.format, U.colorSpace), re = n.convert(U.type), xe = y(U.internalFormat, fe, re, U.colorSpace), Ee = r.get(g), te = r.get(U);
    if (te.__renderTarget = g, !Ee.__hasExternalTextures) {
      let le = Math.max(1, g.width >> G), Re = Math.max(1, g.height >> G);
      Z === e.TEXTURE_3D || Z === e.TEXTURE_2D_ARRAY ? i.texImage3D(Z, G, xe, le, Re, g.depth, 0, fe, re, null) : i.texImage2D(Z, G, xe, le, Re, 0, fe, re, null);
    }
    i.bindFramebuffer(e.FRAMEBUFFER, E), we(g) ? o.framebufferTexture2DMultisampleEXT(e.FRAMEBUFFER, q, Z, te.__webglTexture, 0, Te(g)) : (Z === e.TEXTURE_2D || Z >= e.TEXTURE_CUBE_MAP_POSITIVE_X && Z <= e.TEXTURE_CUBE_MAP_NEGATIVE_Z) && e.framebufferTexture2D(e.FRAMEBUFFER, q, Z, te.__webglTexture, G), i.bindFramebuffer(e.FRAMEBUFFER, null);
  }
  function Le(E, g, U) {
    if (e.bindRenderbuffer(e.RENDERBUFFER, E), g.depthBuffer) {
      let q = g.depthTexture, Z = q && q.isDepthTexture ? q.type : null, G = A(g.stencilBuffer, Z), fe = g.stencilBuffer ? e.DEPTH_STENCIL_ATTACHMENT : e.DEPTH_ATTACHMENT, re = Te(g);
      we(g) ? o.renderbufferStorageMultisampleEXT(e.RENDERBUFFER, re, G, g.width, g.height) : U ? e.renderbufferStorageMultisample(e.RENDERBUFFER, re, G, g.width, g.height) : e.renderbufferStorage(e.RENDERBUFFER, G, g.width, g.height), e.framebufferRenderbuffer(e.FRAMEBUFFER, fe, e.RENDERBUFFER, E);
    } else {
      let q = g.textures;
      for (let Z = 0; Z < q.length; Z++) {
        let G = q[Z], fe = n.convert(G.format, G.colorSpace), re = n.convert(G.type), xe = y(G.internalFormat, fe, re, G.colorSpace), Ee = Te(g);
        U && we(g) === !1 ? e.renderbufferStorageMultisample(e.RENDERBUFFER, Ee, xe, g.width, g.height) : we(g) ? o.renderbufferStorageMultisampleEXT(e.RENDERBUFFER, Ee, xe, g.width, g.height) : e.renderbufferStorage(e.RENDERBUFFER, xe, g.width, g.height);
      }
    }
    e.bindRenderbuffer(e.RENDERBUFFER, null);
  }
  function ge(E, g) {
    if (g && g.isWebGLCubeRenderTarget) throw Error("Depth Texture with cube render targets is not supported");
    if (i.bindFramebuffer(e.FRAMEBUFFER, E), !(g.depthTexture && g.depthTexture.isDepthTexture)) throw Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");
    let U = r.get(g.depthTexture);
    U.__renderTarget = g, (!U.__webglTexture || g.depthTexture.image.width !== g.width || g.depthTexture.image.height !== g.height) && (g.depthTexture.image.width = g.width, g.depthTexture.image.height = g.height, g.depthTexture.needsUpdate = !0), J(g.depthTexture, 0);
    let q = U.__webglTexture, Z = Te(g);
    if (g.depthTexture.format === 1026) we(g) ? o.framebufferTexture2DMultisampleEXT(e.FRAMEBUFFER, e.DEPTH_ATTACHMENT, e.TEXTURE_2D, q, 0, Z) : e.framebufferTexture2D(e.FRAMEBUFFER, e.DEPTH_ATTACHMENT, e.TEXTURE_2D, q, 0);
    else if (g.depthTexture.format === 1027) we(g) ? o.framebufferTexture2DMultisampleEXT(e.FRAMEBUFFER, e.DEPTH_STENCIL_ATTACHMENT, e.TEXTURE_2D, q, 0, Z) : e.framebufferTexture2D(e.FRAMEBUFFER, e.DEPTH_STENCIL_ATTACHMENT, e.TEXTURE_2D, q, 0);
    else throw Error("Unknown depthTexture format");
  }
  function qe(E) {
    let g = r.get(E), U = E.isWebGLCubeRenderTarget === !0;
    if (g.__boundDepthTexture !== E.depthTexture) {
      let q = E.depthTexture;
      if (g.__depthDisposeCallback && g.__depthDisposeCallback(), q) {
        let Z = () => {
          delete g.__boundDepthTexture, delete g.__depthDisposeCallback, q.removeEventListener("dispose", Z);
        };
        q.addEventListener("dispose", Z), g.__depthDisposeCallback = Z;
      }
      g.__boundDepthTexture = q;
    }
    if (E.depthTexture && !g.__autoAllocateDepthBuffer) {
      if (U) throw Error("target.depthTexture not supported in Cube render targets");
      let q = E.texture.mipmaps;
      q && q.length > 0 ? ge(g.__webglFramebuffer[0], E) : ge(g.__webglFramebuffer, E);
    } else if (U) {
      g.__webglDepthbuffer = [];
      for (let q = 0; q < 6; q++) if (i.bindFramebuffer(e.FRAMEBUFFER, g.__webglFramebuffer[q]), g.__webglDepthbuffer[q] === void 0) g.__webglDepthbuffer[q] = e.createRenderbuffer(), Le(g.__webglDepthbuffer[q], E, !1);
      else {
        let Z = E.stencilBuffer ? e.DEPTH_STENCIL_ATTACHMENT : e.DEPTH_ATTACHMENT, G = g.__webglDepthbuffer[q];
        e.bindRenderbuffer(e.RENDERBUFFER, G), e.framebufferRenderbuffer(e.FRAMEBUFFER, Z, e.RENDERBUFFER, G);
      }
    } else {
      let q = E.texture.mipmaps;
      if (q && q.length > 0 ? i.bindFramebuffer(e.FRAMEBUFFER, g.__webglFramebuffer[0]) : i.bindFramebuffer(e.FRAMEBUFFER, g.__webglFramebuffer), g.__webglDepthbuffer === void 0) g.__webglDepthbuffer = e.createRenderbuffer(), Le(g.__webglDepthbuffer, E, !1);
      else {
        let Z = E.stencilBuffer ? e.DEPTH_STENCIL_ATTACHMENT : e.DEPTH_ATTACHMENT, G = g.__webglDepthbuffer;
        e.bindRenderbuffer(e.RENDERBUFFER, G), e.framebufferRenderbuffer(e.FRAMEBUFFER, Z, e.RENDERBUFFER, G);
      }
    }
    i.bindFramebuffer(e.FRAMEBUFFER, null);
  }
  function b(E, g, U) {
    let q = r.get(E);
    g !== void 0 && Se(q.__webglFramebuffer, E, E.texture, e.COLOR_ATTACHMENT0, e.TEXTURE_2D, 0), U !== void 0 && qe(E);
  }
  function Ve(E) {
    let g = E.texture, U = r.get(E), q = r.get(g);
    E.addEventListener("dispose", D);
    let Z = E.textures, G = E.isWebGLCubeRenderTarget === !0, fe = Z.length > 1;
    if (fe || (q.__webglTexture === void 0 && (q.__webglTexture = e.createTexture()), q.__version = g.version, s.memory.textures++), G) {
      U.__webglFramebuffer = [];
      for (let re = 0; re < 6; re++) if (g.mipmaps && g.mipmaps.length > 0) {
        U.__webglFramebuffer[re] = [];
        for (let xe = 0; xe < g.mipmaps.length; xe++) U.__webglFramebuffer[re][xe] = e.createFramebuffer();
      } else U.__webglFramebuffer[re] = e.createFramebuffer();
    } else {
      if (g.mipmaps && g.mipmaps.length > 0) {
        U.__webglFramebuffer = [];
        for (let re = 0; re < g.mipmaps.length; re++) U.__webglFramebuffer[re] = e.createFramebuffer();
      } else U.__webglFramebuffer = e.createFramebuffer();
      if (fe) for (let re = 0, xe = Z.length; re < xe; re++) {
        let Ee = r.get(Z[re]);
        Ee.__webglTexture === void 0 && (Ee.__webglTexture = e.createTexture(), s.memory.textures++);
      }
      if (E.samples > 0 && we(E) === !1) {
        U.__webglMultisampledFramebuffer = e.createFramebuffer(), U.__webglColorRenderbuffer = [], i.bindFramebuffer(e.FRAMEBUFFER, U.__webglMultisampledFramebuffer);
        for (let re = 0; re < Z.length; re++) {
          let xe = Z[re];
          U.__webglColorRenderbuffer[re] = e.createRenderbuffer(), e.bindRenderbuffer(e.RENDERBUFFER, U.__webglColorRenderbuffer[re]);
          let Ee = n.convert(xe.format, xe.colorSpace), te = n.convert(xe.type), le = y(xe.internalFormat, Ee, te, xe.colorSpace, E.isXRRenderTarget === !0), Re = Te(E);
          e.renderbufferStorageMultisample(e.RENDERBUFFER, Re, le, E.width, E.height), e.framebufferRenderbuffer(e.FRAMEBUFFER, e.COLOR_ATTACHMENT0 + re, e.RENDERBUFFER, U.__webglColorRenderbuffer[re]);
        }
        e.bindRenderbuffer(e.RENDERBUFFER, null), E.depthBuffer && (U.__webglDepthRenderbuffer = e.createRenderbuffer(), Le(U.__webglDepthRenderbuffer, E, !0)), i.bindFramebuffer(e.FRAMEBUFFER, null);
      }
    }
    if (G) {
      i.bindTexture(e.TEXTURE_CUBE_MAP, q.__webglTexture), Oe(e.TEXTURE_CUBE_MAP, g);
      for (let re = 0; re < 6; re++) if (g.mipmaps && g.mipmaps.length > 0) for (let xe = 0; xe < g.mipmaps.length; xe++) Se(U.__webglFramebuffer[re][xe], E, g, e.COLOR_ATTACHMENT0, e.TEXTURE_CUBE_MAP_POSITIVE_X + re, xe);
      else Se(U.__webglFramebuffer[re], E, g, e.COLOR_ATTACHMENT0, e.TEXTURE_CUBE_MAP_POSITIVE_X + re, 0);
      f(g) && p(e.TEXTURE_CUBE_MAP), i.unbindTexture();
    } else if (fe) {
      for (let re = 0, xe = Z.length; re < xe; re++) {
        let Ee = Z[re], te = r.get(Ee), le = e.TEXTURE_2D;
        (E.isWebGL3DRenderTarget || E.isWebGLArrayRenderTarget) && (le = E.isWebGL3DRenderTarget ? e.TEXTURE_3D : e.TEXTURE_2D_ARRAY), i.bindTexture(le, te.__webglTexture), Oe(le, Ee), Se(U.__webglFramebuffer, E, Ee, e.COLOR_ATTACHMENT0 + re, le, 0), f(Ee) && p(le);
      }
      i.unbindTexture();
    } else {
      let re = e.TEXTURE_2D;
      if ((E.isWebGL3DRenderTarget || E.isWebGLArrayRenderTarget) && (re = E.isWebGL3DRenderTarget ? e.TEXTURE_3D : e.TEXTURE_2D_ARRAY), i.bindTexture(re, q.__webglTexture), Oe(re, g), g.mipmaps && g.mipmaps.length > 0) for (let xe = 0; xe < g.mipmaps.length; xe++) Se(U.__webglFramebuffer[xe], E, g, e.COLOR_ATTACHMENT0, re, xe);
      else Se(U.__webglFramebuffer, E, g, e.COLOR_ATTACHMENT0, re, 0);
      f(g) && p(re), i.unbindTexture();
    }
    E.depthBuffer && qe(E);
  }
  function ze(E) {
    let g = E.textures;
    for (let U = 0, q = g.length; U < q; U++) {
      let Z = g[U];
      if (f(Z)) {
        let G = R(E), fe = r.get(Z).__webglTexture;
        i.bindTexture(G, fe), p(G), i.unbindTexture();
      }
    }
  }
  let Ye = [], Me = [];
  function Qe(E) {
    if (E.samples > 0) {
      if (we(E) === !1) {
        let g = E.textures, U = E.width, q = E.height, Z = e.COLOR_BUFFER_BIT, G = E.stencilBuffer ? e.DEPTH_STENCIL_ATTACHMENT : e.DEPTH_ATTACHMENT, fe = r.get(E), re = g.length > 1;
        if (re) for (let Ee = 0; Ee < g.length; Ee++) i.bindFramebuffer(e.FRAMEBUFFER, fe.__webglMultisampledFramebuffer), e.framebufferRenderbuffer(e.FRAMEBUFFER, e.COLOR_ATTACHMENT0 + Ee, e.RENDERBUFFER, null), i.bindFramebuffer(e.FRAMEBUFFER, fe.__webglFramebuffer), e.framebufferTexture2D(e.DRAW_FRAMEBUFFER, e.COLOR_ATTACHMENT0 + Ee, e.TEXTURE_2D, null, 0);
        i.bindFramebuffer(e.READ_FRAMEBUFFER, fe.__webglMultisampledFramebuffer);
        let xe = E.texture.mipmaps;
        xe && xe.length > 0 ? i.bindFramebuffer(e.DRAW_FRAMEBUFFER, fe.__webglFramebuffer[0]) : i.bindFramebuffer(e.DRAW_FRAMEBUFFER, fe.__webglFramebuffer);
        for (let Ee = 0; Ee < g.length; Ee++) {
          if (E.resolveDepthBuffer && (E.depthBuffer && (Z |= e.DEPTH_BUFFER_BIT), E.stencilBuffer && E.resolveStencilBuffer && (Z |= e.STENCIL_BUFFER_BIT)), re) {
            e.framebufferRenderbuffer(e.READ_FRAMEBUFFER, e.COLOR_ATTACHMENT0, e.RENDERBUFFER, fe.__webglColorRenderbuffer[Ee]);
            let te = r.get(g[Ee]).__webglTexture;
            e.framebufferTexture2D(e.DRAW_FRAMEBUFFER, e.COLOR_ATTACHMENT0, e.TEXTURE_2D, te, 0);
          }
          e.blitFramebuffer(0, 0, U, q, 0, 0, U, q, Z, e.NEAREST), l === !0 && (Ye.length = 0, Me.length = 0, Ye.push(e.COLOR_ATTACHMENT0 + Ee), E.depthBuffer && E.resolveDepthBuffer === !1 && (Ye.push(G), Me.push(G), e.invalidateFramebuffer(e.DRAW_FRAMEBUFFER, Me)), e.invalidateFramebuffer(e.READ_FRAMEBUFFER, Ye));
        }
        if (i.bindFramebuffer(e.READ_FRAMEBUFFER, null), i.bindFramebuffer(e.DRAW_FRAMEBUFFER, null), re) for (let Ee = 0; Ee < g.length; Ee++) {
          i.bindFramebuffer(e.FRAMEBUFFER, fe.__webglMultisampledFramebuffer), e.framebufferRenderbuffer(e.FRAMEBUFFER, e.COLOR_ATTACHMENT0 + Ee, e.RENDERBUFFER, fe.__webglColorRenderbuffer[Ee]);
          let te = r.get(g[Ee]).__webglTexture;
          i.bindFramebuffer(e.FRAMEBUFFER, fe.__webglFramebuffer), e.framebufferTexture2D(e.DRAW_FRAMEBUFFER, e.COLOR_ATTACHMENT0 + Ee, e.TEXTURE_2D, te, 0);
        }
        i.bindFramebuffer(e.DRAW_FRAMEBUFFER, fe.__webglMultisampledFramebuffer);
      } else if (E.depthBuffer && E.resolveDepthBuffer === !1 && l) {
        let g = E.stencilBuffer ? e.DEPTH_STENCIL_ATTACHMENT : e.DEPTH_ATTACHMENT;
        e.invalidateFramebuffer(e.DRAW_FRAMEBUFFER, [g]);
      }
    }
  }
  function Te(E) {
    return Math.min(a.maxSamples, E.samples);
  }
  function we(E) {
    let g = r.get(E);
    return E.samples > 0 && t.has("WEBGL_multisampled_render_to_texture") === !0 && g.__useRenderToTexture !== !1;
  }
  function pt(E) {
    let g = s.render.frame;
    u.get(E) !== g && (u.set(E, g), E.update());
  }
  function ct(E, g) {
    let U = E.colorSpace, q = E.format, Z = E.type;
    return E.isCompressedTexture === !0 || E.isVideoTexture === !0 || U !== "srgb-linear" && U !== "" && (We.getTransfer(U) === "srgb" ? (q !== 1023 || Z !== 1009) && console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType.") : console.error("THREE.WebGLTextures: Unsupported texture color space:", U)), g;
  }
  function rt(E) {
    return typeof HTMLImageElement < "u" && E instanceof HTMLImageElement ? (c.width = E.naturalWidth || E.width, c.height = E.naturalHeight || E.height) : typeof VideoFrame < "u" && E instanceof VideoFrame ? (c.width = E.displayWidth, c.height = E.displayHeight) : (c.width = E.width, c.height = E.height), c;
  }
  this.allocateTextureUnit = V, this.resetTextureUnits = W, this.setTexture2D = J, this.setTexture2DArray = H, this.setTexture3D = Q, this.setTextureCube = X, this.rebindTextures = b, this.setupRenderTarget = Ve, this.updateRenderTargetMipmap = ze, this.updateMultisampleRenderTarget = Qe, this.setupDepthRenderbuffer = qe, this.setupFrameBufferTexture = Se, this.useMultisampledRTT = we;
}
function Qu(e, t) {
  function i(r, a = "") {
    let n, s = We.getTransfer(a);
    if (r === 1009) return e.UNSIGNED_BYTE;
    if (r === 1017) return e.UNSIGNED_SHORT_4_4_4_4;
    if (r === 1018) return e.UNSIGNED_SHORT_5_5_5_1;
    if (r === 35902) return e.UNSIGNED_INT_5_9_9_9_REV;
    if (r === 35899) return e.UNSIGNED_INT_10F_11F_11F_REV;
    if (r === 1010) return e.BYTE;
    if (r === 1011) return e.SHORT;
    if (r === 1012) return e.UNSIGNED_SHORT;
    if (r === 1013) return e.INT;
    if (r === 1014) return e.UNSIGNED_INT;
    if (r === 1015) return e.FLOAT;
    if (r === 1016) return e.HALF_FLOAT;
    if (r === 1021) return e.ALPHA;
    if (r === 1022) return e.RGB;
    if (r === 1023) return e.RGBA;
    if (r === 1026) return e.DEPTH_COMPONENT;
    if (r === 1027) return e.DEPTH_STENCIL;
    if (r === 1028) return e.RED;
    if (r === 1029) return e.RED_INTEGER;
    if (r === 1030) return e.RG;
    if (r === 1031) return e.RG_INTEGER;
    if (r === 1033) return e.RGBA_INTEGER;
    if (r === 33776 || r === 33777 || r === 33778 || r === 33779) if (s === "srgb") if (n = t.get("WEBGL_compressed_texture_s3tc_srgb"), n !== null) {
      if (r === 33776) return n.COMPRESSED_SRGB_S3TC_DXT1_EXT;
      if (r === 33777) return n.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;
      if (r === 33778) return n.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;
      if (r === 33779) return n.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT;
    } else return null;
    else if (n = t.get("WEBGL_compressed_texture_s3tc"), n !== null) {
      if (r === 33776) return n.COMPRESSED_RGB_S3TC_DXT1_EXT;
      if (r === 33777) return n.COMPRESSED_RGBA_S3TC_DXT1_EXT;
      if (r === 33778) return n.COMPRESSED_RGBA_S3TC_DXT3_EXT;
      if (r === 33779) return n.COMPRESSED_RGBA_S3TC_DXT5_EXT;
    } else return null;
    if (r === 35840 || r === 35841 || r === 35842 || r === 35843) if (n = t.get("WEBGL_compressed_texture_pvrtc"), n !== null) {
      if (r === 35840) return n.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;
      if (r === 35841) return n.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;
      if (r === 35842) return n.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;
      if (r === 35843) return n.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG;
    } else return null;
    if (r === 36196 || r === 37492 || r === 37496) if (n = t.get("WEBGL_compressed_texture_etc"), n !== null) {
      if (r === 36196 || r === 37492) return s === "srgb" ? n.COMPRESSED_SRGB8_ETC2 : n.COMPRESSED_RGB8_ETC2;
      if (r === 37496) return s === "srgb" ? n.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC : n.COMPRESSED_RGBA8_ETC2_EAC;
    } else return null;
    if (r === 37808 || r === 37809 || r === 37810 || r === 37811 || r === 37812 || r === 37813 || r === 37814 || r === 37815 || r === 37816 || r === 37817 || r === 37818 || r === 37819 || r === 37820 || r === 37821) if (n = t.get("WEBGL_compressed_texture_astc"), n !== null) {
      if (r === 37808) return s === "srgb" ? n.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR : n.COMPRESSED_RGBA_ASTC_4x4_KHR;
      if (r === 37809) return s === "srgb" ? n.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR : n.COMPRESSED_RGBA_ASTC_5x4_KHR;
      if (r === 37810) return s === "srgb" ? n.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR : n.COMPRESSED_RGBA_ASTC_5x5_KHR;
      if (r === 37811) return s === "srgb" ? n.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR : n.COMPRESSED_RGBA_ASTC_6x5_KHR;
      if (r === 37812) return s === "srgb" ? n.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR : n.COMPRESSED_RGBA_ASTC_6x6_KHR;
      if (r === 37813) return s === "srgb" ? n.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR : n.COMPRESSED_RGBA_ASTC_8x5_KHR;
      if (r === 37814) return s === "srgb" ? n.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR : n.COMPRESSED_RGBA_ASTC_8x6_KHR;
      if (r === 37815) return s === "srgb" ? n.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR : n.COMPRESSED_RGBA_ASTC_8x8_KHR;
      if (r === 37816) return s === "srgb" ? n.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR : n.COMPRESSED_RGBA_ASTC_10x5_KHR;
      if (r === 37817) return s === "srgb" ? n.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR : n.COMPRESSED_RGBA_ASTC_10x6_KHR;
      if (r === 37818) return s === "srgb" ? n.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR : n.COMPRESSED_RGBA_ASTC_10x8_KHR;
      if (r === 37819) return s === "srgb" ? n.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR : n.COMPRESSED_RGBA_ASTC_10x10_KHR;
      if (r === 37820) return s === "srgb" ? n.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR : n.COMPRESSED_RGBA_ASTC_12x10_KHR;
      if (r === 37821) return s === "srgb" ? n.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR : n.COMPRESSED_RGBA_ASTC_12x12_KHR;
    } else return null;
    if (r === 36492 || r === 36494 || r === 36495) if (n = t.get("EXT_texture_compression_bptc"), n !== null) {
      if (r === 36492) return s === "srgb" ? n.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT : n.COMPRESSED_RGBA_BPTC_UNORM_EXT;
      if (r === 36494) return n.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;
      if (r === 36495) return n.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT;
    } else return null;
    if (r === 36283 || r === 36284 || r === 36285 || r === 36286) if (n = t.get("EXT_texture_compression_rgtc"), n !== null) {
      if (r === 36283) return n.COMPRESSED_RED_RGTC1_EXT;
      if (r === 36284) return n.COMPRESSED_SIGNED_RED_RGTC1_EXT;
      if (r === 36285) return n.COMPRESSED_RED_GREEN_RGTC2_EXT;
      if (r === 36286) return n.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT;
    } else return null;
    return r === 1020 ? e.UNSIGNED_INT_24_8 : e[r] === void 0 ? null : e[r];
  }
  return { convert: i };
}
var eh = `
void main() {

	gl_Position = vec4( position, 1.0 );

}`, th = `
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`, ih = class {
  constructor() {
    this.texture = null, this.mesh = null, this.depthNear = 0, this.depthFar = 0;
  }
  init(e, t) {
    if (this.texture === null) {
      let i = new ks(e.texture);
      (e.depthNear !== t.depthNear || e.depthFar !== t.depthFar) && (this.depthNear = e.depthNear, this.depthFar = e.depthFar), this.texture = i;
    }
  }
  getMesh(e) {
    if (this.texture !== null && this.mesh === null) {
      let t = e.cameras[0].viewport, i = new Xt({ vertexShader: eh, fragmentShader: th, uniforms: { depthColor: { value: this.texture }, depthWidth: { value: t.z }, depthHeight: { value: t.w } } });
      this.mesh = new Ot(new aa(20, 20), i);
    }
    return this.mesh;
  }
  reset() {
    this.texture = null, this.mesh = null;
  }
  getDepthTexture() {
    return this.texture;
  }
}, rh = class extends Zi {
  constructor(e, t) {
    super();
    let i = this, r = null, a = 1, n = null, s = "local-floor", o = 1, l = null, c = null, u = null, h = null, d = null, m = null, x = typeof XRWebGLBinding < "u", _ = new ih(), f = {}, p = t.getContextAttributes(), R = null, y = null, A = [], I = [], L = new ke(), D = null, z = new Ct();
    z.viewport = new st();
    let M = new Ct();
    M.viewport = new st();
    let S = [z, M], w = new Ql(), W = null, V = null;
    this.cameraAutoUpdate = !0, this.enabled = !1, this.isPresenting = !1, this.getController = function(j) {
      let ne = A[j];
      return ne === void 0 && (ne = new Da(), A[j] = ne), ne.getTargetRaySpace();
    }, this.getControllerGrip = function(j) {
      let ne = A[j];
      return ne === void 0 && (ne = new Da(), A[j] = ne), ne.getGripSpace();
    }, this.getHand = function(j) {
      let ne = A[j];
      return ne === void 0 && (ne = new Da(), A[j] = ne), ne.getHandSpace();
    };
    function k(j) {
      let ne = I.indexOf(j.inputSource);
      if (ne === -1) return;
      let se = A[ne];
      se !== void 0 && (se.update(j.inputSource, j.frame, l || n), se.dispatchEvent({ type: j.type, data: j.inputSource }));
    }
    function J() {
      r.removeEventListener("select", k), r.removeEventListener("selectstart", k), r.removeEventListener("selectend", k), r.removeEventListener("squeeze", k), r.removeEventListener("squeezestart", k), r.removeEventListener("squeezeend", k), r.removeEventListener("end", J), r.removeEventListener("inputsourceschange", H);
      for (let j = 0; j < A.length; j++) {
        let ne = I[j];
        ne !== null && (I[j] = null, A[j].disconnect(ne));
      }
      W = null, V = null, _.reset();
      for (let j in f) delete f[j];
      e.setRenderTarget(R), d = null, h = null, u = null, r = null, y = null, Xe.stop(), i.isPresenting = !1, e.setPixelRatio(D), e.setSize(L.width, L.height, !1), i.dispatchEvent({ type: "sessionend" });
    }
    this.setFramebufferScaleFactor = function(j) {
      a = j, i.isPresenting === !0 && console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.");
    }, this.setReferenceSpaceType = function(j) {
      s = j, i.isPresenting === !0 && console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.");
    }, this.getReferenceSpace = function() {
      return l || n;
    }, this.setReferenceSpace = function(j) {
      l = j;
    }, this.getBaseLayer = function() {
      return h === null ? d : h;
    }, this.getBinding = function() {
      return u === null && x && (u = new XRWebGLBinding(r, t)), u;
    }, this.getFrame = function() {
      return m;
    }, this.getSession = function() {
      return r;
    }, this.setSession = async function(j) {
      if (r = j, r !== null) {
        if (R = e.getRenderTarget(), r.addEventListener("select", k), r.addEventListener("selectstart", k), r.addEventListener("selectend", k), r.addEventListener("squeeze", k), r.addEventListener("squeezestart", k), r.addEventListener("squeezeend", k), r.addEventListener("end", J), r.addEventListener("inputsourceschange", H), p.xrCompatible !== !0 && await t.makeXRCompatible(), D = e.getPixelRatio(), e.getSize(L), x && "createProjectionLayer" in XRWebGLBinding.prototype) {
          let ne = null, se = null, Se = null;
          p.depth && (Se = p.stencil ? t.DEPTH24_STENCIL8 : t.DEPTH_COMPONENT24, ne = p.stencil ? Ss : ys, se = p.stencil ? Ao : tn);
          let Le = { colorFormat: t.RGBA8, depthFormat: Se, scaleFactor: a };
          u = this.getBinding(), h = u.createProjectionLayer(Le), r.updateRenderState({ layers: [h] }), e.setPixelRatio(1), e.setSize(h.textureWidth, h.textureHeight, !1), y = new ai(h.textureWidth, h.textureHeight, { format: Ei, type: dr, depthTexture: new zs(h.textureWidth, h.textureHeight, se, void 0, void 0, void 0, void 0, void 0, void 0, ne), stencilBuffer: p.stencil, colorSpace: e.outputColorSpace, samples: p.antialias ? 4 : 0, resolveDepthBuffer: h.ignoreDepthValues === !1, resolveStencilBuffer: h.ignoreDepthValues === !1 });
        } else {
          let ne = { antialias: p.antialias, alpha: !0, depth: p.depth, stencil: p.stencil, framebufferScaleFactor: a };
          d = new XRWebGLLayer(r, t, ne), r.updateRenderState({ baseLayer: d }), e.setPixelRatio(1), e.setSize(d.framebufferWidth, d.framebufferHeight, !1), y = new ai(d.framebufferWidth, d.framebufferHeight, { format: Ei, type: dr, colorSpace: e.outputColorSpace, stencilBuffer: p.stencil, resolveDepthBuffer: d.ignoreDepthValues === !1, resolveStencilBuffer: d.ignoreDepthValues === !1 });
        }
        y.isXRRenderTarget = !0, this.setFoveation(o), l = null, n = await r.requestReferenceSpace(s), Xe.setContext(r), Xe.start(), i.isPresenting = !0, i.dispatchEvent({ type: "sessionstart" });
      }
    }, this.getEnvironmentBlendMode = function() {
      if (r !== null) return r.environmentBlendMode;
    }, this.getDepthTexture = function() {
      return _.getDepthTexture();
    };
    function H(j) {
      for (let ne = 0; ne < j.removed.length; ne++) {
        let se = j.removed[ne], Se = I.indexOf(se);
        Se >= 0 && (I[Se] = null, A[Se].disconnect(se));
      }
      for (let ne = 0; ne < j.added.length; ne++) {
        let se = j.added[ne], Se = I.indexOf(se);
        if (Se === -1) {
          for (let ge = 0; ge < A.length; ge++) if (ge >= I.length) {
            I.push(se), Se = ge;
            break;
          } else if (I[ge] === null) {
            I[ge] = se, Se = ge;
            break;
          }
          if (Se === -1) break;
        }
        let Le = A[Se];
        Le && Le.connect(se);
      }
    }
    let Q = new F(), X = new F();
    function ie(j, ne, se) {
      Q.setFromMatrixPosition(ne.matrixWorld), X.setFromMatrixPosition(se.matrixWorld);
      let Se = Q.distanceTo(X), Le = ne.projectionMatrix.elements, ge = se.projectionMatrix.elements, qe = Le[14] / (Le[10] - 1), b = Le[14] / (Le[10] + 1), Ve = (Le[9] + 1) / Le[5], ze = (Le[9] - 1) / Le[5], Ye = (Le[8] - 1) / Le[0], Me = (ge[8] + 1) / ge[0], Qe = qe * Ye, Te = qe * Me, we = Se / (-Ye + Me), pt = we * -Ye;
      if (ne.matrixWorld.decompose(j.position, j.quaternion, j.scale), j.translateX(pt), j.translateZ(we), j.matrixWorld.compose(j.position, j.quaternion, j.scale), j.matrixWorldInverse.copy(j.matrixWorld).invert(), Le[10] === -1) j.projectionMatrix.copy(ne.projectionMatrix), j.projectionMatrixInverse.copy(ne.projectionMatrixInverse);
      else {
        let ct = qe + we, rt = b + we, E = Qe - pt, g = Te + (Se - pt), U = Ve * b / rt * ct, q = ze * b / rt * ct;
        j.projectionMatrix.makePerspective(E, g, U, q, ct, rt), j.projectionMatrixInverse.copy(j.projectionMatrix).invert();
      }
    }
    function pe(j, ne) {
      ne === null ? j.matrixWorld.copy(j.matrix) : j.matrixWorld.multiplyMatrices(ne.matrixWorld, j.matrix), j.matrixWorldInverse.copy(j.matrixWorld).invert();
    }
    this.updateCamera = function(j) {
      if (r === null) return;
      let ne = j.near, se = j.far;
      _.texture !== null && (_.depthNear > 0 && (ne = _.depthNear), _.depthFar > 0 && (se = _.depthFar)), w.near = M.near = z.near = ne, w.far = M.far = z.far = se, (W !== w.near || V !== w.far) && (r.updateRenderState({ depthNear: w.near, depthFar: w.far }), W = w.near, V = w.far), w.layers.mask = j.layers.mask | 6, z.layers.mask = w.layers.mask & 3, M.layers.mask = w.layers.mask & 5;
      let Se = j.parent, Le = w.cameras;
      pe(w, Se);
      for (let ge = 0; ge < Le.length; ge++) pe(Le[ge], Se);
      Le.length === 2 ? ie(w, z, M) : w.projectionMatrix.copy(z.projectionMatrix), Ue(j, w, Se);
    };
    function Ue(j, ne, se) {
      se === null ? j.matrix.copy(ne.matrixWorld) : (j.matrix.copy(se.matrixWorld), j.matrix.invert(), j.matrix.multiply(ne.matrixWorld)), j.matrix.decompose(j.position, j.quaternion, j.scale), j.updateMatrixWorld(!0), j.projectionMatrix.copy(ne.projectionMatrix), j.projectionMatrixInverse.copy(ne.projectionMatrixInverse), j.isPerspectiveCamera && (j.fov = Ga * 2 * Math.atan(1 / j.projectionMatrix.elements[5]), j.zoom = 1);
    }
    this.getCamera = function() {
      return w;
    }, this.getFoveation = function() {
      if (!(h === null && d === null)) return o;
    }, this.setFoveation = function(j) {
      o = j, h !== null && (h.fixedFoveation = j), d !== null && d.fixedFoveation !== void 0 && (d.fixedFoveation = j);
    }, this.hasDepthSensing = function() {
      return _.texture !== null;
    }, this.getDepthSensingMesh = function() {
      return _.getMesh(w);
    }, this.getCameraTexture = function(j) {
      return f[j];
    };
    let Oe = null;
    function it(j, ne) {
      if (c = ne.getViewerPose(l || n), m = ne, c !== null) {
        let se = c.views;
        d !== null && (e.setRenderTargetFramebuffer(y, d.framebuffer), e.setRenderTarget(y));
        let Se = !1;
        se.length !== w.cameras.length && (w.cameras.length = 0, Se = !0);
        for (let ge = 0; ge < se.length; ge++) {
          let qe = se[ge], b = null;
          if (d !== null) b = d.getViewport(qe);
          else {
            let ze = u.getViewSubImage(h, qe);
            b = ze.viewport, ge === 0 && (e.setRenderTargetTextures(y, ze.colorTexture, ze.depthStencilTexture), e.setRenderTarget(y));
          }
          let Ve = S[ge];
          Ve === void 0 && (Ve = new Ct(), Ve.layers.enable(ge), Ve.viewport = new st(), S[ge] = Ve), Ve.matrix.fromArray(qe.transform.matrix), Ve.matrix.decompose(Ve.position, Ve.quaternion, Ve.scale), Ve.projectionMatrix.fromArray(qe.projectionMatrix), Ve.projectionMatrixInverse.copy(Ve.projectionMatrix).invert(), Ve.viewport.set(b.x, b.y, b.width, b.height), ge === 0 && (w.matrix.copy(Ve.matrix), w.matrix.decompose(w.position, w.quaternion, w.scale)), Se === !0 && w.cameras.push(Ve);
        }
        let Le = r.enabledFeatures;
        if (Le && Le.includes("depth-sensing") && r.depthUsage == "gpu-optimized" && x) {
          u = i.getBinding();
          let ge = u.getDepthInformation(se[0]);
          ge && ge.isValid && ge.texture && _.init(ge, r.renderState);
        }
        if (Le && Le.includes("camera-access") && x) {
          e.state.unbindTexture(), u = i.getBinding();
          for (let ge = 0; ge < se.length; ge++) {
            let qe = se[ge].camera;
            if (qe) {
              let b = f[qe];
              b || (b = new ks(), f[qe] = b);
              let Ve = u.getCameraImage(qe);
              b.sourceTexture = Ve;
            }
          }
        }
      }
      for (let se = 0; se < A.length; se++) {
        let Se = I[se], Le = A[se];
        Se !== null && Le !== void 0 && Le.update(Se, ne, l || n);
      }
      Oe && Oe(j, ne), ne.detectedPlanes && i.dispatchEvent({ type: "planesdetected", data: ne }), m = null;
    }
    let Xe = new Gs();
    Xe.setAnimationLoop(it), this.setAnimationLoop = function(j) {
      Oe = j;
    }, this.dispose = function() {
    };
  }
}, mi = new bi(), ah = new dt();
function nh(e, t) {
  function i(f, p) {
    f.matrixAutoUpdate === !0 && f.updateMatrix(), p.value.copy(f.matrix);
  }
  function r(f, p) {
    p.color.getRGB(f.fogColor.value, Is(e)), p.isFog ? (f.fogNear.value = p.near, f.fogFar.value = p.far) : p.isFogExp2 && (f.fogDensity.value = p.density);
  }
  function a(f, p, R, y, A) {
    p.isMeshBasicMaterial || p.isMeshLambertMaterial ? n(f, p) : p.isMeshToonMaterial ? (n(f, p), h(f, p)) : p.isMeshPhongMaterial ? (n(f, p), u(f, p)) : p.isMeshStandardMaterial ? (n(f, p), d(f, p), p.isMeshPhysicalMaterial && m(f, p, A)) : p.isMeshMatcapMaterial ? (n(f, p), x(f, p)) : p.isMeshDepthMaterial ? n(f, p) : p.isMeshDistanceMaterial ? (n(f, p), _(f, p)) : p.isMeshNormalMaterial ? n(f, p) : p.isLineBasicMaterial ? (s(f, p), p.isLineDashedMaterial && o(f, p)) : p.isPointsMaterial ? l(f, p, R, y) : p.isSpriteMaterial ? c(f, p) : p.isShadowMaterial ? (f.color.value.copy(p.color), f.opacity.value = p.opacity) : p.isShaderMaterial && (p.uniformsNeedUpdate = !1);
  }
  function n(f, p) {
    f.opacity.value = p.opacity, p.color && f.diffuse.value.copy(p.color), p.emissive && f.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity), p.map && (f.map.value = p.map, i(p.map, f.mapTransform)), p.alphaMap && (f.alphaMap.value = p.alphaMap, i(p.alphaMap, f.alphaMapTransform)), p.bumpMap && (f.bumpMap.value = p.bumpMap, i(p.bumpMap, f.bumpMapTransform), f.bumpScale.value = p.bumpScale, p.side === 1 && (f.bumpScale.value *= -1)), p.normalMap && (f.normalMap.value = p.normalMap, i(p.normalMap, f.normalMapTransform), f.normalScale.value.copy(p.normalScale), p.side === 1 && f.normalScale.value.negate()), p.displacementMap && (f.displacementMap.value = p.displacementMap, i(p.displacementMap, f.displacementMapTransform), f.displacementScale.value = p.displacementScale, f.displacementBias.value = p.displacementBias), p.emissiveMap && (f.emissiveMap.value = p.emissiveMap, i(p.emissiveMap, f.emissiveMapTransform)), p.specularMap && (f.specularMap.value = p.specularMap, i(p.specularMap, f.specularMapTransform)), p.alphaTest > 0 && (f.alphaTest.value = p.alphaTest);
    let R = t.get(p), y = R.envMap, A = R.envMapRotation;
    y && (f.envMap.value = y, mi.copy(A), mi.x *= -1, mi.y *= -1, mi.z *= -1, y.isCubeTexture && y.isRenderTargetTexture === !1 && (mi.y *= -1, mi.z *= -1), f.envMapRotation.value.setFromMatrix4(ah.makeRotationFromEuler(mi)), f.flipEnvMap.value = y.isCubeTexture && y.isRenderTargetTexture === !1 ? -1 : 1, f.reflectivity.value = p.reflectivity, f.ior.value = p.ior, f.refractionRatio.value = p.refractionRatio), p.lightMap && (f.lightMap.value = p.lightMap, f.lightMapIntensity.value = p.lightMapIntensity, i(p.lightMap, f.lightMapTransform)), p.aoMap && (f.aoMap.value = p.aoMap, f.aoMapIntensity.value = p.aoMapIntensity, i(p.aoMap, f.aoMapTransform));
  }
  function s(f, p) {
    f.diffuse.value.copy(p.color), f.opacity.value = p.opacity, p.map && (f.map.value = p.map, i(p.map, f.mapTransform));
  }
  function o(f, p) {
    f.dashSize.value = p.dashSize, f.totalSize.value = p.dashSize + p.gapSize, f.scale.value = p.scale;
  }
  function l(f, p, R, y) {
    f.diffuse.value.copy(p.color), f.opacity.value = p.opacity, f.size.value = p.size * R, f.scale.value = y * 0.5, p.map && (f.map.value = p.map, i(p.map, f.uvTransform)), p.alphaMap && (f.alphaMap.value = p.alphaMap, i(p.alphaMap, f.alphaMapTransform)), p.alphaTest > 0 && (f.alphaTest.value = p.alphaTest);
  }
  function c(f, p) {
    f.diffuse.value.copy(p.color), f.opacity.value = p.opacity, f.rotation.value = p.rotation, p.map && (f.map.value = p.map, i(p.map, f.mapTransform)), p.alphaMap && (f.alphaMap.value = p.alphaMap, i(p.alphaMap, f.alphaMapTransform)), p.alphaTest > 0 && (f.alphaTest.value = p.alphaTest);
  }
  function u(f, p) {
    f.specular.value.copy(p.specular), f.shininess.value = Math.max(p.shininess, 1e-4);
  }
  function h(f, p) {
    p.gradientMap && (f.gradientMap.value = p.gradientMap);
  }
  function d(f, p) {
    f.metalness.value = p.metalness, p.metalnessMap && (f.metalnessMap.value = p.metalnessMap, i(p.metalnessMap, f.metalnessMapTransform)), f.roughness.value = p.roughness, p.roughnessMap && (f.roughnessMap.value = p.roughnessMap, i(p.roughnessMap, f.roughnessMapTransform)), p.envMap && (f.envMapIntensity.value = p.envMapIntensity);
  }
  function m(f, p, R) {
    f.ior.value = p.ior, p.sheen > 0 && (f.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen), f.sheenRoughness.value = p.sheenRoughness, p.sheenColorMap && (f.sheenColorMap.value = p.sheenColorMap, i(p.sheenColorMap, f.sheenColorMapTransform)), p.sheenRoughnessMap && (f.sheenRoughnessMap.value = p.sheenRoughnessMap, i(p.sheenRoughnessMap, f.sheenRoughnessMapTransform))), p.clearcoat > 0 && (f.clearcoat.value = p.clearcoat, f.clearcoatRoughness.value = p.clearcoatRoughness, p.clearcoatMap && (f.clearcoatMap.value = p.clearcoatMap, i(p.clearcoatMap, f.clearcoatMapTransform)), p.clearcoatRoughnessMap && (f.clearcoatRoughnessMap.value = p.clearcoatRoughnessMap, i(p.clearcoatRoughnessMap, f.clearcoatRoughnessMapTransform)), p.clearcoatNormalMap && (f.clearcoatNormalMap.value = p.clearcoatNormalMap, i(p.clearcoatNormalMap, f.clearcoatNormalMapTransform), f.clearcoatNormalScale.value.copy(p.clearcoatNormalScale), p.side === 1 && f.clearcoatNormalScale.value.negate())), p.dispersion > 0 && (f.dispersion.value = p.dispersion), p.iridescence > 0 && (f.iridescence.value = p.iridescence, f.iridescenceIOR.value = p.iridescenceIOR, f.iridescenceThicknessMinimum.value = p.iridescenceThicknessRange[0], f.iridescenceThicknessMaximum.value = p.iridescenceThicknessRange[1], p.iridescenceMap && (f.iridescenceMap.value = p.iridescenceMap, i(p.iridescenceMap, f.iridescenceMapTransform)), p.iridescenceThicknessMap && (f.iridescenceThicknessMap.value = p.iridescenceThicknessMap, i(p.iridescenceThicknessMap, f.iridescenceThicknessMapTransform))), p.transmission > 0 && (f.transmission.value = p.transmission, f.transmissionSamplerMap.value = R.texture, f.transmissionSamplerSize.value.set(R.width, R.height), p.transmissionMap && (f.transmissionMap.value = p.transmissionMap, i(p.transmissionMap, f.transmissionMapTransform)), f.thickness.value = p.thickness, p.thicknessMap && (f.thicknessMap.value = p.thicknessMap, i(p.thicknessMap, f.thicknessMapTransform)), f.attenuationDistance.value = p.attenuationDistance, f.attenuationColor.value.copy(p.attenuationColor)), p.anisotropy > 0 && (f.anisotropyVector.value.set(p.anisotropy * Math.cos(p.anisotropyRotation), p.anisotropy * Math.sin(p.anisotropyRotation)), p.anisotropyMap && (f.anisotropyMap.value = p.anisotropyMap, i(p.anisotropyMap, f.anisotropyMapTransform))), f.specularIntensity.value = p.specularIntensity, f.specularColor.value.copy(p.specularColor), p.specularColorMap && (f.specularColorMap.value = p.specularColorMap, i(p.specularColorMap, f.specularColorMapTransform)), p.specularIntensityMap && (f.specularIntensityMap.value = p.specularIntensityMap, i(p.specularIntensityMap, f.specularIntensityMapTransform));
  }
  function x(f, p) {
    p.matcap && (f.matcap.value = p.matcap);
  }
  function _(f, p) {
    let R = t.get(p).light;
    f.referencePosition.value.setFromMatrixPosition(R.matrixWorld), f.nearDistance.value = R.shadow.camera.near, f.farDistance.value = R.shadow.camera.far;
  }
  return { refreshFogUniforms: r, refreshMaterialUniforms: a };
}
function sh(e, t, i, r) {
  let a = {}, n = {}, s = [], o = e.getParameter(e.MAX_UNIFORM_BUFFER_BINDINGS);
  function l(R, y) {
    let A = y.program;
    r.uniformBlockBinding(R, A);
  }
  function c(R, y) {
    let A = a[R.id];
    A === void 0 && (x(R), A = u(R), a[R.id] = A, R.addEventListener("dispose", f));
    let I = y.program;
    r.updateUBOMapping(R, I);
    let L = t.render.frame;
    n[R.id] !== L && (d(R), n[R.id] = L);
  }
  function u(R) {
    let y = h();
    R.__bindingPointIndex = y;
    let A = e.createBuffer(), I = R.__size, L = R.usage;
    return e.bindBuffer(e.UNIFORM_BUFFER, A), e.bufferData(e.UNIFORM_BUFFER, I, L), e.bindBuffer(e.UNIFORM_BUFFER, null), e.bindBufferBase(e.UNIFORM_BUFFER, y, A), A;
  }
  function h() {
    for (let R = 0; R < o; R++) if (s.indexOf(R) === -1) return s.push(R), R;
    return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."), 0;
  }
  function d(R) {
    let y = a[R.id], A = R.uniforms, I = R.__cache;
    e.bindBuffer(e.UNIFORM_BUFFER, y);
    for (let L = 0, D = A.length; L < D; L++) {
      let z = Array.isArray(A[L]) ? A[L] : [A[L]];
      for (let M = 0, S = z.length; M < S; M++) {
        let w = z[M];
        if (m(w, L, M, I) === !0) {
          let W = w.__offset, V = Array.isArray(w.value) ? w.value : [w.value], k = 0;
          for (let J = 0; J < V.length; J++) {
            let H = V[J], Q = _(H);
            typeof H == "number" || typeof H == "boolean" ? (w.__data[0] = H, e.bufferSubData(e.UNIFORM_BUFFER, W + k, w.__data)) : H.isMatrix3 ? (w.__data[0] = H.elements[0], w.__data[1] = H.elements[1], w.__data[2] = H.elements[2], w.__data[3] = 0, w.__data[4] = H.elements[3], w.__data[5] = H.elements[4], w.__data[6] = H.elements[5], w.__data[7] = 0, w.__data[8] = H.elements[6], w.__data[9] = H.elements[7], w.__data[10] = H.elements[8], w.__data[11] = 0) : (H.toArray(w.__data, k), k += Q.storage / Float32Array.BYTES_PER_ELEMENT);
          }
          e.bufferSubData(e.UNIFORM_BUFFER, W, w.__data);
        }
      }
    }
    e.bindBuffer(e.UNIFORM_BUFFER, null);
  }
  function m(R, y, A, I) {
    let L = R.value, D = y + "_" + A;
    if (I[D] === void 0) return typeof L == "number" || typeof L == "boolean" ? I[D] = L : I[D] = L.clone(), !0;
    {
      let z = I[D];
      if (typeof L == "number" || typeof L == "boolean") {
        if (z !== L) return I[D] = L, !0;
      } else if (z.equals(L) === !1) return z.copy(L), !0;
    }
    return !1;
  }
  function x(R) {
    let y = R.uniforms, A = 0;
    for (let L = 0, D = y.length; L < D; L++) {
      let z = Array.isArray(y[L]) ? y[L] : [y[L]];
      for (let M = 0, S = z.length; M < S; M++) {
        let w = z[M], W = Array.isArray(w.value) ? w.value : [w.value];
        for (let V = 0, k = W.length; V < k; V++) {
          let J = W[V], H = _(J), Q = A % 16, X = Q % H.boundary, ie = Q + X;
          A += X, ie !== 0 && 16 - ie < H.storage && (A += 16 - ie), w.__data = new Float32Array(H.storage / Float32Array.BYTES_PER_ELEMENT), w.__offset = A, A += H.storage;
        }
      }
    }
    let I = A % 16;
    return I > 0 && (A += 16 - I), R.__size = A, R.__cache = {}, this;
  }
  function _(R) {
    let y = { boundary: 0, storage: 0 };
    return typeof R == "number" || typeof R == "boolean" ? (y.boundary = 4, y.storage = 4) : R.isVector2 ? (y.boundary = 8, y.storage = 8) : R.isVector3 || R.isColor ? (y.boundary = 16, y.storage = 12) : R.isVector4 ? (y.boundary = 16, y.storage = 16) : R.isMatrix3 ? (y.boundary = 48, y.storage = 48) : R.isMatrix4 ? (y.boundary = 64, y.storage = 64) : R.isTexture ? console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group.") : console.warn("THREE.WebGLRenderer: Unsupported uniform value type.", R), y;
  }
  function f(R) {
    let y = R.target;
    y.removeEventListener("dispose", f);
    let A = s.indexOf(y.__bindingPointIndex);
    s.splice(A, 1), e.deleteBuffer(a[y.id]), delete a[y.id], delete n[y.id];
  }
  function p() {
    for (let R in a) e.deleteBuffer(a[R]);
    s = [], a = {}, n = {};
  }
  return { bind: l, update: c, dispose: p };
}
var oh = class {
  constructor(e = {}) {
    let { canvas: t = xl(), context: i = null, depth: r = !0, stencil: a = !1, alpha: n = !1, antialias: s = !1, premultipliedAlpha: o = !0, preserveDrawingBuffer: l = !1, powerPreference: c = "default", failIfMajorPerformanceCaveat: u = !1, reversedDepthBuffer: h = !1 } = e;
    this.isWebGLRenderer = !0;
    let d;
    if (i !== null) {
      if (typeof WebGLRenderingContext < "u" && i instanceof WebGLRenderingContext) throw Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");
      d = i.getContextAttributes().alpha;
    } else d = n;
    let m = new Uint32Array(4), x = new Int32Array(4), _ = null, f = null, p = [], R = [];
    this.domElement = t, this.debug = { checkShaderErrors: !0, onShaderError: null }, this.autoClear = !0, this.autoClearColor = !0, this.autoClearDepth = !0, this.autoClearStencil = !0, this.sortObjects = !0, this.clippingPlanes = [], this.localClippingEnabled = !1, this.toneMapping = 0, this.toneMappingExposure = 1, this.transmissionResolutionScale = 1;
    let y = this, A = !1;
    this._outputColorSpace = Nt;
    let I = 0, L = 0, D = null, z = -1, M = null, S = new st(), w = new st(), W = null, V = new He(0), k = 0, J = t.width, H = t.height, Q = 1, X = null, ie = null, pe = new st(0, 0, J, H), Ue = new st(0, 0, J, H), Oe = !1, it = new Bs(), Xe = !1, j = !1, ne = new dt(), se = new F(), Se = new st(), Le = { background: null, fog: null, environment: null, overrideMaterial: null, isScene: !0 }, ge = !1;
    function qe() {
      return D === null ? Q : 1;
    }
    let b = i;
    function Ve(v, P) {
      return t.getContext(v, P);
    }
    try {
      let v = { alpha: !0, depth: r, stencil: a, antialias: s, premultipliedAlpha: o, preserveDrawingBuffer: l, powerPreference: c, failIfMajorPerformanceCaveat: u };
      if ("setAttribute" in t && t.setAttribute("data-engine", "three.js r180"), t.addEventListener("webglcontextlost", ue, !1), t.addEventListener("webglcontextrestored", ae, !1), t.addEventListener("webglcontextcreationerror", _e, !1), b === null) {
        let P = "webgl2";
        if (b = Ve(P, v), b === null) throw Ve(P) ? Error("Error creating WebGL context with your selected attributes.") : Error("Error creating WebGL context.");
      }
    } catch (v) {
      throw console.error("THREE.WebGLRenderer: " + v.message), v;
    }
    let ze, Ye, Me, Qe, Te, we, pt, ct, rt, E, g, U, q, Z, G, fe, re, xe, Ee, te, le, Re, be, ce;
    function Fe() {
      ze = new _c(b), ze.init(), Re = new Qu(b, ze), Ye = new uc(b, ze, e, Re), Me = new Ju(b, ze), Ye.reversedDepthBuffer && h && Me.buffers.depth.setReversed(!0), Qe = new yc(b), Te = new Bu(), we = new $u(b, ze, Me, Te, Ye, Re, Qe), pt = new dc(y), ct = new gc(y), rt = new nc(b), be = new lc(b, rt), E = new vc(b, rt, Qe, be), g = new Mc(b, E, rt, Qe), Ee = new Sc(b, Ye, we), fe = new hc(Te), U = new Fu(y, pt, ct, ze, Ye, be, fe), q = new nh(y, Te), Z = new ku(), G = new ju(ze), xe = new oc(y, pt, ct, Me, g, d, o), re = new Ku(y, g, Ye), ce = new sh(b, Qe, Ye, Me), te = new cc(b, ze, Qe), le = new xc(b, ze, Qe), Qe.programs = U.programs, y.capabilities = Ye, y.extensions = ze, y.properties = Te, y.renderLists = Z, y.shadowMap = re, y.state = Me, y.info = Qe;
    }
    Fe();
    let T = new rh(y, b);
    this.xr = T, this.getContext = function() {
      return b;
    }, this.getContextAttributes = function() {
      return b.getContextAttributes();
    }, this.forceContextLoss = function() {
      let v = ze.get("WEBGL_lose_context");
      v && v.loseContext();
    }, this.forceContextRestore = function() {
      let v = ze.get("WEBGL_lose_context");
      v && v.restoreContext();
    }, this.getPixelRatio = function() {
      return Q;
    }, this.setPixelRatio = function(v) {
      v !== void 0 && (Q = v, this.setSize(J, H, !1));
    }, this.getSize = function(v) {
      return v.set(J, H);
    }, this.setSize = function(v, P, O = !0) {
      if (T.isPresenting) {
        console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");
        return;
      }
      J = v, H = P, t.width = Math.floor(v * Q), t.height = Math.floor(P * Q), O === !0 && (t.style.width = v + "px", t.style.height = P + "px"), this.setViewport(0, 0, v, P);
    }, this.getDrawingBufferSize = function(v) {
      return v.set(J * Q, H * Q).floor();
    }, this.setDrawingBufferSize = function(v, P, O) {
      J = v, H = P, Q = O, t.width = Math.floor(v * O), t.height = Math.floor(P * O), this.setViewport(0, 0, v, P);
    }, this.getCurrentViewport = function(v) {
      return v.copy(S);
    }, this.getViewport = function(v) {
      return v.copy(pe);
    }, this.setViewport = function(v, P, O, B) {
      v.isVector4 ? pe.set(v.x, v.y, v.z, v.w) : pe.set(v, P, O, B), Me.viewport(S.copy(pe).multiplyScalar(Q).round());
    }, this.getScissor = function(v) {
      return v.copy(Ue);
    }, this.setScissor = function(v, P, O, B) {
      v.isVector4 ? Ue.set(v.x, v.y, v.z, v.w) : Ue.set(v, P, O, B), Me.scissor(w.copy(Ue).multiplyScalar(Q).round());
    }, this.getScissorTest = function() {
      return Oe;
    }, this.setScissorTest = function(v) {
      Me.setScissorTest(Oe = v);
    }, this.setOpaqueSort = function(v) {
      X = v;
    }, this.setTransparentSort = function(v) {
      ie = v;
    }, this.getClearColor = function(v) {
      return v.copy(xe.getClearColor());
    }, this.setClearColor = function() {
      xe.setClearColor(...arguments);
    }, this.getClearAlpha = function() {
      return xe.getClearAlpha();
    }, this.setClearAlpha = function() {
      xe.setClearAlpha(...arguments);
    }, this.clear = function(v = !0, P = !0, O = !0) {
      let B = 0;
      if (v) {
        let C = !1;
        if (D !== null) {
          let $ = D.texture.format;
          C = $ === 1033 || $ === 1031 || $ === 1029;
        }
        if (C) {
          let $ = D.texture.type, he = $ === 1009 || $ === 1014 || $ === 1012 || $ === 1020 || $ === 1017 || $ === 1018, de = xe.getClearColor(), me = xe.getClearAlpha(), Ce = de.r, De = de.g, Pe = de.b;
          he ? (m[0] = Ce, m[1] = De, m[2] = Pe, m[3] = me, b.clearBufferuiv(b.COLOR, 0, m)) : (x[0] = Ce, x[1] = De, x[2] = Pe, x[3] = me, b.clearBufferiv(b.COLOR, 0, x));
        } else B |= b.COLOR_BUFFER_BIT;
      }
      P && (B |= b.DEPTH_BUFFER_BIT), O && (B |= b.STENCIL_BUFFER_BIT, this.state.buffers.stencil.setMask(4294967295)), b.clear(B);
    }, this.clearColor = function() {
      this.clear(!0, !1, !1);
    }, this.clearDepth = function() {
      this.clear(!1, !0, !1);
    }, this.clearStencil = function() {
      this.clear(!1, !1, !0);
    }, this.dispose = function() {
      t.removeEventListener("webglcontextlost", ue, !1), t.removeEventListener("webglcontextrestored", ae, !1), t.removeEventListener("webglcontextcreationerror", _e, !1), xe.dispose(), Z.dispose(), G.dispose(), Te.dispose(), pt.dispose(), ct.dispose(), g.dispose(), be.dispose(), ce.dispose(), U.dispose(), T.dispose(), T.removeEventListener("sessionstart", kt), T.removeEventListener("sessionend", Ht), li.stop();
    };
    function ue(v) {
      v.preventDefault(), console.log("THREE.WebGLRenderer: Context Lost."), A = !0;
    }
    function ae() {
      console.log("THREE.WebGLRenderer: Context Restored."), A = !1;
      let v = Qe.autoReset, P = re.enabled, O = re.autoUpdate, B = re.needsUpdate, C = re.type;
      Fe(), Qe.autoReset = v, re.enabled = P, re.autoUpdate = O, re.needsUpdate = B, re.type = C;
    }
    function _e(v) {
      console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ", v.statusMessage);
    }
    function ee(v) {
      let P = v.target;
      P.removeEventListener("dispose", ee), K(P);
    }
    function K(v) {
      ve(v), Te.remove(v);
    }
    function ve(v) {
      let P = Te.get(v).programs;
      P !== void 0 && (P.forEach(function(O) {
        U.releaseProgram(O);
      }), v.isShaderMaterial && U.releaseShaderCache(v));
    }
    this.renderBufferDirect = function(v, P, O, B, C, $) {
      P === null && (P = Le);
      let he = C.isMesh && C.matrixWorld.determinant() < 0, de = ao(v, P, O, B, C);
      Me.setMaterial(B, he);
      let me = O.index, Ce = 1;
      if (B.wireframe === !0) {
        if (me = E.getWireframeAttribute(O), me === void 0) return;
        Ce = 2;
      }
      let De = O.drawRange, Pe = O.attributes.position, Ge = De.start * Ce, Ke = (De.start + De.count) * Ce;
      $ !== null && (Ge = Math.max(Ge, $.start * Ce), Ke = Math.min(Ke, ($.start + $.count) * Ce)), me === null ? Pe != null && (Ge = Math.max(Ge, 0), Ke = Math.min(Ke, Pe.count)) : (Ge = Math.max(Ge, 0), Ke = Math.min(Ke, me.count));
      let Je = Ke - Ge;
      if (Je < 0 || Je === 1 / 0) return;
      be.setup(C, B, de, O, me);
      let et, Ze = te;
      if (me !== null && (et = rt.get(me), Ze = le, Ze.setIndex(et)), C.isMesh) B.wireframe === !0 ? (Me.setLineWidth(B.wireframeLinewidth * qe()), Ze.setMode(b.LINES)) : Ze.setMode(b.TRIANGLES);
      else if (C.isLine) {
        let ye = B.linewidth;
        ye === void 0 && (ye = 1), Me.setLineWidth(ye * qe()), C.isLineSegments ? Ze.setMode(b.LINES) : C.isLineLoop ? Ze.setMode(b.LINE_LOOP) : Ze.setMode(b.LINE_STRIP);
      } else C.isPoints ? Ze.setMode(b.POINTS) : C.isSprite && Ze.setMode(b.TRIANGLES);
      if (C.isBatchedMesh) if (C._multiDrawInstances !== null) fr("THREE.WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."), Ze.renderMultiDrawInstances(C._multiDrawStarts, C._multiDrawCounts, C._multiDrawCount, C._multiDrawInstances);
      else if (ze.get("WEBGL_multi_draw")) Ze.renderMultiDraw(C._multiDrawStarts, C._multiDrawCounts, C._multiDrawCount);
      else {
        let ye = C._multiDrawStarts, ft = C._multiDrawCounts, vt = C._multiDrawCount, Pt = me ? rt.get(me).bytesPerElement : 1, Ri = Te.get(B).currentProgram.getUniforms();
        for (let St = 0; St < vt; St++) Ri.setValue(b, "_gl_DrawID", St), Ze.render(ye[St] / Pt, ft[St]);
      }
      else if (C.isInstancedMesh) Ze.renderInstances(Ge, Je, C.count);
      else if (O.isInstancedBufferGeometry) {
        let ye = O._maxInstanceCount === void 0 ? 1 / 0 : O._maxInstanceCount, ft = Math.min(O.instanceCount, ye);
        Ze.renderInstances(Ge, Je, ft);
      } else Ze.render(Ge, Je);
    };
    function Ae(v, P, O) {
      v.transparent === !0 && v.side === 2 && v.forceSinglePass === !1 ? (v.side = 1, v.needsUpdate = !0, Sr(v, P, O), v.side = 0, v.needsUpdate = !0, Sr(v, P, O), v.side = 2) : Sr(v, P, O);
    }
    this.compile = function(v, P, O = null) {
      O === null && (O = v), f = G.get(O), f.init(P), R.push(f), O.traverseVisible(function(C) {
        C.isLight && C.layers.test(P.layers) && (f.pushLight(C), C.castShadow && f.pushShadow(C));
      }), v !== O && v.traverseVisible(function(C) {
        C.isLight && C.layers.test(P.layers) && (f.pushLight(C), C.castShadow && f.pushShadow(C));
      }), f.setupLights();
      let B = /* @__PURE__ */ new Set();
      return v.traverse(function(C) {
        if (!(C.isMesh || C.isPoints || C.isLine || C.isSprite)) return;
        let $ = C.material;
        if ($) if (Array.isArray($)) for (let he = 0; he < $.length; he++) {
          let de = $[he];
          Ae(de, O, C), B.add(de);
        }
        else Ae($, O, C), B.add($);
      }), f = R.pop(), B;
    }, this.compileAsync = function(v, P, O = null) {
      let B = this.compile(v, P, O);
      return new Promise((C) => {
        function $() {
          if (B.forEach(function(he) {
            Te.get(he).currentProgram.isReady() && B.delete(he);
          }), B.size === 0) {
            C(v);
            return;
          }
          setTimeout($, 10);
        }
        ze.get("KHR_parallel_shader_compile") === null ? setTimeout($, 10) : $();
      });
    };
    let at = null;
    function je(v) {
      at && at(v);
    }
    function kt() {
      li.stop();
    }
    function Ht() {
      li.start();
    }
    let li = new Gs();
    li.setAnimationLoop(je), typeof self < "u" && li.setContext(self), this.setAnimationLoop = function(v) {
      at = v, T.setAnimationLoop(v), v === null ? li.stop() : li.start();
    }, T.addEventListener("sessionstart", kt), T.addEventListener("sessionend", Ht), this.render = function(v, P) {
      if (P !== void 0 && P.isCamera !== !0) {
        console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");
        return;
      }
      if (A === !0) return;
      if (v.matrixWorldAutoUpdate === !0 && v.updateMatrixWorld(), P.parent === null && P.matrixWorldAutoUpdate === !0 && P.updateMatrixWorld(), T.enabled === !0 && T.isPresenting === !0 && (T.cameraAutoUpdate === !0 && T.updateCamera(P), P = T.getCamera()), v.isScene === !0 && v.onBeforeRender(y, v, P, D), f = G.get(v, R.length), f.init(P), R.push(f), ne.multiplyMatrices(P.projectionMatrix, P.matrixWorldInverse), it.setFromProjectionMatrix(ne, Yi, P.reversedDepth), j = this.localClippingEnabled, Xe = fe.init(this.clippingPlanes, j), _ = Z.get(v, p.length), _.init(), p.push(_), T.enabled === !0 && T.isPresenting === !0) {
        let $ = y.xr.getDepthSensingMesh();
        $ !== null && sa($, P, -1 / 0, y.sortObjects);
      }
      sa(v, P, 0, y.sortObjects), _.finish(), y.sortObjects === !0 && _.sort(X, ie), ge = T.enabled === !1 || T.isPresenting === !1 || T.hasDepthSensing() === !1, ge && xe.addToRenderList(_, v), this.info.render.frame++, Xe === !0 && fe.beginShadows();
      let O = f.state.shadowsArray;
      re.render(O, v, P), Xe === !0 && fe.endShadows(), this.info.autoReset === !0 && this.info.reset();
      let B = _.opaque, C = _.transmissive;
      if (f.setupLights(), P.isArrayCamera) {
        let $ = P.cameras;
        if (C.length > 0) for (let he = 0, de = $.length; he < de; he++) {
          let me = $[he];
          hn(B, C, v, me);
        }
        ge && xe.render(v);
        for (let he = 0, de = $.length; he < de; he++) {
          let me = $[he];
          un(_, v, me, me.viewport);
        }
      } else C.length > 0 && hn(B, C, v, P), ge && xe.render(v), un(_, v, P);
      D !== null && L === 0 && (we.updateMultisampleRenderTarget(D), we.updateRenderTargetMipmap(D)), v.isScene === !0 && v.onAfterRender(y, v, P), be.resetDefaultState(), z = -1, M = null, R.pop(), R.length > 0 ? (f = R[R.length - 1], Xe === !0 && fe.setGlobalState(y.clippingPlanes, f.state.camera)) : f = null, p.pop(), _ = p.length > 0 ? p[p.length - 1] : null;
    };
    function sa(v, P, O, B) {
      if (v.visible === !1) return;
      if (v.layers.test(P.layers)) {
        if (v.isGroup) O = v.renderOrder;
        else if (v.isLOD) v.autoUpdate === !0 && v.update(P);
        else if (v.isLight) f.pushLight(v), v.castShadow && f.pushShadow(v);
        else if (v.isSprite) {
          if (!v.frustumCulled || it.intersectsSprite(v)) {
            B && Se.setFromMatrixPosition(v.matrixWorld).applyMatrix4(ne);
            let $ = g.update(v), he = v.material;
            he.visible && _.push(v, $, he, O, Se.z, null);
          }
        } else if ((v.isMesh || v.isLine || v.isPoints) && (!v.frustumCulled || it.intersectsObject(v))) {
          let $ = g.update(v), he = v.material;
          if (B && (v.boundingSphere === void 0 ? ($.boundingSphere === null && $.computeBoundingSphere(), Se.copy($.boundingSphere.center)) : (v.boundingSphere === null && v.computeBoundingSphere(), Se.copy(v.boundingSphere.center)), Se.applyMatrix4(v.matrixWorld).applyMatrix4(ne)), Array.isArray(he)) {
            let de = $.groups;
            for (let me = 0, Ce = de.length; me < Ce; me++) {
              let De = de[me], Pe = he[De.materialIndex];
              Pe && Pe.visible && _.push(v, $, Pe, O, Se.z, De);
            }
          } else he.visible && _.push(v, $, he, O, Se.z, null);
        }
      }
      let C = v.children;
      for (let $ = 0, he = C.length; $ < he; $++) sa(C[$], P, O, B);
    }
    function un(v, P, O, B) {
      let C = v.opaque, $ = v.transmissive, he = v.transparent;
      f.setupLightsView(O), Xe === !0 && fe.setGlobalState(y.clippingPlanes, O), B && Me.viewport(S.copy(B)), C.length > 0 && yr(C, P, O), $.length > 0 && yr($, P, O), he.length > 0 && yr(he, P, O), Me.buffers.depth.setTest(!0), Me.buffers.depth.setMask(!0), Me.buffers.color.setMask(!0), Me.setPolygonOffset(!1);
    }
    function hn(v, P, O, B) {
      if ((O.isScene === !0 ? O.overrideMaterial : null) !== null) return;
      f.state.transmissionRenderTarget[B.id] === void 0 && (f.state.transmissionRenderTarget[B.id] = new ai(1, 1, { generateMipmaps: !0, type: ze.has("EXT_color_buffer_half_float") || ze.has("EXT_color_buffer_float") ? ia : dr, minFilter: en, samples: 4, stencilBuffer: a, resolveDepthBuffer: !1, resolveStencilBuffer: !1, colorSpace: We.workingColorSpace }));
      let C = f.state.transmissionRenderTarget[B.id], $ = B.viewport || S;
      C.setSize($.z * y.transmissionResolutionScale, $.w * y.transmissionResolutionScale);
      let he = y.getRenderTarget(), de = y.getActiveCubeFace(), me = y.getActiveMipmapLevel();
      y.setRenderTarget(C), y.getClearColor(V), k = y.getClearAlpha(), k < 1 && y.setClearColor(16777215, 0.5), y.clear(), ge && xe.render(O);
      let Ce = y.toneMapping;
      y.toneMapping = 0;
      let De = B.viewport;
      if (B.viewport !== void 0 && (B.viewport = void 0), f.setupLightsView(B), Xe === !0 && fe.setGlobalState(y.clippingPlanes, B), yr(v, O, B), we.updateMultisampleRenderTarget(C), we.updateRenderTargetMipmap(C), ze.has("WEBGL_multisampled_render_to_texture") === !1) {
        let Pe = !1;
        for (let Ge = 0, Ke = P.length; Ge < Ke; Ge++) {
          let Je = P[Ge], et = Je.object, Ze = Je.geometry, ye = Je.material, ft = Je.group;
          if (ye.side === 2 && et.layers.test(B.layers)) {
            let vt = ye.side;
            ye.side = 1, ye.needsUpdate = !0, dn(et, O, B, Ze, ye, ft), ye.side = vt, ye.needsUpdate = !0, Pe = !0;
          }
        }
        Pe === !0 && (we.updateMultisampleRenderTarget(C), we.updateRenderTargetMipmap(C));
      }
      y.setRenderTarget(he, de, me), y.setClearColor(V, k), De !== void 0 && (B.viewport = De), y.toneMapping = Ce;
    }
    function yr(v, P, O) {
      let B = P.isScene === !0 ? P.overrideMaterial : null;
      for (let C = 0, $ = v.length; C < $; C++) {
        let he = v[C], de = he.object, me = he.geometry, Ce = he.group, De = he.material;
        De.allowOverride === !0 && B !== null && (De = B), de.layers.test(O.layers) && dn(de, P, O, me, De, Ce);
      }
    }
    function dn(v, P, O, B, C, $) {
      v.onBeforeRender(y, P, O, B, C, $), v.modelViewMatrix.multiplyMatrices(O.matrixWorldInverse, v.matrixWorld), v.normalMatrix.getNormalMatrix(v.modelViewMatrix), C.onBeforeRender(y, P, O, B, v, $), C.transparent === !0 && C.side === 2 && C.forceSinglePass === !1 ? (C.side = 1, C.needsUpdate = !0, y.renderBufferDirect(O, P, B, C, v, $), C.side = 0, C.needsUpdate = !0, y.renderBufferDirect(O, P, B, C, v, $), C.side = 2) : y.renderBufferDirect(O, P, B, C, v, $), v.onAfterRender(y, P, O, B, C, $);
    }
    function Sr(v, P, O) {
      P.isScene !== !0 && (P = Le);
      let B = Te.get(v), C = f.state.lights, $ = f.state.shadowsArray, he = C.state.version, de = U.getParameters(v, C.state, $, P, O), me = U.getProgramCacheKey(de), Ce = B.programs;
      B.environment = v.isMeshStandardMaterial ? P.environment : null, B.fog = P.fog, B.envMap = (v.isMeshStandardMaterial ? ct : pt).get(v.envMap || B.environment), B.envMapRotation = B.environment !== null && v.envMap === null ? P.environmentRotation : v.envMapRotation, Ce === void 0 && (v.addEventListener("dispose", ee), Ce = /* @__PURE__ */ new Map(), B.programs = Ce);
      let De = Ce.get(me);
      if (De !== void 0) {
        if (B.currentProgram === De && B.lightsStateVersion === he) return fn(v, de), De;
      } else de.uniforms = U.getUniforms(v), v.onBeforeCompile(de, y), De = U.acquireProgram(de, me), Ce.set(me, De), B.uniforms = de.uniforms;
      let Pe = B.uniforms;
      return (!v.isShaderMaterial && !v.isRawShaderMaterial || v.clipping === !0) && (Pe.clippingPlanes = fe.uniform), fn(v, de), B.needsLights = so(v), B.lightsStateVersion = he, B.needsLights && (Pe.ambientLightColor.value = C.state.ambient, Pe.lightProbe.value = C.state.probe, Pe.directionalLights.value = C.state.directional, Pe.directionalLightShadows.value = C.state.directionalShadow, Pe.spotLights.value = C.state.spot, Pe.spotLightShadows.value = C.state.spotShadow, Pe.rectAreaLights.value = C.state.rectArea, Pe.ltc_1.value = C.state.rectAreaLTC1, Pe.ltc_2.value = C.state.rectAreaLTC2, Pe.pointLights.value = C.state.point, Pe.pointLightShadows.value = C.state.pointShadow, Pe.hemisphereLights.value = C.state.hemi, Pe.directionalShadowMap.value = C.state.directionalShadowMap, Pe.directionalShadowMatrix.value = C.state.directionalShadowMatrix, Pe.spotShadowMap.value = C.state.spotShadowMap, Pe.spotLightMatrix.value = C.state.spotLightMatrix, Pe.spotLightMap.value = C.state.spotLightMap, Pe.pointShadowMap.value = C.state.pointShadowMap, Pe.pointShadowMatrix.value = C.state.pointShadowMatrix), B.currentProgram = De, B.uniformsList = null, De;
    }
    function pn(v) {
      if (v.uniformsList === null) {
        let P = v.currentProgram.getUniforms();
        v.uniformsList = Zr.seqWithValue(P.seq, v.uniforms);
      }
      return v.uniformsList;
    }
    function fn(v, P) {
      let O = Te.get(v);
      O.outputColorSpace = P.outputColorSpace, O.batching = P.batching, O.batchingColor = P.batchingColor, O.instancing = P.instancing, O.instancingColor = P.instancingColor, O.instancingMorph = P.instancingMorph, O.skinning = P.skinning, O.morphTargets = P.morphTargets, O.morphNormals = P.morphNormals, O.morphColors = P.morphColors, O.morphTargetsCount = P.morphTargetsCount, O.numClippingPlanes = P.numClippingPlanes, O.numIntersection = P.numClipIntersection, O.vertexAlphas = P.vertexAlphas, O.vertexTangents = P.vertexTangents, O.toneMapping = P.toneMapping;
    }
    function ao(v, P, O, B, C) {
      P.isScene !== !0 && (P = Le), we.resetTextureUnits();
      let $ = P.fog, he = B.isMeshStandardMaterial ? P.environment : null, de = D === null ? y.outputColorSpace : D.isXRRenderTarget === !0 ? D.texture.colorSpace : pr, me = (B.isMeshStandardMaterial ? ct : pt).get(B.envMap || he), Ce = B.vertexColors === !0 && !!O.attributes.color && O.attributes.color.itemSize === 4, De = !!O.attributes.tangent && (!!B.normalMap || B.anisotropy > 0), Pe = !!O.morphAttributes.position, Ge = !!O.morphAttributes.normal, Ke = !!O.morphAttributes.color, Je = 0;
      B.toneMapped && (D === null || D.isXRRenderTarget === !0) && (Je = y.toneMapping);
      let et = O.morphAttributes.position || O.morphAttributes.normal || O.morphAttributes.color, Ze = et === void 0 ? 0 : et.length, ye = Te.get(B), ft = f.state.lights;
      if (Xe === !0 && (j === !0 || v !== M)) {
        let mt = v === M && B.id === z;
        fe.setState(B, v, mt);
      }
      let vt = !1;
      B.version === ye.__version ? ye.needsLights && ye.lightsStateVersion !== ft.state.version ? vt = !0 : ye.outputColorSpace === de ? C.isBatchedMesh && ye.batching === !1 || !C.isBatchedMesh && ye.batching === !0 || C.isBatchedMesh && ye.batchingColor === !0 && C.colorTexture === null || C.isBatchedMesh && ye.batchingColor === !1 && C.colorTexture !== null || C.isInstancedMesh && ye.instancing === !1 || !C.isInstancedMesh && ye.instancing === !0 || C.isSkinnedMesh && ye.skinning === !1 || !C.isSkinnedMesh && ye.skinning === !0 || C.isInstancedMesh && ye.instancingColor === !0 && C.instanceColor === null || C.isInstancedMesh && ye.instancingColor === !1 && C.instanceColor !== null || C.isInstancedMesh && ye.instancingMorph === !0 && C.morphTexture === null || C.isInstancedMesh && ye.instancingMorph === !1 && C.morphTexture !== null ? vt = !0 : ye.envMap === me ? B.fog === !0 && ye.fog !== $ || ye.numClippingPlanes !== void 0 && (ye.numClippingPlanes !== fe.numPlanes || ye.numIntersection !== fe.numIntersection) ? vt = !0 : ye.vertexAlphas === Ce && ye.vertexTangents === De && ye.morphTargets === Pe && ye.morphNormals === Ge && ye.morphColors === Ke && ye.toneMapping === Je ? ye.morphTargetsCount !== Ze && (vt = !0) : vt = !0 : vt = !0 : vt = !0 : (vt = !0, ye.__version = B.version);
      let Pt = ye.currentProgram;
      vt === !0 && (Pt = Sr(B, P, C));
      let Ri = !1, St = !1, $i = !1, tt = Pt.getUniforms(), wt = ye.uniforms;
      if (Me.useProgram(Pt.program) && (Ri = !0, St = !0, $i = !0), B.id !== z && (z = B.id, St = !0), Ri || M !== v) {
        Me.buffers.depth.getReversed() && v.reversedDepth !== !0 && (v._reversedDepth = !0, v.updateProjectionMatrix()), tt.setValue(b, "projectionMatrix", v.projectionMatrix), tt.setValue(b, "viewMatrix", v.matrixWorldInverse);
        let mt = tt.map.cameraPosition;
        mt !== void 0 && mt.setValue(b, se.setFromMatrixPosition(v.matrixWorld)), Ye.logarithmicDepthBuffer && tt.setValue(b, "logDepthBufFC", 2 / (Math.log(v.far + 1) / Math.LN2)), (B.isMeshPhongMaterial || B.isMeshToonMaterial || B.isMeshLambertMaterial || B.isMeshBasicMaterial || B.isMeshStandardMaterial || B.isShaderMaterial) && tt.setValue(b, "isOrthographic", v.isOrthographicCamera === !0), M !== v && (M = v, St = !0, $i = !0);
      }
      if (C.isSkinnedMesh) {
        tt.setOptional(b, C, "bindMatrix"), tt.setOptional(b, C, "bindMatrixInverse");
        let mt = C.skeleton;
        mt && (mt.boneTexture === null && mt.computeBoneTexture(), tt.setValue(b, "boneTexture", mt.boneTexture, we));
      }
      C.isBatchedMesh && (tt.setOptional(b, C, "batchingTexture"), tt.setValue(b, "batchingTexture", C._matricesTexture, we), tt.setOptional(b, C, "batchingIdTexture"), tt.setValue(b, "batchingIdTexture", C._indirectTexture, we), tt.setOptional(b, C, "batchingColorTexture"), C._colorsTexture !== null && tt.setValue(b, "batchingColorTexture", C._colorsTexture, we));
      let At = O.morphAttributes;
      if ((At.position !== void 0 || At.normal !== void 0 || At.color !== void 0) && Ee.update(C, O, Pt), (St || ye.receiveShadow !== C.receiveShadow) && (ye.receiveShadow = C.receiveShadow, tt.setValue(b, "receiveShadow", C.receiveShadow)), B.isMeshGouraudMaterial && B.envMap !== null && (wt.envMap.value = me, wt.flipEnvMap.value = me.isCubeTexture && me.isRenderTargetTexture === !1 ? -1 : 1), B.isMeshStandardMaterial && B.envMap === null && P.environment !== null && (wt.envMapIntensity.value = P.environmentIntensity), St && (tt.setValue(b, "toneMappingExposure", y.toneMappingExposure), ye.needsLights && no(wt, $i), $ && B.fog === !0 && q.refreshFogUniforms(wt, $), q.refreshMaterialUniforms(wt, B, Q, H, f.state.transmissionRenderTarget[v.id]), Zr.upload(b, pn(ye), wt, we)), B.isShaderMaterial && B.uniformsNeedUpdate === !0 && (Zr.upload(b, pn(ye), wt, we), B.uniformsNeedUpdate = !1), B.isSpriteMaterial && tt.setValue(b, "center", C.center), tt.setValue(b, "modelViewMatrix", C.modelViewMatrix), tt.setValue(b, "normalMatrix", C.normalMatrix), tt.setValue(b, "modelMatrix", C.matrixWorld), B.isShaderMaterial || B.isRawShaderMaterial) {
        let mt = B.uniformsGroups;
        for (let Dt = 0, oa = mt.length; Dt < oa; Dt++) {
          let ci = mt[Dt];
          ce.update(ci, Pt), ce.bind(ci, Pt);
        }
      }
      return Pt;
    }
    function no(v, P) {
      v.ambientLightColor.needsUpdate = P, v.lightProbe.needsUpdate = P, v.directionalLights.needsUpdate = P, v.directionalLightShadows.needsUpdate = P, v.pointLights.needsUpdate = P, v.pointLightShadows.needsUpdate = P, v.spotLights.needsUpdate = P, v.spotLightShadows.needsUpdate = P, v.rectAreaLights.needsUpdate = P, v.hemisphereLights.needsUpdate = P;
    }
    function so(v) {
      return v.isMeshLambertMaterial || v.isMeshToonMaterial || v.isMeshPhongMaterial || v.isMeshStandardMaterial || v.isShadowMaterial || v.isShaderMaterial && v.lights === !0;
    }
    this.getActiveCubeFace = function() {
      return I;
    }, this.getActiveMipmapLevel = function() {
      return L;
    }, this.getRenderTarget = function() {
      return D;
    }, this.setRenderTargetTextures = function(v, P, O) {
      let B = Te.get(v);
      B.__autoAllocateDepthBuffer = v.resolveDepthBuffer === !1, B.__autoAllocateDepthBuffer === !1 && (B.__useRenderToTexture = !1), Te.get(v.texture).__webglTexture = P, Te.get(v.depthTexture).__webglTexture = B.__autoAllocateDepthBuffer ? void 0 : O, B.__hasExternalTextures = !0;
    }, this.setRenderTargetFramebuffer = function(v, P) {
      let O = Te.get(v);
      O.__webglFramebuffer = P, O.__useDefaultFramebuffer = P === void 0;
    };
    let oo = b.createFramebuffer();
    this.setRenderTarget = function(v, P = 0, O = 0) {
      D = v, I = P, L = O;
      let B = !0, C = null, $ = !1, he = !1;
      if (v) {
        let de = Te.get(v);
        if (de.__useDefaultFramebuffer !== void 0) Me.bindFramebuffer(b.FRAMEBUFFER, null), B = !1;
        else if (de.__webglFramebuffer === void 0) we.setupRenderTarget(v);
        else if (de.__hasExternalTextures) we.rebindTextures(v, Te.get(v.texture).__webglTexture, Te.get(v.depthTexture).__webglTexture);
        else if (v.depthBuffer) {
          let De = v.depthTexture;
          if (de.__boundDepthTexture !== De) {
            if (De !== null && Te.has(De) && (v.width !== De.image.width || v.height !== De.image.height)) throw Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");
            we.setupDepthRenderbuffer(v);
          }
        }
        let me = v.texture;
        (me.isData3DTexture || me.isDataArrayTexture || me.isCompressedArrayTexture) && (he = !0);
        let Ce = Te.get(v).__webglFramebuffer;
        v.isWebGLCubeRenderTarget ? (C = Array.isArray(Ce[P]) ? Ce[P][O] : Ce[P], $ = !0) : C = v.samples > 0 && we.useMultisampledRTT(v) === !1 ? Te.get(v).__webglMultisampledFramebuffer : Array.isArray(Ce) ? Ce[O] : Ce, S.copy(v.viewport), w.copy(v.scissor), W = v.scissorTest;
      } else S.copy(pe).multiplyScalar(Q).floor(), w.copy(Ue).multiplyScalar(Q).floor(), W = Oe;
      if (O !== 0 && (C = oo), Me.bindFramebuffer(b.FRAMEBUFFER, C) && B && Me.drawBuffers(v, C), Me.viewport(S), Me.scissor(w), Me.setScissorTest(W), $) {
        let de = Te.get(v.texture);
        b.framebufferTexture2D(b.FRAMEBUFFER, b.COLOR_ATTACHMENT0, b.TEXTURE_CUBE_MAP_POSITIVE_X + P, de.__webglTexture, O);
      } else if (he) {
        let de = P;
        for (let me = 0; me < v.textures.length; me++) {
          let Ce = Te.get(v.textures[me]);
          b.framebufferTextureLayer(b.FRAMEBUFFER, b.COLOR_ATTACHMENT0 + me, Ce.__webglTexture, O, de);
        }
      } else if (v !== null && O !== 0) {
        let de = Te.get(v.texture);
        b.framebufferTexture2D(b.FRAMEBUFFER, b.COLOR_ATTACHMENT0, b.TEXTURE_2D, de.__webglTexture, O);
      }
      z = -1;
    }, this.readRenderTargetPixels = function(v, P, O, B, C, $, he, de = 0) {
      if (!(v && v.isWebGLRenderTarget)) {
        console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");
        return;
      }
      let me = Te.get(v).__webglFramebuffer;
      if (v.isWebGLCubeRenderTarget && he !== void 0 && (me = me[he]), me) {
        Me.bindFramebuffer(b.FRAMEBUFFER, me);
        try {
          let Ce = v.textures[de], De = Ce.format, Pe = Ce.type;
          if (!Ye.textureFormatReadable(De)) {
            console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");
            return;
          }
          if (!Ye.textureTypeReadable(Pe)) {
            console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");
            return;
          }
          P >= 0 && P <= v.width - B && O >= 0 && O <= v.height - C && (v.textures.length > 1 && b.readBuffer(b.COLOR_ATTACHMENT0 + de), b.readPixels(P, O, B, C, Re.convert(De), Re.convert(Pe), $));
        } finally {
          let Ce = D === null ? null : Te.get(D).__webglFramebuffer;
          Me.bindFramebuffer(b.FRAMEBUFFER, Ce);
        }
      }
    }, this.readRenderTargetPixelsAsync = async function(v, P, O, B, C, $, he, de = 0) {
      if (!(v && v.isWebGLRenderTarget)) throw Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");
      let me = Te.get(v).__webglFramebuffer;
      if (v.isWebGLCubeRenderTarget && he !== void 0 && (me = me[he]), me) if (P >= 0 && P <= v.width - B && O >= 0 && O <= v.height - C) {
        Me.bindFramebuffer(b.FRAMEBUFFER, me);
        let Ce = v.textures[de], De = Ce.format, Pe = Ce.type;
        if (!Ye.textureFormatReadable(De)) throw Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");
        if (!Ye.textureTypeReadable(Pe)) throw Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");
        let Ge = b.createBuffer();
        b.bindBuffer(b.PIXEL_PACK_BUFFER, Ge), b.bufferData(b.PIXEL_PACK_BUFFER, $.byteLength, b.STREAM_READ), v.textures.length > 1 && b.readBuffer(b.COLOR_ATTACHMENT0 + de), b.readPixels(P, O, B, C, Re.convert(De), Re.convert(Pe), 0);
        let Ke = D === null ? null : Te.get(D).__webglFramebuffer;
        Me.bindFramebuffer(b.FRAMEBUFFER, Ke);
        let Je = b.fenceSync(b.SYNC_GPU_COMMANDS_COMPLETE, 0);
        return b.flush(), await yl(b, Je, 4), b.bindBuffer(b.PIXEL_PACK_BUFFER, Ge), b.getBufferSubData(b.PIXEL_PACK_BUFFER, 0, $), b.deleteBuffer(Ge), b.deleteSync(Je), $;
      } else throw Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.");
    }, this.copyFramebufferToTexture = function(v, P = null, O = 0) {
      let B = 2 ** -O, C = Math.floor(v.image.width * B), $ = Math.floor(v.image.height * B), he = P === null ? 0 : P.x, de = P === null ? 0 : P.y;
      we.setTexture2D(v, 0), b.copyTexSubImage2D(b.TEXTURE_2D, O, 0, 0, he, de, C, $), Me.unbindTexture();
    };
    let lo = b.createFramebuffer(), co = b.createFramebuffer();
    this.copyTextureToTexture = function(v, P, O = null, B = null, C = 0, $ = null) {
      $ === null && (C === 0 ? $ = 0 : (fr("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."), $ = C, C = 0));
      let he, de, me, Ce, De, Pe, Ge, Ke, Je, et = v.isCompressedTexture ? v.mipmaps[$] : v.image;
      if (O !== null) he = O.max.x - O.min.x, de = O.max.y - O.min.y, me = O.isBox3 ? O.max.z - O.min.z : 1, Ce = O.min.x, De = O.min.y, Pe = O.isBox3 ? O.min.z : 0;
      else {
        let At = 2 ** -C;
        he = Math.floor(et.width * At), de = Math.floor(et.height * At), me = v.isDataArrayTexture ? et.depth : v.isData3DTexture ? Math.floor(et.depth * At) : 1, Ce = 0, De = 0, Pe = 0;
      }
      B === null ? (Ge = 0, Ke = 0, Je = 0) : (Ge = B.x, Ke = B.y, Je = B.z);
      let Ze = Re.convert(P.format), ye = Re.convert(P.type), ft;
      P.isData3DTexture ? (we.setTexture3D(P, 0), ft = b.TEXTURE_3D) : P.isDataArrayTexture || P.isCompressedArrayTexture ? (we.setTexture2DArray(P, 0), ft = b.TEXTURE_2D_ARRAY) : (we.setTexture2D(P, 0), ft = b.TEXTURE_2D), b.pixelStorei(b.UNPACK_FLIP_Y_WEBGL, P.flipY), b.pixelStorei(b.UNPACK_PREMULTIPLY_ALPHA_WEBGL, P.premultiplyAlpha), b.pixelStorei(b.UNPACK_ALIGNMENT, P.unpackAlignment);
      let vt = b.getParameter(b.UNPACK_ROW_LENGTH), Pt = b.getParameter(b.UNPACK_IMAGE_HEIGHT), Ri = b.getParameter(b.UNPACK_SKIP_PIXELS), St = b.getParameter(b.UNPACK_SKIP_ROWS), $i = b.getParameter(b.UNPACK_SKIP_IMAGES);
      b.pixelStorei(b.UNPACK_ROW_LENGTH, et.width), b.pixelStorei(b.UNPACK_IMAGE_HEIGHT, et.height), b.pixelStorei(b.UNPACK_SKIP_PIXELS, Ce), b.pixelStorei(b.UNPACK_SKIP_ROWS, De), b.pixelStorei(b.UNPACK_SKIP_IMAGES, Pe);
      let tt = v.isDataArrayTexture || v.isData3DTexture, wt = P.isDataArrayTexture || P.isData3DTexture;
      if (v.isDepthTexture) {
        let At = Te.get(v), mt = Te.get(P), Dt = Te.get(At.__renderTarget), oa = Te.get(mt.__renderTarget);
        Me.bindFramebuffer(b.READ_FRAMEBUFFER, Dt.__webglFramebuffer), Me.bindFramebuffer(b.DRAW_FRAMEBUFFER, oa.__webglFramebuffer);
        for (let ci = 0; ci < me; ci++) tt && (b.framebufferTextureLayer(b.READ_FRAMEBUFFER, b.COLOR_ATTACHMENT0, Te.get(v).__webglTexture, C, Pe + ci), b.framebufferTextureLayer(b.DRAW_FRAMEBUFFER, b.COLOR_ATTACHMENT0, Te.get(P).__webglTexture, $, Je + ci)), b.blitFramebuffer(Ce, De, he, de, Ge, Ke, he, de, b.DEPTH_BUFFER_BIT, b.NEAREST);
        Me.bindFramebuffer(b.READ_FRAMEBUFFER, null), Me.bindFramebuffer(b.DRAW_FRAMEBUFFER, null);
      } else if (C !== 0 || v.isRenderTargetTexture || Te.has(v)) {
        let At = Te.get(v), mt = Te.get(P);
        Me.bindFramebuffer(b.READ_FRAMEBUFFER, lo), Me.bindFramebuffer(b.DRAW_FRAMEBUFFER, co);
        for (let Dt = 0; Dt < me; Dt++) tt ? b.framebufferTextureLayer(b.READ_FRAMEBUFFER, b.COLOR_ATTACHMENT0, At.__webglTexture, C, Pe + Dt) : b.framebufferTexture2D(b.READ_FRAMEBUFFER, b.COLOR_ATTACHMENT0, b.TEXTURE_2D, At.__webglTexture, C), wt ? b.framebufferTextureLayer(b.DRAW_FRAMEBUFFER, b.COLOR_ATTACHMENT0, mt.__webglTexture, $, Je + Dt) : b.framebufferTexture2D(b.DRAW_FRAMEBUFFER, b.COLOR_ATTACHMENT0, b.TEXTURE_2D, mt.__webglTexture, $), C === 0 ? wt ? b.copyTexSubImage3D(ft, $, Ge, Ke, Je + Dt, Ce, De, he, de) : b.copyTexSubImage2D(ft, $, Ge, Ke, Ce, De, he, de) : b.blitFramebuffer(Ce, De, he, de, Ge, Ke, he, de, b.COLOR_BUFFER_BIT, b.NEAREST);
        Me.bindFramebuffer(b.READ_FRAMEBUFFER, null), Me.bindFramebuffer(b.DRAW_FRAMEBUFFER, null);
      } else wt ? v.isDataTexture || v.isData3DTexture ? b.texSubImage3D(ft, $, Ge, Ke, Je, he, de, me, Ze, ye, et.data) : P.isCompressedArrayTexture ? b.compressedTexSubImage3D(ft, $, Ge, Ke, Je, he, de, me, Ze, et.data) : b.texSubImage3D(ft, $, Ge, Ke, Je, he, de, me, Ze, ye, et) : v.isDataTexture ? b.texSubImage2D(b.TEXTURE_2D, $, Ge, Ke, he, de, Ze, ye, et.data) : v.isCompressedTexture ? b.compressedTexSubImage2D(b.TEXTURE_2D, $, Ge, Ke, et.width, et.height, Ze, et.data) : b.texSubImage2D(b.TEXTURE_2D, $, Ge, Ke, he, de, Ze, ye, et);
      b.pixelStorei(b.UNPACK_ROW_LENGTH, vt), b.pixelStorei(b.UNPACK_IMAGE_HEIGHT, Pt), b.pixelStorei(b.UNPACK_SKIP_PIXELS, Ri), b.pixelStorei(b.UNPACK_SKIP_ROWS, St), b.pixelStorei(b.UNPACK_SKIP_IMAGES, $i), $ === 0 && P.generateMipmaps && b.generateMipmap(ft), Me.unbindTexture();
    }, this.initRenderTarget = function(v) {
      Te.get(v).__webglFramebuffer === void 0 && we.setupRenderTarget(v);
    }, this.initTexture = function(v) {
      v.isCubeTexture ? we.setTextureCube(v, 0) : v.isData3DTexture ? we.setTexture3D(v, 0) : v.isDataArrayTexture || v.isCompressedArrayTexture ? we.setTexture2DArray(v, 0) : we.setTexture2D(v, 0), Me.unbindTexture();
    }, this.resetState = function() {
      I = 0, L = 0, D = null, Me.reset(), be.reset();
    }, typeof __THREE_DEVTOOLS__ < "u" && __THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe", { detail: this }));
  }
  get coordinateSystem() {
    return Yi;
  }
  get outputColorSpace() {
    return this._outputColorSpace;
  }
  set outputColorSpace(e) {
    this._outputColorSpace = e;
    let t = this.getContext();
    t.drawingBufferColorSpace = We._getDrawingBufferColorSpace(e), t.unpackColorSpace = We._getUnpackColorSpace();
  }
};
function lh(e) {
  if (!(typeof window > "u")) {
    var t = document.createElement("style");
    return t.setAttribute("type", "text/css"), t.innerHTML = e, document.head.appendChild(t), e;
  }
}
function ji(e, t) {
  var i = e.__state.conversionName.toString(), r = Math.round(e.r), a = Math.round(e.g), n = Math.round(e.b), s = e.a, o = Math.round(e.h), l = e.s.toFixed(1), c = e.v.toFixed(1);
  if (t || i === "THREE_CHAR_HEX" || i === "SIX_CHAR_HEX") {
    for (var u = e.hex.toString(16); u.length < 6; ) u = "0" + u;
    return "#" + u;
  } else {
    if (i === "CSS_RGB") return "rgb(" + r + "," + a + "," + n + ")";
    if (i === "CSS_RGBA") return "rgba(" + r + "," + a + "," + n + "," + s + ")";
    if (i === "HEX") return "0x" + e.hex.toString(16);
    if (i === "RGB_ARRAY") return "[" + r + "," + a + "," + n + "]";
    if (i === "RGBA_ARRAY") return "[" + r + "," + a + "," + n + "," + s + "]";
    if (i === "RGB_OBJ") return "{r:" + r + ",g:" + a + ",b:" + n + "}";
    if (i === "RGBA_OBJ") return "{r:" + r + ",g:" + a + ",b:" + n + ",a:" + s + "}";
    if (i === "HSV_OBJ") return "{h:" + o + ",s:" + l + ",v:" + c + "}";
    if (i === "HSVA_OBJ") return "{h:" + o + ",s:" + l + ",v:" + c + ",a:" + s + "}";
  }
  return "unknown format";
}
var os = Array.prototype.forEach, nr = Array.prototype.slice, Y = { BREAK: {}, extend: function(e) {
  return this.each(nr.call(arguments, 1), function(t) {
    (this.isObject(t) ? Object.keys(t) : []).forEach((function(i) {
      this.isUndefined(t[i]) || (e[i] = t[i]);
    }).bind(this));
  }, this), e;
}, defaults: function(e) {
  return this.each(nr.call(arguments, 1), function(t) {
    (this.isObject(t) ? Object.keys(t) : []).forEach((function(i) {
      this.isUndefined(e[i]) && (e[i] = t[i]);
    }).bind(this));
  }, this), e;
}, compose: function() {
  var e = nr.call(arguments);
  return function() {
    for (var t = nr.call(arguments), i = e.length - 1; i >= 0; i--) t = [e[i].apply(this, t)];
    return t[0];
  };
}, each: function(e, t, i) {
  if (e) {
    if (os && e.forEach && e.forEach === os) e.forEach(t, i);
    else if (e.length === e.length + 0) {
      var r = void 0, a = void 0;
      for (r = 0, a = e.length; r < a; r++) if (r in e && t.call(i, e[r], r) === this.BREAK) return;
    } else for (var n in e) if (t.call(i, e[n], n) === this.BREAK) return;
  }
}, defer: function(e) {
  setTimeout(e, 0);
}, debounce: function(e, t, i) {
  var r = void 0;
  return function() {
    var a = this, n = arguments;
    function s() {
      r = null, i || e.apply(a, n);
    }
    var o = i || !r;
    clearTimeout(r), r = setTimeout(s, t), o && e.apply(a, n);
  };
}, toArray: function(e) {
  return e.toArray ? e.toArray() : nr.call(e);
}, isUndefined: function(e) {
  return e === void 0;
}, isNull: function(e) {
  return e === null;
}, isNaN: (function(e) {
  function t(i) {
    return e.apply(this, arguments);
  }
  return t.toString = function() {
    return e.toString();
  }, t;
})(function(e) {
  return isNaN(e);
}), isArray: Array.isArray || function(e) {
  return e.constructor === Array;
}, isObject: function(e) {
  return e === Object(e);
}, isNumber: function(e) {
  return e === e + 0;
}, isString: function(e) {
  return e === e + "";
}, isBoolean: function(e) {
  return e === !1 || e === !0;
}, isFunction: function(e) {
  return e instanceof Function;
} }, ch = [{ litmus: Y.isString, conversions: { THREE_CHAR_HEX: { read: function(e) {
  var t = e.match(/^#([A-F0-9])([A-F0-9])([A-F0-9])$/i);
  return t !== null && { space: "HEX", hex: parseInt("0x" + t[1].toString() + t[1].toString() + t[2].toString() + t[2].toString() + t[3].toString() + t[3].toString(), 0) };
}, write: ji }, SIX_CHAR_HEX: { read: function(e) {
  var t = e.match(/^#([A-F0-9]{6})$/i);
  return t !== null && { space: "HEX", hex: parseInt("0x" + t[1].toString(), 0) };
}, write: ji }, CSS_RGB: { read: function(e) {
  var t = e.match(/^rgb\(\s*(\S+)\s*,\s*(\S+)\s*,\s*(\S+)\s*\)/);
  return t !== null && { space: "RGB", r: parseFloat(t[1]), g: parseFloat(t[2]), b: parseFloat(t[3]) };
}, write: ji }, CSS_RGBA: { read: function(e) {
  var t = e.match(/^rgba\(\s*(\S+)\s*,\s*(\S+)\s*,\s*(\S+)\s*,\s*(\S+)\s*\)/);
  return t !== null && { space: "RGB", r: parseFloat(t[1]), g: parseFloat(t[2]), b: parseFloat(t[3]), a: parseFloat(t[4]) };
}, write: ji } } }, { litmus: Y.isNumber, conversions: { HEX: { read: function(e) {
  return { space: "HEX", hex: e, conversionName: "HEX" };
}, write: function(e) {
  return e.hex;
} } } }, { litmus: Y.isArray, conversions: { RGB_ARRAY: { read: function(e) {
  return e.length === 3 && { space: "RGB", r: e[0], g: e[1], b: e[2] };
}, write: function(e) {
  return [e.r, e.g, e.b];
} }, RGBA_ARRAY: { read: function(e) {
  return e.length === 4 && { space: "RGB", r: e[0], g: e[1], b: e[2], a: e[3] };
}, write: function(e) {
  return [e.r, e.g, e.b, e.a];
} } } }, { litmus: Y.isObject, conversions: { RGBA_OBJ: { read: function(e) {
  return Y.isNumber(e.r) && Y.isNumber(e.g) && Y.isNumber(e.b) && Y.isNumber(e.a) ? { space: "RGB", r: e.r, g: e.g, b: e.b, a: e.a } : !1;
}, write: function(e) {
  return { r: e.r, g: e.g, b: e.b, a: e.a };
} }, RGB_OBJ: { read: function(e) {
  return Y.isNumber(e.r) && Y.isNumber(e.g) && Y.isNumber(e.b) ? { space: "RGB", r: e.r, g: e.g, b: e.b } : !1;
}, write: function(e) {
  return { r: e.r, g: e.g, b: e.b };
} }, HSVA_OBJ: { read: function(e) {
  return Y.isNumber(e.h) && Y.isNumber(e.s) && Y.isNumber(e.v) && Y.isNumber(e.a) ? { space: "HSV", h: e.h, s: e.s, v: e.v, a: e.a } : !1;
}, write: function(e) {
  return { h: e.h, s: e.s, v: e.v, a: e.a };
} }, HSV_OBJ: { read: function(e) {
  return Y.isNumber(e.h) && Y.isNumber(e.s) && Y.isNumber(e.v) ? { space: "HSV", h: e.h, s: e.s, v: e.v } : !1;
}, write: function(e) {
  return { h: e.h, s: e.s, v: e.v };
} } } }], sr = void 0, Xr = void 0, Ya = function() {
  Xr = !1;
  var e = arguments.length > 1 ? Y.toArray(arguments) : arguments[0];
  return Y.each(ch, function(t) {
    if (t.litmus(e)) return Y.each(t.conversions, function(i, r) {
      if (sr = i.read(e), Xr === !1 && sr !== !1) return Xr = sr, sr.conversionName = r, sr.conversion = i, Y.BREAK;
    }), Y.BREAK;
  }), Xr;
}, ls = void 0, jr = { hsv_to_rgb: function(e, t, i) {
  var r = Math.floor(e / 60) % 6, a = e / 60 - Math.floor(e / 60), n = i * (1 - t), s = i * (1 - a * t), o = i * (1 - (1 - a) * t), l = [[i, o, n], [s, i, n], [n, i, o], [n, s, i], [o, n, i], [i, n, s]][r];
  return { r: l[0] * 255, g: l[1] * 255, b: l[2] * 255 };
}, rgb_to_hsv: function(e, t, i) {
  var r = Math.min(e, t, i), a = Math.max(e, t, i), n = a - r, s = void 0, o = void 0;
  if (a !== 0) o = n / a;
  else return { h: NaN, s: 0, v: 0 };
  return s = e === a ? (t - i) / n : t === a ? 2 + (i - e) / n : 4 + (e - t) / n, s /= 6, s < 0 && (s += 1), { h: s * 360, s: o, v: a / 255 };
}, rgb_to_hex: function(e, t, i) {
  var r = this.hex_with_component(0, 2, e);
  return r = this.hex_with_component(r, 1, t), r = this.hex_with_component(r, 0, i), r;
}, component_from_hex: function(e, t) {
  return e >> t * 8 & 255;
}, hex_with_component: function(e, t, i) {
  return i << (ls = t * 8) | e & ~(255 << ls);
} }, uh = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(e) {
  return typeof e;
} : function(e) {
  return e && typeof Symbol == "function" && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
}, Bt = function(e, t) {
  if (!(e instanceof t)) throw TypeError("Cannot call a class as a function");
}, zt = /* @__PURE__ */ (function() {
  function e(t, i) {
    for (var r = 0; r < i.length; r++) {
      var a = i[r];
      a.enumerable = a.enumerable || !1, a.configurable = !0, "value" in a && (a.writable = !0), Object.defineProperty(t, a.key, a);
    }
  }
  return function(t, i, r) {
    return i && e(t.prototype, i), r && e(t, r), t;
  };
})(), ni = function e(t, i, r) {
  t === null && (t = Function.prototype);
  var a = Object.getOwnPropertyDescriptor(t, i);
  if (a === void 0) {
    var n = Object.getPrototypeOf(t);
    return n === null ? void 0 : e(n, i, r);
  } else {
    if ("value" in a) return a.value;
    var s = a.get;
    return s === void 0 ? void 0 : s.call(r);
  }
}, si = function(e, t) {
  if (typeof t != "function" && t !== null) throw TypeError("Super expression must either be null or a function, not " + typeof t);
  e.prototype = Object.create(t && t.prototype, { constructor: { value: e, enumerable: !1, writable: !0, configurable: !0 } }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t);
}, oi = function(e, t) {
  if (!e) throw ReferenceError("this hasn't been initialised - super() hasn't been called");
  return t && (typeof t == "object" || typeof t == "function") ? t : e;
}, ht = (function() {
  function e() {
    if (Bt(this, e), this.__state = Ya.apply(this, arguments), this.__state === !1) throw Error("Failed to interpret color arguments");
    this.__state.a = this.__state.a || 1;
  }
  return zt(e, [{ key: "toString", value: function() {
    return ji(this);
  } }, { key: "toHexString", value: function() {
    return ji(this, !0);
  } }, { key: "toOriginal", value: function() {
    return this.__state.conversion.write(this);
  } }]), e;
})();
function za(e, t, i) {
  Object.defineProperty(e, t, { get: function() {
    return this.__state.space === "RGB" || ht.recalculateRGB(this, t, i), this.__state[t];
  }, set: function(r) {
    this.__state.space !== "RGB" && (ht.recalculateRGB(this, t, i), this.__state.space = "RGB"), this.__state[t] = r;
  } });
}
function ka(e, t) {
  Object.defineProperty(e, t, { get: function() {
    return this.__state.space === "HSV" || ht.recalculateHSV(this), this.__state[t];
  }, set: function(i) {
    this.__state.space !== "HSV" && (ht.recalculateHSV(this), this.__state.space = "HSV"), this.__state[t] = i;
  } });
}
ht.recalculateRGB = function(e, t, i) {
  if (e.__state.space === "HEX") e.__state[t] = jr.component_from_hex(e.__state.hex, i);
  else if (e.__state.space === "HSV") Y.extend(e.__state, jr.hsv_to_rgb(e.__state.h, e.__state.s, e.__state.v));
  else throw Error("Corrupted color state");
}, ht.recalculateHSV = function(e) {
  var t = jr.rgb_to_hsv(e.r, e.g, e.b);
  Y.extend(e.__state, { s: t.s, v: t.v }), Y.isNaN(t.h) ? Y.isUndefined(e.__state.h) && (e.__state.h = 0) : e.__state.h = t.h;
}, ht.COMPONENTS = ["r", "g", "b", "h", "s", "v", "hex", "a"], za(ht.prototype, "r", 2), za(ht.prototype, "g", 1), za(ht.prototype, "b", 0), ka(ht.prototype, "h"), ka(ht.prototype, "s"), ka(ht.prototype, "v"), Object.defineProperty(ht.prototype, "a", { get: function() {
  return this.__state.a;
}, set: function(e) {
  this.__state.a = e;
} }), Object.defineProperty(ht.prototype, "hex", { get: function() {
  return this.__state.space !== "HEX" && (this.__state.hex = jr.rgb_to_hex(this.r, this.g, this.b), this.__state.space = "HEX"), this.__state.hex;
}, set: function(e) {
  this.__state.space = "HEX", this.__state.hex = e;
} });
var Ai = (function() {
  function e(t, i) {
    Bt(this, e), this.initialValue = t[i], this.domElement = document.createElement("div"), this.object = t, this.property = i, this.__onChange = void 0, this.__onFinishChange = void 0;
  }
  return zt(e, [{ key: "onChange", value: function(t) {
    return this.__onChange = t, this;
  } }, { key: "onFinishChange", value: function(t) {
    return this.__onFinishChange = t, this;
  } }, { key: "setValue", value: function(t) {
    return this.object[this.property] = t, this.__onChange && this.__onChange.call(this, t), this.updateDisplay(), this;
  } }, { key: "getValue", value: function() {
    return this.object[this.property];
  } }, { key: "updateDisplay", value: function() {
    return this;
  } }, { key: "isModified", value: function() {
    return this.initialValue !== this.getValue();
  } }]), e;
})(), hh = { HTMLEvents: ["change"], MouseEvents: ["click", "mousemove", "mousedown", "mouseup", "mouseover"], KeyboardEvents: ["keydown"] }, Ys = {};
Y.each(hh, function(e, t) {
  Y.each(e, function(i) {
    Ys[i] = t;
  });
});
var dh = /(\d+(\.\d+)?)px/;
function Vt(e) {
  if (e === "0" || Y.isUndefined(e)) return 0;
  var t = e.match(dh);
  return Y.isNull(t) ? 0 : parseFloat(t[1]);
}
var N = { makeSelectable: function(e, t) {
  e === void 0 || e.style === void 0 || (e.onselectstart = t ? function() {
    return !1;
  } : function() {
  }, e.style.MozUserSelect = t ? "auto" : "none", e.style.KhtmlUserSelect = t ? "auto" : "none", e.unselectable = t ? "on" : "off");
}, makeFullscreen: function(e, t, i) {
  var r = i, a = t;
  Y.isUndefined(a) && (a = !0), Y.isUndefined(r) && (r = !0), e.style.position = "absolute", a && (e.style.left = 0, e.style.right = 0), r && (e.style.top = 0, e.style.bottom = 0);
}, fakeEvent: function(e, t, i, r) {
  var a = i || {}, n = Ys[t];
  if (!n) throw Error("Event type " + t + " not supported.");
  var s = document.createEvent(n);
  switch (n) {
    case "MouseEvents":
      var o = a.x || a.clientX || 0, l = a.y || a.clientY || 0;
      s.initMouseEvent(t, a.bubbles || !1, a.cancelable || !0, window, a.clickCount || 1, 0, 0, o, l, !1, !1, !1, !1, 0, null);
      break;
    case "KeyboardEvents":
      var c = s.initKeyboardEvent || s.initKeyEvent;
      Y.defaults(a, { cancelable: !0, ctrlKey: !1, altKey: !1, shiftKey: !1, metaKey: !1, keyCode: void 0, charCode: void 0 }), c(t, a.bubbles || !1, a.cancelable, window, a.ctrlKey, a.altKey, a.shiftKey, a.metaKey, a.keyCode, a.charCode);
      break;
    default:
      s.initEvent(t, a.bubbles || !1, a.cancelable || !0);
      break;
  }
  Y.defaults(s, r), e.dispatchEvent(s);
}, bind: function(e, t, i, r) {
  var a = r || !1;
  return e.addEventListener ? e.addEventListener(t, i, a) : e.attachEvent && e.attachEvent("on" + t, i), N;
}, unbind: function(e, t, i, r) {
  var a = r || !1;
  return e.removeEventListener ? e.removeEventListener(t, i, a) : e.detachEvent && e.detachEvent("on" + t, i), N;
}, addClass: function(e, t) {
  if (e.className === void 0) e.className = t;
  else if (e.className !== t) {
    var i = e.className.split(/ +/);
    i.indexOf(t) === -1 && (i.push(t), e.className = i.join(" ").replace(/^\s+/, "").replace(/\s+$/, ""));
  }
  return N;
}, removeClass: function(e, t) {
  if (t) if (e.className === t) e.removeAttribute("class");
  else {
    var i = e.className.split(/ +/), r = i.indexOf(t);
    r !== -1 && (i.splice(r, 1), e.className = i.join(" "));
  }
  else e.className = void 0;
  return N;
}, hasClass: function(e, t) {
  return RegExp("(?:^|\\s+)" + t + "(?:\\s+|$)").test(e.className) || !1;
}, getWidth: function(e) {
  var t = getComputedStyle(e);
  return Vt(t["border-left-width"]) + Vt(t["border-right-width"]) + Vt(t["padding-left"]) + Vt(t["padding-right"]) + Vt(t.width);
}, getHeight: function(e) {
  var t = getComputedStyle(e);
  return Vt(t["border-top-width"]) + Vt(t["border-bottom-width"]) + Vt(t["padding-top"]) + Vt(t["padding-bottom"]) + Vt(t.height);
}, getOffset: function(e) {
  var t = e, i = { left: 0, top: 0 };
  if (t.offsetParent) do
    i.left += t.offsetLeft, i.top += t.offsetTop, t = t.offsetParent;
  while (t);
  return i;
}, isActive: function(e) {
  return e === document.activeElement && (e.type || e.href);
} }, Ks = (function(e) {
  si(t, e);
  function t(i, r) {
    Bt(this, t);
    var a = oi(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, i, r)), n = a;
    a.__prev = a.getValue(), a.__checkbox = document.createElement("input"), a.__checkbox.setAttribute("type", "checkbox");
    function s() {
      n.setValue(!n.__prev);
    }
    return N.bind(a.__checkbox, "change", s, !1), a.domElement.appendChild(a.__checkbox), a.updateDisplay(), a;
  }
  return zt(t, [{ key: "setValue", value: function(i) {
    var r = ni(t.prototype.__proto__ || Object.getPrototypeOf(t.prototype), "setValue", this).call(this, i);
    return this.__onFinishChange && this.__onFinishChange.call(this, this.getValue()), this.__prev = this.getValue(), r;
  } }, { key: "updateDisplay", value: function() {
    return this.getValue() === !0 ? (this.__checkbox.setAttribute("checked", "checked"), this.__checkbox.checked = !0, this.__prev = !0) : (this.__checkbox.checked = !1, this.__prev = !1), ni(t.prototype.__proto__ || Object.getPrototypeOf(t.prototype), "updateDisplay", this).call(this);
  } }]), t;
})(Ai), ph = (function(e) {
  si(t, e);
  function t(i, r, a) {
    Bt(this, t);
    var n = oi(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, i, r)), s = a, o = n;
    if (n.__select = document.createElement("select"), Y.isArray(s)) {
      var l = {};
      Y.each(s, function(c) {
        l[c] = c;
      }), s = l;
    }
    return Y.each(s, function(c, u) {
      var h = document.createElement("option");
      h.innerHTML = u, h.setAttribute("value", c), o.__select.appendChild(h);
    }), n.updateDisplay(), N.bind(n.__select, "change", function() {
      var c = this.options[this.selectedIndex].value;
      o.setValue(c);
    }), n.domElement.appendChild(n.__select), n;
  }
  return zt(t, [{ key: "setValue", value: function(i) {
    var r = ni(t.prototype.__proto__ || Object.getPrototypeOf(t.prototype), "setValue", this).call(this, i);
    return this.__onFinishChange && this.__onFinishChange.call(this, this.getValue()), r;
  } }, { key: "updateDisplay", value: function() {
    return N.isActive(this.__select) ? this : (this.__select.value = this.getValue(), ni(t.prototype.__proto__ || Object.getPrototypeOf(t.prototype), "updateDisplay", this).call(this));
  } }]), t;
})(Ai), fh = (function(e) {
  si(t, e);
  function t(i, r) {
    Bt(this, t);
    var a = oi(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, i, r)), n = a;
    function s() {
      n.setValue(n.__input.value);
    }
    function o() {
      n.__onFinishChange && n.__onFinishChange.call(n, n.getValue());
    }
    return a.__input = document.createElement("input"), a.__input.setAttribute("type", "text"), N.bind(a.__input, "keyup", s), N.bind(a.__input, "change", s), N.bind(a.__input, "blur", o), N.bind(a.__input, "keydown", function(l) {
      l.keyCode === 13 && this.blur();
    }), a.updateDisplay(), a.domElement.appendChild(a.__input), a;
  }
  return zt(t, [{ key: "updateDisplay", value: function() {
    return N.isActive(this.__input) || (this.__input.value = this.getValue()), ni(t.prototype.__proto__ || Object.getPrototypeOf(t.prototype), "updateDisplay", this).call(this);
  } }]), t;
})(Ai);
function cs(e) {
  var t = e.toString();
  return t.indexOf(".") > -1 ? t.length - t.indexOf(".") - 1 : 0;
}
var Zs = (function(e) {
  si(t, e);
  function t(i, r, a) {
    Bt(this, t);
    var n = oi(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, i, r)), s = a || {};
    return n.__min = s.min, n.__max = s.max, n.__step = s.step, Y.isUndefined(n.__step) ? n.initialValue === 0 ? n.__impliedStep = 1 : n.__impliedStep = 10 ** Math.floor(Math.log(Math.abs(n.initialValue)) / Math.LN10) / 10 : n.__impliedStep = n.__step, n.__precision = cs(n.__impliedStep), n;
  }
  return zt(t, [{ key: "setValue", value: function(i) {
    var r = i;
    return this.__min !== void 0 && r < this.__min ? r = this.__min : this.__max !== void 0 && r > this.__max && (r = this.__max), this.__step !== void 0 && r % this.__step !== 0 && (r = Math.round(r / this.__step) * this.__step), ni(t.prototype.__proto__ || Object.getPrototypeOf(t.prototype), "setValue", this).call(this, r);
  } }, { key: "min", value: function(i) {
    return this.__min = i, this;
  } }, { key: "max", value: function(i) {
    return this.__max = i, this;
  } }, { key: "step", value: function(i) {
    return this.__step = i, this.__impliedStep = i, this.__precision = cs(i), this;
  } }]), t;
})(Ai);
function mh(e, t) {
  var i = 10 ** t;
  return Math.round(e * i) / i;
}
var ea = (function(e) {
  si(t, e);
  function t(i, r, a) {
    Bt(this, t);
    var n = oi(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, i, r, a));
    n.__truncationSuspended = !1;
    var s = n, o = void 0;
    function l() {
      var x = parseFloat(s.__input.value);
      Y.isNaN(x) || s.setValue(x);
    }
    function c() {
      s.__onFinishChange && s.__onFinishChange.call(s, s.getValue());
    }
    function u() {
      c();
    }
    function h(x) {
      var _ = o - x.clientY;
      s.setValue(s.getValue() + _ * s.__impliedStep), o = x.clientY;
    }
    function d() {
      N.unbind(window, "mousemove", h), N.unbind(window, "mouseup", d), c();
    }
    function m(x) {
      N.bind(window, "mousemove", h), N.bind(window, "mouseup", d), o = x.clientY;
    }
    return n.__input = document.createElement("input"), n.__input.setAttribute("type", "text"), N.bind(n.__input, "change", l), N.bind(n.__input, "blur", u), N.bind(n.__input, "mousedown", m), N.bind(n.__input, "keydown", function(x) {
      x.keyCode === 13 && (s.__truncationSuspended = !0, this.blur(), s.__truncationSuspended = !1, c());
    }), n.updateDisplay(), n.domElement.appendChild(n.__input), n;
  }
  return zt(t, [{ key: "updateDisplay", value: function() {
    return this.__input.value = this.__truncationSuspended ? this.getValue() : mh(this.getValue(), this.__precision), ni(t.prototype.__proto__ || Object.getPrototypeOf(t.prototype), "updateDisplay", this).call(this);
  } }]), t;
})(Zs);
function us(e, t, i, r, a) {
  return r + (a - r) * ((e - t) / (i - t));
}
var Ka = (function(e) {
  si(t, e);
  function t(i, r, a, n, s) {
    Bt(this, t);
    var o = oi(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, i, r, { min: a, max: n, step: s })), l = o;
    o.__background = document.createElement("div"), o.__foreground = document.createElement("div"), N.bind(o.__background, "mousedown", c), N.bind(o.__background, "touchstart", d), N.addClass(o.__background, "slider"), N.addClass(o.__foreground, "slider-fg");
    function c(_) {
      document.activeElement.blur(), N.bind(window, "mousemove", u), N.bind(window, "mouseup", h), u(_);
    }
    function u(_) {
      _.preventDefault();
      var f = l.__background.getBoundingClientRect();
      return l.setValue(us(_.clientX, f.left, f.right, l.__min, l.__max)), !1;
    }
    function h() {
      N.unbind(window, "mousemove", u), N.unbind(window, "mouseup", h), l.__onFinishChange && l.__onFinishChange.call(l, l.getValue());
    }
    function d(_) {
      _.touches.length === 1 && (N.bind(window, "touchmove", m), N.bind(window, "touchend", x), m(_));
    }
    function m(_) {
      var f = _.touches[0].clientX, p = l.__background.getBoundingClientRect();
      l.setValue(us(f, p.left, p.right, l.__min, l.__max));
    }
    function x() {
      N.unbind(window, "touchmove", m), N.unbind(window, "touchend", x), l.__onFinishChange && l.__onFinishChange.call(l, l.getValue());
    }
    return o.updateDisplay(), o.__background.appendChild(o.__foreground), o.domElement.appendChild(o.__background), o;
  }
  return zt(t, [{ key: "updateDisplay", value: function() {
    var i = (this.getValue() - this.__min) / (this.__max - this.__min);
    return this.__foreground.style.width = i * 100 + "%", ni(t.prototype.__proto__ || Object.getPrototypeOf(t.prototype), "updateDisplay", this).call(this);
  } }]), t;
})(Zs), Js = (function(e) {
  si(t, e);
  function t(i, r, a) {
    Bt(this, t);
    var n = oi(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, i, r)), s = n;
    return n.__button = document.createElement("div"), n.__button.innerHTML = a === void 0 ? "Fire" : a, N.bind(n.__button, "click", function(o) {
      return o.preventDefault(), s.fire(), !1;
    }), N.addClass(n.__button, "button"), n.domElement.appendChild(n.__button), n;
  }
  return zt(t, [{ key: "fire", value: function() {
    this.__onChange && this.__onChange.call(this), this.getValue().call(this.object), this.__onFinishChange && this.__onFinishChange.call(this, this.getValue());
  } }]), t;
})(Ai), Za = (function(e) {
  si(t, e);
  function t(i, r) {
    Bt(this, t);
    var a = oi(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, i, r));
    a.__color = new ht(a.getValue()), a.__temp = new ht(0);
    var n = a;
    a.domElement = document.createElement("div"), N.makeSelectable(a.domElement, !1), a.__selector = document.createElement("div"), a.__selector.className = "selector", a.__saturation_field = document.createElement("div"), a.__saturation_field.className = "saturation-field", a.__field_knob = document.createElement("div"), a.__field_knob.className = "field-knob", a.__field_knob_border = "2px solid ", a.__hue_knob = document.createElement("div"), a.__hue_knob.className = "hue-knob", a.__hue_field = document.createElement("div"), a.__hue_field.className = "hue-field", a.__input = document.createElement("input"), a.__input.type = "text", a.__input_textShadow = "0 1px 1px ", N.bind(a.__input, "keydown", function(_) {
      _.keyCode === 13 && h.call(this);
    }), N.bind(a.__input, "blur", h), N.bind(a.__selector, "mousedown", function() {
      N.addClass(this, "drag").bind(window, "mouseup", function() {
        N.removeClass(n.__selector, "drag");
      });
    }), N.bind(a.__selector, "touchstart", function() {
      N.addClass(this, "drag").bind(window, "touchend", function() {
        N.removeClass(n.__selector, "drag");
      });
    });
    var s = document.createElement("div");
    Y.extend(a.__selector.style, { width: "122px", height: "102px", padding: "3px", backgroundColor: "#222", boxShadow: "0px 1px 3px rgba(0,0,0,0.3)" }), Y.extend(a.__field_knob.style, { position: "absolute", width: "12px", height: "12px", border: a.__field_knob_border + (a.__color.v < 0.5 ? "#fff" : "#000"), boxShadow: "0px 1px 3px rgba(0,0,0,0.5)", borderRadius: "12px", zIndex: 1 }), Y.extend(a.__hue_knob.style, { position: "absolute", width: "15px", height: "2px", borderRight: "4px solid #fff", zIndex: 1 }), Y.extend(a.__saturation_field.style, { width: "100px", height: "100px", border: "1px solid #555", marginRight: "3px", display: "inline-block", cursor: "pointer" }), Y.extend(s.style, { width: "100%", height: "100%", background: "none" }), hs(s, "top", "rgba(0,0,0,0)", "#000"), Y.extend(a.__hue_field.style, { width: "15px", height: "100px", border: "1px solid #555", cursor: "ns-resize", position: "absolute", top: "3px", right: "3px" }), _h(a.__hue_field), Y.extend(a.__input.style, { outline: "none", textAlign: "center", color: "#fff", border: 0, fontWeight: "bold", textShadow: a.__input_textShadow + "rgba(0,0,0,0.7)" }), N.bind(a.__saturation_field, "mousedown", o), N.bind(a.__saturation_field, "touchstart", o), N.bind(a.__field_knob, "mousedown", o), N.bind(a.__field_knob, "touchstart", o), N.bind(a.__hue_field, "mousedown", l), N.bind(a.__hue_field, "touchstart", l);
    function o(_) {
      m(_), N.bind(window, "mousemove", m), N.bind(window, "touchmove", m), N.bind(window, "mouseup", c), N.bind(window, "touchend", c);
    }
    function l(_) {
      x(_), N.bind(window, "mousemove", x), N.bind(window, "touchmove", x), N.bind(window, "mouseup", u), N.bind(window, "touchend", u);
    }
    function c() {
      N.unbind(window, "mousemove", m), N.unbind(window, "touchmove", m), N.unbind(window, "mouseup", c), N.unbind(window, "touchend", c), d();
    }
    function u() {
      N.unbind(window, "mousemove", x), N.unbind(window, "touchmove", x), N.unbind(window, "mouseup", u), N.unbind(window, "touchend", u), d();
    }
    function h() {
      var _ = Ya(this.value);
      _ === !1 ? this.value = n.__color.toString() : (n.__color.__state = _, n.setValue(n.__color.toOriginal()));
    }
    function d() {
      n.__onFinishChange && n.__onFinishChange.call(n, n.__color.toOriginal());
    }
    a.__saturation_field.appendChild(s), a.__selector.appendChild(a.__field_knob), a.__selector.appendChild(a.__saturation_field), a.__selector.appendChild(a.__hue_field), a.__hue_field.appendChild(a.__hue_knob), a.domElement.appendChild(a.__input), a.domElement.appendChild(a.__selector), a.updateDisplay();
    function m(_) {
      _.type.indexOf("touch") === -1 && _.preventDefault();
      var f = n.__saturation_field.getBoundingClientRect(), p = _.touches && _.touches[0] || _, R = p.clientX, y = p.clientY, A = (R - f.left) / (f.right - f.left), I = 1 - (y - f.top) / (f.bottom - f.top);
      return I > 1 ? I = 1 : I < 0 && (I = 0), A > 1 ? A = 1 : A < 0 && (A = 0), n.__color.v = I, n.__color.s = A, n.setValue(n.__color.toOriginal()), !1;
    }
    function x(_) {
      _.type.indexOf("touch") === -1 && _.preventDefault();
      var f = n.__hue_field.getBoundingClientRect(), p = 1 - ((_.touches && _.touches[0] || _).clientY - f.top) / (f.bottom - f.top);
      return p > 1 ? p = 1 : p < 0 && (p = 0), n.__color.h = p * 360, n.setValue(n.__color.toOriginal()), !1;
    }
    return a;
  }
  return zt(t, [{ key: "updateDisplay", value: function() {
    var i = Ya(this.getValue());
    if (i !== !1) {
      var r = !1;
      Y.each(ht.COMPONENTS, function(s) {
        if (!Y.isUndefined(i[s]) && !Y.isUndefined(this.__color.__state[s]) && i[s] !== this.__color.__state[s]) return r = !0, {};
      }, this), r && Y.extend(this.__color.__state, i);
    }
    Y.extend(this.__temp.__state, this.__color.__state), this.__temp.a = 1;
    var a = this.__color.v < 0.5 || this.__color.s > 0.5 ? 255 : 0, n = 255 - a;
    Y.extend(this.__field_knob.style, { marginLeft: 100 * this.__color.s - 7 + "px", marginTop: 100 * (1 - this.__color.v) - 7 + "px", backgroundColor: this.__temp.toHexString(), border: this.__field_knob_border + "rgb(" + a + "," + a + "," + a + ")" }), this.__hue_knob.style.marginTop = (1 - this.__color.h / 360) * 100 + "px", this.__temp.s = 1, this.__temp.v = 1, hs(this.__saturation_field, "left", "#fff", this.__temp.toHexString()), this.__input.value = this.__color.toString(), Y.extend(this.__input.style, { backgroundColor: this.__color.toHexString(), color: "rgb(" + a + "," + a + "," + a + ")", textShadow: this.__input_textShadow + "rgba(" + n + "," + n + "," + n + ",.7)" });
  } }]), t;
})(Ai), gh = ["-moz-", "-o-", "-webkit-", "-ms-", ""];
function hs(e, t, i, r) {
  e.style.background = "", Y.each(gh, function(a) {
    e.style.cssText += "background: " + a + "linear-gradient(" + t + ", " + i + " 0%, " + r + " 100%); ";
  });
}
function _h(e) {
  e.style.background = "", e.style.cssText += "background: -moz-linear-gradient(top,  #ff0000 0%, #ff00ff 17%, #0000ff 34%, #00ffff 50%, #00ff00 67%, #ffff00 84%, #ff0000 100%);", e.style.cssText += "background: -webkit-linear-gradient(top,  #ff0000 0%,#ff00ff 17%,#0000ff 34%,#00ffff 50%,#00ff00 67%,#ffff00 84%,#ff0000 100%);", e.style.cssText += "background: -o-linear-gradient(top,  #ff0000 0%,#ff00ff 17%,#0000ff 34%,#00ffff 50%,#00ff00 67%,#ffff00 84%,#ff0000 100%);", e.style.cssText += "background: -ms-linear-gradient(top,  #ff0000 0%,#ff00ff 17%,#0000ff 34%,#00ffff 50%,#00ff00 67%,#ffff00 84%,#ff0000 100%);", e.style.cssText += "background: linear-gradient(top,  #ff0000 0%,#ff00ff 17%,#0000ff 34%,#00ffff 50%,#00ff00 67%,#ffff00 84%,#ff0000 100%);";
}
var vh = { load: function(e, t) {
  var i = t || document, r = i.createElement("link");
  r.type = "text/css", r.rel = "stylesheet", r.href = e, i.getElementsByTagName("head")[0].appendChild(r);
}, inject: function(e, t) {
  var i = t || document, r = document.createElement("style");
  r.type = "text/css", r.innerHTML = e;
  var a = i.getElementsByTagName("head")[0];
  try {
    a.appendChild(r);
  } catch {
  }
} }, xh = `<div id="dg-save" class="dg dialogue">

  Here's the new load parameter for your <code>GUI</code>'s constructor:

  <textarea id="dg-new-constructor"></textarea>

  <div id="dg-save-locally">

    <input id="dg-local-storage" type="checkbox"/> Automatically save
    values to <code>localStorage</code> on exit.

    <div id="dg-local-explain">The values saved to <code>localStorage</code> will
      override those passed to <code>dat.GUI</code>'s constructor. This makes it
      easier to work incrementally, but <code>localStorage</code> is fragile,
      and your friends may not see the same values you do.

    </div>

  </div>

</div>`, yh = function(e, t) {
  var i = e[t];
  return Y.isArray(arguments[2]) || Y.isObject(arguments[2]) ? new ph(e, t, arguments[2]) : Y.isNumber(i) ? Y.isNumber(arguments[2]) && Y.isNumber(arguments[3]) ? Y.isNumber(arguments[4]) ? new Ka(e, t, arguments[2], arguments[3], arguments[4]) : new Ka(e, t, arguments[2], arguments[3]) : Y.isNumber(arguments[4]) ? new ea(e, t, { min: arguments[2], max: arguments[3], step: arguments[4] }) : new ea(e, t, { min: arguments[2], max: arguments[3] }) : Y.isString(i) ? new fh(e, t) : Y.isFunction(i) ? new Js(e, t, "") : Y.isBoolean(i) ? new Ks(e, t) : null;
};
function Sh(e) {
  setTimeout(e, 1e3 / 60);
}
var Mh = window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || window.oRequestAnimationFrame || window.msRequestAnimationFrame || Sh, Eh = (function() {
  function e() {
    Bt(this, e), this.backgroundElement = document.createElement("div"), Y.extend(this.backgroundElement.style, { backgroundColor: "rgba(0,0,0,0.8)", top: 0, left: 0, display: "none", zIndex: "1000", opacity: 0, WebkitTransition: "opacity 0.2s linear", transition: "opacity 0.2s linear" }), N.makeFullscreen(this.backgroundElement), this.backgroundElement.style.position = "fixed", this.domElement = document.createElement("div"), Y.extend(this.domElement.style, { position: "fixed", display: "none", zIndex: "1001", opacity: 0, WebkitTransition: "-webkit-transform 0.2s ease-out, opacity 0.2s linear", transition: "transform 0.2s ease-out, opacity 0.2s linear" }), document.body.appendChild(this.backgroundElement), document.body.appendChild(this.domElement);
    var t = this;
    N.bind(this.backgroundElement, "click", function() {
      t.hide();
    });
  }
  return zt(e, [{ key: "show", value: function() {
    var t = this;
    this.backgroundElement.style.display = "block", this.domElement.style.display = "block", this.domElement.style.opacity = 0, this.domElement.style.webkitTransform = "scale(1.1)", this.layout(), Y.defer(function() {
      t.backgroundElement.style.opacity = 1, t.domElement.style.opacity = 1, t.domElement.style.webkitTransform = "scale(1)";
    });
  } }, { key: "hide", value: function() {
    var t = this, i = function r() {
      t.domElement.style.display = "none", t.backgroundElement.style.display = "none", N.unbind(t.domElement, "webkitTransitionEnd", r), N.unbind(t.domElement, "transitionend", r), N.unbind(t.domElement, "oTransitionEnd", r);
    };
    N.bind(this.domElement, "webkitTransitionEnd", i), N.bind(this.domElement, "transitionend", i), N.bind(this.domElement, "oTransitionEnd", i), this.backgroundElement.style.opacity = 0, this.domElement.style.opacity = 0, this.domElement.style.webkitTransform = "scale(1.1)";
  } }, { key: "layout", value: function() {
    this.domElement.style.left = window.innerWidth / 2 - N.getWidth(this.domElement) / 2 + "px", this.domElement.style.top = window.innerHeight / 2 - N.getHeight(this.domElement) / 2 + "px";
  } }]), e;
})(), bh = lh(`.dg ul{list-style:none;margin:0;padding:0;width:100%;clear:both}.dg.ac{position:fixed;top:0;left:0;right:0;height:0;z-index:0}.dg:not(.ac) .main{overflow:hidden}.dg.main{-webkit-transition:opacity .1s linear;-o-transition:opacity .1s linear;-moz-transition:opacity .1s linear;transition:opacity .1s linear}.dg.main.taller-than-window{overflow-y:auto}.dg.main.taller-than-window .close-button{opacity:1;margin-top:-1px;border-top:1px solid #2c2c2c}.dg.main ul.closed .close-button{opacity:1 !important}.dg.main:hover .close-button,.dg.main .close-button.drag{opacity:1}.dg.main .close-button{-webkit-transition:opacity .1s linear;-o-transition:opacity .1s linear;-moz-transition:opacity .1s linear;transition:opacity .1s linear;border:0;line-height:19px;height:20px;cursor:pointer;text-align:center;background-color:#000}.dg.main .close-button.close-top{position:relative}.dg.main .close-button.close-bottom{position:absolute}.dg.main .close-button:hover{background-color:#111}.dg.a{float:right;margin-right:15px;overflow-y:visible}.dg.a.has-save>ul.close-top{margin-top:0}.dg.a.has-save>ul.close-bottom{margin-top:27px}.dg.a.has-save>ul.closed{margin-top:0}.dg.a .save-row{top:0;z-index:1002}.dg.a .save-row.close-top{position:relative}.dg.a .save-row.close-bottom{position:fixed}.dg li{-webkit-transition:height .1s ease-out;-o-transition:height .1s ease-out;-moz-transition:height .1s ease-out;transition:height .1s ease-out;-webkit-transition:overflow .1s linear;-o-transition:overflow .1s linear;-moz-transition:overflow .1s linear;transition:overflow .1s linear}.dg li:not(.folder){cursor:auto;height:27px;line-height:27px;padding:0 4px 0 5px}.dg li.folder{padding:0;border-left:4px solid rgba(0,0,0,0)}.dg li.title{cursor:pointer;margin-left:-4px}.dg .closed li:not(.title),.dg .closed ul li,.dg .closed ul li>*{height:0;overflow:hidden;border:0}.dg .cr{clear:both;padding-left:3px;height:27px;overflow:hidden}.dg .property-name{cursor:default;float:left;clear:left;width:40%;overflow:hidden;text-overflow:ellipsis}.dg .cr.function .property-name{width:100%}.dg .c{float:left;width:60%;position:relative}.dg .c input[type=text]{border:0;margin-top:4px;padding:3px;width:100%;float:right}.dg .has-slider input[type=text]{width:30%;margin-left:0}.dg .slider{float:left;width:66%;margin-left:-5px;margin-right:0;height:19px;margin-top:4px}.dg .slider-fg{height:100%}.dg .c input[type=checkbox]{margin-top:7px}.dg .c select{margin-top:5px}.dg .cr.function,.dg .cr.function .property-name,.dg .cr.function *,.dg .cr.boolean,.dg .cr.boolean *{cursor:pointer}.dg .cr.color{overflow:visible}.dg .selector{display:none;position:absolute;margin-left:-9px;margin-top:23px;z-index:10}.dg .c:hover .selector,.dg .selector.drag{display:block}.dg li.save-row{padding:0}.dg li.save-row .button{display:inline-block;padding:0px 6px}.dg.dialogue{background-color:#222;width:460px;padding:15px;font-size:13px;line-height:15px}#dg-new-constructor{padding:10px;color:#222;font-family:Monaco, monospace;font-size:10px;border:0;resize:none;box-shadow:inset 1px 1px 1px #888;word-wrap:break-word;margin:12px 0;display:block;width:440px;overflow-y:scroll;height:100px;position:relative}#dg-local-explain{display:none;font-size:11px;line-height:17px;border-radius:3px;background-color:#333;padding:8px;margin-top:10px}#dg-local-explain code{font-size:10px}#dat-gui-save-locally{display:none}.dg{color:#eee;font:11px 'Lucida Grande', sans-serif;text-shadow:0 -1px 0 #111}.dg.main::-webkit-scrollbar{width:5px;background:#1a1a1a}.dg.main::-webkit-scrollbar-corner{height:0;display:none}.dg.main::-webkit-scrollbar-thumb{border-radius:5px;background:#676767}.dg li:not(.folder){background:#1a1a1a;border-bottom:1px solid #2c2c2c}.dg li.save-row{line-height:25px;background:#dad5cb;border:0}.dg li.save-row select{margin-left:5px;width:108px}.dg li.save-row .button{margin-left:5px;margin-top:1px;border-radius:2px;font-size:9px;line-height:7px;padding:4px 4px 5px 4px;background:#c5bdad;color:#fff;text-shadow:0 1px 0 #b0a58f;box-shadow:0 -1px 0 #b0a58f;cursor:pointer}.dg li.save-row .button.gears{background:#c5bdad url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAsAAAANCAYAAAB/9ZQ7AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAQJJREFUeNpiYKAU/P//PwGIC/ApCABiBSAW+I8AClAcgKxQ4T9hoMAEUrxx2QSGN6+egDX+/vWT4e7N82AMYoPAx/evwWoYoSYbACX2s7KxCxzcsezDh3evFoDEBYTEEqycggWAzA9AuUSQQgeYPa9fPv6/YWm/Acx5IPb7ty/fw+QZblw67vDs8R0YHyQhgObx+yAJkBqmG5dPPDh1aPOGR/eugW0G4vlIoTIfyFcA+QekhhHJhPdQxbiAIguMBTQZrPD7108M6roWYDFQiIAAv6Aow/1bFwXgis+f2LUAynwoIaNcz8XNx3Dl7MEJUDGQpx9gtQ8YCueB+D26OECAAQDadt7e46D42QAAAABJRU5ErkJggg==) 2px 1px no-repeat;height:7px;width:8px}.dg li.save-row .button:hover{background-color:#bab19e;box-shadow:0 -1px 0 #b0a58f}.dg li.folder{border-bottom:0}.dg li.title{padding-left:16px;background:#000 url(data:image/gif;base64,R0lGODlhBQAFAJEAAP////Pz8////////yH5BAEAAAIALAAAAAAFAAUAAAIIlI+hKgFxoCgAOw==) 6px 10px no-repeat;cursor:pointer;border-bottom:1px solid rgba(255,255,255,0.2)}.dg .closed li.title{background-image:url(data:image/gif;base64,R0lGODlhBQAFAJEAAP////Pz8////////yH5BAEAAAIALAAAAAAFAAUAAAIIlGIWqMCbWAEAOw==)}.dg .cr.boolean{border-left:3px solid #806787}.dg .cr.color{border-left:3px solid}.dg .cr.function{border-left:3px solid #e61d5f}.dg .cr.number{border-left:3px solid #2FA1D6}.dg .cr.number input[type=text]{color:#2FA1D6}.dg .cr.string{border-left:3px solid #1ed36f}.dg .cr.string input[type=text]{color:#1ed36f}.dg .cr.function:hover,.dg .cr.boolean:hover{background:#111}.dg .c input[type=text]{background:#303030;outline:none}.dg .c input[type=text]:hover{background:#3c3c3c}.dg .c input[type=text]:focus{background:#494949;color:#fff}.dg .c .slider{background:#303030;cursor:ew-resize}.dg .c .slider-fg{background:#2FA1D6;max-width:100%}.dg .c .slider:hover{background:#3c3c3c}.dg .c .slider:hover .slider-fg{background:#44abda}
`);
vh.inject(bh);
var ds = "dg", ps = 72, fs = 20, mr = "Default", lr = (function() {
  try {
    return !!window.localStorage;
  } catch {
    return !1;
  }
})(), cr = void 0, Th = !0, Gi = void 0, Ha = !1, $s = [], $e = function e(t) {
  var i = this, r = t || {};
  this.domElement = document.createElement("div"), this.__ul = document.createElement("ul"), this.domElement.appendChild(this.__ul), N.addClass(this.domElement, ds), this.__folders = {}, this.__controllers = [], this.__rememberedObjects = [], this.__rememberedObjectIndecesToControllers = [], this.__listening = [], r = Y.defaults(r, { closeOnTop: !1, autoPlace: !0, width: e.DEFAULT_WIDTH }), r = Y.defaults(r, { resizable: r.autoPlace, hideable: r.autoPlace }), Y.isUndefined(r.load) ? r.load = { preset: mr } : r.preset && (r.load.preset = r.preset), Y.isUndefined(r.parent) && r.hideable && $s.push(this), r.resizable = Y.isUndefined(r.parent) && r.resizable, r.autoPlace && Y.isUndefined(r.scrollable) && (r.scrollable = !0);
  var a = lr && localStorage.getItem(Wi(this, "isLocal")) === "true", n = void 0, s = void 0;
  if (Object.defineProperties(this, { parent: { get: function() {
    return r.parent;
  } }, scrollable: { get: function() {
    return r.scrollable;
  } }, autoPlace: { get: function() {
    return r.autoPlace;
  } }, closeOnTop: { get: function() {
    return r.closeOnTop;
  } }, preset: { get: function() {
    return i.parent ? i.getRoot().preset : r.load.preset;
  }, set: function(u) {
    i.parent ? i.getRoot().preset = u : r.load.preset = u, Ch(this), i.revert();
  } }, width: { get: function() {
    return r.width;
  }, set: function(u) {
    r.width = u, Qa(i, u);
  } }, name: { get: function() {
    return r.name;
  }, set: function(u) {
    r.name = u, s && (s.innerHTML = r.name);
  } }, closed: { get: function() {
    return r.closed;
  }, set: function(u) {
    r.closed = u, r.closed ? N.addClass(i.__ul, e.CLASS_CLOSED) : N.removeClass(i.__ul, e.CLASS_CLOSED), this.onResize(), i.__closeButton && (i.__closeButton.innerHTML = u ? e.TEXT_OPEN : e.TEXT_CLOSED);
  } }, load: { get: function() {
    return r.load;
  } }, useLocalStorage: { get: function() {
    return a;
  }, set: function(u) {
    lr && (a = u, u ? N.bind(window, "unload", n) : N.unbind(window, "unload", n), localStorage.setItem(Wi(i, "isLocal"), u));
  } } }), Y.isUndefined(r.parent)) {
    if (this.closed = r.closed || !1, N.addClass(this.domElement, e.CLASS_MAIN), N.makeSelectable(this.domElement, !1), lr && a) {
      i.useLocalStorage = !0;
      var o = localStorage.getItem(Wi(this, "gui"));
      o && (r.load = JSON.parse(o));
    }
    this.__closeButton = document.createElement("div"), this.__closeButton.innerHTML = e.TEXT_CLOSED, N.addClass(this.__closeButton, e.CLASS_CLOSE_BUTTON), r.closeOnTop ? (N.addClass(this.__closeButton, e.CLASS_CLOSE_TOP), this.domElement.insertBefore(this.__closeButton, this.domElement.childNodes[0])) : (N.addClass(this.__closeButton, e.CLASS_CLOSE_BOTTOM), this.domElement.appendChild(this.__closeButton)), N.bind(this.__closeButton, "click", function() {
      i.closed = !i.closed;
    });
  } else {
    r.closed === void 0 && (r.closed = !0);
    var l = document.createTextNode(r.name);
    N.addClass(l, "controller-name"), s = cn(i, l), N.addClass(this.__ul, e.CLASS_CLOSED), N.addClass(s, "title"), N.bind(s, "click", function(u) {
      return u.preventDefault(), i.closed = !i.closed, !1;
    }), r.closed || (this.closed = !1);
  }
  r.autoPlace && (Y.isUndefined(r.parent) && (Th && (Th = (Gi = document.createElement("div"), N.addClass(Gi, ds), N.addClass(Gi, e.CLASS_AUTO_PLACE_CONTAINER), document.body.appendChild(Gi), !1)), Gi.appendChild(this.domElement), N.addClass(this.domElement, e.CLASS_AUTO_PLACE)), this.parent || Qa(i, r.width)), this.__resizeHandler = function() {
    i.onResizeDebounced();
  }, N.bind(window, "resize", this.__resizeHandler), N.bind(this.__ul, "webkitTransitionEnd", this.__resizeHandler), N.bind(this.__ul, "transitionend", this.__resizeHandler), N.bind(this.__ul, "oTransitionEnd", this.__resizeHandler), this.onResize(), r.resizable && Rh(this), n = function() {
    lr && localStorage.getItem(Wi(i, "isLocal")) === "true" && localStorage.setItem(Wi(i, "gui"), JSON.stringify(i.getSaveObject()));
  }, this.saveToLocalStorageIfPossible = n;
  function c() {
    var u = i.getRoot();
    u.width += 1, Y.defer(function() {
      --u.width;
    });
  }
  r.parent || c();
};
$e.toggleHide = function() {
  Ha = !Ha, Y.each($s, function(e) {
    e.domElement.style.display = Ha ? "none" : "";
  });
}, $e.CLASS_AUTO_PLACE = "a", $e.CLASS_AUTO_PLACE_CONTAINER = "ac", $e.CLASS_MAIN = "main", $e.CLASS_CONTROLLER_ROW = "cr", $e.CLASS_TOO_TALL = "taller-than-window", $e.CLASS_CLOSED = "closed", $e.CLASS_CLOSE_BUTTON = "close-button", $e.CLASS_CLOSE_TOP = "close-top", $e.CLASS_CLOSE_BOTTOM = "close-bottom", $e.CLASS_DRAG = "drag", $e.DEFAULT_WIDTH = 245, $e.TEXT_CLOSED = "Close Controls", $e.TEXT_OPEN = "Open Controls", $e._keydownHandler = function(e) {
  document.activeElement.type !== "text" && (e.which === ps || e.keyCode === ps) && $e.toggleHide();
}, N.bind(window, "keydown", $e._keydownHandler, !1), Y.extend($e.prototype, { add: function(e, t) {
  return ur(this, e, t, { factoryArgs: Array.prototype.slice.call(arguments, 2) });
}, addColor: function(e, t) {
  return ur(this, e, t, { color: !0 });
}, remove: function(e) {
  this.__ul.removeChild(e.__li), this.__controllers.splice(this.__controllers.indexOf(e), 1);
  var t = this;
  Y.defer(function() {
    t.onResize();
  });
}, destroy: function() {
  if (this.parent) throw Error("Only the root GUI should be removed with .destroy(). For subfolders, use gui.removeFolder(folder) instead.");
  this.autoPlace && Gi.removeChild(this.domElement);
  var e = this;
  Y.each(this.__folders, function(t) {
    e.removeFolder(t);
  }), N.unbind(window, "keydown", $e._keydownHandler, !1), ms(this);
}, addFolder: function(e) {
  if (this.__folders[e] !== void 0) throw Error('You already have a folder in this GUI by the name "' + e + '"');
  var t = { name: e, parent: this };
  t.autoPlace = this.autoPlace, this.load && this.load.folders && this.load.folders[e] && (t.closed = this.load.folders[e].closed, t.load = this.load.folders[e]);
  var i = new $e(t);
  this.__folders[e] = i;
  var r = cn(this, i.domElement);
  return N.addClass(r, "folder"), i;
}, removeFolder: function(e) {
  this.__ul.removeChild(e.domElement.parentElement), delete this.__folders[e.name], this.load && this.load.folders && this.load.folders[e.name] && delete this.load.folders[e.name], ms(e);
  var t = this;
  Y.each(e.__folders, function(i) {
    e.removeFolder(i);
  }), Y.defer(function() {
    t.onResize();
  });
}, open: function() {
  this.closed = !1;
}, close: function() {
  this.closed = !0;
}, hide: function() {
  this.domElement.style.display = "none";
}, show: function() {
  this.domElement.style.display = "";
}, onResize: function() {
  var e = this.getRoot();
  if (e.scrollable) {
    var t = N.getOffset(e.__ul).top, i = 0;
    Y.each(e.__ul.childNodes, function(r) {
      e.autoPlace && r === e.__save_row || (i += N.getHeight(r));
    }), window.innerHeight - t - fs < i ? (N.addClass(e.domElement, $e.CLASS_TOO_TALL), e.__ul.style.height = window.innerHeight - t - fs + "px") : (N.removeClass(e.domElement, $e.CLASS_TOO_TALL), e.__ul.style.height = "auto");
  }
  e.__resize_handle && Y.defer(function() {
    e.__resize_handle.style.height = e.__ul.offsetHeight + "px";
  }), e.__closeButton && (e.__closeButton.style.width = e.width + "px");
}, onResizeDebounced: Y.debounce(function() {
  this.onResize();
}, 50), remember: function() {
  if (Y.isUndefined(cr) && (cr = new Eh(), cr.domElement.innerHTML = xh), this.parent) throw Error("You can only call remember on a top level GUI.");
  var e = this;
  Y.each(Array.prototype.slice.call(arguments), function(t) {
    e.__rememberedObjects.length === 0 && Ah(e), e.__rememberedObjects.indexOf(t) === -1 && e.__rememberedObjects.push(t);
  }), this.autoPlace && Qa(this, this.width);
}, getRoot: function() {
  for (var e = this; e.parent; ) e = e.parent;
  return e;
}, getSaveObject: function() {
  var e = this.load;
  return e.closed = this.closed, this.__rememberedObjects.length > 0 && (e.preset = this.preset, e.remembered || (e.remembered = {}), e.remembered[this.preset] = qr(this)), e.folders = {}, Y.each(this.__folders, function(t, i) {
    e.folders[i] = t.getSaveObject();
  }), e;
}, save: function() {
  this.load.remembered || (this.load.remembered = {}), this.load.remembered[this.preset] = qr(this), Ja(this, !1), this.saveToLocalStorageIfPossible();
}, saveAs: function(e) {
  this.load.remembered || (this.load.remembered = {}, this.load.remembered[mr] = qr(this, !0)), this.load.remembered[e] = qr(this), this.preset = e, $a(this, e, !0), this.saveToLocalStorageIfPossible();
}, revert: function(e) {
  Y.each(this.__controllers, function(t) {
    this.getRoot().load.remembered ? Qs(e || this.getRoot(), t) : t.setValue(t.initialValue), t.__onFinishChange && t.__onFinishChange.call(t, t.getValue());
  }, this), Y.each(this.__folders, function(t) {
    t.revert(t);
  }), e || Ja(this.getRoot(), !1);
}, listen: function(e) {
  var t = this.__listening.length === 0;
  this.__listening.push(e), t && eo(this.__listening);
}, updateDisplay: function() {
  Y.each(this.__controllers, function(e) {
    e.updateDisplay();
  }), Y.each(this.__folders, function(e) {
    e.updateDisplay();
  });
} });
function cn(e, t, i) {
  var r = document.createElement("li");
  return t && r.appendChild(t), i ? e.__ul.insertBefore(r, i) : e.__ul.appendChild(r), e.onResize(), r;
}
function ms(e) {
  N.unbind(window, "resize", e.__resizeHandler), e.saveToLocalStorageIfPossible && N.unbind(window, "unload", e.saveToLocalStorageIfPossible);
}
function Ja(e, t) {
  var i = e.__preset_select[e.__preset_select.selectedIndex];
  t ? i.innerHTML = i.value + "*" : i.innerHTML = i.value;
}
function wh(e, t, i) {
  if (i.__li = t, i.__gui = e, Y.extend(i, { options: function(n) {
    if (arguments.length > 1) {
      var s = i.__li.nextElementSibling;
      return i.remove(), ur(e, i.object, i.property, { before: s, factoryArgs: [Y.toArray(arguments)] });
    }
    if (Y.isArray(n) || Y.isObject(n)) {
      var o = i.__li.nextElementSibling;
      return i.remove(), ur(e, i.object, i.property, { before: o, factoryArgs: [n] });
    }
  }, name: function(n) {
    return i.__li.firstElementChild.firstElementChild.innerHTML = n, i;
  }, listen: function() {
    return i.__gui.listen(i), i;
  }, remove: function() {
    return i.__gui.remove(i), i;
  } }), i instanceof Ka) {
    var r = new ea(i.object, i.property, { min: i.__min, max: i.__max, step: i.__step });
    Y.each(["updateDisplay", "onChange", "onFinishChange", "step", "min", "max"], function(n) {
      var s = i[n], o = r[n];
      i[n] = r[n] = function() {
        var l = Array.prototype.slice.call(arguments);
        return o.apply(r, l), s.apply(i, l);
      };
    }), N.addClass(t, "has-slider"), i.domElement.insertBefore(r.domElement, i.domElement.firstElementChild);
  } else if (i instanceof ea) {
    var a = function(n) {
      if (Y.isNumber(i.__min) && Y.isNumber(i.__max)) {
        var s = i.__li.firstElementChild.firstElementChild.innerHTML, o = i.__gui.__listening.indexOf(i) > -1;
        i.remove();
        var l = ur(e, i.object, i.property, { before: i.__li.nextElementSibling, factoryArgs: [i.__min, i.__max, i.__step] });
        return l.name(s), o && l.listen(), l;
      }
      return n;
    };
    i.min = Y.compose(a, i.min), i.max = Y.compose(a, i.max);
  } else i instanceof Ks ? (N.bind(t, "click", function() {
    N.fakeEvent(i.__checkbox, "click");
  }), N.bind(i.__checkbox, "click", function(n) {
    n.stopPropagation();
  })) : i instanceof Js ? (N.bind(t, "click", function() {
    N.fakeEvent(i.__button, "click");
  }), N.bind(t, "mouseover", function() {
    N.addClass(i.__button, "hover");
  }), N.bind(t, "mouseout", function() {
    N.removeClass(i.__button, "hover");
  })) : i instanceof Za && (N.addClass(t, "color"), i.updateDisplay = Y.compose(function(n) {
    return t.style.borderLeftColor = i.__color.toString(), n;
  }, i.updateDisplay), i.updateDisplay());
  i.setValue = Y.compose(function(n) {
    return e.getRoot().__preset_select && i.isModified() && Ja(e.getRoot(), !0), n;
  }, i.setValue);
}
function Qs(e, t) {
  var i = e.getRoot(), r = i.__rememberedObjects.indexOf(t.object);
  if (r !== -1) {
    var a = i.__rememberedObjectIndecesToControllers[r];
    if (a === void 0 && (a = {}, i.__rememberedObjectIndecesToControllers[r] = a), a[t.property] = t, i.load && i.load.remembered) {
      var n = i.load.remembered, s = void 0;
      if (n[e.preset]) s = n[e.preset];
      else if (n[mr]) s = n[mr];
      else return;
      if (s[r] && s[r][t.property] !== void 0) {
        var o = s[r][t.property];
        t.initialValue = o, t.setValue(o);
      }
    }
  }
}
function ur(e, t, i, r) {
  if (t[i] === void 0) throw Error('Object "' + t + '" has no property "' + i + '"');
  var a = void 0;
  if (r.color) a = new Za(t, i);
  else {
    var n = [t, i].concat(r.factoryArgs);
    a = yh.apply(e, n);
  }
  r.before instanceof Ai && (r.before = r.before.__li), Qs(e, a), N.addClass(a.domElement, "c");
  var s = document.createElement("span");
  N.addClass(s, "property-name"), s.innerHTML = a.property;
  var o = document.createElement("div");
  o.appendChild(s), o.appendChild(a.domElement);
  var l = cn(e, o, r.before);
  return N.addClass(l, $e.CLASS_CONTROLLER_ROW), a instanceof Za ? N.addClass(l, "color") : N.addClass(l, uh(a.getValue())), wh(e, l, a), e.__controllers.push(a), a;
}
function Wi(e, t) {
  return document.location.href + "." + t;
}
function $a(e, t, i) {
  var r = document.createElement("option");
  r.innerHTML = t, r.value = t, e.__preset_select.appendChild(r), i && (e.__preset_select.selectedIndex = e.__preset_select.length - 1);
}
function gs(e, t) {
  t.style.display = e.useLocalStorage ? "block" : "none";
}
function Ah(e) {
  var t = e.__save_row = document.createElement("li");
  N.addClass(e.domElement, "has-save"), e.__ul.insertBefore(t, e.__ul.firstChild), N.addClass(t, "save-row");
  var i = document.createElement("span");
  i.innerHTML = "&nbsp;", N.addClass(i, "button gears");
  var r = document.createElement("span");
  r.innerHTML = "Save", N.addClass(r, "button"), N.addClass(r, "save");
  var a = document.createElement("span");
  a.innerHTML = "New", N.addClass(a, "button"), N.addClass(a, "save-as");
  var n = document.createElement("span");
  n.innerHTML = "Revert", N.addClass(n, "button"), N.addClass(n, "revert");
  var s = e.__preset_select = document.createElement("select");
  if (e.load && e.load.remembered ? Y.each(e.load.remembered, function(h, d) {
    $a(e, d, d === e.preset);
  }) : $a(e, mr, !1), N.bind(s, "change", function() {
    for (var h = 0; h < e.__preset_select.length; h++) e.__preset_select[h].innerHTML = e.__preset_select[h].value;
    e.preset = this.value;
  }), t.appendChild(s), t.appendChild(i), t.appendChild(r), t.appendChild(a), t.appendChild(n), lr) {
    var o = document.getElementById("dg-local-explain"), l = document.getElementById("dg-local-storage"), c = document.getElementById("dg-save-locally");
    c.style.display = "block", localStorage.getItem(Wi(e, "isLocal")) === "true" && l.setAttribute("checked", "checked"), gs(e, o), N.bind(l, "change", function() {
      e.useLocalStorage = !e.useLocalStorage, gs(e, o);
    });
  }
  var u = document.getElementById("dg-new-constructor");
  N.bind(u, "keydown", function(h) {
    h.metaKey && (h.which === 67 || h.keyCode === 67) && cr.hide();
  }), N.bind(i, "click", function() {
    u.innerHTML = JSON.stringify(e.getSaveObject(), void 0, 2), cr.show(), u.focus(), u.select();
  }), N.bind(r, "click", function() {
    e.save();
  }), N.bind(a, "click", function() {
    var h = prompt("Enter a new preset name.");
    h && e.saveAs(h);
  }), N.bind(n, "click", function() {
    e.revert();
  });
}
function Rh(e) {
  var t = void 0;
  e.__resize_handle = document.createElement("div"), Y.extend(e.__resize_handle.style, { width: "6px", marginLeft: "-3px", height: "200px", cursor: "ew-resize", position: "absolute" });
  function i(n) {
    return n.preventDefault(), e.width += t - n.clientX, e.onResize(), t = n.clientX, !1;
  }
  function r() {
    N.removeClass(e.__closeButton, $e.CLASS_DRAG), N.unbind(window, "mousemove", i), N.unbind(window, "mouseup", r);
  }
  function a(n) {
    return n.preventDefault(), t = n.clientX, N.addClass(e.__closeButton, $e.CLASS_DRAG), N.bind(window, "mousemove", i), N.bind(window, "mouseup", r), !1;
  }
  N.bind(e.__resize_handle, "mousedown", a), N.bind(e.__closeButton, "mousedown", a), e.domElement.insertBefore(e.__resize_handle, e.domElement.firstElementChild);
}
function Qa(e, t) {
  e.domElement.style.width = t + "px", e.__save_row && e.autoPlace && (e.__save_row.style.width = t + "px"), e.__closeButton && (e.__closeButton.style.width = t + "px");
}
function qr(e, t) {
  var i = {};
  return Y.each(e.__rememberedObjects, function(r, a) {
    var n = {}, s = e.__rememberedObjectIndecesToControllers[a];
    Y.each(s, function(o, l) {
      n[l] = t ? o.initialValue : o.getValue();
    }), i[a] = n;
  }), i;
}
function Ch(e) {
  for (var t = 0; t < e.__preset_select.length; t++) e.__preset_select[t].value === e.preset && (e.__preset_select.selectedIndex = t);
}
function eo(e) {
  e.length !== 0 && Mh.call(window, function() {
    eo(e);
  }), Y.each(e, function(t) {
    t.updateDisplay();
  });
}
var _s = { noise: `
  // MATHS
  vec3 permute(vec3 x) { return mod(((x*34.0)+1.0)*x, 289.0); }
  vec4 permute(vec4 x){return mod(((x*34.0)+1.0)*x, 289.0);}
  float permute(float x){return floor(mod(((x*34.0)+1.0)*x, 289.0));}

  vec4 taylorInvSqrt(vec4 r){return 1.79284291400159 - 0.85373472095314 * r;}
  float taylorInvSqrt(float r){return 1.79284291400159 - 0.85373472095314 * r;}

  // SIMPLEX NOISES
  // Simplex 2D noise
  //
  float snoise(vec2 v){
    const vec4 C = vec4(0.211324865405187, 0.366025403784439,
            -0.577350269189626, 0.024390243902439);
    vec2 i  = floor(v + dot(v, C.yy) );
    vec2 x0 = v -   i + dot(i, C.xx);
    vec2 i1;
    i1 = (x0.x > x0.y) ? vec2(1.0, 0.0) : vec2(0.0, 1.0);
    vec4 x12 = x0.xyxy + C.xxzz;
    x12.xy -= i1;
    i = mod(i, 289.0);
    vec3 p = permute( permute( i.y + vec3(0.0, i1.y, 1.0 ))
    + i.x + vec3(0.0, i1.x, 1.0 ));
    vec3 m = max(0.5 - vec3(dot(x0,x0), dot(x12.xy,x12.xy),
      dot(x12.zw,x12.zw)), 0.0);
    m = m*m ;
    m = m*m ;
    vec3 x = 2.0 * fract(p * C.www) - 1.0;
    vec3 h = abs(x) - 0.5;
    vec3 ox = floor(x + 0.5);
    vec3 a0 = x - ox;
    m *= 1.79284291400159 - 0.85373472095314 * ( a0*a0 + h*h );
    vec3 g;
    g.x  = a0.x  * x0.x  + h.x  * x0.y;
    g.yz = a0.yz * x12.xz + h.yz * x12.yw;
    return 130.0 * dot(m, g);
  }

  //	Simplex 3D Noise
  //	by Ian McEwan, Ashima Arts
  //
  float snoise(vec3 v){
    const vec2  C = vec2(1.0/6.0, 1.0/3.0) ;
    const vec4  D = vec4(0.0, 0.5, 1.0, 2.0);

  // First corner
    vec3 i  = floor(v + dot(v, C.yyy) );
    vec3 x0 =   v - i + dot(i, C.xxx) ;

  // Other corners
    vec3 g = step(x0.yzx, x0.xyz);
    vec3 l = 1.0 - g;
    vec3 i1 = min( g.xyz, l.zxy );
    vec3 i2 = max( g.xyz, l.zxy );

    //  x0 = x0 - 0. + 0.0 * C
    vec3 x1 = x0 - i1 + 1.0 * C.xxx;
    vec3 x2 = x0 - i2 + 2.0 * C.xxx;
    vec3 x3 = x0 - 1. + 3.0 * C.xxx;

  // Permutations
    i = mod(i, 289.0 );
    vec4 p = permute( permute( permute(
              i.z + vec4(0.0, i1.z, i2.z, 1.0 ))
            + i.y + vec4(0.0, i1.y, i2.y, 1.0 ))
            + i.x + vec4(0.0, i1.x, i2.x, 1.0 ));

  // Gradients
  // ( N*N points uniformly over a square, mapped onto an octahedron.)
    float n_ = 1.0/7.0; // N=7
    vec3  ns = n_ * D.wyz - D.xzx;

    vec4 j = p - 49.0 * floor(p * ns.z *ns.z);  //  mod(p,N*N)

    vec4 x_ = floor(j * ns.z);
    vec4 y_ = floor(j - 7.0 * x_ );    // mod(j,N)

    vec4 x = x_ *ns.x + ns.yyyy;
    vec4 y = y_ *ns.x + ns.yyyy;
    vec4 h = 1.0 - abs(x) - abs(y);

    vec4 b0 = vec4( x.xy, y.xy );
    vec4 b1 = vec4( x.zw, y.zw );

    vec4 s0 = floor(b0)*2.0 + 1.0;
    vec4 s1 = floor(b1)*2.0 + 1.0;
    vec4 sh = -step(h, vec4(0.0));

    vec4 a0 = b0.xzyw + s0.xzyw*sh.xxyy ;
    vec4 a1 = b1.xzyw + s1.xzyw*sh.zzww ;

    vec3 p0 = vec3(a0.xy,h.x);
    vec3 p1 = vec3(a0.zw,h.y);
    vec3 p2 = vec3(a1.xy,h.z);
    vec3 p3 = vec3(a1.zw,h.w);

  //Normalise gradients
    vec4 norm = taylorInvSqrt(vec4(dot(p0,p0), dot(p1,p1), dot(p2, p2), dot(p3,p3)));
    p0 *= norm.x;
    p1 *= norm.y;
    p2 *= norm.z;
    p3 *= norm.w;

  // Mix final noise value
    vec4 m = max(0.6 - vec4(dot(x0,x0), dot(x1,x1), dot(x2,x2), dot(x3,x3)), 0.0);
    m = m * m;
    return 42.0 * dot( m*m, vec4( dot(p0,x0), dot(p1,x1),
                                  dot(p2,x2), dot(p3,x3) ) );
  }


  //	Simplex 4D Noise
  //	by Ian McEwan, Ashima Arts
  //
  vec4 grad4(float j, vec4 ip){
    const vec4 ones = vec4(1.0, 1.0, 1.0, -1.0);
    vec4 p,s;

    p.xyz = floor( fract (vec3(j) * ip.xyz) * 7.0) * ip.z - 1.0;
    p.w = 1.5 - dot(abs(p.xyz), ones.xyz);
    s = vec4(lessThan(p, vec4(0.0)));
    p.xyz = p.xyz + (s.xyz*2.0 - 1.0) * s.www;

    return p;
  }

  float snoise(vec4 v){
    const vec2  C = vec2( 0.138196601125010504,  // (5 - sqrt(5))/20  G4
                          0.309016994374947451); // (sqrt(5) - 1)/4   F4
  // First corner
    vec4 i  = floor(v + dot(v, C.yyyy) );
    vec4 x0 = v -   i + dot(i, C.xxxx);

  // Other corners

  // Rank sorting originally contributed by Bill Licea-Kane, AMD (formerly ATI)
    vec4 i0;

    vec3 isX = step( x0.yzw, x0.xxx );
    vec3 isYZ = step( x0.zww, x0.yyz );
  //  i0.x = dot( isX, vec3( 1.0 ) );
    i0.x = isX.x + isX.y + isX.z;
    i0.yzw = 1.0 - isX;

  //  i0.y += dot( isYZ.xy, vec2( 1.0 ) );
    i0.y += isYZ.x + isYZ.y;
    i0.zw += 1.0 - isYZ.xy;

    i0.z += isYZ.z;
    i0.w += 1.0 - isYZ.z;

    // i0 now contains the unique values 0,1,2,3 in each channel
    vec4 i3 = clamp( i0, 0.0, 1.0 );
    vec4 i2 = clamp( i0-1.0, 0.0, 1.0 );
    vec4 i1 = clamp( i0-2.0, 0.0, 1.0 );

    //  x0 = x0 - 0.0 + 0.0 * C
    vec4 x1 = x0 - i1 + 1.0 * C.xxxx;
    vec4 x2 = x0 - i2 + 2.0 * C.xxxx;
    vec4 x3 = x0 - i3 + 3.0 * C.xxxx;
    vec4 x4 = x0 - 1.0 + 4.0 * C.xxxx;

  // Permutations
    i = mod(i, 289.0);
    float j0 = permute( permute( permute( permute(i.w) + i.z) + i.y) + i.x);
    vec4 j1 = permute( permute( permute( permute (
              i.w + vec4(i1.w, i2.w, i3.w, 1.0 ))
            + i.z + vec4(i1.z, i2.z, i3.z, 1.0 ))
            + i.y + vec4(i1.y, i2.y, i3.y, 1.0 ))
            + i.x + vec4(i1.x, i2.x, i3.x, 1.0 ));
  // Gradients
  // ( 7*7*6 points uniformly over a cube, mapped onto a 4-octahedron.)
  // 7*7*6 = 294, which is close to the ring size 17*17 = 289.

    vec4 ip = vec4(1.0/294.0, 1.0/49.0, 1.0/7.0, 0.0) ;

    vec4 p0 = grad4(j0,   ip);
    vec4 p1 = grad4(j1.x, ip);
    vec4 p2 = grad4(j1.y, ip);
    vec4 p3 = grad4(j1.z, ip);
    vec4 p4 = grad4(j1.w, ip);

  // Normalise gradients
    vec4 norm = taylorInvSqrt(vec4(dot(p0,p0), dot(p1,p1), dot(p2, p2), dot(p3,p3)));
    p0 *= norm.x;
    p1 *= norm.y;
    p2 *= norm.z;
    p3 *= norm.w;
    p4 *= taylorInvSqrt(dot(p4,p4));

  // Mix contributions from the five corners
    vec3 m0 = max(0.6 - vec3(dot(x0,x0), dot(x1,x1), dot(x2,x2)), 0.0);
    vec2 m1 = max(0.6 - vec2(dot(x3,x3), dot(x4,x4)            ), 0.0);
    m0 = m0 * m0;
    m1 = m1 * m1;
    return 49.0 * ( dot(m0*m0, vec3( dot( p0, x0 ), dot( p1, x1 ), dot( p2, x2 )))
                + dot(m1*m1, vec2( dot( p3, x3 ), dot( p4, x4 ) ) ) ) ;

  }
` }, to = Ti(((e, t) => {
  function i(a) {
    var n = a.length, s = 1, o = Array(n), l;
    for (l = n; l > 0; l--) o[l - 1] = s, s *= a[l - 1];
    return { stride: o, data: new Uint32Array(s) };
  }
  function r(a) {
    var n = a.length, s = 1, o = Array(n), l = [], c, u;
    for (c = n; c > 0; c--) o[c - 1] = s, s *= a[c - 1];
    for (u = 0; u < s; u++) l.push([]);
    return { stride: o, data: l };
  }
  t.exports = { integer: i, array: r };
})), io = Ti(((e, t) => {
  t.exports = i;
  function i(r, a) {
    var n = Array(r), s = Math.floor(r / 2) << 1, o = 0, l, c, u, h, d;
    for (d = 0; d < s; d += 2) l = -2 * Math.log(a()), c = Math.sqrt(l), u = 2 * Math.PI * a(), o += l, n[d] = c * Math.cos(u), n[d + 1] = c * Math.sin(u);
    if (r % 2) {
      var m = Math.sqrt(-2 * Math.log(a())) * Math.cos(2 * Math.PI * a());
      n[r - 1] = m, o += m ** 2;
    }
    for (h = 1 / Math.sqrt(o), d = 0; d < r; ++d) n[d] *= h;
    return n;
  }
})), Ph = Ti(((e, t) => {
  t.exports = function(i, r) {
    i || (i = 1), r || (r = 2);
    for (var a = i * 2 + 1, n = a ** +r - 1, s = Array(n), o = 0; o < n; o++) for (var l = s[o] = Array(r), c = o < n / 2 ? o : o + 1, u = 1; u <= r; u++) {
      var h = c % a ** +u;
      l[u - 1] = h / a ** (u - 1) - i, c -= h;
    }
    return s;
  };
})), ro = Ti(((e, t) => {
  var i = Ph();
  function r(s) {
    var o = i(2, s), l = [], c;
    for (o = o.filter(function(u) {
      for (var h = 0, d = 0; d < s; d++) h += Math.max(0, Math.abs(u[d]) - 1) ** 2;
      return h < s;
    }), c = 0; c < s; c++) l.push(0);
    return o.push(l), o.sort(function(u, h) {
      var d = 0, m = 0, x;
      for (x = 0; x < s; x++) d += u[x] ** 2, m += h[x] ** 2;
      return d < m ? -1 : +(d > m);
    }), o;
  }
  var a = {};
  function n(s) {
    return a[s] || (a[s] = r(s)), a[s];
  }
  t.exports = n;
})), Dh = Ti(((e, t) => {
  var i = to().integer, r = io(), a = ro();
  function n(o, l) {
    for (var c = 0, u = 0; u < o.length; u++) c += (o[u] - l[u]) ** 2;
    return c;
  }
  function s(o, l) {
    if (typeof o.distanceFunction == "function") throw Error("PoissonDiskSampling: Tried to instantiate the fixed density implementation with a distanceFunction");
    this.shape = o.shape, this.minDistance = o.minDistance, this.maxDistance = o.maxDistance || o.minDistance * 2, this.maxTries = Math.ceil(Math.max(1, o.tries || 30)), this.rng = l || Math.random;
    for (var c = 0, u = 0; u < this.shape.length; u++) c = Math.max(c, this.shape[u]);
    var h = 1e-14 * Math.max(1, c / 128 | 0);
    this.dimension = this.shape.length, this.squaredMinDistance = this.minDistance * this.minDistance, this.minDistancePlusEpsilon = this.minDistance + h, this.deltaDistance = Math.max(0, this.maxDistance - this.minDistancePlusEpsilon), this.cellSize = this.minDistance / Math.sqrt(this.dimension), this.neighbourhood = a(this.dimension), this.currentPoint = null, this.processList = [], this.samplePoints = [], this.gridShape = [];
    for (var u = 0; u < this.dimension; u++) this.gridShape.push(Math.ceil(this.shape[u] / this.cellSize));
    this.grid = i(this.gridShape);
  }
  s.prototype.shape = null, s.prototype.dimension = null, s.prototype.minDistance = null, s.prototype.maxDistance = null, s.prototype.minDistancePlusEpsilon = null, s.prototype.squaredMinDistance = null, s.prototype.deltaDistance = null, s.prototype.cellSize = null, s.prototype.maxTries = null, s.prototype.rng = null, s.prototype.neighbourhood = null, s.prototype.currentPoint = null, s.prototype.processList = null, s.prototype.samplePoints = null, s.prototype.gridShape = null, s.prototype.grid = null, s.prototype.addRandomPoint = function() {
    for (var o = Array(this.dimension), l = 0; l < this.dimension; l++) o[l] = this.rng() * this.shape[l];
    return this.directAddPoint(o);
  }, s.prototype.addPoint = function(o) {
    var l, c = !0;
    if (o.length === this.dimension) for (l = 0; l < this.dimension && c; l++) c = o[l] >= 0 && o[l] < this.shape[l];
    else c = !1;
    return c ? this.directAddPoint(o) : null;
  }, s.prototype.directAddPoint = function(o) {
    var l = 0, c = this.grid.stride, u;
    for (this.processList.push(o), this.samplePoints.push(o), u = 0; u < this.dimension; u++) l += (o[u] / this.cellSize | 0) * c[u];
    return this.grid.data[l] = this.samplePoints.length, o;
  }, s.prototype.inNeighbourhood = function(o) {
    var l = this.dimension, c = this.grid.stride, u, h, d, m, x;
    for (u = 0; u < this.neighbourhood.length; u++) {
      for (h = 0, d = 0; d < l; d++) {
        if (m = (o[d] / this.cellSize | 0) + this.neighbourhood[u][d], m < 0 || m >= this.gridShape[d]) {
          h = -1;
          break;
        }
        h += m * c[d];
      }
      if (h !== -1 && this.grid.data[h] !== 0 && (x = this.samplePoints[this.grid.data[h] - 1], n(o, x) < this.squaredMinDistance)) return !0;
    }
    return !1;
  }, s.prototype.next = function() {
    for (var o, l, c, u, h, d, m; this.processList.length > 0; ) {
      for (this.currentPoint === null && (this.currentPoint = this.processList.shift()), u = this.currentPoint, o = 0; o < this.maxTries; o++) {
        for (d = !0, c = this.minDistancePlusEpsilon + this.deltaDistance * this.rng(), this.dimension === 2 ? (l = this.rng() * Math.PI * 2, h = [Math.cos(l), Math.sin(l)]) : h = r(this.dimension, this.rng), m = 0; d && m < this.dimension; m++) h[m] = u[m] + h[m] * c, d = h[m] >= 0 && h[m] < this.shape[m];
        if (d && !this.inNeighbourhood(h)) return this.directAddPoint(h);
      }
      o === this.maxTries && (this.currentPoint = null);
    }
    return null;
  }, s.prototype.fill = function() {
    for (this.samplePoints.length === 0 && this.addRandomPoint(); this.next(); ) ;
    return this.samplePoints;
  }, s.prototype.getAllPoints = function() {
    return this.samplePoints;
  }, s.prototype.getAllPointsWithDistance = function() {
    throw Error("PoissonDiskSampling: getAllPointsWithDistance() is not available in fixed-density implementation");
  }, s.prototype.reset = function() {
    var o = this.grid.data, l = 0;
    for (l = 0; l < o.length; l++) o[l] = 0;
    this.samplePoints = [], this.currentPoint = null, this.processList.length = 0;
  }, t.exports = s;
})), Lh = Ti(((e, t) => {
  var i = to().array, r = io(), a = ro();
  function n(o, l) {
    for (var c = 0, u = 0; u < o.length; u++) c += (o[u] - l[u]) ** 2;
    return Math.sqrt(c);
  }
  function s(o, l) {
    if (typeof o.distanceFunction != "function") throw Error("PoissonDiskSampling: Tried to instantiate the variable density implementation without a distanceFunction");
    this.shape = o.shape, this.minDistance = o.minDistance, this.maxDistance = o.maxDistance || o.minDistance * 2, this.maxTries = Math.ceil(Math.max(1, o.tries || 30)), this.distanceFunction = o.distanceFunction, this.bias = Math.max(0, Math.min(1, o.bias || 0)), this.rng = l || Math.random;
    for (var c = 0, u = 0; u < this.shape.length; u++) c = Math.max(c, this.shape[u]);
    var h = 1e-14 * Math.max(1, c / 128 | 0);
    this.dimension = this.shape.length, this.minDistancePlusEpsilon = this.minDistance + h, this.deltaDistance = Math.max(0, this.maxDistance - this.minDistancePlusEpsilon), this.cellSize = this.maxDistance / Math.sqrt(this.dimension), this.neighbourhood = a(this.dimension), this.currentPoint = null, this.currentDistance = 0, this.processList = [], this.samplePoints = [], this.sampleDistance = [], this.gridShape = [];
    for (var u = 0; u < this.dimension; u++) this.gridShape.push(Math.ceil(this.shape[u] / this.cellSize));
    this.grid = i(this.gridShape);
  }
  s.prototype.shape = null, s.prototype.dimension = null, s.prototype.minDistance = null, s.prototype.maxDistance = null, s.prototype.minDistancePlusEpsilon = null, s.prototype.deltaDistance = null, s.prototype.cellSize = null, s.prototype.maxTries = null, s.prototype.distanceFunction = null, s.prototype.bias = null, s.prototype.rng = null, s.prototype.neighbourhood = null, s.prototype.currentPoint = null, s.prototype.currentDistance = null, s.prototype.processList = null, s.prototype.samplePoints = null, s.prototype.sampleDistance = null, s.prototype.gridShape = null, s.prototype.grid = null, s.prototype.addRandomPoint = function() {
    for (var o = Array(this.dimension), l = 0; l < this.dimension; l++) o[l] = this.rng() * this.shape[l];
    return this.directAddPoint(o);
  }, s.prototype.addPoint = function(o) {
    var l, c = !0;
    if (o.length === this.dimension) for (l = 0; l < this.dimension && c; l++) c = o[l] >= 0 && o[l] < this.shape[l];
    else c = !1;
    return c ? this.directAddPoint(o) : null;
  }, s.prototype.directAddPoint = function(o) {
    var l = 0, c = this.grid.stride, u = this.samplePoints.length, h;
    for (this.processList.push(u), this.samplePoints.push(o), this.sampleDistance.push(this.distanceFunction(o)), h = 0; h < this.dimension; h++) l += (o[h] / this.cellSize | 0) * c[h];
    return this.grid.data[l].push(u), o;
  }, s.prototype.inNeighbourhood = function(o) {
    var l = this.dimension, c = this.grid.stride, u, h, d, m, x, _, f = this.distanceFunction(o);
    for (u = 0; u < this.neighbourhood.length; u++) {
      for (h = 0, d = 0; d < l; d++) {
        if (m = (o[d] / this.cellSize | 0) + this.neighbourhood[u][d], m < 0 || m >= this.gridShape[d]) {
          h = -1;
          break;
        }
        h += m * c[d];
      }
      if (h !== -1 && this.grid.data[h].length > 0) for (var p = 0; p < this.grid.data[h].length; p++) {
        x = this.samplePoints[this.grid.data[h][p]], _ = this.sampleDistance[this.grid.data[h][p]];
        var R = Math.min(_, f), y = R + (Math.max(_, f) - R) * this.bias;
        if (n(o, x) < this.minDistance + this.deltaDistance * y) return !0;
      }
    }
    return !1;
  }, s.prototype.next = function() {
    for (var o, l, c, u, h, d, m, x; this.processList.length > 0; ) {
      if (this.currentPoint === null) {
        var _ = this.processList.shift();
        this.currentPoint = this.samplePoints[_], this.currentDistance = this.sampleDistance[_];
      }
      for (u = this.currentPoint, h = this.currentDistance, o = 0; o < this.maxTries; o++) {
        for (m = !0, c = this.minDistancePlusEpsilon + this.deltaDistance * (h + (1 - h) * this.bias), this.dimension === 2 ? (l = this.rng() * Math.PI * 2, d = [Math.cos(l), Math.sin(l)]) : d = r(this.dimension, this.rng), x = 0; m && x < this.dimension; x++) d[x] = u[x] + d[x] * c, m = d[x] >= 0 && d[x] < this.shape[x];
        if (m && !this.inNeighbourhood(d)) return this.directAddPoint(d);
      }
      o === this.maxTries && (this.currentPoint = null);
    }
    return null;
  }, s.prototype.fill = function() {
    for (this.samplePoints.length === 0 && this.addRandomPoint(); this.next(); ) ;
    return this.samplePoints;
  }, s.prototype.getAllPoints = function() {
    return this.samplePoints;
  }, s.prototype.getAllPointsWithDistance = function() {
    var o = Array(this.samplePoints.length), l = 0, c = 0, u;
    for (l = 0; l < this.samplePoints.length; l++) {
      for (u = Array(this.dimension + 1), c = 0; c < this.dimension; c++) u[c] = this.samplePoints[l][c];
      u[this.dimension] = this.sampleDistance[l], o[l] = u;
    }
    return o;
  }, s.prototype.reset = function() {
    var o = this.grid.data, l = 0;
    for (l = 0; l < o.length; l++) o[l] = [];
    this.samplePoints = [], this.currentPoint = null, this.processList.length = 0;
  }, t.exports = s;
})), Uh = Ti(((e, t) => {
  var i = Dh(), r = Lh();
  function a(n, s) {
    this.shape = n.shape, typeof n.distanceFunction == "function" ? this.implementation = new r(n, s) : this.implementation = new i(n, s);
  }
  a.prototype.implementation = null, a.prototype.addRandomPoint = function() {
    return this.implementation.addRandomPoint();
  }, a.prototype.addPoint = function(n) {
    return this.implementation.addPoint(n);
  }, a.prototype.next = function() {
    return this.implementation.next();
  }, a.prototype.fill = function() {
    return this.implementation.fill();
  }, a.prototype.getAllPoints = function() {
    return this.implementation.getAllPoints();
  }, a.prototype.getAllPointsWithDistance = function() {
    return this.implementation.getAllPointsWithDistance();
  }, a.prototype.reset = function() {
    this.implementation.reset();
  }, t.exports = a;
})), Ih = class {
  constructor() {
    this.MAX_VERTICES = 256, this.MAX_VERTICES_MASK = this.MAX_VERTICES - 1, this.amplitude = 1, this.scale = 1, this.r = [];
    for (var e = 0; e < this.MAX_VERTICES; ++e) this.r.push(Math.random());
  }
  getVal(e) {
    var t = e * this.scale, i = Math.floor(t), r = t - i, a = r * r * (3 - 2 * r), n = i % this.MAX_VERTICES_MASK, s = (n + 1) % this.MAX_VERTICES_MASK;
    return this.lerp(this.r[n], this.r[s], a) * this.amplitude;
  }
  lerp(e, t, i) {
    return e * (1 - i) + t * i;
  }
}, gi = new class {
  constructor() {
    this.cursor = new ke(), this.initEvents(), window.__debugMouse = this, this.screenWidth = window.innerWidth, this.screenHeight = window.innerHeight, this.update();
  }
  initEvents() {
    window.addEventListener("mousemove", (e) => {
      this.onMouve(e);
    }), window.addEventListener("resize", () => {
      this.screenWidth = window.innerWidth, this.screenHeight = window.innerHeight;
    });
  }
  onMouve(e) {
    this.cursor.x = e.clientX, this.cursor.y = e.clientY;
  }
  update() {
    requestAnimationFrame(() => {
      this.update();
    });
  }
}(), Nh = _o(Uh()), vs = (e, t, i, r, a) => (e - t) * (a - r) / (i - t) + r, Oh = class {
  constructor(e) {
    this.scene = e, this.renderer = e.renderer, this.gl = this.gl, this.camera = e.camera, this.lastTime = 0, this.everRendered = !1, this.ringPos = new ke(0, 0), this.cursorPos = new ke(0, 0), this.colorScheme = e.theme === "dark" ? 0 : 1, this.particleScale = this.scene.renderer.domElement.width / this.scene.pixelRatio / 2e3 * this.scene.particlesScale, this.createPoints(), this.init();
  }
  createPoints() {
    let e = new Nh.default({ shape: [500, 500], minDistance: vs(this.scene.density, 0, 300, 10, 2), maxDistance: vs(this.scene.density, 0, 300, 11, 3), tries: 20 }).fill();
    this.pointsData = [];
    for (let t = 0; t < e.length; t++) this.pointsData.push(e[t][0] - 250, e[t][1] - 250);
    this.count = this.pointsData.length / 2;
  }
  createDataTexturePosition() {
    let e = new Float32Array(this.length * 4);
    for (let i = 0; i < this.count; i++) {
      let r = i * 4;
      e[r + 0] = this.pointsData[i * 2 + 0] * (1 / 250), e[r + 1] = this.pointsData[i * 2 + 1] * (1 / 250), e[r + 2] = 0, e[r + 3] = 0;
    }
    let t = new Xl(e, this.size, this.size, Ei, ta);
    return t.needsUpdate = !0, t;
  }
  createRenderTarget() {
    return new ai(this.size, this.size, { wrapS: hr, wrapT: hr, minFilter: Tt, magFilter: Tt, texture: this.posTex, format: Ei, type: ia, depthBuffer: !1, stencilBuffer: !1 });
  }
  init() {
    this.size = 256, this.length = this.size * this.size, this.posTex = this.createDataTexturePosition(), this.rt1 = this.createRenderTarget(), this.rt2 = this.createRenderTarget(), this.renderer.setRenderTarget(this.rt1), this.renderer.setClearColor(0, 0), this.renderer.clear(), this.renderer.setRenderTarget(this.rt2), this.renderer.setClearColor(0, 0), this.renderer.clear(), this.renderer.setRenderTarget(null), this.noise = new Ih(), this.simScene = new Fs(), this.simCamera = new Vs(-1, 1, 1, -1, 0, 1), this.simMaterial = new Xt({ uniforms: { uPosition: { value: this.posTex }, uPosRefs: { value: this.posTex }, uRingPos: { value: new ke(0, 0) }, uRingRadius: { value: 0.2 }, uDeltaTime: { value: 0 }, uRingWidth: { value: 0.05 }, uRingWidth2: { value: 0.015 }, uRingDisplacement: { value: this.scene.ringDisplacement }, uTime: { value: 0 } }, vertexShader: `
                void main() {
                    gl_Position = vec4(position, 1.0);
                }
            `, fragmentShader: `
                precision highp float;
                uniform sampler2D uPosition;
                uniform sampler2D uPosRefs;
                uniform vec2 uRingPos;
                uniform float uTime;
                uniform float uDeltaTime;
                uniform float uRingRadius;

                uniform float uRingWidth;
                uniform float uRingWidth2;
                uniform float uRingDisplacement;

                ${_s.noise}

                void main() {

                    vec2 simTexCoords = gl_FragCoord.xy / vec2(${this.size.toFixed(1)}, ${this.size.toFixed(1)});
                    vec4 pFrame = texture2D(uPosition, simTexCoords);
                    // float pTime = pFrame.w - uDeltaTime;

                    float scale = pFrame.z;
                    float velocity = pFrame.w;
                    vec2 refPos = texture2D(uPosRefs, simTexCoords).xy;

                    float time = uTime * .5;
                    vec2 curentPos = refPos;

                    vec2 pos = pFrame.xy;
                    pos *= .8;

                    float dist = distance(curentPos.xy, uRingPos);
                    float noise0 = snoise(vec3(curentPos.xy * .2 + vec2(18.4924, 72.9744), time * 0.5));
                    float dist1 = distance(curentPos.xy + (noise0 * .005), uRingPos);


                    float t = smoothstep(uRingRadius - (uRingWidth * 2.), uRingRadius, dist) - smoothstep(uRingRadius, uRingRadius + uRingWidth, dist1);
                    float t2 = smoothstep(uRingRadius - (uRingWidth2 * 2.), uRingRadius, dist) - smoothstep(uRingRadius, uRingRadius + uRingWidth2, dist1);
                    float t3 = smoothstep(uRingRadius + uRingWidth2, uRingRadius, dist);

                    t = pow(t, 2.);
                    t2 = pow(t2, 3.);

                    t += t2 * 3.;
                    t += t3 * .4;
                    t += snoise(vec3(curentPos.xy * 30. + vec2(11.4924, 12.9744), time * 0.5)) * t3 * .5;

                    float nS = snoise(vec3(curentPos.xy * 2. + vec2(18.4924, 72.9744), time * 0.5));
                    t += pow((nS + 1.5) * .5, 2.) * .6;

                    // Mid scale noise
                    float noise1 = snoise(vec3(curentPos.xy * 4. + vec2(88.494, 32.4397), time * 0.35));
                    float noise2 = snoise(vec3(curentPos.xy * 4. + vec2(50.904, 120.947), time * 0.35));

                    // Close scale noise
                    float noise3 = snoise(vec3(curentPos.xy * 20. + vec2(18.4924, 72.9744), time * .5));
                    float noise4 = snoise(vec3(curentPos.xy * 20. + vec2(50.904, 120.947), time * .5));

                    // Far scale noise
                    // float noise5 = snoise(vec3(curentPos.xy * .5 + vec2(89.4924, 12.9744), time * 0.1));
                    // float noise6 = snoise(vec3(curentPos.xy * .5 + vec2(70.904, 120.947), time * 0.1));

                    vec2 disp = vec2(noise1, noise2) * .03;
                    disp += vec2(noise3, noise4) * .005;
                    // disp += vec2(noise5, noise6) * .05;

                    // Sin wave
                    disp.x += sin((refPos.x * 20.) + (time * 4.)) * .02 * clamp(dist, 0., 1.);
                    disp.y += cos((refPos.y * 20.) + (time * 3.)) * .02 * clamp(dist, 0., 1.);

                    pos -= (uRingPos - (curentPos + disp)) * pow(t2, .75) * uRingDisplacement;

                    // Add min scale
                    // t += .25;


                    // Add scale
                    float scaleDiff = t - scale;
                    scaleDiff *= .2;
                    scale += scaleDiff;


                    // Final position
                    vec2 finalPos = curentPos + disp + (pos * .25);

                    velocity *= .5;
                    velocity += scale * .25;

                    vec4 frame = vec4(finalPos, scale, velocity);

                    gl_FragColor = frame;

                }
            ` });
    let e = new Ot(new aa(2, 2), this.simMaterial);
    this.simScene.add(e);
    let t = new wi(), i = new Float32Array(this.count * 2), r = new Float32Array(this.count * 3), a = new Float32Array(this.count * 4);
    for (let n = 0; n < this.count; n++) {
      let s = n % this.size, o = Math.floor(n / this.size);
      i[n * 2] = s / this.size, i[n * 2 + 1] = o / this.size;
    }
    for (let n = 0; n < this.count; n++) a[n * 4] = Math.random(), a[n * 4 + 1] = Math.random(), a[n * 4 + 2] = Math.random(), a[n * 4 + 3] = Math.random();
    t.setAttribute("position", new bt(r, 3)), t.setAttribute("uv", new bt(i, 2)), t.setAttribute("seeds", new bt(a, 4)), this.renderMaterial = new Xt({ uniforms: { uPosition: { value: this.posTex }, uTime: { value: 0 }, uColor1: { value: new He(this.scene.colorControls.color1) }, uColor2: { value: new He(this.scene.colorControls.color2) }, uColor3: { value: new He(this.scene.colorControls.color3) }, uAlpha: { value: 1 }, uRingPos: { value: new ke(0, 0) }, uRez: { value: new ke(this.scene.renderer.domElement.width, this.scene.renderer.domElement.height) }, uParticleScale: { value: this.particleScale }, uPixelRatio: { value: this.scene.pixelRatio }, uColorScheme: { value: this.colorScheme } }, vertexShader: `
                precision highp float;
                attribute vec4 seeds;

                uniform sampler2D uPosition;
                uniform float uTime;
                uniform float uParticleScale;
                uniform float uPixelRatio;
                uniform int uColorScheme;

                varying vec4 vSeeds;
                varying float vVelocity;
                varying vec2 vLocalPos;
                varying vec2 vScreenPos;
                varying float vScale;

                void main() {

                    vec4 pos = texture2D(uPosition, uv);
                    vSeeds = seeds;

                    vVelocity = pos.w;
                    vScale = pos.z;
                    vLocalPos = pos.xy;
                    vec4 viewSpace  = modelViewMatrix * vec4(vec3(pos.xy, 0.), 1.0);

                    gl_Position = projectionMatrix * viewSpace;
                    vScreenPos = gl_Position.xy;

                    gl_PointSize = ((vScale * 7.) * (uPixelRatio * 0.5) * uParticleScale);

                }
            `, fragmentShader: `
                precision highp float;

                varying vec4 vSeeds;
                varying vec2 vScreenPos;
                varying vec2 vLocalPos;
                varying float vScale;
                varying float vVelocity;

                uniform vec3 uColor1;
                uniform vec3 uColor2;
                uniform vec3 uColor3;

                uniform vec2 uRingPos;
                uniform vec2 uRez;

                uniform float uAlpha;
                uniform float uTime;

                uniform int uColorScheme;

                ${_s.noise}

                #define PI 3.1415926535897932384626433832795

                float sdRoundBox( in vec2 p, in vec2 b, in vec4 r )
                {
                    r.xy = (p.x>0.0)?r.xy : r.zw;
                    r.x  = (p.y>0.0)?r.x  : r.y;
                    vec2 q = abs(p)-b+r.x;
                    return min(max(q.x,q.y),0.0) + length(max(q,0.0)) - r.x;
                }

                // rotate uv by angle
                vec2 rotate(vec2 v, float a) {
                    float s = sin(a);
                    float c = cos(a);
                    mat2 m = mat2(c, s, -s, c);
                    return m * v;
                }

                void main() {

                    float uBorderSize = 0.2;
                    vec2 center = vec2(.48, .4);
                    float ratio = uRez.x / uRez.y;

                    // Noise
                    float noiseAngle = snoise(vec3(vLocalPos * 10. + vec2(18.4924, 72.9744), uTime * .85));
                    float noiseColor = snoise(vec3(vLocalPos * 2. + vec2(74.664, 91.556), uTime * .5));
                    noiseColor = (noiseColor + 1.) * .5;

                    // get angle between
                    float angle = atan(vLocalPos.y - uRingPos.y, vLocalPos.x - uRingPos.x);

                    vec2 uv = gl_PointCoord.xy;
                    uv -= vec2(0.5);
                    uv.y *= -1.;
                    uv = rotate(uv, -angle + (noiseAngle * .5));

                    vec2 tuv = vScreenPos;
                    tuv = rotate(tuv, uTime * 1.);
                    tuv.y *= 1./ratio;
                    tuv += .5;

                    float h = 0.8; // adjust position of middleColor
                    float progress = smoothstep(0., .75, pow(noiseColor, 2.));
                    vec3 col = mix(mix(uColor1, uColor2, progress/h), mix(uColor2, uColor3, (progress - h)/(1.0 - h)), step(h, progress));
                    vec3 color = col;

                    float dist = sqrt(dot(uv, uv));

                    float dr = .5;
                    float t = smoothstep(dr+(uBorderSize + .0001), dr-uBorderSize, dist);
                    t = clamp(t, 0., 1.);

                    float rounded = sdRoundBox(uv, vec2(0.5, 0.2), vec4(.25));
                    rounded = smoothstep(.1, 0., rounded);

                    float a = uAlpha * rounded * smoothstep(0.1, 0.2, vScale);

                    if(a < 0.01){
                        discard;
                    }

                    color = clamp(color, 0., 1.);
                    color = mix(color, color * clamp(vVelocity, 0., 1.), float(uColorScheme));

                    gl_FragColor = vec4(color, clamp(a, 0., 1.));

                    #ifdef SRGB_TRANSFER
                        gl_FragColor = sRGBTransferOETF( gl_FragColor );
                    #endif

                }
            `, transparent: !0, depthTest: !1, depthWrite: !1 }), this.mesh = new Zl(t, this.renderMaterial), this.mesh.position.set(0, 0, 0), this.mesh.scale.set(5, 5, 5), this.scene.scene.add(this.mesh);
  }
  resize() {
    this.renderMaterial.uniforms.uRez.value = new ke(this.scene.renderer.domElement.width, this.scene.renderer.domElement.height), this.renderMaterial.uniforms.uPixelRatio.value = this.scene.pixelRatio, this.renderMaterial.needsUpdate = !0;
  }
  update() {
    let e = this.scene.clock.getElapsedTime() - this.lastTime;
    this.lastTime = this.scene.clock.getElapsedTime();
    let t = (this.noise.getVal(this.scene.time * 0.66 + 94.234) - 0.5) * 2, i = (this.noise.getVal(this.scene.time * 0.75 + 21.028) - 0.5) * 2;
    this.cursorPos.set(t * 0.2, i * 0.1), this.scene.isIntersecting ? (this.cursorPos.set(this.scene.intersectionPoint.x * 0.175 + t * 0.1, this.scene.intersectionPoint.y * 0.175 + i * 0.1), this.ringPos.set(this.ringPos.x + (this.cursorPos.x - this.ringPos.x) * 0.02, this.ringPos.y + (this.cursorPos.y - this.ringPos.y) * 0.02)) : (this.cursorPos.set(t * 0.2, i * 0.1), this.ringPos.set(this.ringPos.x + (this.cursorPos.x - this.ringPos.x) * 0.01, this.ringPos.y + (this.cursorPos.y - this.ringPos.y) * 0.01)), this.particleScale = this.scene.renderer.domElement.width / this.scene.pixelRatio / 2e3 * this.scene.particlesScale, this.simMaterial.uniforms.uPosition.value = this.everRendered ? this.rt1.texture : this.posTex, this.simMaterial.uniforms.uTime.value = this.scene.clock.getElapsedTime(), this.simMaterial.uniforms.uDeltaTime.value = e, this.simMaterial.uniforms.uRingRadius.value = 0.175 + Math.sin(this.scene.time * 1) * 0.03 + Math.cos(this.scene.time * 3) * 0.02, this.simMaterial.uniforms.uRingPos.value = this.ringPos, this.simMaterial.uniforms.uRingWidth.value = this.scene.ringWidth, this.simMaterial.uniforms.uRingWidth2.value = this.scene.ringWidth2, this.simMaterial.uniforms.uRingDisplacement.value = this.scene.ringDisplacement, this.renderer.setRenderTarget(this.rt2), this.renderer.render(this.simScene, this.simCamera), this.renderer.setRenderTarget(null), this.renderMaterial.uniforms.uPosition.value = this.everRendered ? this.rt2.texture : this.posTex, this.renderMaterial.uniforms.uTime.value = this.scene.clock.getElapsedTime(), this.renderMaterial.uniforms.uRingPos.value = this.ringPos, this.renderMaterial.uniforms.uParticleScale.value = this.particleScale;
  }
  postRender() {
    let e = this.rt1;
    this.rt1 = this.rt2, this.rt2 = e, this.everRendered = !0;
  }
  kill() {
    this.mesh.geometry.dispose(), this.mesh.material.dispose(), this.rt1.dispose(), this.rt2.dispose(), this.posTex.dispose(), this.simMaterial.dispose(), this.renderMaterial.dispose();
  }
}, Fh = class {
  constructor(e) {
    this.loaded = !1, this.texture = null, this.options = e, this.theme = e.theme || "dark", this.interactive = e.interactive || !1, this.options.background = this.theme === "dark" ? new He(0) : new He(16777215), this.pixelRatio = e.pixelRatio || window.devicePixelRatio, this.particlesScale = e.particlesScale || 1, this.density = e.density || 200, this.verbose = e.verbose || !1, this.scene = new Fs(), this.scene.background = this.options.background, this.canvas = document.createElement("canvas"), this.options.container.appendChild(this.canvas), this.canvas.width = this.options.container.offsetWidth, this.canvas.height = this.options.container.offsetHeight, We.enabled = !1, this.renderer = new oh({ canvas: this.canvas, antialias: !0, alpha: !0, powerPreference: "high-performance", preserveDrawingBuffer: !0, stencil: !1, precision: "highp" }), this.gl = this.renderer.getContext(), this.renderer.extensions.get("EXT_color_buffer_float"), this.renderer.setSize(this.canvas.width, this.canvas.height), this.renderer.setPixelRatio(this.pixelRatio), this.onWindowResize = this.onWindowResize.bind(this), this.initCamera(), this.initScene(), this.initEvents(), this.clock = new ec(), this.time = 0, this.lastTime = 0, this.dt = 0, this.skipFrame = !1, this.isPaused = !1, this.raycaster = new rc(), this.mouse = new ke(), this.intersectionPoint = new F(), this.isIntersecting = !1, this.mouseIsOver = !1, this.raycastPlane = new Ot(new aa(12.5, 12.5), new sn({ color: 16711680, visible: !1, side: 2 })), this.scene.add(this.raycastPlane);
  }
  initEvents() {
    window.addEventListener("resize", (e) => {
      this.onWindowResize();
    });
  }
  onWindowResize() {
    this.canvas.width = this.options.container.offsetWidth, this.canvas.height = this.options.container.offsetHeight, this.renderer.setSize(this.canvas.width, this.canvas.height), this.camera.aspect = this.canvas.width / this.canvas.height, this.camera.updateProjectionMatrix(), this.particles && this.particles.resize();
  }
  initCamera() {
    this.camera = new Ct(40, this.gl.drawingBufferWidth / this.gl.drawingBufferHeight, 0.1, 1e3), this.camera.position.z = 3.1;
  }
  initScene() {
    this.colorControls = { color1: this.theme === "dark" ? "#7189ff" : "#2c64ed", color2: this.theme === "dark" ? "#3074f9" : "#f84242", color3: this.theme === "dark" ? "#000000" : "#ffcf03" }, this.ringWidth = this.options.ringWidth || 0.107, this.ringWidth2 = this.options.ringWidth2 || 0.05, this.ringDisplacement = this.options.ringDisplacement || 0.15, this.initParticles(), this.onLoaded();
  }
  initParticles() {
    this.particles = new Oh(this);
  }
  stop() {
    this.isPaused = !0, this.clock.stop(), this.verbose;
  }
  resume() {
    this.isPaused = !1, this.clock.start(), this.verbose;
  }
  killParticles() {
    this.scene.remove(this.particles.mesh), this.particles.kill();
  }
  kill() {
    this.stop(), window.removeEventListener("resize", this.onWindowResize), this.raycastPlane && (this.scene.remove(this.raycastPlane), this.raycastPlane.geometry.dispose(), this.raycastPlane.material.dispose()), this.renderer && this.renderer.dispose(), this.canvas && this.canvas.parentElement && this.canvas.parentElement.removeChild(this.canvas);
  }
  onLoaded() {
    this.loaded = !0;
  }
  preRender() {
    if (this.dt = this.clock.getElapsedTime() - this.lastTime, this.lastTime = this.clock.getElapsedTime(), this.time += this.dt, this.particles.update(), this.interactive && !this.skipFrame) {
      let t = this.canvas.getBoundingClientRect();
      gi.cursor, this.mouse.x = (gi.cursor.x - t.left) * (gi.screenWidth / t.width), this.mouse.y = (gi.cursor.y - t.top) * (gi.screenHeight / t.height), this.mouse.x = this.mouse.x / gi.screenWidth * 2 - 1, this.mouse.y = -(this.mouse.y / gi.screenHeight) * 2 + 1, this.mouse.x < -1 || this.mouse.x > 1 || this.mouse.y < -1 || this.mouse.y > 1 ? this.mouseIsOver = !1 : this.mouseIsOver = !0;
    }
    if (this.skipFrame = !this.skipFrame, this.skipFrame) return;
    this.raycaster.setFromCamera(this.mouse, this.camera);
    let e = this.raycaster.intersectObject(this.raycastPlane);
    e.length > 0 && this.mouseIsOver ? (this.intersectionPoint.copy(e[0].point), this.isIntersecting = !0) : this.isIntersecting = !1;
  }
  render() {
    !this.loaded || this.isPaused || (this.preRender(), this.renderer.setRenderTarget(null), this.renderer.autoClear = !1, this.renderer.clear(), this.renderer.render(this.scene, this.camera), this.postRender());
  }
  postRender() {
    this.particles.postRender();
  }
};
class Bh {
  /**
   * Initialize the particle background inside a container element.
   *
   * @param {string|HTMLElement} selectorOrElement - CSS selector string or DOM element
   * @param {Object} [options={}] - Configuration options
   * @param {string} [options.theme='dark'] - 'dark' or 'light' background
   * @param {number} [options.density=220] - Particle count (50-300)
   * @param {number} [options.particlesScale=0.65] - Particle size multiplier (0.1-2.0)
   * @param {number} [options.ringWidth] - Inner ring falloff (auto-set by theme)
   * @param {number} [options.ringWidth2] - Outer ring falloff (auto-set by theme)
   * @param {number} [options.ringDisplacement] - Mouse push force (auto-set by theme)
   * @param {boolean} [options.interactive=true] - Enable mouse tracking
   * @returns {MagInstance|null}
   */
  static init(t, i = {}) {
    const r = typeof t == "string" ? document.querySelector(t) : t;
    return r ? new zh(r, i) : (console.error(`[Mag] Container "${t}" not found.`), null);
  }
}
class zh {
  constructor(t, i) {
    this._container = t;
    const r = getComputedStyle(t).position;
    (r === "static" || r === "") && (t.style.position = "relative"), t.style.overflow = "hidden";
    const a = i.theme || "dark", n = a === "dark", s = {
      container: t,
      theme: a,
      density: i.density || 220,
      particlesScale: i.particlesScale || (n ? 0.65 : 0.59),
      ringWidth: i.ringWidth || (n ? 0.15 : 6e-3),
      ringWidth2: i.ringWidth2 || (n ? 0.05 : 0.107),
      ringDisplacement: i.ringDisplacement || (n ? 0.23 : 0.62),
      interactive: i.interactive !== !1,
      verbose: !1
    };
    this._scene = new Fh(s), this._isVisible = !1, this._rafId = null, this._observer = new IntersectionObserver((l) => {
      l.forEach((c) => {
        this._isVisible = c.isIntersecting, c.isIntersecting ? this._scene.resume() : this._scene.stop();
      });
    }, { root: null, rootMargin: "0px", threshold: 0 }), this._observer.observe(t);
    const o = () => {
      this._rafId = requestAnimationFrame(o), this._isVisible && this._scene.render();
    };
    o(), this._onUnload = () => {
      this.destroy();
    }, window.addEventListener("beforeunload", this._onUnload);
  }
  /** Stop rendering and clean up all WebGL resources */
  destroy() {
    window.removeEventListener("beforeunload", this._onUnload), this._observer && (this._observer.disconnect(), this._observer = null), this._rafId !== null && (cancelAnimationFrame(this._rafId), this._rafId = null), this._scene && (this._scene.kill(), this._scene = null);
  }
}
typeof window < "u" && (window.Mag = Bh);
export {
  Bh as Mag
};
