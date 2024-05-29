

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

function main(){
    let 主卦上卦 = getUrlParam("t") || null;
    let 主卦下卦 = getUrlParam("b") || null;
    let 动爻 = getUrlParam("c") || null;
    console.log(主卦上卦, 主卦下卦, 动爻);

    if(!(主卦上卦 && 主卦下卦 || 动爻)){
        return 0;
    }

    动爻 = parseInt(动爻);

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
    show();
}

function show(){
    document.querySelector("#result").removeAttribute("hidden");

    document.querySelector("#share").removeAttribute("hidden"); //显示分享按钮

    //重置分享按钮
    document.querySelector("#share").classList.remove("btn-outline-success");  
    document.querySelector("#share").classList.add("btn-outline-dark");
    document.querySelector("#share").innerHTML = "<i class='bi bi-link-45deg me-2'></i>分享本卦";

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

    window.history.replaceState(null, null, `?t=${主卦上卦}&b=${主卦下卦}&c=${动爻}`);

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

    const 上卦象 = document.querySelector('tr.up');
    const 下卦象 = document.querySelector('tr.down');

    上卦象.querySelector("#main_hex").innerHTML = '<span class="hex">' + 八卦[主卦上卦] + '&nbsp;<small>' + 五行[主卦上卦] + '</small></span>';
    上卦象.querySelector("#mutual_hex").innerHTML = '<span class="hex">' + 八卦[互卦上卦] + '&nbsp;<small>' + 五行[互卦上卦] + '</small></span>';
    上卦象.querySelector("#changed_hex").innerHTML = '<span class="hex">' + 八卦[变卦上卦] + '&nbsp;<small>' + 五行[变卦上卦] + '</small></span>';

    下卦象.querySelector("#main_hex").innerHTML = '<span class="hex">' + 八卦[主卦下卦] + '&nbsp;<small>' + 五行[主卦下卦] + '</small></span>';
    下卦象.querySelector("#mutual_hex").innerHTML = '<span class="hex">' + 八卦[互卦下卦] + '&nbsp;<small>' + 五行[互卦下卦] + '</small></span>';
    下卦象.querySelector("#changed_hex").innerHTML = '<span class="hex">' + 八卦[变卦下卦] + '&nbsp;<small>' + 五行[变卦下卦] + '</small></span>';

    const 主卦生克显示 = document.querySelector("#main_live");
    const 互卦生克显示 = document.querySelector("#mutual_live");
    const 变卦生克显示 = document.querySelector("#changed_live");
    
    let 主卦生克 = 吉凶(生克(五行[主卦上卦], 五行[主卦下卦]).replace(体卦位置, "体").replace(用卦位置, "用"));
    let 互卦生克 = "";
    let 变卦生克 = 吉凶(生克(五行[变卦上卦], 五行[变卦下卦]).replace(体卦位置, "体").replace(用卦位置, "用")).replace("用", "变");

    if(体卦位置 == "下"){
        上卦象.querySelector("#type").innerHTML = '用';
        下卦象.querySelector("#type").innerHTML = '体';
        if(生克(五行[主卦下卦], 五行[互卦上卦]).replace("上", "体").replace("下", "互") == "互克体") {
            互卦生克 = "互克体";
        }
        互卦生克 = 吉凶(生克(五行[主卦下卦], 五行[互卦上卦]).replace("上", "体").replace("下", "互")) + '<br>' + 吉凶(生克(五行[主卦下卦], 五行[互卦下卦]).replace("上", "体").replace("下", "互"));

    } else {
        上卦象.querySelector("#type").innerHTML = '体';
        下卦象.querySelector("#type").innerHTML = '用';
        互卦生克 = 吉凶(生克(五行[主卦上卦], 五行[互卦上卦]).replace("上", "体").replace("下", "互")) + '<br>' + 吉凶(生克(五行[主卦上卦], 五行[互卦下卦]).replace("上", "体").replace("下", "互"));
    }


    主卦生克显示.innerHTML = 主卦生克;
    互卦生克显示.innerHTML = 互卦生克;
    变卦生克显示.innerHTML = 变卦生克;

    let thingTypeExplain = document.querySelector("#thing-type-explain");
    thingTypeExplain.removeAttribute("hidden");

    //将 #万物类占 内的子元素全部隐藏，从 1 开始是因为 0 是标题“八卦万物类占”，不需要隐藏。
    let explain = document.querySelector("#万物类占");
    explain.removeAttribute("hidden");
    for(let i = 1; i < explain.children.length; i++){
        explain.children[i].setAttribute("hidden", "hidden");
    }

    卦象参考显示(主卦上卦);
    卦象参考显示(主卦下卦);
    卦象参考显示(互卦上卦);
    卦象参考显示(互卦下卦);
    卦象参考显示(变卦上卦);
    卦象参考显示(变卦下卦);


}

function 卦象参考显示(卦){
    document.querySelector(`#g${卦}`).removeAttribute("hidden");
}

function share(){
    const url = window.location.href;
    const input = document.createElement('input');
    const button = document.querySelector("#share");
    input.value = url;
    document.body.appendChild(input);
    input.select();
    document.execCommand('copy');
    document.body.removeChild(input);
    // btn-outline-success
    button.classList.remove("btn-outline-dark");
    button.classList.add("btn-outline-success");
    button.innerHTML = "<i class='me-2 bi bi-check2'></i>已复制";
    // 新建元素显示链接
    if(!document.querySelector(".urlDisplay")){
        const urlDisplay = document.createElement('p');
        urlDisplay.className = "urlDisplay p-3 text-light center mt-4";
        urlDisplay.innerHTML = `如复制失败，可手动复制本卦链接：<br><u>${url}</u>`;
        document.querySelector("#share").parentElement.appendChild(urlDisplay);
    }
}

main();