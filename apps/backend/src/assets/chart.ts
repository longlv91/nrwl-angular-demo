export const chartData = {
    pie1ChartOption: {
        title: {
            text: 'Sessions by device',
            x: 'left'
        },
        tooltip: {
            trigger: 'item',
            formatter: "{a} <br/>{b} : {c} ({d}%)"
        },
        calculable: true,
        series: [
            {
                name: 'Devices',
                type: 'pie',
                radius: ['50%', '70%'],
                legendHoverLink: false,
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
                data: [
                    { value: 335, name: 'Desktop' },
                    { value: 310, name: 'Mobile' },
                    { value: 234, name: 'Tablet' }
                ]
            }
        ]
    },
    pie2ChartOption: {
        title: {
            text: 'Nightingale\'s Rose Diagram',
            textStyle: {
                "fontSize": 14,
                "fontWeight": "normal"
            },
            x: 'left'
        },
        tooltip: {
            trigger: 'item',
            formatter: '{a} <br/>{b} : {c} ({d}%)'
        },
        visualMap: {
            show: false,
            min: 80,
            max: 600,
            inRange: {
                colorLightness: [0, 1]
            }
        },
        series: [
            {
                name: 'Counters',
                type: 'pie',
                radius: '55%',
                center: ['50%', '50%'],
                data: [
                    { value: 335, name: 'C-1' },
                    { value: 310, name: 'C-2' },
                    { value: 274, name: 'C-3' },
                    { value: 235, name: 'C-4' },
                    { value: 400, name: 'C-5' }
                ].sort(function (a, b) { return a.value - b.value; }),
                roseType: 'radius',
                animationType: 'scale',
                animationEasing: 'elasticOut',
                animationDelay: function (idx) {
                    return Math.random() * 200;
                }
            }
        ]
    },
    visitorLineCharOption: {
        tooltip: {
            trigger: 'axis'
        },
        legend: {
            data: ['Visitor']
        },
        toolbox: {
            show: true,
            feature: {
                mark: { show: true },
                magicType: {
                    show: true,
                    type: ['line', 'bar', 'stack', 'tiled'],
                    title: {
                        line: 'Line chart',
                        bar: 'Bar chart',
                        stack: 'Stack',
                        tiled: 'Tiled'
                    }
                },
                restore: { show: true, title: 'Refresh' },
                saveAsImage: { show: true, title: 'Save As Image' }
            }
        },
        calculable: true,
        xAxis: [
            {
                type: 'category',
                boundaryGap: false,
                data: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
            }
        ],
        yAxis: [
            {
                type: 'value'
            }
        ],
        series: [
            {
                name: 'Visitor',
                type: 'line',
                stack: 'Visitor',
                itemStyle: { normal: { areaStyle: { type: 'default' } } },
                data: [120, 132, 101, 134, 90, 230, 210, 190, 175, 195, 220, 200]
            }
        ]
    },
    barChartOption: {
        title: {
            text: 'Nightingale\'s Rose Diagram',
            textStyle: {
                "fontSize": 14,
                "fontWeight": "normal"
            },
            x: 'left'
        },
        color: ['#3398DB'],
        tooltip: {
            trigger: 'axis',
            axisPointer: {
                type: 'shadow'
            }
        },
        grid: {
            left: '3%',
            right: '4%',
            bottom: '3%',
            containLabel: true
        },
        xAxis: [
            {
                type: 'category',
                data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
                axisTick: {
                    alignWithLabel: true
                }
            }
        ],
        yAxis: [{
            type: 'value'
        }],
        series: [{
            name: 'Counters',
            type: 'bar',
            barWidth: '60%',
            data: [10, 52, 200, 334, 390, 330, 220]
        }]
    }
}