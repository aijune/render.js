define(["render", "w/m/navbar", "w/m/tabbar", "w/m/section"], function (render) {

    return render.widget("home", {

        options: {},

        renders: {

            main: function (o, w) {
                return [
                    ["render[name=navbar]"],
                    ["render[name=section]"],
                    ["render[name=tabbar]"]
                ];
            },

            navbar: function(){
                return ["widget[name=navbar]", {
                    fixed: true,
                    title: "标题",
                    left: {
                        icon: true,
                        text: "返回",
                        onclick: function (e, data) {
                            console.log(this, e, data);
                        }
                    },
                    right: {
                        icon: "m-icon m-icon-search",
                        text: "菜单",
                        onclick: function (e, data) {
                            console.log(this, e, data);
                        }
                    }
                }];
            },

            section: function(){
                return ["widget[name=section]", {
                    items: [
                        {
                            title: "基础用法",
                            cellgroup: [
                                {title: "单元格", value: "内容", rightIcon: true, leftIcon: "m-icon m-icon-location-o"},
                                {title: "单元格", value: "内容", rightIcon: true, label: "我是说明文字"},
                                {title: "单元格", value: "内容", rightIcon: true, onclick: function (e, data) {console.log(this, e, data);}}
                            ]
                        },
                        {
                            title: "基础用法",
                            cellgroup: [
                                {title: "单元格", value: "内容", rightIcon: true},
                                {title: "单元格", value: "内容", rightIcon: true},
                                {title: "单元格", value: "内容", rightIcon: true}
                            ]
                        }
                    ]
                }];
            },

            tabbar: function(){
                return ["widget[name=tabbar]", {
                    fixed: true,
                    onchange: function(e, data){
                        console.log(this, e, data)
                    },
                    items: [
                        {
                            icon: "m-icon m-icon-home-o",
                            text: "首页"
                        },
                        {
                            icon: "m-icon m-icon-search",
                            text: "搜索",
                            dot: true
                        },
                        {
                            icon: "m-icon m-icon-friends-o",
                            text: "用户中心",
                            dot: true
                        },
                        {
                            icon: "m-icon m-icon-setting-o",
                            text: "评论",
                            badge: 40
                        }
                    ]
                }];
            }
        }
    });
});