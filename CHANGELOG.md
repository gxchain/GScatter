## v0.0.7
1.去掉build注释以通过chrome插件市场审核

## v0.0.6
1.更新i18n
2.修复合约方法名称不能为12个字符长度的bug

## v0.0.5
1.统一gxclient报错归类到 UN_DEF_ERROR: 433，该code暂时用于存放未归类错误，如果之后需要单独处理，会从这里面提取出来。
2.gxc添加getObjects方法

## v0.0.4
developer: lanhaoxiang@gxb.io liuzongyuan@gxb.io

1.新增账户注册功能

2.新增点击身份跳转到区块链浏览器

3.优化授权选择身份交互

4.优化setup流程

5.开启交易授权功能，用户授权操作后，不必再确认

6.未定义错误统一处理，错误码为433

7.修复一系列bug:

​	7.1 gxc api 多个同时调用导致websocket 连接问题

​	7.2 gxc api每次调用会新开websocket

​	7.3 scatter首次setup后，第二次仍然会提示setup

​	7.4 scatter身份授权下若有子授权，删除报错

​	...
