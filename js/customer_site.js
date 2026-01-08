const CUSTOMER_SITES = {
    qiqi: {
        api: 'https://www.example.com/api.php/provide/vod',
        name: '无可用视频源',
    }
};

// 调用全局方法合并
if (window.extendAPISites) {
    window.extendAPISites(CUSTOMER_SITES);
} else {
    console.error("错误：请先加载 config.js！");
}
