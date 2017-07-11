import React from 'react';
import { connect } from 'react-redux';

const CharacterList = ({ characters }) =>
  <div id='character-list' className='col-md-6'>
    <h1>Characters</h1>
    <ul>
      {characters.map(c =>
        <li key={c.name}>
          {c.name}
        </li>
      )}
    </ul>
  </div>;

const mapStateToProps = ({ characters }) => ({
  characters,
});



export default connect(mapStateToProps)(CharacterList);