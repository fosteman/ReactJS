import React from 'react';
import Title from './components/Title'
import './css/placeholders.less';
import './css/reset.css'
import './css/styles.css'
import './css/themes/white-blue.css'

function LandingPage() {
  return (
  <main>
    <Title className="title" welcome="Hello, I'm Tim!" />
    <div class="tagline">Digital Minimalist</div>
    <div class="icons-social">
      <a target="_blank" href="https://github.com/fosteman"><i class="fab fa-github"/></a>
      <a target="_blank" href="https://twitter.com/fosteman"><i class="fab fa-twitter"/></a>
      <a target="_blank" href="https://dev.to/fosteman"><i class="fab fa-dev"/></a>
      <a target="_blank" href="https://www.linkedin.com/in/timofei-shchepkin-024434127/"><i class="fab fa-linkedin"/></a>

    </div>

    <hr class="horizontal-rule"/>

      <div class="tagline">My Projects</div>

      <div class="project icons-social">
        <a target="_blank" href="https://fosteman.github.io/team-management/">
          <p>Team Management Platform
            <i class="fas fa-users-cog"/>
          </p>
        </a>
        <a target="_blank" href="https://fosteman.github.io/fosteman.info/">
          <p>Online Resumé
            <i class="far fa-file"/>
          </p>
        </a>
        <a target="_blank" href="https://github.com/fosteman/ReactWorks/tree/master/qod">
          <p>Quote Generator
            <i class="fas fa-quote-right"/>
          </p>
        </a>
      </div>

      <hr class="horizontal-rule"/>
        <div class="tagline">Quote of The Moment!</div>
        <div class="special icons-social" id="special">
          <div class="placeholder-content"></div>

          <script type="text/javascript" src="quote.js"></script>

        </div>
        <hr class="horizontal-rule-2"/>
          <div class="footer">
            Created and Maintained by Timofei Shchepkin 2019
          </div>
  </main>
);
}

export default LandingPage;
