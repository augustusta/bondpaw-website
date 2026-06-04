const http = require("http");
const fs = require("fs");
const path = require("path");
const { handleLead } = require("./api/wecom-lead");

const root = __dirname;
const port = Number(process.env.PORT || 3000);
const configPath = path.join(root, "data", "site-config.json");

const mime = {
  ".html": "text/html; charset=utf-8",
  ".css": "text/css; charset=utf-8",
  ".js": "application/javascript; charset=utf-8",
  ".json": "application/json; charset=utf-8",
  ".png": "image/png",
  ".jpg": "image/jpeg",
  ".jpeg": "image/jpeg",
  ".svg": "image/svg+xml; charset=utf-8",
  ".webp": "image/webp"
};

function send(res, status, body, type = "application/json; charset=utf-8") {
  res.writeHead(status, { "Content-Type": type });
  res.end(body);
}

function readBody(req) {
  return new Promise((resolve, reject) => {
    let body = "";
    req.on("data", (chunk) => {
      body += chunk;
      if (body.length > 10 * 1024 * 1024) reject(new Error("Request body too large"));
    });
    req.on("end", () => resolve(body));
    req.on("error", reject);
  });
}

function safeStaticPath(urlPath) {
  const requested = decodeURIComponent(urlPath.split("?")[0]);
  const normalized = requested === "/" ? "/index.html" : requested;
  const filePath = path.normalize(path.join(root, normalized));
  return filePath.startsWith(root) ? filePath : null;
}

async function routeApi(req, res, url) {
  if (url.pathname === "/api/config" && req.method === "GET") {
    const config = fs.existsSync(configPath) ? fs.readFileSync(configPath, "utf8") : "{}";
    send(res, 200, config);
    return true;
  }

  if (url.pathname === "/api/config" && req.method === "POST") {
    const raw = await readBody(req);
    const parsed = JSON.parse(raw || "{}");
    fs.mkdirSync(path.dirname(configPath), { recursive: true });
    fs.writeFileSync(configPath, JSON.stringify(parsed, null, 2), "utf8");
    send(res, 200, JSON.stringify({ ok: true, message: "配置已保存。" }));
    return true;
  }

  if (url.pathname === "/api/wecom-lead" && req.method === "POST") {
    const raw = await readBody(req);
    const data = JSON.parse(raw || "{}");
    data.submittedAt = data.submittedAt || new Date().toISOString();
    const result = await handleLead(data);
    send(res, 200, JSON.stringify(result));
    return true;
  }

  return false;
}

const server = http.createServer(async (req, res) => {
  try {
    const url = new URL(req.url, `http://${req.headers.host}`);
    if (await routeApi(req, res, url)) return;

    const filePath = safeStaticPath(url.pathname);
    if (!filePath || !fs.existsSync(filePath) || fs.statSync(filePath).isDirectory()) {
      send(res, 404, "Not found", "text/plain; charset=utf-8");
      return;
    }

    const ext = path.extname(filePath).toLowerCase();
    send(res, 200, fs.readFileSync(filePath), mime[ext] || "application/octet-stream");
  } catch (error) {
    send(res, 500, JSON.stringify({ ok: false, error: error.message }));
  }
});

server.listen(port, () => {
  console.log(`BondPaw site running at http://localhost:${port}`);
});
