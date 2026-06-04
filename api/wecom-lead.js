function pick(data, keys, fallback = "-") {
  for (const key of keys) {
    if (data && data[key] !== undefined && data[key] !== null && String(data[key]).trim() !== "") {
      return String(data[key]).trim();
    }
  }
  return fallback;
}

function formatLead(data = {}) {
  return [
    "伴爪 BondPaw 预约档案",
    `提交时间：${pick(data, ["createdAt", "submittedAt"])}`,
    `服务类型：${pick(data, ["serviceType"])}`,
    `主人电话：${pick(data, ["ownerPhone", "phone"])}`,
    `家庭地址：${pick(data, ["address"])}`,
    `预约时间：${pick(data, ["expectedDate"])} ${pick(data, ["expectedTime"], "")}`,
    `宝贝信息：${pick(data, ["petName"])} / ${pick(data, ["petType"])} / ${pick(data, ["petBreed"])} / ${pick(data, ["petAge"])}岁 / ${pick(data, ["petWeight"])}kg`,
    `行为风险：${pick(data, ["behavior"])} ${pick(data, ["behaviorDetail"], "")}`,
    `健康情况：${pick(data, ["health"])}；疫苗 ${pick(data, ["vaccine"])}；驱虫 ${pick(data, ["deworming"])}；特殊医嘱 ${pick(data, ["medicalInstructions"])}`,
    `入户说明：${pick(data, ["communityAccess", "keyLocation"])}`,
    `服务细节：喂食 ${pick(data, ["foodAmount"], "未填")}；饮水 ${pick(data, ["waterAmount"], "未填")}；遛狗禁忌 ${pick(data, ["walkingTaboos"], "未填")}；洗护重点 ${pick(data, ["furKnots"], "未填")}`,
    `来源渠道：${pick(data, ["sourcePlatform"])} ${pick(data, ["sourceOtherDetail"], "")}`
  ].join("\n");
}

async function postToWeCom(webhook, text) {
  if (!webhook) {
    return { pushed: false, mode: "local" };
  }

  const response = await fetch(webhook, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      msgtype: "text",
      text: { content: text }
    })
  });

  if (!response.ok) {
    throw new Error(`WeCom webhook failed: ${response.status}`);
  }

  return { pushed: true, mode: "wecom" };
}

async function handleLead(data = {}, options = {}) {
  const text = formatLead(data);
  const webhook = options.webhook || process.env.WECOM_BOT_WEBHOOK || "";

  try {
    const result = await postToWeCom(webhook, text);
    return {
      ok: true,
      ...result,
      message: result.pushed
        ? "预约档案已提交，我们会尽快与你确认服务方案。"
        : "预约档案已生成，正式上线后可自动推送至企业微信。",
      text
    };
  } catch (error) {
    return {
      ok: true,
      pushed: false,
      mode: "webhook-error",
      message: "预约档案已生成。企业微信推送暂未成功，客服仍可在后台查看线索。",
      error: error.message,
      text
    };
  }
}

module.exports = { formatLead, handleLead };
