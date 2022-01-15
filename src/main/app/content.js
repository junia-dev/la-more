import React from 'react';
import Card from '../../components/card/card';

import GreenJacket from '../../images/green-jacket.jpg';
import PurpleJacket from '../../images/purple.jpg';
import Model1 from '../../images/model1.webp';
import Shoes1 from '../../images/shoes1.webp';
import BlackHat from '../../images/black-hat.webp';
import BlueSweater from '../../images/blue-sweater.webp';
import PinkSweater from '../../images/pink.jpg';
import BrownCoat from '../../images/brown-coat.jpg';

export const Content1 = () => (
  <div>
    <Card showFavorite={false}>
      <div
        style={{
          backgroundImage: `url('${PurpleJacket}')`,
          height: '100%',
          backgroundSize: 'cover',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <h1>GET UP TO 50% OFF</h1>
      </div>
    </Card>
    <Card showFavorite={false}>
      <div
        style={{
          backgroundImage: `url('${GreenJacket}')`,
          height: '100%',
          backgroundSize: 'cover',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'flex-end',
          flexDirection: 'column',
        }}
      >
        <div style={{ margin: '50px' }}>
          <h2>Winter Weekends</h2>
          <span>Keep it casual</span>
        </div>
      </div>
    </Card>
    <div style={{ display: 'flex', justifyContent: 'space-between' }}>
      <Card type="vertical">
        <div
          style={{
            backgroundImage: `url('${Model1}')`,
            height: '100%',
            backgroundSize: 'cover',
            display: 'flex',
            justifyContent: 'flex-end',
            alignItems: 'center',
            flexDirection: 'column',
          }}
        >
          <p
            style={{
              background: 'white',
              padding: '5px',
              fontSize: '.9rem',
              borderRadius: '5px',
            }}
          >
            Puma XVII Purple Sweater
          </p>
        </div>
      </Card>
      <Card type="vertical">
        <div
          style={{
            backgroundImage: `url('${Shoes1}')`,
            height: '100%',
            backgroundSize: 'cover',
            display: 'flex',
            justifyContent: 'flex-end',
            alignItems: 'center',
            flexDirection: 'column',
          }}
        >
          <p
            style={{
              background: 'white',
              padding: '5px',
              fontSize: '.9rem',
              borderRadius: '5px',
            }}
          >
            Vans Sneaker
          </p>
        </div>
      </Card>
    </div>
  </div>
);

export const Content2 = () => (
  <div>
    <div style={{ display: 'flex', justifyContent: 'space-between' }}>
      <Card type="vertical">
        <div
          style={{
            backgroundImage: `url('${BlackHat}')`,
            height: '100%',
            backgroundSize: 'cover',
            display: 'flex',
            justifyContent: 'flex-end',
            alignItems: 'center',
            flexDirection: 'column',
          }}
        >
          <p
            style={{
              background: 'white',
              padding: '5px',
              fontSize: '.9rem',
              borderRadius: '5px',
            }}
          >
            Nylon bucket hat
          </p>
        </div>
      </Card>
      <Card type="vertical">
        <div
          style={{
            backgroundImage: `url('${BlueSweater}')`,
            height: '100%',
            backgroundSize: 'cover',
            display: 'flex',
            justifyContent: 'flex-end',
            alignItems: 'center',
            flexDirection: 'column',
          }}
        >
          <p
            style={{
              background: 'white',
              padding: '5px',
              fontSize: '.9rem',
              borderRadius: '5px',
            }}
          >
            Blue Sweater
          </p>
        </div>
      </Card>
    </div>
    <Card showFavorite={false}>
      <div
        style={{
          backgroundImage: `url('${PinkSweater}')`,
          height: '100%',
          backgroundSize: 'cover',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'flex-end',
          flexDirection: 'column',
        }}
      >
        <div style={{ margin: '50px' }}>
          <h2>New-Season Textures</h2>
          <span>Fresh & Cozy</span>
        </div>
      </div>
    </Card>
    <Card showFavorite={false}>
      <div
        style={{
          backgroundImage: `url('${BrownCoat}')`,
          height: '100%',
          backgroundSize: 'cover',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'flex-start',
          flexDirection: 'column',
        }}
      >
        <div style={{ margin: '50px' }}>
          <h2>New-Season Textures</h2>
          <span>Fresh & Cozy</span>
        </div>
      </div>
    </Card>
  </div>
);

export default Content2;
