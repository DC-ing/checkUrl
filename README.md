# 校验URL

1、拿到代码；

2、在项目根目录运行命令：npm install；

3、运行命令

```
可更改浏览器，仅支持chrome、edge、firefox、electron
# 删除遗留测试结果
m -rf mochawesome-report
# 执行测试
./node_modules/cypress/bin/cypress run --browser chrome --headless --spec **/*.spec.js --reporter mochawesome --reporter-options reportDir="mochawesome-report",overwrite=false,html=false,json=true

# 合并测试执行结果
./node_modules/mochawesome-merge/bin/mochawesome-merge.js ${project_report_path}/*.json > ${project_report_path}/reports.json
# 生成测试报告
./node_modules/mochawesome-report-generator/bin/cli.js -i ${project_report_path}/reports.json -o ${report_path} -f ${report_name}
```

4、url参数化文件编写规则
- 更改cypress/fixtures文件夹下的checkUrl.json文件
- 每个URL校验页面均填写4个参数：visitUrl、expectUrl、htmlTitle、htmlText
- 参数htmlTitle、htmlText 为可选，填写 "" 默认不校验
