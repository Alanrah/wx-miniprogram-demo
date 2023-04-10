// components/loading/index.ts
Component({
    /**
     * 组件的属性列表
     */
    properties: {
        min: {
            type: Number,
            value: 0
        },
        max: {
            type: Number,
            value: 0,
            observer: function (newVal, oldVal) {
                // 属性值变化时执行
            }
        },
        lastLeaf: {
            // 类型  String Number Boolean Object Array 其一，也可以为 null 表示不限制类型
            // 这个属性可以是 Number 、 String 、 Boolean 三种类型中的一种
            type: Number,
            optionalTypes: [String, Object],
            value: 0
        }
    },

    /**
     * 组件的初始数据
     */
    data: {

    },
    lifetimes: {
        // 生命周期函数，可以为函数，或一个在methods段中定义的方法名
        attached: function () { },
        moved: function () { },
        detached: function () { },
    },

    // 生命周期函数，可以为函数，或一个在methods段中定义的方法名
    attached: function () { }, // 此处attached的声明会被lifetimes字段中的声明覆盖
    ready: function () { },

    pageLifetimes: {
        // 组件所在页面的生命周期函数
        show: function () { },
        hide: function () { },
        resize: function () { },
    },
    /**
     * 组件的方法列表
     */
    methods: {

    }
})
