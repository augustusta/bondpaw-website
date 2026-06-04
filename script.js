const STORAGE_KEY = "bondpaw_site_admin_v1";
const LEADS_KEY = "bondpaw_consultation_leads_v1";

const defaultPrices = {
  dog: {
    eyebrow: "Dog Grooming",
    title: "狗狗洗护及美容",
    summary: "标准洗护 ¥98 起，剃毛 ¥228 起，美容 ¥278 起。",
    rows: [
      ["标准洗护", "狗狗0-5kg", "¥98", "基础洗护，含剪指甲、剃脚底毛、清耳朵"],
      ["标准洗护", "狗狗5-10kg", "¥128", "小型犬常规洗护"],
      ["标准洗护", "狗狗10-15kg", "¥158", "中小型犬基础洗护"],
      ["标准洗护", "狗狗15-20kg", "¥208", ""],
      ["标准洗护", "狗狗20-30kg", "¥308", ""],
      ["标准洗护", "狗狗30-40kg", "¥408", "大型犬洗护"],
      ["标准洗护", "狗狗40-50kg", "¥508", "超大型犬需评估是否双人上门"],
      ["剃毛", "狗狗0-5kg 洗澡+剃毛", "¥228", "全身基础推短"],
      ["剃毛", "狗狗5-10kg 洗澡+剃毛", "¥278", ""],
      ["剃毛", "狗狗10-15kg 洗澡+剃毛", "¥358", ""],
      ["剃毛", "狗狗15-20kg 洗澡+剃毛", "¥418", ""],
      ["剃毛", "狗狗20-30kg 洗澡+剃毛", "¥498", ""],
      ["剃毛", "狗狗30-40kg 洗澡+剃毛", "¥578", ""],
      ["剃毛", "狗狗40-50kg 洗澡+剃毛", "¥658", ""],
      ["美容", "狗狗0-5kg 洗澡+美容", "¥278", ""],
      ["美容", "狗狗5-10kg 洗澡+美容", "¥338", ""],
      ["美容", "狗狗10-15kg 洗澡+美容", "¥418", ""],
      ["美容", "狗狗15-20kg 洗澡+美容", "¥498", "精致修剪造型"],
      ["美容", "狗狗20-30kg 洗澡+美容", "¥598", ""],
      ["美容", "狗狗30-40kg 洗澡+美容", "¥698", ""],
      ["美容", "狗狗40-50kg 洗澡+美容", "¥798", "大型犬美容需预留更长时段"]
    ]
  },
  cat: {
    eyebrow: "Cat Grooming",
    title: "猫咪洗护及美容",
    summary: "短毛猫洗护 ¥148 起，长毛猫洗护 ¥188 起，剃毛 ¥368 起。",
    rows: [
      ["标准洗护", "短毛猫 洗护 (<5kg)", "¥148", "基础洗护"],
      ["标准洗护", "短毛猫 洗护 (≥5kg)", "¥178", "大体重猫咪加收"],
      ["标准洗护", "长毛猫 洗护 (<5kg)", "¥188", "长毛吹干耗时更长"],
      ["标准洗护", "长毛猫 洗护 (≥5kg)", "¥218", ""],
      ["剃毛", "猫咪 洗护+剃毛 (<5kg)", "¥368", "基础狮子装，保留头尾靴子"],
      ["剃毛", "猫咪 洗护+剃毛 (≥5kg)", "¥398", ""],
      ["美容", "猫咪 洗护+美容造型 (<5kg)", "¥458", "长毛猫精修打薄或局部造型"],
      ["美容", "猫咪 洗护+美容造型 (≥5kg)", "¥558", ""]
    ]
  },
  home: {
    eyebrow: "Daily Visit",
    title: "上门喂养及遛狗",
    summary: "猫咪基础喂养 ¥48 起，狗狗基础喂养/遛狗 ¥68 起。",
    rows: [
      ["基础服务", "猫咪 基础喂养", "¥48", "添粮换水、铲屎、简单陪伴"],
      ["基础服务", "狗狗 基础喂养/遛狗 (30min)", "¥68", "遛狗、添粮换水"],
      ["专业服务", "猫咪 专业喂养", "¥88", "全程直播，含喂药和简单梳毛"],
      ["专业服务", "狗狗 专业遛狗/喂养 (30min)", "¥108", "全程直播，含喂药、擦脸、擦脚"],
      ["多只追加", "追加(同户): 猫基础", "¥5", "每超出1只加收"],
      ["多只追加", "追加(同户): 猫专业", "¥10", "每超出1只加收"],
      ["多只追加", "追加(同户): 狗基础", "¥20", "每超出1只加收"],
      ["多只追加", "追加(同户): 狗专业", "¥30", "每超出1只加收"]
    ]
  },
  extra: {
    eyebrow: "Extra Care",
    title: "增值服务",
    summary: "洁牙、SPA、皮毛护理、基础护理、驱虫与其他费项。",
    rows: [
      ["无麻洁牙", "狗狗洁牙 0-15kg", "¥328", "按体重分级"],
      ["无麻洁牙", "狗狗洁牙 15-30kg", "¥498", ""],
      ["无麻洁牙", "狗狗洁牙 30kg以上", "¥668", ""],
      ["无麻洁牙", "猫咪洁牙 (不分体重)", "¥518", ""],
      ["SPA与皮毛护理", "抚养泥SPA 0-15kg", "¥195", "深度清洁、护肤毛发"],
      ["SPA与皮毛护理", "抚养泥SPA 15-30kg", "¥355", ""],
      ["SPA与皮毛护理", "抚养泥SPA 30kg以上", "¥465", ""],
      ["SPA与皮毛护理", "全身去油脂", "¥320", "严重出油深层去油"],
      ["SPA与皮毛护理", "局部去油脂", "¥95", "单独部位去油处理"],
      ["SPA与皮毛护理", "宠物专用药浴", "¥60", "使用伴爪药浴"],
      ["SPA与皮毛护理", "药浴手工费 (客户自备)", "¥25", "客户自备药材时收取"],
      ["局部精修去绒", "贵宾脸", "¥30", "单项修剪"],
      ["局部精修去绒", "贵宾脚", "¥30", "单项修剪"],
      ["局部精修去绒", "局部精修 (头脸/圆脚丫)", "¥68", "不做全身造型时的单项服务"],
      ["局部精修去绒", "去底绒 (单项单次)", "¥150", ""],
      ["局部精修去绒", "开结 (按30分钟计)", "¥60", ""],
      ["基础护理类", "上门基础护理套餐", "¥68", "剪指甲、清耳朵、剃脚底毛等"],
      ["基础护理类", "刷牙", "¥20", "使用宠物专用牙膏牙刷"],
      ["基础护理类", "剪指甲", "¥20", "单项服务"],
      ["基础护理类", "清理耳道", "¥20", "单项服务"],
      ["基础护理类", "耳道拔毛+深度上药", "¥38", "重度耳螨问题适用"],
      ["驱虫服务", "狗狗驱虫 0-5kg", "¥60", "大牌驱虫药上门滴涂"],
      ["驱虫服务", "狗狗驱虫 5-10kg", "¥70", ""],
      ["驱虫服务", "狗狗驱虫 10-15kg", "¥80", ""],
      ["驱虫服务", "狗狗驱虫 15-30kg", "¥100", ""],
      ["驱虫服务", "猫咪驱虫 2.5kg以下", "¥60", ""],
      ["驱虫服务", "猫咪驱虫 2.5kg以上", "¥70", ""],
      ["其他费项", "恶犬/烈性猫 行为保定费", "¥80", "针对抓咬风险高的宠物"],
      ["其他费项", "偏远地区上门费", "¥2/公里", "超出免费上门范围后计算"]
    ]
  }
};

function getAdminConfig() {
  try {
    return JSON.parse(localStorage.getItem(STORAGE_KEY) || "{}");
  } catch {
    return {};
  }
}

function setAdminConfig(config) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(config));
}

function applyAdminOverrides() {
  const config = getAdminConfig();

  (config.overrides || []).forEach((item) => {
    if (!item.selector) return;
    document.querySelectorAll(item.selector).forEach((node) => {
      if (item.attr) {
        node.setAttribute(item.attr, item.value || "");
      } else {
        node.textContent = item.value || "";
      }
    });
  });

  (config.images || []).forEach((item) => {
    if (!item.selector || !item.src) return;
    document.querySelectorAll(item.selector).forEach((node) => {
      if (node.tagName === "IMG") node.src = item.src;
      else node.style.backgroundImage = `url("${item.src}")`;
    });
  });
}

function getPrices() {
  const config = getAdminConfig();
  return config.pricesVersion === 2 && config.prices ? config.prices : defaultPrices;
}

function renderPricingTables() {
  const mount = document.querySelector("#pricingTables");
  const coreMount = document.querySelector("#corePriceCards");
  if (!mount) return;
  const prices = getPrices();
  const order = ["dog", "cat", "home", "extra"];
  const coreItems = [
    { key: "home", title: "上门喂养", price: "¥48 起", scene: "适合出差、旅行、加班、节假日", includes: "添粮换水、清洁排泄区、陪伴观察、状态反馈" },
    { key: "home", title: "上门遛狗", price: "¥68 起", scene: "适合工作日、临时加班、精力旺盛犬", includes: "规律外出、排便观察、牵引安全、遛后反馈" },
    { key: "dog", title: "狗狗洗护", price: "¥98 起", scene: "适合日常清洁、基础护理、造型评估", includes: "基础洗护、剪指甲、清耳朵、剃脚底毛" },
    { key: "cat", title: "猫咪洗护", price: "¥148 起", scene: "适合敏感猫、胆小猫、家中更安心的洗护场景", includes: "熟悉环境、低压洗护、减少应激、环境复原" }
  ];

  if (coreMount) {
    coreMount.innerHTML = coreItems.map((item) => `
      <article class="core-price-card">
        <span>${prices[item.key]?.eyebrow || "BondPaw"}</span>
        <h3>${item.title}</h3>
        <strong>${item.price}</strong>
        <p>${item.scene}</p>
        <small>${item.includes}</small>
        <a class="inline-button" href="#booking">咨询具体报价</a>
      </article>
    `).join("");
  }

  mount.innerHTML = order.map((key) => {
    const item = prices[key];
    if (!item) return "";
    const rowsSource = item.rows || [];
    const grouped = rowsSource.reduce((acc, [group, sku, price, note]) => {
      const name = group || "其他";
      if (!acc[name]) acc[name] = [];
      acc[name].push({ sku, price, note });
      return acc;
    }, {});

    const groups = Object.entries(grouped).map(([group, rows]) => `
      <section class="price-mini-group">
        <h4>${group}</h4>
        <ul>
          ${rows.map(({ sku, price, note }) => `
            <li>
              <span><strong>${sku}</strong>${note ? `<small>${note}</small>` : ""}</span>
              <b>${price}</b>
            </li>
          `).join("")}
        </ul>
      </section>
    `).join("");

    return `
      <article class="price-table-card">
        <div class="price-card-head">
          <p>${item.eyebrow || ""}</p>
          <h3>${item.title || ""}</h3>
          <span>${item.summary || ""}</span>
          <strong>${(item.rows || []).length} 项完整展示</strong>
        </div>
        <div class="price-table-wrap">${groups}</div>
      </article>
    `;
  }).join("");

  const search = document.querySelector("#priceSearch");
  if (search) {
    search.addEventListener("input", () => {
      const q = search.value.trim().toLowerCase();
      document.querySelectorAll(".price-mini-group li").forEach((row) => {
        row.hidden = q && !row.innerText.toLowerCase().includes(q);
      });
    });
  }
}

function autoResize(textarea) {
  textarea.style.height = "auto";
  textarea.style.height = `${textarea.scrollHeight}px`;
}

function setRequired(id, enabled) {
  const node = document.querySelector(`#${id}`);
  if (!node) return;
  if (enabled) node.setAttribute("required", "required");
  else node.removeAttribute("required");
}

function setupDateTimeValidation(dateInput, timeInput) {
  if (!dateInput || !timeInput) return;
  const update = () => {
    const now = new Date();
    const today = new Date(now.getTime() - now.getTimezoneOffset() * 60000).toISOString().split("T")[0];
    dateInput.min = today;
    if (dateInput.value === today) {
      const currentTime = `${String(now.getHours()).padStart(2, "0")}:${String(now.getMinutes()).padStart(2, "0")}`;
      timeInput.min = currentTime;
      if (timeInput.value && timeInput.value < currentTime) timeInput.value = "";
    } else {
      timeInput.removeAttribute("min");
    }
  };
  dateInput.addEventListener("change", update);
  timeInput.addEventListener("change", update);
  update();
}

function setupConsultationForm() {
  const form = document.querySelector("#bondpawForm");
  if (!form) return;

  form.querySelectorAll("textarea").forEach((textarea) => {
    textarea.addEventListener("input", () => autoResize(textarea));
  });

  function updateServiceModules() {
    const service = form.querySelector('input[name="serviceType"]:checked')?.value;
    document.querySelector("#moduleFoodWater")?.classList.toggle("is-hidden", service === "上门洗护");
    document.querySelector("#moduleWalkingOnly")?.classList.toggle("is-hidden", service !== "上门遛狗");
    document.querySelector("#moduleGroomingOnly")?.classList.toggle("is-hidden", service !== "上门洗护");
  }

  function setupConditionalRadios(name, value, groupId, inputId) {
    form.querySelectorAll(`input[name="${name}"]`).forEach((radio) => {
      radio.addEventListener("change", () => {
        const active = form.querySelector(`input[name="${name}"]:checked`)?.value === value;
        document.querySelector(`#${groupId}`)?.classList.toggle("is-hidden", !active);
        if (inputId) setRequired(inputId, active);
      });
    });
  }

  form.querySelectorAll('input[name="serviceType"]').forEach((radio) => radio.addEventListener("change", updateServiceModules));
  setupConditionalRadios("someoneHome", "无人", "keyLocationGroup", "keyLocation");
  setupConditionalRadios("multiPets", "有", "multiPetsDetailGroup", "multiPetsDetail");
  setupConditionalRadios("petType", "其他", "otherPetTypeGroup", "otherPetType");
  setupConditionalRadios("shampooPref", "自带洗护用品", "shampooLocationGroup", "shampooLocation");

  const source = document.querySelector("#sourcePlatform");
  source?.addEventListener("change", () => {
    const active = source.value === "其他";
    document.querySelector("#sourceOtherGroup")?.classList.toggle("is-hidden", !active);
    setRequired("sourceOtherDetail", active);
  });

  document.addEventListener("change", (event) => {
    const input = event.target;
    if (!(input instanceof HTMLInputElement) || input.type !== "date") return;
    const label = input.closest("label");
    if (!label) return;
    let weekday = label.querySelector(".weekday-text");
    if (!weekday) {
      weekday = document.createElement("span");
      weekday.className = "weekday-text";
      label.insertBefore(weekday, input);
    }
    if (!input.value) {
      weekday.textContent = "";
      return;
    }
    const map = ["周日", "周一", "周二", "周三", "周四", "周五", "周六"];
    weekday.textContent = map[new Date(input.value).getDay()];
  });

  form.querySelectorAll('input[name="behavior"]').forEach((radio) => {
    radio.addEventListener("change", () => {
      const behavior = form.querySelector('input[name="behavior"]:checked')?.value;
      const needsDetail = behavior && behavior !== "完全温顺配合";
      document.querySelector("#behaviorDetailGroup")?.classList.toggle("is-hidden", !needsDetail);
      setRequired("behaviorDetail", needsDetail);
    });
  });

  setupDateTimeValidation(document.querySelector("#expectedDate"), document.querySelector("#expectedTime"));

  const addTime = document.querySelector("#addTimeBtn");
  let timeCount = 0;
  addTime?.addEventListener("click", () => {
    timeCount += 1;
    const slot = document.createElement("div");
    slot.className = "time-slot";
    slot.innerHTML = `
      <div class="form-grid">
        <label>备选日期 ${timeCount}<input type="date" name="backupDate${timeCount}" /></label>
        <label>备选时间 ${timeCount}<input type="time" name="backupTime${timeCount}" /></label>
      </div>
      <button type="button" class="remove-time">移除备选时间</button>
    `;
    slot.querySelector(".remove-time").addEventListener("click", () => slot.remove());
    document.querySelector("#timeSlotsContainer")?.appendChild(slot);
    setupDateTimeValidation(slot.querySelector("input[type='date']"), slot.querySelector("input[type='time']"));
  });

  form.addEventListener("submit", async (event) => {
    event.preventDefault();
    if (!form.checkValidity()) {
      form.reportValidity();
      return;
    }
    const status = document.querySelector("#form-status");
    const data = collectFormData(form);
    data.createdAt = new Date().toLocaleString("zh-CN", { hour12: false });
    const summary = buildConsultationSummary(data);
    saveLead(data);

    try {
      const response = await fetch("/api/wecom-lead", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data)
      });
      const result = await response.json();
      status.textContent = result.message || "预约档案已提交，我们会尽快与你确认。";
      form.reset();
      updateServiceModules();
      return;
    } catch {
      status.textContent = `预约档案已生成。当前为本地预览模式，正式上线后可自动推送至企业微信。摘要：${summary}`;
    }
  });

  updateServiceModules();
}

function collectFormData(form) {
  const data = {};
  new FormData(form).forEach((value, key) => {
    if (data[key]) data[key] = `${data[key]}、${value}`;
    else data[key] = value;
  });
  return data;
}

function saveLead(data) {
  const leads = JSON.parse(localStorage.getItem(LEADS_KEY) || "[]");
  leads.unshift(data);
  localStorage.setItem(LEADS_KEY, JSON.stringify(leads.slice(0, 100)));
}

function buildConsultationSummary(data) {
  return [
    "伴爪预约咨询",
    `提交时间：${data.createdAt || "-"}`,
    `服务：${data.serviceType || "-"}`,
    `电话：${data.ownerPhone || "-"}`,
    `来源：${data.sourcePlatform || "-"}`,
    `地址：${data.address || "-"}`,
    `首选时间：${data.expectedDate || "-"} ${data.expectedTime || "-"}`,
    `宝贝：${data.petName || "-"} / ${data.petType || "-"} / ${data.petBreed || "-"} / ${data.petWeight || "-"}kg`,
    `性格：${data.behavior || "-"} ${data.behaviorDetail || ""}`,
    `健康：${data.health || data.medicalInstructions || "未填写异常"}`,
    `入户说明：${data.communityAccess || "-"}`
  ].join("\n");
}

document.addEventListener("DOMContentLoaded", () => {
  applyAdminOverrides();
  renderPricingTables();
  setupConsultationForm();
});
