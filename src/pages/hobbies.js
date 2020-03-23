import React from 'react';

import Header from '../components/Header';
import PageWrapper from '../components/PageWrapper';
import Wrapper from '../components/Wrapper';
import Goodreads from '../components/Goodreads';

const Generic = ({ data }) => (
  <PageWrapper>
    <Header>
      <h2>Hobbies</h2>
      <p>Always striving to improve my skills and expand my mind</p>
    </Header>

    <Wrapper>
      <h3 className="major">Reading List</h3>
      <Goodreads />
      <h3 className="major">Video Games</h3>
      <p>
        I’ve become a bit of a retro gaming connoisseur over the past few 
        years while rebuilding my library of cartridges and enjoying them in 
        the highest fidelity possible. My tastes gravitate towards games from 
        and inspired by the 8- and 16-bit “golden age” of pixel art. Kids can 
        keep their Fortnite and Overwatch. Give me the 
        “<abbr title="Nintendo Entertainment System">NES</abbr> Hard” platformers, 
        run-and-guns, and <abbr title="role-playing games">RPGs</abbr>. I love to 
        chat about <abbr title="cathode-ray tube">CRT</abbr> scan lines in 
        240p <abbr title="red-green-blue additive color model">RGB</abbr>, 
        or the latest advances in <abbr title="field-programmable gate array">FPGA</abbr>-based 
        systems with near-perfect accuracy and zero-to-low input latency.
      </p>
      <p>
        Take a look at what I've been playing lately.
      </p>
      <p>
        <a href="https://www.grouvee.com/user/burgbits/shelves/?sort_by=date_finished&dir=desc"  rel="noopener noreferrer" target="_blank">View My Grouvee Shelves</a>
      </p>
    </Wrapper>
  </PageWrapper>
);

export default Generic;
