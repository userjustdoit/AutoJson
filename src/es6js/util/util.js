/**
 * @author userjustdoit
 * @des
 **/

exports.formatDateTime=function(timeValue) {
    var date = new Date(timeValue);
    var y = date.getFullYear();
    var m = date.getMonth() + 1;
    m = m < 10 ? ('0' + m) : m;
    var d = date.getDate();
    d = d < 10 ? ('0' + d) : d;
    var h = date.getHours();
    h = h < 10 ? ('0' + h) : h;
    var minute = date.getMinutes();
    var second = date.getSeconds();
    minute = minute < 10 ? ('0' + minute) : minute;
    second = second < 10 ? ('0' + second) : second;
    return y + '-' + m + '-' + d + ' ' + h + ':' + minute + ':' + second;
};

exports.log=function(obj,isstr) {
    console.log(isstr?JSON.stringify(obj):obj);
    document.write(isstr?JSON.stringify(obj):obj);
    document.write("<br>");
};