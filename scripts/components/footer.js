

class AppFooter extends ModularityComponent {
  render() {
    return `
    <footer class="footer">
      <section>
        <h2>Våre samarbeidspartnere</h2>
        <div class="footer-brands">
        <a href="https://sparebankstiftelsen.no/"><img src="/images/sponsor-icons/sbs-logo-positive.png" alt="Sparebankstiftelsen" style="width:80px;height:72px;margin-top:-5px"></a>
        <a href="https://www.homeworkspace.no/"><img src="/images/sponsor-icons/homeworkspace.png" alt="Home Workspace" style="width:60px;height:60px;"></a>
        <a href="https://www.oslo.kommune.no/etater-foretak-og-ombud/kulturetaten/"><img src="/images/Oslo-logo-sort-RGB.png" alt="Oslo kommune" style="width:150px;height:100px;margin-top:-20px;margin-left:-15px;"></a>
          <a href="https://www.kulturradet.no/"><img src="/images/sponsor-icons/kulturrådet.png" alt="Kulturrådet" style="width:150px;height:25px;margin-top:22px"></a>
          <a href="https://jazzforum.jazzinorge.no/"><img src="/images/sponsor-icons/norsk-jazzforum.png" alt="Norsk jazzforum" style="width:120px;height:25px;margin-top:22px"></a>
          <a href="https://ostnorsk.jazzinorge.no/"><img src="/images/sponsor-icons/ostnorsk-logo.png" alt="Østnorsk jazzsenter" style="width:120px;height:48px;margin-top:8px"></a>
        </div>
      </section>
      <section>
        <h2>Finn oss på sosiale medier</h2>
        <div class="footer-social-links">
          <a class="footer-icon" href="https://www.facebook.com/DetNyeNorskeStorband" target="_blank"><img src="/images/icons/facebook.svg" alt="Facebook"></a>
          <a class="footer-icon" href="https://www.instagram.com/detnyensb/" target="_blank"><img src="/images/icons/instagram.svg" alt="Instagram"></a>
          <a class="footer-icon" href="https://open.spotify.com/artist/07RkGtZNwFOTFyVFEw4cMY" target="_blank"><img src="/images/icons/spotify.svg" alt="Spotify"></a>
          <a class="footer-icon" href="https://www.youtube.com/channel/UC_oSKvnF9HaQI5ZJ6ntxgJA/featured" target="_blank"><img src="/images/icons/youtube.svg" alt="Youtube"></a>
        </div>
      </section>
    </footer>
    `
  }
}

registerModularityComponent('app-footer', AppFooter)