// 柱状图1模块
(function() {
    // 实例化对象
    var myChart = echarts.init(document.querySelector(".bar .chart"));
    var datas = [
        ////////////////////////////////////////
        [
            { name: '企业专家', value: 5 },
            { name: '国标要专家', value: 8 },
            { name: '检验检测专家', value: 5 },
            { name: '高级专家', value: 11 },
        ],
        // ////////////////////////////////////////



    ];

    var option = {
        // title: {
        //     text: '阅读书籍分布',
        //     left: 'center',
        //     textStyle: {
        //         color: '#999',
        //         fontWeight: 'normal',
        //         fontSize: 14
        //     }
        // },
        series: datas.map(function(data, idx) {
            var top = idx * 33.3;
            return {
                type: 'pie',
                // 设置饼状图大小
                // radius: [20, 60],
                radius: [30, 90],
                top: top + '%',
                height: '33.33%',
                left: 'center',
                width: 400,
                itemStyle: {
                    borderColor: '#fff',
                    borderWidth: 1
                },
                label: {
                    alignTo: 'edge',
                    formatter: '{name|{b}}\n{time|{c} 人}',
                    minMargin: 5,
                    edgeDistance: 10,
                    lineHeight: 15,
                    rich: {
                        time: {
                            fontSize: 10,
                            color: '#999'
                        }
                    }
                },
                labelLine: {
                    length: 15,
                    length2: 0,
                    maxSurfaceAngle: 80
                },
                labelLayout: function(params) {
                    var isLeft = params.labelRect.x < myChart.getWidth() / 2;
                    var points = params.labelLinePoints;
                    // Update the end point.
                    points[2][0] = isLeft ?
                        params.labelRect.x :
                        params.labelRect.x + params.labelRect.width;

                    return {
                        labelLinePoints: points
                    };
                },
                data: data
            }
        })
    };


    // 把配置给实例对象
    myChart.setOption(option);
    window.addEventListener("resize", function() {
        myChart.resize();
    });

    // // 数据变化
    // var dataAll = [
    //     { year: "2019", data: [200, 300, 300, 900, 1500, 1200, 600] },
    //     { year: "2020", data: [300, 400, 350, 800, 1800, 1400, 700] }
    // ];

    // $(".bar h2 ").on("click", "a", function() {
    //     option.series[0].data = dataAll[$(this).index()].data;
    //     myChart.setOption(option);
    // });
})();

// 折线图定制
(function() {
    // 基于准备好的dom，初始化echarts实例
    var myChart = echarts.init(document.querySelector(".line .technology"));

    const handred = 20
    let point = 5

    var option = {
            title: {
                text: point,
                x: 'center',
                y: 'center',
                textStyle: {
                    fontWeight: 'normal',
                    color: '#29EEF3',
                    fontSize: '30'
                }
            },
            tooltip: {
                formatter: function(params) {
                    return params.name + '：' + params.percent + ' %'
                }
            },
            legend: {
                show: true,
                itemGap: 12,
                data: ['占比', '剩余']
            },

            series: [{
                name: 'circle',
                type: 'pie',
                clockWise: true,
                radius: ['50%', '66%'],
                itemStyle: {
                    normal: {
                        label: {
                            show: false
                        },
                        labelLine: {
                            show: false
                        }
                    }
                },
                hoverAnimation: false,
                data: [{
                    value: point,

                    itemStyle: {
                        normal: {
                            color: { // 颜色渐变
                                colorStops: [{
                                    offset: 0,
                                    color: '#4FADFD' // 0% 处的颜色
                                }, {
                                    offset: 1,
                                    color: '#28E8FA' // 100% 处的颜色1
                                }]
                            },
                            label: {
                                show: false
                            },
                            labelLine: {
                                show: false
                            }
                        }
                    }
                }, {

                    value: handred - point,
                    itemStyle: {
                        normal: {
                            color: '#E1E8EE'
                        }
                    }
                }]
            }]
        }
        // 3. 把配置和数据给实例对象
    myChart.setOption(option);

})();
(function() {
    // 基于准备好的dom，初始化echarts实例
    var myChart = echarts.init(document.querySelector(".line .laboratory"));

    const handred = 20
    let point = 6

    var option = {
            title: {
                text: point,
                x: 'center',
                y: 'center',
                textStyle: {
                    fontWeight: 'normal',
                    color: '#29EEF3',
                    fontSize: '30'
                }
            },
            tooltip: {
                formatter: function(params) {
                    return params.name + '：' + params.percent + ' %'
                }
            },
            legend: {
                show: true,
                itemGap: 12,
                data: ['占比', '剩余']
            },

            series: [{
                name: 'circle',
                type: 'pie',
                clockWise: true,
                radius: ['50%', '66%'],
                itemStyle: {
                    normal: {
                        label: {
                            show: false
                        },
                        labelLine: {
                            show: false
                        }
                    }
                },
                hoverAnimation: false,
                data: [{
                    value: point,

                    itemStyle: {
                        normal: {
                            color: { // 颜色渐变
                                colorStops: [{
                                    offset: 0,
                                    color: '#4FADFD' // 0% 处的颜色
                                }, {
                                    offset: 1,
                                    color: '#28E8FA' // 100% 处的颜色1
                                }]
                            },
                            label: {
                                show: false
                            },
                            labelLine: {
                                show: false
                            }
                        }
                    }
                }, {

                    value: handred - point,
                    itemStyle: {
                        normal: {
                            color: '#E1E8EE'
                        }
                    }
                }]
            }]
        }
        // 3. 把配置和数据给实例对象
    myChart.setOption(option);


})();
(function() {
    // 基于准备好的dom，初始化echarts实例
    var myChart = echarts.init(document.querySelector(".line .enterprise"));

    const handred = 20
    let point = 4

    var option = {
            title: {
                text: point,
                x: 'center',
                y: 'center',
                textStyle: {
                    fontWeight: 'normal',
                    color: '#29EEF3',
                    fontSize: '30'
                }
            },
            tooltip: {
                formatter: function(params) {
                    return params.name + '：' + params.percent + ' %'
                }
            },
            legend: {
                show: true,
                itemGap: 12,
                data: ['占比', '剩余']
            },

            series: [{
                name: 'circle',
                type: 'pie',
                clockWise: true,
                radius: ['50%', '66%'],
                itemStyle: {
                    normal: {
                        label: {
                            show: false
                        },
                        labelLine: {
                            show: false
                        }
                    }
                },
                hoverAnimation: false,
                data: [{
                    value: point,

                    itemStyle: {
                        normal: {
                            color: { // 颜色渐变
                                colorStops: [{
                                    offset: 0,
                                    color: '#4FADFD' // 0% 处的颜色
                                }, {
                                    offset: 1,
                                    color: '#28E8FA' // 100% 处的颜色1
                                }]
                            },
                            label: {
                                show: false
                            },
                            labelLine: {
                                show: false
                            }
                        }
                    }
                }, {

                    value: handred - point,
                    itemStyle: {
                        normal: {
                            color: '#E1E8EE'
                        }
                    }
                }]
            }]
        }
        // 3. 把配置和数据给实例对象
    myChart.setOption(option);

})();
(function() {
    // 基于准备好的dom，初始化echarts实例
    var myChart = echarts.init(document.querySelector(".line .answer"));

    const handred = 20
    let point = 7

    var option = {
            title: {
                text: point,
                x: 'center',
                y: 'center',
                textStyle: {
                    fontWeight: 'normal',
                    color: '#29EEF3',
                    fontSize: '30'
                }
            },
            tooltip: {
                formatter: function(params) {
                    return params.name + '：' + params.percent + ' %'
                }
            },
            legend: {
                show: true,
                itemGap: 12,
                data: ['占比', '剩余']
            },

            series: [{
                name: 'circle',
                type: 'pie',
                clockWise: true,
                radius: ['50%', '66%'],
                itemStyle: {
                    normal: {
                        label: {
                            show: false
                        },
                        labelLine: {
                            show: false
                        }
                    }
                },
                hoverAnimation: false,
                data: [{
                    value: point,

                    itemStyle: {
                        normal: {
                            color: { // 颜色渐变
                                colorStops: [{
                                    offset: 0,
                                    color: '#4FADFD' // 0% 处的颜色
                                }, {
                                    offset: 1,
                                    color: '#28E8FA' // 100% 处的颜色1
                                }]
                            },
                            label: {
                                show: false
                            },
                            labelLine: {
                                show: false
                            }
                        }
                    }
                }, {

                    value: handred - point,
                    itemStyle: {
                        normal: {
                            color: '#E1E8EE'
                        }
                    }
                }]
            }]
        }
        // 3. 把配置和数据给实例对象
    myChart.setOption(option);

})();


(function() {
    // 基于准备好的dom，初始化echarts实例
    var myChart = echarts.init(document.querySelector(".bar1 .chart"));

    // var data = [70, 34, 60, 78, 69];
    var data = [70, 34];
    // var titlename = ["产品覆盖率", "企业覆盖率", "javascript", "VUE", "NODE"];
    var titlename = ["产品覆盖率", "企业覆盖率"];
    // var valdata = [702, 350, 610, 793, 664];
    var valdata = [702, 350];
    // var myColor = ["#1089E7", "#F57474", "#56D0E3", "#F8B448", "#8B78F6"];
    var myColor = ["#1089E7", "#F57474", ];
    option = {
        //图标位置
        grid: {
            top: "10%",
            left: "22%",
            bottom: "10%"
        },
        xAxis: {
            show: false
        },
        yAxis: [{
                show: true,
                data: titlename,
                inverse: true,
                axisLine: {
                    show: false
                },
                splitLine: {
                    show: false
                },
                axisTick: {
                    show: false
                },
                axisLabel: {
                    color: "#fff",

                    rich: {
                        lg: {
                            backgroundColor: "#339911",
                            color: "#fff",
                            borderRadius: 15,
                            // padding: 5,
                            align: "center",
                            width: 15,
                            height: 15
                        }
                    }
                }
            },
            {
                show: true,
                inverse: true,
                data: valdata,
                axisLabel: {
                    textStyle: {
                        fontSize: 12,
                        color: "#fff"
                    }
                }
            }
        ],
        series: [{
                name: "条",
                type: "bar",
                yAxisIndex: 0,
                data: data,
                barCategoryGap: 30,
                barWidth: 10,
                itemStyle: {
                    normal: {
                        barBorderRadius: 20,
                        color: function(params) {
                            var num = myColor.length;
                            return myColor[params.dataIndex % num];
                        }
                    }
                },
                label: {
                    normal: {
                        show: true,
                        position: "inside",
                        formatter: "{c}%"
                    }
                }
            },
            {
                name: "框",
                type: "bar",
                yAxisIndex: 1,
                barCategoryGap: 30,
                // data: [100, 100, 100, 100, 100],
                data: [100, 100],
                barWidth: 15,
                itemStyle: {
                    normal: {
                        color: "none",
                        borderColor: "#00c1de",
                        borderWidth: 3,
                        barBorderRadius: 15
                    }
                }
            }
        ]
    };

    // 使用刚指定的配置项和数据显示图表。
    myChart.setOption(option);
    window.addEventListener("resize", function() {
        myChart.resize();
    });
})();
// 折线图 优秀作品
// (function() {
//     // 基于准备好的dom，初始化echarts实例
//     var myChart = echarts.init(document.querySelector(".line1 .chart"));



//     // 使用刚指定的配置项和数据显示图表。
//     myChart.setOption(option);
//     window.addEventListener("resize", function() {
//         myChart.resize();
//     });
// })();

// 点位分布统计模块
(function() {
    // 1. 实例化对象
    var myChart = echarts.init(document.querySelector(".pie1  .chart"));
    // 2. 指定配置项和数据
    var option = {

        color: ["#2f89cf"],
        tooltip: {
            trigger: "axis",
            axisPointer: {
                // 坐标轴指示器，坐标轴触发有效
                type: "shadow" // 默认为直线，可选为：'line' | 'shadow'
            }
        },
        grid: {
            left: "0%",
            top: "10px",
            right: "0%",
            bottom: "4%",
            containLabel: true
        },
        xAxis: [{
            type: "category",
            data: [
                "一季度",
                "二季度",
                "三季度",
                "四季度",
                // "电商行业",
                // "社交行业",
                // "金融行业"
            ],
            axisTick: {
                alignWithLabel: true
            },
            axisLabel: {
                textStyle: {
                    color: "rgba(255,255,255,.6)",
                    fontSize: "12"
                }
            },
            axisLine: {
                show: false
            }
        }],
        yAxis: [{

            type: "value",
            axisLabel: {
                textStyle: {
                    color: "rgba(255,255,255,.6)",
                    fontSize: "12"
                }
            },
            axisLine: {
                lineStyle: {
                    color: "rgba(255,255,255,.1)"
                        // width: 1,
                        // type: "solid"
                }
            },
            splitLine: {
                lineStyle: {
                    color: "rgba(255,255,255,.1)"
                }
            }
        }],
        series: [{
            name: "直接访问",
            type: "bar",
            barWidth: "35%",
            // data: [200, 300, 300, 900, 1500, 1200, 600],
            data: [200, 300, 300, 900],
            itemStyle: {
                barBorderRadius: 5
            }
        }]
    };

    // 3. 配置项和数据给我们的实例化对象
    myChart.setOption(option);
    // 4. 当我们浏览器缩放的时候，图表也等比例缩放
    window.addEventListener("resize", function() {
        // 让我们的图表调用 resize这个方法
        myChart.resize();
    });
})();
(function() {
    // 基于准备好的dom，初始化echarts实例
    var myChart = echarts.init(document.querySelector(".line1 .pie"));

    let angle = 0; //角度，用来做简单的动画效果的
    let value = 22;
    var option = {
        backgroundColor: "#061740",
        title: {
            text: '{a|' + value + '}{c|}',
            x: 'center',
            y: 'center',
            textStyle: {
                rich: {
                    a: {
                        fontSize: 20,
                        color: '#29EEF3'
                    },

                    c: {
                        fontSize: 20,
                        color: '#ffffff',
                        // padding: [5,0]
                    }
                }
            }
        },
        legend: {
            type: "plain",
            orient: "vertical",
            right: 0,
            top: "10%",
            align: "auto",
            data: [{
                name: '涨价后没吃过',
                icon: "circle"
            }, {
                name: '天天吃',
                icon: "circle"
            }, {
                name: '三五天吃一次',
                icon: "circle"
            }, {
                name: '半个月吃一次',
                icon: "circle"
            }],
            textStyle: {
                color: "white",
                fontSize: 16,
                padding: [10, 1, 10, 0]
            },
            selectedMode: false
        },
        series: [{
                name: "ring5",
                type: 'custom',
                coordinateSystem: "none",
                renderItem: function(params, api) {
                    return {
                        type: 'arc',
                        shape: {
                            cx: api.getWidth() / 2,
                            cy: api.getHeight() / 2,
                            r: Math.min(api.getWidth(), api.getHeight()) / 2 * 0.6,
                            startAngle: (0 + angle) * Math.PI / 180,
                            endAngle: (90 + angle) * Math.PI / 180
                        },
                        style: {
                            stroke: "#0CD3DB",
                            fill: "transparent",
                            lineWidth: 1.5
                        },
                        silent: true
                    };
                },
                data: [0]
            }, {
                name: "ring5",
                type: 'custom',
                coordinateSystem: "none",
                renderItem: function(params, api) {
                    return {
                        type: 'arc',
                        shape: {
                            cx: api.getWidth() / 2,
                            cy: api.getHeight() / 2,
                            r: Math.min(api.getWidth(), api.getHeight()) / 2 * 0.6,
                            startAngle: (180 + angle) * Math.PI / 180,
                            endAngle: (270 + angle) * Math.PI / 180
                        },
                        style: {
                            stroke: "#0CD3DB",
                            fill: "transparent",
                            lineWidth: 1.5
                        },
                        silent: true
                    };
                },
                data: [0]
            }, {
                name: "ring5",
                type: 'custom',
                coordinateSystem: "none",
                renderItem: function(params, api) {
                    return {
                        type: 'arc',
                        shape: {
                            cx: api.getWidth() / 2,
                            cy: api.getHeight() / 2,
                            r: Math.min(api.getWidth(), api.getHeight()) / 2 * 0.65,
                            startAngle: (270 + -angle) * Math.PI / 180,
                            endAngle: (40 + -angle) * Math.PI / 180
                        },
                        style: {
                            stroke: "#0CD3DB",
                            fill: "transparent",
                            lineWidth: 1.5
                        },
                        silent: true
                    };
                },
                data: [0]
            }, {
                name: "ring5",
                type: 'custom',
                coordinateSystem: "none",
                renderItem: function(params, api) {
                    return {
                        type: 'arc',
                        shape: {
                            cx: api.getWidth() / 2,
                            cy: api.getHeight() / 2,
                            r: Math.min(api.getWidth(), api.getHeight()) / 2 * 0.65,
                            startAngle: (90 + -angle) * Math.PI / 180,
                            endAngle: (220 + -angle) * Math.PI / 180
                        },
                        style: {
                            stroke: "#0CD3DB",
                            fill: "transparent",
                            lineWidth: 1.5
                        },
                        silent: true
                    };
                },
                data: [0]
            }, {
                name: "ring5",
                type: 'custom',
                coordinateSystem: "none",
                renderItem: function(params, api) {
                    let x0 = api.getWidth() / 2;
                    let y0 = api.getHeight() / 2;
                    let r = Math.min(api.getWidth(), api.getHeight()) / 2 * 0.65;
                    let point = getCirlPoint(x0, y0, r, (90 + -angle))
                    return {
                        type: 'circle',
                        shape: {
                            cx: point.x,
                            cy: point.y,
                            r: 4
                        },
                        style: {
                            stroke: "#0CD3DB", //粉
                            fill: "#0CD3DB"
                        },
                        silent: true
                    };
                },
                data: [0]
            }, {
                name: "ring5", //绿点
                type: 'custom',
                coordinateSystem: "none",
                renderItem: function(params, api) {
                    let x0 = api.getWidth() / 2;
                    let y0 = api.getHeight() / 2;
                    let r = Math.min(api.getWidth(), api.getHeight()) / 2 * 0.65;
                    let point = getCirlPoint(x0, y0, r, (270 + -angle))
                    return {
                        type: 'circle',
                        shape: {
                            cx: point.x,
                            cy: point.y,
                            r: 4
                        },
                        style: {
                            stroke: "#0CD3DB", //绿
                            fill: "#0CD3DB"
                        },
                        silent: true
                    };
                },
                data: [0]
            }, {
                name: '吃猪肉频率',
                type: 'pie',
                radius: ['58%', '45%'],
                silent: true,
                clockwise: true,
                startAngle: 90,
                z: 0,
                zlevel: 0,
                label: {
                    normal: {
                        position: "center",

                    }
                },
                data: [{
                        value: value,
                        name: "",
                        itemStyle: {
                            normal: {
                                color: { // 完成的圆环的颜色
                                    colorStops: [{
                                        offset: 0,
                                        color: '#4FADFD' // 0% 处的颜色
                                    }, {
                                        offset: 1,
                                        color: '#28E8FA' // 100% 处的颜色
                                    }]
                                },
                            }
                        }
                    },
                    {
                        value: 100 - value,
                        name: "",
                        label: {
                            normal: {
                                show: false
                            }
                        },
                        itemStyle: {
                            normal: {
                                color: "#173164"
                            }
                        }
                    }
                ]
            },

            {
                name: "",
                type: "gauge",
                radius: "58%",
                center: ['50%', '50%'],
                startAngle: 0,
                endAngle: 359.9,
                splitNumber: 8,
                hoverAnimation: true,
                axisTick: {
                    show: false
                },
                splitLine: {
                    length: 60,
                    lineStyle: {
                        width: 5,
                        color: "#061740"
                    }
                },
                axisLabel: {
                    show: false
                },
                pointer: {
                    show: false
                },
                axisLine: {
                    lineStyle: {
                        opacity: 0
                    }
                },
                detail: {
                    show: false
                },
                data: [{
                    value: 0,
                    name: ""
                }]
            },

        ]
    };

    //获取圆上面某点的坐标(x0,y0表示坐标，r半径，angle角度)
    function getCirlPoint(x0, y0, r, angle) {
        let x1 = x0 + r * Math.cos(angle * Math.PI / 180)
        let y1 = y0 + r * Math.sin(angle * Math.PI / 180)
        return {
            x: x1,
            y: y1
        }
    }

    function draw() {
        angle = angle + 3
        myChart.setOption(option, true)
            //window.requestAnimationFrame(draw);
    }

    setInterval(function() {
        //用setInterval做动画感觉有问题
        draw()
    }, 100);

    // 3. 把配置和数据给实例对象
    myChart.setOption(option);

})();