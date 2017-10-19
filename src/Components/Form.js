import React, {Component} from 'react';
import MultipleInputs from './MultipleInputs';
import ImageUpload from './ImageUpload';
import RaisedButton from 'material-ui/RaisedButton';

class Form extends Component {
  constructor(props) {
    super(props);
    this.state = {
      file: {
        file: '',
        name: '',
        imagePreviewUrl: ''
      },
      addresses: [
        {
          'id': 1,
          'var1': 'hello',
          'var2': 'test'
        },
        {
          'id': 4,
          'var1': 'dcs',
          'var2': 'sdcsc'
        }
      ],
      model: {
        addresses: {
          'id': '',
          'var1': '',
          'var2': ''
        }
      }
    };
    this.multipleInputChange = this.multipleInputChange.bind(this);
    this.onSubmitHandler = this.onSubmitHandler.bind(this);
    this.multipleInputAdd = this.multipleInputAdd.bind(this);
    this.multipleInputRemove = this.multipleInputRemove.bind(this);
    this.onHandleImageChange = this.onHandleImageChange.bind(this);
    this.onRemoveImageHandler = this.onRemoveImageHandler.bind(this);
  }
  onHandleImageChange(e) {
    e.preventDefault();
    let reader = new FileReader();
    let file = e.target.files[0];
    reader.onloadend = () => {
      this.setState((state) => {
        state['file']['file'] = file;
        state['file']['name'] = file.name;
        state['file']['imagePreviewUrl'] = reader.result;
        return state;
      });
    }
    reader.readAsDataURL(file)
  }
  multipleInputChange(value, name, key, subkey) {
    const values = this.state[name];
    values[key][subkey] = value;
    this.setState({
      [name]: values
    });
  }
  multipleInputRemove(e, name, key) {
    e.preventDefault();
    this.setState((state) => {
      state[name].splice(key, 1);
      return state;
    });
  }
  multipleInputAdd(e, name) {
    e.preventDefault();
    const model = Object.assign({}, this.state.model[name]);
    this.setState({
      addresses: [model, ...this.state.addresses]
    });
  }
  onRemoveImageHandler() {
    this.setState((state) => {
      state['file']['file'] = '';
      state['file']['imagePreviewUrl'] = '';
      return state;
    });
  }
  onSubmitHandler(e) {
    e.preventDefault();
    console.log('Submitting');
    console.log(this.state);
  }
  render() {
    const {addresses, imagePreviewUrl, file} = this.state;
    return (
      <form onSubmit={(e) => { this.onSubmitHandler(e); }}>
        <MultipleInputs
          name="addresses"
          datas={addresses}
          onChangeHandler={this.multipleInputChange}
          onAddHandler={this.multipleInputAdd}
          onRemoveHandler={this.multipleInputRemove} />
        <ImageUpload
          handleImageChange={this.onHandleImageChange}
          removeImage={this.onRemoveImageHandler}
          imagePreviewUrl={imagePreviewUrl}
          file={file} />
        <RaisedButton type="submit" label="Submit" />
      </form>
    );
  }
}

export default Form;
