export default function Home() {
  return (
      <main style={{padding: 20}}>
        {/* logo */}
          <header style={{ display: 'flex', justifyContent: 'space-between'}}>
              <a href="#Home" class="link">CaptionGenerator</a>
              {/* navbar */}
              <nav class="navbar">
                  <a href="#Home" style={{textDecoration: 'none'}}>Home</a>
                  <a href="#About" style={{textDecoration: 'none'}}>About</a>
                  <a href="#Contact" style={{textDecoration: 'none'}}>Contact</a>
              </nav>
          </header>
          <div class="text">
              <h1>Generate Caption for your videos</h1>
              <h2>Just Upload your video, we will do the rest</h2>
          </div>
          <div class="button">
              <button class="download">Choose video</button>
          </div>
        {/* card part */}
      </main>
  );
}
