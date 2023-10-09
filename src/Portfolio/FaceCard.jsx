import React from 'react';
import './portfolio.css';

class FaceCard extends React.Component {
  constructor() {
    super();
    this.state = {
      windowHeight: window.innerHeight,
    };
    this.handleResize = this.handleResize.bind(this);
  }

  componentDidMount() {
    window.addEventListener('resize', this.handleResize);
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.handleResize);
  }

  handleResize() {
    this.setState({
      windowHeight: window.innerHeight,
    });
  }

  render() {
    const containerStyle = {
      height: (this.state.windowHeight - 60) + 'px'
    };

    return (
      <div className='FCContainer' style={containerStyle}>
        <div className='FCInfoContainer'>
            <div className='FCImageContainer'>
                <img className='FCImage' src={`${process.env.PUBLIC_URL}/images/kernhiking2.JPG`} alt="" />
            </div>
            <h1 className='FCHeader'>Kernan Lee - A Portfolio</h1>
            <h3 className='FCSubHeader'>B.S. Software Engineering Student @ Rose-Hulman Institute of Technology '24</h3>            
        </div>

      </div>
    );
  }
}

export default FaceCard;
