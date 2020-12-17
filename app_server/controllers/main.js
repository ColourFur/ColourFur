const index = (req, res) => {
    res.render('index', {title: '茸彩 - 委托中间平台'});
};



//写完模块别忘导出
module.exports = {
    index
}