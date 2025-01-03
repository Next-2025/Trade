"use strict";
(self.webpackChunk_am5 = self.webpackChunk_am5 || []).push([[3131], {
    6097: function(e, t, i) {
        i.r(t),
        i.d(t, {
            AccelerationBands: function() {
                return ce
            },
            AccumulationDistribution: function() {
                return ue
            },
            AccumulativeSwingIndex: function() {
                return ge
            },
            Aroon: function() {
                return pe
            },
            AverageSeries: function() {
                return Ue
            },
            AverageTrueRange: function() {
                return Ee
            },
            AwesomeOscillator: function() {
                return Ce
            },
            BollingerBands: function() {
                return he
            },
            BullBearPower: function() {
                return ye
            },
            CalloutSeries: function() {
                return it
            },
            ChaikinMoneyFlow: function() {
                return be
            },
            ChaikinOscillator: function() {
                return ve
            },
            ChartIndicator: function() {
                return ee
            },
            ColorControl: function() {
                return T
            },
            CommodityChannelIndex: function() {
                return Ae
            },
            ComparisonControl: function() {
                return hi
            },
            DataSaveControl: function() {
                return li
            },
            DateRangeSelector: function() {
                return si
            },
            DisparityIndex: function() {
                return Ie
            },
            DoodleSeries: function() {
                return Ze
            },
            DrawingControl: function() {
                return wt
            },
            DrawingSeries: function() {
                return Ve
            },
            DrawingToolControl: function() {
                return ft
            },
            Dropdown: function() {
                return S
            },
            DropdownColors: function() {
                return A
            },
            DropdownControl: function() {
                return vt
            },
            DropdownList: function() {
                return mt
            },
            DropdownListControl: function() {
                return bt
            },
            EllipseSeries: function() {
                return at
            },
            FibonacciSeries: function() {
                return lt
            },
            FibonacciTimezoneSeries: function() {
                return ct
            },
            HorizontalLineSeries: function() {
                return We
            },
            HorizontalRaySeries: function() {
                return ht
            },
            IconControl: function() {
                return yt
            },
            IconSeries: function() {
                return Je
            },
            Indicator: function() {
                return H
            },
            IndicatorControl: function() {
                return xt
            },
            IntervalControl: function() {
                return oi
            },
            LabelSeries: function() {
                return qe
            },
            MACD: function() {
                return me
            },
            MACross: function() {
                return fe
            },
            Measure: function() {
                return gt
            },
            MedianPrice: function() {
                return Le
            },
            Momentum: function() {
                return ae
            },
            MovingAverage: function() {
                return se
            },
            MovingAverageDeviation: function() {
                return le
            },
            MovingAverageEnvelope: function() {
                return oe
            },
            OnBalanceVolume: function() {
                return _e
            },
            OverboughtOversold: function() {
                return ie
            },
            PVT: function() {
                return we
            },
            PanelControls: function() {
                return l
            },
            ParallelChannelSeries: function() {
                return ze
            },
            PeriodSelector: function() {
                return ai
            },
            PolylineSeries: function() {
                return Xe
            },
            QuadrantLineSeries: function() {
                return ot
            },
            RectangleSeries: function() {
                return He
            },
            RegressionSeries: function() {
                return Ge
            },
            RelativeStrengthIndex: function() {
                return de
            },
            ResetControl: function() {
                return ri
            },
            SeriesTypeControl: function() {
                return ni
            },
            SettingsControl: function() {
                return ci
            },
            SettingsModal: function() {
                return O
            },
            SimpleLineSeries: function() {
                return Be
            },
            StandardDeviation: function() {
                return Ne
            },
            StochasticMomentumIndex: function() {
                return ke
            },
            StochasticOscillator: function() {
                return xe
            },
            StockChart: function() {
                return Y
            },
            StockControl: function() {
                return D
            },
            StockIcons: function() {
                return p
            },
            StockLegend: function() {
                return z
            },
            StockPanel: function() {
                return $
            },
            StockToolbar: function() {
                return pt
            },
            TrendLineSeries: function() {
                return nt
            },
            Trix: function() {
                return Me
            },
            TypicalPrice: function() {
                return Te
            },
            VWAP: function() {
                return ne
            },
            VerticalLineSeries: function() {
                return $e
            },
            Volume: function() {
                return Se
            },
            VolumeProfile: function() {
                return Pe
            },
            WilliamsR: function() {
                return De
            },
            ZigZag: function() {
                return Oe
            },
            registerClass: function() {
                return F
            }
        });
        var s = i(7449)
          , a = i(1195)
          , n = i(8777)
          , o = i(8054)
          , r = i(1479);
        class l extends n.W {
            constructor() {
                super(...arguments),
                Object.defineProperty(this, "upButton", {
                    enumerable: !0,
                    configurable: !0,
                    writable: !0,
                    value: this.children.push(o.z.new(this._root, {
                        themeTags: ["up", "control", "panel"],
                        icon: r.T.new(this._root, {
                            themeTags: ["icon", "button"]
                        })
                    }))
                }),
                Object.defineProperty(this, "downButton", {
                    enumerable: !0,
                    configurable: !0,
                    writable: !0,
                    value: this.children.push(o.z.new(this._root, {
                        themeTags: ["down", "control", "panel"],
                        icon: r.T.new(this._root, {
                            themeTags: ["icon", "button"]
                        })
                    }))
                }),
                Object.defineProperty(this, "expandButton", {
                    enumerable: !0,
                    configurable: !0,
                    writable: !0,
                    value: this.children.push(o.z.new(this._root, {
                        themeTags: ["expand", "control", "panel"],
                        icon: r.T.new(this._root, {
                            themeTags: ["icon", "button"]
                        })
                    }))
                }),
                Object.defineProperty(this, "closeButton", {
                    enumerable: !0,
                    configurable: !0,
                    writable: !0,
                    value: this.children.push(o.z.new(this._root, {
                        themeTags: ["close", "control", "panel"],
                        icon: r.T.new(this._root, {
                            themeTags: ["icon", "button"]
                        })
                    }))
                })
            }
            _afterNew() {
                super._afterNew();
                const e = this.upButton;
                this.downButton.events.on("click", ( () => {
                    this.get("stockPanel").moveDown()
                }
                )),
                e.events.on("click", ( () => {
                    this.get("stockPanel").moveUp()
                }
                )),
                this.closeButton.events.on("click", ( () => {
                    this.get("stockPanel").close()
                }
                )),
                this.expandButton.events.on("click", ( () => {
                    this.get("stockPanel").expand()
                }
                ))
            }
        }
        Object.defineProperty(l, "className", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: "PanelControls"
        }),
        Object.defineProperty(l, "classNames", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: n.W.classNames.concat([l.className])
        });
        var c = i(3409)
          , h = i(6245)
          , d = i(3783)
          , u = i(1112)
          , g = i(2754);
        class p {
            static getIcon(e) {
                const t = p.icons
                  , i = t[e] || t.Default;
                return p._getSVG(i)
            }
            static _getSVG(e) {
                const t = document.createElementNS("http://www.w3.org/2000/svg", "svg");
                t.setAttribute("viewBox", e.viewbox),
                t.setAttribute("class", "am5stock_control_default_icon");
                const i = document.createElementNS("http://www.w3.org/2000/svg", "path");
                return i.setAttribute("d", e.path),
                t.appendChild(i),
                e.style && i.setAttribute("style", e.style),
                t
            }
        }
        Object.defineProperty(p, "icons", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: {
                Default: {
                    viewbox: "0 0 50 50",
                    path: "M 25 10 L 25 40 M 10 25 L 41 25"
                },
                Indicator: {
                    viewbox: "0 0 50 50",
                    path: "M 2 10 C 28 27 31 1 48 11 M 1 49 C 24 22 25 38 48 44 M 3 25 L 48 25 L 41 19 M 48 25 L 41 31"
                },
                Color: {
                    viewbox: "0 0 50 50",
                    path: ""
                },
                Dash: {
                    viewbox: "0 0 60 16",
                    path: "M0,8 60,8"
                },
                Calendar: {
                    viewbox: "0 0 50 50",
                    path: "M 3 8 L 47 8 L 47 48 L 3 48 L 3 8 M 3 19 L 47 19 M 9 28 L 15 28 M 22 28 L 28 28 M 35 28 L 41 28 M 9 39 L 15 39 M 22 39 L 28 39 M 35 39 L 41 39 M 12 14 L 12 1 M 38 14 L 38 1"
                },
                Period: {
                    viewbox: "0 0 50 50",
                    path: "M 3 3 L 47 3 L 47 48 L 3 48 L 3 3 M 3 12 L 47 12 M 9 21 L 15 21 M 22 21 L 28 21 M 35 21 L 41 21 M 9 30 L 15 30 M 22 30 L 28 30 M 35 30 L 41 30 M 9 39 L 15 39 M 22 39 L 28 39 M 35 39 L 41 39"
                },
                Interval: {
                    viewbox: "0 0 50 50",
                    path: "M 3 10 L 3 48 M 3 10 L 43 10 M 13 10 L 13 36 M 23 10 L 23 36 M 43 10 L 43 48 M 33 10 L 33 36"
                },
                Comparison: {
                    viewbox: "0 0 50 50",
                    path: "M 25 10 L 25 40 M 10 25 L 41 25"
                },
                Settings: {
                    viewbox: "0 0 50 50",
                    path: "M49,25 L47.6,33.2 L41.3,32.6 L39.7,35.3 L43.4,40.4 L37,45.8 L32.6,41.3 L29.7,42.4 L29.2,48.6 L20.8,48.6 L20.3,42.4 L17.4,41.3 L13,45.8 L6.6,40.4 L10.3,35.3 L8.7,32.6 L2.4,33.2 L1,25 L7.1,23.4 L7.6,20.3 L2.4,16.8 L6.6,9.6 L12.3,12.3 L14.7,10.3 L13,4.2 L20.8,1.4 L23.4,7.1 L26.6,7.1 L29.2,1.4 L37,4.2 L35.3,10.3 L37.7,12.3 L43.4,9.6 L47.6,16.8 L42.4,20.3 L42.9,23.4 L49,25 M 17 25 A 1 1 0 0 0 33 25 A 1 1 0 0 0 17 25"
                },
                Save: {
                    viewbox: "0 0 50 50",
                    path: "M47 47 47 15 35 3 3 3 3 47 47 47ZM13 3 13 13 33 13 33 3M9 42 9 25 39 25 39 42 9 42"
                },
                "Line Series": {
                    viewbox: "0 0 50 50",
                    path: "M 3 28 L 14 18 L 25 32 L 36 9 L 47 19"
                },
                "Area Series": {
                    viewbox: "0 0 50 50",
                    path: "M 3 20 L 14 13 L 25 20.95 L 37 9 L 48 16 L 48 48 M 8 17 L 8 48 M 13 14 L 13 48 M 18 16 L 18 48 M 23 20 L 23 48 M 28 18 L 28 48 M 33 13 L 33 48 M 38 10 L 38 48 M 43 13 L 43 48 M 3 20 L 3 48"
                },
                "Candlestick Series": {
                    viewbox: "0 0 50 50",
                    path: "M 3 17 L 3 37 L 19 37 M 19 37 L 19 17 L 3 17 M 11 17 L 11 6 M 11 37 L 11 50 M 30 11 L 30 31 L 46 31 L 46 11 L 30 11 M 38 11 L 38 0 M 38 31 L 38 44 M 3 22 L 19 22 M 3 27 L 19 27 M 3 32 L 19 32 M 30 16 L 46 16 M 30 21 L 46 21 M 30 26 L 46 26"
                },
                "Pro Candlestick Series": {
                    viewbox: "0 0 50 50",
                    path: "M 3 10 L 3 31 L 19 31 M 19 31 L 19 10 L 3 10 M 11 10 L 11 0 M 11 31 L 11 43 M 30 17 L 30 37 L 46 37 L 46 17 L 30 17 M 38 17 L 38 4 M 38 37 L 38 50 M 30 22 L 46 22 M 30 27 L 46 27 M 30 32 L 46 32"
                },
                "OHLC Series": {
                    viewbox: "0 0 50 50",
                    path: "M 11 31 L 20 31 M 11 3 L 11 43 M 38 5 L 38 50 M 29 36 L 38 36 M 38 12 L 47 12 M 11 17 L 2 17"
                },
                Draw: {
                    viewbox: "0 0 50 50",
                    path: "M 29 2 L 48 21 L 22 47 L 3 47 L 3 28 L 29 2 M 23 8 L 42 27 M 3 42 L 8 47 M 18 39 L 36 21 M 11 32 L 29 14 M 3 28 L 11 32 L 13 38 L 18 39 L 22 47 M 25 6 L 44 25 M 27 4 L 46 23 M 3 44 L 6 47 M 3 40 L 10 47"
                },
                Average: {
                    viewbox: "0 0 50 50",
                    path: "M2 24a5 5 0 1 0 10 0 5 5 0 1 0-10 0M12 24h26M38 24a5 5 0 1 0 10 0 5 5 0 1 0-10 0"
                },
                Callout: {
                    viewbox: "0 0 50 50",
                    path: "M 3 3 L 47 3 L 47 39 L 31 39 L 25 45 L 19 39 L 3 39 L 3 3 M 11 12 L 39 12 M 11 20 L 39 20 M 11 28 L 39 28"
                },
                Doodle: {
                    viewbox: "0 0 48 48",
                    path: "M 43.036,2.509 C 32.59,9.83 8.05,6.67 6.29,15.01 5.19,26.29 34.40,18.9 37.4,27.5 c 1.4,3.78 -4.0,8 -15.7,13.18"
                },
                Ellipse: {
                    viewbox: "0 0 50 50",
                    path: "M 25 5 a 22 20 0 1 0 1 0 z"
                },
                Fibonacci: {
                    viewbox: "0 0 50 50",
                    path: "M2 3 h46 M2 11.5 h46 M2 24 h46 M2 49 h46"
                },
                "Fibonacci Timezone": {
                    viewbox: "0 0 50 50",
                    path: "M5 2.5 v46 M13.5 2.5 v46 M26 2.5 v46 M46.5 2.5 v46"
                },
                "Horizontal Line": {
                    viewbox: "0 0 50 50",
                    path: "M20 24a5 5 0 1 0 10 0 5 5 0 1 0-10 0M2 24h18 M32,24 h18"
                },
                "Horizontal Ray": {
                    viewbox: "0 0 50 50",
                    path: "M2 24a5 5 0 1 0 10 0 5 5 0 1 0-10 0 M14,24 h36"
                },
                "Arrows &amp; Icons": {
                    viewbox: "0 0 50 50",
                    path: "M 5 35 L 5 15 L 26 15 M 26 15 L 26 5 L 45 26 L 26 45 L 26 35 L 5 35"
                },
                Label: {
                    viewbox: "0 0 50 50",
                    path: "M 10 45 l 15 -32 l 15 32 m -24 -13 l 18 0",
                    style: "stroke-width: 1.2px"
                },
                Line: {
                    viewbox: "0 0 50 50",
                    path: "M 4 46 L 46 4"
                },
                Polyline: {
                    viewbox: "0 0 50 50",
                    path: "M 2 15 L 16 42 L 36 22 L 48 29"
                },
                Polyfill: {
                    viewbox: "0 0 50 50",
                    path: "M 2 15 L 8 44 L 20 26 L 41 32 L 47 13 L 24 4 L 2 15"
                },
                "Quadrant Line": {
                    viewbox: "0 0 50 50",
                    path: "M2 3 h46 M2 15 h46 M2 29 h46 M2 43 h46"
                },
                Rectangle: {
                    viewbox: "0 0 50 50",
                    path: "M3 3 L47 3 L47 47 L3 47 L3 3"
                },
                Regression: {
                    viewbox: "0 0 50 50",
                    path: "M 2 15 a 5 5 0 1 0 10 0 a 5 5 0 1 0 -10 0 M 11.36 17.369 L 38.661 32.505 M 38 35 a 5 5 0 1 0 10 0 a 5 5 0 1 0 -10 0"
                },
                "Trend Line": {
                    viewbox: "0 0 50 50",
                    path: "M 2 35 a 5 5 0 1 0 10 0 a 5 5 0 1 0 -10 0 M 11.343 32.542 L 38.614 17.398 M 38 15 a 5 5 0 1 0 10 0 a 5 5 0 1 0 -10 0"
                },
                Triangle: {
                    viewbox: "0 0 50 50",
                    path: "M 2 15 L 22 47 L 48 20 L 2 15"
                },
                "Vertical Line": {
                    viewbox: "0 0 50 50",
                    path: "M19 25a5 5 0 1 0 10 0 5 5 0 1 0-10 0M24 2v18 M24,32 v18"
                },
                "Parallel Channel": {
                    viewbox: "0 0 50 50",
                    path: "M 3 37 L 37 3 M 13 47 L 47 13"
                },
                Eraser: {
                    viewbox: "0 0 50 50",
                    path: "M 13 48 L 21 48 L 45 24 L 29 8 L 1 36 L 13 48 M 32 48 L 38 48 M 43 48 L 49 48 M 23 14 L 39 30 M 20 17 L 36 33 M 26 11 L 42 27"
                },
                Select: {
                    viewbox: "0 0 50 50",
                    path: "M 8 6 L 35 18 L 24 25 L 38 43 L 33 47 L 20 28 L 11 36 L 8 6"
                },
                Clear: {
                    viewbox: "0 0 50 50",
                    path: "M 6 10 L 12 48 L 38 48 L 44 10 L 6 10 M 14 14 L 18 43 M 25 14 L 25 43 M 36 14 L 32 43 M 6 8 L 44 8 M 21 8 L 21 3 L 30 3 L 30 8"
                },
                Bold: {
                    viewbox: "0 0 50 50",
                    path: "M 12 4 L 12 47 L 32 47 C 45 47 47 23 32 23 C 42 23 42 4 31 4 L 12 4 Z M 32 23 L 12 23 Z",
                    style: "stroke-width: 1.8px"
                },
                Italic: {
                    viewbox: "0 0 50 50",
                    path: "M 17 5 L 38 5 M 27 5 L 18 47 M 8 47 L 28 47"
                },
                "Show Extension": {
                    viewbox: "0 0 50 50",
                    path: "M 10 15 a 5 5 0 1 0 10 0 a 5 5 0 1 0 -10 0 M 30 36 a 5 5 0 1 0 10 0 a 5 5 0 1 0 -10 0 M 40 41 L 50 50 M 20 20 L 30 30 M 10 10 L 0 0"
                },
                Snap: {
                    viewbox: "0 0 50 50",
                    path: "M 17 29 L 29 29 M 33 39 a 5 5 0 1 0 15 0 a 5 5 0 1 0 -15 0 M 29 17 L 29 29 L 3 3"
                },
                Reset: {
                    viewbox: "0 0 50 50",
                    path: "M 4 25 A 1 1 0 0 0 46 25 Q 46 4 25 4 Q 18 4 11 10 L 5 4 L 5 16 L 17 16 L 11 10"
                },
                Search: {
                    viewbox: "0 0 50 50",
                    path: "M 5 11 A 1 1 90 0 0 36 27 A 1 1 90 0 0 5 11 M 34 30 L 49 45 L 47 47 L 32 32"
                },
                Measure: {
                    viewbox: "0 0 50 50",
                    path: "M 3 38 L 35 6 L 46 17 L 14 49 L 3 38 M 10 31 L 16 37 M 16 25 L 20 29 M 22 19 L 26 23 M 28 13 L 34 19 M 50 50"
                }
            }
        });
        var m = i(751);
        class f extends c.Q {
            setupDefaultRules() {
                super.setupDefaultRules();
                const e = this._root.language
                  , t = this.rule.bind(this)
                  , i = this._root.verticalLayout
                  , s = this._root.interfaceColors;
                t("StockChart").setAll({
                    paddingLeft: 18,
                    paddingRight: 18,
                    paddingTop: 5,
                    paddingBottom: 15,
                    width: h.AQ,
                    height: h.AQ,
                    layout: i,
                    percentScaleSeriesSettings: {
                        valueYShow: "valueYChangeSelectionPercent",
                        openValueYShow: "openValueYChangeSelectionPercent",
                        highValueYShow: "highValueYChangeSelectionPercent",
                        lowValueYShow: "lowValueYChangeSelectionPercent"
                    },
                    percentScaleValueAxisSettings: {
                        numberFormat: "#.##'%'",
                        interpolationDuration: 0,
                        extraMax: .05,
                        strictMinMaxSelection: !0
                    },
                    autoSetPercentScale: !0,
                    drawingSelectionEnabled: !1
                }),
                t("StockPanel").setAll({
                    panY: !0,
                    wheelY: "zoomX",
                    panX: !0,
                    minHeight: 1
                }),
                t("StockPanel").states.create("hidden", {
                    height: h.p0,
                    visible: !1
                }),
                t("XYChart", ["stock"]).setAll({
                    paddingLeft: 0,
                    paddingRight: 0,
                    paddingBottom: 0,
                    paddingTop: 15,
                    minHeight: 80,
                    wheelZoomPositionX: 1
                }),
                t("XYChart", ["stock", "scrollbar"]).setAll({
                    minHeight: 0
                }),
                t("StockLegend").setAll({
                    clickTarget: "marker"
                }),
                t("Label").setAll({
                    fontSize: "0.8em"
                }),
                t("Legend", ["stocklegend"]).setAll({
                    paddingTop: 6,
                    paddingLeft: 6
                }),
                t("Container", ["itemcontainer", "legend", "stocklegend"]).setAll({
                    marginLeft: 2,
                    marginRight: 2,
                    marginTop: 2,
                    marginBottom: 2
                }),
                t("Label", ["legend", "value", "label", "stocklegend"]).setAll({
                    width: null,
                    paddingRight: 5
                }),
                t("ColumnSeries").setAll({
                    useLastColorForLegendMarker: !0
                }),
                t("Grid", ["middlegrid"]).setAll({
                    forceHidden: !1,
                    strokeOpacity: .4,
                    strokeDasharray: [2, 2]
                });
                {
                    const e = t("RoundedRectangle", ["legend", "itemcontainer", "background", "stocklegend"]);
                    e.setAll({
                        fillOpacity: 1,
                        cornerRadiusBL: 4,
                        cornerRadiusBR: 4,
                        cornerRadiusTL: 4,
                        cornerRadiusTR: 4,
                        shadowOffsetX: 0,
                        shadowOffsetY: 0,
                        shadowOpacity: .3,
                        shadowBlur: 5,
                        interactive: !0
                    }),
                    (0,
                    d.v)(e, "shadowColor", s, "alternativeBackground"),
                    (0,
                    d.v)(e, "fill", s, "background")
                }
                {
                    const e = t("Rectangle", ["panelresizer"]);
                    e.setAll({
                        width: h.AQ,
                        height: 15,
                        centerY: h.AQ,
                        fillOpacity: 0,
                        fill: s.get("alternativeBackground"),
                        cursorOverStyle: "row-resize",
                        interactive: !0
                    }),
                    e.states.create("hover", {
                        fillOpacity: .07
                    })
                }
                t("Grid", ["renderer", "base", "y"]).setAll({
                    strokeOpacity: .4
                }),
                t("Button", ["zoom"]).setAll({
                    forceHidden: !0
                }),
                t("AxisRendererY", ["y"]).setAll({
                    opposite: !0,
                    pan: "zoom"
                }),
                t("Container", ["legend", "item"]).setAll({});
                {
                    const e = t("Graphics", ["axis", "fill"]);
                    e.setAll({
                        visible: !0,
                        position: "absolute",
                        fillOpacity: .05
                    }),
                    (0,
                    d.v)(e, "fill", s, "alternativeBackground")
                }
                {
                    const e = t("PanelControls");
                    e.setAll({
                        x: h.AQ,
                        y: 0,
                        centerX: h.AQ,
                        paddingTop: 10,
                        paddingRight: 10,
                        layer: 30,
                        layout: this._root.horizontalLayout,
                        opacity: .5
                    }),
                    e.states.create("hover", {
                        opacity: 1
                    })
                }
                t("Button", ["control", "item"]).setAll({
                    paddingTop: 1,
                    paddingBottom: 1,
                    paddingLeft: 2,
                    paddingRight: 2,
                    centerX: h.CI,
                    centerY: h.CI,
                    forceHidden: !0
                }),
                t("Button", ["control", "item", "settings"]).setAll({
                    forceHidden: !1
                }),
                t("RoundedRectangle", ["background", "control", "button"]).setAll({
                    fillOpacity: 0,
                    strokeOpacity: 0
                });
                {
                    const e = t("Graphics", ["control", "button", "icon"]).states.create("hover", {
                        fillOpacity: .3
                    });
                    (0,
                    d.v)(e, "fill", s, "secondaryButtonHover")
                }
                t("Button", ["panel"]).setAll({
                    scale: 1.2,
                    paddingLeft: 0,
                    paddingRight: 0,
                    marginLeft: 6
                });
                {
                    const e = t("Graphics", ["close", "button", "icon"]);
                    e.setAll({
                        strokeOpacity: .7,
                        strokeWidth: .5,
                        draw: e => {
                            e.moveTo(-5, -5),
                            e.lineTo(5, 5),
                            e.moveTo(-5, 5),
                            e.lineTo(5, -5),
                            e.moveTo(0, 0),
                            e.drawCircle(0, 0, 10)
                        }
                    }),
                    (0,
                    d.v)(e, "stroke", s, "secondaryButtonText"),
                    (0,
                    d.v)(e, "fill", s, "background")
                }
                {
                    const e = t("Graphics", ["settings", "button", "icon"]);
                    e.setAll({
                        strokeOpacity: .7,
                        strokeWidth: .5,
                        draw: e => {
                            const t = 40 * m.RADIANS / 2;
                            e.moveTo(10, 0);
                            let i = 0
                              , s = 5 * m.RADIANS;
                            for (let a = 0; a < 9; a++)
                                i += t,
                                e.lineTo(10 * Math.cos(i), 10 * Math.sin(i)),
                                e.lineTo(8 * Math.cos(i + s), 8 * Math.sin(i + s)),
                                i += t,
                                e.lineTo(8 * Math.cos(i - s), 8 * Math.sin(i - s)),
                                e.lineTo(10 * Math.cos(i), 10 * Math.sin(i));
                            e.drawCircle(0, 0, 4)
                        }
                    }),
                    (0,
                    d.v)(e, "stroke", s, "secondaryButtonText"),
                    (0,
                    d.v)(e, "fill", s, "background")
                }
                {
                    const e = t("Graphics", ["up", "button", "icon"]);
                    e.setAll({
                        strokeOpacity: .7,
                        strokeWidth: .5,
                        draw: e => {
                            e.moveTo(0, 5),
                            e.lineTo(0, -5),
                            e.moveTo(0, -5),
                            e.lineTo(-5, 0),
                            e.moveTo(0, -5),
                            e.lineTo(5, 0),
                            e.drawCircle(0, 0, 10)
                        }
                    }),
                    (0,
                    d.v)(e, "stroke", s, "secondaryButtonText"),
                    (0,
                    d.v)(e, "fill", s, "background")
                }
                {
                    const e = t("Graphics", ["expand", "button", "icon"]);
                    e.setAll({
                        strokeOpacity: .7,
                        strokeWidth: .5,
                        draw: e => {
                            e.moveTo(-5, -2),
                            e.lineTo(-5, -5),
                            e.lineTo(5, -5),
                            e.lineTo(5, -2),
                            e.moveTo(5, 2),
                            e.lineTo(5, 5),
                            e.lineTo(-5, 5),
                            e.lineTo(-5, 2),
                            e.drawCircle(0, 0, 10)
                        }
                    }),
                    (0,
                    d.v)(e, "stroke", s, "secondaryButtonText"),
                    (0,
                    d.v)(e, "fill", s, "background")
                }
                {
                    const e = t("Graphics", ["down", "button", "icon"]);
                    e.setAll({
                        strokeOpacity: .7,
                        strokeWidth: .5,
                        draw: e => {
                            e.moveTo(0, -5),
                            e.lineTo(0, 5),
                            e.moveTo(0, 5),
                            e.lineTo(-5, 0),
                            e.moveTo(0, 5),
                            e.lineTo(5, 0),
                            e.drawCircle(0, 0, 10)
                        }
                    }),
                    (0,
                    d.v)(e, "stroke", s, "secondaryButtonText"),
                    (0,
                    d.v)(e, "fill", s, "background")
                }
                t("Indicator").setAll({
                    position: "absolute"
                }),
                t("DrawingSeries").setAll({
                    field: "value",
                    selectorPadding: 10
                }),
                t("Container", ["drawing", "grip"]).states.create("hover", {});
                {
                    const e = t("Circle", ["drawing", "grip"]);
                    e.setAll({
                        strokeOpacity: .7,
                        strokeWidth: 1,
                        radius: 5
                    }),
                    (0,
                    d.v)(e, "fill", s, "background"),
                    (0,
                    d.v)(e, "stroke", s, "alternativeBackground");
                    const i = e.states.create("hover", {
                        strokeWidth: 2
                    });
                    (0,
                    d.v)(i, "stroke", s, "negative")
                }
                t("Circle", ["drawing", "grip", "outline"]).setAll({
                    radius: 8,
                    strokeWidth: 4,
                    strokeOpacity: 0,
                    fillOpacity: 0
                }),
                t("Circle", ["drawing", "grip", "outline"]).states.create("hover", {
                    radius: 10,
                    strokeWidth: 4,
                    strokeOpacity: .3
                }),
                t("Circle", ["drawing", "grip", "outline", "label"]).setAll({
                    forceHidden: !0
                }),
                t("Circle", ["drawing", "grip", "label"]).setAll({
                    forceHidden: !0
                }),
                t("Circle", ["drawing", "grip", "callout"]).setAll({
                    fillOpacity: 0,
                    forceHidden: !0
                }),
                t("Circle", ["drawing", "grip", "outline", "callout"]).setAll({
                    forceHidden: !1
                });
                {
                    const e = t("Graphics", ["series", "fill", "drawing"]);
                    e.setAll({
                        fillOpacity: .2,
                        visible: !0,
                        draggable: !0
                    }),
                    e.states.create("hover", {
                        fillOpacity: .4
                    })
                }
                t("Line", ["drawing"]).setAll({
                    strokeDasharray: [2, 2],
                    strokeWidth: 1,
                    draggable: !0
                }),
                t("Line", ["drawing", "hit"]).setAll({
                    strokeWidth: 22,
                    strokeOpacity: 0,
                    strokeDasharray: 0,
                    draggable: !0
                }),
                t("Line", ["drawing", "hit", "horizontal"]).setAll({
                    strokeWidth: 22
                }),
                t("Line", ["drawing", "hit", "vertical"]).setAll({
                    strokeWidth: 22
                }),
                t("Line", ["drawing", "hit", "ray"]).setAll({
                    strokeWidth: 22
                });
                {
                    const e = t("Graphics", ["series", "fill", "drawing", "doodle"]);
                    e.setAll({
                        fillOpacity: 0
                    }),
                    e.states.create("hover", {
                        fillOpacity: 0
                    })
                }
                t("Graphics", ["series", "stroke", "drawing", "measure"]).setAll({
                    strokeOpacity: 0
                }),
                t("Line", ["drawing", "measure"]).setAll({
                    strokeDasharray: [],
                    strokeWidth: 1,
                    crisp: !0,
                    strokeOpacity: .7,
                    draggable: !1
                });
                {
                    const e = t("Graphics", ["line", "series", "stroke", "drawing"]);
                    e.setAll({
                        strokeWidth: 2,
                        draggable: !0
                    });
                    const i = e.states.create("hover", {});
                    (0,
                    d.v)(i, "stroke", s, "negative")
                }
                {
                    const e = t("Graphics", ["drawing", "icon"]);
                    e.setAll({
                        centerX: h.CI,
                        centerY: h.AQ,
                        strokeOpacity: 1,
                        strokeWidth: 2
                    });
                    const i = e.states.create("hover", {});
                    (0,
                    d.v)(i, "stroke", s, "negative")
                }
                t("Label", ["drawing", "label"]).setAll({
                    centerX: h.p0,
                    centerY: h.CI,
                    minHeight: 28,
                    minWidth: 28
                }),
                t("Label", ["drawing", "measure"]).setAll({
                    centerX: h.CI,
                    centerY: h.CI,
                    fill: s.get("alternativeText"),
                    textAlign: "center"
                }),
                t("RoundedRectangle", ["background", "drawing", "measure"]).setAll({
                    centerX: h.CI,
                    centerY: h.CI,
                    fillOpacity: .7
                }),
                t("PointedRectangle", ["drawing", "callout"]).setAll({
                    fillOpacity: 1,
                    strokeOpacity: 0
                });
                {
                    const e = t("Ellipse", ["drawing"]);
                    e.setAll({
                        strokeOpacity: 1,
                        strokeWidth: 2,
                        isMeasured: !1,
                        position: "absolute",
                        draggable: !0,
                        fillOpacity: .25
                    });
                    const i = e.states.create("hover", {
                        fillOpacity: .5
                    });
                    (0,
                    d.v)(i, "stroke", s, "negative")
                }
                t("FibonacciSeries").setAll({
                    sequence: [0, .236, .382, .5, .618, .768, 1, 1.618, 2.618, 3.618, 4.236],
                    colors: [(0,
                    u.$_)(8816262), (0,
                    u.$_)(15550524), (0,
                    u.$_)(8635526), (0,
                    u.$_)(5221203), (0,
                    u.$_)(364931), (0,
                    u.$_)(6927601), (0,
                    u.$_)(8816262), (0,
                    u.$_)(3171832), (0,
                    u.$_)(15550524), (0,
                    u.$_)(9972651), (0,
                    u.$_)(14820453)]
                }),
                t("Graphics", ["line", "series", "stroke", "drawing", "fibonacci"]).setAll({
                    strokeWidth: .5,
                    strokeOpacity: 1
                }),
                t("Label", ["fibonacci"]).setAll({
                    populateText: !0,
                    text: "{sequence} ({value.formatNumber('#.00')})",
                    centerX: h.AQ,
                    centerY: h.AQ,
                    paddingBottom: 2,
                    fontSize: "0.8em"
                }),
                t("Label", ["fibonaccitimezone"]).setAll({
                    populateText: !0,
                    text: "{value.formatNumber('#')}",
                    centerX: 0,
                    centerY: h.AQ,
                    paddingBottom: 2,
                    paddingLeft: 3,
                    fontSize: "0.8em"
                }),
                t("FibonacciTimezoneSeries").setAll({
                    sequence: [0, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89],
                    colors: []
                }),
                t("Graphics", ["line", "series", "fill", "drawing", "fibonaccitimezone"]).setAll({
                    draggable: !1,
                    fillOpacity: .1
                }),
                t("Graphics", ["line", "series", "stroke", "drawing", "fibonaccitimezone"]).setAll({
                    draggable: !1,
                    strokeWidth: .5,
                    strokeOpacity: 1
                }),
                t("Grid", ["overbought"]).setAll({
                    strokeOpacity: .4
                }),
                t("Grid", ["oversold"]).setAll({
                    strokeOpacity: .4
                }),
                t("Graphics", ["overboughtoversold", "oversold", "fill"]).setAll({
                    visible: !0,
                    fillOpacity: .2
                }),
                t("Graphics", ["overboughtoversold", "overbought", "fill"]).setAll({
                    visible: !0,
                    fillOpacity: .2
                }),
                t("Graphics", ["fill", "bollingerbands", "upper"]).setAll({
                    fillOpacity: .2
                }),
                t("Graphics", ["fill", "movingaverageenvelope", "upper"]).setAll({
                    fillOpacity: .2
                }),
                t("Graphics", ["series", "line", "accumulativeswingindex"]).setAll({
                    fillOpacity: .2,
                    visible: !0
                }),
                t("XYChart", ["indicator"]).setAll({
                    height: (0,
                    h.aQ)(30),
                    minHeight: 80
                }),
                t("AxisLabel", ["x", "indicator"]).setAll({
                    forceHidden: !0
                }),
                t("XYSeries", ["indicator"]).setAll({
                    legendLabelText: "{name}"
                }),
                t("LineSeries", ["accumulationdistribution"]).setAll({
                    legendValueText: "[{seriesColor} bold]{valueY.formatNumber('#.000a')}[/]",
                    legendLabelText: "{shortName} ({useVolume})"
                }),
                t("LineSeries", ["accumulativeswingindex"]).setAll({
                    legendValueText: "[{swingColor} bold]{valueY.formatNumber('#.0000')}[/]",
                    legendLabelText: "{shortName} ({limitMoveValue})"
                }),
                t("LineSeries", ["aroon"]).setAll({
                    legendValueText: "[{upColor} bold]{up.formatNumber('#.00')}%[/] [{downColor} bold]{down.formatNumber('#.00')}%[/]",
                    legendLabelText: "{shortName} ({period.formatNumber('#.')})"
                }),
                t("ColumnSeries", ["awesomeoscillator"]).setAll({
                    legendValueText: "[{oscillatorColor}; bold]{valueY.formatNumber('#.00')}[/]"
                }),
                t("LineSeries", ["indicator", "bollingerbands"]).setAll({
                    legendValueText: "[{lowerColor} bold]{lower.formatNumber('#.00')}[/] [{seriesColor} bold]{valueY.formatNumber('#.00')}[/] [{upperColor} bold]{upper.formatNumber('#.00')}[/]",
                    legendLabelText: "{shortName} ({period.formatNumber('#.')},{field},{standardDeviations.formatNumber('#.')},{type})"
                }),
                t("LineSeries", ["indicator", "macross"]).setAll({
                    legendValueText: "[{seriesColor} bold]{valueY.formatNumber('#.00')}[/] [{fastColor} bold]{maf.formatNumber('#.00')}[/]",
                    legendLabelText: "{shortName} ({period.formatNumber('#.')},{fastPeriod.formatNumber('#.')})"
                }),
                t("LineSeries", ["indicator", "accelerationbands"]).setAll({
                    legendValueText: "[{lowerColor} bold]{lower.formatNumber('#.00')}[/] [{seriesColor} bold]{valueY.formatNumber('#.00')}[/] [{upperColor} bold]{upper.formatNumber('#.00')}[/]",
                    legendLabelText: "{shortName} ({period.formatNumber('#.')},{factor.formatNumber('#.#####')})"
                }),
                t("LineSeries", ["chaikinmoneyflow"]).setAll({
                    legendValueText: "[{seriesColor} bold]{valueY.formatNumber('#.00')}[/]",
                    legendLabelText: "{shortName} ({period.formatNumber('#.')})"
                }),
                t("LineSeries", ["chaikinoscillator"]).setAll({
                    legendValueText: "[{seriesColor} bold]{valueY.formatNumber('#.000a')}[/]",
                    legendLabelText: "{shortName} ({period.formatNumber('#.')},{slowPeriod.formatNumber('#.')})"
                }),
                t("LineSeries", ["bullbearpower"]).setAll({
                    legendValueText: "[{seriesColor} bold]{valueY.formatNumber()}[/]",
                    legendLabelText: "{shortName} ({period.formatNumber('#.')})"
                }),
                t("LineSeries", ["commoditychannelindex"]).setAll({
                    legendValueText: "[{seriesColor} bold]{valueY.formatNumber('#.00')}[/]",
                    legendLabelText: "{shortName} ({period.formatNumber('#.')})"
                }),
                t("LineSeries", ["disparityindex"]).setAll({
                    legendValueText: "[{seriesColor} bold]{valueY.formatNumber('#.00')}[/]",
                    legendLabelText: "{shortName} ({period.formatNumber('#.')},{field},{movingAverageType})"
                }),
                t("LineSeries", ["macd"]).setAll({
                    legendValueText: "[{seriesColor} bold]{valueY.formatNumber('#.00')}[/] [{signalColor} bold]{signal.formatNumber('#.00')}[/] [bold {differenceColor}]{difference.formatNumber('#.00')}[/b]",
                    legendLabelText: "{shortName} ({fastPeriod.formatNumber('#.')},{slowPeriod.formatNumber('#.')},{signalPeriod.formatNumber('#.')})"
                }),
                t("LineSeries", ["medianprice"]).setAll({
                    legendValueText: "[{seriesColor} bold]{valueY.formatNumber('#.00')}[/]",
                    legendLabelText: "{shortName} ({period.formatNumber('#.')})"
                }),
                t("LineSeries", ["momentum"]).setAll({
                    legendValueText: "[{seriesColor} bold]{valueY.formatNumber('#.00')}[/]",
                    legendLabelText: "{shortName} ({period.formatNumber('#.')},{field})"
                }),
                t("LineSeries", ["movingaverage"]).setAll({
                    legendValueText: "[{seriesColor} bold]{valueY.formatNumber('#.00')}[/]",
                    legendLabelText: "{shortName} ({period.formatNumber('#.')},{field},{type},{offset.formatNumber('#.')})"
                }),
                t("ColumnSeries", ["movingaveragedeviation"]).setAll({
                    legendValueText: "[{deviationColor}; bold]{valueY.formatNumber('#.00')}[/]"
                }),
                t("LineSeries", ["indicator", "movingaverageenvelope"]).setAll({
                    legendValueText: "[{lowerColor} bold]{lower.formatNumber('#.00')}[/] [{seriesColor} bold]{valueY.formatNumber('#.00')}[/] [{upperColor} bold]{upper.formatNumber('#.00')}[/]",
                    legendLabelText: "{shortName} ({period.formatNumber('#.')},{field},{shiftType},{shift.formatNumber('#.')},{type})"
                }),
                t("LineSeries", ["onbalancevolume"]).setAll({
                    legendValueText: "[{seriesColor} bold]{valueY.formatNumber('#.000a')}[/]",
                    legendLabelText: "{shortName}"
                }),
                t("LineSeries", ["pvt"]).setAll({
                    legendValueText: "[{seriesColor} bold]{valueY.formatNumber('#.000a')}[/]",
                    legendLabelText: "{shortName}"
                }),
                t("LineSeries", ["rsi"]).setAll({
                    legendValueText: "[{seriesColor} bold]{valueY.formatNumber('#.00')}[/] [{smaColor} bold]{sma.formatNumber('#.00')}[/]",
                    legendLabelText: "{shortName} ({period.formatNumber('#.')},{smaPeriod.formatNumber('#.')},{field})"
                }),
                t("LineSeries", ["standarddeviation"]).setAll({
                    legendValueText: "[{seriesColor} bold]{valueY.formatNumber('#.00')}[/]",
                    legendLabelText: "{shortName} ({period.formatNumber('#.')},{field})"
                }),
                t("LineSeries", ["stochasticmomentum"]).setAll({
                    legendValueText: "[{seriesColor} bold]{valueY.formatNumber('#.00')}[/] [{emaColor} bold]{ema.formatNumber('#.00')}[/]",
                    legendLabelText: "{shortName} ({period.formatNumber('#.')},{dPeriod.formatNumber('#.')},{emaPeriod.formatNumber('#.')})"
                }),
                t("LineSeries", ["stochastic"]).setAll({
                    legendValueText: "[{seriesColor} bold]{valueY.formatNumber('#.00')}[/] [{slowColor} bold]{slow.formatNumber('#.00')}[/]",
                    legendLabelText: "{shortName} ({period.formatNumber('#.')},{kSmoothing.formatNumber('#.')},{dSmoothing.formatNumber('#.')})"
                }),
                t("LineSeries", ["trix"]).setAll({
                    legendValueText: "[{seriesColor} bold]{valueY.formatNumber('#.00')}[/] [{signalColor} bold]{signal.formatNumber('#.00')}[/]",
                    legendLabelText: "{shortName} ({period.formatNumber('#.')})"
                }),
                t("LineSeries", ["typicalprice"]).setAll({
                    legendValueText: "[{seriesColor} bold]{valueY.formatNumber('#.00')}[/]",
                    legendLabelText: "{shortName} ({period.formatNumber('#.')})"
                }),
                t("LineSeries", ["averagetruerange"]).setAll({
                    legendValueText: "[{seriesColor} bold]{valueY.formatNumber('#.00')}[/]",
                    legendLabelText: "{shortName} ({period.formatNumber('#.')})"
                }),
                t("ColumnSeries", ["volume"]).setAll({
                    legendValueText: "[{volumeColor}; bold]{valueY.formatNumber('#.000a')}[/]"
                }),
                t("ColumnSeries", ["volumeprofile"]).setAll({
                    legendLabelText: "Volume Profile",
                    legendValueText: "[{downColor}; bold]{down.formatNumber('#.000a')}[/] [{upColor}; bold]{up.formatNumber('#.000a')}[/]  [bold]{total.formatNumber('#.000a')}[/]"
                }),
                t("LineSeries", ["vwap"]).setAll({
                    legendValueText: "[{seriesColor} bold]{valueY.formatNumber('#.00')}[/]",
                    legendLabelText: "{shortName} ({period.formatNumber('#.')},{field})"
                }),
                t("LineSeries", ["williamsr"]).setAll({
                    legendValueText: "[{seriesColor} bold]{valueY.formatNumber('#.00')}[/]",
                    legendLabelText: "{shortName} ({period.formatNumber('#.')})"
                }),
                t("LineSeries", ["zigzag"]).setAll({
                    legendValueText: "[{seriesColor} bold]{valueY.formatNumber('#.00')}[/]",
                    legendLabelText: "{shortName} ({deviation.formatNumber('#.')}, {depth.formatNumber('#.')})"
                }),
                t("RoundedRectangle", ["series", "column", "volumeprofile"]).setAll({
                    fillOpacity: .3,
                    strokeWidth: 2,
                    strokeOpacity: 0
                }),
                t("RoundedRectangle", ["series", "column", "volumeprofile"]).states.create("hover", {
                    strokeOpacity: 1
                }),
                t("RoundedRectangle", ["macd", "difference"]).setAll({
                    fillOpacity: .5,
                    strokeOpacity: 0
                }),
                t("RoundedRectangle", ["series", "column", "awesomeoscillator"]).setAll({
                    fillOpacity: .5,
                    strokeOpacity: 0
                });
                {
                    const e = t("RoundedRectangle", ["series", "column", "volume"]);
                    e.setAll({
                        fillOpacity: .5,
                        stroke: s.get("background"),
                        strokeOpacity: .2
                    }),
                    e.adapters.add("fill", ( (e, t) => {
                        const i = t.dataItem;
                        if (i) {
                            const e = i.dataContext;
                            if (null != e.volumeColor)
                                return e.volumeColor
                        }
                        return e
                    }
                    ))
                }
                t("RoundedRectangle", ["series", "column", "movingaveragedeviation"]).setAll({
                    fillOpacity: .5,
                    strokeOpacity: 0
                }),
                t("Grid", ["renderer", "y", "overboughtoversold"]).setAll({
                    forceHidden: !0
                }),
                t("Grid", ["renderer", "y", "overboughtoversold"]).setAll({
                    forceHidden: !0
                }),
                t("AxisLabel", ["renderer", "y", "overboughtoversold"]).setAll({
                    forceHidden: !0
                }),
                t("MovingAverage").setAll({
                    name: "Moving Average",
                    shortName: "MA",
                    seriesColor: (0,
                    u.$_)(11240154),
                    type: "simple",
                    field: "close",
                    period: 20,
                    offset: 0
                }),
                t("MACross").setAll({
                    name: "Moving Average Cross",
                    shortName: "MACross",
                    seriesColor: (0,
                    u.$_)(11240154),
                    fastColor: (0,
                    u.$_)(1536734),
                    field: "close",
                    period: 9,
                    fastPeriod: 21
                }),
                t("ZigZag").setAll({
                    name: "ZigZag",
                    shortName: "ZigZag",
                    seriesColor: s.get("alternativeBackground"),
                    deviation: 5,
                    depth: 3
                }),
                t("MovingAverageEnvelope").setAll({
                    name: "Moving Average Envelope",
                    shortName: "MA ENV",
                    seriesColor: (0,
                    u.$_)(16748607),
                    upperColor: (0,
                    u.$_)(16763208),
                    lowerColor: (0,
                    u.$_)(16756596),
                    type: "simple",
                    field: "close",
                    period: 20,
                    offset: 0,
                    shift: 5,
                    shiftType: "percent"
                }),
                t("MovingAverageDeviation").setAll({
                    name: "Moving Average Deviation",
                    shortName: "MA Dev",
                    increasingColor: s.get("positive"),
                    decreasingColor: s.get("negative"),
                    type: "simple",
                    field: "close",
                    period: 20
                }),
                t("StandardDeviation").setAll({
                    name: "Standard Deviation",
                    seriesColor: s.get("alternativeBackground"),
                    shortName: "STDEV",
                    field: "close",
                    period: 20
                }),
                t("TypicalPrice").setAll({
                    name: "Typical Price",
                    seriesColor: s.get("alternativeBackground"),
                    shortName: "Typical Price",
                    field: "hlc/3",
                    period: 20
                }),
                t("AverageTrueRange").setAll({
                    name: "Average True Range",
                    seriesColor: (0,
                    u.$_)(16748607),
                    shortName: "ATR",
                    period: 14
                }),
                t("Trix").setAll({
                    name: "Trix",
                    seriesColor: s.get("alternativeBackground"),
                    signalColor: (0,
                    u.$_)(16748607),
                    shortName: "Trix",
                    field: "close",
                    period: 20,
                    signalPeriod: 9
                }),
                t("MedianPrice").setAll({
                    name: "Median Price",
                    seriesColor: s.get("alternativeBackground"),
                    shortName: "Median Price",
                    field: "hl/2",
                    period: 20
                }),
                t("VWAP").setAll({
                    name: "Volume-Weighted Average Price",
                    shortName: "VWAP",
                    seriesColor: (0,
                    u.$_)(11240154),
                    field: "hlc/3",
                    period: 30
                }),
                t("AccumulationDistribution").setAll({
                    name: "Accumulation/Distribution",
                    shortName: "Accum/Dist",
                    seriesColor: (0,
                    u.$_)(7368816),
                    useVolume: !0
                }),
                t("DisparityIndex").setAll({
                    name: "Disparity Index",
                    shortName: "Disparity",
                    seriesColor: (0,
                    u.$_)(7368816),
                    period: 14,
                    field: "close",
                    movingAverageType: "simple"
                }),
                t("ChaikinMoneyFlow").setAll({
                    name: "Chaikin Money Flow",
                    shortName: "Chaikin MF",
                    seriesColor: (0,
                    u.$_)(7368816),
                    period: 20
                }),
                t("ChaikinOscillator").setAll({
                    name: "Chaikin Oscillator",
                    period: 3,
                    slowPeriod: 10,
                    shortName: "Chaikin Osc",
                    seriesColor: (0,
                    u.$_)(7368816)
                }),
                t("BullBearPower").setAll({
                    name: "Bull Bear Power",
                    period: 13,
                    shortName: "BBP",
                    seriesColor: (0,
                    u.$_)(7368816)
                }),
                t("OnBalanceVolume").setAll({
                    name: "On Balance Volume",
                    shortName: "On Bal Vol",
                    seriesColor: (0,
                    u.$_)(7368816)
                }),
                t("PVT").setAll({
                    name: "Price Volume Trend",
                    shortName: "PVT",
                    seriesColor: (0,
                    u.$_)(7368816)
                }),
                t("BollingerBands").setAll({
                    name: "Bollinger Bands",
                    shortName: "Bollinger",
                    standardDeviations: 2,
                    seriesColor: (0,
                    u.$_)(16748607),
                    upperColor: (0,
                    u.$_)(16763208),
                    lowerColor: (0,
                    u.$_)(16756596)
                }),
                t("AccelerationBands").setAll({
                    name: "Acceleration Bands",
                    shortName: "Acceleration",
                    factor: .001,
                    period: 20,
                    seriesColor: (0,
                    u.$_)(16748607),
                    upperColor: (0,
                    u.$_)(15092891),
                    lowerColor: (0,
                    u.$_)(15092891)
                }),
                t("RelativeStrengthIndex").setAll({
                    name: "Relative Strength Index",
                    shortName: "RSI",
                    period: 14,
                    smaPeriod: 3,
                    field: "close",
                    overSold: 20,
                    overBought: 80,
                    overSoldColor: (0,
                    u.$_)(14942208),
                    overBoughtColor: (0,
                    u.$_)(6797276),
                    seriesColor: (0,
                    u.$_)(11240154),
                    smaColor: (0,
                    u.$_)(16748607)
                }),
                t("Momentum").setAll({
                    name: "Momentum",
                    shortName: "Mom",
                    period: 14,
                    field: "close",
                    seriesColor: (0,
                    u.$_)(11240154)
                }),
                t("WilliamsR").setAll({
                    name: "Williams %R",
                    shortName: "Williams %R",
                    period: 14,
                    field: "close",
                    overSold: -80,
                    overBought: -20,
                    overSoldColor: (0,
                    u.$_)(14942208),
                    overBoughtColor: (0,
                    u.$_)(6797276),
                    seriesColor: (0,
                    u.$_)(11240154)
                }),
                t("CommodityChannelIndex").setAll({
                    name: "Commodity Channel Index",
                    shortName: "CCI",
                    period: 20,
                    field: "close",
                    overSold: -100,
                    overBought: 100,
                    overSoldColor: (0,
                    u.$_)(14942208),
                    overBoughtColor: (0,
                    u.$_)(6797276),
                    seriesColor: (0,
                    u.$_)(11240154)
                }),
                t("StochasticOscillator").setAll({
                    name: "Stochastic Oscillator",
                    shortName: "Stochastic Osc",
                    period: 14,
                    kSmoothing: 1,
                    dSmoothing: 3,
                    field: "close",
                    overSold: 20,
                    overBought: 80,
                    overSoldColor: (0,
                    u.$_)(14942208),
                    overBoughtColor: (0,
                    u.$_)(6797276),
                    seriesColor: (0,
                    u.$_)(11240154),
                    slowColor: (0,
                    u.$_)(16748607)
                }),
                t("StochasticMomentumIndex").setAll({
                    name: "Stochastic Momentum Index",
                    shortName: "Stochastic MI",
                    period: 10,
                    dPeriod: 3,
                    emaPeriod: 3,
                    field: "close",
                    overSold: -40,
                    overBought: 40,
                    overSoldColor: (0,
                    u.$_)(14942208),
                    overBoughtColor: (0,
                    u.$_)(6797276),
                    seriesColor: (0,
                    u.$_)(11240154),
                    emaColor: (0,
                    u.$_)(16748607)
                }),
                t("AccumulativeSwingIndex").setAll({
                    name: "Accumulative Swing Index",
                    shortName: "ACC Swing",
                    limitMoveValue: 1e3,
                    positiveColor: s.get("positive"),
                    negativeColor: s.get("negative")
                }),
                t("Aroon").setAll({
                    name: "Aroon",
                    shortName: "Aroon",
                    period: 14,
                    upColor: s.get("positive"),
                    downColor: s.get("negative")
                }),
                t("AwesomeOscillator").setAll({
                    name: "Awesome Oscillator",
                    shortName: "Awesome",
                    increasingColor: s.get("positive"),
                    decreasingColor: s.get("negative")
                }),
                t("Volume").setAll({
                    name: "Volume",
                    shortName: "Volume",
                    increasingColor: s.get("positive"),
                    decreasingColor: s.get("negative")
                }),
                t("VolumeProfile").setAll({
                    name: "Volume Profile",
                    shortName: "VP",
                    upColor: u.Il.fromHex(14922508),
                    downColor: u.Il.fromHex(3045603),
                    countType: "rows",
                    count: 24,
                    axisWidth: 40,
                    valueArea: 70,
                    valueAreaOpacity: .7
                }),
                t("MACD").setAll({
                    name: "MACD",
                    field: "close",
                    shortName: "MACD",
                    fastPeriod: 12,
                    slowPeriod: 26,
                    signalPeriod: 9,
                    increasingColor: s.get("positive"),
                    decreasingColor: s.get("negative"),
                    seriesColor: (0,
                    u.$_)(11240154),
                    signalColor: (0,
                    u.$_)(16748607)
                }),
                t("Grid", ["cursor", "y", "indicator"]).set("forceHidden", !0),
                t("StockControl").setAll({
                    visible: !0,
                    active: !1
                }),
                t("IndicatorControl").setAll({
                    name: e.translateAny("Indicators"),
                    scrollable: !0,
                    fixedLabel: !0,
                    searchable: !0,
                    indicators: ["Acceleration Bands", "Accumulation Distribution", "Accumulative Swing Index", "Aroon", "Average True Range", "Awesome Oscillator", "Bollinger Bands", "Bull Bear Power", "Chaikin Money Flow", "Chaikin Oscillator", "Commodity Channel Index", "Disparity Index", "MACD", "Median Price", "Momentum", "Moving Average", "Moving Average Cross", "Moving Average Deviation", "Moving Average Envelope", "On Balance Volume", "Price Volume Trend", "Relative Strength Index", "Standard Deviation", "Stochastic Momentum Index", "Stochastic Oscillator", "Trix", "Typical Price", "Volume", "Volume Profile", "VWAP", "Williams R", "ZigZag"]
                }),
                t("ComparisonControl").setAll({
                    name: e.translateAny("Comparison")
                });
                const a = [{
                    svgPath: "M 5 35 L 5 15 L 26 15 L 26 5 L 45 25 L 26 45 L 26 35 L 5 35 Z",
                    scale: 1,
                    centerX: (0,
                    h.aQ)(100),
                    centerY: (0,
                    h.aQ)(50)
                }, {
                    svgPath: "M 45 35 L 45 15 L 24 15 L 24 5 L 5 25 L 24 45 L 24 35 L 45 35 Z",
                    scale: 1,
                    centerX: (0,
                    h.aQ)(0),
                    centerY: (0,
                    h.aQ)(50)
                }, {
                    svgPath: "M 35 5 L 15 5 L 15 26 L 5 26 L 25 45 L 45 26 L 35 26 L 35 5 Z",
                    scale: 1,
                    centerX: (0,
                    h.aQ)(50),
                    centerY: (0,
                    h.aQ)(100)
                }, {
                    svgPath: "M 35 45 L 15 45 L 15 24 L 5 24 L 25 5 L 45 24 L 35 24 L 35 45 Z",
                    scale: 1,
                    centerX: (0,
                    h.aQ)(50),
                    centerY: (0,
                    h.aQ)(0)
                }, {
                    svgPath: "M 5 25 A 1 1 0 0 0 45 25 A 1 1 0 0 0 5 25 M 14 19 A 1 1 0 0 0 19 19 A 1 1 0 0 0 14 19 M 36 19 A 1 1 0 0 0 31 19 A 1 1 0 0 0 36 19 M 16 32 C 20 39 30 39 34 32",
                    scale: 1,
                    centerX: (0,
                    h.aQ)(50),
                    centerY: (0,
                    h.aQ)(50)
                }, {
                    svgPath: "M 5 25 A 1 1 0 0 0 45 25 A 1 1 0 0 0 5 25 M 14 19 A 1 1 0 0 0 19 19 A 1 1 0 0 0 14 19 M 36 19 A 1 1 0 0 0 31 19 A 1 1 0 0 0 36 19 M 33 37 C 28 32 21 32 16 37",
                    scale: 1,
                    centerX: (0,
                    h.aQ)(50),
                    centerY: (0,
                    h.aQ)(50)
                }, {
                    svgPath: "M 5 25 A 1 1 0 0 0 45 25 A 1 1 0 0 0 5 25 M 14 19 A 1 1 0 0 0 19 19 A 1 1 0 0 0 14 19 M 36 19 A 1 1 0 0 0 31 19 A 1 1 0 0 0 36 19 M 32 35 L 18 35",
                    scale: 1,
                    centerX: (0,
                    h.aQ)(50),
                    centerY: (0,
                    h.aQ)(50)
                }, {
                    svgPath: "M 25 46 C 25 38 -6 18 10 5 C 16 1 25 3 25 10 C 25 3 34 1 40 5 C 56 18 25 38 25 46",
                    scale: 1,
                    centerX: (0,
                    h.aQ)(50),
                    centerY: (0,
                    h.aQ)(100)
                }, {
                    svgPath: "M 2 43 L 2 4 L 26 4 L 17 15 L 26 26 L 2 26 Z",
                    scale: 1,
                    centerX: (0,
                    h.aQ)(0),
                    centerY: (0,
                    h.aQ)(100)
                }, {
                    svgPath: "M 25,2 L 25,2 L 33,14 L 47,18 L 37,29 L 39,44 L 25,38 L 11,44 L 13,29 L 3,18 L 17,14 L 25,2 Z",
                    scale: 1,
                    centerX: (0,
                    h.aQ)(50),
                    centerY: (0,
                    h.aQ)(50)
                }, {
                    svgPath: "M 25,2 L 25,2 L 30,13 L 41,9 L 37,20 L 48,25 L 37,30 L 41,41 L 30,37 L 25,48 L 20,37 L 9,41 L 13,30 L 2,25 L 13,20 L 9,9 L 20,13 L 25,2 Z",
                    scale: 1,
                    centerX: (0,
                    h.aQ)(50),
                    centerY: (0,
                    h.aQ)(50)
                }, {
                    svgPath: "M 25,2 L 25,2 L 30,10 L 39,6 L 38,16 L 47,18 L 41,25 L 47,32 L 38,34 L 39,44 L 30,40 L 25,48 L 20,40 L 11,44 L 12,34 L 3,32 L 9,25 L 3,18 L 12,16 L 11,6 L 20,10 L 25,2 Z",
                    scale: 1,
                    centerX: (0,
                    h.aQ)(50),
                    centerY: (0,
                    h.aQ)(50),
                    style: {
                        fillOpacity: 0
                    }
                }, {
                    svgPath: "M 8 8 L 25 25 L 8 42 M 20 8 L 37 25 L 20 42",
                    scale: 1,
                    centerX: (0,
                    h.aQ)(100),
                    centerY: (0,
                    h.aQ)(50),
                    fillDisabled: !0
                }, {
                    svgPath: "M 42 8 L 25 25 L 42 42 M 30 8 L 13 25 L 30 42",
                    scale: 1,
                    centerX: (0,
                    h.aQ)(0),
                    centerY: (0,
                    h.aQ)(50),
                    fillDisabled: !0
                }, {
                    svgPath: "M 42 42 L 25 25 L 9 42 M 9 29 L 25 13 L 42 30",
                    scale: 1,
                    centerX: (0,
                    h.aQ)(100),
                    centerY: (0,
                    h.aQ)(50),
                    fillDisabled: !0
                }, {
                    svgPath: "M 42 8 L 25 25 L 8 8 M 8 20 L 25 37 L 42 20",
                    scale: 1,
                    centerX: (0,
                    h.aQ)(100),
                    centerY: (0,
                    h.aQ)(50),
                    fillDisabled: !0
                }];
                t("DrawingControl").setAll({
                    name: e.translateAny("Draw"),
                    tool: "Line",
                    tools: ["Arrows &amp; Icons", "Average", "Callout", "Doodle", "Ellipse", "Fibonacci", "Fibonacci Timezone", "Horizontal Line", "Horizontal Ray", "Label", "Line", "Measure", "Parallel Channel", "Polyline", "Polyfill", "Quadrant Line", "Rectangle", "Regression", "Trend Line", "Triangle", "Vertical Line"],
                    togglable: !0,
                    strokeColor: (0,
                    u.$_)(8924671),
                    strokeWidth: 2,
                    strokeWidths: [1, 2, 4, 8, 16],
                    strokeDasharray: [],
                    strokeDasharrays: [[], [2, 2], [6, 3], [8, 4, 2, 4]],
                    strokeOpacity: 1,
                    showExtension: !0,
                    fillColor: (0,
                    u.$_)(11366143),
                    fillOpacity: .2,
                    labelFill: (0,
                    u.$_)(0),
                    labelFontSize: "12px",
                    labelFontSizes: ["8px", "10px", "11px", "12px", "14px", "16px", "20px", "24px", "36px", "48px"],
                    labelFontWeight: "normal",
                    labelFontStyle: "normal",
                    labelFontFamily: "Arial",
                    labelFontFamilies: ["Arial", "Courier New", "Garamond", "Georgia", "Times New Roman"],
                    drawingIcon: a[0],
                    drawingIcons: a,
                    snapToData: !1,
                    scrollable: !0
                }),
                t("ColorControl").setAll({
                    useOpacity: !0
                }),
                t("DateRangeSelector").setAll({
                    description: e.translateAny("Date Range"),
                    minDate: "auto",
                    maxDate: "auto"
                }),
                t("PeriodSelector").setAll({
                    description: e.translateAny("Period selector"),
                    togglable: !1,
                    icon: "none",
                    periods: [{
                        timeUnit: "day",
                        count: 5,
                        name: "5" + e.translateAny("D")
                    }, {
                        timeUnit: "month",
                        count: 1,
                        name: "1" + e.translateAny("M")
                    }, {
                        timeUnit: "month",
                        count: 3,
                        name: "3" + e.translateAny("M")
                    }, {
                        timeUnit: "month",
                        count: 6,
                        name: "6" + e.translateAny("M")
                    }, {
                        timeUnit: "ytd",
                        name: e.translateAny("YTD")
                    }, {
                        timeUnit: "year",
                        count: 1,
                        name: "1" + e.translateAny("Y")
                    }, {
                        timeUnit: "year",
                        count: 2,
                        name: "2" + e.translateAny("Y")
                    }, {
                        timeUnit: "year",
                        count: 5,
                        name: "5" + e.translateAny("Y")
                    }, {
                        timeUnit: "max",
                        name: e.translateAny("Max")
                    }]
                }),
                t("DropdownListControl").setAll({
                    fixedLabel: !1
                }),
                t("DropdownList").setAll({
                    searchable: !0,
                    maxSearchItems: 10,
                    items: []
                }),
                t("ComparisonControl").setAll({
                    fixedLabel: !0
                }),
                t("SeriesTypeControl").setAll({
                    currentItem: "candlestick",
                    items: [{
                        id: "line",
                        label: e.translateAny("Line"),
                        icon: p.getIcon("Line Series")
                    }, {
                        id: "candlestick",
                        label: e.translateAny("Candles"),
                        icon: p.getIcon("Candlestick Series")
                    }, {
                        id: "procandlestick",
                        label: e.translateAny("Hollow Candles"),
                        icon: p.getIcon("Pro Candlestick Series")
                    }, {
                        id: "ohlc",
                        label: e.translateAny("Sticks"),
                        icon: p.getIcon("OHLC Series")
                    }]
                }),
                t("IntervalControl").setAll({
                    currentItem: "1 day",
                    items: [{
                        id: "1 minute",
                        label: "1 " + e.translateAny("minute"),
                        interval: {
                            timeUnit: "minute",
                            count: 1
                        }
                    }, {
                        id: "2 minute",
                        label: "2 " + e.translateAny("minutes"),
                        interval: {
                            timeUnit: "minute",
                            count: 2
                        }
                    }, {
                        id: "5 minute",
                        label: "5 " + e.translateAny("minutes"),
                        interval: {
                            timeUnit: "minute",
                            count: 5
                        }
                    }, {
                        id: "15 minute",
                        label: "15 " + e.translateAny("minutes"),
                        interval: {
                            timeUnit: "minute",
                            count: 15
                        }
                    }, {
                        id: "30 minute",
                        label: "30 " + e.translateAny("minutes"),
                        interval: {
                            timeUnit: "minute",
                            count: 30
                        }
                    }, {
                        id: "1 hour",
                        label: "1 " + e.translateAny("hour"),
                        interval: {
                            timeUnit: "hour",
                            count: 1
                        }
                    }, {
                        id: "4 hour",
                        label: "4 " + e.translateAny("hours"),
                        interval: {
                            timeUnit: "hour",
                            count: 4
                        }
                    }, {
                        id: "1 day",
                        label: "1 " + e.translateAny("day"),
                        interval: {
                            timeUnit: "day",
                            count: 1
                        }
                    }, {
                        id: "1 week",
                        label: "1 " + e.translateAny("week"),
                        interval: {
                            timeUnit: "week",
                            count: 1
                        }
                    }, {
                        id: "1 month",
                        label: "1 " + e.translateAny("month"),
                        interval: {
                            timeUnit: "month",
                            count: 1
                        }
                    }, {
                        id: "1 year",
                        label: "1 " + e.translateAny("year"),
                        interval: {
                            timeUnit: "year",
                            count: 1
                        }
                    }]
                }),
                t("DropdownColors").setAll({
                    colors: g.U.new(this._root, {
                        colors: [(0,
                        u.$_)(0), (0,
                        u.$_)(4607574), (0,
                        u.$_)(5989226), (0,
                        u.$_)(7765380), (0,
                        u.$_)(12172741), (0,
                        u.$_)(14738665), (0,
                        u.$_)(16251135), (0,
                        u.$_)(16777215), (0,
                        u.$_)(7525375), (0,
                        u.$_)(11366143), (0,
                        u.$_)(16744645), (0,
                        u.$_)(16760180), (0,
                        u.$_)(16770950), (0,
                        u.$_)(6615513), (0,
                        u.$_)(16744580), (0,
                        u.$_)(7992509), (0,
                        u.$_)(2866431), (0,
                        u.$_)(8924671), (0,
                        u.$_)(16730797), (0,
                        u.$_)(16753471), (0,
                        u.$_)(16767816), (0,
                        u.$_)(2284476), (0,
                        u.$_)(16724794), (0,
                        u.$_)(45153), (0,
                        u.$_)(491755), (0,
                        u.$_)(6619368), (0,
                        u.$_)(13041797), (0,
                        u.$_)(15033130), (0,
                        u.$_)(15710976), (0,
                        u.$_)(41370), (0,
                        u.$_)(14423085), (0,
                        u.$_)(40022), (0,
                        u.$_)(25035), (0,
                        u.$_)(4391084), (0,
                        u.$_)(9896036), (0,
                        u.$_)(13056778), (0,
                        u.$_)(1472e4), (0,
                        u.$_)(27780), (0,
                        u.$_)(11407653), (0,
                        u.$_)(35148)]
                    })
                }),
                t("ResetControl").setAll({
                    description: e.translateAny("Reset"),
                    togglable: !1
                }),
                t("SettingsControl").setAll({
                    description: e.translateAny("Settings"),
                    togglable: !0,
                    fixedLabel: !0,
                    items: [{
                        id: "fills",
                        label: e.translateAny("X-axis fills"),
                        className: "am5stock-list-info am5stock-list-heading"
                    }, {
                        form: "checkbox",
                        id: "fills",
                        label: e.translateAny("Fills")
                    }, {
                        id: "y-scale",
                        label: e.translateAny("Y-axis scale"),
                        className: "am5stock-list-info am5stock-list-heading"
                    }, {
                        id: "y-scale",
                        form: "radio",
                        value: "percent",
                        label: e.translateAny("Change percent")
                    }, {
                        id: "y-scale",
                        form: "radio",
                        value: "regular",
                        label: e.translateAny("Regular")
                    }, {
                        id: "y-scale",
                        form: "radio",
                        value: "logarithmic",
                        label: e.translateAny("Logarithmic")
                    }, {
                        id: "autosave",
                        label: e.translateAny("Drawings &amp; Indicators"),
                        className: "am5stock-list-info am5stock-list-heading"
                    }, {
                        id: "autosave",
                        form: "checkbox",
                        label: e.translateAny("Auto-save")
                    }]
                }),
                t("DataSaveControl").setAll({
                    description: e.translateAny("Save drawings and indicators"),
                    togglable: !0,
                    fixedLabel: !0,
                    autoSave: !1,
                    items: [{
                        id: "autosave",
                        form: "checkbox",
                        label: e.translateAny("Auto-save drawings and indicators")
                    }, {
                        id: "save",
                        label: e.translateAny("Save drawings &amp; indicators"),
                        subLabel: e.translateAny("Saves drawings/indicators to browser local storage")
                    }, {
                        id: "restore",
                        label: e.translateAny("Restore saved data"),
                        subLabel: e.translateAny("Restores saved data from browser local storage")
                    }, {
                        id: "clear",
                        label: e.translateAny("Clear"),
                        subLabel: e.translateAny("Clears saved data from browser local storage")
                    }]
                }),
                t("Measure").setAll({
                    labelText: "{value} ({percent})\n{count.formatNumber('#,###.')} " + e.translateAny("bars") + " {intervalCount.formatNumber('#,###.')} {intervalUnit}",
                    labelVolumeText: "\nVolume: {volume.formatNumber('#.##a')}"
                });
                {
                    const e = t("Rectangle", ["selector"]);
                    e.setAll({
                        isMeasured: !1,
                        strokeDasharray: [2, 2],
                        strokeOpacity: .5,
                        strokeWidth: 1
                    }),
                    (0,
                    d.v)(e, "stroke", s, "alternativeBackground")
                }
            }
        }
        var b = i(55)
          , v = i(7144)
          , y = i(7142)
          , _ = i(2312)
          , w = i(2338)
          , x = i(8219)
          , k = i(6331)
          , C = i(7652);
        class D extends k.JH {
            _afterNew() {
                super._afterNew(),
                this.get("stockChart").controls.push(this),
                this._defaultThemes = this.get("stockChart")._defaultThemes,
                super._afterNewApplyThemes(),
                this._initElements(),
                this._applyClassNames(),
                this._maybeMakeAccessible(),
                this._root.addDisposer(this)
            }
            _initElements() {
                const e = document.createElement("div");
                e.setAttribute("title", this.get("description", this.get("name", ""))),
                this.setPrivate("button", e);
                const t = document.createElement("div");
                t.appendChild(this._getIcon()),
                "none" == this.get("icon") && (t.style.display = "none"),
                e.appendChild(t),
                this.setPrivate("icon", t);
                const i = this.get("name", "")
                  , s = document.createElement("div");
                s.innerHTML = i,
                "" == i && (s.style.display = "none"),
                e.appendChild(s),
                this.setPrivate("label", s),
                this._disposers.push(C.addEventListener(e, "click", (e => {
                    0 != this.get("togglable") && this._handleClick(),
                    this.events.isEnabled("click") && this.events.dispatch("click", {
                        type: "click",
                        target: this,
                        originalEvent: e
                    })
                }
                )))
            }
            _applyClassNames() {
                this.getPrivate("button").className = "am5stock am5stock-control am5stock-control-button",
                this.getPrivate("label").className = "am5stock-control-label",
                this.getPrivate("icon").className = "am5stock-control-icon"
            }
            _getIcon() {
                const e = this.get("icon");
                return e && "none" != e ? e : this._getDefaultIcon()
            }
            _getDefaultIcon() {
                return p.getIcon("Default")
            }
            _beforeChanged() {
                if (super._beforeChanged(),
                this.isDirty("visible") && !this.get("visible") && (this.getPrivate("button").style.display = "none"),
                this.isDirty("forceHidden") && this.get("forceHidden") && (this.getPrivate("button").style.display = "none"),
                this.isDirty("name") && this._setLabel(this.get("name", "")),
                this.isDirty("active")) {
                    const e = this.getPrivate("button");
                    this.get("active") ? C.addClass(e, "am5stock-control-button-active") : C.removeClass(e, "am5stock-control-button-active")
                }
                this.isDirty("align") && ("right" == this.get("align") ? C.addClass(this.getPrivate("button"), "am5stock-align-right") : C.removeClass(this.getPrivate("button"), "am5stock-align-right")),
                this.isPrivateDirty("toolbar") && this._maybeMakeAccessible()
            }
            _dispose() {
                super._dispose(),
                C.removeElement(this.getPrivate("button"))
            }
            _setLabel(e) {
                const t = this.getPrivate("label");
                t.innerHTML = e,
                t.style.display = "" == e ? "none" : "",
                this.getPrivate("button").setAttribute("title", this.get("description", this.get("name", "")))
            }
            hide() {
                this.getPrivate("button").style.display = "none"
            }
            show() {
                !0 !== this.get("forceHidden") && (this.getPrivate("button").style.display = "")
            }
            _handleClick() {
                this.set("active", !this.get("active"))
            }
            _maybeMakeAccessible() {
                if (this.isAccessible()) {
                    const e = this.getPrivate("button");
                    e.setAttribute("tabindex", this._root.tabindex.toString()),
                    e.setAttribute("role", "button"),
                    C.supports("keyboardevents") && (e.setAttribute("aria-label", e.getAttribute("title") + "; " + this._t("Press ENTER to toggle")),
                    this._disposers.push(C.addEventListener(document, "keydown", (t => {
                        document.activeElement == e && 13 == t.keyCode && (this.get("togglable") ? this._handleClick() : document.activeElement.click())
                    }
                    ))))
                }
            }
            isAccessible() {
                const e = this.getPrivate("toolbar");
                return !(!e || !e.get("focusable"))
            }
        }
        Object.defineProperty(D, "className", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: "StockControl"
        }),
        Object.defineProperty(D, "classNames", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: k.JH.classNames.concat([D.className])
        });
        class S extends k.JH {
            _afterNew() {
                super._afterNew(),
                this._defaultThemes = this.get("control")._defaultThemes,
                super._afterNewApplyThemes(),
                this._initElements(),
                this._root.addDisposer(this),
                C.supports("keyboardevents") && this._disposers.push(C.addEventListener(document, "keydown", (e => {
                    this.isOpen() && 27 == e.keyCode && this.hide()
                }
                ))),
                this._disposers.push(C.addEventListener(this.getPrivate("container"), "click", (e => {
                    this.isOpen() && e.preventDefault()
                }
                ))),
                this._disposers.push(C.addEventListener(document, "click", ( () => {
                    this.isOpen() && this.hide()
                }
                )))
            }
            _initElements() {
                const e = document.createElement("div");
                e.className = "am5stock-control-list-container",
                this._disposers.push(C.addEventListener(e, "click", (e => {
                    e.stopPropagation()
                }
                ))),
                this.setPrivate("container", e);
                const t = document.createElement("div");
                t.className = "am5stock-control-list-arrow",
                e.appendChild(t),
                this.setPrivate("arrow", t);
                const i = this.get("parent");
                i && i.appendChild(e),
                this.get("scrollable") && (this._sizeItems(),
                this.root.container.onPrivate("height", ( () => {
                    this._sizeItems()
                }
                ))),
                this.hide()
            }
            _sizeItems() {
                const e = this.getPrivate("container");
                e.style.maxHeight = this.root.container.height() - 100 + "px",
                e.style.overflow = "auto"
            }
            _beforeChanged() {
                if (super._beforeChanged(),
                this.isDirty("parent")) {
                    const e = this.get("parent")
                      , t = this.getPrivate("container");
                    e && t && e.appendChild(t)
                }
            }
            _dispose() {
                super._dispose()
            }
            isOpen() {
                return "none" != this.getPrivate("container").style.display
            }
            hide() {
                const e = this.getPrivate("arrow")
                  , t = this.getPrivate("container");
                t.style.display = "none",
                this.events.dispatch("closed", {
                    type: "closed",
                    target: this
                }),
                t.style.marginLeft = "",
                e.style.marginLeft = ""
            }
            show() {
                const e = this.getPrivate("arrow")
                  , t = this.getPrivate("container");
                t.style.display = "";
                let i = 0;
                if (this.get("control").getPrivate("toolbar")) {
                    const e = this.get("control").getPrivate("toolbar").get("container");
                    i = Math.round(e.getBoundingClientRect().right - t.getBoundingClientRect().right)
                }
                i < 0 ? (t.style.marginLeft = i + "px",
                e.style.marginLeft = Math.abs(i) + "px") : (t.style.marginLeft = "",
                e.style.marginLeft = ""),
                this.events.dispatch("opened", {
                    type: "opened",
                    target: this
                })
            }
            toggle() {
                "none" == this.getPrivate("container").style.display ? this.show() : this.hide()
            }
            _maybeMakeAccessible() {
                this.isAccessible()
            }
            isAccessible() {
                const e = this.get("control").getPrivate("toolbar");
                return !(!e || !e.get("focusable"))
            }
        }
        Object.defineProperty(S, "className", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: "Dropdown"
        }),
        Object.defineProperty(S, "classNames", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: k.JH.classNames.concat([S.className])
        });
        var P = i(5071);
        class A extends S {
            _afterNew() {
                super._afterNew(),
                this._setupKeyboardNav(),
                this._root.addDisposer(this)
            }
            _initElements() {
                super._initElements();
                const e = this.getPrivate("container")
                  , t = document.createElement("ul");
                t.className = "am5stock-control-colors",
                e.appendChild(t),
                this.setPrivate("list", t),
                this._initItems()
            }
            _initItems() {
                this.getPrivate("list").innerHTML = "";
                let e = this.get("colors");
                e || (e = g.U.new(this._root, {}));
                const t = e.get("colors", []);
                P.each(t, (e => {
                    this.addItem(e)
                }
                )),
                this._initOpacity(),
                this._maybeMakeAccessible()
            }
            _beforeChanged() {
                super._beforeChanged(),
                (this.isDirty("colors") || this.isDirty("useOpacity") || this.isPrivateDirty("color") || this.isPrivateDirty("opacity")) && this._initItems(),
                this.isDirty("control") && this._maybeMakeAccessible()
            }
            _dispose() {
                super._dispose()
            }
            addItem(e) {
                const t = this.getPrivate("color") ? this.getPrivate("color").hex : 0
                  , i = this.getPrivate("list")
                  , s = document.createElement("li");
                s.className = "am5stock-control-color",
                t == e.hex && (s.className += " am5stock-control-active"),
                s.style.background = e.toCSS(),
                i.appendChild(s),
                this._disposers.push(C.addEventListener(s, "click", (t => {
                    this.hide(),
                    this.events.dispatch("invoked", {
                        type: "invoked",
                        color: e,
                        target: this
                    })
                }
                )))
            }
            _initOpacity() {
                if (this.get("useOpacity")) {
                    const e = this.getPrivate("opacity", 1)
                      , t = this.getPrivate("list")
                      , i = document.createElement("hr");
                    t.appendChild(i);
                    for (let i = 100; i >= 0; i -= 25) {
                        const s = (0,
                        u.$_)(0)
                          , a = document.createElement("li");
                        a.innerHTML = i + "%",
                        a.className = "am5stock-control-opacity am5stock-control-opacity-" + i,
                        100 * e == i && (a.className += " am5stock-control-active"),
                        a.style.background = s.toCSS(i / 100),
                        t.appendChild(a),
                        this._disposers.push(C.addEventListener(a, "click", (e => {
                            this.hide(),
                            this.events.dispatch("invokedOpacity", {
                                type: "invokedOpacity",
                                opacity: i / 100,
                                target: this
                            })
                        }
                        )))
                    }
                }
            }
            _setupKeyboardNav() {
                if (C.supports("keyboardevents")) {
                    const e = this.get("control").getPrivate("button");
                    this._disposers.push(C.addEventListener(document, "keydown", (t => {
                        if (this.isAccessible() && document.activeElement && (document.activeElement === e || C.contains(e, document.activeElement)))
                            if (13 == t.keyCode)
                                document.activeElement !== e && document.activeElement.click();
                            else if (-1 !== [37, 38, 39, 40].indexOf(t.keyCode)) {
                                const i = 37 == t.keyCode || 38 == t.keyCode ? -1 : 1
                                  , s = this._getActiveItems()
                                  , a = e.querySelectorAll(".am5stock-control-color:focus, .am5stock-control-opacity:focus");
                                let n = -1;
                                a.length > 0 && s.forEach(( (e, t) => {
                                    e === a.item(0) && (n = t)
                                }
                                )),
                                n += i,
                                n < 0 ? n = s.length - 1 : n >= s.length && (n = 0),
                                C.focus(s.item(n))
                            }
                    }
                    )))
                }
            }
            _maybeMakeAccessible() {
                super._maybeMakeAccessible(),
                this.isAccessible() && this._getActiveItems().forEach(( (e, t) => {
                    e.setAttribute("tabindex", "-1"),
                    e.setAttribute("aria-label", this.root.language.translateAny("Selection") + " #" + (t + 1))
                }
                ))
            }
            _getActiveItems() {
                return this.getPrivate("list").querySelectorAll(".am5stock-control-color, .am5stock-control-opacity")
            }
        }
        let I;
        function N(e, t, i) {
            const a = t.interfaceColors
              , n = a.get("secondaryButton").toCSS()
              , o = a.get("secondaryButtonHover").toCSS()
              , r = a.get("text").toCSS()
              , l = a.get("disabled").toCSS()
              , c = a.get("secondaryButtonActive").toCSS()
              , h = a.get("background").toCSS()
              , d = a.get("primaryButton").toCSS();
            if (!I) {
                const t = new s.FV([new C.StyleRule(e,".am5stock-control-button",{
                    display: "inline-block",
                    position: "relative",
                    border: "1px solid " + c,
                    "border-radius": "4px",
                    padding: "3px 0 3px 5px",
                    margin: "2px",
                    "z-index": "1",
                    cursor: "default",
                    "line-height": "1.5em",
                    color: r
                }), new C.StyleRule(e,".am5stock-control-button div",{
                    "box-sizing": "initial"
                }), new C.StyleRule(e,".am5stock-control-button:hover",{
                    "border-color": o
                }), new C.StyleRule(e,".am5stock-control-button.am5stock-no-hover:hover",{
                    background: "initial"
                }), new C.StyleRule(e,".am5-modal-content .am5stock-control-button",{
                    padding: "5px 6px",
                    "line-height": "0.8em"
                }), new C.StyleRule(e,".am5stock-control-color .am5stock-control-icon",{
                    "border-radius": "3px",
                    "min-height": "1em",
                    "max-width": "50px",
                    "line-height": "0.8em"
                }), new C.StyleRule(e,".am5-modal-content .am5stock-control-color .am5stock-control-icon",{
                    margin: "0",
                    width: "48px",
                    "min-height": "1em",
                    "max-width": "50px",
                    "line-height": "0.8em"
                }), new C.StyleRule(e,".am5-modal-content .am5stock-control-button .am5stock-control-icon > .am5stock-control-icon-color",{
                    width: "1px"
                }), new C.StyleRule(e,'.am5-modal-content input[type="text"], .am5-modal-content input[type="number"], .am5-modal-content select',{
                    border: "1px solid " + c
                }), new C.StyleRule(e,".am5stock-control-button.am5stock-align-right",{
                    float: "right"
                }), new C.StyleRule(e,".am5stock-control-button.am5stock-control-button-active",{
                    background: n,
                    "z-index": "2"
                }), new C.StyleRule(e,".am5stock-control-button.am5stock-control-dropdown.am5stock-control-button-active",{
                    "z-index": "3"
                }), new C.StyleRule(e,".am5-modal-content .am5stock-control-button.am5stock-control-button-active, .am5-modal-content .am5stock-control-button:hover",{
                    background: "none"
                }), new C.StyleRule(e,".am5-modal-content .am5-modal-link-reset",{
                    display: "block",
                    color: d,
                    "text-transform": "uppercase",
                    "font-weight": "500",
                    "margin-top": "0.5em",
                    "font-size": "0.8em",
                    cursor: "pointer"
                }), new C.StyleRule(e,".am5stock-control-icon",{
                    "min-width": "1.2em",
                    "min-height": "1.2em",
                    "max-width": "1.2em",
                    display: "inline-block",
                    position: "relative",
                    margin: "0 5px 0 0"
                }), new C.StyleRule(e,".am5stock-control-icon.am5stock-icon-wide",{
                    "max-width": "60px"
                }), new C.StyleRule(e,".am5stock-control-icon > *",{
                    "vertical-align": "sub"
                }), new C.StyleRule(e,".am5stock-control-icon > .am5stock-control-icon-color",{
                    "max-width": "20px",
                    width: "20px"
                }), new C.StyleRule(e,".am5stock-control-icon > .am5stock-control-icon-color-bg",{
                    width: "100%",
                    height: "100%",
                    display: "block",
                    position: "absolute",
                    left: "0",
                    top: "0",
                    "z-index": "-1",
                    overflow: "hidden",
                    "border-radius": "3px",
                    "background-image": "linear-gradient(45deg, #808080 25%, transparent 25%), linear-gradient(-45deg, #808080 25%, transparent 25%), linear-gradient(45deg, transparent 75%, #808080 75%), linear-gradient(-45deg, transparent 75%, #808080 75%)",
                    "background-size": "10px 10px",
                    "background-position": "0 0, 0 5px, 5px -5px, -5px 0px"
                }), new C.StyleRule(e,".am5stock-control-button path",{
                    "stroke-width": "0.5",
                    stroke: r,
                    fill: "none",
                    "vector-effect": "non-scaling-stroke"
                }), new C.StyleRule(e,".am5stock-control-label",{
                    display: "inline-block",
                    margin: "0 5px 0 0"
                }), new C.StyleRule(e,".am5stock-control-list-container",{
                    position: "absolute",
                    left: "0",
                    top: "100%",
                    "margin-top": "10px",
                    background: h,
                    border: "1px solid " + c,
                    "border-radius": "3px"
                }), new C.StyleRule(e,".am5stock-align-right .am5stock-control-list-container",{
                    left: "auto",
                    right: "0"
                }), new C.StyleRule(e,".am5stock-control-list-arrow",{
                    position: "absolute",
                    left: "5px",
                    top: "-5px",
                    border: "solid " + c,
                    "border-width": "0 1px 1px 0",
                    background: h,
                    display: "inline-block",
                    padding: "5px",
                    transform: "rotate(-135deg)"
                }), new C.StyleRule(e,".am5stock-align-right .am5stock-control-list-arrow",{
                    right: "5px",
                    left: "auto"
                }), new C.StyleRule(e,".am5stock-control-list",{
                    "list-style": "none",
                    margin: "5px",
                    padding: "2px",
                    "white-space": "nowrap"
                }), new C.StyleRule(e,".am5stock-control-list li",{
                    padding: "2px 6px 2px 6px",
                    position: "relative"
                }), new C.StyleRule(e,".am5stock-control-list li:hover",{
                    background: n
                }), new C.StyleRule(e,".am5stock-control-list li.am5stock-list-info",{
                    "font-style": "italic",
                    color: o
                }), new C.StyleRule(e,".am5stock-control-list .am5stock-list-sub",{
                    "font-size": "0.7em",
                    color: o,
                    display: "block"
                }), new C.StyleRule(e,".am5stock-control-list li.am5stock-list-info:hover",{
                    background: "none"
                }), new C.StyleRule(e,".am5stock-control-list li.am5stock-list-heading",{
                    "font-style": "normal",
                    "font-weight": "bold",
                    color: "initial",
                    "margin-top": "0.3em"
                }), new C.StyleRule(e,".am5stock-control-list li.am5stock-disabled:hover, .am5stock-control-list li.am5stock-disabled > *",{
                    background: "none",
                    color: l
                }), new C.StyleRule(e,".am5stock-control-list li svg",{
                    "max-width": "1em",
                    "max-height": "1em",
                    "margin-right": "0.8em",
                    left: "0px",
                    top: "2px",
                    display: "inline-block"
                }), new C.StyleRule(e,".am5stock-control-list li svg.am5stock-icon-wide, .am5stock-control-icon > *.am5stock-icon-wide",{
                    width: "60px",
                    "max-width": "60px",
                    "margin-right": "0"
                }), new C.StyleRule(e,".am5stock-control-list li div, .am5stock-control-list li label",{
                    display: "inline-block",
                    "margin-right": "1em"
                }), new C.StyleRule(e,".am5stock-control-list li input",{
                    "margin-right": "1em"
                }), new C.StyleRule(e,".am5stock-list-search",{
                    margin: "0.5em 0.7em",
                    "padding-bottom": "0.25em",
                    position: "relative"
                }), new C.StyleRule(e,".am5stock-list-search input",{
                    border: "1px solid " + n,
                    padding: "6px 10px 6px 30px",
                    "margin-top": "5px",
                    background: "url(data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiA/PjxzdmcgZmlsbD0ibm9uZSIgaGVpZ2h0PSIyNCIgc3Ryb2tlPSIjMDAwIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIHN0cm9rZS13aWR0aD0iMiIgdmlld0JveD0iMCAwIDI0IDI0IiB3aWR0aD0iMjQiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGNpcmNsZSBjeD0iMTAuNSIgY3k9IjEwLjUiIHI9IjcuNSIvPjxsaW5lIHgxPSIyMSIgeDI9IjE1LjgiIHkxPSIyMSIgeTI9IjE1LjgiLz48L3N2Zz4=) 5px / 20px 20px no-repeat",
                    "background-color": "#fff",
                    color: "#888"
                }), new C.StyleRule(e,".am5stock-list-search input::placeholder",{
                    color: "#888"
                }), new C.StyleRule(e,".am5stock-control-colors, .am5stock-control-icons",{
                    "list-style": "none",
                    margin: "5px",
                    padding: "2px",
                    width: "240px"
                }), new C.StyleRule(e,".am5stock-control-colors li, .am5stock-control-icons li",{
                    display: "inline-block",
                    padding: "0",
                    margin: "0",
                    border: "3px solid " + h,
                    width: "24px",
                    height: "24px",
                    position: "relative"
                }), new C.StyleRule(e,".am5stock-control-colors li:hover, .am5stock-control-colors li.am5stock-control-active, .am5stock-control-icons li:hover, .am5stock-control-icons li.am5stock-control-active",{
                    "border-color": "rgba(200, 200, 200, 1)"
                }), new C.StyleRule(e,".am5stock-control-colors li.am5stock-control-opacity",{
                    width: "42px",
                    "text-align": "center"
                }), new C.StyleRule(e,".am5stock-control-colors li.am5stock-control-opacity",{
                    width: "42px",
                    "text-align": "center",
                    "font-size": "12px",
                    "line-height": "24px"
                }), new C.StyleRule(e,".am5stock-control-opacity-100, .am5stock-control-opacity-75, .am5stock-control-opacity-50",{
                    color: "#fff"
                }), new C.StyleRule(e,".am5stock-row",{
                    display: "flex",
                    "flex-direction": "row"
                }), new C.StyleRule(e,".am5stock-column",{
                    "min-width": "200px",
                    display: "inline-block",
                    padding: "1em"
                }), new C.StyleRule(e,".am5stock-group",{
                    "white-space": "nowrap",
                    "padding-bottom": "0.25em",
                    "border-bottom": "1px solid " + n,
                    position: "relative"
                }), new C.StyleRule(e,".am5stock-group input",{
                    border: "none",
                    padding: "3px 5px",
                    width: "100%",
                    "box-sizing": "border-box"
                }), new C.StyleRule(e,".am5stock-small",{
                    "font-size": "0.7em"
                }), new C.StyleRule(e,".am5stock-link",{
                    display: "inline-block",
                    margin: "0 0.15em",
                    padding: "0 3px",
                    "border-radius": "3px"
                }), new C.StyleRule(e,".am5stock-link.am5stock-active, .am5stock-link:hover",{
                    background: n
                }), new C.StyleRule(e,".am5stock-link.am5stock-hidden",{
                    display: "none"
                }), new C.StyleRule(e,".am5stock-drawing-label-wrapper",{
                    "background-color": h,
                    "bakcground-opacity": "0.5",
                    padding: "0.5em",
                    "border-radius": "4px",
                    "-webkit-box-shadow": "0px 0px 36px 0px rgba(0,0,0,0.45)",
                    "box-shadow": "0px 0px 36px 0px rgba(0,0,0,0.45)"
                }), new C.StyleRule(e,".am5stock-drawing-label-input",{
                    width: "250px",
                    "min-height": "50px"
                })]);
                I = new s.DM(( () => {
                    I = void 0,
                    t.dispose()
                }
                ))
            }
            return I.increment()
        }
        Object.defineProperty(A, "className", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: "DropdownColors"
        }),
        Object.defineProperty(A, "classNames", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: S.classNames.concat([A.className])
        });
        class T extends D {
            _afterNew() {
                super._afterNew();
                const e = this.getPrivate("button");
                e.className = e.className + " am5stock-control-color";
                const t = {
                    control: this,
                    parent: this.getPrivate("button"),
                    useOpacity: this.get("useOpacity")
                };
                this.get("colors") && (t.colors = this.get("colors"));
                const i = A.new(this._root, t);
                this.setPrivate("dropdown", i),
                i.events.on("closed", (e => {
                    this.set("active", !1)
                }
                )),
                i.events.on("invoked", (e => {
                    this.setPrivate("color", e.color),
                    this.events.dispatch("selected", {
                        type: "selected",
                        color: e.color,
                        target: this
                    })
                }
                )),
                i.events.on("invokedOpacity", (e => {
                    this.setPrivate("opacity", e.opacity),
                    this.events.dispatch("selectedOpacity", {
                        type: "selectedOpacity",
                        opacity: e.opacity,
                        target: this
                    })
                }
                )),
                this.on("active", (e => {
                    e ? (i.setPrivate("color", this.getPrivate("color")),
                    i.setPrivate("opacity", this.getPrivate("opacity")),
                    this.setTimeout(( () => i.show()), 10)) : i.hide()
                }
                )),
                this.onPrivate("color", ( () => {
                    const e = this.getPrivate("color");
                    this.getPrivate("icon").style.backgroundColor = e ? e.toCSS(this.getPrivate("opacity", 1)) : ""
                }
                )),
                this.onPrivate("opacity", ( () => {
                    const e = this.getPrivate("color");
                    this.getPrivate("icon").style.backgroundColor = e ? e.toCSS(this.getPrivate("opacity", 1)) : ""
                }
                ));
                const s = document.createElement("div");
                s.className = "am5stock-control-icon-color-bg",
                this.getPrivate("icon").appendChild(s),
                this.loadDefaultCSS()
            }
            setColor(e) {
                this.setPrivate("color", e),
                this.events.dispatch("selected", {
                    type: "selected",
                    color: e,
                    target: this
                })
            }
            setOpacity(e) {
                this.setPrivate("opacity", e),
                this.events.dispatch("selectedOpacity", {
                    type: "selectedOpacity",
                    opacity: e,
                    target: this
                })
            }
            _getDefaultIcon() {
                const e = p.getIcon("Color");
                return C.addClass(e, "am5stock-control-icon-color"),
                e
            }
            loadDefaultCSS() {
                const e = N(C.getShadowRoot(this._root.dom), this._root);
                this._disposers.push(e)
            }
            hide() {
                super.hide()
            }
            _maybeMakeAccessible() {
                if (super._maybeMakeAccessible(),
                this.isAccessible()) {
                    const e = this.getPrivate("button");
                    e.setAttribute("aria-label", e.getAttribute("title") + "; " + this._t("Press ENTER or use arrow keys to navigate")),
                    C.supports("keyboardevents") && this._disposers.push(C.addEventListener(document, "keydown", (t => {
                        document.activeElement == e && (38 != t.keyCode && 40 != t.keyCode || this.get("active") || this._handleClick())
                    }
                    )))
                }
            }
        }
        Object.defineProperty(T, "className", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: "ColorControl"
        }),
        Object.defineProperty(T, "classNames", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: D.classNames.concat([T.className])
        });
        var M = i(256)
          , L = i(5040);
        class O extends x.u {
            constructor() {
                super(...arguments),
                Object.defineProperty(this, "_updatedSettings", {
                    enumerable: !0,
                    configurable: !0,
                    writable: !0,
                    value: {}
                }),
                Object.defineProperty(this, "_settingsTarget", {
                    enumerable: !0,
                    configurable: !0,
                    writable: !0,
                    value: void 0
                }),
                Object.defineProperty(this, "_colorControl", {
                    enumerable: !0,
                    configurable: !0,
                    writable: !0,
                    value: void 0
                })
            }
            _afterNew() {
                super._afterNew()
            }
            _beforeChanged() {
                super._beforeChanged()
            }
            openIndicator(e) {
                this._settingsTarget = e,
                this.initContent(e._editableSettings, e)
            }
            openSeries(e) {
                this._settingsTarget = e;
                const t = this._root.language
                  , i = this.get("stockChart")
                  , s = e instanceof w.e;
                let a = [];
                if (e != i.get("stockSeries") || s)
                    if (e != i.get("volumeSeries") || s)
                        if (e instanceof _.$ && e.columns.length) {
                            const i = e.columns.getIndex(0);
                            a.push({
                                id: "riseFromOpen.fill",
                                key: "fill",
                                additionalKeys: ["stroke"],
                                name: t.translateAny("Increase"),
                                type: "color",
                                currentValue: i.states.lookup("riseFromOpen").get("fill"),
                                target: e.columns.template.states.create("riseFromOpen", {}),
                                invalidateTarget: e
                            }),
                            a.push({
                                id: "dropFromOpen.fill",
                                key: "fill",
                                additionalKeys: ["stroke"],
                                name: t.translateAny("Decrease"),
                                type: "color",
                                currentValue: i.states.lookup("dropFromOpen").get("fill"),
                                target: e.columns.template.states.create("dropFromOpen", {}),
                                invalidateTarget: e
                            })
                        } else
                            s ? (a = [{
                                key: "stroke",
                                name: t.translateAny("Line"),
                                type: "color",
                                additionalKeys: ["fill"],
                                target: e
                            }, {
                                key: "strokeWidth",
                                name: t.translateAny("Line"),
                                type: "dropdown",
                                options: [{
                                    value: 1,
                                    text: "1px"
                                }, {
                                    value: 2,
                                    text: "2px"
                                }, {
                                    value: 4,
                                    text: "4px"
                                }, {
                                    value: 10,
                                    text: "10px"
                                }],
                                currentValue: e.strokes.template.get("strokeWidth", 1),
                                target: e.strokes.template,
                                invalidateTarget: e
                            }],
                            e.fills.template.get("visible") && a.push({
                                key: "fill",
                                name: t.translateAny("Fill"),
                                type: "color"
                            })) : a = [{
                                key: "stroke",
                                name: t.translateAny("Line"),
                                type: "color"
                            }, {
                                key: "fill",
                                name: t.translateAny("Fill"),
                                type: "color"
                            }];
                    else
                        a.push({
                            id: "volumePositiveColor",
                            key: "volumePositiveColor",
                            name: t.translateAny("Increase"),
                            type: "color",
                            currentValue: i.get("volumePositiveColor", this._root.interfaceColors.get("positive")),
                            target: i
                        }),
                        a.push({
                            id: "volumeNegativeColor",
                            key: "volumeNegativeColor",
                            name: t.translateAny("Decrease"),
                            type: "color",
                            currentValue: i.get("volumeNegativeColor", this._root.interfaceColors.get("negative")),
                            target: i
                        });
                else
                    a.push({
                        id: "stockPositiveColor",
                        key: "stockPositiveColor",
                        name: t.translateAny("Increase"),
                        type: "color",
                        currentValue: i.get("stockPositiveColor", this._root.interfaceColors.get("positive")),
                        target: i
                    }),
                    a.push({
                        id: "stockNegativeColor",
                        key: "stockNegativeColor",
                        name: t.translateAny("Decrease"),
                        type: "color",
                        currentValue: i.get("stockNegativeColor", this._root.interfaceColors.get("negative")),
                        target: i
                    });
                this.initContent(a, e)
            }
            initContent(e, t) {
                this._updatedSettings = {};
                const i = this.getPrivate("content");
                this.clear();
                const s = document.createElement("h1");
                s.innerHTML = t.get("name"),
                i.appendChild(s);
                const a = document.createElement("div");
                a.className = "am5-modal-table",
                i.appendChild(a);
                let n = !1
                  , o = {};
                t.get("userData") || t.set("userData", {}),
                t.get("userData").__defaults ? o = t.get("userData").__defaults : (t.get("userData").__defaults = o,
                n = !0);
                const r = {}
                  , l = {}
                  , c = {};
                let h, d = "";
                if (P.each(e, (e => {
                    const i = this._getSettingKey(e)
                      , s = e.target || t
                      , u = e.currentValue || s.get(e.key);
                    let g;
                    switch (n && (o[i] = u),
                    e.target && (c[i] = e),
                    e.type) {
                    case "dropdown":
                        g = this.getDropdown(e, u),
                        r[i] = g,
                        this._disposers.push(C.addEventListener(g, "change", (e => {
                            const t = e.target
                              , i = t.options[t.selectedIndex]
                              , s = i.getAttribute("data-target");
                            s && (r[s].value = i.getAttribute("data-target-value") + "",
                            r[s].setAttribute("data-min-value", i.getAttribute("data-target-min-value") + ""))
                        }
                        )));
                        break;
                    case "number":
                        g = this.getNumber(e, u),
                        r[i] = g,
                        void 0 !== e.minValue && (g.setAttribute("data-min-value", e.minValue + ""),
                        this._disposers.push(C.addEventListener(g, "change", (e => {
                            const t = e.target
                              , i = Number(t.getAttribute("data-min-value"));
                            Number(t.value) < i && (t.value = i + "")
                        }
                        ))));
                        break;
                    case "color":
                        const t = this.getColor(e, u);
                        g = t.getPrivate("button"),
                        l[i] = t;
                        break;
                    case "checkbox":
                        g = this.getCheckbox(e, u),
                        r[i] = g
                    }
                    if (g) {
                        let t;
                        if (e.name == d && h)
                            t = h;
                        else {
                            t = document.createElement("div"),
                            t.className = "am5-modal-table-row",
                            a.appendChild(t);
                            const i = document.createElement("div");
                            i.className = "am5-modal-table-heading",
                            i.innerHTML = e.name,
                            t.appendChild(i)
                        }
                        const i = document.createElement("div");
                        i.className = "am5-modal-table-cell",
                        t.appendChild(i),
                        i.appendChild(g),
                        d = e.name,
                        h = t
                    }
                }
                )),
                this.get("showResetLink", !0)) {
                    const e = document.createElement("a");
                    e.className = "am5-modal-link am5-modal-table-cell am5-modal-link-reset",
                    e.innerHTML = this._root.language.translateAny("Reset to default"),
                    a.appendChild(e),
                    this._disposers.push(C.addEventListener(e, "click", ( () => {
                        const e = t.get("userData").__defaults;
                        M.each(r, ( (t, i) => {
                            "checkbox" === i.type ? i.checked = e[t] : i.value = e[t]
                        }
                        )),
                        M.each(l, ( (t, i) => {
                            i.setColor(e[t])
                        }
                        ))
                    }
                    )))
                }
                const u = document.createElement("input");
                u.type = "button",
                u.value = this._root.language.translateAny("Save"),
                u.className = "am5-modal-button am5-modal-primary",
                i.appendChild(u),
                this._disposers.push(C.addEventListener(u, "click", ( () => {
                    M.each(r, ( (e, t) => {
                        "checkbox" == t.type ? this._updatedSettings[e] = t.checked : "number" == t.type ? this._updatedSettings[e] = L.toNumber(t.value) : this._updatedSettings[e] = t.value
                    }
                    )),
                    M.each(this._updatedSettings, ( (e, i) => {
                        const s = e.split(".").pop();
                        L.isObject(i) && i.value ? i.setting && i.setting.target ? (i.setting.target.set(s, i.value),
                        i.setting.additionalKeys && P.each(i.setting.additionalKeys, (e => {
                            i.setting.target.set(e, i.value)
                        }
                        ))) : t.set(s, i.value) : c[s] ? c[s].target.set(s, i) : t.set(s, i),
                        i.setting && i.setting.invalidateTarget && i.setting.invalidateTarget.markDirtyValues()
                    }
                    )),
                    this.close()
                }
                )));
                const g = document.createElement("input");
                g.type = "button",
                g.value = this._root.language.translateAny("Cancel"),
                g.className = "am5-modal-button am5-modal-scondary",
                i.appendChild(g),
                this._disposers.push(C.addEventListener(g, "click", ( () => {
                    this.cancel()
                }
                ))),
                this.open(),
                this.setTimeout(( () => {
                    u.focus()
                }
                ), 10)
            }
            getDropdown(e, t) {
                const i = document.createElement("select");
                return P.each(e.options, (e => {
                    if (e) {
                        const s = document.createElement("option");
                        let a;
                        L.isObject(e) ? (s.value = e.value,
                        s.text = e.text,
                        a = e.value,
                        e.minValue && s.setAttribute("data-min-value", e.minValue),
                        e.extTarget && s.setAttribute("data-target", e.extTarget),
                        e.extTargetValue && s.setAttribute("data-target-value", e.extTargetValue),
                        e.extTargetMinValue && s.setAttribute("data-target-min-value", e.extTargetMinValue)) : (s.value = e,
                        s.text = e,
                        a = e),
                        a == t && (s.selected = !0),
                        i.appendChild(s)
                    }
                }
                )),
                i
            }
            getNumber(e, t) {
                const i = document.createElement("input");
                return i.type = "number",
                i.value = t,
                i.className = "am5-modal-input-narrow",
                i
            }
            getCheckbox(e, t) {
                const i = document.createElement("input");
                return i.type = "checkbox",
                i.checked = !0 === t,
                i
            }
            getColor(e, t) {
                const i = T.new(this.root, {
                    stockChart: this.get("stockChart"),
                    useOpacity: !1
                });
                return i.setPrivate("color", t),
                i.events.on("selected", (t => {
                    this._updatedSettings[this._getSettingKey(e)] = {
                        value: t.color,
                        setting: e
                    }
                }
                )),
                this._disposers.push(i),
                i
            }
            close() {
                super.close(),
                this.events.dispatch("done", {
                    type: "done",
                    settings: this._updatedSettings,
                    settingsTarget: this._settingsTarget,
                    target: this
                })
            }
            cancel() {
                super.cancel(),
                this.events.dispatch("done", {
                    type: "done",
                    settings: null,
                    target: this
                })
            }
            clear() {
                this.getPrivate("content").innerHTML = "",
                this._colorControl && this._colorControl.dispose()
            }
            _getSettingKey(e) {
                return e.id || e.key
            }
        }
        Object.defineProperty(O, "className", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: "SettingsModal"
        }),
        Object.defineProperty(O, "classNames", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: x.u.classNames.concat([x.u.className])
        });
        var E = i(3145)
          , j = i(3360);
        class Y extends n.W {
            constructor() {
                super(...arguments),
                Object.defineProperty(this, "_xAxes", {
                    enumerable: !0,
                    configurable: !0,
                    writable: !0,
                    value: []
                }),
                Object.defineProperty(this, "_downY", {
                    enumerable: !0,
                    configurable: !0,
                    writable: !0,
                    value: void 0
                }),
                Object.defineProperty(this, "_upperPanel", {
                    enumerable: !0,
                    configurable: !0,
                    writable: !0,
                    value: void 0
                }),
                Object.defineProperty(this, "_dhp", {
                    enumerable: !0,
                    configurable: !0,
                    writable: !0,
                    value: void 0
                }),
                Object.defineProperty(this, "_uhp", {
                    enumerable: !0,
                    configurable: !0,
                    writable: !0,
                    value: void 0
                }),
                Object.defineProperty(this, "_downResizer", {
                    enumerable: !0,
                    configurable: !0,
                    writable: !0,
                    value: void 0
                }),
                Object.defineProperty(this, "_syncExtremesDp", {
                    enumerable: !0,
                    configurable: !0,
                    writable: !0,
                    value: void 0
                }),
                Object.defineProperty(this, "_drawingsChanged", {
                    enumerable: !0,
                    configurable: !0,
                    writable: !0,
                    value: !1
                }),
                Object.defineProperty(this, "_indicatorsChanged", {
                    enumerable: !0,
                    configurable: !0,
                    writable: !0,
                    value: !1
                }),
                Object.defineProperty(this, "_baseDP", {
                    enumerable: !0,
                    configurable: !0,
                    writable: !0,
                    value: void 0
                }),
                Object.defineProperty(this, "_selectionWasOn", {
                    enumerable: !0,
                    configurable: !0,
                    writable: !0,
                    value: !1
                }),
                Object.defineProperty(this, "panels", {
                    enumerable: !0,
                    configurable: !0,
                    writable: !0,
                    value: new v.dn
                }),
                Object.defineProperty(this, "indicators", {
                    enumerable: !0,
                    configurable: !0,
                    writable: !0,
                    value: new v.dn
                }),
                Object.defineProperty(this, "toolsContainer", {
                    enumerable: !0,
                    configurable: !0,
                    writable: !0,
                    value: this.children.push(n.W.new(this._root, {
                        width: h.AQ,
                        themeTags: []
                    }))
                }),
                Object.defineProperty(this, "panelsContainer", {
                    enumerable: !0,
                    configurable: !0,
                    writable: !0,
                    value: this.children.push(n.W.new(this._root, {
                        width: h.AQ,
                        height: h.AQ,
                        layout: this._root.verticalLayout,
                        themeTags: ["chartscontainer"]
                    }))
                }),
                Object.defineProperty(this, "controls", {
                    enumerable: !0,
                    configurable: !0,
                    writable: !0,
                    value: []
                }),
                Object.defineProperty(this, "spriteResizer", {
                    enumerable: !0,
                    configurable: !0,
                    writable: !0,
                    value: this.children.push(a.b.new(this._root, {}))
                })
            }
            _afterNew() {
                this._settings.themeTags = C.mergeTags(this._settings.themeTags, ["stock"]),
                this._defaultThemes.push(f.new(this._root)),
                this._defaultThemes.push(b.l.new(this._root));
                const e = this._root.tooltipContainer;
                e.set("themeTags", C.mergeTags(e.get("themeTags", []), ["stock"])),
                super._afterNew(),
                C.supports("keyboardevents") && this._disposers.push(C.addEventListener(document, "keyup", (e => {
                    46 == e.keyCode && this.deleteSelectedDrawings(),
                    27 == e.keyCode && (this.unselectDrawings(),
                    this.cancelDrawing(),
                    this.spriteResizer.set("sprite", void 0))
                }
                )));
                const t = this.panelsContainer.children;
                this._disposers.push(this.panels.events.onAll((e => {
                    if ("clear" === e.type)
                        P.each(e.oldValues, (e => {
                            this._removePanel(e)
                        }
                        ));
                    else if ("push" === e.type)
                        t.moveValue(e.newValue),
                        this._processPanel(e.newValue);
                    else if ("setIndex" === e.type)
                        t.setIndex(e.index, e.newValue),
                        this._processPanel(e.newValue);
                    else if ("insertIndex" === e.type)
                        t.insertIndex(e.index, e.newValue),
                        this._processPanel(e.newValue);
                    else {
                        if ("removeIndex" !== e.type)
                            throw new Error("Unknown IListEvent type");
                        this._removePanel(e.oldValue)
                    }
                }
                ))),
                this._disposers.push(this.indicators.events.onAll((e => {
                    if ("clear" === e.type)
                        P.each(e.oldValues, (e => {
                            this._removeIndicator(e)
                        }
                        ));
                    else if ("push" === e.type)
                        this._processIndicator(e.newValue);
                    else if ("setIndex" === e.type)
                        this._processIndicator(e.newValue);
                    else if ("insertIndex" === e.type)
                        this._processIndicator(e.newValue);
                    else {
                        if ("removeIndex" !== e.type)
                            throw new Error("Unknown IListEvent type");
                        this._removeIndicator(e.oldValue)
                    }
                }
                ))),
                this.setPrivateRaw("settingsModal", O.new(this.root, {
                    stockChart: this
                }));
                let i = !1;
                for (let e = 0; e < E.i_.licenses.length; e++)
                    E.i_.licenses[e].match(/^AM5S.{5,}/i) && (i = !0);
                i ? this._root._licenseApplied() : this._root._showBranding()
            }
            dispose() {
                super.dispose();
                const e = this.getPrivate("settingsModal");
                e && e.dispose()
            }
            markDirtyDrawings() {
                this._drawingsChanged = !0,
                this.markDirty()
            }
            markDirtyIndicators() {
                this._indicatorsChanged = !0,
                this.markDirty()
            }
            _prepareChildren() {
                if (this.isDirty("drawingSelectionEnabled")) {
                    const e = this.get("drawingSelectionEnabled", !1);
                    e ? this.set("erasingEnabled", !1) : this.unselectDrawings(),
                    this.panels.each((t => {
                        t.series.each((t => {
                            t.isType("DrawingSeries") && t.enableDrawingSelection(e)
                        }
                        ))
                    }
                    ))
                }
                if (this.isDirty("erasingEnabled")) {
                    const e = this.get("erasingEnabled", !1);
                    e && this.set("drawingSelectionEnabled", !1),
                    this.panels.each((t => {
                        t.series.each((t => {
                            t.isType("DrawingSeries") && (e ? t.enableErasing() : t.disableErasing())
                        }
                        ))
                    }
                    ))
                }
                if (this.isDirty("volumeNegativeColor") || this.isDirty("volumePositiveColor")) {
                    const e = this.get("volumeSeries");
                    e && e.isType("BaseColumnSeries") && e.columns.each((e => {
                        e._markDirtyKey("fill")
                    }
                    ))
                }
                const e = this.get("stockSeries");
                if (this.isDirty("stockSeries") && e) {
                    const t = this._prevSettings.stockSeries;
                    this.indicators.each((i => {
                        t == i.get("stockSeries") ? i.set("stockSeries", e) : i._setSoft("stockSeries", e)
                    }
                    ));
                    const i = e.chart;
                    if (i) {
                        i.series.each((i => {
                            i.isType("DrawingSeries") && (i.get("series") == t ? i.set("series", e) : i._setSoft("series", e))
                        }
                        ));
                        const a = i.xAxes.getIndex(0);
                        a && (this._syncExtremesDp && this._syncExtremesDp.dispose(),
                        this.setPrivateRaw("mainAxis", a),
                        this._baseDP && this._baseDP.dispose(),
                        this._baseDP = a.on("baseInterval", (e => {
                            this.indicators.each((t => {
                                t.isType("ChartIndicator") && t.xAxis.set("baseInterval", e)
                            }
                            ))
                        }
                        )),
                        this._syncExtremesDp = new s.FV([a.onPrivate("max", ( () => {
                            this._syncExtremes()
                        }
                        )), a.onPrivate("min", ( () => {
                            this._syncExtremes()
                        }
                        ))]))
                    }
                    this.getPrivate("comparing") && this.setPercentScale(!0)
                }
                super._prepareChildren()
            }
            _afterChanged() {
                if (super._afterChanged(),
                this._drawingsChanged) {
                    this._drawingsChanged = !1;
                    const e = "drawingsupdated";
                    this.events.isEnabled(e) && this.events.dispatch(e, {
                        type: e,
                        target: this
                    })
                }
                if (this._indicatorsChanged) {
                    this._indicatorsChanged = !1;
                    const e = "indicatorsupdated";
                    this.events.isEnabled(e) && this.events.dispatch(e, {
                        type: e,
                        target: this
                    })
                }
            }
            _updateChildren() {
                super._updateChildren();
                const e = this.get("stockSeries");
                if (this.isDirty("volumeSeries")) {
                    const e = this.get("volumeSeries");
                    if (e) {
                        const t = e.chart;
                        t && t.series.events.on("removeIndex", (t => {
                            t.oldValue == e && this.set("volumeSeries", void 0)
                        }
                        ))
                    }
                }
                if ((this.isDirty("stockNegativeColor") || this.isDirty("stockPositiveColor") || this.isDirty("stockSeries")) && e && e.isType("BaseColumnSeries")) {
                    const t = this._root.interfaceColors
                      , i = this.get("stockNegativeColor", t.get("negative"))
                      , s = this.get("stockPositiveColor", t.get("positive"));
                    let a = e.dataItems[0];
                    if (s && s) {
                        P.each(e.dataItems, (t => {
                            const n = t.get("graphics");
                            if (n) {
                                const o = n.states.lookup("dropFromOpen");
                                o && o.setAll({
                                    fill: i,
                                    stroke: i
                                });
                                const r = n.states.lookup("riseFromOpen");
                                r && r.setAll({
                                    fill: s,
                                    stroke: s
                                });
                                const l = n.states.lookup("dropFromPrevious");
                                l && l.setAll({
                                    fill: i,
                                    stroke: i
                                });
                                const c = n.states.lookup("riseFromPrevious");
                                c && c.setAll({
                                    fill: s,
                                    stroke: s
                                }),
                                e._applyGraphicsStates(t, a),
                                a = t
                            }
                        }
                        ));
                        const t = e.columns.template.states
                          , n = t.lookup("riseFromOpen")
                          , o = e.columns.template.get("themeTags");
                        if (s) {
                            n ? n.setAll({
                                fill: s,
                                stroke: s
                            }) : t.create("riseFromOpen", {
                                fill: s,
                                stroke: s
                            });
                            const e = t.lookup("riseFromPrevious");
                            e ? e.setAll({
                                fill: s,
                                stroke: s
                            }) : o && -1 != o.indexOf("pro") && t.create("riseFromPrevious", {
                                fill: s,
                                stroke: s
                            })
                        }
                        if (i) {
                            const e = t.lookup("dropFromOpen");
                            e ? e.setAll({
                                fill: i,
                                stroke: i
                            }) : t.create("dropFromOpen", {
                                fill: i,
                                stroke: i
                            });
                            const s = t.lookup("dropFromPrevious");
                            s ? s.setAll({
                                fill: i,
                                stroke: i
                            }) : o && -1 != o.indexOf("pro") && t.create("dropFromPrevious", {
                                fill: i,
                                stroke: i
                            })
                        }
                    }
                    e.markDirtyValues()
                }
            }
            setPercentScale(e) {
                const t = this.get("stockSeries")
                  , i = this.get("percentScaleSeriesSettings")
                  , s = this.get("percentScaleValueAxisSettings");
                if (t) {
                    const a = t.chart
                      , n = t.get("yAxis");
                    if (n.set("logarithmic", !1),
                    this._maybePrepAxisDefaults(),
                    a) {
                        const t = [];
                        a.series.each((e => {
                            e.get("yAxis") == n && (t.push(e),
                            this._maybePrepSeriesDefaults(e))
                        }
                        )),
                        null == e && (e = this.getPrivate("comparedSeries", []).length > 0),
                        this.setPrivate("comparing", e),
                        i && P.each(t, (t => {
                            if (e)
                                t.setAll(i),
                                t.states.lookup("default").setAll(i);
                            else {
                                t.states.apply("comparingDefaults");
                                const e = t.states.lookup("comparingDefaults");
                                e && t.states.lookup("default").setAll(e._settings)
                            }
                        }
                        )),
                        s && (e ? n.setAll(s) : n.states.apply("comparingDefaults"))
                    }
                }
                this.indicators.each((e => {
                    e.markDataDirty()
                }
                ))
            }
            addComparingSeries(e) {
                const t = this.get("stockSeries");
                if (t) {
                    const i = t.chart;
                    i && i.series.push(e);
                    const s = this.get("comparingSeriesSettings");
                    s && e.setAll(s);
                    const a = this.getPrivate("comparedSeries");
                    a ? a.push(e) : this.setPrivate("comparedSeries", [e]);
                    const n = t.get("legendDataItem");
                    if (n) {
                        const t = n.component;
                        if (t.isType("StockLegend")) {
                            t.data.push(e);
                            const i = e.get("legendDataItem");
                            if (i) {
                                const t = i.get("closeButton");
                                t.set("forceHidden", !1),
                                t.events.on("click", ( () => {
                                    this.removeComparingSeries(e)
                                }
                                ))
                            }
                        }
                    }
                    this.get("autoSetPercentScale") && this.setPercentScale(!0)
                }
                return e
            }
            removeComparingSeries(e) {
                const t = this.get("stockSeries");
                if (t) {
                    const i = t.chart;
                    i && i.series.removeValue(e);
                    const s = this.getPrivate("comparedSeries");
                    s && (P.remove(s, e),
                    0 == s.length && this.get("autoSetPercentScale") && this.setPercentScale(!1))
                }
                const i = e.get("legendDataItem");
                i && i.component.data.removeValue(e)
            }
            _maybePrepSeriesDefaults(e) {
                if (!e.states.lookup("comparingDefaults")) {
                    const t = this.get("percentScaleSeriesSettings")
                      , i = {};
                    M.each(t, ( (t, s) => {
                        i[t] = e.get(t)
                    }
                    )),
                    e.states.create("comparingDefaults", i)
                }
            }
            getSeriesDefault(e, t) {
                const i = e.states.lookup("comparingDefaults");
                return i ? i.get(t) : e.get(t)
            }
            _maybePrepAxisDefaults() {
                const e = this.get("stockSeries").get("yAxis");
                if (!e.states.lookup("comparingDefaults")) {
                    const t = this.get("percentScaleValueAxisSettings")
                      , i = {};
                    M.each(t, ( (t, s) => {
                        i[t] = e.get(t)
                    }
                    )),
                    e.states.create("comparingDefaults", i)
                }
            }
            _processIndicator(e) {
                this.children.push(e);
                const t = this.get("stockSeries");
                t && e._setSoft("stockSeries", t);
                const i = this.get("volumeSeries");
                i && e._setSoft("volumeSeries", i),
                this.getPrivate("comparing") && this.setPercentScale(!0),
                P.each(e._editableSettings, (t => {
                    e.on(t.key, ( () => {
                        this.markDirtyIndicators()
                    }
                    ))
                }
                )),
                this.markDirtyIndicators(),
                e.prepareData(),
                this._syncExtremes()
            }
            _removeIndicator(e) {
                this.children.removeValue(e),
                this.markDirtyIndicators()
            }
            _removePanel(e) {
                this.panelsContainer.children.removeValue(e)
            }
            _updateControls() {
                const e = this.get("stockSeries");
                this.panels.each((t => {
                    const i = t.panelControls
                      , s = this.panelsContainer.children.indexOf(t)
                      , a = this.panels.length
                      , n = "visible";
                    i.upButton.setPrivate(n, !1),
                    i.downButton.setPrivate(n, !1),
                    i.expandButton.setPrivate(n, !1),
                    i.closeButton.setPrivate(n, !1),
                    a > 1 && (i.expandButton.setPrivate(n, !0),
                    0 != s && i.upButton.setPrivate(n, !0),
                    s != a - 1 && i.downButton.setPrivate(n, !0),
                    e && e.chart == t || i.closeButton.setPrivate(n, !0)),
                    e && this.indicators.each((t => {
                        t.set("stockSeries", e)
                    }
                    ))
                }
                )),
                this._updateResizers()
            }
            _processPanel(e) {
                e.setPrivate("otherCharts", this.panels.values),
                e.setPrivate("stockChart", this),
                e.panelControls = e.topPlotContainer.children.push(l.new(this._root, {
                    stockPanel: e,
                    stockChart: this
                })),
                this._updateControls();
                const t = e.children.push(y.A.new(this._root, {
                    themeTags: ["panelresizer"]
                }));
                e.panelResizer = t,
                t.events.on("pointerdown", (t => {
                    const i = this.panelsContainer;
                    this._downResizer = t.target,
                    this.panels.each((e => {
                        e.set("height", (0,
                        h.aQ)(e.height() / i.height() * 100))
                    }
                    )),
                    this._downY = i.toLocal(t.point).y;
                    const s = i.children.getIndex(i.children.indexOf(e) - 1);
                    this._upperPanel = s,
                    s && (this._uhp = s.get("height")),
                    this._dhp = e.get("height")
                }
                )),
                t.events.on("pointerup", ( () => {
                    this._downResizer = void 0
                }
                )),
                t.events.on("globalpointermove", (t => {
                    if (t.target == this._downResizer) {
                        const i = this.panelsContainer
                          , s = i.height()
                          , a = this._upperPanel;
                        if (a) {
                            const n = i.children.indexOf(a) + 2;
                            let o = s - e.get("minHeight", 0);
                            const r = i.children.getIndex(n);
                            r && (o = r.y() - e.get("minHeight", 0));
                            const l = Math.max(a.y() + a.get("minHeight", 0) + a.get("paddingTop", 0), Math.min(i.toLocal(t.point).y, o))
                              , c = this._downY
                              , d = this._dhp
                              , u = this._uhp;
                            if (null != c && null != d && null != u) {
                                const t = (c - l) / s;
                                e.set("height", (0,
                                h.aQ)(100 * (d.value + t))),
                                a.set("height", (0,
                                h.aQ)(100 * (u.value - t)))
                            }
                        }
                    }
                }
                )),
                e.xAxes.events.onAll((e => {
                    if ("clear" === e.type)
                        P.each(e.oldValues, (e => {
                            this._removeXAxis(e)
                        }
                        ));
                    else if ("push" === e.type)
                        this._processXAxis(e.newValue);
                    else if ("setIndex" === e.type)
                        this._processXAxis(e.newValue);
                    else if ("insertIndex" === e.type)
                        this._processXAxis(e.newValue);
                    else {
                        if ("removeIndex" !== e.type)
                            throw new Error("Unknown IListEvent type");
                        this._removeXAxis(e.oldValue)
                    }
                }
                )),
                e.leftAxesContainer.events.on("boundschanged", ( () => {
                    this._syncYAxesSize()
                }
                )),
                e.rightAxesContainer.events.on("boundschanged", ( () => {
                    this._syncYAxesSize()
                }
                )),
                this._updateResizers()
            }
            _updateResizers() {
                this.panels.each((e => {
                    var t;
                    let i = !1;
                    0 == this.panelsContainer.children.indexOf(e) && (i = !0),
                    null === (t = e.panelResizer) || void 0 === t || t.set("forceHidden", i)
                }
                ))
            }
            _syncYAxesSize() {
                let e = 0
                  , t = 0;
                this.panels.each((i => {
                    let s = i.leftAxesContainer.width()
                      , a = i.rightAxesContainer.width();
                    s > e && (e = s),
                    a > t && (t = a)
                }
                )),
                this.panels.each((i => {
                    i.leftAxesContainer.set("minWidth", e),
                    i.rightAxesContainer.set("minWidth", t)
                }
                )),
                this.toolsContainer.set("paddingLeft", e),
                this.toolsContainer.set("paddingRight", t)
            }
            _removeXAxis(e) {}
            _processXAxis(e) {
                P.move(this._xAxes, e),
                e.on("start", ( () => {
                    1 != e._skipSync && this._syncXAxes(e)
                }
                )),
                e.on("end", ( () => {
                    1 != e._skipSync && this._syncXAxes(e)
                }
                )),
                this._xAxes[0] && this._root.events.once("frameended", ( () => {
                    this._syncXAxes(this._xAxes[0])
                }
                ))
            }
            _syncExtremes() {
                const e = this.getPrivate("mainAxis");
                if (e) {
                    const t = e.getPrivate("min")
                      , i = e.getPrivate("max");
                    this.panels.each((s => {
                        s.xAxes.each((s => {
                            if (s != e && s.isType("DateAxis")) {
                                let a = s.getPrivate("min")
                                  , n = s.getPrivate("max");
                                a != t && s.set("min", t),
                                n != i && s.set("max", i);
                                const o = "GaplessDateAxis";
                                s.isType(o) && e.isType(o) && (s._customDates = e._dates)
                            }
                        }
                        ))
                    }
                    ))
                }
            }
            _syncXAxes(e) {
                P.each(this._xAxes, (t => {
                    t != e && t.isType("DateAxis") && (t._skipSync = !0,
                    t.set("start", e.get("start")),
                    t.set("end", e.get("end")),
                    t._skipSync = !1)
                }
                ))
            }
            getVolumeColor(e, t, i) {
                if (e) {
                    const s = this.get("stockSeries")
                      , a = e.component;
                    if (t || (t = this.get("volumeNegativeColor", this.root.interfaceColors.get("negative", u.Il.fromHex(16711680)))),
                    i || (i = this.get("volumePositiveColor", this.root.interfaceColors.get("positive", u.Il.fromHex(65280)))),
                    t && i && s && a) {
                        const n = a.dataItems.indexOf(e);
                        if (n > 0) {
                            let e = s.dataItems[n];
                            if (e) {
                                let a = e.get("valueY");
                                if (null != a)
                                    for (let e = n - 1; e >= 0; e--) {
                                        let n = s.dataItems[e].get("valueY");
                                        if (null != n)
                                            return a < n ? t : i
                                    }
                            }
                        }
                    }
                }
                return i
            }
            getControl(e) {
                let t;
                return P.eachContinue(this.controls, (i => i.className != e || (t = i,
                !1))),
                t
            }
            _dragStartDrawing(e) {
                this.panels.each((t => {
                    t.series.each((t => {
                        t.isType("DrawingSeries") && t._dragStart(e)
                    }
                    ))
                }
                ))
            }
            _dragStopDrawing(e) {
                this.panels.each((t => {
                    t.series.each((t => {
                        t.isType("DrawingSeries") && t._dragStop(e)
                    }
                    ))
                }
                ))
            }
            drawingsInteractive(e, t) {
                this.panels.each((i => {
                    i.series.each((i => {
                        i != t && i.isType("DrawingSeries") && i.setInteractive(e)
                    }
                    ))
                }
                ))
            }
            unselectDrawings() {
                this.panels.each((e => {
                    e.series.each((e => {
                        e.isType("DrawingSeries") && e.unselectDrawings()
                    }
                    ))
                }
                )),
                this.spriteResizer.set("sprite", void 0)
            }
            cancelDrawing() {
                this.panels.each((e => {
                    e.series.each((e => {
                        e.isType("DrawingSeries") && e.cancelDrawing()
                    }
                    ))
                }
                ))
            }
            deleteSelectedDrawings() {
                this.panels.each((e => {
                    e.series.each((e => {
                        e.isType("DrawingSeries") && e.deleteSelected()
                    }
                    ))
                }
                ))
            }
            selectDrawing(e, t) {
                this.panels.each((i => {
                    i.series.each((i => {
                        i.isType("DrawingSeries") && i.selectDrawing(e, t)
                    }
                    ))
                }
                ))
            }
            unselectDrawing(e) {
                this.panels.each((t => {
                    t.series.each((t => {
                        t.isType("DrawingSeries") && t.unselectDrawing(e)
                    }
                    ))
                }
                ))
            }
            deleteDrawing(e) {
                this.panels.each((t => {
                    t.series.each((t => {
                        t.isType("DrawingSeries") && t.deleteDrawing(e)
                    }
                    ))
                }
                ))
            }
        }
        function F(e, t) {
            t.className = e,
            (0,
            j.m)(e, t)
        }
        Object.defineProperty(Y, "className", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: "StockChart"
        }),
        Object.defineProperty(Y, "classNames", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: n.W.classNames.concat([Y.className])
        });
        var V = i(3105)
          , R = i(5769)
          , X = i(7582)
          , B = i(757);
        class H extends n.W {
            constructor() {
                super(...arguments),
                Object.defineProperty(this, "_editableSettings", {
                    enumerable: !0,
                    configurable: !0,
                    writable: !0,
                    value: []
                }),
                Object.defineProperty(this, "series", {
                    enumerable: !0,
                    configurable: !0,
                    writable: !0,
                    value: void 0
                }),
                Object.defineProperty(this, "_dataDirty", {
                    enumerable: !0,
                    configurable: !0,
                    writable: !0,
                    value: !1
                }),
                Object.defineProperty(this, "_sDP", {
                    enumerable: !0,
                    configurable: !0,
                    writable: !0,
                    value: void 0
                }),
                Object.defineProperty(this, "_vDP", {
                    enumerable: !0,
                    configurable: !0,
                    writable: !0,
                    value: void 0
                })
            }
            _prepareChildren() {
                if (super._prepareChildren(),
                this.isDirty("stockSeries") || this.isDirty("volumeSeries")) {
                    this.markDataDirty();
                    const e = this.get("stockSeries");
                    this._prevSettings.stockSeries && this._sDP && this._sDP.dispose(),
                    e && (this._sDP = new s.FV([e.events.on("datavalidated", ( () => {
                        this._markDataDirty()
                    }
                    )), e.events.on("datasetchanged", ( () => {
                        this._markDataDirty()
                    }
                    ))])),
                    this._prevSettings.volumeSeries && this._vDP && this._vDP.dispose();
                    const t = this.get("volumeSeries");
                    t && (this._vDP = new s.FV([t.events.on("datavalidated", ( () => {
                        this._markDataDirty()
                    }
                    )), t.events.on("datasetchanged", ( () => {
                        this._markDataDirty()
                    }
                    ))]))
                }
                this.isDirty("field") && this.get("field") && this.markDataDirty(),
                this.isDirty("period") && (this.markDataDirty(),
                this.setCustomData("period", this.get("period"))),
                this._dataDirty && (this.prepareData(),
                this._dataDirty = !1)
            }
            _markDataDirty() {
                this._dataDirty = !0,
                this.markDirty()
            }
            markDataDirty() {
                this._root.events.once("frameended", ( () => {
                    this._markDataDirty()
                }
                ))
            }
            _updateChildren() {
                super._updateChildren(),
                this.isDirty("seriesColor") && this._updateSeriesColor(this.series, this.get("seriesColor"), "seriesColor"),
                this.setCustomData("period", this.get("period")),
                this.setCustomData("field", this.get("field")),
                this.setCustomData("name", this.get("name")),
                this.setCustomData("shortName", this.get("shortName"))
            }
            _dispose() {
                super._dispose(),
                this._sDP && this._sDP.dispose(),
                this._vDP && this._vDP.dispose();
                const e = this.series;
                if (e) {
                    e.dispose();
                    const t = e.get("yAxis");
                    t && t.markDirtySelectionExtremes()
                }
                const t = this.get("stockChart");
                if (t) {
                    const i = this.get("legend");
                    if (i) {
                        const t = e.get("legendDataItem");
                        t && i.disposeDataItem(t)
                    }
                    t.indicators.removeValue(this)
                }
            }
            hide(e) {
                const t = Object.create(null, {
                    hide: {
                        get: () => super.hide
                    }
                });
                return (0,
                X.mG)(this, void 0, void 0, (function*() {
                    return Promise.all([t.hide.call(this, e), this.series.hide(e)])
                }
                ))
            }
            show(e) {
                const t = Object.create(null, {
                    show: {
                        get: () => super.show
                    }
                });
                return (0,
                X.mG)(this, void 0, void 0, (function*() {
                    return Promise.all([t.show.call(this, e), this.series.show(e)])
                }
                ))
            }
            _handleLegend(e) {
                const t = this.get("legend");
                if (t) {
                    t.data.push(e);
                    const i = t.dataItems[t.dataItems.length - 1];
                    i.get("marker").set("forceHidden", !0);
                    const s = i.get("closeButton");
                    s.set("forceHidden", !1),
                    s.events.on("click", ( () => {
                        this.dispose()
                    }
                    ));
                    const a = i.get("settingsButton");
                    a.setPrivate("customData", this);
                    const n = this._editableSettings;
                    n && 0 != n.length || a.set("forceHidden", !0)
                }
            }
            _updateSeriesColor(e, t, i) {
                e && (e.set("stroke", t),
                e.set("fill", t),
                e instanceof w.e && (e.strokes.template.set("stroke", t),
                e.fills.template.set("fill", t)),
                e instanceof B.d && e.columns.template.setAll({
                    stroke: t,
                    fill: t
                }),
                i && t && this.setCustomData(i, t.toCSSHex()))
            }
            setCustomData(e, t) {
                const i = this.series.getPrivate("customData");
                i && (i[e] = t)
            }
            prepareData() {}
            _getValue(e) {
                const t = this.get("field");
                let i = e.get("openValueY")
                  , s = e.get("highValueY")
                  , a = e.get("lowValueY")
                  , n = e.get("valueY");
                switch (t) {
                case "close":
                    return n;
                case "open":
                    return i;
                case "high":
                    return s;
                case "low":
                    return a;
                case "hl/2":
                    return (s + a) / 2;
                case "hlc/3":
                    return (s + a + n) / 3;
                case "hlcc/4":
                    return (s + a + n + n) / 4;
                case "ohlc/4":
                    return (i + s + a + n) / 4
                }
            }
            _getDataArray(e) {
                const t = [];
                return P.each(e, (e => {
                    t.push({
                        valueX: e.get("valueX"),
                        value_y: this._getValue(e)
                    })
                }
                )),
                t
            }
            _getTypicalPrice(e) {
                const t = [];
                return P.each(e, (e => {
                    t.push({
                        valueX: e.get("valueX"),
                        value_y: (e.get("valueY", 0) + e.get("highValueY", 0) + e.get("lowValueY", 0)) / 2
                    })
                }
                )),
                t
            }
            _sma(e, t, i, s) {
                let a = 0
                  , n = 0
                  , o = 0;
                P.each(e, (r => {
                    let l = r[i];
                    if (null != l && (a++,
                    o += l / t,
                    a >= t)) {
                        if (a > t) {
                            let s = e[n - t][i];
                            null != s && (o -= s / t)
                        }
                        r[s] = o
                    }
                    n++
                }
                ))
            }
            _wma(e, t, i, s) {
                let a = 0
                  , n = 0
                  , o = 0;
                P.each(e, (r => {
                    if (null != r[i] && (a++,
                    a >= t)) {
                        let a = 0
                          , l = 0
                          , c = 0
                          , h = 0;
                        for (let s = n; s >= 0; s--) {
                            let n = e[s][i];
                            if (null != n && (a += n * (t - l),
                            c += t - l,
                            h++),
                            l++,
                            h == t)
                                break
                        }
                        o = a / c,
                        r[s] = o
                    }
                    n++
                }
                ))
            }
            _ema(e, t, i, s) {
                let a = 0
                  , n = 0
                  , o = 2 / (1 + t);
                P.each(e, (e => {
                    let r = e[i];
                    null != r && (a++,
                    a > t ? (n = r * o + n * (1 - o),
                    e[s] = n) : (n += r / t,
                    a == t && (e[s] = n)))
                }
                ))
            }
            _dema(e, t, i, s) {
                let a = 0
                  , n = 0
                  , o = 2 / (1 + t);
                this._ema(e, t, i, "ema"),
                P.each(e, (e => {
                    let i = e.ema;
                    null != i && (a++,
                    a > t ? (n = i * o + n * (1 - o),
                    e[s] = 2 * i - n,
                    e.ema2 = n) : (n += i / t,
                    a == t && (e[s] = 2 * i - n,
                    e.ema2 = n)))
                }
                ))
            }
            _tema(e, t, i, s) {
                let a = 0
                  , n = 0
                  , o = 2 / (1 + t);
                this._dema(e, t, i, "dema"),
                P.each(e, (e => {
                    let i = e.ema
                      , r = e.ema2;
                    null != r && (a++,
                    a > t ? (n = r * o + n * (1 - o),
                    e[s] = 3 * i - 3 * r + n) : (n += r / t,
                    a == t && (e[s] = 3 * i - 3 * r + n)))
                }
                ))
            }
        }
        Object.defineProperty(H, "className", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: "Indicator"
        }),
        Object.defineProperty(H, "classNames", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: n.W.classNames.concat([H.className])
        });
        class z extends V.D {
            constructor() {
                super(...arguments),
                Object.defineProperty(this, "closeButtons", {
                    enumerable: !0,
                    configurable: !0,
                    writable: !0,
                    value: new v.o(R.YS.new({}),( () => o.z._new(this._root, {
                        themeTags: C.mergeTags(this.closeButtons.template.get("themeTags", []), ["control", "close"]),
                        icon: r.T.new(this._root, {
                            themeTags: ["icon", "button"]
                        })
                    }, [this.closeButtons.template])))
                }),
                Object.defineProperty(this, "settingsButtons", {
                    enumerable: !0,
                    configurable: !0,
                    writable: !0,
                    value: new v.o(R.YS.new({}),( () => o.z._new(this._root, {
                        themeTags: C.mergeTags(this.settingsButtons.template.get("themeTags", []), ["control", "settings"]),
                        icon: r.T.new(this._root, {
                            themeTags: ["icon", "button"]
                        })
                    }, [this.settingsButtons.template])))
                })
            }
            _afterNew() {
                this._settings.themeTags = C.mergeTags(this._settings.themeTags, ["stocklegend"]),
                super._afterNew()
            }
            makeCloseButton() {
                const e = this.closeButtons.make();
                return this.closeButtons.push(e),
                e
            }
            makeSettingsButton() {
                const e = this.settingsButtons.make();
                return this.settingsButtons.push(e),
                e.events.on("click", ( () => {
                    const t = e.dataItem;
                    if (t) {
                        const i = this.get("stockChart");
                        if (i) {
                            const s = e.getPrivate("customData");
                            s instanceof H ? i.getPrivate("settingsModal").openIndicator(s) : i.getPrivate("settingsModal").openSeries(t.dataContext)
                        }
                    }
                    setTimeout(( () => {
                        e.unhover()
                    }
                    ), 50)
                }
                )),
                e
            }
            processDataItem(e) {
                super.processDataItem(e);
                const t = e.get("itemContainer")
                  , i = this.makeSettingsButton();
                t.children.push(i),
                i._setDataItem(e),
                e.set("settingsButton", i);
                const s = this.makeCloseButton();
                t.children.push(s),
                s._setDataItem(e),
                e.set("closeButton", s)
            }
        }
        Object.defineProperty(z, "className", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: "StockLegend"
        }),
        Object.defineProperty(z, "classNames", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: V.D.classNames.concat([z.className])
        });
        var W = i(6901);
        class $ extends W.z {
            constructor() {
                super(...arguments),
                Object.defineProperty(this, "panelControls", {
                    enumerable: !0,
                    configurable: !0,
                    writable: !0,
                    value: void 0
                }),
                Object.defineProperty(this, "panelResizer", {
                    enumerable: !0,
                    configurable: !0,
                    writable: !0,
                    value: void 0
                }),
                Object.defineProperty(this, "drawings", {
                    enumerable: !0,
                    configurable: !0,
                    writable: !0,
                    value: new v.dn
                })
            }
            _afterNew() {
                super._afterNew(),
                this._disposers.push(this.drawings.events.onAll((e => {
                    if ("clear" === e.type)
                        P.each(e.oldValues, (e => {
                            this.series.removeValue(e)
                        }
                        ));
                    else if ("push" === e.type)
                        this.series.push(e.newValue);
                    else if ("setIndex" === e.type)
                        this.series.setIndex(e.index, e.newValue);
                    else if ("insertIndex" === e.type)
                        this.series.insertIndex(e.index, e.newValue);
                    else {
                        if ("removeIndex" !== e.type)
                            throw new Error("Unknown IListEvent type");
                        this.series.removeIndex(e.index)
                    }
                }
                )))
            }
            moveUp() {
                const e = this.getPrivate("stockChart")
                  , t = e.panelsContainer.children
                  , i = t.indexOf(this);
                if (i > 0) {
                    t.moveValue(this, i - 1);
                    const e = "moved";
                    this.events.isEnabled(e) && this.events.dispatch(e, {
                        type: e,
                        oldIndex: i,
                        newIndex: i - 1,
                        target: this
                    })
                }
                e._updateControls()
            }
            moveDown() {
                const e = this.getPrivate("stockChart")
                  , t = e.panelsContainer.children
                  , i = t.indexOf(this);
                if (i < t.length - 1) {
                    t.moveValue(this, i + 1);
                    const e = "moved";
                    this.events.isEnabled(e) && this.events.dispatch(e, {
                        type: e,
                        oldIndex: i,
                        newIndex: i + 1,
                        target: this
                    })
                }
                e._updateControls()
            }
            close() {
                const e = this.getPrivate("stockChart")
                  , t = "closed";
                this.events.isEnabled(t) && this.events.dispatch(t, {
                    type: t,
                    target: this
                }),
                e.panels.removeValue(this),
                e._updateControls()
            }
            expand() {
                const e = this.getPrivate("stockChart")
                  , t = [];
                if (e.panels.each((e => {
                    e.isVisible() || t.push(e)
                }
                )),
                P.each(t, (e => {
                    e.setPrivate("visible", !0)
                }
                )),
                0 == t.length) {
                    e.panels.each((e => {
                        e != this && e.setPrivate("visible", !1)
                    }
                    ));
                    const t = "expanded";
                    this.events.isEnabled(t) && this.events.dispatch(t, {
                        type: t,
                        target: this
                    })
                } else {
                    const e = "collapsed";
                    this.events.isEnabled(e) && this.events.dispatch(e, {
                        type: e,
                        target: this
                    })
                }
                if (e._updateControls(),
                0 == t.length) {
                    const e = this.panelControls;
                    e.upButton.setPrivate("visible", !1),
                    e.downButton.setPrivate("visible", !1),
                    e.closeButton.setPrivate("visible", !1)
                }
            }
        }
        Object.defineProperty($, "className", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: "StockPanel"
        }),
        Object.defineProperty($, "classNames", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: W.z.classNames.concat([$.className])
        });
        var U = i(3355)
          , Q = i(5638)
          , G = i(8701)
          , Z = i(7261)
          , J = i(6284)
          , K = i(7909)
          , q = i(2876);
        class ee extends H {
            constructor() {
                super(...arguments),
                Object.defineProperty(this, "panel", {
                    enumerable: !0,
                    configurable: !0,
                    writable: !0,
                    value: void 0
                }),
                Object.defineProperty(this, "xAxis", {
                    enumerable: !0,
                    configurable: !0,
                    writable: !0,
                    value: void 0
                }),
                Object.defineProperty(this, "yAxis", {
                    enumerable: !0,
                    configurable: !0,
                    writable: !0,
                    value: void 0
                }),
                Object.defineProperty(this, "cursor", {
                    enumerable: !0,
                    configurable: !0,
                    writable: !0,
                    value: void 0
                }),
                Object.defineProperty(this, "legend", {
                    enumerable: !0,
                    configurable: !0,
                    writable: !0,
                    value: void 0
                }),
                Object.defineProperty(this, "_themeTag", {
                    enumerable: !0,
                    configurable: !0,
                    writable: !0,
                    value: void 0
                }),
                Object.defineProperty(this, "_themeTags", {
                    enumerable: !0,
                    configurable: !0,
                    writable: !0,
                    value: ["indicator"]
                })
            }
            _afterNew() {
                var e;
                super._afterNew();
                const t = this.get("stockChart")
                  , i = this.get("stockSeries")
                  , s = i.chart
                  , a = this._root;
                if (t && s) {
                    const s = t.panels.push($.new(a, {
                        themeTags: this._themeTags
                    }));
                    s.addTag("indicator"),
                    this.panel = s,
                    t.panels.events.on("removeIndex", (e => {
                        e.oldValue == s && t.indicators.removeValue(this)
                    }
                    ));
                    const n = i.get("xAxis")
                      , o = J.n.new(a, {});
                    let r, l = n.get("baseInterval"), c = n.get("start"), h = n.get("end");
                    r = n instanceof G.J ? s.xAxes.push(G.J.new(a, {
                        renderer: o,
                        baseInterval: l
                    })) : s.xAxes.push(Q.S.new(a, {
                        renderer: o,
                        baseInterval: l
                    })),
                    o.set("minorGridEnabled", null === (e = n.get("renderer")) || void 0 === e ? void 0 : e.get("minorGridEnabled")),
                    r.set("groupData", n.get("groupData")),
                    r.set("groupCount", n.get("groupCount")),
                    r.set("tooltip", q.u.new(a, {
                        forceHidden: !0
                    })),
                    r.setAll({
                        start: c,
                        end: h
                    }),
                    this.xAxis = r;
                    const d = K.j.new(a, {
                        minGridDistance: 20
                    })
                      , u = s.yAxes.push(Z.m.new(a, {
                        renderer: d,
                        tooltip: q.u.new(a, {
                            forceHidden: !0
                        })
                    }));
                    this.yAxis = u;
                    const g = this._createSeries();
                    this.series = g;
                    const p = s.topPlotContainer.children.insertIndex(0, z.new(a, {
                        stockChart: this.get("stockChart")
                    }));
                    p.data.push(g);
                    const m = p.dataItems[p.dataItems.length - 1];
                    m.set("panel", s),
                    m.get("marker").set("forceHidden", !0);
                    const f = m.get("settingsButton");
                    f.setPrivate("customData", this);
                    const b = this._editableSettings;
                    b && 0 != b.length || f.set("forceHidden", !0),
                    s.set("cursor", U.L.new(a, {
                        yAxis: u,
                        xAxis: r
                    }))
                }
            }
            _dispose() {
                super._dispose(),
                this.get("stockChart").panels.removeValue(this.panel)
            }
            hide(e) {
                const t = Object.create(null, {
                    hide: {
                        get: () => super.hide
                    }
                });
                return (0,
                X.mG)(this, void 0, void 0, (function*() {
                    return Promise.all([t.hide.call(this, e), this.panel.hide(e)])
                }
                ))
            }
            show(e) {
                const t = Object.create(null, {
                    show: {
                        get: () => super.show
                    }
                });
                return (0,
                X.mG)(this, void 0, void 0, (function*() {
                    return Promise.all([t.show.call(this, e), this.panel.show(e)])
                }
                ))
            }
        }
        Object.defineProperty(ee, "className", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: "ChartIndicator"
        }),
        Object.defineProperty(ee, "classNames", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: H.classNames.concat([ee.className])
        });
        var te = i(2586);
        class ie extends ee {
            constructor() {
                super(...arguments),
                Object.defineProperty(this, "overBought", {
                    enumerable: !0,
                    configurable: !0,
                    writable: !0,
                    value: void 0
                }),
                Object.defineProperty(this, "middle", {
                    enumerable: !0,
                    configurable: !0,
                    writable: !0,
                    value: void 0
                }),
                Object.defineProperty(this, "overSold", {
                    enumerable: !0,
                    configurable: !0,
                    writable: !0,
                    value: void 0
                }),
                Object.defineProperty(this, "overSoldRange", {
                    enumerable: !0,
                    configurable: !0,
                    writable: !0,
                    value: void 0
                }),
                Object.defineProperty(this, "overBoughtRange", {
                    enumerable: !0,
                    configurable: !0,
                    writable: !0,
                    value: void 0
                }),
                Object.defineProperty(this, "_editableSettings", {
                    enumerable: !0,
                    configurable: !0,
                    writable: !0,
                    value: [{
                        key: "overBought",
                        name: this.root.language.translateAny("Overbought"),
                        type: "number"
                    }, {
                        key: "overBoughtColor",
                        name: this.root.language.translateAny("Overbought"),
                        type: "color"
                    }, {
                        key: "overSold",
                        name: this.root.language.translateAny("Oversold"),
                        type: "number"
                    }, {
                        key: "overSoldColor",
                        name: this.root.language.translateAny("Oversold"),
                        type: "color"
                    }]
                })
            }
            _afterNew() {
                this._themeTags.push("overboughtoversold"),
                super._afterNew();
                const e = this.panel
                  , t = this.yAxis;
                t.setAll({
                    strictMinMax: !0,
                    autoZoom: !1
                }),
                this.middle = this.yAxis.createAxisRange(this.yAxis.makeDataItem({}));
                const i = this.middle.get("grid");
                i.setAll({
                    themeTags: ["middlegrid"]
                }),
                i._applyThemes(),
                this.middle.get("label").setAll({
                    visible: !0,
                    forceHidden: !1
                });
                let s = "left";
                t.get("renderer").get("opposite") && (s = "right");
                const a = t.makeDataItem({});
                this.overBought = a,
                a.set("endValue", 500);
                const n = o.z.new(this._root, {
                    themeTags: ["rangegrip", "vertical", s],
                    icon: r.T.new(this._root, {
                        themeTags: ["rangegrip", "icon"]
                    })
                });
                n.adapters.add("x", (function() {
                    return 0
                }
                )),
                n.adapters.add("y", (function(t) {
                    return L.isNumber(t) ? m.fitToRange(t, 0, e.plotContainer.height()) : t
                }
                )),
                n.events.on("dragged", ( () => {
                    this._updateRange(n, "overBought")
                }
                )),
                a.set("bullet", te._.new(this._root, {
                    location: 0,
                    sprite: n
                }));
                const l = this.series.createAxisRange(a);
                this.overBoughtRange = l;
                const c = l.fills;
                c && c.template.set("themeTags", ["overbought", "fill"]);
                const h = a.get("grid");
                h.setAll({
                    themeTags: ["overbought"],
                    visible: !0
                }),
                h._applyThemes(),
                a.get("label").setAll({
                    visible: !0,
                    forceHidden: !1,
                    location: 0
                });
                const d = t.makeDataItem({});
                this.overSold = d,
                d.set("endValue", -500);
                const u = o.z.new(this._root, {
                    themeTags: ["rangegrip", "vertical", s],
                    icon: r.T.new(this._root, {
                        themeTags: ["rangegrip", "icon"]
                    })
                });
                u.adapters.add("x", (function() {
                    return 0
                }
                )),
                u.adapters.add("y", (function(t) {
                    return L.isNumber(t) ? m.fitToRange(t, 0, e.plotContainer.height()) : t
                }
                )),
                u.events.on("dragged", ( () => {
                    this._updateRange(u, "overSold")
                }
                )),
                d.set("bullet", te._.new(this._root, {
                    location: 0,
                    sprite: u
                }));
                const g = this.series.createAxisRange(d);
                this.overSoldRange = g;
                const p = g.fills;
                p && p.template.set("themeTags", ["oversold", "fill"]);
                const f = d.get("grid");
                f.setAll({
                    themeTags: ["oversold"],
                    visible: !0
                }),
                f._applyThemes(),
                d.get("label").setAll({
                    visible: !0,
                    forceHidden: !1,
                    location: 0
                })
            }
            _updateRange(e, t) {
                const i = this.yAxis.chart;
                if (i) {
                    const s = this.yAxis.toAxisPosition(e.y() / i.plotContainer.height());
                    this.set(t, Math.round(this.yAxis.positionToValue(s)))
                }
            }
            _createSeries() {
                return this.panel.series.push(w.e.new(this._root, {
                    themeTags: ["indicator"],
                    xAxis: this.xAxis,
                    yAxis: this.yAxis,
                    valueXField: "valueX",
                    valueYField: "valueS",
                    stroke: this.get("seriesColor"),
                    fill: void 0
                }))
            }
            _prepareChildren() {
                super._prepareChildren();
                const e = this.overBought.get("label")
                  , t = this.overSold.get("label")
                  , i = this.middle.get("label");
                if (this.isDirty("overBought") || this.isDirty("overSold")) {
                    const s = this.getNumberFormatter()
                      , a = this.get("overSold", 0)
                      , n = this.get("overBought", 0)
                      , o = a + (n - a) / 2;
                    e.set("text", s.format(n)),
                    t.set("text", s.format(a)),
                    i.set("text", s.format(o)),
                    this.overBought.set("value", n),
                    this.overSold.set("value", a),
                    this.middle.set("value", o),
                    this.yAxis.set("baseValue", o)
                }
                if (this.isDirty("overSoldColor")) {
                    const e = this.get("overSoldColor");
                    t.set("fill", e),
                    this.overSold.get("grid").set("stroke", e),
                    this.overSoldRange.fills.template.set("fill", e),
                    this.overSoldRange.strokes.template.set("stroke", e)
                }
                if (this.isDirty("overBoughtColor")) {
                    const t = this.get("overBoughtColor");
                    e.set("fill", t),
                    this.overBought.get("grid").set("stroke", t),
                    this.overBoughtRange.fills.template.set("fill", t),
                    this.overBoughtRange.strokes.template.set("stroke", t)
                }
            }
        }
        Object.defineProperty(ie, "className", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: "OverboughtOversold"
        }),
        Object.defineProperty(ie, "classNames", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: ee.classNames.concat([ie.className])
        });
        class se extends H {
            constructor() {
                super(...arguments),
                Object.defineProperty(this, "_editableSettings", {
                    enumerable: !0,
                    configurable: !0,
                    writable: !0,
                    value: [{
                        key: "period",
                        name: this.root.language.translateAny("Period"),
                        type: "number"
                    }, {
                        key: "offset",
                        name: this.root.language.translateAny("Offset"),
                        type: "number"
                    }, {
                        key: "seriesColor",
                        name: this.root.language.translateAny("Color"),
                        type: "color"
                    }, {
                        key: "field",
                        name: this.root.language.translateAny("Field"),
                        type: "dropdown",
                        options: ["open", "close", "low", "high", "hl/2", "hlc/3", "hlcc/4", "ohlc/4"]
                    }, {
                        key: "type",
                        name: this.root.language.translateAny("Type"),
                        type: "dropdown",
                        options: ["simple", "weighted", "exponential", "dema", "tema"]
                    }]
                })
            }
            _prepareChildren() {
                (this.isDirty("type") || this.isDirty("offset")) && (this.markDataDirty(),
                this.setCustomData("type", this.get("type")),
                this.setCustomData("offset", this.get("offset", 0))),
                super._prepareChildren()
            }
            _afterNew() {
                super._afterNew();
                const e = this.get("stockSeries")
                  , t = e.chart;
                if (t) {
                    const i = t.series.push(w.e.new(this._root, {
                        valueXField: "valueX",
                        valueYField: "ma",
                        groupDataDisabled: !0,
                        calculateAggregates: !0,
                        xAxis: e.get("xAxis"),
                        yAxis: e.get("yAxis"),
                        themeTags: ["indicator", "movingaverage"],
                        name: "MA"
                    }));
                    i.setPrivate("baseValueSeries", e),
                    this.series = i,
                    this._handleLegend(i)
                }
            }
            prepareData() {
                if (this.series) {
                    let e = this.get("period", 50);
                    const t = this.get("type")
                      , i = this.get("stockSeries").dataItems;
                    let s = this._getDataArray(i);
                    switch (t) {
                    case "simple":
                        this._sma(s, e, "value_y", "ma");
                        break;
                    case "weighted":
                        this._wma(s, e, "value_y", "ma");
                        break;
                    case "exponential":
                        this._ema(s, e, "value_y", "ma");
                        break;
                    case "dema":
                        this._dema(s, e, "value_y", "ma");
                        break;
                    case "tema":
                        this._tema(s, e, "value_y", "ma")
                    }
                    const a = this.get("offset", 0);
                    if (0 != a) {
                        let e = 0;
                        const t = this.series.get("xAxis").baseDuration()
                          , n = i.length
                          , o = i[0].get("valueX", 0)
                          , r = i[n - 1].get("valueX", 0);
                        P.each(s, (s => {
                            let l = 0;
                            l = e + a >= n ? r + (a - n + e + 1) * t : e + a < 0 ? o + (e + a) * t : i[e + a].get("valueX", 0),
                            s.valueX = l,
                            e++
                        }
                        ))
                    }
                    this.series.data.setAll(s)
                }
            }
        }
        Object.defineProperty(se, "className", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: "MovingAverage"
        }),
        Object.defineProperty(se, "classNames", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: H.classNames.concat([se.className])
        });
        class ae extends ee {
            constructor() {
                super(...arguments),
                Object.defineProperty(this, "_editableSettings", {
                    enumerable: !0,
                    configurable: !0,
                    writable: !0,
                    value: [{
                        key: "period",
                        name: this.root.language.translateAny("Period"),
                        type: "number"
                    }, {
                        key: "field",
                        name: this.root.language.translateAny("Field"),
                        type: "dropdown",
                        options: ["open", "close", "low", "high", "hl/2", "hlc/3", "hlcc/4", "ohlc/4"]
                    }, {
                        key: "seriesColor",
                        name: this.root.language.translateAny("Color"),
                        type: "color"
                    }]
                })
            }
            _afterNew() {
                this._themeTags.push("momentum"),
                super._afterNew()
            }
            _createSeries() {
                return this.panel.series.push(w.e.new(this._root, {
                    themeTags: ["indicator"],
                    xAxis: this.xAxis,
                    yAxis: this.yAxis,
                    valueXField: "valueX",
                    valueYField: "valueY",
                    stroke: this.get("seriesColor"),
                    fill: void 0
                }))
            }
            prepareData() {
                if (this.series) {
                    const e = this.get("stockSeries").dataItems
                      , t = this.get("period", 14)
                      , i = [];
                    let s = 0;
                    P.each(e, (a => {
                        if (s > t) {
                            let n = this._getValue(a)
                              , o = this._getValue(e[s - t]);
                            null != n && null != o && i.push({
                                valueX: a.get("valueX"),
                                valueY: n - o
                            })
                        } else
                            i.push({
                                valueX: a.get("valueX")
                            });
                        s++
                    }
                    )),
                    this.series.data.setAll(i)
                }
            }
        }
        Object.defineProperty(ae, "className", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: "Momentum"
        }),
        Object.defineProperty(ae, "classNames", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: ee.classNames.concat([ae.className])
        });
        class ne extends H {
            constructor() {
                super(...arguments),
                Object.defineProperty(this, "_editableSettings", {
                    enumerable: !0,
                    configurable: !0,
                    writable: !0,
                    value: [{
                        key: "period",
                        name: this.root.language.translateAny("Period"),
                        type: "number"
                    }, {
                        key: "seriesColor",
                        name: this.root.language.translateAny("Color"),
                        type: "color"
                    }, {
                        key: "field",
                        name: this.root.language.translateAny("Field"),
                        type: "dropdown",
                        options: ["open", "close", "low", "high", "hl/2", "hlc/3", "hlcc/4", "ohlc/4"]
                    }]
                })
            }
            _afterNew() {
                super._afterNew();
                const e = this.get("stockSeries")
                  , t = e.chart;
                if (t) {
                    const i = t.series.push(w.e.new(this._root, {
                        valueXField: "valueX",
                        valueYField: "vwap",
                        groupDataDisabled: !0,
                        calculateAggregates: !0,
                        xAxis: e.get("xAxis"),
                        yAxis: e.get("yAxis"),
                        themeTags: ["indicator", "vwap"],
                        name: "VWAP"
                    }));
                    i.setPrivate("baseValueSeries", e),
                    this.series = i,
                    this._handleLegend(i)
                }
            }
            prepareData() {
                if (this.series) {
                    let e = this.get("period", 1 / 0);
                    const t = this.get("stockSeries")
                      , i = this.get("volumeSeries")
                      , s = t.dataItems;
                    if (i) {
                        let t = this._getDataArray(s)
                          , a = 0
                          , n = 0
                          , o = 0;
                        P.each(t, (s => {
                            const r = i.dataItems[a];
                            if (r) {
                                const i = r.get("valueY", 0);
                                if (i > 0) {
                                    const r = s.value_y * i;
                                    if (s.vw = r,
                                    s.volume = i,
                                    o += r,
                                    n += i,
                                    a >= e) {
                                        let i = t[a - e].volume
                                          , s = t[a - e].vw;
                                        null != i && (n -= i),
                                        null != s && (o -= s)
                                    }
                                    s.totalVW = o,
                                    s.vwap = o / n
                                }
                            }
                            a++
                        }
                        )),
                        this.series.data.setAll(t)
                    }
                }
            }
        }
        Object.defineProperty(ne, "className", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: "VWAP"
        }),
        Object.defineProperty(ne, "classNames", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: H.classNames.concat([ne.className])
        });
        class oe extends se {
            constructor() {
                super(...arguments),
                Object.defineProperty(this, "upperBandSeries", {
                    enumerable: !0,
                    configurable: !0,
                    writable: !0,
                    value: void 0
                }),
                Object.defineProperty(this, "lowerBandSeries", {
                    enumerable: !0,
                    configurable: !0,
                    writable: !0,
                    value: void 0
                }),
                Object.defineProperty(this, "_editableSettings", {
                    enumerable: !0,
                    configurable: !0,
                    writable: !0,
                    value: [{
                        key: "period",
                        name: this.root.language.translateAny("Period"),
                        type: "number"
                    }, {
                        key: "type",
                        name: this.root.language.translateAny("Type"),
                        type: "dropdown",
                        options: ["simple", "weighted", "exponential", "dema", "tema"]
                    }, {
                        key: "field",
                        name: this.root.language.translateAny("Field"),
                        type: "dropdown",
                        options: ["open", "close", "low", "high", "hl/2", "hlc/3", "hlcc/4", "ohlc/4"]
                    }, {
                        key: "shiftType",
                        name: this.root.language.translateAny("Shift type"),
                        type: "dropdown",
                        options: ["percent", "points"]
                    }, {
                        key: "shift",
                        name: this.root.language.translateAny("Shift"),
                        type: "number"
                    }, {
                        key: "offset",
                        name: this.root.language.translateAny("Offset"),
                        type: "number"
                    }, {
                        key: "upperColor",
                        name: this.root.language.translateAny("Top"),
                        type: "color"
                    }, {
                        key: "seriesColor",
                        name: this.root.language.translateAny("Median"),
                        type: "color"
                    }, {
                        key: "lowerColor",
                        name: this.root.language.translateAny("Bottom"),
                        type: "color"
                    }]
                })
            }
            _afterNew() {
                const e = this.get("stockSeries")
                  , t = e.chart;
                if (t) {
                    const i = t.series.push(w.e.new(this._root, {
                        valueXField: "valueX",
                        valueYField: "upper",
                        openValueYField: "lower",
                        xAxis: e.get("xAxis"),
                        yAxis: e.get("yAxis"),
                        groupDataDisabled: !0,
                        calculateAggregates: !0,
                        themeTags: ["indicator", "movingaverageenvelope", "upper"]
                    }));
                    i.fills.template.set("visible", !0),
                    i.setPrivate("baseValueSeries", e),
                    this.upperBandSeries = i;
                    const s = t.series.push(w.e.new(this._root, {
                        valueXField: "valueX",
                        valueYField: "lower",
                        xAxis: e.get("xAxis"),
                        yAxis: e.get("yAxis"),
                        groupDataDisabled: !0,
                        calculateAggregates: !0,
                        themeTags: ["indicator", "movingaverageenvelope", "lower"]
                    }));
                    s.setPrivate("baseValueSeries", e),
                    this.lowerBandSeries = s
                }
                super._afterNew(),
                this.series.addTag("movingaverageenvelope"),
                this.series._applyThemes()
            }
            _updateChildren() {
                if (super._updateChildren(),
                this.isDirty("upperColor")) {
                    const e = this.get("upperColor")
                      , t = this.upperBandSeries;
                    t.set("stroke", e),
                    t.set("fill", e),
                    t.strokes.template.set("stroke", e),
                    this._updateSeriesColor(t, e, "upperColor")
                }
                if (this.isDirty("lowerColor")) {
                    const e = this.get("lowerColor")
                      , t = this.lowerBandSeries;
                    t.set("stroke", e),
                    t.strokes.template.set("stroke", e),
                    this._updateSeriesColor(t, e, "lowerColor")
                }
            }
            _prepareChildren() {
                (this.isDirty("shiftType") || this.isDirty("shift")) && (this.markDataDirty(),
                this.setCustomData("shift", this.get("shift")),
                this.setCustomData("shiftType", this.get("shiftType"))),
                super._prepareChildren()
            }
            prepareData() {
                if (super.prepareData(),
                this.series) {
                    let e = this.series.data.values
                      , t = Number(this.get("shift", 5))
                      , i = this.get("shiftType");
                    P.each(e, (e => {
                        let s = e.ma;
                        if (null != s) {
                            let a = s
                              , n = s;
                            "points" == i ? (a += t,
                            n -= t) : (a += a * t / 100,
                            n -= n * t / 100),
                            e.upper = a,
                            e.lower = n
                        }
                    }
                    )),
                    this.upperBandSeries.data.setAll(e),
                    this.lowerBandSeries.data.setAll(e)
                }
            }
            _dispose() {
                this.upperBandSeries.dispose(),
                this.lowerBandSeries.dispose(),
                super._dispose()
            }
            hide(e) {
                const t = Object.create(null, {
                    hide: {
                        get: () => super.hide
                    }
                });
                return (0,
                X.mG)(this, void 0, void 0, (function*() {
                    return Promise.all([t.hide.call(this, e), this.upperBandSeries.hide(e), this.lowerBandSeries.hide(e)])
                }
                ))
            }
            show(e) {
                const t = Object.create(null, {
                    show: {
                        get: () => super.show
                    }
                });
                return (0,
                X.mG)(this, void 0, void 0, (function*() {
                    return Promise.all([t.show.call(this, e), this.upperBandSeries.show(e), this.lowerBandSeries.show(e)])
                }
                ))
            }
        }
        Object.defineProperty(oe, "className", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: "MovingAverageEnvelope"
        }),
        Object.defineProperty(oe, "classNames", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: se.classNames.concat([oe.className])
        });
        var re = i(62);
        class le extends ee {
            constructor() {
                super(...arguments),
                Object.defineProperty(this, "_editableSettings", {
                    enumerable: !0,
                    configurable: !0,
                    writable: !0,
                    value: [{
                        key: "period",
                        name: this.root.language.translateAny("Period"),
                        type: "number"
                    }, {
                        key: "field",
                        name: this.root.language.translateAny("Field"),
                        type: "dropdown",
                        options: ["open", "close", "low", "high", "hl/2", "hlc/3", "hlcc/4", "ohlc/4"]
                    }, {
                        key: "type",
                        name: this.root.language.translateAny("Type"),
                        type: "dropdown",
                        options: ["simple", "weighted", "exponential", "dema", "tema"]
                    }, {
                        key: "unit",
                        name: this.root.language.translateAny("Points/Percent"),
                        type: "dropdown",
                        options: ["points", "percent"]
                    }, {
                        key: "increasingColor",
                        name: this.root.language.translateAny("Increasing"),
                        type: "color"
                    }, {
                        key: "decreasingColor",
                        name: this.root.language.translateAny("Decreasing"),
                        type: "color"
                    }]
                })
            }
            _afterNew() {
                this._themeTags.push("movingaveragedeviation"),
                super._afterNew()
            }
            _createSeries() {
                return this.panel.series.push(re.d.new(this._root, {
                    themeTags: ["indicator"],
                    xAxis: this.xAxis,
                    yAxis: this.yAxis,
                    valueXField: "valueX",
                    valueYField: "deviation",
                    fill: void 0
                }))
            }
            _updateChildren() {
                if (super._updateChildren(),
                this.isDirty("increasingColor") || this.isDirty("decreasingColor")) {
                    const e = this.series.columns.template
                      , t = this.get("increasingColor")
                      , i = this.get("decreasingColor");
                    e.states.create("riseFromPrevious", {
                        fill: t,
                        stroke: t
                    }),
                    e.states.create("dropFromPrevious", {
                        fill: i,
                        stroke: i
                    })
                }
            }
            _prepareChildren() {
                (this.isDirty("type") || this.isDirty("unit")) && this.markDataDirty(),
                super._prepareChildren()
            }
            prepareData() {
                if (this.series) {
                    const e = this.get("stockSeries").dataItems;
                    let t = this.get("decreasingColor", u.Il.fromHex(16711680)).toCSSHex()
                      , i = this.get("increasingColor", u.Il.fromHex(65280)).toCSSHex()
                      , s = this._getDataArray(e)
                      , a = this.get("period", 50);
                    const n = this.get("type")
                      , o = this.get("unit");
                    switch (n) {
                    case "simple":
                        this._sma(s, a, "value_y", "ma");
                        break;
                    case "weighted":
                        this._wma(s, a, "value_y", "ma");
                        break;
                    case "exponential":
                        this._ema(s, a, "value_y", "ma");
                        break;
                    case "dema":
                        this._dema(s, a, "value_y", "ma");
                        break;
                    case "tema":
                        this._tema(s, a, "value_y", "ma")
                    }
                    let r = -1 / 0
                      , l = 0;
                    P.each(s, (e => {
                        if (l++,
                        l >= a) {
                            let s = e.value_y - e.ma;
                            "percent" == o && (s = 100 * (e.value_y / e.ma - 1));
                            let a = i;
                            s < r && (a = t),
                            e.deviation = s,
                            e.deviationColor = a,
                            r = s
                        }
                    }
                    )),
                    this.series.data.setAll(s)
                }
            }
        }
        Object.defineProperty(le, "className", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: "MovingAverageDeviation"
        }),
        Object.defineProperty(le, "classNames", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: ee.classNames.concat([le.className])
        });
        class ce extends H {
            constructor() {
                super(...arguments),
                Object.defineProperty(this, "upperBandSeries", {
                    enumerable: !0,
                    configurable: !0,
                    writable: !0,
                    value: void 0
                }),
                Object.defineProperty(this, "lowerBandSeries", {
                    enumerable: !0,
                    configurable: !0,
                    writable: !0,
                    value: void 0
                }),
                Object.defineProperty(this, "_editableSettings", {
                    enumerable: !0,
                    configurable: !0,
                    writable: !0,
                    value: [{
                        key: "period",
                        name: this.root.language.translateAny("Period"),
                        type: "number"
                    }, {
                        key: "factor",
                        name: this.root.language.translateAny("Factor"),
                        type: "number"
                    }, {
                        key: "upperColor",
                        name: this.root.language.translateAny("Upper"),
                        type: "color"
                    }, {
                        key: "seriesColor",
                        name: this.root.language.translateAny("Average"),
                        type: "color"
                    }, {
                        key: "lowerColor",
                        name: this.root.language.translateAny("Lower"),
                        type: "color"
                    }]
                })
            }
            _afterNew() {
                const e = this.get("stockSeries")
                  , t = e.chart;
                if (t) {
                    const i = t.series.push(w.e.new(this._root, {
                        valueXField: "valueX",
                        valueYField: "average",
                        groupDataDisabled: !0,
                        calculateAggregates: !0,
                        xAxis: e.get("xAxis"),
                        yAxis: e.get("yAxis"),
                        themeTags: ["indicator", "accelerationbands", "average"]
                    }));
                    i.setPrivate("baseValueSeries", e),
                    this.series = i;
                    const s = t.series.push(w.e.new(this._root, {
                        valueXField: "valueX",
                        valueYField: "upper",
                        openValueYField: "lower",
                        calculateAggregates: !0,
                        xAxis: e.get("xAxis"),
                        yAxis: e.get("yAxis"),
                        groupDataDisabled: !0,
                        themeTags: ["indicator", "accelerationbands", "upper"]
                    }));
                    s.setPrivate("baseValueSeries", e),
                    this.upperBandSeries = s;
                    const a = t.series.push(w.e.new(this._root, {
                        valueXField: "valueX",
                        valueYField: "lower",
                        calculateAggregates: !0,
                        xAxis: e.get("xAxis"),
                        yAxis: e.get("yAxis"),
                        groupDataDisabled: !0,
                        themeTags: ["indicator", "accelerationbands", "lower"]
                    }));
                    a.setPrivate("baseValueSeries", e),
                    this.lowerBandSeries = a
                }
                this._handleLegend(this.series),
                super._afterNew(),
                this.series.addTag("accelerationbands"),
                this.series._applyThemes()
            }
            _prepareChildren() {
                this.isDirty("factor") && (this.markDataDirty(),
                this.setCustomData("factor", this.get("factor"))),
                super._prepareChildren()
            }
            _updateChildren() {
                super._updateChildren();
                const e = "upperColor";
                if (this.isDirty(e)) {
                    const t = this.get(e)
                      , i = this.upperBandSeries;
                    i.set("stroke", t),
                    i.set("fill", t),
                    i.strokes.template.set("stroke", t),
                    this._updateSeriesColor(i, t, e)
                }
                const t = "lowerColor";
                if (this.isDirty(t)) {
                    const e = this.get(t)
                      , i = this.lowerBandSeries;
                    i.set("stroke", e),
                    i.strokes.template.set("stroke", e),
                    this._updateSeriesColor(i, e, t)
                }
            }
            prepareData() {
                if (super.prepareData(),
                this.series) {
                    let e = this.get("period", 20);
                    const t = this.get("stockSeries").dataItems;
                    let i = this._getDataArray(t)
                      , s = this.get("factor", .001)
                      , a = 0;
                    P.each(i, (e => {
                        let i = t[a];
                        if (i) {
                            let t = i.get("lowValueY")
                              , a = i.get("highValueY");
                            L.isNumber(t) && L.isNumber(a) && a + t != 0 && (e._lower = a * (1 + (a - t) / ((a + t) / 2) * 1e3 * s * 2),
                            e._upper = t * (1 - (a - t) / ((a + t) / 2) * 1e3 * s * 2),
                            e._average = e._lower + (e._upper - e._lower) / 2)
                        }
                        a++
                    }
                    )),
                    this._sma(i, e, "_lower", "lower"),
                    this._sma(i, e, "_upper", "upper"),
                    this._sma(i, e, "_average", "average"),
                    this.upperBandSeries.data.setAll(i),
                    this.lowerBandSeries.data.setAll(i),
                    this.series.data.setAll(i)
                }
            }
            _dispose() {
                this.upperBandSeries.dispose(),
                this.lowerBandSeries.dispose(),
                super._dispose()
            }
            hide(e) {
                const t = Object.create(null, {
                    hide: {
                        get: () => super.hide
                    }
                });
                return (0,
                X.mG)(this, void 0, void 0, (function*() {
                    return Promise.all([t.hide.call(this, e), this.upperBandSeries.hide(e), this.lowerBandSeries.hide(e)])
                }
                ))
            }
            show(e) {
                const t = Object.create(null, {
                    show: {
                        get: () => super.show
                    }
                });
                return (0,
                X.mG)(this, void 0, void 0, (function*() {
                    return Promise.all([t.show.call(this, e), this.upperBandSeries.show(e), this.lowerBandSeries.show(e)])
                }
                ))
            }
        }
        Object.defineProperty(ce, "className", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: "AccelerationBands"
        }),
        Object.defineProperty(ce, "classNames", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: H.classNames.concat([ce.className])
        });
        class he extends se {
            constructor() {
                super(...arguments),
                Object.defineProperty(this, "upperBandSeries", {
                    enumerable: !0,
                    configurable: !0,
                    writable: !0,
                    value: void 0
                }),
                Object.defineProperty(this, "lowerBandSeries", {
                    enumerable: !0,
                    configurable: !0,
                    writable: !0,
                    value: void 0
                }),
                Object.defineProperty(this, "_editableSettings", {
                    enumerable: !0,
                    configurable: !0,
                    writable: !0,
                    value: [{
                        key: "period",
                        name: this.root.language.translateAny("Period"),
                        type: "number"
                    }, {
                        key: "standardDeviations",
                        name: this.root.language.translateAny("Deviation"),
                        type: "number"
                    }, {
                        key: "upperColor",
                        name: this.root.language.translateAny("Upper"),
                        type: "color"
                    }, {
                        key: "seriesColor",
                        name: this.root.language.translateAny("Average"),
                        type: "color"
                    }, {
                        key: "lowerColor",
                        name: this.root.language.translateAny("Lower"),
                        type: "color"
                    }, {
                        key: "field",
                        name: this.root.language.translateAny("Field"),
                        type: "dropdown",
                        options: ["open", "close", "low", "high", "hl/2", "hlc/3", "hlcc/4", "ohlc/4"]
                    }, {
                        key: "type",
                        name: this.root.language.translateAny("Type"),
                        type: "dropdown",
                        options: ["simple", "weighted", "exponential", "dema", "tema"]
                    }]
                })
            }
            _afterNew() {
                const e = this.get("stockSeries")
                  , t = e.chart;
                if (t) {
                    const i = t.series.push(w.e.new(this._root, {
                        valueXField: "valueX",
                        valueYField: "upper",
                        openValueYField: "lower",
                        calculateAggregates: !0,
                        xAxis: e.get("xAxis"),
                        yAxis: e.get("yAxis"),
                        groupDataDisabled: !0,
                        themeTags: ["indicator", "bollingerbands", "upper"]
                    }));
                    i.fills.template.set("visible", !0),
                    i.setPrivate("baseValueSeries", e),
                    this.upperBandSeries = i;
                    const s = t.series.push(w.e.new(this._root, {
                        valueXField: "valueX",
                        valueYField: "lower",
                        calculateAggregates: !0,
                        xAxis: e.get("xAxis"),
                        yAxis: e.get("yAxis"),
                        groupDataDisabled: !0,
                        themeTags: ["indicator", "bollingerbands", "lower"]
                    }));
                    s.setPrivate("baseValueSeries", e),
                    this.lowerBandSeries = s
                }
                super._afterNew(),
                this.series.addTag("bollingerbands"),
                this.series._applyThemes()
            }
            _prepareChildren() {
                this.isDirty("standardDeviations") && this.markDataDirty(),
                super._prepareChildren()
            }
            _updateChildren() {
                super._updateChildren();
                const e = "upperColor";
                if (this.isDirty(e)) {
                    const t = this.get(e)
                      , i = this.upperBandSeries;
                    i.set("stroke", t),
                    i.set("fill", t),
                    i.strokes.template.set("stroke", t),
                    this._updateSeriesColor(i, t, e)
                }
                const t = "lowerColor";
                if (this.isDirty(t)) {
                    const e = this.get(t)
                      , i = this.lowerBandSeries;
                    i.set("stroke", e),
                    i.strokes.template.set("stroke", e),
                    this._updateSeriesColor(i, e, t)
                }
                this.setCustomData("standardDeviations", this.get("standardDeviations"))
            }
            prepareData() {
                if (super.prepareData(),
                this.series) {
                    let e = this.get("period", 20);
                    const t = this.get("stockSeries").dataItems;
                    let i = this.get("standardDeviations", 2)
                      , s = this.series.data.values
                      , a = 0;
                    P.each(s, (s => {
                        if (a >= e - 1) {
                            let n = s.ma
                              , o = 0;
                            for (let i = a - e + 1; i <= a; i++) {
                                let e = t[i]
                                  , s = this._getValue(e);
                                null != s && (o += Math.pow(s - n, 2))
                            }
                            let r = Math.sqrt(o / e);
                            const l = n - i * r
                              , c = n + i * r;
                            s.upper = c,
                            s.lower = l
                        }
                        a++
                    }
                    )),
                    this.upperBandSeries.data.setAll(s),
                    this.lowerBandSeries.data.setAll(s)
                }
            }
            _dispose() {
                this.upperBandSeries.dispose(),
                this.lowerBandSeries.dispose(),
                super._dispose()
            }
            hide(e) {
                const t = Object.create(null, {
                    hide: {
                        get: () => super.hide
                    }
                });
                return (0,
                X.mG)(this, void 0, void 0, (function*() {
                    return Promise.all([t.hide.call(this, e), this.upperBandSeries.hide(e), this.lowerBandSeries.hide(e)])
                }
                ))
            }
            show(e) {
                const t = Object.create(null, {
                    show: {
                        get: () => super.show
                    }
                });
                return (0,
                X.mG)(this, void 0, void 0, (function*() {
                    return Promise.all([t.show.call(this, e), this.upperBandSeries.show(e), this.lowerBandSeries.show(e)])
                }
                ))
            }
        }
        Object.defineProperty(he, "className", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: "BollingerBands"
        }),
        Object.defineProperty(he, "classNames", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: se.classNames.concat([he.className])
        });
        class de extends ie {
            constructor() {
                super(...arguments),
                Object.defineProperty(this, "smaSeries", {
                    enumerable: !0,
                    configurable: !0,
                    writable: !0,
                    value: void 0
                })
            }
            _afterNew() {
                this._themeTags.push("rsi"),
                super._afterNew(),
                this._editableSettings.unshift({
                    key: "period",
                    name: this.root.language.translateAny("Period"),
                    type: "number"
                }, {
                    key: "seriesColor",
                    name: this.root.language.translateAny("Period"),
                    type: "color"
                }, {
                    key: "field",
                    name: this.root.language.translateAny("Field"),
                    type: "dropdown",
                    options: ["open", "close", "low", "high", "hl/2", "hlc/3", "hlcc/4", "ohlc/4"]
                }, {
                    key: "smaPeriod",
                    name: this.root.language.translateAny("SMA period"),
                    type: "number"
                }, {
                    key: "smaColor",
                    name: this.root.language.translateAny("SMA period"),
                    type: "color"
                });
                const e = this.panel.series.push(w.e.new(this._root, {
                    valueXField: "valueX",
                    valueYField: "sma",
                    xAxis: this.xAxis,
                    yAxis: this.yAxis,
                    groupDataDisabled: !0,
                    themeTags: ["indicator", "sma"]
                }));
                this.smaSeries = e
            }
            _updateChildren() {
                super._updateChildren(),
                this.isDirty("smaColor") && this._updateSeriesColor(this.smaSeries, this.get("smaColor"), "smaColor"),
                this.isDirty("smaPeriod") && (this.markDataDirty(),
                this.setCustomData("smaPeriod", this.get("smaPeriod")))
            }
            prepareData() {
                if (this.series) {
                    const e = this.get("stockSeries").dataItems;
                    let t = this.get("period", 14);
                    const i = [];
                    let s = 0
                      , a = 0
                      , n = 0
                      , o = 0
                      , r = 0;
                    P.each(e, (l => {
                        let c = null;
                        if (s++,
                        s == t + 1) {
                            for (let i = 1; i <= t; i++) {
                                let s = this._getValue(e[i])
                                  , o = this._getValue(e[i - 1]);
                                if (null != s && null != o) {
                                    let e = s - o;
                                    e >= 0 ? a += e / t : n += Math.abs(e) / t
                                }
                            }
                            c = 100 - 100 / (1 + a / n),
                            L.isNaN(c) && (c = 0)
                        } else if (s > t) {
                            let i = this._getValue(l)
                              , h = this._getValue(e[s - 2]);
                            if (null != i && null != h) {
                                let e = i - h
                                  , s = 0
                                  , l = 0;
                                e > 0 ? s = e : l = -e,
                                a = (o * (t - 1) + s) / t,
                                n = (r * (t - 1) + l) / t,
                                c = 100 - 100 / (1 + a / n),
                                isNaN(c) && (c = 0)
                            }
                        }
                        i.push({
                            valueX: l.get("valueX"),
                            valueS: c
                        }),
                        o = a,
                        r = n
                    }
                    )),
                    this.series.data.setAll(i),
                    t = this.get("smaPeriod", 3),
                    this._sma(i, t, "valueS", "sma"),
                    this.series.data.setAll(i),
                    this.smaSeries.data.setAll(i)
                }
            }
        }
        Object.defineProperty(de, "className", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: "RelativeStrengthIndex"
        }),
        Object.defineProperty(de, "classNames", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: ie.classNames.concat([de.className])
        });
        class ue extends ee {
            constructor() {
                super(...arguments),
                Object.defineProperty(this, "_editableSettings", {
                    enumerable: !0,
                    configurable: !0,
                    writable: !0,
                    value: [{
                        key: "seriesColor",
                        name: this.root.language.translateAny("Color"),
                        type: "color"
                    }, {
                        key: "useVolume",
                        name: this.root.language.translateAny("Use Volume"),
                        type: "checkbox"
                    }]
                })
            }
            _afterNew() {
                this._themeTags.push("accumulationdistribution"),
                super._afterNew(),
                this.yAxis.set("numberFormat", "#.###a")
            }
            _createSeries() {
                return this.panel.series.push(w.e.new(this._root, {
                    themeTags: ["indicator"],
                    xAxis: this.xAxis,
                    yAxis: this.yAxis,
                    valueXField: "valueX",
                    valueYField: "ad",
                    stroke: this.get("seriesColor"),
                    fill: void 0
                }))
            }
            _prepareChildren() {
                const e = "useVolume";
                this.isDirty(e) && (this.markDataDirty(),
                this.setCustomData(e, this.get(e) ? "Y" : "N")),
                super._prepareChildren()
            }
            prepareData() {
                if (this.series) {
                    const e = this.get("stockSeries").dataItems
                      , t = this.get("volumeSeries");
                    this.setRaw("field", "close");
                    let i = 0
                      , s = this._getDataArray(e)
                      , a = 0
                      , n = this.get("useVolume");
                    P.each(e, (e => {
                        let o = e.get("valueY");
                        if (null != o) {
                            let r = e.get("lowValueY", o)
                              , l = e.get("highValueY", o)
                              , c = 1;
                            if (t && n) {
                                const e = t.dataItems[i];
                                e && (c = e.get("valueY", 1))
                            }
                            let h = (o - r - (l - o)) / (l - r);
                            l == r && (h = 0);
                            let d = a + h * c;
                            s[i].ad = d,
                            a = d
                        }
                        i++
                    }
                    )),
                    this.series.data.setAll(s)
                }
            }
        }
        Object.defineProperty(ue, "className", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: "AccumulationDistribution"
        }),
        Object.defineProperty(ue, "classNames", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: ee.classNames.concat([ue.className])
        });
        class ge extends ee {
            constructor() {
                super(...arguments),
                Object.defineProperty(this, "_editableSettings", {
                    enumerable: !0,
                    configurable: !0,
                    writable: !0,
                    value: [{
                        key: "positiveColor",
                        name: this.root.language.translateAny("Positive color"),
                        type: "color"
                    }, {
                        key: "negativeColor",
                        name: this.root.language.translateAny("Negative color"),
                        type: "color"
                    }, {
                        key: "limitMoveValue",
                        name: this.root.language.translateAny("Limit move value"),
                        type: "number"
                    }]
                }),
                Object.defineProperty(this, "_axisRange", {
                    enumerable: !0,
                    configurable: !0,
                    writable: !0,
                    value: void 0
                }),
                Object.defineProperty(this, "_axisRangeDI", {
                    enumerable: !0,
                    configurable: !0,
                    writable: !0,
                    value: void 0
                })
            }
            _afterNew() {
                this._themeTags.push("accumulativeswingindex"),
                super._afterNew()
            }
            _createSeries() {
                const e = this.panel.series.push(w.e.new(this._root, {
                    themeTags: ["indicator"],
                    xAxis: this.xAxis,
                    yAxis: this.yAxis,
                    valueXField: "valueX",
                    valueYField: "asi"
                }))
                  , t = this.yAxis.makeDataItem({});
                return this._axisRangeDI = t,
                t.set("value", 0),
                t.set("endValue", -100),
                this._axisRange = e.createAxisRange(t),
                this.yAxis.onPrivate("min", (e => {
                    t.set("endValue", e)
                }
                )),
                e
            }
            _prepareChildren() {
                const e = "limitMoveValue";
                this.isDirty(e) && (this.setCustomData(e, this.get(e)),
                this.markDataDirty());
                const t = this.series;
                if (this.isDirty("positiveColor")) {
                    let e = this.get("positiveColor");
                    t.setAll({
                        fill: e,
                        stroke: e
                    })
                }
                if (this.isDirty("negativeColor")) {
                    let e = this.get("negativeColor")
                      , t = this._axisRange;
                    if (t) {
                        const i = t.fills;
                        i && i.template.set("fill", e);
                        const s = t.strokes;
                        s && s.template.set("stroke", e)
                    }
                }
                super._prepareChildren()
            }
            prepareData() {
                if (this.series) {
                    const e = this.get("stockSeries").dataItems;
                    this.setRaw("field", "close");
                    let t = this._getDataArray(e)
                      , i = this.get("limitMoveValue", .5)
                      , s = 0
                      , a = this.get("negativeColor", u.Il.fromHex(16711680)).toCSSHex()
                      , n = this.get("positiveColor", u.Il.fromHex(65280)).toCSSHex();
                    if (e.length > 2) {
                        t[0].asi = 0,
                        t[0].swingColor = n;
                        for (let o = 1, r = e.length; o < r; o++) {
                            const r = e[o]
                              , l = e[o - 1];
                            let c = r.get("valueY");
                            if (L.isNumber(c)) {
                                let e = l.get("valueY", c)
                                  , h = r.get("highValueY", c)
                                  , d = r.get("lowValueY", c)
                                  , u = r.get("openValueY", c)
                                  , g = l.get("openValueY", c)
                                  , p = h - d
                                  , m = Math.abs(h - e)
                                  , f = Math.abs(d - e)
                                  , b = Math.max(m, f, p)
                                  , v = 0;
                                e > h && (v = m),
                                e < d && (v = f);
                                let y = Math.max(m, f)
                                  , _ = 50 * (c - e + (c - u) / 2 + (e - g) / 4) / (b - v / 2 + Math.abs(e - g) / 4) * y / i;
                                L.isNumber(_) && (s += _);
                                let w = n;
                                s < 0 && (w = a),
                                t[o].asi = s,
                                t[o].swingColor = w
                            }
                        }
                    }
                    this.series.data.setAll(t)
                }
            }
        }
        Object.defineProperty(ge, "className", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: "AccumulativeSwingIndex"
        }),
        Object.defineProperty(ge, "classNames", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: ee.classNames.concat([ge.className])
        });
        class pe extends ee {
            constructor() {
                super(...arguments),
                Object.defineProperty(this, "_editableSettings", {
                    enumerable: !0,
                    configurable: !0,
                    writable: !0,
                    value: [{
                        key: "period",
                        name: this.root.language.translateAny("Period"),
                        type: "number"
                    }, {
                        key: "upColor",
                        name: this.root.language.translateAny("Aroon up"),
                        type: "color"
                    }, {
                        key: "downColor",
                        name: this.root.language.translateAny("Aroon down"),
                        type: "color"
                    }]
                })
            }
            _createSeries() {
                return this.panel.series.push(w.e.new(this._root, {
                    themeTags: ["indicator"],
                    xAxis: this.xAxis,
                    yAxis: this.yAxis,
                    valueXField: "valueX",
                    valueYField: "up",
                    fill: void 0
                }))
            }
            _afterNew() {
                this._themeTags.push("aroon"),
                super._afterNew(),
                this.downSeries = this.panel.series.push(w.e.new(this._root, {
                    themeTags: ["indicator"],
                    xAxis: this.xAxis,
                    yAxis: this.yAxis,
                    valueXField: "valueX",
                    valueYField: "down",
                    fill: void 0
                })),
                this.yAxis.setAll({
                    min: -1,
                    max: 101,
                    strictMinMax: !0,
                    numberFormat: "#'%'"
                })
            }
            _updateChildren() {
                super._updateChildren();
                const e = "upColor";
                if (this.isDirty(e)) {
                    let t = this.get(e, u.Il.fromHex(65280));
                    this._updateSeriesColor(this.series, t),
                    this.setCustomData(e, t)
                }
                const t = "downColor";
                if (this.isDirty(t)) {
                    let e = this.get(t, u.Il.fromHex(16711680));
                    this._updateSeriesColor(this.downSeries, e),
                    this.setCustomData(t, e)
                }
            }
            prepareData() {
                if (this.series) {
                    this.set("field", "close");
                    const e = this.get("stockSeries").dataItems;
                    let t = this._getDataArray(e)
                      , i = this.get("period", 14)
                      , s = 0;
                    P.each(t, (t => {
                        let a = -1 / 0
                          , n = 1 / 0
                          , o = 0
                          , r = 0;
                        for (let t = Math.max(0, s - i); t <= s; t++) {
                            let i = e[t].get("highValueY", 0);
                            i >= a && (a = i,
                            r = t);
                            let s = e[t].get("lowValueY", 0);
                            s <= n && (n = s,
                            o = t)
                        }
                        t.up = (i - (s - r)) / i * 100,
                        t.down = (i - (s - o)) / i * 100,
                        s++
                    }
                    )),
                    this.series.data.setAll(t),
                    this.downSeries.data.setAll(t)
                }
            }
        }
        Object.defineProperty(pe, "className", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: "Aroon"
        }),
        Object.defineProperty(pe, "classNames", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: ee.classNames.concat([pe.className])
        });
        class me extends ee {
            constructor() {
                super(...arguments),
                Object.defineProperty(this, "signalSeries", {
                    enumerable: !0,
                    configurable: !0,
                    writable: !0,
                    value: void 0
                }),
                Object.defineProperty(this, "differenceSeries", {
                    enumerable: !0,
                    configurable: !0,
                    writable: !0,
                    value: void 0
                }),
                Object.defineProperty(this, "_editableSettings", {
                    enumerable: !0,
                    configurable: !0,
                    writable: !0,
                    value: [{
                        key: "fastPeriod",
                        name: this.root.language.translateAny("Fast MA period"),
                        type: "number"
                    }, {
                        key: "slowPeriod",
                        name: this.root.language.translateAny("Slow MA period"),
                        type: "number"
                    }, {
                        key: "signalPeriod",
                        name: this.root.language.translateAny("Signal period"),
                        type: "number"
                    }, {
                        key: "seriesColor",
                        name: this.root.language.translateAny("MACD"),
                        type: "color"
                    }, {
                        key: "signalColor",
                        name: this.root.language.translateAny("Signal"),
                        type: "color"
                    }, {
                        key: "increasingColor",
                        name: this.root.language.translateAny("Increasing"),
                        type: "color"
                    }, {
                        key: "decreasingColor",
                        name: this.root.language.translateAny("Decreasing"),
                        type: "color"
                    }]
                })
            }
            _createSeries() {
                return this.panel.series.push(w.e.new(this._root, {
                    themeTags: ["indicator"],
                    xAxis: this.xAxis,
                    yAxis: this.yAxis,
                    valueXField: "valueX",
                    valueYField: "macd",
                    groupDataDisabled: !0,
                    stroke: this.get("seriesColor"),
                    fill: void 0
                }))
            }
            _afterNew() {
                this._themeTags.push("macd"),
                super._afterNew();
                const e = this.panel;
                if (e) {
                    const t = e.series.push(w.e.new(this._root, {
                        valueXField: "valueX",
                        valueYField: "signal",
                        xAxis: this.xAxis,
                        yAxis: this.yAxis,
                        groupDataDisabled: !0,
                        themeTags: ["indicator", "signal"]
                    }));
                    this.signalSeries = t;
                    const i = e.series.push(re.d.new(this._root, {
                        valueXField: "valueX",
                        valueYField: "difference",
                        xAxis: this.xAxis,
                        yAxis: this.yAxis,
                        groupDataDisabled: !0,
                        themeTags: ["indicator", "difference"]
                    }));
                    this.differenceSeries = i
                }
            }
            _prepareChildren() {
                (this.isDirty("fastPeriod") || this.isDirty("slowPeriod") || this.isDirty("signalPeriod")) && (this.markDataDirty(),
                this.setCustomData("fastPeriod", this.get("fastPeriod")),
                this.setCustomData("slowPeriod", this.get("slowPeriod")),
                this.setCustomData("signalPeriod", this.get("signalPeriod"))),
                super._prepareChildren()
            }
            _updateChildren() {
                if (super._updateChildren(),
                this.isDirty("increasingColor") || this.isDirty("decreasingColor")) {
                    const e = this.differenceSeries.columns.template
                      , t = this.get("increasingColor")
                      , i = this.get("decreasingColor");
                    e.states.create("riseFromPrevious", {
                        fill: t,
                        stroke: t
                    }),
                    e.states.create("dropFromPrevious", {
                        fill: i,
                        stroke: i
                    }),
                    this._dataDirty = !0
                }
                this.isDirty("signalColor") && this._updateSeriesColor(this.signalSeries, this.get("signalColor"), "signalColor");
                const e = this.series.dataItem;
                if (e) {
                    const t = e.dataContext;
                    if (t) {
                        t.fastPeriod = this.get("fastPeriod"),
                        t.slowPeriod = this.get("slowPeriod"),
                        t.signalPeriod = this.get("signalPeriod");
                        const e = this.get("seriesColor");
                        e && (t.seriesColor = e.toCSSHex());
                        const i = this.get("signalColor");
                        i && (t.signalColor = i.toCSSHex())
                    }
                }
            }
            prepareData() {
                if (this.series) {
                    const e = this.get("stockSeries").dataItems;
                    let t = this._getDataArray(e)
                      , i = this.get("fastPeriod", 12);
                    this._ema(t, i, "value_y", "emaFast"),
                    i = this.get("slowPeriod", 26),
                    this._ema(t, i, "value_y", "emaSlow"),
                    P.each(t, (e => {
                        let t = e.emaFast
                          , i = e.emaSlow;
                        null != t && null != i && (e.macd = t - i)
                    }
                    )),
                    i = this.get("signalPeriod", 9),
                    this._ema(t, i, "macd", "signal");
                    const s = this.get("increasingColor", (0,
                    u.$_)(65280)).toCSSHex()
                      , a = this.get("decreasingColor", (0,
                    u.$_)(16711680)).toCSSHex();
                    let n = -1 / 0;
                    P.each(t, (e => {
                        let t = e.macd
                          , i = e.signal;
                        if (null != t && null != i) {
                            let o = t - i;
                            e.difference = o;
                            let r = s;
                            o < n && (r = a),
                            e.differenceColor = r,
                            n = o
                        }
                    }
                    )),
                    this.differenceSeries.data.setAll(t),
                    this.signalSeries.data.setAll(t),
                    this.series.data.setAll(t)
                }
            }
        }
        Object.defineProperty(me, "className", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: "MACD"
        }),
        Object.defineProperty(me, "classNames", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: ee.classNames.concat([me.className])
        });
        class fe extends H {
            constructor() {
                super(...arguments),
                Object.defineProperty(this, "_editableSettings", {
                    enumerable: !0,
                    configurable: !0,
                    writable: !0,
                    value: [{
                        key: "period",
                        name: this.root.language.translateAny("Slow period"),
                        type: "number"
                    }, {
                        key: "seriesColor",
                        name: this.root.language.translateAny("Slow period"),
                        type: "color"
                    }, {
                        key: "fastPeriod",
                        name: this.root.language.translateAny("Fast period"),
                        type: "number"
                    }, {
                        key: "fastColor",
                        name: this.root.language.translateAny("Fast period"),
                        type: "color"
                    }]
                })
            }
            _prepareChildren() {
                (this.isDirty("period") || this.isDirty("fastPeriod")) && this.markDataDirty(),
                this.isDirty("fastColor") && this._updateSeriesColor(this.fastSeries, this.get("fastColor"), "fastColor"),
                this.setCustomData("fastPeriod", this.get("fastPeriod")),
                super._prepareChildren()
            }
            _dispose() {
                this.fastSeries.dispose(),
                super._dispose()
            }
            _afterNew() {
                super._afterNew();
                const e = this.get("stockSeries")
                  , t = e.chart;
                if (t) {
                    const i = t.series.push(w.e.new(this._root, {
                        valueXField: "valueX",
                        valueYField: "ma",
                        groupDataDisabled: !0,
                        calculateAggregates: !0,
                        xAxis: e.get("xAxis"),
                        yAxis: e.get("yAxis"),
                        themeTags: ["indicator", "macross"],
                        name: "MA"
                    }));
                    i.setPrivate("baseValueSeries", e),
                    this.series = i;
                    const s = t.series.push(w.e.new(this._root, {
                        valueXField: "valueX",
                        valueYField: "maf",
                        groupDataDisabled: !0,
                        calculateAggregates: !0,
                        xAxis: e.get("xAxis"),
                        yAxis: e.get("yAxis"),
                        stroke: this.get("fastColor"),
                        themeTags: ["indicator", "macross", "fast"]
                    }));
                    s.setPrivate("baseValueSeries", e),
                    this.fastSeries = s,
                    this._handleLegend(i)
                }
            }
            prepareData() {
                if (this.series) {
                    let e = this.get("period", 9)
                      , t = this.get("fastPeriod", 21);
                    const i = this.get("stockSeries").dataItems;
                    let s = this._getDataArray(i);
                    this._sma(s, e, "value_y", "ma"),
                    this._sma(s, t, "value_y", "maf"),
                    this.series.data.setAll(s),
                    this.fastSeries.data.setAll(s)
                }
            }
        }
        Object.defineProperty(fe, "className", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: "MACross"
        }),
        Object.defineProperty(fe, "classNames", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: H.classNames.concat([fe.className])
        });
        class be extends ee {
            constructor() {
                super(...arguments),
                Object.defineProperty(this, "_editableSettings", {
                    enumerable: !0,
                    configurable: !0,
                    writable: !0,
                    value: [{
                        key: "period",
                        name: this.root.language.translateAny("Period"),
                        type: "number"
                    }, {
                        key: "seriesColor",
                        name: this.root.language.translateAny("Color"),
                        type: "color"
                    }]
                })
            }
            _afterNew() {
                this._themeTags.push("chaikinmoneyflow"),
                super._afterNew()
            }
            _createSeries() {
                return this.panel.series.push(w.e.new(this._root, {
                    themeTags: ["indicator"],
                    xAxis: this.xAxis,
                    yAxis: this.yAxis,
                    valueXField: "valueX",
                    valueYField: "cmf",
                    stroke: this.get("seriesColor"),
                    fill: void 0
                }))
            }
            prepareData() {
                if (this.series) {
                    const e = this.get("stockSeries").dataItems
                      , t = this.get("volumeSeries");
                    this.setRaw("field", "close");
                    let i = this._getDataArray(e)
                      , s = 0;
                    P.each(e, (e => {
                        let a = e.get("valueY");
                        if (null != a) {
                            let n = e.get("lowValueY", a)
                              , o = e.get("highValueY", a)
                              , r = 1;
                            const l = t.dataItems[s];
                            l && (r = l.get("valueY", 1));
                            let c = (a - n - (o - a)) / (o - n);
                            o == n && (c = 0);
                            let h = c * r;
                            i[s].mfv = h,
                            i[s].volume = r
                        }
                        s++
                    }
                    ));
                    const a = this.get("period", 20);
                    s = 0,
                    P.each(i, (e => {
                        if (s >= a - 1) {
                            let t = 0
                              , n = 0;
                            for (let e = s; e > s - a; e--)
                                t += i[e].mfv,
                                n += i[e].volume;
                            0 != n && (e.cmf = t / n)
                        }
                        s++
                    }
                    )),
                    this.series.data.setAll(i)
                }
            }
        }
        Object.defineProperty(be, "className", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: "ChaikinMoneyFlow"
        }),
        Object.defineProperty(be, "classNames", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: ee.classNames.concat([be.className])
        });
        class ve extends ee {
            constructor() {
                super(...arguments),
                Object.defineProperty(this, "_editableSettings", {
                    enumerable: !0,
                    configurable: !0,
                    writable: !0,
                    value: [{
                        key: "period",
                        name: this.root.language.translateAny("Fast period"),
                        type: "number"
                    }, {
                        key: "slowPeriod",
                        name: this.root.language.translateAny("Slow period"),
                        type: "number"
                    }, {
                        key: "seriesColor",
                        name: this.root.language.translateAny("Color"),
                        type: "color"
                    }]
                })
            }
            _afterNew() {
                this._themeTags.push("chaikinoscillator"),
                super._afterNew(),
                this.yAxis.set("numberFormat", "#.###a")
            }
            _createSeries() {
                return this.panel.series.push(w.e.new(this._root, {
                    themeTags: ["indicator"],
                    xAxis: this.xAxis,
                    yAxis: this.yAxis,
                    valueXField: "valueX",
                    valueYField: "cmf",
                    stroke: this.get("seriesColor"),
                    fill: void 0
                }))
            }
            _prepareChildren() {
                this.isDirty("slowPeriod") && (this.markDataDirty(),
                this.setCustomData("slowPeriod", this.get("slowPeriod"))),
                super._prepareChildren()
            }
            prepareData() {
                if (this.series) {
                    const e = this.get("stockSeries").dataItems
                      , t = this.get("volumeSeries");
                    this.setRaw("field", "close");
                    let i = 0
                      , s = this._getDataArray(e)
                      , a = 0;
                    P.each(e, (e => {
                        let n = e.get("valueY");
                        if (null != n) {
                            let o = e.get("lowValueY", n)
                              , r = e.get("highValueY", n)
                              , l = 1;
                            const c = t.dataItems[i];
                            c && (l = c.get("valueY", 1));
                            let h = (n - o - (r - n)) / (r - o);
                            r == o && (h = 0);
                            let d = a + h * l;
                            s[i].ad = d,
                            a = d
                        }
                        i++
                    }
                    )),
                    this._ema(s, this.get("slowPeriod", 10), "ad", "emaSlow"),
                    this._ema(s, this.get("period", 3), "ad", "emaFast"),
                    P.each(s, (e => {
                        const t = e.emaSlow
                          , i = e.emaFast;
                        null != t && null != i && (e.cmf = i - t)
                    }
                    )),
                    this.series.data.setAll(s)
                }
            }
        }
        Object.defineProperty(ve, "className", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: "ChaikinOscillator"
        }),
        Object.defineProperty(ve, "classNames", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: ee.classNames.concat([ve.className])
        });
        class ye extends ee {
            constructor() {
                super(...arguments),
                Object.defineProperty(this, "_editableSettings", {
                    enumerable: !0,
                    configurable: !0,
                    writable: !0,
                    value: [{
                        key: "period",
                        name: this.root.language.translateAny("Period"),
                        type: "number"
                    }, {
                        key: "seriesColor",
                        name: this.root.language.translateAny("Color"),
                        type: "color"
                    }]
                })
            }
            _afterNew() {
                this._themeTags.push("bullbearpower"),
                super._afterNew()
            }
            _createSeries() {
                return this.panel.series.push(w.e.new(this._root, {
                    themeTags: ["indicator"],
                    xAxis: this.xAxis,
                    yAxis: this.yAxis,
                    valueXField: "valueX",
                    valueYField: "bbp",
                    stroke: this.get("seriesColor"),
                    fill: void 0
                }))
            }
            prepareData() {
                if (this.series) {
                    const e = this.get("stockSeries").dataItems;
                    this.setRaw("field", "close");
                    let t = 0
                      , i = this._getDataArray(e)
                      , s = this.get("period", 3);
                    this._ema(i, s, "value_y", "ema"),
                    P.each(e, (e => {
                        if (t >= s - 1) {
                            let s = e.get("valueY");
                            if (null != s) {
                                let a = e.get("lowValueY", s)
                                  , n = e.get("highValueY", s)
                                  , o = i[t].ema;
                                i[t].bbp = n - o + a - o
                            }
                        }
                        t++
                    }
                    )),
                    this.series.data.setAll(i)
                }
            }
        }
        Object.defineProperty(ye, "className", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: "BullBearPower"
        }),
        Object.defineProperty(ye, "classNames", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: ee.classNames.concat([ye.className])
        });
        class _e extends ee {
            constructor() {
                super(...arguments),
                Object.defineProperty(this, "_editableSettings", {
                    enumerable: !0,
                    configurable: !0,
                    writable: !0,
                    value: [{
                        key: "seriesColor",
                        name: this.root.language.translateAny("Color"),
                        type: "color"
                    }]
                })
            }
            _afterNew() {
                this._themeTags.push("onbalancevolume"),
                super._afterNew(),
                this.yAxis.set("numberFormat", "#.###a")
            }
            _createSeries() {
                return this.panel.series.push(w.e.new(this._root, {
                    themeTags: ["indicator"],
                    xAxis: this.xAxis,
                    yAxis: this.yAxis,
                    valueXField: "valueX",
                    valueYField: "obv",
                    stroke: this.get("seriesColor"),
                    fill: void 0
                }))
            }
            prepareData() {
                if (this.series) {
                    this.setRaw("field", "close");
                    const e = this.get("stockSeries").dataItems
                      , t = this.get("volumeSeries");
                    let i = this._getDataArray(e)
                      , s = 0
                      , a = i.length;
                    if (t && a > 1) {
                        let e = i[0].value_y;
                        for (let n = 1; n < a; n++) {
                            const a = i[n];
                            let o = a.value_y;
                            if (null != o) {
                                const i = t.dataItems[n];
                                let r = 0;
                                i && (r = i.get("valueY", 1));
                                let l = s;
                                o > e ? l += r : o < e && (l -= r),
                                a.obv = l,
                                s = l,
                                e = o
                            }
                        }
                    }
                    this.series.data.setAll(i)
                }
            }
        }
        Object.defineProperty(_e, "className", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: "OnBalanceVolume"
        }),
        Object.defineProperty(_e, "classNames", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: ee.classNames.concat([_e.className])
        });
        class we extends ee {
            constructor() {
                super(...arguments),
                Object.defineProperty(this, "_editableSettings", {
                    enumerable: !0,
                    configurable: !0,
                    writable: !0,
                    value: [{
                        key: "seriesColor",
                        name: this.root.language.translateAny("Color"),
                        type: "color"
                    }]
                })
            }
            _afterNew() {
                this._themeTags.push("pvt"),
                super._afterNew(),
                this.yAxis.set("numberFormat", "#.###a")
            }
            _createSeries() {
                return this.panel.series.push(w.e.new(this._root, {
                    themeTags: ["indicator"],
                    xAxis: this.xAxis,
                    yAxis: this.yAxis,
                    valueXField: "valueX",
                    valueYField: "pvt",
                    stroke: this.get("seriesColor"),
                    fill: void 0
                }))
            }
            prepareData() {
                if (this.series) {
                    this.setRaw("field", "close");
                    const e = this.get("stockSeries").dataItems
                      , t = this.get("volumeSeries");
                    let i = this._getDataArray(e)
                      , s = 0
                      , a = i.length;
                    if (t && a > 1) {
                        let e = i[0].value_y;
                        for (let n = 1; n < a; n++) {
                            const a = i[n];
                            let o = a.value_y;
                            if (null != o && L.isNumber(o) && 0 != o) {
                                const i = t.dataItems[n];
                                let r = 0;
                                i && (r = i.get("valueY", 1));
                                let l = (o - e) / e * r + s;
                                a.pvt = l,
                                s = l,
                                e = o
                            }
                        }
                    }
                    this.series.data.setAll(i)
                }
            }
        }
        Object.defineProperty(we, "className", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: "PVT"
        }),
        Object.defineProperty(we, "classNames", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: ee.classNames.concat([we.className])
        });
        class xe extends ie {
            constructor() {
                super(...arguments),
                Object.defineProperty(this, "slowSeries", {
                    enumerable: !0,
                    configurable: !0,
                    writable: !0,
                    value: void 0
                })
            }
            _afterNew() {
                this._themeTags.push("stochastic"),
                super._afterNew(),
                this._editableSettings.unshift({
                    key: "period",
                    name: this.root.language.translateAny("Period"),
                    type: "number"
                }, {
                    key: "seriesColor",
                    name: this.root.language.translateAny("Period"),
                    type: "color"
                }, {
                    key: "kSmoothing",
                    name: this.root.language.translateAny("K period"),
                    type: "number"
                }, {
                    key: "dSmoothing",
                    name: this.root.language.translateAny("SMA period"),
                    type: "number"
                }, {
                    key: "slowColor",
                    name: this.root.language.translateAny("SMA period"),
                    type: "color"
                }),
                this.yAxis.setAll({
                    min: 0,
                    max: 100,
                    strictMinMax: !0
                });
                const e = this.panel.series.push(w.e.new(this._root, {
                    valueXField: "valueX",
                    valueYField: "slow",
                    xAxis: this.xAxis,
                    yAxis: this.yAxis,
                    groupDataDisabled: !0,
                    themeTags: ["indicator", "slow"]
                }));
                this.slowSeries = e
            }
            _updateChildren() {
                (this.isDirty("kSmoothing") || this.isDirty("dSmoothing")) && (this.markDataDirty(),
                this.setCustomData("dSmoothing", this.get("dSmoothing")),
                this.setCustomData("kSmoothing", this.get("kSmoothing"))),
                super._updateChildren(),
                this.isDirty("slowColor") && this._updateSeriesColor(this.slowSeries, this.get("slowColor"), "slowColor")
            }
            prepareData() {
                if (this.series) {
                    const e = this.get("stockSeries").dataItems;
                    let t = this.get("period", 14)
                      , i = []
                      , s = 0;
                    P.each(e, (a => {
                        const n = a.get("valueX");
                        let o;
                        if (s >= t - 1) {
                            let i = this._getValue(a);
                            if (null != i) {
                                let a = 1 / 0
                                  , n = -a;
                                for (let i = s; i > s - t; i--) {
                                    let t = e[i].get("highValueY")
                                      , s = e[i].get("lowValueY");
                                    null != t && null != s && (s < a && (a = s),
                                    t > n && (n = t))
                                }
                                o = (i - a) / (n - a) * 100
                            }
                        }
                        null == o || L.isNaN(o) ? i.push({
                            valueX: n
                        }) : i.push({
                            valueX: n,
                            value_y: o
                        }),
                        s++
                    }
                    )),
                    t = this.get("kSmoothing", 1),
                    this._sma(i, t, "value_y", "valueS"),
                    t = this.get("dSmoothing", 3),
                    this._sma(i, t, "valueS", "slow"),
                    this.series.data.setAll(i),
                    this.slowSeries.data.setAll(i)
                }
            }
        }
        Object.defineProperty(xe, "className", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: "StochasticOscillator"
        }),
        Object.defineProperty(xe, "classNames", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: ie.classNames.concat([xe.className])
        });
        class ke extends ie {
            constructor() {
                super(...arguments),
                Object.defineProperty(this, "emaSeries", {
                    enumerable: !0,
                    configurable: !0,
                    writable: !0,
                    value: void 0
                })
            }
            _afterNew() {
                this._themeTags.push("stochasticmomentum"),
                super._afterNew(),
                this._editableSettings.unshift({
                    key: "period",
                    name: this.root.language.translateAny("K period"),
                    type: "number"
                }, {
                    key: "seriesColor",
                    name: this.root.language.translateAny("K period"),
                    type: "color"
                }, {
                    key: "dPeriod",
                    name: this.root.language.translateAny("D period"),
                    type: "number"
                }, {
                    key: "emaPeriod",
                    name: this.root.language.translateAny("EMA period"),
                    type: "number"
                }, {
                    key: "emaColor",
                    name: this.root.language.translateAny("EMA period"),
                    type: "color"
                });
                const e = this.panel.series.push(w.e.new(this._root, {
                    valueXField: "valueX",
                    valueYField: "ema",
                    xAxis: this.xAxis,
                    yAxis: this.yAxis,
                    groupDataDisabled: !0,
                    themeTags: ["indicator", "ema"]
                }));
                this.emaSeries = e
            }
            _updateChildren() {
                (this.isDirty("dPeriod") || this.isDirty("emaPeriod")) && (this.markDataDirty(),
                this.setCustomData("dPeriod", this.get("dPeriod")),
                this.setCustomData("emaPeriod", this.get("emaPeriod"))),
                super._updateChildren(),
                this.isDirty("emaColor") && this._updateSeriesColor(this.emaSeries, this.get("emaColor"), "emaColor")
            }
            prepareData() {
                if (this.series) {
                    const e = this.get("stockSeries").dataItems;
                    let t = this.get("period", 10)
                      , i = []
                      , s = 0;
                    P.each(e, (a => {
                        const n = a.get("valueX");
                        let o, r, l = 1 / 0, c = -l;
                        if (s >= t - 1) {
                            let i = this._getValue(a);
                            if (null != i) {
                                for (let i = s; i > s - t; i--) {
                                    let t = e[i].get("highValueY")
                                      , s = e[i].get("lowValueY");
                                    null != t && null != s && (s < l && (l = s),
                                    t > c && (c = t))
                                }
                                o = i - (c + l) / 2,
                                r = c - l
                            }
                        }
                        null == o || L.isNaN(o) || 0 === o ? i.push({
                            valueX: n
                        }) : i.push({
                            valueX: n,
                            hhh: o,
                            dhl: r
                        }),
                        s++
                    }
                    ));
                    let a = this.get("dPeriod", 3);
                    this._ema(i, a, "hhh", "hhh_ema"),
                    this._ema(i, a, "hhh_ema", "hhh_ema2"),
                    this._ema(i, a, "dhl", "dhl_ema"),
                    this._ema(i, a, "dhl_ema", "dhl_ema2"),
                    P.each(i, (e => {
                        let t = e.hhh_ema2
                          , i = e.dhl_ema2;
                        null != t && null != i && (e.valueS = e.hhh_ema2 / e.dhl_ema2 * 200)
                    }
                    ));
                    let n = this.get("emaPeriod", 3);
                    this._sma(i, n, "valueS", "ema"),
                    this.series.data.setAll(i),
                    this.emaSeries.data.setAll(i)
                }
            }
        }
        Object.defineProperty(ke, "className", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: "StochasticMomentumIndex"
        }),
        Object.defineProperty(ke, "classNames", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: ie.classNames.concat([ke.className])
        });
        class Ce extends ee {
            constructor() {
                super(...arguments),
                Object.defineProperty(this, "_editableSettings", {
                    enumerable: !0,
                    configurable: !0,
                    writable: !0,
                    value: [{
                        key: "increasingColor",
                        name: this.root.language.translateAny("Increasing"),
                        type: "color"
                    }, {
                        key: "decreasingColor",
                        name: this.root.language.translateAny("Decreasing"),
                        type: "color"
                    }]
                })
            }
            _afterNew() {
                this._themeTags.push("awesomeoscillator"),
                super._afterNew()
            }
            _createSeries() {
                return this.panel.series.push(re.d.new(this._root, {
                    themeTags: ["indicator"],
                    xAxis: this.xAxis,
                    yAxis: this.yAxis,
                    valueXField: "valueX",
                    valueYField: "ao",
                    stroke: this.get("seriesColor"),
                    fill: void 0
                }))
            }
            _updateChildren() {
                super._updateChildren();
                const e = "increasingColor"
                  , t = "decreasingColor";
                if (this.isDirty(e) || this.isDirty(t)) {
                    const i = this.series.columns.template
                      , s = this.get(e)
                      , a = this.get(t);
                    i.states.create("riseFromPrevious", {
                        fill: s,
                        stroke: s
                    }),
                    i.states.create("dropFromPrevious", {
                        fill: a,
                        stroke: a
                    }),
                    this.markDataDirty()
                }
            }
            prepareData() {
                if (this.series) {
                    this.set("field", "hl/2");
                    const e = this.get("stockSeries").dataItems;
                    let t = this.get("decreasingColor", u.Il.fromHex(16711680)).toCSSHex()
                      , i = this.get("increasingColor", u.Il.fromHex(65280)).toCSSHex()
                      , s = this._getDataArray(e)
                      , a = 5;
                    this._sma(s, 5, "value_y", "sma5"),
                    a = 34,
                    this._sma(s, 34, "value_y", "sma34");
                    let n = -1 / 0
                      , o = 0;
                    P.each(s, (e => {
                        if (o++,
                        o >= a) {
                            let s = e.sma5 - e.sma34
                              , a = i;
                            s < n && (a = t),
                            e.ao = s,
                            e.oscillatorColor = a,
                            n = s
                        }
                    }
                    )),
                    this.series.data.setAll(s)
                }
            }
        }
        Object.defineProperty(Ce, "className", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: "AwesomeOscillator"
        }),
        Object.defineProperty(Ce, "classNames", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: ee.classNames.concat([Ce.className])
        });
        class De extends ie {
            _afterNew() {
                this._themeTags.push("williamsr"),
                super._afterNew(),
                this._editableSettings.unshift({
                    key: "period",
                    name: this.root.language.translateAny("Period"),
                    type: "number"
                }, {
                    key: "seriesColor",
                    name: this.root.language.translateAny("Period"),
                    type: "color"
                })
            }
            prepareData() {
                if (this.series) {
                    this.set("field", "close");
                    const e = this.get("stockSeries").dataItems;
                    let t = this._getDataArray(e)
                      , i = this.get("period", 14);
                    for (let s = 0, a = t.length; s < a; s++) {
                        const a = t[s];
                        let n = -1 / 0
                          , o = 1 / 0;
                        for (let t = Math.max(0, s - i); t <= s; t++) {
                            let i = e[t].get("highValueY", 0);
                            i >= n && (n = i);
                            let s = e[t].get("lowValueY", 0);
                            s <= o && (o = s)
                        }
                        n - o != 0 && (a.valueS = -100 * (n - a.value_y) / (n - o))
                    }
                    this.series.data.setAll(t)
                }
            }
        }
        Object.defineProperty(De, "className", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: "WilliamsR"
        }),
        Object.defineProperty(De, "classNames", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: ie.classNames.concat([De.className])
        });
        class Se extends ee {
            constructor() {
                super(...arguments),
                Object.defineProperty(this, "_editableSettings", {
                    enumerable: !0,
                    configurable: !0,
                    writable: !0,
                    value: [{
                        key: "increasingColor",
                        name: this.root.language.translateAny("Up volume"),
                        type: "color"
                    }, {
                        key: "decreasingColor",
                        name: this.root.language.translateAny("Down volume"),
                        type: "color"
                    }]
                })
            }
            _afterNew() {
                this._themeTags.push("volume"),
                super._afterNew(),
                this.yAxis.set("numberFormat", "#.###a")
            }
            _createSeries() {
                return this.panel.series.push(re.d.new(this._root, {
                    themeTags: ["indicator"],
                    xAxis: this.xAxis,
                    yAxis: this.yAxis,
                    valueXField: "valueX",
                    valueYField: "volume",
                    stroke: this.get("seriesColor"),
                    fill: void 0
                }))
            }
            _prepareChildren() {
                (this.isDirty("increasingColor") || this.isDirty("decreasingColor")) && this.markDataDirty(),
                super._prepareChildren()
            }
            prepareData() {
                if (this.series) {
                    const e = this.get("volumeSeries")
                      , t = this.get("stockChart");
                    if (e && t) {
                        const i = e.dataItems;
                        this.setRaw("field", "close");
                        let s = this.get("decreasingColor", u.Il.fromHex(16711680))
                          , a = this.get("increasingColor", u.Il.fromHex(65280))
                          , n = this._getDataArray(i);
                        P.each(n, (e => {
                            e.volume = e.value_y
                        }
                        )),
                        this.series.data.setAll(n),
                        P.each(this.series.dataItems, (e => {
                            e.dataContext.volumeColor = t.getVolumeColor(e, s, a)
                        }
                        ))
                    }
                }
            }
        }
        Object.defineProperty(Se, "className", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: "Volume"
        }),
        Object.defineProperty(Se, "classNames", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: ee.classNames.concat([Se.className])
        });
        class Pe extends H {
            constructor() {
                super(...arguments),
                Object.defineProperty(this, "_editableSettings", {
                    enumerable: !0,
                    configurable: !0,
                    writable: !0,
                    value: [{
                        key: "countType",
                        name: this.root.language.translateAny("Count"),
                        type: "dropdown",
                        options: [{
                            value: "rows",
                            text: this.root.language.translateAny("number of rows"),
                            extTarget: "count",
                            extTargetValue: 24,
                            extTargetMinValue: 1
                        }, {
                            value: "ticks",
                            text: this.root.language.translateAny("ticks per row"),
                            extTarget: "count",
                            extTargetValue: 1e3,
                            extTargetMinValue: 200
                        }]
                    }, {
                        key: "count",
                        name: this.root.language.translateAny("Count"),
                        type: "number",
                        minValue: 1
                    }, {
                        key: "valueArea",
                        name: this.root.language.translateAny("Value Area"),
                        type: "number"
                    }, {
                        key: "upColor",
                        name: this.root.language.translateAny("Up volume"),
                        type: "color"
                    }, {
                        key: "downColor",
                        name: this.root.language.translateAny("Down volume"),
                        type: "color"
                    }, {
                        key: "axisWidth",
                        name: this.root.language.translateAny("Width %"),
                        type: "number"
                    }]
                }),
                Object.defineProperty(this, "xAxis", {
                    enumerable: !0,
                    configurable: !0,
                    writable: !0,
                    value: void 0
                }),
                Object.defineProperty(this, "upSeries", {
                    enumerable: !0,
                    configurable: !0,
                    writable: !0,
                    value: void 0
                }),
                Object.defineProperty(this, "_previousColumn", {
                    enumerable: !0,
                    configurable: !0,
                    writable: !0,
                    value: void 0
                })
            }
            _afterNew() {
                super._afterNew();
                const e = this.get("volumeSeries")
                  , t = this.get("stockSeries");
                if (e) {
                    const e = t.chart
                      , i = this._root;
                    if (e) {
                        const s = t.get("yAxis");
                        if (void 0 !== s.getPrivate("step")) {
                            const e = 50 * s.getPrivate("step");
                            this._editableSettings[0].options[1].extTargetValue = e,
                            this._editableSettings[0].options[1].extTargetMinValue = .2 * e
                        }
                        s.onPrivate("step", (e => {
                            const t = 50 * e;
                            this._editableSettings[0].options[1].extTargetValue = t,
                            this._editableSettings[0].options[1].extTargetMinValue = .2 * t
                        }
                        ));
                        const a = t.get("xAxis");
                        a.on("start", ( () => {
                            this.markDataDirty()
                        }
                        )),
                        a.on("end", ( () => {
                            this.markDataDirty()
                        }
                        ));
                        const n = J.n.new(i, {});
                        n.grid.template.set("forceHidden", !0),
                        n.labels.template.set("forceHidden", !0),
                        this.xAxis = e.xAxes.push(Z.m.new(i, {
                            zoomable: !1,
                            strictMinMax: !0,
                            panX: !1,
                            panY: !1,
                            renderer: n
                        })),
                        s.get("renderer").get("opposite") && (n.set("inversed", !0),
                        this.xAxis.setAll({
                            x: (0,
                            h.aQ)(100),
                            centerX: (0,
                            h.aQ)(100)
                        })),
                        this.series = e.series.unshift(re.d.new(i, {
                            xAxis: this.xAxis,
                            yAxis: s,
                            snapTooltip: !1,
                            valueXField: "down",
                            openValueXField: "xOpen",
                            openValueYField: "yOpen",
                            valueYField: "y",
                            calculateAggregates: !0,
                            themeTags: ["indicator", "volumeprofile", "down"]
                        })),
                        this.upSeries = e.series.unshift(re.d.new(i, {
                            xAxis: this.xAxis,
                            yAxis: s,
                            snapTooltip: !1,
                            valueXField: "total",
                            openValueXField: "down",
                            openValueYField: "yOpen",
                            valueYField: "y",
                            calculateAggregates: !0,
                            themeTags: ["indicator", "volumeprofile", "up"]
                        })),
                        this.upSeries.setPrivate("doNotUpdateLegend", !0),
                        this.series.setPrivate("doNotUpdateLegend", !0),
                        this.upSeries.setPrivate("baseValueSeries", t),
                        this.series.setPrivate("baseValueSeries", t),
                        this._handleLegend(this.series),
                        this._addInteractivity(this.series),
                        this._addInteractivity(this.upSeries)
                    }
                }
            }
            _addInteractivity(e) {
                e.columns.template.events.on("pointerover", (e => {
                    let t = e.target.dataItem;
                    if (t) {
                        if (t.component == this.upSeries) {
                            if (t = this.series.dataItems[this.upSeries.dataItems.indexOf(t)],
                            t) {
                                const e = t.get("graphics");
                                e && (e.hover(),
                                this._previousColumn = e)
                            }
                        } else if (t = this.upSeries.dataItems[this.series.dataItems.indexOf(t)],
                        t) {
                            const e = t.get("graphics");
                            e && (e.hover(),
                            this._previousColumn = e)
                        }
                        this.series.updateLegendValue(t)
                    }
                }
                )),
                e.columns.template.events.on("pointerout", ( () => {
                    this.series.updateLegendValue(void 0),
                    this._previousColumn && this._previousColumn.unhover()
                }
                )),
                e.columns.template.adapters.add("fillOpacity", ( (e, t) => {
                    const i = t.dataItem;
                    if (i) {
                        const e = i.dataContext;
                        if (e && e.area)
                            return this.get("valueAreaOpacity", .7)
                    }
                    return e
                }
                ))
            }
            _updateChildren() {
                if (this.series) {
                    if (super._updateChildren(),
                    (this.isDirty("count") || this.isDirty("countType") || this.isDirty("valueArea")) && this.markDataDirty(),
                    this.isDirty("countType"))
                        if ("ticks" == this.get("countType")) {
                            const e = this.get("stockSeries").get("yAxis");
                            this._editableSettings[1].minValue = 50 * e.getPrivate("step") * .2
                        } else
                            this._editableSettings[1].minValue = 1;
                    if (this.isDirty("upColor")) {
                        const e = this.get("upColor");
                        this.upSeries.set("fill", e),
                        this.upSeries.set("stroke", e),
                        this.upSeries.columns.template.setAll({
                            fill: e,
                            stroke: e
                        }),
                        this.setCustomData("upColor", e)
                    }
                    if (this.isDirty("downColor")) {
                        const e = this.get("downColor");
                        this.series.set("fill", e),
                        this.series.set("stroke", e),
                        this.series.columns.template.setAll({
                            fill: e,
                            stroke: e
                        }),
                        this.setCustomData("downColor", e)
                    }
                    this.isDirty("axisWidth") && this.xAxis.set("width", (0,
                    h.aQ)(this.get("axisWidth", 40)))
                }
            }
            prepareData() {
                const e = this.get("volumeSeries")
                  , t = this.get("stockSeries");
                if (e && this.series) {
                    let i = e.getPrivate("adjustedStartIndex", e.startIndex())
                      , s = e.endIndex();
                    const a = this.get("count", 20)
                      , n = this.get("countType");
                    let o = 1
                      , r = 1 / 0
                      , l = -1 / 0;
                    for (let e = i; e < s; e++) {
                        const i = t.dataItems[e];
                        if (i) {
                            const e = i.get("valueY");
                            L.isNumber(e) && (e < r && (r = e),
                            e > l && (l = e))
                        }
                    }
                    if (r != 1 / 0) {
                        let c;
                        "ticks" == n ? (o = a / 100,
                        r = Math.floor(r / o) * o,
                        l = Math.ceil(l / o) * o,
                        c = (l - r) / o) : (o = (l - r) / a,
                        c = a);
                        const h = []
                          , d = [];
                        for (let e = 0; e < c; e++)
                            h[e] = 0,
                            d[e] = 0;
                        let u;
                        for (let n = i; n < s; n++) {
                            const i = t.dataItems[n]
                              , s = e.dataItems[n];
                            if (i && s) {
                                const e = i.get("valueY")
                                  , t = s.get("valueY");
                                if (L.isNumber(e) && L.isNumber(t)) {
                                    let i = Math.floor((e - r) / o);
                                    i == a && (i = a - 1),
                                    L.isNumber(i) && (u && u.get("valueY", e) < e ? h[i] += t : d[i] += t)
                                }
                                u = i
                            }
                        }
                        const g = [];
                        let p = 0;
                        for (let e = 0; e < c; e++) {
                            let t = d[e] + h[e];
                            p += t,
                            g.push({
                                yOpen: r + e * o,
                                y: r + (e + 1) * o,
                                up: d[e],
                                down: h[e],
                                total: t,
                                xOpen: 0,
                                area: !1
                            })
                        }
                        let m = this.series.data.length;
                        if (m && m == g.length)
                            for (let e = 0; e < m; e++)
                                this.series.data.setIndex(e, g[e]);
                        else
                            this.series.data.setAll(g);
                        const f = [];
                        let b = 0
                          , v = 0;
                        for (let e = 0; e < c; e++) {
                            let t = d[e] + h[e];
                            f.push({
                                yOpen: r + e * o,
                                y: r + (e + 1) * o,
                                up: d[e],
                                down: h[e],
                                total: t,
                                area: !1
                            }),
                            t > b && (b = t,
                            v = e)
                        }
                        let y = p * this.get("valueArea", 70) / 100
                          , _ = b
                          , w = 1
                          , x = 1
                          , k = f.length;
                        for (f[v].area = !0,
                        g[v].area = !0; _ < y; ) {
                            let e = v + x
                              , t = 0;
                            e < k && (t += f[e].total);
                            let i = v - w
                              , s = 0;
                            if (i >= 0 && (s += f[i].total),
                            s <= t ? (_ += t,
                            e < k && (g[e].area = !0,
                            f[e].area = !0,
                            x++)) : (_ += s,
                            i >= 0 && (g[i].area = !0,
                            f[i].area = !0,
                            w++)),
                            0 == s && w++,
                            0 == t && x++,
                            w > k && x > k)
                                break
                        }
                        if (_ = Math.ceil(_),
                        m = this.upSeries.data.length,
                        m > 0 && m == f.length)
                            for (let e = 0; e < m; e++)
                                this.upSeries.data.setIndex(e, f[e]);
                        else
                            this.upSeries.data.setAll(f)
                    } else
                        this.upSeries.data.clear(),
                        this.series.data.clear()
                }
                this.series.columns.each((e => {
                    e._markDirtyKey("fillOpacity")
                }
                )),
                this.upSeries.columns.each((e => {
                    e._markDirtyKey("fillOpacity")
                }
                ))
            }
            _dispose() {
                super._dispose(),
                this.upSeries && this.upSeries.dispose(),
                this.xAxis && this.xAxis.dispose()
            }
        }
        Object.defineProperty(Pe, "className", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: "VolumeProfile"
        }),
        Object.defineProperty(Pe, "classNames", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: H.classNames.concat([Pe.className])
        });
        class Ae extends ie {
            _afterNew() {
                this._themeTags.push("commoditychannelindex"),
                super._afterNew(),
                this._editableSettings.unshift({
                    key: "period",
                    name: this.root.language.translateAny("Period"),
                    type: "number"
                }, {
                    key: "seriesColor",
                    name: this.root.language.translateAny("Period"),
                    type: "color"
                })
            }
            prepareData() {
                if (this.series) {
                    const e = this.get("stockSeries").dataItems;
                    let t = this._getTypicalPrice(e)
                      , i = this.get("period", 20);
                    this._sma(t, i, "value_y", "sma");
                    for (let e = 0, s = t.length; e < s; e++) {
                        const s = t[e]
                          , a = s.value_y;
                        let n = s.sma
                          , o = 0;
                        if (e >= i - 1) {
                            for (let s = e; s > e - i; s--) {
                                let e = t[s];
                                o += Math.abs(e.value_y - n)
                            }
                            o /= i;
                            let r = (a - n) / (.015 * o);
                            L.isNumber(r) && (s.valueS = r)
                        }
                    }
                    this.series.data.setAll(t)
                }
            }
        }
        Object.defineProperty(Ae, "className", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: "CommodityChannelIndex"
        }),
        Object.defineProperty(Ae, "classNames", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: ie.classNames.concat([Ae.className])
        });
        class Ie extends ee {
            constructor() {
                super(...arguments),
                Object.defineProperty(this, "_editableSettings", {
                    enumerable: !0,
                    configurable: !0,
                    writable: !0,
                    value: [{
                        key: "period",
                        name: this.root.language.translateAny("Period"),
                        type: "number"
                    }, {
                        key: "seriesColor",
                        name: this.root.language.translateAny("Color"),
                        type: "color"
                    }, {
                        key: "field",
                        name: this.root.language.translateAny("Field"),
                        type: "dropdown",
                        options: ["open", "close", "low", "high", "hl/2", "hlc/3", "hlcc/4", "ohlc/4"]
                    }, {
                        key: "movingAverageType",
                        name: this.root.language.translateAny("Moving Average Type"),
                        type: "dropdown",
                        options: ["simple", "weighted", "exponential", "dema", "tema"]
                    }]
                })
            }
            _afterNew() {
                this._themeTags.push("disparityindex"),
                super._afterNew()
            }
            _createSeries() {
                return this.panel.series.push(w.e.new(this._root, {
                    themeTags: ["indicator"],
                    xAxis: this.xAxis,
                    yAxis: this.yAxis,
                    valueXField: "valueX",
                    valueYField: "disparity",
                    stroke: this.get("seriesColor"),
                    fill: void 0
                }))
            }
            _prepareChildren() {
                const e = "movingAverageType";
                this.isDirty(e) && (this.markDataDirty(),
                this.setCustomData(e, this.get(e))),
                super._prepareChildren()
            }
            prepareData() {
                if (this.series) {
                    const e = this.get("stockSeries").dataItems
                      , t = this.get("period", 14)
                      , i = this.get("movingAverageType");
                    let s = this._getDataArray(e);
                    switch (i) {
                    case "simple":
                        this._sma(s, t, "value_y", "ma");
                        break;
                    case "weighted":
                        this._wma(s, t, "value_y", "ma");
                        break;
                    case "exponential":
                        this._ema(s, t, "value_y", "ma");
                        break;
                    case "dema":
                        this._dema(s, t, "value_y", "ma");
                        break;
                    case "tema":
                        this._tema(s, t, "value_y", "ma")
                    }
                    P.each(s, (e => {
                        const t = e.ma;
                        null != t && (e.disparity = 100 * (e.value_y - t) / t)
                    }
                    )),
                    this.series.data.setAll(s)
                }
            }
        }
        Object.defineProperty(Ie, "className", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: "DisparityIndex"
        }),
        Object.defineProperty(Ie, "classNames", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: ee.classNames.concat([Ie.className])
        });
        class Ne extends ee {
            constructor() {
                super(...arguments),
                Object.defineProperty(this, "_editableSettings", {
                    enumerable: !0,
                    configurable: !0,
                    writable: !0,
                    value: [{
                        key: "period",
                        name: this.root.language.translateAny("Period"),
                        type: "number"
                    }, {
                        key: "seriesColor",
                        name: this.root.language.translateAny("Color"),
                        type: "color"
                    }, {
                        key: "field",
                        name: this.root.language.translateAny("Field"),
                        type: "dropdown",
                        options: ["open", "close", "low", "high", "hl/2", "hlc/3", "hlcc/4", "ohlc/4"]
                    }]
                })
            }
            _afterNew() {
                this._themeTags.push("standarddeviation"),
                super._afterNew()
            }
            _createSeries() {
                return this.panel.series.push(w.e.new(this._root, {
                    themeTags: ["indicator"],
                    xAxis: this.xAxis,
                    yAxis: this.yAxis,
                    valueXField: "valueX",
                    valueYField: "deviation",
                    fill: void 0
                }))
            }
            prepareData() {
                if (super.prepareData(),
                this.series) {
                    let e = this.get("period", 20);
                    const t = this.get("stockSeries").dataItems;
                    let i = this._getDataArray(t);
                    this._sma(i, e, "value_y", "ma");
                    let s = 0;
                    P.each(i, (i => {
                        if (s >= e - 1) {
                            let a = i.ma
                              , n = 0;
                            for (let i = s - e + 1; i <= s; i++) {
                                let e = t[i]
                                  , s = this._getValue(e);
                                null != s && (n += Math.pow(s - a, 2))
                            }
                            let o = Math.sqrt(n / e);
                            i.deviation = o
                        }
                        s++
                    }
                    )),
                    this.series.data.setAll(i)
                }
            }
        }
        Object.defineProperty(Ne, "className", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: "StandardDeviation"
        }),
        Object.defineProperty(Ne, "classNames", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: ee.classNames.concat([Ne.className])
        });
        class Te extends ee {
            constructor() {
                super(...arguments),
                Object.defineProperty(this, "_editableSettings", {
                    enumerable: !0,
                    configurable: !0,
                    writable: !0,
                    value: [{
                        key: "period",
                        name: this.root.language.translateAny("Period"),
                        type: "number"
                    }, {
                        key: "seriesColor",
                        name: this.root.language.translateAny("Color"),
                        type: "color"
                    }]
                })
            }
            _afterNew() {
                this._themeTags.push("typicalprice"),
                super._afterNew()
            }
            _createSeries() {
                return this.panel.series.push(w.e.new(this._root, {
                    themeTags: ["indicator"],
                    xAxis: this.xAxis,
                    yAxis: this.yAxis,
                    valueXField: "valueX",
                    valueYField: "typical",
                    fill: void 0
                }))
            }
            prepareData() {
                if (super.prepareData(),
                this.series) {
                    let e = this.get("period", 20);
                    const t = this.get("stockSeries").dataItems;
                    let i = this._getDataArray(t)
                      , s = 0
                      , a = 0
                      , n = 0;
                    P.each(i, (t => {
                        let o = t.value_y;
                        if (null != o && (s++,
                        n += o / e,
                        s >= e)) {
                            if (s > e) {
                                let t = i[a - e].value_y;
                                null != t && (n -= t / e)
                            }
                            t.typical = n
                        }
                        a++
                    }
                    )),
                    this.series.data.setAll(i)
                }
            }
        }
        Object.defineProperty(Te, "className", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: "TypicalPrice"
        }),
        Object.defineProperty(Te, "classNames", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: ee.classNames.concat([Te.className])
        });
        class Me extends ee {
            constructor() {
                super(...arguments),
                Object.defineProperty(this, "signalSeries", {
                    enumerable: !0,
                    configurable: !0,
                    writable: !0,
                    value: void 0
                }),
                Object.defineProperty(this, "_editableSettings", {
                    enumerable: !0,
                    configurable: !0,
                    writable: !0,
                    value: [{
                        key: "period",
                        name: this.root.language.translateAny("Period"),
                        type: "number"
                    }, {
                        key: "seriesColor",
                        name: this.root.language.translateAny("Color"),
                        type: "color"
                    }, {
                        key: "signalPeriod",
                        name: this.root.language.translateAny("Signal period"),
                        type: "number"
                    }, {
                        key: "signalColor",
                        name: this.root.language.translateAny("Signal color"),
                        type: "color"
                    }]
                }),
                Object.defineProperty(this, "_themeTag", {
                    enumerable: !0,
                    configurable: !0,
                    writable: !0,
                    value: "trix"
                })
            }
            _createSeries() {
                return this.panel.series.push(w.e.new(this._root, {
                    themeTags: ["indicator"],
                    xAxis: this.xAxis,
                    yAxis: this.yAxis,
                    valueXField: "valueX",
                    valueYField: "trix",
                    fill: void 0
                }))
            }
            _afterNew() {
                this._themeTags.push("trix"),
                super._afterNew();
                const e = this.panel;
                if (e) {
                    const t = e.series.push(w.e.new(this._root, {
                        valueXField: "valueX",
                        valueYField: "signal",
                        xAxis: this.xAxis,
                        yAxis: this.yAxis,
                        groupDataDisabled: !0,
                        themeTags: ["indicator", "signal"]
                    }));
                    this.signalSeries = t
                }
            }
            _prepareChildren() {
                this.isDirty("signalPeriod") && (this.markDataDirty(),
                this.setCustomData("signalPeriod", this.get("signalPeriod"))),
                super._prepareChildren()
            }
            _updateChildren() {
                super._updateChildren(),
                this.isDirty("signalColor") && this._updateSeriesColor(this.signalSeries, this.get("signalColor"), "signalColor");
                const e = this.series.dataItem;
                if (e) {
                    const t = e.dataContext;
                    if (t) {
                        t.signalPeriod = this.get("signalPeriod");
                        const e = this.get("signalColor");
                        e && (t.signalColor = e.toCSSHex())
                    }
                }
            }
            prepareData() {
                if (super.prepareData(),
                this.series) {
                    let e = this.get("period", 14);
                    const t = this.get("stockSeries").dataItems;
                    let i, s, a = this._getDataArray(t);
                    this._ema(a, e, "value_y", "ema"),
                    this._ema(a, e, "ema", "ema2"),
                    this._ema(a, e, "ema2", "ema3"),
                    P.each(a, (e => {
                        let t = e.ema3;
                        i && (s = i.ema3),
                        L.isNumber(t) && L.isNumber(s) && (e.trix = 100 * (t - s) / s),
                        i = e
                    }
                    )),
                    this.series.data.setAll(a),
                    e = this.get("signalPeriod", 9),
                    this._sma(a, e, "trix", "signal"),
                    this.signalSeries.data.setAll(a)
                }
            }
        }
        Object.defineProperty(Me, "className", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: "Trix"
        }),
        Object.defineProperty(Me, "classNames", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: ee.classNames.concat([Me.className])
        });
        class Le extends ee {
            constructor() {
                super(...arguments),
                Object.defineProperty(this, "_editableSettings", {
                    enumerable: !0,
                    configurable: !0,
                    writable: !0,
                    value: [{
                        key: "period",
                        name: this.root.language.translateAny("Period"),
                        type: "number"
                    }, {
                        key: "seriesColor",
                        name: this.root.language.translateAny("Color"),
                        type: "color"
                    }]
                })
            }
            _afterNew() {
                this._themeTags.push("medianprice"),
                super._afterNew()
            }
            _createSeries() {
                return this.panel.series.push(w.e.new(this._root, {
                    themeTags: ["indicator"],
                    xAxis: this.xAxis,
                    yAxis: this.yAxis,
                    valueXField: "valueX",
                    valueYField: "median",
                    fill: void 0
                }))
            }
            prepareData() {
                if (super.prepareData(),
                this.series) {
                    let e = this.get("period", 20);
                    const t = this.get("stockSeries").dataItems;
                    let i = this._getDataArray(t)
                      , s = 0
                      , a = 0
                      , n = 0;
                    P.each(i, (t => {
                        let o = t.value_y;
                        if (null != o && (s++,
                        n += o / e,
                        s >= e)) {
                            if (s > e) {
                                let t = i[a - e].value_y;
                                null != t && (n -= t / e)
                            }
                            t.median = n
                        }
                        a++
                    }
                    )),
                    this.series.data.setAll(i)
                }
            }
        }
        Object.defineProperty(Le, "className", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: "MedianPrice"
        }),
        Object.defineProperty(Le, "classNames", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: ee.classNames.concat([Le.className])
        });
        class Oe extends H {
            constructor() {
                super(...arguments),
                Object.defineProperty(this, "_editableSettings", {
                    enumerable: !0,
                    configurable: !0,
                    writable: !0,
                    value: [{
                        key: "deviation",
                        name: this.root.language.translateAny("Deviation"),
                        type: "number"
                    }, {
                        key: "depth",
                        name: this.root.language.translateAny("Depth"),
                        type: "number"
                    }, {
                        key: "seriesColor",
                        name: this.root.language.translateAny("Color"),
                        type: "color"
                    }]
                })
            }
            _prepareChildren() {
                (this.isDirty("deviation") || this.isDirty("depth")) && (this._dataDirty = !0,
                this.setCustomData("deviation", this.get("deviation")),
                this.setCustomData("depth", this.get("depth"))),
                super._prepareChildren()
            }
            _afterNew() {
                super._afterNew();
                const e = this.get("stockSeries")
                  , t = e.chart;
                if (t) {
                    const i = t.series.push(w.e.new(this._root, {
                        valueXField: "time",
                        valueYField: "zigzag",
                        groupDataDisabled: !0,
                        calculateAggregates: !0,
                        xAxis: e.get("xAxis"),
                        yAxis: e.get("yAxis"),
                        themeTags: ["indicator", "zigzag"],
                        name: "ZigZag",
                        snapTooltip: !0
                    }));
                    i.setPrivate("baseValueSeries", e),
                    this.series = i,
                    this._handleLegend(i)
                }
            }
            prepareData() {
                if (this.series) {
                    const e = this.get("deviation", 5) / 100
                      , t = this.get("stockSeries")
                      , i = [];
                    if (t) {
                        const s = t.dataItems;
                        if (s.length > 1) {
                            let t, a, n = s[0], o = !1, r = n.get("valueX", 0), l = n.get("valueY"), c = n.get("highValueY", l), h = n.get("lowValueY", l), d = 1;
                            for (let n = 1, l = s.length; n < l; n++) {
                                let l = s[n]
                                  , u = l.get("value", 0)
                                  , g = l.get("lowValueY", u)
                                  , p = l.get("highValueY", u)
                                  , m = l.get("valueX", 0);
                                if (g <= Number(c) * (1 - e)) {
                                    i.push({
                                        time: r,
                                        zigzag: c
                                    }),
                                    t = m,
                                    a = g,
                                    o = !0,
                                    d = n;
                                    break
                                }
                                if (p >= Number(h) * (1 + e)) {
                                    i.push({
                                        time: r,
                                        zigzag: h
                                    }),
                                    t = m,
                                    a = p,
                                    o = !1,
                                    d = n;
                                    break
                                }
                            }
                            if (null != a) {
                                let n = this.get("depth", 3);
                                for (let r = d - 1, l = s.length; r < l; r++) {
                                    let l = s[r]
                                      , c = l.get("value", 0)
                                      , h = l.get("lowValueY", c)
                                      , d = l.get("highValueY", c)
                                      , u = l.get("valueX", 0);
                                    if (o) {
                                        if (h <= a)
                                            a = h,
                                            t = u;
                                        else if (d >= a * (1 + e)) {
                                            let e = Math.max(0, r - n)
                                              , l = !1;
                                            for (let t = r; t > e; t--)
                                                if (d < s[t].get("highValueY")) {
                                                    l = !0;
                                                    break
                                                }
                                            l || (i.push({
                                                time: t,
                                                zigzag: a
                                            }),
                                            a = d,
                                            t = u,
                                            o = !1)
                                        }
                                    } else if (d >= a)
                                        a = d,
                                        t = u;
                                    else if (h <= a * (1 - e)) {
                                        let e = Math.max(0, r - n)
                                          , l = !1;
                                        for (let t = r; t > e; t--)
                                            if (h > s[t].get("lowValueY")) {
                                                l = !0;
                                                break
                                            }
                                        l || (i.push({
                                            time: t,
                                            zigzag: a
                                        }),
                                        a = h,
                                        t = u,
                                        o = !0)
                                    }
                                }
                                const r = s[s.length - 1];
                                let l = r.get("valueX", 0)
                                  , c = r.get("valueY")
                                  , h = r.get("highValueY", c)
                                  , u = r.get("lowValueY", c);
                                a < h ? i.push({
                                    time: l,
                                    zigzag: u
                                }) : i.push({
                                    time: l,
                                    zigzag: h
                                })
                            }
                        }
                        this.series.data.setAll(i)
                    }
                }
            }
        }
        Object.defineProperty(Oe, "className", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: "ZigZag"
        }),
        Object.defineProperty(Oe, "classNames", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: H.classNames.concat([Oe.className])
        });
        class Ee extends ee {
            constructor() {
                super(...arguments),
                Object.defineProperty(this, "_editableSettings", {
                    enumerable: !0,
                    configurable: !0,
                    writable: !0,
                    value: [{
                        key: "period",
                        name: this.root.language.translateAny("Period"),
                        type: "number"
                    }, {
                        key: "seriesColor",
                        name: this.root.language.translateAny("Color"),
                        type: "color"
                    }]
                })
            }
            _afterNew() {
                this._themeTags.push("averagetruerange"),
                super._afterNew()
            }
            _createSeries() {
                return this.panel.series.push(w.e.new(this._root, {
                    themeTags: ["indicator"],
                    xAxis: this.xAxis,
                    yAxis: this.yAxis,
                    valueXField: "valueX",
                    valueYField: "atr",
                    fill: void 0
                }))
            }
            _getDataArray(e) {
                const t = [];
                return P.each(e, (e => {
                    t.push({
                        valueX: e.get("valueX"),
                        value_close: e.get("valueY"),
                        value_high: e.get("highValueY"),
                        value_low: e.get("lowValueY")
                    })
                }
                )),
                t
            }
            prepareData() {
                if (super.prepareData(),
                this.series) {
                    let e = this.get("period", 20);
                    const t = this.get("stockSeries").dataItems;
                    let i, s, a = this._getDataArray(t), n = 0, o = 0, r = 0;
                    P.each(a, (t => {
                        let l = t.value_close;
                        if (null != l && null != i && (n++,
                        r = Math.max(t.value_high - t.value_low, Math.abs(t.value_high - i), Math.abs(t.value_low - i)),
                        t.tr = r,
                        n >= e)) {
                            if (n == e) {
                                let i = 0
                                  , s = 0;
                                for (let t = o; t >= 0 && (i += a[t].tr,
                                s++,
                                s != e); t--)
                                    ;
                                t.atr = i / e
                            } else
                                null != s && (t.atr = (s * (e - 1) + r) / e);
                            s = t.atr
                        }
                        i = l,
                        o++
                    }
                    )),
                    this.series.data.setAll(a)
                }
            }
        }
        Object.defineProperty(Ee, "className", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: "AverageTrueRange"
        }),
        Object.defineProperty(Ee, "classNames", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: ee.classNames.concat([Ee.className])
        });
        var je = i(5108)
          , Ye = i(8035)
          , Fe = i(1926);
        class Ve extends w.e {
            constructor() {
                super(...arguments),
                Object.defineProperty(this, "_clickDp", {
                    enumerable: !0,
                    configurable: !0,
                    writable: !0,
                    value: void 0
                }),
                Object.defineProperty(this, "_moveDp", {
                    enumerable: !0,
                    configurable: !0,
                    writable: !0,
                    value: void 0
                }),
                Object.defineProperty(this, "_downDp", {
                    enumerable: !0,
                    configurable: !0,
                    writable: !0,
                    value: void 0
                }),
                Object.defineProperty(this, "_upDp", {
                    enumerable: !0,
                    configurable: !0,
                    writable: !0,
                    value: void 0
                }),
                Object.defineProperty(this, "_drawingEnabled", {
                    enumerable: !0,
                    configurable: !0,
                    writable: !0,
                    value: !1
                }),
                Object.defineProperty(this, "_clickPointerPoint", {
                    enumerable: !0,
                    configurable: !0,
                    writable: !0,
                    value: void 0
                }),
                Object.defineProperty(this, "_movePointerPoint", {
                    enumerable: !0,
                    configurable: !0,
                    writable: !0,
                    value: void 0
                }),
                Object.defineProperty(this, "_isDrawing", {
                    enumerable: !0,
                    configurable: !0,
                    writable: !0,
                    value: !1
                }),
                Object.defineProperty(this, "_isPointerDown", {
                    enumerable: !0,
                    configurable: !0,
                    writable: !0,
                    value: !1
                }),
                Object.defineProperty(this, "_index", {
                    enumerable: !0,
                    configurable: !0,
                    writable: !0,
                    value: 0
                }),
                Object.defineProperty(this, "_drawingId", {
                    enumerable: !0,
                    configurable: !0,
                    writable: !0,
                    value: void 0
                }),
                Object.defineProperty(this, "_di", {
                    enumerable: !0,
                    configurable: !0,
                    writable: !0,
                    value: []
                }),
                Object.defineProperty(this, "_dragStartPX", {
                    enumerable: !0,
                    configurable: !0,
                    writable: !0,
                    value: 0
                }),
                Object.defineProperty(this, "_dragStartY", {
                    enumerable: !0,
                    configurable: !0,
                    writable: !0,
                    value: 0
                }),
                Object.defineProperty(this, "_dvpX", {
                    enumerable: !0,
                    configurable: !0,
                    writable: !0,
                    value: []
                }),
                Object.defineProperty(this, "_dvY", {
                    enumerable: !0,
                    configurable: !0,
                    writable: !0,
                    value: []
                }),
                Object.defineProperty(this, "_isHover", {
                    enumerable: !0,
                    configurable: !0,
                    writable: !0,
                    value: !1
                }),
                Object.defineProperty(this, "_erasingEnabled", {
                    enumerable: !0,
                    configurable: !0,
                    writable: !0,
                    value: !1
                }),
                Object.defineProperty(this, "_tag", {
                    enumerable: !0,
                    configurable: !0,
                    writable: !0,
                    value: void 0
                }),
                Object.defineProperty(this, "_movePoint", {
                    enumerable: !0,
                    configurable: !0,
                    writable: !0,
                    value: {
                        x: 0,
                        y: 0
                    }
                }),
                Object.defineProperty(this, "selectorContainer", {
                    enumerable: !0,
                    configurable: !0,
                    writable: !0,
                    value: this.children.push(n.W.new(this.root, {}))
                }),
                Object.defineProperty(this, "_selected", {
                    enumerable: !0,
                    configurable: !0,
                    writable: !0,
                    value: []
                }),
                Object.defineProperty(this, "_isSelecting", {
                    enumerable: !0,
                    configurable: !0,
                    writable: !0,
                    value: !1
                }),
                Object.defineProperty(this, "_pIndex", {
                    enumerable: !0,
                    configurable: !0,
                    writable: !0,
                    value: 0
                }),
                Object.defineProperty(this, "grips", {
                    enumerable: !0,
                    configurable: !0,
                    writable: !0,
                    value: new v.o(R.YS.new({}),( () => n.W._new(this._root, {
                        themeTags: ["grip"],
                        setStateOnChildren: !0,
                        draggable: !0
                    }, [this.grips.template])))
                }),
                Object.defineProperty(this, "circles", {
                    enumerable: !0,
                    configurable: !0,
                    writable: !0,
                    value: new v.o(R.YS.new({}),( () => Ye.C._new(this._root, {}, [this.circles.template])))
                }),
                Object.defineProperty(this, "outerCircles", {
                    enumerable: !0,
                    configurable: !0,
                    writable: !0,
                    value: new v.o(R.YS.new({}),( () => Ye.C._new(this._root, {
                        themeTags: ["outline"]
                    }, [this.outerCircles.template])))
                }),
                Object.defineProperty(this, "selectors", {
                    enumerable: !0,
                    configurable: !0,
                    writable: !0,
                    value: new v.o(R.YS.new({}),( () => y.A._new(this._root, {
                        themeTags: ["selector"]
                    }, [this.selectors.template])))
                })
            }
            _afterNew() {
                this.addTag("drawing"),
                this.setPrivate("allowChangeSnap", !0),
                this._tag && this.addTag(this._tag),
                this.set("valueYField", "valueY"),
                this.set("valueXField", "valueX"),
                super._afterNew(),
                this.set("connect", !1),
                this.set("autoGapCount", 1 / 0),
                this.set("ignoreMinMax", !0),
                this.set("groupDataDisabled", !0);
                const e = this.strokes.template;
                e.set("templateField", "stroke");
                const t = this.fills.template;
                t.setAll({
                    templateField: "fill"
                }),
                t.events.on("pointerdown", (e => {
                    const t = this._getIndex(e.target);
                    this._erasingEnabled ? this._disposeIndex(t) : !e.originalEvent.button && this._drawingEnabled && this._handlePointerDown(e);
                    const i = this.strokes.getIndex(this._getStrokeIndex(t));
                    i && i.dragStart(e)
                }
                )),
                t.events.on("dragstart", (e => {
                    this.startDragItem(e, this._getIndex(e.target))
                }
                )),
                t.events.on("click", (e => {
                    const t = this._getIndex(e.target)
                      , i = e.originalEvent;
                    this._isDrawing || this._selectDrawing(t, i.ctrlKey)
                }
                )),
                t.events.on("dragstop", (e => {
                    const t = this._getIndex(e.target);
                    this.stopDragItem(e, t)
                }
                )),
                t.events.on("pointerover", (e => {
                    const t = this._getIndex(e.target)
                      , i = this.strokes.getIndex(this._getStrokeIndex(t));
                    i && i.hover(),
                    this._isHover = !0,
                    this._showSegmentBullets(t)
                }
                )),
                t.events.on("pointerout", ( () => {
                    this._isHover = !1
                }
                )),
                e.events.on("pointerdown", (e => {
                    const t = this._getIndex(e.target);
                    this._erasingEnabled && this._disposeIndex(t)
                }
                )),
                e.events.on("click", (e => {
                    const t = this._getIndex(e.target)
                      , i = e.originalEvent;
                    this._selectDrawing(t, i.ctrlKey)
                }
                )),
                e.events.on("pointerover", (e => {
                    this._isHover = !0,
                    this._showSegmentBullets(this._getIndex(e.target))
                }
                )),
                e.events.on("pointerout", ( () => {
                    this._isHover = !1
                }
                )),
                e.events.on("dragstop", (e => {
                    this.stopDragItem(e, this._getIndex(e.target))
                }
                )),
                e.events.on("dragstart", (e => {
                    this.startDragItem(e, this._getIndex(e.target))
                }
                )),
                this.bulletsContainer.states.create("hidden", {
                    visible: !0,
                    opacity: 0
                }),
                this.bullets.push(( (e, t, i) => {
                    const s = i.dataContext.index
                      , a = this._di[s].e;
                    let n = this.get("strokeColor", this.get("stroke"));
                    if (a) {
                        const e = a.dataContext;
                        if (e) {
                            const t = e.stroke;
                            t && (n = t.get("stroke"))
                        }
                    }
                    const o = this.grips.make();
                    o.setRaw("userData", "grip"),
                    this.grips.push(o);
                    const r = o.children.push(this.circles.make());
                    this.circles.push(r),
                    r.set("stroke", n);
                    const l = o.children.push(this.outerCircles.make());
                    return this.outerCircles.push(l),
                    l.set("stroke", n),
                    o.events.on("pointerover", (e => {
                        const t = e.target.dataItem;
                        if (t) {
                            const e = t.dataContext;
                            this._showSegmentBullets(e.index)
                        }
                    }
                    )),
                    this._addBulletInteraction(o),
                    this._tweakBullet(o, i),
                    je.g.new(this._root, {
                        locationX: void 0,
                        sprite: o
                    })
                }
                )),
                this.events.on("pointerover", ( () => {
                    this._handlePointerOver()
                }
                )),
                this.events.on("pointerout", ( () => {
                    this._handlePointerOut()
                }
                )),
                this._getStockChart().markDirtyKey("drawingSelectionEnabled")
            }
            disposeIndex(e) {
                this._disposeIndex(e)
            }
            getIndex(e) {
                let t = null;
                return P.eachContinue(this.dataItems, (i => {
                    const s = i.dataContext;
                    return s.drawingId != e || (t = s.index,
                    !1)
                }
                )),
                t
            }
            _disposeIndex(e) {
                const t = this._di[e];
                if (t) {
                    let e, i;
                    M.each(t, ( (t, s) => {
                        const a = s.dataContext;
                        this.data.removeValue(a),
                        a && (a.drawingId && (e = a.drawingId),
                        a.index && (i = a.index))
                    }
                    ));
                    for (let e = this.dataItems.length - 1; e >= 0; e--) {
                        const t = this.dataItems[e]
                          , s = t.dataContext;
                        s.index == i && (this.data.removeValue(s),
                        this.disposeDataItem(t))
                    }
                    this._pIndex = 0,
                    delete this._di[i],
                    this._dispatchStockEvent("drawingremoved", e, i)
                }
                const i = this._getSprite(this.selectors, e);
                i && this.selectors.removeValue(i),
                P.remove(this._selected, e)
            }
            _afterDataChange() {
                P.each(this.dataItems, (e => {
                    const t = e.dataContext
                      , i = t.index
                      , s = t.corner;
                    null != i && (null == this._di[i] && (this._di[i] = {}),
                    this._createElements(i, e),
                    this._di[i][s] = e,
                    this._index = i)
                }
                ))
            }
            _createElements(e, t) {}
            _clearDirty() {
                super._clearDirty(),
                this._isSelecting = !1
            }
            clearDrawings() {
                P.each(this._di, ( (e, t) => {
                    this._disposeIndex(t)
                }
                )),
                this.data.setAll([]),
                this._index = 0,
                this._selected = []
            }
            _getIndex(e) {
                const t = e.get("userData");
                if (t && t.length > 0) {
                    const e = this.dataItems[t[0]];
                    if (e) {
                        const t = e.dataContext;
                        if (t)
                            return t.index
                    }
                }
                return 0
            }
            _getStrokeIndex(e) {
                let t = 0
                  , i = e;
                return this.strokes.each((s => {
                    this._getIndex(s) == e && (i = t),
                    t++
                }
                )),
                i
            }
            setInteractive(e) {
                this.strokes.template.set("forceInactive", !e),
                this.fills.template.set("forceInactive", !e)
            }
            enableDrawingSelection(e) {
                this._erasingEnabled = !1,
                this.strokes.template.set("forceInactive", !e),
                this.fills.template.set("forceInactive", !e)
            }
            _showSegmentBullets(e) {
                const t = this._di[e];
                t && M.each(t, ( (e, t) => {
                    const i = t.bullets;
                    i && P.each(i, (e => {
                        const t = e.get("sprite");
                        t && t.show(0)
                    }
                    ))
                }
                ))
            }
            _hideResizer(e) {
                const t = this._getStockChart().spriteResizer;
                if (t) {
                    const i = t.get("sprite");
                    i && (e && e.dataItem == i.dataItem || t.set("sprite", void 0))
                }
            }
            startDragItem(e, t) {
                const i = this._getStockChart();
                i && i._dragStartDrawing(e),
                this._handleFillDragStart(e, t)
            }
            stopDragItem(e, t) {
                const i = this._getStockChart();
                i && i._dragStopDrawing(e),
                this._handleFillDragStop(e, t)
            }
            _handleFillDragStart(e, t) {
                this._hideResizer(e.target),
                this._isPointerDown = !1;
                const i = this.chart;
                if (i) {
                    const s = this.get("xAxis")
                      , a = this.get("yAxis")
                      , n = i.plotContainer.toLocal(e.point);
                    this._dragStartPX = s.coordinateToPosition(n.x);
                    const o = s.positionToValue(this._dragStartPX);
                    this._dragStartY = this._getYValue(a.positionToValue(a.coordinateToPosition(n.y)), o);
                    const r = this._di[t];
                    this._dvpX[t] = {},
                    this._dvY[t] = {},
                    r && M.each(r, ( (e, i) => {
                        this._dvpX[t][e] = s.valueToPosition(i.get("valueX", 0)),
                        this._dvY[t][e] = i.get("valueY")
                    }
                    ))
                }
            }
            _dragStart(e) {
                P.each(this._selected, (t => {
                    this._handleFillDragStart(e, t)
                }
                ))
            }
            _dragStop(e) {
                P.each(this._selected, (t => {
                    this._handleFillDragStop(e, t)
                }
                ))
            }
            _handleFillDragStop(e, t) {
                this._isPointerDown = !1;
                const i = this.chart;
                if (i) {
                    const s = i.plotContainer.toLocal(e.point)
                      , a = this.get("xAxis")
                      , n = this.get("yAxis")
                      , o = a.coordinateToPosition(s.x)
                      , r = a.positionToValue(a.coordinateToPosition(s.x))
                      , l = this._getYValue(n.positionToValue(n.coordinateToPosition(s.y)), r)
                      , c = o - this._dragStartPX
                      , h = l - this._dragStartY;
                    e.target.setAll({
                        x: 0,
                        y: 0
                    });
                    const d = this._di[t];
                    d && M.each(d, ( (e, i) => {
                        const s = this._dvpX[t][e]
                          , n = this._dvY[t][e];
                        if (L.isNumber(s) && L.isNumber(n)) {
                            const e = s + c
                              , t = a.positionToValue(e)
                              , o = this._getXValue(t);
                            let r = n + h;
                            const l = this.get("yAxis").getPrivate("stepDecimalPlaces", 0) + 1;
                            r = m.round(r, l),
                            r = this._getYValue(r, t, !0),
                            this._setContext(i, "valueX", o),
                            this._setContext(i, "valueY", r, !0),
                            this._setXLocation(i, o),
                            this._positionBullets(i)
                        }
                    }
                    ))
                }
                const s = this.strokes.getIndex(this._getStrokeIndex(t));
                s && s.dragStop(e),
                this.markDirty(),
                this._updateSegment(t)
            }
            _updateSegment(e) {
                this._updateElements()
            }
            _updateChildren() {
                this._updateElements(),
                (this.isDirty("strokeColor") || this.isDirty("strokeOpacity") || this.isDirty("strokeDasharray") || this.isDirty("strokeWidth")) && P.each(this._selected, (e => {
                    let t = {
                        stroke: this.get("strokeColor"),
                        strokeOpacity: this.get("strokeOpacity"),
                        strokeDasharray: this.get("strokeDasharray"),
                        strokeWidth: this.get("strokeWidth")
                    };
                    const i = this.strokes.getIndex(this._getStrokeIndex(e));
                    if (i) {
                        let s;
                        P.each(this.dataItems, (t => {
                            const i = t.dataContext;
                            i.index == e && i.stroke && (s = i.stroke)
                        }
                        ));
                        const a = i.states.lookup("default");
                        M.each(t, ( (e, t) => {
                            i.set(e, t),
                            a.set(e, t),
                            s && s.set(e, t)
                        }
                        ))
                    }
                    this.circles.each((i => {
                        const s = i.dataItem;
                        if (s) {
                            const a = s.dataContext;
                            a && a.index == e && (i.set("stroke", t.stroke),
                            i.states.lookup("default").set("stroke", t.stroke))
                        }
                    }
                    )),
                    this.outerCircles.each((i => {
                        const s = i.dataItem;
                        if (s) {
                            const a = s.dataContext;
                            a && a.index == e && (i.set("stroke", t.stroke),
                            i.states.lookup("default").set("stroke", t.stroke))
                        }
                    }
                    )),
                    this._applySettings(e, t)
                }
                )),
                (this.isDirty("fillColor") || this.isDirty("fillOpacity")) && P.each(this._selected, (e => {
                    const t = this.fills.getIndex(this._getStrokeIndex(e));
                    let i = {
                        fill: this.get("fillColor"),
                        fillOpacity: this.get("fillOpacity")
                    };
                    if (t) {
                        let s;
                        P.each(this.dataItems, (t => {
                            const i = t.dataContext;
                            i.index == e && i.fill && (s = i.fill)
                        }
                        ));
                        const a = t.states.lookup("default");
                        M.each(i, ( (e, i) => {
                            t.set(e, i),
                            a.set(e, i),
                            s && s.set(e, i)
                        }
                        ))
                    }
                    this._applySettings(e, i)
                }
                )),
                this._valuesDirty && this.markDirtyDrawings(),
                super._updateChildren(),
                this._updateSelectors()
            }
            isDrawing(e) {
                this._isDrawing = e;
                const t = this._getStockChart();
                t && e && (t._selectionWasOn = t.get("drawingSelectionEnabled", !1),
                t.set("drawingSelectionEnabled", !1))
            }
            _applySettings(e, t) {}
            _updateElements() {}
            markDirtyDrawings() {
                const e = this._getStockChart();
                e && e.markDirtyDrawings()
            }
            _getFillTemplate() {
                const e = {}
                  , t = this.get("fillColor");
                null != t && (e.fill = t);
                const i = this.get("fillOpacity");
                return null != i && (e.fillOpacity = i),
                R.YS.new(e)
            }
            _getStrokeTemplate() {
                const e = {}
                  , t = this.get("strokeColor");
                null != t && (e.stroke = t);
                const i = this.get("strokeOpacity");
                null != i && (e.strokeOpacity = i);
                const s = this.get("strokeDasharray");
                null != s && (e.strokeDasharray = s);
                const a = this.get("strokeWidth");
                return null != a && (e.strokeWidth = a),
                R.YS.new(e)
            }
            _tweakBullet(e, t) {}
            _dispatchStockEvent(e, t, i) {
                const s = this._getStockChart();
                "drawingadded" == e && s._selectionWasOn && s.set("drawingSelectionEnabled", !0),
                s && s.events.isEnabled(e) && s.events.dispatch(e, {
                    drawingId: t,
                    series: this,
                    target: s,
                    index: i
                })
            }
            _addBulletInteraction(e) {
                e.events.on("dragged", (e => {
                    this._handleBulletDragged(e),
                    this._isDragging = !0
                }
                )),
                e.events.on("dragstart", (e => {
                    this._handleBulletDragStart(e)
                }
                )),
                e.events.on("dragstop", (e => {
                    this._handleBulletDragStop(e),
                    this.setTimeout(( () => {
                        this._isDragging = !1
                    }
                    ), 100)
                }
                )),
                e.events.on("click", (e => {
                    const t = e.target.dataItem;
                    if (t) {
                        const i = t.dataContext;
                        this._erasingEnabled ? i && this._disposeIndex(i.index) : this._isDrawing ? this._handlePointerClick(e) : this._selectDrawing(i.index, e.originalEvent.ctrlKey)
                    }
                }
                ))
            }
            _increaseIndex() {
                this._index++,
                this._drawingId = this._generateId()
            }
            _generateId() {
                return "" + (new Date).getTime() + Math.round(1e4 * Math.random() + 1e4)
            }
            _handlePointerClick(e) {
                if (this._drawingEnabled) {
                    const t = this.chart;
                    t && (this._clickPointerPoint = t.plotContainer.toLocal(e.point))
                }
            }
            _placeBulletsContainer() {
                this.children.moveValue(this.bulletsContainer),
                this.enableDrawing(),
                this.disableDrawing()
            }
            _handleBulletDragged(e) {
                const t = e.target.dataItem;
                if (this.chart) {
                    const i = e.target
                      , s = {
                        x: i.x(),
                        y: i.y()
                    };
                    this._handleBulletDraggedReal(t, s)
                }
                const i = t.dataContext;
                if (i) {
                    const e = i.index;
                    this._updateSegment(e)
                }
            }
            _handleBulletDraggedReal(e, t) {
                const i = this.get("xAxis")
                  , s = this.get("yAxis")
                  , a = i.positionToValue(i.coordinateToPosition(t.x))
                  , n = this._getXValue(a)
                  , o = this._getYValue(s.positionToValue(s.coordinateToPosition(t.y)), a);
                this._setContext(e, "valueX", n),
                this._setContext(e, "valueY", o, !0),
                this._setXLocation(e, n),
                this._positionBullets(e)
            }
            _handleBulletDragStart(e) {
                this._hideResizer(),
                this.unselectAllDrawings()
            }
            _handleBulletDragStop(e) {}
            _handlePointerOver() {}
            _handlePointerOut() {}
            enableDrawing() {
                const e = this.chart;
                this._erasingEnabled = !1,
                this._drawingEnabled = !0,
                e && (this._clickDp || (this._clickDp = e.plotContainer.events.on("click", (e => {
                    e.originalEvent.button || this._erasingEnabled || this._handlePointerClick(e)
                }
                ))),
                this._downDp || (this._downDp = e.plotContainer.events.on("pointerdown", (e => {
                    e.originalEvent.button || this._erasingEnabled || this._handlePointerDown(e)
                }
                ))),
                this._upDp || (this._upDp = e.plotContainer.events.on("globalpointerup", (e => {
                    e.originalEvent.button || this._erasingEnabled || this._handlePointerUp(e)
                }
                ))),
                this._moveDp || (this._moveDp = e.plotContainer.events.on("globalpointermove", (e => {
                    this._erasingEnabled || e.point.x == this._movePoint.x && e.point.y == this._movePoint.y || this._handlePointerMove(e)
                }
                ))))
            }
            enableErasing() {
                this._erasingEnabled = !0,
                this.setInteractive(!0)
            }
            disableErasing() {
                this._erasingEnabled = !1,
                this._getStockChart().get("drawingSelectionEnabled") || this.setInteractive(!1)
            }
            disableDrawing() {
                this._erasingEnabled = !1,
                this._drawingEnabled = !1,
                this.isDrawing(!1),
                this._clickDp && (this._clickDp.dispose(),
                this._clickDp = void 0),
                this._downDp && (this._downDp.dispose(),
                this._downDp = void 0),
                this._upDp && (this._upDp.dispose(),
                this._upDp = void 0)
            }
            _handlePointerMove(e) {
                const t = this.chart;
                t && (this._movePointerPoint = t.plotContainer.toLocal(e.point))
            }
            _handlePointerDown(e) {
                this._isPointerDown = !0
            }
            _handlePointerUp(e) {
                this._isPointerDown = !1
            }
            startIndex() {
                return 0
            }
            endIndex() {
                return this.dataItems.length
            }
            _setXLocation(e, t) {
                this.get("snapToData") ? e.set("locationX", void 0) : this._setXLocationReal(e, t)
            }
            _setXLocationReal(e, t) {
                const i = this.get("xAxis").getPrivate("baseInterval")
                  , s = this._root
                  , a = s.locale.firstDayOfWeek
                  , n = Fe.round(new Date(t), i.timeUnit, i.count, a, s.utc, void 0, s.timezone).getTime();
                let o = n + Fe.getDuration(i.timeUnit, 1.05 * i.count);
                o = Fe.round(new Date(o), i.timeUnit, i.count, a, s.utc, void 0, s.timezone).getTime();
                const r = (t - n) / (o - n);
                e.set("locationX", r)
            }
            disposeDataItem(e) {
                super.disposeDataItem(e);
                const t = e.dataContext;
                if (t) {
                    const e = t.index;
                    this.markDirtyValues();
                    const i = this._di[e];
                    i && M.each(i, ( (e, t) => {
                        super.disposeDataItem(t)
                    }
                    )),
                    delete this._di[e]
                }
            }
            _getYValue(e, t, i) {
                const s = this.get("series");
                if (this.get("snapToData") && s) {
                    const i = this.get("field", "value") + "Y";
                    return this._snap(t, e, i, s)
                }
                {
                    if (!i && "valueYChangeSelectionPercent" == this.get("valueYShow")) {
                        const t = this.getPrivate("baseValueSeries");
                        if (t) {
                            const i = t._getBase("valueY");
                            e = e / 100 * i + i
                        }
                    }
                    const t = this.get("yAxis").getPrivate("stepDecimalPlaces", 0) + 1;
                    return m.round(e, t)
                }
            }
            _getXValue(e) {
                const t = this.get("series");
                if (this.get("snapToData") && t) {
                    const i = this.get("xAxis")
                      , s = i.getPrivate("min", 0) + 1
                      , a = i.getPrivate("max", 1) - 1;
                    return e = m.fitToRange(e, s, a),
                    this._snap(e, e, "valueX", t) + 1
                }
                return Math.round(e)
            }
            _setContext(e, t, i, s) {
                e.set(t, i),
                s && e.set(t + "Working", i);
                const a = e.dataContext
                  , n = this.get(t + "Field");
                n && (a[n] = i)
            }
            _snap(e, t, i, s) {
                const a = this.get("xAxis")
                  , n = a.getSeriesItem(s, Math.max(0, a.valueToPosition(e)), .5, !0);
                return n ? n.get(i) : t
            }
            _getStockChart() {
                return this.get("series").chart.getPrivate("stockChart")
            }
            _getSprite(e, t) {
                for (let i = 0, s = e.length; i < s; i++) {
                    let s = e.getIndex(i);
                    if (s && s.get("userData") == t)
                        return s
                }
            }
            _selectDrawing(e, t, i) {
                if (this._getStockChart().get("drawingSelectionEnabled") || i)
                    if (this._isSelecting = !0,
                    -1 != this._selected.indexOf(e))
                        t ? this._unselectDrawing(e) : this.unselectAllDrawings();
                    else {
                        t || (this._hideResizer(),
                        this.unselectAllDrawings());
                        let i = this._getSprite(this.selectors, e);
                        i || (i = this.selectorContainer.children.push(this.selectors.make()),
                        this.selectors.push(i)),
                        i.show(0),
                        i.set("userData", e),
                        P.move(this._selected, e),
                        this._dispatchStockEvent("drawingselected", this.indexToDrawingId(e), e),
                        this.markDirty()
                    }
            }
            _unselectDrawing(e) {
                const t = this._getSprite(this.selectors, e);
                t && (t.hide(0),
                P.remove(this._selected, e),
                this._dispatchStockEvent("drawingunselected", this.indexToDrawingId(e), e))
            }
            _updateSelectors() {
                this.selectors.each((e => {
                    const t = e.get("userData");
                    this._updateSelector(e, t)
                }
                ))
            }
            _updateSelector(e, t) {
                let i, s, a, n;
                const o = this.get("selectorPadding", 5);
                P.each(this.dataItems, (e => {
                    const o = e.dataContext;
                    if (o && o.index == t) {
                        let t = e.get("point");
                        t && (null == i && (i = t.x),
                        i = Math.min(i, t.x),
                        null == s && (s = t.x),
                        s = Math.max(s, t.x),
                        null == a && (a = t.y),
                        a = Math.min(a, t.y),
                        null == n && (n = t.y),
                        n = Math.max(n, t.y))
                    }
                }
                )),
                null != s && null != i && null != a && null != n && e.setAll({
                    width: s - i + 2 * o,
                    height: n - a + 2 * o,
                    x: i - o,
                    y: a - o
                })
            }
            indexToDrawingId(e) {
                let t;
                return P.eachContinue(this.dataItems, (i => {
                    const s = i.dataContext;
                    return s.index != e || (t = s.drawingId,
                    !1)
                }
                )),
                t
            }
            _getContext(e) {
                let t;
                return P.eachContinue(this.dataItems, (i => {
                    const s = i.dataContext;
                    return s.index != e || !s.sprite || (t = s,
                    !1)
                }
                )),
                t
            }
            getContext(e) {
                const t = this.getIndex(e);
                if (null != t)
                    return this._getContext(t)
            }
            unselectAllDrawings() {
                const e = this._getStockChart();
                e && e.unselectDrawings()
            }
            unselectDrawings() {
                for (let e = this._selected.length - 1; e >= 0; e--)
                    this._unselectDrawing(this._selected[e])
            }
            selectDrawing(e, t) {
                const i = this.getIndex(e);
                null != i && this._selectDrawing(i, t)
            }
            unselectDrawing(e) {
                const t = this.getIndex(e);
                null != t && this._unselectDrawing(t)
            }
            deleteSelected() {
                for (let e = this._selected.length - 1; e >= 0; e--)
                    this.disposeIndex(this._selected[e])
            }
            deleteDrawing(e) {
                const t = this.getIndex(e);
                null != t && this.disposeIndex(t)
            }
            cancelDrawing() {
                this._isDrawing && this._disposeIndex(this._index),
                this.isDrawing(!1)
            }
        }
        Object.defineProperty(Ve, "className", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: "DrawingSeries"
        }),
        Object.defineProperty(Ve, "classNames", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: w.e.classNames.concat([Ve.className])
        });
        var Re = i(2077);
        class Xe extends Ve {
            constructor() {
                super(...arguments),
                Object.defineProperty(this, "_tag", {
                    enumerable: !0,
                    configurable: !0,
                    writable: !0,
                    value: "polyline"
                }),
                Object.defineProperty(this, "_drawingLine", {
                    enumerable: !0,
                    configurable: !0,
                    writable: !0,
                    value: this.mainContainer.children.push(Re.x.new(this._root, {
                        forceInactive: !0
                    }))
                })
            }
            _prepareChildren() {
                super._prepareChildren(),
                this.strokes.template.setAll({
                    fill: (0,
                    u.$_)(16777215),
                    fillOpacity: 0
                }),
                this.isDirty("fillShape") && (this.get("fillShape") ? this.fills.template.setAll({
                    visible: !0,
                    forceHidden: !1,
                    fillOpacity: this.get("fillOpacity"),
                    fill: this.get("fillColor")
                }) : this.fills.template.setAll({
                    visible: !1
                }))
            }
            _handlePointerClick(e) {
                if (this._drawingEnabled)
                    if (super._handlePointerClick(e),
                    "grip" == e.target.get("userData"))
                        this._endPolyline(e.target.dataItem);
                    else {
                        if (!this._isDragging) {
                            if (this.isDrawing(!0),
                            this._hideResizer(e.target),
                            this.unselectAllDrawings(),
                            0 == this._index && (this._index = 1),
                            0 == this._pIndex) {
                                this._increaseIndex();
                                const e = {
                                    stroke: this._getStrokeTemplate(),
                                    fill: this._getFillTemplate(),
                                    index: this._index,
                                    corner: "e",
                                    drawingId: this._drawingId
                                };
                                this._setContextSprite(e),
                                this.data.push(e)
                            }
                            if (this._drawingLine.show(),
                            this._addPoint(e),
                            this.get("fillShape") && (1 == this._pIndex ? this._addPoint(e, !0) : this._pIndex > 1 && this.data.moveValue(this.data.getIndex(this.data.length - 1), this.data.length - 2)),
                            this._pIndex - 1 == this.get("pointCount", 1e3))
                                return void this._endPolyline()
                        }
                        this._drawingLine.set("stroke", this.get("strokeColor"))
                    }
            }
            _setContextSprite(e) {
                e.sprite = this.mainContainer
            }
            disableDrawing() {
                super.disableDrawing(),
                this._endPolyline()
            }
            clearDrawings() {
                super.clearDrawings(),
                this._drawingLine.hide()
            }
            _addPoint(e, t) {
                const i = this.chart;
                if (i) {
                    const s = this.get("xAxis")
                      , a = this.get("yAxis")
                      , n = i.plotContainer.toLocal(e.point)
                      , o = this._getXValue(s.positionToValue(s.coordinateToPosition(n.x)))
                      , r = this._getYValue(a.positionToValue(a.coordinateToPosition(n.y)), o)
                      , l = this.dataItems
                      , c = l.length;
                    this.data.push({
                        valueY: r,
                        valueX: o,
                        index: this._index,
                        corner: this._pIndex,
                        drawingId: this._drawingId,
                        closing: t
                    }),
                    this.setPrivate("startIndex", 0),
                    this.setPrivate("endIndex", c);
                    const h = l[c];
                    this._positionBullets(h),
                    this._setXLocation(h, o),
                    this._pIndex++
                }
            }
            _endPolyline(e) {
                if (e || (e = this.dataItems[this.dataItems.length - 1]),
                e) {
                    this._pIndex = 0;
                    const t = e.dataContext
                      , i = t.index;
                    if (0 == t.corner) {
                        this.data.push({
                            valueX: e.get("valueX"),
                            valueY: e.get("valueY"),
                            index: i,
                            corner: "c",
                            closing: !0,
                            drawingId: this._drawingId
                        });
                        const t = this.dataItems
                          , s = t.length - 1;
                        this.setPrivate("startIndex", 0),
                        this.setPrivate("endIndex", s),
                        e = t[s],
                        this._positionBullets(e),
                        this._setXLocation(e, e.get("valueX", 0))
                    }
                    this._drawingLine.hide(),
                    this.isDrawing(!1),
                    this._dispatchAdded()
                }
            }
            _dispatchAdded() {
                this._dispatchStockEvent("drawingadded", this._drawingId, this._index)
            }
            _handlePointerMove(e) {
                if (super._handlePointerMove(e),
                this._isDrawing) {
                    const e = this._movePointerPoint;
                    if (e) {
                        const t = this.dataItems
                          , i = t.length;
                        if (i > 0) {
                            const s = []
                              , a = t[i - 1].get("point");
                            if (a && s.push(a),
                            s.push(e),
                            this.get("fillShape")) {
                                const e = t[i - 2];
                                if (e) {
                                    const t = e.get("point");
                                    t && s.push(t)
                                }
                            }
                            s.length > 1 && this._drawingLine.set("points", s)
                        }
                    }
                }
            }
            _updateElements() {
                P.each(this.dataItems, (e => {
                    const t = e.dataContext;
                    if (t && t.closing && this._di[t.index]) {
                        const i = this._di[t.index][0]
                          , s = i.get("valueX", 0)
                          , a = i.get("valueY");
                        this._setContext(e, "valueX", s),
                        this._setContext(e, "valueY", a, !0),
                        this._setXLocation(e, s),
                        this._positionBullets(e);
                        const n = e.bullets;
                        n && P.each(n, (e => {
                            const t = e.get("sprite");
                            t && t.set("forceHidden", !0)
                        }
                        ))
                    }
                }
                ))
            }
            cancelDrawing() {
                super.cancelDrawing(),
                this._drawingLine.hide(0)
            }
        }
        Object.defineProperty(Xe, "className", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: "PolylineSeries"
        }),
        Object.defineProperty(Xe, "classNames", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: Ve.classNames.concat([Xe.className])
        });
        class Be extends Ve {
            constructor() {
                super(...arguments),
                Object.defineProperty(this, "_tag", {
                    enumerable: !0,
                    configurable: !0,
                    writable: !0,
                    value: "line"
                }),
                Object.defineProperty(this, "_updateExtension", {
                    enumerable: !0,
                    configurable: !0,
                    writable: !0,
                    value: !1
                }),
                Object.defineProperty(this, "lines", {
                    enumerable: !0,
                    configurable: !0,
                    writable: !0,
                    value: new v.o(R.YS.new({}),( () => Re.x._new(this._root, {}, [this.lines.template])))
                }),
                Object.defineProperty(this, "hitLines", {
                    enumerable: !0,
                    configurable: !0,
                    writable: !0,
                    value: new v.o(R.YS.new({}),( () => Re.x._new(this._root, {}, [this.hitLines.template])))
                }),
                Object.defineProperty(this, "_di", {
                    enumerable: !0,
                    configurable: !0,
                    writable: !0,
                    value: []
                }),
                Object.defineProperty(this, "_lines", {
                    enumerable: !0,
                    configurable: !0,
                    writable: !0,
                    value: []
                }),
                Object.defineProperty(this, "_hitLines", {
                    enumerable: !0,
                    configurable: !0,
                    writable: !0,
                    value: []
                })
            }
            makeLine() {
                const e = this.lines.make();
                return this.mainContainer.children.push(e),
                this.lines.push(e),
                e
            }
            makeHitLine() {
                const e = this.hitLines.make();
                return e.addTag("hit"),
                this.mainContainer.children.push(e),
                this.hitLines.push(e),
                e
            }
            _afterNew() {
                super._afterNew();
                const e = this.lines.template;
                e.events.on("pointerover", (e => {
                    this._showSegmentBullets(e.target.get("userData"))
                }
                )),
                this.strokes.template.set("forceInactive", !0),
                e.events.on("pointerout", (e => {
                    const t = e.target.get("userData")
                      , i = this._lines[t];
                    i && i.unhover();
                    const s = this._getStrokeIndex(t)
                      , a = this.strokes.getIndex(s);
                    a && a.unhover()
                }
                ));
                const t = this.hitLines.template;
                t.events.on("pointerover", (e => {
                    const t = e.target.get("userData");
                    this._showSegmentBullets(t);
                    const i = this._lines[t];
                    i && i.hover();
                    const s = this._getStrokeIndex(t)
                      , a = this.strokes.getIndex(s);
                    a && a.hover()
                }
                )),
                t.events.on("click", (e => {
                    const t = e.target.get("userData");
                    this._erasingEnabled ? this._disposeIndex(t) : this._selectDrawing(t, e.originalEvent.ctrlKey)
                }
                )),
                t.events.on("dragstart", (e => {
                    const t = e.target.get("userData")
                      , i = this._lines[t];
                    i && i.dragStart(e);
                    const s = this._getStrokeIndex(t)
                      , a = this.strokes.getIndex(s);
                    a && a.dragStart(e)
                }
                )),
                t.events.on("dragstop", (e => {
                    const t = e.target.get("userData");
                    this.markDirtyValues(),
                    e.target.setAll({
                        x: 0,
                        y: 0
                    });
                    const i = this._lines[t];
                    i && (i.dragStop(e),
                    i.setAll({
                        x: 0,
                        y: 0
                    }));
                    const s = this._getStrokeIndex(t)
                      , a = this.strokes.getIndex(s);
                    a && (a.dragStop(e),
                    a.setAll({
                        x: 0,
                        y: 0
                    }))
                }
                )),
                t.events.on("pointerout", (e => {
                    const t = e.target.get("userData")
                      , i = this._lines[t];
                    i && i.unhover();
                    const s = this._getStrokeIndex(t)
                      , a = this.strokes.getIndex(s);
                    a && a.unhover()
                }
                ))
            }
            _updateElements() {
                const e = this.chart;
                if (e) {
                    const t = 2 * Math.max(e.plotContainer.width(), e.plotContainer.height());
                    for (let e = 0; e < this._lines.length; e++)
                        if (this._lines[e]) {
                            const i = this._di[e].p1
                              , s = this._di[e].p2;
                            if (i && s) {
                                const a = i.get("point")
                                  , n = s.get("point");
                                if (a && n) {
                                    const i = Math.max(Math.abs(t - a.x), Math.abs(t - n.x), Math.abs(t - a.y), Math.abs(t - n.y), Math.abs(a.x), Math.abs(n.x), Math.abs(a.y), Math.abs(n.y));
                                    let s = m.getAngle(n, a);
                                    const o = {
                                        x: a.x + i * m.cos(s),
                                        y: a.y + i * m.sin(s)
                                    }
                                      , r = {
                                        x: n.x - i * m.cos(s),
                                        y: n.y - i * m.sin(s)
                                    };
                                    this._updateLine(e, o, r, a, n)
                                }
                            }
                        }
                }
            }
            _updateLine(e, t, i, s, a) {
                const n = this._lines[e]
                  , o = this._hitLines[e];
                let r = [[[t, s]], [[a, i]]]
                  , l = [[[t, i]]];
                n.set("segments", r),
                o.set("segments", l)
            }
            _handlePointerClickReal(e) {
                this._isDragging || this._isSelecting || (this._isDrawing ? (this.isDrawing(!1),
                this._dispatchStockEvent("drawingadded", this._drawingId, this._index)) : (this.isDrawing(!0),
                this._hideResizer(e.target),
                this.unselectAllDrawings(),
                this._increaseIndex(),
                this._addPoints(e, this._index)))
            }
            _handlePointerClick(e) {
                this._drawingEnabled && (super._handlePointerClick(e),
                this._handlePointerClickReal(e))
            }
            _handlePointerMove(e) {
                super._handlePointerMove(e),
                this._handlePointerMoveReal(e)
            }
            _handlePointerMoveReal(e) {
                if (this._isDrawing) {
                    const e = this._movePointerPoint
                      , t = this._index
                      , i = this._di[t];
                    if (e && i) {
                        const s = this.get("xAxis")
                          , a = this.get("yAxis")
                          , n = s.positionToValue(s.coordinateToPosition(e.x))
                          , o = this._getXValue(n)
                          , r = this._getYValue(a.positionToValue(a.coordinateToPosition(e.y)), n)
                          , l = i.p1
                          , c = i.p2;
                        l && c && (this._setContext(c, "valueX", o, !0),
                        this._setContext(c, "valueY", r, !0),
                        this._setXLocation(l, l.get("valueX", 0)),
                        this._setXLocation(c, o),
                        this._updateSegment(t))
                    }
                }
            }
            _createElements(e) {
                if (!this._lines[e]) {
                    const t = this.makeLine();
                    this._lines[e] = t;
                    const i = this.makeHitLine();
                    this._hitLines[e] = i;
                    const s = this.dataItems[this.dataItems.length - 1].dataContext;
                    s.sprite = t;
                    let a = this.get("showExtension", !0)
                      , n = this.get("strokeColor", this.get("stroke"));
                    const o = s.stroke;
                    o && (n = o.get("stroke")),
                    s && (a = s.showExtension),
                    t.setPrivate("visible", a);
                    const r = {
                        stroke: n,
                        userData: e
                    };
                    t.setAll(r),
                    i.setAll(r),
                    this._updateSegment(e)
                }
            }
            _addTemplates(e) {
                this.data.push({
                    stroke: this._getStrokeTemplate(),
                    fill: this._getFillTemplate(),
                    index: e,
                    showExtension: this.get("showExtension", !0),
                    corner: "e",
                    drawingId: this._drawingId
                })
            }
            _addPoints(e, t) {
                const i = this.chart;
                this._addTemplates(t);
                const s = this.get("xAxis")
                  , a = this.get("yAxis")
                  , n = i.plotContainer.toLocal(e.point)
                  , o = s.positionToValue(s.coordinateToPosition(n.x))
                  , r = this._getXValue(o)
                  , l = this._getYValue(a.positionToValue(a.coordinateToPosition(n.y)), o);
                this._addPointsReal(r, l, t)
            }
            _addPointsReal(e, t, i) {
                this._addPoint(e, t, "p1", i),
                this._addPoint(e, t, "p2", i)
            }
            _addPoint(e, t, i, s) {
                this.data.push({
                    valueY: t,
                    valueX: e,
                    corner: i,
                    index: s,
                    drawingId: this._drawingId
                })
            }
            disposeDataItem(e) {
                super.disposeDataItem(e);
                const t = e.dataContext;
                if (t) {
                    const e = t.index
                      , i = this._lines[e];
                    i && (this.lines.removeValue(i),
                    delete this._lines[e],
                    i.dispose());
                    const s = this._hitLines[e];
                    s && (this.hitLines.removeValue(s),
                    delete this._hitLines[e],
                    s.dispose())
                }
            }
            setInteractive(e) {
                super.setInteractive(e),
                this.hitLines.template.set("forceInactive", !e),
                this.lines.template.set("forceInactive", !e)
            }
            enableDrawingSelection(e) {
                super.enableDrawingSelection(e),
                this.hitLines.template.set("forceInactive", !e),
                this.lines.template.set("forceInactive", !e),
                this.strokes.template.set("forceInactive", !0)
            }
            _applySettings(e, t) {
                super._applySettings(e, t);
                let i = this._getContext(e);
                if (i) {
                    let e = i.sprite;
                    e && t && t.stroke && e.set("stroke", t.stroke)
                }
            }
        }
        Object.defineProperty(Be, "className", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: "SimpleLineSeries"
        }),
        Object.defineProperty(Be, "classNames", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: Ve.classNames.concat([Be.className])
        });
        class He extends Be {
            constructor() {
                super(...arguments),
                Object.defineProperty(this, "_di", {
                    enumerable: !0,
                    configurable: !0,
                    writable: !0,
                    value: []
                }),
                Object.defineProperty(this, "_tag", {
                    enumerable: !0,
                    configurable: !0,
                    writable: !0,
                    value: "rectangle"
                })
            }
            _updateSegment(e) {
                const t = this._di[e].p1
                  , i = this._di[e].p2;
                if (this.get("series") && t && i) {
                    const e = this.get("field") + "Y";
                    let s = t.get(e)
                      , a = i.get(e);
                    this._setContext(t, "valueY", s, !0),
                    this._setContext(i, "valueY", a, !0),
                    this._positionBullets(t),
                    this._positionBullets(i)
                }
            }
            _setXLocation(e, t) {
                this.get("snapToData") ? e.set("locationX", 0) : this._setXLocationReal(e, t)
            }
            _updateChildren() {
                super._updateChildren();
                const e = this.chart;
                if (this.fills.clear(),
                e)
                    for (let e = 0; e < this._lines.length; e++)
                        if (this._lines[e]) {
                            const t = this._di[e].p1
                              , i = this._di[e].p2
                              , s = this._di[e].e.dataContext
                              , a = this.makeFill(this.fills);
                            for (let e = this.dataItems.indexOf(t); e >= 0; e--) {
                                const t = this.dataItems[e].dataContext.fill;
                                t && (a.template = t)
                            }
                            const n = [this.dataItems.indexOf(t), this.dataItems.indexOf(i)];
                            let o = this.get("fillColor", this.get("fill"));
                            const r = s.fill;
                            r && (o = r.get("fill"));
                            const l = {
                                userData: n,
                                fill: o
                            };
                            a.setAll(l);
                            const c = t.get("point")
                              , h = i.get("point");
                            if (c && h) {
                                a.set("draw", (e => {
                                    e.moveTo(c.x, c.y),
                                    e.lineTo(h.x, c.y),
                                    e.lineTo(h.x, h.y),
                                    e.lineTo(c.x, h.y),
                                    e.lineTo(c.x, c.y)
                                }
                                ));
                                const t = this.strokes.getIndex(this._getStrokeIndex(e));
                                t && t.set("draw", (e => {
                                    e.moveTo(c.x, c.y),
                                    e.lineTo(h.x, c.y),
                                    e.lineTo(h.x, h.y),
                                    e.lineTo(c.x, h.y),
                                    e.lineTo(c.x, c.y)
                                }
                                )),
                                this._updateOthers(e, a, c, h)
                            }
                        }
            }
            _updateOthers(e, t, i, s) {}
            _drawFill() {}
            _updateLine() {}
        }
        Object.defineProperty(He, "className", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: "RectangleSeries"
        }),
        Object.defineProperty(He, "classNames", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: Be.classNames.concat([He.className])
        });
        class ze extends Be {
            constructor() {
                super(...arguments),
                Object.defineProperty(this, "_di", {
                    enumerable: !0,
                    configurable: !0,
                    writable: !0,
                    value: []
                }),
                Object.defineProperty(this, "_tag", {
                    enumerable: !0,
                    configurable: !0,
                    writable: !0,
                    value: "parallelchannel"
                }),
                Object.defineProperty(this, "_firstClick", {
                    enumerable: !0,
                    configurable: !0,
                    writable: !0,
                    value: !1
                })
            }
            _addPointsReal(e, t, i) {
                this._addPoint(e, t, "p1", i),
                this._addPoint(e, t, "p2", i),
                this._addPoint(e, t, "p3", i),
                this._addPoint(e, t, "p4", i),
                this._addPoint(e, t, "m1", i),
                this._addPoint(e, t, "m2", i)
            }
            _handlePointerClickReal(e) {
                this._isDragging || (this._isDrawing ? (this._firstClick || (this.isDrawing(!1),
                this._dispatchStockEvent("drawingadded", this._drawingId)),
                this._firstClick = !1) : this._firstClick || (this.isDrawing(!0),
                this._hideResizer(e.target),
                this._increaseIndex(),
                this._addPoints(e, this._index),
                this._firstClick = !0,
                this.unselectDrawings()))
            }
            _handlePointerMoveReal(e) {
                if (this._isDrawing) {
                    const e = this._movePointerPoint;
                    if (e) {
                        const t = this.get("xAxis")
                          , i = this.get("yAxis")
                          , s = this._getXValue(t.positionToValue(t.coordinateToPosition(e.x)))
                          , a = this._getYValue(i.positionToValue(i.coordinateToPosition(e.y)), s)
                          , n = this._index
                          , o = this._di[n].p1
                          , r = this._di[n].p2
                          , l = this._di[n].p3
                          , c = this._di[n].p4
                          , h = this._di[n].m1
                          , d = this._di[n].m2;
                        o && r && (this._firstClick ? (this._setContext(r, "valueX", s),
                        this._setContext(r, "valueY", a, !0),
                        this._setXLocation(o, o.get("valueX", 0)),
                        this._setXLocation(l, l.get("valueX", 0)),
                        this._setXLocation(r, s),
                        this._setContext(c, "valueX", s),
                        this._setContext(c, "valueY", a, !0),
                        this._setXLocation(c, s),
                        this._setContext(h, "valueX", s),
                        this._setContext(h, "valueY", a, !0),
                        this._setXLocation(h, s),
                        this._setContext(d, "valueX", s),
                        this._setContext(d, "valueY", a, !0),
                        this._setXLocation(d, s)) : (this._setContext(c, "valueY", a, !0),
                        this._setContext(l, "valueY", o.get("valueY", 0) + a - r.get("valueY", 0), !0),
                        this._updateMiddlePoints(n)),
                        this._updateSegment(n))
                    }
                }
            }
            _updateMiddlePoints(e) {
                const t = this._di[e].p1
                  , i = this._di[e].p2
                  , s = this._di[e].p3
                  , a = this._di[e].p4
                  , n = this._di[e].m1
                  , o = this._di[e].m2
                  , r = t.get("valueX", 0)
                  , l = i.get("valueX", 0)
                  , c = s.get("valueX", 0)
                  , h = a.get("valueX", 0)
                  , d = t.get("valueY", 0)
                  , u = i.get("valueY", 0)
                  , g = s.get("valueY", 0)
                  , p = a.get("valueY", 0)
                  , m = Math.round(r + (l - r) / 2);
                this._setContext(n, "valueY", d + (u - d) / 2, !0),
                this._setContext(n, "valueX", m, !0),
                this._setXLocation(n, m);
                const f = c + (h - c) / 2;
                if (this._setContext(o, "valueY", g + (p - g) / 2, !0),
                this._setContext(o, "valueX", f, !0),
                this._setXLocation(o, f),
                n.bullets) {
                    const e = n.bullets[0].get("sprite");
                    if (e) {
                        const s = t.get("point")
                          , a = i.get("point");
                        s && a && (e.set("x", s.x + (a.x - s.x) / 2),
                        e.set("y", s.y + (a.y - s.y) / 2))
                    }
                }
                if (o.bullets) {
                    const e = o.bullets[0].get("sprite");
                    if (e) {
                        const t = s.get("point")
                          , i = a.get("point");
                        t && i && (e.set("x", t.x + (i.x - t.x) / 2),
                        e.set("y", t.y + (i.y - t.y) / 2))
                    }
                }
            }
            _updateChildren() {
                super._updateChildren();
                const e = this.chart;
                if (this.fills.clear(),
                e)
                    for (let e = 0; e < this._lines.length; e++) {
                        const t = this._lines[e];
                        if (t) {
                            const i = this._di[e].p1
                              , s = this._di[e].p2
                              , a = this._di[e].p3
                              , n = this._di[e].p4
                              , o = this._di[e].e.dataContext
                              , r = this.makeFill(this.fills);
                            for (let e = this.dataItems.indexOf(i); e >= 0; e--) {
                                const t = this.dataItems[e].dataContext.fill;
                                t && (r.template = t)
                            }
                            const l = [this.dataItems.indexOf(i), this.dataItems.indexOf(s)];
                            let c = this.get("fillColor", this.get("fill"));
                            const h = o.fill;
                            h && (c = h.get("fill"));
                            const d = {
                                userData: l,
                                fill: c
                            };
                            r.setAll(d);
                            const u = i.get("point")
                              , g = s.get("point")
                              , p = a.get("point")
                              , m = n.get("point");
                            if (u && g && p && m) {
                                r.set("draw", (e => {
                                    e.moveTo(u.x, u.y),
                                    e.lineTo(g.x, g.y),
                                    e.lineTo(m.x, m.y),
                                    e.lineTo(p.x, p.y),
                                    e.lineTo(u.x, u.y)
                                }
                                ));
                                const i = this.strokes.getIndex(this._getStrokeIndex(e));
                                i && i.set("draw", (e => {
                                    e.moveTo(u.x, u.y),
                                    e.lineTo(g.x, g.y),
                                    e.moveTo(p.x, p.y),
                                    e.lineTo(m.x, m.y)
                                }
                                )),
                                t.set("draw", (e => {
                                    e.moveTo(u.x, u.y + (p.y - u.y) / 2),
                                    e.lineTo(g.x, g.y + (m.y - g.y) / 2)
                                }
                                )),
                                this._updateOthers(e, r, u, g),
                                this._updateMiddlePoints(e)
                            }
                        }
                    }
            }
            _handleBulletDraggedReal(e, t) {
                const i = this.get("xAxis")
                  , s = this.get("yAxis")
                  , a = e.dataContext
                  , n = a.index
                  , o = this._di[n].p1
                  , r = this._di[n].p2
                  , l = this._di[n].p3
                  , c = this._di[n].p4
                  , h = this._di[n].m1
                  , d = this._di[n].m2;
                if (o && r && l && c) {
                    const h = l.get("valueY", 0) - o.get("valueY", 0)
                      , d = r.get("valueY", 0) - o.get("valueY", 0)
                      , u = c.get("valueY", 0) - l.get("valueY", 0)
                      , g = this._getXValue(i.positionToValue(i.coordinateToPosition(t.x)))
                      , p = this._getYValue(s.positionToValue(s.coordinateToPosition(t.y)), g);
                    this._setContext(e, "valueX", g),
                    this._setContext(e, "valueY", p, !0),
                    this._setXLocation(e, g);
                    const m = a.corner;
                    "p1" == m ? (this._setContext(l, "valueX", g),
                    this._setContext(l, "valueY", p + h, !0),
                    this._setXLocation(l, g)) : "p3" == m ? (this._setContext(o, "valueX", g),
                    this._setContext(o, "valueY", p - h, !0),
                    this._setXLocation(o, g)) : "p2" == m ? (this._setContext(c, "valueX", g),
                    this._setContext(c, "valueY", p + h, !0),
                    this._setXLocation(c, g)) : "p4" == m ? (this._setContext(r, "valueX", g),
                    this._setContext(r, "valueY", p - h, !0),
                    this._setXLocation(r, g)) : "m1" == m ? (this._setContext(o, "valueY", p - d / 2, !0),
                    this._setContext(r, "valueY", p + d / 2, !0)) : "m2" == m && (this._setContext(l, "valueY", p - u / 2, !0),
                    this._setContext(c, "valueY", p + u / 2, !0)),
                    this._updateMiddlePoints(n)
                }
                this._positionBullets(o),
                this._positionBullets(r),
                this._positionBullets(l),
                this._positionBullets(c),
                this._positionBullets(h),
                this._positionBullets(d)
            }
            _updateOthers(e, t, i, s) {}
            _drawFill() {}
            _updateLine() {}
        }
        Object.defineProperty(ze, "className", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: "ParallelChannelSeries"
        }),
        Object.defineProperty(ze, "classNames", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: Be.classNames.concat([ze.className])
        });
        class We extends Be {
            constructor() {
                super(...arguments),
                Object.defineProperty(this, "_tag", {
                    enumerable: !0,
                    configurable: !0,
                    writable: !0,
                    value: "horizontal"
                })
            }
            _afterNew() {
                super._afterNew(),
                this.lines.template.set("forceHidden", !0)
            }
            _handleBulletDragged(e) {
                super._handleBulletDragged(e);
                const t = e.target.dataItem.dataContext;
                if (t) {
                    const e = t.index
                      , i = this._di[e].p1
                      , s = this._di[e].p2
                      , a = this._di[e].p3
                      , n = this._movePointerPoint;
                    if (i && s && a && n) {
                        const e = this.get("yAxis")
                          , t = this.get("xAxis")
                          , o = this._getXValue(t.positionToValue(t.coordinateToPosition(n.x)))
                          , r = this._getYValue(e.positionToValue(e.coordinateToPosition(n.y)), o)
                          , l = t.getPrivate("min", 0)
                          , c = t.getPrivate("max", 1);
                        this._setContext(i, "valueY", r, !0),
                        this._setContext(s, "valueY", r, !0),
                        this._setContext(a, "valueY", r, !0),
                        this._setContext(i, "valueX", l - (c - l)),
                        this._setContext(s, "valueX", o),
                        this._setContext(a, "valueX", c + (c - l)),
                        this._setXLocation(s, s.get("valueX", 0)),
                        this._positionBullets(s)
                    }
                }
            }
            _handlePointerMoveReal() {}
            _updateSegment(e) {
                if (this._di[e]) {
                    const t = this._di[e].p1
                      , i = this._di[e].p3;
                    if (t && i) {
                        const e = this.get("xAxis")
                          , s = e.getPrivate("min", 0)
                          , a = e.getPrivate("max", 1);
                        this._setContext(t, "valueX", s - (a - s), !0),
                        this._setContext(i, "valueX", a + (a - s), !0)
                    }
                }
            }
            _handlePointerClickReal(e) {
                this._drawingEnabled && (this._isDragging || (this._increaseIndex(),
                this._addPoints(e, this._index),
                this.isDrawing(!1),
                this.unselectAllDrawings(),
                this._updateSegment(this._index),
                this._dispatchStockEvent("drawingadded", this._drawingId, this._index)))
            }
            _addPointsReal(e, t, i) {
                super._addPointsReal(e, t, i),
                this._addPoint(e, t, "p3", i)
            }
        }
        Object.defineProperty(We, "className", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: "HorizontalLineSeries"
        }),
        Object.defineProperty(We, "classNames", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: Be.classNames.concat([We.className])
        });
        class $e extends Be {
            constructor() {
                super(...arguments),
                Object.defineProperty(this, "_tag", {
                    enumerable: !0,
                    configurable: !0,
                    writable: !0,
                    value: "vertical"
                })
            }
            _afterNew() {
                super._afterNew(),
                this.lines.template.set("forceHidden", !0)
            }
            _handleBulletDragged(e) {
                super._handleBulletDragged(e);
                const t = e.target.dataItem.dataContext;
                if (t) {
                    const e = t.index
                      , i = this._di[e].p1
                      , s = this._di[e].p2
                      , a = this._di[e].p3
                      , n = this._movePointerPoint;
                    if (i && s && a && n) {
                        const e = this.get("yAxis")
                          , t = this.get("xAxis")
                          , o = this._getXValue(t.positionToValue(t.coordinateToPosition(n.x)))
                          , r = this._getYValue(e.positionToValue(e.coordinateToPosition(n.y)), o)
                          , l = e.getPrivate("min", 0)
                          , c = e.getPrivate("max", 1);
                        this._setContext(i, "valueY", l - (c - l), !0),
                        this._setContext(s, "valueY", r, !0),
                        this._setContext(a, "valueY", c + (c - l), !0),
                        this._setContext(i, "valueX", o),
                        this._setContext(s, "valueX", o),
                        this._setContext(a, "valueX", o),
                        this._setXLocation(i, o),
                        this._setXLocation(s, o),
                        this._setXLocation(a, o),
                        this._positionBullets(i),
                        this._positionBullets(s),
                        this._positionBullets(a)
                    }
                }
            }
            _updateSegment(e) {
                if (this._di[e]) {
                    const t = this._di[e].p1
                      , i = this._di[e].p3;
                    if (t && i) {
                        const e = this.get("yAxis")
                          , s = e.getPrivate("min", 0)
                          , a = e.getPrivate("max", 1);
                        this._setContext(t, "valueY", s - (a - s), !0),
                        this._setContext(i, "valueY", a + (a - s), !0)
                    }
                }
            }
            _handlePointerMoveReal() {}
            _handlePointerClickReal(e) {
                this._drawingEnabled && (this._isDragging || (this._increaseIndex(),
                this._addPoints(e, this._index),
                this.isDrawing(!1),
                this._hideResizer(),
                this.unselectAllDrawings(),
                this._updateSegment(this._index),
                this._dispatchStockEvent("drawingadded", this._drawingId, this._index)))
            }
            _addPointsReal(e, t, i) {
                super._addPointsReal(e, t, i),
                this._addPoint(e, t, "p3", i)
            }
        }
        Object.defineProperty($e, "className", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: "VerticalLineSeries"
        }),
        Object.defineProperty($e, "classNames", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: Be.classNames.concat([$e.className])
        });
        class Ue extends Be {
            constructor() {
                super(...arguments),
                Object.defineProperty(this, "_tag", {
                    enumerable: !0,
                    configurable: !0,
                    writable: !0,
                    value: "average"
                })
            }
            _afterNew() {
                super._afterNew(),
                this.setPrivate("allowChangeSnap", !1),
                this.set("snapToData", !0)
            }
            _updateSegment(e) {
                if (this._di[e]) {
                    const t = this._di[e].p1
                      , i = this._di[e].p2
                      , s = this.get("series");
                    if (s && t && i) {
                        let e = this._getXValue(t.get("valueX"))
                          , a = this._getXValue(i.get("valueX"));
                        const n = this.get("xAxis")
                          , o = n.getSeriesItem(s, Math.max(0, n.valueToPosition(e)))
                          , r = n.getSeriesItem(s, Math.min(1, n.valueToPosition(a)))
                          , l = this.get("field") + "Y";
                        if (o && r) {
                            let n = s.dataItems.indexOf(o)
                              , c = s.dataItems.indexOf(r);
                            n > c && ([n,c] = [c, n]);
                            let h = 0
                              , d = 0;
                            for (let e = n; e <= c; e++) {
                                const t = s.dataItems[e].get(l);
                                null != t && (h += t,
                                d++)
                            }
                            const u = h / d;
                            t.set("valueX", e),
                            i.set("valueX", a),
                            this._setContext(t, "valueX", e),
                            this._setContext(i, "valueX", a),
                            this._setContext(t, "valueY", u, !0),
                            this._setContext(i, "valueY", u, !0),
                            this._positionBullets(t),
                            this._positionBullets(i)
                        }
                    }
                    this._updateElements()
                }
            }
        }
        function Qe(e, t) {
            const i = Math.pow(10, t);
            return Math.round(e * i) / i
        }
        Object.defineProperty(Ue, "className", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: "AverageSeries"
        }),
        Object.defineProperty(Ue, "classNames", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: Be.classNames.concat([Ue.className])
        });
        class Ge extends Be {
            constructor() {
                super(...arguments),
                Object.defineProperty(this, "_tag", {
                    enumerable: !0,
                    configurable: !0,
                    writable: !0,
                    value: "regression"
                })
            }
            _afterNew() {
                super._afterNew(),
                this.setPrivate("allowChangeSnap", !1),
                this.set("snapToData", !0)
            }
            _updateSegment(e) {
                const t = this._di[e].p1
                  , i = this._di[e].p2
                  , s = this.get("series");
                if (s && t && i) {
                    const e = s.get("xAxis");
                    let a = this._getXValue(t.get("valueX"))
                      , n = this._getXValue(i.get("valueX"));
                    const o = e.getSeriesItem(s, e.valueToPosition(a))
                      , r = e.getSeriesItem(s, e.valueToPosition(n))
                      , l = this.get("field") + "Y";
                    if (o && r) {
                        const e = s.dataItems;
                        let c = e.indexOf(o)
                          , h = e.indexOf(r)
                          , d = !1;
                        c > h && (d = !0,
                        [c,h] = [h, c]);
                        const u = [];
                        let g = 0;
                        for (let t = c; t <= h; t++) {
                            const i = e[t];
                            u.push([g, i.get(l)]),
                            g++
                        }
                        const p = function(e, t=2) {
                            const i = [0, 0, 0, 0, 0];
                            let s = 0;
                            for (let t = 0; t < e.length; t++)
                                null !== e[t][1] && (s++,
                                i[0] += e[t][0],
                                i[1] += e[t][1],
                                i[2] += e[t][0] * e[t][0],
                                i[3] += e[t][0] * e[t][1],
                                i[4] += e[t][1] * e[t][1]);
                            const a = s * i[2] - i[0] * i[0]
                              , n = s * i[3] - i[0] * i[1]
                              , o = 0 === a ? 0 : Qe(n / a, t)
                              , r = Qe(i[1] / s - o * i[0] / s, t);
                            return e.map((e => {
                                return [Qe(i = e[0], t), Qe(o * i + r, t)];
                                var i
                            }
                            ))
                        }(u);
                        if (p.length > 1) {
                            const e = p[0]
                              , s = p[p.length - 1];
                            if (e && s) {
                                let o = e[1]
                                  , r = s[1];
                                d && ([o,r] = [r, o]),
                                this._setContext(t, "valueY", o, !0),
                                this._setContext(i, "valueY", r, !0),
                                this._setContext(t, "valueX", a),
                                this._setContext(i, "valueX", n),
                                this._positionBullets(t),
                                this._positionBullets(i)
                            }
                        }
                    }
                }
            }
        }
        Object.defineProperty(Ge, "className", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: "RegressionSeries"
        }),
        Object.defineProperty(Ge, "classNames", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: Be.classNames.concat([Ge.className])
        });
        class Ze extends Ve {
            constructor() {
                super(...arguments),
                Object.defineProperty(this, "_panX", {
                    enumerable: !0,
                    configurable: !0,
                    writable: !0,
                    value: void 0
                }),
                Object.defineProperty(this, "_panY", {
                    enumerable: !0,
                    configurable: !0,
                    writable: !0,
                    value: void 0
                }),
                Object.defineProperty(this, "_pIndex", {
                    enumerable: !0,
                    configurable: !0,
                    writable: !0,
                    value: 0
                }),
                Object.defineProperty(this, "_tag", {
                    enumerable: !0,
                    configurable: !0,
                    writable: !0,
                    value: "doodle"
                }),
                Object.defineProperty(this, "_down", {
                    enumerable: !0,
                    configurable: !0,
                    writable: !0,
                    value: !1
                })
            }
            _afterNew() {
                super._afterNew(),
                this.setPrivate("allowChangeSnap", !1),
                this.bullets.clear(),
                this.strokes.template.setAll({
                    fill: (0,
                    u.$_)(16777215),
                    fillOpacity: 0
                })
            }
            _handlePointerMove(e) {
                super._handlePointerMove(e),
                this._drawingEnabled && this._isPointerDown && this._handleBulletPosition(e)
            }
            _handleBulletPosition(e) {
                const t = this.chart;
                if (t) {
                    const i = this.get("xAxis")
                      , s = this.get("yAxis")
                      , a = t.plotContainer.toLocal(e.point)
                      , n = this._getXValue(i.positionToValue(i.coordinateToPosition(a.x)))
                      , o = this._getYValue(s.positionToValue(s.coordinateToPosition(a.y)), n)
                      , r = this._index;
                    this.data.push({
                        valueY: o,
                        valueX: n,
                        index: r,
                        corner: this._pIndex,
                        drawingId: this._drawingId
                    });
                    const l = this.dataItems.length
                      , c = this.dataItems[l - 1];
                    this._setXLocation(c, n),
                    this._pIndex++,
                    this.setPrivate("startIndex", 0),
                    this.setPrivate("endIndex", l)
                }
            }
            _handlePointerDown(e) {
                super._handlePointerDown(e);
                const t = this.chart;
                if (t) {
                    this._increaseIndex(),
                    this._pIndex = 0,
                    this._panX = t.get("panX"),
                    this._panY = t.get("panY"),
                    t.set("panX", !1),
                    t.set("panY", !1);
                    const e = t.get("cursor");
                    e && e.setPrivate("visible", !1),
                    this._down = !0,
                    this.data.push({
                        stroke: this._getStrokeTemplate(),
                        sprite: this.mainContainer,
                        index: this._index,
                        corner: this._pIndex,
                        drawingId: this._drawingId
                    })
                }
            }
            _handlePointerUp(e) {
                super._handlePointerUp(e);
                const t = this.chart;
                t && this._down && (this._down = !1,
                this.setTimeout(( () => {
                    t.set("panX", this._panX),
                    t.set("panY", this._panY);
                    const e = t.get("cursor");
                    e && e.setPrivate("visible", !0)
                }
                ), 100),
                this._dispatchStockEvent("drawingadded", this._drawingId, this._index))
            }
        }
        Object.defineProperty(Ze, "className", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: "DoodleSeries"
        }),
        Object.defineProperty(Ze, "classNames", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: Ve.classNames.concat([Ze.className])
        });
        class Je extends Xe {
            constructor() {
                super(...arguments),
                Object.defineProperty(this, "spriteResizer", {
                    enumerable: !0,
                    configurable: !0,
                    writable: !0,
                    value: void 0
                }),
                Object.defineProperty(this, "_tag", {
                    enumerable: !0,
                    configurable: !0,
                    writable: !0,
                    value: "icon"
                })
            }
            _afterNew() {
                super._afterNew(),
                this.spriteResizer = this._getStockChart().spriteResizer,
                this.bullets.clear(),
                this.strokes.template.set("visible", !1),
                this.fills.template.set("visible", !1),
                this.bullets.push(( (e, t, i) => {
                    const s = i.dataContext
                      , a = s.settings;
                    if (a) {
                        const t = r.T.new(e, {
                            draggable: !0,
                            themeTags: ["icon"]
                        }, a);
                        return s.sprite = t,
                        this._addBulletInteraction(t),
                        t.events.on("click", (e => {
                            const i = this.spriteResizer;
                            i.get("sprite") == t ? i.set("sprite", void 0) : i.set("sprite", t)
                        }
                        )),
                        t.events.on("pointerover", ( () => {
                            this._isHover = !0
                        }
                        )),
                        t.events.on("pointerout", ( () => {
                            this._isHover = !1
                        }
                        )),
                        this.spriteResizer.set("sprite", void 0),
                        t.on("scale", (e => {
                            a.set("scale", e)
                        }
                        )),
                        t.on("rotation", (e => {
                            a.set("rotation", e)
                        }
                        )),
                        je.g.new(this._root, {
                            locationX: void 0,
                            sprite: t
                        })
                    }
                }
                ))
            }
            _setContextSprite(e) {}
            _handlePointerClick(e) {
                this._selected.length > 0 ? (this._hideResizer(),
                this.unselectAllDrawings()) : this._drawingEnabled && !this._isHover && (super._handlePointerClick(e),
                this.data.getIndex(this.data.length - 1).settings = this._getIconTemplate(),
                this._increaseIndex(),
                this._di[this._index] = {},
                this._dispatchStockEvent("drawingadded", this._drawingId, this._index)),
                this.isDrawing(!1)
            }
            disposeDataItem(e) {
                super.disposeDataItem(e),
                this.spriteResizer.set("sprite", void 0),
                this._isHover = !1
            }
            _applySettings(e, t) {
                let i, s, a = this._getContext(e);
                if (a && (s = a.sprite,
                i = a.settings,
                s)) {
                    const e = this.get("iconSvgPath")
                      , a = this.get("iconCenterX")
                      , n = this.get("iconCenterY");
                    s.set("svgPath", e),
                    s.set("centerX", a),
                    s.set("centerY", n);
                    const o = s.states.lookup("default");
                    o.set("svgPath", e),
                    o.set("centerX", a),
                    o.set("centerY", n),
                    i && (i.set("svgPath", e),
                    i.set("centerX", a),
                    i.set("centerY", n)),
                    t && M.each(t, ( (e, t) => {
                        s.set(e, t),
                        o.set(e, t),
                        i && i.set(e, t)
                    }
                    ))
                }
            }
            _hideAllBullets() {}
            _dispatchAdded() {}
            _getIconTemplate() {
                const e = {}
                  , t = this.get("iconSvgPath");
                null != t && (e.svgPath = t);
                const i = this.get("iconScale");
                null != i && (e.scale = i);
                const s = this.get("iconCenterX");
                null != s && (e.centerX = s);
                const a = this.get("iconCenterY");
                null != a && (e.centerY = a);
                const n = this.get("strokeColor");
                null != n && (e.stroke = n);
                const o = this.get("strokeOpacity");
                null != o && (e.strokeOpacity = o);
                const r = this.get("fillColor");
                null != r && (e.fill = r);
                const l = this.get("fillOpacity");
                return null != l && (e.fillOpacity = l),
                R.YS.new(e)
            }
            setInteractive(e) {
                super.setInteractive(e),
                P.each(this.dataItems, (t => {
                    const i = t.bullets;
                    i && P.each(i, (t => {
                        const i = t.get("sprite");
                        i && i.set("forceInactive", !e)
                    }
                    ))
                }
                ))
            }
            _prepareChildren() {
                super._prepareChildren(),
                this.isDirty("iconSvgPath") && P.each(this._selected, (e => {
                    this._applySettings(e)
                }
                ))
            }
            _updateSelector(e, t) {
                var i;
                const s = this._getContext(t);
                if (s) {
                    const a = s.sprite;
                    if (a) {
                        a.dataItem == (null === (i = this.spriteResizer.get("sprite")) || void 0 === i ? void 0 : i.dataItem) ? e.hide(0) : -1 != this._selected.indexOf(t) && e.show(0);
                        const s = this.get("selectorPadding", 5);
                        let n = a.bounds()
                          , o = n.right - n.left + 2 * s
                          , r = n.bottom - n.top + 2 * s;
                        e.setAll({
                            width: o,
                            height: r,
                            x: n.left - s,
                            y: n.top - s
                        })
                    }
                }
            }
            _handleBulletDragStart(e) {
                this._hideResizer(e.target);
                const t = this._getStockChart();
                t && t._dragStartDrawing(e)
            }
            _handleBulletDragStop(e) {
                const t = this._getStockChart();
                t && t._dragStopDrawing(e),
                this._root.events.once("frameended", ( () => {
                    this._positionBullets(e.target.dataItem)
                }
                ))
            }
        }
        Object.defineProperty(Je, "className", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: "IconSeries"
        }),
        Object.defineProperty(Je, "classNames", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: Xe.classNames.concat([Je.className])
        });
        var Ke = i(6691);
        class qe extends Xe {
            constructor() {
                super(...arguments),
                Object.defineProperty(this, "spriteResizer", {
                    enumerable: !0,
                    configurable: !0,
                    writable: !0,
                    value: void 0
                }),
                Object.defineProperty(this, "_clickEvent", {
                    enumerable: !0,
                    configurable: !0,
                    writable: !0,
                    value: void 0
                }),
                Object.defineProperty(this, "_tag", {
                    enumerable: !0,
                    configurable: !0,
                    writable: !0,
                    value: "label"
                }),
                Object.defineProperty(this, "_isEditing", {
                    enumerable: !0,
                    configurable: !0,
                    writable: !0,
                    value: !1
                }),
                Object.defineProperty(this, "_isSelected", {
                    enumerable: !0,
                    configurable: !0,
                    writable: !0,
                    value: !1
                })
            }
            _afterNew() {
                super._afterNew(),
                this.spriteResizer = this._getStockChart().spriteResizer,
                this.strokes.template.set("visible", !1),
                this.fills.template.set("visible", !1),
                this.addTag(this._tag)
            }
            _dispatchAdded() {}
            _setContextSprite(e) {}
            _tweakBullet(e, t) {
                const i = t.dataContext
                  , s = i.text
                  , a = i.settings;
                if (a) {
                    const n = e.children.push(Ke.Y.new(this._root, {
                        themeTags: ["label"],
                        text: s,
                        editOn: "none",
                        active: !0
                    }, a));
                    n.on("text", (e => {
                        i.text = e
                    }
                    )),
                    this.setPrivate("label", n),
                    n.on("active", ( () => {
                        this.setTimeout(( () => {
                            this._isEditing = n.get("active", !1)
                        }
                        ), 200),
                        n.get("active") || this.setTimeout(( () => {
                            n && "" == n.get("text") && this._disposeIndex(i.index)
                        }
                        ), 100)
                    }
                    )),
                    this._isEditing = !0,
                    e.events.on("click", (e => {
                        const t = this.spriteResizer;
                        t.get("sprite") == n ? (this._isEditing = !0,
                        n.set("active", !0),
                        this._selectDrawing(i.index, e.originalEvent.ctrlKey, !0),
                        t.set("sprite", void 0)) : (this._isEditing = !1,
                        this._isSelected = !0,
                        t.set("sprite", n))
                    }
                    )),
                    e.events.on("pointerover", ( () => {
                        this._isHover = !0
                    }
                    )),
                    e.events.on("pointerout", ( () => {
                        this._isHover = !1
                    }
                    )),
                    n.on("scale", (e => {
                        a.set("scale", e)
                    }
                    )),
                    n.on("rotation", (e => {
                        a.set("rotation", e)
                    }
                    )),
                    n.events.on("boundschanged", ( () => {
                        this.markDirty()
                    }
                    )),
                    i.sprite = e,
                    i.label = n,
                    this._tweakBullet2(n, t)
                }
            }
            _tweakBullet2(e, t) {}
            _handlePointerClick(e) {
                if (!this._isEditing) {
                    if (this._selected.length > 0 || this._isSelected)
                        this._isSelected = !1,
                        this._hideResizer(),
                        this.unselectAllDrawings();
                    else if (this._drawingEnabled && !this._isHover) {
                        this.isDrawing(!0),
                        this._increaseIndex(),
                        this._di[this._index] = {},
                        this._addPoint(e);
                        const t = this.data.getIndex(this.data.length - 1);
                        t.text = "",
                        t.index = this._index,
                        t.corner = 0,
                        t.settings = this._getLabelTemplate(),
                        this._afterTextSave(t),
                        this.spriteResizer.set("sprite", void 0),
                        this._dispatchStockEvent("drawingadded", this._drawingId, this._index)
                    }
                    this.isDrawing(!1)
                }
            }
            _afterTextSave(e) {}
            _getLabelTemplate() {
                const e = {}
                  , t = this.get("labelFontSize");
                null != t && (e.fontSize = t);
                const i = this.get("labelFontFamily");
                null != i && (e.fontFamily = i);
                const s = this.get("labelFontWeight");
                null != s && (e.fontWeight = s);
                const a = this.get("labelFontStyle");
                null != a && (e.fontStyle = a);
                const n = this.get("labelFill");
                return null != n && (e.fill = n),
                R.YS.new(e)
            }
            disposeDataItem(e) {
                super.disposeDataItem(e),
                this.spriteResizer.set("sprite", void 0),
                this._isHover = !1
            }
            _hideAllBullets() {}
            _updateSelector(e, t) {
                var i;
                const s = this._getContext(t);
                if (s) {
                    const a = s.sprite;
                    if (a) {
                        a.dataItem == (null === (i = this.spriteResizer.get("sprite")) || void 0 === i ? void 0 : i.dataItem) ? e.hide(0) : -1 != this._selected.indexOf(t) && e.show(0);
                        const s = this.get("selectorPadding", 5);
                        let n = a.bounds()
                          , o = n.right - n.left + 2 * s
                          , r = n.bottom - n.top + 2 * s;
                        e.setAll({
                            width: o,
                            height: r,
                            x: n.left - s,
                            y: n.top - s
                        })
                    }
                }
            }
            _prepareChildren() {
                super._prepareChildren(),
                (this.isDirty("labelFontSize") || this.isDirty("labelFontFamily") || this.isDirty("labelFontWeight") || this.isDirty("labelFontStyle") || this.isDirty("labelFill")) && P.each(this._selected, (e => {
                    this._applySettings(e)
                }
                ))
            }
            _applySettings(e, t) {
                let i = this._getContext(e);
                if (i) {
                    let e = i.label;
                    if (e) {
                        let t = i.settings;
                        const s = {
                            fontSize: this.get("labelFontSize"),
                            fontFamily: this.get("labelFontFamily"),
                            fontWeight: this.get("labelFontWeight"),
                            fontStyle: this.get("labelFontStyle"),
                            fill: this.get("labelFill"),
                            fillColor: this.get("fillColor")
                        }
                          , a = e.states.lookup("default");
                        s && M.each(s, ( (i, s) => {
                            e.set(i, s),
                            a.set(i, s),
                            t && t.set(i, s)
                        }
                        ))
                    }
                }
            }
            _handleBulletDragStart(e) {
                const t = this._getStockChart();
                t && t._dragStartDrawing(e)
            }
            _handleBulletDragStop(e) {
                const t = this._getStockChart();
                t && t._dragStopDrawing(e),
                this._root.events.once("frameended", ( () => {
                    this._positionBullets(e.target.dataItem)
                }
                ))
            }
        }
        Object.defineProperty(qe, "className", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: "LabelSeries"
        }),
        Object.defineProperty(qe, "classNames", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: Xe.classNames.concat([qe.className])
        });
        var et = i(8931)
          , tt = i(9395);
        class it extends qe {
            constructor() {
                super(...arguments),
                Object.defineProperty(this, "_tag", {
                    enumerable: !0,
                    configurable: !0,
                    writable: !0,
                    value: "callout"
                })
            }
            _tweakBullet2(e, t) {
                const i = t.dataContext
                  , s = e.set("background", et.i.new(this._root, {
                    themeTags: ["callout"]
                }, i.bgSettings));
                i.background = s
            }
            _tweakBullet(e, t) {
                super._tweakBullet(e, t),
                e.events.off("click");
                const i = t.dataContext
                  , s = i.settings;
                if (s) {
                    const e = this.getPrivate("label");
                    if (e) {
                        e.events.on("positionchanged", ( () => {
                            this._root.events.once("frameended", ( () => {
                                this._updatePointer(e)
                            }
                            ))
                        }
                        )),
                        e.events.on("click", (t => {
                            const s = this.spriteResizer;
                            s.get("sprite") == e ? (this._isEditing = !0,
                            e.set("active", !0),
                            this._selectDrawing(i.index, t.originalEvent.ctrlKey, !0),
                            s.set("sprite", void 0)) : (this._isEditing = !1,
                            this._isSelected = !0,
                            this._selectDrawing(i.index, t.originalEvent.ctrlKey, !0),
                            s.set("sprite", e)),
                            this._erasingEnabled && this._disposeIndex(i.index)
                        }
                        )),
                        e.on("scale", ( () => {
                            this._updatePointer(e)
                        }
                        )),
                        e.on("rotation", ( () => {
                            this._updatePointer(e)
                        }
                        )),
                        e.setAll({
                            draggable: !0
                        }),
                        e.on("x", (e => {
                            s.set("x", e)
                        }
                        )),
                        e.on("y", (e => {
                            s.set("y", e)
                        }
                        ));
                        const t = e.states.lookup("default");
                        setTimeout(( () => {
                            e.animate({
                                key: "y",
                                to: -e.height() / 2 - 10,
                                from: 0,
                                duration: t.get("stateAnimationDuration", 500),
                                easing: t.get("stateAnimationEasing", tt.out(tt.cubic))
                            })
                        }
                        ), 50)
                    }
                }
            }
            _updatePointer(e) {
                const t = e.get("background");
                if (t instanceof et.i) {
                    const i = e.parent;
                    if (i) {
                        let e = i.toGlobal({
                            x: 0,
                            y: 0
                        });
                        e = t.toLocal(e),
                        t.setAll({
                            pointerX: e.x,
                            pointerY: e.y
                        })
                    }
                }
                this.markDirty()
            }
            _afterTextSave(e) {
                e.bgSettings = this._getBgTemplate()
            }
            _hideAllBullets() {}
            _getBgTemplate() {
                const e = {}
                  , t = this.get("fillColor");
                null != t && (e.fill = t);
                const i = this.get("fillOpacity");
                null != i && (e.fillOpacity = i);
                const s = this.get("strokeOpacity");
                null != s && (e.strokeOpacity = s);
                const a = this.get("strokeColor");
                return null != a && (e.stroke = a),
                R.YS.new(e)
            }
            _applySettings(e, t) {
                super._applySettings(e, t);
                const i = this._getContext(e);
                if (i && t) {
                    const e = i.background;
                    if (e) {
                        let s = i.bgSettings;
                        null != t.fill && (e.set("fill", t.fill),
                        s.set("fill", t.fill)),
                        null != t.fillOpacity && (e.set("fillOpacity", t.fillOpacity),
                        s.set("fillOpacity", t.fillOpacity)),
                        null != t.strokeOpacity && (e.set("strokeOpacity", t.strokeOpacity),
                        s.set("strokeOpacity", t.strokeOpacity)),
                        null != t.stroke && (e.set("stroke", t.stroke),
                        s.set("stroke", t.stroke))
                    }
                }
            }
        }
        Object.defineProperty(it, "className", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: "CalloutSeries"
        }),
        Object.defineProperty(it, "classNames", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: qe.classNames.concat([it.className])
        });
        var st = i(2433);
        class at extends Ve {
            constructor() {
                super(...arguments),
                Object.defineProperty(this, "_ellipses", {
                    enumerable: !0,
                    configurable: !0,
                    writable: !0,
                    value: []
                }),
                Object.defineProperty(this, "_tag", {
                    enumerable: !0,
                    configurable: !0,
                    writable: !0,
                    value: "ellipse"
                }),
                Object.defineProperty(this, "_clickPX", {
                    enumerable: !0,
                    configurable: !0,
                    writable: !0,
                    value: 0
                }),
                Object.defineProperty(this, "_clickVY", {
                    enumerable: !0,
                    configurable: !0,
                    writable: !0,
                    value: 0
                }),
                Object.defineProperty(this, "ellipses", {
                    enumerable: !0,
                    configurable: !0,
                    writable: !0,
                    value: new v.o(R.YS.new({
                        radiusX: 0,
                        radiusY: 0
                    }),( () => st.P._new(this._root, {
                        radiusX: 0,
                        radiusY: 0,
                        templateField: "settings"
                    }, [this.ellipses.template])))
                })
            }
            makeEllipse() {
                const e = this.ellipses.make();
                return this.mainContainer.children.push(e),
                this.ellipses.push(e),
                e
            }
            _afterNew() {
                super._afterNew(),
                this.setPrivate("allowChangeSnap", !1),
                this.strokes.template.set("visible", !1),
                this.fills.template.set("visible", !1);
                const e = this.ellipses.template;
                e.events.on("pointerover", (e => {
                    this._showSegmentBullets(e.target.get("userData"))
                }
                )),
                e.events.on("dragstart", (e => {
                    this.startDragItem(e, e.target.get("userData"))
                }
                )),
                e.events.on("dragstop", (e => {
                    this.stopDragItem(e, e.target.get("userData"))
                }
                )),
                e.events.on("click", (e => {
                    const t = e.target.get("userData");
                    this._erasingEnabled ? this._disposeIndex(t) : this._selectDrawing(t, e.originalEvent.ctrlKey)
                }
                ))
            }
            _applySettings(e, t) {
                let i;
                P.each(this.dataItems, (t => {
                    const s = t.dataContext;
                    s.index == e && s.settings && (i = s.settings)
                }
                ));
                const s = this._getSprite(this.ellipses, e);
                if (s) {
                    const e = s.states.lookup("default");
                    M.each(t, ( (t, a) => {
                        s.set(t, a),
                        e.set(t, a),
                        i && i.set(t, a)
                    }
                    ))
                }
            }
            _handleFillDragStop(e, t) {
                super._handleFillDragStop(e, t);
                const i = this._di[t]
                  , s = i.b
                  , a = i.t
                  , n = i.r
                  , o = i.l
                  , r = this.get("xAxis");
                if (s && a && n && o) {
                    const e = r.valueToPosition(o.get("valueX", 0))
                      , t = r.valueToPosition(n.get("valueX", 0));
                    let i = this._getXValue(r.positionToValue(e + (t - e) / 2));
                    this._setContext(a, "valueX", i),
                    this._setContext(s, "valueX", i),
                    this._setXLocation(a, i),
                    this._setXLocation(s, i)
                }
            }
            _handleBulletDragged(e) {
                const t = e.target.dataItem
                  , i = t.get("valueX")
                  , s = t.get("locationX")
                  , a = t.get("valueY");
                super._handleBulletDragged(e);
                const n = this._movePointerPoint;
                if (t && n) {
                    const e = t.dataContext
                      , o = e.index
                      , r = e.corner
                      , l = this.get("xAxis")
                      , c = this.get("yAxis")
                      , h = this._getXValue(l.positionToValue(l.coordinateToPosition(n.x)))
                      , d = this._getYValue(c.positionToValue(c.coordinateToPosition(n.y)), h)
                      , u = "valueX"
                      , g = "valueY"
                      , p = "valueYWorking"
                      , m = this._di[o]
                      , f = m.b
                      , b = m.t
                      , v = m.r
                      , y = m.l;
                    if (f && b && v && y) {
                        if ("b" == r) {
                            const e = b.get(p, 0);
                            this._setContext(f, g, d, !0);
                            let t = e + (d - e) / 2;
                            this._setContext(v, g, t, !0),
                            this._setContext(y, g, t, !0),
                            this._setContext(f, u, i),
                            f.set("locationX", s)
                        }
                        if ("t" == r) {
                            const e = f.get(p, 0);
                            this._setContext(b, g, d, !0);
                            let t = e + (d - e) / 2;
                            this._setContext(v, g, t, !0),
                            this._setContext(y, g, t, !0),
                            this._setContext(b, u, i),
                            b.set("locationX", s)
                        }
                        if ("l" == r) {
                            const e = v.get(u, 0)
                              , t = l.valueToPosition(e)
                              , i = l.valueToPosition(h);
                            this._setContext(y, u, h),
                            this._setXLocation(y, h);
                            let s = t + (i - t) / 2
                              , n = this._getXValue(l.positionToValue(s));
                            this._setContext(b, u, n),
                            this._setContext(f, u, n),
                            this._setXLocation(b, n),
                            this._setXLocation(f, n),
                            this._setContext(y, g, a, !0)
                        }
                        if ("r" == r) {
                            const e = y.get(u, 0)
                              , t = l.valueToPosition(e)
                              , i = l.valueToPosition(h);
                            this._setContext(v, u, h),
                            this._setXLocation(v, h);
                            let s = t + (i - t) / 2
                              , n = this._getXValue(l.positionToValue(s));
                            this._setContext(b, u, n),
                            this._setContext(f, u, n),
                            this._setXLocation(b, n),
                            this._setXLocation(f, n),
                            this._setContext(v, g, a, !0)
                        }
                    }
                    this._positionBullets(t)
                }
            }
            _handlePointerClick(e) {
                this._drawingEnabled && (super._handlePointerClick(e),
                this._isDragging || (this._isDrawing ? (this.isDrawing(!1),
                this._dispatchStockEvent("drawingadded", this._drawingId, this._index)) : (this._increaseIndex(),
                this.isDrawing(!0),
                this._hideResizer(e.target),
                this.bulletsContainer.show(),
                this._addPoints(e, this._index),
                this.unselectDrawings())))
            }
            _createElements(e, t) {
                if (!this._ellipses[e]) {
                    const i = this.makeEllipse();
                    i._setDataItem(t),
                    this._ellipses[e] = i,
                    i.setAll({
                        userData: e
                    }),
                    (null == t ? void 0 : t.dataContext).sprite = i
                }
            }
            _handlePointerMove(e) {
                if (super._handlePointerMove(e),
                this._isDrawing) {
                    const e = this._movePointerPoint;
                    if (e) {
                        const t = this.get("xAxis")
                          , i = this.get("yAxis")
                          , s = this._index;
                        if (this._di[s]) {
                            const a = this._di[s].t
                              , n = this._di[s].b
                              , o = this._di[s].l
                              , r = this._di[s].r
                              , l = this._clickVY
                              , c = t.coordinateToPosition(e.x)
                              , h = this._clickPX
                              , d = this._getXValue(t.positionToValue(t.coordinateToPosition(e.x)))
                              , u = this._getYValue(i.positionToValue(i.coordinateToPosition(e.y)), d);
                            if (n && o && r && a) {
                                this._setContext(n, "valueY", u, !0);
                                const e = l + (u - l) / 2
                                  , i = this._getXValue(t.positionToValue(h + (c - h) / 2));
                                this._setContext(r, "valueY", e, !0),
                                this._setContext(o, "valueY", e, !0),
                                this._setContext(n, "valueX", i),
                                this._setContext(a, "valueX", i),
                                this._setXLocation(n, i),
                                this._setXLocation(a, i),
                                this._setContext(r, "valueX", d),
                                this._setXLocation(r, d)
                            }
                        }
                    }
                }
            }
            _addPoints(e, t) {
                const i = this.chart;
                if (i) {
                    this.data.push({
                        settings: this._getEllipseTemplate(),
                        stroke: this._getStrokeTemplate(),
                        index: t,
                        corner: "e",
                        drawingId: this._drawingId
                    });
                    const s = this.get("xAxis")
                      , a = this.get("yAxis")
                      , n = i.plotContainer.toLocal(e.point);
                    this._clickPX = s.coordinateToPosition(n.x);
                    const o = this._getXValue(s.positionToValue(this._clickPX))
                      , r = this._getYValue(a.positionToValue(a.coordinateToPosition(n.y)), o);
                    this._clickVY = r,
                    this._di[t] = {},
                    this._addPoint(o, r, "l", t),
                    this._addPoint(o, r, "t", t),
                    this._addPoint(o, r, "b", t),
                    this._addPoint(o, r, "r", t)
                }
            }
            _addPoint(e, t, i, s) {
                this.data.push({
                    valueY: t,
                    valueX: e,
                    index: s,
                    corner: i,
                    drawingId: this._drawingId
                });
                const a = this.dataItems.length
                  , n = this.dataItems[a - 1];
                n && (this._setXLocation(n, e),
                this.setPrivate("startIndex", 0),
                this.setPrivate("endIndex", a))
            }
            _updateChildren() {
                super._updateChildren();
                let e = 0;
                P.each(this._di, (t => {
                    if (t) {
                        const i = t.t
                          , s = t.b
                          , a = t.l
                          , n = t.r;
                        if (i && s && a && n) {
                            const t = i.get("point")
                              , o = s.get("point")
                              , r = n.get("point")
                              , l = a.get("point");
                            if (t && o && r && l) {
                                const i = (r.x - l.x) / 2
                                  , s = (o.y - t.y) / 2
                                  , a = l.x + i
                                  , n = t.y + s
                                  , c = this._ellipses[e];
                                c && c.setAll({
                                    x: a,
                                    y: n,
                                    radiusX: i,
                                    radiusY: s
                                })
                            }
                        }
                    }
                    e++
                }
                ))
            }
            disposeDataItem(e) {
                super.disposeDataItem(e);
                const t = e.dataContext;
                if (t) {
                    const e = t.index
                      , i = this._ellipses[e];
                    i && (delete this._ellipses[e],
                    this.ellipses.removeValue(i),
                    i.dispose())
                }
            }
            _getEllipseTemplate() {
                const e = this._getStrokeTemplate()
                  , t = this.get("fillColor");
                null != t && e.set("fill", t);
                const i = this.get("fillOpacity");
                return null != i && e.set("fillOpacity", i),
                e
            }
            setInteractive(e) {
                super.setInteractive(e),
                this.ellipses.template.set("forceInactive", !e)
            }
            enableDrawingSelection(e) {
                super.enableDrawingSelection(e),
                this.ellipses.template.set("forceInactive", !e)
            }
        }
        Object.defineProperty(at, "className", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: "EllipseSeries"
        }),
        Object.defineProperty(at, "classNames", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: Ve.classNames.concat([at.className])
        });
        class nt extends Be {
            constructor() {
                super(...arguments),
                Object.defineProperty(this, "_tag", {
                    enumerable: !0,
                    configurable: !0,
                    writable: !0,
                    value: "trendline"
                })
            }
            _afterNew() {
                super._afterNew(),
                this.setPrivate("allowChangeSnap", !1),
                this.set("snapToData", !0)
            }
            _updateSegment(e) {
                const t = this._di[e].p1
                  , i = this._di[e].p2
                  , s = this.get("series");
                if (s && t && i) {
                    const e = this.get("xAxis");
                    let a = this._getXValue(t.get("valueX"))
                      , n = this._getXValue(i.get("valueX"));
                    const o = e.getSeriesItem(s, Math.max(0, e.valueToPosition(a)))
                      , r = e.getSeriesItem(s, Math.min(1, e.valueToPosition(n)))
                      , l = this.get("field") + "Y";
                    if (o && r) {
                        let e = o.get(l)
                          , s = r.get(l);
                        this._setContext(t, "valueY", e, !0),
                        this._setContext(i, "valueY", s, !0),
                        this._setContext(t, "valueX", a),
                        this._setContext(i, "valueX", n),
                        this._positionBullets(t),
                        this._positionBullets(i)
                    }
                }
            }
        }
        Object.defineProperty(nt, "className", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: "TrendLineSeries"
        }),
        Object.defineProperty(nt, "classNames", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: Be.classNames.concat([nt.className])
        });
        class ot extends Be {
            constructor() {
                super(...arguments),
                Object.defineProperty(this, "_tag", {
                    enumerable: !0,
                    configurable: !0,
                    writable: !0,
                    value: "quadrant"
                })
            }
            _afterNew() {
                super._afterNew(),
                this.strokes.template.set("visible", !1)
            }
            _updateSegment(e) {
                const t = this._di[e].p1
                  , i = this._di[e].p2;
                if (this.get("series") && t && i) {
                    let e = this._getXValue(t.get("valueX"))
                      , s = this._getXValue(i.get("valueX"));
                    const a = this.get("field") + "Y";
                    let n = this._getYValue(t.get(a), e, !0)
                      , o = this._getYValue(i.get(a), s, !0);
                    this._setContext(t, "valueY", n, !0),
                    this._setContext(i, "valueY", o, !0),
                    this._positionBullets(t),
                    this._positionBullets(i)
                }
            }
            _updateChildren() {
                super._updateChildren();
                const e = this.chart;
                if (this.fills.clear(),
                e)
                    for (let e = 0; e < this._lines.length; e++) {
                        const t = this._lines[e];
                        if (t) {
                            const i = this._di[e].p1
                              , s = this._di[e].p2
                              , a = this._di[e].e.dataContext
                              , n = this.makeFill(this.fills)
                              , o = this.makeFill(this.fills);
                            for (let e = this.dataItems.indexOf(i); e >= 0; e--) {
                                const t = this.dataItems[e].dataContext.fill;
                                t && (n.template = t,
                                o.template = t)
                            }
                            const r = [this.dataItems.indexOf(i), this.dataItems.indexOf(s)];
                            let l = this.get("fillColor", this.get("fill"));
                            const c = a.fill;
                            c && (l = c.get("fill"));
                            const h = {
                                userData: r,
                                fill: l
                            };
                            n.setAll(h),
                            o.setAll(h),
                            o.set("forceInactive", !0);
                            const d = i.get("point")
                              , u = s.get("point");
                            if (d && u) {
                                const e = (u.y - d.y) / 4
                                  , i = d.y + e
                                  , s = d.y + 2 * e
                                  , a = d.y + 3 * e;
                                t.set("draw", (e => {
                                    e.moveTo(d.x, d.y),
                                    e.lineTo(u.x, d.y),
                                    e.moveTo(d.x, i),
                                    e.lineTo(u.x, i),
                                    e.moveTo(d.x, s),
                                    e.lineTo(u.x, s),
                                    e.moveTo(d.x, a),
                                    e.lineTo(u.x, a),
                                    e.moveTo(d.x, u.y),
                                    e.lineTo(u.x, u.y)
                                }
                                )),
                                n.set("draw", (e => {
                                    e.moveTo(d.x, d.y),
                                    e.lineTo(u.x, d.y),
                                    e.lineTo(u.x, u.y),
                                    e.lineTo(d.x, u.y),
                                    e.lineTo(d.x, d.y)
                                }
                                )),
                                o.set("draw", (e => {
                                    e.moveTo(d.x, i),
                                    e.lineTo(u.x, i),
                                    e.lineTo(u.x, a),
                                    e.lineTo(d.x, a),
                                    e.lineTo(d.x, i)
                                }
                                ))
                            }
                        }
                    }
            }
            _drawFill() {}
            _updateLine() {}
        }
        Object.defineProperty(ot, "className", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: "QuadrantLineSeries"
        }),
        Object.defineProperty(ot, "classNames", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: Be.classNames.concat([ot.className])
        });
        var rt = i(962);
        class lt extends Be {
            constructor() {
                super(...arguments),
                Object.defineProperty(this, "_tag", {
                    enumerable: !0,
                    configurable: !0,
                    writable: !0,
                    value: "fibonacci"
                }),
                Object.defineProperty(this, "_labels", {
                    enumerable: !0,
                    configurable: !0,
                    writable: !0,
                    value: []
                }),
                Object.defineProperty(this, "_fills", {
                    enumerable: !0,
                    configurable: !0,
                    writable: !0,
                    value: []
                }),
                Object.defineProperty(this, "_strokes", {
                    enumerable: !0,
                    configurable: !0,
                    writable: !0,
                    value: []
                }),
                Object.defineProperty(this, "labels", {
                    enumerable: !0,
                    configurable: !0,
                    writable: !0,
                    value: new v.o(R.YS.new({}),( () => rt._._new(this._root, {}, [this.labels.template])))
                })
            }
            makeLabel() {
                const e = this.labels.make();
                return this.bulletsContainer.children.push(e),
                this.labels.push(e),
                e
            }
            _updateChildren() {
                super._updateChildren(),
                this._updateChildrenReal()
            }
            _getIndex(e) {
                return e.get("userData")
            }
            _updateChildrenReal() {
                if (this.chart) {
                    const e = this.get("yAxis");
                    for (let t = 0; t < this._lines.length; t++)
                        if (this._lines[t]) {
                            const i = this._di[t].p1
                              , s = this._di[t].p2;
                            if (i && s) {
                                const a = i.get("point")
                                  , n = s.get("point");
                                if (a && n) {
                                    const i = this.get("sequence", []);
                                    let s = 0;
                                    const o = this._labels[t]
                                      , r = this._strokes[t]
                                      , l = this._fills[t];
                                    for (let t = 0; t < i.length; t++) {
                                        const c = i[t] - 1
                                          , h = o[t]
                                          , d = l[t]
                                          , u = r[t];
                                        let g = this.get("colors", [])[t]
                                          , p = g;
                                        d.set("fill", g),
                                        d.set("fillOpacity", this.get("fillOpacity", 0)),
                                        u.set("stroke", p),
                                        u.set("strokeOpacity", this.get("strokeOpacity", 0));
                                        const m = a.y + (n.y - a.y) * s
                                          , f = a.y + (n.y - a.y) * -c
                                          , b = e.positionToValue(e.coordinateToPosition(f));
                                        d.setPrivate("visible", !0),
                                        u.setPrivate("visible", !0),
                                        d.set("draw", (e => {
                                            e.moveTo(a.x, m),
                                            e.lineTo(n.x, m),
                                            e.lineTo(n.x, f),
                                            e.lineTo(a.x, f),
                                            e.lineTo(a.x, m)
                                        }
                                        )),
                                        u.set("draw", (e => {
                                            e.moveTo(a.x, f),
                                            e.lineTo(n.x, f)
                                        }
                                        ));
                                        const v = h.dataItem;
                                        v && v.set("value", b),
                                        h.setAll({
                                            x: n.x,
                                            y: f,
                                            fill: g
                                        }),
                                        h.text.markDirtyText(),
                                        s = -c
                                    }
                                }
                            }
                        }
                }
            }
            _createElements(e) {
                if (super._createElements(e),
                !this._fills[e]) {
                    const t = []
                      , i = []
                      , s = []
                      , a = this.get("sequence", []);
                    for (let n = 0; n < a.length; n++) {
                        const o = this.makeLabel()
                          , r = this.makeDataItem({});
                        r.set("sequence", a[n]),
                        o._setDataItem(r),
                        t.push(o);
                        const l = this.makeFill(this.fills);
                        i.push(l),
                        l.set("userData", e),
                        l.states.remove("hover");
                        const c = this.makeStroke(this.strokes);
                        c.set("userData", e),
                        s.push(c)
                    }
                    this._labels[e] = t,
                    this._fills[e] = i,
                    this._strokes[e] = s
                }
            }
            _drawFill() {}
            _drawStroke() {}
            _updateLine() {}
            _clearGraphics() {}
            disposeDataItem(e) {
                super.disposeDataItem(e);
                const t = e.dataContext;
                if (t) {
                    const e = t.index
                      , i = this._labels[e]
                      , s = this._fills[e]
                      , a = this._strokes[e];
                    i && (P.each(i, (e => {
                        e.dispose(),
                        this.labels.removeValue(e)
                    }
                    )),
                    delete this._labels[e]),
                    s && (P.each(s, (e => {
                        this.fills.removeValue(e),
                        e.dispose()
                    }
                    )),
                    delete this._fills[e]),
                    a && (P.each(a, (e => {
                        this.strokes.removeValue(e),
                        e.dispose()
                    }
                    )),
                    delete this._strokes[e])
                }
            }
        }
        Object.defineProperty(lt, "className", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: "FibonacciSeries"
        }),
        Object.defineProperty(lt, "classNames", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: Be.classNames.concat([lt.className])
        });
        class ct extends lt {
            constructor() {
                super(...arguments),
                Object.defineProperty(this, "_tag", {
                    enumerable: !0,
                    configurable: !0,
                    writable: !0,
                    value: "fibonaccitimezone"
                })
            }
            _updateSegmentReal(e) {
                const t = this._di[e];
                if (t) {
                    const e = t.p1
                      , i = t.p2;
                    e && i && (this._setContext(i, "valueY", e.get("valueY", 0), !0),
                    e.setRaw("locationX", 0),
                    i.setRaw("locationX", 0))
                }
            }
            _updateSegment(e) {
                super._updateSegment(e),
                this._updateSegmentReal(e)
            }
            _updateChildrenReal() {
                const e = this.chart;
                if (e)
                    for (let t = 0; t < this._lines.length; t++)
                        if (this._lines[t]) {
                            const i = this._di[t].p1
                              , s = this._di[t].p2
                              , a = this._di[t].e
                              , n = i.get("point")
                              , o = s.get("point")
                              , r = i.open
                              , l = s.open
                              , c = this.get("xAxis");
                            if (r && l && a) {
                                const i = r.valueX
                                  , s = l.valueX - i;
                                if (n && o) {
                                    const o = a.dataContext
                                      , r = this.get("sequence", [])
                                      , l = this._labels[t]
                                      , h = this._fills[t]
                                      , d = this._strokes[t];
                                    for (let t = 0; t < r.length; t++) {
                                        const a = r[t]
                                          , g = l[t]
                                          , p = h[t]
                                          , m = d[t];
                                        this.mainContainer.children.moveValue(p, 0);
                                        const f = i + s * a
                                          , b = n.x
                                          , v = c.get("renderer").positionToCoordinate(c.valueToPosition(f))
                                          , y = 0
                                          , _ = e.plotContainer.height();
                                        p.setPrivate("visible", !0),
                                        m.setPrivate("visible", !0);
                                        const w = o.fill;
                                        let x = this.get("colors", [])[t]
                                          , k = x;
                                        if (p.set("fillOpacity", .2 * this.get("fillOpacity", 0)),
                                        m.set("strokeOpacity", this.get("strokeOpacity", 0)),
                                        x || (w && (x = w.get("fill")),
                                        x || (x = this.get("fillColor", this.get("fill", (0,
                                        u.$_)(0))))),
                                        !k) {
                                            const e = o.stroke;
                                            e && (k = e.get("stroke")),
                                            k || (k = this.get("strokeColor", this.get("stroke", (0,
                                            u.$_)(0))))
                                        }
                                        p.set("fill", x),
                                        m.set("stroke", k),
                                        p.set("draw", (e => {
                                            e.moveTo(b, y),
                                            e.lineTo(v, y),
                                            e.lineTo(v, _),
                                            e.lineTo(b, _),
                                            e.lineTo(b, y)
                                        }
                                        )),
                                        m.set("draw", (e => {
                                            e.moveTo(v, y),
                                            e.lineTo(v, _)
                                        }
                                        ));
                                        const C = g.dataItem;
                                        C && C.set("value", a),
                                        g.setAll({
                                            x: v,
                                            y: _,
                                            dy: -20
                                        }),
                                        g.text.markDirtyText()
                                    }
                                }
                            }
                        }
            }
        }
        Object.defineProperty(ct, "className", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: "FibonacciTimezoneSeries"
        }),
        Object.defineProperty(ct, "classNames", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: lt.classNames.concat([ct.className])
        });
        class ht extends Be {
            constructor() {
                super(...arguments),
                Object.defineProperty(this, "_tag", {
                    enumerable: !0,
                    configurable: !0,
                    writable: !0,
                    value: "ray"
                })
            }
            _afterNew() {
                super._afterNew(),
                this.lines.template.set("forceHidden", !0)
            }
            _handleBulletDragged(e) {
                super._handleBulletDragged(e);
                const t = e.target.dataItem.dataContext;
                if (t) {
                    const e = t.index
                      , i = this._di[e].p1
                      , s = this._di[e].p2
                      , a = this._movePointerPoint;
                    if (i && s && a) {
                        const e = this.get("yAxis")
                          , t = this.get("xAxis")
                          , n = this._getXValue(t.positionToValue(t.coordinateToPosition(a.x)))
                          , o = this._getYValue(e.positionToValue(e.coordinateToPosition(a.y)), n)
                          , r = t.getPrivate("min", 0)
                          , l = t.getPrivate("max", 1);
                        this._setContext(i, "valueY", o, !0),
                        this._setContext(s, "valueY", o, !0),
                        this._setContext(i, "valueX", n),
                        this._setContext(s, "valueX", l + (l - r)),
                        this._setXLocation(i, i.get("valueX", 0)),
                        this._positionBullets(i)
                    }
                }
            }
            _handlePointerMoveReal() {}
            _updateSegment(e) {
                if (this._di[e]) {
                    const t = this._di[e].p2;
                    if (t) {
                        const e = this.get("xAxis")
                          , i = e.getPrivate("min", 0)
                          , s = e.getPrivate("max", 1);
                        this._setContext(t, "valueX", s + (s - i), !0)
                    }
                }
            }
            _handlePointerClickReal(e) {
                this._drawingEnabled && (this._isDragging || (this._increaseIndex(),
                this._addPoints(e, this._index),
                this.isDrawing(!1),
                this._hideResizer(),
                this.unselectAllDrawings(),
                this._updateSegment(this._index),
                this._dispatchStockEvent("drawingadded", this._drawingId, this._index)))
            }
        }
        Object.defineProperty(ht, "className", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: "HorizontalRaySeries"
        }),
        Object.defineProperty(ht, "classNames", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: Be.classNames.concat([ht.className])
        });
        var dt = i(9361)
          , ut = i(3497);
        class gt extends He {
            constructor() {
                super(...arguments),
                Object.defineProperty(this, "_lines", {
                    enumerable: !0,
                    configurable: !0,
                    writable: !0,
                    value: []
                }),
                Object.defineProperty(this, "_labels", {
                    enumerable: !0,
                    configurable: !0,
                    writable: !0,
                    value: []
                }),
                Object.defineProperty(this, "_tag", {
                    enumerable: !0,
                    configurable: !0,
                    writable: !0,
                    value: "measure"
                }),
                Object.defineProperty(this, "labels", {
                    enumerable: !0,
                    configurable: !0,
                    writable: !0,
                    value: new v.o(R.YS.new({}),( () => rt._._new(this._root, {}, [this.labels.template])))
                })
            }
            _afterNew() {
                super._afterNew(),
                this.set("snapToData", !0),
                this.strokes.template.set("templateField", void 0),
                this.fills.template.set("templateField", void 0)
            }
            makeLabel() {
                const e = this.labels.make();
                return this.bulletsContainer.children.push(e),
                e.setAll({
                    populateText: !0,
                    background: ut.c.new(this._root, {
                        themeTags: ["background"]
                    })
                }),
                e._setDataItem(new dt.z(this,{},{})),
                this.labels.push(e),
                e
            }
            _createElements(e) {
                if (super._createElements(e),
                !this._labels[e]) {
                    const t = this.makeLabel();
                    this._labels[e] = t
                }
            }
            _disposeIndex(e) {
                super._disposeIndex(e);
                const t = this._labels[e];
                t && (t.dispose(),
                delete this._labels[e]);
                const i = this._lines[e];
                i && (i.dispose(),
                delete this._lines[e])
            }
            _updateOthers(e, t, i, s) {
                const a = this.get("xAxis")
                  , n = a.chart
                  , o = this._lines[e];
                let r = this._root.interfaceColors.get("positive")
                  , l = this._root.interfaceColors.get("negative");
                const c = n.getPrivate("stockChart");
                let h;
                c && (r = c.get("stockPositiveColor", r),
                l = c.get("stockNegativeColor", l),
                h = c.get("volumeSeries"));
                let d = 1;
                i.x > s.x && (d = -1);
                const u = this._labels[e]
                  , g = u.get("background")
                  , p = this._di[e].p1
                  , m = this._di[e].p2;
                let f = r
                  , b = 1;
                i.y > s.y && (b = -1,
                f = l),
                t.set("fill", f),
                t.set("fillOpacity", .2),
                o.set("stroke", f),
                g.set("fill", f),
                this.outerCircles.each((e => {
                    e.set("stroke", f)
                }
                ));
                const v = i.x + (s.x - i.x) / 2
                  , y = i.y + (s.y - i.y) / 2;
                o.set("segments", [[[{
                    x: v,
                    y: i.y
                }, {
                    x: v,
                    y: s.y
                }]], [[{
                    x: v - 5,
                    y: s.y - 5 * b
                }, {
                    x: v,
                    y: s.y
                }, {
                    x: v + 5,
                    y: s.y - 5 * b
                }]], [[{
                    x: i.x,
                    y: y
                }, {
                    x: s.x,
                    y: y
                }]], [[{
                    x: s.x - 5 * d,
                    y: y - 5
                }, {
                    x: s.x,
                    y: y
                }, {
                    x: s.x - 5 * d,
                    y: y + 5
                }]]]);
                const _ = p.get("valueY", 0)
                  , w = m.get("valueY", 0)
                  , x = this.getNumberFormatter()
                  , k = x.format(w - _)
                  , C = x.format((w - _) / _ * 100) + "%"
                  , D = a.getPrivate("baseInterval")
                  , S = p.get("valueX", 0)
                  , P = m.get("valueX", 0)
                  , A = this.get("series");
                let I = 0;
                if (A) {
                    const e = a.getSeriesItem(A, a.valueToPosition(S))
                      , t = a.getSeriesItem(A, a.valueToPosition(P));
                    e && t && (I = A.dataItems.indexOf(t) - A.dataItems.indexOf(e) + 1,
                    this.get("snapToData") && I--)
                }
                let N = Math.ceil((P - S) / a.baseDuration() * D.count);
                N < I && (N = I);
                let T = 0;
                if (h) {
                    const e = a.getSeriesItem(h, a.valueToPosition(S))
                      , t = a.getSeriesItem(h, a.valueToPosition(P));
                    if (e && t) {
                        const i = h.dataItems;
                        let s = i.indexOf(e)
                          , a = i.indexOf(t);
                        s > a && ([s,a] = [a, s]);
                        for (let e = s; e < a; e++) {
                            const t = i[e];
                            if (t) {
                                const e = t.get("valueY");
                                L.isNumber(e) && (T += e)
                            }
                        }
                    }
                }
                let M = this.get("labelText", "");
                T > 0 && (M += this.get("labelVolumeText")),
                u.dataItem.dataContext = {
                    value: k,
                    percent: C,
                    count: I,
                    intervalCount: N,
                    intervalUnit: this._root.language.translateAny({
                        millisecond: "ms",
                        second: "s",
                        minute: "m",
                        hour: "h",
                        day: "d",
                        week: "wk",
                        month: "mo",
                        year: "y"
                    }[D.timeUnit]),
                    volume: T
                },
                u.setAll({
                    text: M,
                    x: v,
                    y: y
                }),
                u.text.markDirtyText()
            }
        }
        Object.defineProperty(gt, "className", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: "Measure"
        }),
        Object.defineProperty(gt, "classNames", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: He.classNames.concat([gt.className])
        });
        class pt extends k.JH {
            constructor() {
                super(...arguments),
                Object.defineProperty(this, "_cssDisposer", {
                    enumerable: !0,
                    configurable: !0,
                    writable: !0,
                    value: void 0
                })
            }
            _afterNew() {
                super._afterNew(),
                this._defaultThemes = this.get("stockChart")._defaultThemes,
                super._afterNewApplyThemes(),
                this._initControls(),
                this.loadDefaultCSS(),
                this._root.addDisposer(this),
                this.events.dispatch("created", {
                    type: "created",
                    target: this
                })
            }
            _afterChanged() {
                super._afterChanged(),
                this.isDirty("container"),
                this.isDirty("useDefaultCSS") && (this.get("useDefaultCSS") ? this.loadDefaultCSS() : this._cssDisposer && this._cssDisposer.dispose()),
                this.isDirty("controls") && this._initControls()
            }
            _dispose() {
                super._dispose(),
                this._cssDisposer && this._cssDisposer.dispose();
                const e = this.get("controls", []);
                P.each(e, ( (e, t) => {
                    e.dispose()
                }
                ))
            }
            _initControls() {
                const e = this.get("controls", []);
                P.each(e, ( (e, t) => {
                    e.getPrivate("toolbar") || (e.setPrivate("toolbar", this),
                    this.get("container").appendChild(e.getPrivate("button")))
                }
                ))
            }
            loadDefaultCSS() {
                const e = N(C.getShadowRoot(this._root.dom), this._root);
                this._disposers.push(e),
                this._cssDisposer = e
            }
        }
        Object.defineProperty(pt, "className", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: "StockToolbar"
        }),
        Object.defineProperty(pt, "classNames", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: k.JH.classNames.concat([pt.className])
        });
        class mt extends S {
            constructor() {
                super(...arguments),
                Object.defineProperty(this, "_currentSelectedIndex", {
                    enumerable: !0,
                    configurable: !0,
                    writable: !0,
                    value: void 0
                })
            }
            _afterNew() {
                super._afterNew(),
                this._setupKeyboardNav(),
                this._root.addDisposer(this)
            }
            _initElements() {
                super._initElements();
                const e = this.getPrivate("container");
                this.get("searchable") && this._initSearch();
                const t = document.createElement("ul");
                t.className = "am5stock-control-list",
                e.appendChild(t),
                this.setPrivate("list", t),
                this._initItems()
            }
            _sizeItems() {
                const e = this.getPrivate("list");
                e && (e.style.maxHeight = this.root.container.height() - 100 + "px",
                e.style.overflow = "auto")
            }
            rebuildList() {
                this._initItems()
            }
            _initItems(e) {
                this.getPrivate("list").innerHTML = "",
                e || (e = this.get("items", []));
                const t = this.get("exclude", []);
                P.each(e, (e => {
                    -1 == t.indexOf(e.id) && this.addItem(e)
                }
                )),
                this.get("scrollable") && this._sizeItems(),
                this._maybeMakeAccessible()
            }
            _initSearch() {
                let e = this.getPrivate("search");
                if (this.get("searchable")) {
                    if (!e) {
                        const t = this.getPrivate("container");
                        e = document.createElement("div"),
                        e.className = "am5stock-list-search",
                        t.appendChild(e),
                        this.setPrivate("search", e);
                        const i = document.createElement("input");
                        i.type = "text",
                        i.placeholder = this._root.language.translateAny("Search"),
                        e.appendChild(i),
                        this._disposers.push(C.addEventListener(i, "input", (e => {
                            this._filterItems(i.value)
                        }
                        ))),
                        this._disposers.push(C.addEventListener(i, "focus", (e => {
                            this._currentSelectedIndex = void 0
                        }
                        )))
                    }
                } else
                    e && (e.style.display = "none")
            }
            _beforeChanged() {
                super._beforeChanged(),
                this.isDirty("items") && this._initItems(),
                this.isDirty("searchable") && this._initSearch(),
                this.isPrivateDirty("currentId"),
                this.isDirty("control") && this._maybeMakeAccessible()
            }
            _dispose() {
                super._dispose()
            }
            _filterItems(e) {
                return (0,
                X.mG)(this, void 0, void 0, (function*() {
                    const t = this.get("searchCallback");
                    if ("" == e)
                        this._initItems(this.get("items"));
                    else if (t && e) {
                        const i = this.get("maxSearchItems", 1e3);
                        let s = yield t.call(this, e);
                        i && s.length > i && (s = s.slice(0, i - 1),
                        s.push({
                            id: "",
                            className: "am5stock-list-info",
                            label: this._root.language.translateAny("Search results are limited to %1.", void 0, "" + i)
                        })),
                        this._initItems(s)
                    } else {
                        const t = this.getPrivate("list");
                        if (t) {
                            const i = t.getElementsByTagName("li");
                            P.each(i, (t => {
                                const i = new RegExp(e || "","i");
                                !e || t.innerText.match(i) ? t.style.display = "" : t.style.display = "none"
                            }
                            ))
                        }
                    }
                }
                ))
            }
            addItem(e) {
                const t = this.getPrivate("list")
                  , i = document.createElement("li");
                let s;
                if (i.className = "am5stock-list-item",
                i.setAttribute("title", e.subLabel || e.label),
                e.className && (i.className += " " + e.className),
                e.icon && i.appendChild(e.icon),
                e.form) {
                    const t = document.createElement("input");
                    s = "am5stock-list-" + e.id,
                    t.type = e.form,
                    t.setAttribute("tabindex", "-1"),
                    e.value && (t.value = e.value),
                    "radio" == e.form && (t.name = e.id,
                    s += "-" + e.value),
                    e.checked && (t.checked = !0),
                    t.id = s,
                    this._disposers.push(C.addEventListener(i, "click", (i => {
                        i.target !== t && (t.checked = !t.checked),
                        this.events.dispatch("changed", {
                            type: "changed",
                            item: e,
                            value: t.checked,
                            checked: t.checked,
                            target: this
                        })
                    }
                    ))),
                    i.appendChild(t)
                }
                const a = document.createElement("label");
                if (a.innerHTML = e.label,
                "" == e.label && (a.style.display = "none"),
                i.appendChild(a),
                e.subLabel) {
                    const t = document.createElement("label");
                    t.className = "am5stock-list-sub",
                    t.innerHTML = e.subLabel,
                    i.appendChild(t)
                }
                "separator" == e.id && (i.innerHTML = "<hr>"),
                t.appendChild(i),
                e.disabled ? i.className += " am5stock-disabled" : this._disposers.push(C.addEventListener(i, "click", (t => {
                    this.hide(),
                    this.events.dispatch("invoked", {
                        type: "invoked",
                        item: e,
                        target: this
                    })
                }
                )))
            }
            hide() {
                super.hide(),
                this._filterItems();
                let e = this.getPrivate("search");
                if (e) {
                    const t = e.getElementsByTagName("input");
                    let i = !1;
                    P.each(t, (e => {
                        "" !== e.value && (i = !0,
                        e.value = "")
                    }
                    )),
                    this.get("searchCallback") && i && this._initItems()
                }
                this._currentSelectedIndex = void 0
            }
            _setupKeyboardNav() {
                if (C.supports("keyboardevents")) {
                    const e = this.get("control").getPrivate("button");
                    this._disposers.push(C.addEventListener(document, "keydown", (t => {
                        if (this.isAccessible() && document.activeElement && (document.activeElement === e || C.contains(e, document.activeElement)))
                            if (13 == t.keyCode)
                                document.activeElement !== e && document.activeElement.click();
                            else if (38 == t.keyCode || 40 == t.keyCode) {
                                const e = 38 == t.keyCode ? -1 : 1;
                                let i = this._currentSelectedIndex;
                                void 0 === i ? i = 0 : i += e;
                                const s = this._getActiveItems();
                                i < 0 ? i = s.length - 1 : i >= s.length && (i = 0),
                                this.setTimeout(( () => {
                                    C.focus(s.item(i)),
                                    this._currentSelectedIndex = i
                                }
                                ), 15)
                            }
                    }
                    )))
                }
            }
            _maybeMakeAccessible() {
                super._maybeMakeAccessible(),
                this.isAccessible() && this._getActiveItems().forEach((e => {
                    e.setAttribute("tabindex", "-1"),
                    e.setAttribute("aria-label", e.getAttribute("title") || "")
                }
                ))
            }
            _getActiveItems() {
                return this.getPrivate("list").querySelectorAll(".am5stock-list-item:not(.am5stock-list-info, .am5stock-list-heading, .am5stock-disabled)")
            }
        }
        Object.defineProperty(mt, "className", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: "DropdownList"
        }),
        Object.defineProperty(mt, "classNames", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: S.classNames.concat([mt.className])
        });
        class ft extends D {
            _afterNew() {
                super._afterNew();
                const e = mt.new(this._root, {
                    control: this,
                    parent: this.getPrivate("button"),
                    scrollable: this.get("scrollable", !1)
                });
                this.setPrivate("list", e),
                e.events.on("closed", (e => {
                    this.set("active", !1)
                }
                )),
                e.events.on("invoked", (e => {
                    this.setTool(e.item.label),
                    this.events.dispatch("selected", {
                        type: "selected",
                        tool: e.item.id,
                        target: this
                    })
                }
                )),
                this.on("active", (t => {
                    t ? this.setTimeout(( () => e.show()), 10) : e.hide()
                }
                ));
                const t = this.getPrivate("button");
                t.className = t.className + " am5stock-control-dropdown",
                this._initTools()
            }
            setTool(e) {
                this.getPrivate("icon").innerHTML = "",
                this.getPrivate("icon").appendChild(this._getToolIcon(e)),
                this._setLabel(this._root.language.translateAny(e))
            }
            _initTools() {
                const e = this.getPrivate("list")
                  , t = this.get("tools")
                  , i = [];
                P.each(t, (e => {
                    i.push({
                        id: e,
                        label: this._root.language.translateAny(e),
                        icon: this._getToolIcon(e)
                    })
                }
                )),
                e.set("items", i)
            }
            _getToolIcon(e) {
                return p.getIcon(e)
            }
            _afterChanged() {
                super._afterChanged(),
                this.isDirty("tools") && this._initTools()
            }
            _dispose() {
                super._dispose()
            }
        }
        Object.defineProperty(ft, "className", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: "DrawingToolControl"
        }),
        Object.defineProperty(ft, "classNames", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: D.classNames.concat([ft.className])
        });
        class bt extends D {
            _afterNew() {
                super._afterNew();
                const e = this.getPrivate("button");
                e.className = e.className + " am5stock-control-dropdown"
            }
            _initElements() {
                super._initElements();
                const e = {
                    control: this,
                    parent: this.getPrivate("button"),
                    searchable: this.get("searchable", !1),
                    scrollable: this.get("scrollable", !1),
                    items: [],
                    exclude: this.get("exclude")
                }
                  , t = this.get("maxSearchItems");
                t && (e.maxSearchItems = t);
                const i = this.get("searchCallback");
                i && (e.searchCallback = i);
                const s = this.get("items");
                let a = this.get("currentItem");
                s && P.each(s, (t => {
                    const i = L.isString(t) ? {
                        id: t,
                        label: t
                    } : t;
                    e.items.push(i),
                    L.isString(a) && a == i.id && (a = i)
                }
                ));
                const n = mt.new(this._root, e);
                this.setPrivate("dropdown", n),
                a && this.setItem(a),
                n.events.on("closed", (e => {
                    this.set("active", !1)
                }
                )),
                n.events.on("invoked", (e => {
                    this.setItem(e.item),
                    this.events.dispatch("selected", {
                        type: "selected",
                        item: e.item,
                        target: this
                    })
                }
                )),
                this.on("active", (e => {
                    e ? this.setTimeout(( () => n.show()), 10) : n.hide()
                }
                ))
            }
            setItem(e) {
                if (!0 !== this.get("fixedLabel")) {
                    const t = this.getPrivate("label");
                    if (L.isString(e))
                        t.innerHTML = e;
                    else {
                        if (e.icon) {
                            const t = this.getPrivate("icon");
                            t.innerHTML = "",
                            t.appendChild(e.icon.cloneNode(!0)),
                            t.style.display = ""
                        }
                        e.label ? (t.innerHTML = e.label,
                        t.style.display = "") : (t.innerHTML = "",
                        t.style.display = "none")
                    }
                }
            }
            setItemById(e) {
                const t = this.getItemById(e);
                void 0 !== t && (this.setItem(t),
                this.events.dispatch("selected", {
                    type: "selected",
                    item: t,
                    target: this
                }))
            }
            getItemById(e) {
                let t;
                const i = this.get("items", []);
                return P.eachContinue(i, (i => (L.isObject(i) ? i.id : i) != e || (t = i,
                !1))),
                t
            }
            _beforeChanged() {
                if (super._beforeChanged(),
                this.isDirty("items")) {
                    const e = this.getPrivate("dropdown");
                    if (e) {
                        const t = this.get("items")
                          , i = [];
                        let s = this.get("currentItem");
                        t && P.each(t, (e => {
                            const t = L.isString(e) ? {
                                id: e,
                                label: e
                            } : e;
                            i.push(t),
                            L.isString(s) && s == t.id && (s = t)
                        }
                        )),
                        e.set("items", i)
                    }
                }
            }
            _dispose() {
                super._dispose()
            }
            _maybeMakeAccessible() {
                if (super._maybeMakeAccessible(),
                this.isAccessible()) {
                    const e = this.getPrivate("button");
                    e.setAttribute("aria-label", e.getAttribute("title") + "; " + this._t("Press ENTER or use arrow keys to navigate")),
                    C.supports("keyboardevents") && this._disposers.push(C.addEventListener(document, "keydown", (t => {
                        document.activeElement == e && (38 != t.keyCode && 40 != t.keyCode || this.get("active") || this._handleClick())
                    }
                    )))
                }
            }
        }
        Object.defineProperty(bt, "className", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: "DropdownListControl"
        }),
        Object.defineProperty(bt, "classNames", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: D.classNames.concat([bt.className])
        });
        class vt extends D {
            _afterNew() {
                super._afterNew();
                const e = this.getPrivate("button");
                e.className = e.className + " am5stock-control-dropdown"
            }
            _beforeChanged() {
                super._beforeChanged(),
                this.isDirty("html") && this.getPrivate("container") && (this.getPrivate("container").innerHTML = this.get("html", ""))
            }
            _initElements() {
                super._initElements();
                const e = {
                    control: this,
                    parent: this.getPrivate("button"),
                    scrollable: this.get("scrollable", !1)
                }
                  , t = S.new(this._root, e);
                this.setPrivate("dropdown", t);
                const i = document.createElement("div");
                i.className = "am5stock-control-list",
                t.getPrivate("container").appendChild(i),
                this.setPrivate("container", i);
                const s = this.get("html", "");
                i.innerHTML = s,
                t.events.on("closed", (e => {
                    this.set("active", !1)
                }
                )),
                this.on("active", (e => {
                    e ? this.setTimeout(( () => t.show()), 10) : t.hide()
                }
                ))
            }
            _dispose() {
                super._dispose()
            }
        }
        Object.defineProperty(vt, "className", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: "DropdownControl"
        }),
        Object.defineProperty(vt, "classNames", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: D.classNames.concat([vt.className])
        });
        class yt extends D {
            _afterNew() {
                super._afterNew();
                const e = mt.new(this._root, {
                    control: this,
                    parent: this.getPrivate("button"),
                    searchable: !1
                });
                this.setPrivate("list", e),
                e.getPrivate("list").className = "am5stock-control-icons",
                e.events.on("closed", (e => {
                    this.set("active", !1)
                }
                )),
                e.events.on("invoked", (e => {
                    const t = JSON.parse(e.item.id);
                    let i;
                    const s = this.get("icons");
                    P.each(s, (e => {
                        t.svgPath == e.svgPath && (i = e)
                    }
                    )),
                    i && (this.setIcon(i),
                    this.events.dispatch("selected", {
                        type: "selected",
                        icon: i,
                        target: this
                    }))
                }
                )),
                this.on("active", (t => {
                    t ? this.setTimeout(( () => e.show()), 10) : e.hide()
                }
                )),
                this._initIcons()
            }
            setIcon(e) {
                this.getPrivate("icon").innerHTML = "",
                this.getPrivate("icon").appendChild(this._getDrawingIcon(e))
            }
            setIconByPath(e) {
                const t = this.getIconByPath(e);
                void 0 !== t && (this.setIcon(t),
                this.events.dispatch("selected", {
                    type: "selected",
                    icon: t,
                    target: this
                }))
            }
            getIconByPath(e) {
                let t;
                const i = this.get("icons", []);
                return P.eachContinue(i, (i => i.svgPath != e || (t = i,
                !1))),
                t
            }
            _initIcons() {
                const e = this.getPrivate("list")
                  , t = this.get("icons")
                  , i = [];
                P.each(t, (e => {
                    i.push({
                        id: JSON.stringify(e),
                        label: "",
                        icon: this._getDrawingIcon(e)
                    })
                }
                )),
                e.set("items", i)
            }
            _getDrawingIcon(e) {
                return p._getSVG({
                    viewbox: "0 0 50 50",
                    path: e.svgPath
                })
            }
            _afterChanged() {
                super._afterChanged(),
                this.isDirty("icons") && this._initIcons()
            }
            _dispose() {
                super._dispose()
            }
        }
        Object.defineProperty(yt, "className", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: "IconControl"
        }),
        Object.defineProperty(yt, "classNames", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: D.classNames.concat([yt.className])
        });
        var _t = i(6890);
        class wt extends D {
            constructor() {
                super(...arguments),
                Object.defineProperty(this, "_drawingSeries", {
                    enumerable: !0,
                    configurable: !0,
                    writable: !0,
                    value: {}
                }),
                Object.defineProperty(this, "_currentEnabledSeries", {
                    enumerable: !0,
                    configurable: !0,
                    writable: !0,
                    value: []
                })
            }
            _afterNew() {
                super._afterNew(),
                this.getPrivate("toolbar") && this._initToolbar();
                const e = this.get("stockChart");
                e.panels.events.onAll(( () => this._updatePanelBindings())),
                e.events.on("drawingselected", (e => {
                    const t = this._getSeriesTool(e.series);
                    if (this.set("tool", t),
                    !this._isInited())
                        return;
                    const i = e.series.getContext(e.drawingId);
                    if ("Label" == t || "Callout" == t) {
                        const e = i.settings;
                        e && (this.getPrivate("labelFillControl").setColor(e.get("fill")),
                        this.getPrivate("labelFontSizeControl").setItemById(e.get("fontSize")),
                        this.getPrivate("boldControl").set("active", "bold" == e.get("fontWeight")),
                        this.getPrivate("italicControl").set("active", "italic" == e.get("fontStyle")),
                        this.getPrivate("labelFontFamilyControl").setItemById(e.get("fontFamily")));
                        const t = i.bgSettings;
                        if (t) {
                            const e = this.getPrivate("strokeControl");
                            e.setColor(t.get("stroke")),
                            e.setOpacity(t.get("strokeOpacity"));
                            const i = this.getPrivate("fillControl");
                            i.setColor(t.get("fill")),
                            i.setOpacity(t.get("fillOpacity"))
                        }
                    } else {
                        const e = i.stroke || i.settings;
                        if (e) {
                            const t = this.getPrivate("strokeControl");
                            t.setColor(e.get("stroke")),
                            t.setOpacity(e.get("strokeOpacity")),
                            this.getPrivate("strokeWidthControl").setItemById(e.get("strokeWidth") + "px"),
                            this.getPrivate("strokeDasharrayControl").setItemById(JSON.stringify(e.get("strokeDasharray")))
                        }
                        const t = i.fill || i.settings;
                        if (t) {
                            const e = this.getPrivate("fillControl");
                            e.setColor(t.get("fill")),
                            e.setOpacity(t.get("fillOpacity"))
                        }
                        const s = i.settings || i.sprite;
                        s && s.get("svgPath") && this.getPrivate("iconControl").setIconByPath(s.get("svgPath"))
                    }
                }
                ))
            }
            _initElements() {
                super._initElements()
            }
            _isInited() {
                return !!this.getPrivate("toolsContainer")
            }
            _resetControls() {
                this.getPrivate("eraserControl").set("active", !1)
            }
            _initToolbar() {
                const e = this.get("stockChart")
                  , t = this._root.language
                  , i = this.getPrivate("toolbar")
                  , s = document.createElement("div");
                s.className = "am5stock-control-drawing-tools",
                s.style.display = "none",
                this.setPrivate("toolsContainer", s),
                i.get("container").appendChild(s);
                const a = ft.new(this._root, {
                    stockChart: e,
                    description: t.translateAny("Drawing tool"),
                    tools: this.get("tools"),
                    scrollable: this.get("scrollable", !1)
                });
                a.setPrivate("toolbar", i),
                s.appendChild(a.getPrivate("button")),
                this.setPrivate("toolControl", a),
                a.events.on("selected", (e => {
                    N.set("active", !1),
                    this.set("tool", e.tool)
                }
                )),
                a.events.on("click", this._resetControls, this);
                const n = this.get("drawingIcons")
                  , o = yt.new(this._root, {
                    stockChart: e,
                    description: t.translateAny("Arrows &amp; Icons"),
                    icons: n
                });
                o.setPrivate("toolbar", i),
                o.setIcon(this.get("drawingIcon", n[0])),
                s.appendChild(o.getPrivate("button")),
                this.setPrivate("iconControl", o),
                o.events.on("selected", (e => {
                    this.set("drawingIcon", e.icon)
                }
                )),
                o.events.on("click", this._resetControls, this);
                const r = D.new(this._root, {
                    stockChart: e,
                    description: t.translateAny("Snap icon to data"),
                    icon: p.getIcon("Snap")
                });
                r.setPrivate("toolbar", i),
                r.hide(),
                s.appendChild(r.getPrivate("button")),
                this.setPrivate("snapControl", r),
                this.get("snapToData") && r.set("active", !0),
                r.on("active", (e => {
                    this.set("snapToData", 1 == r.get("active"))
                }
                )),
                r.events.on("click", this._resetControls, this);
                const l = T.new(this._root, {
                    stockChart: e,
                    colors: this.get("colors"),
                    description: t.translateAny("Line color")
                });
                l.setPrivate("toolbar", i),
                l.hide(),
                l.setPrivate("color", this.get("strokeColor", (0,
                u.$_)(0))),
                l.setPrivate("opacity", this.get("strokeOpacity", 1)),
                s.appendChild(l.getPrivate("button")),
                this.setPrivate("strokeControl", l),
                l.events.on("selected", (e => {
                    this.set("strokeColor", e.color)
                }
                )),
                l.events.on("selectedOpacity", (e => {
                    this.set("strokeOpacity", e.opacity)
                }
                )),
                l.events.on("click", this._resetControls, this);
                const c = [];
                P.each(this.get("strokeWidths", []), (e => {
                    c.push(e + "px")
                }
                ));
                const h = bt.new(this._root, {
                    stockChart: e,
                    description: t.translateAny("Line thickness"),
                    currentItem: this.get("strokeWidth", "12") + "px",
                    items: c
                });
                h.setPrivate("toolbar", i),
                h.hide(),
                h.getPrivate("icon").style.display = "none",
                s.appendChild(h.getPrivate("button")),
                this.setPrivate("strokeWidthControl", h),
                h.events.on("selected", (e => {
                    this.set("strokeWidth", L.toNumber(L.isString(e.item) ? e.item : e.item.id))
                }
                )),
                h.events.on("click", this._resetControls, this);
                const d = [];
                let g;
                const m = this.get("strokeDasharray", []);
                P.each(this.get("strokeDasharrays", []), (e => {
                    const t = p.getIcon("Dash")
                      , i = JSON.stringify(e);
                    t.setAttribute("stroke", "#000"),
                    t.setAttribute("stroke-dasharray", e.join(",")),
                    t.setAttribute("class", "am5stock-icon-wide"),
                    d.push({
                        id: i,
                        label: "",
                        icon: t
                    }),
                    i == JSON.stringify(m) && (g = p.getIcon("Dash"),
                    g.setAttribute("stroke", "#000"),
                    g.setAttribute("stroke-dasharray", e.join(",")),
                    g.setAttribute("class", "am5stock-icon-wide"))
                }
                ));
                const f = bt.new(this._root, {
                    stockChart: e,
                    description: t.translateAny("Line style"),
                    items: d
                });
                f.setPrivate("toolbar", i),
                f.hide(),
                g && f.setItem({
                    id: "",
                    icon: g,
                    label: ""
                }),
                f.getPrivate("icon").setAttribute("class", "am5stock-control-icon am5stock-icon-wide"),
                s.appendChild(f.getPrivate("button")),
                this.setPrivate("strokeDasharrayControl", f),
                f.events.on("selected", (e => {
                    this.set("strokeDasharray", JSON.parse(e.item.id))
                }
                )),
                f.events.on("click", this._resetControls, this);
                const b = T.new(this._root, {
                    stockChart: e,
                    colors: this.get("colors"),
                    name: t.translateAny("Fill"),
                    description: t.translateAny("Fill color")
                });
                b.hide(),
                b.setPrivate("toolbar", i),
                b.setPrivate("color", this.get("fillColor", (0,
                u.$_)(0))),
                b.setPrivate("opacity", this.get("fillOpacity", 1)),
                s.appendChild(b.getPrivate("button")),
                this.setPrivate("fillControl", b),
                b.events.on("selected", (e => {
                    this.set("fillColor", e.color)
                }
                )),
                b.events.on("selectedOpacity", (e => {
                    this.set("fillOpacity", e.opacity)
                }
                )),
                b.events.on("click", this._resetControls, this);
                const v = T.new(this._root, {
                    stockChart: e,
                    colors: this.get("colors"),
                    name: t.translateAny("Text"),
                    description: t.translateAny("Text color"),
                    useOpacity: !1
                });
                v.hide(),
                v.setPrivate("toolbar", i),
                v.setPrivate("color", this.get("labelFill", (0,
                u.$_)(0))),
                s.appendChild(v.getPrivate("button")),
                this.setPrivate("labelFillControl", v),
                v.events.on("selected", (e => {
                    this.set("labelFill", e.color)
                }
                )),
                v.events.on("click", this._resetControls, this);
                const y = [];
                P.each(this.get("labelFontSizes", []), (e => {
                    y.push(e + "")
                }
                ));
                const _ = bt.new(this._root, {
                    stockChart: e,
                    description: t.translateAny("Label font size"),
                    currentItem: this.get("labelFontSize", "12px") + "",
                    items: y,
                    icon: "none"
                });
                _.hide(),
                _.setPrivate("toolbar", i),
                s.appendChild(_.getPrivate("button")),
                this.setPrivate("labelFontSizeControl", _),
                _.events.on("selected", (e => {
                    this.set("labelFontSize", L.isString(e.item) ? e.item : e.item.id)
                }
                )),
                _.events.on("click", this._resetControls, this);
                const w = D.new(this._root, {
                    stockChart: e,
                    description: t.translateAny("Bold"),
                    icon: p.getIcon("Bold")
                });
                w.hide(),
                w.setPrivate("toolbar", i),
                s.appendChild(w.getPrivate("button")),
                this.setPrivate("boldControl", w),
                w.on("active", (e => {
                    this.set("labelFontWeight", w.get("active") ? "bold" : "normal")
                }
                )),
                w.events.on("click", this._resetControls, this);
                const x = D.new(this._root, {
                    stockChart: e,
                    description: t.translateAny("Italic"),
                    icon: p.getIcon("Italic")
                });
                x.hide(),
                x.setPrivate("toolbar", i),
                s.appendChild(x.getPrivate("button")),
                this.setPrivate("italicControl", x),
                x.on("active", (e => {
                    this.set("labelFontStyle", x.get("active") ? "italic" : "normal")
                }
                )),
                x.events.on("click", this._resetControls, this);
                const k = [];
                P.each(this.get("labelFontFamilies", []), (e => {
                    k.push(e + "")
                }
                ));
                const S = bt.new(this._root, {
                    stockChart: e,
                    description: t.translateAny("Label font family"),
                    currentItem: this.get("labelFontFamily", "Arial"),
                    items: k,
                    icon: "none"
                });
                S.hide(),
                S.setPrivate("toolbar", i),
                s.appendChild(S.getPrivate("button")),
                this.setPrivate("labelFontFamilyControl", S),
                S.events.on("selected", (e => {
                    this.set("labelFontFamily", L.isString(e.item) ? e.item : e.item.id)
                }
                )),
                S.events.on("click", this._resetControls, this);
                const A = D.new(this._root, {
                    stockChart: e,
                    description: t.translateAny("Show line extension"),
                    icon: p.getIcon("Show Extension")
                });
                A.hide(),
                A.setPrivate("toolbar", i),
                s.appendChild(A.getPrivate("button")),
                this.setPrivate("extensionControl", A),
                this.get("showExtension") && A.set("active", !0),
                A.on("active", (e => {
                    this.set("showExtension", 1 == A.get("active"))
                }
                )),
                A.events.on("click", this._resetControls, this);
                const I = D.new(this._root, {
                    stockChart: e,
                    description: t.translateAny("Select"),
                    icon: p.getIcon("Select"),
                    active: e.get("drawingSelectionEnabled", !1)
                });
                this._disposers.push(e.on("drawingSelectionEnabled", (e => {
                    I.set("active", e)
                }
                ))),
                I.setPrivate("toolbar", i),
                s.appendChild(I.getPrivate("button")),
                this.setPrivate("selectControl", I),
                I.on("active", (t => {
                    const i = I.get("active", !1);
                    e.set("drawingSelectionEnabled", i)
                }
                ));
                const N = D.new(this._root, {
                    stockChart: e,
                    description: t.translateAny("Eraser"),
                    icon: p.getIcon("Eraser")
                });
                this._disposers.push(e.on("erasingEnabled", (e => {
                    N.set("active", e)
                }
                ))),
                N.setPrivate("toolbar", i),
                s.appendChild(N.getPrivate("button")),
                this.setPrivate("eraserControl", N),
                N.on("active", (e => {
                    const t = N.get("active", !1);
                    this.setEraser(t)
                }
                ));
                const M = D.new(this._root, {
                    stockChart: e,
                    name: t.translateAny("Clear"),
                    description: t.translateAny("Clear all drawings"),
                    icon: p.getIcon("Clear"),
                    togglable: !1
                });
                M.setPrivate("toolbar", i),
                s.appendChild(M.getPrivate("button")),
                this.setPrivate("clearControl", M),
                this._disposers.push(C.addEventListener(M.getPrivate("button"), "click", (e => {
                    N.set("active", !1),
                    this.clearDrawings()
                }
                ))),
                this.get("active") && this._setTool(this.get("tool"))
            }
            setEraser(e) {
                this.get("stockChart").set("erasingEnabled", e)
            }
            clearDrawings() {
                M.each(this._drawingSeries, ( (e, t) => {
                    P.each(t, (e => {
                        e.clearDrawings()
                    }
                    ))
                }
                ))
            }
            _beforeChanged() {
                super._beforeChanged();
                const e = this._isInited();
                if (this.isDirty("tools")) {
                    const e = this.getPrivate("toolControl");
                    e && e.set("tools", this.get("tools"))
                }
                this.isPrivateDirty("toolbar") && this.getPrivate("toolbar") && this._initToolbar(),
                this.isDirty("active") && (this.get("active") ? (e && (this.getPrivate("toolsContainer").style.display = "block"),
                this._setTool(this.get("tool")),
                e && C.focus(this.getPrivate("toolControl").getPrivate("button"))) : (e && (this.getPrivate("toolsContainer").style.display = "none"),
                this._setTool())),
                this.isDirty("tool") && this.get("active") && this._setTool(this.get("tool"));
                const t = this._root.events;
                (this.isDirty("strokeColor") || this.isDirty("strokeWidth") || this.isDirty("strokeOpacity") || this.isDirty("strokeDasharray")) && t.once("frameended", ( () => {
                    this._setStroke()
                }
                )),
                (this.isDirty("fillColor") || this.isDirty("fillOpacity")) && t.once("frameended", ( () => {
                    this._setFill()
                }
                )),
                (this.isDirty("labelFill") || this.isDirty("labelFontSize") || this.isDirty("labelFontFamily") || this.isDirty("labelFontWeight") || this.isDirty("labelFontStyle")) && t.once("frameended", ( () => {
                    this._setLabel()
                }
                )),
                this.isDirty("showExtension") && t.once("frameended", ( () => {
                    this._setExtension()
                }
                )),
                this.isDirty("drawingIcon") && t.once("frameended", ( () => {
                    this._setDrawingIcon()
                }
                )),
                this.isDirty("snapToData") && t.once("frameended", ( () => {
                    this._setSnap()
                }
                ))
            }
            _setTool(e) {
                const t = this._isInited();
                if (P.each(this._currentEnabledSeries, (e => {
                    e.disableDrawing()
                }
                )),
                this._currentEnabledSeries = [],
                !e)
                    return t && this.getPrivate("eraserControl").set("active", !1),
                    void this.get("stockChart").set("drawingSelectionEnabled", !1);
                this._maybeInitToolSeries(e);
                let i, s = this._drawingSeries[e];
                if (P.each(s, (e => {
                    i !== e.chart && (e.enableDrawing(),
                    this._currentEnabledSeries.push(e),
                    i = e.chart)
                }
                )),
                t) {
                    this.getPrivate("toolControl").setTool(e);
                    const t = {
                        strokeControl: ["Average", "Callout", "Doodle", "Ellipse", "Fibonacci", "Fibonacci Timezone", "Horizontal Line", "Horizontal Ray", "Arrows &amp; Icons", "Line", "Parallel Channel", "Polyline", "Polyfill", "Triangle", "Quadrant Line", "Rectangle", "Regression", "Trend Line", "Vertical Line"],
                        strokeWidthControl: ["Average", "Doodle", "Ellipse", "Horizontal Line", "Horizontal Ray", "Arrows &amp; Icons", "Line", "Polyline", "Polyfill", "Triangle", "Quadrant Line", "Rectangle", "Regression", "Trend Line", "Vertical Line", "Parallel Channel"],
                        strokeDasharrayControl: ["Average", "Doodle", "Ellipse", "Horizontal Line", "Horizontal Ray", "Arrows &amp; Icons", "Line", "Polyline", "Polyfill", "Triangle", "Quadrant Line", "Rectangle", "Regression", "Trend Line", "Vertical Line"],
                        extensionControl: ["Average", "Line", "Regression", "Trend Line"],
                        fillControl: ["Callout", "Ellipse", "Quadrant Line", "Rectangle", "Parallel Channel", "Polyfill", "Triangle", "Polyfill", "Triangle", "Arrows &amp; Icons", "Fibonacci Timezone"],
                        labelFillControl: ["Callout", "Label"],
                        labelFontSizeControl: ["Callout", "Label"],
                        labelFontFamilyControl: ["Callout", "Label"],
                        boldControl: ["Callout", "Label"],
                        italicControl: ["Callout", "Label"],
                        iconControl: ["Arrows &amp; Icons"],
                        snapControl: ["Callout", "Arrows &amp; Icons", "Line", "Polyline", "Polyfill", "Triangle", "Parallel Channel", "Label", "Callout", "Horizontal Line", "Horizontal Ray", "Vertical Line", "Quadrant Line", "Rectangle", "Measure", "Fibonacci"]
                    };
                    M.each(t, ( (t, i) => {
                        const s = this.getPrivate(t);
                        -1 == i.indexOf(e) ? s.hide() : s.show()
                    }
                    ))
                }
            }
            _maybeInitToolSeries(e) {
                let t = this._drawingSeries[e];
                t || (t = []);
                const i = [];
                P.each(t, (e => {
                    i.push(e.chart)
                }
                ));
                const s = this.get("series", [])
                  , a = this.get("stockChart");
                if (a.panels.each((e => {
                    if (-1 == i.indexOf(e)) {
                        const t = this._getPanelMainSeries(e);
                        t && s.push(t)
                    }
                }
                )),
                s.length > 0) {
                    const i = this.get("toolSettings", {});
                    P.each(s, (s => {
                        let n;
                        const o = s.get("xAxis")
                          , r = s.get("yAxis")
                          , l = s.chart;
                        let c;
                        if (i[e]) {
                            c = R.YS.new(i[e]);
                            const t = this.getPrivate("toolTemplates", {});
                            t[e] = c,
                            this.setPrivate("toolTemplates", t)
                        }
                        switch (e) {
                        case "Arrows &amp; Icons":
                            const e = this.get("drawingIcon", this.get("drawingIcons")[0]);
                            n = Je.new(this._root, {
                                series: s,
                                xAxis: o,
                                yAxis: r,
                                iconSvgPath: e.svgPath,
                                iconScale: e.scale,
                                iconCenterX: e.centerX,
                                iconCenterY: e.centerY
                            }, c);
                            break;
                        case "Average":
                            n = Ue.new(this._root, {
                                series: s,
                                xAxis: o,
                                yAxis: r
                            }, c);
                            break;
                        case "Callout":
                            n = it.new(this._root, {
                                series: s,
                                xAxis: o,
                                yAxis: r
                            }, c);
                            break;
                        case "Doodle":
                            n = Ze.new(this._root, {
                                series: s,
                                xAxis: o,
                                yAxis: r
                            }, c),
                            n.fills.template.setAll({
                                forceHidden: !0
                            });
                            break;
                        case "Ellipse":
                            n = at.new(this._root, {
                                series: s,
                                xAxis: o,
                                yAxis: r
                            }, c);
                            break;
                        case "Fibonacci":
                            n = lt.new(this._root, {
                                series: s,
                                xAxis: o,
                                yAxis: r
                            }, c);
                            break;
                        case "Fibonacci Timezone":
                            n = ct.new(this._root, {
                                series: s,
                                xAxis: o,
                                yAxis: r
                            }, c);
                            break;
                        case "Horizontal Line":
                            n = We.new(this._root, {
                                series: s,
                                xAxis: o,
                                yAxis: r
                            }, c);
                            break;
                        case "Horizontal Ray":
                            n = ht.new(this._root, {
                                series: s,
                                xAxis: o,
                                yAxis: r
                            }, c);
                            break;
                        case "Label":
                            n = qe.new(this._root, {
                                series: s,
                                xAxis: o,
                                yAxis: r
                            }, c);
                            break;
                        case "Line":
                            n = Be.new(this._root, {
                                series: s,
                                xAxis: o,
                                yAxis: r
                            }, c);
                            break;
                        case "Measure":
                            n = gt.new(this._root, {
                                series: s,
                                xAxis: o,
                                yAxis: r
                            }, c);
                            break;
                        case "Parallel Channel":
                            n = ze.new(this._root, {
                                series: s,
                                xAxis: o,
                                yAxis: r
                            }, c);
                            break;
                        case "Polyline":
                            n = Xe.new(this._root, {
                                series: s,
                                xAxis: o,
                                yAxis: r
                            }, c),
                            n.fills.template.setAll({
                                forceHidden: !0
                            });
                            break;
                        case "Polyfill":
                            n = Xe.new(this._root, {
                                series: s,
                                xAxis: o,
                                yAxis: r,
                                fillShape: !0
                            }, c),
                            n.fills.template.setAll({
                                forceHidden: !0
                            });
                            break;
                        case "Triangle":
                            n = Xe.new(this._root, {
                                series: s,
                                xAxis: o,
                                yAxis: r,
                                fillShape: !0,
                                pointCount: 3
                            }, c),
                            n.fills.template.setAll({
                                forceHidden: !0
                            });
                            break;
                        case "Quadrant Line":
                            n = ot.new(this._root, {
                                series: s,
                                xAxis: o,
                                yAxis: r
                            }, c);
                            break;
                        case "Rectangle":
                            n = He.new(this._root, {
                                series: s,
                                xAxis: o,
                                yAxis: r
                            }, c);
                            break;
                        case "Regression":
                            n = Ge.new(this._root, {
                                series: s,
                                xAxis: o,
                                yAxis: r
                            }, c);
                            break;
                        case "Trend Line":
                            n = nt.new(this._root, {
                                series: s,
                                xAxis: o,
                                yAxis: r
                            }, c);
                            break;
                        case "Vertical Line":
                            n = $e.new(this._root, {
                                series: s,
                                xAxis: o,
                                yAxis: r
                            }, c)
                        }
                        n && (t.push(n),
                        l.drawings.push(n),
                        n.setPrivate("baseValueSeries", s),
                        n.set("valueYShow", a.getSeriesDefault(s, "valueYShow")),
                        n.set("calculateAggregates", !0),
                        a.getPrivate("comparing") && a.setPercentScale(!0))
                    }
                    )),
                    this._drawingSeries[e] = t,
                    this._setStroke(),
                    this._setFill(),
                    this._setLabel(),
                    this._setDrawingIcon(),
                    this._setSnap(),
                    this._setExtension()
                }
            }
            _updateSeriesBindings(e) {
                const t = this._getPanelMainSeries(e);
                t && M.each(this._drawingSeries, ( (i, s) => {
                    P.eachReverse(s, (i => {
                        i.chart == e && (e.isDisposed() ? P.remove(s, i) : (i.set("series", t),
                        i.setPrivate("baseValueSeries", t)))
                    }
                    ))
                }
                ))
            }
            _getPanelMainSeries(e) {
                const t = this.get("stockChart").get("stockSeries");
                let i;
                return i = t && t.chart == e ? t : e.series.getIndex(0),
                i
            }
            _updatePanelBindings() {
                this.get("stockChart").panels.each((e => {
                    e.series.events.onAll(( () => this._updateSeriesBindings(e)))
                }
                ))
            }
            _setStroke() {
                M.each(this._drawingSeries, ( (e, t) => {
                    P.each(t, (e => {
                        e.setAll({
                            strokeColor: this.get("strokeColor"),
                            strokeWidth: this.get("strokeWidth"),
                            strokeOpacity: this.get("strokeOpacity"),
                            strokeDasharray: this.get("strokeDasharray")
                        })
                    }
                    ))
                }
                ))
            }
            _setFill() {
                M.each(this._drawingSeries, ( (e, t) => {
                    P.each(t, (e => {
                        e.setAll({
                            fillColor: this.get("fillColor"),
                            fillOpacity: this.get("fillOpacity")
                        })
                    }
                    ))
                }
                ))
            }
            _setLabel() {
                const e = ["Callout", "Label"];
                M.each(this._drawingSeries, ( (t, i) => {
                    -1 != e.indexOf(t) && P.each(i, (e => {
                        e.setAll({
                            labelFill: this.get("labelFill"),
                            labelFontSize: this.get("labelFontSize"),
                            labelFontFamily: this.get("labelFontFamily"),
                            labelFontWeight: this.get("labelFontWeight"),
                            labelFontStyle: this.get("labelFontStyle")
                        })
                    }
                    ))
                }
                ))
            }
            _setExtension() {
                M.each(this._drawingSeries, ( (e, t) => {
                    P.each(t, (e => {
                        e instanceof Be && e.setAll({
                            showExtension: this.get("showExtension")
                        })
                    }
                    ))
                }
                ))
            }
            _setDrawingIcon() {
                if (!this._isInited())
                    return;
                const e = this.get("drawingIcon", this.get("drawingIcons")[0])
                  , t = this.getPrivate("fillControl");
                e.fillDisabled ? t.hide() : t.show(),
                M.each(this._drawingSeries, ( (t, i) => {
                    P.each(i, (t => {
                        t instanceof Je && t.setAll({
                            iconSvgPath: e.svgPath,
                            iconScale: e.scale,
                            iconCenterX: e.centerX,
                            iconCenterY: e.centerY,
                            fillOpacity: e.fillDisabled ? 0 : this.get("fillOpacity")
                        })
                    }
                    ))
                }
                ))
            }
            _setSnap() {
                const e = this.get("snapToData", !1);
                M.each(this._drawingSeries, ( (t, i) => {
                    P.each(i, (t => {
                        t.getPrivate("allowChangeSnap") && t.set("snapToData", e)
                    }
                    ))
                }
                ))
            }
            _getDefaultIcon() {
                return p.getIcon("Draw")
            }
            _dispose() {
                super._dispose();
                const e = this.getPrivate("toolsContainer");
                e && C.removeElement(e)
            }
            _getSeriesTool(e) {
                if (e instanceof Ve) {
                    let t = e.className;
                    return "SimpleLineSeries" == t ? "Line" : "IconSeries" == t ? "Arrows &amp; Icons" : "PolylineSeries" == t && 3 == e.get("pointCount") ? "Triangle" : "PolylineSeries" == t && e.get("fillShape") ? "Polyfill" : (t = C.addSpacing(t.replace("Series", "")),
                    t)
                }
            }
            serializeDrawings(e="string", t) {
                const i = [];
                return this.get("stockChart").panels.each(( (e, t) => {
                    e.series.each((e => {
                        if (e.isType("DrawingSeries")) {
                            const s = _t.e.new(this.root, {
                                includeSettings: ["strokeColor", "fillColor", "strokeOpacity", "fillOpacity", "strokeWidth", "strokeDasharray", "field", "snapToData", "svgPath", "labelFontSize", "labelFontFamily", "labelFontWeight", "labelFontStyle", "labelFill", "showExtension"],
                                maxDepth: 4
                            });
                            e.data.values.map((e => {
                                e.__parse = !0
                            }
                            ));
                            const a = {
                                __tool: this._getSeriesTool(e),
                                __panelIndex: t,
                                __drawing: s.serialize(e.data.values, 0, !0)
                            };
                            i.push(a)
                        }
                    }
                    ))
                }
                )),
                "object" == e ? i : JSON.stringify(i, void 0, t)
            }
            unserializeDrawings(e) {
                const t = this.get("stockChart");
                L.isString(e) && (e = JSON.parse(e)),
                L.isArray(e) || (e = [e]),
                P.each(e, (e => {
                    let i = t.panels.getIndex(e.__panelIndex || 0);
                    if (i) {
                        const t = e.__tool;
                        let s;
                        this._maybeInitToolSeries(t),
                        P.each(this._drawingSeries[t] || [], (e => {
                            e.chart === i && (s = e)
                        }
                        )),
                        e.settings || (e.settings = {}),
                        j.z.new(this._root).parse(e.__drawing).then((e => {
                            this._updateDrawingIndexes(e, s._index, s),
                            s.data.pushAll(e)
                        }
                        ))
                    } else
                        t.panels.events.once("push", (t => {
                            t.newValue.series.events.once("push", (t => {
                                this.unserializeDrawings(e)
                            }
                            ))
                        }
                        ))
                }
                ))
            }
            _updateDrawingIndexes(e, t, i) {
                L.isArray(e) ? P.each(e, (e => {
                    this._updateDrawingIndexes(e, t, i)
                }
                )) : L.isObject(e) && void 0 !== e.index && (e.index += t,
                i._index = e.index)
            }
            get drawingSeries() {
                return this._drawingSeries
            }
        }
        Object.defineProperty(wt, "className", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: "DrawingControl"
        }),
        Object.defineProperty(wt, "classNames", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: D.classNames.concat([wt.className])
        });
        class xt extends bt {
            _afterNew() {
                super._afterNew();
                const e = this.getPrivate("dropdown");
                this.setPrivate("list", e),
                e.events.on("invoked", (e => {
                    const t = this.addIndicator(e.item.id);
                    this.events.isEnabled("selected") && t && this.events.dispatch("selected", {
                        type: "selected",
                        target: this,
                        indicator: t,
                        item: e.item
                    })
                }
                )),
                e.events.on("closed", (e => {
                    this.set("active", !1)
                }
                )),
                this.on("active", (t => {
                    t ? this.setTimeout(( () => e.show()), 10) : e.hide()
                }
                ));
                const t = this.getPrivate("button");
                t.className = t.className + " am5stock-control-dropdown",
                this._initList(),
                this.get("stockChart").on("volumeSeries", ( () => this._initList()))
            }
            _initList() {
                const e = this.getPrivate("list")
                  , t = this.get("indicators")
                  , i = [];
                P.each(t, (e => {
                    L.isObject(e) ? this.supportsIndicator(e.id) && i.push({
                        id: e.id,
                        label: e.name
                    }) : this.supportsIndicator(e) && i.push({
                        id: e,
                        label: this._root.language.translateAny(e)
                    })
                }
                )),
                e.set("items", i)
            }
            supportsIndicator(e) {
                return !(!this.get("stockChart").get("volumeSeries") && -1 !== ["Chaikin Money Flow", "Chaikin Oscillator", "On Balance Volume", "Price Volume Trend", "Volume", "Volume Profile", "VWAP"].indexOf(e))
            }
            _getDefaultIcon() {
                return p.getIcon("Indicator")
            }
            _beforeChanged() {
                super._beforeChanged(),
                this.isDirty("indicators") && this._initList()
            }
            clearIndicators() {
                this.get("stockChart").indicators.eachReverse((e => {
                    e.dispose()
                }
                ))
            }
            addIndicator(e) {
                if (!this.supportsIndicator(e))
                    return;
                const t = this.get("stockChart");
                let i;
                const s = t.get("stockSeries")
                  , a = t.get("volumeSeries")
                  , n = this.get("legend");
                switch (e) {
                case "Acceleration Bands":
                    i = ce.new(this.root, {
                        stockChart: t,
                        stockSeries: s,
                        legend: n
                    });
                    break;
                case "Accumulation Distribution":
                    i = ue.new(this.root, {
                        stockChart: t,
                        stockSeries: s,
                        volumeSeries: a,
                        legend: n
                    });
                    break;
                case "Accumulative Swing Index":
                    i = ge.new(this.root, {
                        stockChart: t,
                        stockSeries: s,
                        legend: n
                    });
                    break;
                case "Aroon":
                    i = pe.new(this.root, {
                        stockChart: t,
                        stockSeries: s,
                        legend: n
                    });
                    break;
                case "Awesome Oscillator":
                    i = Ce.new(this.root, {
                        stockChart: t,
                        stockSeries: s,
                        legend: n
                    });
                    break;
                case "Bollinger Bands":
                    i = he.new(this.root, {
                        stockChart: t,
                        stockSeries: s,
                        legend: n
                    });
                    break;
                case "Bull Bear Power":
                    i = ye.new(this.root, {
                        stockChart: t,
                        stockSeries: s,
                        volumeSeries: a,
                        legend: n
                    });
                    break;
                case "Chaikin Money Flow":
                    i = be.new(this.root, {
                        stockChart: t,
                        stockSeries: s,
                        volumeSeries: a,
                        legend: n
                    });
                    break;
                case "Chaikin Oscillator":
                    i = ve.new(this.root, {
                        stockChart: t,
                        stockSeries: s,
                        volumeSeries: a,
                        legend: n
                    });
                    break;
                case "Commodity Channel Index":
                    i = Ae.new(this.root, {
                        stockChart: t,
                        stockSeries: s
                    });
                    break;
                case "Disparity Index":
                    i = Ie.new(this.root, {
                        stockChart: t,
                        stockSeries: s
                    });
                    break;
                case "MACD":
                    i = me.new(this.root, {
                        stockChart: t,
                        stockSeries: s,
                        legend: n
                    });
                    break;
                case "Median Price":
                    i = Le.new(this.root, {
                        stockChart: t,
                        stockSeries: s,
                        legend: n
                    });
                    break;
                case "Momentum":
                    i = ae.new(this.root, {
                        stockChart: t,
                        stockSeries: s
                    });
                    break;
                case "Moving Average Cross":
                    i = fe.new(this.root, {
                        stockChart: t,
                        stockSeries: s,
                        legend: n
                    });
                    break;
                case "Moving Average":
                    i = se.new(this.root, {
                        stockChart: t,
                        stockSeries: s,
                        legend: n
                    });
                    break;
                case "Moving Average Deviation":
                    i = le.new(this.root, {
                        stockChart: t,
                        stockSeries: s,
                        legend: n
                    });
                    break;
                case "Moving Average Envelope":
                    i = oe.new(this.root, {
                        stockChart: t,
                        stockSeries: s,
                        legend: n
                    });
                    break;
                case "Standard Deviation":
                    i = Ne.new(this.root, {
                        stockChart: t,
                        stockSeries: s,
                        legend: n
                    });
                    break;
                case "Trix":
                    i = Me.new(this.root, {
                        stockChart: t,
                        stockSeries: s,
                        legend: n
                    });
                    break;
                case "Typical Price":
                    i = Te.new(this.root, {
                        stockChart: t,
                        stockSeries: s,
                        legend: n
                    });
                    break;
                case "Average True Range":
                    i = Ee.new(this.root, {
                        stockChart: t,
                        stockSeries: s,
                        legend: n
                    });
                    break;
                case "On Balance Volume":
                    i = _e.new(this.root, {
                        stockChart: t,
                        stockSeries: s,
                        volumeSeries: a,
                        legend: n
                    });
                    break;
                case "Price Volume Trend":
                    i = we.new(this.root, {
                        stockChart: t,
                        stockSeries: s,
                        volumeSeries: a,
                        legend: n
                    });
                    break;
                case "Relative Strength Index":
                    i = de.new(this.root, {
                        stockChart: t,
                        stockSeries: s
                    });
                    break;
                case "Stochastic Momentum Index":
                    i = ke.new(this.root, {
                        stockChart: t,
                        stockSeries: s
                    });
                    break;
                case "Stochastic Oscillator":
                    i = xe.new(this.root, {
                        stockChart: t,
                        stockSeries: s
                    });
                    break;
                case "Williams R":
                    i = De.new(this.root, {
                        stockChart: t,
                        stockSeries: s
                    });
                    break;
                case "Volume":
                    i = Se.new(this.root, {
                        stockChart: t,
                        stockSeries: s,
                        volumeSeries: a
                    });
                    break;
                case "Volume Profile":
                    i = Pe.new(this.root, {
                        stockChart: t,
                        stockSeries: s,
                        volumeSeries: a,
                        legend: n
                    });
                    break;
                case "VWAP":
                    i = ne.new(this.root, {
                        stockChart: t,
                        stockSeries: s,
                        volumeSeries: a,
                        legend: n
                    });
                    break;
                case "ZigZag":
                    i = Oe.new(this.root, {
                        stockChart: t,
                        stockSeries: s,
                        legend: n
                    })
                }
                if (i || P.eachContinue(this.get("indicators", []), (t => !L.isObject(t) || t.id != e || (i = t.callback.call(this),
                !1))),
                i && (t.indicators.push(i),
                i._editableSettings.length)) {
                    const e = t.getPrivate("settingsModal");
                    e.events.once("done", (e => {
                        i && (e.settings || i.dispose())
                    }
                    )),
                    e.openIndicator(i)
                }
                return i
            }
            serializeIndicators(e="string", t) {
                const i = []
                  , s = this.get("stockChart");
                return s.indicators.each((e => {
                    const t = _t.e.new(this._root, {
                        excludeSettings: ["stockChart", "stockSeries", "volumeSeries", "legend"]
                    })
                      , a = {};
                    e.get("stockSeries") && (a.__stockSeries = !0),
                    e.get("volumeSeries") && (a.__volumeSeries = !0);
                    const n = e.get("legend");
                    n && n._walkParents((e => {
                        e.isType("StockPanel") && (a.__legendIndex = s.panels.indexOf(e))
                    }
                    )),
                    a.__indicator = t.serialize(e, 0),
                    i.push(a)
                }
                )),
                "object" == e ? i : JSON.stringify(i, void 0, t)
            }
            unserializeIndicators(e) {
                const t = this.get("stockChart");
                L.isString(e) && (e = JSON.parse(e)),
                P.each(e, (e => {
                    if (e.__indicator.settings || (e.__indicator.settings = {}),
                    e.__indicator.settings.stockChart = t,
                    e.__stockSeries && !e.__indicator.settings.stockSeries && (e.__indicator.settings.stockSeries = t.get("stockSeries")),
                    e.__volumeSeries && !e.__indicator.settings.volumeSeries && (e.__indicator.settings.volumeSeries = t.get("volumeSeries")),
                    void 0 !== e.__legendIndex && !e.__indicator.settings.legend) {
                        const i = t.panels.getIndex(e.__legendIndex);
                        i && i.walkChildren((t => {
                            t.isType("StockLegend") && (e.__indicator.settings.legend = t)
                        }
                        ))
                    }
                    j.z.new(this._root).parse(e.__indicator).then((e => {
                        e instanceof H && t.indicators.push(e)
                    }
                    ))
                }
                ))
            }
        }
        Object.defineProperty(xt, "className", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: "IndicatorControl"
        }),
        Object.defineProperty(xt, "classNames", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: bt.classNames.concat([xt.className])
        });
        var kt = ["onChange", "onClose", "onDayCreate", "onDestroy", "onKeyDown", "onMonthChange", "onOpen", "onParseConfig", "onReady", "onValueUpdate", "onYearChange", "onPreCalendarPosition"]
          , Ct = {
            _disable: [],
            allowInput: !1,
            allowInvalidPreload: !1,
            altFormat: "F j, Y",
            altInput: !1,
            altInputClass: "form-control input",
            animate: "object" == typeof window && -1 === window.navigator.userAgent.indexOf("MSIE"),
            ariaDateFormat: "F j, Y",
            autoFillDefaultTime: !0,
            clickOpens: !0,
            closeOnSelect: !0,
            conjunction: ", ",
            dateFormat: "Y-m-d",
            defaultHour: 12,
            defaultMinute: 0,
            defaultSeconds: 0,
            disable: [],
            disableMobile: !1,
            enableSeconds: !1,
            enableTime: !1,
            errorHandler: function(e) {
                return "undefined" != typeof console && console.warn(e)
            },
            getWeek: function(e) {
                var t = new Date(e.getTime());
                t.setHours(0, 0, 0, 0),
                t.setDate(t.getDate() + 3 - (t.getDay() + 6) % 7);
                var i = new Date(t.getFullYear(),0,4);
                return 1 + Math.round(((t.getTime() - i.getTime()) / 864e5 - 3 + (i.getDay() + 6) % 7) / 7)
            },
            hourIncrement: 1,
            ignoredFocusElements: [],
            inline: !1,
            locale: "default",
            minuteIncrement: 5,
            mode: "single",
            monthSelectorType: "dropdown",
            nextArrow: "<svg version='1.1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' viewBox='0 0 17 17'><g></g><path d='M13.207 8.472l-7.854 7.854-0.707-0.707 7.146-7.146-7.146-7.148 0.707-0.707 7.854 7.854z' /></svg>",
            noCalendar: !1,
            now: new Date,
            onChange: [],
            onClose: [],
            onDayCreate: [],
            onDestroy: [],
            onKeyDown: [],
            onMonthChange: [],
            onOpen: [],
            onParseConfig: [],
            onReady: [],
            onValueUpdate: [],
            onYearChange: [],
            onPreCalendarPosition: [],
            plugins: [],
            position: "auto",
            positionElement: void 0,
            prevArrow: "<svg version='1.1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' viewBox='0 0 17 17'><g></g><path d='M5.207 8.471l7.146 7.147-0.707 0.707-7.853-7.854 7.854-7.853 0.707 0.707-7.147 7.146z' /></svg>",
            shorthandCurrentMonth: !1,
            showMonths: 1,
            static: !1,
            time_24hr: !1,
            weekNumbers: !1,
            wrap: !1
        }
          , Dt = {
            weekdays: {
                shorthand: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
                longhand: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
            },
            months: {
                shorthand: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
                longhand: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
            },
            daysInMonth: [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31],
            firstDayOfWeek: 0,
            ordinal: function(e) {
                var t = e % 100;
                if (t > 3 && t < 21)
                    return "th";
                switch (t % 10) {
                case 1:
                    return "st";
                case 2:
                    return "nd";
                case 3:
                    return "rd";
                default:
                    return "th"
                }
            },
            rangeSeparator: " to ",
            weekAbbreviation: "Wk",
            scrollTitle: "Scroll to increment",
            toggleTitle: "Click to toggle",
            amPM: ["AM", "PM"],
            yearAriaLabel: "Year",
            monthAriaLabel: "Month",
            hourAriaLabel: "Hour",
            minuteAriaLabel: "Minute",
            time_24hr: !1
        }
          , St = Dt
          , Pt = function(e, t) {
            return void 0 === t && (t = 2),
            ("000" + e).slice(-1 * t)
        }
          , At = function(e) {
            return !0 === e ? 1 : 0
        };
        function It(e, t) {
            var i;
            return function() {
                var s = this
                  , a = arguments;
                clearTimeout(i),
                i = setTimeout((function() {
                    return e.apply(s, a)
                }
                ), t)
            }
        }
        var Nt = function(e) {
            return e instanceof Array ? e : [e]
        };
        function Tt(e, t, i) {
            if (!0 === i)
                return e.classList.add(t);
            e.classList.remove(t)
        }
        function Mt(e, t, i) {
            var s = window.document.createElement(e);
            return t = t || "",
            i = i || "",
            s.className = t,
            void 0 !== i && (s.textContent = i),
            s
        }
        function Lt(e) {
            for (; e.firstChild; )
                e.removeChild(e.firstChild)
        }
        function Ot(e, t) {
            return t(e) ? e : e.parentNode ? Ot(e.parentNode, t) : void 0
        }
        function Et(e, t) {
            var i = Mt("div", "numInputWrapper")
              , s = Mt("input", "numInput " + e)
              , a = Mt("span", "arrowUp")
              , n = Mt("span", "arrowDown");
            if (-1 === navigator.userAgent.indexOf("MSIE 9.0") ? s.type = "number" : (s.type = "text",
            s.pattern = "\\d*"),
            void 0 !== t)
                for (var o in t)
                    s.setAttribute(o, t[o]);
            return i.appendChild(s),
            i.appendChild(a),
            i.appendChild(n),
            i
        }
        function jt(e) {
            try {
                return "function" == typeof e.composedPath ? e.composedPath()[0] : e.target
            } catch (t) {
                return e.target
            }
        }
        var Yt = function() {}
          , Ft = function(e, t, i) {
            return i.months[t ? "shorthand" : "longhand"][e]
        }
          , Vt = {
            D: Yt,
            F: function(e, t, i) {
                e.setMonth(i.months.longhand.indexOf(t))
            },
            G: function(e, t) {
                e.setHours((e.getHours() >= 12 ? 12 : 0) + parseFloat(t))
            },
            H: function(e, t) {
                e.setHours(parseFloat(t))
            },
            J: function(e, t) {
                e.setDate(parseFloat(t))
            },
            K: function(e, t, i) {
                e.setHours(e.getHours() % 12 + 12 * At(new RegExp(i.amPM[1],"i").test(t)))
            },
            M: function(e, t, i) {
                e.setMonth(i.months.shorthand.indexOf(t))
            },
            S: function(e, t) {
                e.setSeconds(parseFloat(t))
            },
            U: function(e, t) {
                return new Date(1e3 * parseFloat(t))
            },
            W: function(e, t, i) {
                var s = parseInt(t)
                  , a = new Date(e.getFullYear(),0,2 + 7 * (s - 1),0,0,0,0);
                return a.setDate(a.getDate() - a.getDay() + i.firstDayOfWeek),
                a
            },
            Y: function(e, t) {
                e.setFullYear(parseFloat(t))
            },
            Z: function(e, t) {
                return new Date(t)
            },
            d: function(e, t) {
                e.setDate(parseFloat(t))
            },
            h: function(e, t) {
                e.setHours((e.getHours() >= 12 ? 12 : 0) + parseFloat(t))
            },
            i: function(e, t) {
                e.setMinutes(parseFloat(t))
            },
            j: function(e, t) {
                e.setDate(parseFloat(t))
            },
            l: Yt,
            m: function(e, t) {
                e.setMonth(parseFloat(t) - 1)
            },
            n: function(e, t) {
                e.setMonth(parseFloat(t) - 1)
            },
            s: function(e, t) {
                e.setSeconds(parseFloat(t))
            },
            u: function(e, t) {
                return new Date(parseFloat(t))
            },
            w: Yt,
            y: function(e, t) {
                e.setFullYear(2e3 + parseFloat(t))
            }
        }
          , Rt = {
            D: "",
            F: "",
            G: "(\\d\\d|\\d)",
            H: "(\\d\\d|\\d)",
            J: "(\\d\\d|\\d)\\w+",
            K: "",
            M: "",
            S: "(\\d\\d|\\d)",
            U: "(.+)",
            W: "(\\d\\d|\\d)",
            Y: "(\\d{4})",
            Z: "(.+)",
            d: "(\\d\\d|\\d)",
            h: "(\\d\\d|\\d)",
            i: "(\\d\\d|\\d)",
            j: "(\\d\\d|\\d)",
            l: "",
            m: "(\\d\\d|\\d)",
            n: "(\\d\\d|\\d)",
            s: "(\\d\\d|\\d)",
            u: "(.+)",
            w: "(\\d\\d|\\d)",
            y: "(\\d{2})"
        }
          , Xt = {
            Z: function(e) {
                return e.toISOString()
            },
            D: function(e, t, i) {
                return t.weekdays.shorthand[Xt.w(e, t, i)]
            },
            F: function(e, t, i) {
                return Ft(Xt.n(e, t, i) - 1, !1, t)
            },
            G: function(e, t, i) {
                return Pt(Xt.h(e, t, i))
            },
            H: function(e) {
                return Pt(e.getHours())
            },
            J: function(e, t) {
                return void 0 !== t.ordinal ? e.getDate() + t.ordinal(e.getDate()) : e.getDate()
            },
            K: function(e, t) {
                return t.amPM[At(e.getHours() > 11)]
            },
            M: function(e, t) {
                return Ft(e.getMonth(), !0, t)
            },
            S: function(e) {
                return Pt(e.getSeconds())
            },
            U: function(e) {
                return e.getTime() / 1e3
            },
            W: function(e, t, i) {
                return i.getWeek(e)
            },
            Y: function(e) {
                return Pt(e.getFullYear(), 4)
            },
            d: function(e) {
                return Pt(e.getDate())
            },
            h: function(e) {
                return e.getHours() % 12 ? e.getHours() % 12 : 12
            },
            i: function(e) {
                return Pt(e.getMinutes())
            },
            j: function(e) {
                return e.getDate()
            },
            l: function(e, t) {
                return t.weekdays.longhand[e.getDay()]
            },
            m: function(e) {
                return Pt(e.getMonth() + 1)
            },
            n: function(e) {
                return e.getMonth() + 1
            },
            s: function(e) {
                return e.getSeconds()
            },
            u: function(e) {
                return e.getTime()
            },
            w: function(e) {
                return e.getDay()
            },
            y: function(e) {
                return String(e.getFullYear()).substring(2)
            }
        }
          , Bt = function(e) {
            var t = e.config
              , i = void 0 === t ? Ct : t
              , s = e.l10n
              , a = void 0 === s ? Dt : s
              , n = e.isMobile
              , o = void 0 !== n && n;
            return function(e, t, s) {
                var n = s || a;
                return void 0 === i.formatDate || o ? t.split("").map((function(t, s, a) {
                    return Xt[t] && "\\" !== a[s - 1] ? Xt[t](e, n, i) : "\\" !== t ? t : ""
                }
                )).join("") : i.formatDate(e, t, n)
            }
        }
          , Ht = function(e) {
            var t = e.config
              , i = void 0 === t ? Ct : t
              , s = e.l10n
              , a = void 0 === s ? Dt : s;
            return function(e, t, s, n) {
                if (0 === e || e) {
                    var o, r = n || a, l = e;
                    if (e instanceof Date)
                        o = new Date(e.getTime());
                    else if ("string" != typeof e && void 0 !== e.toFixed)
                        o = new Date(e);
                    else if ("string" == typeof e) {
                        var c = t || (i || Ct).dateFormat
                          , h = String(e).trim();
                        if ("today" === h)
                            o = new Date,
                            s = !0;
                        else if (i && i.parseDate)
                            o = i.parseDate(e, c);
                        else if (/Z$/.test(h) || /GMT$/.test(h))
                            o = new Date(e);
                        else {
                            for (var d = void 0, u = [], g = 0, p = 0, m = ""; g < c.length; g++) {
                                var f = c[g]
                                  , b = "\\" === f
                                  , v = "\\" === c[g - 1] || b;
                                if (Rt[f] && !v) {
                                    m += Rt[f];
                                    var y = new RegExp(m).exec(e);
                                    y && (d = !0) && u["Y" !== f ? "push" : "unshift"]({
                                        fn: Vt[f],
                                        val: y[++p]
                                    })
                                } else
                                    b || (m += ".")
                            }
                            o = i && i.noCalendar ? new Date((new Date).setHours(0, 0, 0, 0)) : new Date((new Date).getFullYear(),0,1,0,0,0,0),
                            u.forEach((function(e) {
                                var t = e.fn
                                  , i = e.val;
                                return o = t(o, i, r) || o
                            }
                            )),
                            o = d ? o : void 0
                        }
                    }
                    if (o instanceof Date && !isNaN(o.getTime()))
                        return !0 === s && o.setHours(0, 0, 0, 0),
                        o;
                    i.errorHandler(new Error("Invalid date provided: " + l))
                }
            }
        };
        function zt(e, t, i) {
            return void 0 === i && (i = !0),
            !1 !== i ? new Date(e.getTime()).setHours(0, 0, 0, 0) - new Date(t.getTime()).setHours(0, 0, 0, 0) : e.getTime() - t.getTime()
        }
        var Wt = function(e, t, i) {
            return e > Math.min(t, i) && e < Math.max(t, i)
        }
          , $t = function(e, t, i) {
            return 3600 * e + 60 * t + i
        }
          , Ut = function(e) {
            var t = Math.floor(e / 3600)
              , i = (e - 3600 * t) / 60;
            return [t, i, e - 3600 * t - 60 * i]
        }
          , Qt = {
            DAY: 864e5
        };
        function Gt(e) {
            var t = e.defaultHour
              , i = e.defaultMinute
              , s = e.defaultSeconds;
            if (void 0 !== e.minDate) {
                var a = e.minDate.getHours()
                  , n = e.minDate.getMinutes()
                  , o = e.minDate.getSeconds();
                t < a && (t = a),
                t === a && i < n && (i = n),
                t === a && i === n && s < o && (s = e.minDate.getSeconds())
            }
            if (void 0 !== e.maxDate) {
                var r = e.maxDate.getHours()
                  , l = e.maxDate.getMinutes();
                (t = Math.min(t, r)) === r && (i = Math.min(l, i)),
                t === r && i === l && (s = e.maxDate.getSeconds())
            }
            return {
                hours: t,
                minutes: i,
                seconds: s
            }
        }
        i(7663);
        var Zt = function() {
            return Zt = Object.assign || function(e) {
                for (var t, i = 1, s = arguments.length; i < s; i++)
                    for (var a in t = arguments[i])
                        Object.prototype.hasOwnProperty.call(t, a) && (e[a] = t[a]);
                return e
            }
            ,
            Zt.apply(this, arguments)
        }
          , Jt = function() {
            for (var e = 0, t = 0, i = arguments.length; t < i; t++)
                e += arguments[t].length;
            var s = Array(e)
              , a = 0;
            for (t = 0; t < i; t++)
                for (var n = arguments[t], o = 0, r = n.length; o < r; o++,
                a++)
                    s[a] = n[o];
            return s
        }
          , Kt = 300;
        function qt(e, t) {
            var i = {
                config: Zt(Zt({}, Ct), ti.defaultConfig),
                l10n: St
            };
            function s() {
                var e;
                return (null === (e = i.calendarContainer) || void 0 === e ? void 0 : e.getRootNode()).activeElement || document.activeElement
            }
            function a(e) {
                return e.bind(i)
            }
            function n() {
                var e = i.config;
                !1 === e.weekNumbers && 1 === e.showMonths || !0 !== e.noCalendar && window.requestAnimationFrame((function() {
                    if (void 0 !== i.calendarContainer && (i.calendarContainer.style.visibility = "hidden",
                    i.calendarContainer.style.display = "block"),
                    void 0 !== i.daysContainer) {
                        var t = (i.days.offsetWidth + 1) * e.showMonths;
                        i.daysContainer.style.width = t + "px",
                        i.calendarContainer.style.width = t + (void 0 !== i.weekWrapper ? i.weekWrapper.offsetWidth : 0) + "px",
                        i.calendarContainer.style.removeProperty("visibility"),
                        i.calendarContainer.style.removeProperty("display")
                    }
                }
                ))
            }
            function o(e) {
                if (0 === i.selectedDates.length) {
                    var t = void 0 === i.config.minDate || zt(new Date, i.config.minDate) >= 0 ? new Date : new Date(i.config.minDate.getTime())
                      , s = Gt(i.config);
                    t.setHours(s.hours, s.minutes, s.seconds, t.getMilliseconds()),
                    i.selectedDates = [t],
                    i.latestSelectedDateObj = t
                }
                void 0 !== e && "blur" !== e.type && function(e) {
                    e.preventDefault();
                    var t = "keydown" === e.type
                      , s = jt(e)
                      , a = s;
                    void 0 !== i.amPM && s === i.amPM && (i.amPM.textContent = i.l10n.amPM[At(i.amPM.textContent === i.l10n.amPM[0])]);
                    var n = parseFloat(a.getAttribute("min"))
                      , o = parseFloat(a.getAttribute("max"))
                      , r = parseFloat(a.getAttribute("step"))
                      , l = parseInt(a.value, 10)
                      , c = l + r * (e.delta || (t ? 38 === e.which ? 1 : -1 : 0));
                    if (void 0 !== a.value && 2 === a.value.length) {
                        var h = a === i.hourElement
                          , d = a === i.minuteElement;
                        c < n ? (c = o + c + At(!h) + (At(h) && At(!i.amPM)),
                        d && m(void 0, -1, i.hourElement)) : c > o && (c = a === i.hourElement ? c - o - At(!i.amPM) : n,
                        d && m(void 0, 1, i.hourElement)),
                        i.amPM && h && (1 === r ? c + l === 23 : Math.abs(c - l) > r) && (i.amPM.textContent = i.l10n.amPM[At(i.amPM.textContent === i.l10n.amPM[0])]),
                        a.value = Pt(c)
                    }
                }(e);
                var a = i._input.value;
                r(),
                q(),
                i._input.value !== a && i._debouncedChange()
            }
            function r() {
                if (void 0 !== i.hourElement && void 0 !== i.minuteElement) {
                    var e, t, s = (parseInt(i.hourElement.value.slice(-2), 10) || 0) % 24, a = (parseInt(i.minuteElement.value, 10) || 0) % 60, n = void 0 !== i.secondElement ? (parseInt(i.secondElement.value, 10) || 0) % 60 : 0;
                    void 0 !== i.amPM && (e = s,
                    t = i.amPM.textContent,
                    s = e % 12 + 12 * At(t === i.l10n.amPM[1]));
                    var o = void 0 !== i.config.minTime || i.config.minDate && i.minDateHasTime && i.latestSelectedDateObj && 0 === zt(i.latestSelectedDateObj, i.config.minDate, !0)
                      , r = void 0 !== i.config.maxTime || i.config.maxDate && i.maxDateHasTime && i.latestSelectedDateObj && 0 === zt(i.latestSelectedDateObj, i.config.maxDate, !0);
                    if (void 0 !== i.config.maxTime && void 0 !== i.config.minTime && i.config.minTime > i.config.maxTime) {
                        var l = $t(i.config.minTime.getHours(), i.config.minTime.getMinutes(), i.config.minTime.getSeconds())
                          , h = $t(i.config.maxTime.getHours(), i.config.maxTime.getMinutes(), i.config.maxTime.getSeconds())
                          , d = $t(s, a, n);
                        if (d > h && d < l) {
                            var u = Ut(l);
                            s = u[0],
                            a = u[1],
                            n = u[2]
                        }
                    } else {
                        if (r) {
                            var g = void 0 !== i.config.maxTime ? i.config.maxTime : i.config.maxDate;
                            (s = Math.min(s, g.getHours())) === g.getHours() && (a = Math.min(a, g.getMinutes())),
                            a === g.getMinutes() && (n = Math.min(n, g.getSeconds()))
                        }
                        if (o) {
                            var p = void 0 !== i.config.minTime ? i.config.minTime : i.config.minDate;
                            (s = Math.max(s, p.getHours())) === p.getHours() && a < p.getMinutes() && (a = p.getMinutes()),
                            a === p.getMinutes() && (n = Math.max(n, p.getSeconds()))
                        }
                    }
                    c(s, a, n)
                }
            }
            function l(e) {
                var t = e || i.latestSelectedDateObj;
                t && t instanceof Date && c(t.getHours(), t.getMinutes(), t.getSeconds())
            }
            function c(e, t, s) {
                void 0 !== i.latestSelectedDateObj && i.latestSelectedDateObj.setHours(e % 24, t, s || 0, 0),
                i.hourElement && i.minuteElement && !i.isMobile && (i.hourElement.value = Pt(i.config.time_24hr ? e : (12 + e) % 12 + 12 * At(e % 12 == 0)),
                i.minuteElement.value = Pt(t),
                void 0 !== i.amPM && (i.amPM.textContent = i.l10n.amPM[At(e >= 12)]),
                void 0 !== i.secondElement && (i.secondElement.value = Pt(s)))
            }
            function h(e) {
                var t = jt(e)
                  , i = parseInt(t.value) + (e.delta || 0);
                (i / 1e3 > 1 || "Enter" === e.key && !/[^\d]/.test(i.toString())) && N(i)
            }
            function d(e, t, s, a) {
                return t instanceof Array ? t.forEach((function(t) {
                    return d(e, t, s, a)
                }
                )) : e instanceof Array ? e.forEach((function(e) {
                    return d(e, t, s, a)
                }
                )) : (e.addEventListener(t, s, a),
                void i._handlers.push({
                    remove: function() {
                        return e.removeEventListener(t, s, a)
                    }
                }))
            }
            function u() {
                Q("onChange")
            }
            function g(e, t) {
                var s = void 0 !== e ? i.parseDate(e) : i.latestSelectedDateObj || (i.config.minDate && i.config.minDate > i.now ? i.config.minDate : i.config.maxDate && i.config.maxDate < i.now ? i.config.maxDate : i.now)
                  , a = i.currentYear
                  , n = i.currentMonth;
                try {
                    void 0 !== s && (i.currentYear = s.getFullYear(),
                    i.currentMonth = s.getMonth())
                } catch (e) {
                    e.message = "Invalid date supplied: " + s,
                    i.config.errorHandler(e)
                }
                t && i.currentYear !== a && (Q("onYearChange"),
                x()),
                !t || i.currentYear === a && i.currentMonth === n || Q("onMonthChange"),
                i.redraw()
            }
            function p(e) {
                var t = jt(e);
                ~t.className.indexOf("arrow") && m(e, t.classList.contains("arrowUp") ? 1 : -1)
            }
            function m(e, t, i) {
                var s = e && jt(e)
                  , a = i || s && s.parentNode && s.parentNode.firstChild
                  , n = G("increment");
                n.delta = t,
                a && a.dispatchEvent(n)
            }
            function f(e, t, s, a) {
                var n = T(t, !0)
                  , o = Mt("span", e, t.getDate().toString());
                return o.dateObj = t,
                o.$i = a,
                o.setAttribute("aria-label", i.formatDate(t, i.config.ariaDateFormat)),
                -1 === e.indexOf("hidden") && 0 === zt(t, i.now) && (i.todayDateElem = o,
                o.classList.add("today"),
                o.setAttribute("aria-current", "date")),
                n ? (o.tabIndex = -1,
                Z(t) && (o.classList.add("selected"),
                i.selectedDateElem = o,
                "range" === i.config.mode && (Tt(o, "startRange", i.selectedDates[0] && 0 === zt(t, i.selectedDates[0], !0)),
                Tt(o, "endRange", i.selectedDates[1] && 0 === zt(t, i.selectedDates[1], !0)),
                "nextMonthDay" === e && o.classList.add("inRange")))) : o.classList.add("flatpickr-disabled"),
                "range" === i.config.mode && function(e) {
                    return !("range" !== i.config.mode || i.selectedDates.length < 2) && zt(e, i.selectedDates[0]) >= 0 && zt(e, i.selectedDates[1]) <= 0
                }(t) && !Z(t) && o.classList.add("inRange"),
                i.weekNumbers && 1 === i.config.showMonths && "prevMonthDay" !== e && a % 7 == 6 && i.weekNumbers.insertAdjacentHTML("beforeend", "<span class='flatpickr-day'>" + i.config.getWeek(t) + "</span>"),
                Q("onDayCreate", o),
                o
            }
            function b(e) {
                e.focus(),
                "range" === i.config.mode && E(e)
            }
            function v(e) {
                for (var t = e > 0 ? 0 : i.config.showMonths - 1, s = e > 0 ? i.config.showMonths : -1, a = t; a != s; a += e)
                    for (var n = i.daysContainer.children[a], o = e > 0 ? 0 : n.children.length - 1, r = e > 0 ? n.children.length : -1, l = o; l != r; l += e) {
                        var c = n.children[l];
                        if (-1 === c.className.indexOf("hidden") && T(c.dateObj))
                            return c
                    }
            }
            function y(e, t) {
                var a = s()
                  , n = M(a || document.body)
                  , o = void 0 !== e ? e : n ? a : void 0 !== i.selectedDateElem && M(i.selectedDateElem) ? i.selectedDateElem : void 0 !== i.todayDateElem && M(i.todayDateElem) ? i.todayDateElem : v(t > 0 ? 1 : -1);
                void 0 === o ? i._input.focus() : n ? function(e, t) {
                    for (var s = -1 === e.className.indexOf("Month") ? e.dateObj.getMonth() : i.currentMonth, a = t > 0 ? i.config.showMonths : -1, n = t > 0 ? 1 : -1, o = s - i.currentMonth; o != a; o += n)
                        for (var r = i.daysContainer.children[o], l = s - i.currentMonth === o ? e.$i + t : t < 0 ? r.children.length - 1 : 0, c = r.children.length, h = l; h >= 0 && h < c && h != (t > 0 ? c : -1); h += n) {
                            var d = r.children[h];
                            if (-1 === d.className.indexOf("hidden") && T(d.dateObj) && Math.abs(e.$i - h) >= Math.abs(t))
                                return b(d)
                        }
                    i.changeMonth(n),
                    y(v(n), 0)
                }(o, t) : b(o)
            }
            function _(e, t) {
                for (var s = (new Date(e,t,1).getDay() - i.l10n.firstDayOfWeek + 7) % 7, a = i.utils.getDaysInMonth((t - 1 + 12) % 12, e), n = i.utils.getDaysInMonth(t, e), o = window.document.createDocumentFragment(), r = i.config.showMonths > 1, l = r ? "prevMonthDay hidden" : "prevMonthDay", c = r ? "nextMonthDay hidden" : "nextMonthDay", h = a + 1 - s, d = 0; h <= a; h++,
                d++)
                    o.appendChild(f("flatpickr-day " + l, new Date(e,t - 1,h), 0, d));
                for (h = 1; h <= n; h++,
                d++)
                    o.appendChild(f("flatpickr-day", new Date(e,t,h), 0, d));
                for (var u = n + 1; u <= 42 - s && (1 === i.config.showMonths || d % 7 != 0); u++,
                d++)
                    o.appendChild(f("flatpickr-day " + c, new Date(e,t + 1,u % n), 0, d));
                var g = Mt("div", "dayContainer");
                return g.appendChild(o),
                g
            }
            function w() {
                if (void 0 !== i.daysContainer) {
                    Lt(i.daysContainer),
                    i.weekNumbers && Lt(i.weekNumbers);
                    for (var e = document.createDocumentFragment(), t = 0; t < i.config.showMonths; t++) {
                        var s = new Date(i.currentYear,i.currentMonth,1);
                        s.setMonth(i.currentMonth + t),
                        e.appendChild(_(s.getFullYear(), s.getMonth()))
                    }
                    i.daysContainer.appendChild(e),
                    i.days = i.daysContainer.firstChild,
                    "range" === i.config.mode && 1 === i.selectedDates.length && E()
                }
            }
            function x() {
                if (!(i.config.showMonths > 1 || "dropdown" !== i.config.monthSelectorType)) {
                    var e = function(e) {
                        return !(void 0 !== i.config.minDate && i.currentYear === i.config.minDate.getFullYear() && e < i.config.minDate.getMonth() || void 0 !== i.config.maxDate && i.currentYear === i.config.maxDate.getFullYear() && e > i.config.maxDate.getMonth())
                    };
                    i.monthsDropdownContainer.tabIndex = -1,
                    i.monthsDropdownContainer.innerHTML = "";
                    for (var t = 0; t < 12; t++)
                        if (e(t)) {
                            var s = Mt("option", "flatpickr-monthDropdown-month");
                            s.value = new Date(i.currentYear,t).getMonth().toString(),
                            s.textContent = Ft(t, i.config.shorthandCurrentMonth, i.l10n),
                            s.tabIndex = -1,
                            i.currentMonth === t && (s.selected = !0),
                            i.monthsDropdownContainer.appendChild(s)
                        }
                }
            }
            function k() {
                var e, t = Mt("div", "flatpickr-month"), s = window.document.createDocumentFragment();
                i.config.showMonths > 1 || "static" === i.config.monthSelectorType ? e = Mt("span", "cur-month") : (i.monthsDropdownContainer = Mt("select", "flatpickr-monthDropdown-months"),
                i.monthsDropdownContainer.setAttribute("aria-label", i.l10n.monthAriaLabel),
                d(i.monthsDropdownContainer, "change", (function(e) {
                    var t = jt(e)
                      , s = parseInt(t.value, 10);
                    i.changeMonth(s - i.currentMonth),
                    Q("onMonthChange")
                }
                )),
                x(),
                e = i.monthsDropdownContainer);
                var a = Et("cur-year", {
                    tabindex: "-1"
                })
                  , n = a.getElementsByTagName("input")[0];
                n.setAttribute("aria-label", i.l10n.yearAriaLabel),
                i.config.minDate && n.setAttribute("min", i.config.minDate.getFullYear().toString()),
                i.config.maxDate && (n.setAttribute("max", i.config.maxDate.getFullYear().toString()),
                n.disabled = !!i.config.minDate && i.config.minDate.getFullYear() === i.config.maxDate.getFullYear());
                var o = Mt("div", "flatpickr-current-month");
                return o.appendChild(e),
                o.appendChild(a),
                s.appendChild(o),
                t.appendChild(s),
                {
                    container: t,
                    yearElement: n,
                    monthElement: e
                }
            }
            function C() {
                Lt(i.monthNav),
                i.monthNav.appendChild(i.prevMonthNav),
                i.config.showMonths && (i.yearElements = [],
                i.monthElements = []);
                for (var e = i.config.showMonths; e--; ) {
                    var t = k();
                    i.yearElements.push(t.yearElement),
                    i.monthElements.push(t.monthElement),
                    i.monthNav.appendChild(t.container)
                }
                i.monthNav.appendChild(i.nextMonthNav)
            }
            function D() {
                i.weekdayContainer ? Lt(i.weekdayContainer) : i.weekdayContainer = Mt("div", "flatpickr-weekdays");
                for (var e = i.config.showMonths; e--; ) {
                    var t = Mt("div", "flatpickr-weekdaycontainer");
                    i.weekdayContainer.appendChild(t)
                }
                return S(),
                i.weekdayContainer
            }
            function S() {
                if (i.weekdayContainer) {
                    var e = i.l10n.firstDayOfWeek
                      , t = Jt(i.l10n.weekdays.shorthand);
                    e > 0 && e < t.length && (t = Jt(t.splice(e, t.length), t.splice(0, e)));
                    for (var s = i.config.showMonths; s--; )
                        i.weekdayContainer.children[s].innerHTML = "\n      <span class='flatpickr-weekday'>\n        " + t.join("</span><span class='flatpickr-weekday'>") + "\n      </span>\n      "
                }
            }
            function P(e, t) {
                void 0 === t && (t = !0);
                var s = t ? e : e - i.currentMonth;
                s < 0 && !0 === i._hidePrevMonthArrow || s > 0 && !0 === i._hideNextMonthArrow || (i.currentMonth += s,
                (i.currentMonth < 0 || i.currentMonth > 11) && (i.currentYear += i.currentMonth > 11 ? 1 : -1,
                i.currentMonth = (i.currentMonth + 12) % 12,
                Q("onYearChange"),
                x()),
                w(),
                Q("onMonthChange"),
                J())
            }
            function A(e) {
                return i.calendarContainer.contains(e)
            }
            function I(e) {
                if (i.isOpen && !i.config.inline) {
                    var t = jt(e)
                      , s = A(t)
                      , a = !(t === i.input || t === i.altInput || i.element.contains(t) || e.path && e.path.indexOf && (~e.path.indexOf(i.input) || ~e.path.indexOf(i.altInput)) || s || A(e.relatedTarget))
                      , n = !i.config.ignoredFocusElements.some((function(e) {
                        return e.contains(t)
                    }
                    ));
                    a && n && (i.config.allowInput && i.setDate(i._input.value, !1, i.config.altInput ? i.config.altFormat : i.config.dateFormat),
                    void 0 !== i.timeContainer && void 0 !== i.minuteElement && void 0 !== i.hourElement && "" !== i.input.value && void 0 !== i.input.value && o(),
                    i.close(),
                    i.config && "range" === i.config.mode && 1 === i.selectedDates.length && i.clear(!1))
                }
            }
            function N(e) {
                if (!(!e || i.config.minDate && e < i.config.minDate.getFullYear() || i.config.maxDate && e > i.config.maxDate.getFullYear())) {
                    var t = e
                      , s = i.currentYear !== t;
                    i.currentYear = t || i.currentYear,
                    i.config.maxDate && i.currentYear === i.config.maxDate.getFullYear() ? i.currentMonth = Math.min(i.config.maxDate.getMonth(), i.currentMonth) : i.config.minDate && i.currentYear === i.config.minDate.getFullYear() && (i.currentMonth = Math.max(i.config.minDate.getMonth(), i.currentMonth)),
                    s && (i.redraw(),
                    Q("onYearChange"),
                    x())
                }
            }
            function T(e, t) {
                var s;
                void 0 === t && (t = !0);
                var a = i.parseDate(e, void 0, t);
                if (i.config.minDate && a && zt(a, i.config.minDate, void 0 !== t ? t : !i.minDateHasTime) < 0 || i.config.maxDate && a && zt(a, i.config.maxDate, void 0 !== t ? t : !i.maxDateHasTime) > 0)
                    return !1;
                if (!i.config.enable && 0 === i.config.disable.length)
                    return !0;
                if (void 0 === a)
                    return !1;
                for (var n = !!i.config.enable, o = null !== (s = i.config.enable) && void 0 !== s ? s : i.config.disable, r = 0, l = void 0; r < o.length; r++) {
                    if ("function" == typeof (l = o[r]) && l(a))
                        return n;
                    if (l instanceof Date && void 0 !== a && l.getTime() === a.getTime())
                        return n;
                    if ("string" == typeof l) {
                        var c = i.parseDate(l, void 0, !0);
                        return c && c.getTime() === a.getTime() ? n : !n
                    }
                    if ("object" == typeof l && void 0 !== a && l.from && l.to && a.getTime() >= l.from.getTime() && a.getTime() <= l.to.getTime())
                        return n
                }
                return !n
            }
            function M(e) {
                return void 0 !== i.daysContainer && -1 === e.className.indexOf("hidden") && -1 === e.className.indexOf("flatpickr-disabled") && i.daysContainer.contains(e)
            }
            function L(e) {
                var t = e.target === i._input
                  , s = i._input.value.trimEnd() !== K();
                !t || !s || e.relatedTarget && A(e.relatedTarget) || i.setDate(i._input.value, !0, e.target === i.altInput ? i.config.altFormat : i.config.dateFormat)
            }
            function O(t) {
                var a = jt(t)
                  , n = i.config.wrap ? e.contains(a) : a === i._input
                  , l = i.config.allowInput
                  , c = i.isOpen && (!l || !n)
                  , h = i.config.inline && n && !l;
                if (13 === t.keyCode && n) {
                    if (l)
                        return i.setDate(i._input.value, !0, a === i.altInput ? i.config.altFormat : i.config.dateFormat),
                        i.close(),
                        a.blur();
                    i.open()
                } else if (A(a) || c || h) {
                    var d = !!i.timeContainer && i.timeContainer.contains(a);
                    switch (t.keyCode) {
                    case 13:
                        d ? (t.preventDefault(),
                        o(),
                        B()) : H(t);
                        break;
                    case 27:
                        t.preventDefault(),
                        B();
                        break;
                    case 8:
                    case 46:
                        n && !i.config.allowInput && (t.preventDefault(),
                        i.clear());
                        break;
                    case 37:
                    case 39:
                        if (d || n)
                            i.hourElement && i.hourElement.focus();
                        else {
                            t.preventDefault();
                            var u = s();
                            if (void 0 !== i.daysContainer && (!1 === l || u && M(u))) {
                                var g = 39 === t.keyCode ? 1 : -1;
                                t.ctrlKey ? (t.stopPropagation(),
                                P(g),
                                y(v(1), 0)) : y(void 0, g)
                            }
                        }
                        break;
                    case 38:
                    case 40:
                        t.preventDefault();
                        var p = 40 === t.keyCode ? 1 : -1;
                        i.daysContainer && void 0 !== a.$i || a === i.input || a === i.altInput ? t.ctrlKey ? (t.stopPropagation(),
                        N(i.currentYear - p),
                        y(v(1), 0)) : d || y(void 0, 7 * p) : a === i.currentYearElement ? N(i.currentYear - p) : i.config.enableTime && (!d && i.hourElement && i.hourElement.focus(),
                        o(t),
                        i._debouncedChange());
                        break;
                    case 9:
                        if (d) {
                            var m = [i.hourElement, i.minuteElement, i.secondElement, i.amPM].concat(i.pluginElements).filter((function(e) {
                                return e
                            }
                            ))
                              , f = m.indexOf(a);
                            if (-1 !== f) {
                                var b = m[f + (t.shiftKey ? -1 : 1)];
                                t.preventDefault(),
                                (b || i._input).focus()
                            }
                        } else
                            !i.config.noCalendar && i.daysContainer && i.daysContainer.contains(a) && t.shiftKey && (t.preventDefault(),
                            i._input.focus())
                    }
                }
                if (void 0 !== i.amPM && a === i.amPM)
                    switch (t.key) {
                    case i.l10n.amPM[0].charAt(0):
                    case i.l10n.amPM[0].charAt(0).toLowerCase():
                        i.amPM.textContent = i.l10n.amPM[0],
                        r(),
                        q();
                        break;
                    case i.l10n.amPM[1].charAt(0):
                    case i.l10n.amPM[1].charAt(0).toLowerCase():
                        i.amPM.textContent = i.l10n.amPM[1],
                        r(),
                        q()
                    }
                (n || A(a)) && Q("onKeyDown", t)
            }
            function E(e, t) {
                if (void 0 === t && (t = "flatpickr-day"),
                1 === i.selectedDates.length && (!e || e.classList.contains(t) && !e.classList.contains("flatpickr-disabled"))) {
                    for (var s = e ? e.dateObj.getTime() : i.days.firstElementChild.dateObj.getTime(), a = i.parseDate(i.selectedDates[0], void 0, !0).getTime(), n = Math.min(s, i.selectedDates[0].getTime()), o = Math.max(s, i.selectedDates[0].getTime()), r = !1, l = 0, c = 0, h = n; h < o; h += Qt.DAY)
                        T(new Date(h), !0) || (r = r || h > n && h < o,
                        h < a && (!l || h > l) ? l = h : h > a && (!c || h < c) && (c = h));
                    Array.from(i.rContainer.querySelectorAll("*:nth-child(-n+" + i.config.showMonths + ") > ." + t)).forEach((function(t) {
                        var n = t.dateObj.getTime()
                          , o = l > 0 && n < l || c > 0 && n > c;
                        if (o)
                            return t.classList.add("notAllowed"),
                            void ["inRange", "startRange", "endRange"].forEach((function(e) {
                                t.classList.remove(e)
                            }
                            ));
                        r && !o || (["startRange", "inRange", "endRange", "notAllowed"].forEach((function(e) {
                            t.classList.remove(e)
                        }
                        )),
                        void 0 !== e && (e.classList.add(s <= i.selectedDates[0].getTime() ? "startRange" : "endRange"),
                        a < s && n === a ? t.classList.add("startRange") : a > s && n === a && t.classList.add("endRange"),
                        n >= l && (0 === c || n <= c) && Wt(n, a, s) && t.classList.add("inRange")))
                    }
                    ))
                }
            }
            function j() {
                !i.isOpen || i.config.static || i.config.inline || R()
            }
            function Y(e) {
                return function(t) {
                    var s = i.config["_" + e + "Date"] = i.parseDate(t, i.config.dateFormat)
                      , a = i.config["_" + ("min" === e ? "max" : "min") + "Date"];
                    void 0 !== s && (i["min" === e ? "minDateHasTime" : "maxDateHasTime"] = s.getHours() > 0 || s.getMinutes() > 0 || s.getSeconds() > 0),
                    i.selectedDates && (i.selectedDates = i.selectedDates.filter((function(e) {
                        return T(e)
                    }
                    )),
                    i.selectedDates.length || "min" !== e || l(s),
                    q()),
                    i.daysContainer && (X(),
                    void 0 !== s ? i.currentYearElement[e] = s.getFullYear().toString() : i.currentYearElement.removeAttribute(e),
                    i.currentYearElement.disabled = !!a && void 0 !== s && a.getFullYear() === s.getFullYear())
                }
            }
            function F() {
                return i.config.wrap ? e.querySelector("[data-input]") : e
            }
            function V() {
                "object" != typeof i.config.locale && void 0 === ti.l10ns[i.config.locale] && i.config.errorHandler(new Error("flatpickr: invalid locale " + i.config.locale)),
                i.l10n = Zt(Zt({}, ti.l10ns.default), "object" == typeof i.config.locale ? i.config.locale : "default" !== i.config.locale ? ti.l10ns[i.config.locale] : void 0),
                Rt.D = "(" + i.l10n.weekdays.shorthand.join("|") + ")",
                Rt.l = "(" + i.l10n.weekdays.longhand.join("|") + ")",
                Rt.M = "(" + i.l10n.months.shorthand.join("|") + ")",
                Rt.F = "(" + i.l10n.months.longhand.join("|") + ")",
                Rt.K = "(" + i.l10n.amPM[0] + "|" + i.l10n.amPM[1] + "|" + i.l10n.amPM[0].toLowerCase() + "|" + i.l10n.amPM[1].toLowerCase() + ")",
                void 0 === Zt(Zt({}, t), JSON.parse(JSON.stringify(e.dataset || {}))).time_24hr && void 0 === ti.defaultConfig.time_24hr && (i.config.time_24hr = i.l10n.time_24hr),
                i.formatDate = Bt(i),
                i.parseDate = Ht({
                    config: i.config,
                    l10n: i.l10n
                })
            }
            function R(e) {
                if ("function" != typeof i.config.position) {
                    if (void 0 !== i.calendarContainer) {
                        Q("onPreCalendarPosition");
                        var t = e || i._positionElement
                          , s = Array.prototype.reduce.call(i.calendarContainer.children, (function(e, t) {
                            return e + t.offsetHeight
                        }
                        ), 0)
                          , a = i.calendarContainer.offsetWidth
                          , n = i.config.position.split(" ")
                          , o = n[0]
                          , r = n.length > 1 ? n[1] : null
                          , l = t.getBoundingClientRect()
                          , c = window.innerHeight - l.bottom
                          , h = "above" === o || "below" !== o && c < s && l.top > s
                          , d = window.pageYOffset + l.top + (h ? -s - 2 : t.offsetHeight + 2);
                        if (Tt(i.calendarContainer, "arrowTop", !h),
                        Tt(i.calendarContainer, "arrowBottom", h),
                        !i.config.inline) {
                            var u = window.pageXOffset + l.left
                              , g = !1
                              , p = !1;
                            "center" === r ? (u -= (a - l.width) / 2,
                            g = !0) : "right" === r && (u -= a - l.width,
                            p = !0),
                            Tt(i.calendarContainer, "arrowLeft", !g && !p),
                            Tt(i.calendarContainer, "arrowCenter", g),
                            Tt(i.calendarContainer, "arrowRight", p);
                            var m = window.document.body.offsetWidth - (window.pageXOffset + l.right)
                              , f = u + a > window.document.body.offsetWidth
                              , b = m + a > window.document.body.offsetWidth;
                            if (Tt(i.calendarContainer, "rightMost", f),
                            !i.config.static)
                                if (i.calendarContainer.style.top = d + "px",
                                f)
                                    if (b) {
                                        var v = function() {
                                            for (var e = null, t = 0; t < document.styleSheets.length; t++) {
                                                var i = document.styleSheets[t];
                                                if (i.cssRules) {
                                                    try {
                                                        i.cssRules
                                                    } catch (e) {
                                                        continue
                                                    }
                                                    e = i;
                                                    break
                                                }
                                            }
                                            return null != e ? e : (s = document.createElement("style"),
                                            document.head.appendChild(s),
                                            s.sheet);
                                            var s
                                        }();
                                        if (void 0 === v)
                                            return;
                                        var y = window.document.body.offsetWidth
                                          , _ = Math.max(0, y / 2 - a / 2)
                                          , w = v.cssRules.length
                                          , x = "{left:" + l.left + "px;right:auto;}";
                                        Tt(i.calendarContainer, "rightMost", !1),
                                        Tt(i.calendarContainer, "centerMost", !0),
                                        v.insertRule(".flatpickr-calendar.centerMost:before,.flatpickr-calendar.centerMost:after" + x, w),
                                        i.calendarContainer.style.left = _ + "px",
                                        i.calendarContainer.style.right = "auto"
                                    } else
                                        i.calendarContainer.style.left = "auto",
                                        i.calendarContainer.style.right = m + "px";
                                else
                                    i.calendarContainer.style.left = u + "px",
                                    i.calendarContainer.style.right = "auto"
                        }
                    }
                } else
                    i.config.position(i, e)
            }
            function X() {
                i.config.noCalendar || i.isMobile || (x(),
                J(),
                w())
            }
            function B() {
                i._input.focus(),
                -1 !== window.navigator.userAgent.indexOf("MSIE") || void 0 !== navigator.msMaxTouchPoints ? setTimeout(i.close, 0) : i.close()
            }
            function H(e) {
                e.preventDefault(),
                e.stopPropagation();
                var t = Ot(jt(e), (function(e) {
                    return e.classList && e.classList.contains("flatpickr-day") && !e.classList.contains("flatpickr-disabled") && !e.classList.contains("notAllowed")
                }
                ));
                if (void 0 !== t) {
                    var s = t
                      , a = i.latestSelectedDateObj = new Date(s.dateObj.getTime())
                      , n = (a.getMonth() < i.currentMonth || a.getMonth() > i.currentMonth + i.config.showMonths - 1) && "range" !== i.config.mode;
                    if (i.selectedDateElem = s,
                    "single" === i.config.mode)
                        i.selectedDates = [a];
                    else if ("multiple" === i.config.mode) {
                        var o = Z(a);
                        o ? i.selectedDates.splice(parseInt(o), 1) : i.selectedDates.push(a)
                    } else
                        "range" === i.config.mode && (2 === i.selectedDates.length && i.clear(!1, !1),
                        i.latestSelectedDateObj = a,
                        i.selectedDates.push(a),
                        0 !== zt(a, i.selectedDates[0], !0) && i.selectedDates.sort((function(e, t) {
                            return e.getTime() - t.getTime()
                        }
                        )));
                    if (r(),
                    n) {
                        var l = i.currentYear !== a.getFullYear();
                        i.currentYear = a.getFullYear(),
                        i.currentMonth = a.getMonth(),
                        l && (Q("onYearChange"),
                        x()),
                        Q("onMonthChange")
                    }
                    if (J(),
                    w(),
                    q(),
                    n || "range" === i.config.mode || 1 !== i.config.showMonths ? void 0 !== i.selectedDateElem && void 0 === i.hourElement && i.selectedDateElem && i.selectedDateElem.focus() : b(s),
                    void 0 !== i.hourElement && void 0 !== i.hourElement && i.hourElement.focus(),
                    i.config.closeOnSelect) {
                        var c = "single" === i.config.mode && !i.config.enableTime
                          , h = "range" === i.config.mode && 2 === i.selectedDates.length && !i.config.enableTime;
                        (c || h) && B()
                    }
                    u()
                }
            }
            i.parseDate = Ht({
                config: i.config,
                l10n: i.l10n
            }),
            i._handlers = [],
            i.pluginElements = [],
            i.loadedPlugins = [],
            i._bind = d,
            i._setHoursFromDate = l,
            i._positionCalendar = R,
            i.changeMonth = P,
            i.changeYear = N,
            i.clear = function(e, t) {
                if (void 0 === e && (e = !0),
                void 0 === t && (t = !0),
                i.input.value = "",
                void 0 !== i.altInput && (i.altInput.value = ""),
                void 0 !== i.mobileInput && (i.mobileInput.value = ""),
                i.selectedDates = [],
                i.latestSelectedDateObj = void 0,
                !0 === t && (i.currentYear = i._initialDate.getFullYear(),
                i.currentMonth = i._initialDate.getMonth()),
                !0 === i.config.enableTime) {
                    var s = Gt(i.config);
                    c(s.hours, s.minutes, s.seconds)
                }
                i.redraw(),
                e && Q("onChange")
            }
            ,
            i.close = function() {
                i.isOpen = !1,
                i.isMobile || (void 0 !== i.calendarContainer && i.calendarContainer.classList.remove("open"),
                void 0 !== i._input && i._input.classList.remove("active")),
                Q("onClose")
            }
            ,
            i.onMouseOver = E,
            i._createElement = Mt,
            i.createDay = f,
            i.destroy = function() {
                void 0 !== i.config && Q("onDestroy");
                for (var e = i._handlers.length; e--; )
                    i._handlers[e].remove();
                if (i._handlers = [],
                i.mobileInput)
                    i.mobileInput.parentNode && i.mobileInput.parentNode.removeChild(i.mobileInput),
                    i.mobileInput = void 0;
                else if (i.calendarContainer && i.calendarContainer.parentNode)
                    if (i.config.static && i.calendarContainer.parentNode) {
                        var t = i.calendarContainer.parentNode;
                        if (t.lastChild && t.removeChild(t.lastChild),
                        t.parentNode) {
                            for (; t.firstChild; )
                                t.parentNode.insertBefore(t.firstChild, t);
                            t.parentNode.removeChild(t)
                        }
                    } else
                        i.calendarContainer.parentNode.removeChild(i.calendarContainer);
                i.altInput && (i.input.type = "text",
                i.altInput.parentNode && i.altInput.parentNode.removeChild(i.altInput),
                delete i.altInput),
                i.input && (i.input.type = i.input._type,
                i.input.classList.remove("flatpickr-input"),
                i.input.removeAttribute("readonly")),
                ["_showTimeInput", "latestSelectedDateObj", "_hideNextMonthArrow", "_hidePrevMonthArrow", "__hideNextMonthArrow", "__hidePrevMonthArrow", "isMobile", "isOpen", "selectedDateElem", "minDateHasTime", "maxDateHasTime", "days", "daysContainer", "_input", "_positionElement", "innerContainer", "rContainer", "monthNav", "todayDateElem", "calendarContainer", "weekdayContainer", "prevMonthNav", "nextMonthNav", "monthsDropdownContainer", "currentMonthElement", "currentYearElement", "navigationCurrentMonth", "selectedDateElem", "config"].forEach((function(e) {
                    try {
                        delete i[e]
                    } catch (e) {}
                }
                ))
            }
            ,
            i.isEnabled = T,
            i.jumpToDate = g,
            i.updateValue = q,
            i.open = function(e, t) {
                if (void 0 === t && (t = i._positionElement),
                !0 === i.isMobile) {
                    if (e) {
                        e.preventDefault();
                        var s = jt(e);
                        s && s.blur()
                    }
                    return void 0 !== i.mobileInput && (i.mobileInput.focus(),
                    i.mobileInput.click()),
                    void Q("onOpen")
                }
                if (!i._input.disabled && !i.config.inline) {
                    var a = i.isOpen;
                    i.isOpen = !0,
                    a || (i.calendarContainer.classList.add("open"),
                    i._input.classList.add("active"),
                    Q("onOpen"),
                    R(t)),
                    !0 === i.config.enableTime && !0 === i.config.noCalendar && (!1 !== i.config.allowInput || void 0 !== e && i.timeContainer.contains(e.relatedTarget) || setTimeout((function() {
                        return i.hourElement.select()
                    }
                    ), 50))
                }
            }
            ,
            i.redraw = X,
            i.set = function(e, t) {
                if (null !== e && "object" == typeof e)
                    for (var s in Object.assign(i.config, e),
                    e)
                        void 0 !== z[s] && z[s].forEach((function(e) {
                            return e()
                        }
                        ));
                else
                    i.config[e] = t,
                    void 0 !== z[e] ? z[e].forEach((function(e) {
                        return e()
                    }
                    )) : kt.indexOf(e) > -1 && (i.config[e] = Nt(t));
                i.redraw(),
                q(!0)
            }
            ,
            i.setDate = function(e, t, s) {
                if (void 0 === t && (t = !1),
                void 0 === s && (s = i.config.dateFormat),
                0 !== e && !e || e instanceof Array && 0 === e.length)
                    return i.clear(t);
                W(e, s),
                i.latestSelectedDateObj = i.selectedDates[i.selectedDates.length - 1],
                i.redraw(),
                g(void 0, t),
                l(),
                0 === i.selectedDates.length && i.clear(!1),
                q(t),
                t && Q("onChange")
            }
            ,
            i.toggle = function(e) {
                if (!0 === i.isOpen)
                    return i.close();
                i.open(e)
            }
            ;
            var z = {
                locale: [V, S],
                showMonths: [C, n, D],
                minDate: [g],
                maxDate: [g],
                positionElement: [U],
                clickOpens: [function() {
                    !0 === i.config.clickOpens ? (d(i._input, "focus", i.open),
                    d(i._input, "click", i.open)) : (i._input.removeEventListener("focus", i.open),
                    i._input.removeEventListener("click", i.open))
                }
                ]
            };
            function W(e, t) {
                var s = [];
                if (e instanceof Array)
                    s = e.map((function(e) {
                        return i.parseDate(e, t)
                    }
                    ));
                else if (e instanceof Date || "number" == typeof e)
                    s = [i.parseDate(e, t)];
                else if ("string" == typeof e)
                    switch (i.config.mode) {
                    case "single":
                    case "time":
                        s = [i.parseDate(e, t)];
                        break;
                    case "multiple":
                        s = e.split(i.config.conjunction).map((function(e) {
                            return i.parseDate(e, t)
                        }
                        ));
                        break;
                    case "range":
                        s = e.split(i.l10n.rangeSeparator).map((function(e) {
                            return i.parseDate(e, t)
                        }
                        ))
                    }
                else
                    i.config.errorHandler(new Error("Invalid date supplied: " + JSON.stringify(e)));
                i.selectedDates = i.config.allowInvalidPreload ? s : s.filter((function(e) {
                    return e instanceof Date && T(e, !1)
                }
                )),
                "range" === i.config.mode && i.selectedDates.sort((function(e, t) {
                    return e.getTime() - t.getTime()
                }
                ))
            }
            function $(e) {
                return e.slice().map((function(e) {
                    return "string" == typeof e || "number" == typeof e || e instanceof Date ? i.parseDate(e, void 0, !0) : e && "object" == typeof e && e.from && e.to ? {
                        from: i.parseDate(e.from, void 0),
                        to: i.parseDate(e.to, void 0)
                    } : e
                }
                )).filter((function(e) {
                    return e
                }
                ))
            }
            function U() {
                i._positionElement = i.config.positionElement || i._input
            }
            function Q(e, t) {
                if (void 0 !== i.config) {
                    var s = i.config[e];
                    if (void 0 !== s && s.length > 0)
                        for (var a = 0; s[a] && a < s.length; a++)
                            s[a](i.selectedDates, i.input.value, i, t);
                    "onChange" === e && (i.input.dispatchEvent(G("change")),
                    i.input.dispatchEvent(G("input")))
                }
            }
            function G(e) {
                var t = document.createEvent("Event");
                return t.initEvent(e, !0, !0),
                t
            }
            function Z(e) {
                for (var t = 0; t < i.selectedDates.length; t++) {
                    var s = i.selectedDates[t];
                    if (s instanceof Date && 0 === zt(s, e))
                        return "" + t
                }
                return !1
            }
            function J() {
                i.config.noCalendar || i.isMobile || !i.monthNav || (i.yearElements.forEach((function(e, t) {
                    var s = new Date(i.currentYear,i.currentMonth,1);
                    s.setMonth(i.currentMonth + t),
                    i.config.showMonths > 1 || "static" === i.config.monthSelectorType ? i.monthElements[t].textContent = Ft(s.getMonth(), i.config.shorthandCurrentMonth, i.l10n) + " " : i.monthsDropdownContainer.value = s.getMonth().toString(),
                    e.value = s.getFullYear().toString()
                }
                )),
                i._hidePrevMonthArrow = void 0 !== i.config.minDate && (i.currentYear === i.config.minDate.getFullYear() ? i.currentMonth <= i.config.minDate.getMonth() : i.currentYear < i.config.minDate.getFullYear()),
                i._hideNextMonthArrow = void 0 !== i.config.maxDate && (i.currentYear === i.config.maxDate.getFullYear() ? i.currentMonth + 1 > i.config.maxDate.getMonth() : i.currentYear > i.config.maxDate.getFullYear()))
            }
            function K(e) {
                var t = e || (i.config.altInput ? i.config.altFormat : i.config.dateFormat);
                return i.selectedDates.map((function(e) {
                    return i.formatDate(e, t)
                }
                )).filter((function(e, t, s) {
                    return "range" !== i.config.mode || i.config.enableTime || s.indexOf(e) === t
                }
                )).join("range" !== i.config.mode ? i.config.conjunction : i.l10n.rangeSeparator)
            }
            function q(e) {
                void 0 === e && (e = !0),
                void 0 !== i.mobileInput && i.mobileFormatStr && (i.mobileInput.value = void 0 !== i.latestSelectedDateObj ? i.formatDate(i.latestSelectedDateObj, i.mobileFormatStr) : ""),
                i.input.value = K(i.config.dateFormat),
                void 0 !== i.altInput && (i.altInput.value = K(i.config.altFormat)),
                !1 !== e && Q("onValueUpdate")
            }
            function ee(e) {
                var t = jt(e)
                  , s = i.prevMonthNav.contains(t)
                  , a = i.nextMonthNav.contains(t);
                s || a ? P(s ? -1 : 1) : i.yearElements.indexOf(t) >= 0 ? t.select() : t.classList.contains("arrowUp") ? i.changeYear(i.currentYear + 1) : t.classList.contains("arrowDown") && i.changeYear(i.currentYear - 1)
            }
            return function() {
                i.element = i.input = e,
                i.isOpen = !1,
                function() {
                    var s = ["wrap", "weekNumbers", "allowInput", "allowInvalidPreload", "clickOpens", "time_24hr", "enableTime", "noCalendar", "altInput", "shorthandCurrentMonth", "inline", "static", "enableSeconds", "disableMobile"]
                      , n = Zt(Zt({}, JSON.parse(JSON.stringify(e.dataset || {}))), t)
                      , o = {};
                    i.config.parseDate = n.parseDate,
                    i.config.formatDate = n.formatDate,
                    Object.defineProperty(i.config, "enable", {
                        get: function() {
                            return i.config._enable
                        },
                        set: function(e) {
                            i.config._enable = $(e)
                        }
                    }),
                    Object.defineProperty(i.config, "disable", {
                        get: function() {
                            return i.config._disable
                        },
                        set: function(e) {
                            i.config._disable = $(e)
                        }
                    });
                    var r = "time" === n.mode;
                    if (!n.dateFormat && (n.enableTime || r)) {
                        var l = ti.defaultConfig.dateFormat || Ct.dateFormat;
                        o.dateFormat = n.noCalendar || r ? "H:i" + (n.enableSeconds ? ":S" : "") : l + " H:i" + (n.enableSeconds ? ":S" : "")
                    }
                    if (n.altInput && (n.enableTime || r) && !n.altFormat) {
                        var c = ti.defaultConfig.altFormat || Ct.altFormat;
                        o.altFormat = n.noCalendar || r ? "h:i" + (n.enableSeconds ? ":S K" : " K") : c + " h:i" + (n.enableSeconds ? ":S" : "") + " K"
                    }
                    Object.defineProperty(i.config, "minDate", {
                        get: function() {
                            return i.config._minDate
                        },
                        set: Y("min")
                    }),
                    Object.defineProperty(i.config, "maxDate", {
                        get: function() {
                            return i.config._maxDate
                        },
                        set: Y("max")
                    });
                    var h = function(e) {
                        return function(t) {
                            i.config["min" === e ? "_minTime" : "_maxTime"] = i.parseDate(t, "H:i:S")
                        }
                    };
                    Object.defineProperty(i.config, "minTime", {
                        get: function() {
                            return i.config._minTime
                        },
                        set: h("min")
                    }),
                    Object.defineProperty(i.config, "maxTime", {
                        get: function() {
                            return i.config._maxTime
                        },
                        set: h("max")
                    }),
                    "time" === n.mode && (i.config.noCalendar = !0,
                    i.config.enableTime = !0),
                    Object.assign(i.config, o, n);
                    for (var d = 0; d < s.length; d++)
                        i.config[s[d]] = !0 === i.config[s[d]] || "true" === i.config[s[d]];
                    for (kt.filter((function(e) {
                        return void 0 !== i.config[e]
                    }
                    )).forEach((function(e) {
                        i.config[e] = Nt(i.config[e] || []).map(a)
                    }
                    )),
                    i.isMobile = !i.config.disableMobile && !i.config.inline && "single" === i.config.mode && !i.config.disable.length && !i.config.enable && !i.config.weekNumbers && /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent),
                    d = 0; d < i.config.plugins.length; d++) {
                        var u = i.config.plugins[d](i) || {};
                        for (var g in u)
                            kt.indexOf(g) > -1 ? i.config[g] = Nt(u[g]).map(a).concat(i.config[g]) : void 0 === n[g] && (i.config[g] = u[g])
                    }
                    n.altInputClass || (i.config.altInputClass = F().className + " " + i.config.altInputClass),
                    Q("onParseConfig")
                }(),
                V(),
                i.input = F(),
                i.input ? (i.input._type = i.input.type,
                i.input.type = "text",
                i.input.classList.add("flatpickr-input"),
                i._input = i.input,
                i.config.altInput && (i.altInput = Mt(i.input.nodeName, i.config.altInputClass),
                i._input = i.altInput,
                i.altInput.placeholder = i.input.placeholder,
                i.altInput.disabled = i.input.disabled,
                i.altInput.required = i.input.required,
                i.altInput.tabIndex = i.input.tabIndex,
                i.altInput.type = "text",
                i.input.setAttribute("type", "hidden"),
                !i.config.static && i.input.parentNode && i.input.parentNode.insertBefore(i.altInput, i.input.nextSibling)),
                i.config.allowInput || i._input.setAttribute("readonly", "readonly"),
                U()) : i.config.errorHandler(new Error("Invalid input element specified")),
                function() {
                    i.selectedDates = [],
                    i.now = i.parseDate(i.config.now) || new Date;
                    var e = i.config.defaultDate || ("INPUT" !== i.input.nodeName && "TEXTAREA" !== i.input.nodeName || !i.input.placeholder || i.input.value !== i.input.placeholder ? i.input.value : null);
                    e && W(e, i.config.dateFormat),
                    i._initialDate = i.selectedDates.length > 0 ? i.selectedDates[0] : i.config.minDate && i.config.minDate.getTime() > i.now.getTime() ? i.config.minDate : i.config.maxDate && i.config.maxDate.getTime() < i.now.getTime() ? i.config.maxDate : i.now,
                    i.currentYear = i._initialDate.getFullYear(),
                    i.currentMonth = i._initialDate.getMonth(),
                    i.selectedDates.length > 0 && (i.latestSelectedDateObj = i.selectedDates[0]),
                    void 0 !== i.config.minTime && (i.config.minTime = i.parseDate(i.config.minTime, "H:i")),
                    void 0 !== i.config.maxTime && (i.config.maxTime = i.parseDate(i.config.maxTime, "H:i")),
                    i.minDateHasTime = !!i.config.minDate && (i.config.minDate.getHours() > 0 || i.config.minDate.getMinutes() > 0 || i.config.minDate.getSeconds() > 0),
                    i.maxDateHasTime = !!i.config.maxDate && (i.config.maxDate.getHours() > 0 || i.config.maxDate.getMinutes() > 0 || i.config.maxDate.getSeconds() > 0)
                }(),
                i.utils = {
                    getDaysInMonth: function(e, t) {
                        return void 0 === e && (e = i.currentMonth),
                        void 0 === t && (t = i.currentYear),
                        1 === e && (t % 4 == 0 && t % 100 != 0 || t % 400 == 0) ? 29 : i.l10n.daysInMonth[e]
                    }
                },
                i.isMobile || function() {
                    var e = window.document.createDocumentFragment();
                    if (i.calendarContainer = Mt("div", "flatpickr-calendar"),
                    i.calendarContainer.tabIndex = -1,
                    !i.config.noCalendar) {
                        if (e.appendChild((i.monthNav = Mt("div", "flatpickr-months"),
                        i.yearElements = [],
                        i.monthElements = [],
                        i.prevMonthNav = Mt("span", "flatpickr-prev-month"),
                        i.prevMonthNav.innerHTML = i.config.prevArrow,
                        i.nextMonthNav = Mt("span", "flatpickr-next-month"),
                        i.nextMonthNav.innerHTML = i.config.nextArrow,
                        C(),
                        Object.defineProperty(i, "_hidePrevMonthArrow", {
                            get: function() {
                                return i.__hidePrevMonthArrow
                            },
                            set: function(e) {
                                i.__hidePrevMonthArrow !== e && (Tt(i.prevMonthNav, "flatpickr-disabled", e),
                                i.__hidePrevMonthArrow = e)
                            }
                        }),
                        Object.defineProperty(i, "_hideNextMonthArrow", {
                            get: function() {
                                return i.__hideNextMonthArrow
                            },
                            set: function(e) {
                                i.__hideNextMonthArrow !== e && (Tt(i.nextMonthNav, "flatpickr-disabled", e),
                                i.__hideNextMonthArrow = e)
                            }
                        }),
                        i.currentYearElement = i.yearElements[0],
                        J(),
                        i.monthNav)),
                        i.innerContainer = Mt("div", "flatpickr-innerContainer"),
                        i.config.weekNumbers) {
                            var t = function() {
                                i.calendarContainer.classList.add("hasWeeks");
                                var e = Mt("div", "flatpickr-weekwrapper");
                                e.appendChild(Mt("span", "flatpickr-weekday", i.l10n.weekAbbreviation));
                                var t = Mt("div", "flatpickr-weeks");
                                return e.appendChild(t),
                                {
                                    weekWrapper: e,
                                    weekNumbers: t
                                }
                            }()
                              , s = t.weekWrapper
                              , a = t.weekNumbers;
                            i.innerContainer.appendChild(s),
                            i.weekNumbers = a,
                            i.weekWrapper = s
                        }
                        i.rContainer = Mt("div", "flatpickr-rContainer"),
                        i.rContainer.appendChild(D()),
                        i.daysContainer || (i.daysContainer = Mt("div", "flatpickr-days"),
                        i.daysContainer.tabIndex = -1),
                        w(),
                        i.rContainer.appendChild(i.daysContainer),
                        i.innerContainer.appendChild(i.rContainer),
                        e.appendChild(i.innerContainer)
                    }
                    i.config.enableTime && e.appendChild(function() {
                        i.calendarContainer.classList.add("hasTime"),
                        i.config.noCalendar && i.calendarContainer.classList.add("noCalendar");
                        var e = Gt(i.config);
                        i.timeContainer = Mt("div", "flatpickr-time"),
                        i.timeContainer.tabIndex = -1;
                        var t = Mt("span", "flatpickr-time-separator", ":")
                          , s = Et("flatpickr-hour", {
                            "aria-label": i.l10n.hourAriaLabel
                        });
                        i.hourElement = s.getElementsByTagName("input")[0];
                        var a = Et("flatpickr-minute", {
                            "aria-label": i.l10n.minuteAriaLabel
                        });
                        if (i.minuteElement = a.getElementsByTagName("input")[0],
                        i.hourElement.tabIndex = i.minuteElement.tabIndex = -1,
                        i.hourElement.value = Pt(i.latestSelectedDateObj ? i.latestSelectedDateObj.getHours() : i.config.time_24hr ? e.hours : function(e) {
                            switch (e % 24) {
                            case 0:
                            case 12:
                                return 12;
                            default:
                                return e % 12
                            }
                        }(e.hours)),
                        i.minuteElement.value = Pt(i.latestSelectedDateObj ? i.latestSelectedDateObj.getMinutes() : e.minutes),
                        i.hourElement.setAttribute("step", i.config.hourIncrement.toString()),
                        i.minuteElement.setAttribute("step", i.config.minuteIncrement.toString()),
                        i.hourElement.setAttribute("min", i.config.time_24hr ? "0" : "1"),
                        i.hourElement.setAttribute("max", i.config.time_24hr ? "23" : "12"),
                        i.hourElement.setAttribute("maxlength", "2"),
                        i.minuteElement.setAttribute("min", "0"),
                        i.minuteElement.setAttribute("max", "59"),
                        i.minuteElement.setAttribute("maxlength", "2"),
                        i.timeContainer.appendChild(s),
                        i.timeContainer.appendChild(t),
                        i.timeContainer.appendChild(a),
                        i.config.time_24hr && i.timeContainer.classList.add("time24hr"),
                        i.config.enableSeconds) {
                            i.timeContainer.classList.add("hasSeconds");
                            var n = Et("flatpickr-second");
                            i.secondElement = n.getElementsByTagName("input")[0],
                            i.secondElement.value = Pt(i.latestSelectedDateObj ? i.latestSelectedDateObj.getSeconds() : e.seconds),
                            i.secondElement.setAttribute("step", i.minuteElement.getAttribute("step")),
                            i.secondElement.setAttribute("min", "0"),
                            i.secondElement.setAttribute("max", "59"),
                            i.secondElement.setAttribute("maxlength", "2"),
                            i.timeContainer.appendChild(Mt("span", "flatpickr-time-separator", ":")),
                            i.timeContainer.appendChild(n)
                        }
                        return i.config.time_24hr || (i.amPM = Mt("span", "flatpickr-am-pm", i.l10n.amPM[At((i.latestSelectedDateObj ? i.hourElement.value : i.config.defaultHour) > 11)]),
                        i.amPM.title = i.l10n.toggleTitle,
                        i.amPM.tabIndex = -1,
                        i.timeContainer.appendChild(i.amPM)),
                        i.timeContainer
                    }()),
                    Tt(i.calendarContainer, "rangeMode", "range" === i.config.mode),
                    Tt(i.calendarContainer, "animate", !0 === i.config.animate),
                    Tt(i.calendarContainer, "multiMonth", i.config.showMonths > 1),
                    i.calendarContainer.appendChild(e);
                    var n = void 0 !== i.config.appendTo && void 0 !== i.config.appendTo.nodeType;
                    if ((i.config.inline || i.config.static) && (i.calendarContainer.classList.add(i.config.inline ? "inline" : "static"),
                    i.config.inline && (!n && i.element.parentNode ? i.element.parentNode.insertBefore(i.calendarContainer, i._input.nextSibling) : void 0 !== i.config.appendTo && i.config.appendTo.appendChild(i.calendarContainer)),
                    i.config.static)) {
                        var o = Mt("div", "flatpickr-wrapper");
                        i.element.parentNode && i.element.parentNode.insertBefore(o, i.element),
                        o.appendChild(i.element),
                        i.altInput && o.appendChild(i.altInput),
                        o.appendChild(i.calendarContainer)
                    }
                    i.config.static || i.config.inline || (void 0 !== i.config.appendTo ? i.config.appendTo : window.document.body).appendChild(i.calendarContainer)
                }(),
                function() {
                    if (i.config.wrap && ["open", "close", "toggle", "clear"].forEach((function(e) {
                        Array.prototype.forEach.call(i.element.querySelectorAll("[data-" + e + "]"), (function(t) {
                            return d(t, "click", i[e])
                        }
                        ))
                    }
                    )),
                    i.isMobile)
                        !function() {
                            var e = i.config.enableTime ? i.config.noCalendar ? "time" : "datetime-local" : "date";
                            i.mobileInput = Mt("input", i.input.className + " flatpickr-mobile"),
                            i.mobileInput.tabIndex = 1,
                            i.mobileInput.type = e,
                            i.mobileInput.disabled = i.input.disabled,
                            i.mobileInput.required = i.input.required,
                            i.mobileInput.placeholder = i.input.placeholder,
                            i.mobileFormatStr = "datetime-local" === e ? "Y-m-d\\TH:i:S" : "date" === e ? "Y-m-d" : "H:i:S",
                            i.selectedDates.length > 0 && (i.mobileInput.defaultValue = i.mobileInput.value = i.formatDate(i.selectedDates[0], i.mobileFormatStr)),
                            i.config.minDate && (i.mobileInput.min = i.formatDate(i.config.minDate, "Y-m-d")),
                            i.config.maxDate && (i.mobileInput.max = i.formatDate(i.config.maxDate, "Y-m-d")),
                            i.input.getAttribute("step") && (i.mobileInput.step = String(i.input.getAttribute("step"))),
                            i.input.type = "hidden",
                            void 0 !== i.altInput && (i.altInput.type = "hidden");
                            try {
                                i.input.parentNode && i.input.parentNode.insertBefore(i.mobileInput, i.input.nextSibling)
                            } catch (e) {}
                            d(i.mobileInput, "change", (function(e) {
                                i.setDate(jt(e).value, !1, i.mobileFormatStr),
                                Q("onChange"),
                                Q("onClose")
                            }
                            ))
                        }();
                    else {
                        var e = It(j, 50);
                        if (i._debouncedChange = It(u, Kt),
                        i.daysContainer && !/iPhone|iPad|iPod/i.test(navigator.userAgent) && d(i.daysContainer, "mouseover", (function(e) {
                            "range" === i.config.mode && E(jt(e))
                        }
                        )),
                        d(i._input, "keydown", O),
                        void 0 !== i.calendarContainer && d(i.calendarContainer, "keydown", O),
                        i.config.inline || i.config.static || d(window, "resize", e),
                        void 0 !== window.ontouchstart ? d(window.document, "touchstart", I) : d(window.document, "mousedown", I),
                        d(window.document, "focus", I, {
                            capture: !0
                        }),
                        !0 === i.config.clickOpens && (d(i._input, "focus", i.open),
                        d(i._input, "click", i.open)),
                        void 0 !== i.daysContainer && (d(i.monthNav, "click", ee),
                        d(i.monthNav, ["keyup", "increment"], h),
                        d(i.daysContainer, "click", H)),
                        void 0 !== i.timeContainer && void 0 !== i.minuteElement && void 0 !== i.hourElement) {
                            d(i.timeContainer, ["increment"], o),
                            d(i.timeContainer, "blur", o, {
                                capture: !0
                            }),
                            d(i.timeContainer, "click", p),
                            d([i.hourElement, i.minuteElement], ["focus", "click"], (function(e) {
                                return jt(e).select()
                            }
                            )),
                            void 0 !== i.secondElement && d(i.secondElement, "focus", (function() {
                                return i.secondElement && i.secondElement.select()
                            }
                            )),
                            void 0 !== i.amPM && d(i.amPM, "click", (function(e) {
                                o(e)
                            }
                            ))
                        }
                        i.config.allowInput && d(i._input, "blur", L)
                    }
                }(),
                (i.selectedDates.length || i.config.noCalendar) && (i.config.enableTime && l(i.config.noCalendar ? i.latestSelectedDateObj : void 0),
                q(!1)),
                n();
                var s = /^((?!chrome|android).)*safari/i.test(navigator.userAgent);
                !i.isMobile && s && R(),
                Q("onReady")
            }(),
            i
        }
        function ei(e, t) {
            for (var i = Array.prototype.slice.call(e).filter((function(e) {
                return e instanceof HTMLElement
            }
            )), s = [], a = 0; a < i.length; a++) {
                var n = i[a];
                try {
                    if (null !== n.getAttribute("data-fp-omit"))
                        continue;
                    void 0 !== n._flatpickr && (n._flatpickr.destroy(),
                    n._flatpickr = void 0),
                    n._flatpickr = qt(n, t || {}),
                    s.push(n._flatpickr)
                } catch (e) {
                    console.error(e)
                }
            }
            return 1 === s.length ? s[0] : s
        }
        "undefined" != typeof HTMLElement && "undefined" != typeof HTMLCollection && "undefined" != typeof NodeList && (HTMLCollection.prototype.flatpickr = NodeList.prototype.flatpickr = function(e) {
            return ei(this, e)
        }
        ,
        HTMLElement.prototype.flatpickr = function(e) {
            return ei([this], e)
        }
        );
        var ti = function(e, t) {
            return "string" == typeof e ? ei(window.document.querySelectorAll(e), t) : e instanceof Node ? ei([e], t) : ei(e, t)
        };
        ti.defaultConfig = {},
        ti.l10ns = {
            en: Zt({}, St),
            default: Zt({}, St)
        },
        ti.localize = function(e) {
            ti.l10ns.default = Zt(Zt({}, ti.l10ns.default), e)
        }
        ,
        ti.setDefaults = function(e) {
            ti.defaultConfig = Zt(Zt({}, ti.defaultConfig), e)
        }
        ,
        ti.parseDate = Ht({}),
        ti.formatDate = Bt({}),
        ti.compareDates = zt,
        "undefined" != typeof jQuery && void 0 !== jQuery.fn && (jQuery.fn.flatpickr = function(e) {
            return ei(this, e)
        }
        ),
        Date.prototype.fp_incr = function(e) {
            return new Date(this.getFullYear(),this.getMonth(),this.getDate() + ("string" == typeof e ? parseInt(e, 10) : e))
        }
        ,
        "undefined" != typeof window && (window.flatpickr = ti);
        var ii = ti;
        class si extends D {
            _afterNew() {
                super._afterNew();
                const e = S.new(this._root, {
                    control: this,
                    parent: this.getPrivate("button")
                });
                this.setPrivate("dropdown", e),
                e.events.on("opened", (e => {
                    this.set("active", !0),
                    this._updateInputs()
                }
                )),
                e.events.on("closed", (e => {
                    this.set("active", !1)
                }
                )),
                this.on("active", (t => {
                    t ? this.setTimeout(( () => {
                        e.show()
                    }
                    ), 10) : e.hide()
                }
                ));
                const t = this.getPrivate("button");
                t.className = t.className + " am5stock-control-dropdown",
                this.get("useDefaultCSS", !0) && this._loadDefaultCSS(),
                this._initDropdown()
            }
            _initDropdown() {
                const e = this.getPrivate("dropdown").getPrivate("container")
                  , t = document.createElement("div");
                t.className = "am5stock-row",
                e.appendChild(t);
                const i = document.createElement("div");
                i.className = "am5stock-column",
                t.appendChild(i);
                const s = document.createElement("div");
                s.className = "am5stock-group",
                i.appendChild(s);
                const a = document.createElement("div");
                a.className = "am5stock-small",
                a.innerHTML = this._root.language.translate("From %1", void 0, ""),
                s.appendChild(a);
                const n = document.createElement("input");
                n.type = "text",
                s.appendChild(n),
                this.setPrivate("fromField", n);
                const o = document.createElement("div");
                o.className = "am5stock-column",
                t.appendChild(o);
                const r = document.createElement("div");
                r.className = "am5stock-group",
                o.appendChild(r);
                const l = document.createElement("div");
                l.className = "am5stock-small",
                l.innerHTML = this._root.language.translate("To %1", void 0, ""),
                r.appendChild(l);
                const c = document.createElement("input");
                c.type = "text",
                r.appendChild(c),
                this.setPrivate("toField", c);
                const h = this._getPickerLocale()
                  , d = ii(n, {
                    inline: !0,
                    appendTo: i,
                    allowInput: !0,
                    locale: h,
                    formatDate: e => this._formatDate(e),
                    parseDate: e => this._parseDate(e)
                });
                this.setPrivate("fromPicker", d);
                const u = ii(c, {
                    inline: !0,
                    appendTo: o,
                    allowInput: !0,
                    locale: h,
                    formatDate: e => this._formatDate(e),
                    parseDate: e => this._parseDate(e)
                });
                this.setPrivate("toPicker", u);
                const g = document.createElement("div");
                g.className = "am5stock-row",
                e.appendChild(g);
                const p = document.createElement("div");
                p.className = "am5stock-column",
                e.appendChild(p);
                const m = document.createElement("input");
                m.type = "button",
                m.value = this._root.language.translateAny("Apply"),
                m.className = "am5-modal-button am5-modal-primary",
                p.appendChild(m);
                const f = this._getAxis();
                f.onPrivate("selectionMin", ( () => {
                    this.getPrivate("fromDate") && (this._updateInputs(),
                    this._updateLabel())
                }
                )),
                f.onPrivate("selectionMax", ( () => {
                    this.getPrivate("toDate") && (this._updateInputs(),
                    this._updateLabel())
                }
                )),
                f.onPrivate("minFinal", ( () => {
                    this._updatePickers()
                }
                )),
                f.onPrivate("maxFinal", ( () => {
                    this._updatePickers()
                }
                )),
                this._disposers.push(C.addEventListener(m, "click", ( () => {
                    const e = this._parseDate(n.value)
                      , t = this._parseDate(c.value);
                    t.setHours(23, 59, 59),
                    this.setPrivate("fromDate", e),
                    this.setPrivate("toDate", t),
                    f.zoomToDates(e, t),
                    this._updateLabel(),
                    this.set("active", !1);
                    const i = "rangeselected";
                    this.events.isEnabled(i) && this.events.dispatch(i, {
                        type: i,
                        target: this,
                        fromDate: e,
                        toDate: t
                    })
                }
                )));
                const b = document.createElement("input");
                b.type = "button",
                b.value = this._root.language.translateAny("Cancel"),
                b.className = "am5-modal-button am5-modal-scondary",
                p.appendChild(b),
                this._disposers.push(C.addEventListener(b, "click", ( () => {
                    this.set("active", !1)
                }
                )))
            }
            _getDefaultIcon() {
                return p.getIcon("Calendar")
            }
            _afterChanged() {
                super._afterChanged()
            }
            _updateInputs() {
                const e = this._getAxis()
                  , t = e.getPrivate("selectionMin", 0)
                  , i = e.getPrivate("selectionMax", 0);
                if (!t || !i)
                    return;
                const s = new Date(t + 1)
                  , a = new Date(i - 1);
                this.setPrivate("fromDate", s),
                this.setPrivate("toDate", a),
                this.getPrivate("fromField").value = this._formatDate(s),
                this.getPrivate("toField").value = this._formatDate(a);
                const n = this.getPrivate("fromPicker")
                  , o = n.config.minDate;
                !o || o <= s ? n.setDate(s) : n.setDate(o);
                const r = this.getPrivate("toPicker")
                  , l = r.config.maxDate;
                !l || l >= a ? r.setDate(a) : r.setDate(l)
            }
            _updatePickers() {
                const e = this._getAxis()
                  , t = this.get("minDate")
                  , i = this.get("maxDate")
                  , s = this.getPrivate("toPicker")
                  , a = this.getPrivate("fromPicker");
                if ("auto" == t) {
                    const t = e.getPrivate("minFinal");
                    t && (a.set("minDate", new Date(t + 1)),
                    s.set("minDate", new Date(t + 1)))
                } else
                    t instanceof Date ? (a.set("minDate", t),
                    s.set("minDate", t)) : (a.set("minDate", void 0),
                    s.set("minDate", void 0));
                if ("auto" == i) {
                    const t = e.getPrivate("maxFinal") - 1;
                    t && (a.set("maxDate", new Date(t)),
                    s.set("maxDate", new Date(t)))
                } else
                    i instanceof Date ? (a.set("maxDate", i),
                    s.set("maxDate", i)) : (a.set("maxDate", void 0),
                    s.set("maxDate", void 0))
            }
            _updateLabel() {
                const e = this.getPrivate("fromDate")
                  , t = this.getPrivate("toDate");
                let i = "";
                i = e && t ? this._formatDate(e) + " -- " + this._formatDate(t) : this._root.language.translateAny("Date Range"),
                this.set("name", i)
            }
            _formatDate(e) {
                return this._root.dateFormatter.format(e, this._getDateFormat(), !0)
            }
            _parseDate(e) {
                return this._root.dateFormatter.parse(e, this._getDateFormat())
            }
            _getDateFormat() {
                const e = this.get("dateFormat", this._root.dateFormatter.get("dateFormat"));
                return L.isString(e) ? e : "MM/dd/yyyy"
            }
            _getAxis() {
                return this.get("stockChart").panels.getIndex(0).xAxes.getIndex(0)
            }
            _getPickerLocale() {
                const e = this._root.language;
                return {
                    weekdays: {
                        shorthand: [e.translate("Sun"), e.translate("Mon"), e.translate("Tue"), e.translate("Wed"), e.translate("Thu"), e.translate("Fri"), e.translate("Sat")],
                        longhand: [e.translate("Sunday"), e.translate("Monday"), e.translate("Tuesday"), e.translate("Wednesday"), e.translate("Thursday"), e.translate("Friday"), e.translate("Saturday")]
                    },
                    months: {
                        shorthand: [e.translate("Jan"), e.translate("Feb"), e.translate("Mar"), e.translate("Apr"), e.translate("May(short)"), e.translate("Jun"), e.translate("Jul"), e.translate("Aug"), e.translate("Sep"), e.translate("Oct"), e.translate("Nov"), e.translate("Dec")],
                        longhand: [e.translate("January"), e.translate("February"), e.translate("March"), e.translate("April"), e.translate("May"), e.translate("June"), e.translate("July"), e.translate("August"), e.translate("September"), e.translate("October"), e.translate("November"), e.translate("December")]
                    },
                    firstDayOfWeek: e.translate("firstDayOfWeek"),
                    ordinal: e.translateFunc("_dateOrd"),
                    rangeSeparator: " " + e.translateAny("to") + " ",
                    weekAbbreviation: e.translateAny("Wk"),
                    scrollTitle: e.translateAny("Scroll to increment"),
                    toggleTitle: e.translateAny("Click to toggle"),
                    amPM: [e.translate("AM"), e.translate("PM")],
                    yearAriaLabel: e.translateAny("Year"),
                    monthAriaLabel: e.translateAny("Month"),
                    hourAriaLabel: e.translateAny("Hour"),
                    minuteAriaLabel: e.translateAny("Minute"),
                    time_24hr: !0
                }
            }
            _loadDefaultCSS() {
                const e = this._root.interfaceColors
                  , t = e.get("primaryButton").toCSS()
                  , i = e.get("primaryButtonHover").toCSS()
                  , s = e.get("text").toCSS()
                  , a = e.get("secondaryButtonActive").toCSS()
                  , n = e.get("background").toCSS();
                this._disposers.push(new C.StyleSheet(null,`\n.flatpickr-calendar {\n  background: transparent;\n  opacity: 0;\n  display: none;\n  text-align: center;\n  visibility: hidden;\n  padding: 0;\n  -webkit-animation: none;\n          animation: none;\n  direction: ltr;\n  border: 0;\n  font-size: 12px;\n  line-height: 24px;\n  border-radius: 5px;\n  position: absolute;\n  width: 200px;\n  -webkit-box-sizing: border-box;\n          box-sizing: border-box;\n  -ms-touch-action: manipulation;\n      touch-action: manipulation;\n  background: ${n};\n  margin-top: 0.5em;\n}\n.flatpickr-calendar.open,\n.flatpickr-calendar.inline {\n  opacity: 1;\n  max-height: 640px;\n  visibility: visible;\n}\n.flatpickr-calendar.open {\n  display: inline-block;\n  z-index: 99999;\n}\n.flatpickr-calendar.animate.open {\n  -webkit-animation: fpFadeInDown 300ms cubic-bezier(0.23, 1, 0.32, 1);\n          animation: fpFadeInDown 300ms cubic-bezier(0.23, 1, 0.32, 1);\n}\n.flatpickr-calendar.inline {\n  display: block;\n  position: relative;\n  top: 2px;\n}\n.flatpickr-calendar.static {\n  position: absolute;\n  top: calc(100% + 2px);\n}\n.flatpickr-calendar.static.open {\n  z-index: 999;\n  display: block;\n}\n.flatpickr-calendar.multiMonth .flatpickr-days .dayContainer:nth-child(n+1) .flatpickr-day.inRange:nth-child(7n+7) {\n  -webkit-box-shadow: none !important;\n          box-shadow: none !important;\n}\n.flatpickr-calendar.multiMonth .flatpickr-days .dayContainer:nth-child(n+2) .flatpickr-day.inRange:nth-child(7n+1) {\n  -webkit-box-shadow: -2px 0 0 #e6e6e6, 5px 0 0 #e6e6e6;\n          box-shadow: -2px 0 0 #e6e6e6, 5px 0 0 #e6e6e6;\n}\n.flatpickr-calendar .hasWeeks .dayContainer,\n.flatpickr-calendar .hasTime .dayContainer {\n  border-bottom: 0;\n  border-bottom-right-radius: 0;\n  border-bottom-left-radius: 0;\n}\n.flatpickr-calendar .hasWeeks .dayContainer {\n  border-left: 0;\n}\n.flatpickr-calendar.hasTime .flatpickr-time {\n  height: 40px;\n  border-top: 1px solid ${a};\n}\n.flatpickr-calendar.noCalendar.hasTime .flatpickr-time {\n  height: auto;\n}\n.flatpickr-calendar:before,\n.flatpickr-calendar:after {\n  position: absolute;\n  display: block;\n  pointer-events: none;\n  border: solid transparent;\n  content: '';\n  height: 0;\n  width: 0;\n  left: 22px;\n}\n.flatpickr-calendar.rightMost:before,\n.flatpickr-calendar.arrowRight:before,\n.flatpickr-calendar.rightMost:after,\n.flatpickr-calendar.arrowRight:after {\n  left: auto;\n  right: 22px;\n}\n.flatpickr-calendar.arrowCenter:before,\n.flatpickr-calendar.arrowCenter:after {\n  left: 50%;\n  right: 50%;\n}\n.flatpickr-calendar:before {\n  border-width: 5px;\n  margin: 0 -5px;\n}\n.flatpickr-calendar:after {\n  border-width: 4px;\n  margin: 0 -4px;\n}\n.flatpickr-calendar.arrowTop:before,\n.flatpickr-calendar.arrowTop:after {\n  bottom: 100%;\n}\n.flatpickr-calendar.arrowTop:before {\n  border-bottom-color: ${a};\n}\n.flatpickr-calendar.arrowTop:after {\n  border-bottom-color: ${n};\n}\n.flatpickr-calendar.arrowBottom:before,\n.flatpickr-calendar.arrowBottom:after {\n  top: 100%;\n}\n.flatpickr-calendar.arrowBottom:before {\n  border-top-color: ${a};\n}\n.flatpickr-calendar.arrowBottom:after {\n  border-top-color: ${n};\n}\n.flatpickr-calendar:focus {\n  outline: 0;\n}\n.flatpickr-wrapper {\n  position: relative;\n  display: inline-block;\n}\n.flatpickr-months {\n  display: -webkit-box;\n  display: -webkit-flex;\n  display: -ms-flexbox;\n  display: flex;\n}\n.flatpickr-months .flatpickr-month {\n  background: transparent;\n  color: ${s};\n  fill: ${s};\n  height: 34px;\n  line-height: 1;\n  text-align: center;\n  position: relative;\n  -webkit-user-select: none;\n     -moz-user-select: none;\n      -ms-user-select: none;\n          user-select: none;\n  overflow: hidden;\n  -webkit-box-flex: 1;\n  -webkit-flex: 1;\n      -ms-flex: 1;\n          flex: 1;\n}\n.flatpickr-months .flatpickr-prev-month,\n.flatpickr-months .flatpickr-next-month {\n  text-decoration: none;\n  cursor: pointer;\n  position: absolute;\n  top: 0;\n  height: 34px;\n  padding: 10px;\n  z-index: 3;\n  color: ${s};\n  fill: ${s};\n}\n.flatpickr-months .flatpickr-prev-month.flatpickr-disabled,\n.flatpickr-months .flatpickr-next-month.flatpickr-disabled {\n  display: none;\n}\n.flatpickr-months .flatpickr-prev-month i,\n.flatpickr-months .flatpickr-next-month i {\n  position: relative;\n}\n.flatpickr-months .flatpickr-prev-month.flatpickr-prev-month,\n.flatpickr-months .flatpickr-next-month.flatpickr-prev-month {\n/*\n      /*rtl:begin:ignore*/\n/*\n      */\n  left: 0;\n/*\n      /*rtl:end:ignore*/\n/*\n      */\n}\n/*\n      /*rtl:begin:ignore*/\n/*\n      /*rtl:end:ignore*/\n.flatpickr-months .flatpickr-prev-month.flatpickr-next-month,\n.flatpickr-months .flatpickr-next-month.flatpickr-next-month {\n/*\n      /*rtl:begin:ignore*/\n/*\n      */\n  right: 0;\n/*\n      /*rtl:end:ignore*/\n/*\n      */\n}\n/*\n      /*rtl:begin:ignore*/\n/*\n      /*rtl:end:ignore*/\n.flatpickr-months .flatpickr-prev-month:hover,\n.flatpickr-months .flatpickr-next-month:hover {\n  color: ${i};\n}\n.flatpickr-months .flatpickr-prev-month:hover svg,\n.flatpickr-months .flatpickr-next-month:hover svg {\n  fill: ${i};\n}\n.flatpickr-months .flatpickr-prev-month svg,\n.flatpickr-months .flatpickr-next-month svg {\n  width: 14px;\n  height: 14px;\n}\n.flatpickr-months .flatpickr-prev-month svg path,\n.flatpickr-months .flatpickr-next-month svg path {\n  -webkit-transition: fill 0.1s;\n  transition: fill 0.1s;\n  fill: inherit;\n}\n.numInputWrapper {\n  position: relative;\n  height: auto;\n}\n.numInputWrapper input,\n.numInputWrapper span {\n  display: inline-block;\n}\n.numInputWrapper input {\n  width: 100%;\n}\n.numInputWrapper input::-ms-clear {\n  display: none;\n}\n.numInputWrapper input::-webkit-outer-spin-button,\n.numInputWrapper input::-webkit-inner-spin-button {\n  margin: 0;\n  -webkit-appearance: none;\n}\n.numInputWrapper span {\n  position: absolute;\n  right: 0;\n  width: 14px;\n  padding: 0 4px 0 2px;\n  height: 50%;\n  line-height: 50%;\n  opacity: 0;\n  cursor: pointer;\n  border: 1px solid rgba(64,72,72,0.15);\n  -webkit-box-sizing: border-box;\n          box-sizing: border-box;\n}\n.numInputWrapper span:hover {\n  background: rgba(0,0,0,0.1);\n}\n.numInputWrapper span:active {\n  background: rgba(0,0,0,0.2);\n}\n.numInputWrapper span:after {\n  display: block;\n  content: "";\n  position: absolute;\n}\n.numInputWrapper span.arrowUp {\n  top: 0;\n  border-bottom: 0;\n}\n.numInputWrapper span.arrowUp:after {\n  border-left: 4px solid transparent;\n  border-right: 4px solid transparent;\n  border-bottom: 4px solid rgba(64,72,72,0.6);\n  top: 26%;\n}\n.numInputWrapper span.arrowDown {\n  top: 50%;\n}\n.numInputWrapper span.arrowDown:after {\n  border-left: 4px solid transparent;\n  border-right: 4px solid transparent;\n  border-top: 4px solid rgba(64,72,72,0.6);\n  top: 40%;\n}\n.numInputWrapper span svg {\n  width: inherit;\n  height: auto;\n}\n.numInputWrapper span svg path {\n  fill: rgba(60,63,64,0.5);\n}\n.numInputWrapper:hover {\n  background: rgba(0,0,0,0.05);\n}\n.numInputWrapper:hover span {\n  opacity: 1;\n}\n.flatpickr-current-month {\n  margin-top: 1px;\n  font-size: 125%;\n  line-height: inherit;\n  font-weight: 300;\n  color: inherit;\n  position: absolute;\n  width: 75%;\n  left: 12.5%;\n  padding: 7.48px 0 0 0;\n  line-height: 1;\n  height: 34px;\n  display: inline-block;\n  text-align: center;\n  -webkit-transform: translate3d(0px, 0px, 0px);\n          transform: translate3d(0px, 0px, 0px);\n}\n.flatpickr-current-month span.cur-month {\n  font-family: inherit;\n  font-weight: 700;\n  color: inherit;\n  display: inline-block;\n  margin-left: 0.5ch;\n  padding: 0;\n}\n.flatpickr-current-month span.cur-month:hover {\n  background: rgba(0,0,0,0.05);\n}\n.flatpickr-current-month .numInputWrapper {\n  width: 6ch;\n  width: 7ch\\0;\n  display: inline-block;\n}\n.flatpickr-current-month .numInputWrapper span.arrowUp:after {\n  border-bottom-color: ${s};\n}\n.flatpickr-current-month .numInputWrapper span.arrowDown:after {\n  border-top-color: ${s};\n}\n.flatpickr-current-month input.cur-year {\n  background: transparent;\n  -webkit-box-sizing: border-box;\n          box-sizing: border-box;\n  color: inherit;\n  cursor: text;\n  padding: 0 0 0 0.5ch;\n  margin: 0;\n  display: inline-block;\n  font-size: inherit;\n  font-family: inherit;\n  font-weight: 300;\n  line-height: inherit;\n  height: auto;\n  border: 0;\n  border-radius: 0;\n  vertical-align: initial;\n  -webkit-appearance: textfield;\n  -moz-appearance: textfield;\n  appearance: textfield;\n}\n.flatpickr-current-month input.cur-year:focus {\n  outline: 0;\n}\n.flatpickr-current-month input.cur-year[disabled],\n.flatpickr-current-month input.cur-year[disabled]:hover {\n  font-size: 100%;\n  color: rgba(60,63,64,0.5);\n  background: transparent;\n  pointer-events: none;\n}\n.flatpickr-current-month .flatpickr-monthDropdown-months {\n  appearance: menulist;\n  background: transparent;\n  border: none;\n  border-radius: 0;\n  box-sizing: border-box;\n  color: inherit;\n  cursor: pointer;\n  font-size: inherit;\n  font-family: inherit;\n  font-weight: 300;\n  height: auto;\n  line-height: inherit;\n  margin: -1px 0 0 0;\n  outline: none;\n  padding: 0 0 0 0.5ch;\n  position: relative;\n  vertical-align: initial;\n  -webkit-box-sizing: border-box;\n  -webkit-appearance: menulist;\n  -moz-appearance: menulist;\n  width: auto;\n  max-width: 93px;\n}\n.flatpickr-current-month .flatpickr-monthDropdown-months:focus,\n.flatpickr-current-month .flatpickr-monthDropdown-months:active {\n  outline: none;\n}\n.flatpickr-current-month .flatpickr-monthDropdown-months:hover {\n  background: rgba(0,0,0,0.05);\n}\n.flatpickr-current-month .flatpickr-monthDropdown-months .flatpickr-monthDropdown-month {\n  background-color: ${n};\n  outline: none;\n  padding: 0;\n}\n.flatpickr-weekdays {\n  background: transparent;\n  text-align: center;\n  overflow: hidden;\n  width: 100%;\n  display: -webkit-box;\n  display: -webkit-flex;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-align: center;\n  -webkit-align-items: center;\n      -ms-flex-align: center;\n          align-items: center;\n  height: 28px;\n}\n.flatpickr-weekdays .flatpickr-weekdaycontainer {\n  display: -webkit-box;\n  display: -webkit-flex;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-flex: 1;\n  -webkit-flex: 1;\n      -ms-flex: 1;\n          flex: 1;\n}\nspan.flatpickr-weekday {\n  cursor: default;\n  font-size: 90%;\n  background: transparent;\n  color: ${s};\n  line-height: 1;\n  margin: 0;\n  text-align: center;\n  display: block;\n  -webkit-box-flex: 1;\n  -webkit-flex: 1;\n      -ms-flex: 1;\n          flex: 1;\n  font-weight: bolder;\n}\n.dayContainer,\n.flatpickr-weeks {\n  padding: 1px 0 0 0;\n}\n.flatpickr-days {\n  position: relative;\n  overflow: hidden;\n  display: -webkit-box;\n  display: -webkit-flex;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-align: start;\n  -webkit-align-items: flex-start;\n      -ms-flex-align: start;\n          align-items: flex-start;\n  width: 200px;\n}\n.flatpickr-days:focus {\n  outline: 0;\n}\n.dayContainer {\n  padding: 0;\n  outline: 0;\n  text-align: left;\n  width: 200px;\n  min-width: 200px;\n  max-width: 200px;\n  -webkit-box-sizing: border-box;\n          box-sizing: border-box;\n  display: inline-block;\n  display: -ms-flexbox;\n  display: -webkit-box;\n  display: -webkit-flex;\n  display: flex;\n  -webkit-flex-wrap: wrap;\n          flex-wrap: wrap;\n  -ms-flex-wrap: wrap;\n  -ms-flex-pack: justify;\n  -webkit-justify-content: space-around;\n          justify-content: space-around;\n  -webkit-transform: translate3d(0px, 0px, 0px);\n          transform: translate3d(0px, 0px, 0px);\n  opacity: 1;\n}\n.dayContainer + .dayContainer {\n  -webkit-box-shadow: -1px 0 0 ${a};\n          box-shadow: -1px 0 0 ${a};\n}\n.flatpickr-day {\n  background: none;\n  border: 1px solid transparent;\n  border-radius: 150px;\n  -webkit-box-sizing: border-box;\n          box-sizing: border-box;\n  color: ${s};\n  cursor: pointer;\n  font-weight: 400;\n  width: 14.2857143%;\n  -webkit-flex-basis: 14.2857143%;\n      -ms-flex-preferred-size: 14.2857143%;\n          flex-basis: 14.2857143%;\n  max-width: 32px;\n  height: 32px;\n  line-height: 30px;\n  margin: 0;\n  display: inline-block;\n  position: relative;\n  -webkit-box-pack: center;\n  -webkit-justify-content: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n  text-align: center;\n}\n.flatpickr-day.inRange,\n.flatpickr-day.prevMonthDay.inRange,\n.flatpickr-day.nextMonthDay.inRange,\n.flatpickr-day.today.inRange,\n.flatpickr-day.prevMonthDay.today.inRange,\n.flatpickr-day.nextMonthDay.today.inRange,\n.flatpickr-day:hover,\n.flatpickr-day.prevMonthDay:hover,\n.flatpickr-day.nextMonthDay:hover,\n.flatpickr-day:focus,\n.flatpickr-day.prevMonthDay:focus,\n.flatpickr-day.nextMonthDay:focus {\n  cursor: pointer;\n  outline: 0;\n  background: ${i};\n  border-color: ${i};\n}\n.flatpickr-day.today {\n  border-color: ${i};\n}\n.flatpickr-day.today:hover,\n.flatpickr-day.today:focus {\n  border-color: ${i};\n  background: ${i};\n  color: ${n};\n}\n.flatpickr-day.selected,\n.flatpickr-day.startRange,\n.flatpickr-day.endRange,\n.flatpickr-day.selected.inRange,\n.flatpickr-day.startRange.inRange,\n.flatpickr-day.endRange.inRange,\n.flatpickr-day.selected:focus,\n.flatpickr-day.startRange:focus,\n.flatpickr-day.endRange:focus,\n.flatpickr-day.selected:hover,\n.flatpickr-day.startRange:hover,\n.flatpickr-day.endRange:hover,\n.flatpickr-day.selected.prevMonthDay,\n.flatpickr-day.startRange.prevMonthDay,\n.flatpickr-day.endRange.prevMonthDay,\n.flatpickr-day.selected.nextMonthDay,\n.flatpickr-day.startRange.nextMonthDay,\n.flatpickr-day.endRange.nextMonthDay {\n  background: ${t};\n  -webkit-box-shadow: none;\n          box-shadow: none;\n  color: ${n};\n  border-color: ${t};\n}\n.flatpickr-day.selected.startRange,\n.flatpickr-day.startRange.startRange,\n.flatpickr-day.endRange.startRange {\n  border-radius: 50px 0 0 50px;\n}\n.flatpickr-day.selected.endRange,\n.flatpickr-day.startRange.endRange,\n.flatpickr-day.endRange.endRange {\n  border-radius: 0 50px 50px 0;\n}\n.flatpickr-day.selected.startRange + .endRange:not(:nth-child(7n+1)),\n.flatpickr-day.startRange.startRange + .endRange:not(:nth-child(7n+1)),\n.flatpickr-day.endRange.startRange + .endRange:not(:nth-child(7n+1)) {\n  -webkit-box-shadow: -10px 0 0 ${t};\n          box-shadow: -10px 0 0 ${t};\n}\n.flatpickr-day.selected.startRange.endRange,\n.flatpickr-day.startRange.startRange.endRange,\n.flatpickr-day.endRange.startRange.endRange {\n  border-radius: 50px;\n}\n.flatpickr-day.inRange {\n  border-radius: 0;\n  -webkit-box-shadow: -5px 0 0 ${i}, 5px 0 0 ${i};\n          box-shadow: -5px 0 0 ${i}, 5px 0 0 ${i};\n}\n.flatpickr-day.flatpickr-disabled,\n.flatpickr-day.flatpickr-disabled:hover,\n.flatpickr-day.prevMonthDay,\n.flatpickr-day.nextMonthDay,\n.flatpickr-day.notAllowed,\n.flatpickr-day.notAllowed.prevMonthDay,\n.flatpickr-day.notAllowed.nextMonthDay {\n  color: rgba(64,72,72,0.3);\n  background: transparent;\n  cursor: default;\n}\n.flatpickr-day.flatpickr-disabled,\n.flatpickr-day.flatpickr-disabled:hover {\n  cursor: not-allowed;\n  color: rgba(64,72,72,0.1);\n}\n.flatpickr-day.week.selected {\n  border-radius: 0;\n  -webkit-box-shadow: -5px 0 0 ${t}, 5px 0 0 ${t};\n          box-shadow: -5px 0 0 ${t}, 5px 0 0 ${t};\n}\n.flatpickr-day.hidden {\n  visibility: hidden;\n}\n.rangeMode .flatpickr-day {\n  margin-top: 1px;\n}\n.flatpickr-weekwrapper {\n  float: left;\n}\n.flatpickr-weekwrapper .flatpickr-weeks {\n  padding: 0 12px;\n  -webkit-box-shadow: 1px 0 0 ${a};\n          box-shadow: 1px 0 0 ${a};\n}\n.flatpickr-weekwrapper .flatpickr-weekday {\n  float: none;\n  width: 100%;\n  line-height: 28px;\n}\n.flatpickr-weekwrapper span.flatpickr-day,\n.flatpickr-weekwrapper span.flatpickr-day:hover {\n  display: block;\n  width: 100%;\n  max-width: none;\n  color: rgba(64,72,72,0.3);\n  background: transparent;\n  cursor: default;\n  border: none;\n}\n.flatpickr-innerContainer {\n  display: block;\n  display: -webkit-box;\n  display: -webkit-flex;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-sizing: border-box;\n          box-sizing: border-box;\n  overflow: hidden;\n}\n.flatpickr-rContainer {\n  display: inline-block;\n  padding: 0;\n  -webkit-box-sizing: border-box;\n          box-sizing: border-box;\n}\n.flatpickr-time {\n  text-align: center;\n  outline: 0;\n  display: block;\n  height: 0;\n  line-height: 40px;\n  max-height: 40px;\n  -webkit-box-sizing: border-box;\n          box-sizing: border-box;\n  overflow: hidden;\n  display: -webkit-box;\n  display: -webkit-flex;\n  display: -ms-flexbox;\n  display: flex;\n}\n.flatpickr-time:after {\n  content: "";\n  display: table;\n  clear: both;\n}\n.flatpickr-time .numInputWrapper {\n  -webkit-box-flex: 1;\n  -webkit-flex: 1;\n      -ms-flex: 1;\n          flex: 1;\n  width: 40%;\n  height: 40px;\n  float: left;\n}\n.flatpickr-time .numInputWrapper span.arrowUp:after {\n  border-bottom-color: ${s};\n}\n.flatpickr-time .numInputWrapper span.arrowDown:after {\n  border-top-color: ${s};\n}\n.flatpickr-time.hasSeconds .numInputWrapper {\n  width: 26%;\n}\n.flatpickr-time.time24hr .numInputWrapper {\n  width: 49%;\n}\n.flatpickr-time input {\n  background: transparent;\n  -webkit-box-shadow: none;\n          box-shadow: none;\n  border: 0;\n  border-radius: 0;\n  text-align: center;\n  margin: 0;\n  padding: 0;\n  height: inherit;\n  line-height: inherit;\n  color: ${s};\n  font-size: 14px;\n  position: relative;\n  -webkit-box-sizing: border-box;\n          box-sizing: border-box;\n  -webkit-appearance: textfield;\n  -moz-appearance: textfield;\n  appearance: textfield;\n}\n.flatpickr-time input.flatpickr-hour {\n  font-weight: bold;\n}\n.flatpickr-time input.flatpickr-minute,\n.flatpickr-time input.flatpickr-second {\n  font-weight: 400;\n}\n.flatpickr-time input:focus {\n  outline: 0;\n  border: 0;\n}\n.flatpickr-time .flatpickr-time-separator,\n.flatpickr-time .flatpickr-am-pm {\n  height: inherit;\n  float: left;\n  line-height: inherit;\n  color: ${s};\n  font-weight: bold;\n  width: 2%;\n  -webkit-user-select: none;\n     -moz-user-select: none;\n      -ms-user-select: none;\n          user-select: none;\n  -webkit-align-self: center;\n      -ms-flex-item-align: center;\n          align-self: center;\n}\n.flatpickr-time .flatpickr-am-pm {\n  outline: 0;\n  width: 18%;\n  cursor: pointer;\n  text-align: center;\n  font-weight: 400;\n}\n.flatpickr-time input:hover,\n.flatpickr-time .flatpickr-am-pm:hover,\n.flatpickr-time input:focus,\n.flatpickr-time .flatpickr-am-pm:focus {\n  background: #f1f1f1;\n}\n.flatpickr-input[readonly] {\n  cursor: pointer;\n}\n@-webkit-keyframes fpFadeInDown {\n  from {\n    opacity: 0;\n    -webkit-transform: translate3d(0, -20px, 0);\n            transform: translate3d(0, -20px, 0);\n  }\n  to {\n    opacity: 1;\n    -webkit-transform: translate3d(0, 0, 0);\n            transform: translate3d(0, 0, 0);\n  }\n}\n@keyframes fpFadeInDown {\n  from {\n    opacity: 0;\n    -webkit-transform: translate3d(0, -20px, 0);\n            transform: translate3d(0, -20px, 0);\n  }\n  to {\n    opacity: 1;\n    -webkit-transform: translate3d(0, 0, 0);\n            transform: translate3d(0, 0, 0);\n  }\n}\n.flatpickr-calendar {\n  width: 200px;\n}\n.dayContainer {\n  padding: 0;\n  border-right: 0;\n}\nspan.flatpickr-day,\nspan.flatpickr-day.prevMonthDay,\nspan.flatpickr-day.nextMonthDay {\n  border-radius: 0 !important;\n  border: 1px solid ${i};\n  max-width: none;\n  border-right-color: transparent;\n}\nspan.flatpickr-day:nth-child(n+8),\nspan.flatpickr-day.prevMonthDay:nth-child(n+8),\nspan.flatpickr-day.nextMonthDay:nth-child(n+8) {\n  border-top-color: transparent;\n}\nspan.flatpickr-day:nth-child(7n-6),\nspan.flatpickr-day.prevMonthDay:nth-child(7n-6),\nspan.flatpickr-day.nextMonthDay:nth-child(7n-6) {\n  border-left: 0;\n}\nspan.flatpickr-day:nth-child(n+36),\nspan.flatpickr-day.prevMonthDay:nth-child(n+36),\nspan.flatpickr-day.nextMonthDay:nth-child(n+36) {\n  border-bottom: 0;\n}\nspan.flatpickr-day:nth-child(-n+7),\nspan.flatpickr-day.prevMonthDay:nth-child(-n+7),\nspan.flatpickr-day.nextMonthDay:nth-child(-n+7) {\n  margin-top: 0;\n}\nspan.flatpickr-day.today:not(.selected),\nspan.flatpickr-day.prevMonthDay.today:not(.selected),\nspan.flatpickr-day.nextMonthDay.today:not(.selected) {\n  border-color: ${i};\n  border-right-color: transparent;\n  border-top-color: transparent;\n  border-bottom-color: ${i};\n}\nspan.flatpickr-day.today:not(.selected):hover,\nspan.flatpickr-day.prevMonthDay.today:not(.selected):hover,\nspan.flatpickr-day.nextMonthDay.today:not(.selected):hover {\n  border: 1px solid ${i};\n}\nspan.flatpickr-day.startRange,\nspan.flatpickr-day.prevMonthDay.startRange,\nspan.flatpickr-day.nextMonthDay.startRange,\nspan.flatpickr-day.endRange,\nspan.flatpickr-day.prevMonthDay.endRange,\nspan.flatpickr-day.nextMonthDay.endRange {\n  border-color: ${t};\n}\nspan.flatpickr-day.today,\nspan.flatpickr-day.prevMonthDay.today,\nspan.flatpickr-day.nextMonthDay.today,\nspan.flatpickr-day.selected,\nspan.flatpickr-day.prevMonthDay.selected,\nspan.flatpickr-day.nextMonthDay.selected {\n  z-index: 2;\n}\n.rangeMode .flatpickr-day {\n  margin-top: -1px;\n}\n.flatpickr-weekwrapper .flatpickr-weeks {\n  -webkit-box-shadow: none;\n          box-shadow: none;\n}\n.flatpickr-weekwrapper span.flatpickr-day {\n  border: 0;\n  margin: -1px 0 0 -1px;\n}\n.hasWeeks .flatpickr-days {\n  border-right: 0;\n}\n\n\t@media screen and (min-width:0\\0) and (min-resolution: +72dpi) {\n\t\tspan.flatpickr-day {\n\t\t\tdisplay: block;\n\t\t\t-webkit-box-flex: 1;\n\t\t\t-webkit-flex: 1 0 auto;\n\t\t\t    -ms-flex: 1 0 auto;\n\t\t\t        flex: 1 0 auto;\n\t\t}\n\t}\n\t\t`))
            }
        }
        Object.defineProperty(si, "className", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: "DateRangeSelector"
        }),
        Object.defineProperty(si, "classNames", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: D.classNames.concat([si.className])
        });
        class ai extends D {
            constructor() {
                super(...arguments),
                Object.defineProperty(this, "_groupChangedDp", {
                    enumerable: !0,
                    configurable: !0,
                    writable: !0,
                    value: void 0
                }),
                Object.defineProperty(this, "_groupChangedTo", {
                    enumerable: !0,
                    configurable: !0,
                    writable: !0,
                    value: void 0
                })
            }
            _afterNew() {
                super._afterNew();
                const e = this.getPrivate("button");
                e.className = e.className + " am5stock-no-hover",
                this._initPeriodButtons()
            }
            _initPeriodButtons() {
                const e = this.getPrivate("label");
                e.style.display = "";
                const t = this.get("periods", [])
                  , i = this._getAxis();
                i.onPrivate("min", ( () => this._setPeriodButtonStatus())),
                i.onPrivate("max", ( () => this._setPeriodButtonStatus())),
                P.each(t, (t => {
                    const s = document.createElement("a");
                    s.innerHTML = t.name || t.timeUnit.toUpperCase() + t.count || "1",
                    s.className = "am5stock-link",
                    s.setAttribute("data-period", t.timeUnit + (t.count || "")),
                    e.appendChild(s),
                    this._disposers.push(C.addEventListener(s, "click", (e => {
                        this.setPrivate("deferReset", !1),
                        this._resetActiveButtons(),
                        this.selectPeriod(t),
                        this.setPrivate("deferReset", !0),
                        C.addClass(s, "am5stock-active");
                        const a = this.getPrivate("deferTimeout");
                        a && a.dispose(),
                        this.setPrivate("deferTimeout", this.setTimeout(( () => this.setPrivate("deferReset", !1)), i.get("interpolationDuration", 1e3) + 200))
                    }
                    )))
                }
                )),
                C.supports("keyboardevents") && this._disposers.push(C.addEventListener(document, "keydown", (t => {
                    if (this.isAccessible()) {
                        const i = this.getPrivate("button");
                        if (document.activeElement && (document.activeElement === i || C.contains(i, document.activeElement)))
                            if (-1 !== [37, 38, 39, 40].indexOf(t.keyCode)) {
                                const i = 37 == t.keyCode || 38 == t.keyCode ? -1 : 1
                                  , s = this._getPeriodButtons()
                                  , a = e.querySelectorAll(".am5stock-link:focus");
                                let n = -1;
                                a.length > 0 && s.forEach(( (e, t) => {
                                    e === a.item(0) && (n = t)
                                }
                                )),
                                n += i,
                                n < 0 ? n = s.length - 1 : n >= s.length && (n = 0),
                                C.focus(s.item(n))
                            } else
                                13 == t.keyCode && document.activeElement.click()
                    }
                }
                ))),
                this._maybeMakeAccessible()
            }
            _resetActiveButtons() {
                if (!0 !== this.getPrivate("deferReset")) {
                    const e = this.getPrivate("label").getElementsByClassName("am5stock-active");
                    P.each(e, (e => {
                        C.removeClass(e, "am5stock-active")
                    }
                    ));
                    let t = this.getPrivate("axis");
                    t || (t = this._getAxis(),
                    this.setPrivate("axis", t),
                    this._disposers.push(new s.FV([t.on("start", ( () => this._resetActiveButtons())), t.on("end", ( () => this._resetActiveButtons()))])))
                }
            }
            _setPeriodButtonStatus() {
                if (this.get("hideLongPeriods")) {
                    let e = this.getPrivate("axis");
                    const t = this.getPrivate("label").getElementsByTagName("a");
                    if (!e) {
                        e = this._getAxis();
                        const i = e.getPrivate("min", 0)
                          , s = e.getPrivate("max", 0);
                        if (i && s) {
                            const e = s - i
                              , a = this.get("periods", []);
                            P.each(a, (i => {
                                if ("ytd" !== i.timeUnit && "max" !== i.timeUnit) {
                                    const s = Fe.getDuration(i.timeUnit, i.count || 1)
                                      , a = i.timeUnit + (i.count || "");
                                    for (let i = 0; i < t.length; i++) {
                                        const n = t[i];
                                        n.getAttribute("data-period") == a && (s > e ? C.addClass(n, "am5stock-hidden") : C.removeClass(n, "am5stock-hidden"))
                                    }
                                }
                            }
                            ))
                        }
                    }
                }
            }
            _afterChanged() {
                super._afterChanged(),
                this.isPrivateDirty("toolbar") && this._maybeMakeAccessible()
            }
            _getChart() {
                return this.get("stockChart").panels.getIndex(0)
            }
            _getAxis() {
                return this._getChart().xAxes.getIndex(0)
            }
            _getMaxOrMax(e) {
                const t = this.get("stockChart").get("stockSeries")
                  , i = this._getAxis();
                let s = i.getPrivate(e);
                if (t && t.dataItems.length > 0) {
                    let a = i.get("baseInterval")
                      , n = a.timeUnit + a.count;
                    const o = t._dataSets[n] || t.dataItems
                      , r = o["min" == e ? 0 : o.length - 1];
                    "min" == e && void 0 !== r.open && void 0 !== r.open.valueX ? s = r.open.valueX : "max" == e && void 0 !== r.close && void 0 !== r.close.valueX && (s = r.close.valueX - 1)
                }
                return new Date(s)
            }
            _getMax() {
                return this._getMaxOrMax("max")
            }
            _getMin() {
                return this._getMaxOrMax("min")
            }
            selectPeriod(e) {
                const t = "periodselected";
                this.events.isEnabled(t) && this.events.dispatch(t, {
                    type: t,
                    target: this,
                    period: e
                });
                const i = "start" == this.get("zoomTo", "end");
                if (this._highlightPeriod(e),
                "max" == e.timeUnit)
                    this._getChart().zoomOut();
                else if ("custom" == e.timeUnit) {
                    const t = this._getAxis();
                    let i = e.start || this._getMin()
                      , s = e.end || this._getMax();
                    t.zoomToDates(i, s)
                } else {
                    const t = this._getAxis();
                    let s, a = this._getMax();
                    if ("ytd" == e.timeUnit) {
                        if (s = new Date(a.getFullYear(),0,1,0,0,0,0),
                        a = this._getMax(),
                        t.get("groupData"))
                            return t.zoomToDates(s, a, 0),
                            void setTimeout(( () => {
                                t.zoomToDates(s, a, 0)
                            }
                            ), 10)
                    } else {
                        const n = e.timeUnit;
                        if (t.get("groupData")) {
                            const o = t.getGroupInterval(Fe.getDuration(n, e.count));
                            if (o) {
                                const r = this._root.locale.firstDayOfWeek
                                  , l = this._root.timezone
                                  , c = this._root.utc;
                                if (i) {
                                    s = this._getMin();
                                    let t = s.getTime();
                                    null != t && (s = Fe.round(new Date(t), o.timeUnit, o.count, r, c, void 0, l),
                                    s.setTime(s.getTime() + Fe.getDuration(o.timeUnit, .95 * o.count)),
                                    s = Fe.round(s, o.timeUnit, o.count, r, c, void 0, l)),
                                    a = Fe.add(new Date(s), n, e.count || 1)
                                } else {
                                    let t = this._getMax().getTime();
                                    null != t && (a = Fe.round(new Date(t), o.timeUnit, o.count, r, c, void 0, l),
                                    a.setTime(a.getTime() + Fe.getDuration(o.timeUnit, 1.05 * o.count)),
                                    a = Fe.round(a, o.timeUnit, o.count, r, c, void 0, l)),
                                    s = Fe.add(new Date(a), n, -1 * (e.count || 1))
                                }
                                return this._groupChangedDp && (this._groupChangedDp.dispose(),
                                this._groupChangedDp = void 0),
                                this._groupChangedTo && this._groupChangedTo.dispose(),
                                this._groupChangedDp = t.events.once("groupintervalchanged", ( () => {
                                    t.zoomToDates(s, a, 0)
                                }
                                )),
                                t.zoomToDates(s, a, 0),
                                void (this._groupChangedTo = this.setTimeout(( () => {
                                    this._groupChangedDp && this._groupChangedDp.dispose(),
                                    this._groupChangedTo = void 0
                                }
                                ), 500))
                            }
                        }
                        i ? (s = this._getMin(),
                        a = Fe.add(new Date(s), n, e.count || 1)) : s = Fe.add(new Date(a), n, -1 * (e.count || 1))
                    }
                    t.zoomToDates(s, a)
                }
            }
            _highlightPeriod(e) {
                const t = e.timeUnit + (e.count || "")
                  , i = this.getPrivate("label").getElementsByTagName("a");
                for (let e = 0; e < i.length; e++) {
                    const s = i[e];
                    s.getAttribute("data-period") == t && "custom" != t ? C.addClass(s, "am5stock-active") : C.removeClass(s, "am5stock-active")
                }
            }
            _maybeMakeAccessible() {
                if (super._maybeMakeAccessible(),
                this.isAccessible()) {
                    const e = this.getPrivate("button");
                    e.setAttribute("aria-label", e.getAttribute("title") + "; " + this._t("Press ENTER or use arrow keys to navigate")),
                    this._getPeriodButtons().forEach((e => {
                        e.setAttribute("tabindex", "-1"),
                        e.setAttribute("aria-label", e.getAttribute("title") || "")
                    }
                    ))
                }
            }
            _getPeriodButtons() {
                return this.getPrivate("label").querySelectorAll(".am5stock-link")
            }
        }
        Object.defineProperty(ai, "className", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: "PeriodSelector"
        }),
        Object.defineProperty(ai, "classNames", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: D.classNames.concat([ai.className])
        });
        class ni extends bt {
        }
        Object.defineProperty(ni, "className", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: "SeriesTypeControl"
        }),
        Object.defineProperty(ni, "classNames", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: bt.classNames.concat([ni.className])
        });
        class oi extends bt {
            _getDefaultIcon() {
                return p.getIcon("Interval")
            }
        }
        Object.defineProperty(oi, "className", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: "IntervalControl"
        }),
        Object.defineProperty(oi, "classNames", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: bt.classNames.concat([oi.className])
        });
        class ri extends D {
            _afterNew() {
                super._afterNew(),
                this.events.on("click", ( () => {
                    const e = this.get("stockChart");
                    e.panels.each((e => {
                        e.drawings.each((e => {
                            e.data.clear()
                        }
                        ))
                    }
                    )),
                    e.indicators.clear()
                }
                ))
            }
            _getDefaultIcon() {
                return p.getIcon("Reset")
            }
        }
        Object.defineProperty(ri, "className", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: "ResetControl"
        }),
        Object.defineProperty(ri, "classNames", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: D.classNames.concat([ri.className])
        });
        class li extends bt {
            _afterNew() {
                super._afterNew(),
                this.setPrivate("storageId", window.location.href + "-" + this.root.dom.id);
                const e = this.get("stockChart")
                  , t = this.getPrivate("dropdown");
                localStorage && "1" == localStorage.getItem(this._getStorageId("autosave")) && this.root.events.once("frameended", ( () => {
                    this.restoreData(),
                    this.set("autoSave", !0)
                }
                )),
                t.events.on("changed", (e => {
                    if ("autosave" == e.item.id) {
                        const t = !e.item.checked;
                        this.set("autoSave", t),
                        t && this.saveData()
                    }
                }
                )),
                t.events.on("invoked", (e => {
                    "save" == e.item.id ? this.saveData() : "restore" == e.item.id ? this.restoreData() : "clear" == e.item.id && this.clearData()
                }
                )),
                this.on("active", ( () => {
                    this._populateInputs()
                }
                )),
                e.events.on("drawingsupdated", (e => {
                    this.get("autoSave") && this.saveData()
                }
                )),
                e.events.on("indicatorsupdated", (e => {
                    this.get("autoSave") && this.saveData()
                }
                ))
            }
            _beforeChanged() {
                super._beforeChanged(),
                this.isDirty("autoSave") && localStorage && (this.get("autoSave", !1) ? localStorage.setItem(this._getStorageId("autosave"), "1") : localStorage.removeItem(this._getStorageId("autosave")),
                this._populateInputs())
            }
            saveData() {
                if (localStorage) {
                    const e = this._getDrawingControl()
                      , t = this._getIndicatorControl()
                      , i = e.serializeDrawings("string", "  ")
                      , s = t.serializeIndicators("string", "  ");
                    "[]" == i ? localStorage.removeItem(this._getStorageId("drawings")) : localStorage.setItem(this._getStorageId("drawings"), i),
                    "[]" == s ? localStorage.removeItem(this._getStorageId("indicators")) : localStorage.setItem(this._getStorageId("indicators"), s),
                    this.events.dispatch("saved", {
                        target: this,
                        type: "saved",
                        drawings: i,
                        indicators: s
                    })
                }
            }
            restoreData() {
                if (localStorage) {
                    const e = this.get("stockChart");
                    e.panels.each((e => {
                        e.drawings.each((e => {
                            e.data.clear()
                        }
                        ))
                    }
                    )),
                    e.indicators.clear();
                    const t = this._getDrawingControl()
                      , i = this._getIndicatorControl()
                      , s = localStorage.getItem(this._getStorageId("drawings")) || "[]"
                      , a = localStorage.getItem(this._getStorageId("indicators")) || "[]";
                    t.unserializeDrawings(s),
                    i.unserializeIndicators(a),
                    this.events.dispatch("restored", {
                        target: this,
                        type: "restored",
                        drawings: s,
                        indicators: a
                    })
                }
            }
            clearData() {
                localStorage && (localStorage.removeItem(this._getStorageId("drawings")),
                localStorage.removeItem(this._getStorageId("indicators")),
                this.events.dispatch("cleared", {
                    target: this,
                    type: "cleared"
                }))
            }
            _getDefaultIcon() {
                return p.getIcon("Save")
            }
            _populateInputs() {
                const e = this.getPrivate("dropdown")
                  , t = e.get("items", [])
                  , i = this.get("autoSave", !1)
                  , s = localStorage && (null !== localStorage.getItem(this._getStorageId("drawings")) || null !== localStorage.getItem(this._getStorageId("indicators")));
                P.each(t, (e => {
                    localStorage ? "restore" == e.id ? e.disabled = i || !s : "clear" == e.id ? e.disabled = !s : "save" == e.id ? e.disabled = i : "autosave" == e.id && (e.checked = i) : e.disabled = !0
                }
                )),
                e.rebuildList()
            }
            _getStorageId(e) {
                return "am5-stock-" + this.get("storageId", this.getPrivate("storageId", "")) + "-" + e
            }
            _getDrawingControl() {
                let e = this.getPrivate("drawingControl");
                if (e)
                    return e;
                const t = this.get("stockChart");
                return e = t.getControl("DrawingControl"),
                e || (e = wt.new(this.root, {
                    stockChart: t
                }),
                this.setPrivate("drawingControl", e)),
                e
            }
            _getIndicatorControl() {
                let e = this.getPrivate("indicatorControl");
                if (e)
                    return e;
                const t = this.get("stockChart");
                return e = t.getControl("IndicatorControl"),
                e || (e = xt.new(this.root, {
                    stockChart: t
                }),
                this.setPrivate("indicatorControl", e)),
                e
            }
        }
        Object.defineProperty(li, "className", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: "DataSaveControl"
        }),
        Object.defineProperty(li, "classNames", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: bt.classNames.concat([li.className])
        });
        class ci extends bt {
            _afterNew() {
                super._afterNew();
                const e = this.getPrivate("dropdown");
                e.events.on("changed", (e => {
                    const t = this.get("stockChart");
                    if (t.get("stockSeries") && ("y-scale" == e.item.id ? "percent" == e.item.value ? (t.setPercentScale(!0),
                    this._setLogarithmic(!1)) : (t.setPercentScale(!1),
                    this._setLogarithmic("logarithmic" == e.item.value)) : "fills" == e.item.id && this._setFills(e.checked)),
                    "autosave" == e.item.id) {
                        const t = e.checked;
                        this.getPrivate("dataSaveControl").set("autoSave", t)
                    }
                }
                )),
                this.on("active", ( () => {
                    this._populateInputs()
                }
                )),
                this._disposers.push(this.root.events.on("frameended", ( () => {
                    const t = this.get("stockChart")
                      , i = !(!t.getControl("IndicatorControl") && !t.getControl("DrawingControl"));
                    let s = t.getControl("DataSaveControl");
                    if (i)
                        s || (s = li.new(this.root, {
                            stockChart: t,
                            autoSave: this.get("autoSave", !1),
                            storageId: this.get("storageId")
                        })),
                        this.setPrivate("dataSaveControl", s),
                        this.set("autoSave", s.get("autoSave")),
                        this._populateInputs();
                    else {
                        const t = e.get("exclude", []);
                        t.push("save"),
                        t.push("autosave"),
                        e.set("exclude", ["save", "autosave"])
                    }
                }
                )))
            }
            _getDefaultIcon() {
                return p.getIcon("Settings")
            }
            _populateInputs() {
                const e = this.getPrivate("button").getElementsByTagName("input")
                  , t = this._getYScale();
                for (let i = 0; i < e.length; i++) {
                    const s = e[i];
                    switch (s.id) {
                    case "am5stock-list-autosave":
                        s.checked = this.get("autoSave", this.getPrivate("dataSaveControl").get("autoSave", !1));
                        break;
                    case "am5stock-list-fills":
                        s.checked = this._getFillEnabled();
                        break;
                    case "am5stock-list-y-scale-percent":
                    case "am5stock-list-y-scale-regular":
                    case "am5stock-list-y-scale-logarithmic":
                        s.checked = s.value == t
                    }
                }
            }
            _getFillEnabled() {
                const e = this.get("stockChart").get("stockSeries");
                if (e) {
                    const t = e.get("xAxis").get("renderer").axisFills.values;
                    return t.length > 0 && t[0].get("visible", !1)
                }
                return !1
            }
            _getYScale() {
                const e = this.get("stockChart").get("stockSeries");
                if (e) {
                    const t = e.get("yAxis");
                    if (t instanceof Z.m) {
                        if ("valueYChangeSelectionPercent" == e.get("valueYShow"))
                            return "percent";
                        if (t.get("logarithmic"))
                            return "logarithmic"
                    }
                }
                return "regular"
            }
            _setLogarithmic(e) {
                const t = this.get("stockChart").get("stockSeries");
                if (t) {
                    const i = t.get("yAxis");
                    i instanceof Z.m && (P.each(i.series, (e => {
                        e.resetExtremes(),
                        e.markDirtyValues()
                    }
                    )),
                    i.set("logarithmic", e))
                }
            }
            _setFills(e) {
                this.get("stockChart").panels.each((t => {
                    t.xAxes.each((t => {
                        t.get("renderer").axisFills.template.set("visible", e),
                        t.get("renderer").grid.template.set("forceHidden", e)
                    }
                    ))
                }
                ))
            }
        }
        Object.defineProperty(ci, "className", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: "SettingsControl"
        }),
        Object.defineProperty(ci, "classNames", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: bt.classNames.concat([ci.className])
        });
        class hi extends bt {
            _getDefaultIcon() {
                return p.getIcon("Comparison")
            }
        }
        Object.defineProperty(hi, "className", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: "ComparisonControl"
        }),
        Object.defineProperty(hi, "classNames", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: bt.classNames.concat([hi.className])
        })
    },
    7663: function() {
        "function" != typeof Object.assign && (Object.assign = function(e) {
            for (var t = [], i = 1; i < arguments.length; i++)
                t[i - 1] = arguments[i];
            if (!e)
                throw TypeError("Cannot convert undefined or null to object");
            for (var s = function(t) {
                t && Object.keys(t).forEach((function(i) {
                    return e[i] = t[i]
                }
                ))
            }, a = 0, n = t; a < n.length; a++)
                s(n[a]);
            return e
        }
        )
    },
    4242: function(e, t, i) {
        i.r(t),
        i.d(t, {
            am5stock: function() {
                return s
            }
        });
        const s = i(6097)
    }
}, function(e) {
    e.O(0, [6450], (function() {
        return 4242,
        e(e.s = 4242)
    }
    ));
    var t = e.O()
      , i = window;
    for (var s in t)
        i[s] = t[s];
    if (t && t.__esModule) {
        Object.defineProperty(i, "__esModule", {
            value: true
        });
    }
    