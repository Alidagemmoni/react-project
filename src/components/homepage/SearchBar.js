import React, { useState } from "react";
import { Typeahead } from 'react-bootstrap-typeahead';
import options from './data';
import 'react-bootstrap-typeahead/css/Typeahead.css';
import './styles.css';
import FormGroup from "react-bootstrap/FormGroup";
import Fragment from "react-bootstrap-typeahead";
import Control from "react-bootstrap/FormControl";


const SearchBar = () => {
    const [multiple, setMultiple] = useState(false);
    const [selected, setSelected] = useState([]);
  
    return (  
      <Fragment>
        <Typeahead
          id="basic-typeahead-example"
          labelKey="name"
          multiple={multiple}
          onChange={setSelected}
          options={options}
          placeholder="Search hotels..."
          selected={selected}
        />
        <FormGroup>
          <Control
            checked={multiple}
            onChange={(e) => setMultiple(e.target.checked)}
            type="checkbox">
            Multi-Select
          </Control>
        </FormGroup>
      </Fragment>
    );
  };

  export default SearchBar;