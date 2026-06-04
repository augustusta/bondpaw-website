# 伴爪 BondPaw 官网

## 本地预览

直接双击 `index.html` 可以预览首页。此模式下表单会在浏览器本地生成预约摘要，接口不可用。

## 启动正式本地服务

```bash
npm start
```

打开：

```text
http://localhost:3000
```

## API

- `GET /api/config` 读取 `data/site-config.json`
- `POST /api/config` 写入 `data/site-config.json`
- `POST /api/wecom-lead` 接收预约档案 JSON

## 企业微信

配置环境变量后启动：

```bash
set WECOM_BOT_WEBHOOK=https://qyapi.weixin.qq.com/cgi-bin/webhook/send?key=你的key
npm start
```

未配置 Webhook 时，接口仍会返回成功，前端不会报错。

## 交付结构

```text
package.json
server.js
index.html
admin.html
assets/
data/
api/
```
