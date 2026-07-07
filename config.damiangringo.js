/* ===== KONFIG: DamianGringo — edytuj TYLKO ten plik (linki, bonusy, social) ===== */
window.SITE = {
  creator: 'Damian<span>Gringo</span>',
  intro: "Sprawdzone kasyna i najlepsze bonusy wybrane dla widzów. Kliknij „Odbierz bonus”, zarejestruj się i graj.",
  ctaText: "Odbierz bonus",

  socials: [
    { type: "kick",    url: "https://kick.com/damiangringo" },
    { type: "x",       url: "https://x.com/DamianGringo" },
    { type: "discord", url: "https://discord.gg/GMfXh29HQ7" }
  ],

  // wspólne metody płatności (pokazywane przy każdym kasynie)
  payments: ["BLIK", "Visa / Mastercard", "Kryptowaluty", "Portfele wirtualne"],

  casinos: [
    { name: "BettySpin", logo: "assets/bettyspin.png",
      link: "https://cocoeschwa.com/api/v3/offer/597?affiliate_id=199&url_id=718",
      bonus: '<span class="g">100-150%</span> do <b>7500 zł</b> + <b>50-150</b> darmowych spinów',
      minDep: "80 zł (bonus od min. wpłaty 100 zł)" },

    { name: "Slotuna", logo: "assets/slotuna.jpeg",
      link: "https://cocoeschwa.com/api/v3/offer/578?affiliate_id=199&url_id=683",
      bonus: '<span class="g">100%</span> do <b>2250 zł</b> + <b>200</b> darmowych spinów + 1 bonus crab',
      minDep: "50 zł" },

    { name: "JasminSlots", logo: "assets/jasmin-slots.jpeg",
      link: "https://cocoeschwa.com/api/v3/offer/598?affiliate_id=199&url_id=719",
      bonus: '<span class="g">350%</span> do <b>2000 €</b> + <b>1000</b> darmowych spinów',
      minDep: "20 €" },

    { name: "Blitz-Bet", logo: "assets/blitz-bet.png",
      link: "https://cocoeschwa.com/api/v3/offer/599?affiliate_id=199&url_id=720",
      bonus: '<span class="g">150%</span> do <b>6000 zł</b> + <b>150</b> darmowych spinów',
      note: "lub do 400% do 8330 zł + 150 FS (rozłożone na 3 pierwsze wpłaty)",
      minDep: "100 zł" },

    { name: "Reel Raven", logo: "assets/reel-raven.png",
      link: "https://cocoeschwa.com/api/v3/offer/523?affiliate_id=199&url_id=536",
      bonus: '<span class="g">350%</span> do <b>2000 €</b> + <b>1000</b> darmowych spinów',
      minDep: "20 €" },

    { name: "Zoccer", logo: "assets/zoccer.png",
      link: "https://cocoeschwa.com/api/v3/offer/601?affiliate_id=199&url_id=722",
      bonus: '<span class="g">100%</span> do <b>2250 zł</b> + <b>200</b> darmowych spinów',
      minDep: "90 zł" }
  ],

  disclaimer:
    "<strong>Strona nie przeznaczona dla osób znajdujących się w Polsce, legalny dostęp możliwy jedynie dla Polaków przebywających poza granicami tego kraju.</strong> " +
    "Materiał ma charakter informacyjny i afiliacyjny. Ta strona nie jest operatorem gier hazardowych " +
    "i może otrzymywać wynagrodzenie za rejestracje dokonane przez zamieszczone linki. Prezentowane bonusy " +
    "podlegają regulaminom i warunkom obrotu poszczególnych kasyn. Szczegóły sprawdź u operatora. " +
    "Hazard może uzależniać. Jeśli przestaje być rozrywką, szukaj pomocy. Telefon zaufania: " +
    '<a href="tel:801889880">801 889 880</a> (uzaleznieniabehawioralne.pl).'
};
