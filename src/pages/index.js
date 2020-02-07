import React, { Component } from 'react';
import Img from 'gatsby-image';

import { debounce } from 'lodash';

import NavigationBar from '../components/NavigationBar';
import Banner from '../components/Banner';
import Wrapper from '../components/Wrapper';
import SpotlightWrapper from '../components/SpotlightWrapper';
import Spotlight from '../components/Spotlight';
import Content from '../components/Content';
import FeaturedItems from '../components/FeaturedItems';
import SpecialLink from '../components/SpecialLink';

class IndexPage extends Component {
  state = {
    isScrolled: false,
    isMounted: false,
  };

  bannerRef = React.createRef();

  scrollListener = debounce(() => {
    const { clientHeight } = this.bannerRef.current;
    if (window.scrollY >= clientHeight) this.setState({ isScrolled: true });
    else this.setState({ isScrolled: false });
  }, 66);

  componentDidMount() {
    window.addEventListener('scroll', this.scrollListener);

    // trigger banner animation
    setTimeout(() => {
      this.setState({ isMounted: true });
    }, 500);
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.scrollListener);
  }

  render() {
    const { data, openMenu } = this.props;
    return (
      <div className={this.state.isMounted ? '' : 'is-preload'}>
        <NavigationBar
          siteTitle={data.site.siteMetadata.title}
          openMenu={openMenu}
          className={this.state.isScrolled ? '' : 'alt'}
        />
        <Banner siteTitle={data.site.siteMetadata.title} ref={this.bannerRef} />
        <SpotlightWrapper>
          <Spotlight>
            <a href="/work" className="image">
              <Img sizes={data.profilePic.childImageSharp.sizes} />
            </a>
            <Content>
              <h2 className="major">Hello! I'm Brian, from the Internet</h2>
              <p>
                With over 15 years of professional experience building and 
                supporting websites and applications, I've dedicated my career 
                to the pursuit of removing friction from using the Web.
              </p>
              <SpecialLink to="/work">View my work</SpecialLink>
            </Content>
          </Spotlight>
          <Spotlight>
            <a href="/about" className="image">
              <Img sizes={data.familyPic.childImageSharp.sizes} />
            </a>
            <Content>
              <h2 className="major">Who is this Hamburg character anyway?</h2>
              <p>
              Father of twins. Strummer of strings. Implementer of interfaces. Purveyor of pixels.
              </p>
              <SpecialLink to="/about">Learn more about me</SpecialLink>
            </Content>
          </Spotlight>

          <Spotlight>
            <a href="/hobbies" className="image">
              <Img sizes={data.hobbiesPic.childImageSharp.sizes} />
            </a>
            <Content>
              <h2 className="major">Random acts of nerdery</h2>
              <p>
                Playing four-string banjo is just the tip of the Hamburg iceberg. 
                I'm also a retro gaming enthusiast, avid science and philosphy reader, and 
                slightly less-avid runner.
              </p>
              <SpecialLink to="/hobbies">Check out my hobbies</SpecialLink>
            </Content>
          </Spotlight>
        </SpotlightWrapper>
        <Wrapper className="alt style1">
          <h2 className="major">Latest posts</h2>
          <p>
            Cras mattis ante fermentum, malesuada neque vitae, eleifend erat.
            Phasellus non pulvinar erat. Fusce tincidunt, nisl eget mattis
            egestas, purus ipsum consequat orci, sit amet lobortis lorem lacus
            in tellus. Sed ac elementum arcu. Quisque placerat auctor laoreet.
          </p>
          <FeaturedItems>
            <article>
              <a href="#" className="image">
                <Img sizes={data.pic04.childImageSharp.sizes}/>
              </a>
              <h3 className="major">Sed feugiat lorem</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing vehicula id
                nulla dignissim dapibus ultrices.
              </p>
              <SpecialLink>Learn more</SpecialLink>
            </article>
            <article>
              <a href="#" className="image">
                <Img sizes={data.pic05.childImageSharp.sizes}/>
              </a>
              <h3 className="major">Nisl placerat</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing vehicula id
                nulla dignissim dapibus ultrices.
              </p>
              <SpecialLink>Learn more</SpecialLink>
            </article>
            <article>
              <a href="#" className="image">
                <Img sizes={data.pic06.childImageSharp.sizes}/>
              </a>
              <h3 className="major">Ante fermentum</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing vehicula id
                nulla dignissim dapibus ultrices.
              </p>
              <SpecialLink>Learn more</SpecialLink>
            </article>
            <article>
              <a href="#" className="image">
                <Img sizes={data.pic07.childImageSharp.sizes}/>
              </a>
              <h3 className="major">Fusce consequat</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing vehicula id
                nulla dignissim dapibus ultrices.
              </p>
              <SpecialLink>Learn more</SpecialLink>
            </article>
          </FeaturedItems>
          <ul className="actions">
            <li>
              <a href="#" className="button">
                Browse All
              </a>
            </li>
          </ul>
        </Wrapper>
      </div>
    );
  }
}

export default IndexPage;
