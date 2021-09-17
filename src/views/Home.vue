<template>
  <div class="home-container">
    <!-- 头部 -->
    <headerr title="工业产品品质提升数字化共享平台"></headerr>
    <!-- 主体 -->
    <!-- <el-main > </el-main> -->
    <div class="main w">
      <!-- 基本信息模块 -->
      <div class="homeInfo clearfix">
        <ul>
          <li>
            <!-- 左上轮播图1 -->
            <el-carousel height="320px">
              <el-carousel-item
                v-for="(item, index) in swipperImg"
                :key="index"
              >
                <img class="homeswiperleft" :src="item" alt="" />
              </el-carousel-item>
            </el-carousel>
          </li>
          <!-- 动态数据 -->
          <li class="activeDate">
            <h2><span></span>动态数据</h2>
            <ul>
              <li>
                <a href="#">
                  <div>
                    <span></span>
                    <i>企业数据:</i>
                  </div>
                  <i>500条</i>
                </a>
              </li>
              <li>
                <a href="#">
                  <div>
                    <span></span>
                    <i>企业数据:</i>
                  </div>
                  <i>500条</i>
                </a>
              </li>
              <li>
                <a href="#">
                  <div>
                    <span></span>
                    <i>企业数据:</i>
                  </div>
                  <i>500条</i>
                </a>
              </li>
              <li>
                <a href="#">
                  <div>
                    <span></span>
                    <i>企业数据:</i>
                  </div>
                  <i>500条</i>
                </a>
              </li>
              <li>
                <a href="#">
                  <div>
                    <span></span>
                    <i>企业数据:</i>
                  </div>
                  <i>500条</i>
                </a>
              </li>
              <li>
                <a href="#">
                  <div>
                    <span></span>
                    <i>企业数据:</i>
                  </div>
                  <i>500条</i>
                </a>
              </li>
            </ul>
          </li>
          <!-- 模块3 -->
          <li class="win3">
            <ul>
              <li><a href="#"> 实验室预约</a></li>
              <li><a href="#"> 在线检测</a></li>
              <li><a href="#"> 资料上传</a></li>
              <li><a href="#">报告下载</a></li>
            </ul>
          </li>
          <!-- 模块4 -->
          <li class="win4">
            <div class="win4Header">
              <span>新闻资讯</span>
              <a href="#">更多<i class="el-icon-d-arrow-right"></i></a>
            </div>
            <div class="win4body">
              <ul>
                <li>
                  <a href="#">浙江：在科普集市了解“新材料”</a> <i>时间</i>
                </li>

                <li>
                  <a href="#"
                    >认祖归宗！郭威一家清明节回江西祭祖，亲生父亲买菜等候</a
                  ><i>时间</i>
                </li>
                <li><a href="#">浙江：在科普集市了解“新材料”</a><i>时间</i></li>
                <li><a href="#">浙江：在科普集市了解“新材料”</a><i>时间</i></li>
                <li><a href="#">浙江：在科普集市了解“新材料”</a><i>时间</i></li>
                <li><a href="#">浙江：在科普集市了解“新材料”</a><i>时间</i></li>
                <li><a href="#">浙江：在科普集市了解“新材料”</a><i>时间</i></li>
                <li><a href="#">浙江：在科普集市了解“新材料”</a><i>时间</i></li>
              </ul>
            </div>
          </li>
          <!-- 模块5 -->
          <li class="echart"></li>
          <!-- 模块6 -->
          <li class="win6">
            <!-- <a href="#" class="win6Img"></a> -->
            <div @click="dataViewClick" class="win6Img"></div>
          </li>
        </ul>
      </div>
      <!-- 图片展示模块 -->
      <div class="scrollImg">图片</div>
    </div>
    <!-- 底部 -->
    <!-- <el-footer>Footer</el-footer> -->
    <div class="foot">Footer</div>
  </div>
</template>

<script>
import * as echarts from "echarts";
import Headerr from "./home/Headerr.vue";
export default {
  data() {
    return {
      // 轮播图
      swipperImg: [
        "https://z3.ax1x.com/2021/04/02/cZj8s0.jpg",
        "https://z3.ax1x.com/2021/04/02/cZjrsx.jpg",
        "https://z3.ax1x.com/2021/04/02/cZjwW9.jpg",
        "https://z3.ax1x.com/2021/04/02/cZXiuV.jpg",
      ],
      scrollImg: [
        "https://z3.ax1x.com/2021/04/02/cZj8s0.jpg",
        "https://z3.ax1x.com/2021/04/02/cZjrsx.jpg",
        "https://z3.ax1x.com/2021/04/02/cZjwW9.jpg",
        "https://z3.ax1x.com/2021/04/02/cZXiuV.jpg",
      ],
    };
  },
  components: { Headerr },
  methods: {
    // 点击模块6进入数据大屏
    dataViewClick() {
      this.$router.push("dataview");
    },
  },
  mounted() {
    (function () {
      // 实例化对象
      var myChart = echarts.init(document.querySelector(" .echart"));

      var option = {
        title: {
          text: "专家入驻情况",
          left: "center",
        },

        legend: {
          top: "bottom",
        },
        series: [
          {
            name: "面积模式",
            type: "pie",
            radius: [20, 100],
            center: ["50%", "50%"],
            roseType: "area",
            itemStyle: {
              borderRadius: 8,
            },
            data: [
              { value: 40, name: "企业专家" },
              { value: 38, name: "国标要专家" },
              { value: 32, name: "检验检测专家" },
              { value: 30, name: "高级专家" },
            ],
          },
        ],
      };

      // 把配置给实例对象
      myChart.setOption(option);
    })();
  },
};
// echart
</script>

<style scoped>
/* 头部 ////////////////////*/

.foot {
  background-color: red;
}

/* 主体 ////////////////////////*/
.main {
  margin-top: 15px;
  height: 900px;
  /* background-color: green; */
}
/* 主体信息部分 */
.homeInfo > ul > li {
  font-family: "icomoon";
  float: left;
  width: 380px;
  height: 320px;
  margin-left: 15px;
  margin-bottom: 15px;
  /* overflow: hidden; */
}
.homeInfo > ul > li:nth-child(2) {
  border: 1px solid #666;
  border-top: 2px solid #1c4b9a;
}
/* 图片展示模块 */
.main .homeImg {
  background-color: #fff;
}
/* 轮播图1 */
.homeswiperleft {
  height: 100%;
  width: 100%;
}
/* 动态数据2 */
.activeDate ul li {
  float: left;
  width: 165px;
  height: 76px;
  margin-left: 15px;
  margin-bottom: 12px;
}
.activeDate ul li a {
  display: inline-block;
  width: 100%;
  height: 100%;
  background-color: #f3f8ff;
  text-align: center;
}
.activeDate ul li a div span {
  /* line-height: 76px; */
  font-size: 18px;
}
.activeDate ul li a div {
  margin-top: 5px;
  text-align: center;
  margin-bottom: 5px;
}
.activeDate ul li a div i {
  color: black;
  font-weight: 700;
  font-size: 16px;
  margin-left: 8px;
}
.activeDate ul li a > i {
  font-weight: 700;
  font-size: 20px;
  color: #1c4b9a;
}

.activeDate h2 {
  text-align: center;
  color: #666;
  margin-top: 5px;
  margin-bottom: 12px;
  color: #1c4b9a;
}
.activeDate h2 span {
  font-size: 18px;
  margin-right: 5px;
  box-sizing: border-box;
}
/* 模块3 */

.win3 ul li {
  /* background-color: red; */
  width: 190px;
  height: 160px;
  float: left;
}
.win3 ul li a {
  display: inline-block;
  width: 100%;
  height: 100%;
  text-align: center;
  font-size: 24px;
  line-height: 160px;
}
/* 模块4 */
.win4 {
  border: 1px solid #666;
  border-top: 2px solid #1c4b9a;
}
.win4 .win4Header {
  position: relative;
  margin-bottom: 1px solid #666;
  height: 36px;
}
.win4 .win4Header span {
  position: absolute;
  left: 16px;
  font-size: 18px;
  font-weight: 700;
  line-height: 36px;
}
.win4 .win4Header a {
  line-height: 36px;
  position: absolute;
  right: 6px;
}
.win4body {
  padding: 0 15px;
  margin-top: 10px;
}
.win4body ul {
  border-top: 2px solid #666;
}
.win4body ul li {
  position: relative;
  height: 32px;
  border-bottom: 1px solid #666;
}
.win4body ul li a {
  margin-left: 15px;
  display: inline-block;
  font-size: 14px;
  height: 100%;
  width: 230px;
  line-height: 32px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}
.win4body ul li i {
  position: absolute;
  top: 6px;
  right: 0px;
}
/* 模块5 */
.echart {
  width: 380px;
  /* height: 320px; */
  border: 1px solid #666;
  border-top: 2px solid #1c4b9a;
}
/* 模块6 */
.win6 {
  width: 380px;
  height: 320px;
}
.win6Img {
  display: inline-block;
  width: 100%;
  height: 100%;
  background: url("../assets/img/dataView.jpg");
  /* background-color: pink; */
}
/* 图片展示模块 */

/* 底部//////////////////////// */
</style>