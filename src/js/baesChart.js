/**
 * Created by zst on 2018/3/6.
 */

function lineChart(_data){
    // 基于准备好的dom，初始化echarts实例
    var lineChart = echarts.init(document.getElementById("sales-charts"));
    // 指定图表的配置项和数据
    option  = {
        title: {
            text: _data.title,
            textStyle:{
                color:"#fff",
                fontWeight:"normal",
                fontSize:14
            }
        },
        xAxis: {
            type: 'category',
            data: _data.xAxis,
            nameTextStyle:{
                color:"#fff"
            },
            splitLine:{show: false},//去除网格线
        },
        yAxis: {
            type: 'value',
            splitLine:{show: false},//去除网格线
            nameTextStyle:{
                color:"#fff"
            },
        },
        series: [{
            data: _data.yAxis,
            type: 'line',
            smooth: true,
            itemStyle : {
                normal : {
                    lineStyle:{
                        color:'#e40283'
                    }
                }
            },
        }]
    };
    // 使用刚指定的配置项和数据显示图表。
    lineChart.setOption(option);
}

function pieChart(){
    // 基于准备好的dom，初始化echarts实例
    var pieChart = echarts.init(document.getElementById('piechart-placeholder'));
    // 指定图表的配置项和数据
    option = {
        tooltip: {
            trigger: 'item',
            formatter: "{a} <br/>{b}: {c} ({d}%)"
        },

        series: [
            {
                name:'访问来源',
                type:'pie',
                radius: ['50%', '70%'],
                avoidLabelOverlap: false,
                label: {
                    normal: {
                        show: false,
                        position: 'center'
                    },
                    emphasis: {
                        show: true,
                        textStyle: {
                            fontSize: '30',
                            fontWeight: 'bold'
                        }
                    }
                },
                labelLine: {
                    normal: {
                        show: false
                    }
                },
                data:[
                    {value:335, name:'直接访问'},
                    {value:310, name:'邮件营销'},
                    {value:234, name:'联盟广告'},
                    {value:135, name:'视频广告'},
                    {value:1548, name:'搜索引擎'}
                ]
            }
        ]
    };
    // 使用刚指定的配置项和数据显示图表。
    pieChart.setOption(option);
}
