import React, {Component} from 'react';
import TextField from 'material-ui/TextField';
import FontIcon from 'material-ui/FontIcon';
import _ from 'lodash';

class MultipleInputs extends Component {
  render() {
    const {name, datas, onChangeHandler, onAddHandler, onRemoveHandler} = this.props;
    return (
      <div>
      {
        datas.map((data, key) => {
          return (
            <div key={`in-${key}`}>
            {
              _.map(data, (value, subkey) => {
                if(subkey === 'id')
                  return '';
                return (
                  <TextField
                    id={subkey}
                    key={`${subkey}-${key}`}
                    floatingLabelText={subkey}
                    value={value}
                    onChange={(e) => {
                      onChangeHandler(e.target.value, name, key, subkey)
                    }}
                  />
                );
              })
            }
            <FontIcon className="material-icons" onClick={(e) => onRemoveHandler(e, name, key)}>remove</FontIcon>
            </div>
          );
        })
      }
      <FontIcon className="material-icons" onClick={(e) => onAddHandler(e, name)}>add</FontIcon>
      </div>
    );
  }
}

export default MultipleInputs;
