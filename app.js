(function () {
  var S = window.SITE || {};
  var $ = function (id) { return document.getElementById(id); };

  // --- header ---
  $("creator").innerHTML = S.creator || "";
  $("intro").textContent = S.intro || "";

  // --- socials (renderuje tylko podane; loga = oficjalne glify marek, simple-icons CC0) ---
  var META = {
    kick:    { label: "Kick",    c: "#53fc18", d: "M1.333 0h8v5.333H12V2.667h2.667V0h8v8H20v2.667h-2.667v2.666H20V16h2.667v8h-8v-2.667H12v-2.666H9.333V24h-8Z" },
    x:       { label: "X",       c: "#ffffff", d: "M14.234 10.162 22.977 0h-2.072l-7.591 8.824L7.251 0H.258l9.168 13.343L.258 24H2.33l8.016-9.318L16.749 24h6.993zm-2.837 3.299-.929-1.329L3.076 1.56h3.182l5.965 8.532.929 1.329 7.754 11.09h-3.182z" },
    discord: { label: "Discord", c: "#5865F2", d: "M20.317 4.3698a19.7913 19.7913 0 00-4.8851-1.5152.0741.0741 0 00-.0785.0371c-.211.3753-.4447.8648-.6083 1.2495-1.8447-.2762-3.68-.2762-5.4868 0-.1636-.3933-.4058-.8742-.6177-1.2495a.077.077 0 00-.0785-.037 19.7363 19.7363 0 00-4.8852 1.515.0699.0699 0 00-.0321.0277C.5334 9.0458-.319 13.5799.0992 18.0578a.0824.0824 0 00.0312.0561c2.0528 1.5076 4.0413 2.4228 5.9929 3.0294a.0777.0777 0 00.0842-.0276c.4616-.6304.8731-1.2952 1.226-1.9942a.076.076 0 00-.0416-.1057c-.6528-.2476-1.2743-.5495-1.8722-.8923a.077.077 0 01-.0076-.1277c.1258-.0943.2517-.1923.3718-.2914a.0743.0743 0 01.0776-.0105c3.9278 1.7933 8.18 1.7933 12.0614 0a.0739.0739 0 01.0785.0095c.1202.099.246.1981.3728.2924a.077.077 0 01-.0066.1276 12.2986 12.2986 0 01-1.873.8914.0766.0766 0 00-.0407.1067c.3604.698.7719 1.3628 1.225 1.9932a.076.076 0 00.0842.0286c1.961-.6067 3.9495-1.5219 6.0023-3.0294a.077.077 0 00.0313-.0552c.5004-5.177-.8382-9.6739-3.5485-13.6604a.061.061 0 00-.0312-.0286zM8.02 15.3312c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9555-2.4189 2.157-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419 0 1.3332-.9555 2.4189-2.1569 2.4189zm7.9748 0c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9554-2.4189 2.1569-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419 0 1.3332-.946 2.4189-2.1568 2.4189Z" },
    youtube: { label: "YouTube", c: "#ff0000", d: "M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" }
  };
  (S.socials || []).forEach(function (s) {
    var m = META[s.type] || { label: s.type, c: "#888", d: "" };
    var a = document.createElement("a");
    a.href = s.url; a.className = "soc"; a.style.setProperty("--c", m.c);
    var ico = m.d
      ? '<svg class="ico" viewBox="0 0 24 24" aria-hidden="true"><path d="' + m.d + '"/></svg>'
      : '<span class="dot"></span>';
    a.innerHTML = ico + m.label;
    $("socials").appendChild(a);
  });

  // --- lista kasyn ---
  var pays = (S.payments || []).map(function (p) { return '<span class="pay">' + p + "</span>"; }).join("");
  (S.casinos || []).forEach(function (c, i) {
    var logo = c.logo
      ? '<img src="' + c.logo + '" alt="' + c.name + '">'
      : '<span class="logo-txt">' + c.name + "</span>";
    var card = document.createElement("div");
    card.className = "card";
    card.innerHTML =
      '<div class="rank' + (i === 0 ? " top" : "") + '">' + (i + 1) + "</div>" +
      '<div class="brand">' + logo + '<div class="bname">' + c.name + "</div></div>" +
      '<div class="info">' +
        '<div class="bonus">' + (c.bonus || "") + "</div>" +
        (c.note ? '<div class="note">' + c.note + "</div>" : "") +
        '<div class="mindep">Min. depozyt: <b>' + (c.minDep || "-") + "</b></div>" +
        '<div class="pays">' + pays + "</div>" +
      "</div>" +
      '<a class="cta" href="' + (c.link || "#") + '">' + (S.ctaText || "Odbierz bonus") + "</a>";
    $("list").appendChild(card);
  });

  // --- disclaimer ---
  $("disc").innerHTML = S.disclaimer || "";

  // --- overlay + redirect na klik dowolnego linku zewnętrznego ---
  function overlay() {
    if ($("__ov")) return;
    var o = document.createElement("div");
    o.id = "__ov";
    o.innerHTML = '<div class="spin"></div><div class="msg">Trwa przekierowanie…</div>';
    document.body.appendChild(o);
  }
  document.addEventListener("click", function (e) {
    var a = e.target.closest && e.target.closest("a[href]");
    if (!a) return;
    var h = a.getAttribute("href") || "";
    if (!/^https?:/i.test(h)) return;              // tylko zewnętrzne (# / mailto pomijamy)
    e.preventDefault();
    overlay();
    setTimeout(function () { window.location.href = h; }, 60); // chwila by overlay zdążył się pokazać
  }, true);
})();
