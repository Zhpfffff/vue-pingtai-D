<template>
  <div class="dataview">
    <div class="header">
      <h1>植保机械产业技术服务平台</h1>
      <div class="showTime">当前时间：2020年3月17-0时54分14秒</div>
    </div>
    <section class="mainbox">
      <div class="column">
        <div class="panel bar" style="height: 4rem">
          <h2>
            专家入驻情况
            <!-- <a href="javascript:;">2019</a>
            <a href="javacript:;"> 2020</a> -->
          </h2>
          <div class="chart" style="height: 3.5rem"></div>
          <div class="panel-footer"></div>
        </div>
        <div class="panel line" style="height: 7.5rem">
          <h2>企业帮扶情况</h2>
          <!-- <div class="chart" style="height: 6.8rem;"></div> -->
          <ul class="ul1">
            <li class="technology">1</li>
            <li class="laboratory">1</li>
          </ul>
          <ul class="ul3">
            <li>技术难点解答</li>
            <li>开放实验室</li>
          </ul>
          <ul class="ul2">
            <li class="enterprise">1</li>
            <li class="answer">1</li>
          </ul>
          <ul class="ul4">
            <li>企业三服务</li>
            <li>远程视频点对点解答</li>
          </ul>
          <div class="panel-footer"></div>
        </div>
      </div>
      <div class="column">
        <div class="no">
          <div class="no-hd">
            <ul>
              <li>{{ countUp }}</li>
              <li>{{ countDown }}</li>
            </ul>
          </div>
          <div class="no-bd">
            <ul>
              <li style="font-size: 16px">规上企业</li>
              <li style="font-size: 16px">规下企业</li>
            </ul>
          </div>
        </div>
        <div class="map">
          <div class="chart" id="divMap"></div>
          <div class="map1"></div>
          <div class="map2"></div>
          <div class="map3"></div>
        </div>
      </div>
      <div class="column">
        <div class="panel bar1" style="height: 3rem">
          <h2>平台产品、产业覆盖率</h2>
          <div class="chart" style="height: 2.5rem"></div>
          <div class="panel-footer"></div>
        </div>
        <div class="panel line1" style="height: 3rem">
          <h2>产品质量风险推送</h2>
          <ul>
            <li>
              <div>风险企业家数：7家</div>

              <div>风险舆情总数：203条</div>
            </li>
            <li>
              <div class="pie"></div>
              <div class="text">风险报告推送量</div>
            </li>
          </ul>

          <!-- <div class="chart"></div>
                <div class="panel-footer"></div> -->
        </div>
        <div class="panel pie1" style="height: 5.25rem">
          <h2>产品质量提升</h2>
          <h4 style="color: #fff">质量提升报告推送量</h4>
          <div class="chart"></div>
          <div style="color: #fff; font-size: 18px; margin: 30px 0 0 50px">
            监督抽查不合格率:<span style="color: #febc13; margin-left: 12px"
              >6%</span
            >
          </div>
          <div class="panel-footer"></div>
        </div>
      </div>
    </section>
  </div>
</template>

    <script src="../assets/js/jquery.js"></script>
<script>
import * as echarts from "../assets/js/echarts.min.js";
import { request } from "../network/request.js";
export default {
  data() {
    return {
      // 企业信息
      enterpriseInfo: [],
      // 规上企业数量
      countUp: 0,
      // 规下企业数量
      countDown: 0,
    };
  },

  mounted() {
    //请求企业数据
    this.getEnterpriseInfo();
    //   获得当前时间
    this.getTime();
    //   地图模块
    // this.setMap();
    // echart模块
    this.setEchart();
  },
  methods: {
    //请求企业数据

    getEnterpriseInfo() {
      request({
        url: "/enterprice/list",
      }).then((res) => {
        this.enterpriseInfo = res.data.list;
        this.countUp = res.data.countUp;
        this.countDown = res.data.countDown;
        // console.log(this);
        // 企业信息接收成功后渲染地图
        var that = this;
        this.setMap(that);
      });
    },
    //   获得当前时间
    getTime() {
      var t = null;
      t = setTimeout(time, 1000); //開始运行
      function time() {
        clearTimeout(t); //清除定时器
        var dt = new Date();
        var y = dt.getFullYear();
        var mt = dt.getMonth() + 1;
        var day = dt.getDate();
        var h = dt.getHours(); //获取时
        var m = dt.getMinutes(); //获取分
        var s = dt.getSeconds(); //获取秒
        document.querySelector(".showTime").innerHTML =
          "当前时间：" +
          y +
          "年" +
          mt +
          "月" +
          day +
          "-" +
          h +
          "时" +
          m +
          "分" +
          s +
          "秒";
        t = setTimeout(time, 1000); //设定定时器，循环运行
      }
    },
    // 地图设置
    setMap(that) {
      var map = new BMap.Map("divMap");
      //   var point1 = new BMap.Point(120.378386, 30.309756);
      map.centerAndZoom(new BMap.Point(120.378386, 30.309756), 4); //根据坐标初始化地图
      map.enableScrollWheelZoom(true);
      map.setMapStyleV2({ styleId: "2a4b6793da8bf3a36688dcb98836270d" }); // 应用样式
      map.addControl(new BMap.NavigationControl()); //平移缩放控件
      map.addControl(new BMap.ScaleControl()); //比例尺
      map.addControl(new BMap.OverviewMapControl()); //缩略地图
      map.addControl(new BMap.MapTypeControl()); //地图类型
      // map.setCurrentCity("杭州"); // 仅当设置城市信息时，MapTypeControl的切换功能才能可用
      //添加标注
      // window.enterpriseInfo = this.enterpriseInfo;
      // console.log(that);
      for (let i = 0; i < this.enterpriseInfo.length; i++) {
        var myGeo = new BMap.Geocoder();
        // 将地址解析结果显示在地图上，并调整地图视野
        myGeo.getPoint(
          this.enterpriseInfo[i].location,
          function (point) {
            if (point) {
              var marker = new BMap.Marker(point);
              // console.log(that);
              map.addOverlay(marker);
              var opts = {
                width: 400,
                height: 200,
                color: "#000",
                title: that.enterpriseInfo[i].name,
              };
              var infoWindow = new BMap.InfoWindow(
                "地址：" + that.enterpriseInfo[i].location,
                opts
              );
              // 点标记添加点击事件
              marker.addEventListener("click", function () {
                map.openInfoWindow(infoWindow, point); // 开启信息窗口
              });
            } else {
              console.log("错误");
            }
          },
          "xx市"
        );
      }
    },
    // echart配置
    setEchart() {
      (function () {
        // 实例化对象
        var myChart = echarts.init(document.querySelector(".bar .chart"));
        var datas = [
          ////////////////////////////////////////
          [
            { name: "企业专家", value: 5 },
            { name: "国标要专家", value: 8 },
            { name: "检验检测专家", value: 5 },
            { name: "高级专家", value: 11 },
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
          series: datas.map(function (data, idx) {
            var top = idx * 33.3;
            return {
              type: "pie",
              // 设置饼状图大小
              // radius: [20, 60],
              radius: [30, 90],
              top: top + "%",
              height: "33.33%",
              left: "center",
              width: 400,
              itemStyle: {
                borderColor: "#fff",
                borderWidth: 1,
              },
              label: {
                alignTo: "edge",
                formatter: "{name|{b}}\n{time|{c} 人}",
                minMargin: 5,
                edgeDistance: 10,
                lineHeight: 15,
                rich: {
                  time: {
                    fontSize: 10,
                    color: "#999",
                  },
                },
              },
              labelLine: {
                length: 15,
                length2: 0,
                maxSurfaceAngle: 80,
              },
              labelLayout: function (params) {
                var isLeft = params.labelRect.x < myChart.getWidth() / 2;
                var points = params.labelLinePoints;
                // Update the end point.
                points[2][0] = isLeft
                  ? params.labelRect.x
                  : params.labelRect.x + params.labelRect.width;

                return {
                  labelLinePoints: points,
                };
              },
              data: data,
            };
          }),
        };

        // 把配置给实例对象
        myChart.setOption(option);
        window.addEventListener("resize", function () {
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
      (function () {
        // 基于准备好的dom，初始化echarts实例
        var myChart = echarts.init(document.querySelector(".line .technology"));

        const handred = 20;
        let point = 5;

        var option = {
          title: {
            text: point,
            x: "center",
            y: "center",
            textStyle: {
              fontWeight: "normal",
              color: "#29EEF3",
              fontSize: "30",
            },
          },
          tooltip: {
            formatter: function (params) {
              return params.name + "：" + params.percent + " %";
            },
          },
          legend: {
            show: true,
            itemGap: 12,
            data: ["占比", "剩余"],
          },

          series: [
            {
              name: "circle",
              type: "pie",
              clockWise: true,
              radius: ["50%", "66%"],
              itemStyle: {
                normal: {
                  label: {
                    show: false,
                  },
                  labelLine: {
                    show: false,
                  },
                },
              },
              hoverAnimation: false,
              data: [
                {
                  value: point,

                  itemStyle: {
                    normal: {
                      color: {
                        // 颜色渐变
                        colorStops: [
                          {
                            offset: 0,
                            color: "#4FADFD", // 0% 处的颜色
                          },
                          {
                            offset: 1,
                            color: "#28E8FA", // 100% 处的颜色1
                          },
                        ],
                      },
                      label: {
                        show: false,
                      },
                      labelLine: {
                        show: false,
                      },
                    },
                  },
                },
                {
                  value: handred - point,
                  itemStyle: {
                    normal: {
                      color: "#E1E8EE",
                    },
                  },
                },
              ],
            },
          ],
        };
        // 3. 把配置和数据给实例对象
        myChart.setOption(option);
      })();
      (function () {
        // 基于准备好的dom，初始化echarts实例
        var myChart = echarts.init(document.querySelector(".line .laboratory"));

        const handred = 20;
        let point = 6;

        var option = {
          title: {
            text: point,
            x: "center",
            y: "center",
            textStyle: {
              fontWeight: "normal",
              color: "#29EEF3",
              fontSize: "30",
            },
          },
          tooltip: {
            formatter: function (params) {
              return params.name + "：" + params.percent + " %";
            },
          },
          legend: {
            show: true,
            itemGap: 12,
            data: ["占比", "剩余"],
          },

          series: [
            {
              name: "circle",
              type: "pie",
              clockWise: true,
              radius: ["50%", "66%"],
              itemStyle: {
                normal: {
                  label: {
                    show: false,
                  },
                  labelLine: {
                    show: false,
                  },
                },
              },
              hoverAnimation: false,
              data: [
                {
                  value: point,

                  itemStyle: {
                    normal: {
                      color: {
                        // 颜色渐变
                        colorStops: [
                          {
                            offset: 0,
                            color: "#4FADFD", // 0% 处的颜色
                          },
                          {
                            offset: 1,
                            color: "#28E8FA", // 100% 处的颜色1
                          },
                        ],
                      },
                      label: {
                        show: false,
                      },
                      labelLine: {
                        show: false,
                      },
                    },
                  },
                },
                {
                  value: handred - point,
                  itemStyle: {
                    normal: {
                      color: "#E1E8EE",
                    },
                  },
                },
              ],
            },
          ],
        };
        // 3. 把配置和数据给实例对象
        myChart.setOption(option);
      })();
      (function () {
        // 基于准备好的dom，初始化echarts实例
        var myChart = echarts.init(document.querySelector(".line .enterprise"));

        const handred = 20;
        let point = 4;

        var option = {
          title: {
            text: point,
            x: "center",
            y: "center",
            textStyle: {
              fontWeight: "normal",
              color: "#29EEF3",
              fontSize: "30",
            },
          },
          tooltip: {
            formatter: function (params) {
              return params.name + "：" + params.percent + " %";
            },
          },
          legend: {
            show: true,
            itemGap: 12,
            data: ["占比", "剩余"],
          },

          series: [
            {
              name: "circle",
              type: "pie",
              clockWise: true,
              radius: ["50%", "66%"],
              itemStyle: {
                normal: {
                  label: {
                    show: false,
                  },
                  labelLine: {
                    show: false,
                  },
                },
              },
              hoverAnimation: false,
              data: [
                {
                  value: point,

                  itemStyle: {
                    normal: {
                      color: {
                        // 颜色渐变
                        colorStops: [
                          {
                            offset: 0,
                            color: "#4FADFD", // 0% 处的颜色
                          },
                          {
                            offset: 1,
                            color: "#28E8FA", // 100% 处的颜色1
                          },
                        ],
                      },
                      label: {
                        show: false,
                      },
                      labelLine: {
                        show: false,
                      },
                    },
                  },
                },
                {
                  value: handred - point,
                  itemStyle: {
                    normal: {
                      color: "#E1E8EE",
                    },
                  },
                },
              ],
            },
          ],
        };
        // 3. 把配置和数据给实例对象
        myChart.setOption(option);
      })();
      (function () {
        // 基于准备好的dom，初始化echarts实例
        var myChart = echarts.init(document.querySelector(".line .answer"));

        const handred = 20;
        let point = 7;

        var option = {
          title: {
            text: point,
            x: "center",
            y: "center",
            textStyle: {
              fontWeight: "normal",
              color: "#29EEF3",
              fontSize: "30",
            },
          },
          tooltip: {
            formatter: function (params) {
              return params.name + "：" + params.percent + " %";
            },
          },
          legend: {
            show: true,
            itemGap: 12,
            data: ["占比", "剩余"],
          },

          series: [
            {
              name: "circle",
              type: "pie",
              clockWise: true,
              radius: ["50%", "66%"],
              itemStyle: {
                normal: {
                  label: {
                    show: false,
                  },
                  labelLine: {
                    show: false,
                  },
                },
              },
              hoverAnimation: false,
              data: [
                {
                  value: point,

                  itemStyle: {
                    normal: {
                      color: {
                        // 颜色渐变
                        colorStops: [
                          {
                            offset: 0,
                            color: "#4FADFD", // 0% 处的颜色
                          },
                          {
                            offset: 1,
                            color: "#28E8FA", // 100% 处的颜色1
                          },
                        ],
                      },
                      label: {
                        show: false,
                      },
                      labelLine: {
                        show: false,
                      },
                    },
                  },
                },
                {
                  value: handred - point,
                  itemStyle: {
                    normal: {
                      color: "#E1E8EE",
                    },
                  },
                },
              ],
            },
          ],
        };
        // 3. 把配置和数据给实例对象
        myChart.setOption(option);
      })();

      (function () {
        // 基于准备好的dom，初始化echarts实例
        var myChart = echarts.init(document.querySelector(".bar1 .chart"));

        // var data = [70, 34, 60, 78, 69];
        var data = [70, 34];
        // var titlename = ["产品覆盖率", "企业覆盖率", "javascript", "VUE", "NODE"];
        var titlename = ["产品覆盖率", "企业覆盖率"];
        // var valdata = [702, 350, 610, 793, 664];
        var valdata = [702, 350];
        // var myColor = ["#1089E7", "#F57474", "#56D0E3", "#F8B448", "#8B78F6"];
        var myColor = ["#1089E7", "#F57474"];
        var option = {
          //图标位置
          grid: {
            top: "10%",
            left: "22%",
            bottom: "10%",
          },
          xAxis: {
            show: false,
          },
          yAxis: [
            {
              show: true,
              data: titlename,
              inverse: true,
              axisLine: {
                show: false,
              },
              splitLine: {
                show: false,
              },
              axisTick: {
                show: false,
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
                    height: 15,
                  },
                },
              },
            },
            {
              show: true,
              inverse: true,
              axisLine: {
                show: false,
              },
              data: valdata,
              axisLabel: {
                textStyle: {
                  fontSize: 12,
                  color: "#fff",
                },
              },
            },
          ],
          series: [
            {
              name: "条",
              type: "bar",
              yAxisIndex: 0,
              data: data,
              barCategoryGap: 30,
              barWidth: 10,
              itemStyle: {
                normal: {
                  barBorderRadius: 20,
                  color: function (params) {
                    var num = myColor.length;
                    return myColor[params.dataIndex % num];
                  },
                },
              },
              label: {
                normal: {
                  show: true,
                  position: "inside",
                  formatter: "{c}%",
                },
              },
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
                  barBorderRadius: 15,
                },
              },
            },
          ],
        };

        // 使用刚指定的配置项和数据显示图表。
        myChart.setOption(option);
        window.addEventListener("resize", function () {
          myChart.resize();
        });
      })();
      (function () {
        // 1. 实例化对象
        var myChart = echarts.init(document.querySelector(".pie1  .chart"));
        // 2. 指定配置项和数据
        var option = {
          color: ["#2f89cf"],
          tooltip: {
            trigger: "axis",
            axisPointer: {
              // 坐标轴指示器，坐标轴触发有效
              type: "shadow", // 默认为直线，可选为：'line' | 'shadow'
            },
          },
          grid: {
            left: "0%",
            top: "10px",
            right: "0%",
            bottom: "4%",
            containLabel: true,
          },
          xAxis: [
            {
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
                alignWithLabel: true,
              },
              axisLabel: {
                textStyle: {
                  color: "rgba(255,255,255,.6)",
                  fontSize: "12",
                },
              },
              axisLine: {
                show: false,
              },
            },
          ],
          yAxis: [
            {
              type: "value",
              axisLabel: {
                textStyle: {
                  color: "rgba(255,255,255,.6)",
                  fontSize: "12",
                },
              },
              axisLine: {
                lineStyle: {
                  color: "rgba(255,255,255,.1)",
                  // width: 1,
                  // type: "solid"
                },
              },
              splitLine: {
                lineStyle: {
                  color: "rgba(255,255,255,.1)",
                },
              },
            },
          ],
          series: [
            {
              name: "直接访问",
              type: "bar",
              barWidth: "35%",
              // data: [200, 300, 300, 900, 1500, 1200, 600],
              data: [200, 300, 300, 900],
              itemStyle: {
                barBorderRadius: 5,
              },
            },
          ],
        };

        // 3. 配置项和数据给我们的实例化对象
        myChart.setOption(option);
        // 4. 当我们浏览器缩放的时候，图表也等比例缩放
        window.addEventListener("resize", function () {
          // 让我们的图表调用 resize这个方法
          myChart.resize();
        });
      })();
      (function () {
        // 基于准备好的dom，初始化echarts实例
        var myChart = echarts.init(document.querySelector(".line1 .pie"));

        let angle = 0; //角度，用来做简单的动画效果的
        let value = 22;
        var option = {
          title: {
            text: "{a|" + value + "}{c|}",
            x: "center",
            y: "center",
            textStyle: {
              rich: {
                a: {
                  fontSize: 20,
                  color: "#29EEF3",
                },

                c: {
                  fontSize: 20,
                  color: "#ffffff",
                  // padding: [5,0]
                },
              },
            },
          },
          legend: {
            type: "plain",
            orient: "vertical",
            right: 0,
            top: "10%",
            align: "auto",
            data: [
              {
                name: "涨价后没吃过",
                icon: "circle",
              },
              {
                name: "天天吃",
                icon: "circle",
              },
              {
                name: "三五天吃一次",
                icon: "circle",
              },
              {
                name: "半个月吃一次",
                icon: "circle",
              },
            ],
            textStyle: {
              color: "white",
              fontSize: 16,
              padding: [10, 1, 10, 0],
            },
            selectedMode: false,
          },
          series: [
            {
              name: "ring5",
              type: "custom",
              coordinateSystem: "none",
              renderItem: function (params, api) {
                return {
                  type: "arc",
                  shape: {
                    cx: api.getWidth() / 2,
                    cy: api.getHeight() / 2,
                    r: (Math.min(api.getWidth(), api.getHeight()) / 2) * 0.6,
                    startAngle: ((0 + angle) * Math.PI) / 180,
                    endAngle: ((90 + angle) * Math.PI) / 180,
                  },
                  style: {
                    stroke: "#0CD3DB",
                    fill: "transparent",
                    lineWidth: 1.5,
                  },
                  silent: true,
                };
              },
              data: [0],
            },
            {
              name: "ring5",
              type: "custom",
              coordinateSystem: "none",
              renderItem: function (params, api) {
                return {
                  type: "arc",
                  shape: {
                    cx: api.getWidth() / 2,
                    cy: api.getHeight() / 2,
                    r: (Math.min(api.getWidth(), api.getHeight()) / 2) * 0.6,
                    startAngle: ((180 + angle) * Math.PI) / 180,
                    endAngle: ((270 + angle) * Math.PI) / 180,
                  },
                  style: {
                    stroke: "#0CD3DB",
                    fill: "transparent",
                    lineWidth: 1.5,
                  },
                  silent: true,
                };
              },
              data: [0],
            },
            {
              name: "ring5",
              type: "custom",
              coordinateSystem: "none",
              renderItem: function (params, api) {
                return {
                  type: "arc",
                  shape: {
                    cx: api.getWidth() / 2,
                    cy: api.getHeight() / 2,
                    r: (Math.min(api.getWidth(), api.getHeight()) / 2) * 0.65,
                    startAngle: ((270 + -angle) * Math.PI) / 180,
                    endAngle: ((40 + -angle) * Math.PI) / 180,
                  },
                  style: {
                    stroke: "#0CD3DB",
                    fill: "transparent",
                    lineWidth: 1.5,
                  },
                  silent: true,
                };
              },
              data: [0],
            },
            {
              name: "ring5",
              type: "custom",
              coordinateSystem: "none",
              renderItem: function (params, api) {
                return {
                  type: "arc",
                  shape: {
                    cx: api.getWidth() / 2,
                    cy: api.getHeight() / 2,
                    r: (Math.min(api.getWidth(), api.getHeight()) / 2) * 0.65,
                    startAngle: ((90 + -angle) * Math.PI) / 180,
                    endAngle: ((220 + -angle) * Math.PI) / 180,
                  },
                  style: {
                    stroke: "#0CD3DB",
                    fill: "transparent",
                    lineWidth: 1.5,
                  },
                  silent: true,
                };
              },
              data: [0],
            },
            {
              name: "ring5",
              type: "custom",
              coordinateSystem: "none",
              renderItem: function (params, api) {
                let x0 = api.getWidth() / 2;
                let y0 = api.getHeight() / 2;
                let r = (Math.min(api.getWidth(), api.getHeight()) / 2) * 0.65;
                let point = getCirlPoint(x0, y0, r, 90 + -angle);
                return {
                  type: "circle",
                  shape: {
                    cx: point.x,
                    cy: point.y,
                    r: 4,
                  },
                  style: {
                    stroke: "#0CD3DB", //粉
                    fill: "#0CD3DB",
                  },
                  silent: true,
                };
              },
              data: [0],
            },
            {
              name: "ring5", //绿点
              type: "custom",
              coordinateSystem: "none",
              renderItem: function (params, api) {
                let x0 = api.getWidth() / 2;
                let y0 = api.getHeight() / 2;
                let r = (Math.min(api.getWidth(), api.getHeight()) / 2) * 0.65;
                let point = getCirlPoint(x0, y0, r, 270 + -angle);
                return {
                  type: "circle",
                  shape: {
                    cx: point.x,
                    cy: point.y,
                    r: 4,
                  },
                  style: {
                    stroke: "#0CD3DB", //绿
                    fill: "#0CD3DB",
                  },
                  silent: true,
                };
              },
              data: [0],
            },
            {
              name: "吃猪肉频率",
              type: "pie",
              radius: ["58%", "45%"],
              silent: true,
              clockwise: true,
              startAngle: 90,
              z: 0,
              zlevel: 0,
              label: {
                normal: {
                  position: "center",
                },
              },
              data: [
                {
                  value: value,
                  name: "",
                  itemStyle: {
                    normal: {
                      color: {
                        // 完成的圆环的颜色
                        colorStops: [
                          {
                            offset: 0,
                            color: "#4FADFD", // 0% 处的颜色
                          },
                          {
                            offset: 1,
                            color: "#28E8FA", // 100% 处的颜色
                          },
                        ],
                      },
                    },
                  },
                },
                {
                  value: 100 - value,
                  name: "",
                  label: {
                    normal: {
                      show: false,
                    },
                  },
                  itemStyle: {
                    normal: {
                      color: "#173164",
                    },
                  },
                },
              ],
            },

            {
              name: "",
              type: "gauge",
              radius: "58%",
              center: ["50%", "50%"],
              startAngle: 0,
              endAngle: 359.9,
              splitNumber: 8,
              hoverAnimation: true,
              axisTick: {
                show: false,
              },
              splitLine: {
                length: 60,
                lineStyle: {
                  width: 5,
                  color: "#061740",
                },
              },
              axisLabel: {
                show: false,
              },
              pointer: {
                show: false,
              },
              axisLine: {
                lineStyle: {
                  opacity: 0,
                },
              },
              detail: {
                show: false,
              },
              data: [
                {
                  value: 0,
                  name: "",
                },
              ],
            },
          ],
        };

        //获取圆上面某点的坐标(x0,y0表示坐标，r半径，angle角度)
        function getCirlPoint(x0, y0, r, angle) {
          let x1 = x0 + r * Math.cos((angle * Math.PI) / 180);
          let y1 = y0 + r * Math.sin((angle * Math.PI) / 180);
          return {
            x: x1,
            y: y1,
          };
        }

        function draw() {
          angle = angle + 3;
          myChart.setOption(option, true);
          //window.requestAnimationFrame(draw);
        }

        setInterval(function () {
          //用setInterval做动画感觉有问题
          draw();
        }, 100);

        // 3. 把配置和数据给实例对象
        myChart.setOption(option);
      })();
    },
  },
};
</script>

<style scoped>
.dataview {
  background: url(../assets/img/bg.jpg) no-repeat #000;
  background-size: cover;
  /* height: 100%; */
  line-height: 1.15;
}
.header {
  position: relative;
  height: 1.25rem;
  background: url(../assets/img/head_bg.png) no-repeat top center;
  background-size: 100% 100%;
}
.header h1 {
  font-size: 0.475rem;
  color: #fff;
  text-align: center;
  line-height: 1rem;
}

.header .showTime {
  position: absolute;
  top: 0;
  right: 0.375rem;
  line-height: 0.9375rem;
  font-size: 0.25rem;
  color: rgba(255, 255, 255, 0.7);
}
.mainbox {
  min-width: 1024px;
  max-width: 1920px;
  padding: 0.125rem 0.125rem 0;
  display: flex;
}

.mainbox .column {
  flex: 3;
}

.mainbox .column:nth-child(2) {
  flex: 5;
  margin: 0 0.125rem 0.1875rem;
  overflow: hidden;
}

.panel {
  position: relative;
  height: 3.875rem;
  border: 1px solid rgba(25, 186, 139, 0.17);
  background: rgba(255, 255, 255, 0.04) url(../assets/img/line\(1\).png);
  padding: 0 0.1875rem 0.5rem;
  margin-bottom: 0.1875rem;
}

.panel::before {
  position: absolute;
  top: 0;
  left: 0;
  content: "";
  width: 10px;
  height: 10px;
  border-top: 2px solid #02a6b5;
  border-left: 2px solid #02a6b5;
}

.panel::after {
  position: absolute;
  top: 0;
  right: 0;
  content: "";
  width: 10px;
  height: 10px;
  border-top: 2px solid #02a6b5;
  border-right: 2px solid #02a6b5;
}

.panel .panel-footer {
  position: absolute;
  left: 0;
  bottom: 0;
  width: 100%;
}

.panel .panel-footer::before {
  position: absolute;
  bottom: 0;
  left: 0;
  content: "";
  width: 10px;
  height: 10px;
  border-bottom: 2px solid #02a6b5;
  border-left: 2px solid #02a6b5;
}

.panel .panel-footer::after {
  position: absolute;
  bottom: 0;
  right: 0;
  content: "";
  width: 10px;
  height: 10px;
  border-bottom: 2px solid #02a6b5;
  border-right: 2px solid #02a6b5;
}

.panel h2 {
  height: 0.6rem;
  line-height: 0.6rem;
  text-align: center;
  color: #fff;
  font-size: 0.25rem;
  font-weight: 400;
}

.panel h2 a {
  margin: 0 0.1875rem;
  color: #fff;
  text-decoration: underline;
}

.panel .chart {
  height: 3rem;
}

.no {
  background: rgba(101, 132, 226, 0.1);
  padding: 0.1875rem;
}

.no .no-hd {
  position: relative;
  border: 1px solid rgba(25, 186, 139, 0.17);
}

.no .no-hd::before {
  content: "";
  position: absolute;
  width: 30px;
  height: 10px;
  border-top: 2px solid #02a6b5;
  border-left: 2px solid #02a6b5;
  top: 0;
  left: 0;
}

.no .no-hd::after {
  content: "";
  position: absolute;
  width: 30px;
  height: 10px;
  border-bottom: 2px solid #02a6b5;
  border-right: 2px solid #02a6b5;
  right: 0;
  bottom: 0;
}

.no .no-hd ul {
  display: flex;
}

.no .no-hd ul li {
  position: relative;
  flex: 1;
  text-align: center;
  height: 1rem;
  line-height: 1rem;
  font-size: 0.875rem;
  color: #ffeb7b;
  padding: 0.05rem 0;
  font-family: electronicFont;
  font-weight: bold;
}

.no .no-hd ul li:first-child::after {
  content: "";
  position: absolute;
  height: 50%;
  width: 1px;
  background: rgba(255, 255, 255, 0.2);
  right: 0;
  top: 25%;
}

.no .no-bd ul {
  display: flex;
}

.no .no-bd ul li {
  flex: 1;
  height: 0.5rem;
  line-height: 0.5rem;
  text-align: center;
  font-size: 0.225rem;
  color: rgba(255, 255, 255, 0.7);
  padding-top: 0.125rem;
}

.map {
  position: relative;
  height: 10.125rem;
}

.map .chart {
  position: absolute;
  top: 0;
  left: 0;
  z-index: 5;
  height: 10.125rem;
  width: 100%;
}

.map .map1,
.map .map2,
.map .map3 {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 6.475rem;
  height: 6.475rem;
  background: url(../assets/img/map.png) no-repeat;
  background-size: 100% 100%;
  opacity: 0.3;
}

.map .map2 {
  width: 8.0375rem;
  height: 8.0375rem;
  background-image: url(../assets/img/lbx.png);
  opacity: 0.6;
  animation: rotate 15s linear infinite;
  z-index: 2;
}

.map .map3 {
  width: 7.075rem;
  height: 7.075rem;
  background-image: url(../assets/img/jt.png);
  animation: rotate1 10s linear infinite;
}

@keyframes rotate {
  from {
    transform: translate(-50%, -50%) rotate(0deg);
  }
  to {
    transform: translate(-50%, -50%) rotate(360deg);
  }
}

@keyframes rotate1 {
  from {
    transform: translate(-50%, -50%) rotate(0deg);
  }
  to {
    transform: translate(-50%, -50%) rotate(-360deg);
  }
}

@media screen and (max-width: 1024px) {
  html {
    font-size: 42px !important;
  }
}

@media screen and (min-width: 1920) {
  html {
    font-size: 80px !important;
  }
}

.line .ul1 {
  display: flex;
  height: 3rem;
}

.line .ul1 li {
  flex: 1;
}

.line .ul2 {
  display: flex;
  height: 3rem;
}

.line .ul2 li {
  flex: 1;
}

.line .ul3 {
  display: flex;
  height: 0.4rem;
}

.line .ul3 li {
  flex: 1;
  color: white;
  text-align: center;
}

.line .ul4 {
  display: flex;
  height: 0.4rem;
}

.line .ul4 li {
  flex: 1;
  color: white;
  text-align: center;
}

.line1 ul {
  width: 100%;
  height: 100%;
  display: flex;
}

.line1 ul li {
  flex: 1;
}

.line1 ul li div {
  color: white;
  height: 50%;
  line-height: 50px;
}

.line1 ul li .pie {
  height: 75%;
}

.line1 ul li .text {
  height: 25%;
  color: white;
  text-align: center;
  line-height: 20px;
}
</style>