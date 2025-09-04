<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="utf-8" />
  <meta name="viewport" content="width=device-width,initial-scale=1" />
  <title>💊 Health-Care | Project Overview</title>
  <meta name="description" content="Health-Care: Node.js backend with Docker & Kubernetes. Quick start, features, and deployment guide." />
  <link rel="preconnect" href="https://fonts.googleapis.com" />
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
  <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;600;800&display=swap" rel="stylesheet" />
  <style>
    :root{
      --bg:#0b1020;
      --card:#121936;
      --muted:#8fa1c7;
      --text:#eef2ff;
      --accent:#7c9aff;
      --accent-2:#22d3ee;
      --border:#233058;
      --ok:#22c55e;
      --warn:#f59e0b;
    }
    *{box-sizing:border-box}
    html,body{margin:0;padding:0;background:radial-gradient(1200px 600px at 20% -10%, #1a2456, transparent),
                                      radial-gradient(900px 500px at 90% 10%, #0f1537, transparent),
                                      var(--bg);
              color:var(--text); font-family:Inter,system-ui,Segoe UI,Roboto,Arial,sans-serif}
    a{color:var(--accent); text-decoration:none}
    a:hover{text-decoration:underline}
    .container{max-width:1024px;margin:0 auto;padding:28px 20px 80px}
    .hero{border:1px solid var(--border); background:linear-gradient(180deg, rgba(124,154,255,.12), rgba(34,211,238,.08)) , var(--card);
          padding:28px;border-radius:20px; position:relative; overflow:hidden}
    .hero::after{content:""; position:absolute; inset:auto -10% -80% -10%; height:200px;
                 background:radial-gradient(50% 120% at 50% 0%, rgba(124,154,255,.25), transparent 70%)}
    .title{font-size:clamp(28px,4vw,42px); line-height:1.1; font-weight:800; letter-spacing:.4px; margin:0 0 10px}
    .subtitle{margin:0 0 18px; color:var(--muted); font-weight:600}
    .badges{display:flex; flex-wrap:wrap; gap:10px; margin-top:14px}
    .badge{border:1px solid var(--border); background:rgba(255,255,255,.04); padding:8px 12px; border-radius:999px; font-size:14px}
    .grid{display:grid; grid-template-columns:1fr; gap:16px; margin-top:18px}
    @media (min-width:900px){ .grid{grid-template-columns:1fr 1fr} }
    .card{border:1px solid var(--border); background:rgba(8,11,25,.7); backdrop-filter:saturate(120%) blur(6px);
          border-radius:16px; padding:18px}
    .card h3{margin:0 0 10px; font-size:18px}
    .list{margin:0; padding-left:18px}
    .list li{margin:6px 0}
    .mono{font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", monospace}
    .ascii{white-space:pre; overflow:auto; border:1px dashed var(--border); border-radius:14px;
           padding:14px; background:#0a0f24}
    .section{margin-top:26px}
    .code{position:relative}
    .code pre{margin:0; padding:14px 14px; border:1px solid var(--border); background:#0a0f24; border-radius:14px; overflow:auto}
    .copy{position:absolute; top:10px; right:10px; border:1px solid var(--border); background:#0e1530;
          color:var(--text); padding:6px 10px; border-radius:10px; font-size:12px; cursor:pointer}
    .copy:active{transform:scale(.98)}
    .kpi{display:flex; gap:10px; flex-wrap:wrap}
    .pill{background:#0b1330; border:1px solid var(--border); padding:8px 10px; border-radius:10px; font-size:13px}
    footer{margin-top:36px; display:flex; justify-content:space-between; gap:10px; flex-wrap:wrap; color:var(--muted)}
    .btns{display:flex; gap:10px; flex-wrap:wrap}
    .btn{display:inline-flex; align-items:center; gap:8px; padding:10px 14px; border-radius:12px; border:1px solid var(--border);
         background:#0d1433; color:var(--text); text-decoration:none; font-weight:600}
    .btn:hover{transform:translateY(-1px)}
    .btn.primary{background:linear-gradient(180deg, rgba(124,154,255,.18), rgba(124,154,255,.08)); border-color:#33407a}
    .ok{color:var(--ok)} .warn{color:var(--warn)}
    .muted{color:var(--muted)}
    .hr{height:1px;background:linear-gradient(90deg, transparent, #27335f 30%, #27335f 70%, transparent); margin:24px 0}
  </style>
</head>
<body>
  <div class="container">
    <!-- HERO -->
    <section class="hero">
      <h1 class="title">💊 Health-Care — Node.js • Docker • Kubernetes</h1>
      <p class="subtitle">Lightweight backend template for healthcare services. Fast to set up, easy to ship, cloud-ready.</p>
      <div class="badges">
        <span class="badge">🐍 API Ready</span>
        <span class="badge">🐳 Dockerized</span>
        <span class="badge">☸ Kubernetes</span>
        <span class="badge">🔒 Secrets & Config</span>
        <span class="badge">🧪 Future CI/CD</span>
      </div>
      <div class="section ascii mono" aria-label="ASCII Banner" title="ASCII Banner">
   ____  _      _   _ _   _ _   _        _               ____                 
  |  _ \| | ___| |_| | |_(_) |_| | __   / \   _ __  _ __/ ___|  ___ _ ____   _
  | | | | |/ _ \ __| | __| | __| |/ /  / _ \ | '_ \| '__\___ \ / _ \ '__\ \ / /
  | |_| | |  __/ |_| | |_| | |_|   <  / ___ \| |_) | |   ___) |  __/ |   \ V / 
  |____/|_|\___|\__|_|\__|_|\__|_|\_\/_/   \_\ .__/|_|  |____/ \___|_|    \_/  
                                            |_|                                
      </div>

      <div class="section kpi">
        <div class="pill">📦 Node.js + Express</div>
        <div class="pill">🧩 Modular Structure</div>
        <div class="pill">⚡ Quick Start</div>
        <div class="pill">🛡️ Apache-2.0</div>
      </div>

      <div class="hr"></div>

      <div class="btns">
        <a class="btn primary" href="https://github.com/sharma987piyush/health-care" target="_blank" rel="noopener">⭐ GitHub Repo</a>
        <a class="btn" href="#setup">🚀 Quick Setup</a>
        <a class="btn" href="#k8s">☸ K8s Deploy</a>
        <a class="btn" href="#structure">📂 Structure</a>
      </div>
    </section>

    <!-- FEATURE + STACK -->
    <section class="grid section">
      <div class="card">
        <h3>✨ Features</h3>
        <ul class="list">
          <li>🐳 <b>Dockerized</b> for seamless containerization</li>
          <li>☸ <b>Kubernetes-ready</b> (Deployment, Service, ConfigMap, Secret)</li>
          <li>⚡ <b>Lightweight</b> Node.js server with clean structure</li>
          <li>🔒 <b>Secure</b> environment via Secrets</li>
          <li>🧪 <b>CI/CD-friendly</b> layout (Jenkins/GitHub Actions later)</li>
        </ul>
      </div>
      <div class="card">
        <h3>🛠 Tech Stack</h3>
        <ul class="list">
          <li>🟢 Node.js &amp; Express</li>
          <li>🐳 Docker</li>
          <li>☸ Kubernetes (YAML manifests)</li>
          <li>🛡️ Apache-2.0 License</li>
        </ul>
      </div>
    </section>

    <!-- QUICK SETUP -->
    <section class="section" id="setup">
      <h3>🚀 Quick Setup (Local)</h3>
      <div class="code mono">
        <button class="copy" data-target="#c1">Copy</button>
        <pre id="c1"><code># Clone
git clone https://github.com/sharma987piyush/health-care.git
cd health-care

# Install deps
npm install

# Run
node server.js
# Visit:
# http://localhost:3000</code></pre>
      </div>
    </section>

    <!-- DOCKER -->
    <section class="section">
      <h3>🐳 Run with Docker</h3>
      <div class="code mono">
        <button class="copy" data-target="#c2">Copy</button>
        <pre id="c2"><code># Build image
docker build -t health-care-app .

# Run container
docker run -d -p 3000:3000 --name health-care health-care-app

# Open:
# http://localhost:3000</code></pre>
      </div>
    </section>

    <!-- KUBERNETES -->
    <section class="section" id="k8s">
      <h3>☸ Deploy on Kubernetes</h3>
      <div class="code mono">
        <button class="copy" data-target="#c3">Copy</button>
        <pre id="c3"><code># Apply config & secret
kubectl apply -f configmap.yml
kubectl apply -f secret.yml

# Deploy the app
kubectl apply -f deploy.yml

# Expose service
kubectl apply -f service.yml

# Check status
kubectl get pods,svc</code></pre>
      </div>
    </section>

    <!-- STRUCTURE -->
    <section class="section" id="structure">
      <h3>📂 Project Structure</h3>
      <div class="code mono">
        <button class="copy" data-target="#c4">Copy</button>
        <pre id="c4"><code>health-care/
├── Dockerfile         → Docker image setup
├── server.js          → Main Node.js server file
├── package.json       → Node.js project metadata
├── package-lock.json  → Dependencies lock file
├── configmap.yml      → Kubernetes ConfigMap
├── secret.yml         → Kubernetes Secret
├── deploy.yml         → Kubernetes Deployment
├── service.yml        → Kubernetes Service
└── .gitignore         → Ignore unnecessary files</code></pre>
      </div>
    </section>

    <!-- ROADMAP -->
    <section class="grid section">
      <div class="card">
        <h3>🧭 Roadmap / Future Enhancements</h3>
        <ul class="list">
          <li>🩺 REST APIs: patients, appointments, billing</li>
          <li>🔑 Auth: JWT / OAuth2</li>
          <li>🗄️ DB: MongoDB / PostgreSQL integration</li>
          <li>🧱 Frontend: React / Next.js</li>
          <li>🤖 CI/CD: Jenkins or GitHub Actions</li>
        </ul>
      </div>
      <div class="card">
        <h3>🤝 Contributing</h3>
        <p class="muted">Fork → Branch → Commit → PR 🚀</p>
        <ul class="list">
          <li>Style consistent, small atomic commits</li>
          <li>Describe changes clearly in PR</li>
          <li>Add tests where possible</li>
        </ul>
      </div>
    </section>

    <footer>
      <div>📜 License: <b>Apache-2.0</b></div>
      <div>Made with ❤️ by <a href="https://github.com/sharma987piyush" target="_blank" rel="noopener">Piyush Sharma</a></div>
    </footer>
  </div>

  <script>
    // Simple copy-to-clipboard for code blocks
    document.querySelectorAll('.copy').forEach(btn=>{
      btn.addEventListener('click', ()=>{
        const target = document.querySelector(btn.dataset.target);
        if(!target) return;
        const text = target.innerText;
        navigator.clipboard.writeText(text).then(()=>{
          const prev = btn.textContent;
          btn.textContent = 'Copied!';
          btn.style.borderColor = '#3b82f6';
          setTimeout(()=>{ btn.textContent = prev; btn.style.borderColor=''; }, 1200);
        });
      });
    });
  </script>
</body>
</html>
