import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import { StaticQuery, graphql, Link } from "gatsby";

import '../assets/sass/main.scss';

import NavigationBar from '../components/NavigationBar';
import Menu from '../components/Menu';
import Footer from '../components/Footer';

class Layout extends Component {
  state = {
    isMenuOpen: false,
  };

  constructor(props) {
    super(props);
  }

  openMenu = e => {
    e.preventDefault();
    this.setState({ isMenuOpen: true });
  };

  closeMenu = e => {
    e.preventDefault();
    this.setState({ isMenuOpen: false });
  };

  wrapDataInRender = data => {
    const { children, location } = this.props;
    const childrenWithProps = React.Children.map(children, (child) =>
      React.cloneElement(child, { data: data, openMenu: this.openMenu })
    );
    return (
      <React.Fragment>
        <Helmet
          title={data.site.siteMetadata.title}
          meta={[
            { name: 'description', content: 'Sample' },
            { name: 'keywords', content: 'sample, something' },
          ]}
          link={[
            {
              rel: 'shortcut icon',
              type: 'image/png',
              href: '/icons/icon-48x48.png',
            },
          ]}
        >
          <html lang="en" />
        </Helmet>
        {location.pathname !== '/' && (
          <NavigationBar
            siteTitle={data.site.siteMetadata.title}
            openMenu={this.openMenu}
          />
        )}
        <div className={this.state.isMenuOpen ? 'is-menu-visible' : ''}>
          <div
            id="page-wrapper"
            onClick={this.state.isMenuOpen ? this.closeMenu : undefined}
          >
            {childrenWithProps}
            <Footer />
          </div>
          <Menu closeMenu={this.closeMenu}>
            <Link to="/">Home</Link>
            <Link to="/work">Work</Link>
            <Link to="/about">About</Link>
            <Link to="/hobbies">Hobbies</Link>
            <Link to="/site">Site Info</Link>
            <Link to="/#contact">Contact</Link>
          </Menu>
        </div>
      </React.Fragment>
    );
  }

  render() {
    return (
      <StaticQuery
        query={graphql`
          query SiteTitleQuery {
            site {
              siteMetadata {
                title
              }
            }
        
            philly1927: file(name: { eq: "philly1927" }) {
              childImageSharp {
                sizes(quality: 90) {
                  ...GatsbyImageSharpSizes_withWebp
                }
              }
            }
        
            profilePic: file(name: { eq: "brian-hamburg-profile-photo-DICE2019" }) {
              childImageSharp {
                sizes(quality: 100) {
                  ...GatsbyImageSharpSizes_withWebp
                }
              }
            }
        
            familyPic: file(name: { eq: "Hamburg-family-beach" }) {
              childImageSharp {
                sizes {
                  ...GatsbyImageSharpSizes_withWebp
                }
              }
            }
        
            hobbiesPic: file(name: { eq: "hamburg-fan-club-2020" }) {
              childImageSharp {
                sizes {
                  ...GatsbyImageSharpSizes_withWebp
                }
              }
            }
        
            pic01: file(name: { eq: "pic01" }) {
              childImageSharp {
                sizes {
                  ...GatsbyImageSharpSizes_withWebp
                }
              }
            }

            pic02: file(name: { eq: "pic02" }) {
              childImageSharp {
                sizes {
                  ...GatsbyImageSharpSizes_withWebp
                }
              }
            }
            
            pic03: file(name: { eq: "pic03" }) {
              childImageSharp {
                sizes {
                  ...GatsbyImageSharpSizes_withWebp
                }
              }
            }
        
            pic04: file(name: { eq: "pic04" }) {
              childImageSharp {
                sizes {
                  ...GatsbyImageSharpSizes_withWebp
                }
              }
            }
        
            pic05: file(name: { eq: "pic05" }) {
              childImageSharp {
                sizes {
                  ...GatsbyImageSharpSizes_withWebp
                }
              }
            }
        
            pic06: file(name: { eq: "pic06" }) {
              childImageSharp {
                sizes {
                  ...GatsbyImageSharpSizes_withWebp
                }
              }
            }
        
            pic07: file(name: { eq: "pic07" }) {
              childImageSharp {
                sizes {
                  ...GatsbyImageSharpSizes_withWebp
                }
              }
            }
        
            pic08: file(name: { eq: "pic08" }) {
              childImageSharp {
                sizes {
                  ...GatsbyImageSharpSizes_withWebp
                }
              }
            }
          }
        `}
        render={data => (
          this.wrapDataInRender(data)
        )}
      />
    );
  }
}

Layout.propTypes = {
  childrenWithProps: PropTypes.object,
};

export default Layout;
