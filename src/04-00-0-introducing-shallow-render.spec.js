import React from 'react';
import TestUtils from 'react-addons-test-utils';
import expact from 'expect';

const CoolComponent = ({greeting}) => (
  <div>
    <h1>Greating</h1>
    <div>greating</div>
  </div>
);

describe('CoolComponent' , ()=>{
    it('should...', ()=>{
        const renderer = TestUtils.createRenderer();
        renderer.render(<CoolComponent greeting='hello world' />);
        const output = renderer.getRenderOutput();
        console.log(output);
    });
})


