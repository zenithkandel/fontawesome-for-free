// ─── CATEGORY DEFINITIONS ────────────────────────────────────────────────────
      const CATS = [
        {
          id: "solid",
          file: "css/solid.css",
          label: "Solid",
          style: "fa-solid",
        },
        {
          id: "regular",
          file: "css/regular.css",
          label: "Regular",
          style: "fa-regular",
        },
        {
          id: "light",
          file: "css/light.css",
          label: "Light",
          style: "fa-light",
        },
        { id: "thin", file: "css/thin.css", label: "Thin", style: "fa-thin" },
        {
          id: "brands",
          file: "css/brands.css",
          label: "Brands",
          style: "fa-brands",
        },
        {
          id: "sharp-solid",
          file: "css/sharp-solid.css",
          label: "Sharp Solid",
          style: "fa-sharp fa-solid",
        },
        {
          id: "sharp-regular",
          file: "css/sharp-regular.css",
          label: "Sharp Regular",
          style: "fa-sharp fa-regular",
        },
        {
          id: "sharp-light",
          file: "css/sharp-light.css",
          label: "Sharp Light",
          style: "fa-sharp fa-light",
        },
        {
          id: "sharp-thin",
          file: "css/sharp-thin.css",
          label: "Sharp Thin",
          style: "fa-sharp fa-thin",
        },
        {
          id: "duotone",
          file: "css/duotone.css",
          label: "Duotone",
          style: "fa-duotone fa-solid",
        },
        {
          id: "duotone-regular",
          file: "css/duotone-regular.css",
          label: "Duotone Regular",
          style: "fa-duotone fa-regular",
        },
        {
          id: "duotone-light",
          file: "css/duotone-light.css",
          label: "Duotone Light",
          style: "fa-duotone fa-light",
        },
        {
          id: "duotone-thin",
          file: "css/duotone-thin.css",
          label: "Duotone Thin",
          style: "fa-duotone fa-thin",
        },
        {
          id: "sharp-duotone-solid",
          file: "css/sharp-duotone-solid.css",
          label: "Sharp Duotone Solid",
          style: "fa-sharp-duotone fa-solid",
        },
        {
          id: "sharp-duotone-regular",
          file: "css/sharp-duotone-regular.css",
          label: "Sharp Duotone Regular",
          style: "fa-sharp-duotone fa-regular",
        },
        {
          id: "sharp-duotone-light",
          file: "css/sharp-duotone-light.css",
          label: "Sharp Duotone Light",
          style: "fa-sharp-duotone fa-light",
        },
        {
          id: "sharp-duotone-thin",
          file: "css/sharp-duotone-thin.css",
          label: "Sharp Duotone Thin",
          style: "fa-sharp-duotone fa-thin",
        },
        {
          id: "chisel-regular",
          file: "css/chisel-regular.css",
          label: "Chisel Regular",
          style: "fa-chisel fa-regular",
        },
        {
          id: "etch-solid",
          file: "css/etch-solid.css",
          label: "Etch Solid",
          style: "fa-etch fa-solid",
        },
        {
          id: "graphite-thin",
          file: "css/graphite-thin.css",
          label: "Graphite Thin",
          style: "fa-graphite fa-thin",
        },
        {
          id: "jelly-regular",
          file: "css/jelly-regular.css",
          label: "Jelly Regular",
          style: "fa-jelly fa-regular",
        },
        {
          id: "jelly-duo-regular",
          file: "css/jelly-duo-regular.css",
          label: "Jelly Duo Regular",
          style: "fa-jelly-duo fa-regular",
        },
        {
          id: "jelly-fill-regular",
          file: "css/jelly-fill-regular.css",
          label: "Jelly Fill Regular",
          style: "fa-jelly-fill fa-regular",
        },
        {
          id: "notdog-solid",
          file: "css/notdog-solid.css",
          label: "Notdog Solid",
          style: "fa-notdog fa-solid",
        },
        {
          id: "notdog-duo-solid",
          file: "css/notdog-duo-solid.css",
          label: "Notdog Duo Solid",
          style: "fa-notdog-duo fa-solid",
        },
        {
          id: "slab-regular",
          file: "css/slab-regular.css",
          label: "Slab Regular",
          style: "fa-slab fa-regular",
        },
        {
          id: "slab-press-regular",
          file: "css/slab-press-regular.css",
          label: "Slab Press Regular",
          style: "fa-slab-press fa-regular",
        },
        {
          id: "thumbprint-light",
          file: "css/thumbprint-light.css",
          label: "Thumbprint Light",
          style: "fa-thumbprint fa-light",
        },
        {
          id: "utility-semibold",
          file: "css/utility-semibold.css",
          label: "Utility Semibold",
          style: "fa-utility",
        },
        {
          id: "utility-duo-semibold",
          file: "css/utility-duo-semibold.css",
          label: "Utility Duo Semibold",
          style: "fa-utility-duo",
        },
        {
          id: "utility-fill-semibold",
          file: "css/utility-fill-semibold.css",
          label: "Utility Fill Semibold",
          style: "fa-utility-fill",
        },
        {
          id: "whiteboard-semibold",
          file: "css/whiteboard-semibold.css",
          label: "Whiteboard Semibold",
          style: "fa-whiteboard",
        },
      ];

      // ─── MULTI-FORMAT CSS PARSER ─────────────────────────────────────────────────
      /*
  FA CSS has evolved through several formats. We try all of them:

  FORMAT A — Classic FA4/5:
    .fa-house:before { content: "\f015"; }

  FORMAT B — FA6 standard:
    .fa-house::before { content: "\f015"; }

  FORMAT C — FA6 Kit / Pro (custom property per icon):
    .fa-house { --fa: "\f015"; }
    (plus a shared ::before { content: var(--fa,""); } on the style class)

  FORMAT D — FA6 Kit v2 (--fa-icon custom property):
    .fa-house { --fa-icon: "\f015"; }

  FORMAT E — Ligature / content on element (rare kits):
    .fa-house[data-icon]::before { content: attr(data-icon); }
*/
      function parseCss(css) {
        const icons = [],
          seen = new Set();

        function add(cls) {
          // Only real icon classes: fa-<something> but not fa-solid, fa-regular etc (style classes)
          const STYLE_CLASSES = new Set([
            "fa-solid",
            "fa-regular",
            "fa-light",
            "fa-thin",
            "fa-brands",
            "fa-duotone",
            "fa-sharp",
            "fa-sharp-duotone",
            "fa-classic",
            "fa-kit",
            "fa-pro",
            "fa-fw",
            "fa-lg",
            "fa-sm",
            "fa-xs",
            "fa-2xs",
            "fa-xl",
            "fa-2xl",
            "fa-1x",
            "fa-2x",
            "fa-3x",
            "fa-4x",
            "fa-5x",
            "fa-6x",
            "fa-7x",
            "fa-8x",
            "fa-9x",
            "fa-10x",
            "fa-spin",
            "fa-spin-reverse",
            "fa-spin-pulse",
            "fa-pulse",
            "fa-beat",
            "fa-fade",
            "fa-bounce",
            "fa-shake",
            "fa-flip",
            "fa-beat-fade",
            "fa-fixedWidth",
            "fa-fixed-width",
            "fa-ul",
            "fa-li",
            "fa-border",
            "fa-pull-left",
            "fa-pull-right",
            "fa-stack",
            "fa-stack-1x",
            "fa-stack-2x",
            "fa-inverse",
            "fa-layers",
            "fa-layers-text",
            "fa-layers-counter",
          ]);
          if (!cls.startsWith("fa-")) return;
          if (STYLE_CLASSES.has(cls)) return;
          if (seen.has(cls)) return;
          seen.add(cls);
          icons.push({ cls, name: cls.replace(/^fa-/, "").replace(/-/g, " ") });
        }

        // FORMAT A & B: .fa-xxx::before or .fa-xxx:before with content value
        const reBefore =
          /\.(fa-[a-z0-9][a-z0-9-]*)::?before\s*\{[^}]*content\s*:\s*["\\]([^"';\n}]+)/gis;
        let m;
        while ((m = reBefore.exec(css)) !== null) add(m[1]);

        // FORMAT C: .fa-xxx { --fa: "..." }  or  .fa-xxx { --fa-icon: "..." }
        const reCustomProp =
          /\.(fa-[a-z0-9][a-z0-9-]*)\s*\{[^}]*--fa(?:-icon)?\s*:\s*["\\]([^"';\n}]+)/gis;
        while ((m = reCustomProp.exec(css)) !== null) add(m[1]);

        // FORMAT D: any rule block that contains a fa- class and a unicode content/var
        // Broader fallback — catches unusual whitespace/newline formatting
        const reGeneric =
          /\.(fa-[a-z0-9][a-z0-9-]*)\s*[,{][^{]*\{[^}]*(?:content|--fa)\s*:/gis;
        while ((m = reGeneric.exec(css)) !== null) add(m[1]);

        return icons;
      }

      // ─── DETECT FORMAT LABEL ─────────────────────────────────────────────────────
      function detectFormat(css) {
        if (/--fa(?:-icon)?\s*:/i.test(css))
          return "FA6-Kit (--fa custom prop)";
        if (/::before\s*\{[^}]*content\s*:/i.test(css)) return "FA6 (::before)";
        if (/:before\s*\{[^}]*content\s*:/i.test(css)) return "FA5 (:before)";
        return "Unknown";
      }

      // ─── RENDER CHECK ────────────────────────────────────────────────────────────
      // After fonts load, check if the ::before pseudo element has
      // (a) a content value that isn't none/empty AND
      // (b) a matching loaded @font-face
      function deepCheck(el) {
        if (!el) return false;
        const s = window.getComputedStyle(el, "::before");
        const c = s.content;
        if (
          !c ||
          c === "none" ||
          c === "normal" ||
          c === '""' ||
          c === "''" ||
          c === ""
        )
          return false;

        // Walk up to find effective font-family on the element
        let ff = "";
        let node = el;
        while (node && node !== document.documentElement) {
          ff = window.getComputedStyle(node).fontFamily || "";
          if (ff && ff !== "inherit") break;
          node = node.parentElement;
        }

        const loaded = [...document.fonts].filter((f) => f.status === "loaded");
        if (!loaded.length) return false;

        // See if any loaded font family matches what's applied
        return loaded.some((f) => {
          const fam = f.family.replace(/['"]/g, "").trim().toLowerCase();
          return (
            ff.toLowerCase().includes(fam) ||
            // FA6 sets font via CSS custom property -- font-family may resolve to
            // the actual name without the variable name being visible here
            fam.includes("font awesome") ||
            fam.includes("fa-")
          );
        });
      }

      // ─── FONT BANNER ─────────────────────────────────────────────────────────────
      function updateFontBanner() {
        const banner = document.getElementById("fbanner");
        const msg = document.getElementById("fbmsg");
        const ftags = document.getElementById("ftags");
        ftags.innerHTML = "";

        const loaded = [],
          failed = [],
          pending = [];
        const seen = new Set();
        document.fonts.forEach((f) => {
          const name = f.family.replace(/['"]/g, "").trim();
          if (seen.has(name)) return;
          seen.add(name);
          if (f.status === "loaded") loaded.push(name);
          else if (f.status === "error") failed.push(name);
          else pending.push(name);
        });

        const total = loaded.length + failed.length + pending.length;
        if (total === 0) {
          msg.textContent =
            "⚠ No @font-face fonts detected in the CSS files — icons cannot render";
          return;
        }

        if (failed.length) {
          msg.textContent = `⚠ ${failed.length} of ${total} webfont(s) failed to load`;
        } else if (pending.length) {
          msg.textContent = `⏳ ${loaded.length}/${total} webfonts loaded, ${pending.length} still loading…`;
        } else {
          banner.classList.add("ok");
          banner.querySelector(".pulse").style.animation = "none";
          msg.textContent = `✓ All ${loaded.length} webfont(s) loaded`;
        }

        [
          ...loaded.map((n) => ({ n, s: "ok" })),
          ...failed.map((n) => ({ n, s: "fail" })),
          ...pending.map((n) => ({ n, s: "" })),
        ].forEach(({ n, s }) => {
          const t = document.createElement("span");
          t.className = "ftag " + s;
          t.textContent = n;
          ftags.appendChild(t);
        });
      }

      // ─── AUDIT ───────────────────────────────────────────────────────────────────
      function auditGrid(container) {
        let ok = 0,
          fail = 0;
        container.querySelectorAll(".card").forEach((card) => {
          const i = card.querySelector(".prev i");
          if (deepCheck(i)) {
            ok++;
          } else {
            card.classList.add("broken");
            fail++;
          }
        });
        return { ok, fail };
      }

      // ─── CARDS ───────────────────────────────────────────────────────────────────
      function esc(s) {
        return s.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
      }
      function cardHtml(ic, style, q) {
        const cls = style + " " + ic.cls;
        const nm = q
          ? ic.name.replace(
              new RegExp("(" + esc(q) + ")", "gi"),
              "<mark>$1</mark>",
            )
          : ic.name;
        return `<div class="card" title="${cls}" onclick="cp(this,'${cls}')">
    <div class="pip"></div>
    <div class="prev"><i class="${cls}"></i></div>
    <div class="iname">${nm}</div>
  </div>`;
      }
      function cp(el, cls) {
        navigator.clipboard?.writeText(cls).catch(() => {});
        el.classList.add("done");
        setTimeout(() => el.classList.remove("done"), 850);
      }

      // ─── SEARCH ──────────────────────────────────────────────────────────────────
      const state = { cats: [], activeTab: "__all__", query: "" };
      let searchTimer;
      function doSearch(q) {
        state.query = q;
        const ar = document.getElementById("allres");
        const sw = document.getElementById("secwrap");
        if (!q.trim()) {
          ar.classList.remove("vis");
          sw.style.display = "";
          switchTab(state.activeTab);
          return;
        }
        ar.classList.add("vis");
        sw.style.display = "none";
        ar.innerHTML = "";
        let total = 0;
        state.cats.forEach((cat) => {
          if (cat.error || !cat.icons.length) return;
          const ql = q.toLowerCase();
          const matches = cat.icons.filter(
            (ic) => ic.cls.includes(ql) || ic.name.includes(ql),
          );
          if (!matches.length) return;
          total += matches.length;
          const lbl = document.createElement("div");
          lbl.className = "grplbl";
          lbl.textContent = `${cat.label} (${matches.length})`;
          ar.appendChild(lbl);
          const grid = document.createElement("div");
          grid.className = "igrid";
          grid.innerHTML = matches
            .map((ic) => cardHtml(ic, cat.style, q))
            .join("");
          ar.appendChild(grid);
          setTimeout(() => auditGrid(grid), 60);
        });
        if (!total)
          ar.innerHTML = `<div class="empty"><span>No icons match "<em style="color:var(--accent)">${q}</em>"</span></div>`;
      }

      // ─── TABS ─────────────────────────────────────────────────────────────────────
      function switchTab(id) {
        state.activeTab = id;
        document
          .querySelectorAll(".tab")
          .forEach((b) => b.classList.toggle("act", b.dataset.s === id));
        if (id === "__all__") {
          document
            .querySelectorAll(".sec")
            .forEach((s) => s.classList.add("vis"));
        } else {
          document
            .querySelectorAll(".sec")
            .forEach((s) => s.classList.toggle("vis", s.id === "sec-" + id));
        }
      }

      // ─── MAIN ─────────────────────────────────────────────────────────────────────
      async function init() {
        const sw = document.getElementById("secwrap");
        const tbar = document.getElementById("tbar");
        let totalIcons = 0;

        for (let i = 0; i < CATS.length; i++) {
          const c = CATS[i];
          document.getElementById("lmsg").textContent =
            `Parsing ${c.file} (${i + 1}/${CATS.length})…`;

          const cat = {
            ...c,
            icons: [],
            format: "–",
            loaded: false,
            error: null,
            cssSnippet: "",
          };

          try {
            const r = await fetch(c.file);
            if (!r.ok) throw new Error(`HTTP ${r.status}`);
            const css = await r.text();
            cat.icons = parseCss(css);
            cat.format = detectFormat(css);
            // Store first 600 chars for debug display (strip comments)
            cat.cssSnippet = css
              .replace(/\/\*[\s\S]*?\*\//g, "")
              .trim()
              .slice(0, 600);
            cat.loaded = true;
          } catch (e) {
            cat.error = e.message;
          }

          state.cats.push(cat);
          totalIcons += cat.icons.length;

          // ── Build section DOM ──
          const sec = document.createElement("div");
          sec.className = "sec";
          sec.id = "sec-" + cat.id;

          if (cat.error) {
            sec.innerHTML = `<div class="shead">
        <span class="stitle">${cat.label}</span>
        <span class="sfile">${cat.file}</span>
        <div class="ssum"><span class="badge fail">LOAD ERROR</span></div>
      </div>
      <div class="errc">✗ ${cat.error}<br>
        <small>Make sure this HTML file lives in the same folder as <code>css/</code> and <code>webfonts/</code></small>
      </div>`;
          } else if (!cat.icons.length) {
            // Show debug snippet so user can see the actual CSS format
            const snippetId = "snip-" + cat.id;
            sec.innerHTML = `<div class="shead">
        <span class="stitle">${cat.label}</span>
        <span class="sfile">${cat.file}</span>
        <span class="sfmt">${cat.format}</span>
        <div class="ssum"><span class="badge warn">0 icons parsed</span></div>
      </div>
      <div class="debugbox">
        <div class="dbhead" onclick="toggleSnip('${snippetId}')">
          ⚠ No icons found — click to inspect raw CSS (first 600 chars) and report the format
          <span style="font-size:10px;color:var(--dim)">▼ expand</span>
        </div>
        <pre class="dbpre" id="${snippetId}">${escHtml(cat.cssSnippet)}</pre>
      </div>`;
          } else {
            sec.innerHTML = `<div class="shead">
        <span class="stitle">${cat.label}</span>
        <span class="sfile">${cat.file}</span>
        <span class="sfmt">${cat.format}</span>
        <div class="ssum">
          <span class="badge ok" id="ok-${cat.id}">–</span>
          <span class="badge fail" id="fail-${cat.id}" style="display:none">–</span>
        </div>
      </div>
      <div class="igrid" id="grid-${cat.id}">${cat.icons.map((ic) => cardHtml(ic, cat.style, "")).join("")}</div>`;
          }
          sw.appendChild(sec);

          // Tab
          const btn = document.createElement("button");
          btn.className = "tab";
          btn.dataset.s = cat.id;
          btn.innerHTML = `${cat.label} <span class="n">${cat.error ? "!" : cat.icons.length}</span>`;
          btn.onclick = () => {
            state.query = "";
            document.getElementById("search").value = "";
            document.getElementById("allres").classList.remove("vis");
            document.getElementById("secwrap").style.display = "";
            switchTab(cat.id);
          };
          tbar.appendChild(btn);
        }

        document.getElementById("cnt-all").textContent = totalIcons;
        document.getElementById("loading").style.display = "none";

        document.querySelector('[data-s="__all__"]').onclick = () => {
          state.query = "";
          document.getElementById("search").value = "";
          document.getElementById("allres").classList.remove("vis");
          document.getElementById("secwrap").style.display = "";
          switchTab("__all__");
        };

        const first =
          state.cats.find((c) => !c.error && c.icons.length) || state.cats[0];
        if (first) switchTab(first.id);

        updateFontBanner();

        // ── Wait for fonts, then audit ──
        document.fonts.ready.then(() => {
          requestAnimationFrame(() =>
            requestAnimationFrame(() => {
              updateFontBanner();

              let totalOk = 0,
                totalFail = 0;
              const agrid = document.getElementById("agrid");
              agrid.innerHTML = "";

              state.cats.forEach((cat) => {
                const row = document.createElement("div");
                row.className = "arow";
                if (cat.error) {
                  row.innerHTML = `<span class="aname">${cat.label}</span><div class="apills"><span class="badge fail">ERROR</span></div>`;
                } else if (!cat.icons.length) {
                  row.innerHTML = `<span class="aname">${cat.label}</span><span class="afmt">${cat.format}</span><div class="apills"><span class="badge warn">0 parsed</span></div>`;
                } else {
                  const grid = document.getElementById("grid-" + cat.id);
                  const { ok, fail } = grid
                    ? auditGrid(grid)
                    : { ok: 0, fail: cat.icons.length };
                  totalOk += ok;
                  totalFail += fail;
                  const okB = document.getElementById("ok-" + cat.id);
                  const failB = document.getElementById("fail-" + cat.id);
                  if (okB) okB.textContent = `${ok} ✓`;
                  if (failB && fail > 0) {
                    failB.textContent = `${fail} ✗`;
                    failB.style.display = "";
                  }
                  row.innerHTML = `<span class="aname" title="${cat.file}">${cat.label}</span>
            <span class="afmt">${cat.format}</span>
            <div class="apills">
              ${ok > 0 ? `<span class="badge ok">${ok}✓</span>` : ""}
              ${fail > 0 ? `<span class="badge fail">${fail}✗</span>` : ""}
              ${ok === 0 && fail === 0 ? `<span class="badge warn">?</span>` : ""}
            </div>`;
                }
                agrid.appendChild(row);
              });

              document.getElementById("tok").textContent = totalOk;
              document.getElementById("tfail").textContent = totalFail;
              document.getElementById("analysis").style.display = "";
            }),
          );
        });

        document.getElementById("search").addEventListener("input", (e) => {
          clearTimeout(searchTimer);
          searchTimer = setTimeout(() => doSearch(e.target.value.trim()), 180);
        });
      }

      function toggleSnip(id) {
        const el = document.getElementById(id);
        el.classList.toggle("open");
      }

      function escHtml(s) {
        return s
          .replace(/&/g, "&amp;")
          .replace(/</g, "&lt;")
          .replace(/>/g, "&gt;");
      }

      init();