function gvjs_CY(a, b, c, d, e, f) {
    typeof a === gvjs_l ? (this.Aj = "y" == a ? b : 0, this.months = "m" == a ? b : 0, this.days = "d" == a ? b : 0, this.hours = "h" == a ? b : 0, this.minutes = "n" == a ? b : 0, this.seconds = "s" == a ? b : 0) : (this.Aj = a || 0, this.months = b || 0, this.days = c || 0, this.hours = d || 0, this.minutes = e || 0, this.seconds = f || 0)
}
gvjs_ = gvjs_CY.prototype;
gvjs_.TA = function(a) {
    var b = Math.min(this.Aj, this.months, this.days, this.hours, this.minutes, this.seconds),
        c = Math.max(this.Aj, this.months, this.days, this.hours, this.minutes, this.seconds);
    if (0 > b && 0 < c) return null;
    if (!a && 0 == b && 0 == c) return "PT0S";
    c = [];
    0 > b && c.push("-");
    c.push("P");
    (this.Aj || a) && c.push(Math.abs(this.Aj) + "Y");
    (this.months || a) && c.push(Math.abs(this.months) + "M");
    (this.days || a) && c.push(Math.abs(this.days) + "D");
    if (this.hours || this.minutes || this.seconds || a) c.push("T"), (this.hours || a) && c.push(Math.abs(this.hours) +
        "H"), (this.minutes || a) && c.push(Math.abs(this.minutes) + "M"), (this.seconds || a) && c.push(Math.abs(this.seconds) + "S");
    return c.join("")
};
gvjs_.equals = function(a) {
    return a.Aj == this.Aj && a.months == this.months && a.days == this.days && a.hours == this.hours && a.minutes == this.minutes && a.seconds == this.seconds
};
gvjs_.clone = function() {
    return new gvjs_CY(this.Aj, this.months, this.days, this.hours, this.minutes, this.seconds)
};
gvjs_.uZ = function() {
    return new gvjs_CY(-1 * this.Aj, -1 * this.months, -1 * this.days, -1 * this.hours, -1 * this.minutes, -1 * this.seconds)
};
gvjs_.add = function(a) {
    this.Aj += a.Aj;
    this.months += a.months;
    this.days += a.days;
    this.hours += a.hours;
    this.minutes += a.minutes;
    this.seconds += a.seconds
};

function gvjs_DY(a, b, c, d, e, f, g) {
    this.date = typeof a === gvjs_g ? new Date(a, b || 0, c || 1, d || 0, e || 0, f || 0, g || 0) : new Date(a && a.getTime ? a.getTime() : gvjs_se())
}
gvjs_t(gvjs_DY, gvjs_Ri);
gvjs_ = gvjs_DY.prototype;
gvjs_.getHours = function() {
    return this.date.getHours()
};
gvjs_.getMinutes = function() {
    return this.date.getMinutes()
};
gvjs_.getSeconds = function() {
    return this.date.getSeconds()
};
gvjs_.getMilliseconds = function() {
    return this.date.getMilliseconds()
};
gvjs_.getUTCDay = function() {
    return this.date.getUTCDay()
};
gvjs_.getUTCHours = function() {
    return this.date.getUTCHours()
};
gvjs_.getUTCMinutes = function() {
    return this.date.getUTCMinutes()
};
gvjs_.getUTCSeconds = function() {
    return this.date.getUTCSeconds()
};
gvjs_.getUTCMilliseconds = function() {
    return this.date.getUTCMilliseconds()
};
gvjs_.setHours = function(a) {
    this.date.setHours(a)
};
gvjs_.setMinutes = function(a) {
    this.date.setMinutes(a)
};
gvjs_.setSeconds = function(a) {
    this.date.setSeconds(a)
};
gvjs_.setMilliseconds = function(a) {
    this.date.setMilliseconds(a)
};
gvjs_.setUTCHours = function(a) {
    this.date.setUTCHours(a)
};
gvjs_.setUTCMinutes = function(a) {
    this.date.setUTCMinutes(a)
};
gvjs_.setUTCSeconds = function(a) {
    this.date.setUTCSeconds(a)
};
gvjs_.setUTCMilliseconds = function(a) {
    this.date.setUTCMilliseconds(a)
};
gvjs_.add = function(a) {
    gvjs_Ri.prototype.add.call(this, a);
    a.hours && this.setUTCHours(this.date.getUTCHours() + a.hours);
    a.minutes && this.setUTCMinutes(this.date.getUTCMinutes() + a.minutes);
    a.seconds && this.setUTCSeconds(this.date.getUTCSeconds() + a.seconds)
};
gvjs_.TA = function(a) {
    var b = gvjs_Ri.prototype.TA.call(this, a);
    return a ? b + "T" + gvjs_fg(this.getHours(), 2) + ":" + gvjs_fg(this.getMinutes(), 2) + ":" + gvjs_fg(this.getSeconds(), 2) : b + "T" + gvjs_fg(this.getHours(), 2) + gvjs_fg(this.getMinutes(), 2) + gvjs_fg(this.getSeconds(), 2)
};
gvjs_.equals = function(a) {
    return this.getTime() == a.getTime()
};
gvjs_.toString = function() {
    return this.TA()
};
gvjs_.clone = function() {
    var a = new gvjs_DY(this.date);
    a.tC = this.tC;
    a.uC = this.uC;
    return a
};

function gvjs_EY() {}
gvjs_o(gvjs_EY, gvjs_Cl);
gvjs_EY.prototype.Pb = function(a) {
    try {
        this.Ac(a)
    } catch (b) {
        return !1
    }
    return !0
};
gvjs_EY.prototype.Ac = function(a) {
    a = gvjs_Dl(a);
    for (var b = [], c = a.$(), d = 0; d < c; ++d) {
        var e = a.Jg(d);
        if ("" === e) b.push(new gvjs_$Q(d));
        else {
            if (1 > b.length) throw Error("At least 1 data column must come before any role column.");
            gvjs_Ae(b).i3.set(e, d)
        }
    }
    if (2 != b.length) throw Error("Invalid data table format: must have 2 data columns.");
    c = b[0];
    b = b[1];
    this.jb(a, c.index(), "date|datetime");
    this.jb(a, b.index(), gvjs_g);
    return {
        HX: c,
        eB: b
    }
};
gvjs_EY.prototype.jb = function(a, b, c) {
    if (!gvjs_Fe(c.split("|"), function(d) {
            return gvjs_Gl(a, b, d)
        }, this)) throw Error(gvjs_Sa + b + gvjs_ba + c + "'.");
};

function gvjs_FY(a, b) {
    gvjs_OR.call(this);
    this.ua = a;
    this.xa = null;
    this.Hi = b;
    this.NY = null;
    this.aT = new Set;
    this.GW = new gvjs_aj;
    this.Yc = new gvjs_Xi(gvjs_Xi.Format.LONG_DATE);
    this.z7 = !1
}
gvjs_o(gvjs_FY, gvjs_OR);
gvjs_ = gvjs_FY.prototype;
gvjs_.ZV = function(a) {
    var b = gvjs_GL(a.Oa()),
        c = [];
    gvjs_u(this.ua.labels, function(d, e) {
        d = b.ys(d.text, d.x, d.y, d.width, d.angle, d.bA, d.dA, d.style);
        e = gvjs_KL(gvjs_KL(new gvjs_IL(gvjs_3r), gvjs_ps, e), gvjs_rs, gvjs_8c);
        c.push(new gvjs_NR(d, e, gvjs_Pu))
    }, this);
    gvjs_u(this.ua.$oa, function(d, e) {
        d = b.Dc(d.vc, d.brush);
        e = gvjs_KL(gvjs_KL(new gvjs_IL(gvjs_3r), gvjs_ps, e), gvjs_rs, "gridpath");
        c.push(new gvjs_NR(d, e, gvjs_Pu))
    }, this);
    gvjs_u(this.ua.zta, function(d, e) {
        d = b.Dc(d.vc, d.brush);
        e = gvjs_KL(gvjs_KL(new gvjs_IL(gvjs_3r),
            gvjs_ps, e), gvjs_rs, "monthpath");
        c.push(new gvjs_NR(d, e, gvjs_RQ))
    }, this);
    return c
};
gvjs_.AB = function(a) {
    var b = gvjs_GL(a.Oa()),
        c = [];
    this.xa && (this.ua.$f ? gvjs_IG(this.xa, this.Hi.getContainer()) : c.push(new gvjs_NR(gvjs_KG(this.xa, b).j(), new gvjs_IL(gvjs_NQ), gvjs_Pd)), this.xa = null);
    gvjs_u(this.ua.cells, function(d) {
        if (d.dirty) {
            d.dirty = !1;
            var e = gvjs_KL(gvjs_KL(new gvjs_IL(gvjs_os), "DATE", d.date.getTime()), gvjs_rs, d.date.getTime());
            null != d.QS && gvjs_KL(e, gvjs_ps, d.QS);
            this.GW.set(d.date.getTime(), d);
            var f = d.brush,
                g = gvjs_Cw,
                h = e.ie();
            if (e.equals(this.NY) || this.aT.has(h)) f = this.ua.joa.clone(),
                f.Te(d.fillColor), f.mf(1), g = gvjs_Cs;
            d = b.Bl(d.x, d.y, d.width, d.height, f);
            c.push(new gvjs_NR(d, e, g))
        }
    }, this);
    return c
};
gvjs_.Tb = function() {
    return this.ua.size
};
gvjs_.nm = function(a, b, c) {
    var d = this;
    switch (b.type) {
        case gvjs_Pd:
            this.bz(a, c);
            break;
        case gvjs_xu:
            gvjs_GY(this, this.NY);
            gvjs_GY(this, a);
            this.NY = c ? a : null;
            break;
        case gvjs_k:
            this.aT.forEach(function(e) {
                gvjs_GY(d, gvjs_LL(e))
            }), gvjs_GY(this, a), c ? this.aT.add(a.ie()) : this.aT.delete(a.ie())
    }
};

function gvjs_GY(a, b) {
    null != b && (a.GW.get(b.rb.SUBTYPE).dirty = !0)
}
gvjs_.bz = function(a, b) {
    this.Hi.clear();
    this.xa = null;
    if (b) {
        a = this.GW.get(a.rb.SUBTYPE);
        b = this.ua.size;
        b = new gvjs_B(0, b.width, b.height, 0);
        var c = new gvjs_z(a.x, a.y),
            d = gvjs_ez(c, new gvjs_z(-1, 1));
        if (a.tooltip && this.ua.$f) a = {
            html: gvjs_5f(gvjs_Ob, {
                "class": gvjs_Nu
            }, gvjs_OA(a.tooltip.content)),
            hO: a.tooltip.Nh,
            pivot: d,
            anchor: c,
            HG: b,
            spacing: 20,
            margin: 5
        };
        else {
            var e = {
                    entries: []
                },
                f = this.Yc.format(a.date);
            e.entries.push(gvjs_hG(a.tooltip ? a.tooltip.content : "" + f + (null != a.value ? ": " + a.value : ""), this.ua.Dp));
            a = gvjs_kG(e,
                this.ua.sc, !1, c, b, d, void 0, this.ua.$f)
        }
        this.xa = a
    }
};

function gvjs_HY(a, b, c, d) {
    this.r = a;
    this.g = b;
    this.b = c;
    this.a = d
}
var gvjs_1ka = new gvjs_HY(0, 0, 0, 1);

function gvjs_IY(a) {
    if (!a) return null;
    try {
        var b = gvjs_vj(gvjs_qj(a).hex);
        return new gvjs_HY(b[0] / 255, b[1] / 255, b[2] / 255, 1)
    } catch (c) {
        return null
    }
}
gvjs_HY.prototype.um = function() {
    return [this.r, this.g, this.b, this.a]
};
gvjs_HY.prototype.multiply = function(a) {
    return new gvjs_HY(gvjs_0g(this.r * a, 0, 1), gvjs_0g(this.g * a, 0, 1), gvjs_0g(this.b * a, 0, 1), this.a)
};
gvjs_HY.prototype.equals = function(a) {
    return !!a && a.r == this.r && a.g == this.g && a.b == this.b && a.a == this.a
};
var gvjs_JY = ["#e7711c", gvjs_Ox, "#4374e0"];

function gvjs_KY() {
    this.y_ = [0];
    this.Kb = [gvjs_1ka];
    this.Ota = gvjs_IY("#eeeeee")
}
gvjs_ = gvjs_KY.prototype;
gvjs_.uT = function(a) {
    this.y_ = Array.prototype.slice.call(arguments);
    return this
};
gvjs_.ip = function(a) {
    for (var b = [], c = 0, d = arguments.length; c < d; ++c) {
        var e = b,
            f = e.push;
        var g = arguments[c];
        g = g instanceof gvjs_HY ? g : g instanceof Array ? 4 <= g.length ? new gvjs_HY(g[0], g[1], g[2], g[3]) : new gvjs_HY(g[0], g[1], g[2], 1) : gvjs_IY(g);
        f.call(e, g)
    }
    this.Kb = b;
    return this
};
gvjs_.getColors = function() {
    return this.Kb
};
gvjs_.color = function(a) {
    if (null === a || void 0 === a || isNaN(a)) return this.Ota;
    var b = this.y_;
    if (a <= b[0]) return this.Kb[0];
    for (var c = 0, d = b.length - 1; c < d; ++c)
        if (b[c] < a && a <= b[c + 1]) {
            d = this.Kb[c];
            var e = this.Kb[c + 1];
            a = (a - b[c]) / (b[c + 1] - b[c]);
            return new gvjs_HY(gvjs_4y(d.r, e.r, a), gvjs_4y(d.g, e.g, a), gvjs_4y(d.b, e.b, a), gvjs_4y(d.a, e.a, a))
        }
    return this.Kb[this.Kb.length - 1]
};
gvjs_.Cq = function(a) {
    return gvjs_LY(this.color(a))
};

function gvjs_LY(a) {
    a = a.um();
    for (var b = 0; 3 > b; ++b) a[b] = Math.floor(255 * a[b]);
    return gvjs_uj(a)
};

function gvjs_MY(a) {
    this.ds = new gvjs_A(100, 10);
    this.Oe = null;
    this.lc = new gvjs_z;
    this.oh = a
}
gvjs_MY.prototype.LE = function(a, b) {
    this.lc = new gvjs_z(a, b);
    return this
};
gvjs_MY.prototype.Tb = function() {
    return new gvjs_A(this.ds.width, this.ds.height + this.Oe.fontSize + 3)
};
gvjs_MY.prototype.$g = function() {
    for (var a = [], b = this.oh.getColors(), c = b.length - 1, d = this.ds.width / c, e = 0; e < c; ++e) {
        var f = gvjs_8z("green");
        gvjs_cy(f, {
            Vf: gvjs_LY(b[e]),
            sf: gvjs_LY(b[e + 1]),
            tn: null,
            un: null,
            x1: 0,
            x2: 1,
            y1: 0,
            y2: 0,
            Sn: !0,
            sp: !1
        });
        var g = new gvjs_SA,
            h = this.lc.x + e * d,
            k = this.lc.y + this.Oe.fontSize + 3;
        g.move(h, k);
        h += d;
        g.va(h, k);
        k += this.ds.height;
        g.va(h, k);
        h -= d;
        g.va(h, k);
        g.close();
        a.push({
            brush: f,
            vc: g
        })
    }
    f = gvjs_9z("#eee", 1);
    g = new gvjs_SA;
    h = this.lc.x;
    k = this.lc.y + this.Oe.fontSize + 3;
    g.move(h, k);
    h += this.ds.width;
    g.va(h, k);
    k += this.ds.height;
    g.va(h, k);
    h -= this.ds.width;
    g.va(h, k);
    g.close();
    a.push({
        brush: f,
        vc: g
    });
    b = this.zW();
    return {
        paths: a,
        labels: b
    }
};
gvjs_MY.prototype.zW = function() {
    var a = [],
        b = this.lc.x,
        c = this.lc.y,
        d = this.oh.y_,
        e = d.length,
        f = this.ds.width / (e - 1);
    gvjs_u(d, function(g, h) {
        var k = gvjs_0;
        0 == h ? k = gvjs_2 : h == e - 1 && (k = gvjs_R);
        a.push({
            angle: 0,
            bA: k,
            dA: gvjs_2,
            style: this.Oe,
            text: "" + g,
            width: 1,
            x: b + f * h,
            y: c
        })
    }, this);
    return a
};

function gvjs_NY(a, b, c) {
    this.lc = new gvjs_z;
    this.Ww = c;
    this.Pn = a;
    this.zU = b
}
gvjs_ = gvjs_NY.prototype;
gvjs_.LE = function(a, b) {
    this.lc = new gvjs_z(a, b);
    return this
};
gvjs_.setTitle = function(a) {
    this.Pn = a;
    return this
};
gvjs_.Tb = function() {
    var a = this.zU.fontSize,
        b = this.Ww(this.Pn, this.zU).width;
    return new gvjs_A(b, a)
};
gvjs_.$g = function() {
    return {
        paths: [],
        labels: this.zW()
    }
};
gvjs_.zW = function() {
    var a = [];
    a.push({
        angle: 0,
        bA: gvjs_2,
        dA: gvjs_2,
        style: this.zU,
        text: this.Pn,
        width: 1,
        x: this.lc.x,
        y: this.lc.y
    });
    return a
};
/*

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/
function gvjs_OY(a, b) {
    this.dga = a;
    this.XH = b
}
new gvjs_Ri(0, 0, 1);
new gvjs_Ri(9999, 11, 31);
gvjs_OY.prototype.getStartDate = function() {
    return this.dga
};
gvjs_OY.prototype.contains = function(a) {
    return a.valueOf() >= this.dga.valueOf() && a.valueOf() <= this.XH.valueOf()
};
gvjs_OY.prototype.iterator = function() {
    return new gvjs_PY(this)
};

function gvjs_PY(a) {
    this.t1 = a.getStartDate().clone();
    this.XH = Number(a.XH.TA())
}
gvjs_t(gvjs_PY, gvjs_5i);
gvjs_PY.prototype.rg = function() {
    if (Number(this.t1.TA()) > this.XH) throw gvjs_4i;
    var a = this.t1.clone();
    this.t1.add(new gvjs_CY("d", 1));
    return a
};
gvjs_PY.prototype.next = gvjs_PY.prototype.rg;

function gvjs_QY(a, b, c, d, e, f, g) {
    a = typeof a === gvjs_g ? Date.UTC(a, b || 0, c || 1, d || 0, e || 0, f || 0, g || 0) : a ? a.getTime() : gvjs_se();
    this.date = new Date(a)
}
gvjs_t(gvjs_QY, gvjs_DY);
gvjs_ = gvjs_QY.prototype;
gvjs_.clone = function() {
    var a = new gvjs_QY(this.date);
    a.tC = this.tC;
    a.uC = this.uC;
    return a
};
gvjs_.add = function(a) {
    (a.Aj || a.months) && gvjs_Ri.prototype.add.call(this, new gvjs_CY(a.Aj, a.months));
    a = 1E3 * (a.seconds + 60 * (a.minutes + 60 * (a.hours + 24 * a.days)));
    this.date = new Date(this.date.getTime() + a)
};
gvjs_.getTimezoneOffset = function() {
    return 0
};
gvjs_.getFullYear = gvjs_DY.prototype.getUTCFullYear;
gvjs_.getMonth = gvjs_DY.prototype.getUTCMonth;
gvjs_.getDate = gvjs_DY.prototype.getUTCDate;
gvjs_.getHours = gvjs_DY.prototype.getUTCHours;
gvjs_.getMinutes = gvjs_DY.prototype.getUTCMinutes;
gvjs_.getSeconds = gvjs_DY.prototype.getUTCSeconds;
gvjs_.getMilliseconds = gvjs_DY.prototype.getUTCMilliseconds;
gvjs_.getDay = gvjs_DY.prototype.getUTCDay;
gvjs_.setFullYear = gvjs_DY.prototype.setUTCFullYear;
gvjs_.setMonth = gvjs_DY.prototype.setUTCMonth;
gvjs_.setDate = gvjs_DY.prototype.setUTCDate;
gvjs_.setHours = gvjs_DY.prototype.setUTCHours;
gvjs_.setMinutes = gvjs_DY.prototype.setUTCMinutes;
gvjs_.setSeconds = gvjs_DY.prototype.setUTCSeconds;
gvjs_.setMilliseconds = gvjs_DY.prototype.setUTCMilliseconds;

function gvjs_RY(a, b, c, d) {
    this.Z = a;
    this.m = b;
    this.Zd = c;
    this.eb = d;
    this.gb = (new gvjs_EY).Ac(a);
    c = this.Su = gvjs_L(b, "calendar.cellSize");
    a = new gvjs_ly({});
    d = 7 * c;
    var e = this.Zd;
    a.om(3 * c);
    var f = e("2222", a);
    if (f.width < d) {
        for (var g = 0; f.width < d;) g = a.fontSize, a.om(g + 1), f = e("2222", a);
        a.om(g)
    } else
        for (; f.width > d;) a.om(a.fontSize - 1), f = e("2222", a);
    c = new gvjs_ly({
        fontSize: Math.max(c - 6, 5)
    });
    d = new gvjs_ly({
        fontSize: c.fontSize + 2
    });
    this.KX = gvjs_ry(b, "calendar.dayOfWeekLabel", c);
    this.ER = gvjs_ry(b, "calendar.monthLabel",
        d);
    this.j6 = gvjs_ry(b, "calendar.yearLabel", a);
    this.Ama = gvjs_L(b, "calendar.dayOfWeekRightSpace");
    this.Fya = gvjs_L(b, "calendar.underMonthSpace");
    this.Eya = 6;
    this.Uga = gvjs_L(b, "calendar.underYearSpace");
    this.g9 = gvjs_J(b, "calendar.daysOfWeek");
    this.kla = gvjs_qy(b, "calendar.cellColor");
    this.ada = gvjs_qy(b, "calendar.monthOutlineColor");
    this.ada.Te(gvjs_f);
    this.$ga = gvjs_qy(b, "calendar.unusedMonthOutlineColor");
    this.$ga.Te(gvjs_f);
    this.d6 = gvjs_2ka(this);
    this.vm = 1;
    this.Fz = this.j6.fontSize + this.Uga + this.d6 + this.Ama
}

function gvjs_SY(a, b, c, d) {
    var e = new gvjs_QY;
    e.setTime(a.getTime() - 1);
    e = c(e);
    d(e);
    for (a = []; e < b;) a.push(new gvjs_QY(e)), d(e);
    return a
}

function gvjs_3ka(a, b) {
    return gvjs_SY(a, b, function(c) {
        return new gvjs_QY(c.getFullYear(), c.getMonth(), c.getDate())
    }, function(c) {
        c.setDate(c.getDate() + 1)
    })
}

function gvjs_4ka(a, b) {
    return gvjs_SY(a, b, function(c) {
        return new gvjs_QY(c.getFullYear(), c.getMonth(), 1)
    }, function(c) {
        c.setMonth(c.getMonth() + 1)
    })
}
gvjs_RY.prototype.$g = function() {
    var a = gvjs_5ka(this),
        b = a.Xya,
        c = b.end - b.start;
    c = this.aR(c ? c : 1);
    c = Math.pow(10, c - 1);
    var d = new gvjs_O(Math.floor(b.start / c) * c, Math.ceil(b.end / c) * c);
    b = this.m;
    c = b.cD("colorAxis.colors") || gvjs_JY;
    var e = c === gvjs_JY,
        f = gvjs_L(b, "colorAxis.minValue", d.start);
    d = gvjs_L(b, "colorAxis.maxValue", d.end);
    var g = b.$I("colorAxis.values"),
        h = 0 > f && 0 < d;
    if (2 > c.length) throw Error("palette.colors must contain at least two values.");
    2 == c.length && (h = !1);
    b = new gvjs_KY;
    if (null != g) {
        if (c.length != g.length) throw Error("colorAxis.colors must be the same length as colorAxis.values.");
        f = b.uT.apply(b, g);
        f.ip.apply(f, c)
    } else if (e) h ? (f = Math.max(Math.abs(f), Math.abs(d)), f = b.uT(-f, 0, f), c = c.slice(0, 3), f.ip.apply(f, c)) : (c = 0 > f ? c.slice(0, 2) : c.slice(-2), f = b.uT(f, d), f.ip.apply(f, c));
    else {
        g = [];
        for (e = 0; e < c.length; e++) h = (d - f) / c.length * e, 0 === e ? h = f : e === c.length - 1 && (h = d), g.push(h);
        f = b.uT.apply(b, g);
        f.ip.apply(f, c)
    }
    c = gvjs_J(this.m, gvjs_fx, "");
    c = (new gvjs_NY(c, this.ER, this.Zd)).LE(this.Fz, this.vm);
    f = gvjs_x(this.ER);
    d = this.Su - 1;
    e = new gvjs_MY(b);
    e.Oe = this.ER;
    e.ds = new gvjs_A(10 * d, d);
    g = e.Tb();
    e.LE(this.Fz +
        53 * this.Su - 10 * d, this.vm);
    this.vm += g.height + this.Eya;
    f.fontSize = g.height;
    c.zU = f;
    e = e.$g();
    d = c.$g();
    c = [];
    f = d.labels;
    d = d.paths;
    gvjs_J(this.m, gvjs_uv) !== gvjs_f && (gvjs_Me(f, e.labels), gvjs_Me(d, e.paths));
    e = [];
    g = a.mO.getStartDate().getFullYear();
    h = a.mO.XH.getFullYear();
    for (var k = 0; g <= h; g++, k++) {
        var l = new gvjs_QY(g, 0, 1),
            m = new gvjs_QY(g + 1, 0, 1),
            n = gvjs_4ka(l, m);
        0 === k && gvjs_Me(f, gvjs_6ka(this, n, this.Su));
        var p = l,
            q = new gvjs_QY(p.getFullYear() + 1, p.getMonth(), 1, -24);
        p = gvjs_TY(this, p, q);
        q = gvjs_oy(this.m, "noDataPattern.color",
            gvjs_Rb);
        var r = gvjs_oy(this.m, "noDataPattern.backgroundColor", gvjs_Rb);
        q = new gvjs_$x(gvjs_Hw, q, r);
        r = new gvjs_3;
        gvjs_by(r, q);
        gvjs_Me(e, {
            brush: r,
            vc: p
        });
        gvjs_Me(f, gvjs_7ka(this, g));
        gvjs_Me(d, gvjs_8ka(this, a.Ata, n));
        gvjs_Me(c, gvjs_9ka(this, a.lla, l, m, b));
        this.vm += 9 * this.Su
    }
    return {
        cells: c,
        labels: f,
        zta: d,
        $oa: e,
        $f: gvjs_K(this.m, gvjs_nx, !0),
        Dp: gvjs_ry(this.m, gvjs_px),
        joa: gvjs_qy(this.m, "calendar.focusedCellColor"),
        size: this.eb,
        sc: this.Zd
    }
};

function gvjs_5ka(a) {
    for (var b = new gvjs_aj, c = new Set, d = Number.MAX_VALUE, e = Number.MIN_VALUE, f = a.gb.HX.index(), g = a.gb.eB.index(), h = a.gb.eB.i3.get(gvjs_Jd), k = a.gb.eB.i3.get(gvjs_Pd), l = 0, m = a.Z.ca(); l < m; l++) {
        var n = a.Z.getValue(l, f),
            p = new gvjs_QY(n.getFullYear(), n.getMonth(), 1);
        c.add(p.getTime());
        n = new gvjs_QY(n.getFullYear(), n.getMonth(), n.getDate());
        p = a.Z.getValue(l, g);
        d = Math.min(d, p);
        e = Math.max(e, p);
        var q = null;
        h && (q = a.Z.getValue(l, h), "" === q && (q = null));
        var r = null;
        k && (r = a.Z.getValue(l, k)) && (r = {
            Nh: !(!a.Z.getProperty(l,
                k, gvjs_av) && !a.Z.Bd(k, gvjs_av)),
            content: r
        });
        n = {
            color: q,
            date: n,
            QS: l,
            value: p,
            tooltip: r
        };
        b.set(n.date, n)
    }
    a = b.ob();
    gvjs_Qe(a, function(t, u) {
        return gvjs_Nz(t.date, u.date)
    });
    g = f = new gvjs_Ri;
    0 < a.length && (f = a[0].date, g = a[a.length - 1].date);
    return {
        lla: b,
        mO: new gvjs_OY(f, g),
        Ata: c,
        Xya: new gvjs_O(d, e)
    }
}
gvjs_RY.prototype.aR = function(a) {
    return Math.floor(Math.log(Math.abs(a)) / Math.log(10))
};

function gvjs_UY(a) {
    a = new gvjs_QY(a);
    for (var b = a.getDate(), c = a.getFullYear(), d = a.getMonth() - 1; 0 <= d; d--) b += gvjs_Pi(c, d);
    --b;
    a = (new gvjs_QY(a.getFullYear(), 0, 1)).getDay();
    return Math.floor((b + a % 7) / 7)
}

function gvjs_2ka(a) {
    var b = a.Zd,
        c = a.KX;
    return gvjs_Ee(a.g9.split(""), function(d, e) {
        e = b(e, c);
        return Math.max(d, e.width)
    }, 0, a)
}

function gvjs_9ka(a, b, c, d, e) {
    var f = a.Su;
    c = gvjs_3ka(c, d);
    return gvjs_v(c, function(g) {
        var h = g.getDay(),
            k = gvjs_UY(g),
            l = b.tf(g) ? b.get(g) : null,
            m = l ? l.value : null,
            n = l ? l.color : null,
            p = l ? l.QS : null;
        l = l ? l.tooltip : null;
        var q = this.kla.clone();
        null != m ? (n = n || e.Cq(m), q.Te(n), q.mf(1)) : (n = gvjs_Br, q.Te(n), q.mf(0));
        return {
            brush: q,
            date: g,
            dirty: !0,
            tooltip: l,
            fillColor: n,
            height: f,
            QS: p,
            value: m,
            width: f,
            x: this.Fz + k * f,
            y: this.vm + h * f
        }
    }, a)
}

function gvjs_6ka(a, b, c) {
    b = gvjs_v(b, function(d) {
        var e = new gvjs_QY(d.getFullYear(), d.getMonth() + 1, 1, -24),
            f = +gvjs_UY(d);
        e = +gvjs_UY(e);
        return {
            angle: 0,
            bA: gvjs_0,
            dA: gvjs_2,
            style: this.ER,
            text: this.Rwa(d),
            width: (e - f + 1) * c,
            x: this.Fz + (f + e + 1) * c / 2,
            y: this.vm
        }
    }, a);
    a.vm += a.KX.fontSize + a.Fya;
    return b
}

function gvjs_7ka(a, b) {
    var c = a.Su,
        d = 7 * c,
        e = [{
            angle: 270,
            bA: gvjs_0,
            dA: gvjs_2,
            style: a.j6,
            text: "" + b,
            width: d,
            x: 0,
            y: a.vm + d / 2
        }],
        f = a.j6.fontSize + a.Uga;
    gvjs_u(a.g9.split(""), function(g, h) {
        e.push({
            angle: 0,
            bA: gvjs_0,
            dA: gvjs_0,
            style: this.KX,
            text: g,
            width: this.d6,
            x: f + this.d6 / 2,
            y: this.vm + h * c + c / 2
        })
    }, a);
    return e
}

function gvjs_8ka(a, b, c) {
    var d = [],
        e = [];
    gvjs_u(c, function(f) {
        var g = new gvjs_QY(f.getFullYear(), f.getMonth() + 1, 1, -24);
        g = gvjs_TY(this, f, g);
        b.has(f.getTime()) ? e.push({
            brush: this.ada,
            vc: g
        }) : d.push({
            brush: this.$ga,
            vc: g
        })
    }, a);
    gvjs_Me(d, e);
    return d
}

function gvjs_TY(a, b, c) {
    var d = +b.getDay();
    b = +gvjs_UY(b);
    var e = +c.getDay();
    c = +gvjs_UY(c);
    var f = a.Su,
        g = a.vm;
    a = a.Fz;
    var h = new gvjs_SA,
        k = g + d * f;
    h.move((b + 1) * f + a, k);
    d = b * f + a;
    h.va(d, k);
    k = g + 7 * f;
    h.va(d, k);
    d = c * f + a;
    h.va(d, k);
    k = g + (e + 1) * f;
    h.va(d, k);
    d = (c + 1) * f + a;
    h.va(d, k);
    k = g + 0;
    h.va(d, k);
    h.va((b + 1) * f + a, k);
    h.close();
    return h
}
var gvjs_VY = new gvjs_Tj({
    pattern: "MMM"
});
gvjs_RY.prototype.Rwa = gvjs_s(gvjs_VY.Ob, gvjs_VY);

function gvjs_WY(a) {
    gvjs_UL.call(this, a)
}
gvjs_o(gvjs_WY, gvjs_UL);
gvjs_ = gvjs_WY.prototype;
gvjs_.xq = function() {
    return {
        DATE: gvjs_Lb,
        ROW_INDEX: gvjs_Cd
    }
};
gvjs_.og = function() {
    return {
        backgroundColor: {
            fill: gvjs_Br,
            stroke: gvjs_kr,
            strokeWidth: 10,
            strokeOpacity: .2
        },
        tooltip: {
            isHtml: !0,
            textStyle: {
                fontName: gvjs_2r,
                fontSize: "16",
                color: gvjs_rt
            }
        },
        calendar: {
            cellColor: {
                stroke: gvjs_Br,
                strokeOpacity: 1,
                strokeWidth: 1
            },
            cellSize: 16,
            dayOfWeekLabel: {
                fontName: gvjs_Dw,
                color: "#888",
                bold: !1,
                italic: !1
            },
            dayOfWeekRightSpace: 4,
            daysOfWeek: "SMTWTFS",
            focusedCellColor: {
                stroke: gvjs_kr,
                strokeOpacity: 1,
                strokeWidth: 2
            },
            monthLabel: {
                fontName: gvjs_Dw,
                color: "#888",
                bold: !1,
                italic: !1
            },
            monthOutlineColor: {
                stroke: gvjs_kr,
                strokeOpacity: 1,
                strokeWidth: 1
            },
            underMonthSpace: 6,
            underYearSpace: 0,
            unusedMonthOutlineColor: {
                stroke: "#c9c9c9",
                strokeOpacity: 1,
                strokeWidth: 1
            },
            yearLabel: {
                fontName: gvjs_Dw,
                color: "#dfdfdf",
                bold: !1,
                italic: !1
            }
        },
        noDataPattern: {
            backgroundColor: "#ddd",
            color: "#f8f8f8"
        },
        legend: {
            position: gvjs_j
        }
    }
};
gvjs_.po = function(a, b, c, d) {
    a = gvjs_UL.prototype.po.call(this, a, b, c, d);
    a.$t([gvjs_Pu, gvjs_Cw, gvjs_RQ, gvjs_Ds, gvjs_Cs, gvjs_Pd]);
    return a
};
gvjs_.Mm = function(a, b) {
    return new gvjs_FY(a, b)
};
gvjs_.Al = function(a, b, c, d) {
    return new gvjs_RY(a, b, c, d)
};
gvjs_.xs = function() {
    return [new gvjs_JR([new gvjs_IL(gvjs_os)]), new gvjs_MR([new gvjs_IL(gvjs_os)]), new gvjs_LR([new gvjs_IL(gvjs_os)])]
};
gvjs_q("google.visualization.Calendar", gvjs_WY, void 0);
gvjs_WY.prototype.draw = gvjs_WY.prototype.draw;
gvjs_WY.prototype.setSelection = gvjs_WY.prototype.setSelection;
gvjs_WY.prototype.getSelection = gvjs_WY.prototype.getSelection;
gvjs_WY.prototype.clearChart = gvjs_WY.prototype.Jb;
gvjs_WY.prototype.getContainer = gvjs_WY.prototype.getContainer;
gvjs_WY.prototype.getDefaultOptions = gvjs_WY.prototype.og;