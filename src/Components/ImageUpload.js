import React, {Component} from 'react';
import FontIcon from 'material-ui/FontIcon';

export default class ImageUpload extends Component {
  render() {
    const {removeImage, handleImageChange, file} = this.props;
    let $imagePreview = null;
    if (file.imagePreviewUrl && file.file.type === "image/png") {
      $imagePreview = (
        <div>
          <img src={file.imagePreviewUrl} />
          <FontIcon className="material-icons" onClick={(e) => removeImage()}>remove</FontIcon>
        </div>
      );
    } else {
      $imagePreview = (<div className="previewText">Please select an Image for Preview</div>);
    }

    return (
      <div className="previewComponent">
        <input className="fileInput"
          type="file"
          onChange={(e) => handleImageChange(e)} />
        <div className="imgPreview">
          {$imagePreview}
        </div>
      </div>
    )
  }
}
