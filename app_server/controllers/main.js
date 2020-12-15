const index = (req, res) => {
    res.render('index', {title: 'Express'});
};



//写完模块别忘导出
module.exports = {
    index
}