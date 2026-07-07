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
    
    { name: "Leon", logo: "assets/leon.png",
      link: "https://dg-leon.lovable.app/",
      bonus: '<span class="g">12 000zł</span> w <b>Bonusach Powitalnych</b>,
      minDep: "50 zł" },
    
      { name: "Slotuna", logo: "assets/slotuna.jpeg",
      link: "https://cocoeschwa.com/api/v3/offer/578?affiliate_id=199&url_id=683",
      bonus: '<span class="g">100%</span> do <b>2250 zł</b> + <b>200</b> darmowych spinów + 1 bonus crab',
      minDep: "50 zł" },

    { name: "Mr Punter", logo: "assets/mrpunter.png",
      link: "https://mrp.vordyne.com/?mid=376797_2181728",
      bonus: '<span class="g">100%</span> do <b>2 250 zł</b> + <b>200</b> darmowych spinów',
      minDep: "50 zł" },
    
    { name: "BettySpin", logo: "assets/bettyspin.png",
      link: "https://cocoeschwa.com/api/v3/offer/597?affiliate_id=199&url_id=718",
      bonus: '<span class="g">100-150%</span> do <b>7500 zł</b> + <b>50-150</b> darmowych spinów',
      minDep: "80 zł (bonus od min. wpłaty 100 zł)" },

    { name: "JasminSlots", logo: "assets/jasmin-slots.jpeg",
      link: "https://cocoeschwa.com/api/v3/offer/598?affiliate_id=199&url_id=719",
      bonus: '<span class="g">350%</span> do <b>2000 €</b> + <b>1000</b> darmowych spinów',
      minDep: "20 €" },

    { name: "Blitz-Bet", logo: "assets/blitz-bet.png",
      link: "https://cocoeschwa.com/api/v3/offer/599?affiliate_id=199&url_id=720",
      bonus: '<span class="g">150%</span> do <b>6000 zł</b> + <b>150</b> darmowych spinów',
      note: "lub do 400% do 8330 zł + 150 FS (rozłożone na 3 pierwsze wpłaty)",
      minDep: "100 zł" },

    { name: "Zoccer", logo: "assets/zoccer.png",
      link: "https://cocoeschwa.com/api/v3/offer/601?affiliate_id=199&url_id=722",
      bonus: '<span class="g">100%</span> do <b>2250 zł</b> + <b>200</b> darmowych spinów',
      minDep: "90 zł" }
  ],

  disclaimer:
    "<strong>Uwaga: serwis niedostępny dla użytkowników znajdujących się w Polsce.</strong> " +
    "Dostęp możliwy jedynie dla osób przebywających poza granicami kraju. " +
    "Wchodząc na stronę, deklarujesz zgodność z tym wymogiem. " +
    "Potrzebujesz pomocy? Odwiedź " +
    '<a href=https://www.gamblersanonymous.org/>Anonymous Gamblers</a>.'
};
