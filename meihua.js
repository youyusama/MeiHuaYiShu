

/*
111 乾 ☰
011 兑 ☱
101 离 ☲
001 震 ☳
110 巽 ☴
010 坎 ☵
100 艮 ☶
000 坤 ☷
*/


//获取get参数
function getUrlParam(name) {
    var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)");
    var r = window.location.search.substring(1).match(reg);
    if (r != null) return decodeURI(r[2]); return null;
}



//相生相克
function 生克(一, 二){
    let 生 = {
        "金": "水",
        "水": "木",
        "木": "火",
        "火": "土",
        "土": "金"
    };
    let 克 = {
        "金": "木",
        "木": "土",
        "土": "水",
        "水": "火",
        "火": "金"
    };
    let 结果 = "";
    if(生[一] == 二)      结果 = "上生下";
    else if(克[一] == 二) 结果 = "上克下";
    else if(生[二] == 一) 结果 = "下生上";
    else if(克[二] == 一) 结果 = "下克上";
    else if(一 == 二)     结果 = "比和";
    else return 0;

    return 结果;

}

function 吉凶(结果){
    if (结果 == "用生体") return '<span class="green">用生体</span>';
    else if (结果 == "用克体") return '<span class="red">用克体</span>';
    else if (结果 == "互生体") return '<span class="green">互生体</span>';
    else if (结果 == "互克体") return '<span class="red">互克体</span>';
    else if (结果 == "体生用") return '<span class="red">体生用</span>';
    else if (结果 == "体生互") return '<span class="red">体生互</span>';
    else return 结果;
}

function 卦象提示(卦象, 八卦, 卦名, 五行, 五行颜色类){
    return '<span class="hex">' + 八卦[卦象] + '&nbsp;<small class="' + 五行颜色类[五行[卦象]] + '">' + 卦名[卦象] + '</small></span>';
}

const 时辰名称 = ["子", "丑", "寅", "卯", "辰", "巳", "午", "未", "申", "酉", "戌", "亥"];
const 天干 = ["甲", "乙", "丙", "丁", "戊", "己", "庚", "辛", "壬", "癸"];
const 地支 = ["子", "丑", "寅", "卯", "辰", "巳", "午", "未", "申", "酉", "戌", "亥"];
const 农历月份名称 = ["正", "二", "三", "四", "五", "六", "七", "八", "九", "十", "冬", "腊"];
const 农历数字 = ["一", "二", "三", "四", "五", "六", "七", "八", "九", "十"];
const 中文数字 = ["〇", "一", "二", "三", "四", "五", "六", "七", "八", "九"];
const 农历基准时间 = new Date(1900, 0, 31, 12);
const 八卦数到编码 = {
    1: "111",
    2: "011",
    3: "101",
    4: "001",
    5: "110",
    6: "010",
    7: "100",
    8: "000"
};
const 八卦数到名称 = {
    1: "乾",
    2: "兑",
    3: "离",
    4: "震",
    5: "巽",
    6: "坎",
    7: "艮",
    8: "坤"
};
const 动爻数到值 = {
    1: "5",
    2: "4",
    3: "3",
    4: "2",
    5: "1",
    6: "0"
};
const 动爻数到名称 = {
    1: "初爻",
    2: "二爻",
    3: "三爻",
    4: "四爻",
    5: "五爻",
    6: "上爻"
};
const 卦例存储键 = "meihua_saved_cases";
const 最大卦例数 = 100;
const 卦例每页数 = 5;
const 农历数据 = [
    0x04bd8, 0x04ae0, 0x0a570, 0x054d5, 0x0d260, 0x0d950, 0x16554, 0x056a0, 0x09ad0, 0x055d2,
    0x04ae0, 0x0a5b6, 0x0a4d0, 0x0d250, 0x1d255, 0x0b540, 0x0d6a0, 0x0ada2, 0x095b0, 0x14977,
    0x04970, 0x0a4b0, 0x0b4b5, 0x06a50, 0x06d40, 0x1ab54, 0x02b60, 0x09570, 0x052f2, 0x04970,
    0x06566, 0x0d4a0, 0x0ea50, 0x06e95, 0x05ad0, 0x02b60, 0x186e3, 0x092e0, 0x1c8d7, 0x0c950,
    0x0d4a0, 0x1d8a6, 0x0b550, 0x056a0, 0x1a5b4, 0x025d0, 0x092d0, 0x0d2b2, 0x0a950, 0x0b557,
    0x06ca0, 0x0b550, 0x15355, 0x04da0, 0x0a5d0, 0x14573, 0x052d0, 0x0a9a8, 0x0e950, 0x06aa0,
    0x0aea6, 0x0ab50, 0x04b60, 0x0aae4, 0x0a570, 0x05260, 0x0f263, 0x0d950, 0x05b57, 0x056a0,
    0x096d0, 0x04dd5, 0x04ad0, 0x0a4d0, 0x0d4d4, 0x0d250, 0x0d558, 0x0b540, 0x0b5a0, 0x195a6,
    0x095b0, 0x049b0, 0x0a974, 0x0a4b0, 0x0b27a, 0x06a50, 0x06d40, 0x0af46, 0x0ab60, 0x09570,
    0x04af5, 0x04970, 0x064b0, 0x074a3, 0x0ea50, 0x06b58, 0x05ac0, 0x0ab60, 0x096d5, 0x092e0,
    0x0c960, 0x0d954, 0x0d4a0, 0x0da50, 0x07552, 0x056a0, 0x0abb7, 0x025d0, 0x092d0, 0x0cab5,
    0x0a950, 0x0b4a0, 0x0baa4, 0x0ad50, 0x055d9, 0x04ba0, 0x0a5b0, 0x15176, 0x052b0, 0x0a930,
    0x07954, 0x06aa0, 0x0ad50, 0x05b52, 0x04b60, 0x0a6e6, 0x0a4e0, 0x0d260, 0x0ea65, 0x0d530,
    0x05aa0, 0x076a3, 0x096d0, 0x04bd7, 0x04ad0, 0x0a4d0, 0x1d0b6, 0x0d250, 0x0d520, 0x0dd45,
    0x0b5a0, 0x056d0, 0x055b2, 0x049b0, 0x0a577, 0x0a4b0, 0x0aa50, 0x1b255, 0x06d20, 0x0ada0
];
let 农历更新标记 = null;
let 农历格式化器 = null;
let 农历Intl可用 = null;
let 当前卦例快照 = null;
let 当前卦例页码 = 1;
let 保存反馈计时器 = null;

function 补零(数字){
    return String(数字).padStart(2, "0");
}

function 获取时辰序号(时间){
    return Math.floor((时间.getHours() + 1) / 2) % 12;
}

function 获取时辰(时间){
    return 时辰名称[获取时辰序号(时间)] + "时";
}

function 获取公历文本(时间){
    let 星期 = ["日", "一", "二", "三", "四", "五", "六"];
    return `${时间.getFullYear()}-${补零(时间.getMonth() + 1)}-${补零(时间.getDate())} ${补零(时间.getHours())}:${补零(时间.getMinutes())}:${补零(时间.getSeconds())} 星期${星期[时间.getDay()]}`;
}

function 取余数(数字, 除数){
    const 余数 = 数字 % 除数;
    return 余数 === 0 ? 除数 : 余数;
}

function 支持Intl农历(){
    if(农历Intl可用 !== null){
        return 农历Intl可用;
    }

    try{
        if(!农历格式化器){
            农历格式化器 = new Intl.DateTimeFormat("zh-Hans-CN-u-ca-chinese", {
                year: "numeric",
                month: "long",
                day: "numeric"
            });
        }
        农历格式化器.format(new Date());
        农历Intl可用 = true;
    } catch (error){
        农历格式化器 = null;
        农历Intl可用 = false;
    }

    return 农历Intl可用;
}

function 闰月(年份){
    return 农历数据[年份 - 1900] & 0xf;
}

function 闰月天数(年份){
    if(闰月(年份)){
        return (农历数据[年份 - 1900] & 0x10000) ? 30 : 29;
    }
    return 0;
}

function 月天数(年份, 月份){
    return (农历数据[年份 - 1900] & (0x10000 >> 月份)) ? 30 : 29;
}

function 农历年天数(年份){
    let 总天数 = 348;
    for(let 标记 = 0x8000; 标记 > 0x8; 标记 >>= 1){
        if(农历数据[年份 - 1900] & 标记){
            总天数 += 1;
        }
    }
    return 总天数 + 闰月天数(年份);
}

function 转农历(时间){
    const 当前日期 = new Date(时间.getFullYear(), 时间.getMonth(), 时间.getDate(), 12);
    let 偏移天数 = Math.floor((当前日期 - 农历基准时间) / 86400000);

    if(偏移天数 < 0){
        return null;
    }

    let 年份 = 1900;
    let 当年天数 = 0;
    while(年份 < 2050 && 偏移天数 > 0){
        当年天数 = 农历年天数(年份);
        if(偏移天数 < 当年天数){
            break;
        }
        偏移天数 -= 当年天数;
        年份 += 1;
    }

    if(年份 >= 2050){
        return null;
    }

    let 闰月月份 = 闰月(年份);
    let 是否闰月 = false;
    let 月份 = 1;
    let 当月天数 = 0;

    while(月份 < 13 && 偏移天数 > 0){
        if(闰月月份 > 0 && 月份 === (闰月月份 + 1) && !是否闰月){
            月份 -= 1;
            是否闰月 = true;
            当月天数 = 闰月天数(年份);
        } else {
            当月天数 = 月天数(年份, 月份);
        }

        偏移天数 -= 当月天数;

        if(是否闰月 && 月份 === (闰月月份 + 1)){
            是否闰月 = false;
        }
        月份 += 1;
    }

    if(偏移天数 === 0 && 闰月月份 > 0 && 月份 === 闰月月份 + 1){
        if(是否闰月){
            是否闰月 = false;
        } else {
            是否闰月 = true;
            月份 -= 1;
        }
    }

    if(偏移天数 < 0){
        偏移天数 += 当月天数;
        月份 -= 1;
    }

    return {
        年份,
        月份,
        日期: 偏移天数 + 1,
        是否闰月
    };
}

function 获取干支年(年份){
    return 天干[(年份 - 4) % 10] + 地支[(年份 - 4) % 12];
}

function 获取年支序号(年份){
    return ((年份 - 4) % 12) + 1;
}

function 获取农历日名(日){
    if(日 === 10) return "初十";
    if(日 === 20) return "二十";
    if(日 === 30) return "三十";

    const 前缀 = ["初", "十", "廿"];
    return 前缀[Math.floor((日 - 1) / 10)] + 农历数字[(日 - 1) % 10];
}

function 获取中文年份(年份){
    return String(年份).split("").map((数字) => 中文数字[parseInt(数字, 10)]).join("");
}

function 转义HTML(文本){
    return String(文本)
        .replaceAll("&", "&amp;")
        .replaceAll("<", "&lt;")
        .replaceAll(">", "&gt;")
        .replaceAll('"', "&quot;")
        .replaceAll("'", "&#39;");
}

function 规范农历Intl文本(文本){
    let 结果 = 文本;

    结果 = 结果.replace(/(\d{4})年/g, (匹配, 年份) => `${获取中文年份(年份)}年`);
    结果 = 结果.replace(/闰(\d{1,2})月/g, (匹配, 月份) => `闰${农历月份名称[parseInt(月份, 10) - 1]}月`);
    结果 = 结果.replace(/(\d{1,2})月/g, (匹配, 月份) => `${农历月份名称[parseInt(月份, 10) - 1]}月`);
    结果 = 结果.replace(/(\d{1,2})(?=日|号)/g, (匹配, 日期) => 获取农历日名(parseInt(日期, 10)));
    结果 = 结果.replace(/(\d{1,2})(?=\s*$)/g, (匹配, 日期) => 获取农历日名(parseInt(日期, 10)));

    return 结果;
}

function 获取农历文本Intl(时间){
    return `${规范农历Intl文本(农历格式化器.format(时间))} ${获取时辰(时间)}`;
}

function 获取农历文本本地(时间){
    const 农历日期 = 转农历(时间);
    if(!农历日期){
        return "当前日期超出本地农历支持范围";
    }

    return `${获取干支年(农历日期.年份)}年${农历日期.是否闰月 ? "闰" : ""}${农历月份名称[农历日期.月份 - 1]}月${获取农历日名(农历日期.日期)} ${获取时辰(时间)}`;
}

function 获取农历文本(时间){
    if(支持Intl农历()){
        return 获取农历文本Intl(时间);
    }
    return 获取农历文本本地(时间);
}

function 获取农历日期文本(农历日期){
    return `${获取干支年(农历日期.年份)}年${农历日期.是否闰月 ? "闰" : ""}${农历月份名称[农历日期.月份 - 1]}月${获取农历日名(农历日期.日期)}`;
}

function 获取已保存卦例(){
    try{
        const 原始数据 = window.localStorage.getItem(卦例存储键);
        if(!原始数据){
            return [];
        }
        const 卦例列表 = JSON.parse(原始数据);
        return Array.isArray(卦例列表) ? 卦例列表 : [];
    } catch (error){
        return [];
    }
}

function 写入已保存卦例(卦例列表){
    try{
        window.localStorage.setItem(卦例存储键, JSON.stringify(卦例列表.slice(0, 最大卦例数)));
        return true;
    } catch (error){
        return false;
    }
}

function 获取当前摘要(){
    const 上卦文本 = document.querySelector("#main_up").selectedOptions[0].textContent.trim();
    const 下卦文本 = document.querySelector("#main_down").selectedOptions[0].textContent.trim();
    const 动爻文本 = document.querySelector("#change").selectedOptions[0].textContent.trim();
    return `${上卦文本} / ${下卦文本} / ${动爻文本}`;
}

function 更新当前卦例快照(){
    const 说明框 = document.querySelector("#divination-detail");
    当前卦例快照 = {
        id: `${Date.now()}-${Math.random().toString(16).slice(2, 8)}`,
        createdAt: new Date().toISOString(),
        mode: 获取起卦模式(),
        mainUp: document.querySelector("#main_up").value,
        mainDown: document.querySelector("#main_down").value,
        change: document.querySelector("#change").value,
        eventType: document.querySelector("#thing-type").value,
        eventLabel: document.querySelector("#thing-type").selectedOptions[0].textContent.trim(),
        solarText: document.querySelector("#solar-time").textContent,
        lunarText: document.querySelector("#lunar-time").textContent,
        detailHtml: 说明框.hasAttribute("hidden") ? "" : 说明框.innerHTML,
        summary: 获取当前摘要()
    };
}

function 切换卦例页码(页码){
    当前卦例页码 = 页码;
    renderSavedCases();
}

function renderSavedCases(){
    const 列表容器 = document.querySelector("#saved-cases-list");
    if(!列表容器){
        return;
    }

    const 卦例列表 = 获取已保存卦例();
    if(卦例列表.length === 0){
        当前卦例页码 = 1;
        列表容器.innerHTML = '<div class="saved-case-empty">暂无已保存的卦例。</div>';
        return;
    }

    const 总页数 = Math.max(1, Math.ceil(卦例列表.length / 卦例每页数));
    if(当前卦例页码 > 总页数){
        当前卦例页码 = 总页数;
    }
    if(当前卦例页码 < 1){
        当前卦例页码 = 1;
    }

    const 起始索引 = (当前卦例页码 - 1) * 卦例每页数;
    const 当前页卦例 = 卦例列表.slice(起始索引, 起始索引 + 卦例每页数);

    const 列表HTML = 当前页卦例.map((卦例) => {
        const 保存时间 = new Date(卦例.createdAt).toLocaleString("zh-CN", { hour12: false });
        const 模式名称 = 卦例.mode === "time" ? "时间起卦" : (卦例.mode === "random" ? "随机起卦" : "手动起卦");
        const 时间文本 = 卦例.solarText ? ` | ${转义HTML(卦例.solarText)}` : "";
        const 事件文本 = 卦例.eventLabel && 卦例.eventLabel !== "无" ? ` | 事件：${转义HTML(卦例.eventLabel)}` : "";

        return `
            <div class="saved-case-item">
                <div class="saved-case-line">
                    <div class="saved-case-text"><strong>${转义HTML(卦例.summary)}</strong><span class="saved-case-meta"> | ${转义HTML(模式名称)} | 保存于 ${转义HTML(保存时间)}${时间文本}${事件文本}</span></div>
                    <div class="saved-case-actions">
                        <button type="button" class="btn btn-outline-dark btn-sm" onclick="loadSavedCase('${卦例.id}')">读取</button>
                        <button type="button" class="btn btn-outline-danger btn-sm" onclick="deleteSavedCase('${卦例.id}')">删除</button>
                    </div>
                </div>
            </div>
        `;
    }).join("");

    const 分页HTML = 总页数 > 1 ? `
        <div class="saved-cases-pagination">
            <button type="button" class="btn btn-outline-dark btn-sm" onclick="切换卦例页码(${当前卦例页码 - 1})" ${当前卦例页码 === 1 ? "disabled" : ""}>上一页</button>
            <span>第 ${当前卦例页码} / ${总页数} 页</span>
            <button type="button" class="btn btn-outline-dark btn-sm" onclick="切换卦例页码(${当前卦例页码 + 1})" ${当前卦例页码 === 总页数 ? "disabled" : ""}>下一页</button>
        </div>
    ` : "";

    列表容器.innerHTML = 列表HTML + 分页HTML;
}

function 更新时间显示(){
    const 公历显示 = document.querySelector("#solar-time");
    const 农历显示 = document.querySelector("#lunar-time");
    if(!(公历显示 && 农历显示)){
        return;
    }

    const 当前时间 = new Date();
    公历显示.textContent = 获取公历文本(当前时间);

    const 当前农历标记 = `${当前时间.getFullYear()}-${当前时间.getMonth()}-${当前时间.getDate()}-${获取时辰序号(当前时间)}`;
    if(当前农历标记 !== 农历更新标记){
        农历显示.textContent = 获取农历文本(当前时间);
        农历更新标记 = 当前农历标记;
    }
}

function 初始化时间显示(){
    更新时间显示();
    window.setInterval(更新时间显示, 1000);
}

function 获取起卦模式(){
    const 已选模式 = document.querySelector('input[name="divination-mode"]:checked');
    return 已选模式 ? 已选模式.value : "manual";
}

function 更新起卦输入状态(){
    const 手动模式 = 获取起卦模式() === "manual";
    const 上卦块 = document.querySelector("#main-up-block");
    const 下卦块 = document.querySelector("#main-down-block");
    const 动爻块 = document.querySelector("#change-block");

    if(手动模式){
        上卦块.removeAttribute("hidden");
        下卦块.removeAttribute("hidden");
        动爻块.removeAttribute("hidden");
    } else {
        上卦块.setAttribute("hidden", "hidden");
        下卦块.setAttribute("hidden", "hidden");
        动爻块.setAttribute("hidden", "hidden");
    }
}

function 设置起卦选择(上卦数, 下卦数, 动爻数){
    document.querySelector("#main_up").value = 八卦数到编码[上卦数];
    document.querySelector("#main_down").value = 八卦数到编码[下卦数];
    document.querySelector("#change").value = 动爻数到值[动爻数];
}

function 重置保存按钮(){
    const 保存按钮 = document.querySelector("#save-case");
    if(!保存按钮){
        return;
    }
    保存按钮.classList.remove("btn-success");
    保存按钮.classList.add("btn-outline-dark");
    保存按钮.innerHTML = "<i class='bi bi-bookmark-plus me-2'></i>保存卦例";
}

function 显示保存成功反馈(){
    const 保存按钮 = document.querySelector("#save-case");
    if(!保存按钮){
        return;
    }

    if(保存反馈计时器){
        window.clearTimeout(保存反馈计时器);
    }

    保存按钮.classList.remove("btn-outline-dark");
    保存按钮.classList.add("btn-success");
    保存按钮.innerHTML = "<i class='bi bi-check2 me-2'></i>已保存";

    保存反馈计时器 = window.setTimeout(() => {
        重置保存按钮();
        保存反馈计时器 = null;
    }, 1600);
}

function saveCurrentCase(){
    if(!当前卦例快照){
        window.alert("请先完成一次起卦。");
        return;
    }

    const 卦例列表 = 获取已保存卦例();
    卦例列表.unshift({
        ...当前卦例快照,
        id: `${Date.now()}-${Math.random().toString(16).slice(2, 8)}`,
        createdAt: new Date().toISOString()
    });
    if(!写入已保存卦例(卦例列表)){
        window.alert("当前浏览器无法写入本地卦例。");
        return;
    }
    当前卦例页码 = 1;
    renderSavedCases();
    显示保存成功反馈();
}

function loadSavedCase(id){
    const 卦例 = 获取已保存卦例().find((项目) => 项目.id === id);
    if(!卦例){
        return;
    }

    const 模式按钮 = document.querySelector(`input[name="divination-mode"][value="${卦例.mode}"]`);
    if(模式按钮){
        模式按钮.checked = true;
    }

    document.querySelector("#main_up").value = 卦例.mainUp;
    document.querySelector("#main_down").value = 卦例.mainDown;
    document.querySelector("#change").value = 卦例.change;
    document.querySelector("#thing-type").value = 卦例.eventType;

    更新起卦输入状态();
    show();
    显示起卦说明(卦例.detailHtml || "");
    当前卦例快照 = 卦例;
}

function deleteSavedCase(id){
    const 卦例列表 = 获取已保存卦例().filter((项目) => 项目.id !== id);
    if(!写入已保存卦例(卦例列表)){
        window.alert("当前浏览器无法写入本地卦例。");
        return;
    }
    renderSavedCases();
}

function 显示起卦说明(内容){
    const 说明框 = document.querySelector("#divination-detail");
    if(!说明框){
        return;
    }
    if(!内容){
        说明框.setAttribute("hidden", "hidden");
        说明框.innerHTML = "";
        return;
    }
    说明框.innerHTML = 内容;
    说明框.removeAttribute("hidden");
}

function 时间起卦(){
    const 当前时间 = new Date();
    const 农历日期 = 转农历(当前时间);
    if(!农历日期){
        window.alert("当前日期超出时间起卦支持范围");
        return false;
    }

    const 年数 = 获取年支序号(农历日期.年份);
    const 月数 = 农历日期.月份;
    const 日数 = 农历日期.日期;
    const 时数 = 获取时辰序号(当前时间) + 1;
    const 年月日总和 = 年数 + 月数 + 日数;
    const 年月日时总和 = 年月日总和 + 时数;
    const 上卦数 = 取余数(年月日总和, 8);
    const 下卦数 = 取余数(年月日时总和, 8);
    const 动爻数 = 取余数(年月日时总和, 6);

    设置起卦选择(
        上卦数,
        下卦数,
        动爻数
    );
    显示起卦说明(`
        <p><strong>时间起卦</strong></p>
        <p>农历时间：${获取农历日期文本(农历日期)} ${获取时辰(当前时间)}</p>
        <p>取数：年数 ${年数}、月数 ${月数}、日数 ${日数}、时数 ${时数}</p>
        <p>上卦 = （年 + 月 + 日）÷ 8 = （${年数} + ${月数} + ${日数}）÷ 8，余 ${上卦数}，为${八卦数到名称[上卦数]}卦。</p>
        <p>下卦 = （年 + 月 + 日 + 时）÷ 8 = （${年数} + ${月数} + ${日数} + ${时数}）÷ 8，余 ${下卦数}，为${八卦数到名称[下卦数]}卦。</p>
        <p>动爻 = （年 + 月 + 日 + 时）÷ 6 = （${年数} + ${月数} + ${日数} + ${时数}）÷ 6，余 ${动爻数}，为${动爻数到名称[动爻数]}。</p>
    `);
    return true;
}

function 随机起卦(){
    const 上卦数 = Math.floor(Math.random() * 8) + 1;
    const 下卦数 = Math.floor(Math.random() * 8) + 1;
    const 动爻数 = Math.floor(Math.random() * 6) + 1;

    设置起卦选择(上卦数, 下卦数, 动爻数);
    显示起卦说明(`
        <p><strong>随机起卦</strong></p>
        <p>随机数结果：上卦数 ${上卦数}（${八卦数到名称[上卦数]}卦），下卦数 ${下卦数}（${八卦数到名称[下卦数]}卦），动爻数 ${动爻数}（${动爻数到名称[动爻数]}）。</p>
    `);
}

function 排盘(){
    const 起卦模式 = 获取起卦模式();

    if(起卦模式 === "time"){
        if(!时间起卦()){
            return;
        }
    } else if(起卦模式 === "random"){
        随机起卦();
    } else {
        显示起卦说明("");
    }

    show();
}

function 初始化起卦模式(){
    const 模式选项 = document.querySelectorAll('input[name="divination-mode"]');
    for(const 选项 of 模式选项){
        选项.addEventListener("change", () => {
            更新起卦输入状态();
            显示起卦说明("");
        });
    }
    更新起卦输入状态();
    显示起卦说明("");
}

function main(){
    初始化时间显示();
    初始化起卦模式();
    renderSavedCases();

    let 主卦上卦 = getUrlParam("t") || null;
    let 主卦下卦 = getUrlParam("b") || null;
    let 动爻 = getUrlParam("c") || null;
    let 事件 = getUrlParam("h") || null;
    console.log(主卦上卦, 主卦下卦, 动爻, 事件);

    if(!(主卦上卦 && 主卦下卦 || 动爻)){
        return 0;
    }

    动爻 = parseInt(动爻);
    事件 = parseInt(事件);

    /*
    如果直接在声明变量时候转换，当 c = 0 时会导致 c = null，因为：
    >> "0" || null
    <  "0"
    >> 0 || null
    <  null 
    */

    document.querySelector('#main_up').value = 主卦上卦;
    document.querySelector('#main_down').value = 主卦下卦;
    document.querySelector('#change').value = 动爻;
    document.querySelector('#thing-type').value = 事件;
    show();
}

function show(){
    document.querySelector("#result").removeAttribute("hidden");

    document.querySelector("#save-case").removeAttribute("hidden");
    重置保存按钮();

    //移除链接显示
    const urlDisplay = document.querySelector(".urlDisplay");
    if(urlDisplay) urlDisplay.remove();
    
    let 五行 = {
        "111": "金",
        "011": "金",
        "000": "土",
        "100": "土",
        "001": "木",
        "110": "木",
        "010": "水",
        "101": "火"
    };
    let 主卦上卦 = document.querySelector('#main_up').value;
    let 主卦下卦 = document.querySelector('#main_down').value;
    let 动爻 = parseInt(document.querySelector('#change').value);
    let 事件 = parseInt(document.querySelector('#thing-type').value);

    window.history.replaceState(null, null, `?t=${主卦上卦}&b=${主卦下卦}&c=${动爻}&h=${事件}`);

    let 体卦位置 = 动爻 < 3 ? "下" : "上";
    let 用卦位置 = 动爻 < 3 ? "上" : "下";

    let 主卦 = 主卦上卦 + 主卦下卦;
    let 互卦上卦 = 主卦[1] + 主卦[2] + 主卦[3];
    let 互卦下卦 = 主卦[2] + 主卦[3] + 主卦[4];

    let 变卦上卦 = 主卦上卦;
    let 变卦下卦 = 主卦下卦;
    let 变卦 = 变卦上卦 + 变卦下卦;
    //将 变卦 变为数组
    let 变卦数组 = [];
    for(let i = 0; i < 变卦.length; i++){
        变卦数组.push(变卦[i]);
    }


    if(变卦[动爻] == '0') 变卦数组.splice(动爻, 1, '1');
    else 变卦数组.splice(动爻, 1, '0');

    变卦 = 变卦数组.join('');
    变卦上卦 = 变卦.substr(0, 3);
    变卦下卦 = 变卦.substr(3, 3);

    let 八卦 = {
        "111": "☰",
        "011": "☱",
        "101": "☲",
        "001": "☳",
        "110": "☴",
        "010": "☵",
        "100": "☶",
        "000": "☷"
    };
    let 卦名 = {
        "111": "乾",
        "011": "兑",
        "101": "离",
        "001": "震",
        "110": "巽",
        "010": "坎",
        "100": "艮",
        "000": "坤"
    };
    let 五行颜色类 = {
        "木": "wx-wood",
        "火": "wx-fire",
        "土": "wx-earth",
        "金": "wx-metal",
        "水": "wx-water"
    };

    const 上卦象 = document.querySelector('tr.up');
    const 下卦象 = document.querySelector('tr.down');

    上卦象.querySelector("#main_hex").innerHTML = 卦象提示(主卦上卦, 八卦, 卦名, 五行, 五行颜色类);
    上卦象.querySelector("#mutual_hex").innerHTML = 卦象提示(互卦上卦, 八卦, 卦名, 五行, 五行颜色类);
    上卦象.querySelector("#changed_hex").innerHTML = 卦象提示(变卦上卦, 八卦, 卦名, 五行, 五行颜色类);

    下卦象.querySelector("#main_hex").innerHTML = 卦象提示(主卦下卦, 八卦, 卦名, 五行, 五行颜色类);
    下卦象.querySelector("#mutual_hex").innerHTML = 卦象提示(互卦下卦, 八卦, 卦名, 五行, 五行颜色类);
    下卦象.querySelector("#changed_hex").innerHTML = 卦象提示(变卦下卦, 八卦, 卦名, 五行, 五行颜色类);

    if(体卦位置 == "下"){
        上卦象.querySelector("#type").innerHTML = '用';
        下卦象.querySelector("#type").innerHTML = '体';
    } else {
        上卦象.querySelector("#type").innerHTML = '体';
        下卦象.querySelector("#type").innerHTML = '用';
    }

    let thingTypeExplain = document.querySelector("#thing-type-explain");


    //将 #万物类占 内的子元素全部隐藏，从 1 开始是因为 0 是标题“八卦万物类占”，不需要隐藏。
    let explain = document.querySelector("#万物类占");
    explain.removeAttribute("hidden");
    for(let i = 1; i < explain.children.length; i++){
        explain.children[i].setAttribute("hidden", "hidden");
    }

    if(事件 != 0){
        console.log("事件：", 事件);
        thingTypeExplain.removeAttribute("hidden");
        let 事件合集 = document.querySelector(`.thing-type-explain-item`);
        for(let i = 1; i <= 18; i++){
            事件合集.children[i].setAttribute("hidden", "hidden");
            if(事件 == i){
                事件合集.children[i].removeAttribute("hidden");
            }
        }

    } else {
        thingTypeExplain.setAttribute("hidden", "hidden");
    }

    卦象参考显示(主卦上卦);
    卦象参考显示(主卦下卦);
    卦象参考显示(互卦上卦);
    卦象参考显示(互卦下卦);
    卦象参考显示(变卦上卦);
    卦象参考显示(变卦下卦);

    更新当前卦例快照();


}

function 卦象参考显示(卦){
    document.querySelector(`#g${卦}`).removeAttribute("hidden");
}

main();
